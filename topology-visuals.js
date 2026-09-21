// 代数拓扑逐帧图解：每幅图都明确区分“连续移动”与“商空间识别”。
// 图只承担空间变化过程；严格公式与证明仍由 theorem-details / example-details 给出。

function svg(label, body) {
  return '<svg viewBox="0 0 180 120" role="img" aria-label="' + label + '"><title>' +
    label + '</title>' + body + '</svg>';
}

function stage(number, title, count, picture, text) {
  return '<section class="topo-stage">' +
    '<div class="topo-stage-head"><span class="topo-stage-number">' + number + '</span><strong>' + title + '</strong></div>' +
    '<div class="topo-stage-count">' + count + '</div>' +
    picture +
    '<p>' + text + '</p>' +
    '</section>';
}

function flow(title, lead, stages, takeaway) {
  return '<figure class="topo-process">' +
    '<figcaption><strong>' + title + '</strong><span>' + lead + '</span></figcaption>' +
    '<div class="topo-stage-grid">' + stages.join('') + '</div>' +
    '<div class="topo-process-takeaway"><strong>看图时抓住：</strong>' + takeaway + '</div>' +
    '</figure>';
}

const dotSet0 =
  '<circle class="tv-target" cx="90" cy="60" r="4"/>' +
  '<circle class="tv-point" cx="30" cy="30" r="4"/><circle class="tv-point" cx="70" cy="22" r="4"/>' +
  '<circle class="tv-point" cx="130" cy="28" r="4"/><circle class="tv-point" cx="150" cy="72" r="4"/>' +
  '<circle class="tv-point" cx="122" cy="98" r="4"/><circle class="tv-point" cx="62" cy="100" r="4"/>' +
  '<circle class="tv-point" cx="24" cy="72" r="4"/><circle class="tv-point" cx="102" cy="35" r="4"/>';

const dotSet1 =
  '<circle class="tv-target" cx="90" cy="60" r="4"/>' +
  '<circle class="tv-point" cx="50" cy="40" r="4"/><circle class="tv-point" cx="77" cy="35" r="4"/>' +
  '<circle class="tv-point" cx="117" cy="39" r="4"/><circle class="tv-point" cx="130" cy="68" r="4"/>' +
  '<circle class="tv-point" cx="111" cy="85" r="4"/><circle class="tv-point" cx="71" cy="87" r="4"/>' +
  '<circle class="tv-point" cx="46" cy="68" r="4"/><circle class="tv-point" cx="98" cy="43" r="4"/>';

const dotSet2 =
  '<circle class="tv-target" cx="90" cy="60" r="4"/>' +
  '<circle class="tv-point" cx="70" cy="50" r="4"/><circle class="tv-point" cx="83" cy="47" r="4"/>' +
  '<circle class="tv-point" cx="103" cy="50" r="4"/><circle class="tv-point" cx="110" cy="64" r="4"/>' +
  '<circle class="tv-point" cx="100" cy="73" r="4"/><circle class="tv-point" cx="81" cy="74" r="4"/>' +
  '<circle class="tv-point" cx="68" cy="64" r="4"/><circle class="tv-point" cx="94" cy="51" r="4"/>';

const contraction = flow(
  '连续形变：把代表点沿直线送到原点',
  '公式 H(x,t)=(1−t)x；图中追踪 8 个代表点。',
  [
    stage('0', '初态 t=0', '8 个代表点 + 1 个固定目标点',
      svg('八个代表点处于初始位置', '<rect class="tv-frame" x="8" y="8" width="164" height="104" rx="8"/>' + dotSet0),
      '每个点 x 都保留自己的身份；中心 0 从一开始就不动。'),
    stage('1', '中间态 t=1/3', '仍是 8 个被追踪的点',
      svg('代表点沿射线向原点移动三分之一',
        '<rect class="tv-frame" x="8" y="8" width="164" height="104" rx="8"/>' +
        '<g class="tv-guide"><line x1="30" y1="30" x2="50" y2="40"/><line x1="150" y1="72" x2="130" y2="68"/><line x1="62" y1="100" x2="71" y2="87"/></g>' + dotSet1),
      '没有两点被“粘成一个点”；这里只是同时移动各点。'),
    stage('2', '中间态 t=2/3', '仍是 8 个被追踪的点',
      svg('代表点继续接近原点',
        '<rect class="tv-frame" x="8" y="8" width="164" height="104" rx="8"/>' +
        '<g class="tv-guide"><line x1="50" y1="40" x2="70" y2="50"/><line x1="130" y1="68" x2="110" y2="64"/><line x1="71" y1="87" x2="81" y2="74"/></g>' + dotSet2),
      '对每个固定 x，轨迹 t↦H(x,t) 连续，并始终落在空间里。'),
    stage('3', '终态 t=1', '8 个像点重合为 1 个位置',
      svg('所有代表点在终态到达原点',
        '<rect class="tv-frame" x="8" y="8" width="164" height="104" rx="8"/>' +
        '<circle class="tv-halo" cx="90" cy="60" r="16"/><circle class="tv-target" cx="90" cy="60" r="6"/>' +
        '<text class="tv-label" x="90" y="92" text-anchor="middle">H(x,1)=0</text>'),
      '终态映射是常值映射；原点在整个过程中保持固定。')
  ],
  '形变收缩是“每个点连续搬家”。当 t&lt;1 时，整个 Rⁿ 的像仍是 Rⁿ；图里的数字只是被追踪的代表点数，不能误解为逐步删除空间中的点。'
);

