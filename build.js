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
const riemannBig = require('./data-riemann-big.js');
const topoBig = require('./data-topo-big.js');
const riemannBig2 = require('./data-riemann-big2.js');
const topoBig2 = require('./data-topo-big2.js');
const exampleDetails = require('./example-details.js');
const theoremDetails = require('./theorem-details.js');

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

// ---- 为所有节点/边/章分配学科标记 ----
const allNodes = [];
const allEdges = [];
const allQuizzes = [];
const allChapters = [];

function addQuiz(q, subject) {
  allQuizzes.push({ ...q, subject: subject, type: q.type || 'choice' });
}

subjects.forEach(subj => {
  subj.data.nodes.forEach(n => {
    allNodes.push({ ...n, subject: subj.id });
  });
  subj.data.edges.forEach(e => {
    allEdges.push({ ...e });
  });
  subj.data.quizzes.forEach(q => addQuiz(q, subj.id));
  subj.data.chapters.forEach(c => {
    allChapters.push({ ...c, subject: subj.id });
  });
});

// 合并扩展题库
riemannExtraQuiz.forEach(q => addQuiz(q, 'riemann'));
topoExtraQuiz.forEach(q => addQuiz(q, 'topo'));
riemannBig.forEach(q => addQuiz(q, 'riemann'));
topoBig.forEach(q => addQuiz(q, 'topo'));
riemannBig2.forEach(q => addQuiz(q, 'riemann'));
topoBig2.forEach(q => addQuiz(q, 'topo'));

// ---- 跨学科关联边（黎曼几何 ↔ 代数拓扑）----
const CROSS_EDGES = [
  { source: 'r5',  target: 't16', label: 'Gauss-Bonnet与Euler示性数' },
  { source: 'r42', target: 't10', label: 'Euler示性数' },
  { source: 'r40', target: 't9',  label: '三角剖分' },
  { source: 'r41', target: 't16', label: '总曲率与同调' },
  { source: 'r43', target: 't21', label: '示性类与对偶' },
  { source: 'r1',  target: 't1',  label: '曲线与同伦' },
  { source: 'r34', target: 't25', label: '常曲率与空间分类' }
];
// 只保留两端节点都存在的跨学科边
const nodeIdSet = new Set(allNodes.map(n => n.id));
const validCrossEdges = CROSS_EDGES.filter(e => nodeIdSet.has(e.source) && nodeIdSet.has(e.target));
validCrossEdges.forEach(e => allEdges.push(e));

// ---- 章节颜色映射：统一 key 为 "subject:chapter" ----
const CH_COLORS = [
  '#2563eb', '#7c3aed', '#db2777', '#ea580c', '#65a30d',
  '#0891b2', '#4f46e5', '#b91c1c', '#c026d3', '#0d9488',
  '#dc2626', '#d97706', '#059669', '#9333ea'
];
const CHAPTER_COLORS = {};
allChapters.forEach((ch, idx) => {
  const key = ch.subject + ':' + ch.id;
  CHAPTER_COLORS[key] = CH_COLORS[idx % CH_COLORS.length];
});

// ---- 学习路径生成（按学科→章节→layer 排序）----
function buildLearningPath() {
  const stages = [];
  subjects.forEach(subj => {
    const chapters = allChapters
      .filter(c => c.subject === subj.id)
      .sort((a, b) => parseInt(a.id.replace(/\D/g, ''), 10) - parseInt(b.id.replace(/\D/g, ''), 10));
    chapters.forEach(ch => {
      const nodes = allNodes
        .filter(n => n.subject === subj.id && n.chapter === ch.id)
        .sort((a, b) => (a.layer || 0) - (b.layer || 0));
      stages.push({
        subject: subj.id,
        subjectName: subj.name,
        subjectColor: subj.color,
        chapter: ch.id,
        title: ch.title,
        nodes: nodes.map(n => ({ id: n.id, label: n.label, layer: n.layer || 0 }))
      });
    });
  });
  return stages;
}
const LEARNING_PATH = buildLearningPath();

console.log(`Riemann: ${riemann.chapters.length} chapters, ${riemann.nodes.length} nodes, ${riemann.edges.length} edges, ${riemann.quizzes.length + riemannExtraQuiz.length + riemannBig.length + riemannBig2.length} quizzes`);
console.log(`Topo: ${topo.chapters.length} chapters, ${topo.nodes.length} nodes, ${topo.edges.length} edges, ${topo.quizzes.length + topoExtraQuiz.length + topoBig.length + topoBig2.length} quizzes`);
console.log(`Total: ${allChapters.length} chapters, ${allNodes.length} nodes, ${allEdges.length} edges (含${validCrossEdges.length}条跨学科), ${allQuizzes.length} quizzes`);
console.log(`大题(proof/computation): ${allQuizzes.filter(q => q.type !== 'choice').length}, 选择题: ${allQuizzes.filter(q => q.type === 'choice').length}`);
console.log(`学习路径: ${LEARNING_PATH.length} 个阶段`);

// ---- 数学符号可视化：把 ^ / _ 代码形式转成 <sup>/<sub> ----
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function mathHTML(s) {
  if (typeof s !== 'string' || s.length === 0) return s;
  var t = escapeHtml(s);
  // 1. 花括号形式 x^{...} / x_{...}（最明确，优先处理）
  t = t.replace(/\^\{([^{}]*)\}/g, '<sup>$1</sup>');
  t = t.replace(/_\{([^{}]*)\}/g, '<sub>$1</sub>');
  // 1.5 花括号内嵌方括号（数据中偶有 "σ|_{[v₀,…]}"，内部可能已含 <sub>/<sup> 标签）
  t = t.replace(/\^\{(\[[^\]]*\])\}/g, '<sup>$1</sup>');
  t = t.replace(/_\{(\[[^\]]*\])\}/g, '<sub>$1</sub>');
  // 2. 圆括号形式 x^(...) / x_(...)
  t = t.replace(/\^\(([^()]*)\)/g, '<sup>$1</sup>');
  t = t.replace(/_\(([^()]*)\)/g, '<sub>$1</sub>');
  // 3. 方括号形式 ∇_[X,Y] / σ|_{[v₀,...]}
  t = t.replace(/\^\[([^\[\]]*)\]/g, '<sup>$1</sup>');
  t = t.replace(/_\[([^\[\]]*)\]/g, '<sub>$1</sub>');
  // 4. 汉字形式 _前 / _后 / ^旧 / ^新
  t = t.replace(/\^([\u4e00-\u9fa5]+)/g, '<sup>$1</sup>');
  t = t.replace(/_([\u4e00-\u9fa5]+)/g, '<sub>$1</sub>');
  // 5. 裸形式：^ 与 _ 后跟脚本字符（大小写字母/数字/希腊字母/星号/升降号/偏导/无穷/平行/垂/加/减/井号）
  var SCRIPT = 'a-z0-9A-Zα-ωΑ-Ω*♭♯∂∞#⊤⊥+-';
  t = t.replace(new RegExp('\\^([' + SCRIPT + ']+)', 'g'), '<sup>$1</sup>');
  t = t.replace(new RegExp('_([' + SCRIPT + ']+)', 'g'), '<sub>$1</sub>');
  // 6. 张量指标竖向堆叠：连续的 <sup>…</sup><sub>…</sub>（或反向）合并为上下对齐，如 Γ^k_ij
  t = t.replace(/<sup>([^<]*)<\/sup><sub>([^<]*)<\/sub>/g, '<span class="ts"><span class="ts-top">$1</span><span class="ts-bot">$2</span></span>');
  t = t.replace(/<sub>([^<]*)<\/sub><sup>([^<]*)<\/sup>/g, '<span class="ts"><span class="ts-top">$2</span><span class="ts-bot">$1</span></span>');
  return t;
}

// 对节点与题目的数学字段做渲染转换（不动 svg，svg 需保持原始标签）
function sanitizeData() {
  allNodes.forEach(function (n) {
    ['desc', 'content', 'understanding', 'applications'].forEach(function (k) {
      if (typeof n[k] === 'string') n[k] = mathHTML(n[k]);
    });
    (n.examples || []).forEach(function (ex) {
      if (typeof ex.title === 'string') ex.title = mathHTML(ex.title);
      if (typeof ex.content === 'string') ex.content = mathHTML(ex.content);
      if (typeof ex.detail === 'string') ex.detail = mathHTML(ex.detail);
    });
    (n.theorems || []).forEach(function (th) {
      if (typeof th.name === 'string') th.name = mathHTML(th.name);
      if (typeof th.statement === 'string') th.statement = mathHTML(th.statement);
      if (typeof th.proof === 'string') th.proof = mathHTML(th.proof);
      if (typeof th.detailProof === 'string') th.detailProof = mathHTML(th.detailProof);
    });
  });
  allQuizzes.forEach(function (q) {
    ['q', 'answer', 'explanation'].forEach(function (k) {
      if (typeof q[k] === 'string') q[k] = mathHTML(q[k]);
    });
    if (Array.isArray(q.options)) {
      q.options = q.options.map(function (o) { return mathHTML(o); });
    }
  });
}

// 注入例子“按定义逐步计算”与定理“详细证明”的补充内容
// example-details.js 形如 { "节点id": { "例子序号": "①②③…" }, ... }
(function injectDetails() {
  Object.keys(exampleDetails).forEach(function (nodeId) {
    var node = allNodes.find(function (n) { return n.id === nodeId; });
    if (!node) return;
    var map = exampleDetails[nodeId];
    Object.keys(map).forEach(function (k) {
      if (node.examples && node.examples[k]) node.examples[k].detail = map[k];
    });
  });
  // theorem-details.js 形如 { "节点id": { "定理序号(0起)": "①②③…详细证明" }, ... }
  Object.keys(theoremDetails).forEach(function (nodeId) {
    var node = allNodes.find(function (n) { return n.id === nodeId; });
    if (!node) return;
    var map = theoremDetails[nodeId];
    Object.keys(map).forEach(function (k) {
      if (node.theorems && node.theorems[k]) node.theorems[k].detailProof = map[k];
    });
  });
})();

