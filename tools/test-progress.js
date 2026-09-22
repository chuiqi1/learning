// 无浏览器依赖的进度回归检查：旧数据迁移、首次答题、章节统计和备份合并。
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, '..', 'learning-workbench.html'), 'utf8');
function data(name) {
  return JSON.parse(html.match(new RegExp('const ' + name + ' = (.*);'))[1]);
}
const nodes = data('ALL_NODES');
const quizzes = data('ALL_QUIZZES');
const code = html.slice(html.indexOf('// ---- 本地进度'), html.indexOf('// ---- 学科选中状态'));
const memory = new Map();
const store = {
  getItem: key => memory.has(key) ? memory.get(key) : null,
  setItem: (key, value) => memory.set(key, value)
};
const oldTime = Date.now() - 1000;
memory.set('learning-workbench-progress', JSON.stringify({ [nodes[0].id]: oldTime }));

function open() {
  const elements = {
    'path-panel': { classList: { contains: () => false } },
    'path-status': { textContent: '', classList: { add() {}, toggle() {} } },
    'progress-info': { textContent: '' }
  };
  const context = vm.createContext({
    ALL_NODES: nodes, ALL_QUIZZES: quizzes, localStorage: store,
    document: { getElementById: id => elements[id] },
    renderPathPanel() {}, renderQuiz() {}
  });
  vm.runInContext('var STORAGE_KEY = "learning-workbench-progress-v2"; var OLD_STORAGE_KEY = "learning-workbench-progress"; var storageAvailable = true; ' + code +
    'var progress = loadProgress(); var readNodes = progress.readNodes; var quizAttempts = progress.quizAttempts;', context);
  return { context, elements };
}

let page = open();
assert.equal(page.context.readNodes[nodes[0].id], oldTime, '旧浏览记录必须迁移');
page.context.saveProgress();
assert.equal(JSON.parse(memory.get('learning-workbench-progress-v2')).readNodes[nodes[0].id], oldTime);
assert.equal(open().context.readNodes[nodes[0].id], oldTime, '刷新后仍能读取记录');

const chapter = quizzes.filter(q => q.type === 'choice' && q.subject === 'riemann' && q.chapter === 'ch1');
assert.ok(chapter.length >= 10);
const wrong = (chapter[0].answer + 1) % chapter[0].options.length;
page.context.recordAttempt(chapter[0], wrong);
page.context.recordAttempt(chapter[0], chapter[0].answer);
assert.equal(page.context.quizAttempts[chapter[0].id].selected, wrong, '首次作答不能被改写');
for (const q of chapter.slice(1, 10)) page.context.recordAttempt(q, q.answer);
let score = page.context.chapterPractice('riemann', 'ch1');
assert.equal(score.total, 10);
assert.equal(score.correct, 9);
assert.equal(score.passed, true);
page = open();
assert.equal(page.context.chapterPractice('riemann', 'ch1').correct, 9, '刷新后计分不变');

const other = chapter[10];
page.context.importProgress({ version: 2, readNodes: { [nodes[1].id]: Date.now() },
  quizAttempts: { [chapter[0].id]: { selected: chapter[0].answer, at: Date.now() },
    [other.id]: { selected: other.answer, at: Date.now() },
    unknown: { selected: 0, at: Date.now() } } });
assert.equal(page.context.quizAttempts[chapter[0].id].selected, wrong, '导入不覆盖本地首次作答');
assert.equal(page.context.quizAttempts[other.id].selected, other.answer);
assert.equal(page.context.readNodes[nodes[1].id] > 0, true);
assert.equal(page.context.quizAttempts.unknown, undefined, '忽略不认识的题');
assert.throws(() => page.context.importProgress({ version: 1 }), /版本 2/);
console.log('进度回归检查通过：旧版迁移、刷新、首次作答、章节达标、备份合并');