const radialRetraction = flow(
  '穿孔平面径向收缩到圆周',
  '只改变半径，不改变方向；黑色缺口 0 永远不能碰。',
  [
    stage('0', '初态', '6 个代表点，方向各不相同',
      svg('穿孔平面中的六个代表点',
        '<circle class="tv-core" cx="90" cy="60" r="34"/><circle class="tv-hole" cx="90" cy="60" r="5"/>' +
        '<circle class="tv-point" cx="90" cy="14" r="4"/><circle class="tv-point" cx="143" cy="30" r="4"/>' +
        '<circle class="tv-point" cx="151" cy="80" r="4"/><circle class="tv-point" cx="90" cy="104" r="4"/>' +
        '<circle class="tv-point" cx="34" cy="88" r="4"/><circle class="tv-point" cx="48" cy="36" r="4"/>'),
      '目标圆周已经画出；有些点在圆外，也可以选在圆内，但都不能是原点。'),
    stage('1', '沿射线移动', '6 个点仍彼此不同',
      svg('代表点沿固定射线向单位圆移动',
        '<circle class="tv-core" cx="90" cy="60" r="34"/><circle class="tv-hole" cx="90" cy="60" r="5"/>' +
        '<g class="tv-guide"><line x1="90" y1="14" x2="90" y2="26"/><line x1="143" y1="30" x2="119" y2="43"/>' +
        '<line x1="151" y1="80" x2="122" y2="70"/><line x1="34" y1="88" x2="60" y2="75"/></g>' +
        '<circle class="tv-point" cx="90" cy="20" r="4"/><circle class="tv-point" cx="132" cy="36" r="4"/>' +
        '<circle class="tv-point" cx="136" cy="75" r="4"/><circle class="tv-point" cx="90" cy="98" r="4"/>' +
        '<circle class="tv-point" cx="47" cy="82" r="4"/><circle class="tv-point" cx="56" cy="42" r="4"/>'),
      '系数 1−t+t/‖x‖ 始终为正，所以点不会穿过原点换到反方向。'),
    stage('2', '终态', '6 个点落在圆上，未互相识别',
      svg('六个代表点最终位于单位圆',
        '<circle class="tv-core-strong" cx="90" cy="60" r="34"/><circle class="tv-hole" cx="90" cy="60" r="5"/>' +
        '<circle class="tv-point" cx="90" cy="26" r="4"/><circle class="tv-point" cx="119" cy="43" r="4"/>' +
        '<circle class="tv-point" cx="122" cy="70" r="4"/><circle class="tv-point" cx="90" cy="94" r="4"/>' +
        '<circle class="tv-point" cx="60" cy="75" r="4"/><circle class="tv-point" cx="64" cy="38" r="4"/>'),
      '圆上的点从头到尾固定；因此这是强形变收缩。')
  ],
  '这是连续移动，不是商映射。不同方向的点不会被粘合；每条射线只把自己的半径调成 1。'
);

function mobiusRect(height, label) {
  const top = 60 - height / 2;
  const bottom = 60 + height / 2;
  return svg(label,
    '<rect class="tv-sheet" x="24" y="' + top + '" width="132" height="' + height + '" rx="2"/>' +
    '<line class="tv-center" x1="24" y1="60" x2="156" y2="60"/>' +
    '<line class="tv-edge-a" x1="24" y1="' + bottom + '" x2="24" y2="' + top + '"/><polygon class="tv-edge-a-fill" points="20,' + (top + 8) + ' 24,' + top + ' 28,' + (top + 8) + '"/>' +
    '<line class="tv-edge-a" x1="156" y1="' + top + '" x2="156" y2="' + bottom + '"/><polygon class="tv-edge-a-fill" points="152,' + (bottom - 8) + ' 156,' + bottom + ' 160,' + (bottom - 8) + '"/>' +
    '<text class="tv-label" x="90" y="108" text-anchor="middle">(0,s) ∼ (1,−s)</text>');
}

const mobius = flow(
  'Möbius 带收缩到中心圆',
  '先用矩形表示商空间，再把每根横向纤维压到中点。',
  [
    stage('0', '商空间初态', '每个 u 上有一整条区间纤维',
      mobiusRect(72, '带反向端边识别的矩形模型'),
      '左端向上与右端向下配对；这一次反向识别制造了半扭转。'),
    stage('1', 't=1/2', '每根纤维长度减半',
      mobiusRect(40, '横向坐标缩为原来一半'),
      'H([u,s],t)=[u,(1−t)s]；端边关系仍满足 (0,s)∼(1,−s)。'),
    stage('2', 't=3/4', '纤维继续缩短，中心线不动',
      mobiusRect(20, '横向纤维接近中心线'),
      '同一根纤维上的点逐渐靠近，但在终态之前仍是不同点。'),
    stage('3', 't=1', '每根区间纤维压成 1 个中点',
      svg('中心线两端识别成圆',
        '<line class="tv-center-strong" x1="32" y1="60" x2="148" y2="60"/>' +
        '<path class="tv-guide" d="M32 60 C18 60 18 28 90 28 C162 28 162 60 148 60"/>' +
        '<text class="tv-label" x="90" y="92" text-anchor="middle">[0,0]=[1,0]，所以中心线是 S¹</text>'),
      '横向坐标 s 全部变成 0；保留下来的 u 方向首尾相接，正好是一条圆。')
  ],
  '先识别端边得到 Möbius 带，再做形变收缩。端边识别与纤维收缩是两个不同操作，不能混在一句“捏成圆”里。'
);

const torus = flow(
  '环面：正方形两次对边粘合',
  '按 a 边、b 边的顺序追踪顶点等价类。',
  [
    stage('0', '初始多边形', '4 个角点，4 条边，1 个面',
      svg('标有同向对边的正方形',
        '<rect class="tv-sheet" x="38" y="14" width="104" height="92"/>' +
        '<line class="tv-edge-a" x1="52" y1="106" x2="128" y2="106"/><polygon class="tv-edge-a-fill" points="128,102 140,106 128,110"/>' +
        '<line class="tv-edge-a" x1="52" y1="14" x2="128" y2="14"/><polygon class="tv-edge-a-fill" points="128,10 140,14 128,18"/>' +
        '<line class="tv-edge-b" x1="38" y1="94" x2="38" y2="26"/><polygon class="tv-edge-b-fill" points="34,26 38,14 42,26"/>' +
        '<line class="tv-edge-b" x1="142" y1="94" x2="142" y2="26"/><polygon class="tv-edge-b-fill" points="138,26 142,14 146,26"/>' +
        '<text class="tv-label" x="29" y="116">A</text><text class="tv-label" x="145" y="116">B</text><text class="tv-label" x="145" y="12">C</text><text class="tv-label" x="29" y="12">D</text>'),
      '上下 a 边箭头同向，左右 b 边箭头也同向；最终边界词为 aba⁻¹b⁻¹。'),
    stage('1', '先粘 a 边', 'A∼D，B∼C：角点类从 4 个变 2 个',
      svg('上下边粘成圆柱',
        '<ellipse class="tv-edge-a" cx="90" cy="24" rx="48" ry="12"/><ellipse class="tv-edge-a" cx="90" cy="96" rx="48" ry="12"/>' +
        '<line class="tv-line" x1="42" y1="24" x2="42" y2="96"/><line class="tv-line" x1="138" y1="24" x2="138" y2="96"/>' +
        '<path class="tv-guide" d="M52 20 C70 7 110 7 128 20"/><text class="tv-label" x="90" y="63" text-anchor="middle">a 边已成为绕圆柱的一圈</text>'),
      '第一对边合并为一条 a；未粘的两侧成为圆柱的两个边界圆。'),
    stage('2', '再粘 b 边', '2 个角点类再合成 1 个',
      svg('圆柱两端同向粘成环面',
        '<ellipse class="tv-core-strong" cx="90" cy="60" rx="62" ry="34"/><ellipse class="tv-hole-ring" cx="90" cy="60" rx="28" ry="13"/>' +
        '<path class="tv-edge-a" d="M28 60 C38 28 142 28 152 60"/><path class="tv-edge-b" d="M90 26 C116 34 116 86 90 94"/>' +
        '<text class="tv-label" x="90" y="114" text-anchor="middle">V=1，E={a,b}，F=1</text>'),
      '两个边界圆按相同方向配对，得到环面；四个原角点属于同一个等价类。')
  ],
  '粘合不是让边消失，而是把一对边视为同一条边。最终 CW 计数是 1 个顶点、2 条一胞腔、1 个二胞腔。'
);