sanitizeData();

// ---- 构建HTML ----
function buildHTML() {
  const nodesJSON = JSON.stringify(allNodes);
  const edgesJSON = JSON.stringify(allEdges);
  const quizzesJSON = JSON.stringify(allQuizzes);
  const chaptersJSON = JSON.stringify(allChapters);
  const subjectsJSON = JSON.stringify(subjects);
  const chColorsJSON = JSON.stringify(CHAPTER_COLORS);
  const pathJSON = JSON.stringify(LEARNING_PATH);

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
  --riemann: #2563eb;
  --topo: #dc2626;
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
  --quiz-bar-height: 40px;
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
  padding: 0 12px;
  gap: 8px;
  z-index: 100;
  box-shadow: var(--shadow-sm);
}
.header h1 {
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  background: linear-gradient(135deg, var(--accent), #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.btn-icon {
  width: 32px;
  height: 32px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: var(--text-secondary);
  transition: all var(--transition);
  flex-shrink: 0;
}
.btn-icon:hover { background: var(--accent-light); color: var(--accent); }

/* 醒目的学习路径按钮 */
.btn-path {
  display: flex; align-items: center; gap: 5px;
  padding: 0 14px; height: 32px;
  border: none; border-radius: var(--radius-sm);
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: #fff; font-size: 13px; font-weight: 600;
  cursor: pointer; flex-shrink: 0; white-space: nowrap;
  transition: all var(--transition);
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.35);
  animation: pathPulse 2.5s ease-in-out infinite;
}
.btn-path:hover {
  background: linear-gradient(135deg, #4338ca, #6d28d9);
  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.5);
  transform: translateY(-1px);
}
@keyframes pathPulse {
  0%, 100% { box-shadow: 0 2px 8px rgba(79, 70, 229, 0.35); }
  50% { box-shadow: 0 2px 16px rgba(79, 70, 229, 0.6); }
}
@media (max-width: 768px) {
  .btn-path { animation: none; padding: 0 10px; font-size: 12px; }
  .btn-path .btn-path-label { display: none; }
  .btn-path::after { content: '\\01F4DA'; font-size: 16px; }
}

/* 学科多选按钮 */
.subject-toggle {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  border: 1.5px solid var(--border);
  background: var(--bg);
  color: var(--text-secondary);
  transition: all var(--transition);
  white-space: nowrap;
  font-family: var(--font);
}
.subject-toggle:hover { border-color: var(--accent); }
.subject-toggle.riemann.active { background: var(--riemann); color: #fff; border-color: var(--riemann); }
.subject-toggle.topo.active { background: var(--topo); color: #fff; border-color: var(--topo); }
.subject-toggle.merge-btn { background: linear-gradient(135deg, var(--riemann), var(--topo)); color: #fff; border-color: transparent; }
.subject-toggle.merge-btn:hover { opacity: 0.9; border-color: transparent; }

.header .search-box {
  margin-left: auto;
  position: relative;
  flex-shrink: 1;
}
.header .search-box input {
  width: 160px;
  padding: 6px 12px 6px 30px;
  border: 1px solid var(--border);
  border-radius: 20px;
  font-size: 12px;
  font-family: var(--font);
  outline: none;
  transition: all var(--transition);
  background: var(--bg);
}
.header .search-box input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
  width: 220px;
}
.header .search-box .search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: 13px;
}
.header select.layer-filter {
  padding: 5px 8px;
  font-size: 12px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--bg);
  font-family: var(--font);
  outline: none;
  cursor: pointer;
  color: var(--text-secondary);
}
.header .progress-info {
  font-size: 11px;
  color: var(--text-muted);
  white-space: nowrap;
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
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.sidebar-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}
.subject-group { margin-bottom: 12px; }
.subject-group.disabled { opacity: 0.4; pointer-events: none; }
.subject-group-title {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 6px 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: var(--radius-sm);
}
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
.graph-hint {
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: var(--text-muted);
  pointer-events: none;
  background: rgba(255,255,255,0.8);
  padding: 4px 12px;
  border-radius: 16px;
}

