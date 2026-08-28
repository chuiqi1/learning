// ============================================================
// 黎曼几何完整学习数据
// 基于 John M. Lee, Introduction to Riemannian Manifolds, 2nd ed.
// 生成日期: 2026-08-28
// ============================================================

// ---- 章节定义 ----
const chapters = [
  { id: "ch1", title: "什么是曲率？", en: "What Is Curvature?", desc: "引入曲率概念，回顾平面曲线和空间曲面的曲率，为黎曼几何提供直觉基础。" },
  { id: "ch2", title: "黎曼度量", en: "Riemannian Metrics", desc: "定义黎曼度量、张量场、等距映射，建立流形上的几何结构。" },
  { id: "ch3", title: "模型黎曼流形", en: "Model Riemannian Manifolds", desc: "研究欧氏空间、球面、双曲空间三种常曲率模型空间。" },
  { id: "ch4", title: "联络", en: "Connections", desc: "引入仿射联络、Levi-Civita联络、协变导数，建立平行移动理论。" },
  { id: "ch5", title: "测地线与距离", en: "Geodesics and Distance", desc: "测地线方程、指数映射、距离函数、完备性。" },
  { id: "ch6", title: "曲率", en: "Curvature", desc: "曲率张量、截面曲率、Ricci曲率、标量曲率。" },
  { id: "ch7", title: "黎曼子流形", en: "Riemannian Submanifolds", desc: "浸入与嵌入、第二基本形式、Gauss-Codazzi方程。" },
  { id: "ch8", title: "Gauss-Bonnet定理", en: "The Gauss–Bonnet Theorem", desc: "局部与全局Gauss-Bonnet定理、Euler示性数、曲面分类。" },
  { id: "ch9", title: "Jacobi场", en: "Jacobi Fields", desc: "Jacobi方程、共轭点、割点、测地线变分。" },
  { id: "ch10", title: "比较定理", en: "Comparison Theorems", desc: "Rauch比较定理、Toponogov定理、体积比较、曲率下界控制。" }
];