const klein = flow(
  'Klein 瓶：第二次粘合带反向',
  '与环面只差一对边的方向，但结果已经不可定向。',
  [
    stage('0', '初始多边形', '4 个角点，边界词 aba⁻¹b',
      svg('Klein瓶的正方形边识别',
        '<rect class="tv-sheet" x="38" y="14" width="104" height="92"/>' +
        '<line class="tv-edge-a" x1="52" y1="106" x2="128" y2="106"/><polygon class="tv-edge-a-fill" points="128,102 140,106 128,110"/>' +
        '<line class="tv-edge-a" x1="52" y1="14" x2="128" y2="14"/><polygon class="tv-edge-a-fill" points="128,10 140,14 128,18"/>' +
        '<line class="tv-edge-b" x1="38" y1="26" x2="38" y2="94"/><polygon class="tv-edge-b-fill" points="34,94 38,106 42,94"/>' +
        '<line class="tv-edge-b" x1="142" y1="94" x2="142" y2="26"/><polygon class="tv-edge-b-fill" points="138,26 142,14 146,26"/>' +
        '<text class="tv-label" x="90" y="66" text-anchor="middle">b 边箭头相反</text>'),
      'a 边的粘法与环面相同；b 边一上一下，记录一次反射。'),
    stage('1', '先粘 a 边', '4 个角点先变成 2 类',
      svg('先形成圆柱',
        '<ellipse class="tv-edge-a" cx="90" cy="24" rx="48" ry="12"/><ellipse class="tv-edge-a" cx="90" cy="96" rx="48" ry="12"/>' +
        '<line class="tv-line" x1="42" y1="24" x2="42" y2="96"/><line class="tv-line" x1="138" y1="24" x2="138" y2="96"/>' +
        '<text class="tv-label" x="90" y="62" text-anchor="middle">剩下两个边界圆</text>' +
        '<text class="tv-label" x="90" y="76" text-anchor="middle">下一步要反向配对</text>'),
      '到这里与环面完全一样；差别只在第二次粘合。'),
    stage('2', '反向粘 b 边', '两边界圆按 θ∼−θ 配对',
      svg('一端翻转后粘合的示意',
        '<path class="tv-core-strong" d="M34 84 C34 25 68 20 88 50 C105 76 126 91 148 72"/>' +
        '<path class="tv-core-strong" d="M34 84 C57 104 82 93 94 68 C108 39 124 26 148 40"/>' +
        '<ellipse class="tv-hole-ring" cx="56" cy="82" rx="20" ry="9"/><path class="tv-cross" d="M88 50 C102 62 106 68 112 76"/>' +
        '<text class="tv-label" x="90" y="114" text-anchor="middle">图中交叉仅是 R³ 浸入示意</text>'),
      '反向配对使沿某条闭路走一圈后局部左右手性翻转，因此空间不可定向。')
  ],
  '环面和 Klein 瓶都有 V=1、E=2、F=1；区别藏在二胞腔的附着词中，所以只数胞腔不能区分它们。'
);

function liftPicture(progress, endLabel) {
  const x = 24 + 132 * progress;
  const angle = -90 + 360 * progress;
  const rad = angle * Math.PI / 180;
  const px = 90 + 27 * Math.cos(rad);
  const py = 88 + 27 * Math.sin(rad);
  return svg('圆周道路与实直线上的唯一提升进度',
    '<line class="tv-line" x1="18" y1="28" x2="162" y2="28"/>' +
    '<circle class="tv-fiber" cx="24" cy="28" r="4"/><circle class="tv-fiber" cx="156" cy="28" r="4"/>' +
    '<line class="tv-edge-a" x1="24" y1="28" x2="' + x + '" y2="28"/><circle class="tv-point" cx="' + x + '" cy="28" r="5"/>' +
    '<text class="tv-label" x="24" y="15" text-anchor="middle">0</text><text class="tv-label" x="156" y="15" text-anchor="middle">1</text>' +
    '<circle class="tv-core" cx="90" cy="88" r="27"/><path class="tv-edge-b" d="M90 61 A27 27 0 ' + (progress > 0.5 ? '1' : '0') + ' 1 ' + px + ' ' + py + '"/>' +
    '<circle class="tv-point-b" cx="' + px + '" cy="' + py + '" r="5"/><text class="tv-label" x="90" y="94" text-anchor="middle">' + endLabel + '</text>');
}

const pathLift = flow(
  '道路提升：底空间绕一圈，提升端点走到下一层',
  '覆叠 p(t)=e²πⁱᵗ；先指定提升起点 0。',
  [
    stage('0', '起点', '纤维 p⁻¹(1)=Z，先选其中的 0',
      liftPicture(0, 'γ(0)=1'),
      '同一个底空间起点上方有无穷多个整数点；选择 0 才能确定唯一提升。'),
    stage('1', '第一小段', '底路走 1/4 圈，提升走到 1/4',
      liftPicture(0.25, '1/4 圈'),
      '在一个均匀覆盖邻域里，选定覆盖片后可以用局部逆映射。'),
    stage('2', '继续拼接', '底路走 1/2 圈，提升走到 1/2',
      liftPicture(0.5, '1/2 圈'),
      '上一段终点决定下一段必须进入哪一个覆盖片，所以不能随意跳层。'),
    stage('3', '绕完一圈', '底点回到 1，提升端点是 1',
      liftPicture(1, 'γ(1)=1'),
      '底路闭合不代表提升闭合；提升从整数 0 走到整数 1，记录绕数为 1。')
  ],
  '每一小段都用局部逆提升，相邻段只在一个共同端点拼接。唯一性正是“共同端点决定下一张覆盖片”。'
);

