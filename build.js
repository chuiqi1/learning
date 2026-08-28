// ============================================================
// 学习工作台构建脚本
// 将黎曼几何和代数拓扑数据组装为单文件HTML学习工作台
// 运行: node /workspace/learning-workbench/build.js
// ============================================================

const fs = require('fs');
const path = require('path');

// ---- 加载数据 ----
const riemann = require('./data-riemann.js');
const topo = require('./data-topo.js');
const riemannExtraQuiz = require('./data-riemann-quiz.js');
const topoExtraQuiz = require('./data-topo-quiz.js');

console.log(`Loading data: Riemann (${riemann.chapters.length} chapters, ${riemann.nodes.length} nodes, ${riemann.edges.length} edges, ${riemann.quizzes.length} quizzes + ${riemannExtraQuiz.length} extra)`);
console.log(`Loading data: Topo (${topo.chapters.length} chapters, ${topo.nodes.length} nodes, ${topo.edges.length} edges, ${topo.quizzes.length} quizzes + ${topoExtraQuiz.length} extra)`);

// ---- 构建学科数据 ----
const subjects = [
  {
    id: 'riemann',
    name: '黎曼几何',
    en: 'Riemannian Geometry',
    shortName: '黎曼',
    color: '#2563eb',
    data: riemann,
    nodePrefix: 'r'
  },
  {
    id: 'topo',
    name: '代数拓扑',
    en: 'Algebraic Topology',
    shortName: '拓扑',
    color: '#dc2626',
    data: topo,
    nodePrefix: 't'
  }
];

// ---- 为所有节点分配学科标记 ----
const allNodes = [];
const allEdges = [];
const allQuizzes = [];
const allChapters = [];

subjects.forEach(subj => {
  subj.data.nodes.forEach(n => {
    allNodes.push({ ...n, subject: subj.id });
  });
  subj.data.edges.forEach(e => {
    allEdges.push({ ...e });
  });
  subj.data.quizzes.forEach(q => {
    allQuizzes.push({ ...q, subject: subj.id });
  });
  // Merge extra quizzes
  if (subj.id === 'riemann') {
    riemannExtraQuiz.forEach(q => {
      allQuizzes.push({ ...q, subject: subj.id });
    });
  } else if (subj.id === 'topo') {
    topoExtraQuiz.forEach(q => {
      allQuizzes.push({ ...q, subject: subj.id });
    });
  }
  subj.data.chapters.forEach(c => {
    allChapters.push({ ...c, subject: subj.id });
  });
});

console.log(`Total: ${allChapters.length} chapters, ${allNodes.length} nodes, ${allEdges.length} edges, ${allQuizzes.length} quizzes`);

// ---- 章节颜色映射 ----
const chapterColors = {
  // 黎曼
  'ch1': '#2563eb', 'ch2': '#7c3aed', 'ch3': '#db2777', 'ch4': '#ea580c', 'ch5': '#65a30d',
  'ch6': '#0891b2', 'ch7': '#4f46e5', 'ch8': '#b91c1c', 'ch9': '#c026d3', 'ch10': '#0d9488',
  // 拓扑
  'ch1_t': '#dc2626', 'ch2_t': '#d97706', 'ch3_t': '#059669', 'ch4_t': '#7c3aed'
};

// ---- 为拓扑章节重新映射ID ----
allChapters.forEach(c => {
  if (c.subject === 'topo') {
    c.colorKey = c.id + '_t';
  } else {
    c.colorKey = c.id;
  }
});

// ---- 构建节点形状大小映射 ----
function getNodeSize(node) {
  const layer = node.layer || 2;
  // 重要性: layer越低越基础, 越大
  const base = 12 - layer * 1.5;
  return Math.max(5, Math.min(14, base));
}

// ---- 章节颜色 ----
const CH_COLORS = [
  '#2563eb', '#7c3aed', '#db2777', '#ea580c', '#65a30d',
  '#0891b2', '#4f46e5', '#b91c1c', '#c026d3', '#0d9488',
  '#dc2626', '#d97706', '#059669', '#9333ea'
];