.link {
  stroke: #cbd5e1;
  stroke-opacity: 0.55;
  stroke-width: 1.4;
}
.link.cross { stroke: #a855f7; stroke-opacity: 0.7; stroke-width: 2; stroke-dasharray: 5,3; }
.link.dimmed { stroke-opacity: 0.08; }
.link.highlighted { stroke: var(--accent); stroke-opacity: 0.9; stroke-width: 2.5; }

.node circle {
  stroke: #fff;
  stroke-width: 2.2;
  cursor: pointer;
  transition: all 0.2s ease;
}
.node circle:hover { stroke-width: 3.4; filter: brightness(0.9); }
.node circle.dimmed { opacity: 0.15; }
.node circle.highlighted { stroke: var(--accent); stroke-width: 3.5; filter: drop-shadow(0 0 4px rgba(37,99,235,0.5)); }
.node circle.searched { animation: pulse 1.5s ease-in-out infinite; }
.node text {
  font-family: var(--font);
  font-size: 10px;
  pointer-events: none;
  fill: var(--text);
  text-anchor: middle;
}
.node text.dimmed { opacity: 0.1; }
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
.detail-header h3 { font-size: 15px; font-weight: 700; color: var(--text); }
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
.detail-body .section { margin-bottom: 16px; }
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
.detail-body .section-content { font-size: 13px; line-height: 1.7; color: var(--text); }
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
.detail-body .svg-chart svg { max-width: 220px; max-height: 220px; }
.detail-body .example-item {
  padding: 8px 12px;
  background: var(--bg);
  border-radius: var(--radius-sm);
  margin-bottom: 6px;
  border-left: 3px solid var(--accent);
}
.detail-body .example-item .ex-title { font-size: 12px; font-weight: 600; color: var(--text); }
.detail-body .example-item .ex-content { font-size: 12px; color: var(--text-secondary); margin-top: 2px; }
.detail-body .theorem-item {
  padding: 8px 12px;
  background: #fefce8;
  border-radius: var(--radius-sm);
  margin-bottom: 6px;
  border-left: 3px solid var(--warning);
}
.detail-body .theorem-item .th-name { font-size: 12px; font-weight: 700; color: var(--warning); }
.detail-body .theorem-item .th-statement { font-size: 12px; color: var(--text-secondary); margin-top: 2px; font-style: italic; }
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
   学习路径面板
   ============================================================ */
.path-panel {
  position: fixed;
  top: var(--header-height);
  left: 0;
  bottom: 0;
  width: 360px;
  max-width: 90vw;
  background: var(--bg-card);
  z-index: 80;
  box-shadow: var(--shadow-lg);
  transform: translateX(-100%);
  transition: transform 0.25s ease;
  display: flex;
  flex-direction: column;
}
.path-panel.open { transform: translateX(0); }
.path-header {
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background: linear-gradient(135deg, #eff6ff, #fef2f2);
}
.path-header h3 { font-size: 14px; font-weight: 700; }
.path-header .path-desc { font-size: 11px; color: var(--text-secondary); font-weight: 400; margin-top: 2px; }
.path-header .close-btn {
  width: 28px; height: 28px; border: none; background: var(--bg); border-radius: 50%;
  cursor: pointer; font-size: 16px; color: var(--text-secondary);
  display: flex; align-items: center; justify-content: center;
}
.path-header .close-btn:hover { background: #fee2e2; color: var(--danger); }
.path-body { flex: 1; overflow-y: auto; padding: 12px; }
.path-stage {
  margin-bottom: 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}
.path-stage-head {
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--bg-sidebar);
  cursor: pointer;
}
.path-stage-head .stage-num {
  min-width: 22px; height: 22px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; color: #fff; flex-shrink: 0;
}
.path-stage-head .stage-title { flex: 1; }
.path-stage-head .stage-count { font-size: 10px; color: var(--text-muted); font-weight: 400; }
.path-node {
  padding: 6px 12px 6px 20px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  transition: all var(--transition);
  border-top: 1px solid var(--border-light);
}
.path-node:hover { background: var(--accent-light); color: var(--accent); }
.path-node .pn-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; background: #cbd5e1; }
.path-node.read .pn-dot { background: var(--success); }
.path-node.current { background: #fef9c3; color: #854d0e; font-weight: 600; }
.path-node.current .pn-dot { background: var(--warning); width: 8px; height: 8px; }

/* ============================================================
   Quiz Panel
   ============================================================ */
.quiz-panel {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
}
.quiz-bar {
  height: var(--quiz-bar-height);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  flex-shrink: 0;
  background: var(--bg-sidebar);
}
.quiz-bar .quiz-toggle {
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
  border: 1px solid var(--border);
  background: var(--bg-card);
  white-space: nowrap;
  font-family: var(--font);
}
.quiz-bar .quiz-toggle:hover { background: var(--border); }
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
  flex-shrink: 0;
}
.quiz-filter select {
  padding: 4px 6px;
  font-size: 11px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-family: var(--font);
  outline: none;
  background: var(--bg-card);
  color: var(--text-secondary);
}
.quiz-body {
  height: var(--quiz-height);
  overflow-y: auto;
  padding: 12px 16px;
  transition: height var(--transition);
}
.quiz-panel.collapsed .quiz-body { height: 0; padding: 0; }

.quiz-question {
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: all var(--transition);
}
.quiz-question.correct { border-color: var(--success); background: #f0fdf4; }
.quiz-question.wrong { border-color: var(--danger); background: #fef2f2; }
.quiz-question .q-meta { display: flex; gap: 6px; align-items: center; margin-bottom: 6px; flex-wrap: wrap; }
.quiz-question .q-text { font-size: 13px; font-weight: 600; margin-bottom: 8px; line-height: 1.5; }
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
  padding: 8px 0;
  font-size: 12px;
  background: transparent;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  display: none;
  line-height: 1.6;
}
.quiz-question .q-explanation.show { display: block; }
.quiz-question .q-difficulty {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  display: inline-block;
}
.quiz-question .q-difficulty.easy { background: #dcfce7; color: #16a34a; }
.quiz-question .q-difficulty.medium { background: #fef3c7; color: #d97706; }
.quiz-question .q-difficulty.hard { background: #fee2e2; color: #dc2626; }
.quiz-question .q-type {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  display: inline-block;
  background: #ede9fe; color: #6d28d9;
}
.quiz-question .show-answer {
  margin-top: 8px;
  padding: 6px 14px;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid var(--accent);
  border-radius: 16px;
  background: var(--accent);
  color: #fff;
  font-family: var(--font);
  transition: all var(--transition);
}
.quiz-question .show-answer:hover { background: var(--accent-hover); }

.quiz-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 0;
}
.quiz-pagination button {
  padding: 5px 14px;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  color: var(--text-secondary);
  font-family: var(--font);
  transition: all var(--transition);
}
.quiz-pagination button:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
.quiz-pagination button:disabled { opacity: 0.4; cursor: not-allowed; }
.quiz-pagination .page-info { font-size: 12px; color: var(--text-muted); }

/* ============================================================
   数学上下标 & 详情展开 & 弹窗 & 思路
   ============================================================ */
sup, sub { line-height: 0; font-size: 0.72em; }
sup { vertical-align: super; }
sub { vertical-align: sub; }

/* 张量指标上下堆叠（如 Γ^k_ij → 上 k 下 ij） */
.ts {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  font-size: 0.68em;
  line-height: 1.12;
  margin: 0 1px;
}
.ts-top, .ts-bot { display: block; }

/* “查看完整详情”按钮 */
.node-detail-btn {
  display: block;
  width: 100%;
  margin: 0 0 14px;
  padding: 9px 14px;
  font-size: 13px;
  font-weight: 600;
  font-family: var(--font);
  border: 1px solid var(--accent);
  border-radius: var(--radius);
  background: var(--accent);
  color: #fff;
  cursor: pointer;
  transition: all var(--transition);
}
.node-detail-btn:hover { background: var(--accent-hover); }

.detail-header .btn-group { display: flex; gap: 6px; }
.detail-header .expand-btn {
  height: 28px; padding: 0 10px; border: none; background: var(--bg); border-radius: 14px;
  cursor: pointer; font-size: 11px; color: var(--text-secondary);
  display: flex; align-items: center; justify-content: center;
  transition: all var(--transition); white-space: nowrap;
}
.detail-header .expand-btn:hover { background: var(--accent-light); color: var(--accent); }
.detail-panel.expanded {
  position: fixed;
  top: var(--header-height);
  left: 0; right: 0; bottom: 0;
  width: 100% !important;
  min-width: 100% !important;
  z-index: 90;
  border-left: none;
}
.detail-panel.expanded .detail-body { font-size: 15px; }
.detail-panel.expanded .detail-body .section-content,
.detail-panel.expanded .detail-body .th-proof { font-size: 14px; }

/* 学习路径触发的全屏模式 */
.detail-panel.path-fullscreen {
  position: fixed;
  top: var(--header-height);
  left: 0; right: 0; bottom: 0;
  width: 100% !important;
  min-width: 100% !important;
  z-index: 90;
  border-left: none;
  background: var(--bg-card);
}
.detail-panel.path-fullscreen .detail-body { font-size: 15px; }
.detail-panel.path-fullscreen .detail-body .section-content,
.detail-panel.path-fullscreen .detail-body .th-proof { font-size: 14px; }

/* 知识点底部导航按钮 */
.node-nav {
  margin-top: 20px; padding-top: 16px;
  border-top: 2px solid var(--border);
  display: flex; flex-direction: column; gap: 10px;
}
.node-nav-row {
  display: flex; gap: 8px; flex-wrap: wrap;
}
.nav-btn {
  flex: 1; min-width: 120px;
  padding: 10px 14px; border: 1px solid var(--border);
  border-radius: var(--radius); background: var(--bg);
  cursor: pointer; font-size: 13px; color: var(--text);
  display: flex; align-items: center; gap: 6px;
  transition: all var(--transition); text-align: left;
}
.nav-btn:hover { background: var(--accent-light); border-color: var(--accent); color: var(--accent); }
.nav-btn.primary {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: #fff; border: none;
}
.nav-btn.primary:hover {
  background: linear-gradient(135deg, #4338ca, #6d28d9);
  transform: translateY(-1px);
}
.nav-btn .nav-arrow { font-size: 16px; flex-shrink: 0; }
.nav-btn .nav-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.nav-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.nav-btn:disabled:hover { background: var(--bg); border-color: var(--border); color: var(--text); transform: none; }
.nav-related-title {
  font-size: 12px; font-weight: 700; color: var(--text-muted);
  text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;
}
.nav-related-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.nav-chip {
  padding: 5px 12px; border: 1px solid var(--border);
  border-radius: 16px; background: var(--bg);
  cursor: pointer; font-size: 12px; color: var(--text-secondary);
  transition: all var(--transition);
}
.nav-chip:hover { background: var(--accent); color: #fff; border-color: var(--accent); }

.detail-action-btn {
  margin-top: 6px;
  padding: 4px 12px;
  font-size: 11px;
  cursor: pointer;
  border: 1px solid var(--accent);
  border-radius: 14px;
  background: var(--accent-light);
  color: var(--accent);
  font-family: var(--font);
  transition: all var(--transition);
}
.detail-action-btn:hover { background: var(--accent); color: #fff; }
.detail-action-btn.warning { border-color: var(--warning); background: #fef3c7; color: #b45309; }
.detail-action-btn.warning:hover { background: var(--warning); color: #fff; }

/* 弹窗 */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.5);
  z-index: 200;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.modal-overlay.open { display: flex; }
.modal {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  width: min(820px, 100%);
  max-height: 86vh;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}
.modal-header {
  padding: 14px 18px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background: linear-gradient(135deg, #eff6ff, #fef2f2);
}
.modal-header h3 { font-size: 15px; font-weight: 700; }
.modal-header .close-btn {
  width: 28px; height: 28px; border: none; background: var(--bg); border-radius: 50%;
  cursor: pointer; font-size: 16px; color: var(--text-secondary);
  display: flex; align-items: center; justify-content: center;
}
.modal-header .close-btn:hover { background: #fee2e2; color: var(--danger); }
.modal-body { flex: 1; overflow-y: auto; padding: 18px; }
.modal-body .m-section { margin-bottom: 16px; }
.modal-body .m-title {
  font-size: 12px; font-weight: 700; color: var(--text-muted);
  text-transform: uppercase; letter-spacing: 0.5px;
  margin-bottom: 6px; padding-bottom: 4px; border-bottom: 1px solid var(--border-light);
}
.modal-body .m-text { font-size: 14px; line-height: 1.85; color: var(--text); }
.modal-body .m-proof {
  padding: 12px 14px; background: #fffbeb; border: 1px solid #fde68a;
  border-radius: var(--radius-sm); font-size: 14px; line-height: 1.85; color: #92400e;
}
.modal-body .m-tag {
  display: inline-block; padding: 3px 10px; background: var(--accent-light);
  color: var(--accent); border-radius: 12px; font-size: 12px; margin: 2px 5px 2px 0;
  cursor: pointer; transition: all var(--transition);
}
.modal-body .m-tag:hover { background: var(--accent); color: #fff; }
.modal-body .m-tag.warning { background: #fef3c7; color: #b45309; }
.modal-body .m-tag.warning:hover { background: var(--warning); color: #fff; }

/* 思路 / 解答 */
.idea-box {
  margin-bottom: 8px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--border);
}
.idea-box .idea-label {
  padding: 4px 12px; font-size: 11px; font-weight: 700; color: #fff;
  background: var(--accent);
}
.idea-box.answer .idea-label { background: var(--success); }
.idea-box .idea-content {
  padding: 8px 12px; font-size: 13px; line-height: 1.8; color: var(--text);
  white-space: pre-wrap;
}

/* 步骤徽标 & 单步 */
.step-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 10px;
  background: var(--accent);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  margin-right: 8px;
  flex-shrink: 0;
}
.proof-step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  line-height: 1.85;
}
.proof-step:last-child { margin-bottom: 0; }
.proof-step > span:last-child { flex: 1; min-width: 0; }
/* 步骤内 思路/计算/结论 标签 */
.st-line { display: block; margin-bottom: 7px; }
.st-line:last-child { margin-bottom: 0; }
.st-tag {
  display: inline-block;
  padding: 0 7px;
  margin-right: 7px;
  font-size: 11px; font-weight: 700;
  border-radius: 4px;
  line-height: 19px;
  vertical-align: middle;
  letter-spacing: 0.5px;
}
.st-tag.step-why { background: #ede9fe; color: #6d28d9; }
.st-tag.step-calc { background: #dbeafe; color: #1d4ed8; }
.st-tag.step-concl { background: #dcfce7; color: #16a34a; }
.st-body { vertical-align: middle; }
.quiz-step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  line-height: 1.8;
}
.quiz-step:last-child { margin-bottom: 0; }
.m-tag.small { font-size: 11px; padding: 2px 9px; }

/* ============================================================
   Responsive
   ============================================================ */
@media (max-width: 768px) {
  .sidebar { width: 0; min-width: 0; border-right: none; }
  .sidebar.mobile-open { width: var(--sidebar-width); min-width: var(--sidebar-width); border-right: 1px solid var(--border); position: absolute; top: var(--header-height); left: 0; bottom: 0; z-index: 50; }
  .detail-panel.open { width: 100%; min-width: 100%; position: absolute; top: var(--header-height); right: 0; bottom: 0; z-index: 50; }
  .header .search-box input { width: 110px; }
  .header .search-box input:focus { width: 150px; }
  .header h1 { font-size: 13px; }
  .header .subject-toggle { padding: 5px 9px; font-size: 11px; }
  .graph-hint { font-size: 10px; }
}

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
  <button class="subject-toggle riemann active" data-subject="riemann">黎曼几何</button>
  <button class="subject-toggle topo active" data-subject="topo">代数拓扑</button>
  <button class="subject-toggle merge-btn" id="btn-merge">&#8644; 合并视图</button>
  <button class="btn-path" id="btn-path" title="学习路径">&#128218; <span class="btn-path-label">学习路径</span></button>
  <select class="layer-filter" id="layer-filter">
    <option value="all">全部层级</option>
    <option value="0-1">基础入门 (Layer 0-1)</option>
    <option value="0-2">进阶学习 (Layer 0-2)</option>
    <option value="0-3">深入学习 (Layer 0-3)</option>
    <option value="0-4">全部掌握 (Layer 0-4)</option>
  </select>
  <div class="search-box">
    <span class="search-icon">&#128269;</span>
    <input type="text" id="search-input" placeholder="搜索知识点...">
  </div>
  <span class="progress-info" id="progress-info"></span>
</div>

<!-- Main Layout -->
<div class="main">
  <!-- Sidebar -->
  <div class="sidebar" id="sidebar">
    <div class="sidebar-header">
      <span>章节导航</span>
      <span style="font-size:11px;cursor:pointer;color:var(--accent)" id="clear-filter">清除筛选</span>
    </div>
    <div class="sidebar-list" id="sidebar-list"></div>
  </div>

  <!-- Graph Area -->
  <div class="graph-area" id="graph-area">
    <svg id="graph-svg"></svg>
    <div class="graph-hint">滚轮缩放 &nbsp;|&nbsp; 拖拽平移 &nbsp;|&nbsp; 点击节点查看详情</div>
  </div>

  <!-- Detail Panel -->
  <div class="detail-panel" id="detail-panel">
    <div class="detail-header">
      <h3 id="detail-title"></h3>
      <div class="btn-group">
        <button class="expand-btn" id="detail-expand" title="展开/收起面板">&#128470;</button>
        <button class="close-btn" id="detail-close">&times;</button>
      </div>
    </div>
    <div class="detail-body" id="detail-body"></div>
  </div>
</div>

<!-- 学习路径面板 -->
<div class="path-panel" id="path-panel">
  <div class="path-header">
    <div>
      <h3>学习路径</h3>
      <div class="path-desc">推荐阅读顺序：从上到下，从基础到进阶</div>
    </div>
    <button class="close-btn" id="path-close">&times;</button>
  </div>
  <div class="path-body" id="path-body"></div>
</div>

<!-- Quiz Panel -->
<div class="quiz-panel" id="quiz-panel">
  <div class="quiz-bar">
    <button class="quiz-toggle" id="quiz-toggle">&#9660; 收起测验</button>
    <div class="quiz-tabs" id="quiz-tabs"></div>
    <div class="quiz-filter">
      <select id="quiz-difficulty">
        <option value="all">全部难度</option>
        <option value="easy">简单</option>
        <option value="medium">中等</option>
        <option value="hard">困难</option>
      </select>
      <select id="quiz-type">
        <option value="all">全部题型</option>
        <option value="choice">选择题</option>
        <option value="big">大题</option>
      </select>
    </div>
  </div>
  <div class="quiz-body" id="quiz-body"></div>
</div>

<!-- 详情弹窗 -->
<div class="modal-overlay" id="modal-overlay">
  <div class="modal">
    <div class="modal-header">
      <h3 id="modal-title"></h3>
      <button class="close-btn" id="modal-close">&times;</button>
    </div>
    <div class="modal-body" id="modal-body"></div>
  </div>
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
const CHAPTER_COLORS = ${chColorsJSON};
const LEARNING_PATH = ${pathJSON};
</script>

<!-- ============================================================
     Application Logic
     ============================================================ -->
<script>
(function() {
  'use strict';

  // ---- State ----
  var activeSubjects = { riemann: true, topo: true };
  var activeChapter = null;
  var searchTerm = '';
  var quizChapter = null;
  var quizDifficulty = 'all';
  var quizType = 'all';
  var quizCollapsed = false;
  var quizPage = 0;
  var PAGE_SIZE = 10;
  var layerFilter = 'all';
  var sidebarCollapsed = false;
  var readNodes = loadProgress();
  var currentDetailNode = null;

  // ---- 文本拆分为步骤（支持中文句号/分号，避免破坏 sup/sub 标签）----
  function toSteps(text) {
    if (!text) return [];
    var parts = String(text).split(/(。|；)/);
    var steps = [], cur = '';
    parts.forEach(function (p) {
      cur += p;
      if (p === '。' || p === '；') {
        var s = cur.trim();
        if (s) { steps.push(s); cur = ''; }
      }
    });
    if (cur.trim()) steps.push(cur.trim());
    return steps;
  }

  // ---- 把 ①②③… 引导的解答拆成编号步骤 ----
  function toNumberedSteps(text) {
    if (!text) return [];
    var tokens = String(text).split(/([①-⑩])/);
    var steps = [], cur = '';
    tokens.forEach(function (t) {
      if (/^[①-⑩]$/.test(t)) {
        if (cur.trim()) steps.push(cur.trim());
        cur = t;
      } else {
        cur += t;
      }
    });
    if (cur.trim()) steps.push(cur.trim());
    return steps;
  }

  // ---- 把单步正文里的【思路】【计算】【结论】等标记渲染成带标签的分块 ----
  function renderStepBody(text) {
    if (!text) return '';
    var LABELS = {
      '【思路】': 'step-why',
      '【依据】': 'step-why',
      '【计算】': 'step-calc',
      '【推导】': 'step-calc',
      '【结论】': 'step-concl'
    };
    var MARK = /(【思路】|【依据】|【计算】|【推导】|【结论】)/;
    if (!MARK.test(text)) return '<span>' + text + '</span>';
    var parts = text.split(MARK);
    var html = '';
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      if (!p) continue;
      if (LABELS[p]) {
        var cls = LABELS[p];
        var content = (i + 1 < parts.length) ? parts[i + 1] : '';
        i += 1;
        if (content && content.trim()) {
          html += '<span class="st-line"><span class="st-tag ' + cls + '">' + p.replace(/【|】/g, '') + '</span><span class="st-body">' + content + '</span></span>';
        }
      } else if (p.trim()) {
        html += '<span class="st-line"><span class="st-body">' + p + '</span></span>';
      }
    }
    return html;
  }

  // ---- 与某道题关联的知识点（同章节点 = 相关定义/定理）----
  function relatedNodesForQuiz(q) {
    return ALL_NODES.filter(function (n) {
      return n.subject === q.subject && n.chapter === q.chapter;
    });
  }

  // ---- Progress ----
  var STORAGE_KEY = 'learning-workbench-progress';
  function loadProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }
  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(readNodes)); } catch (e) {}
  }
  function markRead(nodeId) {
    if (!readNodes[nodeId]) {
      readNodes[nodeId] = Date.now();
      saveProgress();
      updateProgress();
    }
  }
  function updateProgress() {
    var count = Object.keys(readNodes).filter(function(k) { return ALL_NODES.some(function(n) { return n.id === k; }); }).length;
    document.getElementById('progress-info').textContent = '已读 ' + count + '/' + ALL_NODES.length;
  }

  // ---- 学科选中状态 ----
  function subjectCount() {
    return (activeSubjects.riemann ? 1 : 0) + (activeSubjects.topo ? 1 : 0);
  }
  function hasSubject(id) { return !!activeSubjects[id]; }
  function visibleNodeIds() {
    return ALL_NODES.filter(function(n) { return hasSubject(n.subject); }).map(function(n) { return n.id; });
  }

  // ---- 章节颜色 ----
  function getChapterColor(node) {
    var key = node.subject + ':' + node.chapter;
    return CHAPTER_COLORS[key] || '#94a3b8';
  }
  function getSubjectColor(node) {
    return node.subject === 'riemann' ? '#2563eb' : '#dc2626';
  }
  function getNodeSize(node) {
    var layer = node.layer || 2;
    var base = 13 - layer * 1.6;
    return Math.max(5, Math.min(13, base));
  }

  // ---- Graph rendering ----
  var graphArea = document.getElementById('graph-area');
  var svg = d3.select('#graph-svg');
  var w = function() { return graphArea.clientWidth; };
  var h = function() { return graphArea.clientHeight; };
  var g = svg.append('g');
  var linkGroup = g.append('g');
  var nodeGroup = g.append('g');
  var simulation = null;

  var zoom = d3.zoom()
    .scaleExtent([0.15, 4])
    .on('zoom', function(event) { g.attr('transform', event.transform); });
  svg.call(zoom);

  function initGraph() {
    if (simulation) simulation.stop();

    // 学科过滤
    var nodes = ALL_NODES.filter(function(n) { return hasSubject(n.subject); });
    var visibleIds = {};
    nodes.forEach(function(n) { visibleIds[n.id] = true; });
    var links = ALL_EDGES.filter(function(e) {
      return visibleIds[e.source] && visibleIds[e.target];
    });

    // 层级过滤
    if (layerFilter !== 'all') {
      var parts = layerFilter.split('-');
      var minL = parseInt(parts[0], 10);
      var maxL = parseInt(parts[1], 10);
      nodes = nodes.filter(function(n) { return n.layer >= minL && n.layer <= maxL; });
      var ids = {};
      nodes.forEach(function(n) { ids[n.id] = true; });
      links = links.filter(function(e) { return ids[e.source] && ids[e.target]; });
    }

    // 清空
    linkGroup.selectAll('*').remove();
    nodeGroup.selectAll('*').remove();

    var W = w(), H = h();
    var merged = subjectCount() === 2;

    var xForce = d3.forceX(function(d) {
      if (merged) return d.subject === 'riemann' ? W * 0.33 : W * 0.67;
      return W / 2;
    }).strength(merged ? 0.12 : 0.06);

    var yForce = d3.forceY().y(function(d) {
      var layer = d.layer || 2;
      var topMargin = 70;
      var bottomMargin = 70;
      var layerHeight = (H - topMargin - bottomMargin) / 5;
      return topMargin + layer * layerHeight + layerHeight / 2;
    }).strength(0.45);

    simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(function(d) { return d.id; }).distance(75))
      .force('charge', d3.forceManyBody().strength(-280))
      .force('center', d3.forceCenter(W / 2, H / 2))
      .force('collision', d3.forceCollide().radius(function(d) { return getNodeSize(d) + 5; }))
      .force('y', yForce)
      .force('x', xForce);

    // 判断是否为跨学科边
    function isCross(e) {
      var s = e.source, t = e.target;
      var ss = (typeof s === 'object') ? s.subject : null;
      var ts = (typeof t === 'object') ? t.subject : null;
      if (!ss || !ts) {
        var sn = ALL_NODES.find(function(n) { return n.id === s; });
        var tn = ALL_NODES.find(function(n) { return n.id === t; });
        ss = sn ? sn.subject : null;
        ts = tn ? tn.subject : null;
      }
      return ss && ts && ss !== ts;
    }

    var link = linkGroup.selectAll('line')
      .data(links)
      .join('line')
      .attr('class', function(e) { return 'link' + (isCross(e) ? ' cross' : ''); });

    var node = nodeGroup.selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', 'node')
      .call(d3.drag()
        .on('start', function(event, d) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x; d.fy = d.y;
        })
        .on('drag', function(event, d) { d.fx = event.x; d.fy = event.y; })
        .on('end', function(event, d) {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null; d.fy = null;
        })
      );

    node.append('circle')
      .attr('r', function(d) { return getNodeSize(d); })
      .attr('fill', function(d) { return getChapterColor(d); })
      .attr('stroke', function(d) { return getSubjectColor(d); })
      .attr('stroke-width', 2.2)
      .on('click', function(event, d) {
        event.stopPropagation();
        showDetail(d);
      });

    node.append('text')
      .text(function(d) { return d.label.length > 6 ? d.label.substring(0, 6) + '..' : d.label; })
      .attr('dy', function(d) { return -getNodeSize(d) - 5; })
      .attr('font-size', 10)
      .attr('fill', '#1e293b')
      .attr('text-anchor', 'middle');

    simulation.on('tick', function() {
      link
        .attr('x1', function(d) { return d.source.x; })
        .attr('y1', function(d) { return d.source.y; })
        .attr('x2', function(d) { return d.target.x; })
        .attr('y2', function(d) { return d.target.y; });
      node.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });
    });

    svg.on('click', function(event) {
      if (event.target === svg.node()) closeDetail();
    });
  }

  // ---- 高亮章节 ----
  function applyChapterHighlight() {
    if (!activeChapter) {
      nodeGroup.selectAll('circle').classed('dimmed', false).classed('highlighted', false);
      nodeGroup.selectAll('text').classed('dimmed', false).classed('highlighted', false);
      linkGroup.selectAll('line').classed('dimmed', false).classed('highlighted', false);
      return;
    }
    nodeGroup.selectAll('g').each(function(d) {
      var key = d.subject + ':' + d.chapter;
      var match = key === activeChapter;
      d3.select(this).select('circle').classed('dimmed', !match).classed('highlighted', match);
      d3.select(this).select('text').classed('dimmed', !match).classed('highlighted', match);
    });
    linkGroup.selectAll('line').each(function(d) {
      var sKey = null, tKey = null;
      if (typeof d.source === 'object' && d.source.subject) sKey = d.source.subject + ':' + d.source.chapter;
      if (typeof d.target === 'object' && d.target.subject) tKey = d.target.subject + ':' + d.target.chapter;
      var match = sKey === activeChapter && tKey === activeChapter;
      d3.select(this).classed('dimmed', !match).classed('highlighted', match);
    });
  }

  // ---- 搜索 ----
  function applySearch() {
    var term = searchTerm.toLowerCase();
    if (!term) {
      nodeGroup.selectAll('circle').classed('dimmed', false).classed('searched', false).classed('highlighted', false);
      nodeGroup.selectAll('text').classed('dimmed', false).classed('highlighted', false);
      linkGroup.selectAll('line').classed('dimmed', false).classed('highlighted', false);
      applyChapterHighlight();
      return;
    }
    var matched = {};
    nodeGroup.selectAll('g').each(function(d) {
      var match = (d.label && d.label.toLowerCase().indexOf(term) >= 0) ||
                  (d.desc && d.desc.toLowerCase().indexOf(term) >= 0) ||
                  (d.content && d.content.toLowerCase().indexOf(term) >= 0) ||
                  (d.understanding && d.understanding.toLowerCase().indexOf(term) >= 0);
      if (match) matched[d.id] = true;
      d3.select(this).select('circle').classed('dimmed', !match).classed('searched', match).classed('highlighted', match);
      d3.select(this).select('text').classed('dimmed', !match).classed('highlighted', match);
    });
    linkGroup.selectAll('line').each(function(d) {
      var sId = typeof d.source === 'object' ? d.source.id : d.source;
      var tId = typeof d.target === 'object' ? d.target.id : d.target;
      var m = matched[sId] || matched[tId];
      d3.select(this).classed('dimmed', !m).classed('highlighted', !!m);
    });
  }

  // ---- 获取学习路径中的上一个/下一个节点 ----
  function getPathNeighbors(nodeId) {
    var flat = [];
    LEARNING_PATH.forEach(function(stage) {
      stage.nodes.forEach(function(n) { flat.push(n); });
    });
    var idx = -1;
    for (var i = 0; i < flat.length; i++) {
      if (flat[i].id === nodeId) { idx = i; break; }
    }
    var prev = idx > 0 ? flat[idx - 1] : null;
    var next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;
    // 同章节的相邻节点（不在学习路径中的也可作为关联）
    var related = [];
    if (idx >= 0) {
      var cur = flat[idx];
      var stage = LEARNING_PATH.find(function(s) {
        return s.nodes.some(function(n) { return n.id === nodeId; });
      });
      if (stage) {
        stage.nodes.forEach(function(n) {
          if (n.id !== nodeId) related.push(n);
        });
      }
    }
    return { prev: prev, next: next, related: related.slice(0, 6) };
  }

  // ---- 详情面板 ----
  function showDetail(node) {
    markRead(node.id);
    currentDetailNode = node;
    var title = document.getElementById('detail-title');
    var body = document.getElementById('detail-body');
    var ch = ALL_CHAPTERS.find(function(c) { return c.id === node.chapter && c.subject === node.subject; });
    var chName = ch ? ch.title : node.chapter;
    var subjName = node.subject === 'riemann' ? '黎曼几何' : '代数拓扑';
    title.textContent = node.label;

    var html = '';
    html += '<div class="section">';
    html += '<span class="tag">' + subjName + '</span>';
    html += '<span class="tag">' + chName + '</span>';
    html += '<span class="tag">Layer ' + (node.layer || '?') + '</span>';
    if (readNodes[node.id]) html += '<span class="tag" style="background:#dcfce7;color:#16a34a;">已读</span>';
    html += '</div>';

    html += '<button class="node-detail-btn">查看完整详情 &#8594;</button>';

    if (node.svg) {
      html += '<div class="section"><div class="section-title">示意图</div>';
      html += '<div class="svg-chart">' + node.svg + '</div></div>';
    }
    if (node.desc) {
      html += '<div class="section"><div class="section-title">描述</div><div class="section-content">' + node.desc + '</div></div>';
    }
    if (node.content) {
      html += '<div class="section"><div class="section-title">详细内容</div><div class="section-content">' + node.content + '</div></div>';
    }
    if (node.understanding) {
      html += '<div class="section"><div class="section-title">通俗理解</div><div class="section-content">' + node.understanding + '</div></div>';
    }
    if (node.examples && node.examples.length > 0) {
      html += '<div class="section"><div class="section-title">例子</div>';
      node.examples.forEach(function(ex, exi) {
        html += '<div class="example-item">';
        html += '<div class="ex-title">' + ex.title + '</div>';
        html += '<div class="ex-content">' + ex.content + '</div>';
        html += '<button class="detail-action-btn" data-example="' + exi + '">查看详细步骤 &#8594;</button>';
        html += '</div>';
      });
      html += '</div>';
    }
    if (node.theorems && node.theorems.length > 0) {
      html += '<div class="section"><div class="section-title">定理与证明</div>';
      node.theorems.forEach(function(th, thi) {
        html += '<div class="theorem-item">';
        html += '<div class="th-name">定理 ' + (thi + 1) + ': ' + th.name + '</div>';
        html += '<div class="th-statement">' + th.statement + '</div>';
        if (th.proof) html += '<div class="th-proof"><span class="th-proof-label">证明概要</span>' + th.proof + '</div>';
        html += '<button class="detail-action-btn warning" data-theorem="' + thi + '">查看详细证明 &#8594;</button>';
        html += '</div>';
      });
      html += '</div>';
    }
    if (node.applications) {
      html += '<div class="section"><div class="section-title">应用</div><div class="section-content">' + node.applications + '</div></div>';
    }
    if (node.refs) {
      html += '<div class="section"><div class="section-title">教材引用</div>';
      var refs = Array.isArray(node.refs) ? node.refs : [node.refs];
      refs.forEach(function(ref) {
        html += '<span class="ref-item">' + (ref.book || '') + ' ' + (ref.ch || '') + ' ' + (ref.sec || '') + '</span>';
      });
      html += '</div>';
    }

    // ---- 底部导航：上一个 / 下一个 / 关联知识点 ----
    var neighbors = getPathNeighbors(node.id);
    html += '<div class="node-nav">';
    html += '<div class="node-nav-row">';
    if (neighbors.prev) {
      html += '<button class="nav-btn" data-nav="' + neighbors.prev.id + '"><span class="nav-arrow">&#8592;</span><span class="nav-text">' + neighbors.prev.label + '</span></button>';
    } else {
      html += '<button class="nav-btn" disabled><span class="nav-arrow">&#8592;</span><span class="nav-text">已是第一个</span></button>';
    }
    if (neighbors.next) {
      html += '<button class="nav-btn primary" data-nav="' + neighbors.next.id + '"><span class="nav-arrow">&#8594;</span><span class="nav-text">' + neighbors.next.label + '</span></button>';
    } else {
      html += '<button class="nav-btn" disabled><span class="nav-arrow">&#8594;</span><span class="nav-text">已是最后一个</span></button>';
    }
    html += '</div>';
    if (neighbors.related.length > 0) {
      html += '<div class="nav-related-title">同章节知识点</div>';
      html += '<div class="nav-related-chips">';
      neighbors.related.forEach(function(r) {
        html += '<span class="nav-chip" data-nav="' + r.id + '">' + r.label + '</span>';
      });
      html += '</div>';
    }
    html += '</div>';

    body.innerHTML = html;
    document.getElementById('detail-panel').classList.add('open');

    // “查看完整详情”按钮：在弹窗中以大字号通读知识点
    var detailBtn = body.querySelector('.node-detail-btn');
    if (detailBtn) detailBtn.addEventListener('click', function() { openNodeModal(node); });

    // 例子/定理 点击查看详情
    body.querySelectorAll('[data-example]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var exi = parseInt(btn.getAttribute('data-example'), 10);
        if (node.examples && node.examples[exi]) openExampleModal(node, node.examples[exi], exi);
      });
    });
    body.querySelectorAll('[data-theorem]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var thi = parseInt(btn.getAttribute('data-theorem'), 10);
        if (node.theorems && node.theorems[thi]) openTheoremModal(node, node.theorems[thi], thi);
      });
    });

    // 详情面板内的 "关联知识点" 标签
    body.querySelectorAll('[data-node-ref]').forEach(function(tag) {
      tag.addEventListener('click', function() {
        var id = tag.getAttribute('data-node-ref');
        var target = ALL_NODES.find(function(n) { return n.id === id; });
        if (target) showDetail(target);
      });
    });

    // 底部导航按钮
    body.querySelectorAll('[data-nav]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var id = btn.getAttribute('data-nav');
        var target = ALL_NODES.find(function(n) { return n.id === id; });
        if (target) {
          var panel = document.getElementById('detail-panel');
          var wasFullscreen = panel.classList.contains('path-fullscreen');
          showDetail(target);
          if (wasFullscreen) {
            panel.classList.add('path-fullscreen');
          }
          panel.querySelector('.detail-body').scrollTop = 0;
        }
      });
    });
  }
  function closeDetail() {
    document.getElementById('detail-panel').classList.remove('open');
    document.getElementById('detail-panel').classList.remove('path-fullscreen');
    var panel = document.getElementById('detail-panel');
    panel.classList.remove('expanded');
    var btn = document.getElementById('detail-expand');
    if (btn) btn.innerHTML = '&#128470;';
  }

  // ============================================================
  // 弹窗：例子详细步骤 / 定理详细证明
  // ============================================================
  function openModal(title, bodyHTML) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = bodyHTML;
    document.getElementById('modal-overlay').classList.add('open');
  }
  function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
  }

  // ---- 弹窗：知识点的完整详情（大字号通读）----
  function openNodeModal(node) {
    var ch = ALL_CHAPTERS.find(function(c) { return c.id === node.chapter && c.subject === node.subject; });
    var chName = ch ? ch.title : node.chapter;
    var subjName = node.subject === 'riemann' ? '黎曼几何' : '代数拓扑';
    var html = '';
    html += '<div class="m-section" style="margin-bottom:10px">';
    html += '<span class="m-tag">' + subjName + '</span>';
    html += '<span class="m-tag">' + chName + '</span>';
    html += '<span class="m-tag">Layer ' + (node.layer || '?') + '</span>';
    html += '</div>';
    if (node.svg) {
      html += '<div class="m-section"><div class="m-title">示意图</div>';
      html += '<div style="text-align:center;background:var(--bg);border-radius:var(--radius);padding:12px">' + node.svg + '</div></div>';
    }
    if (node.desc) html += '<div class="m-section"><div class="m-title">描述</div><div class="m-text">' + node.desc + '</div></div>';
    if (node.content) html += '<div class="m-section"><div class="m-title">详细内容</div><div class="m-text">' + node.content + '</div></div>';
    if (node.understanding) html += '<div class="m-section"><div class="m-title">通俗理解</div><div class="m-text">' + node.understanding + '</div></div>';
    if (node.examples && node.examples.length > 0) {
      html += '<div class="m-section"><div class="m-title">例子</div>';
      node.examples.forEach(function(ex) {
        html += '<div class="m-text" style="margin-bottom:10px;padding:10px 12px;background:var(--bg);border-left:3px solid var(--accent);border-radius:6px"><strong>' + ex.title + '</strong><br>' + ex.content + '</div>';
      });
      html += '</div>';
    }
    if (node.theorems && node.theorems.length > 0) {
      html += '<div class="m-section"><div class="m-title">定理与证明</div>';
      node.theorems.forEach(function(th) {
        html += '<div class="m-text" style="margin-bottom:10px;padding:10px 12px;background:#fefce8;border-left:3px solid var(--warning);border-radius:6px"><strong>' + th.name + '</strong><br><em>' + th.statement + '</em>';
        if (th.proof) html += '<div class="m-proof" style="margin-top:8px">' + th.proof + '</div>';
        html += '</div>';
      });
      html += '</div>';
    }
    if (node.applications) html += '<div class="m-section"><div class="m-title">应用</div><div class="m-text">' + node.applications + '</div></div>';
    if (node.refs) {
      html += '<div class="m-section"><div class="m-title">教材引用</div><div class="m-text">';
      var refs = Array.isArray(node.refs) ? node.refs : [node.refs];
      refs.forEach(function(ref) {
        html += '<span class="m-tag" style="cursor:default">' + (ref.book || '') + ' ' + (ref.ch || '') + ' ' + (ref.sec || '') + '</span>';
      });
      html += '</div></div>';
    }
    openModal(node.label, html);
  }

  // 抽取定理名里的关键词（去掉常见尾缀），用于跨知识点搜索使用处
  function theoremKeyword(name) {
    return String(name || '').replace(/(定理|公式|方程|不等式|引理|恒等式|命题|推论|变换)$/g, '');
  }

  function findTheoremRelated(name) {
    var kw = theoremKeyword(name);
    var examples = [];
    var quizzes = [];
    ALL_NODES.forEach(function (n) {
      (n.examples || []).forEach(function (ex) {
        var hay = (ex.title || '') + ' ' + (ex.content || '') + ' ' + (n.label || '');
        if (kw && kw.length >= 2 && (hay.indexOf(kw) >= 0 || hay.indexOf(name) >= 0)) {
          examples.push({ nodeId: n.id, nodeLabel: n.label, title: ex.title });
        }
      });
    });
    ALL_QUIZZES.forEach(function (q) {
      var hay = (q.q || '') + ' ' + (q.answer || '') + ' ' + (q.explanation || '');
      if (kw && kw.length >= 2 && (hay.indexOf(kw) >= 0 || hay.indexOf(name) >= 0)) {
        quizzes.push(q);
      }
    });
    return { examples: examples, quizzes: quizzes };
  }

  function openExampleModal(node, ex, exi) {
    var body = '';
    body += '<div class="m-section"><div class="m-title">例子</div><div class="m-text">' + (ex.content || '') + '</div></div>';
    if (node.desc) body += '<div class="m-section"><div class="m-title">依据的定义</div><div class="m-text">' + node.desc + '</div></div>';
    // 详细“根据定义逐步计算”：优先用例子专属 detail，其次用节点完整内容
    var detailSteps = ex.detail ? toNumberedSteps(ex.detail) : [];
    if (detailSteps.length > 0) {
      body += '<div class="m-section"><div class="m-title">根据定义逐步计算</div>';
      body += '<div class="m-proof">';
      detailSteps.forEach(function (s) {
        var m = s.match(/^([①-⑩])\s*/);
        var num = m ? m[1] : '';
        var rest = m ? s.replace(/^[①-⑩]\s*/, '') : s;
        body += '<div class="proof-step">' + (num ? '<span class="step-badge">' + num + '</span>' : '') + '<span>' + renderStepBody(rest) + '</span></div>';
      });
      body += '</div></div>';
    } else {
      var steps = toSteps(node.content);
      if (steps.length > 1) {
        body += '<div class="m-section"><div class="m-title">根据定义逐步计算</div>';
        body += '<div class="m-proof">';
        steps.forEach(function (s, i) {
          body += '<div class="proof-step"><span class="step-badge">' + (i + 1) + '</span><span>' + s + '</span></div>';
        });
        body += '</div></div>';
      } else if (node.content) {
        body += '<div class="m-section"><div class="m-title">根据定义逐步计算</div><div class="m-text">' + node.content + '</div></div>';
      }
    }
    if (node.theorems && node.theorems.length > 0) {
      body += '<div class="m-section"><div class="m-title">相关定理</div><div class="m-text">';
      node.theorems.forEach(function (th, i) {
        body += '<span class="m-tag warning" data-thnode="' + node.id + '" data-thidx="' + i + '">' + th.name + '</span>';
      });
      body += '</div></div>';
    }
    openModal('例子 · ' + (ex.title || ''), body);
    document.getElementById('modal-body').querySelectorAll('[data-thnode]').forEach(function (tag) {
      tag.addEventListener('click', function () {
        var nid = tag.getAttribute('data-thnode');
        var idx = parseInt(tag.getAttribute('data-thidx'), 10);
        var n = ALL_NODES.find(function (x) { return x.id === nid; });
        if (n && n.theorems && n.theorems[idx]) openTheoremModal(n, n.theorems[idx], idx);
      });
    });
  }

  function openTheoremModal(node, th, thi) {
    var rel = findTheoremRelated(th.name);
    var body = '';
    body += '<div class="m-section"><div class="m-title">定理陈述</div><div class="m-text" style="font-style:italic">' + (th.statement || '') + '</div></div>';
    body += '<div class="m-section"><div class="m-title">详细证明</div>';
    // 优先展示定理专属的详细证明 detailProof（用①②③编号），其次把 proof 按句拆步
    if (th.detailProof) {
      var dSteps = toNumberedSteps(th.detailProof);
      body += '<div class="m-proof">';
      dSteps.forEach(function (s) {
        var m = s.match(/^([①-⑩])\s*/);
        var num = m ? m[1] : '';
        var rest = m ? s.replace(/^[①-⑩]\s*/, '') : s;
        body += '<div class="proof-step">' + (num ? '<span class="step-badge">' + num + '</span>' : '') + '<span>' + renderStepBody(rest) + '</span></div>';
      });
      body += '</div>';
    } else {
      var pSteps = toSteps(th.proof);
      if (pSteps.length > 1) {
        body += '<div class="m-proof">';
        pSteps.forEach(function (s, i) {
          body += '<div class="proof-step"><span class="step-badge">' + (i + 1) + '</span><span>' + s + '</span></div>';
        });
        body += '</div>';
      } else {
        body += '<div class="m-proof">' + (th.proof || '（暂无证明拓写，请结合教材对应章节阅读。）') + '</div>';
      }
    }
    body += '</div>';
    if (node.examples && node.examples.length > 0) {
      body += '<div class="m-section"><div class="m-title">本知识点的例题</div><div class="m-text">';
      node.examples.forEach(function (ex) {
        body += '<div style="margin-bottom:8px"><strong>' + ex.title + '</strong>：' + ex.content + '</div>';
      });
      body += '</div></div>';
    }
    var otherExamples = rel.examples.filter(function (e) { return e.nodeId !== node.id; });
    if (otherExamples.length > 0) {
      body += '<div class="m-section"><div class="m-title">其他使用本定理的例题</div><div class="m-text">';
      otherExamples.slice(0, 8).forEach(function (e) {
        body += '<span class="m-tag" data-node="' + e.nodeId + '">' + e.nodeLabel + '：' + e.title + '</span>';
      });
      body += '</div></div>';
    }
    if (rel.quizzes.length > 0) {
      body += '<div class="m-section"><div class="m-title">用到本定理的测验题</div><div class="m-text">';
      rel.quizzes.slice(0, 6).forEach(function (q) {
        body += '<div style="font-size:12px;margin-bottom:6px;color:var(--text-secondary);line-height:1.6">· ' + q.q + '</div>';
      });
      body += '</div></div>';
    }
    openModal('定理 · ' + (th.name || ''), body);
    document.getElementById('modal-body').querySelectorAll('[data-node]').forEach(function (tag) {
      tag.addEventListener('click', function () {
        var id = tag.getAttribute('data-node');
        var target = ALL_NODES.find(function (n) { return n.id === id; });
        if (target) { closeModal(); showDetail(target); }
      });
    });
  }

  // ---- 侧边栏 ----
  function renderSidebar() {
    var list = document.getElementById('sidebar-list');
    var html = '';
    SUBJECTS.forEach(function(subj) {
      var chapters = ALL_CHAPTERS.filter(function(c) { return c.subject === subj.id; })
        .sort(function(a, b) { return parseInt(a.id.replace(/\\D/g, ''), 10) - parseInt(b.id.replace(/\\D/g, ''), 10); });
      var nodeCount = ALL_NODES.filter(function(n) { return n.subject === subj.id; }).length;
      var disabled = !hasSubject(subj.id);
      html += '<div class="subject-group' + (disabled ? ' disabled' : '') + '">';
      html += '<div class="subject-group-title"><span class="dot" style="background:' + subj.color + '"></span>' + subj.name + ' <span style="font-size:10px;color:var(--text-muted)">(' + nodeCount + ')</span></div>';
      chapters.forEach(function(ch) {
        var key = ch.subject + ':' + ch.id;
        var chNodes = ALL_NODES.filter(function(n) { return n.chapter === ch.id && n.subject === ch.subject; });
        var isActive = activeChapter === key;
        var color = CHAPTER_COLORS[key] || '#94a3b8';
        html += '<div class="chapter-item' + (isActive ? ' active' : '') + '" data-chapter="' + key + '">';
        html += '<span class="ch-indicator" style="background:' + color + '"></span>';
        html += ch.title;
        html += '<span class="ch-count">' + chNodes.length + '</span>';
        html += '</div>';
      });
      html += '</div>';
    });
    list.innerHTML = html;

    list.querySelectorAll('.chapter-item').forEach(function(item) {
      item.addEventListener('click', function() {
        var key = item.getAttribute('data-chapter');
        activeChapter = (activeChapter === key) ? null : key;
        applyChapterHighlight();
        renderSidebar();
      });
    });
  }

  // ---- 学科切换 ----
  function updateSubjectButtons() {
    document.querySelectorAll('.subject-toggle[data-subject]').forEach(function(btn) {
      var id = btn.getAttribute('data-subject');
      btn.classList.toggle('active', hasSubject(id));
    });
  }
  function toggleSubject(id) {
    if (activeSubjects[id] && subjectCount() === 1) return; // 至少保留一个
    activeSubjects[id] = !activeSubjects[id];
    activeChapter = null;
    updateSubjectButtons();
    initGraph();
    renderSidebar();
    renderQuizTabs();
    renderQuiz();
    closeDetail();
  }
  function mergeSubjects() {
    activeSubjects.riemann = true;
    activeSubjects.topo = true;
    activeChapter = null;
    updateSubjectButtons();
    initGraph();
    renderSidebar();
    renderQuizTabs();
    renderQuiz();
    closeDetail();
  }

  // ---- 学习路径面板 ----
  function renderPathPanel() {
    var body = document.getElementById('path-body');
    var html = '';
    var currentFound = false;
    var stageIndex = 0;
    LEARNING_PATH.forEach(function(stage) {
      stageIndex++;
      var readCount = stage.nodes.filter(function(n) { return readNodes[n.id]; }).length;
      var color = stage.subjectColor;
      html += '<div class="path-stage">';
      html += '<div class="path-stage-head"><span class="stage-num" style="background:' + color + '">' + stageIndex + '</span>';
      html += '<span class="stage-title">' + stage.subjectName + ' · ' + stage.title + '</span>';
      html += '<span class="stage-count">' + readCount + '/' + stage.nodes.length + ' 已读</span></div>';
      stage.nodes.forEach(function(n) {
        var isRead = !!readNodes[n.id];
        var isCurrent = !currentFound && !isRead;
        if (isCurrent) currentFound = true;
        html += '<div class="path-node' + (isRead ? ' read' : '') + (isCurrent ? ' current' : '') + '" data-node="' + n.id + '">';
        html += '<span class="pn-dot"></span>' + n.label;
        if (isCurrent) html += '<span style="margin-left:auto;font-size:10px;color:#d97706">&#8594; 推荐从这里继续</span>';
        if (isRead) html += '<span style="margin-left:auto;font-size:10px;color:#16a34a">&#10003;</span>';
        html += '</div>';
      });
      html += '</div>';
    });
    body.innerHTML = html;

    body.querySelectorAll('.path-node').forEach(function(item) {
      item.addEventListener('click', function() {
        var id = item.getAttribute('data-node');
        var node = ALL_NODES.find(function(n) { return n.id === id; });
        if (node) {
          // 确保该学科可见
          if (!hasSubject(node.subject)) {
            activeSubjects[node.subject] = true;
            updateSubjectButtons();
            initGraph();
            renderSidebar();
          }
          document.getElementById('path-panel').classList.remove('open');
          showDetail(node);
          // 从学习路径打开时自动全屏
          document.getElementById('detail-panel').classList.add('path-fullscreen');
          // 高亮该节点
          nodeGroup.selectAll('circle').classed('highlighted', function(d) { return d.id === id; });
        }
      });
    });
  }

  // ---- 测验 ----
  function chapterKeyOf(ch) { return ch.subject + ':' + ch.id; }

  function renderQuizTabs() {
    var tabs = document.getElementById('quiz-tabs');
    var chapters = ALL_CHAPTERS.filter(function(c) { return hasSubject(c.subject); })
      .sort(function(a, b) { return parseInt(a.id.replace(/\\D/g, ''), 10) - parseInt(b.id.replace(/\\D/g, ''), 10); });
    var html = '<button class="quiz-tab' + (!quizChapter ? ' active' : '') + '" data-chapter="">全部</button>';
    chapters.forEach(function(ch) {
      var key = chapterKeyOf(ch);
      html += '<button class="quiz-tab' + (quizChapter === key ? ' active' : '') + '" data-chapter="' + key + '">' + ch.title + '</button>';
    });
    tabs.innerHTML = html;
    tabs.querySelectorAll('.quiz-tab').forEach(function(tab) {
      tab.addEventListener('click', function() {
        quizChapter = tab.getAttribute('data-chapter') || null;
        quizPage = 0;
        renderQuizTabs();
        renderQuiz();
      });
    });
  }

  function filteredQuizzes() {
    var quizzes = ALL_QUIZZES.slice();
    // 学科过滤
    quizzes = quizzes.filter(function(q) { return hasSubject(q.subject); });
    // 章节过滤
    if (quizChapter) {
      quizzes = quizzes.filter(function(q) {
        var ch = ALL_CHAPTERS.find(function(c) { return c.id === q.chapter && c.subject === q.subject; });
        if (!ch) return false;
        return chapterKeyOf(ch) === quizChapter;
      });
    }
    // 难度过滤
    if (quizDifficulty !== 'all') {
      quizzes = quizzes.filter(function(q) { return q.difficulty === quizDifficulty; });
    }
    // 题型过滤
    if (quizType === 'choice') {
      quizzes = quizzes.filter(function(q) { return q.type === 'choice'; });
    } else if (quizType === 'big') {
      quizzes = quizzes.filter(function(q) { return q.type !== 'choice'; });
    }
    return quizzes;
  }

  // ---- 题解：思路 + 详细代入计算 ----
  function ideaLine(q) {
    if (q.type === 'proof') {
      return '先明确结论中要证明的量，回顾它的定义；再借助本知识点对应的定理（点击下方标签查看），按逻辑逐层推导，最后化简收敛到目标等式。';
    }
    if (q.type === 'computation') {
      return '先识别题目考查的定义与公式，把给定对象代入求导、叉积、缩并或积分等运算，再按公式化简，得出具体数值或表达式。';
    }
    return '先审题定位考点，结合相关定义与定理（见下方标签）选择公式，代入题目给定数据计算。';
  }

  function buildQuizExplanation(q) {
    var answerText = q.type === 'choice' ? (q.explanation || '') : (q.answer || '');
    var rel = relatedNodesForQuiz(q);
    var html = '';
    // 思路
    html += '<div class="idea-box"><div class="idea-label">思路</div><div class="idea-content">';
    html += '<div>' + ideaLine(q) + '</div>';
    if (rel.length > 0) {
      html += '<div style="margin-top:8px;font-size:12px;color:var(--text-muted)">涉及的定义 / 定理：</div>';
      html += '<div style="margin-top:4px">';
      rel.slice(0, 6).forEach(function (n) {
        html += '<span class="m-tag small" data-node="' + n.id + '">' + n.label + '</span>';
      });
      html += '</div>';
    }
    html += '</div></div>';
    // 解答
    var steps = toNumberedSteps(answerText);
    html += '<div class="idea-box answer"><div class="idea-label">解答（详细代入计算）</div><div class="idea-content">';
    if (steps.length > 1) {
      steps.forEach(function (s) {
        var m = s.match(/^([①-⑩])\s*/);
        var num = m ? m[1] : '';
        var rest = m ? s.replace(/^[①-⑩]\s*/, '') : s;
        html += '<div class="quiz-step">' + (num ? '<span class="step-badge">' + num + '</span>' : '') + '<span>' + rest + '</span></div>';
      });
    } else if (answerText) {
      html += answerText;
    } else {
      html += '（本题暂未附详细解析。）';
    }
    html += '</div></div>';
    return html;
  }

  function renderQuiz() {
    var body = document.getElementById('quiz-body');
    var quizzes = filteredQuizzes();

    if (quizzes.length === 0) {
      body.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted)">暂无匹配的测验题</div>';
      return;
    }

    var totalPages = Math.max(1, Math.ceil(quizzes.length / PAGE_SIZE));
    if (quizPage >= totalPages) quizPage = totalPages - 1;
    if (quizPage < 0) quizPage = 0;
    var pageQuizzes = quizzes.slice(quizPage * PAGE_SIZE, (quizPage + 1) * PAGE_SIZE);
    var startIdx = quizPage * PAGE_SIZE;

    var html = '<div style="font-size:11px;color:var(--text-muted);margin-bottom:8px">共 ' + quizzes.length + ' 题，第 ' + (quizPage + 1) + '/' + totalPages + ' 页</div>';

    pageQuizzes.forEach(function(q, i) {
      var idx = startIdx + i;
      var diffLabel = { easy: '简单', medium: '中等', hard: '困难' }[q.difficulty] || q.difficulty;
      var typeLabel = q.type === 'choice' ? '选择题' : (q.type === 'proof' ? '证明题' : '计算题');
      html += '<div class="quiz-question" data-idx="' + idx + '">';
      html += '<div class="q-meta">';
      html += '<span class="q-type">' + typeLabel + '</span>';
      html += '<span class="q-difficulty ' + (q.difficulty || 'medium') + '">' + diffLabel + '</span>';
      html += '</div>';
      html += '<div class="q-text">' + (idx + 1) + '. ' + q.q + '</div>';
      if (q.type === 'choice') {
        html += '<div class="q-options">';
        q.options.forEach(function(opt, oi) {
          html += '<button class="q-option" data-answer="' + oi + '">' + String.fromCharCode(65 + oi) + '. ' + opt + '</button>';
        });
        html += '</div>';
        html += '<div class="q-explanation">' + buildQuizExplanation(q) + '</div>';
      } else {
        html += '<button class="show-answer">显示详细解答</button>';
        html += '<div class="q-explanation">' + buildQuizExplanation(q) + '</div>';
      }
      html += '</div>';
    });

    // 分页控件
    html += '<div class="quiz-pagination">';
    html += '<button id="pg-prev"' + (quizPage === 0 ? ' disabled' : '') + '>上一页</button>';
    html += '<span class="page-info">' + (quizPage + 1) + ' / ' + totalPages + '</span>';
    html += '<button id="pg-next"' + (quizPage >= totalPages - 1 ? ' disabled' : '') + '>下一页</button>';
    html += '</div>';

    body.innerHTML = html;

    // 选择题点击
    body.querySelectorAll('.quiz-question').forEach(function(question) {
      var idx = parseInt(question.getAttribute('data-idx'), 10);
      var q = quizzes[idx];
      if (q.type === 'choice') {
        question.querySelectorAll('.q-option').forEach(function(btn) {
          btn.addEventListener('click', function() {
            if (question.querySelector('.q-option.correct-answer') || question.querySelector('.q-option.wrong-answer')) return;
            var selected = parseInt(btn.getAttribute('data-answer'), 10);
            question.querySelectorAll('.q-option').forEach(function(opt) {
              var ans = parseInt(opt.getAttribute('data-answer'), 10);
              if (ans === q.answer) opt.classList.add('correct-answer');
              if (ans === selected && ans !== q.answer) opt.classList.add('wrong-answer');
              opt.style.pointerEvents = 'none';
            });
            question.querySelector('.q-explanation').classList.add('show');
            if (selected === q.answer) question.classList.add('correct');
            else question.classList.add('wrong');
          });
        });
      } else {
        var showBtn = question.querySelector('.show-answer');
        showBtn.addEventListener('click', function() {
          var expl = question.querySelector('.q-explanation');
          var isShowing = expl.classList.contains('show');
          expl.classList.toggle('show');
          showBtn.textContent = isShowing ? '显示详细解答' : '收起详细解答';
        });
      }
      // 题解中的 "涉及定义/定理" 标签：点击跳转到对应知识点
      question.querySelectorAll('[data-node]').forEach(function(tag) {
        tag.addEventListener('click', function() {
          var id = tag.getAttribute('data-node');
          var target = ALL_NODES.find(function(n) { return n.id === id; });
          if (target) showDetail(target);
        });
      });
    });

    // 分页按钮
    var prevBtn = document.getElementById('pg-prev');
    var nextBtn = document.getElementById('pg-next');
    if (prevBtn) prevBtn.addEventListener('click', function() {
      if (quizPage > 0) { quizPage--; renderQuiz(); body.scrollTop = 0; }
    });
    if (nextBtn) nextBtn.addEventListener('click', function() {
      if (quizPage < totalPages - 1) { quizPage++; renderQuiz(); body.scrollTop = 0; }
    });
  }

  // ---- 事件绑定 ----
  document.getElementById('detail-close').addEventListener('click', closeDetail);

  // 展开/收起详情面板
  document.getElementById('detail-expand').addEventListener('click', function() {
    var panel = document.getElementById('detail-panel');
    var btn = document.getElementById('detail-expand');
    var expanded = panel.classList.toggle('expanded');
    btn.innerHTML = expanded ? '&#128473;' : '&#128470;';
    btn.title = expanded ? '收起为右侧面板' : '展开为全屏面板';
  });

  // 弹窗关闭
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', function(e) {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closeModal(); }
  });
  document.getElementById('clear-filter').addEventListener('click', function() {
    activeChapter = null;
    applyChapterHighlight();
    renderSidebar();
  });

  document.querySelectorAll('.subject-toggle[data-subject]').forEach(function(tab) {
    tab.addEventListener('click', function() { toggleSubject(tab.getAttribute('data-subject')); });
  });
  document.getElementById('btn-merge').addEventListener('click', mergeSubjects);

  document.getElementById('btn-path').addEventListener('click', function() {
    document.getElementById('path-panel').classList.toggle('open');
    if (document.getElementById('path-panel').classList.contains('open')) renderPathPanel();
  });
  document.getElementById('path-close').addEventListener('click', function() {
    document.getElementById('path-panel').classList.remove('open');
  });

  document.getElementById('search-input').addEventListener('input', function(e) {
    searchTerm = e.target.value.trim();
    applySearch();
  });

  document.getElementById('btn-sidebar').addEventListener('click', function() {
    sidebarCollapsed = !sidebarCollapsed;
    document.getElementById('sidebar').classList.toggle('collapsed', sidebarCollapsed);
    setTimeout(function() {
      if (simulation) {
        simulation.force('center', d3.forceCenter(w() / 2, h() / 2));
        simulation.alpha(0.3).restart();
      }
    }, 300);
  });

  document.getElementById('quiz-difficulty').addEventListener('change', function(e) {
    quizDifficulty = e.target.value;
    quizPage = 0;
    renderQuiz();
  });
  document.getElementById('quiz-type').addEventListener('change', function(e) {
    quizType = e.target.value;
    quizPage = 0;
    renderQuiz();
  });
  document.getElementById('quiz-toggle').addEventListener('click', function() {
    quizCollapsed = !quizCollapsed;
    document.getElementById('quiz-panel').classList.toggle('collapsed', quizCollapsed);
    document.getElementById('quiz-toggle').innerHTML = quizCollapsed ? '&#9654; 展开测验' : '&#9660; 收起测验';
  });

  document.getElementById('layer-filter').addEventListener('change', function(e) {
    layerFilter = e.target.value;
    initGraph();
    closeDetail();
  });

  window.addEventListener('resize', function() {
    if (simulation) {
      simulation.force('center', d3.forceCenter(w() / 2, h() / 2));
      simulation.alpha(0.3).restart();
    }
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