const homotopyLift = flow(
  '同伦提升：按小方格逐层扩张',
  '底边提升给定后，共同边迫使相邻方格选择相同覆盖片。',
  [
    stage('0', '已知底边', '3×3 方格；只知道最下面一行的边界值',
      svg('同伦方格仅底边已有提升',
        '<rect class="tv-grid-box" x="30" y="12" width="120" height="96"/>' +
        '<path class="tv-grid" d="M70 12V108 M110 12V108 M30 44H150 M30 76H150"/>' +
        '<line class="tv-edge-a" x1="30" y1="108" x2="150" y2="108"/><text class="tv-label" x="90" y="102" text-anchor="middle">已给定提升</text>'),
      '紧致方形 I×I 被切成有限小格，使每格像都落入一个均匀覆盖邻域。'),
    stage('1', '提升第一格', '左下小格由一个已知角点确定',
      svg('左下方格完成提升',
        '<rect class="tv-grid-box" x="30" y="12" width="120" height="96"/><path class="tv-grid" d="M70 12V108 M110 12V108 M30 44H150 M30 76H150"/>' +
        '<rect class="tv-active-cell" x="30" y="76" width="40" height="32"/><line class="tv-edge-a" x1="30" y1="108" x2="150" y2="108"/>'),
      '选包含左下角提升点的覆盖片，在整个小格内使用同一个局部逆。'),
    stage('2', '沿公共边扩张', '底层 3 格，再向上一层传播',
      svg('底层和中层部分方格完成提升',
        '<rect class="tv-grid-box" x="30" y="12" width="120" height="96"/><path class="tv-grid" d="M70 12V108 M110 12V108 M30 44H150 M30 76H150"/>' +
        '<rect class="tv-active-cell" x="30" y="76" width="120" height="32"/><rect class="tv-active-cell-b" x="30" y="44" width="40" height="32"/>'),
      '相邻格在公共边上投影相同且有同一起点；道路提升唯一性使两份公式在整条边上相等。'),
    stage('3', '全部完成', '9 个小格粘成一个连续提升',
      svg('九个方格均完成提升',
        '<rect class="tv-active-all" x="30" y="12" width="120" height="96"/><path class="tv-grid" d="M70 12V108 M110 12V108 M30 44H150 M30 76H150"/>' +
        '<text class="tv-label" x="90" y="64" text-anchor="middle">H̃ 已定义</text>'),
      '有限次扩张覆盖整个方形；粘贴引理把各格上的连续提升合成整体提升。')
  ],
  '二维同伦不是“一步整体抬起”，而是小格接小格地取局部逆；每次只拼已经一致的公共边。'
);

const wedge = flow(
  '楔和：把两个圆各选一个点并识别',
  '这是商空间粘合，只有被指定的两个点合并。',
  [
    stage('0', '两个分离圆', '2 个连通分支，标出点 x₁、x₂',
      svg('两个彼此分离的圆',
        '<circle class="tv-core-strong" cx="52" cy="60" r="31"/><circle class="tv-core-strong" cx="128" cy="60" r="31"/>' +
        '<circle class="tv-point" cx="83" cy="60" r="5"/><circle class="tv-point-b" cx="97" cy="60" r="5"/>' +
        '<text class="tv-label" x="52" y="64" text-anchor="middle">S¹</text><text class="tv-label" x="128" y="64" text-anchor="middle">S¹</text>'),
      '除 x₁ 与 x₂ 外，两个圆上的所有点都保持各自身份。'),
    stage('1', '移动图形便于观察', '两标记点靠近，但尚未识别',
      svg('两圆的标记点靠近',
        '<circle class="tv-core-strong" cx="62" cy="60" r="31"/><circle class="tv-core-strong" cx="118" cy="60" r="31"/>' +
        '<circle class="tv-point" cx="90" cy="60" r="5"/><circle class="tv-point-b" cx="90" cy="60" r="3"/>' +
        '<text class="tv-label" x="90" y="108" text-anchor="middle">画得重合不等于已经取商</text>'),
      '这一步只是画法；真正的数学操作由下一步的等价关系完成。'),
    stage('2', '取商 x₁∼x₂', '2 个指定点合成 1 个楔点',
      svg('两个圆在一个楔点相交',
        '<circle class="tv-core-strong" cx="60" cy="60" r="30"/><circle class="tv-core-strong" cx="120" cy="60" r="30"/>' +
        '<circle class="tv-target" cx="90" cy="60" r="6"/><text class="tv-label" x="90" y="105" text-anchor="middle">π₁(S¹∨S¹)=F(a,b)</text>'),
      '最终得到 8 字形；两个圆各保留一个独立绕行生成元 a、b。')
  ],
  '“碰在一起”是图形位置，“识别为同一点”是等价关系。楔和只合并指定基点，不合并两条圆上的其余点。'
);

const vanKampen = flow(
  'Van Kampen：把一条整体环路拆成局部词',
  '每段落在 U 或 V；转场点放在道路连通的 U∩V 中。',
  [
    stage('0', '开集覆盖', 'X=U∪V，重叠区 U∩V 非空且道路连通',
      svg('两个重叠开集覆盖空间',
        '<ellipse class="tv-region-a" cx="68" cy="60" rx="54" ry="38"/><ellipse class="tv-region-b" cx="112" cy="60" rx="54" ry="38"/>' +
        '<text class="tv-label-a" x="42" y="38">U</text><text class="tv-label-b" x="134" y="38">V</text>' +
        '<circle class="tv-target" cx="90" cy="60" r="5"/><text class="tv-label" x="90" y="80" text-anchor="middle">x₀∈U∩V</text>'),
      '公共基点放在重叠区；重叠区中的道路用于把各段接回基点。'),
    stage('1', '细分环路', 'γ 被切成 5 段：U、V、U、V、U',
      svg('环路按所在开集分段着色',
        '<ellipse class="tv-region-a" cx="68" cy="60" rx="54" ry="38"/><ellipse class="tv-region-b" cx="112" cy="60" rx="54" ry="38"/>' +
        '<path class="tv-edge-a" d="M90 60 C45 20 35 82 72 91"/><path class="tv-edge-b" d="M72 91 C105 110 154 91 143 51"/>' +
        '<path class="tv-edge-a" d="M143 51 C129 20 102 35 90 60"/>' +
        '<circle class="tv-target" cx="90" cy="60" r="5"/>'),
      'Lebesgue 数保证可以细分得足够短，使每一段完整落在一个开集里。'),
    stage('2', '闭合局部片段', '在 U∩V 中加入连接路，得到 U、V 内的基点环路',
      svg('分段经公共连接路闭合',
        '<circle class="tv-core" cx="55" cy="58" r="31"/><circle class="tv-core-b" cx="125" cy="58" r="31"/>' +
        '<circle class="tv-target" cx="90" cy="58" r="5"/><path class="tv-guide" d="M84 52 C72 39 64 39 55 41 M96 52 C108 39 116 39 125 41"/>' +
        '<text class="tv-label-a" x="55" y="104" text-anchor="middle">U 中的词</text><text class="tv-label-b" x="125" y="104" text-anchor="middle">V 中的词</text>'),
      '加入连接路后，每段都代表 π₁(U) 或 π₁(V) 中的元素。'),
    stage('3', '合并为群表示', '自由积后令重叠区的两种像相等',
      svg('自由积商关系的结构图',
        '<rect class="tv-box-a" x="18" y="18" width="56" height="30" rx="6"/><text class="tv-label" x="46" y="37" text-anchor="middle">π₁(U)</text>' +
        '<rect class="tv-box-b" x="106" y="18" width="56" height="30" rx="6"/><text class="tv-label" x="134" y="37" text-anchor="middle">π₁(V)</text>' +
        '<rect class="tv-box" x="52" y="76" width="76" height="30" rx="6"/><text class="tv-label" x="90" y="95" text-anchor="middle">π₁(X)</text>' +
        '<line class="tv-line" x1="46" y1="48" x2="78" y2="76"/><line class="tv-line" x1="134" y1="48" x2="102" y2="76"/>'),
      '先允许 U、V 中的词自由交替，再商掉 i₍*₎(ω)=j₍*₎(ω) 的重叠关系。')
  ],
  '拓扑上的“切环路”对应代数上的“写成词”；重叠区提供的不是新生成元，而是告诉两边哪些词必须视为同一个。'
);