// ---- 构建HTML ----
function buildHTML() {
  const nodesJSON = JSON.stringify(allNodes);
  const edgesJSON = JSON.stringify(allEdges);
  const quizzesJSON = JSON.stringify(allQuizzes);
  const chaptersJSON = JSON.stringify(allChapters);
  const subjectsJSON = JSON.stringify(subjects);
  const chColorsJSON = JSON.stringify(CH_COLORS);

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>黎曼几何 & 代数拓扑 学习工作台</title>
<script src="https://d3js.org/d3.v7.min.js"></script>
<style>
/* ============================================================
   CSS Variables & Reset
   ============================================================ */
:root {
  --bg: #f8fafc;
  --bg-card: #ffffff;
  --bg-sidebar: #f1f5f9;
  --text: #1e293b;
  --text-secondary: #64748b;
  --text-muted: #94a3b8;
  --border: #e2e8f0;
  --border-light: #f1f5f9;
  --accent: #2563eb;
  --accent-light: #dbeafe;
  --accent-hover: #1d4ed8;
  --danger: #dc2626;
  --success: #16a34a;
  --warning: #d97706;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);
  --radius: 8px;
  --radius-lg: 12px;
  --radius-sm: 6px;
  --transition: 0.2s ease;
  --sidebar-width: 280px;
  --detail-width: 380px;
  --header-height: 52px;
  --quiz-height: 320px;
  --font: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ============================================================
   Header
   ============================================================ */
.header {
  height: var(--header-height);
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
  z-index: 100;
  box-shadow: var(--shadow-sm);
}
.header h1 {
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  background: linear-gradient(135deg, var(--accent), #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.header .subject-tabs {
  display: flex;
  gap: 4px;
  margin-left: 16px;
}
.header .subject-tab {
  padding: 6px 14px;
  border-radius: var(--radius-sm);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-secondary);
  transition: all var(--transition);
}
.header .subject-tab:hover { background: var(--accent-light); color: var(--accent); }
.header .subject-tab.active { background: var(--accent); color: #fff; border-color: var(--accent); }
.header .search-box {
  margin-left: auto;
  position: relative;
}
.header .search-box input {
  width: 220px;
  padding: 6px 12px 6px 32px;
  border: 1px solid var(--border);
  border-radius: 20px;
  font-size: 13px;
  font-family: var(--font);
  outline: none;
  transition: all var(--transition);
  background: var(--bg);
}
.header .search-box input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
  width: 280px;
}
.header .search-box .search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: 14px;
}
.header .btn-icon {
  width: 34px;
  height: 34px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--text-secondary);
  transition: all var(--transition);
}
.header .btn-icon:hover { background: var(--accent-light); color: var(--accent); }
.header .progress-info {
  font-size: 12px;
  color: var(--text-muted);
  margin-left: 8px;
}

/* ============================================================
   Main Layout
   ============================================================ */
.main {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* ============================================================
   Sidebar
   ============================================================ */
.sidebar {
  width: var(--sidebar-width);
  min-width: var(--sidebar-width);
  background: var(--bg-sidebar);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all var(--transition);
}
.sidebar.collapsed { width: 0; min-width: 0; border-right: none; }
.sidebar-header {
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}
.subject-group { margin-bottom: 12px; }
.subject-group-title {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 6px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: var(--radius-sm);
  transition: all var(--transition);
}
.subject-group-title:hover { background: var(--border); }
.subject-group-title .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.chapter-item {
  padding: 8px 12px 8px 24px;
  font-size: 13px;
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: all var(--transition);
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  position: relative;
}
.chapter-item:hover { background: var(--border); color: var(--text); }
.chapter-item.active { background: var(--accent-light); color: var(--accent); font-weight: 600; }
.chapter-item .ch-indicator {
  width: 4px;
  height: 16px;
  border-radius: 2px;
  flex-shrink: 0;
}
.chapter-item .ch-count {
  margin-left: auto;
  font-size: 11px;
  color: var(--text-muted);
  background: var(--bg);
  padding: 1px 6px;
  border-radius: 10px;
}

/* ============================================================
   Graph Area
   ============================================================ */
.graph-area {
  flex: 1;
  position: relative;
  overflow: hidden;
  background: var(--bg);
}
.graph-area svg {
  width: 100%;
  height: 100%;
  cursor: grab;
}
.graph-area svg:active { cursor: grabbing; }
.graph-legend {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 10px 14px;
  font-size: 11px;
  box-shadow: var(--shadow);
  display: none;
}
.graph-hint {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: var(--text-muted);
  pointer-events: none;
}

/* Link styles */
.link {
  stroke: #cbd5e1;
  stroke-opacity: 0.7;
  stroke-width: 1.5;
}
.link.dimmed { stroke-opacity: 0.1; }
.link.highlighted { stroke: var(--accent); stroke-opacity: 0.8; stroke-width: 2.5; }

/* Node styles */
.node circle {
  stroke: #fff;
  stroke-width: 2;
  cursor: pointer;
  transition: all 0.2s ease;
}
.node circle:hover { stroke-width: 3; filter: brightness(0.9); }
.node circle.dimmed { opacity: 0.2; }
.node circle.highlighted { stroke: var(--accent); stroke-width: 3; filter: drop-shadow(0 0 4px rgba(37,99,235,0.5)); }
.node circle.searched { animation: pulse 1.5s ease-in-out infinite; }
.node text {
  font-family: var(--font);
  font-size: 10px;
  pointer-events: none;
  fill: var(--text);
  text-anchor: middle;
}
.node text.dimmed { opacity: 0.15; }
.node text.highlighted { fill: var(--accent); font-weight: 700; }

@keyframes pulse {
  0%, 100% { stroke-width: 3; }
  50% { stroke-width: 5; }
}

/* ============================================================
   Detail Panel
   ============================================================ */
.detail-panel {
  width: 0;
  overflow: hidden;
  background: var(--bg-card);
  border-left: 1px solid var(--border);
  transition: width var(--transition);
  display: flex;
  flex-direction: column;
}
.detail-panel.open { width: var(--detail-width); min-width: var(--detail-width); }
.detail-header {
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.detail-header h3 {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
}
.detail-header .close-btn {
  width: 28px;
  height: 28px;
  border: none;
  background: var(--bg);
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
}
.detail-header .close-btn:hover { background: #fee2e2; color: var(--danger); }
.detail-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  white-space: pre-wrap;
}
.detail-body .section {
  margin-bottom: 16px;
}
.detail-body .section-title {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--border-light);
}
.detail-body .section-content {
  font-size: 13px;
  line-height: 1.7;
  color: var(--text);
}
.detail-body .tag {
  display: inline-block;
  padding: 2px 8px;
  background: var(--accent-light);
  color: var(--accent);
  border-radius: 10px;
  font-size: 11px;
  margin: 2px 4px 2px 0;
  font-weight: 500;
}
.detail-body .svg-chart {
  margin: 10px 0;
  max-width: 100%;
  background: var(--bg);
  border-radius: var(--radius);
  padding: 8px;
  display: flex;
  justify-content: center;
}
.detail-body .svg-chart svg {
  max-width: 220px;
  max-height: 220px;
}
.detail-body .example-item {
  padding: 8px 12px;
  background: var(--bg);
  border-radius: var(--radius-sm);
  margin-bottom: 6px;
  border-left: 3px solid var(--accent);
}
.detail-body .example-item .ex-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
}
.detail-body .example-item .ex-content {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 2px;
}
.detail-body .theorem-item {
  padding: 8px 12px;
  background: #fefce8;
  border-radius: var(--radius-sm);
  margin-bottom: 6px;
  border-left: 3px solid var(--warning);
}
.detail-body .theorem-item .th-name {
  font-size: 12px;
  font-weight: 700;
  color: var(--warning);
}
.detail-body .theorem-item .th-statement {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 2px;
  font-style: italic;
}
.detail-body .th-proof {
  margin-top: 6px;
  padding: 8px 10px;
  background: #fffbeb;
  border-radius: var(--radius-sm);
  font-size: 12px;
  color: #92400e;
  line-height: 1.6;
  border: 1px solid #fde68a;
}
.detail-body .th-proof-label {
  font-weight: 700;
  font-size: 11px;
  color: #b45309;
  background: #fef3c7;
  padding: 1px 6px;
  border-radius: 4px;
  margin-right: 4px;
}
.detail-body .ref-item {
  font-size: 11px;
  color: var(--text-muted);
  padding: 2px 8px;
  background: var(--bg);
  border-radius: 4px;
  display: inline-block;
  margin: 2px 4px 2px 0;
}