// ---- 知识点节点 ----
const nodes = [
  // ======================== Ch1: 什么是曲率？(5) ========================
  {
    id: "r1", label: "平面曲线曲率", chapter: "ch1", layer: 0,
    desc: "平面曲线的曲率度量曲线偏离直线的程度，由曲率半径的倒数给出，是曲率概念的最初等形式。",
    content: "平面曲线的曲率是微分几何中最基本的曲率概念。对于弧长参数化的平面曲线 γ(s)，曲率定义为 κ(s) = |γ''(s)|，即单位切向量沿曲线的旋转速率。对于一般参数化曲线，曲率公式为 κ = |γ' × γ''| / |γ'|³。曲率半径 R = 1/κ 表示在该点处最佳逼近圆的半径。曲率为正表示曲线向左侧弯曲，为负表示向右侧弯曲（在给定定向后）。Frenet标架 {T, N} 构成了曲线上的活动正交标架，满足 Frenet 方程 dT/ds = κN, dN/ds = -κT。曲率完全决定了平面曲线的形状（基本定理：曲率函数相同且相差刚体运动的曲线等价）。",
    understanding: "可以想象在弯曲的道路上开车：曲率大的地方需要急转弯，方向盘转得厉害；曲率小的地方接近直线，几乎不用转方向盘。曲率半径就是'等效转弯半径'——如果前方弯道是半径为50米的圆弧，曲率就是1/50=0.02。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="a1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#2563eb"/></marker></defs><path d="M20,160 Q60,100 100,70 Q140,40 180,30" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M100,70 Q120,130 140,155" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="100" cy="70" r="3" fill="#dc2626"/><circle cx="125" cy="112" r="2" fill="#dc2626"/><text x="115" y="50" font-size="11" fill="#2563eb" font-family="serif" font-style="italic">κ = 1/R</text><text x="105" y="140" font-size="9" fill="#dc2626">R</text><line x1="100" y1="70" x2="125" y2="112" stroke="#dc2626" stroke-width="1"/></svg>`,
    examples: [
      { title: "圆的曲率", content: "半径为R的圆在每一点曲率恒为 1/R。这是最简单的等曲率曲线，也是研究曲率的基准。" },
      { title: "抛物线的曲率", content: "抛物线 y=x² 在顶点 x=0 处曲率最大 κ=2，远离顶点时曲率趋近于0，反映抛物线'越远越平'的特性。" },
      { title: "回旋曲线", content: "回旋曲线（Clothoid）的曲率随弧长线性增长，广泛用于公路铁路过渡段设计，使车辆平顺地从直线进入弯道。" }
    ],
    theorems: [{ name: "平面曲线基本定理", statement: "给定任意光滑函数 κ(s) > 0，存在唯一（差刚体运动）的平面曲线以 κ(s) 为其曲率函数。", proof: "通过解Frenet方程 dT/ds=κN, dN/ds=-κT 的常微分方程组，由Picard-Lindelof定理保证解的存在唯一性。给定初始位置和初始切向量，曲线由 γ(s)=γ(0)+∫₀ˢ T(u)du 确定。两条曲率相同的曲线可通过刚体运动使初始条件重合，从而唯一确定同一曲线。" }],
    applications: "公路铁路设计中的缓和曲线使用回旋曲线保证曲率连续变化，避免车辆在直线与圆弧之间突然转向。数控加工中的刀具路径规划也需考虑曲率约束。",
    refs: { book: "Lee", ch: "Ch.1", sec: "§1.1" }
  },
  {
    id: "r2", label: "曲线的挠率", chapter: "ch1", layer: 1,
    desc: "空间曲线的挠率度量曲线偏离其密切平面的程度，与曲率一起构成Frenet-Serret方程的核心几何不变量。",
    content: "对于空间曲线，除了曲率还需要挠率 τ 来描述其完整几何。挠率定义为副法向量 B 沿弧长的变化率：τ = -N·B'。在Frenet-Serret标架 {T, N, B} 下，满足方程组 dT/ds = κN, dN/ds = -κT + τB, dB/ds = -τN。曲率描述曲线在密切平面内弯曲的速率，挠率描述密切平面绕切线旋转的速率。平面曲线的挠率恒为零。曲率和挠率函数共同决定了空间曲线的形状（差刚体运动）。",
    understanding: "想象一个螺旋楼梯：曲率是楼梯每步的'转弯程度'，挠率是楼梯'上升的速率'。如果挠率为零，楼梯就变成了平面上的一个圆弧，没有上升。挠率越大，盘旋上升得越快。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M30,100 C50,60 90,60 100,100 C110,140 150,140 170,100" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M30,100 C50,50 90,50 100,100 C110,150 150,150 170,100" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,4"/><text x="10" y="50" font-size="10" fill="#2563eb">T (切向)</text><text x="10" y="70" font-size="10" fill="#7c3aed">B (副法向)</text><text x="10" y="90" font-size="9" fill="#dc2626">τ = -N·B'</text><circle cx="100" cy="100" r="3" fill="#dc2626"/></svg>`,
    examples: [
      { title: "圆柱螺旋线", content: "螺旋线 r(t) = (cos t, sin t, at) 有常曲率 κ = 1/(1+a²) 和常挠率 τ = a/(1+a²)，是最简单的空间曲线。" },
      { title: "DNA双螺旋", content: "DNA双螺旋结构的曲率和挠率决定了其超螺旋构型，影响基因表达调控。挠率的变化与拓扑异构酶活性相关。" }
    ],
    theorems: [{ name: "空间曲线基本定理", statement: "给定光滑函数 κ(s) > 0 和 τ(s)，存在唯一（差刚体运动）的空间曲线以 κ 和 τ 为其曲率和挠率。", proof: "通过解Frenet-Serret方程 dT/ds=κN, dN/ds=-κT+τB, dB/ds=-τN 的线性ODE组，由存在唯一性定理保证解。Frenet标架确定后，曲线由 γ(s)=γ(0)+∫₀ˢ T(u)du 恢复。初始位置和初始Frenet标架的选择对应刚体运动自由度，曲率κ和挠率τ是两个完整的几何不变量。" }],
    applications: "DNA超螺旋结构的力学分析；机器人路径规划中末端执行器的姿态控制；电线电缆的缠绕和铺设设计。",
    refs: { book: "Lee", ch: "Ch.1", sec: "§1.2" }
  },
  {
    id: "r3", label: "曲面的Gauss曲率", chapter: "ch1", layer: 0,
    desc: "Gauss曲率是曲面最核心的内蕴曲率，定义为两个主曲率的乘积，决定了曲面局部几何的定性行为。",
    content: "对于R³中的曲面，在每一点沿法线方向可以定义形状算子（Weingarten映射），其特征值 κ₁, κ₂ 称为主曲率。Gauss曲率定义为 K = κ₁κ₂，平均曲率定义为 H = (κ₁+κ₂)/2。K > 0 的点是椭圆点（如球面），K < 0 的点是双曲点（如鞍面），K = 0 的点是抛物点或平点。Gauss的'绝妙定理'（Theorema Egregium）指出：Gauss曲率仅仅依赖于曲面的第一基本形式（度量），是曲面的内蕴不变量——这意味着曲面上的'二维居民'无需离开曲面就能检测到曲率。",
    understanding: "如果把一张纸弯曲成圆柱面，纸上的蚂蚁无法感知弯曲——因为圆柱面的Gauss曲率为零。但如果把纸捏成球面，蚂蚁就能通过测量三角形内角和是否大于180度来感知曲率。这就是Gauss绝妙定理的精髓：某些弯曲是内蕴的，某些只是外部的。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="100" rx="70" ry="50" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><ellipse cx="100" cy="100" rx="50" ry="30" fill="none" stroke="#dc2626" stroke-width="1"/><ellipse cx="100" cy="100" rx="20" ry="50" fill="none" stroke="#dc2626" stroke-width="1"/><text x="130" y="50" font-size="10" fill="#2563eb">κ₁</text><text x="60" y="55" font-size="10" fill="#dc2626">κ₂</text><text x="70" y="150" font-size="11" fill="#7c3aed">K = κ₁κ₂</text><circle cx="100" cy="100" r="2.5" fill="#7c3aed"/></svg>`,
    examples: [
      { title: "球面", content: "半径为R的球面上每点主曲率均为 1/R，Gauss曲率恒为 K = 1/R² > 0，是常正曲率曲面的典型。" },
      { title: "伪球面", content: "伪球面（tractroid）的Gauss曲率恒为 -1，是常负曲率曲面，黎曼之前就已发现其内蕴几何与双曲几何一致。" },
      { title: "环面", content: "环面上外侧区域 K > 0（椭圆点），内侧区域 K < 0（双曲点），顶部和底部圆周上 K = 0，展示了曲率如何在曲面上变化。" }
    ],
    theorems: [{ name: "Gauss绝妙定理", statement: "Gauss曲率 K 仅由曲面的第一基本形式及其导数决定，是等距变换下的不变量。", proof: "Gauss通过直接计算发现：虽然K的定义涉及第二基本形式（外蕴量），但将Christoffel符号用度量张量及其导数表示后，曲率张量R^l_ijk完全由g_ij及其一阶、二阶导数决定。在二维情形，K = R^1_212/det(g)，因此K仅依赖于第一基本形式。这是历史上首次证明曲率可以是内蕴量。" }],
    applications: "薄膜和壳体结构的力学分析中，Gauss曲率决定刚度；计算机图形学中网格曲面平滑和特征检测；地理信息系统中的地形曲率分析。",
    refs: { book: "Lee", ch: "Ch.1", sec: "§1.3" }
  },
  {
    id: "r4", label: "曲率的内蕴性", chapter: "ch1", layer: 1,
    desc: "内蕴曲率是仅依赖于流形自身度量结构而不依赖于外围嵌入方式的几何量，是黎曼几何的核心思想。",
    content: "曲率的内蕴性是黎曼几何区别于古典微分几何的根本特征。Gauss的绝妙定理首次揭示了曲率可以是内蕴的：曲面的Gauss曲率可以通过度量张量 g_ij 及其导数计算，不需要知道曲面在R³中的嵌入方式。这直接启发了黎曼在1854年就职演讲中提出的n维流形概念。内蕴曲率意味着：两个等距的黎曼流形具有相同的曲率性质，即便它们在外观上完全不同。例如，平面和圆柱面等距，因此内蕴曲率都为零。内蕴曲率的计算依赖于Christoffel符号和曲率张量，这些量完全由度量张量决定。",
    understanding: "在平面上画一个三角形，内角和恰好180度。把纸弯成圆柱面，三角形内角和还是180度——因为弯曲只是'外部'的。但如果把纸压成球面的一部分，三角形内角和就大于180度了——因为球面的曲率是'内蕴'的，改变了空间本身的几何。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="70" height="70" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><polygon points="35,85 55,40 80,80" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="30" y="115" font-size="9" fill="#2563eb">平面 K=0</text><text x="38" y="130" font-size="8" fill="#dc2626">内角和=180°</text><path d="M130,30 Q150,30 155,50 Q160,70 155,90 Q150,110 130,110" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M130,30 Q110,30 105,50 Q100,70 105,90 Q110,110 130,110" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="100" y="135" font-size="9" fill="#2563eb">圆柱面 K=0</text><text x="108" y="148" font-size="8" fill="#dc2626">内角和=180°</text><text x="60" y="165" font-size="10" fill="#7c3aed" font-weight="bold">等距 → 内蕴曲率相等</text></svg>`,
    examples: [
      { title: "平面与圆柱面", content: "平面和圆柱面是等距的。将平面卷成圆柱不改变任何内蕴几何量，因此Gauss曲率均为零。平面上三角形内角和180度，圆柱面上也如此。" },
      { title: "地图投影", content: "地图投影无法同时保持角度和面积，正是因为球面（K>0）与平面（K=0）不等距。任何平面地图必然存在畸变，这是内蕴曲率不同的必然结果。" }
    ],
    theorems: [{ name: "等距不变性", statement: "若两个黎曼流形之间存在等距映射，则它们的曲率张量、截面曲率、Ricci曲率和标量曲率均对应相等。", proof: "等距映射F满足F*h=g，即度量张量在拉回下不变。由于Christoffel符号和曲率张量完全由度量张量及其导数决定，等距映射必然保持这些量。具体地，Γ^k_ij在等距下按张量变换律变换，R^l_ijk作为(1,3)-张量也相应变换，截面曲率、Ricci曲率和标量曲率作为缩并也保持不变。" }],
    applications: "地图制图学中投影方法的选择和畸变分析；广义相对论中引力被解释为时空的内蕴曲率；计算机视觉中的非刚体形状匹配。",
    refs: { book: "Lee", ch: "Ch.1", sec: "§1.4" }
  },
  {
    id: "r5", label: "从局部到全局的曲率", chapter: "ch1", layer: 2,
    desc: "曲率不仅描述流形的局部几何，还通过积分定理（如Gauss-Bonnet）与全局拓扑建立深刻联系，这是黎曼几何最深刻的成果之一。",
    content: "局部曲率如何影响全局拓扑？这是黎曼几何的核心问题。Gauss-Bonnet定理给出了第一个答案：闭曲面上的Gauss曲率积分等于 2πχ(M)，其中 χ(M) 是Euler示性数。这意味着曲率分布与拓扑结构之间存在刚性约束：球面（χ=2）必须有正的总曲率，环面（χ=0）总曲率为零，高亏格曲面（χ<0）必须有负的总曲率。Bonnet-Myers定理进一步表明：若Ricci曲率有正的下界，则流形必定紧致且直径有限。Hadamard-Cartan定理则说：若截面曲率非正，则流形的万有覆盖空间同胚于Rⁿ。",
    understanding: "吹气球时，球面不断扩大，曲率越来越小，但总曲率（Gauss曲率的积分）始终保持不变，恒等于4π。这就像收入分配：无论你怎么重新分配财富，总收入不变。曲率可以从一处'挪'到另一处，但总曲率由拓扑决定，无法改变。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="25" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="52" y="62" font-size="12" fill="#dc2626">χ=2</text><text x="35" y="100" font-size="9" fill="#2563eb">∫K=4π</text><ellipse cx="140" cy="60" rx="30" ry="18" fill="none" stroke="#2563eb" stroke-width="1.5"/><circle cx="140" cy="55" r="10" fill="none" stroke="#2563eb" stroke-width="1"/><text x="128" y="62" font-size="12" fill="#dc2626">χ=0</text><text x="120" y="100" font-size="9" fill="#2563eb">∫K=0</text><path d="M50,140 Q60,125 75,130 Q90,135 95,125 Q100,115 90,110 Q80,105 75,115 Q70,130 85,140 Q100,148 110,135 Q120,125 130,130 Q140,140 150,135" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="70" y="155" font-size="9" fill="#dc2626">χ=-2</text><text x="80" y="170" font-size="9" fill="#2563eb">∫K=-4π</text></svg>`,
    examples: [
      { title: "球面总曲率", content: "半径为R的球面 Gauss曲率恒为 1/R²，面积 4πR²，总曲率 ∫K dA = 4π = 2π·χ(S²)，完美验证Gauss-Bonnet定理。" },
      { title: "环面", content: "环面 Euler示性数 χ=0，总曲率必为零。环面外侧正曲率与内侧负曲率恰好抵消，总积分为零。" },
      { title: "亏格2曲面", content: "亏格为2的闭曲面 χ=-2，总曲率必为 -4π。无论曲面如何变形，曲率积分始终保持不变。" }
    ],
    theorems: [{ name: "Gauss-Bonnet定理（全局）", statement: "对于紧致定向二维黎曼流形 M，∫_M K dA = 2πχ(M)。", proof: "将M三角剖分为测地三角形，对每个三角形应用局部Gauss-Bonnet公式 ∫_Δ K dA + Σ(π-α_i) - π = 0。将所有三角形求和，内部边贡献抵消，顶点处角度和=2πV，面数F给出-πF项。利用Euler公式 χ=V-E+F 和边-面关系 3F=2E，化简得 ∫_M K dA = 2π(V-E+F) = 2πχ(M)。核心是将曲率积分转化为组合计数。" }],
    applications: "宇宙学中宇宙的整体拓扑和曲率的关系；材料科学中缺陷和位错的拓扑分类；数据科学中高维流形的拓扑数据分析（TDA）。",
    refs: { book: "Lee", ch: "Ch.1", sec: "§1.5" }
  },

  // ======================== Ch2: 黎曼度量 (6) ========================
  {
    id: "r6", label: "黎曼度量定义", chapter: "ch2", layer: 0,
    desc: "黎曼度量是光滑流形上每点切空间中的正定对称双线性型，赋予流形长度、角度、面积等几何度量结构。",
    content: "黎曼度量是一个光滑对称 (0,2)-张量场 g，在每点 p∈M 的切空间 T_pM 上定义正定内积 g_p。在局部坐标 (x^i) 下，g = g_ij dx^i ⊗ dx^j，其中 g_ij 是对称正定矩阵。度量允许我们计算切向量的长度 |v|_g = √(g(v,v))，曲线长度 L(γ) = ∫√(g(γ',γ')) dt，以及角度 cos θ = g(v,w)/(|v||w|)。黎曼度量将拓扑流形转化为几何对象，使我们可以谈论距离、体积和各种几何概念。存在性方面：任何光滑流形（作为仿紧致 Hausdorff 空间）上都存在黎曼度量（利用单位分解构造）。",
    understanding: "黎曼度量就像给一张'橡皮膜'（流形）上画了网格线。有了网格线，你就能测量任意两点之间的距离，计算曲线的长度，确定两个方向的夹角。不同材质（不同度量）的橡皮膜上，同样的'形状'可以有完全不同的几何性质。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M30,80 Q60,60 100,70 Q140,80 160,65 Q175,55 180,70" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="100" y1="70" x2="130" y2="40" stroke="#dc2626" stroke-width="1.5"/><line x1="100" y1="70" x2="145" y2="85" stroke="#dc2626" stroke-width="1.5"/><text x="115" y="35" font-size="10" fill="#dc2626">v</text><text x="148" y="82" font-size="10" fill="#dc2626">w</text><text x="60" y="40" font-size="10" fill="#2563eb">|v| = √g(v,v)</text><text x="55" y="55" font-size="9" fill="#7c3aed">cos θ = g(v,w)/|v||w|</text><circle cx="100" cy="70" r="2.5" fill="#7c3aed"/></svg>`,
    examples: [
      { title: "欧氏度量", content: "在 Rⁿ 上，标准欧氏度量 g_ij = δ_ij（Kronecker delta），是平坦空间的标准度量。" },
      { title: "Minkowski度量", content: "在狭义相对论中，(3+1)维时空的度量符号为 (-,+,+,+)，不是正定的，因此不是黎曼度量而是伪黎曼度量（Lorentz度量）。" },
      { title: "曲面上诱导度量", content: "R³中曲面M的第一基本形式 I = Edu²+2Fdudv+Gdv² 就是R³的欧氏度量在M上的诱导度量。" }
    ],
    theorems: [{ name: "黎曼度量存在性定理", statement: "任何光滑流形上都存在黎曼度量。可通过单位分解将局部欧氏度量拼接为全局度量。", proof: "取局部坐标覆盖{U_α}和从属的单位分解{ρ_α}。在每个U_α上取局部欧氏度量g_α（即g_ij=δ_ij）。定义全局度量 g = Σ_α ρ_α g_α。由于每个g_α正定且ρ_α≥0（至少一个>0），凸组合保持正定性，故g是全局黎曼度量。单位分解的存在性依赖于流形的仿紧致性。" }],
    applications: "相空间中的统计力学度量；信息几何中Fisher信息矩阵作为统计流形上的黎曼度量；机器学习中的流形学习和降维算法。",
    refs: { book: "Lee", ch: "Ch.2", sec: "§2.1" }
  },
  {
    id: "r7", label: "张量场与度量", chapter: "ch2", layer: 1,
    desc: "张量场是黎曼几何的基本语言，黎曼度量作为(0,2)-张量场为流形上所有张量运算提供了'升降指标'的机制。",
    content: "在黎曼流形上，度量 g 建立了切空间 T_pM 与余切空间 T_p*M 之间的自然同构：v ↦ g(v,·)。在坐标下，这对应指标升降操作：v_i = g_ij v^j，α^i = g^ij α_j，其中 g^ij 是 g_ij 的逆矩阵。对任意张量，可通过度量升降任意指标，如将 (1,1)-张量 T^i_j 化为 (0,2)-张量 T_ij = g_ik T^k_j。黎曼度量还定义了体积形式 dV_g = √(det g) dx¹∧...∧dxⁿ，使得流形上的积分 ∫_M f dV_g 有意义。",
    understanding: "度量就像一本'词典'，能把向量'翻译'成余向量，反之亦然。比如在物理学中，速度和动量分别用向量和余向量表示，度量就是'质量'——p_i = m g_ij v^j，把速度转化为动量。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="40" width="60" height="60" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/><text x="42" y="75" font-size="14" fill="#2563eb">T_pM</text><rect x="110" y="40" width="60" height="60" fill="#fce7f3" stroke="#dc2626" stroke-width="1"/><text x="120" y="75" font-size="14" fill="#dc2626">T_p*M</text><path d="M90,50 L110,50" stroke="#7c3aed" stroke-width="2" marker-end="url(#a2)"/><path d="M90,90 L110,90" stroke="#7c3aed" stroke-width="2" marker-start="url(#a3)"/><text x="88" y="45" font-size="9" fill="#7c3aed">g♭</text><text x="88" y="105" font-size="9" fill="#7c3aed">g♯</text><defs><marker id="a2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#7c3aed"/></marker><marker id="a3" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto"><path d="M8,0 L0,3 L8,6 Z" fill="#7c3aed"/></marker></defs><text x="55" y="130" font-size="9" fill="#2563eb">v^i ↦ g_ij v^j</text><text x="120" y="130" font-size="9" fill="#dc2626">α_j ↦ g^{ij}α_j</text></svg>`,
    examples: [
      { title: "梯度", content: "函数 f 的梯度 grad f 是 df 通过度量升指标得到的向量场：(grad f)^i = g^ij ∂_j f。" },
      { title: "散度", content: "向量场 X 的散度 div X 是协变导数 ∇_i X^i 的缩并，可以通过体积形式定义为 L_X(dV) = (div X) dV。" },
      { title: "Laplace-Beltrami算子", content: "Δf = div(grad f) = g^ij(∂_i∂_j f - Γ^k_ij ∂_k f)，是欧氏Laplace算子在黎曼流形上的推广。" }
    ],
    theorems: [{ name: "音乐同构", statement: "黎曼度量 g 诱导了切丛与余切丛之间的丛同构 ♭: TM → T*M 和 ♯: T*M → TM，称为降调和升调同构。", proof: "对每个v∈T_pM，定义v^♭∈T*_pM为v^♭(w)=g_p(v,w)对所有w∈T_pM。在坐标下v^♭_i = g_ij v^j。由于g非退化（正定性保证），♭是线性单射，维数相同故为同构。逆映射♯由α^♯ = g^{ij}α_j ∂_i给出。这建立了切向量与余切向量的自然一一对应。" }],
    applications: "流体力学中速度场和涡量场的对偶关系；电磁学中电场E和电位移D通过介电张量（度量）联系；弹性力学中应力和应变的关系。",
    refs: { book: "Lee", ch: "Ch.2", sec: "§2.2" }
  },
  {
    id: "r8", label: "等距与等距群", chapter: "ch2", layer: 1,
    desc: "等距映射是保持黎曼度量的微分同胚；等距群反映流形的对称性，是理解黎曼流形结构的关键工具。",
    content: "光滑映射 F: (M,g) → (N,h) 称为等距映射，如果 F*h = g，即 h_F(p)(dF_p(v), dF_p(w)) = g_p(v,w) 对所有 p∈M, v,w∈T_pM 成立。等距映射保持所有内蕴几何量：长度、角度、面积、体积、曲率等。黎曼流形 (M,g) 的所有等距自同构构成一个群，记作 Isom(M,g)。Myers-Steenrod定理保证 Isom(M,g) 是有限维Lie群，其维数不超过 n(n+1)/2。最大对称空间（如球面、双曲空间）的等距群维数恰好达到此上界。",
    understanding: "等距映射就像'刚性运动'——你可以把流形翻转、旋转、平移，但不能拉伸或压缩。正方形有8个等距变换（旋转和反射），球面有无穷多个（所有旋转）。等距越多，对称性越强，几何结构越'均匀'。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="30,50 70,35 75,70 35,85" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><polygon points="130,50 170,35 175,70 135,85" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="38" y="65" font-size="9" fill="#2563eb">M</text><text x="138" y="65" font-size="9" fill="#2563eb">N</text><path d="M90,60 Q110,55 120,60" fill="none" stroke="#dc2626" stroke-width="1.5" marker-end="url(#a4)"/><text x="95" y="50" font-size="9" fill="#dc2626">F</text><text x="55" y="110" font-size="10" fill="#7c3aed">F*h = g</text><text x="35" y="130" font-size="8" fill="#7c3aed">长度、角度、曲率不变</text><defs><marker id="a4" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#dc2626"/></marker></defs></svg>`,
    examples: [
      { title: "欧氏空间的等距", content: "Rⁿ 的等距群是欧氏群 E(n) = O(n) ⋉ Rⁿ，由旋转/反射和平移生成，维数为 n(n+1)/2。" },
      { title: "球面等距群", content: "Sⁿ 的等距群是正交群 O(n+1)，维数 n(n+1)/2。球面是最大对称空间，每点各向同性。" },
      { title: "双曲平面等距", content: "双曲平面 H² 的等距群是 PSL(2,R)，保向等距群同构于 SL(2,R)/{±I}。" }
    ],
    theorems: [{ name: "Myers-Steenrod定理", statement: "黎曼流形的等距群是Lie变换群，其维数不超过 n(n+1)/2，其中 n 是流形维数。", proof: "等距映射由它在一点的值和它的微分（即正交标架）决定。等距群可嵌入到M的正交标架丛中。正交标架丛的维数为 n + n(n-1)/2 = n(n+1)/2（n个位置参数+n(n-1)/2个旋转参数）。通过证明等距群是正交标架丛的闭子流形，可得其为Lie群且维数不超过此上界。" }],
    applications: "晶体学中晶格对称群分类；计算机视觉中三维形状匹配和识别；物理中Noether定理将对称性对应守恒量。",
    refs: { book: "Lee", ch: "Ch.2", sec: "§2.3" }
  },
  {
    id: "r9", label: "拉回度量与浸入", chapter: "ch2", layer: 1,
    desc: "通过光滑映射可以将度量从一个流形'拉回'到另一个流形，浸入诱导的拉回度量是子流形几何的基础。",
    content: "给定光滑映射 F: M → N 和 N 上的黎曼度量 h，若 F 是浸入（即 dF 处处单射），则可定义 M 上的拉回度量 F*h。在坐标下，(F*h)_ij = h_ab (∂F^a/∂x^i)(∂F^b/∂x^j)。当 F 是R³中曲面的参数化时，拉回度量就是曲面的第一基本形式。对于浸入子流形，拉回度量赋予子流形诱导的黎曼结构。如果 F 不是浸入，拉回形式可能退化（如在临界点处）。拉回度量的概念使得我们可以将外围空间的度量'限制'到子流形上。",
    understanding: "想象把一张橡胶膜浸入到三维空间中。橡胶膜本身是二维的，但它在三维空间中弯曲。膜上的'距离'是由三维空间中的距离在膜上'诱导'出来的——这就是拉回度量。蚂蚁在膜上走的最短路径就是由这个度量决定的测地线。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M20,120 Q60,80 100,90 Q140,100 180,110" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M30,125 Q40,100 55,88 Q75,75 90,90 Q105,105 115,95" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="130" y="70" font-size="10" fill="#2563eb">N (外围空间)</text><text x="25" y="70" font-size="10" fill="#dc2626">M (子流形)</text><text x="60" y="140" font-size="9" fill="#7c3aed">(F*h)_ij = h_ab ∂_iF^a ∂_jF^b</text><circle cx="55" cy="88" r="2" fill="#7c3aed"/></svg>`,
    examples: [
      { title: "球面诱导度量", content: "球面 S² 作为 R³ 的子流形，诱导度量在球坐标下为 ds² = R²(dθ² + sin²θ dφ²)，这是研究球面几何的出发点。" },
      { title: "环面度量", content: "环面参数化 (θ,φ) ↦ ((R+r cosθ)cosφ, (R+r cosθ)sinφ, r sinθ) 诱导的度量 ds² = r²dθ² + (R+r cosθ)²dφ²。" },
      { title: "曲面电影", content: "共形参数化使诱导度量变为 ds² = e^(2λ)(du²+dv²)，即共形平坦形式，在计算机图形学纹理映射中广泛应用。" }
    ],
    theorems: [{ name: "诱导度量", statement: "若 F: M → N 是浸入且 h 是 N 上的黎曼度量，则 F*h 是 M 上的黎曼度量。", proof: "拉回度量定义为(F*h)_p(v,w)=h_{F(p)}(dF_p(v), dF_p(w))。由于h是正定对称双线性型，且dF_p是单射（浸入条件），F*h也是正定对称的。光滑性由F和h的光滑性保证。因此F*h满足黎曼度量的所有条件。若F不是浸入，dF_p有核，则F*h仅半正定，不构成黎曼度量。" }],
    applications: "计算机图形学中曲面参数化和纹理映射；薄膜力学中曲面应变分析；地理学中椭球面大地测量。",
    refs: { book: "Lee", ch: "Ch.2", sec: "§2.4" }
  },
  {
    id: "r10", label: "黎曼体积形式", chapter: "ch2", layer: 1,
    desc: "黎曼体积形式是流形上自然的测度，由度量张量的行列式定义，允许在流形上定义积分和概率测度。",
    content: "在可定向黎曼流形上，体积形式 dV_g 是唯一的单位模长 n-形式，在正定向标准正交标架下 dV_g = ω¹∧...∧ωⁿ。在局部坐标下，dV_g = √(det g) dx¹∧...∧dxⁿ。体积形式使得我们可以在流形上定义函数的积分 ∫_M f dV_g，以及流形的总体积 Vol(M) = ∫_M dV_g。对于非定向流形，存在黎曼密度（奇数形式），也可定义积分。体积形式还联系了散度和Laplace算子：div X = *(d(*X^♭))，Δf = -div(grad f)。",
    understanding: "体积形式就像一个'微元的地砖'——在曲面上，由于弯曲，每块'地砖'的实际面积可能不同（就像球面上靠近赤道的1度经度×1度纬度面积比靠近极点的更大）。√(det g) 就是描述这种局部'拉伸因子'的函数。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M20,60 Q50,40 80,50 Q110,60 140,45 Q170,30 180,50" fill="none" stroke="#2563eb" stroke-width="2"/><rect x="55" y="42" width="20" height="15" fill="#dbeafe" stroke="#2563eb" stroke-width="1" transform="rotate(-5,65,50)"/><rect x="100" y="38" width="25" height="12" fill="#dbeafe" stroke="#2563eb" stroke-width="1" transform="rotate(5,112,44)"/><text x="58" y="55" font-size="7" fill="#dc2626">dV₁</text><text x="103" y="48" font-size="7" fill="#dc2626">dV₂</text><text x="35" y="110" font-size="10" fill="#2563eb">dV_g = √(det g) dx¹∧...∧dxⁿ</text><text x="40" y="130" font-size="9" fill="#7c3aed">Vol(M) = ∫_M dV_g</text></svg>`,
    examples: [
      { title: "球面体积", content: "半径为R的n维球面体积为 Vol(Sⁿ) = 2π^{(n+1)/2}R^n / Γ((n+1)/2)。S² 面积为 4πR²。" },
      { title: "双曲空间体积", content: "双曲空间 Hⁿ 中半径为 r 的球的体积随 r 指数增长：Vol(B(r)) ~ ω_{n-1} e^{(n-1)r} / (2^{n-1}(n-1))，与欧氏空间的幂增长形成鲜明对比。" },
      { title: "紧致李群上的Haar测度", content: "紧致李群上的双不变黎曼度量诱导的体积形式就是Haar测度，在表示论和量子力学中起关键作用。" }
    ],
    theorems: [{ name: "体积比较定理", statement: "在截面曲率满足 K ≥ c 的流形上，测地球的体积不超过常曲率c空间中同半径球的体积。", proof: "利用指数映射和Rauch比较定理。在法坐标下，体积元可通过Jacobi场的行列式表示。Rauch定理给出|J(t)| ≤ |J_c(t)|（其中J_c是常曲率c空间中的Jacobi场），因此体积元满足不等式。积分得Vol(B(p,r)) ≤ V_c(r)。Gunther将此推广到更一般的曲率条件。" }],
    applications: "概率论中在流形上定义概率分布（如球面上的 von Mises-Fisher 分布）；统计力学中的相空间积分；机器学习中流形上的概率模型。",
    refs: { book: "Lee", ch: "Ch.2", sec: "§2.5" }
  },
  {
    id: "r11", label: "共形度量与Weyl变换", chapter: "ch2", layer: 2,
    desc: "共形变换保持角度不变，仅缩放度量；共形几何是黎曼几何的重要分支，在物理和几何分析中有广泛应用。",
    content: "两个度量 g 和 h 称为共形等价的，如果 h = e^(2f)·g 对某光滑函数 f 成立。共形变换保持角度（因为分子分母的缩放因子抵消），但不保持长度和面积。共形变换下，体积形式变为 dV_h = e^(nf) dV_g。共形几何研究在共形等价类中不变的性质。Weyl曲率张量是共形变换下的不变量（在维数≥3时），其为零是度量共形平坦的充要条件。二维情形特殊：任何黎曼度量都局部共形平坦（等温坐标的存在性）。",
    understanding: "共形变换就像用放大镜看地图，不同位置放大倍率不同。角度保持不变（两条路在地图上垂直，在任何放大倍率下都垂直），但距离变了。墨卡托投影就是共形映射的例子——它保持角度，但把格陵兰岛放大了很多倍。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="60" height="60" fill="none" stroke="#2563eb" stroke-width="1.5"/><line x1="30" y1="30" x2="90" y2="90" stroke="#2563eb" stroke-width="1"/><line x1="30" y1="90" x2="90" y2="30" stroke="#2563eb" stroke-width="1"/><text x="38" y="55" font-size="9" fill="#2563eb">g</text><rect x="110" y="20" width="80" height="80" fill="none" stroke="#dc2626" stroke-width="1.5"/><line x1="110" y1="20" x2="190" y2="100" stroke="#dc2626" stroke-width="1"/><line x1="110" y1="100" x2="190" y2="20" stroke="#dc2626" stroke-width="1"/><text x="120" y="45" font-size="9" fill="#dc2626">h = e²ᶠg</text><text x="50" y="120" font-size="9" fill="#7c3aed">角度θ不变</text><text x="50" y="135" font-size="9" fill="#7c3aed">长度缩放 eᶠ</text></svg>`,
    examples: [
      { title: "球极投影", content: "球面S²去掉北极后通过球极投影共形映射到平面，这是共形平坦的直观例子。" },
      { title: "Yamabe问题", content: "给定紧致流形上的共形类，是否存在常标量曲率的度量？Yamabe问题经Trudinger、Aubin、Schoen等人解决，答案是肯定的。" },
      { title: "弦论中的共形场论", content: "二维共形场论（CFT）是弦论世界面理论的基础，共形对称性赋予理论丰富的数学结构。" }
    ],
    theorems: [{ name: "等温坐标存在性", statement: "在二维黎曼流形上，局部存在坐标 (x,y) 使得度量形式为 ds² = e^(2λ)(dx²+dy²)，即共形平坦。", proof: "设度量ds² = E dx² + 2F dx dy + G dy²。等温坐标的条件是存在函数λ使 E = G = e^{2λ}, F = 0。这等价于求解Beltrami方程 ∂̄w = μ ∂w。在二维，任何黎曼度量都诱导一个复结构（与度量共形类一一对应），由可测Riemann映射定理（或等温坐标存在定理）保证局部存在性。本质上二维是特殊维数，因为Weyl张量在二维退化。" }],
    applications: "地图投影学中的共形投影；复分析中Riemann映射定理；弦论世界面理论；图像处理中的共形参数化。",
    refs: { book: "Lee", ch: "Ch.2", sec: "§2.6" }
  },

  // ======================== Ch3: 模型黎曼流形 (5) ========================
  {
    id: "r12", label: "欧氏空间", chapter: "ch3", layer: 0,
    desc: "欧氏空间Rⁿ是平坦黎曼流形的标准模型，曲率恒为零。一切黎曼几何的直觉都源于欧氏几何的背景。",
    content: "欧氏空间 Rⁿ 配备标准度量 g_ij = δ_ij 是黎曼几何中最基本的模型空间。其Christoffel符号恒为零，因此协变导数退化为普通偏导数，曲率张量恒为零。测地线是直线，距离由勾股定理给出。等距群是欧氏群 E(n) = O(n) ⋉ Rⁿ。欧氏空间是唯一的同时具有平坦性和完备性的单连通黎曼流形。在黎曼几何中，所有其他空间都通过与欧氏空间的'偏离程度'来度量其曲率——曲率正是衡量局部几何与欧氏几何差异的量。",
    understanding: "欧氏空间就是我们的日常直觉空间：直线是最短路径，三角形内角和180度，平行线永不相交。所有弯曲空间在局部放大时都近似欧氏空间，就像地球表面在小范围内看起来是平坦的。欧氏空间是黎曼几何的'基准面'。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="20" x2="20" y2="180" stroke="#2563eb" stroke-width="1"/><line x1="20" y1="180" x2="180" y2="180" stroke="#2563eb" stroke-width="1"/><line x1="85" y1="85" x2="85" y2="180" stroke="#2563eb" stroke-width="0.5" stroke-dasharray="3,3"/><line x1="20" y1="85" x2="85" y2="85" stroke="#2563eb" stroke-width="0.5" stroke-dasharray="3,3"/><line x1="20" y1="140" x2="140" y2="140" stroke="#dc2626" stroke-width="1.5"/><text x="90" y="135" font-size="10" fill="#dc2626">直线 = 测地线</text><text x="30" y="170" font-size="10" fill="#2563eb">g_ij = δ_ij</text><text x="30" y="185" font-size="10" fill="#7c3aed">R = 0 (平坦)</text></svg>`,
    examples: [
      { title: "标准欧氏空间", content: "Rⁿ 配备标准内积 ⟨x,y⟩ = Σ x_i y_i 是最简单的黎曼流形，所有几何量都有显式公式。" },
      { title: "环面 Tⁿ", content: "环面 Tⁿ = Rⁿ/Zⁿ 配备诱导度量是平坦的紧致流形，尽管作为R²ⁿ的子流形是弯曲的，但其内蕴曲率为零。" },
      { title: "圆柱面", content: "圆柱面 C = S¹×R 与平面局部等距，其Gauss曲率为零，是平坦但非单连通的曲面。" }
    ],
    theorems: [{ name: "Cartan–Hadamard定理", statement: "若完备黎曼流形截面曲率处处非正，则其万有覆盖空间微分同胚于 Rⁿ。", proof: "核心是利用K≤0时指数映射exp_p是整体微分同胚。当K≤0时，Jacobi方程J'' + R(J,γ')γ' = 0中曲率项非正，因此Jacobi场严格凸且无零点，即无共轭点。由此exp_p无临界点，是局部微分同胚。结合完备性（Hopf-Rinow定理保证exp_p定义在整个T_pM上），exp_p: T_pM ≅ Rⁿ → M的万有覆盖是整体微分同胚。" }],
    applications: "经典力学中的位形空间（通常为欧氏空间）；计算机图形学中的刚体运动；数值计算中的网格生成。",
    refs: { book: "Lee", ch: "Ch.3", sec: "§3.1" }
  },
  {
    id: "r13", label: "球面", chapter: "ch3", layer: 0,
    desc: "球面Sⁿ是最基本的常正曲率黎曼流形，截面曲率恒为1/R²，是Einstein静态宇宙的空间模型。",
    content: "n维球面 Sⁿ = {x∈Rⁿ⁺¹ : |x|=R} 配备Rⁿ⁺¹诱导的度量，是常截面曲率 K = 1/R² 的齐性空间。等距群为 O(n+1)，维数达到上界。球面上的测地线是大圆（球面与过球心平面的交线）。球面是紧致、完备、单连通的（n≥2）。球面的直径（两点间最大距离）为 πR，体积有限。球面几何与欧氏几何有本质不同：三角形内角和大于180度，没有平行线，相似三角形必全等。球面是Einstein静态宇宙模型的空间部分。",
    understanding: "在地球表面行走，沿大圆航线是最短路径（测地线），这就是为什么北京到纽约的航班飞越北极。球面上三角形的内角和总是大于180度，比如从北极到赤道上两点形成的三角形，内角和可达270度。在球面上，你无法画出'平行线'——任何两条大圆必然相交。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="70" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><ellipse cx="100" cy="100" rx="70" ry="25" fill="none" stroke="#7c3aed" stroke-width="1"/><path d="M100,30 Q130,70 100,100" fill="none" stroke="#dc2626" stroke-width="1.5"/><path d="M100,30 Q70,70 100,100" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110" y="45" font-size="9" fill="#dc2626">大圆</text><text x="35" y="90" font-size="10" fill="#2563eb">K=1/R²</text><text x="105" y="125" font-size="9" fill="#7c3aed">赤道</text></svg>`,
    examples: [
      { title: "二维球面 S²", content: "半径为R的二维球面，面积 4πR²，Gauss曲率 1/R²，直径 πR。测地线是大圆，两点间有两段大圆弧。" },
      { title: "三维球面 S³", content: "S³ 是 Lie 群 SU(2) 的底流形，在物理学中描述旋转对称性，Hopf纤维化 S³→S² 是重要的拓扑构造。" },
      { title: "射影空间 RPⁿ", content: "实射影空间 RPⁿ = Sⁿ/{±1} 配备球面诱导度量，是常正曲率的非单连通流形，基本群为 Z₂。" }
    ],
    theorems: [{ name: "球面刚性定理", statement: "若紧致单连通黎曼流形截面曲率严格介于 1/4 和 1 之间，则它同胚于球面。", proof: "下界1/4用于Rauch比较定理控制共轭点距离（≥π），上界1用于Toponogov定理控制直径。由曲率≥1/4，共轭点距离≥π；由曲率≤1，直径≤π（Bonnet-Myers）。取相距最远的两点p,q，构造距离函数f(x)=d(p,x)，利用Toponogov定理证明f无临界点，即M可收缩为点，从而同胚于球面。这是著名的'球面定理'（Sphere Theorem）。" }],
    applications: "GPS导航系统的大圆航法；量子力学中自旋态的Bloch球面表示；宇宙学中正曲率宇宙模型；机器人学中SO(3)的姿态描述。",
    refs: { book: "Lee", ch: "Ch.3", sec: "§3.2" }
  },
  {
    id: "r14", label: "双曲空间", chapter: "ch3", layer: 0,
    desc: "双曲空间Hⁿ是常负曲率黎曼流形的标准模型，截面曲率恒为-1，具有丰富的等距群和独特的几何性质。",
    content: "双曲空间是截面曲率恒为 -1 的单连通完备黎曼流形。有多种等距模型：上半空间模型 Hⁿ = {(x¹,...,xⁿ): xⁿ>0}，度量 ds² = (dx¹²+...+dxⁿ²)/(xⁿ)²；Poincaré球模型 Bⁿ = {|x|<1}，度量 ds² = 4(dx¹²+...+dxⁿ²)/(1-|x|²)²；双曲面模型 {x₀²-x₁²-...-xₙ²=1, x₀>0} 配备Minkowski度量诱导的度量。双曲几何违反欧氏平行公理：过直线外一点有无数条平行线。三角形内角和小于180度，面积与角度缺额成正比。",
    understanding: "双曲空间就像'马鞍面'的高维推广。在双曲平面上，三角形内角和小于180度，而且三角形面积越大，内角和越小。想象一片生菜叶子的边缘——它不断褶皱，产生'过多'的表面积，这就是负曲率的效果。在双曲空间中，圆的周长和面积随半径指数增长，远超欧氏几何。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M30,170 Q70,120 100,100 Q130,80 170,70" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M30,170 Q60,130 100,100 Q140,70 170,70" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M30,170 Q70,140 100,100 Q130,60 170,70" fill="none" stroke="#2563eb" stroke-width="2"/><polygon points="100,100 140,82 130,120" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="110" y="85" font-size="8" fill="#dc2626">内角和&lt;180°</text><text x="40" y="50" font-size="10" fill="#2563eb">K=-1</text><text x="30" y="65" font-size="9" fill="#7c3aed">无穷多条平行线</text></svg>`,
    examples: [
      { title: "Poincaré圆盘", content: "Poincaré圆盘模型中，'直线'是与边界垂直的圆弧。两点间双曲距离由交比给出，边界上的点对应'无穷远点'。" },
      { title: "双曲平面的铺砖", content: "双曲平面可由正多边形铺满，这在欧氏几何中不可能（如正七边形铺砖），在Escher的版画《圆极限》中有艺术展现。" },
      { title: "双曲三维空间", content: "H³ 的等距群 PSL(2,C) 与三维双曲几何和Kleinian群理论密切相关，Thurston的几何化猜想以此为基础。" }
    ],
    theorems: [{ name: "双曲空间的唯一性", statement: "任何两个具有相同常负曲率且同维数的完备单连通黎曼流形必定等距。", proof: "取定一点p∈M和正交标架，定义映射到双曲空间模型（如双曲面模型）。利用常曲率条件下曲率张量的标准形式 R(X,Y)Z = c(⟨Y,Z⟩X - ⟨X,Z⟩Y)，可验证Jacobi场的比较性质。通过指数映射的等距性，可将M整体映射到标准双曲空间。本质上，常曲率空间的度量局部完全确定，单连通完备性保证全局唯一性。" }],
    applications: "网络和复杂系统的双曲嵌入（如Poincaré词嵌入）；Thurston三维流形几何化纲领；理论物理中AdS/CFT对偶的反de Sitter空间。",
    refs: { book: "Lee", ch: "Ch.3", sec: "§3.3" }
  },
  {
    id: "r15", label: "常曲率空间分类", chapter: "ch3", layer: 1,
    desc: "完备单连通常曲率空间只有三种：球面（正曲率）、欧氏空间（零曲率）、双曲空间（负曲率）。这是黎曼几何的基本分类定理。",
    content: "常截面曲率空间的分类是黎曼几何的基石。在同构意义下，任意维数 n 的完备单连通常曲率 c 黎曼流形等距于：若 c>0，则等距于半径为 1/√c 的球面 Sⁿ；若 c=0，则等距于欧氏空间 Rⁿ；若 c<0，则等距于曲率为 c 的双曲空间 Hⁿ(c)。任何常曲率流形都是这些空间模去一个离散等距子群作用的商空间，即空间形式。紧凑空间形式的存在性涉离散群的分类，如球面空间形式（对应于球面堆积问题）和双曲空间形式（对应于Thurston几何化）。",
    understanding: "空间曲率只有三种'口味'：正的像球面（三角形内角和>180度），零的像平面（三角形内角和=180度），负的像马鞍面（三角形内角和<180度）。就像温度只有热、温和、冷三种基本状态，空间的'弯曲方式'也只有三种基本类型。所有其他弯曲空间都可以从这三种基本空间通过'切割和粘贴'构造出来。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="30" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="40" y="53" font-size="10" fill="#dc2626">Sⁿ</text><text x="28" y="95" font-size="9" fill="#2563eb">c>0</text><rect x="75" y="20" width="50" height="50" fill="#fce7f3" stroke="#dc2626" stroke-width="1.5"/><text x="83" y="50" font-size="10" fill="#dc2626">Rⁿ</text><text x="82" y="85" font-size="9" fill="#dc2626">c=0</text><path d="M145,70 Q160,30 170,45 Q180,60 160,70 Q145,80 145,70Z" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.5"/><text x="140" y="95" font-size="9" fill="#7c3aed">c&lt;0</text><text x="148" y="60" font-size="9" fill="#7c3aed">Hⁿ</text><text x="40" y="130" font-size="10" fill="#333">完备单连通 + 常曲率 → 仅三种</text></svg>`,
    examples: [
      { title: "二维空间形式", content: "二维常曲率c的完备单连通空间：c>0时球面S²(1/√c)，c=0时平面R²，c<0时双曲平面H²(1/√|c|)。" },
      { title: "平坦环面", content: "平坦环面 T² = R²/Z² 是常曲率0的紧致空间形式，但非单连通（基本群Z²）。" },
      { title: "球面空间形式", content: "透镜空间 L(p,q) = S³/Z_p 是常正曲率的三维空间形式，基本群为Z_p，在三维流形分类中起重要作用。" }
    ],
    theorems: [{ name: "Killing-Hopf定理", statement: "任何完备单连通常曲率黎曼流形等距于球面、欧氏空间或双曲空间（差缩放）。", proof: "设截面曲率为常数c。曲率张量具有标准形式 R(X,Y)Z = c(⟨Y,Z⟩X - ⟨X,Z⟩Y)。取定p∈M和正交标架，构造映射到对应模型空间（c>0→Sⁿ(1/√c), c=0→Rⁿ, c<0→Hⁿ(1/√|c|)）。通过验证指数映射在此映射下保持度量，可得整体等距。完备单连通条件保证指数映射是整体微分同胚，从而映射是整体等距。" }],
    applications: "宇宙学中宇宙大尺度几何的模型选择（正/零/负曲率）；三维流形的Thurston几何化分类；相对论中常曲率时空模型。",
    refs: { book: "Lee", ch: "Ch.3", sec: "§3.4" }
  },
  {
    id: "r16", label: "Lie群上的不变度量", chapter: "ch3", layer: 2,
    desc: "Lie群上存在自然的左不变和双不变黎曼度量，赋予Lie群丰富的几何结构，连接了代数与几何。",
    content: "Lie群 G 上的左不变黎曼度量由单位元处切空间 T_eG（即Lie代数 g）上的内积唯一确定，通过左平移扩展到整个群。双不变度量需要内积在 Ad(G) 作用下不变。紧致Lie群上总存在双不变度量（通过平均化构造）。配备双不变度量的紧致Lie群，其截面曲率由Lie括号给出：K(X,Y) = (1/4)|[X,Y]|²（对正交单位向量X,Y）。特别地，截面曲率非负。单参数子群是测地线。例子包括 SO(n)（配备Killing形式）、SU(n)、球面 S³ ≅ SU(2)。",
    understanding: "Lie群就像既有几何又有代数的'双面人'。左不变度量意味着群在'几何上'看起来各处一样——就像球面，每个点周围的环境都相同。双不变度量更强，意味着从左和从右看都是一样的。这种对称性使得Lie群成为研究最透彻的黎曼流形之一。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="70" fill="none" stroke="#2563eb" stroke-width="1.5"/><circle cx="100" cy="100" r="3" fill="#dc2626"/><text x="105" y="95" font-size="10" fill="#dc2626">e</text><line x1="100" y1="100" x2="150" y2="70" stroke="#7c3aed" stroke-width="1.5"/><text x="152" y="68" font-size="9" fill="#7c3aed">X∈g</text><path d="M150,70 Q160,60 170,50" fill="none" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,3"/><text x="155" y="45" font-size="9" fill="#dc2626">L_g:X↦dL_g(X)</text><text x="30" y="40" font-size="9" fill="#2563eb">左平移扩展度量</text><text x="30" y="55" font-size="9" fill="#7c3aed">K(X,Y)=|[X,Y]|²/4</text></svg>`,
    examples: [
      { title: "SO(3)的几何", content: "SO(3)（旋转群）配备Killing形式诱导的度量，同构于RP³，截面曲率常为1/4，测地线对应匀速旋转。" },
      { title: "SU(2) ≅ S³", content: "SU(2) 作为Lie群配备双不变度量，等距于三维球面S³，截面曲率恒为1。" },
      { title: "复射影空间 CPⁿ", content: "CPⁿ 作为 U(n+1)/(U(1)×U(n)) 是齐性空间，配备Fubini-Study度量，截面曲率在1到4之间。" }
    ],
    theorems: [{ name: "紧致Lie群曲率公式", statement: "配备双不变度量的紧致Lie群上，截面曲率 K(X,Y) = (1/4)|[X,Y]|² ≥ 0，其中X, Y是标准正交的Lie代数元素。", proof: "对于双不变度量，Levi-Civita联络由∇_X Y = (1/2)[X,Y]给出（X,Y视为左不变向量场）。计算曲率张量：R(X,Y)Z = (1/4)[[X,Y],Z]。代入截面曲率定义K(X,Y)=⟨R(X,Y)Y,X⟩，在|X|=|Y|=1且⟨X,Y⟩=0条件下，得K(X,Y)=(1/4)|[X,Y]|² ≥ 0。正定性来自Lie括号的长度，曲率完全由Lie代数结构决定。" }],
    applications: "机器人学中构型空间（SE(3)）的路径规划；量子计算中酉群上的几何；控制理论中可达集分析。",
    refs: { book: "Lee", ch: "Ch.3", sec: "§3.5" }
  },

  // ======================== Ch4: 联络 (6) ========================
  {
    id: "r17", label: "仿射联络", chapter: "ch4", layer: 0,
    desc: "仿射联络是流形上向量场求导的规则，将不同点的切空间连接起来，是定义曲率和测地线的基础。",
    content: "仿射联络 ∇ 是一个双线性映射 ∇: Γ(TM)×Γ(TM)→Γ(TM)，记作 ∇_X Y，满足：(1) ∇_fX Y = f∇_X Y（对X是C^∞-线性的），(2) ∇_X(fY) = f∇_X Y + (Xf)Y（Leibniz法则）。在局部坐标下，∇ 由 Christoffel 符号 Γ^k_ij 确定：∇_∂_i ∂_j = Γ^k_ij ∂_k。联络不是张量场（变换律包含二阶导数项），但两个联络的差是张量。联络的挠率定义为 T(X,Y) = ∇_X Y - ∇_Y X - [X,Y]，度量联络的挠率为零。联络使得不同点切空间之间可以建立'平行移动'。",
    understanding: "联络就像是流形上'微分'的规则说明书。在欧氏空间中，你可以直接对不同点的向量做差（因为所有切空间都自然地等同），但在弯曲流形上，你需要一个'规则'告诉你怎么把一个点的向量'平移'到另一个点，然后才能比较。联络就是这个规则。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M20,120 Q80,70 120,80 Q160,90 180,60" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="80" y1="80" x2="110" y2="55" stroke="#dc2626" stroke-width="1.5"/><line x1="80" y1="80" x2="60" y2="55" stroke="#dc2626" stroke-width="1.5"/><text x="85" y="50" font-size="9" fill="#dc2626">Y</text><text x="45" y="50" font-size="9" fill="#dc2626">X</text><text x="30" y="40" font-size="10" fill="#2563eb">∇_X Y</text><text x="30" y="55" font-size="9" fill="#7c3aed">Γ^k_ij = Christoffel符号</text><circle cx="80" cy="80" r="2.5" fill="#7c3aed"/></svg>`,
    examples: [
      { title: "欧氏联络", content: "Rⁿ 上的标准联络由普通方向导数给出：∇_X Y = (XY^i)∂_i，Christoffel符号全为零，是最简单的联络。" },
      { title: "曲面上的诱导联络", content: "R³中曲面M上的诱导联络 ∇_X Y = (D_X Y)^T，即R³中普通导数在切平面上的投影。" },
      { title: "左不变联络", content: "Lie群上的左不变联络由Lie代数上的双线性映射 α: g×g→g 确定，在几何力学中有重要应用。" }
    ],
    theorems: [{ name: "联络存在性", statement: "任何光滑流形上都存在仿射联络。利用单位分解可以构造全局联络。", proof: "取局部坐标覆盖{U_α}和从属单位分解{ρ_α}。在每个U_α上定义局部联络∇^α（如取Christoffel符号Γ^k_ij=0），然后定义全局联络 ∇ = Σ_α ρ_α ∇^α。由于联络的凸组合仍是联络（验证C^∞-线性和Leibniz法则），且单位分解的和为1保证全局定义。此构造不依赖度量，是纯微分拓扑的结果。" }],
    applications: "连续介质力学中的变形梯度；一般相对论中自由粒子运动方程；机械臂控制中的动力学建模。",
    refs: { book: "Lee", ch: "Ch.4", sec: "§4.1" }
  },
  {
    id: "r18", label: "Levi-Civita联络", chapter: "ch4", layer: 0,
    desc: "Levi-Civita联络是黎曼流形上唯一同时满足无挠性和度量相容性的联络，是黎曼几何的'标准联络'。",
    content: "Levi-Civita联络是黎曼流形上的典范联络，由两个条件唯一确定：(1) 无挠性：T(X,Y) = ∇_X Y - ∇_Y X - [X,Y] = 0；(2) 度量相容性：∇g = 0，即 X⟨Y,Z⟩ = ⟨∇_X Y, Z⟩ + ⟨Y, ∇_X Z⟩。在局部坐标下，Christoffel符号由度量张量及其导数表示：Γ^k_ij = (1/2)g^kl(∂_i g_jl + ∂_j g_il - ∂_l g_ij)。这是黎曼几何的基本定理：任何黎曼流形上存在唯一的无挠度量联络。Levi-Civita联络完全由度量决定，因此所有黎曼几何量（曲率、测地线等）归根结底都来自度量。",
    understanding: "Levi-Civita联络是黎曼几何的'默认驾驶模式'。无挠性意味着'不绕圈'——如果你沿X方向再沿Y方向走，和沿Y再沿X方向走，在Levi-Civita联络下到达的'几何位置'是一样的（平行四边形的闭合性）。度量相容性意味着'不拉伸'——平行移动保持向量长度和夹角，就像在平面上平移一样。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M30,150 Q30,100 70,80 Q110,60 150,70" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="120" x2="80" y2="100" stroke="#dc2626" stroke-width="1.5" marker-end="url(#a5)"/><line x1="100" y1="75" x2="130" y2="55" stroke="#dc2626" stroke-width="1.5" marker-end="url(#a5)"/><text x="55" y="110" font-size="9" fill="#dc2626">长度不变</text><text x="105" y="65" font-size="9" fill="#dc2626">夹角不变</text><text x="25" y="45" font-size="9" fill="#2563eb">∇g=0 (度量相容)</text><text x="25" y="60" font-size="9" fill="#7c3aed">T=0 (无挠)</text><defs><marker id="a5" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#dc2626"/></marker></defs></svg>`,
    examples: [
      { title: "欧氏空间的Levi-Civita联络", content: "在Rⁿ中，Levi-Civita联络就是普通方向导数，Γ^k_ij = 0。这是因为 g_ij = δ_ij 是常数。" },
      { title: "球面S²上的联络", content: "球面S²的诱导联络：∇_X Y = (D_X Y)^T。在球坐标下，非零Christoffel符号为 Γ^θ_φφ = -sinθ cosθ, Γ^φ_θφ = cotθ。" },
      { title: "Poincaré半平面", content: "双曲平面H²（上半平面模型）度量 ds² = (dx²+dy²)/y²，非零Christoffel符号 Γ^x_xy = Γ^y_xx = -Γ^y_yy = -1/y。" }
    ],
    theorems: [{ name: "黎曼几何基本定理", statement: "在任何黎曼流形上存在唯一的仿射联络满足无挠性和度量相容性，称为Levi-Civita联络。", proof: "从度量相容性条件∇g=0和无挠性条件T=0出发，轮换指标可得三个方程：X⟨Y,Z⟩=⟨∇_X Y,Z⟩+⟨Y,∇_X Z⟩等。利用无挠性∇_X Y-∇_Y X=[X,Y]，解出Koszul公式：2⟨∇_X Y,Z⟩ = X⟨Y,Z⟩+Y⟨Z,X⟩-Z⟨X,Y⟩-⟨X,[Y,Z]⟩+⟨Y,[Z,X]⟩+⟨Z,[X,Y]⟩。该公式唯一确定∇_X Y。在坐标下得Christoffel符号 Γ^k_ij = (1/2)g^{kl}(∂_i g_{jl}+∂_j g_{il}-∂_l g_{ij})。" }],
    applications: "广义相对论中Christoffel符号描述引力场的'联络系数'；弹性力学中的变形协调条件；计算机图形学中曲面上向量场的平行移动。",
    refs: { book: "Lee", ch: "Ch.4", sec: "§4.2" }
  },
  {
    id: "r19", label: "平行移动", chapter: "ch4", layer: 1,
    desc: "平行移动是将向量沿曲线'平移'的规则，保持向量的长度和夹角，建立了不同点切空间之间的等距同构。",
    content: "给定联络∇和曲线γ，向量场V沿γ称为平行的，如果∇_γ' V = 0。给定初始向量V_0∈T_γ(0)M，存在唯一的沿γ的平行向量场V满足V(0)=V_0。这定义了平行移动同构 P_γ: T_γ(0)M → T_γ(1)M。对于Levi-Civita联络，平行移动是等距同构（保持向量长度和夹角）。在坐标下，平行移动满足线性ODE：dV^k/dt + Γ^k_ij(γ(t)) γ'^i(t) V^j(t) = 0。和乐群（Holonomy group）描述沿所有闭曲线平行移动产生的变换群。",
    understanding: "平行移动就像在弯曲路面上'搬运'一个箭头。你尽力保持箭头'方向不变'（相对于路面），但当你绕一圈回到起点时，箭头可能已经转了方向——这就是和乐效应。在球面上，沿纬线走一圈再沿经线回北极，箭头会旋转一个角度，等于所围面积的球面曲率积分。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="60" fill="none" stroke="#2563eb" stroke-width="1.5"/><line x1="100" y1="40" x2="140" y2="55" stroke="#dc2626" stroke-width="1.5" marker-end="url(#a6)"/><line x1="160" y1="100" x2="145" y2="135" stroke="#dc2626" stroke-width="1.5" marker-end="url(#a6)"/><line x1="40" y1="100" x2="55" y2="65" stroke="#dc2626" stroke-width="1.5" marker-end="url(#a6)"/><text x="145" y="50" font-size="9" fill="#dc2626">V₁</text><text x="148" y="140" font-size="9" fill="#dc2626">V₂</text><text x="30" y="60" font-size="9" fill="#dc2626">V₃</text><text x="60" y="160" font-size="9" fill="#7c3aed">∇_γ'V = 0</text><defs><marker id="a6" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#dc2626"/></marker></defs></svg>`,
    examples: [
      { title: "球面上的平行移动", content: "在球面上沿纬线平行移动向量，回到起点后向量旋转的角度等于纬线所围球冠的面积曲率积分（Gauss-Bonnet的特殊情形）。" },
      { title: "Foucault摆", content: "Foucault摆的摆动平面旋转是平行移动的物理体现：地球自转使摆的振动平面沿球面平行移动，产生可观测的旋转。" },
      { title: "Berry相位", content: "量子力学中，系统参数绝热演化一周后波函数获得的几何相位（Berry相位）是参数空间上联络的和乐效应的物理表现。" }
    ],
    theorems: [{ name: "平行移动的存在唯一性", statement: "对于仿射联络，给定曲线和初始向量，存在唯一的沿曲线的平行向量场。", proof: "平行条件∇_γ' V = 0在坐标下写为线性ODE组：dV^k/dt + Γ^k_ij(γ(t)) γ'^i(t) V^j(t) = 0。这是关于V^k的一阶线性常微分方程组，由Picard-Lindelof定理，给定初始值V(0)=V_0，存在唯一整体解。解的存在唯一性保证平行移动同构P_γ: T_{γ(0)}M → T_{γ(1)}M是良定义的线性同构。" }],
    applications: "Foucault摆演示地球自转；量子计算中的几何相位门；惯性导航系统中的姿态传递；光纤通信中的偏振控制。",
    refs: { book: "Lee", ch: "Ch.4", sec: "§4.3" }
  },
  {
    id: "r20", label: "协变导数与张量场", chapter: "ch4", layer: 1,
    desc: "协变导数将联络的作用从向量场推广到所有张量场，是黎曼几何中进行微分运算的核心工具。",
    content: "给定联络∇，其对张量场的协变导数由以下规则唯一确定：(1) 对函数：∇_X f = Xf；(2) 对向量场：按联络定义；(3) 对1-形式：由 (∇_X ω)(Y) = X(ω(Y)) - ω(∇_X Y) 确定；(4) 对一般张量：满足Leibniz法则。在坐标下，张量场的协变导数用Christoffel符号表达，如 ∇_i T^j_k = ∂_i T^j_k + Γ^j_il T^l_k - Γ^l_ik T^j_l。度量相容性 ∇g = 0 意味着协变导数与升降指标运算交换。二阶协变导数一般不可交换，其差由曲率张量度量。",
    understanding: "协变导数就是'弯曲空间中的导数'。普通导数在弯曲空间中不够用——把向量从一个点移到另一个点时，不仅向量的分量在变，坐标基也在变。协变导数同时考虑了这两方面的变化。就像在旋转的参考系中测量速度，你不仅要考虑物体自身的运动，还要考虑参考系自身的旋转。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M20,140 Q60,100 100,90 Q140,80 180,100" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="100" y1="90" x2="130" y2="60" stroke="#dc2626" stroke-width="1.5" marker-end="url(#a7)"/><text x="132" y="55" font-size="9" fill="#dc2626">T</text><text x="30" y="50" font-size="9" fill="#2563eb">∇_i T = ∂_i T + Γ*T</text><text x="30" y="65" font-size="8" fill="#7c3aed">偏导数 + Christoffel修正</text><defs><marker id="a7" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#dc2626"/></marker></defs></svg>`,
    examples: [
      { title: "函数的协变导数", content: "对函数f的协变导数就是普通微分：∇f = df。但二阶协变导数 ∇²f = ∇(df) 是 (0,2)-张量，即Hessian。" },
      { title: "度量的协变导数", content: "对于Levi-Civita联络，∇g = 0。这意味着 ∇_k g_ij = 0，即 ∂_k g_ij = Γ^l_ki g_lj + Γ^l_kj g_il。" },
      { title: "Killing向量场", content: "满足 ∇_i X_j + ∇_j X_i = 0 的向量场称为Killing向量场，生成流形的等距变换，是研究对称性的基本工具。" }
    ],
    theorems: [{ name: "Ricci恒等式", statement: "对于张量场T，二阶协变导数的交换子由曲率张量表示：(∇_i∇_j - ∇_j∇_i)T = R_ij·T。", proof: "直接展开协变导数的局部表达式。以向量场为例：∇_i∇_j X^k = ∂_i(∂_j X^k + Γ^k_jl X^l) + Γ^k_im(∂_j X^m + Γ^m_jl X^l) - Γ^m_ij(∂_m X^k + Γ^k_ml X^l)。交换i,j后相减，偏导数项∂_i∂_j X^k抵消，含Γ的项整理后恰好给出R^k_lij X^l = (∂_i Γ^k_jl - ∂_j Γ^k_il + Γ^m_jl Γ^k_im - Γ^m_il Γ^k_jm) X^l。对一般张量，每个指标贡献一个曲率项。" }],
    applications: "流体力学中的随体导数（物质导数）推广；电磁学中Maxwell方程在弯曲时空中的表述；连续介质力学的本构方程。",
    refs: { book: "Lee", ch: "Ch.4", sec: "§4.4" }
  },
  {
    id: "r21", label: "挠率与联络的几何意义", chapter: "ch4", layer: 2,
    desc: "挠率张量度量联络的'非对称性'，描述了平行四边形的闭合失效，对理解非黎曼几何（如Einstein-Cartan理论）至关重要。",
    content: "挠率张量定义为 T(X,Y) = ∇_X Y - ∇_Y X - [X,Y]。在坐标下，T^k_ij = Γ^k_ij - Γ^k_ji。无挠联络（如Levi-Civita联络）满足 Γ^k_ij = Γ^k_ji。挠率的几何意义：考虑两个向量场X, Y，沿X走ε再沿Y走ε，与沿Y走ε再沿X走ε，在无挠联络下两条路径在O(ε²)意义下闭合；有挠时，终点差为 ε² T(X,Y)。在带挠率的几何中，平行四边形的'缺口'由挠率张量度量。Einstein-Cartan引力理论将挠率与自旋联系起来。",
    understanding: "挠率描述了'平行四边形不闭合'的现象。在无挠的空间中，如果你向东走100米，再向北走100米，和你先向北走100米再向东走100米，到达的是同一个点。在有挠的空间中，这两条路径不会在同一个点结束——微观世界可能就有这种'扭曲'。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/0/svg"><line x1="30" y1="150" x2="70" y2="140" stroke="#dc2626" stroke-width="1.5" marker-end="url(#a8)"/><line x1="70" y1="140" x2="75" y2="100" stroke="#dc2626" stroke-width="1.5" marker-end="url(#a8)"/><line x1="30" y1="150" x2="35" y2="110" stroke="#2563eb" stroke-width="1.5" marker-end="url(#a8)"/><line x1="35" y1="110" x2="75" y2="100" stroke="#2563eb" stroke-width="1.5" marker-end="url(#a8)"/><circle cx="75" cy="100" r="2" fill="#dc2626"/><circle cx="75" cy="100" r="1" fill="#7c3aed"/><text x="80" y="95" font-size="9" fill="#7c3aed">T(X,Y)</text><text x="25" y="40" font-size="9" fill="#dc2626">X→Y路径</text><text x="25" y="55" font-size="9" fill="#2563eb">Y→X路径</text><text x="25" y="70" font-size="8" fill="#7c3aed">缺口 ∝ 挠率</text><defs><marker id="a8" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#dc2626"/></marker></defs></svg>`,
    examples: [
      { title: "Levi-Civita联络", content: "Levi-Civita联络的挠率恒为零，这是黎曼几何的标准设定。Γ^k_ij = Γ^k_ji，Christoffel符号在下标中对称。" },
      { title: "Cartan联络", content: "Einstein-Cartan理论中，联络具有非零挠率，挠率与物质的自旋张量相关，是广义相对论的推广。" },
      { title: "有挠率联络的构造", content: "任意联络可分解为 ∇ = ∇^{LC} + A，其中A是(1,2)-张量，A的反对称部分对应挠率。" }
    ],
    theorems: [{ name: "联络的分解", statement: "任何仿射联络可唯一分解为 ∇ = ∇^{LC} + D + S，其中∇^{LC}是Levi-Civita联络，D和S分别对应挠率的对称和反对称部分。", proof: "两个联络的差是(1,2)-张量。取∇^{LC}为同度量的Levi-Civita联络，则A = ∇ - ∇^{LC}是张量。将A分解为关于下标的对称和反对称部分：A^k_ij = S^k_ij + D^k_ij。反对称部分S^k_ij = (1/2)(A^k_ij - A^k_ji)对应于挠率的贡献，对称部分D^k_ij对应非度量相容性的贡献。这是Cartan的联络理论的基本分解。" }],
    applications: "Einstein-Cartan引力理论（挠率-自旋耦合）；位错理论中的连续介质力学；超引力理论中的挠率场。",
    refs: { book: "Lee", ch: "Ch.4", sec: "§4.5" }
  },
  {
    id: "r22", label: "和乐群与de Rham分解", chapter: "ch4", layer: 3,
    desc: "和乐群描述了沿闭曲线平行移动产生的线性变换全体，反映流形的曲率结构，是黎曼几何分类的重要工具。",
    content: "给定点p∈M，和乐群 Hol(p) 是所有沿以p为起点的分段光滑闭曲线的平行移动变换构成的 GL(T_pM) 的子群。限制和乐群 Hol⁰(p)（零伦闭曲线）是Hol(p)的连通分支，是紧Lie群。Berger分类定理给出了不可约非对称黎曼流形的可能和乐群：SO(n)（一般）、U(n)（Kähler）、SU(n)（Calabi-Yau）、Sp(n)·Sp(1)（四元Kähler）、Sp(n)（超Kähler）、G₂和Spin(7)（例外）。de Rham分解定理：若和乐群可约，则流形局部等距于黎曼乘积。",
    understanding: "和乐群就像流形上'转一圈'后向量能经历的'所有可能的旋转'。平坦空间的和乐群是平凡的（转一圈向量不变），球面的和乐群是SO(n)（所有旋转都可能），Calabi-Yau流形的和乐群是SU(n)（保持复结构）。和乐群越小，流形就越'特殊'，具有越多的平行张量场。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="50" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M100,50 Q120,70 130,100 Q140,130 110,145 Q80,150 70,130 Q60,105 80,75 Q95,55 100,50" fill="none" stroke="#dc2626" stroke-width="1.5"/><line x1="100" y1="50" x2="120" y2="55" stroke="#7c3aed" stroke-width="1.5"/><line x1="100" y1="50" x2="85" y2="65" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><text x="125" y="52" font-size="9" fill="#7c3aed">V</text><text x="70" y="60" font-size="9" fill="#7c3aed">P_γ(V)</text><text x="40" y="170" font-size="8" fill="#dc2626">Hol(p) = {P_γ}</text></svg>`,
    examples: [
      { title: "平坦流形", content: "平坦流形（如Rⁿ, Tⁿ）的和乐群是平凡的，平行移动不依赖路径。" },
      { title: "Kähler流形", content: "Kähler流形的和乐群包含在U(n)中，具有平行的复结构和辛形式，是复几何和代数几何的桥梁。" },
      { title: "Calabi-Yau流形", content: "Calabi-Yau流形的和乐群为SU(n)，存在平行的全纯n-形式，在弦论紧致化中起核心作用。" }
    ],
    theorems: [{ name: "Berger分类定理", statement: "不可约非对称黎曼流形的限制和乐群只有七种：SO(n), U(n), SU(n), Sp(n)·Sp(1), Sp(n), G₂, Spin(7)。", proof: "Berger在1955年通过分析曲率张量的代数性质和和乐群的Lie代数结构得到此分类。证明思路：限制和乐群的Lie代数由曲率张量及其协变导数生成，必须满足Bianchi恒等式。通过逐个排除不可能的Lie代数，最终得到七种可能。de Rham分解定理将可约情形归约为不可约因子的乘积。对称空间由Cartan分类。这是20世纪微分几何最重要的分类定理之一。" }],
    applications: "弦论中Calabi-Yau紧致化的和乐群条件；超对称理论中的特殊和乐群；镜像对称（Mirror Symmetry）中Calabi-Yau流形的对偶。",
    refs: { book: "Lee", ch: "Ch.4", sec: "§4.6" }
  },

  // ======================== Ch5: 测地线与距离 (5) ========================
  {
    id: "r23", label: "测地线方程", chapter: "ch5", layer: 0,
    desc: "测地线是黎曼流形上'直线'的推广，满足加速度为零的条件，由二阶常微分方程组描述。",
    content: "测地线是满足 ∇_γ' γ' = 0 的曲线。在局部坐标下，γ(t) = (x¹(t),...,xⁿ(t)) 满足测地线方程：d²x^k/dt² + Γ^k_ij dx^i/dt dx^j/dt = 0。这是二阶非线性常微分方程组。给定初始点 p 和初始速度 v∈T_pM，存在唯一的测地线 γ_v(t) 满足 γ_v(0)=p, γ'_v(0)=v。对于Levi-Civita联络，测地线是局部最短路径（长度泛函的临界点）。测地线也是能量泛函 E(γ) = (1/2)∫|γ'|² dt 的临界点。参数化测地线的速度模长恒定。",
    understanding: "测地线就是弯曲空间中的'惯性运动轨迹'。在平面上是直线，在球面上是大圆，在双曲空间中是垂直边界的圆弧。如果一只蚂蚁在曲面上沿'最直'的方向走（不主动转弯），它走出的就是测地线。物理上，自由粒子在引力场中的运动就是时空中的测地线。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M20,20 Q60,40 100,80 Q140,120 180,160" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="100" cy="80" r="2.5" fill="#dc2626"/><line x1="100" y1="80" x2="130" y2="95" stroke="#dc2626" stroke-width="1.5" marker-end="url(#a9)"/><text x="135" y="92" font-size="9" fill="#dc2626">γ'</text><text x="30" y="40" font-size="9" fill="#2563eb">∇_γ' γ' = 0</text><text x="30" y="55" font-size="8" fill="#7c3aed">d²x/dt² + Γ dx/dt dx/dt = 0</text><defs><marker id="a9" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#dc2626"/></marker></defs></svg>`,
    examples: [
      { title: "欧氏空间测地线", content: "Rⁿ 中 Γ^k_ij = 0，测地线方程退化为 d²x/dt² = 0，解为直线 x(t) = p + tv。" },
      { title: "球面测地线", content: "S² 上的测地线是大圆。在球坐标下，测地线方程给出 φ = const 是大圆，以及满足Clairaut关系的曲线。" },
      { title: "旋转曲面上的测地线", content: "旋转曲面上测地线满足Clairaut定理：r sinα = const，其中r是到旋转轴的距离，α是测地线与纬线的夹角。" }
    ],
    theorems: [{ name: "测地线存在唯一性", statement: "对于任意p∈M, v∈T_pM，存在唯一的极大测地线γ_v: I→M满足γ_v(0)=p, γ'_v(0)=v。", proof: "测地线方程 d²x^k/dt² + Γ^k_ij dx^i/dt dx^j/dt = 0 是二阶非线性ODE。化为一阶系统：设y = (x, dx/dt)，得 dy/dt = F(y)。F是光滑函数（Γ^k_ij光滑），由ODE理论的Picard-Lindelof定理，对任意初始条件(p,v)，存在唯一局部解。极大解通过解的延伸得到，定义域是包含0的最大开区间。" }],
    applications: "GPS导航的最短路径计算；航空航线的规划；光线在非均匀介质中的传播（Fermat原理）；机器人最短路径规划。",
    refs: { book: "Lee", ch: "Ch.5", sec: "§5.1" }
  },
  {
    id: "r24", label: "指数映射", chapter: "ch5", layer: 0,
    desc: "指数映射exp_p将切空间T_pM中的向量映射为沿该方向走单位时间到达的测地线终点，是局部微分同胚。",
    content: "指数映射 exp_p: T_pM → M 定义为 exp_p(v) = γ_v(1)，其中γ_v是满足γ_v(0)=p, γ'_v(0)=v的测地线。exp_p在原点附近是微分同胚，其最大定义域是T_pM中包含原点的星形开集。指数映射的微分 d(exp_p)_0: T_0(T_pM) ≅ T_pM → T_pM 是恒等映射。法坐标（正规坐标）由exp_p的逆给出。在法坐标下，度量在原点满足 g_ij = δ_ij 和 ∂_k g_ij = 0，Christoffel符号在原点为零。这使得局部几何计算大大简化。",
    understanding: "指数映射就像'发射火箭'——从点p出发，给定初始速度v（方向和速率），沿测地线飞行1秒后到达的位置就是exp_p(v)。在球面上，从北极以速度v出发，沿大圆航行1秒后到达的点就是exp_N(v)。在原点附近，exp_p是局部一对一映射，就像小范围的地图能精确表示地球表面一样。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="3" fill="#dc2626"/><text x="50" y="50" font-size="9" fill="#dc2626">p</text><circle cx="60" cy="60" r="30" fill="none" stroke="#2563eb" stroke-width="1"/><line x1="60" y1="60" x2="80" y2="40" stroke="#7c3aed" stroke-width="1.5" marker-end="url(#a10)"/><text x="82" y="38" font-size="9" fill="#7c3aed">v</text><path d="M60,60 Q65,45 75,35" fill="none" stroke="#dc2626" stroke-width="1.5"/><circle cx="75" cy="35" r="2.5" fill="#dc2626"/><text x="78" y="32" font-size="9" fill="#dc2626">exp_p(v)</text><text x="20" y="120" font-size="9" fill="#2563eb">exp_p: T_pM → M</text><text x="20" y="135" font-size="8" fill="#7c3aed">局部微分同胚</text><defs><marker id="a10" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#7c3aed"/></marker></defs></svg>`,
    examples: [
      { title: "欧氏空间的指数映射", content: "Rⁿ 中 exp_p(v) = p + v，因为测地线是直线，走1秒恰好到达p+v。" },
      { title: "球面S²的指数映射", content: "球面S²上，exp_p(v) = cos(|v|)p + sin(|v|)v/|v|。当|v|=π时到达对径点，exp_p不是单射。" },
      { title: "Lie群上的指数映射", content: "紧致Lie群上，群指数映射与黎曼指数映射一致（对于双不变度量），单参数子群即是测地线。" }
    ],
    theorems: [{ name: "Gauss引理", statement: "指数映射exp_p的微分保持径向方向与切向方向的正交性：⟨d(exp_p)_v(v), d(exp_p)_v(w)⟩ = ⟨v,w⟩ 当 w ⟂ v。", proof: "考虑测地线变分Γ(s,t) = exp_p(t(v+sw))。变分向量场J(t)=∂Γ/∂s|_{s=0}是沿γ_v(t)的Jacobi场，满足J(0)=0, J'(0)=w。径向向量场∂Γ/∂t = γ'_v(t)。计算导数 d/dt⟨J(t), γ'_v(t)⟩ = ⟨J',γ'⟩+⟨J,0⟩ = 0（因为J是Jacobi场且J(0)=0, ⟨J'(0),γ'(0)⟩=⟨w,v⟩=0）。故在t=1处⟨d(exp_p)_v(w), d(exp_p)_v(v)⟩ = ⟨J(1),γ'_v(1)⟩ = 0。" }],
    applications: "非线性优化中的测地线下降法（如流形上的梯度下降）；机器人学中SE(3)上的运动插值；统计学中流形上的主成分分析。",
    refs: { book: "Lee", ch: "Ch.5", sec: "§5.2" }
  },
  {
    id: "r25", label: "距离函数与完备性", chapter: "ch5", layer: 1,
    desc: "黎曼距离函数d(p,q)定义为连接两点所有分段光滑曲线长度的下确界，赋予流形度量空间结构。",
    content: "黎曼距离函数 d(p,q) = inf{L(γ): γ是连接p和q的分段光滑曲线}。d 满足度量空间的所有公理：(1) d(p,q)≥0，等号成立当且仅当p=q；(2) d(p,q)=d(q,p)；(3) 三角不等式 d(p,q)≤d(p,r)+d(r,q)。d诱导的拓扑与流形的原始拓扑一致。流形称为完备的，如果作为度量空间完备（即Cauchy列收敛）。Hopf-Rinow定理给出了完备性的等价刻画：测地完备性（所有测地线可无限延伸）、任意两点可由最短测地线连接、有界闭子集紧致。这四种性质等价。",
    understanding: "黎曼距离就是'蚂蚁在曲面上行走的最短路径长度'。如果曲面是完备的，意味着蚂蚁永远走不到'边缘'——任何方向都能无限走下去。Hopf-Rinow定理说，在这种'无边缘'的曲面上，任意两点之间总存在一条最短路径（测地线），就像球面上任意两点可以通过大圆连接一样。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="3" fill="#dc2626"/><text x="30" y="30" fill="#dc2626" font-size="9">p</text><circle cx="160" cy="140" r="3" fill="#dc2626"/><text x="150" y="155" fill="#dc2626" font-size="9">q</text><path d="M40,40 Q60,70 90,90 Q120,110 160,140" fill="none" stroke="#2563eb" stroke-width="2"/><text x="100" y="80" font-size="9" fill="#2563eb">d(p,q)</text><path d="M40,40 Q80,40 160,140" fill="none" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4,4"/><text x="80" y="35" font-size="8" fill="#7c3aed">非最短路径</text></svg>`,
    examples: [
      { title: "完备流形", content: "Rⁿ（欧氏空间）、Sⁿ（球面）、Hⁿ（双曲空间）、紧致流形（无边界）都是完备的。" },
      { title: "不完备流形", content: "R²去掉原点后不完备：靠近原点的Cauchy列不收敛。测地线可能'撞到'原点而无法延伸。" },
      { title: "紧致流形", content: "任何紧致黎曼流形（无边界）自动完备，且直径有限。例如球面S²直径=πR，实射影平面RP²直径=πR/2。" }
    ],
    theorems: [{ name: "Hopf-Rinow定理", statement: "对于连通黎曼流形，以下等价：(1)完备性；(2)测地完备性；(3)任意两点可由最短测地线连接；(4)有界闭集紧致。", proof: "证明链条为(1)⇒(2)⇒(3)⇒(4)⇒(1)。(1)⇒(2): 若测地线在有限时间内无法延伸，构造Cauchy列导出矛盾。(2)⇒(3): 利用指数映射exp_p在T_pM上全局定义，取球面上极小值点，由Gauss引理得最短测地线。(3)⇒(4): 由距离函数连续性和Heine-Borel性质。(4)⇒(1): 有界闭集紧致蕴含完备性。核心是(2)⇒(3)这一步。" }],
    applications: "最优运输问题（Monge-Kantorovich）中的距离代价；流形学习中的等距特征映射（Isomap）；形状分析中的测地距离。",
    refs: { book: "Lee", ch: "Ch.5", sec: "§5.3" }
  },
  {
    id: "r26", label: "割点与割迹", chapter: "ch5", layer: 2,
    desc: "割点是测地线不再最短的位置，割迹是到给定点有多条最短测地线的点集，刻画了流形的全局几何。",
    content: "对于点p∈M，割点q是测地线γ_v(t)上使得γ_v在[0,t]上最短但超过t后不再最短的点。割迹Cut(p)是所有割点的集合。割迹总是零测集（Hausdorff维数≤n-1），且M∖Cut(p)通过exp_p微分同胚于T_pM中的星形开集。对紧致流形，Cut(p)非空。割迹是第一共轭点轨迹的闭包，但割点可以出现在第一共轭点之前。球面上，北极的割迹是南极（单点）。平坦环面上，割迹是网格状结构。割迹是理解流形全局拓扑和几何的关键。",
    understanding: "割点就像'过了这个村就没这个店'的位置。从北京出发，沿大圆航线飞往纽约，前半段是最短路径，但过了某个点（对径点）后，继续往前走反而绕远路了——那个'分界点'就是割点。球面上北极的割点就是南极，从北极到南极有无数条等长的大圆（所有经线），所以南极是割迹。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="80" cy="80" r="50" fill="none" stroke="#2563eb" stroke-width="1.5"/><circle cx="80" cy="80" r="3" fill="#dc2626"/><text x="70" y="70" fill="#dc2626" font-size="9">p</text><circle cx="80" cy="130" r="3" fill="#7c3aed"/><text x="70" y="148" fill="#7c3aed" font-size="8">Cut(p)</text><path d="M80,80 Q80,105 80,130" fill="none" stroke="#dc2626" stroke-width="1.5"/><path d="M80,80 Q100,100 80,130" fill="none" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,3"/><path d="M80,80 Q60,100 80,130" fill="none" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,3"/><text x="90" y="105" font-size="8" fill="#dc2626">最短</text></svg>`,
    examples: [
      { title: "球面S²的割迹", content: "球面上任意点p的割迹是对径点{-p}，只有这一个点。所有从p出发的大圆在到达-p之前都是最短的。" },
      { title: "平坦环面T²", content: "T² = R²/Z²上，割迹由四条线段组成矩形网格，相距半周期的点构成割迹。距离函数在割迹上不可微。" },
      { title: "实射影平面RP²", content: "RP²上，Cut(p)是到p距离为π/2的'赤道'（RP¹），所有从p到Cut(p)的测地线长度相等。" }
    ],
    theorems: [{ name: "割迹结构定理", statement: "M∖Cut(p)通过exp_p微分同胚于T_pM中的星形开集。Cut(p)具有零测度，且M∖Cut(p)在M中稠密。", proof: "定义切空间中的切集TCL(p) = {v∈T_pM: exp_p在v处非退化且γ_v在[0,1]上最短}。M∖Cut(p) = exp_p(TCL(p))。由Gauss引理，exp_p在TCL(p)上是单射且为局部微分同胚，故为整体微分同胚。Cut(p) = exp_p(∂TCL(p))，其测度为零（因为∂TCL(p)是n-1维Lipschitz边界）。稠密性来自TCL(p)是星形开集。" }],
    applications: "计算几何中的中轴变换（Medial Axis）；计算共形几何中的割迹算法；医学图像中血管中轴提取。",
    refs: { book: "Lee", ch: "Ch.5", sec: "§5.4" }
  },
  {
    id: "r27", label: "极小化序列与变分原理", chapter: "ch5", layer: 2,
    desc: "测地线作为长度和能量泛函的临界点，变分原理是证明测地线存在性和性质的基本工具。",
    content: "长度泛函 L(γ) = ∫|γ'| dt 和能量泛函 E(γ) = (1/2)∫|γ'|² dt 的变分给出测地线方程。第一变分公式 δL = -∫⟨∇_γ' γ', V⟩ dt（对固定端点变分），临界点条件 ∇_γ' γ' = 0 正是测地线方程。第二变分公式（涉及曲率）给出测地线是局部极小值的条件。能量泛函比长度泛函更易处理（不依赖参数化），且极小化能量等价于极小化长度（通过Cauchy-Schwarz不等式）。变分方法在证明闭测地线存在性（Lyusternik-Fet定理）中起关键作用。",
    understanding: "变分原理就像'山路原理'——两点之间所有可能的路径中，最短的那条是'最稳定的'，对它做微小扰动后长度变化很小（一阶变分为零）。这就像把绳子拉紧后形状稳定，任何微小的偏离都会增加长度。变分原理是物理学中最小作用量原理的几何版本。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="3" fill="#dc2626"/><circle cx="170" cy="150" r="3" fill="#dc2626"/><path d="M30,30 Q100,50 170,150" fill="none" stroke="#2563eb" stroke-width="2"/><text x="100" y="45" font-size="8" fill="#2563eb">γ (临界点)</text><path d="M30,30 Q80,70 100,100 Q130,140 170,150" fill="none" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4,4"/><text x="85" y="95" font-size="8" fill="#7c3aed">γ + εV</text><text x="30" y="170" font-size="9" fill="#dc2626">δL = 0 → 测地线</text></svg>`,
    examples: [
      { title: "球面上的变分", content: "球面上两点间的大圆是能量泛函的临界点。短弧是极小值，长弧（超过半圆）是鞍点，不是极小值。" },
      { title: "闭测地线", content: "紧致流形上总存在闭测地线（Lyusternik-Fet定理）。球面上所有大圆都是闭测地线。" },
      { title: "Morse理论", content: "Morse理论将能量泛函的临界点（测地线）与流形的拓扑联系起来：临界点个数≥流形的Betti数之和。" }
    ],
    theorems: [{ name: "第一变分公式", statement: "对于固定端点的变分V，δL(γ)[V] = -∫⟨∇_γ' γ', V⟩ dt。因此测地线是长度泛函的临界点。", proof: "设Γ(s,t)是γ的变分，V(t)=∂Γ/∂s|_{s=0}。计算长度泛函L(γ_s)=∫|∂Γ/∂t| dt的导数：d/ds L|_{s=0} = ∫ (1/|γ'|)⟨∇_s ∂Γ/∂t, ∂Γ/∂t⟩ dt。利用无挠性交换协变导数∇_s ∂Γ/∂t = ∇_t ∂Γ/∂s，分部积分得 -∫⟨V, ∇_γ' (γ'/|γ'|)⟩ dt。对弧长参数化（|γ'|=1），δL = -∫⟨∇_γ' γ', V⟩ dt。临界点条件∇_γ' γ'=0即测地线方程。" }],
    applications: "最优控制理论中的Pontryagin极大值原理；路径规划中的最短路径计算；物理中Fermat原理和Hamilton原理。",
    refs: { book: "Lee", ch: "Ch.5", sec: "§5.5" }
  },

  // ======================== Ch6: 曲率 (7) ========================
  {
    id: "r28", label: "曲率张量", chapter: "ch6", layer: 0,
    desc: "黎曼曲率张量R(X,Y)Z度量协变导数不可交换的程度，是黎曼几何最核心的张量，完全由度量决定。",
    content: "黎曼曲率张量定义为 R(X,Y)Z = ∇_X∇_Y Z - ∇_Y∇_X Z - ∇_[X,Y] Z。在局部坐标下，R^l_ijk = ∂_i Γ^l_jk - ∂_j Γ^l_ik + Γ^m_jk Γ^l_im - Γ^m_ik Γ^l_jm。曲率张量满足以下代数恒等式：(1) R(X,Y)Z = -R(Y,X)Z（反对称）；(2) R(X,Y)Z + R(Y,Z)X + R(Z,X)Y = 0（第一Bianchi恒等式）；(3) ⟨R(X,Y)Z,W⟩ = -⟨R(X,Y)W,Z⟩（度量相容性）；(4) ⟨R(X,Y)Z,W⟩ = ⟨R(Z,W)X,Y⟩（配对对称性）。曲率张量为零当且仅当流形局部等距于欧氏空间。",
    understanding: "曲率张量描述了'先沿X方向再沿Y方向'与'先沿Y方向再沿X方向'求导的差异。在欧氏空间中，求导顺序可交换，曲率为零。在弯曲空间中，这个差异不为零，反映了空间的弯曲。就像在球面上，先向东走再向北走，与先向北走再向东走，到达的位置不同——这就是曲率的体现。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M30,150 Q30,100 70,90 Q110,80 140,70" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="40" y1="130" x2="70" y2="110" stroke="#dc2626" stroke-width="1.5" marker-end="url(#ar1)"/><line x1="70" y1="110" x2="90" y2="95" stroke="#7c3aed" stroke-width="1.5" marker-end="url(#ar2)"/><text x="38" y="120" font-size="8" fill="#dc2626">X</text><text x="80" y="90" font-size="8" fill="#7c3aed">Y</text><text x="25" y="50" font-size="9" fill="#2563eb">R(X,Y)Z</text><text x="25" y="65" font-size="8" fill="#7c3aed">=[∇_X,∇_Y]Z - ∇_{[X,Y]}Z</text><defs><marker id="ar1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#dc2626"/></marker><marker id="ar2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#7c3aed"/></marker></defs></svg>`,
    examples: [
      { title: "二维曲面的曲率张量", content: "在二维黎曼流形上，曲率张量只有一个独立分量 R^1_212，由 Gauss 曲率 K = R^1_212 / det(g) 给出。" },
      { title: "常曲率空间", content: "常截面曲率c的空间中，R(X,Y)Z = c(⟨Y,Z⟩X - ⟨X,Z⟩Y)，曲率张量完全由标量c决定。" },
      { title: "平坦空间", content: "Rⁿ中的曲率张量恒为零。通过计算曲率张量是否为零可以判断度量是否局部等距于欧氏度量。" }
    ],
    theorems: [{ name: "第一Bianchi恒等式", statement: "R(X,Y)Z + R(Y,Z)X + R(Z,X)Y = 0。这是曲率张量的基本代数恒等式。", proof: "从曲率张量定义 R(X,Y)Z = ∇_X∇_Y Z - ∇_Y∇_X Z - ∇_{[X,Y]} Z 出发。对三个向量场做轮换求和：R(X,Y)Z + R(Y,Z)X + R(Z,X)Y。展开后利用无挠性性质∇_X Y - ∇_Y X = [X,Y]以及Jacobi恒等式[[X,Y],Z]+[[Y,Z],X]+[[Z,X],Y]=0，所有项互相抵消，恒等式得证。这一恒等式反映曲率张量的循环对称性。" }],
    applications: "广义相对论中引力场的曲率描述（Einstein场方程）；弹性力学中变形梯度的可积性条件；计算机视觉中的三维重建。",
    refs: { book: "Lee", ch: "Ch.6", sec: "§6.1" }
  },
  {
    id: "r29", label: "截面曲率", chapter: "ch6", layer: 0,
    desc: "截面曲率K(σ)是二维切平面方向上的Gauss曲率，由曲率张量完全决定，是最直观的曲率不变量。",
    content: "截面曲率定义为 K(σ) = ⟨R(u,v)v,u⟩ / (|u|²|v|² - ⟨u,v⟩²)，其中{u,v}是二维切平面σ的基。截面曲率不依赖于基的选取。对于二维黎曼流形，截面曲率就是Gauss曲率。截面曲率完全决定了曲率张量：若所有截面曲率已知，曲率张量可由极化恒等式唯一确定。截面曲率是黎曼流形局部几何的'标量指纹'：正截面曲率使测地线汇聚，负截面曲率使测地线发散。Einstein流形的截面曲率点态无约束，但Ricci曲率与度量成比例。",
    understanding: "截面曲率就是在流形上取一个'二维切面'，测量这个二维方向上的弯曲程度。就像在曲面上，每个切平面方向都有一个Gauss曲率。在高维流形中，不同方向的截面曲率可以不同——比如CP²中截面曲率在1到4之间变化，反映了不同'二维方向'的弯曲程度不同。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="100" rx="70" ry="50" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><path d="M100,50 L100,150" stroke="#dc2626" stroke-width="1"/><path d="M30,100 L170,100" stroke="#dc2626" stroke-width="1"/><path d="M50,130 L150,70" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,4"/><text x="105" y="55" font-size="9" fill="#dc2626">u</text><text x="155" y="95" font-size="9" fill="#dc2626">v</text><text x="120" y="125" font-size="9" fill="#7c3aed">σ = span{u,v}</text><text x="35" y="40" font-size="9" fill="#2563eb">K(σ) = Gauss曲率</text></svg>`,
    examples: [
      { title: "常截面曲率空间", content: "Sⁿ, Rⁿ, Hⁿ 的截面曲率分别为 1/R², 0, -1，所有截面方向曲率相同。" },
      { title: "CPⁿ的截面曲率", content: "CPⁿ配备Fubini-Study度量，截面曲率介于1/4到1之间，取决于二维切平面相对于复结构的位置。" },
      { title: "乘积流形", content: "M×N上，若截面取M和N各一个方向，截面曲率为零；若全在M或全在N中，则为原流形的截面曲率。" }
    ],
    theorems: [{ name: "截面曲率决定曲率张量", statement: "若两个黎曼流形在每点对所有二维切平面的截面曲率相等，则它们的曲率张量相等。", proof: "截面曲率K(σ) = ⟨R(u,v)v,u⟩/(|u|²|v|²-⟨u,v⟩²) 是曲率张量的'二次型'。通过极化恒等式，可以从K(σ)恢复整个曲率张量：⟨R(X,Y)Z,W⟩ = (1/6)∂²/∂s∂t|_{s=t=0} [K(X+sZ, Y+tW)(|X+sZ|²|Y+tW|²-⟨X+sZ,Y+tW⟩²) - 类似项]。由于曲率张量满足代数恒等式，极化过程可唯一恢复所有分量。" }],
    applications: "广义相对论中潮汐力的描述；宇宙学中空间的曲率测量；弹性壳体理论中的弯曲分析。",
    refs: { book: "Lee", ch: "Ch.6", sec: "§6.2" }
  },
  {
    id: "r30", label: "Ricci曲率与标量曲率", chapter: "ch6", layer: 0,
    desc: "Ricci曲率是曲率张量的迹，标量曲率是Ricci曲率的迹，两者是Einstein场方程和Yamabe问题的核心量。",
    content: "Ricci曲率定义为 R_ij = R^k_ikj（曲率张量在第一和第三指标的缩并）。Ricci曲率是 (0,2)-对称张量，度量了沿给定方向的'平均'截面曲率：Ric(v,v) = (n-1)·(截面曲率在包含v的所有二维平面上的平均值)。标量曲率（或曲率标量）是Ricci曲率的迹：S = g^ij R_ij，是每点的一个标量函数。在二维，S = 2K。Einstein流形满足 Ric = λg（Ricci曲率与度量成比例），是真空Einstein场方程的解。Yamabe问题：在共形类中是否存在常标量曲率的度量？",
    understanding: "Ricci曲率就像'方向的平均曲率'。如果你站在流形上，向四面八方看，Ricci曲率告诉你'平均'的弯曲程度。标量曲率则是所有方向的'总平均'。在二维，它们都退化为Gauss曲率（乘以常数）。在物理中，Ricci曲率描述物质引起的空间弯曲，标量曲率给出弯曲的总体强度。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="60" fill="none" stroke="#2563eb" stroke-width="1.5"/><circle cx="100" cy="100" r="3" fill="#dc2626"/><line x1="100" y1="100" x2="155" y2="80" stroke="#dc2626" stroke-width="1.5"/><text x="158" y="78" font-size="9" fill="#dc2626">v</text><path d="M100,100 Q120,80 140,70" fill="none" stroke="#7c3aed" stroke-width="1"/><path d="M100,100 Q80,80 60,70" fill="none" stroke="#7c3aed" stroke-width="1"/><path d="M100,100 Q100,70 100,40" fill="none" stroke="#7c3aed" stroke-width="1"/><text x="30" y="40" font-size="9" fill="#2563eb">Ric(v,v) = 平均截面曲率</text><text x="30" y="55" font-size="9" fill="#7c3aed">S = tr(Ric) = 标量曲率</text></svg>`,
    examples: [
      { title: "球面Sⁿ", content: "半径为R的Sⁿ上，Ric = (n-1)/R² · g，S = n(n-1)/R²。是Einstein流形，Ricci曲率与度量成比例。" },
      { title: "Einstein度量", content: "K3曲面上的Calabi-Yau度量是Ricci平坦的（Ric=0），但不平坦（R≠0），是Einstein流形的典型例子。" },
      { title: "Schwarzschild时空", content: "Schwarzschild解是真空Einstein方程 Ric=0 的解，Ricci曲率为零但曲率张量非零（Weyl张量非零）。" }
    ],
    theorems: [{ name: "Schur引理", statement: "若连通黎曼流形(n≥3)在所有点的截面曲率仅依赖于点而不依赖于截面方向，则截面曲率是常数（流形是常曲率空间）。", proof: "设每点截面曲率K(p)不依赖于方向。则曲率张量满足 R(X,Y)Z = K(p)(⟨Y,Z⟩X - ⟨X,Z⟩Y)。对此式求协变导数，利用第二Bianchi恒等式和n≥3的条件，可得∇K = 0，即K是常数。证明关键在于：若n≥3，Bianchi恒等式给出足够多的方程迫使K的梯度为零。n=2时Schur引理不成立（任何二维流形自动满足截面曲率仅依赖于点）。" }],
    applications: "Einstein场方程 Ric - (1/2)Sg = 8πGT 描述引力；宇宙学中FRW度量的Ricci曲率决定宇宙膨胀；Ricci流用于几何化猜想证明。",
    refs: { book: "Lee", ch: "Ch.6", sec: "§6.3" }
  },
  {
    id: "r31", label: "Bianchi恒等式", chapter: "ch6", layer: 1,
    desc: "Bianchi恒等式是曲率张量的协变导数满足的微分恒等式，是Einstein场方程与守恒律联系的几何基础。",
    content: "第二Bianchi恒等式（或微分Bianchi恒等式）表达为 ∇_m R^l_ijk + ∇_i R^l_jmk + ∇_j R^l_mik = 0。缩并两次得到缩并的第二Bianchi恒等式：∇^j R_ij = (1/2)∇_i S，或等价地，Einstein张量 G_ij = R_ij - (1/2)S g_ij 满足 ∇^j G_ij = 0。这是几何版的'守恒律'，在广义相对论中对应能量-动量守恒 ∇^j T_ij = 0。第一Bianchi恒等式是代数的，第二Bianchi是微分的，两者都是曲率张量的基本性质。",
    understanding: "Bianchi恒等式就像是曲率的'自洽性条件'。它说曲率不能任意分布——曲率的变化必须满足某种约束。就像沙堆不能任意堆积（有自然的倾斜角限制），曲率也有'堆积规则'。在物理中，这对应着'能量和动量守恒'——曲率（引力）的分布必须满足守恒律。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,20 170,70 150,130 50,130 30,70" fill="none" stroke="#2563eb" stroke-width="1.5"/><circle cx="100" cy="75" r="3" fill="#dc2626"/><line x1="100" y1="75" x2="120" y2="55" stroke="#dc2626" stroke-width="1"/><line x1="100" y1="75" x2="75" y2="65" stroke="#dc2626" stroke-width="1"/><line x1="100" y1="75" x2="105" y2="100" stroke="#dc2626" stroke-width="1"/><text x="125" y="50" font-size="8" fill="#dc2626">∇_mR</text><text x="40" y="40" font-size="9" fill="#2563eb">∇_{[m}R^l_{ij]k} = 0</text><text x="40" y="55" font-size="8" fill="#7c3aed">Bianchi → ∇^jG_{ij} = 0</text></svg>`,
    examples: [
      { title: "缩并Bianchi恒等式", content: "∇^jG_ij = 0 是Einstein场方程中 ∇^jT_ij = 0（能量-动量守恒）的几何对应，是场方程自洽性的保证。" },
      { title: "Einstein流形", content: "Einstein流形（Ric = λg）自动满足缩并Bianchi恒等式，标量曲率S为常数（当n≥3）。" },
      { title: "Yang-Mills理论", content: "Yang-Mills理论的Bianchi恒等式 d_A F = 0 是曲率2-形式F的微分恒等式，与黎曼几何的Bianchi恒等式结构类似。" }
    ],
    theorems: [{ name: "第二Bianchi恒等式", statement: "∇_m R^l_ijk + ∇_i R^l_jmk + ∇_j R^l_mik = 0。缩并得 ∇^j R_ij = (1/2)∇_i S。", proof: "对曲率张量定义取协变导数，利用无挠性和度量相容性交换导数顺序。在法坐标下（某点处Γ=0），∇_m R^l_ijk = ∂_m R^l_ijk，展开R^l_ijk的表达式后轮换求和，所有项抵消。缩并过程：对R^l_ijk取迹l=k得R_ij，再对第二Bianchi恒等式缩并l=k, j=m得 ∇_m R^m_i + ∇_i R^m_jm - ∇_m R^m_ij = 0，即 2∇^j R_ij = ∇_i S。" }],
    applications: "广义相对论中能量-动量守恒的几何保证；规范场论中的Bianchi恒等式；Ricci流理论中的曲率演化方程。",
    refs: { book: "Lee", ch: "Ch.6", sec: "§6.4" }
  },
  {
    id: "r32", label: "Weyl曲率张量", chapter: "ch6", layer: 2,
    desc: "Weyl曲率张量是曲率张量中去掉Ricci曲率信息后的'纯弯曲'部分，是共形变换下的不变量。",
    content: "Weyl曲率张量W（维数n≥3）定义为 W_ijkl = R_ijkl - (1/(n-2))(g_ik R_jl - g_il R_jk + g_jl R_ik - g_jk R_il) + (S/((n-1)(n-2)))(g_ik g_jl - g_il g_jk)。Weyl张量具有与曲率张量相同的代数对称性，且所有迹为零（W^i_jkl = 0）。Weyl张量是共形不变量：若 g' = e^{2f}g，则 W' = e^{2f}W。Weyl张量为零是度量共形平坦的充要条件（n≥4）。在二维，Weyl张量不定义（曲率只有Gauss曲率）。在三维，Weyl张量恒为零（曲率完全由Ricci曲率决定）。",
    understanding: "Weyl张量是曲率中去掉'膨胀'和'收缩'之后剩下的'纯扭曲'。Ricci曲率描述体积如何变化，Weyl曲率描述形状如何扭曲。在广义相对论中，真空区域Ricci=0但Weyl≠0，引力波就是Weyl曲率的传播。就像拉扯一块橡皮膜：Ricci曲率描述面积的缩放，Weyl曲率描述形状的畸变。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="60" height="60" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="40" y="70" font-size="9" fill="#dc2626">Ricci</text><text x="35" y="85" font-size="8" fill="#dc2626">体积变化</text><polygon points="130,50 160,55 165,90 135,100" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="140" y="70" font-size="9" fill="#2563eb">Weyl</text><text x="135" y="85" font-size="8" fill="#2563eb">形状扭曲</text><text x="50" y="130" font-size="9" fill="#7c3aed">R = Ricci + Weyl + 标量</text><text x="45" y="145" font-size="8" fill="#7c3aed">Weyl在共形变换下不变</text></svg>`,
    examples: [
      { title: "共形平坦流形", content: "Sⁿ, Hⁿ, Rⁿ 都是共形平坦的（Weyl=0）。球面和双曲空间与欧氏空间共形等价。" },
      { title: "Schwarzschild时空", content: "Schwarzschild解有Ricci=0（真空）但Weyl≠0，其Weyl张量描述潮汐力，即引力场中物体的拉伸和压缩。" },
      { title: "二维的退化", content: "二维时Weyl张量无定义，所有曲率信息由Gauss曲率（标量曲率的一半）给出，反映二维几何的特殊性。" }
    ],
    theorems: [{ name: "Weyl共形不变性", statement: "在共形变换 g' = e^{2f}g 下，Weyl张量变换为 W' = e^{2f}W。W=0 是度量共形平坦的充要条件（n≥4）。", proof: "共形变换下Christoffel符号的变换包含∇f项：Γ'^k_ij = Γ^k_ij + δ^k_i ∂_j f + δ^k_j ∂_i f - g_ij g^{kl} ∂_l f。代入曲率张量公式，Ricci曲率和标量曲率都产生复杂的变换。Weyl精心构造了这些量的组合，使得变换中所有含f的项恰好抵消。n=3时Weyl张量恒为零（曲率完全由Ricci决定），n=2时Weyl张量不定义。" }],
    applications: "广义相对论中引力波的描述（Weyl曲率传播）；共形几何中的不变量理论；宇宙学中原始引力波的分析。",
    refs: { book: "Lee", ch: "Ch.6", sec: "§6.5" }
  },
  {
    id: "r33", label: "Ricci恒等式与交换子", chapter: "ch6", layer: 1,
    desc: "Ricci恒等式给出协变导数交换子与曲率张量的关系，是计算张量场二阶协变导数差异的基本工具。",
    content: "Ricci恒等式（或Ricci公式）给出张量场协变导数交换子的表达式。对于向量场：∇_i∇_j X^k - ∇_j∇_i X^k = R^k_lij X^l（符号约定因书而异）。对于1-形式：∇_i∇_j ω_k - ∇_j∇_i ω_k = -R^l_kij ω_l。对于一般张量，每个指标贡献一个曲率项。对于函数，协变导数交换子为零（∇_i∇_j f = ∇_j∇_i f）。Ricci恒等式在Bochner技巧、Weitzenböck公式和Hodge理论中起核心作用。",
    understanding: "Ricci恒等式说：你无法交换协变导数的顺序而不付出代价——这个代价就是曲率。在平坦空间中，你可以先对x求导再对y求导，或者反过来，结果一样。在弯曲空间中，交换顺序后会多出一个曲率项。这就像旋转一个向量：在平坦地面上，旋转顺序无所谓；在地球表面，先向东再向北旋转与先向北再向东旋转，结果不同。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M30,50 Q50,45 70,55 Q90,65 110,50" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="70" y1="55" x2="90" y2="35" stroke="#dc2626" stroke-width="1.5" marker-end="url(#ar3)"/><line x1="70" y1="55" x2="50" y2="40" stroke="#dc2626" stroke-width="1.5" marker-end="url(#ar3)"/><text x="75" y="30" font-size="9" fill="#dc2626">∇_j</text><text x="30" y="35" font-size="9" fill="#dc2626">∇_i</text><text x="25" y="100" font-size="9" fill="#2563eb">[∇_i,∇_j]X^k = R^k_{lij}X^l</text><text x="25" y="115" font-size="8" fill="#7c3aed">交换子 = 曲率</text><defs><marker id="ar3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#dc2626"/></marker></defs></svg>`,
    examples: [
      { title: "向量场的Ricci恒等式", content: "∇_i∇_j X^k - ∇_j∇_i X^k = R^k_lij X^l。这是曲率张量作为协变导数交换子的经典定义。" },
      { title: "Hessian的对称性", content: "对函数f，∇²f = ∇_i∇_j f 是对称的，因为函数没有指标可让曲率作用。" },
      { title: "Bochner公式", content: "(1/2)Δ|∇f|² = |∇²f|² + ⟨∇f, ∇Δf⟩ + Ric(∇f,∇f)，是Bochner技巧的核心，联系了Laplace算子和Ricci曲率。" }
    ],
    theorems: [{ name: "Ricci恒等式", statement: "对于向量场X，∇_i∇_j X^k - ∇_j∇_i X^k = R^k_lij X^l。这是曲率张量的等价定义。", proof: "直接计算协变导数的交换子。∇_i X^k = ∂_i X^k + Γ^k_il X^l，再求∇_j得 ∇_j∇_i X^k = ∂_j(∂_i X^k + Γ^k_il X^l) + Γ^k_jm(∂_i X^m + Γ^m_il X^l) - Γ^m_ji(∂_m X^k + Γ^k_ml X^l)。交换i,j后相减，∂_j∂_i X^k项抵消，整理含Γ和∂Γ的项恰好给出曲率张量R^k_lij = ∂_i Γ^k_jl - ∂_j Γ^k_il + Γ^m_jl Γ^k_im - Γ^m_il Γ^k_jm。这证明曲率张量确实度量协变导数的不可交换性。" }],
    applications: "Bochner技巧用于证明消没定理（如紧致Ricci正曲率流形上无调和1-形式）；Hodge理论中Laplace算子的Weitzenböck公式；几何分析中曲率与拓扑的关系。",
    refs: { book: "Lee", ch: "Ch.6", sec: "§6.6" }
  },
  {
    id: "r34", label: "曲率与拓扑", chapter: "ch6", layer: 3,
    desc: "曲率条件对拓扑施加刚性约束，如正曲率导致基本群有限，负曲率导致万有覆盖可缩，是黎曼几何最深层的联系。",
    content: "曲率与拓扑的关系是黎曼几何的核心课题。Bonnet-Myers定理：若Ricci曲率满足 Ric ≥ (n-1)/R² · g，则流形紧致且直径 ≤ πR，基本群有限。Cartan-Hadamard定理：若截面曲率非正，则万有覆盖空间微分同胚于Rⁿ（因此同伦群 π_k(M)=0，k≥2）。Synge定理：若紧致可定向偶维流形截面曲率处处为正，则单连通。Cheeger-Gromoll分裂定理：若完备非紧致流形 Ric ≥ 0 且包含一条直线，则等距于乘积 R×N。Gromov紧致性定理：截面曲率有界、直径有界、体积有下界的流形集合在Gromov-Hausdorff拓扑下紧致。",
    understanding: "曲率像'拓扑的把手'。正曲率把流形'捏紧'——足够强的正曲率会迫使流形成为紧致球面的商空间。负曲率把流形'撑开'——使流形变得像双曲空间一样'辽阔'。这就像吹气球：正曲率把气球吹圆，负曲率使气球变成马鞍形。曲率条件就是'几何约束'，它决定了流形能'长成什么拓扑形状'。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="35" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="50" y="55" font-size="10" fill="#dc2626">Ric>0</text><text x="38" y="75" font-size="8" fill="#2563eb">π₁有限</text><path d="M130,45 Q150,25 165,35 Q180,45 160,55 Q145,65 130,45Z" fill="#fce7f3" stroke="#dc2626" stroke-width="1.5"/><text x="135" y="50" font-size="9" fill="#dc2626">K≤0</text><text x="135" y="65" font-size="8" fill="#dc2626">万有覆盖=Rⁿ</text><text x="40" y="120" font-size="9" fill="#7c3aed">曲率 → 拓扑刚性约束</text></svg>`,
    examples: [
      { title: "Bonnet-Myers定理", content: "若完备黎曼流形 Ric ≥ (n-1)c > 0，则直径 ≤ π/√c。球面 Sⁿ(1) 达到此上界，是刚性情形。" },
      { title: "Cartan-Hadamard定理", content: "若完备单连通流形截面曲率 ≤ 0，则它微分同胚于 Rⁿ。双曲空间 Hⁿ 是典型例子。" },
      { title: "Gromov的Betti数界", content: "若截面曲率有界 |K| ≤ 1 且直径 ≤ D，则所有Betti数有仅依赖于n和D的上界，是曲率控制拓扑的深刻结果。" }
    ],
    theorems: [{ name: "Bonnet-Myers定理", statement: "若完备黎曼流形 Ric ≥ (n-1)/R² · g，则直径 ≤ πR，且基本群有限。", proof: "设γ: [0,L] → M是长度L > πR的最短测地线。沿γ构造n-1个平行法向量场E_i(t)，定义变分向量场V_i(t) = sin(πt/L)E_i(t)。计算第二变分δ²E(V_i,V_i) = ∫₀^L (sin²(πt/L)|E_i'|² - sin²(πt/L)⟨R(E_i,γ')γ',E_i⟩) dt。对i求和，利用Ricci下界和|E_i'|=0得δ²E < 0，与γ是最短测地线矛盾。故L ≤ πR。万有覆盖的紧致性由类似论证得出。" }],
    applications: "宇宙学中宇宙拓扑的推断（CMB数据约束宇宙曲率）；三维流形几何化纲领；微分几何中刚性定理。",
    refs: { book: "Lee", ch: "Ch.6", sec: "§6.7" }
  },

  // ======================== Ch7: 黎曼子流形 (5) ========================
  {
    id: "r35", label: "第二基本形式", chapter: "ch7", layer: 0,
    desc: "第二基本形式度量子流形在外围空间中的弯曲方式，是子流形几何的核心张量，与平均曲率向量密切相关。",
    content: "对于浸入子流形 M⊂N，切空间分解为 T_pN = T_pM ⊕ N_pM（法空间）。第二基本形式 II: TM×TM → NM 定义为 II(X,Y) = (∇^N_X Y)^⊥，即N中联络的协变导数在法方向上的投影。它是 C^∞-双线性的，且对称（因Levi-Civita联络无挠）。在局部坐标下，II_ij^α = h^α_ij。自身在法空间的取值使得余维数>1时第二基本形式包含更丰富的信息。平均曲率向量 H = (1/n)tr(II) 是第二基本形式的迹，极小曲面（H=0）是其最重要的特例。",
    understanding: "第二基本形式描述子流形如何'弯曲'嵌入外围空间。第一基本形式告诉你子流形上的'内部距离'，第二基本形式告诉你子流形'朝哪个方向弯曲'和'弯曲多少'。就像一张纸可以平放在桌上（II=0），也可以弯曲成柱面（II≠0）——但弯曲后纸上的内部距离保持不变（第一基本形式不变）。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M20,150 Q60,100 100,90 Q140,80 180,110" fill="none" stroke="#2563eb" stroke-width="2.5"/><line x1="100" y1="90" x2="130" y2="55" stroke="#dc2626" stroke-width="1.5" marker-end="url(#ar4)"/><line x1="100" y1="90" x2="100" y2="60" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,3"/><text x="132" y="50" font-size="9" fill="#dc2626">X</text><text x="85" y="55" font-size="9" fill="#7c3aed">II(X,X)</text><text x="30" y="40" font-size="9" fill="#2563eb">II = (∇^N_X Y)^⊥</text><text x="30" y="55" font-size="8" fill="#7c3aed">法方向投影</text><defs><marker id="ar4" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#dc2626"/></marker></defs></svg>`,
    examples: [
      { title: "R³中的曲面", content: "R³中曲面M的第二基本形式 II = Ldu²+2Mdudv+Ndv²。主曲率是形状算子（Weingarten映射）的特征值。" },
      { title: "超曲面", content: "余维数为1的超曲面，第二基本形式可写为 II = h·g，其中h是对称(0,2)-张量。平均曲率 H = (1/n)tr(h)。" },
      { title: "全测地子流形", content: "若第二基本形式恒为零，子流形称为全测地子流形。球面Sⁿ中赤道Sⁿ⁻¹是全测地的，但一般的纬线不是。" }
    ],
    theorems: [{ name: "Gauss公式", statement: "∇^N_X Y = ∇^M_X Y + II(X,Y)，将N中联络分解为M中联络与第二基本形式之和。", proof: "将N中Levi-Civita联络∇^N_X Y分解为切向和法向分量：∇^N_X Y = (∇^N_X Y)^T + (∇^N_X Y)^⊥。切向分量满足Levi-Civita联络的公理（无挠、度量相容），故为M的Levi-Civita联络∇^M_X Y。法向分量定义为第二基本形式II(X,Y) = (∇^N_X Y)^⊥。对称性由∇^N的无挠性保证：II(X,Y) - II(Y,X) = (∇^N_X Y - ∇^N_Y X)^⊥ = [X,Y]^⊥ = 0（因X,Y切于M，其Lie括号也切于M）。" }],
    applications: "极小曲面理论（如肥皂膜）；计算机图形学中曲面表示和重建；薄膜结构力学分析。",
    refs: { book: "Lee", ch: "Ch.7", sec: "§7.1" }
  },
  {
    id: "r36", label: "Gauss方程", chapter: "ch7", layer: 1,
    desc: "Gauss方程将子流形的内蕴曲率与外蕴曲率（第二基本形式）联系起来，是子流形几何的核心公式。",
    content: "Gauss方程表达了子流形M的曲率张量R^M与外围空间N的曲率张量R^N及第二基本形式II的关系：⟨R^M(X,Y)Z,W⟩ = ⟨R^N(X,Y)Z,W⟩ + ⟨II(X,W), II(Y,Z)⟩ - ⟨II(X,Z), II(Y,W)⟩。对于超曲面在R³中，这退化为 Gauss 绝妙定理：K = det(II)/det(I) = (LN-M²)/(EG-F²)。Gauss方程揭示了子流形的内蕴曲率有两个来源：外围空间的曲率'拉回'和第二基本形式的'弯曲'贡献。对于欧氏空间中的子流形（R^N=0），曲率完全由第二基本形式决定。",
    understanding: "Gauss方程就像'曲率守恒定律'：子流形的总曲率 = 外围空间的曲率贡献 + 子流形自身弯曲的贡献。如果放在平坦空间中（像R³中的曲面），子流形所有的曲率都来自自身弯曲。这解释了为什么纸可以弯曲但Gauss曲率保持为零——第二基本形式变化时，有趣的是曲率张量保持为零。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M20,130 Q80,60 140,70 Q180,80 180,110" fill="none" stroke="#2563eb" stroke-width="2"/><text x="30" y="50" font-size="9" fill="#2563eb">R^M = R^N + II∧II</text><text x="30" y="65" font-size="8" fill="#dc2626">内蕴曲率 = 外围曲率 + 外蕴弯曲</text><text x="30" y="80" font-size="8" fill="#7c3aed">Gauss绝妙定理: K = det(II)/det(I)</text><circle cx="100" cy="70" r="2" fill="#dc2626"/></svg>`,
    examples: [
      { title: "R³中曲面", content: "R³中曲面的Gauss方程：K = (LN-M²)/(EG-F²)。Gauss发现这仅依赖于第一基本形式，是绝妙定理。" },
      { title: "常曲率空间中的子流形", content: "在Sⁿ或Hⁿ中的子流形，Gauss方程包含外围常曲率贡献：K^M = c + det(II)/det(I)。" },
      { title: "平坦子流形", content: "若Rⁿ中曲面的Gauss曲率为零，则第二基本形式必退化（det(II)=0），曲面是可展曲面。" }
    ],
    theorems: [{ name: "Gauss方程", statement: "⟨R^M(X,Y)Z,W⟩ = ⟨R^N(X,Y)Z,W⟩ + ⟨II(X,W),II(Y,Z)⟩ - ⟨II(X,Z),II(Y,W)⟩。", proof: "从Gauss公式∇^N_X Y = ∇^M_X Y + II(X,Y)出发，计算R^N(X,Y)Z = ∇^N_X∇^N_Y Z - ∇^N_Y∇^N_X Z - ∇^N_{[X,Y]} Z。将每个∇^N替换为∇^M + II，展开后取与W的内积。由于法向量与切向量正交，⟨II(·,·), W⟩ = 0，故交叉项消失。仅保留⟨R^M(X,Y)Z,W⟩和⟨II(X,W),II(Y,Z)⟩ - ⟨II(X,Z),II(Y,W)⟩两项。这是Gauss绝妙定理的高维推广。" }],
    applications: "薄膜和壳体结构的力学分析；计算共形几何中的曲面分类；计算机视觉中从运动恢复结构。",
    refs: { book: "Lee", ch: "Ch.7", sec: "§7.2" }
  },
  {
    id: "r37", label: "Codazzi方程", chapter: "ch7", layer: 1,
    desc: "Codazzi方程是第二基本形式协变导数的对称性条件，与Gauss方程一起构成子流形几何的基本方程。",
    content: "Codazzi方程（或Codazzi-Mainardi方程）表达了第二基本形式协变导数的对称性：∇^⊥_X II(Y,Z) - II(∇^M_X Y, Z) - II(Y, ∇^M_X Z) 关于X,Y对称。在局部坐标下，(∇_i h)_jk = (∇_j h)_ik。对于超曲面，这简化为 ∇_i h_jk = ∇_j h_ik。Codazzi方程与Gauss方程一起构成子流形理论的基本方程。两者是子流形存在性的可积性条件：给定满足Gauss-Codazzi方程的度量g和第二基本形式h，存在（局部唯一的）浸入实现它们。",
    understanding: "Codazzi方程说第二基本形式的变化是'协调的'——你不能随意指定第二基本形式在不同点的值，它的变化必须满足某种一致性。就像搭积木，每块积木的弯曲方式必须与相邻积木匹配，否则拼不起来。Gauss方程控制'水平'一致性，Codazzi方程控制'垂直'一致性。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M30,130 Q70,80 110,75 Q150,70 170,90" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="70" y1="87" x2="70" y2="65" stroke="#dc2626" stroke-width="1.5"/><line x1="110" y1="82" x2="110" y2="60" stroke="#dc2626" stroke-width="1.5"/><text x="55" y="60" font-size="8" fill="#dc2626">II(X,Y)</text><text x="95" y="55" font-size="8" fill="#dc2626">II(Y,X)</text><text x="30" y="45" font-size="9" fill="#2563eb">∇_X(II(Y,Z)) = ∇_Y(II(X,Z))</text><text x="30" y="60" font-size="8" fill="#7c3aed">Codazzi: 法丛联络的对称性</text></svg>`,
    examples: [
      { title: "R³中曲面", content: "R³中曲面的Codazzi方程：L_v - M_u = LΓ¹_12 + M(Γ²_12-Γ¹_11) - NΓ²_11 等，以Christoffel符号表示。" },
      { title: "常平均曲率曲面", content: "常平均曲率曲面（如肥皂膜）的Codazzi方程与Gauss方程一起构成可积系统，是CMC曲面理论的基础。" },
      { title: "等距嵌入", content: "Nash等距嵌入定理保证了任何黎曼流形可等距嵌入到足够高维的欧氏空间中，Gauss-Codazzi方程是其局部可积性条件。" }
    ],
    theorems: [{ name: "Codazzi方程", statement: "(∇_X II)(Y,Z) = (∇_Y II)(X,Z)，即第二基本形式的协变导数在切向分量中对称。", proof: "从Gauss公式出发，计算R^N(X,Y)Z的法向分量。一方面，R^N(X,Y)Z = ∇^N_X(∇^M_Y Z + II(Y,Z)) - ∇^N_Y(∇^M_X Z + II(X,Z)) - (∇^M_{[X,Y]} Z + II([X,Y],Z))。取法向分量，利用∇^N的法向导数定义为法联络∇^⊥，得(R^N(X,Y)Z)^⊥ = ∇^⊥_X II(Y,Z) - II(∇^M_X Y, Z) - II(Y, ∇^M_X Z) - [X↔Y项] - II([X,Y],Z)。利用无挠性整理得Codazzi方程。" }],
    applications: "弹性壳体理论中变形协调条件；Nash等距嵌入定理；计算共形几何中曲面匹配。",
    refs: { book: "Lee", ch: "Ch.7", sec: "§7.3" }
  },
  {
    id: "r38", label: "极小曲面与CMC曲面", chapter: "ch7", layer: 1,
    desc: "极小曲面（H=0）和常平均曲率曲面（H=const）是子流形理论中最重要且研究最深入的曲面类。",
    content: "极小曲面是平均曲率恒为零的子流形，是面积泛函的临界点。面积泛函的第一变分给出 δArea = -∫⟨H, V⟩ dV，因此极小曲面是面积泛函的驻点。极小曲面在自然界中作为肥皂膜出现。极小曲面方程是非线性椭圆型偏微分方程。常平均曲率（CMC）曲面满足 H = const，是等周问题的解。球面是唯一紧致无边的CMC曲面（Alexandrov定理）。CMC曲面在物理中作为界面（如毛细管中的液面）出现。",
    understanding: "极小曲面就像绷在框架上的肥皂膜——它使自己面积最小。如果把一个线圈浸入肥皂水，拉出的膜就是极小曲面，因为表面张力使膜面积最小化。常平均曲率曲面就像肥皂泡——内部压力使膜向外鼓起，形成均匀的曲率。极小曲面是H=0的情况，肥皂泡是H=常数的情况。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M20,100 Q50,60 100,70 Q150,80 180,60" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M20,100 Q50,140 100,130 Q150,120 180,140" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M40,95 Q70,90 100,100 Q130,110 160,100" fill="none" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,3"/><text x="85" y="85" font-size="9" fill="#dc2626">H=0</text><text x="40" y="50" font-size="9" fill="#2563eb">极小曲面</text><text x="40" y="160" font-size="8" fill="#7c3aed">δArea = 0 ⇔ H=0</text></svg>`,
    examples: [
      { title: "悬链面", content: "悬链面由悬链线绕轴旋转生成，是唯一的极小旋转曲面（除平面外），Gauss曲率处处为负。" },
      { title: "螺旋面", content: "螺旋面是直纹极小曲面，与悬链面共形等价，在DNA分子结构和纳米材料中有应用。" },
      { title: "球面", content: "球面是唯一紧致无边CMC曲面（Alexandrov定理），H=1/R，是等周问题（给定面积最大体积）的解。" }
    ],
    theorems: [{ name: "Alexandrov定理", statement: "R³中唯一紧致无边常平均曲率曲面是球面。", proof: "Alexandrov使用'反射法'（moving plane method）证明。设M是紧致无边CMC曲面。取任意方向，用垂直于该方向的平面族从远处推进，反射曲面的一部分。利用CMC条件和Hopf引理（椭圆方程的极值原理），证明M关于推进平面的反射必然与M重合，且M在每一步必须关于该平面对称。由于方向任意，M必须关于所有方向对称，故为球面。此方法后被推广到高维和更一般的曲率条件。" }],
    applications: "肥皂膜和气泡的数学建模；张拉膜结构建筑设计；生物膜和细胞膜的几何分析；微重力环境下液体界面。",
    refs: { book: "Lee", ch: "Ch.7", sec: "§7.4" }
  },
  {
    id: "r39", label: "子流形上的曲率与控制", chapter: "ch7", layer: 2,
    desc: "子流形的曲率受外围空间曲率约束，通过Gauss方程可将外围曲率条件转化为子流形的内蕴曲率条件。",
    content: "Gauss方程的一个直接推论是：若外围空间N的截面曲率有界 K_N ≤ c，则子流形M的截面曲率满足 K_M ≤ c + |II|²（粗略上界）。特别地，若N是欧氏空间（c=0），则 K_M ≤ |II|²。对于球面Sⁿ中的子流形，K_M ≤ 1 + |II|²。反之，若外围空间曲率有下界，子流形也有类似的下界估计。这些不等式在子流形的pinching问题和刚性定理中起关键作用。Lawson和Simons的著名结果：Sⁿ中不存在紧致极小子流形具有处处低余维数。",
    understanding: "子流形的曲率不能'太离谱'——它受外围空间的约束。就像在盒子里搭建弯曲的管道，管道的弯曲程度取决于盒子的尺寸和形状。在球面Sⁿ中，子流形的曲率被球面本身的正曲率'抬升'；在双曲空间中，子流形的曲率可能被'压低'。欧氏空间中的子流形曲率完全由自身弯曲（第二基本形式）决定。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="70" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M60,60 Q80,80 90,100 Q100,120 120,140" fill="none" stroke="#dc2626" stroke-width="2"/><text x="30" y="40" font-size="9" fill="#2563eb">外围空间N</text><text x="30" y="55" font-size="9" fill="#dc2626">子流形M</text><text x="30" y="70" font-size="8" fill="#7c3aed">K_M ≤ K_N + |II|²</text><circle cx="90" cy="100" r="2" fill="#dc2626"/></svg>`,
    examples: [
      { title: "S³中的极小曲面", content: "S³中极小曲面（H=0）的Gauss曲率K≤1。Lawson构造了S³中任意亏格的紧致极小曲面。" },
      { title: "球面中的极小子流形", content: "Sⁿ中极小子流形满足 Δx = -nx，其中x是位置向量。这是Simons研究Sⁿ中极小子流形刚性定理的出发点。" },
      { title: "曲率pinching", content: "若Sⁿ中子流形截面曲率满足 K > (n-2)/(2n-3)，则子流形是全测地的（即球面的大球面）。" }
    ],
    theorems: [{ name: "Simons不等式", statement: "Sⁿ中极小子流形第二基本形式满足 Δ|II|² ≥ -2|II|² + 相关项，是极小子流形刚性理论的基础。", proof: "利用Bochner技巧，计算第二基本形式的Laplacian Δ|II|² = 2|∇II|² + 2⟨II, ΔII⟩。通过Codazzi方程和Gauss方程，将ΔII用曲率张量和II本身表示。在Sⁿ中，Ricci曲率为(n-1)，代入得Simons不等式：Δ|II|² ≥ -2|II|² + (2-1/p)|∇II|² + 低阶项（p为余维数）。当|II|²足够小时，不等式迫使|II|=0，即子流形是全测地的。这是Sⁿ中极小子流形刚性定理的核心。" }],
    applications: "几何分析中极小子流形的正则性理论；球面中极小子流形的分类；广义相对论中膜世界（braneworld）模型。",
    refs: { book: "Lee", ch: "Ch.7", sec: "§7.5" }
  },

  // ======================== Ch8: Gauss-Bonnet定理 (4) ========================
  {
    id: "r40", label: "测地曲率与局部Gauss-Bonnet", chapter: "ch8", layer: 0,
    desc: "局部Gauss-Bonnet定理将曲面上区域的总曲率与边界测地曲率积分和角盈联系起来，是全局定理的基石。",
    content: "对于曲面M上由分段光滑测地线段围成的区域Ω，局部Gauss-Bonnet定理表述为：∫_Ω K dA + ∫_∂Ω κ_g ds + Σ(π-α_i) = 2πχ(Ω)，其中κ_g是边界曲线的测地曲率，α_i是顶点处的内角。对于测地三角形（边界为测地线，κ_g=0），简化为 ∫_Ω K dA = α₁+α₂+α₃ - π。这直接给出了球面三角形内角和>π，双曲三角形内角和<π。测地曲率度量曲线在曲面内偏离测地线的程度。",
    understanding: "局部Gauss-Bonnet定理是'三角形内角和定理'的弯曲空间版本。在平面上，三角形内角和是180度；在球面上，三角形内角和大于180度，多出的部分恰好等于三角形内Gauss曲率的积分；在双曲面上，内角和小于180度，缺少的部分等于曲率积分的绝对值。曲率就是'角度盈余'或'角度缺额'的密度。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,20 160,100 40,100" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="80" y="80" font-size="10" fill="#dc2626">α₁</text><text x="120" y="80" font-size="10" fill="#dc2626">α₂</text><text x="100" y="40" font-size="10" fill="#dc2626">α₃</text><text x="50" y="130" font-size="9" fill="#2563eb">∫K dA = Σα_i - π</text><text x="50" y="145" font-size="8" fill="#7c3aed">K>0 → 内角和>π</text></svg>`,
    examples: [
      { title: "球面三角形", content: "球面上由赤道和两条经线构成的三角形，面积为 πR²/2（1/8球面），内角和=3π/2，Gauss曲率积分=π/2。" },
      { title: "测地三角形", content: "测地三角形（边界为测地线）满足 ∫K dA = Σα_i - π。在平面上，K=0，α₁+α₂+α₃=π。" },
      { title: "区域上的Gauss-Bonnet", content: "球面上半径为θ的球冠，边界测地曲率 κ_g=cotθ/R，Gauss曲率积分与边界贡献之和满足局部Gauss-Bonnet。" }
    ],
    theorems: [{ name: "局部Gauss-Bonnet定理", statement: "∫_Ω K dA + ∫_∂Ω κ_g ds + Σ(π-α_i) = 2πχ(Ω)。", proof: "将区域Ω三角剖分。在每个三角形上，取正交活动标架{e₁,e₂}，联络1-形式ω¹₂满足dω¹₂ = -K dA。由Stokes定理，∫_Δ K dA = -∫_∂Δ ω¹₂。在每条边上，-∫_∂Δ ω¹₂ = ∫_∂Δ κ_g ds（测地曲率定义）。在顶点处，角度变化给出π-α_i的贡献。对所有三角形求和，内部边抵消，顶点处角度和给出2πχ(Ω)-Σα_i。整理即得局部Gauss-Bonnet公式。" }],
    applications: "地理学中球面三角测量；导航中的大圆航法计算；CAD/CAM中自由曲面分析和加工路径规划。",
    refs: { book: "Lee", ch: "Ch.8", sec: "§8.1" }
  },
  {
    id: "r41", label: "全局Gauss-Bonnet定理", chapter: "ch8", layer: 0,
    desc: "全局Gauss-Bonnet定理将闭曲面Gauss曲率积分与Euler示性数联系起来，是微分几何与拓扑学的里程碑。",
    content: "全局Gauss-Bonnet定理：对于紧致定向二维黎曼流形M（无边），∫_M K dA = 2πχ(M)。其中χ(M)是Euler示性数，χ(M) = 2-2g（g为亏格）。推论：球面（χ=2）总曲率4π，环面（χ=0）总曲率0，亏格≥2曲面总曲率负。对于带边曲面：∫_M K dA + ∫_∂M κ_g ds = 2πχ(M)。Gauss-Bonnet定理是Atiyah-Singer指标定理的雏形，将局部几何量（曲率）的积分与全局拓扑不变量（Euler示性数）联系起来。",
    understanding: "Gauss-Bonnet定理说，无论你怎样扭曲一个曲面，其Gauss曲率的积分永远不变，只取决于曲面的'洞数'（亏格）。球面没有洞，总曲率4π；甜甜圈有一个洞，总曲率0；两个洞的曲面（8字形），总曲率-4π。这就像工资总额：你可以重新分配，但总额不变——曲率可以从一处挪到另一处，但总曲率由拓扑决定。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="25" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="42" y="55" font-size="10" fill="#dc2626">g=0</text><text x="30" y="90" font-size="9" fill="#2563eb">∫K=4π</text><ellipse cx="140" cy="50" rx="28" ry="18" fill="none" stroke="#2563eb" stroke-width="1.5"/><circle cx="140" cy="50" r="12" fill="none" stroke="#2563eb" stroke-width="1"/><text x="128" y="55" font-size="10" fill="#dc2626">g=1</text><text x="120" y="90" font-size="9" fill="#2563eb">∫K=0</text><path d="M60,135 Q75,125 85,135 Q95,145 110,135 Q125,125 140,135" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M85,135 Q80,120 70,125 Q60,130 75,145 Q90,155 100,145 Q110,135 105,125" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="100" y="160" font-size="9" fill="#dc2626">g=2</text><text x="100" y="175" font-size="8" fill="#2563eb">∫K=-4π</text></svg>`,
    examples: [
      { title: "球面S²", content: "S²: χ=2, ∫K dA = 4π。无论球面半径多大，总曲率不变。K=1/R²，面积=4πR²，乘积恒为4π。" },
      { title: "环面T²", content: "环面: χ=0, ∫K dA = 0。外侧正曲率与内侧负曲率恰好抵消，总积分为零。" },
      { title: "亏格2曲面", content: "双环面: χ=-2, ∫K dA = -4π。负总曲率是亏格≥2的闭曲面的特征。" }
    ],
    theorems: [{ name: "全局Gauss-Bonnet定理", statement: "对于紧致定向二维黎曼流形M（无边），∫_M K dA = 2πχ(M)。", proof: "将M三角剖分为测地三角形（∂M=∅，无边界项）。在每个三角形Δ_i上应用局部Gauss-Bonnet：∫_{Δ_i} K dA + Σ(π-α_ij) = 2π。对所有三角形求和：∫_M K dA + Σ_{所有顶点}(π-α) = 2πF。在每个顶点处，周围三角形内角之和为2π，故Σ(π-α) = πV - 2πV = -πV。又三角剖分满足3F = 2E。代入得∫_M K dA = 2πF - πV = 2πF - π(2E/3·3/2) = 2π(V-E+F) = 2πχ(M)。" }],
    applications: "拓扑数据分析中曲率积分的拓扑推断；计算机图形学中网格亏格检测；理论物理中AdS/CFT对偶的拓扑约束。",
    refs: { book: "Lee", ch: "Ch.8", sec: "§8.2" }
  },
  {
    id: "r42", label: "Euler示性数与曲面分类", chapter: "ch8", layer: 1,
    desc: "Euler示性数χ(M)是曲面最重要的拓扑不变量，通过Gauss-Bonnet定理与几何曲率联系，给出闭曲面的完全分类。",
    content: "Euler示性数χ(M)可通过三角剖分定义：χ = V - E + F（顶点数-边数+面数），与剖分无关。对于紧致定向曲面，χ = 2 - 2g，其中g是亏格。所有紧致定向曲面按亏格分类：S²(g=0, χ=2)，T²(g=1, χ=0)，Σ_g(g≥2, χ<0)。Gauss-Bonnet定理给出了曲率总和的拓扑约束。Chern将Gauss-Bonnet定理推广到高维（Chern-Gauss-Bonnet定理），用Pfaffian形式表示Euler类。Euler示性数还是Atiyah-Singer指标定理中Dirac算子指标的重要组成部分。",
    understanding: "Euler示性数就是'顶点-边+面'的计数，它不依赖于你如何剖分曲面。一个立方体的表面：8个顶点+6个面-12条边=2，和球面一样。任何能被'吹成球'的形状，Euler示性数都是2。每加一个洞（像甜甜圈），Euler示性数减2。所以Euler示性数就是'2减2倍洞数'。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="50,40 90,40 110,55 70,55" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/><polygon points="50,40 70,55 70,85 50,70" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/><polygon points="90,40 110,55 110,85 90,70" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/><polygon points="50,70 70,85 90,70" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/><polygon points="70,55 90,70 110,55 90,40" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/><text x="120" y="50" font-size="9" fill="#dc2626">V=5</text><text x="120" y="65" font-size="9" fill="#2563eb">E=9</text><text x="120" y="80" font-size="9" fill="#7c3aed">F=6</text><text x="100" y="120" font-size="10" fill="#dc2626">χ = V-E+F = 2</text></svg>`,
    examples: [
      { title: "正多面体", content: "五种正多面体均满足χ=2（Euler公式）：正四面体(4-6+4=2)，立方体(8-12+6=2)，正八面体(6-12+8=2)等。" },
      { title: "环面剖分", content: "环面可剖分为16个矩形，V=16, E=32, F=16，χ=0。任何剖分都给出χ=0。" },
      { title: "Klein瓶", content: "Klein瓶（不可定向）χ=0。不可定向曲面χ=2-k，其中k为交叉帽数。Gauss-Bonnet需修正为包含定向覆盖。" }
    ],
    theorems: [{ name: "Chern-Gauss-Bonnet定理", statement: "对于紧致可定向偶维黎曼流形M²ⁿ，∫_M Pf(Ω) = (2π)^n χ(M)，其中Pf(Ω)是曲率形式的Pfaffian。", proof: "Chern的证明思路：在M的单位球丛SM上构造一个(2n-1)-形式Π，使得dΠ = π*Pf(Ω)（其中π: SM→M是投影）。这是通过曲率形式Ω在球丛上的'超渡'构造完成的。然后利用Stokes定理，∫_M Pf(Ω) = ∫_{SM} dΠ = ∫_{∂(SM)} Π。但∂(SM)的结构由M的拓扑决定，计算边界积分给出Euler示性数。核心是Chern发现Pfaffian恰有正确的微分性质。" }],
    applications: "计算拓扑中网格的Euler示性数计算；分子生物学中蛋白质表面的拓扑分析；计算机图形学中网格简化和特征检测。",
    refs: { book: "Lee", ch: "Ch.8", sec: "§8.3" }
  },
  {
    id: "r43", label: "高维Gauss-Bonnet-Chern定理", chapter: "ch8", layer: 3,
    desc: "Chern将Gauss-Bonnet定理推广到高维偶维流形，用曲率形式的Pfaffian表示Euler示性数，是20世纪几何学的里程碑。",
    content: "Chern-Gauss-Bonnet定理（1944年）：对于紧致可定向偶维黎曼流形M²ⁿ，∫_M Pf(Ω) = (2π)^n χ(M)。其中Ω是曲率2-形式，Pf(Ω)是Pfaffian多项式。Pfaffian是曲率形式的多项式，在二维退化为 K/(2π)，在四维为 (1/32π²)ε^{ijkl} R^ab_ij ∧ R^cd_kl。这一定理深刻揭示了局部微分几何与全局拓扑的关系，是陈省身最伟大的贡献之一。它也是Atiyah-Singer指标定理的特殊情形（Euler算子的指标）。在规范场论中，Chern-Weil理论将这一思想推广到任意向量丛。",
    understanding: "Chern的工作说：你不需要看到整个流形，只需要在流形上做曲率测量，把这些测量结果加起来，就能知道流形的'洞数'。这就像不用剥橘子就能通过表面纹理知道里面有几瓣。在二维，这很简单（Gauss-Bonnet）；在四维，需要用到曲率张量的复杂组合（Pfaffian）。Chern找到了这个'组合配方'。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="40" width="160" height="120" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="50" y="70" font-size="10" fill="#dc2626">2n维流形 M</text><text x="45" y="90" font-size="9" fill="#2563eb">∫_M Pf(Ω) = (2π)^n χ(M)</text><text x="50" y="110" font-size="8" fill="#7c3aed">n=1: Gauss-Bonnet</text><text x="50" y="125" font-size="8" fill="#7c3aed">n=2: 4维Chern-Gauss-Bonnet</text><text x="50" y="140" font-size="8" fill="#7c3aed">一般: Atiyah-Singer指标定理</text></svg>`,
    examples: [
      { title: "二维退化", content: "n=1时，Pf(Ω) = K/(2π) * dA，Chern-Gauss-Bonnet退化为经典Gauss-Bonnet定理。" },
      { title: "四维公式", content: "四维时 ∫_M (1/32π²)|W|² + ... = χ(M)，包含Weyl张量的贡献。引力瞬子的拓扑荷由此公式确定。" },
      { title: "CP²的Euler示性数", content: "CP²配备Fubini-Study度量，χ(CP²)=3。Chern-Gauss-Bonnet公式给出曲率形式的积分等于3(2π)²。" }
    ],
    theorems: [{ name: "Chern-Gauss-Bonnet定理", statement: "对于紧致可定向偶维黎曼流形M²ⁿ，∫_M Pf(Ω) = (2π)^n χ(M)。", proof: "Chern（1944）的证明是微分几何的里程碑。核心构造：在球丛SM上定义超渡形式Π，使得其外微分恰好是Pfaffian的拉回。利用Stokes定理将M上的积分转化为球丛边界上的积分。球丛的Euler类与Euler示性数的关系由障碍理论保证。在二维，Pf(Ω) = K/(2π) dA，退化为经典Gauss-Bonnet。在四维，Pf(Ω) = (1/32π²)ε^{ijkl} R^ab_ij ∧ R^cd_kl，涉及曲率张量的二次型。" }],
    applications: "引力理论中引力瞬子的拓扑荷计算；弦论中紧致化流形的选择；拓扑绝缘体中的拓扑不变量（TKNN不变量）。",
    refs: { book: "Lee", ch: "Ch.8", sec: "§8.4" }
  },

  // ======================== Ch9: Jacobi场 (4) ========================
  {
    id: "r44", label: "Jacobi方程与Jacobi场", chapter: "ch9", layer: 0,
    desc: "Jacobi场描述沿测地线的无穷小变分，满足Jacobi方程，是研究测地线稳定性和共轭点的核心工具。",
    content: "Jacobi场J(t)是沿测地线γ(t)的向量场，满足Jacobi方程：∇_γ'∇_γ' J + R(J, γ')γ' = 0。J(t)的几何意义是测地线变分 Γ(s,t) = exp_γ(t)(sJ(t)) 的变分向量场 ∂Γ/∂s|_{s=0}。Jacobi方程是二阶线性ODE，给定J(0)和J'(0)（其中J'(0)=∇_γ'J|_{t=0}）有唯一解。Jacobi场的维数为2n（由n维初始位置和n维初始速度决定）。垂直于γ'的Jacobi场称为法Jacobi场，维数为2(n-1)。Jacobi场是研究共轭点、割点和曲率对测地线行为影响的基本工具。",
    understanding: "Jacobi场描述了一簇测地线如何相互偏离。想象一群蚂蚁从同一点出发，沿不同但相近的大圆行走。Jacobi场描述了任意时刻蚂蚁之间的相对位置。如果蚂蚁们开始靠近（聚焦），说明曲率为正；如果蚂蚁们越来越远（发散），说明曲率为负。曲率就是通过Jacobi方程来控制测地线族的'会聚'或'发散'。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M30,150 Q50,100 70,80 Q90,60 120,50" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M25,148 Q45,95 65,75 Q85,55 115,45" fill="none" stroke="#dc2626" stroke-width="1"/><path d="M35,152 Q55,105 75,85 Q95,65 125,55" fill="none" stroke="#dc2626" stroke-width="1"/><line x1="70" y1="80" x2="65" y2="75" stroke="#7c3aed" stroke-width="1.5"/><line x1="70" y1="80" x2="75" y2="85" stroke="#7c3aed" stroke-width="1.5"/><text x="75" y="72" font-size="9" fill="#7c3aed">J(t)</text><text x="30" y="40" font-size="9" fill="#2563eb">∇_γ'∇_γ'J + R(J,γ')γ' = 0</text><text x="30" y="55" font-size="8" fill="#dc2626">测地线变分</text></svg>`,
    examples: [
      { title: "欧氏空间", content: "Rⁿ中曲率为零，Jacobi方程退化为 J''(t)=0，解为 J(t)=J(0)+tJ'(0)，Jacobi场线性增长。" },
      { title: "球面Sⁿ", content: "Sⁿ(1)上，法Jacobi方程为 J''+J=0（因R(J,γ')γ'=J），解为 J(t)=sin(t)·A+cos(t)·B，呈周期振荡。" },
      { title: "双曲空间Hⁿ", content: "Hⁿ(-1)上，法Jacobi方程为 J''-J=0，解为 J(t)=sinh(t)·A+cosh(t)·B，指数增长。" }
    ],
    theorems: [{ name: "Jacobi方程", statement: "沿测地线γ的Jacobi场J满足 ∇_γ'∇_γ' J + R(J, γ')γ' = 0。", proof: "设Γ(s,t)是测地线变分，Γ(0,t)=γ(t)，J(t)=∂Γ/∂s|_{s=0}。由测地线条件∇_t ∂Γ/∂t = 0，对s求导得∇_s∇_t ∂Γ/∂t = 0。利用无挠性交换协变导数：∇_s∇_t ∂Γ/∂t = ∇_t∇_s ∂Γ/∂t + R(∂Γ/∂s, ∂Γ/∂t)∂Γ/∂t。再次交换∇_t∇_s ∂Γ/∂t = ∇_t∇_t ∂Γ/∂s。在s=0处，∂Γ/∂t=γ'，∂Γ/∂s=J，得 ∇_γ'∇_γ' J + R(J,γ')γ' = 0。这是几何光学中'测地线偏离方程'的数学基础。" }],
    applications: "天体力学中行星轨道稳定性分析；广义相对论中测地线偏离方程（潮汐力）；宇宙学中光锥的聚焦效应。",
    refs: { book: "Lee", ch: "Ch.9", sec: "§9.1" }
  },
  {
    id: "r45", label: "共轭点", chapter: "ch9", layer: 0,
    desc: "共轭点是沿测地线存在非零Jacobi场在两端都为零的点对，是测地线最短性失效的前兆，与割点密切相关。",
    content: "点q = γ(b)称为p = γ(a)沿测地线γ的共轭点，如果存在非零Jacobi场J满足J(a)=J(b)=0。共轭点的重数等于满足此条件的线性无关Jacobi场的个数。共轭点的第一变分特征：b是p的共轭点当且仅当指数映射exp_p在bγ'(0)处有退化微分。共轭点总是出现在割点之前或同时：若γ(b)是p沿γ的第一个割点，则要么γ(b)是p的共轭点，要么有另一条同样长度的测地线连接p和γ(b)。共轭点的分布由曲率控制：正曲率产生共轭点，负曲率抑制共轭点。",
    understanding: "共轭点就像测地线的'焦点'。从一点出发的所有测地线在共轭点处'汇聚'。在球面上，北极的对径点（南极）是北极的共轭点——所有从北极出发的大圆都在南极汇聚。当多条测地线汇聚于同一点时，它们中至少有一条在越过该点后不再是最短路径。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="3" fill="#dc2626"/><text x="50" y="50" fill="#dc2626" font-size="9">p</text><circle cx="140" cy="100" r="3" fill="#7c3aed"/><text x="145" y="95" fill="#7c3aed" font-size="9">q</text><path d="M60,60 Q80,70 100,80 Q120,90 140,100" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M60,60 Q90,80 110,90 Q130,95 140,100" fill="none" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,4"/><path d="M60,60 Q70,90 90,100 Q110,105 140,100" fill="none" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,4"/><text x="90" y="65" font-size="8" fill="#7c3aed">J(0)=0</text><text x="130" y="85" font-size="8" fill="#7c3aed">J(b)=0</text></svg>`,
    examples: [
      { title: "球面Sⁿ", content: "Sⁿ(1)上，从p出发的测地线在距离π处到达对径点-p，这是p的共轭点。第一个共轭点出现在距离π处。" },
      { title: "欧氏空间", content: "Rⁿ中不存在共轭点。所有测地线（直线）永不相交，Jacobi场J(t)=J(0)+tJ'(0)只在t=0时为零。" },
      { title: "平坦环面T²", content: "T²上虽无共轭点（曲率为零），但存在割点（因多条等长测地线连接同两点），展示共轭点与割点的区别。" }
    ],
    theorems: [{ name: "共轭点定理", statement: "若γ(b)是γ(a)的第一个共轭点，则γ在[a,b]上最短，但在[a,b+ε]上不再最短（ε>0）。", proof: "若γ(b)是γ(a)的第一个共轭点，则存在非零Jacobi场J满足J(a)=J(b)=0。将J扩展为沿γ的变分场（在[a,b]上为零，在b之后非零）。计算第二变分：在[a,b]上δ²E(J,J)=0（因为J是Jacobi场且满足边界条件），在[b,b+ε]上可构造使δ²E<0的变分。因此存在从γ(a)到γ(b+ε)的比γ更短的曲线。这证明了第一个共轭点之后测地线不再是最短的。" }],
    applications: "最优控制理论中轨迹的共轭点检测；航天器轨道优化；光学中焦散线和聚焦现象。",
    refs: { book: "Lee", ch: "Ch.9", sec: "§9.2" }
  },
  {
    id: "r46", label: "第二变分公式", chapter: "ch9", layer: 1,
    desc: "第二变分公式给出能量泛函的二阶导数，用Jacobi场和曲率表达，是判断测地线稳定性的基本工具。",
    content: "能量泛函E(γ)在测地线处的第二变分公式为：δ²E(V,W) = ∫⟨∇_γ'V, ∇_γ'W⟩ - ⟨R(V,γ')γ', W⟩ dt（对分段光滑变分场V,W）。当V=W为法Jacobi场时，δ²E(V,V) = -∫⟨V, ∇_γ'∇_γ'V + R(V,γ')γ'⟩ dt + 边界项。如果测地线γ上存在共轭点，则存在变分场使第二变分为负，即γ不是极小值。Morse指标定理：测地线上共轭点（计重数）的个数等于第二变分负特征值的个数（Morse指标）。这建立了变分理论与Jacobi场理论的桥梁。",
    understanding: "第二变分公式就像'二阶导数测试'。对于函数，二阶导数为正意味着极小值。对于测地线，第二变分公式告诉你路径的长度是否真的是极小值。如果存在一个'扰动方向'使得长度减小（第二变分为负），那么这条测地线就不是最短路径。共轭点就是这种'扰动方向'存在的标志。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M30,30 Q100,50 170,150" fill="none" stroke="#2563eb" stroke-width="2"/><text x="100" y="45" font-size="9" fill="#2563eb">γ (测地线)</text><path d="M30,30 Q70,70 100,100 Q140,135 170,150" fill="none" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,4"/><text x="75" y="80" font-size="8" fill="#dc2626">γ+εV</text><text x="25" y="170" font-size="9" fill="#7c3aed">δ²E(V,V) = ∫|∇V|² - ⟨R(V,γ')γ',V⟩</text></svg>`,
    examples: [
      { title: "球面上的大圆", content: "S²上长度小于π的大圆弧是极小值，第二变分正定。长度等于π的大圆弧（半圆）有零特征值（共轭点）。" },
      { title: "Morse指标定理", content: "Morse指标定理：能量泛函在测地线上的Morse指标等于共轭点的个数（计重数），将变分理论与Jacobi场理论联系起来。" },
      { title: "极小曲面的第二变分", content: "极小曲面的第二变分公式涉及Jacobi算子 Δ + |II|² + Ric(ν,ν)，是研究极小曲面稳定性的基础。" }
    ],
    theorems: [{ name: "第二变分公式", statement: "δ²E(V,V) = ∫_a^b (|∇_γ'V|² - ⟨R(V,γ')γ',V⟩) dt。若γ上存在共轭点，则存在V使δ²E(V,V)<0。", proof: "考虑能量泛函E(γ_s)对变分参数s的二阶导数。设Γ(s,t)为变分，V(t)=∂Γ/∂s|_{s=0}。计算d²E/ds²|_{s=0} = ∫(⟨∇_s∂Γ/∂t, ∇_s∂Γ/∂t⟩ + ⟨∂Γ/∂t, ∇_s∇_s∂Γ/∂t⟩) dt|_{s=0}。利用无挠性交换导数，∇_s∂Γ/∂t = ∇_t V，∇_s∇_s∂Γ/∂t = ∇_t∇_s V + R(V,γ')V。代入得δ²E = ∫(|∇_γ'V|² - ⟨R(V,γ')γ',V⟩) dt + 边界项。若存在共轭点，取对应Jacobi场为零边界条件的变分，得δ²E=0。" }],
    applications: "Morse理论在测地线问题中的应用；极小曲面稳定性分析；结构力学中屈曲分析（失稳路径）。",
    refs: { book: "Lee", ch: "Ch.9", sec: "§9.3" }
  },
  {
    id: "r47", label: "测地线变分与Morse理论", chapter: "ch9", layer: 2,
    desc: "Morse理论将能量泛函的临界点拓扑与流形本身的拓扑联系起来，Jacobi场和共轭点提供了Morse指标的计算工具。",
    content: "Morse理论在黎曼几何中的应用是研究路径空间Ω(M;p,q)的拓扑。能量泛函E: Ω→R的临界点是测地线，Morse指标（第二变分负特征值个数）等于沿测地线的共轭点个数。Morse不等式给出：临界点个数 ≥ Betti数之和。特别地，若M的拓扑非平凡，则必存在连接p,q的测地线。对于闭测地线，Lyusternik-Fet定理保证任何紧致流形上存在闭测地线。Bott的等变Morse理论将这一结果推广到带对称性的情形。Morse理论是连接分析与拓扑的桥梁。",
    understanding: "Morse理论就像'地形分析'：能量泛函是'地形高度'，测地线是'山顶'、'山谷'或'鞍点'（临界点）。每个临界点有一个'指标'（向下方向的数量），通过数地形图上各类临界点的个数，可以推断地形的'洞数'（Betti数）。这就像看地形图推断地下结构——不需要挖掘就能知道。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M30,150 Q60,100 100,90 Q140,80 170,110" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="60" cy="100" r="3" fill="#dc2626"/><text x="50" y="95" font-size="8" fill="#dc2626">临界点</text><circle cx="140" cy="80" r="3" fill="#dc2626"/><text x="130" y="90" font-size="8" fill="#dc2626">临界点</text><text x="30" y="50" font-size="9" fill="#2563eb">E: Ω → R</text><text x="30" y="65" font-size="8" fill="#7c3aed">Morse指标 = 共轭点数</text><text x="30" y="80" font-size="8" fill="#dc2626">临界点数 ≥ Σβ_i</text></svg>`,
    examples: [
      { title: "球面Sⁿ上的测地线", content: "Sⁿ上连接对径点的测地线有无穷多条（所有大圆），Morse理论解释了为什么临界点有如此高的退化性。" },
      { title: "Lie群上的闭测地线", content: "紧致Lie群上，单参数子群是闭测地线。Morse理论可以估计闭测地线的数量和分布。" },
      { title: "Bott周期定理", content: "Bott将Morse理论应用于Loop空间Ω(Sⁿ)，得到了稳定同伦群的Bott周期性定理。" }
    ],
    theorems: [{ name: "Morse指标定理", statement: "能量泛函在测地线上的Morse指标等于沿该测地线的共轭点个数（计重数）。", proof: "Morse指标是第二变分δ²E的负特征值个数。将第二变分写为∫⟨LV,V⟩ dt，其中L = -∇_γ'² - R(·,γ')γ'是Jacobi算子。L的特征值问题等价于Sturm-Liouville问题。由Sturm比较定理，特征值变号恰好发生在Jacobi场有零点时，即共轭点处。每个共轭点贡献一个负特征值（重数由共轭点的重数决定）。因此Morse指标 = 共轭点个数（计重数）。这是Morse理论在变分法中的核心结论。" }],
    applications: "Morse同调与Floer同调理论；拓扑数据分析中的Morse-Smale复形；量子力学中路径积分的半经典近似。",
    refs: { book: "Lee", ch: "Ch.9", sec: "§9.4" }
  },

  // ======================== Ch10: 比较定理 (5) ========================
  {
    id: "r48", label: "Rauch比较定理", chapter: "ch10", layer: 0,
    desc: "Rauch比较定理比较曲率有上下界的流形中Jacobi场的增长，是曲率下界控制几何行为的核心工具。",
    content: "Rauch比较定理：设M和M~是完备黎曼流形，截面曲率满足 K ≥ K~。沿测地线γ和γ~，给定初始条件相同的Jacobi场J和J~，若γ上无共轭点，则 |J(t)| ≤ |J~(t)|。等价地，正曲率使Jacobi场增长变慢（或振荡），负曲率使Jacobi场增长变快。Rauch定理是几乎所有比较定理（体积比较、距离比较、Toponogov定理）的基石。其证明基于第二变分公式和指标形式。Rauch定理的关键应用是证明球面定理：若截面曲率介于1/4和1之间，则流形同胚于球面。",
    understanding: "Rauch定理说：曲率越大，空间越'紧'，Jacobi场（测地线的偏离）增长越慢。在球面上（正曲率），Jacobi场振荡，从北极出发的测地线先发散后汇聚；在双曲空间（负曲率），Jacobi场指数增长，测地线永远发散。曲率就像一个'弹簧'——正曲率是拉力，负曲率是推力。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M30,150 Q40,120 50,100 Q60,80 70,70" fill="none" stroke="#dc2626" stroke-width="2"/><text x="35" y="140" font-size="8" fill="#dc2626">K小</text><path d="M30,150 Q35,110 40,90 Q45,70 50,60" fill="none" stroke="#2563eb" stroke-width="2"/><text x="15" y="140" font-size="8" fill="#2563eb">K大</text><text x="30" y="50" font-size="9" fill="#7c3aed">|J(t)| ≤ |J~(t)|</text><text x="30" y="65" font-size="8" fill="#dc2626">当 K ≥ K~</text><text x="30" y="80" font-size="8" fill="#2563eb">正曲率→Jacobi场增长慢</text></svg>`,
    examples: [
      { title: "球面vs欧氏空间", content: "Sⁿ(1)上Jacobi场满足J''+J=0，|J(t)|≤|J(0)|cos t+|J'(0)|sin t。Rⁿ上J''=0，|J(t)|=|J(0)+tJ'(0)|线性增长。" },
      { title: "双曲空间vs欧氏空间", content: "Hⁿ(-1)上J''-J=0，|J(t)|指数增长。Rauch定理给出：负曲率空间中Jacobi场增长快于欧氏空间。" },
      { title: "球面定理", content: "若截面曲率 1/4 < K ≤ 1，则流形同胚于Sⁿ。上界1防止过大的曲率，下界1/4由Rauch定理和共轭点比较得出。" }
    ],
    theorems: [{ name: "Rauch比较定理", statement: "若 K_M ≥ K_M~，则沿等长测地线且相同初始条件的Jacobi场满足 |J(t)| ≤ |J~(t)|（在无共轭点区间）。", proof: "考虑函数f(t) = |J(t)|²/|J~(t)|²。计算f'(t)并利用Jacobi方程。关键步骤：定义指标形式I_t(J,J) = ∫_0^t (|∇J|² - ⟨R(J,γ')γ',J⟩) ds。由曲率条件K_M ≥ K_M~，有I_t(J,J) ≤ I_t(J~,J~)。然后利用指标形式的性质，比较J和J~的增长率。通过分析f(t)的导数并用曲率不等式，可证f(t) ≤ 1，即|J(t)| ≤ |J~(t)|。这是所有比较定理的基石。" }],
    applications: "球面定理和刚性定理；广义相对论中奇点定理（如Hawking-Penrose定理）；Gromov-Hausdorff收敛理论。",
    refs: { book: "Lee", ch: "Ch.10", sec: "§10.1" }
  },
  {
    id: "r49", label: "Toponogov定理", chapter: "ch10", layer: 1,
    desc: "Toponogov定理将截面曲率下界与测地三角形的边长和角度关系联系起来，是理解曲率几何效应的几何化工具。",
    content: "Toponogov定理：设M是完备黎曼流形，截面曲率满足 K ≥ c。以测地线段为边的三角形，其边长满足与常曲率c空间中的比较三角形（Alexandrov三角形）相同的边长-角度不等式。具体地，若M中三角形边长a,b,c与常曲率c空间中三角形边长相同，则M中对应边所对的角度不小于常曲率空间中的对应角度。换言之，曲率下界决定了三角形'张开'的程度。Toponogov定理是Rauch定理的全局化，也是研究曲率有下界的度量空间（Alexandrov空间）的出发点。",
    understanding: "Toponogov定理说：曲率越大的空间，三角形越'胖'（内角越大）。在球面上（正曲率），三角形内角和大于180度；在欧氏空间中等于180度；在双曲空间中小于180度。如果你知道一个空间的最小曲率，你就能知道三角形最多能有多'瘦'。这就像知道了地面的'隆起程度'，就能推断道路的最短路径。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,30 160,120 40,120" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="90" y="100" font-size="9" fill="#dc2626">α</text><text x="120" y="100" font-size="9" fill="#dc2626">β</text><text x="100" y="50" font-size="9" fill="#dc2626">γ</text><polygon points="100,55 140,115 60,115" fill="none" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3,3"/><text x="80" y="140" font-size="9" fill="#2563eb">K≥c → α≥α_c</text><text x="80" y="155" font-size="8" fill="#7c3aed">比较三角形</text></svg>`,
    examples: [
      { title: "球面定理的应用", content: "Toponogov定理是证明球面定理的关键工具：曲率在1/4和1之间的流形，其三角形角度与球面三角形比较，可推出直径上界。" },
      { title: "Alexandrov空间", content: "Toponogov定理启发了Alexandrov空间的定义：度量空间满足'三角形内角≥比较三角形内角'，推广了曲率下界概念。" },
      { title: "分裂定理", content: "Cheeger-Gromoll分裂定理的证明依赖于Toponogov定理：若Ric≥0且存在直线，则流形分裂为R×N。" }
    ],
    theorems: [{ name: "Toponogov定理", statement: "若截面曲率 K ≥ c，则对任意测地三角形，其顶角不小于常曲率c空间中同边长三角形的对应角。", proof: "Toponogov的证明是Rauch定理的全局化应用。给定测地三角形Δ(p,q,r)，考虑测地线γ连接p到q。在常曲率c空间中构造比较三角形Δ~(p~,q~,r~)（边长相同）。沿γ构造Jacobi场J，比较|J|与|J~|。Rauch定理给出|J(t)| ≤ |J~(t)|。然后利用铰链构造（hinge construction），将角度比较转化为长度比较，再由余弦定理得出角度不等式。这是从局部曲率比较到全局几何比较的关键步骤。" }],
    applications: "Alexandrov几何的度量空间理论；Perelman对Poincaré猜想的证明；Gromov-Hausdorff收敛中的极限空间分析。",
    refs: { book: "Lee", ch: "Ch.10", sec: "§10.2" }
  },
  {
    id: "r50", label: "体积比较定理", chapter: "ch10", layer: 1,
    desc: "Bishop-Gromov体积比较定理给出曲率有下界的流形中测地球体积的上界，是黎曼几何最基本的比较定理之一。",
    content: "Bishop-Gromov体积比较定理：若完备黎曼流形M满足 Ric ≥ (n-1)c·g，则对任意p∈M，比值 Vol(B(p,r)) / V_c(r) 随r单调非增，且 ≤ 1。其中V_c(r)是常曲率c空间中半径为r的球的体积。特别地，Vol(B(p,r)) ≤ V_c(r)。当c=0时，Vol(B(p,r)) ≤ ω_n r^n（欧氏体积）。当c>0时，Bonnet-Myers定理给出直径上界。Gromov的紧致性定理直接依赖于体积比较：截面曲率有界、直径有界、体积有下界的流形集合在Gromov-Hausdorff拓扑下紧致。体积比较还是研究Ricci曲率下界空间的基础。",
    understanding: "体积比较定理说：曲率限制了空间能'装下'多少体积。在正曲率空间中，球的体积小于欧氏空间中同半径球的体积（因为空间被'捏紧'了）。在负曲率空间中，球的体积可以远远大于欧氏空间（因为空间被'撑开'了）。这个定理是理解宇宙大小和形状的基本工具：如果宇宙的平均曲率为正，它的总体积是有限的。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="30" fill="none" stroke="#dc2626" stroke-width="2"/><text x="30" y="50" font-size="8" fill="#dc2626">K>0</text><text x="30" y="65" font-size="8" fill="#dc2626">体积小</text><circle cx="140" cy="60" r="45" fill="none" stroke="#2563eb" stroke-width="2"/><text x="125" y="50" font-size="8" fill="#2563eb">K<0</text><text x="125" y="65" font-size="8" fill="#2563eb">体积大</text><text x="50" y="120" font-size="9" fill="#7c3aed">Vol(B(p,r)) ≤ V_c(r)</text><text x="50" y="135" font-size="8" fill="#dc2626">Ric ≥ (n-1)c → 体积上界</text></svg>`,
    examples: [
      { title: "Ricci平坦流形", content: "若Ric≥0，则Vol(B(p,r))/r^n单调非增，且Vol(B(p,r)) ≤ ω_n r^n。Calabi-Yau流形是Ricci平坦的。" },
      { title: "正Ricci曲率", content: "若Ric≥(n-1)（即Sⁿ标准度量），则Vol(B(p,r))/V_Sⁿ(r)单调非增，且Vol(B(p,r)) ≤ Vol(Sⁿ) = 2π^{(n+1)/2}/Γ((n+1)/2)。" },
      { title: "Gromov紧致性", content: "Gromov紧致性定理：满足|K|≤1, diam≤D, vol≥v>0的n维流形组成的集合在Gromov-Hausdorff拓扑下紧致。" }
    ],
    theorems: [{ name: "Bishop-Gromov定理", statement: "若Ric≥(n-1)c·g，则函数 r ↦ Vol(B(p,r))/V_c(r) 单调非增，≤1，且lim_{r→0}=1。", proof: "在法坐标下，体积元dV = A(t,θ) dt dθ，其中A(t,θ)是沿径向测地线的Jacobi场的行列式。Ricci曲率下界给出A(t,θ)满足的微分不等式：A'/A ≤ A_c'/A_c（其中A_c是常曲率c空间中的对应量）。由此A(t,θ)/A_c(t)单调非增，且lim_{t→0} A(t,θ)/A_c(t) = 1。积分得Vol(B(p,r))/V_c(r)单调非增且≤1。Gromov的贡献是将Bishop的逐点比较推广为整体比较。" }],
    applications: "Gromov-Hausdorff收敛理论；Ricci流的奇点分析；Perelman的约化体积单调性。",
    refs: { book: "Lee", ch: "Ch.10", sec: "§10.3" }
  },
  {
    id: "r51", label: "Bonnet-Myers定理与直径界", chapter: "ch10", layer: 0,
    desc: "Bonnet-Myers定理给出正Ricci曲率下流形的直径上界和基本群有限性，是曲率控制全局几何的经典结果。",
    content: "Bonnet-Myers定理：若完备黎曼流形M满足 Ric ≥ (n-1)/R² · g，则M紧致且直径 diam(M) ≤ πR。此外，M的万有覆盖空间也紧致，因此基本群 π₁(M) 有限。证明思路：沿任意最短测地线构造Jacobi场，利用第二变分公式和Ricci曲率下界，如果测地线长度超过πR，则存在变分使能量减小，矛盾。球面Sⁿ(R)达到直径上界，是刚性情形。Bonnet-Myers定理是最早将曲率下界与全局拓扑联系起来的定理之一，开启了几何拓扑学的新纪元。",
    understanding: "Bonnet-Myers定理说：如果空间'平均'弯曲程度足够大（正Ricci曲率），那么空间必然是一个'有限'的宇宙——你不可能走无限远，因为空间会'弯曲回来'。球面就是最好的例子：从北极出发，走πR的距离就到达南极，再往前走就回到北极了。正曲率把空间'封闭'起来了。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="55" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="100" cy="100" r="3" fill="#dc2626"/><text x="105" y="95" font-size="9" fill="#dc2626">p</text><line x1="100" y1="45" x2="100" y2="100" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,4"/><text x="85" y="70" font-size="8" fill="#dc2626">≤πR</text><text x="25" y="40" font-size="9" fill="#2563eb">Ric ≥ (n-1)/R²</text><text x="25" y="55" font-size="8" fill="#7c3aed">→ diam ≤ πR</text><text x="25" y="70" font-size="8" fill="#dc2626">→ π₁有限</text></svg>`,
    examples: [
      { title: "球面Sⁿ(R)", content: "Sⁿ(R)的Ricci曲率为 (n-1)/R²，直径恰好为πR，达到Bonnet-Myers定理的上界。这是刚性情形。" },
      { title: "实射影空间RPⁿ", content: "RPⁿ的Ricci曲率与Sⁿ相同，但直径仅πR/2，基本群为Z₂，验证了Bonnet-Myers定理的有限性结论。" },
      { title: "非紧致正Ricci流形", content: "存在Ricci曲率为正的非紧致流形（如R²上的旋转抛物面），说明Ricci正不能保证紧致性，需要一致下界。" }
    ],
    theorems: [{ name: "Bonnet-Myers定理", statement: "若完备黎曼流形满足 Ric ≥ (n-1)/R² · g，则 diam(M) ≤ πR，且 π₁(M) 有限。", proof: "设γ: [0,L] → M是长度L的最短测地线。沿γ取n-1个平行标准正交法向量场E_i。定义变分V_i(t) = sin(πt/L)E_i(t)。第二变分公式：δ²E(V_i,V_i) = ∫₀^L (cos²(πt/L)π²/L² - sin²(πt/L)⟨R(E_i,γ')γ',E_i⟩) dt。对i=1至n-1求和，利用Ricci下界条件，得 Σδ²E < 0（若L > πR）。但γ是最短测地线，第二变分应非负，矛盾。故L ≤ πR。万有覆盖的紧致性由类似论证及基本群作用的不连续性得出。" }],
    applications: "宇宙学中宇宙年龄和大小估计；几何拓扑中流形分类；广义相对论中闭合宇宙模型。",
    refs: { book: "Lee", ch: "Ch.10", sec: "§10.4" }
  },
  {
    id: "r52", label: "Gromov-Hausdorff收敛与极限空间", chapter: "ch10", layer: 3,
    desc: "Gromov-Hausdorff收敛是度量空间之间的收敛概念，曲率有界流形序列的极限空间分析是当代几何分析的前沿。",
    content: "Gromov-Hausdorff距离d_GH(X,Y)度量两个紧致度量空间之间的'形状差异'，定义为等距嵌入到同一度量空间后Hausdorff距离的下确界。Gromov紧致性定理：满足|K|≤1, diam≤D, vol≥v>0的n维黎曼流形集合在GH拓扑下紧致。极限空间可以是奇异空间（Alexandrov空间），具有推广的曲率条件。Fukaya的破裂理论（collapse theory）研究体积趋于零的序列，极限空间可以是低维的。Cheeger-Colding理论研究了Ricci曲率有下界序列的极限空间结构和正则性。",
    understanding: "Gromov-Hausdorff收敛就像'形状的极限'。想象一系列越来越细的环面（甜甜圈越来越薄），它们的极限是一条线段（一维）。或者想象一个球面被压扁，极限是一个圆盘。Gromov-Hausdorff收敛允许维数在极限中'崩塌'。Perelman证明Poincaré猜想时就用到了Gromov-Hausdorff收敛来分析Ricci流中的奇点。",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="60" rx="30" ry="20" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="45" y="95" font-size="8" fill="#dc2626">M₁</text><ellipse cx="120" cy="60" rx="25" ry="15" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="105" y="95" font-size="8" fill="#2563eb">M₂</text><line x1="60" y1="120" x2="170" y2="120" stroke="#7c3aed" stroke-width="2"/><text x="100" y="135" font-size="8" fill="#7c3aed">M_∞ (极限)</text><text x="30" y="160" font-size="8" fill="#dc2626">d_GH(M_i, M_∞) → 0</text></svg>`,
    examples: [
      { title: "环面崩塌", content: "平坦环面T²(R,r)（大半径R固定，小半径r→0）的GH极限是圆S¹(R)，维数从2崩塌到1。" },
      { title: "Perelman的W-functional", content: "Perelman引入W-泛函的单调性，可用于分析Ricci流的GH极限，证明Poincaré猜想时起了关键作用。" },
      { title: "Cheeger-Colding理论", content: "Ricci曲率有下界序列的GH极限空间具有'几乎处处'可微结构，是Lipschitz流形，推广了经典黎曼几何。" }
    ],
    theorems: [{ name: "Gromov紧致性定理", statement: "满足|K|≤1, diam≤D, vol≥v>0的n维黎曼流形在Gromov-Hausdorff拓扑下是紧致的。", proof: "Gromov的证明基于两个关键步骤。第一，在曲率有界和直径有界的条件下，利用Bishop-Gromov不等式可以构造覆盖流形的ε-网（ε-net），网的点数由n, D, v控制。第二，有了ε-网后，可以构造到R^N（N依赖于ε和n）的嵌入，距离由网的组合结构确定。所有满足条件的流形可以嵌入到同一个紧致度量空间中，由此得到GH紧致性。体积下界防止流形'崩塌'到低维。" }],
    applications: "Ricci流中奇点形成分析；Perelman的Poincaré猜想证明；大数据分析中的度量空间嵌入和降维。",
    refs: { book: "Lee", ch: "Ch.10", sec: "§10.5" }
  }
];

// ---- 知识点连接边 ----
const edges = [
  // Ch1 内部连接
  { source: "r1", target: "r2", label: "推广" },
  { source: "r1", target: "r3", label: "维度推广" },
  { source: "r3", target: "r4", label: "内蕴性" },
  { source: "r4", target: "r5", label: "全局化" },
  // Ch1 -> Ch2
  { source: "r3", target: "r6", label: "前提知识" },
  { source: "r4", target: "r6", label: "前提知识" },
  // Ch2 内部连接
  { source: "r6", target: "r7", label: "张量运算" },
  { source: "r6", target: "r8", label: "对称性" },
  { source: "r6", target: "r9", label: "诱导度量" },
  { source: "r6", target: "r10", label: "测度" },
  { source: "r6", target: "r11", label: "共形变换" },
  // Ch2 -> Ch3
  { source: "r6", target: "r12", label: "前提知识" },
  { source: "r8", target: "r15", label: "前提知识" },
  // Ch3 内部连接
  { source: "r12", target: "r13", label: "正曲率模型" },
  { source: "r12", target: "r14", label: "负曲率模型" },
  { source: "r13", target: "r15", label: "分类" },
  { source: "r14", target: "r15", label: "分类" },
  { source: "r8", target: "r16", label: "Lie群" },
  // Ch3 -> Ch4
  { source: "r12", target: "r17", label: "前提知识" },
  { source: "r6", target: "r18", label: "前提知识" },
  // Ch4 内部连接
  { source: "r17", target: "r18", label: "特殊化" },
  { source: "r18", target: "r19", label: "平行移动" },
  { source: "r18", target: "r20", label: "推广" },
  { source: "r17", target: "r21", label: "挠率" },
  { source: "r19", target: "r22", label: "和乐群" },
  // Ch4 -> Ch5
  { source: "r18", target: "r23", label: "前提知识" },
  { source: "r19", target: "r23", label: "前提知识" },
  // Ch5 内部连接
  { source: "r23", target: "r24", label: "指数映射" },
  { source: "r23", target: "r25", label: "距离" },
  { source: "r24", target: "r26", label: "割点" },
  { source: "r23", target: "r27", label: "变分原理" },
  // Ch5 -> Ch6
  { source: "r18", target: "r28", label: "前提知识" },
  { source: "r17", target: "r28", label: "前提知识" },
  // Ch6 内部连接
  { source: "r28", target: "r29", label: "截面" },
  { source: "r28", target: "r30", label: "缩并" },
  { source: "r28", target: "r31", label: "恒等式" },
  { source: "r28", target: "r32", label: "分解" },
  { source: "r28", target: "r33", label: "交换子" },
  { source: "r29", target: "r34", label: "拓扑" },
  { source: "r30", target: "r34", label: "拓扑" },
  // Ch6 -> Ch7
  { source: "r28", target: "r35", label: "前提知识" },
  { source: "r18", target: "r35", label: "前提知识" },
  // Ch7 内部连接
  { source: "r35", target: "r36", label: "Gauss方程" },
  { source: "r35", target: "r37", label: "Codazzi方程" },
  { source: "r35", target: "r38", label: "应用" },
  { source: "r36", target: "r39", label: "曲率控制" },
  // Ch7 -> Ch8
  { source: "r29", target: "r40", label: "前提知识" },
  { source: "r3", target: "r40", label: "前提知识" },
  // Ch8 内部连接
  { source: "r40", target: "r41", label: "全局化" },
  { source: "r41", target: "r42", label: "拓扑" },
  { source: "r41", target: "r43", label: "高维推广" },
  { source: "r5", target: "r41", label: "前提知识" },
  // Ch8 -> Ch9
  { source: "r23", target: "r44", label: "前提知识" },
  { source: "r28", target: "r44", label: "前提知识" },
  // Ch9 内部连接
  { source: "r44", target: "r45", label: "共轭点" },
  { source: "r44", target: "r46", label: "第二变分" },
  { source: "r46", target: "r47", label: "Morse理论" },
  { source: "r27", target: "r46", label: "前提知识" },
  // Ch9 -> Ch10
  { source: "r44", target: "r48", label: "前提知识" },
  { source: "r29", target: "r48", label: "前提知识" },
  // Ch10 内部连接
  { source: "r48", target: "r49", label: "推广" },
  { source: "r48", target: "r50", label: "体积比较" },
  { source: "r30", target: "r51", label: "前提知识" },
  { source: "r50", target: "r52", label: "极限空间" },
  { source: "r49", target: "r52", label: "极限空间" },
  // 跨章节综合连接
  { source: "r34", target: "r51", label: "综合应用" },
  { source: "r34", target: "r52", label: "综合应用" },
  { source: "r41", target: "r34", label: "拓扑约束" },
  { source: "r30", target: "r50", label: "前提知识" },
  { source: "r1", target: "r40", label: "前提知识" },
  { source: "r15", target: "r48", label: "模型空间" }
];

// ---- 测验题 (每章10道，共100道) ----
const quizzes = [
  // ======================== Ch1 (10道) ========================
  { q: "平面曲线曲率κ(s)的几何意义是什么？", options: ["曲线切向量的长度", "单位切向量沿曲线的旋转速率", "曲线的弧长参数", "曲线的挠率"], answer: 1, explanation: "曲率κ(s) = |γ''(s)|，度量单位切向量沿弧长方向的旋转速率，即曲线偏离直线的程度。", difficulty: "easy", chapter: "ch1" },
  { q: "二维球面S²的Gauss曲率是多少？", options: ["0", "1/R", "1/R²", "2/R²"], answer: 2, explanation: "半径为R的球面S²，主曲率均为1/R，Gauss曲率K = κ₁κ₂ = 1/R²。", difficulty: "easy", chapter: "ch1" },
  { q: "Gauss绝妙定理（Theorema Egregium）的核心内容是什么？", options: ["曲面总曲率等于4π", "Gauss曲率仅依赖于第一基本形式", "曲面可嵌入R³", "所有曲面都共形平坦"], answer: 1, explanation: "Gauss证明Gauss曲率K仅由第一基本形式（度量）及其导数决定，是曲面的内蕴不变量，不需要外围空间信息。", difficulty: "medium", chapter: "ch1" },
  { q: "Frenet-Serret方程中，dN/ds等于什么？", options: ["κT", "-κT + τB", "κN", "-τB"], answer: 1, explanation: "Frenet-Serret方程：dT/ds=κN, dN/ds=-κT+τB, dB/ds=-τN。", difficulty: "medium", chapter: "ch1" },
  { q: "圆柱面与平面等距，因此它们的Gauss曲率是什么关系？", options: ["圆柱面曲率更大", "平面曲率更大", "两者曲率相等（均为0）", "无法比较"], answer: 2, explanation: "等距映射保持所有内蕴几何量。圆柱面可在不拉伸的情况下展开为平面，故Gauss曲率均为零。", difficulty: "easy", chapter: "ch1" },
  { q: "环面上哪些区域的Gauss曲率为负？", options: ["外侧", "内侧", "顶部和底部圆周", "整个环面"], answer: 1, explanation: "环面外侧K>0（椭圆点），内侧K<0（双曲点），顶部和底部圆周K=0（抛物点）。", difficulty: "medium", chapter: "ch1" },
  { q: "闭曲面上Gauss曲率的积分等于什么？", options: ["4π", "2πχ(M)", "0", "曲面的面积"], answer: 1, explanation: "Gauss-Bonnet定理：∫_M K dA = 2πχ(M)，其中χ(M)是Euler示性数。", difficulty: "medium", chapter: "ch1" },
  { q: "空间曲线的挠率恒为零意味着什么？", options: ["曲线是直线", "曲线是平面曲线", "曲线是球面曲线", "曲线是测地线"], answer: 1, explanation: "挠率τ度量曲线偏离密切平面的程度。τ=0意味着曲线始终在同一平面内，即平面曲线。", difficulty: "easy", chapter: "ch1" },
  { q: "球面S²的Euler示性数χ(S²)是多少？", options: ["0", "1", "2", "4"], answer: 2, explanation: "球面亏格g=0，χ=2-2g=2。总曲率∫K dA = 2π×2 = 4π。", difficulty: "easy", chapter: "ch1" },
  { q: "以下哪种曲面Gauss曲率恒为零？", options: ["球面", "伪球面", "可展曲面（如圆柱面、锥面）", "环面"], answer: 2, explanation: "可展曲面可与平面等距（不拉伸地展开），因此内蕴曲率为零。球面K=1/R²>0，伪球面K=-1，环面K有正有负。", difficulty: "hard", chapter: "ch1" },

  // ======================== Ch2 (10道) ========================
  { q: "黎曼度量g_ij必须是哪种矩阵？", options: ["对称正定矩阵", "对称半正定矩阵", "任意对称矩阵", "反对称矩阵"], answer: 0, explanation: "黎曼度量是正定对称双线性型，在每点切空间上定义内积，因此g_ij是对称正定矩阵。", difficulty: "easy", chapter: "ch2" },
  { q: "黎曼体积形式dV_g在局部坐标下等于什么？", options: ["det(g) dx¹∧...∧dxⁿ", "√(det g) dx¹∧...∧dxⁿ", "tr(g) dx¹∧...∧dxⁿ", "g dx¹∧...∧dxⁿ"], answer: 1, explanation: "dV_g = √(det g) dx¹∧...∧dxⁿ，其中√(det g)是'拉伸因子'，描述坐标映射的面积/体积畸变。", difficulty: "easy", chapter: "ch2" },
  { q: "等距映射保持以下哪些量？", options: ["仅长度", "长度和角度", "长度、角度和曲率", "仅曲率"], answer: 2, explanation: "等距映射保持度量，因此保持所有内蕴几何量：长度、角度、面积、体积、曲率等。", difficulty: "easy", chapter: "ch2" },
  { q: "音乐同构（♭和♯）描述了什么？", options: ["切空间和余切空间之间的同构", "不同流形之间的同构", "度量张量的对称性", "联络的无挠性"], answer: 0, explanation: "黎曼度量建立了切空间TM与余切空间T*M之间的自然同构：♭降指标，♯升指标。", difficulty: "medium", chapter: "ch2" },
  { q: "Myers-Steenrod定理关于等距群的结论是什么？", options: ["等距群是无限维的", "等距群是有限维Lie群，维数≤n(n+1)/2", "等距群总是平凡的", "等距群维数等于流形维数"], answer: 1, explanation: "Myers-Steenrod定理：等距群是Lie变换群，维数≤n(n+1)/2。最大对称空间的等距群维数恰好达到此上界。", difficulty: "medium", chapter: "ch2" },
  { q: "共形变换h = e^(2f)g保持什么量不变？", options: ["长度", "面积", "角度", "曲率"], answer: 2, explanation: "共形变换保持角度不变（因为分子分母的缩放因子抵消），但长度、面积和曲率一般会改变。", difficulty: "medium", chapter: "ch2" },
  { q: "拉回度量F*h的定义是什么？", options: ["F*h = h", "F*h = h(F(x))", "(F*h)_p(v,w) = h_F(p)(dF_p(v), dF_p(w))", "F*h = F·h"], answer: 2, explanation: "拉回度量将外围空间N中度量h通过微分dF'拉回'到M上，定义M上的度量。", difficulty: "medium", chapter: "ch2" },
  { q: "二维黎曼流形上的等温坐标存在性意味着什么？", options: ["所有二维流形都是平坦的", "所有二维黎曼度量局部共形平坦", "二维流形没有曲率", "二维流形总是等距于R²"], answer: 1, explanation: "在二维，总存在局部坐标使度量形式为ds²=e^(2λ)(dx²+dy²)，即局部共形平坦。", difficulty: "hard", chapter: "ch2" },
  { q: "梯度grad f与微分df的关系是什么？", options: ["grad f = df", "(grad f)^i = g^ij ∂_j f", "grad f = -df", "grad f = f·g"], answer: 1, explanation: "梯度是微分通过度量升指标得到的向量场：(grad f)^i = g^ij ∂_j f。", difficulty: "medium", chapter: "ch2" },
  { q: "紧致Lie群上总存在双不变度量的原因是什么？", options: ["Lie群总是平坦的", "通过平均化构造", "Lie群维数有限", "Lie群总是对称的"], answer: 1, explanation: "紧致Lie群上可通过在群上对任意左不变度量取平均（积分）来构造不变的双不变度量。", difficulty: "hard", chapter: "ch2" },

  // ======================== Ch3 (10道) ========================
  { q: "欧氏空间Rⁿ的截面曲率是多少？", options: ["1", "0", "-1", "依赖于坐标"], answer: 1, explanation: "欧氏空间是平坦的，Christoffel符号全为零，曲率张量恒为零，因此截面曲率恒为0。", difficulty: "easy", chapter: "ch3" },
  { q: "球面Sⁿ(R)的截面曲率是多少？", options: ["1/R", "1/R²", "R", "R²"], answer: 1, explanation: "半径为R的球面Sⁿ(R)是常截面曲率空间，K=1/R²。", difficulty: "easy", chapter: "ch3" },
  { q: "双曲空间Hⁿ的截面曲率是多少？", options: ["1", "0", "-1", "不确定"], answer: 2, explanation: "标准双曲空间Hⁿ的截面曲率恒为-1（可通过缩放改变绝对值，但符号恒为负）。", difficulty: "easy", chapter: "ch3" },
  { q: "Poincaré圆盘模型中的'直线'对应什么？", options: ["欧氏直线段", "与边界垂直的圆弧", "任意曲线", "抛物线"], answer: 1, explanation: "在Poincaré圆盘模型中，双曲直线是正交于单位圆边界的圆弧（包括直径）。", difficulty: "medium", chapter: "ch3" },
  { q: "Killing-Hopf定理的内容是什么？", options: ["所有流形都有等距群", "完备单连通常曲率空间只有三种", "曲率决定了拓扑", "等距群总是紧致的"], answer: 1, explanation: "Killing-Hopf定理：完备单连通常曲率黎曼流形等距于球面、欧氏空间或双曲空间（差缩放）。", difficulty: "medium", chapter: "ch3" },
  { q: "球面S²上三角形的内角和与什么有关？", options: ["三角形的边长", "三角形的面积（曲率积分）", "三角形的位置", "三角形的形状"], answer: 1, explanation: "球面三角形内角和=π+∫K dA=π+面积/R²。面积越大，内角和越大，可达3π。", difficulty: "medium", chapter: "ch3" },
  { q: "紧致Lie群上双不变度量的截面曲率有什么性质？", options: ["恒为负", "恒为正", "非负", "恒为零"], answer: 2, explanation: "紧致Lie群配备双不变度量，截面曲率K(X,Y)=|[X,Y]|²/4≥0，非负。", difficulty: "hard", chapter: "ch3" },
  { q: "双曲平面上圆的周长随半径如何增长？", options: ["线性增长", "多项式增长", "指数增长", "有界"], answer: 2, explanation: "双曲平面中半径为r的圆的周长=2π sinh(r)≈πe^r，指数增长，远快于欧氏平面的2πr。", difficulty: "medium", chapter: "ch3" },
  { q: "球面S³与哪个Lie群微分同胚？", options: ["SO(3)", "SU(2)", "SL(2,R)", "U(1)"], answer: 1, explanation: "S³与SU(2)微分同胚。SU(2)作为Lie群配备双不变度量，等距于单位球面S³。", difficulty: "hard", chapter: "ch3" },
  { q: "常曲率流形（空间形式）的构造方式是什么？", options: ["直接定义度量", "模型空间模去离散等距子群", "任意黎曼流形", "乘积流形"], answer: 1, explanation: "常曲率流形（空间形式）是模型空间（Sⁿ, Rⁿ, Hⁿ）模去一个作用自由且常态的离散等距子群的商空间。", difficulty: "hard", chapter: "ch3" },

  // ======================== Ch4 (10道) ========================
  { q: "Levi-Civita联络由哪两个条件唯一确定？", options: ["无挠性和平坦性", "无挠性和度量相容性", "度量相容性和平坦性", "对称性和正定性"], answer: 1, explanation: "黎曼几何基本定理：存在唯一的无挠性（T=0）和度量相容性（∇g=0）的联络，即Levi-Civita联络。", difficulty: "easy", chapter: "ch4" },
  { q: "Christoffel符号Γ^k_ij的表达式是什么？", options: ["∂_i g_jk", "g^kl(∂_i g_jl + ∂_j g_il - ∂_l g_ij)/2", "g_ij ∂_k g", "∂_i ∂_j g_kl"], answer: 1, explanation: "Γ^k_ij = (1/2)g^kl(∂_i g_jl + ∂_j g_il - ∂_l g_ij)，完全由度量及其一阶导数决定。", difficulty: "easy", chapter: "ch4" },
  { q: "平行移动保持什么量不变（对于Levi-Civita联络）？", options: ["仅向量的长度", "向量的长度和夹角", "仅向量的方向", "向量的坐标分量"], answer: 1, explanation: "Levi-Civita联络的度量相容性保证平行移动是等距同构，保持向量长度和两向量夹角。", difficulty: "easy", chapter: "ch4" },
  { q: "挠率张量T(X,Y)的定义是什么？", options: ["∇_X Y + ∇_Y X", "∇_X Y - ∇_Y X - [X,Y]", "∇_X Y - ∇_Y X", "∇_X Y + ∇_Y X + [X,Y]"], answer: 1, explanation: "挠率张量定义为T(X,Y)=∇_X Y - ∇_Y X - [X,Y]。Levi-Civita联络的挠率恒为零。", difficulty: "medium", chapter: "ch4" },
  { q: "协变导数∇_X对函数f的作用是什么？", options: ["∇_X f = 0", "∇_X f = Xf（方向导数）", "∇_X f = f·X", "∇_X f = df"], answer: 1, explanation: "对函数（标量场），协变导数退化为普通方向导数：∇_X f = Xf = df(X)。", difficulty: "medium", chapter: "ch4" },
  { q: "Foucault摆的摆动平面旋转与什么几何概念相关？", options: ["测地线", "平行移动", "曲率", "指数映射"], answer: 1, explanation: "Foucault摆的摆动平面旋转是平行移动的物理体现：地球自转使摆沿球面平行移动，产生和乐旋转。", difficulty: "medium", chapter: "ch4" },
  { q: "Berger分类定理中，不可约非对称黎曼流形的和乐群有几种？", options: ["5种", "7种", "9种", "无穷多种"], answer: 1, explanation: "Berger分类给出了7种可能：SO(n), U(n), SU(n), Sp(n)·Sp(1), Sp(n), G₂, Spin(7)。", difficulty: "hard", chapter: "ch4" },
  { q: "Killing向量场满足什么方程？", options: ["∇_i X_j = 0", "∇_i X_j + ∇_j X_i = 0", "∇_i X_j - ∇_j X_i = 0", "X_i X_j = 0"], answer: 1, explanation: "Killing向量场满足Killing方程：∇_i X_j + ∇_j X_i = 0，生成流形的等距变换。", difficulty: "medium", chapter: "ch4" },
  { q: "de Rham分解定理与什么概念相关？", options: ["曲率张量", "和乐群的可约性", "测地线", "指数映射"], answer: 1, explanation: "de Rham分解定理：若和乐群可约，则流形局部等距于黎曼乘积。和乐群的可约性对应流形的分解。", difficulty: "hard", chapter: "ch4" },
  { q: "在欧氏空间Rⁿ中，平行移动与路径的关系是什么？", options: ["与路径有关", "与路径无关", "仅在闭曲线上有关", "仅在测地线上有关"], answer: 1, explanation: "欧氏空间曲率为零，平行移动与路径无关（和乐群平凡），这是平坦空间的特性。", difficulty: "easy", chapter: "ch4" },

  // ======================== Ch5 (10道) ========================
  { q: "测地线方程在局部坐标下是什么形式？", options: ["dx^k/dt = 0", "d²x^k/dt² + Γ^k_ij dx^i/dt dx^j/dt = 0", "dx^k/dt + Γ^k_ij x^i x^j = 0", "d²x^k/dt² = 0"], answer: 1, explanation: "测地线方程为d²x^k/dt² + Γ^k_ij (dx^i/dt)(dx^j/dt) = 0，是二阶非线性ODE。", difficulty: "easy", chapter: "ch5" },
  { q: "指数映射exp_p的定义是什么？", options: ["exp_p(v) = p + v", "exp_p(v) = γ_v(1)，其中γ_v是测地线", "exp_p(v) = p·v", "exp_p(v) = ∇_v p"], answer: 1, explanation: "exp_p(v) = γ_v(1)，即从p以速度v出发的测地线在t=1时刻到达的点。", difficulty: "easy", chapter: "ch5" },
  { q: "Hopf-Rinow定理中，以下哪项不是完备性的等价条件？", options: ["作为度量空间完备", "任意两点可由最短测地线连接", "截面曲率有界", "有界闭集紧致"], answer: 2, explanation: "Hopf-Rinow定理等价条件：(1)度量完备；(2)测地完备；(3)两点可由最短测地线连接；(4)有界闭集紧致。曲率有界不在其中。", difficulty: "medium", chapter: "ch5" },
  { q: "球面S²上，北极的割迹是什么？", options: ["赤道", "整个球面", "南极（单点）", "所有经线"], answer: 2, explanation: "球面上任意点p的割迹是对径点{-p}。从p出发沿大圆走，在到达-p之前是最短的。", difficulty: "medium", chapter: "ch5" },
  { q: "Gauss引理的内容是什么？", options: ["测地线总是最短的", "exp_p保持径向和切向正交性", "所有测地线最终相交", "距离函数是光滑的"], answer: 1, explanation: "Gauss引理：指数映射的微分保持径向与切向正交性，这是测地线极坐标表示的基础。", difficulty: "medium", chapter: "ch5" },
  { q: "能量泛函E(γ)和长度泛函L(γ)的关系是什么？", options: ["E = L", "E = L²/2 (对弧长参数)", "E = √L", "E = 1/L"], answer: 1, explanation: "对弧长参数化曲线，L(γ) = ∫√(g(γ',γ'))dt，E(γ) = (1/2)∫g(γ',γ')dt。由Cauchy-Schwarz，L² ≤ 2E(b-a)。", difficulty: "medium", chapter: "ch5" },
  { q: "以下哪个流形是完备的？", options: ["R²去掉原点", "单位开圆盘", "紧致无边流形", "上半空间去掉边界"], answer: 2, explanation: "紧致无边黎曼流形自动完备。R²去掉原点不完备（Cauchy列不收敛），开圆盘和上半空间去边界也不完备。", difficulty: "easy", chapter: "ch5" },
  { q: "割点与共轭点的关系是什么？", options: ["割点总是在共轭点之后", "割点总是在共轭点之前或同时", "二者无关", "割点就是共轭点"], answer: 1, explanation: "第一个割点要么是共轭点，要么存在另一条等长测地线。割点出现在共轭点之前或与之同时。", difficulty: "hard", chapter: "ch5" },
  { q: "第一变分公式δL(γ)[V] = 0给出什么条件？", options: ["γ是直线", "γ是测地线", "γ是最短路径", "γ是闭曲线"], answer: 1, explanation: "第一变分公式δL(γ)[V] = -∫⟨∇_γ'γ', V⟩ dt = 0对所有V成立，等价于∇_γ'γ'=0，即γ是测地线。", difficulty: "medium", chapter: "ch5" },
  { q: "在法坐标下，原点处的度量有什么性质？", options: ["g_ij = δ_ij, ∂_k g_ij = 0", "g_ij = 0", "g_ij = -δ_ij", "g_ij = δ_ij但∂_k g_ij ≠ 0"], answer: 0, explanation: "在法坐标下，原点处g_ij(0)=δ_ij且∂_k g_ij(0)=0，因此Christoffel符号在原点为零。", difficulty: "hard", chapter: "ch5" },

  // ======================== Ch6 (10道) ========================
  { q: "黎曼曲率张量R(X,Y)Z的定义是什么？", options: ["∇_X ∇_Y Z", "∇_X∇_Y Z - ∇_Y∇_X Z", "∇_X∇_Y Z - ∇_Y∇_X Z - ∇_[X,Y]Z", "∇_X Y - ∇_Y X"], answer: 2, explanation: "R(X,Y)Z = ∇_X∇_Y Z - ∇_Y∇_X Z - ∇_[X,Y]Z。交换子项∇_[X,Y]Z确保曲率张量是张量（C^∞-多线性）。", difficulty: "easy", chapter: "ch6" },
  { q: "截面曲率K(σ)的公式是什么？", options: ["K = ⟨R(u,v)u,v⟩", "K = ⟨R(u,v)v,u⟩/(|u|²|v|²-⟨u,v⟩²)", "K = R_ijkl", "K = tr(R)"], answer: 1, explanation: "K(σ) = ⟨R(u,v)v,u⟩/(|u|²|v|²-⟨u,v⟩²)，不依赖于σ的基{u,v}的选取。", difficulty: "easy", chapter: "ch6" },
  { q: "Ricci曲率是如何定义的？", options: ["曲率张量的所有分量之和", "R_ij = R^k_ikj（缩并）", "R = g^ij R_ij", "R_ijkl的平方和"], answer: 1, explanation: "Ricci曲率R_ij = R^k_ikj，是曲率张量在第一和第三指标的缩并得到的对称(0,2)-张量。", difficulty: "easy", chapter: "ch6" },
  { q: "第二Bianchi恒等式缩并后得到什么？", options: ["R = 0", "∇^j R_ij = (1/2)∇_i S", "∇_i R = 0", "R_ijkl = 0"], answer: 1, explanation: "缩并第二Bianchi恒等式得∇^j R_ij = (1/2)∇_i S，等价于Einstein张量G_ij满足∇^j G_ij = 0。", difficulty: "medium", chapter: "ch6" },
  { q: "Weyl张量W在什么变换下是不变量？", options: ["等距变换", "共形变换", "微分同胚", "平行移动"], answer: 1, explanation: "Weyl张量是共形不变量：在共形变换g'=e^(2f)g下，W'=e^(2f)W。W=0是度量共形平坦的充要条件（n≥4）。", difficulty: "medium", chapter: "ch6" },
  { q: "Einstein流形满足什么条件？", options: ["R_ijkl = 0", "R_ij = λg_ij", "R = 0", "K = 常数"], answer: 1, explanation: "Einstein流形满足Ricci曲率与度量成比例：Ric = λg。真空Einstein场方程Ric=0（λ=0）是其特例。", difficulty: "medium", chapter: "ch6" },
  { q: "Ricci恒等式[∇_i,∇_j]X^k等于什么？", options: ["0", "R^k_lij X^l", "R_ij X^k", "∂_i X^k - ∂_j X^k"], answer: 1, explanation: "Ricci恒等式：∇_i∇_j X^k - ∇_j∇_i X^k = R^k_lij X^l。协变导数交换子由曲率张量给出。", difficulty: "medium", chapter: "ch6" },
  { q: "Bonnet-Myers定理的结论是什么？", options: ["流形是平坦的", "Ric≥(n-1)/R²·g时，直径≤πR且π₁有限", "流形一定同胚于球面", "截面曲率恒为常数"], answer: 1, explanation: "Bonnet-Myers定理：若Ric≥(n-1)/R²·g，则diam(M)≤πR且π₁(M)有限。", difficulty: "medium", chapter: "ch6" },
  { q: "Schur引理的内容是什么？", options: ["截面曲率总是常数", "若截面曲率仅依赖于点而不依赖于方向（n≥3），则曲率是常数", "所有流形都是常曲率的", "截面曲率与Ricci曲率相等"], answer: 1, explanation: "Schur引理：若连通流形(n≥3)上每点截面曲率在所有方向都相同，则截面曲率在整个流形上是常数。", difficulty: "hard", chapter: "ch6" },
  { q: "Bochner公式中，(1/2)Δ|∇f|²等于什么？", options: ["|∇f|²", "|∇²f|² + ⟨∇f,∇Δf⟩ + Ric(∇f,∇f)", "Δf", "0"], answer: 1, explanation: "Bochner公式：(1/2)Δ|∇f|² = |∇²f|² + ⟨∇f,∇Δf⟩ + Ric(∇f,∇f)，是Bochner技巧的核心。", difficulty: "hard", chapter: "ch6" },

  // ======================== Ch7 (10道) ========================
  { q: "第二基本形式II(X,Y)的值在哪个空间中？", options: ["切空间", "法空间", "整个外围空间", "余切空间"], answer: 1, explanation: "II(X,Y) = (∇^N_X Y)^⊥ 是N中协变导数在法空间上的投影，取值于法丛。", difficulty: "easy", chapter: "ch7" },
  { q: "Gauss公式将N中联络分解为什么？", options: ["∇^N = ∇^M", "∇^N_X Y = ∇^M_X Y + II(X,Y)", "∇^N = ∇^M + R", "∇^N = R + II"], answer: 1, explanation: "Gauss公式：∇^N_X Y = ∇^M_X Y + II(X,Y)，将N中联络分解为切向分量（M中联络）和法向分量（第二基本形式）。", difficulty: "medium", chapter: "ch7" },
  { q: "Gauss方程将什么量联系起来？", options: ["仅第一基本形式", "子流形曲率、外围曲率和第二基本形式", "仅第二基本形式", "仅外围曲率"], answer: 1, explanation: "Gauss方程：R^M = R^N + II∧II，将子流形内蕴曲率与外围空间曲率和第二基本形式联系起来。", difficulty: "medium", chapter: "ch7" },
  { q: "极小曲面满足什么条件？", options: ["Gauss曲率为零", "平均曲率H=0", "第二基本形式为零", "法曲率为零"], answer: 1, explanation: "极小曲面是面积泛函的临界点，满足平均曲率H=0。δArea = -∫⟨H,V⟩ dV = 0。", difficulty: "easy", chapter: "ch7" },
  { q: "Alexandrov定理关于CMC曲面的结论是什么？", options: ["存在无穷多紧致CMC曲面", "R³中唯一紧致无边CMC曲面是球面", "所有CMC曲面都是极小曲面", "CMC曲面必为平坦"], answer: 1, explanation: "Alexandrov定理：R³中唯一紧致无边常平均曲率（CMC）曲面是球面。这是刚性定理。", difficulty: "medium", chapter: "ch7" },
  { q: "Codazzi方程表达了什么对称性？", options: ["度量张量的对称性", "第二基本形式协变导数的对称性", "曲率张量的对称性", "联络的对称性"], answer: 1, explanation: "Codazzi方程：(∇_X II)(Y,Z) = (∇_Y II)(X,Z)，即第二基本形式协变导数的对称性。", difficulty: "medium", chapter: "ch7" },
  { q: "全测地子流形满足什么条件？", options: ["H=0", "II=0（第二基本形式恒为零）", "K=0", "R=0"], answer: 1, explanation: "全测地子流形第二基本形式恒为零（II=0），意味着子流形中测地线也是外围空间中的测地线。", difficulty: "medium", chapter: "ch7" },
  { q: "R³中曲面的Gauss曲率通过Gauss方程如何表达？", options: ["K = H", "K = (LN-M²)/(EG-F²)", "K = L+N", "K = E+G"], answer: 1, explanation: "Gauss绝妙定理：K = det(II)/det(I) = (LN-M²)/(EG-F²)，仅依赖于第一基本形式。", difficulty: "medium", chapter: "ch7" },
  { q: "Sⁿ中极小子流形满足什么方程？", options: ["Δx = 0", "Δx = -nx", "Δx = nx", "Δx = x"], answer: 1, explanation: "Sⁿ中极小子流形满足Δx = -nx（x是位置向量），这是Simons研究极小子流形刚性定理的出发点。", difficulty: "hard", chapter: "ch7" },
  { q: "Gauss-Codazzi方程在子流形理论中的角色是什么？", options: ["仅用于计算", "子流形存在性的可积性条件", "没有实际用途", "仅用于二维曲面"], answer: 1, explanation: "Gauss-Codazzi方程是子流形存在性的可积性条件：给定满足这些方程的度量和第二基本形式，存在局部浸入实现它们。", difficulty: "hard", chapter: "ch7" },

  // ======================== Ch8 (10道) ========================
  { q: "局部Gauss-Bonnet定理中，测地三角形满足什么关系？", options: ["∫K dA = π", "∫K dA = α₁+α₂+α₃ - π", "∫K dA = 0", "∫K dA = 2π"], answer: 1, explanation: "对于测地三角形（边界κ_g=0），∫_Ω K dA = α₁+α₂+α₃ - π。", difficulty: "easy", chapter: "ch8" },
  { q: "全局Gauss-Bonnet定理：∫_M K dA等于什么？", options: ["4π", "2πχ(M)", "0", "πχ(M)"], answer: 1, explanation: "全局Gauss-Bonnet定理：∫_M K dA = 2πχ(M)。对于闭定向二维流形。", difficulty: "easy", chapter: "ch8" },
  { q: "亏格为g的紧致定向曲面的Euler示性数是多少？", options: ["g", "2g", "2-2g", "g-1"], answer: 2, explanation: "χ(M) = 2 - 2g。球面g=0, χ=2；环面g=1, χ=0；双环面g=2, χ=-2。", difficulty: "easy", chapter: "ch8" },
  { q: "环面T²的总Gauss曲率是多少？", options: ["4π", "2π", "0", "-4π"], answer: 2, explanation: "环面χ=0，∫K dA = 2π×0 = 0。外侧正曲率与内侧负曲率恰好抵消。", difficulty: "easy", chapter: "ch8" },
  { q: "Chern-Gauss-Bonnet定理适用于什么维数的流形？", options: ["任意维数", "仅二维", "偶维", "奇维"], answer: 2, explanation: "Chern-Gauss-Bonnet定理适用于紧致可定向偶维黎曼流形：∫_M Pf(Ω) = (2π)^n χ(M)。", difficulty: "medium", chapter: "ch8" },
  { q: "Euler示性数χ通过三角剖分如何计算？", options: ["χ = V + E + F", "χ = V - E + F", "χ = V + E - F", "χ = E - V - F"], answer: 1, explanation: "χ = V - E + F（顶点数-边数+面数），与剖分方式无关。", difficulty: "easy", chapter: "ch8" },
  { q: "测地曲率κ_g度量什么？", options: ["曲线在空间中的弯曲", "曲线在曲面内偏离测地线的程度", "曲面的Gauss曲率", "曲线的挠率"], answer: 1, explanation: "测地曲率κ_g度量曲线在曲面内偏离测地线的程度。测地线的κ_g=0。", difficulty: "medium", chapter: "ch8" },
  { q: "亏格g=2的闭曲面总Gauss曲率是多少？", options: ["4π", "2π", "0", "-4π"], answer: 3, explanation: "χ=2-2×2=-2，∫K dA = 2π×(-2) = -4π。负总曲率是亏格≥2曲面的特征。", difficulty: "medium", chapter: "ch8" },
  { q: "二维Gauss-Bonnet定理中，带边曲面的公式是什么？", options: ["∫K dA = 2πχ(M)", "∫K dA + ∫κ_g ds = 2πχ(M)", "∫κ_g ds = 2πχ(M)", "∫K dA = 0"], answer: 1, explanation: "带边曲面：∫_M K dA + ∫_∂M κ_g ds = 2πχ(M)。边界贡献∫κ_g ds是必须的。", difficulty: "medium", chapter: "ch8" },
  { q: "Chern-Gauss-Bonnet定理中，Pfaffian Pf(Ω)在二维退化为什么？", options: ["K dA", "K/(2π) dA", "K dA/(4π)", "R dA"], answer: 1, explanation: "二维时Pf(Ω) = K/(2π)·dA，∫_M K/(2π) dA = χ(M)，即∫K dA = 2πχ(M)。", difficulty: "hard", chapter: "ch8" },

  // ======================== Ch9 (10道) ========================
  { q: "Jacobi方程是什么？", options: ["J'' = 0", "∇_γ'∇_γ' J + R(J,γ')γ' = 0", "∇_γ' J = 0", "J' + R J = 0"], answer: 1, explanation: "Jacobi方程：∇_γ'∇_γ' J + R(J,γ')γ' = 0，描述沿测地线的无穷小变分。", difficulty: "easy", chapter: "ch9" },
  { q: "球面Sⁿ(1)上法Jacobi场的方程是什么？", options: ["J'' = 0", "J'' + J = 0", "J'' - J = 0", "J'' + 2J = 0"], answer: 1, explanation: "Sⁿ(1)上R(J,γ')γ' = J，法Jacobi方程简化为J''+J=0，解为三角振荡。", difficulty: "medium", chapter: "ch9" },
  { q: "共轭点的定义是什么？", options: ["测地线长度最小的点", "存在非零Jacobi场在两端为零的点", "测地线最长的点", "割迹上的点"], answer: 1, explanation: "q=γ(b)是p=γ(a)的共轭点，如果存在非零Jacobi场J满足J(a)=J(b)=0。", difficulty: "easy", chapter: "ch9" },
  { q: "欧氏空间Rⁿ中有共轭点吗？", options: ["有，且很多", "没有", "仅在原点上", "仅在无穷远处"], answer: 1, explanation: "Rⁿ中曲率为零，Jacobi场J(t)=J(0)+tJ'(0)只在t=0时为零，不存在共轭点。", difficulty: "easy", chapter: "ch9" },
  { q: "第二变分公式δ²E(V,V)的表达式是什么？", options: ["∫|V|² dt", "∫(|∇V|² - ⟨R(V,γ')γ',V⟩) dt", "∫⟨V,V⟩ dt", "∫|∇V|² dt"], answer: 1, explanation: "δ²E(V,V) = ∫(|∇_γ'V|² - ⟨R(V,γ')γ',V⟩) dt。曲率项使第二变分可能为负。", difficulty: "medium", chapter: "ch9" },
  { q: "Morse指标定理给出了什么关系？", options: ["Morse指标 = 流形维数", "Morse指标 = 共轭点个数（计重数）", "Morse指标 = 曲率", "Morse指标 = 长度"], answer: 1, explanation: "Morse指标定理：能量泛函在测地线上的Morse指标等于沿测地线的共轭点个数（计重数）。", difficulty: "medium", chapter: "ch9" },
  { q: "双曲空间Hⁿ(-1)上法Jacobi场的解是什么形式？", options: ["三角振荡", "线性增长", "指数增长（双曲函数）", "常数"], answer: 2, explanation: "Hⁿ(-1)上J''-J=0，解为J(t)=sinh(t)·A+cosh(t)·B，指数增长。", difficulty: "medium", chapter: "ch9" },
  { q: "共轭点与割点的关系是什么？", options: ["它们完全相同", "割点总是在共轭点之后", "第一个割点不晚于第一个共轭点", "二者无关"], answer: 2, explanation: "第一个割点要么是共轭点，要么出现在共轭点之前（有另一条等长测地线）。", difficulty: "hard", chapter: "ch9" },
  { q: "Lyusternik-Fet定理的结论是什么？", options: ["任何流形上都有测地线", "任何紧致流形上存在闭测地线", "测地线总是最短的", "测地线是唯一的"], answer: 1, explanation: "Lyusternik-Fet定理：任何紧致流形上存在闭测地线。这是Morse理论的关键应用。", difficulty: "hard", chapter: "ch9" },
  { q: "Jacobi场沿测地线γ的维数是多少？", options: ["n", "2n", "n(n+1)/2", "n²"], answer: 1, explanation: "Jacobi场由初始位置J(0)（n维）和初始速度J'(0)（n维）唯一确定，总维数为2n。", difficulty: "medium", chapter: "ch9" },

  // ======================== Ch10 (10道) ========================
  { q: "Rauch比较定理比较的是什么？", options: ["两个流形的体积", "两个流形中Jacobi场的模长", "两个流形的直径", "两个流形的曲率"], answer: 1, explanation: "Rauch定理：若K_M ≥ K_M~，则沿等长测地线相同初始条件的Jacobi场满足|J(t)| ≤ |J~(t)|。", difficulty: "easy", chapter: "ch10" },
  { q: "Bishop-Gromov体积比较定理的结论是什么？", options: ["Vol(B(p,r)) ≥ V_c(r)", "Vol(B(p,r)) ≤ V_c(r)", "Vol(B(p,r)) = V_c(r)", "Vol(B(p,r))与V_c(r)无关"], answer: 1, explanation: "若Ric≥(n-1)c·g，则Vol(B(p,r)) ≤ V_c(r)，且比值Vol(B(p,r))/V_c(r)单调非增。", difficulty: "easy", chapter: "ch10" },
  { q: "Toponogov定理比较的是什么？", options: ["两个流形的曲率", "测地三角形的边长和角度", "两个流形的体积", "测地线的长度"], answer: 1, explanation: "Toponogov定理：若K≥c，则测地三角形各角不小于常曲率c空间中同边长三角形的对应角。", difficulty: "medium", chapter: "ch10" },
  { q: "Bonnet-Myers定理中，若Ric≥(n-1)/R²·g，直径的上界是多少？", options: ["R", "πR", "2πR", "πR/2"], answer: 1, explanation: "Bonnet-Myers定理：diam(M) ≤ πR。球面Sⁿ(R)达到此上界，是刚性情形。", difficulty: "easy", chapter: "ch10" },
  { q: "Gromov紧致性定理要求哪些条件？", options: ["仅曲率有界", "截面曲率有界、直径有界、体积有下界", "仅直径有界", "仅体积有下界"], answer: 1, explanation: "Gromov紧致性定理：|K|≤1, diam≤D, vol≥v>0的n维流形集合在GH拓扑下紧致。", difficulty: "medium", chapter: "ch10" },
  { q: "Rauch定理中，正曲率对Jacobi场有什么影响？", options: ["使Jacobi场增长更快", "使Jacobi场增长变慢（或振荡）", "无影响", "使Jacobi场消失"], answer: 1, explanation: "正曲率使Jacobi场增长变慢或振荡，负曲率使Jacobi场指数增长。曲率像'弹簧'。", difficulty: "medium", chapter: "ch10" },
  { q: "Gromov-Hausdorff距离度量什么？", options: ["两个黎曼流形的曲率差异", "两个度量空间之间的'形状差异'", "两个流形的体积差异", "两个流形的直径差异"], answer: 1, explanation: "d_GH(X,Y)度量两个紧致度量空间之间的形状差异，定义为等距嵌入到同一空间后Hausdorff距离的下确界。", difficulty: "medium", chapter: "ch10" },
  { q: "Cheeger-Gromoll分裂定理的条件和结论是什么？", options: ["Ric≥0且存在直线→M=R×N", "Ric≤0→M是紧致的", "K≥0→M是球面", "Ric=0→M是平坦的"], answer: 0, explanation: "Cheeger-Gromoll分裂定理：若完备非紧致流形Ric≥0且包含一条直线，则等距于乘积R×N。", difficulty: "hard", chapter: "ch10" },
  { q: "Cartan-Hadamard定理适用于什么曲率条件？", options: ["截面曲率≥0", "截面曲率≤0", "Ricci曲率≥0", "标量曲率≤0"], answer: 1, explanation: "Cartan-Hadamard定理：若完备单连通流形截面曲率≤0，则微分同胚于Rⁿ。", difficulty: "medium", chapter: "ch10" },
  { q: "Perelman证明Poincaré猜想时使用了什么工具？", options: ["仅Gauss-Bonnet定理", "Ricci流和Gromov-Hausdorff收敛", "仅Toponogov定理", "仅Rauch定理"], answer: 1, explanation: "Perelman使用Ricci流（带手术的）和Gromov-Hausdorff收敛分析奇点形成，证明了Poincaré猜想和Thurston几何化猜想。", difficulty: "hard", chapter: "ch10" }
];

// ---- 导出模块 ----
module.exports = { chapters, nodes, edges, quizzes };