const simplexGluing = flow(
  '两个三角形沿一条公共边拼成方形',
  '逐项追踪顶点、边、面，并看公共边为何在边界中抵消。',
  [
    stage('0', '尚未粘合', 'V=6，E=6，F=2',
      svg('两个分离的有向三角形',
        '<polygon class="tv-triangle-a" points="18,92 70,92 44,26"/><polygon class="tv-triangle-b" points="110,92 162,92 136,26"/>' +
        '<text class="tv-label" x="44" y="112" text-anchor="middle">[0,1,2]</text><text class="tv-label" x="136" y="112" text-anchor="middle">[1,3,2]</text>'),
      '此时两份“1、2”只是标签相同，仍是两组三角形中的不同顶点。'),
    stage('1', '识别公共边', '两对顶点合并；两条标记边合成 1 条',
      svg('两条公共边方向相反后配对',
        '<polygon class="tv-triangle-a" points="24,96 90,96 90,24"/><polygon class="tv-triangle-b" points="90,96 156,24 90,24"/>' +
        '<line class="tv-edge-a" x1="90" y1="28" x2="90" y2="92"/><polygon class="tv-edge-a-fill" points="86,40 90,28 94,40"/>' +
        '<line class="tv-edge-b" x1="96" y1="92" x2="96" y2="28"/><polygon class="tv-edge-b-fill" points="92,80 96,92 100,80"/>'),
      '同一公共边在两个三角形的诱导方向相反：一份向上，一份向下。'),
    stage('2', '完成复形', 'V=4，E=5，F=2',
      svg('方形带一条内部对角线',
        '<rect class="tv-sheet" x="34" y="18" width="112" height="84"/><line class="tv-core-strong" x1="34" y1="102" x2="146" y2="18"/>' +
        '<circle class="tv-vertex" cx="34" cy="18" r="4"/><circle class="tv-vertex" cx="146" cy="18" r="4"/>' +
        '<circle class="tv-vertex" cx="34" cy="102" r="4"/><circle class="tv-vertex" cx="146" cy="102" r="4"/>'),
      '公共边仍是复形中的一条边，只是不属于外边界。'),
    stage('3', '求总边界', '内部边系数 +1−1=0',
      svg('两个三角形的内部边界项抵消',
        '<rect class="tv-sheet" x="34" y="18" width="112" height="84"/><line class="tv-muted-line" x1="34" y1="102" x2="146" y2="18"/>' +
        '<path class="tv-edge-a" d="M34 102 L34 18 L146 18"/><path class="tv-edge-b" d="M146 18 L146 102 L34 102"/>' +
        '<text class="tv-label" x="90" y="62" text-anchor="middle">共享边：+e−e=0</text>'),
      '两个面相加时，公共边出现两次且符号相反，只留下外部四条边。')
  ],
  '“拼接后少了几条边”要按等价类数；“求边界后哪些边消失”要按系数相消数。两种消失的原因不同。'
);

const rp2Cells = flow(
  'RP² 的 CW 构造与胞腔边界',
  '先造一骨架 S¹，再把二维圆盘边界绕两圈粘上去。',
  [
    stage('0', '零骨架', '1 个零胞腔 e⁰',
      svg('单个零胞腔', '<circle class="tv-target" cx="90" cy="60" r="8"/><text class="tv-label" x="90" y="88" text-anchor="middle">X⁰={e⁰}</text>'),
      '所有后续胞腔的附着都从这个点和已有骨架开始。'),
    stage('1', '附着一胞腔', '区间两端都粘到 e⁰；V=1，E=1',
      svg('区间两端识别形成圆',
        '<line class="tv-edge-a" x1="30" y1="28" x2="150" y2="28"/><circle class="tv-target" cx="30" cy="28" r="5"/><circle class="tv-target" cx="150" cy="28" r="5"/>' +
        '<path class="tv-core-strong" d="M30 82 C30 35 150 35 150 82 C150 112 30 112 30 82"/><circle class="tv-target" cx="30" cy="82" r="5"/>' +
        '<text class="tv-label" x="90" y="114" text-anchor="middle">X¹≅S¹</text>'),
      '两个端点合成同一个零胞腔；区间内部变成一条闭合的一胞腔 e¹。'),
    stage('2', '准备附着二胞腔', '∂D² 沿 e¹ 绕 2 圈',
      svg('圆盘边界二重覆盖一骨架',
        '<circle class="tv-face" cx="55" cy="60" r="35"/><path class="tv-edge-a" d="M55 25 A35 35 0 1 1 54 25"/>' +
        '<circle class="tv-core-strong" cx="135" cy="60" r="28"/><path class="tv-guide" d="M88 42 C105 24 116 24 127 33 M88 78 C105 96 116 96 127 87"/>' +
        '<text class="tv-label" x="135" y="64" text-anchor="middle">绕 2 次</text>'),
      '附着映射 S¹→S¹ 的度数是 2；每个目标方向有两个带同号的原像。'),
    stage('3', '取商得到 RP²', 'V=1，E=1，F=1；d₂ 是乘 2',
      svg('RP2胞腔链复形',
        '<rect class="tv-box" x="16" y="25" width="42" height="28" rx="6"/><text class="tv-label" x="37" y="43" text-anchor="middle">C₂=Z</text>' +
        '<rect class="tv-box" x="69" y="25" width="42" height="28" rx="6"/><text class="tv-label" x="90" y="43" text-anchor="middle">C₁=Z</text>' +
        '<rect class="tv-box" x="122" y="25" width="42" height="28" rx="6"/><text class="tv-label" x="143" y="43" text-anchor="middle">C₀=Z</text>' +
        '<text class="tv-label-a" x="64" y="20" text-anchor="middle">×2</text><text class="tv-label-b" x="117" y="20" text-anchor="middle">0</text>' +
        '<text class="tv-label" x="90" y="86" text-anchor="middle">H₁=ker d₁ / im d₂ = Z/2</text>'),
      '二胞腔没有增加新的顶点或一胞腔；它增加关系 2e¹=0。')
  ],
  '胞腔数告诉链群，附着映射的度数告诉边界矩阵。RP² 的 Z/2 扭转正是“边界绕两圈”留下的代数痕迹。'
);