/* ============================================================
   Quiz Panel
   ============================================================ */
.quiz-panel {
  height: var(--quiz-height);
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transition: height var(--transition);
}
.quiz-panel.collapsed { height: 0; overflow: hidden; border-top: none; }
.quiz-header {
  padding: 8px 16px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.quiz-header .quiz-toggle {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  transition: all var(--transition);
}
.quiz-header .quiz-toggle:hover { background: var(--border); }
.quiz-tabs {
  display: flex;
  gap: 2px;
  overflow-x: auto;
  flex: 1;
}
.quiz-tab {
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  border-radius: var(--radius-sm);
  white-space: nowrap;
  border: 1px solid transparent;
  color: var(--text-secondary);
  background: transparent;
  transition: all var(--transition);
  font-family: var(--font);
}
.quiz-tab:hover { background: var(--border); }
.quiz-tab.active { background: var(--accent); color: #fff; border-color: var(--accent); }
.quiz-filter {
  display: flex;
  gap: 4px;
  align-items: center;
}
.quiz-filter select {
  padding: 4px 8px;
  font-size: 11px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-family: var(--font);
  outline: none;
}
.quiz-body {
  flex: 1;
  overflow-y: auto;
  padding: 12px 16px;
}
.quiz-question {
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: all var(--transition);
}
.quiz-question.correct { border-color: var(--success); background: #f0fdf4; }
.quiz-question.wrong { border-color: var(--danger); background: #fef2f2; }
.quiz-question .q-text {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
}
.quiz-question .q-options { display: flex; flex-wrap: wrap; gap: 6px; }
.quiz-question .q-option {
  padding: 6px 12px;
  font-size: 12px;
  border: 1px solid var(--border);
  border-radius: 20px;
  cursor: pointer;
  transition: all var(--transition);
  background: var(--bg);
  font-family: var(--font);
}
.quiz-question .q-option:hover { border-color: var(--accent); background: var(--accent-light); }
.quiz-question .q-option.selected { background: var(--accent); color: #fff; border-color: var(--accent); }
.quiz-question .q-option.correct-answer { background: var(--success); color: #fff; border-color: var(--success); }
.quiz-question .q-option.wrong-answer { background: var(--danger); color: #fff; border-color: var(--danger); }
.quiz-question .q-explanation {
  margin-top: 8px;
  padding: 8px 12px;
  font-size: 12px;
  background: var(--bg);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  display: none;
  line-height: 1.5;
}
.quiz-question .q-explanation.show { display: block; }
.quiz-question .q-difficulty {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 4px;
}
.quiz-question .q-difficulty.easy { background: #dcfce7; color: #16a34a; }
.quiz-question .q-difficulty.medium { background: #fef3c7; color: #d97706; }
.quiz-question .q-difficulty.hard { background: #fee2e2; color: #dc2626; }

/* ============================================================
   Responsive
   ============================================================ */
@media (max-width: 768px) {
  .sidebar { width: 0; min-width: 0; border-right: none; }
  .sidebar.mobile-open { width: var(--sidebar-width); min-width: var(--sidebar-width); border-right: 1px solid var(--border); position: absolute; top: var(--header-height); left: 0; bottom: 0; z-index: 50; }
  .detail-panel.open { width: 100%; min-width: 100%; position: absolute; top: var(--header-height); right: 0; bottom: 0; z-index: 50; }
  .header .search-box input { width: 140px; }
  .header .search-box input:focus { width: 180px; }
  .header h1 { font-size: 13px; }
  .graph-hint { font-size: 10px; }
}

/* Scrollbar */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
</style>
</head>
<body>

<!-- Header -->
<div class="header">
  <button class="btn-icon" id="btn-sidebar" title="章节列表">&#9776;</button>
  <h1>学习工作台</h1>
  <div class="subject-tabs" id="subject-tabs">
    <button class="subject-tab active" data-subject="all">全部</button>
    <button class="subject-tab" data-subject="riemann">黎曼几何</button>
    <button class="subject-tab" data-subject="topo">代数拓扑</button>
  </div>
  <div class="search-box">
    <span class="search-icon">&#128269;</span>
    <input type="text" id="search-input" placeholder="搜索知识点...">
  </div>
  <select id="layer-filter" style="padding:4px 8px;font-size:12px;border:1px solid var(--border);border-radius:16px;background:var(--bg);font-family:var(--font);outline:none;cursor:pointer;margin-left:4px">
    <option value="all">全部层级</option>
    <option value="0-1">基础入门 (Layer 0-1)</option>
    <option value="0-2">进阶学习 (Layer 0-2)</option>
    <option value="0-3">深入学习 (Layer 0-3)</option>
    <option value="0-4">全部掌握 (Layer 0-4)</option>
  </select>
  <span class="progress-info" id="progress-info">已读: 0/${allNodes.length}</span>
</div>

<!-- Main Layout -->
<div class="main">
  <!-- Sidebar -->
  <div class="sidebar" id="sidebar">
    <div class="sidebar-header">
      <span>章节导航</span>
      <span style="font-size:11px;cursor:pointer" id="clear-filter">清除筛选</span>
    </div>
    <div class="sidebar-list" id="sidebar-list"></div>
  </div>

  <!-- Graph Area -->
  <div class="graph-area" id="graph-area">
    <svg id="graph-svg"></svg>
    <div class="graph-hint">&#128269; 滚轮缩放 &nbsp;|&nbsp; 拖拽平移 &nbsp;|&nbsp; 点击节点查看详情</div>
  </div>

  <!-- Detail Panel -->
  <div class="detail-panel" id="detail-panel">
    <div class="detail-header">
      <h3 id="detail-title"></h3>
      <button class="close-btn" id="detail-close">&times;</button>
    </div>
    <div class="detail-body" id="detail-body"></div>
  </div>
</div>

<!-- Quiz Panel -->
<div class="quiz-panel" id="quiz-panel">
  <div class="quiz-header">
    <span class="quiz-toggle" id="quiz-toggle">&#9660; 测验</span>
    <div class="quiz-tabs" id="quiz-tabs"></div>
    <div class="quiz-filter">
      <select id="quiz-difficulty">
        <option value="all">全部难度</option>
        <option value="easy">简单</option>
        <option value="medium">中等</option>
        <option value="hard">困难</option>
      </select>
    </div>
  </div>
  <div class="quiz-body" id="quiz-body"></div>
</div>

<!-- ============================================================
     Inline Data
     ============================================================ -->
<script>
const ALL_NODES = ${nodesJSON};
const ALL_EDGES = ${edgesJSON};
const ALL_QUIZZES = ${quizzesJSON};
const ALL_CHAPTERS = ${chaptersJSON};
const SUBJECTS = ${subjectsJSON};
const CH_COLORS = ${chColorsJSON};
</script>

<!-- ============================================================
     Application Logic
     ============================================================ -->
<script>
(function() {
  'use strict';

  // ---- State ----
  let activeSubject = 'all';
  let activeChapter = null;
  let activeNode = null;
  let searchTerm = '';
  let quizChapter = null;
  let quizDifficulty = 'all';
  let quizCollapsed = false;
  let sidebarCollapsed = false;
  let layerFilter = 'all';
  let readNodes = loadProgress();

  // ---- Progress ----
  const STORAGE_KEY = 'learning-workbench-progress';

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(readNodes));
    } catch (e) { /* ignore */ }
  }

  function markRead(nodeId) {
    if (!readNodes[nodeId]) {
      readNodes[nodeId] = Date.now();
      saveProgress();
      updateProgress();
    }
  }

  function updateProgress() {
    const count = Object.keys(readNodes).filter(k => ALL_NODES.some(n => n.id === k)).length;
    document.getElementById('progress-info').textContent = '已读: ' + count + '/' + ALL_NODES.length;
  }

  // ---- Filter nodes by subject ----
  function filterBySubject(nodes) {
    if (activeSubject === 'all') return nodes;
    return nodes.filter(n => n.subject === activeSubject);
  }

  // ---- Filter nodes by chapter ----
  function filterByChapter(nodes) {
    if (!activeChapter) return nodes;
    return nodes.filter(n => {
      const ch = ALL_CHAPTERS.find(c => c.id === n.chapter && c.subject === n.subject);
      return ch && (ch.id + (ch.subject === 'topo' ? '_t' : '') === activeChapter ||
                    ch.id === activeChapter);
    });
  }

  // ---- Chapter color ----
  function getChapterColor(node) {
    const ch = ALL_CHAPTERS.find(c => c.id === node.chapter && c.subject === node.subject);
    if (!ch) return '#94a3b8';
    const key = ch.subject === 'topo' ? ch.id + '_t' : ch.id;
    const idx = ALL_CHAPTERS.findIndex(c => {
      const k = c.subject === 'topo' ? c.id + '_t' : c.id;
      return k === key;
    });
    return CH_COLORS[idx % CH_COLORS.length] || '#94a3b8';
  }

  // ---- Node size ----
  function getNodeSize(node) {
    const layer = node.layer || 2;
    const base = 14 - layer * 1.8;
    return Math.max(5, Math.min(14, base));
  }

  // ---- Graph rendering ----
  const graphArea = document.getElementById('graph-area');
  const svg = d3.select('#graph-svg');
  const width = () => graphArea.clientWidth;
  const height = () => graphArea.clientHeight;

  // Create SVG groups
  const g = svg.append('g');
  const linkGroup = g.append('g').attr('class', 'links');
  const nodeGroup = g.append('g').attr('class', 'nodes');

  // Zoom behavior
  const zoom = d3.zoom()
    .scaleExtent([0.2, 4])
    .on('zoom', (event) => { g.attr('transform', event.transform); });
  svg.call(zoom);

  // Force simulation
  let simulation;

  function initGraph() {
    let nodes = ALL_NODES.map(n => ({ ...n }));
    let links = ALL_EDGES.map(e => ({ ...e }));

    // Filter by layer
    if (layerFilter !== 'all') {
      const [minL, maxL] = layerFilter.split('-').map(Number);
      const filteredIds = new Set(nodes.filter(n => n.layer >= minL && n.layer <= maxL).map(n => n.id));
      nodes = nodes.filter(n => filteredIds.has(n.id));
      links = links.filter(e => filteredIds.has(e.source) && filteredIds.has(e.target));
    }

    // Clear
    linkGroup.selectAll('*').remove();
    nodeGroup.selectAll('*').remove();

    const w = width();
    const h = height();

    simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(80))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(w / 2, h / 2))
      .force('collision', d3.forceCollide().radius(d => getNodeSize(d) + 4))
      .force('y', d3.forceY().y(d => {
        // Layer-based y positioning: layer 0 at top, layer 4 at bottom
        const layer = d.layer || 2;
        const topMargin = 80;
        const bottomMargin = 80;
        const layerHeight = (h - topMargin - bottomMargin) / 5;
        return topMargin + layer * layerHeight + layerHeight / 2;
      }).strength(0.5))
      .force('x', d3.forceX(w / 2).strength(0.05));

    // Draw links
    const link = linkGroup.selectAll('line')
      .data(links)
      .join('line')
      .attr('class', 'link')
      .attr('stroke', '#cbd5e1')
      .attr('stroke-opacity', 0.7)
      .attr('stroke-width', 1.5);

    // Draw nodes
    const node = nodeGroup.selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', 'node')
      .call(d3.drag()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        })
      );

    node.append('circle')
      .attr('r', d => getNodeSize(d))
      .attr('fill', d => getChapterColor(d))
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .on('click', (event, d) => {
        event.stopPropagation();
        showDetail(d);
      })
      .on('mouseenter', function() {
        d3.select(this).attr('stroke-width', 3);
      })
      .on('mouseleave', function() {
        d3.select(this).attr('stroke-width', 2);
      });

    node.append('text')
      .text(d => d.label.length > 6 ? d.label.substring(0, 6) + '..' : d.label)
      .attr('dy', d => -getNodeSize(d) - 6)
      .attr('font-size', 10)
      .attr('fill', '#1e293b')
      .attr('text-anchor', 'middle');

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
      node.attr('transform', d => 'translate(' + d.x + ',' + d.y + ')');
    });

    // Click on background to close detail
    svg.on('click', () => {
      if (d3.event && d3.event.target === svg.node()) {
        closeDetail();
      }
    });
  }

  // ---- Highlight nodes by chapter ----
  function highlightByChapter(chapterKey) {
    const allCircles = nodeGroup.selectAll('circle');
    const allTexts = nodeGroup.selectAll('text');
    const allLinks = linkGroup.selectAll('line');

    if (!chapterKey) {
      allCircles.classed('dimmed', false).classed('highlighted', false);
      allTexts.classed('dimmed', false).classed('highlighted', false);
      allLinks.classed('dimmed', false).classed('highlighted', false);
      return;
    }

    allCircles.classed('dimmed', true).classed('highlighted', false);
    allTexts.classed('dimmed', true).classed('highlighted', false);
    allLinks.classed('dimmed', true).classed('highlighted', false);

    nodeGroup.selectAll('g').each(function(d) {
      const ch = ALL_CHAPTERS.find(c => c.id === d.chapter && c.subject === d.subject);
      if (!ch) return;
      const key = ch.subject === 'topo' ? ch.id + '_t' : ch.id;
      if (key === chapterKey || ch.id === chapterKey) {
        d3.select(this).select('circle').classed('dimmed', false).classed('highlighted', true);
        d3.select(this).select('text').classed('dimmed', false).classed('highlighted', true);
      }
    });

    // Highlight links between highlighted nodes
    linkGroup.selectAll('line').each(function(d) {
      const sCh = ALL_CHAPTERS.find(c => c.id === d.source.chapter && c.subject === d.source.subject);
      const tCh = ALL_CHAPTERS.find(c => c.id === d.target.chapter && c.subject === d.target.subject);
      if (!sCh || !tCh) return;
      const sKey = sCh.subject === 'topo' ? sCh.id + '_t' : sCh.id;
      const tKey = tCh.subject === 'topo' ? tCh.id + '_t' : tCh.id;
      if ((sKey === chapterKey || sCh.id === chapterKey) &&
          (tKey === chapterKey || tCh.id === chapterKey)) {
        d3.select(this).classed('dimmed', false).classed('highlighted', true);
      }
    });
  }

  // ---- Search ----
  function searchNodes(term) {
    const allCircles = nodeGroup.selectAll('circle');
    const allTexts = nodeGroup.selectAll('text');
    const allLinks = linkGroup.selectAll('line');

    if (!term) {
      allCircles.classed('dimmed', false).classed('searched', false).classed('highlighted', false);
      allTexts.classed('dimmed', false).classed('highlighted', false);
      allLinks.classed('dimmed', false).classed('highlighted', false);
      if (activeChapter) highlightByChapter(activeChapter);
      return [];
    }

    const lower = term.toLowerCase();
    const matched = new Set();

    nodeGroup.selectAll('g').each(function(d) {
      const match = d.label.toLowerCase().includes(lower) ||
                    d.desc.toLowerCase().includes(lower) ||
                    d.content.toLowerCase().includes(lower) ||
                    (d.understanding && d.understanding.toLowerCase().includes(lower));
      if (match) {
        matched.add(d.id);
        d3.select(this).select('circle').classed('dimmed', false).classed('searched', true).classed('highlighted', true);
        d3.select(this).select('text').classed('dimmed', false).classed('highlighted', true);
      } else {
        d3.select(this).select('circle').classed('dimmed', true).classed('searched', false).classed('highlighted', false);
        d3.select(this).select('text').classed('dimmed', true).classed('highlighted', false);
      }
    });

    allLinks.classed('dimmed', true).classed('highlighted', false);
    linkGroup.selectAll('line').each(function(d) {
      if (matched.has(d.source.id) || matched.has(d.target.id)) {
        d3.select(this).classed('dimmed', false).classed('highlighted', true);
      }
    });

    return Array.from(matched);
  }

  // ---- Detail Panel ----
  function showDetail(node) {
    activeNode = node;
    markRead(node.id);

    const panel = document.getElementById('detail-panel');
    const title = document.getElementById('detail-title');
    const body = document.getElementById('detail-body');

    const ch = ALL_CHAPTERS.find(c => c.id === node.chapter && c.subject === node.subject);
    const chName = ch ? ch.title : node.chapter;

    title.textContent = node.label;

    let html = '';

    // Tags
    html += '<div class="section">';
    html += '<span class="tag">' + (node.subject === 'riemann' ? '黎曼几何' : '代数拓扑') + '</span>';
    html += '<span class="tag">' + chName + '</span>';
    html += '<span class="tag">Layer ' + (node.layer || '?') + '</span>';
    if (readNodes[node.id]) {
      html += '<span class="tag" style="background:#dcfce7;color:#16a34a;">已读</span>';
    }
    html += '</div>';

    // SVG chart
    if (node.svg) {
      html += '<div class="section"><div class="section-title">示意图</div>';
      html += '<div class="svg-chart">' + node.svg + '</div></div>';
    }

    // Description
    html += '<div class="section"><div class="section-title">描述</div>';
    html += '<div class="section-content">' + (node.desc || '') + '</div></div>';

    // Content
    html += '<div class="section"><div class="section-title">详细内容</div>';
    html += '<div class="section-content">' + (node.content || '') + '</div></div>';

    // Understanding
    if (node.understanding) {
      html += '<div class="section"><div class="section-title">通俗理解</div>';
      html += '<div class="section-content">' + node.understanding + '</div></div>';
    }

    // Examples
    if (node.examples && node.examples.length > 0) {
      html += '<div class="section"><div class="section-title">例子</div>';
      node.examples.forEach(ex => {
        html += '<div class="example-item"><div class="ex-title">' + ex.title + '</div>';
        html += '<div class="ex-content">' + ex.content + '</div></div>';
      });
      html += '</div>';
    }

    // Theorems
    if (node.theorems && node.theorems.length > 0) {
      html += '<div class="section"><div class="section-title">定理与证明</div>';
      node.theorems.forEach((th, thi) => {
        html += '<div class="theorem-item">';
        html += '<div class="th-name">定理 ' + (thi + 1) + ': ' + th.name + '</div>';
        html += '<div class="th-statement">' + th.statement + '</div>';
        if (th.proof) {
          html += '<div class="th-proof"><span class="th-proof-label">证明概要</span> ' + th.proof + '</div>';
        }
        html += '</div>';
      });
      html += '</div>';
    }

    // Applications
    if (node.applications) {
      html += '<div class="section"><div class="section-title">应用</div>';
      html += '<div class="section-content">' + node.applications + '</div></div>';
    }

    // References
    if (node.refs) {
      html += '<div class="section"><div class="section-title">教材引用</div>';
      const refs = Array.isArray(node.refs) ? node.refs : [node.refs];
      refs.forEach(ref => {
        html += '<span class="ref-item">' + (ref.book || '') + ' ' + (ref.ch || '') + ' ' + (ref.sec || '') + '</span>';
      });
      html += '</div>';
    }

    body.innerHTML = html;
    panel.classList.add('open');
  }

  function closeDetail() {
    activeNode = null;
    document.getElementById('detail-panel').classList.remove('open');
  }

  document.getElementById('detail-close').addEventListener('click', closeDetail);

  // ---- Sidebar ----
  function renderSidebar() {
    const list = document.getElementById('sidebar-list');
    let html = '';

    subjects.forEach(subj => {
      const chapters = ALL_CHAPTERS.filter(c => c.subject === subj.id);
      const nodeCount = ALL_NODES.filter(n => n.subject === subj.id).length;

      html += '<div class="subject-group">';
      html += '<div class="subject-group-title" data-subject="' + subj.id + '">';
      html += '<span class="dot" style="background:' + subj.color + '"></span>';
      html += subj.name + ' <span style="font-size:10px;color:var(--text-muted)">(' + nodeCount + ')</span>';
      html += '</div>';

      chapters.forEach(ch => {
        const key = ch.subject === 'topo' ? ch.id + '_t' : ch.id;
        const chNodes = ALL_NODES.filter(n => n.chapter === ch.id && n.subject === ch.subject);
        const isActive = activeChapter === key;
        const color = CH_COLORS[ALL_CHAPTERS.findIndex(c => {
          const k = c.subject === 'topo' ? c.id + '_t' : c.id;
          return k === key;
        }) % CH_COLORS.length] || '#94a3b8';

        html += '<div class="chapter-item' + (isActive ? ' active' : '') + '" data-chapter="' + key + '">';
        html += '<span class="ch-indicator" style="background:' + color + '"></span>';
        html += ch.title;
        html += '<span class="ch-count">' + chNodes.length + '</span>';
        html += '</div>';
      });

      html += '</div>';
    });

    list.innerHTML = html;

    // Click handlers
    list.querySelectorAll('.chapter-item').forEach(item => {
      item.addEventListener('click', () => {
        const chKey = item.dataset.chapter;
        if (activeChapter === chKey) {
          activeChapter = null;
        } else {
          activeChapter = chKey;
        }
        highlightByChapter(activeChapter);
        renderSidebar();
        renderQuizTabs();
        renderQuiz();
      });
    });

    list.querySelectorAll('.subject-group-title').forEach(title => {
      title.addEventListener('click', () => {
        const subjId = title.dataset.subject;
        document.querySelectorAll('.subject-tab').forEach(t => {
          t.classList.toggle('active', t.dataset.subject === subjId);
        });
        setSubject(subjId);
      });
    });
  }

  // ---- Subject switching ----
  function setSubject(subjId) {
    activeSubject = subjId;
    activeChapter = null;
    searchTerm = '';
    document.getElementById('search-input').value = '';
    document.querySelectorAll('.subject-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.subject === subjId);
    });
    highlightByChapter(null);
    searchNodes('');
    renderSidebar();
    renderQuizTabs();
    renderQuiz();
    closeDetail();
    updateProgress();
  }

  document.querySelectorAll('.subject-tab').forEach(tab => {
    tab.addEventListener('click', () => setSubject(tab.dataset.subject));
  });

  document.getElementById('clear-filter').addEventListener('click', () => {
    activeChapter = null;
    highlightByChapter(null);
    renderSidebar();
  });

  // ---- Search ----
  document.getElementById('search-input').addEventListener('input', (e) => {
    searchTerm = e.target.value.trim();
    const results = searchNodes(searchTerm);
    if (results.length === 1) {
      // Auto-select single result
      const node = ALL_NODES.find(n => n.id === results[0]);
      if (node) showDetail(node);
    }
  });

  // ---- Sidebar toggle ----
  document.getElementById('btn-sidebar').addEventListener('click', () => {
    sidebarCollapsed = !sidebarCollapsed;
    document.getElementById('sidebar').classList.toggle('collapsed', sidebarCollapsed);
    setTimeout(() => {
      simulation.force('center', d3.forceCenter(width() / 2, height() / 2));
      simulation.alpha(0.3).restart();
    }, 300);
  });

  // ---- Quiz ----
  function renderQuizTabs() {
    const tabs = document.getElementById('quiz-tabs');
    let chapters = ALL_CHAPTERS;
    if (activeSubject !== 'all') {
      chapters = chapters.filter(c => c.subject === activeSubject);
    }

    let html = '<button class="quiz-tab' + (!quizChapter ? ' active' : '') + '" data-chapter="">全部</button>';
    chapters.forEach(ch => {
      const key = ch.subject === 'topo' ? ch.id + '_t' : ch.id;
      const isActive = quizChapter === key;
      html += '<button class="quiz-tab' + (isActive ? ' active' : '') + '" data-chapter="' + key + '">' + ch.title + '</button>';
    });
    tabs.innerHTML = html;

    tabs.querySelectorAll('.quiz-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        quizChapter = tab.dataset.chapter || null;
        renderQuizTabs();
        renderQuiz();
      });
    });
  }

  function renderQuiz() {
    const body = document.getElementById('quiz-body');
    let quizzes = ALL_QUIZZES;

    // Filter by subject
    if (activeSubject !== 'all') {
      quizzes = quizzes.filter(q => q.subject === activeSubject);
    }

    // Filter by chapter
    if (quizChapter) {
      quizzes = quizzes.filter(q => {
        const ch = ALL_CHAPTERS.find(c => c.id === q.chapter && c.subject === q.subject);
        if (!ch) return false;
        const key = ch.subject === 'topo' ? ch.id + '_t' : ch.id;
        return key === quizChapter || ch.id === quizChapter;
      });
    }

    // Filter by difficulty
    if (quizDifficulty !== 'all') {
      quizzes = quizzes.filter(q => q.difficulty === quizDifficulty);
    }

    if (quizzes.length === 0) {
      body.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted)">暂无匹配的测验题</div>';
      return;
    }

    let html = '';
    quizzes.forEach((q, idx) => {
      const diffLabel = { easy: '简单', medium: '中等', hard: '困难' }[q.difficulty] || q.difficulty;
      html += '<div class="quiz-question" data-idx="' + idx + '">';
      html += '<span class="q-difficulty ' + q.difficulty + '">' + diffLabel + '</span>';
      html += '<div class="q-text">' + (idx + 1) + '. ' + q.q + '</div>';
      html += '<div class="q-options">';
      q.options.forEach((opt, oi) => {
        html += '<button class="q-option" data-answer="' + oi + '">' + String.fromCharCode(65 + oi) + '. ' + opt + '</button>';
      });
      html += '</div>';
      html += '<div class="q-explanation">' + (q.explanation || '') + '</div>';
      html += '</div>';
    });

    body.innerHTML = html;

    // Click handlers
    body.querySelectorAll('.q-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const question = btn.closest('.quiz-question');
        const idx = parseInt(question.dataset.idx);
        const q = quizzes[idx];
        const selectedAnswer = parseInt(btn.dataset.answer);

        // Prevent re-selection
        if (question.querySelector('.q-option.correct-answer') || question.querySelector('.q-option.wrong-answer')) return;

        // Mark all options
        question.querySelectorAll('.q-option').forEach(opt => {
          const ans = parseInt(opt.dataset.answer);
          if (ans === q.answer) {
            opt.classList.add('correct-answer');
          }
          if (ans === selectedAnswer && ans !== q.answer) {
            opt.classList.add('wrong-answer');
          }
          opt.style.pointerEvents = 'none';
        });

        // Show explanation
        question.querySelector('.q-explanation').classList.add('show');

        // Mark correct/wrong
        if (selectedAnswer === q.answer) {
          question.classList.add('correct');
        } else {
          question.classList.add('wrong');
        }
      });
    });
  }

  document.getElementById('quiz-difficulty').addEventListener('change', (e) => {
    quizDifficulty = e.target.value;
    renderQuiz();
  });

  document.getElementById('quiz-toggle').addEventListener('click', () => {
    quizCollapsed = !quizCollapsed;
    document.getElementById('quiz-panel').classList.toggle('collapsed', quizCollapsed);
    document.getElementById('quiz-toggle').innerHTML = quizCollapsed ? '&#9654; 测验' : '&#9660; 测验';
  });

  // ---- Resize handler ----
  window.addEventListener('resize', () => {
    if (simulation) {
      simulation.force('center', d3.forceCenter(width() / 2, height() / 2));
      simulation.alpha(0.3).restart();
    }
  });

  // ---- Layer filter ----
  document.getElementById('layer-filter').addEventListener('change', (e) => {
    layerFilter = e.target.value;
    initGraph();
    closeDetail();
    updateProgress();
  });

  // ---- Init ----
  function init() {
    initGraph();
    renderSidebar();
    renderQuizTabs();
    renderQuiz();
    updateProgress();
  }

  init();
})();
</script>
</body>
</html>`;
}

// ---- 写入文件 ----
const outputPath = path.join(__dirname, 'learning-workbench.html');
fs.writeFileSync(outputPath, buildHTML(), 'utf-8');
console.log('Build complete: ' + outputPath);
console.log('File size: ' + (fs.statSync(outputPath).size / 1024).toFixed(1) + ' KB');