const suspension = flow(
  '悬挂：把 X×I 的两端分别压成两个点',
  '上端只互相识别为 N，下端只互相识别为 S。',
  [
    stage('0', '乘积圆柱', '每个高度都有一份 X；以 X=S¹ 为例',
      svg('圆周乘区间形成圆柱',
        '<ellipse class="tv-core" cx="90" cy="24" rx="48" ry="12"/><ellipse class="tv-core" cx="90" cy="96" rx="48" ry="12"/>' +
        '<line class="tv-line" x1="42" y1="24" x2="42" y2="96"/><line class="tv-line" x1="138" y1="24" x2="138" y2="96"/>' +
        '<text class="tv-label" x="90" y="64" text-anchor="middle">S¹×I</text>'),
      '顶部圆和底部圆仍各有无穷多个点，中间各层保持不变。'),
    stage('1', '压缩顶部', 'X×{1} 的所有点合成北极 N',
      svg('圆柱顶部收成一点',
        '<circle class="tv-target" cx="90" cy="18" r="6"/><ellipse class="tv-core" cx="90" cy="96" rx="48" ry="12"/>' +
        '<line class="tv-line" x1="42" y1="96" x2="90" y2="18"/><line class="tv-line" x1="138" y1="96" x2="90" y2="18"/>' +
        '<text class="tv-label" x="101" y="16">N</text>'),
      '只有同在顶部的点被识别；顶部点不会与底部点或中间点合并。'),
    stage('2', '再压缩底部', 'X×{0} 的所有点合成南极 S',
      svg('圆柱两端都收成点形成双锥',
        '<circle class="tv-target" cx="90" cy="14" r="6"/><circle class="tv-target" cx="90" cy="106" r="6"/>' +
        '<ellipse class="tv-core" cx="90" cy="60" rx="48" ry="14"/><line class="tv-line" x1="42" y1="60" x2="90" y2="14"/>' +
        '<line class="tv-line" x1="138" y1="60" x2="90" y2="14"/><line class="tv-line" x1="42" y1="60" x2="90" y2="106"/><line class="tv-line" x1="138" y1="60" x2="90" y2="106"/>'),
      '两个端点类 N、S 彼此不同；中间 X×(0,1) 没有额外识别。'),
    stage('3', '识别最终形状', 'ΣS¹ 同胚于 S²',
      svg('双锥平滑后是二球面',
        '<ellipse class="tv-face" cx="90" cy="60" rx="48" ry="52"/><ellipse class="tv-guide" cx="90" cy="60" rx="48" ry="14"/>' +
        '<circle class="tv-target" cx="90" cy="8" r="4"/><circle class="tv-target" cx="90" cy="112" r="4"/>' +
        '<text class="tv-label" x="90" y="64" text-anchor="middle">ΣS¹≅S²</text>'),
      '把尖角平滑只改变画法，不改变拓扑类型；一般 ΣSⁿ≅Sⁿ⁺¹。')
  ],
  '悬挂是两个独立的商关系：顶部全部合成 N，底部全部合成 S。绝不能把上下两端也互相粘成同一个点。'
);

const elementaryCollapse = flow(
  '初等塌缩：删去一个单形和它的自由面',
  '以填充三角形 σ=[v₀,v₁,v₂] 为例，自由面 τ=[v₁,v₂] 没被别的三角形使用。',
  [
    stage('0', '检查自由面', '1 个二单形；τ 只属于 σ',
      svg('三角形的一条自由边被标出',
        '<polygon class="tv-triangle-a" points="90,14 24,102 156,102"/>' +
        '<line class="tv-edge-b" x1="30" y1="102" x2="150" y2="102"/>' +
        '<text class="tv-label" x="90" y="116" text-anchor="middle">τ=[v₁,v₂] 是自由面</text>' +
        '<text class="tv-label" x="90" y="34" text-anchor="middle">v₀</text>'),
      '“自由”表示 τ 不再属于任何其他二单形；否则删除它会把邻居也撕开。'),
    stage('1', '取最小重心坐标', 'm=min(λ₁,λ₂)',
      svg('三角形内一点用重心坐标表示',
        '<polygon class="tv-triangle-a" points="90,14 24,102 156,102"/>' +
        '<circle class="tv-point" cx="102" cy="66" r="5"/>' +
        '<line class="tv-guide" x1="102" y1="66" x2="90" y2="14"/><line class="tv-guide" x1="102" y1="66" x2="24" y2="102"/><line class="tv-guide" x1="102" y1="66" x2="156" y2="102"/>' +
        '<text class="tv-label" x="103" y="58">λ=(λ₀,λ₁,λ₂)</text>'),
      '从 λ₁、λ₂ 同时减去 m，再把减掉的 2m 加到 λ₀；至少一个新坐标变成 0。'),
    stage('2', '沿线段移动', '每点连续移向其像 r(x)',
      svg('内部点向保留的两条边移动',
        '<polygon class="tv-triangle-a" points="90,14 24,102 156,102"/>' +
        '<line class="tv-edge-b" x1="24" y1="102" x2="156" y2="102"/>' +
        '<circle class="tv-point" cx="102" cy="66" r="5"/><circle class="tv-target" cx="122" cy="79" r="5"/>' +
        '<line class="tv-edge-a" x1="102" y1="66" x2="122" y2="79"/>' +
        '<text class="tv-label" x="110" y="54">H(x,t)</text>'),
      '单形是凸集，所以连接 x 与 r(x) 的整条线段仍在 σ 内；保留部分上的点满足 m=0，因而全程不动。'),
    stage('3', '完成塌缩', 'σ 与 τ 的开胞腔消失；其余子复形固定',
      svg('三角形塌缩为两条边组成的V形',
        '<path class="tv-core-strong" d="M24 102 L90 14 L156 102"/>' +
        '<circle class="tv-vertex" cx="90" cy="14" r="5"/><circle class="tv-vertex" cx="24" cy="102" r="5"/><circle class="tv-vertex" cx="156" cy="102" r="5"/>' +
        '<text class="tv-label" x="90" y="116" text-anchor="middle">保留 σ 的其余面</text>'),
      '在 σ 外定义恒等映射；两部分在公共子复形上一致，所以能粘成整个复形的强形变收缩。')
  ],
  '能逐胞腔塌缩的关键是“自由面”。闭圆盘不能保持整个边界不动而收缩到边界；省略自由面条件会直接违反无收缩定理。'
);

const circleCoverClasses = flow(
  '圆周覆叠分类：先看整数层，再按 nZ 分组',
  '以 H=3Z 为例；纤维中的整数不是被删除，而是每相差 3 的点被归入同一轨道。',
  [
    stage('0', '万有覆叠的纤维', '基点上方有 …,−2,−1,0,1,2,… 无穷多个点',
      svg('实线覆盖圆周时基点纤维由所有整数构成',
        '<line class="tv-line" x1="14" y1="60" x2="166" y2="60"/>' +
        '<circle class="tv-fiber" cx="28" cy="60" r="5"/><circle class="tv-fiber" cx="59" cy="60" r="5"/><circle class="tv-fiber" cx="90" cy="60" r="5"/><circle class="tv-fiber" cx="121" cy="60" r="5"/><circle class="tv-fiber" cx="152" cy="60" r="5"/>' +
        '<text class="tv-label" x="28" y="82" text-anchor="middle">−2</text><text class="tv-label" x="59" y="82" text-anchor="middle">−1</text><text class="tv-label" x="90" y="82" text-anchor="middle">0</text><text class="tv-label" x="121" y="82" text-anchor="middle">1</text><text class="tv-label" x="152" y="82" text-anchor="middle">2</text>'),
      '底空间绕一圈，提升端点就从整数 k 走到 k+1。'),
    stage('1', '让 H=3Z 作用', '每次平移 3；整数分成 3 个轨道',
      svg('整数按模三分成三个轨道',
        '<path class="tv-edge-a" d="M20 26 H160"/><path class="tv-edge-b" d="M20 60 H160"/><path class="tv-core-strong" d="M20 94 H160"/>' +
        '<text class="tv-label-a" x="90" y="20" text-anchor="middle">… −3 ∼ 0 ∼ 3 …</text>' +
        '<text class="tv-label-b" x="90" y="54" text-anchor="middle">… −2 ∼ 1 ∼ 4 …</text>' +
        '<text class="tv-label" x="90" y="88" text-anchor="middle">… −1 ∼ 2 ∼ 5 …</text>'),
      '只把差为 3 的倍数的层识别；三个轨道分别记作 [0]、[1]、[2]。'),
    stage('2', '形成中间覆叠', '无穷多个整数层压成 3 个纤维点',
      svg('商空间纤维剩三个轨道点',
        '<circle class="tv-core" cx="90" cy="60" r="42"/>' +
        '<circle class="tv-point" cx="90" cy="18" r="6"/><circle class="tv-point-b" cx="126" cy="81" r="6"/><circle class="tv-target" cx="54" cy="81" r="6"/>' +
        '<text class="tv-label" x="90" y="13" text-anchor="middle">[0]</text><text class="tv-label" x="139" y="87">[1]</text><text class="tv-label" x="36" y="87">[2]</text>'),
      '轨道商 R/3Z 仍是一条圆；它到 R/Z=S¹ 的映射有 3 层。'),
    stage('3', '沿底圆连续提升', '1 圈使 [0]→[1]→[2]；第 3 圈才回 [0]',
      svg('三层纤维在每绕一圈后循环',
        '<rect class="tv-box" x="14" y="42" width="38" height="30" rx="6"/><rect class="tv-box" x="71" y="42" width="38" height="30" rx="6"/><rect class="tv-box" x="128" y="42" width="38" height="30" rx="6"/>' +
        '<text class="tv-label" x="33" y="61" text-anchor="middle">[0]</text><text class="tv-label" x="90" y="61" text-anchor="middle">[1]</text><text class="tv-label" x="147" y="61" text-anchor="middle">[2]</text>' +
        '<path class="tv-edge-a" d="M52 57 H71 M109 57 H128"/><path class="tv-edge-a" d="M147 76 C147 108 33 108 33 76"/>'),
      '闭合判据正是绕数属于 3Z；这把子群条件变成可观察的换层过程。')
  ],
  '子群 nZ 的轨道就是整数模 n 的 n 个类；“商掉 nZ”不是丢掉层，而是把相差 n 的层视为同一层。'
);

const latticeCover = flow(
  '环面覆叠：按子群生成元逐个粘平面',
  '子群的秩等于已经周期化的独立方向数。',
  [
    stage('0', 'H=0', '0 个平移方向被识别；形状是平面 R²',
      svg('未作平移识别的平面网格',
        '<path class="tv-grid" d="M20 20H160 M20 50H160 M20 80H160 M20 110H160 M20 20V110 M55 20V110 M90 20V110 M125 20V110 M160 20V110"/>' +
        '<circle class="tv-point" cx="55" cy="50" r="5"/><text class="tv-label" x="63" y="44">x</text>'),
      '所有格点平移副本仍是不同点；这是环面的万有覆叠。'),
    stage('1', '加入 v₁', '识别 x∼x+kv₁；1 个方向变成周期',
      svg('平面中一对平行边准备识别',
        '<rect class="tv-sheet" x="38" y="14" width="104" height="92"/>' +
        '<line class="tv-edge-a" x1="38" y1="98" x2="38" y2="24"/><line class="tv-edge-a" x1="142" y1="98" x2="142" y2="24"/>' +
        '<path class="tv-guide" d="M48 24 C72 4 108 4 132 24"/><text class="tv-label" x="90" y="116" text-anchor="middle">左右边按 v₁ 配对</text>'),
      '每条与 v₁ 平行的整数平移轨道被合并，但另一个方向仍无限延伸。'),
    stage('2', '得到秩 1 商', '形状是圆柱 S¹×R；只有一个方向封口',
      svg('一个方向粘合后形成圆柱',
        '<ellipse class="tv-core" cx="90" cy="24" rx="46" ry="12"/><ellipse class="tv-core" cx="90" cy="96" rx="46" ry="12"/>' +
        '<line class="tv-line" x1="44" y1="24" x2="44" y2="96"/><line class="tv-line" x1="136" y1="24" x2="136" y2="96"/>' +
        '<text class="tv-label" x="90" y="64" text-anchor="middle">R²/⟨v₁⟩</text>'),
      '横截面已是圆，轴向仍是一条实线，所以覆叠层数仍为无限。'),
    stage('3', '再加入独立 v₂', '第二个方向也封口；形状变成环面',
      svg('圆柱两端再识别形成环面',
        '<ellipse class="tv-core-strong" cx="90" cy="60" rx="62" ry="34"/><ellipse class="tv-hole-ring" cx="90" cy="60" rx="28" ry="13"/>' +
        '<path class="tv-edge-a" d="M28 60 C38 28 142 28 152 60"/><path class="tv-edge-b" d="M90 26 C116 34 116 86 90 94"/>' +
        '<text class="tv-label" x="90" y="114" text-anchor="middle">R²/⟨v₁,v₂⟩</text>'),
      '若 v₁、v₂ 是整数独立向量，所得环面到标准环面的层数为 |det(v₁,v₂)|。')
  ],
  '不识别、识别一个方向、识别两个方向依次得到平面、圆柱、环面；每个新增子群生成元都对应一次明确的对边粘合。'
);

const schreierCover = flow(
  '8 字形的二重覆叠：从纤维顶点逐条添边',
  '例子取 a 交换两层、b 保持层号；每一步都检查每个顶点的局部边型。',
  [
    stage('0', '先放纤维', '底图 1 个顶点；二重覆叠先画 v₀、v₁ 两点',
      svg('两个尚未连边的纤维顶点',
        '<circle class="tv-target" cx="52" cy="60" r="8"/><circle class="tv-target" cx="128" cy="60" r="8"/>' +
        '<text class="tv-label" x="52" y="86" text-anchor="middle">v₀=H</text><text class="tv-label" x="128" y="86" text-anchor="middle">v₁=Ha</text>'),
      '这两个点都是底图楔点的原像；此时还没有加入 a、b 边。'),
    stage('1', '加入 a 边', 'a 使层号翻转；添加两条有向 a 提升边',
      svg('两个顶点间有两条相反方向的a边',
        '<circle class="tv-target" cx="40" cy="60" r="7"/><circle class="tv-target" cx="140" cy="60" r="7"/>' +
        '<path class="tv-edge-a" d="M47 54 C72 22 108 22 133 54"/><path class="tv-edge-a" d="M133 66 C108 98 72 98 47 66"/>' +
        '<text class="tv-label-a" x="90" y="24" text-anchor="middle">a</text><text class="tv-label-a" x="90" y="106" text-anchor="middle">a</text>'),
      '从 v₀ 读 a 到 v₁，从 v₁ 再读 a 回 v₀；每个顶点都有一条出 a 边。'),
    stage('2', '加入 b 边', 'b 不换层；在每个顶点各添一个 b 环',
      svg('a边之外每个顶点有一个b环',
        '<circle class="tv-target" cx="52" cy="60" r="7"/><circle class="tv-target" cx="128" cy="60" r="7"/>' +
        '<path class="tv-edge-a" d="M59 54 C78 30 102 30 121 54"/><path class="tv-edge-a" d="M121 66 C102 90 78 90 59 66"/>' +
        '<path class="tv-edge-b" d="M46 54 C18 20 18 100 46 66"/><path class="tv-edge-b" d="M134 54 C162 20 162 100 134 66"/>' +
        '<text class="tv-label-b" x="20" y="62">b</text><text class="tv-label-b" x="157" y="62">b</text>'),
      '现在每个顶点都有一入一出的 a、b 边，局部看起来与底部 8 字形完全相同。'),
    stage('3', '数最终覆叠图', 'V=2，E=4，所以自由群秩 E−V+1=3',
      svg('二重覆叠图及其计数',
        '<rect class="tv-box" x="22" y="18" width="136" height="32" rx="6"/><text class="tv-label" x="90" y="38" text-anchor="middle">2 个 a 边 + 2 个 b 边</text>' +
        '<rect class="tv-box" x="22" y="70" width="136" height="32" rx="6"/><text class="tv-label" x="90" y="90" text-anchor="middle">rank π₁ = 4−2+1 = 3</text>'),
      '最终基本群是指数 2 子群 ker(a↦1,b↦0)，按 Schreier 公式也是秩 3。')
  ],
  '先画底顶点的全部原像，再按每个生成元对陪集的作用逐条连边；边不是凭形状猜出来，而是由“乘 a、乘 b 后去哪个陪集”决定。'
);

module.exports = {
  nodes: {
    t1: contraction,
    t3: wedge + torus + klein,
    t4: pathLift + homotopyLift,
    t5: circleCoverClasses + latticeCover + schreierCover,
    t6: vanKampen,
    t8: radialRetraction + mobius + elementaryCollapse,
    t9: simplexGluing + torus + rp2Cells,
    t10: simplexGluing + torus + rp2Cells,
    t14: rp2Cells,
    t15: rp2Cells,
    t24: homotopyLift,
    t27: suspension
  },
  examples: {
    t1: { 0: contraction, 1: radialRetraction, 2: mobius },
    t3: { 0: wedge, 1: torus, 2: klein },
    t4: { 0: pathLift, 2: pathLift },
    t5: { 0: circleCoverClasses, 1: latticeCover, 2: schreierCover },
    t6: { 0: wedge, 1: torus },
    t8: { 0: radialRetraction, 1: mobius, 2: contraction },
    t9: { 0: simplexGluing, 1: torus, 2: rp2Cells },
    t10: { 0: simplexGluing, 1: torus, 2: rp2Cells },
    t14: { 1: rp2Cells },
    t15: { 0: rp2Cells },
    t24: { 1: homotopyLift }
  },
  theorems: {
    t4: { 0: pathLift, 1: homotopyLift },
    t5: { 0: circleCoverClasses, 1: circleCoverClasses },
    t6: { 0: vanKampen },
    t8: { 0: radialRetraction, 1: elementaryCollapse },
    t10: { 0: simplexGluing },
    t14: { 0: rp2Cells },
    t15: { 1: rp2Cells },
    t24: { 1: homotopyLift },
    t27: { 0: suspension }
  }
};
