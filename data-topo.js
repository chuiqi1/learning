module.exports = {
  chapters: [
    { id: "ch1", title: "基本群与覆叠空间", en: "Fundamental Group and Covering Spaces", desc: "引入同伦、基本群、覆叠空间等核心概念，建立代数拓扑的基本语言。" },
    { id: "ch2", title: "同调论", en: "Homology", desc: "通过单纯形、链复形和正合序列研究空间的同调不变量，是可计算性最强的代数拓扑工具。" },
    { id: "ch3", title: "上同调论", en: "Cohomology", desc: "在同调的对偶视角下引入上链复形、Cup积和上同调环，揭示更丰富的代数结构。" },
    { id: "ch4", title: "同伦群", en: "Homotopy Groups", desc: "推广基本群到高维，引入高阶同伦群、纤维化以及Whitehead和Hurewicz定理。" }
  ],

  nodes: [
    // ==================== Ch1: 基本群与覆叠空间 ====================
    {
      id: "t1", label: "同伦与同伦等价", chapter: "ch1", layer: 0,
      desc: "连续映射之间的连续变形关系，是代数拓扑中最基本的等价概念。",
      content: "设 X, Y 为拓扑空间，f, g: X→Y 为连续映射。若存在连续映射 H: X×[0,1]→Y 使得 H(x,0)=f(x) 且 H(x,1)=g(x)，则称 f 与 g 同伦，记作 f ≃ g。空间 X 与 Y 同伦等价是指存在映射 f: X→Y 和 g: Y→X 使得 g∘f ≃ id_X 且 f∘g ≃ id_Y。同伦等价比同胚更弱，允许'压缩'维度，因此可缩空间（如 R^n）同伦等价于点。同伦等价保持基本群、同调群等所有代数拓扑不变量，是代数拓扑分类空间的基本等价关系。",
      understanding: "同伦可以想象为橡皮泥变形：如果两个映射可以通过连续变形互相转换，它们就是同伦的。同伦等价更进一步：两个空间如果能通过'捏扁'或'拉伸'（不撕裂）互相转化，就视为拓扑上'一样'。比如实心球可以捏成一点，所以它同伦等价于点；但圆圈不能捏成一点（因为中间有个洞），所以它与点不同伦等价。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><marker id="ar1" markerWidth="6" markerHeight="6" refX="5" refY="3"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs><rect width="200" height="200" fill="#fafafa"/><circle cx="60" cy="70" r="25" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="140" cy="70" r="25" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M60,95 C60,120 140,120 140,95" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/><line x1="90" y1="70" x2="110" y2="70" stroke="#333" stroke-width="2" marker-end="url(#ar1)"/><text x="55" y="60" font-size="10" fill="#2563eb">f</text><text x="150" y="60" font-size="10" fill="#2563eb">g</text><text x="75" y="110" font-size="10" fill="#dc2626">H(t)</text><text x="60" y="155" font-size="12" fill="#333" font-weight="bold">同伦 H: X×I→Y</text><text x="45" y="175" font-size="10" fill="#666">H(x,0)=f, H(x,1)=g</text></svg>',
      examples: [
        { title: "R^n 的可缩性", content: "恒等映射 id: R^n→R^n 与常值映射 c₀(x)=0 同伦，同伦为 H(x,t)=(1-t)x。因此 R^n 同伦等价于点。" },
        { title: "S^1 与 R²\\{0}", content: "S^1 与穿孔平面 R²\\{0} 同伦等价：径向投影 r(x)=x/|x| 与包含映射 i: S^1→R²\\{0} 互为同伦逆。" },
        { title: "Möbius 带与 S^1", content: "Möbius 带沿中心线形变收缩到 S^1，两者同伦等价，但不同胚（Möbius 带是带边流形）。" }
      ],
      theorems: [
        { name: "同伦是等价关系", statement: "连续映射间的同伦关系是等价关系（自反、对称、传递）。", proof: "自反性取H(x,t)=f(x)；对称性利用H(x,1-t)逆转同伦；传递性将两个同伦各加速一倍拼接。核心是利用[0,1]区间的重参数化，将两段同伦压缩到[0,1/2]和[1/2,1]中连续衔接。" },
        { name: "同伦等价保持连通性", statement: "若 X ≃ Y，则 X 与 Y 有相同的连通分支数。", proof: "同伦等价映射f:X→Y诱导连通分支之间的双射。每个连通分支映射到连通分支，同伦逆g保证映射是单射和满射。特别地，连通空间的同伦等价像仍是连通的，因此连通性在同伦等价下保持不变。" }
      ],
      applications: "同伦等价是代数拓扑分类空间的基本工具。在机器人路径规划中，判断两个构型空间是否同伦等价可以简化运动规划问题。在数据分析中，持久同调利用同伦等价来识别不同尺度下的拓扑特征。",
      refs: [{ book: "Hatcher", ch: "Ch.0", sec: "§0.1" }, { book: "Munkres", ch: "Ch.9", sec: "§51" }]
    },
    {
      id: "t2", label: "基本群的定义", chapter: "ch1", layer: 1,
      desc: "以基点为起终点的环路同伦类构成的群，是代数拓扑的第一个不变量。",
      content: "设 X 为拓扑空间，x₀∈X 为基点。X 中以 x₀ 为基点的环路是连续映射 γ: [0,1]→X 满足 γ(0)=γ(1)=x₀。两条环路 γ, η 的乘积定义为 (γ·η)(t) = γ(2t) (t≤1/2) 或 η(2t-1) (t≥1/2)。两条环路同伦若存在保持基点不动的同伦。基本群 π₁(X,x₀) 是所有环路同伦类的集合，群运算为环路乘积的诱导。单位元为常值环路，逆元为环路反向。若 X 道路连通，则不同基点对应的基本群同构。",
      understanding: "想象你在一个空间里散步，从起点出发必须回到起点。基本群记录的是所有'不能连续变形为彼此'的散步路线。在球面上，任何环路都可以缩成一点，所以基本群是平凡的；在圆环上，顺时针绕一圈和逆时针绕一圈是本质上不同的路线，它们构成无限循环群 Z。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><circle cx="100" cy="90" r="60" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="100" cy="90" r="4" fill="#dc2626"/><text x="100" y="82" font-size="10" fill="#dc2626" text-anchor="middle">x₀</text><path d="M100,90 C100,40 150,50 140,90 C130,130 100,120 100,90" fill="none" stroke="#059669" stroke-width="2.5"/><path d="M100,90 C100,50 60,55 70,90 C75,110 100,105 100,90" fill="none" stroke="#d97706" stroke-width="2.5"/><text x="55" y="70" font-size="9" fill="#059669">γ</text><text x="130" y="60" font-size="9" fill="#d97706">η</text><text x="100" y="175" font-size="12" fill="#333" font-weight="bold">π₁(X,x₀)</text><text x="100" y="192" font-size="10" fill="#666" text-anchor="middle">环路同伦类</text></svg>',
      examples: [
        { title: "S^1 的基本群", content: "π₁(S^1) ≅ Z。每个同伦类由绕数（整数）唯一确定，正向绕一圈对应1，反向对应-1。" },
        { title: "S^n (n≥2) 的基本群", content: "π₁(S^n) ≅ {e}（平凡群）。高维球面上任何环路都可连续缩为一点。" },
        { title: "环面 T^2 的基本群", content: "π₁(T^2) ≅ Z×Z，由赤道方向和经线方向的两个独立环路生成。" }
      ],
      theorems: [
        { name: "基本群函子性", statement: "连续映射 f: X→Y 诱导群同态 f_*: π₁(X,x₀)→π₁(Y,f(x₀))，且 (f∘g)_* = f_*∘g_*。", proof: "定义f_*([γ])=[f∘γ]。验证群同态：(f_*(α·β))(t)在t≤1/2为f(α(2t))，在t≥1/2为f(β(2t-1))，恰好等于(f_*α)·(f_*β)。复合性(f∘g)_*=f_*∘g_*由定义直接推出。这表明π₁是Top到Grp的函子。" },
        { name: "同伦不变性", statement: "若 f ≃ g rel x₀，则 f_* = g_*。特别地，同伦等价的空间有同构的基本群。", proof: "设f≃g rel x₀的同伦为H，则对任意环路γ，H(γ(s),t)给出f∘γ和g∘γ之间的同伦。故[f∘γ]=[g∘γ]，即f_*=g_*。同伦等价空间X≃Y时，f_*∘g_*=id和g_*∘f_*=id保证f_*是同构。" }
      ],
      applications: "基本群可用于证明Brouwer不动点定理（二维情形）、区分不同拓扑空间（如证明R²与R³不同胚），在扭结理论中区分不同扭结类型。在物理学中，Aharonov-Bohm效应的拓扑解释依赖于穿孔平面的非平凡基本群。",
      refs: [{ book: "Hatcher", ch: "Ch.1", sec: "§1.1" }, { book: "Munkres", ch: "Ch.9", sec: "§52" }]
    },
    {
      id: "t3", label: "基本群的计算方法", chapter: "ch1", layer: 2,
      desc: "利用形变收缩、乘积空间性质和群论工具计算具体空间的基本群。",
      content: "计算基本群的基本策略：(1) 形变收缩法：X 形变收缩到子空间 A，则 π₁(X) ≅ π₁(A)；(2) 乘积公式：π₁(X×Y) ≅ π₁(X)×π₁(Y)；(3) Seifert-van Kampen 定理：将空间分解为两个开集，利用它们的并集和交集的基本群通过自由积与融合关系计算；(4) 群论技巧：计算基本群后，通常需要识别所得群（自由群、自由积、融合积等）。基本群的计算本质上是把拓扑问题转化为代数问题，利用已知空间的基本群作为'原子'。",
      understanding: "计算基本群就像解谜：你把复杂空间拆成简单部件（如圆、球），每个部件的基本群你已知，然后通过组合规则（如van Kampen定理）拼出整体的基本群。就像乐高积木，你知道每块积木是什么，然后根据搭建方式确定整体结构。例如，8字形空间可以看作两个圆粘在一起，其基本群是Z*Z（两个生成元的自由群）。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><circle cx="80" cy="60" r="30" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="140" cy="60" r="30" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="110" cy="60" r="5" fill="#7c3aed"/><circle cx="80" cy="120" r="30" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="140" cy="120" r="30" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="95" y1="60" x2="125" y2="60" stroke="#7c3aed" stroke-width="2" stroke-dasharray="4,2"/><text x="60" y="160" font-size="10" fill="#2563eb">A</text><text x="145" y="160" font-size="10" fill="#dc2626">B</text><text x="96" y="155" font-size="10" fill="#7c3aed">A∩B</text><text x="100" y="188" font-size="11" fill="#333" font-weight="bold">Van Kampen 分解</text></svg>',
      examples: [
        { title: "图的基本群", content: "有限连通图 G 的基本群是秩为 1-χ(G) 的自由群，其中 χ(G)=V-E 为欧拉示性数。" },
        { title: "环面 T^2", content: "将正方形对边粘合，用 van Kampen 定理得 π₁(T^2) ≅ ⟨a,b|aba⁻¹b⁻¹=1⟩ ≅ Z×Z。" },
        { title: "Klein 瓶", content: "π₁(K) ≅ ⟨a,b|aba⁻¹b=1⟩，这是非交换群，表明 Klein 瓶的基本群与环面不同。" }
      ],
      theorems: [
        { name: "Seifert-van Kampen 定理", statement: "若 X = U∪V 且 U∩V 道路连通，则 π₁(X) ≅ π₁(U)*π₁(V)/N，其中 N 由 π₁(U∩V) 中元素在包含映射下的像生成。", proof: "将X中环路分解为交替落在U和V中的片段，每段通过U∩V中的道路修正。群论上，π₁(U)和π₁(V)的生成元自由生成自由积，π₁(U∩V)在两个包含映射下的像的差异提供融合关系N，商掉N即得π₁(X)。核心是推出图表的万有性质。" },
        { name: "乘积公式", statement: "π₁(X×Y, (x₀,y₀)) ≅ π₁(X,x₀) × π₁(Y,y₀)。", proof: "投影映射诱导同态p_*:π₁(X×Y)→π₁(X)×π₁(Y)，由p_*([γ])=([p_X∘γ],[p_Y∘γ])定义。逆映射：对([α],[β])构造γ(t)=(α(t),β(t))，即([α],[β])↦[α×β]。验证两者互为逆映射，利用乘积拓扑的万有性质。" }
      ],
      applications: "基本群计算在扭结理论中用于区分扭结（扭结补空间的基本群称为扭结群），在三维流形拓扑中用于分类Seifert纤维空间，在代数几何中用于计算代数曲线的拓扑类型。",
      refs: [{ book: "Hatcher", ch: "Ch.1", sec: "§1.2" }, { book: "Hatcher", ch: "Ch.1", sec: "§1.3" }]
    },
    {
      id: "t4", label: "覆叠空间", chapter: "ch1", layer: 1,
      desc: "局部同胚于底空间且具有离散纤维的覆盖映射，是研究基本群的核心工具。",
      content: "覆叠空间 p: X̃→X 是满足局部平凡化条件的连续满射：对每个 x∈X，存在邻域 U 使得 p⁻¹(U) 同胚于 U×F（F 为离散空间）。覆叠空间的纤维 p⁻¹(x) 的基数称为覆叠次数。覆叠空间最重要的性质是道路提升定理：X 中任一道路可唯一提升到 X̃ 中（给定起点）；以及同伦提升定理：道路的同伦也可提升。覆叠空间与基本群通过 Galois 对应紧密关联：X̃ 的覆叠变换群 Γ 满足 π₁(X)/p_*π₁(X̃) ≅ Γ。",
      understanding: "覆叠空间就像多层停车场：每一层看起来和底层（底空间）局部一样，但总共有好几层。螺旋线是圆周的覆叠空间——螺旋线局部看起来像直线，圆周局部看起来也像直线，但螺旋线绕一圈不会回到原点，而是到了'上一层'。实数线 R 是圆周 S^1 的'万有覆叠'——它无限层，每层对应一个整数。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><path d="M30,30 Q100,10 170,30" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M30,60 Q100,40 170,60" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M30,90 Q100,70 170,90" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M30,120 Q100,100 170,120" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="100" cy="165" r="30" fill="none" stroke="#dc2626" stroke-width="2.5"/><line x1="85" y1="30" x2="85" y2="165" stroke="#333" stroke-width="1" stroke-dasharray="4,3"/><line x1="115" y1="30" x2="115" y2="165" stroke="#333" stroke-width="1" stroke-dasharray="4,3"/><text x="100" y="185" font-size="12" fill="#333" font-weight="bold">p: X̃→X</text><text x="30" y="20" font-size="9" fill="#059669">覆盖空间 X̃</text><text x="70" y="160" font-size="9" fill="#dc2626">底空间 X</text></svg>',
      examples: [
        { title: "R→S^1 (万有覆叠)", content: "p(t)=e^{2πit} 是万有覆叠映射，纤维为 Z，覆叠变换群为 Z（平移）。" },
        { title: "S^n→RP^n (二重覆叠)", content: "对径映射 p(x)=[x] 是 S^n 到实射影空间 RP^n 的二重覆叠，覆叠变换群为 Z/2。" },
        { title: "S^1→S^1 (n重覆叠)", content: "p(z)=z^n 是 n 重覆叠，纤维为 n 个点，诱导同态 p_* 将 π₁(S^1)≅Z 映射到 nZ。" }
      ],
      theorems: [
        { name: "道路提升定理", statement: "对覆叠 p: X̃→X，X 中起点为 x₀ 的道路 γ 可唯一提升到 X̃ 中以任意 x̃₀∈p⁻¹(x₀) 为起点的道路 γ̃。", proof: "将[0,1]用Lebesgue数分解为有限个小区间[t_i,t_{i+1}]，使每个γ([t_i,t_{i+1}])落在平凡化邻域U内。在每段上利用局部同胚p⁻¹(U)≅U×F构造提升，由唯一性保证在相邻区间端点处衔接。核心是覆叠空间的局部乘积结构。" },
        { name: "同伦提升定理", statement: "覆叠空间具有同伦提升性质：底空间中的道路同伦可提升到覆叠空间。", proof: "将同伦H:I×I→X用Lebesgue数分解为小方格，每个方格内H的像落在平凡化邻域中。在每个方格内利用局部乘积结构提升，确保沿方格边界的连续性。由下到上、左到右逐格构造完整的提升同伦。核心是紧致性保证有限分解。" }
      ],
      applications: "覆叠空间在物理学中用于描述自旋（SU(2)→SO(3)的二重覆叠），在晶体学中描述晶格结构，在复杂分析中用于定义黎曼面上的多值函数（如平方根）。",
      refs: [{ book: "Hatcher", ch: "Ch.1", sec: "§1.3" }, { book: "Munkres", ch: "Ch.9", sec: "§53" }]
    },
    {
      id: "t5", label: "覆叠空间的分类", chapter: "ch1", layer: 2,
      desc: "覆叠空间与基本群的子群之间存在一一对应，这是Galois理论在拓扑中的体现。",
      content: "覆叠空间的分类定理是代数拓扑最重要的结构定理之一。设 X 是道路连通、局部道路连通且半局部单连通的空间（'好空间'）。则 X 的（连通）覆叠空间之间的等价类与 π₁(X) 的子群的共轭类一一对应：给定覆叠 p: X̃→X 和基点 x̃₀，对应子群为 p_*(π₁(X̃,x̃₀)) ⊂ π₁(X,p(x̃₀))。正规子群对应于正规覆叠（Galois覆叠），此时覆叠变换群同构于商群。对应万有覆叠的子群是平凡子群，万有覆叠是单连通的。",
      understanding: "覆叠空间的分类就像给基本群做'子群图鉴'：基本群的每个子群都对应一种覆叠方式。万有覆叠（单连通覆叠）对应平凡子群，它覆盖了所有其他覆叠空间。正规子群对应最'对称'的覆叠——覆叠变换群可以自由地作用在纤维上。这种对应关系体现了代数（群）和几何（覆叠空间）之间的深刻联系，类似于Galois理论中域扩张与子群之间的对应。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><rect x="40" y="10" width="120" height="30" rx="5" fill="#e8f0fe" stroke="#2563eb" stroke-width="1.5"/><text x="100" y="30" font-size="10" fill="#2563eb" text-anchor="middle">万有覆叠 X̃_univ</text><rect x="40" y="60" width="120" height="30" rx="5" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="100" y="80" font-size="10" fill="#d97706" text-anchor="middle">中间覆叠 X̃₁</text><rect x="40" y="110" width="120" height="30" rx="5" fill="#fce7f3" stroke="#dc2626" stroke-width="1.5"/><text x="100" y="130" font-size="10" fill="#dc2626" text-anchor="middle">中间覆叠 X̃₂</text><rect x="40" y="160" width="120" height="30" rx="5" fill="#e0f2fe" stroke="#0d9488" stroke-width="1.5"/><text x="100" y="180" font-size="10" fill="#0d9488" text-anchor="middle">底空间 X</text><line x1="100" y1="40" x2="100" y2="60" stroke="#333" stroke-width="1.5"/><line x1="100" y1="90" x2="100" y2="110" stroke="#333" stroke-width="1.5"/><line x1="100" y1="140" x2="100" y2="160" stroke="#333" stroke-width="1.5"/><text x="165" y="95" font-size="9" fill="#333">←→ Galois对应</text></svg>',
      examples: [
        { title: "S^1 的覆叠分类", content: "π₁(S^1)≅Z 的子群为 nZ。每个 n 对应一个 n 重覆叠 z↦z^n，万有覆叠为 R→S^1。" },
        { title: "环面 T^2 的覆叠", content: "π₁(T^2)≅Z×Z 的子群格对应各种覆叠环面，万有覆叠为 R^2→T^2。" },
        { title: "8字形的覆叠", content: "π₁(S^1∨S^1)≅F₂（自由群），其子群结构极其丰富，对应各种图作为覆叠空间。" }
      ],
      theorems: [
        { name: "覆叠空间分类定理", statement: "设 X 满足适当条件，连通覆叠空间 p: X̃→X 的等价类与 π₁(X,x₀) 的子群的共轭类一一对应。", proof: "给定子群H⊂π₁(X)，取万有覆叠X̃_univ，定义等价关系x̃₁~x̃₂当且仅当p(x̃₁)=p(x̃₂)且连接道路在H中。商空间X̃_univ/~即为对应H的覆叠。反之，给定覆叠，取其p_*(π₁(X̃))。共轭类对应体现基点选择的不确定性。" },
        { name: "万有覆叠的存在性", statement: "X 为半局部单连通 ⇔ X 存在万有覆叠。万有覆叠是单连通的覆叠空间。", proof: "构造：取X中以x₀为起点的道路同伦类集合，赋以由开集UV_α={[γ·η]:η是V_α中道路}生成的拓扑。投影映射取终点：p([γ])=γ(1)。半局部单连通性保证此拓扑使p成为覆叠映射。该空间单连通因为任何环路可收缩到基点。" }
      ],
      applications: "覆叠空间分类在代数几何中用于研究黎曼面的模空间，在表示论中研究基本群的线性表示，在Galois理论中为Grothendieck的远阿贝尔几何提供动机。",
      refs: [{ book: "Hatcher", ch: "Ch.1", sec: "§1.3" }, { book: "Munkres", ch: "Ch.13", sec: "§82" }]
    },
    {
      id: "t6", label: "Van Kampen定理", chapter: "ch1", layer: 2,
      desc: "将空间分解为两个开集，利用其基本群通过自由积和融合关系计算整体的基本群。",
      content: "Seifert-van Kampen 定理是计算基本群最强大的工具。设 X = U∪V，其中 U, V 为开集，且 U∩V 道路连通。则基本群有推出图表：π₁(U∩V) → π₁(U) 和 π₁(U∩V) → π₁(V) 诱导同态，而 π₁(X) 是 π₁(U) 和 π₁(V) 的自由积关于 π₁(U∩V) 中元素在两个包含映射下像的关系的商。定理的核心思想是：X 中的环路可以分解为交替在 U 和 V 中的环路片段，而重合部分（U∩V 中的环路）提供融合关系。",
      understanding: "Van Kampen 定理就像拼图游戏：如果你知道每个拼图块（U 和 V）的基本群，以及它们重叠部分（U∩V）的基本群，你就可以通过'自由积后商掉重叠部分'来计算整个拼图的基本群。这个定理的精妙之处在于：它把拓扑问题（计算空间的基本群）完全转化为代数问题（计算群的自由积和商群），使得我们可以用纯代数方法处理拓扑问题。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><ellipse cx="75" cy="80" rx="55" ry="45" fill="#dbeafe" fill-opacity="0.5" stroke="#2563eb" stroke-width="2"/><ellipse cx="125" cy="80" rx="55" ry="45" fill="#fce7f3" fill-opacity="0.5" stroke="#dc2626" stroke-width="2"/><text x="55" y="50" font-size="11" fill="#2563eb" font-weight="bold">U</text><text x="145" y="50" font-size="11" fill="#dc2626" font-weight="bold">V</text><text x="90" y="95" font-size="10" fill="#7c3aed" font-weight="bold">U∩V</text><text x="100" y="140" font-size="10" fill="#333">π₁(X) ≅</text><text x="100" y="155" font-size="10" fill="#333">π₁(U)*π₁(V)/N</text><text x="100" y="180" font-size="11" fill="#333" font-weight="bold">Seifert-van Kampen</text></svg>',
      examples: [
        { title: "楔和 S^1∨S^1", content: "取 U, V 为两个圆分别的开邻域，U∩V 可缩，故 π₁(S^1∨S^1) ≅ Z*Z ≅ F₂。" },
        { title: "环面 T^2", content: "将环面沿子午线和赤道切开，U∩V 为环带，得 π₁(T^2) ≅ ⟨a,b|aba⁻¹b⁻¹⟩ ≅ Z×Z。" },
        { title: "曲面基本群", content: "亏格 g 的可定向闭曲面 Σ_g 的基本群为 ⟨a₁,b₁,…,a_g,b_g|∏[a_i,b_i]=1⟩。" }
      ],
      theorems: [
        { name: "Seifert-van Kampen定理", statement: "若 X=U∪V 且 U∩V 道路连通，则 π₁(X) ≅ π₁(U) *_{π₁(U∩V)} π₁(V)（融合自由积）。", proof: "包含映射诱导同态i_*:π₁(U∩V)→π₁(U)和j_*:π₁(U∩V)→π₁(V)。融合自由积由π₁(U)和π₁(V)的生成元生成，关系为i_*(γ)=j_*(γ)对所有γ∈π₁(U∩V)。正合性推出图表是推出图表，万有性质唯一确定π₁(X)。" },
        { name: "推广形式", statement: "可推广到多个开集的覆盖，使用群胚或范畴论语言更简洁地表述。", proof: "对多个开集覆盖{U_α}，考虑基本群胚Π(X)作为所有道路同伦类的范畴。Π(X)同构于Π(U_α)沿Π(U_α∩U_β)的2-余极限。范畴论表述避免了基点选择问题，且自然处理多个开集的重叠关系，是Grothendieck的galois理论在拓扑中的体现。" }
      ],
      applications: "van Kampen 定理广泛应用于计算图、曲面、扭结补空间、CW复形的基本群。在低维拓扑中，用于分类曲面和三维流形；在扭结理论中，Wirtinger 表示法利用 van Kampen 定理计算扭结群。",
      refs: [{ book: "Hatcher", ch: "Ch.1", sec: "§1.2" }, { book: "Munkres", ch: "Ch.9", sec: "§59" }]
    },
    {
      id: "t7", label: "基本群的应用", chapter: "ch1", layer: 3,
      desc: "利用基本群的不变性证明拓扑学中的重要定理，如Brouwer不动点定理和Borsuk-Ulam定理。",
      content: "基本群最经典的应用包括：(1) Brouwer 不动点定理（二维）：若 f: D²→D² 连续，则存在不动点。证明：假设无不动点，构造收缩映射 r: D²→S^1，诱导恒等映射在基本群上，但 π₁(D²)={e} 而 π₁(S^1)≅Z，矛盾。(2) 代数基本定理：任何非常数复系数多项式在 C 中有根。证明：假设无根，构造从 S^1 到 S^1 的映射，比较绕数。(3) Borsuk-Ulam 定理（二维）：对连续映射 f: S²→R²，存在对径点 x,-x 使得 f(x)=f(-x)。",
      understanding: "基本群就像一个'拓扑指纹'：如果两个空间的基本群不同，它们就不可能同胚（甚至不可能同伦等价）。这给了我们证明两个空间不同的有力工具。Brouwer 不动点定理的证明特别优雅：如果圆盘到自身没有不动点，你可以把每个点沿射线推到边界上，从而把圆盘收缩到圆周——但基本群告诉我们这是不可能的。拓扑学通过这种代数方法'看到'了几何中看不见的障碍。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><circle cx="100" cy="90" r="55" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="100" cy="90" r="55" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="100" cy="90" r="3" fill="#dc2626"/><text x="100" y="80" font-size="10" fill="#dc2626" text-anchor="middle">x₀=f(x₀)</text><line x1="130" y1="60" x2="100" y2="90" stroke="#333" stroke-width="1" stroke-dasharray="3,2"/><text x="135" y="55" font-size="9" fill="#333">x</text><text x="100" y="170" font-size="12" fill="#333" font-weight="bold">Brouwer不动点定理</text><text x="100" y="188" font-size="9" fill="#666" text-anchor="middle">f: D²→D² 必有不动点</text></svg>',
      examples: [
        { title: "代数基本定理", content: "设 p(z) 无根，定义 f_r: S^1→S^1 为 f_r(z)=p(rz)/|p(rz)|。r→0 时绕数为0，r→∞ 时绕数为 deg(p)，矛盾。" },
        { title: "毛球定理", content: "S² 上不存在处处非零的连续切向量场。证明依赖于基本群和同伦的论证。" },
        { title: "R² 与 R³ 不同胚", content: "若同胚，去掉一点后基本群分别为 Z 和 {e}，矛盾。推广：R^m ≅ R^n 当且仅当 m=n。" }
      ],
      theorems: [
        { name: "Brouwer不动点定理", statement: "连续映射 f: D^n→D^n 必有不动点。二维情形可用基本群证明。", proof: "假设f无不动点，定义r(x)为从f(x)到x的射线与S^{n-1}的交点。r是收缩映射且r∘i=id_{S^{n-1}}。作用在π₁上得id_Z=r_*∘i_*:Z→{e}→Z，矛盾。高维情形用同调群类似论证：r_*在H_{n-1}上诱导恒等映射，但H_{n-1}(D^n)=0。" },
        { name: "Borsuk-Ulam定理", statement: "对连续映射 f: S^n→R^n，存在 x∈S^n 使得 f(x)=f(-x)。", proof: "假设f(x)≠f(-x)恒成立，定义g(x)=(f(x)-f(-x))/|f(x)-f(-x)|:S^n→S^{n-1}。g是奇映射：g(-x)=-g(x)。考虑S^n到RP^n的二重覆叠，奇映射诱导RP^n→RP^{n-1}的映射，矛盾于同调群结构。核心是奇映射不能保持拓扑不变量。" }
      ],
      applications: "不动点定理在经济学（Nash均衡存在性）、计算机科学（程序语义学中的域理论）、博弈论中都有重要应用。基本群方法也用于机器人运动规划中的构型空间分析。",
      refs: [{ book: "Hatcher", ch: "Ch.1", sec: "§1.1" }, { book: "Munkres", ch: "Ch.9", sec: "§55" }]
    },
    {
      id: "t8", label: "形变收缩与同伦型", chapter: "ch1", layer: 1,
      desc: "形变收缩是构造同伦等价的最常用方法，允许将空间连续压缩到其子空间上。",
      content: "形变收缩是比同伦等价更强的概念。设 A⊂X 为子空间，包含映射为 i: A↪X。若存在连续映射 r: X→A 使得 r∘i = id_A 且 i∘r ≃ id_X（同伦过程中保持 A 中的点不动），则称 A 是 X 的强形变收缩核。若同伦不要求保持 A 中点不动，则为弱形变收缩。若同伦过程中所有点沿特定路线移动，则为形变收缩。形变收缩是构造同伦等价的最直接方法，也是计算基本群的第一步：找到形变收缩核，将其基本群作为原空间的基本群。",
      understanding: "形变收缩就像把橡皮泥捏成更简单的形状：你可以把实心圆盘连续地捏成它的圆心，把圆柱体捏成它的底面圆周，把Möbius带捏成它的中心线。关键是不能撕裂——拓扑变形必须是连续的。形变收缩是代数拓扑中的'简化'操作：在计算基本群之前，先把空间简化到最简形式。注意形变收缩是可逆的（在同伦意义上），但逆过程（膨胀）不是形变收缩。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><circle cx="160" cy="100" r="40" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><circle cx="100" cy="100" r="40" fill="#dbeafe" stroke="#2563eb" stroke-width="2" opacity="0.6"/><circle cx="60" cy="100" r="40" fill="#dbeafe" stroke="#2563eb" stroke-width="2" opacity="0.3"/><circle cx="60" cy="100" r="5" fill="#dc2626"/><line x1="160" y1="100" x2="100" y2="100" stroke="#d97706" stroke-width="2" stroke-dasharray="5,3"/><line x1="100" y1="100" x2="65" y2="100" stroke="#d97706" stroke-width="2" stroke-dasharray="5,3"/><text x="60" y="88" font-size="10" fill="#dc2626" text-anchor="middle">A</text><text x="100" y="170" font-size="12" fill="#333" font-weight="bold">形变收缩 X↘A</text><text x="100" y="188" font-size="9" fill="#666" text-anchor="middle">圆盘→点 是形变收缩</text></svg>',
      examples: [
        { title: "穿孔平面的形变收缩", content: "R²\\{0} 形变收缩到 S^1：径向投影 r(x)=x/|x| 是强形变收缩，故 π₁(R²\\{0})≅Z。" },
        { title: "Möbius 带的形变收缩", content: "Möbius 带形变收缩到其中心圆周 S^1，故 π₁(Möbius)≅Z。" },
        { title: "ℝ^n 的形变收缩", content: "ℝ^n 形变收缩到原点：H(x,t)=(1-t)x。故 ℝ^n 同伦等价于点，是可缩空间。" }
      ],
      theorems: [
        { name: "形变收缩诱导同伦等价", statement: "若 A 是 X 的形变收缩核，则包含映射 i: A→X 是同伦等价，故 π₁(A)≅π₁(X)。", proof: "包含映射i:A→X和收缩映射r:X→A满足r∘i=id_A且i∘r≃id_X。故i和r互为同伦逆，i是同伦等价。作用于基本群得i_*:π₁(A)→π₁(X)是同构，r_*是其逆。这使计算基本群时可将空间简化到形变收缩核。" },
        { name: "CW复形的形变收缩", statement: "CW 复形中，子复形若是形变收缩核，则可通过逐细胞收缩构造形变收缩。", proof: "对每个n维胞腔，沿径向将胞腔内部形变收缩到边界S^{n-1}。归纳地从高维到低维逐细胞收缩：先收缩最高维胞腔，保持已收缩部分不动。由于CW复形具有闭包有限性，归纳过程在有限步内完成，得到整体形变收缩。" }
      ],
      applications: "形变收缩是计算基本群和同调群的第一步简化操作。在数据拓扑分析中，持久同调利用不同半径下的形变收缩来捕捉数据中的多尺度拓扑特征。在机器人学中，构型空间的形变收缩用于简化运动规划。",
      refs: [{ book: "Hatcher", ch: "Ch.0", sec: "§0.2" }, { book: "Munkres", ch: "Ch.9", sec: "§58" }]
    },
    // ==================== SECTION MARKER: End of Ch1 Nodes ====================
    // ==================== Ch2: 同调论 ====================
    {
      id: "t9", label: "单纯形与单纯复形", chapter: "ch2", layer: 0,
      desc: "单纯形是三角形到高维的推广，单纯复形是将空间剖分为单纯形的组合结构。",
      content: "n 维标准单纯形 Δ^n 是 R^{n+1} 中满足 ∑x_i=1, x_i≥0 的点的凸包。0维单纯形是点，1维是线段，2维是三角形，3维是四面体。单纯形的面是其低维子单纯形。单纯复形 K 是一组单纯形的集合，满足：(1) 若 σ∈K，则 σ 的所有面也属于 K；(2) 两个单纯形相交只能是公共面。单纯复形将空间离散化为组合对象，使得同调群可以通过纯代数方法计算（即线性代数）。三角剖分是将拓扑空间表示为单纯复形的同胚像。",
      understanding: "单纯形就是把'三角形'概念推广到任意维度：0维是点，1维是线段，2维是三角形，3维是四面体，4维及以上是它们的'高维表亲'。单纯复形就是用这些'三角形家族'来拼出任何形状——就像用三角形拼出恐龙模型一样。关键是每两个三角形要么不相交，要么共享一个完整的边或顶点，不能只是部分重叠。这种规则性使得我们可以用计算机处理拓扑问题。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><circle cx="173" cy="145" r="4" fill="#2563eb"/><text x="173" y="140" font-size="8" fill="#2563eb">Δ⁰</text><line x1="20" y1="145" x2="130" y2="145" stroke="#dc2626" stroke-width="3"/><circle cx="20" cy="145" r="3" fill="#dc2626"/><circle cx="130" cy="145" r="3" fill="#dc2626"/><text x="70" y="137" font-size="8" fill="#dc2626">Δ¹</text><polygon points="60,170 120,170 90,120" fill="none" stroke="#059669" stroke-width="2"/><text x="80" y="112" font-size="8" fill="#059669">Δ²</text><polygon points="20,80 80,50 140,80 80,110" fill="#dbeafe" fill-opacity="0.3" stroke="#7c3aed" stroke-width="1.5"/><text x="70" y="45" font-size="8" fill="#7c3aed">Δ³</text><text x="100" y="192" font-size="11" fill="#333" font-weight="bold">单纯形 0~3维</text></svg>',
      examples: [
        { title: "圆周 S^1 的三角剖分", content: "S^1 可剖分为3条边和3个顶点（三角形边界），是最简单的三角剖分。" },
        { title: "环面 T^2 的三角剖分", content: "T^2 至少需要14个三角形（7个顶点，21条边）的三角剖分，最小剖分对应其同调群。" },
        { title: "射影平面 RP^2 的三角剖分", content: "RP^2 的最小三角剖分需要10个顶点，27条边，18个面，其同调群包含扭转。" }
      ],
      theorems: [
        { name: "单纯逼近定理", statement: "任何连续映射 f: K→L 可被单纯映射逼近（在重心重分后）。", proof: "取L的开星形覆盖，K的紧致性保证存在Lebesgue数。将K充分重心重分，使每个单纯形的像落在L的某个开星形内。定义单纯逼近g将每个顶点映射到其像所在开星形的顶点。g与f同伦，且g是单纯映射。核心是开星形覆盖的Lebesgue数论证。" },
        { name: "三角剖分存在性", statement: "光滑流形总是可三角剖分的；但存在不可三角剖分的拓扑流形。", proof: "光滑流形可嵌入R^N（Whitney嵌入定理），在R^N中取足够细的立方剖分，再将每个立方体细分为单纯形。光滑性保证剖分足够细时与流形同胚。Cairns和Whitehead证明光滑流形可三角剖分。但存在不可三角剖分的拓扑流形，如Freedman的E8流形。" }
      ],
      applications: "单纯复形是计算拓扑学的基础：有限元方法使用单纯形剖分求解偏微分方程，计算机图形学使用三角网格表示曲面，拓扑数据分析使用Vietoris-Rips和Cech复形捕捉数据的拓扑结构。",
      refs: [{ book: "Hatcher", ch: "Ch.2", sec: "§2.1" }, { book: "Munkres", ch: "Ch.1", sec: "§2" }]
    },
    {
      id: "t10", label: "单纯同调群", chapter: "ch2", layer: 1,
      desc: "通过单纯复形的链复形定义同调群，是代数拓扑中最可计算的不变量。",
      content: "设 K 为单纯复形。n 维链群 C_n(K) 是以 K 的 n 维定向单纯形为基的自由阿贝尔群。边界算子 ∂_n: C_n(K)→C_{n-1}(K) 定义为 ∂_n[v_0,…,v_n] = ∑_{i=0}^n (-1)^i [v_0,…,v̂_i,…,v_n]，其中 v̂_i 表示去掉该顶点。关键性质：∂_{n-1}∘∂_n = 0，即边界没有边界。由此定义 n 维闭链群 Z_n = ker ∂_n，n 维边缘链群 B_n = im ∂_{n+1}。第 n 个单纯同调群为 H_n(K) = Z_n/B_n。同调群衡量'闭链但不是边缘'的链，即空间中的'洞'。",
      understanding: "同调群的直观理解：想象空间中有一个'洞'。在洞周围绕一圈是一个闭链（没有边界），但它不是任何曲面的边界（因为它包住了洞）。同调群就是记录所有这种'包住洞的闭链'，但把'可以填满的闭链'视为零。所以同调群的大小告诉你空间中有多少个独立的不同维度的洞：H_0 数连通分支，H_1 数一维洞（环），H_2 数二维洞（空腔），以此类推。边界算子的核心恒等式 ∂²=0 保证了'洞的边界没有洞'。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><rect x="5" y="20" width="50" height="30" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="30" y="39" font-size="9" fill="#2563eb" text-anchor="middle">C₂</text><rect x="75" y="20" width="50" height="30" rx="3" fill="#fce7f3" stroke="#dc2626" stroke-width="1.5"/><text x="100" y="39" font-size="9" fill="#dc2626" text-anchor="middle">C₁</text><rect x="145" y="20" width="50" height="30" rx="3" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="170" y="39" font-size="9" fill="#d97706" text-anchor="middle">C₀</text><line x1="58" y1="35" x2="73" y2="35" stroke="#333" stroke-width="1.5"/><text x="65" y="32" font-size="8" fill="#333">∂₂</text><line x1="128" y1="35" x2="143" y2="35" stroke="#333" stroke-width="1.5"/><text x="135" y="32" font-size="8" fill="#333">∂₁</text><text x="100" y="65" font-size="9" fill="#dc2626">∂₁∘∂₂ = 0</text><text x="100" y="85" font-size="11" fill="#333" font-weight="bold">链复形</text><text x="100" y="100" font-size="10" fill="#333">H_n = ker ∂_n / im ∂_{n+1}</text><circle cx="100" cy="145" r="35" fill="none" stroke="#7c3aed" stroke-width="2.5"/><circle cx="100" cy="145" r="15" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,2"/><text x="100" y="155" font-size="10" fill="#7c3aed" text-anchor="middle">H₁=Z</text><text x="100" y="192" font-size="9" fill="#666" text-anchor="middle">环面的洞 → H₁=Z²</text></svg>',
      examples: [
        { title: "球面 S^2", content: "H_0(S^2)≅Z, H_1(S^2)=0, H_2(S^2)≅Z。一个二维洞（空腔），没有一维洞。" },
        { title: "环面 T^2", content: "H_0(T^2)≅Z, H_1(T^2)≅Z², H_2(T^2)≅Z。两个独立的一维洞（赤道和经线），一个二维洞。" },
        { title: "射影平面 RP^2", content: "H_0(RP^2)≅Z, H_1(RP^2)≅Z/2, H_2(RP^2)=0。存在扭转：非平凡的一维闭链绕两圈才成为边缘。" }
      ],
      theorems: [
        { name: "∂²=0 定理", statement: "对任意 n，∂_n∘∂_{n+1}=0，因此 im ∂_{n+1} ⊂ ker ∂_n，同调群良定义。", proof: "直接计算：∂_{n-1}∂_n[v₀,...,v_n]=∑_{j<i}(-1)^{i+j}[...,v̂_j,...,v̂_i,...]+∑_{j>i}(-1)^{i+j-1}[...,v̂_i,...,v̂_j,...]。两项中每对面出现两次，符号相反，恰好相消。这是同调代数的核心恒等式，保证了'边界没有边界'。" },
        { name: "同调的不变性", statement: "同胚的空间具有同构的单纯同调群；更一般地，同伦等价的空间有同构的同调群。", proof: "同胚直接诱导单纯复形间的同构，进而诱导链复形同构，故同调群同构。同伦不变性更深刻：需构造链同伦。对单纯映射f,g，构造棱柱算子P满足∂P+P∂=g_#-f_#，将单纯形×I剖分为单纯形之和。于是f_#和g_#链同伦，诱导相同同调。" }
      ],
      applications: "同调群在计算拓扑学中广泛应用：持久同调用于数据分析、图像识别、传感器网络覆盖分析；在计算生物学中预测蛋白质结构；在材料科学中分析多孔介质的拓扑结构。",
      refs: [{ book: "Hatcher", ch: "Ch.2", sec: "§2.1" }, { book: "Munkres", ch: "Ch.1", sec: "§5" }]
    },
    {
      id: "t11", label: "奇异同调", chapter: "ch2", layer: 1,
      desc: "奇异同调通过连续映射定义同调，具有函子性和同伦不变性等优良性质。",
      content: "奇异同调是单纯同调的推广，不需要三角剖分即可定义。奇异 n 维单纯形是连续映射 σ: Δ^n→X。奇异链群 C_n(X) 是奇异单纯形生成的自由阿贝尔群，边界算子定义方式与单纯同调类似。奇异同调群 H_n(X) = ker ∂_n / im ∂_{n+1}。奇异同调的核心优势：(1) 函子性：连续映射 f: X→Y 诱导同态 f_*: H_n(X)→H_n(Y)；(2) 同伦不变性：同伦映射诱导相同同调同态；(3) 切除定理：适当条件下可切除子空间。这些性质使奇异同调成为代数拓扑中最强大的同调理论。",
      understanding: "奇异同调是单纯同调的'升级版'。单纯同调需要把空间切成三角形，但奇异同调直接使用连续映射来探测空间——任何连续映射从一个标准三角形到你的空间都能'采样'拓扑信息。'奇异'这个词指的是这些映射不需要是嵌入，可以有折叠和自交。这种灵活性使得奇异同调具有很好的理论性质（函子性、同伦不变性），但也使其链群通常无限维，实际计算时仍需转化为单纯同调或其他可计算形式。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><polygon points="30,30 80,20 90,60" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="30" font-size="9" fill="#2563eb">Δ²</text><path d="M120,100 C130,80 160,70 170,90 C180,110 150,120 140,100 Z" fill="none" stroke="#dc2626" stroke-width="2"/><text x="155" y="80" font-size="9" fill="#dc2626">σ(Δ²)</text><line x1="92" y1="55" x2="128" y2="88" stroke="#333" stroke-width="1.5" marker-end="url(#ar2)"/><text x="110" y="65" font-size="8" fill="#333">σ</text><defs><marker id="ar2" markerWidth="6" markerHeight="6" refX="5" refY="3"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs><text x="100" y="155" font-size="11" fill="#333" font-weight="bold">奇异同调</text><text x="100" y="172" font-size="9" fill="#666" text-anchor="middle">σ: Δⁿ→X 连续</text><text x="100" y="188" font-size="9" fill="#666" text-anchor="middle">函子性 + 同伦不变性</text></svg>',
      examples: [
        { title: "可缩空间的同调", content: "若 X 可缩，则 H_0(X)≅Z 且 H_n(X)=0 (n>0)。奇异同调完美捕捉可缩性。" },
        { title: "S^n 的同调", content: "H_0(S^n)≅Z, H_n(S^n)≅Z, 其他 H_k(S^n)=0。同调群体现了球面的'n维洞'。" },
        { title: "同伦等价保持同调", content: "若 X≃Y，则 H_n(X)≅H_n(Y) ∀n。因此同调是比同胚更弱的拓扑不变量。" }
      ],
      theorems: [
        { name: "同伦不变性定理", statement: "若 f≃g: X→Y，则 f_*=g_*: H_n(X)→H_n(Y)。特别地，同伦等价空间有同构同调群。", proof: "构造棱柱算子P:C_n(X)→C_{n+1}(Y)：对奇异单纯形σ:Δ^n→X，将棱柱Δ^n×I的标准三角剖分中每个(n+1)维单纯形通过f∘σ或g∘σ映射到Y。验证∂P+P∂=g_#-f_#，故f_#和g_#是链同伦的，诱导相同同调同态。核心是棱柱的三角剖分构造。" },
        { name: "切除定理", statement: "若 Z⊂A⊂X 且 Z̄⊂Int(A)，则包含映射 (X\\Z, A\\Z)→(X,A) 诱导同调同构。", proof: "将X中的奇异链通过重心重分细分为小单纯形，使其像要么落在A中，要么落在X\\Z中。由条件Z̄⊂Int(A)，重分足够细时，每个单纯形若与Z相交，则其像必完全落在A中。故X中的链可分解为A和X\\Z中链的和，核心是重心重分将链'推入'A或X\\Z。" }
      ],
      applications: "奇异同调为同调论提供了坚实的理论基础，其公理化方法（Eilenberg-Steenrod公理）统一了各种同调理论。在微分拓扑中，de Rham同调与奇异同调的同构（de Rham定理）连接了分析与拓扑。",
      refs: [{ book: "Hatcher", ch: "Ch.2", sec: "§2.1" }, { book: "Munkres", ch: "Ch.4", sec: "§29" }]
    },
    {
      id: "t12", label: "正合序列与切除", chapter: "ch2", layer: 2,
      desc: "正合序列是代数拓扑中的核心计算工具，特别是空间对的长正合序列。",
      content: "正合序列是群同态序列 ...→A→B→C→... 满足每个同态的像等于下一个同态的核。空间对 (X,A) 诱导同调长正合序列：...→H_n(A)→H_n(X)→H_n(X,A)→H_{n-1}(A)→...。连接同态 ∂: H_n(X,A)→H_{n-1}(A) 取相对闭链的边界。切除定理：若 Z⊂A⊂X 且闭包 Z̄⊂Int(A)，则 H_n(X\\Z, A\\Z)≅H_n(X,A)。正合序列和切除定理是计算同调群的两大支柱：正合序列连接不同空间的同调，切除定理允许'切除'不重要的部分。",
      understanding: "正合序列就像'同调记账'：它精确记录了空间、子空间和商空间之间的同调群如何相互关联。关键原则是'进多少出多少'——每个群中进入的映射的像，恰好等于出去的映射的核。切除定理则告诉你：在计算相对同调时，你可以把子空间内部'挖掉'而不改变同调。这就像做手术：只要切得干净（闭包在内部），拓扑结构不变。这两者结合，使得从简单空间计算复杂空间的同调成为可能。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><rect x="5" y="55" width="40" height="20" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/><text x="25" y="69" font-size="7" fill="#2563eb" text-anchor="middle">Hn(A)</text><rect x="55" y="55" width="40" height="20" rx="3" fill="#fce7f3" stroke="#dc2626" stroke-width="1"/><text x="75" y="69" font-size="7" fill="#dc2626" text-anchor="middle">Hn(X)</text><rect x="105" y="55" width="40" height="20" rx="3" fill="#fef3c7" stroke="#d97706" stroke-width="1"/><text x="125" y="69" font-size="7" fill="#d97706" text-anchor="middle">Hn(X,A)</text><rect x="155" y="55" width="40" height="20" rx="3" fill="#e0f2fe" stroke="#0d9488" stroke-width="1"/><text x="175" y="69" font-size="7" fill="#0d9488" text-anchor="middle">Hn₋₁(A)</text><line x1="46" y1="65" x2="53" y2="65" stroke="#333" stroke-width="1"/><line x1="96" y1="65" x2="103" y2="65" stroke="#333" stroke-width="1"/><line x1="146" y1="65" x2="153" y2="65" stroke="#333" stroke-width="1"/><text x="100" y="40" font-size="9" fill="#333" font-weight="bold">长正合序列</text><text x="100" y="100" font-size="10" fill="#333">im = ker (正合性)</text><text x="100" y="120" font-size="11" fill="#333" font-weight="bold">切除定理</text><rect x="30" y="140" width="70" height="40" rx="2" fill="none" stroke="#dc2626" stroke-width="1.5"/><rect x="90" y="140" width="70" height="40" rx="2" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="65" y="165" font-size="9" fill="#dc2626" text-anchor="middle">A</text><text x="125" y="165" font-size="9" fill="#2563eb" text-anchor="middle">X\A</text><text x="100" y="195" font-size="8" fill="#333">Z̄⊂Int(A) ⇒ H(X\Z,A\Z)≅H(X,A)</text></svg>',
      examples: [
        { title: "球面同调的计算", content: "利用 (D^n, S^{n-1}) 的长正合序列和切除定理，推出 H_k(S^n) ≅ Z (k=0,n) 或 0 (其他)。" },
        { title: "Mayer-Vietoris序列", content: "由正合序列和切除定理导出，将空间分解为两个开集计算同调，是van Kampen定理的同调版本。" },
        { title: "相对同调的计算", content: "利用 (X,A) 的长正合序列，从 H_n(A) 和 H_n(X) 可推出 H_n(X,A) 的部分信息。" }
      ],
      theorems: [
        { name: "空间对长正合序列", statement: "对空间对 (X,A)，存在长正合序列 ...→H_n(A)→H_n(X)→H_n(X,A)→H_{n-1}(A)→...。", proof: "由短正合序列0→C_n(A)→C_n(X)→C_n(X,A)→0诱导同调长正合序列（蛇形引理）。连接同态∂:H_n(X,A)→H_{n-1}(A)定义为：取相对闭链的代表c∈C_n(X)，其边界∂c∈C_{n-1}(A)是A中的闭链，∂([c])=[∂c]。正合性验证依赖图追踪法。" },
        { name: "切除定理(Eilenberg-Steenrod)", statement: "若 Z̄⊂Int(A)，则包含映射 (X\\Z, A\\Z)→(X,A) 诱导同调同构。", proof: "取U=X\\Z，则Ū⊂Int(A)的补集条件等价于Z̄⊂Int(A)。U和A的内部覆盖X。用重心重分将奇异链细分为落在U或A中的小链。证明C_n^{U+A}(X)的包含映射是链同伦等价，从而是拟同构。这是Eilenberg-Steenrod公理体系的切除公理。" }
      ],
      applications: "正合序列方法广泛用于同调代数和代数拓扑。在代数几何中，层上同调的长正合序列是核心工具；在微分拓扑中，用于计算流形的同调群；在K理论中，正合序列是基本计算工具。",
      refs: [{ book: "Hatcher", ch: "Ch.2", sec: "§2.1" }, { book: "Munkres", ch: "Ch.4", sec: "§32" }]
    },
    {
      id: "t13", label: "Mayer-Vietoris序列", chapter: "ch2", layer: 2,
      desc: "同调版本的空间分解定理，通过两个开子集的同调群计算整个空间的同调群。",
      content: "Mayer-Vietoris 序列是同调论中与 van Kampen 定理地位相当的核心工具。设 X = U∪V，其中 U, V 为开集（或使内部覆盖 X 的子空间）。则存在长正合序列：...→H_n(U∩V)→H_n(U)⊕H_n(V)→H_n(X)→H_{n-1}(U∩V)→...。其中第一个映射为 (i_*, j_*)，i: U∩V→U, j: U∩V→V；第二个映射为 (k_*-l_*)，k: U→X, l: V→X。连接同态 ∂: H_n(X)→H_{n-1}(U∩V) 由'重心重分'构造。M-V序列是正合序列和切除定理的直接推论，但使用起来更加直接便利。",
      understanding: "Mayer-Vietoris 序列是'分而治之'策略的完美体现：把复杂空间切成两块 U 和 V，你知道每块以及它们重叠部分的同调，就能通过长正合序列推断整体的同调。这就像侦探破案：知道两个嫌疑人的各自信息以及他们的交集，就能推断整个案件。M-V 序列的魔法在于正合性：它精确限定了哪些组合是可能的，使得你从部分信息就能唯一确定整体结构。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><ellipse cx="75" cy="55" rx="50" ry="35" fill="#dbeafe" fill-opacity="0.5" stroke="#2563eb" stroke-width="2"/><ellipse cx="125" cy="55" rx="50" ry="35" fill="#fce7f3" fill-opacity="0.5" stroke="#dc2626" stroke-width="2"/><text x="50" y="45" font-size="10" fill="#2563eb" font-weight="bold">U</text><text x="145" y="45" font-size="10" fill="#dc2626" font-weight="bold">V</text><text x="92" y="70" font-size="9" fill="#7c3aed">U∩V</text><text x="100" y="105" font-size="9" fill="#333">...→Hn(U∩V)→Hn(U)⊕Hn(V)→</text><text x="100" y="120" font-size="9" fill="#333">Hn(X)→Hn₋₁(U∩V)→...</text><text x="100" y="145" font-size="11" fill="#333" font-weight="bold">Mayer-Vietoris 序列</text><text x="100" y="165" font-size="9" fill="#666" text-anchor="middle">X = U ∪ V</text><text x="100" y="180" font-size="9" fill="#666" text-anchor="middle">分而治之计算同调</text></svg>',
      examples: [
        { title: "球面 S^n 的同调", content: "将 S^n 分解为两个半球 D^n_+ 和 D^n_-，交为 S^{n-1}。M-V序列给出 H_k(S^n) 的递推计算。" },
        { title: "环面 T^2 的同调", content: "用 M-V 序列分解环面为两个圆柱，交为两个圆周，得到 H_1(T^2)≅Z², H_2(T^2)≅Z。" },
        { title: "Klein 瓶的同调", content: "M-V 序列给出 H_1(K)≅Z⊕Z/2, H_2(K)=0，与环面在 H_1 中有扭转分量不同。" }
      ],
      theorems: [
        { name: "Mayer-Vietoris 定理", statement: "若 X = Int(U)∪Int(V)，则存在长正合序列连接 H_n(U∩V), H_n(U)⊕H_n(V), H_n(X)。", proof: "考虑短正合序列0→C_n(U∩V)→C_n(U)⊕C_n(V)→C_n^{U+V}(X)→0，其中C_n^{U+V}由像落在U或V中的链生成。由切除定理，H_n^{U+V}(X)≅H_n(X)。诱导长正合序列即Mayer-Vietoris序列。连接同态由重心重分构造：X中闭链分解为U和V中链的和。" },
        { name: "诱导长正合序列", statement: "M-V 序列关于包含映射自然，且可通过上述图表直接构造，是正合序列和切除的推论。", proof: "连接同态∂:H_n(X)→H_{n-1}(U∩V)由重分构造：取X中闭链z，重分为u+v（u在U中，v在V中），则∂z=∂u=-∂v落在U∩V中。∂([z])=[∂u]∈H_{n-1}(U∩V)。自然性来自链映射的交换性：若f:X→Y保持覆盖，则诱导M-V序列间的映射交换。" }
      ],
      applications: "Mayer-Vietoris 序列广泛应用于计算流形、CW复形和代数簇的同调。在微分拓扑中，用于计算流形连通和（connected sum）的同调；在扭结理论中，用于计算扭结补空间的同调群。",
      refs: [{ book: "Hatcher", ch: "Ch.2", sec: "§2.2" }, { book: "Munkres", ch: "Ch.4", sec: "§33" }]
    },
    {
      id: "t14", label: "CW复形的同调", chapter: "ch2", layer: 2,
      desc: "CW复形是现代代数拓扑的标准工作空间，其同调可通过胞腔结构高效计算。",
      content: "CW 复形由逐次粘贴胞腔构造：从离散点集 X⁰ 开始，通过粘贴映射 φ_α: S^{n-1}→X^{n-1} 将 n 维盘 D^n_α 粘贴上去得到 n 维骨架 X^n。CW 复形是代数拓扑的'标准工作空间'，兼具计算便利性和理论充分性。CW 复形的同调可通过胞腔链复形计算：C_n^{CW}(X) = H_n(X^n, X^{n-1})，这是自由阿贝尔群，秩等于 n 维胞腔数。边界算子由粘贴映射的度数确定。由此得到的胞腔同调与奇异同调同构。CW 复形涵盖几乎所有常见的拓扑空间。",
      understanding: "CW 复形就是'用乐高积木搭空间'：从一些点（0维积木）开始，粘上一些线段（1维积木），再粘上一些圆盘（2维积木），依此类推。'C'代表闭包有限（closure-finite），'W'代表弱拓扑（weak topology）。关键优势是：同调群的计算只需要知道每一维有多少块积木，以及它们是如何粘上去的——不需要处理无穷维的奇异链群。几乎所有你关心的空间（流形、代数簇、分类空间）都是CW复形。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><circle cx="50" cy="145" r="4" fill="#2563eb"/><text x="50" y="165" font-size="8" fill="#2563eb" text-anchor="middle">X⁰(点)</text><circle cx="100" cy="145" r="4" fill="#2563eb"/><circle cx="150" cy="145" r="4" fill="#2563eb"/><line x1="50" y1="141" x2="100" y2="141" stroke="#dc2626" stroke-width="2"/><text x="75" y="135" font-size="8" fill="#dc2626">X¹(边)</text><line x1="100" y1="141" x2="150" y2="141" stroke="#dc2626" stroke-width="2"/><ellipse cx="100" cy="80" rx="60" ry="30" fill="none" stroke="#059669" stroke-width="2"/><text x="100" y="72" font-size="8" fill="#059669">X²(面)</text><text x="100" y="188" font-size="11" fill="#333" font-weight="bold">CW复形骨架构造</text></svg>',
      examples: [
        { title: "S^n 的 CW 结构", content: "S^n 有一个 0 维胞腔和一个 n 维胞腔（e⁰∪e^n），边界映射平凡，同调易于计算。" },
        { title: "RP^n 的 CW 结构", content: "RP^n 的每一维 k 各有一个胞腔 (k=0,…,n)，边界映射的度数交替为 0 和 2，产生 Z/2 扭转。" },
        { title: "CP^n 的 CW 结构", content: "CP^n 只有偶数维胞腔：e⁰∪e²∪e⁴∪…∪e^{2n}，所有边界映射平凡，同调群为 Z 在偶数维。" }
      ],
      theorems: [
        { name: "胞腔同调定理", statement: "CW 复形 X 的胞腔同调 H_n^{CW}(X) 与奇异同调 H_n(X) 自然同构。", proof: "利用(X^n,X^{n-1})的相对同调：H_k(X^n,X^{n-1})在k≠n时为零，在k=n时是自由阿贝尔群，秩等于n维胞腔数。通过长正合序列和归纳法，证明H_n(X^n)≅H_n^{CW}的第n个同调。取极限X=colim X^n，利用紧致性论证H_n(X)≅H_n(X^n)对充分大n成立。" },
        { name: "CW 逼近定理", statement: "任何拓扑空间都存在弱同伦等价的 CW 复形（CW 逼近）。", proof: "归纳构造：对每个同伦群生成元，粘贴相应维数胞腔消除多余信息；再粘贴高维胞腔填充缺失信息（如球面间的映射）。取极限CW复形。证明该CW复形与X有弱同伦等价关系：由构造，诱导所有同伦群的同构。在同伦范畴中，CW逼近是唯一的。" }
      ],
      applications: "CW 复形是近代代数拓扑的标准框架：在稳定同伦论中，谱的同伦群通过 CW 谱计算；在几何群论中，群的分类空间是 CW 复形；在代数几何中，代数簇的拓扑通过 CW 分解研究。",
      refs: [{ book: "Hatcher", ch: "Ch.0", sec: "§0.3" }, { book: "Hatcher", ch: "Ch.2", sec: "§2.2" }]
    },
    {
      id: "t15", label: "胞腔同调", chapter: "ch2", layer: 3,
      desc: "利用CW复形的胞腔结构直接计算同调群，是最实用的同调计算方法。",
      content: "胞腔同调是 CW 复形同调论的计算核心。CW 复形 X 的胞腔链复形定义为 C_n^{CW} = H_n(X^n, X^{n-1})，这是以 n 维胞腔为基的自由阿贝尔群。边界算子 d_n: C_n^{CW}→C_{n-1}^{CW} 由粘贴映射 φ_α: S^{n-1}→X^{n-1} 的度数矩阵给出：d_n(e_α^n) = Σ_β d_{αβ} e_β^{n-1}，其中 d_{αβ} 是合成映射 S_α^{n-1}→X^{n-1}→X^{n-1}/(X^{n-1}\\e_β^{n-1})≅S^{n-1} 的度数。胞腔同调的计算优势在于链群是有限生成的（当 CW 复形有限时），且边界算子可通过几何论证（度数）确定。",
      understanding: "胞腔同调将同调计算简化为'数数+算度数'。对每个维度，你只需要知道有多少个胞腔（它们生成链群），以及每个 n 维胞腔的边界由哪些 (n-1) 维胞腔组成（各绕了多少圈）。这就像用地图找路：你知道每个区域（胞腔）和它们的边界关系，就能算出整个地形的拓扑特征。胞腔同调特别适合计算射影空间、透镜空间、Grassmann流形等经典空间的同调。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><rect x="5" y="60" width="50" height="30" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="30" y="79" font-size="9" fill="#2563eb" text-anchor="middle">C₂^{CW}</text><rect x="75" y="60" width="50" height="30" rx="3" fill="#fce7f3" stroke="#dc2626" stroke-width="1.5"/><text x="100" y="79" font-size="9" fill="#dc2626" text-anchor="middle">C₁^{CW}</text><rect x="145" y="60" width="50" height="30" rx="3" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="170" y="79" font-size="9" fill="#d97706" text-anchor="middle">C₀^{CW}</text><line x1="58" y1="75" x2="73" y2="75" stroke="#333" stroke-width="1.5"/><text x="65" y="72" font-size="8" fill="#333">d₂</text><line x1="128" y1="75" x2="143" y2="75" stroke="#333" stroke-width="1.5"/><text x="135" y="72" font-size="8" fill="#333">d₁</text><text x="100" y="110" font-size="10" fill="#333">d_{αβ} = deg(φαβ)</text><text x="100" y="130" font-size="11" fill="#333" font-weight="bold">胞腔链复形</text><text x="100" y="150" font-size="9" fill="#666" text-anchor="middle">每个胞腔贡献一个生成元</text><text x="100" y="168" font-size="9" fill="#666" text-anchor="middle">边界由粘贴映射度数决定</text></svg>',
      examples: [
        { title: "RP^2 的胞腔同调", content: "RP^2 有胞腔 e⁰, e¹, e²。d₂(e²)=2e¹（粘贴映射度数为2），故 H₁(RP^2)≅Z/2, H₂=0。" },
        { title: "CP^n 的胞腔同调", content: "CP^n 只有偶数维胞腔，所有边界算子为0，故 H_{2k}(CP^n)≅Z (k=0,…,n)，奇维同调为0。" },
        { title: "透镜空间 L(p,q)", content: "L(p,q) 有 e⁰, e¹, e², e³。d₂(e²)=pe¹, d₃(e³)=0，故 H₁(L)≅Z/p, H₂=0, H₃≅Z。" }
      ],
      theorems: [
        { name: "胞腔同调与奇异同调同构", statement: "H_n^{CW}(X) ≅ H_n(X)，即胞腔同调与奇异同调自然同构。", proof: "利用(X^n,X^{n-1})的相对同调计算和长正合序列的归纳论证。关键事实：H_k(X^n,X^{n-1})在k≠n时为零，在k=n时秩等于n维胞腔数。通过反复使用长正合序列，逐维证明H_n(X^n)≅H_n^{CW}的第n个同调。取正向极限得H_n(X)≅H_n^{CW}(X)。" },
        { name: "胞腔边界公式", statement: "d_n(e_α^n) = Σ_β deg(φ_{αβ}) e_β^{n-1}，其中度数由粘贴映射诱导。", proof: "边界算子d_n由合成映射给出：对每个n维胞腔e_α^n，考虑粘贴映射φ_α:S^{n-1}→X^{n-1}，然后收缩X^{n-1}除e_β^{n-1}外的所有胞腔到一点，得到映射S^{n-1}→S^{n-1}。该映射的度数deg(φ_{αβ})即为d_n(e_α^n)中e_β^{n-1}的系数。此为胞腔同调的计算核心。" }
      ],
      applications: "胞腔同调是计算拓扑空间同调群的标准方法，广泛应用于低维拓扑、扭结理论、代数几何。在计算拓扑学中，胞腔分解用于高效计算持久同调的数据结构。",
      refs: [{ book: "Hatcher", ch: "Ch.2", sec: "§2.2" }, { book: "Munkres", ch: "Ch.4", sec: "§38" }]
    },
    {
      id: "t16", label: "同调的计算与应用", chapter: "ch2", layer: 3,
      desc: "综合运用多种工具计算经典空间的同调群，并利用同调解决拓扑和几何问题。",
      content: "同调群计算的通用策略：(1) 三角剖分或CW分解，利用单纯同调或胞腔同调；(2) Mayer-Vietoris 序列分解空间；(3) 长正合序列联系相对同调；(4) Künneth 公式计算乘积空间同调。经典结果：可定向闭曲面 Σ_g 的同调为 H_0≅Z, H_1≅Z^{2g}, H_2≅Z；RP^n 的同调根据 n 的奇偶性有不同扭转模式；CP^n 的同调为 Z 在偶数维。同调的应用包括：Brouwer不动点定理的高维推广、向量场的奇点指标定理、Lefschetz不动点定理、映射度理论。",
      understanding: "同调群是你的'拓扑显微镜'：H_0 数连通分支，H_1 数环状洞，H_2 数空腔，H_n 数 n 维空洞。计算同调就像给空间做'X光透视'——你不需要完全重建空间，只需知道它在每一维有多少个独立的洞。同调群的美妙之处在于它是可计算的：通过线性代数（矩阵行简化）就能算出任何有限单纯复形或CW复形的同调群。这是代数拓扑区别于其他数学分支的独特优势。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><text x="100" y="25" font-size="11" fill="#333" font-weight="bold" text-anchor="middle">经典空间同调表</text><line x1="20" y1="35" x2="180" y2="35" stroke="#333" stroke-width="1"/><text x="40" y="52" font-size="8" fill="#2563eb">S^n</text><text x="100" y="52" font-size="8" fill="#333">H₀=Z, Hn=Z, 其他=0</text><text x="40" y="68" font-size="8" fill="#dc2626">T²</text><text x="100" y="68" font-size="8" fill="#333">H₀=Z, H₁=Z², H₂=Z</text><text x="40" y="84" font-size="8" fill="#059669">RP²</text><text x="100" y="84" font-size="8" fill="#333">H₀=Z, H₁=Z/2, H₂=0</text><text x="40" y="100" font-size="8" fill="#7c3aed">CP^n</text><text x="100" y="100" font-size="8" fill="#333">H_{2k}=Z, H_{odd}=0</text><text x="40" y="116" font-size="8" fill="#d97706">Σ_g</text><text x="100" y="116" font-size="8" fill="#333">H₀=Z, H₁=Z^{2g}, H₂=Z</text><text x="100" y="145" font-size="10" fill="#dc2626" font-weight="bold">应用</text><text x="100" y="162" font-size="8" fill="#333">Brouwer不动点 · Lefschetz定理</text><text x="100" y="178" font-size="8" fill="#333">向量场奇点 · 映射度</text></svg>',
      examples: [
        { title: "Lefschetz 不动点定理", content: "若 f: X→X 的 Lefschetz 数 L(f)=Σ(-1)^n tr(f_*:H_n(X)→H_n(X)) 非零，则 f 有不动点。推广了 Brouwer 定理。" },
        { title: "Borsuk-Ulam 定理", content: "利用同调证明：对连续映射 f: S^n→R^n，存在对径点 x,-x 使得 f(x)=f(-x)。" },
        { title: "向量场指标", content: "紧流形上孤立奇点向量场的指标和等于 Euler 示性数 χ(X)=Σ(-1)^n rank H_n(X)。" }
      ],
      theorems: [
        { name: "Lefschetz 不动点定理", statement: "若 L(f)≠0，则 f 有不动点。特别地，可缩空间上的连续自映射必有不动点。", proof: "L(f)=Σ(-1)^n tr(f_*:H_n(X;Q)→H_n(X;Q))。若f无不动点，则存在开覆盖使f(U)∩U=∅，利用同调的交理论和Lefschetz数的局部化公式证明L(f)=0。可缩空间上H_0=Q, H_n=0(n>0)，故L(f)=tr(f_*:H_0→H_0)=1≠0，必有不动点。这是Brouwer定理的深远推广。" },
        { name: "Hopf 指标定理", statement: "紧流形上向量场奇点指标和等于 Euler 示性数，与向量场选择无关。", proof: "χ(M)=Σ(-1)^n rank H_n(M)。将向量场视为M→TM的截面，在奇点处取局部指标。构造M到自身的小扰动映射，其不动点恰好对应向量场的奇点。利用Lefschetz不动点定理：L(id)=χ(M)。每个奇点指标等于该处Lefschetz局部指标，求和得χ(M)。" }
      ],
      applications: "同调论在数据科学中通过持久同调（persistent homology）分析高维数据的拓扑结构；在计算机视觉中用于形状识别和匹配；在计算生物学中分析分子结构；在机器人学中分析构型空间。",
      refs: [{ book: "Hatcher", ch: "Ch.2", sec: "§2.2" }, { book: "Hatcher", ch: "Ch.2", sec: "§2.C" }]
    },
    // ==================== Ch3: 上同调论 ====================
    {
      id: "t17", label: "上同调群的定义", chapter: "ch3", layer: 1,
      desc: "上同调是同调的对偶概念，通过链群到系数群的所有同态定义上链和上边缘算子。",
      content: "上同调群是同调群的对偶构造。给定链复形 (C_n, ∂_n) 和系数群 G，定义上链群 C^n = Hom(C_n, G)（所有群同态 φ: C_n→G）。上边缘算子 δ^n: C^n→C^{n+1} 由 (δ^nφ)(c) = φ(∂_{n+1}c) 定义。类似地，δ^{n+1}∘δ^n=0，因此可定义上闭链群 Z^n = ker δ^n 和上边缘链群 B^n = im δ^{n-1}。第 n 个上同调群为 H^n(X;G) = Z^n/B^n。上同调的核心优势在于其丰富的代数结构：上同调类可相乘（Cup积），使 H^*(X;R) 成为分次环。",
      understanding: "上同调把同调'翻转'过来。同调追问'什么几何对象存在'（链），上同调追问'什么函数可以定义在这些几何对象上'（上链）。如果用水的流动来比喻：同调研究水流的不可能路径（被洞阻挡），上同调研究水流的可能方向（梯度场的存在性）。上同调的优势在于它有自然的乘法结构（Cup积），这在同调中是没有的——这使得上同调不仅是一个群，还是一个环，包含更多信息。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><rect x="5" y="20" width="50" height="30" rx="3" fill="#fce7f3" stroke="#dc2626" stroke-width="1.5"/><text x="30" y="39" font-size="9" fill="#dc2626" text-anchor="middle">C²</text><rect x="75" y="20" width="50" height="30" rx="3" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="100" y="39" font-size="9" fill="#d97706" text-anchor="middle">C¹</text><rect x="145" y="20" width="50" height="30" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="170" y="39" font-size="9" fill="#2563eb" text-anchor="middle">C⁰</text><line x1="58" y1="35" x2="73" y2="35" stroke="#333" stroke-width="1.5"/><text x="65" y="32" font-size="8" fill="#333">δ¹</text><line x1="128" y1="35" x2="143" y2="35" stroke="#333" stroke-width="1.5"/><text x="135" y="32" font-size="8" fill="#333">δ⁰</text><text x="100" y="65" font-size="9" fill="#dc2626">δ²∘δ¹=0</text><text x="100" y="85" font-size="11" fill="#333" font-weight="bold">上链复形</text><text x="100" y="100" font-size="10" fill="#333">H^n = ker δ^n / im δ^{n-1}</text><text x="100" y="125" font-size="10" fill="#7c3aed" font-weight="bold">C^n = Hom(C_n, G)</text><text x="100" y="145" font-size="9" fill="#666" text-anchor="middle">上同调 = 同调的对偶</text><text x="100" y="162" font-size="9" fill="#666" text-anchor="middle">Cup积 → 环结构</text></svg>',
      examples: [
        { title: "S^n 的上同调", content: "H^0(S^n;Z)≅Z, H^n(S^n;Z)≅Z, 其他 H^k=0。与同调同构，但上同调有环结构。" },
        { title: "T^2 的上同调", content: "H^0≅Z, H^1≅Z², H^2≅Z。Cup积 α∪β 生成 H^2，其中 α,β 为 H^1 的生成元。" },
        { title: "RP^n 的上同调(Z/2)", content: "H^*(RP^n;Z/2) ≅ Z/2[α]/(α^{n+1})，其中 |α|=1。这是截断多项式环。" }
      ],
      theorems: [
        { name: "上同调函子性", statement: "上同调是反变函子：连续映射 f: X→Y 诱导同态 f^*: H^n(Y)→H^n(X)。", proof: "定义上链映射f^#:C^n(Y)→C^n(X)，φ↦φ∘f_#（前复合）。验证δ∘f^#=f^#∘δ：因(δf^#φ)(c)=f^#φ(∂c)=φ(f_#∂c)=φ(∂f_#c)=δφ(f_#c)=f^#(δφ)(c)。故f^#诱导上同调同态f^*。反变性：(g∘f)^*=f^*∘g^*，因为上链层面上前复合逆转顺序。" },
        { name: "上同调与同调的关系", statement: "由万有系数定理，上同调可由同调群和 Ext 群确定，但上同调的环结构包含额外信息。", proof: "万有系数定理给出H^n(X;G)≅Hom(H_n(X),G)⊕Ext(H_{n-1}(X),G)。同调测度'洞'的存在性（几何信息），上同调测度'函数'的存在性（对偶信息）。上同调的核心优势在于Cup积赋予的环结构：H^*(X)是分次环，而H_*(X)只是分次群。此环结构能区分同调同构但非同伦等价的空间。" }
      ],
      applications: "上同调在微分几何中通过 de Rham 上同调与微分形式关联；在代数几何中，层上同调是核心工具；在物理学中，上同调用于描述规范场和拓扑量子场论。",
      refs: [{ book: "Hatcher", ch: "Ch.3", sec: "§3.1" }, { book: "Munkres", ch: "Ch.5", sec: "§42" }]
    },
    {
      id: "t18", label: "Cup积与上同调环", chapter: "ch3", layer: 2,
      desc: "Cup积赋予上同调以分次环结构，是上同调区别于同调的核心代数特征。",
      content: "Cup 积 ⌣: H^p(X;R)×H^q(X;R)→H^{p+q}(X;R) 是上同调最重要的额外结构。在上链层面，对 φ∈C^p, ψ∈C^q，定义 (φ⌣ψ)(σ: Δ^{p+q}→X) = φ(σ|_{[v₀,…,v_p]})·ψ(σ|_{[v_p,…,v_{p+q}]})。此定义诱导上同调层面的双线性乘法，使 H^*(X;R) = ⊕_{n≥0} H^n(X;R) 成为分次交换环：α⌣β = (-1)^{pq} β⌣α。Cup 积的几何意义：上同调类代表'子流形的交'（通过 Poincaré 对偶）。Cup 积长度（上同调类幂零的阶数）给出空间的拓扑信息。",
      understanding: "Cup 积就像给上同调类一个'乘法'：两个上同调类相乘得到更高维的上同调类。在几何上，通过 Poincaré 对偶，Cup 积对应子流形的交（两个子流形相交得到更低维的子流形，对偶后得到更高维的上同调类）。Cup 积的威力在于能区分同调同构但上同调环不同的空间——例如 CP^2 和 S^2∨S^4 同调同构但上同调环不同（前者有非平凡 Cup 积，后者没有）。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><rect x="20" y="40" width="60" height="30" rx="5" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="50" y="59" font-size="10" fill="#2563eb" text-anchor="middle">H^p(X)</text><rect x="120" y="40" width="60" height="30" rx="5" fill="#fce7f3" stroke="#dc2626" stroke-width="1.5"/><text x="150" y="59" font-size="10" fill="#dc2626" text-anchor="middle">H^q(X)</text><rect x="60" y="110" width="80" height="30" rx="5" fill="#e8f0fe" stroke="#7c3aed" stroke-width="2"/><text x="100" y="129" font-size="10" fill="#7c3aed" text-anchor="middle">H^{p+q}(X)</text><line x1="80" y1="70" x2="85" y2="110" stroke="#333" stroke-width="1.5"/><line x1="120" y1="70" x2="115" y2="110" stroke="#333" stroke-width="1.5"/><text x="100" y="95" font-size="11" fill="#7c3aed" font-weight="bold">⌣</text><text x="100" y="160" font-size="9" fill="#333">α⌣β = (-1)^{pq} β⌣α</text><text x="100" y="178" font-size="10" fill="#333" font-weight="bold">分次交换环</text></svg>',
      examples: [
        { title: "CP^n 的上同调环", content: "H^*(CP^n;Z) ≅ Z[α]/(α^{n+1})，其中 |α|=2。Cup 积 α^k 生成 H^{2k}，α^{n+1}=0。" },
        { title: "S^p×S^q 的上同调环", content: "H^*(S^p×S^q;Z) ≅ Z[α,β]/(α²,β²)，其中 |α|=p, |β|=q。α⌣β 生成 H^{p+q}。" },
        { title: "区分 CP^2 与 S^2∨S^4", content: "两者同调同构，但 CP^2 中 α⌣α=β（生成 H^4），而 S^2∨S^4 中所有 Cup 积为零。" }
      ],
      theorems: [
        { name: "Cup积的分次交换性", statement: "α⌣β = (-1)^{pq} β⌣α，因此上同调环是分次交换的。", proof: "在上链层面，(φ⌣ψ)(σ)=φ(σ|_[v₀,...,v_p])·ψ(σ|_[v_p,...,v_{p+q}])。交换顺序需将顶点排列从(v₀,...,v_p,v_p,...,v_{p+q})变为(v₀,...,v_q,v_q,...,v_{p+q})，这相当于一个(p+q+1)阶置换，符号为(-1)^{pq}。由于上链复形是单纯形的前面限制，此符号传递到上同调层面。" },
        { name: "Cup积的自然性", statement: "连续映射 f: X→Y 诱导环同态 f^*: H^*(Y)→H^*(X)，即 f^*(α⌣β)=f^*(α)⌣f^*(β)。", proof: "在上链层面：f^#(φ⌣ψ)(σ)=(φ⌣ψ)(f∘σ)=φ(f∘σ|_前)·ψ(f∘σ|_后)。而(f^#φ⌣f^#ψ)(σ)=f^#φ(σ|_前)·f^#ψ(σ|_后)=φ(f∘σ|_前)·ψ(f∘σ|_后)。两者相等，故f^#(φ⌣ψ)=f^#φ⌣f^#ψ。传递到上同调层面即f^*是环同态。" }
      ],
      applications: "Cup 积用于区分同调同构但非同伦等价的空间，在代数拓扑中是不可或缺的精细不变量。在扭结理论中，上同调环用于区分扭结；在辛几何中，量子上同调环是重要研究对象。",
      refs: [{ book: "Hatcher", ch: "Ch.3", sec: "§3.2" }, { book: "Munkres", ch: "Ch.5", sec: "§47" }]
    },
    {
      id: "t19", label: "万有系数定理", chapter: "ch3", layer: 3,
      desc: "建立同调群与上同调群（及不同系数群）之间的代数关系，是系数变更的核心工具。",
      content: "万有系数定理（UCT）描述了同调和上同调群随系数群变化的关系。对于同调，有分裂短正合序列：0→H_n(X)⊗G→H_n(X;G)→Tor(H_{n-1}(X), G)→0。对于上同调：0→Ext(H_{n-1}(X), G)→H^n(X;G)→Hom(H_n(X), G)→0。这些序列虽非自然分裂，但给出了同调/上同调群与系数群的关系。关键含义：已知 Z 系数同调，可计算任意系数同调/上同调。Tor 捕捉扭转，Ext 捕捉扩张。UCT 揭示了代数拓扑与同调代数的深度联系。",
      understanding: "万有系数定理告诉你：如果你知道一个空间的 Z 系数同调，你就能算出任何其他系数群（如 Z/2, Q, R）的同调和上同调。这就像你知道一个外国人说什么语言（Z 系数同调），你就可以通过翻译（⊗和Tor/Ext操作）知道他在其他语言中怎么说。Tor 出现是因为扭转（torsion）在与某些群做张量积时会消失或变化；Ext 出现是因为上同调作为Hom函子，不是正合的，需要 Ext 来修正。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><rect x="15" y="30" width="70" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="50" y="49" font-size="9" fill="#2563eb" text-anchor="middle">H_*(X;Z)</text><rect x="115" y="30" width="70" height="30" rx="4" fill="#fce7f3" stroke="#dc2626" stroke-width="1.5"/><text x="150" y="49" font-size="9" fill="#dc2626" text-anchor="middle">H_*(X;G)</text><line x1="85" y1="45" x2="115" y2="45" stroke="#333" stroke-width="2"/><text x="100" y="42" font-size="10" fill="#333">UCT</text><text x="100" y="80" font-size="9" fill="#333">0→Hn⊗G→Hn(X;G)→Tor(Hn₋₁,G)→0</text><text x="100" y="100" font-size="9" fill="#333">0→Ext(Hn₋₁,G)→H^n(X;G)→Hom(Hn,G)→0</text><text x="100" y="130" font-size="10" fill="#7c3aed" font-weight="bold">关键函子</text><text x="50" y="150" font-size="9" fill="#dc2626">⊗: 张量积</text><text x="50" y="165" font-size="9" fill="#dc2626">Tor: 扭转</text><text x="130" y="150" font-size="9" fill="#2563eb">Hom: 同态</text><text x="130" y="165" font-size="9" fill="#2563eb">Ext: 扩张</text></svg>',
      examples: [
        { title: "RP^2 的 Z/2 系数同调", content: "已知 H_*(RP^2;Z) = (Z, Z/2, 0)，UCT 给出 H_1(RP^2;Z/2)≅Z/2, H_2(RP^2;Z/2)≅Z/2。" },
        { title: "有理系数同调", content: "H_n(X;Q) ≅ H_n(X;Z)⊗Q，即有理同调只保留自由部分，消除所有扭转。" },
        { title: "上同调与同调的区别", content: "对于 RP^2，H^1(RP^2;Z)=0 但 H_1(RP^2;Z)=Z/2。Ext(Z/2,Z)=Z/2 出现在上同调中。" }
      ],
      theorems: [
        { name: "同调万有系数定理", statement: "存在分裂短正合序列 0→H_n(X)⊗G→H_n(X;G)→Tor(H_{n-1}(X),G)→0。", proof: "取Z系数的自由链复形C_*。张量积G得C_*⊗G。由于自由阿贝尔群的子群仍自由，C_n的子群是自由的，故序列分裂（但非自然）。由同调代数：H_n(C_*⊗G)由H_n⊗G和Tor(H_{n-1},G)决定。Tor测量张量积的导出函子，捕捉扭转信息在张量积中的行为。" },
        { name: "上同调万有系数定理", statement: "存在分裂短正合序列 0→Ext(H_{n-1}(X),G)→H^n(X;G)→Hom(H_n(X),G)→0。", proof: "对自由链复形C_*应用Hom(-,G)得上链复形C^*。上同调H^n(C^*)由Hom(H_n,G)和Ext(H_{n-1},G)决定。Hom(H_n,G)是自由部分的对偶，Ext(H_{n-1},G)是扭转部分的贡献。Ext测量Hom的左导出函子，反映H_{n-1}中扭转元素到G的扩张。序列分裂但非自然。" }
      ],
      applications: "万有系数定理是系数变更的标准工具。在代数拓扑中，Z/p 系数同调常用于计算扭转和同伦群；在代数几何中，l-adic 上同调利用不同系数研究簇的拓扑；在数论中，Galois 上同调的系数变更至关重要。",
      refs: [{ book: "Hatcher", ch: "Ch.3", sec: "§3.A" }, { book: "Munkres", ch: "Ch.5", sec: "§47" }]
    },
    {
      id: "t20", label: "Kunneth公式", chapter: "ch3", layer: 3,
      desc: "计算乘积空间同调/上同调的标准公式，将乘积空间的拓扑信息分解为因子的拓扑信息。",
      content: "Künneth 公式描述乘积空间 X×Y 的同调与上同调。对于同调，有分裂短正合序列：0→⊕_{i+j=n} H_i(X)⊗H_j(Y)→H_n(X×Y)→⊕_{i+j=n-1} Tor(H_i(X), H_j(Y))→0。对于上同调，当系数为域时有同构 H^n(X×Y) ≅ ⊕_{i+j=n} H^i(X)⊗H^j(Y)。更一般地，有上同调层面的 Künneth 短正合序列。Künneth 公式体现了代数拓扑中'乘积空间的可分解性'，是 Eilenberg-Zilber 定理的代数推论。在域系数下，上同调环满足 H^*(X×Y) ≅ H^*(X)⊗H^*(Y)（分次张量积）。",
      understanding: "Künneth 公式告诉你如何从两个空间的同调/上同调'拼出'它们乘积空间的同调/上同调。这就像知道两个独立拼图各自的结构，就能推断把它们并排放置时的整体结构。公式的核心是：乘积空间的 n 维同调由所有 i+j=n 维的因子同调张量积组成，再加上 Tor 修正项。在好的系数（如域）下，Tor 项消失，公式变得特别简单——乘积空间的上同调就是因子空间上同调的张量积。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><rect x="10" y="40" width="50" height="40" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="35" y="64" font-size="9" fill="#2563eb" text-anchor="middle">X</text><rect x="140" y="40" width="50" height="40" rx="3" fill="#fce7f3" stroke="#dc2626" stroke-width="1.5"/><text x="165" y="64" font-size="9" fill="#dc2626" text-anchor="middle">Y</text><text x="100" y="55" font-size="14" fill="#333">×</text><rect x="50" y="110" width="100" height="40" rx="3" fill="#e8f0fe" stroke="#7c3aed" stroke-width="2"/><text x="100" y="134" font-size="10" fill="#7c3aed" text-anchor="middle">X × Y</text><line x1="50" y1="80" x2="70" y2="110" stroke="#333" stroke-width="1.5"/><line x1="150" y1="80" x2="130" y2="110" stroke="#333" stroke-width="1.5"/><text x="100" y="170" font-size="9" fill="#333">H_n(X×Y) ≅ ⊕_{i+j=n} H_i⊗H_j</text><text x="100" y="185" font-size="9" fill="#333">⊕ ⊕ Tor(H_i, H_j)</text></svg>',
      examples: [
        { title: "环面 T^2=S^1×S^1", content: "Künneth: H_0(T^2)≅Z, H_1(T^2)≅Z², H_2(T^2)≅Z。每个 S^1 贡献一个 H_1 生成元。" },
        { title: "S^p×S^q 的上同调环", content: "H^*(S^p×S^q;Z)≅Z[α,β]/(α²,β²) 其中 |α|=p, |β|=q。Künneth + Cup 积结构。" },
        { title: "RP^2×S^1 的同调", content: "Künneth 给出 H_1≅Z⊕Z/2, H_2≅Z/2, H_3≅Z/2。Tor(Z/2,Z)=Z/2 提供修正。" }
      ],
      theorems: [
        { name: "同调 Künneth 定理", statement: "存在分裂短正合序列连接 H_n(X×Y) 与 ⊕_{i+j=n} H_i(X)⊗H_j(Y) 和 Tor 项。", proof: "由Eilenberg-Zilber定理，C_*(X×Y)链同伦等价于C_*(X)⊗C_*(Y)（分次张量积）。对两个链复形的张量积应用代数Künneth公式：H_n(C⊗D)由⊕_{i+j=n}H_i(C)⊗H_j(D)和⊕_{i+j=n-1}Tor(H_i(C),H_j(D))决定。序列分裂但非自然。核心是Eilenberg-Zilber的acyclic model论证。" },
        { name: "上同调 Künneth 定理", statement: "对域系数，H^n(X×Y) ≅ ⊕_{i+j=n} H^i(X)⊗H^j(Y)，且上同调环分次张量积。", proof: "对域系数，Tor和Ext项消失，同调Künneth公式给出同构。上同调版本由同调Künneth和对偶得到。环结构：H^*(X×Y)≅H^*(X)⊗H^*(Y)作为分次代数，Cup积满足(α⊗β)⌣(γ⊗δ)=(-1)^{|β||γ|}(α⌣γ)⊗(β⌣δ)。这体现了因子空间上同调信息的独立性与交互规则。" }
      ],
      applications: "Künneth 公式用于计算复杂乘积空间的同调/上同调，在代数拓扑、代数几何和数学物理中广泛应用。在弦理论中，紧化空间的拓扑通过 Künneth 公式分析。",
      refs: [{ book: "Hatcher", ch: "Ch.3", sec: "§3.B" }, { book: "Munkres", ch: "Ch.5", sec: "§48" }]
    },
    {
      id: "t21", label: "Poincare对偶", chapter: "ch3", layer: 3,
      desc: "紧致可定向流形上同调与同调之间的对偶关系，是流形拓扑学最深刻的定理之一。",
      content: "Poincaré 对偶定理：设 M 为紧致可定向 n 维流形（可带边），则存在同构 H^k(M;G) ≅ H_{n-k}(M;G)（以及 H^k(M,∂M;G) ≅ H_{n-k}(M;G)）。对偶同构由与基本类 [M]∈H_n(M;G) 的 Cap 积给出：D(α) = α⌢[M]。在不可定向流形上，Z/2 系数下仍有对偶。Poincaré 对偶的几何解释：每个 k 维上同调类对应一个 (n-k) 维子流形（其对偶），反之亦然。Cup 积在此对应下变为子流形的交。这是代数拓扑与几何拓扑最深层的联系之一。",
      understanding: "Poincaré 对偶揭示了流形的一个惊人对称性：k 维上同调与 (n-k) 维同调之间有一一对应。在三维空间中，这意味着：0维同调（连通分支）↔ 3维上同调，1维同调（环）↔ 2维上同调，2维同调（空腔）↔ 1维上同调，3维同调↔ 0维上同调。这就像镜子反射：流形的拓扑结构在维度上对称。更美妙的是，Cup 积在对偶下变成了几何交——两个上同调类的 Cup 积对应它们对偶子流形的交。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><text x="100" y="20" font-size="11" fill="#333" font-weight="bold" text-anchor="middle">Poincaré 对偶</text><rect x="15" y="40" width="60" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="45" y="59" font-size="9" fill="#2563eb" text-anchor="middle">H^k(M)</text><rect x="125" y="40" width="60" height="30" rx="4" fill="#fce7f3" stroke="#dc2626" stroke-width="1.5"/><text x="155" y="59" font-size="9" fill="#dc2626" text-anchor="middle">H_{n-k}(M)</text><line x1="75" y1="55" x2="125" y2="55" stroke="#333" stroke-width="1.5" stroke-dasharray="4,2"/><text x="100" y="52" font-size="13" fill="#7c3aed">≅</text><text x="100" y="85" font-size="9" fill="#333">D(α) = α⌢[M]</text><text x="100" y="105" font-size="10" fill="#333" font-weight="bold">Cap积实现同构</text><text x="100" y="130" font-size="9" fill="#666">紧致可定向n维流形M</text><text x="100" y="148" font-size="9" fill="#666">H^k(M) ≅ H_{n-k}(M)</text><text x="100" y="170" font-size="9" fill="#dc2626">Cup积 ↔ 子流形交</text></svg>',
      examples: [
        { title: "S^n 的 Poincaré 对偶", content: "H^0(S^n)≅H_n(S^n)≅Z, H^n(S^n)≅H_0(S^n)≅Z，其他对偶平凡。" },
        { title: "CP^n 的 Poincaré 对偶", content: "H^{2k}(CP^n)≅H_{2n-2k}(CP^n)≅Z。Cup 积 α^k⌣α^{n-k}=α^n 对应子流形 CP^k 和 CP^{n-k} 的交。" },
        { title: "不可定向流形", content: "RP^2 的 Z 系数 Poincaré 对偶不成立（H^0≅Z 但 H_2=0），但 Z/2 系数下 H^k(RP^2;Z/2)≅H_{2-k}(RP^2;Z/2)。" }
      ],
      theorems: [
        { name: "Poincaré 对偶定理", statement: "设 M 为紧致可定向 n 维流形，则 Cap 积与基本类 D(α)=α⌢[M] 给出同构 H^k(M)≅H_{n-k}(M)。", proof: "取M的对偶胞腔分解：将M三角剖分，对偶剖分中k维胞腔对应(n-k)维胞腔。对偶剖分的胞腔链复形同构于上链复形。利用Mayer-Vietoris序列和归纳法，证明Cap积D:H^k(M)→H_{n-k}(M)是同构。基本类[M]∈H_n(M)的存在性由可定向性保证，且D在局部上同调层面是良定义的。" },
        { name: "Lefschetz 对偶", statement: "对紧致可定向带边流形 (M,∂M)，有 H^k(M)≅H_{n-k}(M,∂M) 和 H^k(M,∂M)≅H_{n-k}(M)。", proof: "将Poincaré对偶推广到带边流形。取M的2倍（double）DM=M∪_{∂M}M，对DM应用Poincaré对偶，再利用Mayer-Vietoris序列分解。基本类在H_n(M,∂M)中。Cap积给出H^k(M)≅H_{n-k}(M,∂M)和H^k(M,∂M)≅H_{n-k}(M)。核心是基本类在边界上的行为。" }
      ],
      applications: "Poincaré 对偶是代数拓扑和几何拓扑的桥梁。在扭结理论中，Alexander 对偶是其推广；在代数几何中，Serre 对偶和 Grothendieck 对偶是深远推广；在数学物理中，电磁对偶与 Poincaré 对偶有关。",
      refs: [{ book: "Hatcher", ch: "Ch.3", sec: "§3.3" }, { book: "Munkres", ch: "Ch.5", sec: "§50" }]
    },
    {
      id: "t22", label: "上同调的应用", chapter: "ch3", layer: 4,
      desc: "上同调论在代数拓扑、微分拓扑和代数几何中的高级应用，涵盖示性类和 obstruction 理论。",
      content: "上同调的应用远超同调： (1) 示性类（Stiefel-Whitney 类、Chern 类、Pontryagin 类）是向量丛的上同调不变量，用于分类向量丛和流形；(2) Obstruct 理论利用上同调描述提升和延拓障碍；(3) de Rham 上同调连接微分形式与拓扑，de Rham 定理给出 H^k_{dR}(M)≅H^k(M;R)；(4) 谱序列（Serre 谱序列、Leray 谱序列）是计算纤维空间上同调的强大工具；(5) 在代数几何中，étale 上同调、晶体上同调等是 Weil 猜想的证明工具。上同调丰富的代数结构使其成为跨领域的通用语言。",
      understanding: "上同调的应用就像一把瑞士军刀，在不同领域有不同用途：在微分几何中，它告诉你流形上是否存在某种几何结构（如复结构、辛结构）；在物理学中，它描述规范场的拓扑类型（如磁单极子）；在代数几何中，它用于计数方程的解。示性类是上同调最成功的应用之一——它们把向量丛的几何信息（曲率）转化为拓扑信息（上同调类），实现了几何与拓扑的完美结合。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><circle cx="100" cy="100" r="70" fill="none" stroke="#2563eb" stroke-width="2"/><text x="100" y="22" font-size="10" fill="#333" font-weight="bold" text-anchor="middle">上同调应用生态</text><text x="100" y="55" font-size="9" fill="#dc2626">示性类</text><text x="45" y="100" font-size="9" fill="#059669">de Rham</text><text x="155" y="100" font-size="9" fill="#d97706">障碍理论</text><text x="55" y="145" font-size="9" fill="#7c3aed">谱序列</text><text x="145" y="145" font-size="9" fill="#0d9488">étale上同调</text><text x="100" y="175" font-size="8" fill="#333">向量丛 · 流形分类 · 物理</text></svg>',
      examples: [
        { title: "Chern 类与复结构", content: "CP^n 的切丛 Chern 类为 c(TCP^n)=(1+α)^{n+1}，其中 α∈H^2(CP^n;Z)。Chern 数决定复流形的配边类。" },
        { title: "Stiefel-Whitney 类", content: "RP^n 的全 Stiefel-Whitney 类为 w(RP^n)=(1+α)^{n+1}∈H^*(RP^n;Z/2)，其中 α∈H^1。w_1≠0 表示不可定向。" },
        { title: "de Rham 定理", content: "微分形式的外微分 d 满足 d²=0，de Rham 上同调 H^k_{dR}(M)≅H^k(M;R)。微分形式的楔积对应 Cup 积。" }
      ],
      theorems: [
        { name: "de Rham 定理", statement: "H^k_{dR}(M) ≅ H^k(M;R)（环同构），楔积对应 Cup 积。", proof: "定义映射I:H^k_{dR}(M)→H^k(M;R)，将微分形式ω映射到上链σ↦∫_σ ω。验证I(dω)=δI(ω)（Stokes定理），故I是链映射。利用单位分解和Poincaré引理证明I诱导同构：对M=ℝ^n成立，通过Mayer-Vietoris归纳到一般流形。楔积对应Cup积由Fubini定理保证。" },
        { name: "Chern-Weil 理论", statement: "向量丛的曲率形式通过不变多项式产生示性类，且不依赖于联络的选择。", proof: "对向量丛选联络，曲率形式Ω。对Ad-不变多项式P，P(Ω)是闭的de Rham形式（Bianchi恒等式保证dP(Ω)=0）。若选另一联络，其曲率差为恰当形式，故P(Ω)的de Rham类不依赖于联络。通过de Rham定理，此闭形式对应上同调类，即示性类。核心是曲率形式与联络的变分公式。" }
      ],
      applications: "示性类用于分类流形和向量丛；在物理学中，量子霍尔效应、拓扑绝缘体、轴子电动力学都由上同调描述；在弦理论中，D膜电荷由K理论（上同调的推广）分类。",
      refs: [{ book: "Hatcher", ch: "Ch.3", sec: "§3.3" }, { book: "Hatcher", ch: "Ch.4", sec: "§4.2" }]
    },
    // ==================== Ch4: 同伦群 ====================
    {
      id: "t23", label: "高阶同伦群", chapter: "ch4", layer: 2,
      desc: "基本群的推广，使用高维球面 S^n 的映射类定义 n 维同伦群 π_n(X)。",
      content: "n 维同伦群 π_n(X,x₀) 是保基点映射 (S^n, s₀)→(X, x₀) 的同伦类集合。当 n=1 时，π_1 即基本群（非交换）。当 n≥2 时，π_n(X) 是阿贝尔群。群运算定义为：将两个映射在 S^n 的赤道处'拼接'，利用 S^n 的高维连通性证明良定义性和交换性。π_n 比同调群更难计算，但包含更精细的拓扑信息。经典结果：π_n(S^n)≅Z（由恒等映射生成），但 π_k(S^n) 对于 k>n 极其复杂，至今仍是活跃研究方向。",
      understanding: "高阶同伦群是基本群的'高维表亲'：基本群用 S^1（圆周）探测空间中的一维洞，π_2 用 S^2（球面）探测二维洞，π_3 用 S^3 探测三维洞，等等。一个关键区别是：n≥2 时，π_n 总是交换群（阿贝尔群），而 π_1 可以是非交换的。计算 π_n(S^k) 是拓扑学中最困难的问题之一——例如 π_{n+1}(S^n)≅Z/2 (n≥3)，这个结果就很不平凡。同伦群比同调群更精细（能区分同调相同但不同伦的空间），但代价是计算极其困难。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><circle cx="100" cy="100" r="45" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="100" cy="100" r="20" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/><circle cx="100" cy="100" r="3" fill="#7c3aed"/><text x="100" y="92" font-size="8" fill="#7c3aed" text-anchor="middle">x₀</text><text x="100" y="50" font-size="9" fill="#2563eb">S^n</text><text x="100" y="75" font-size="8" fill="#dc2626">f</text><text x="100" y="160" font-size="11" fill="#333" font-weight="bold">π_n(X,x₀)</text><text x="100" y="178" font-size="9" fill="#666" text-anchor="middle">f: S^n→X 的同伦类</text><text x="100" y="193" font-size="8" fill="#666" text-anchor="middle">n≥2时交换群</text></svg>',
      examples: [
        { title: "π_n(S^n)≅Z", content: "映射 f: S^n→S^n 的度数 deg(f)∈Z 给出同构 π_n(S^n)≅Z。恒等映射对应1。" },
        { title: "π_3(S^2)≅Z", content: "Hopf 纤维化 S^3→S^2 生成 π_3(S^2)。Hopf 不变量1是 π_3(S^2)≅Z 的生成元。" },
        { title: "π_{n+1}(S^n)≅Z/2 (n≥3)", content: "Freudenthal 悬挂定理给出此结果。生成元为悬挂映射 Σ: S^{n+1}→S^n 的两倍恒等映射。" }
      ],
      theorems: [
        { name: "n≥2 时 π_n 是阿贝尔群", statement: "对 n≥2，π_n(X,x₀) 是阿贝尔群。证明利用 S^n 的高维连通性构造交换同伦。", proof: "核心是利用S^n(n≥2)的高维连通性：在S^n中，两个赤道S^{n-1}可以彼此绕过而不相交。构造同伦：将两个映射f,g:S^n→X在赤道处拼接，通过旋转赤道的位置将f·g连续变形为g·f。具体地，在S^n上旋转坐标使赤道位置互换，高维空间提供了足够的自由度实现此旋转。" },
        { name: "同伦群的函子性", statement: "连续映射 f: X→Y 诱导同态 f_*: π_n(X)→π_n(Y)，且 (g∘f)_* = g_*∘f_*。", proof: "定义f_*([α])=[f∘α]，其中α:S^n→X。验证群同态：f_*(α·β)=[f∘(α·β)]=[(f∘α)·(f∘β)]=f_*α·f_*β（n≥2时自动保持，因π_n是Abel群）。复合性(f∘g)_*=f_*∘g_*由定义直接推出。这表明π_n是Top_*到AbelGrp的函子（n≥2）。" }
      ],
      applications: "同伦群在物理学中用于描述拓扑缺陷（涡旋、磁单极子、Skyrmion），在扭结理论中 π_n(S^2) 用于研究扭结和链环，在代数K理论中同伦群是核心研究对象。",
      refs: [{ book: "Hatcher", ch: "Ch.4", sec: "§4.1" }, { book: "Munkres", ch: "Ch.9", sec: "§59" }]
    },
    {
      id: "t24", label: "纤维化与同伦提升", chapter: "ch4", layer: 3,
      desc: "纤维化是覆叠空间的高维推广，具有同伦提升性质，是计算同伦群的核心工具。",
      content: "纤维化 p: E→B 是具有同伦提升性质的连续映射：对任意空间 X 和映射 f: X→E，以及同伦 H: X×I→B 满足 H(x,0)=p(f(x))，存在提升同伦 H̃: X×I→E 使得 H̃(x,0)=f(x) 且 p∘H̃=H。纤维 F = p^{-1}(b₀) 是基点上的原像。纤维化诱导同伦群长正合序列：...→π_n(F)→π_n(E)→π_n(B)→π_{n-1}(F)→...。这是计算同伦群最基本的工具。重要例子：Hopf 纤维化 S^1→S^3→S^2, S^3→S^7→S^4, S^7→S^{15}→S^8。",
      understanding: "纤维化可以想象为一个'投影仪'：总空间 E 是底空间 B 的'多层版本'，每一层（纤维 F）看起来一样。纤维化的关键性质是'同伦提升'——如果你在底空间连续变形一条路径，你可以同步地在总空间中提升这条变形。这保证了纤维化诱导同伦群的长正合序列，使我们可以通过比较 E, B, F 的同伦群来互相计算。Hopf 纤维化 S^3→S^2 是一个经典例子：三维球面可以看作由圆周纤维组成的二维球面上的'丛'。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><rect x="60" y="10" width="80" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="100" y="29" font-size="10" fill="#2563eb" text-anchor="middle">E (总空间)</text><rect x="60" y="100" width="80" height="30" rx="4" fill="#fce7f3" stroke="#dc2626" stroke-width="1.5"/><text x="100" y="119" font-size="10" fill="#dc2626" text-anchor="middle">B (底空间)</text><line x1="100" y1="40" x2="100" y2="100" stroke="#333" stroke-width="1.5"/><text x="110" y="70" font-size="9" fill="#333">p</text><circle cx="100" cy="155" r="20" fill="none" stroke="#7c3aed" stroke-width="1.5"/><text x="100" y="160" font-size="8" fill="#7c3aed" text-anchor="middle">F</text><text x="100" y="182" font-size="9" fill="#333">F → E → B</text><text x="100" y="195" font-size="8" fill="#666">同伦提升性质</text></svg>',
      examples: [
        { title: "Hopf 纤维化 S^1→S^3→S^2", content: "利用同伦群长正合序列，从 π_n(S^1) 已知，推出 π_n(S^3)≅π_n(S^2) (n≥3)。" },
        { title: "道路空间纤维化", content: "对任意空间 X，道路空间 PX→X 是纤维化，纤维为环路空间 ΩX。π_n(ΩX)≅π_{n+1}(X)。" },
        { title: "覆叠空间作为纤维化", content: "覆叠空间是离散纤维的纤维化，同伦群长正合序列给出 π_n(X̃)≅π_n(X) (n≥2)。" }
      ],
      theorems: [
        { name: "纤维化同伦群长正合序列", statement: "对纤维化 F→E→B，存在长正合序列 ...→π_n(F)→π_n(E)→π_n(B)→π_{n-1}(F)→...。", proof: "连接同态∂:π_n(B)→π_{n-1}(F)的构造：将α:S^n→B视为D^n→B（边界映射到基点），利用同伦提升性质将D^n中的映射提升到E，其在S^{n-1}=∂D^n上的限制落在F中。正合性验证：在每步利用提升性质和压缩同伦。核心是纤维化的同伦提升性质产生长正合序列。" },
        { name: "同伦提升性质", statement: "纤维化 p: E→B 具有对任意空间 X 的同伦提升性质。", proof: "纤维化定义为具有对任意空间的同伦提升性质的映射（Hurewicz纤维化）。等价地，若p是局部平凡的纤维丛（如覆盖空间），则具有同伦提升性质。证明利用局部平凡化将同伦分解为小段，在每段上使用乘积结构提升。核心是局部乘积结构加上紧致性论证保证全局提升的存在性。" }
      ],
      applications: "纤维化是计算同伦群的核心工具，通过谱序列计算同伦群，在代数拓扑、微分拓扑、代数几何中都有应用。在物理学中，纤维丛理论是规范场论的数学基础。",
      refs: [{ book: "Hatcher", ch: "Ch.4", sec: "§4.2" }, { book: "Munkres", ch: "Ch.9", sec: "§60" }]
    },
    {
      id: "t25", label: "Whitehead定理", chapter: "ch4", layer: 3,
      desc: "弱同伦等价与同伦等价之间的桥梁，是CW复形范畴中的核心结构定理。",
      content: "Whitehead 定理：若 X 和 Y 是连通 CW 复形，f: X→Y 是连续映射，且 f 诱导所有同伦群的同构 f_*: π_n(X)≅π_n(Y)（∀n），则 f 是同伦等价。此定理的深刻之处在于：对于 CW 复形，同伦群的代数信息完全决定了同伦型。一个推论是：任何连通 CW 复形 X 若满足 π_n(X)=0 (∀n)，则 X 可缩。另一个推论：两个 CW 复形之间的弱同伦等价（诱导同伦群同构的映射）一定是同伦等价。CW 复形范畴是 Whitehead 定理成立的'正确范畴'。",
      understanding: "Whitehead 定理是代数拓扑中少有的'代数能完全决定几何'的定理。它告诉我们：对于 CW 复形（几乎所有常见空间），如果两个空间在所有维度上的同伦群都相同，那么它们就是同伦等价的——即从拓扑角度看是'一样'的。这就像说：如果两个人的所有基因（同伦群）都相同，那么他们就是同一个人（同伦等价）。但要注意，这个定理只在 CW 复形范畴中成立，对一般拓扑空间不成立。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><rect x="15" y="50" width="65" height="40" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="47" y="74" font-size="9" fill="#2563eb" text-anchor="middle">X (CW)</text><rect x="120" y="50" width="65" height="40" rx="4" fill="#fce7f3" stroke="#dc2626" stroke-width="1.5"/><text x="152" y="74" font-size="9" fill="#dc2626" text-anchor="middle">Y (CW)</text><line x1="80" y1="70" x2="120" y2="70" stroke="#333" stroke-width="2"/><text x="100" y="65" font-size="10" fill="#7c3aed">f</text><text x="100" y="110" font-size="10" fill="#333" font-weight="bold">π_n(X) ≅ π_n(Y) ∀n</text><text x="100" y="130" font-size="10" fill="#333">⇓</text><text x="100" y="150" font-size="11" fill="#dc2626" font-weight="bold">X ≃ Y (同伦等价)</text><text x="100" y="175" font-size="9" fill="#666">代数完全决定几何</text></svg>',
      examples: [
        { title: "可缩空间的判定", content: "若连通 CW 复形 X 的所有同伦群平凡，则 X 同伦等价于点。这推广了单连通+无同调⇒可缩。" },
        { title: "球面间的同伦等价", content: "S^n 和 S^m 若同伦等价，则必须 n=m。因为 π_n(S^n)≅Z 而 π_n(S^m)=0 (n<m)。" },
        { title: "CW逼近", content: "任何空间存在弱同伦等价的CW复形，且在同伦范畴中唯一。这保证了CW复形范畴的完备性。" }
      ],
      theorems: [
        { name: "Whitehead 定理", statement: "CW 复形之间的弱同伦等价（诱导所有同伦群同构的映射）是同伦等价。", proof: "归纳构造同伦逆g:Y→X。对n维骨架Y^n，假设已构造g在Y^{n-1}上并满足f∘g≃id。利用f_*:π_n(X)→π_n(Y)是同构，将Y中n维胞腔的粘贴映射提升到X中，延拓g到Y^n。逐维完成构造。由于CW复形具有弱拓扑，归纳极限给出整体同伦等价。" },
        { name: "Whitehead 定理（同调版本）", statement: "若 f: X→Y 是单连通 CW 复形间的映射，且诱导同调同构，则 f 是同伦等价。", proof: "单连通条件下，Hurewicz定理联系同调和同伦群。f诱导同调同构⇒由Hurewicz定理和归纳法，f诱导同伦群同构。具体：第一个非零同调群同构⇒第一个非零同伦群同构→逐维推进。再由Whitehead定理（同伦群版本），f是同伦等价。单连通性保证了归纳的基础步骤成立。" }
      ],
      applications: "Whitehead 定理是代数拓扑的基石，用于证明空间的同伦等价性，在稳定同伦论、有理同伦论和代数K理论中频繁使用。它保证了同伦群作为CW复形的不变量的完备性。",
      refs: [{ book: "Hatcher", ch: "Ch.4", sec: "§4.1" }, { book: "Munkres", ch: "Ch.9", sec: "§61" }]
    },
    {
      id: "t26", label: "Hurewicz定理", chapter: "ch4", layer: 3,
      desc: "连接同伦群与同调群的桥梁定理，揭示了低维同调群可由同伦群完全确定。",
      content: "Hurewicz 定理建立了同伦群与同调群之间的基本联系。设 X 是 (n-1) 连通空间（即 π_k(X)=0 对 k≤n-1），n≥1。则存在自然同态 h: π_n(X)→H_n(X)（Hurewicz 同态），且 (1) 若 n=1，h 诱导同构 π_1(X)_{ab}≅H_1(X)（基本群的交换化）；(2) 若 n≥2，h 是同构。此外，h 在更高维也诱导满射。Hurewicz 定理的推论：第一个非零同伦群与同维同调群同构。这是计算同伦群的重要工具，也揭示了同调是同伦群的'交换化'。",
      understanding: "Hurewicz 定理告诉我们：同调群是同伦群的'简化版'。具体来说，H_1 就是 π_1 的交换化（把非交换部分'抹平'），而第一个非零的高维同伦群恰好等于同维的同调群。这解释了为什么同调群更容易计算：它们丢失了同伦群中的非交换信息。但 Hurewicz 定理也提供了一个从同调群反向推断同伦群的方法——至少对于最低的非零同伦群。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><rect x="10" y="40" width="70" height="35" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="45" y="62" font-size="10" fill="#2563eb" text-anchor="middle">π_n(X)</text><rect x="120" y="40" width="70" height="35" rx="4" fill="#fce7f3" stroke="#dc2626" stroke-width="1.5"/><text x="155" y="62" font-size="10" fill="#dc2626" text-anchor="middle">H_n(X)</text><line x1="80" y1="57" x2="120" y2="57" stroke="#333" stroke-width="2"/><text x="100" y="52" font-size="10" fill="#7c3aed">h</text><text x="100" y="95" font-size="9" fill="#333">n=1: π₁/[π₁,π₁] ≅ H₁</text><text x="100" y="112" font-size="9" fill="#333">n≥2: π_n ≅ H_n</text><text x="100" y="130" font-size="9" fill="#333">(若X为(n-1)连通)</text><text x="100" y="155" font-size="10" fill="#dc2626" font-weight="bold">Hurewicz 同构</text><text x="100" y="175" font-size="9" fill="#666">同伦群 → 同调群</text></svg>',
      examples: [
        { title: "S^n 的 Hurewicz 定理", content: "S^n 是 (n-1) 连通空间，π_n(S^n)≅Z 且 Hurewicz 同态 h: π_n(S^n)→H_n(S^n)≅Z 是同构。" },
        { title: "环面 T^2 的 H_1", content: "π_1(T^2)≅Z×Z（交换），故 H_1(T^2)≅π_1(T^2)≅Z×Z。Hurewicz 同态是同构。" },
        { title: "8字形 S^1∨S^1", content: "π_1≅F₂（非交换），H_1≅Z²。Hurewicz 定理给出 π_1 的交换化等于 H_1。" }
      ],
      theorems: [
        { name: "Hurewicz 定理", statement: "若 X 是 (n-1) 连通 (n≥1)，则 Hurewicz 同态 h: π_n(X)→H_n(X) 是同构 (n≥2) 或交换化同构 (n=1)。", proof: "构造h([f])=f_*([S^n])，其中[S^n]是H_n(S^n)的基本类。对(n-1)连通空间，利用相对同伦群和同调群的正合序列，归纳证明H_i(X)=0(i<n)且h是满射。n≥2时，利用同调正合序列和五引理证明h是单射。n=1时，h的核是换位子群[π₁,π₁]。" },
        { name: "相对 Hurewicz 定理", statement: "对空间对 (X,A)，若 (X,A) 是 (n-1) 连通，则 π_n(X,A)→H_n(X,A) 有类似结论。", proof: "类似构造相对Hurewicz同态h:π_n(X,A)→H_n(X,A)。(X,A)的(n-1)连通性意味着π_i(X,A)=0(i<n)且A是道路连通的。利用相对同伦群和相对同调群的正合序列，归纳证明H_i(X,A)=0(i<n)且h是满射。n≥2时h是同构。证明框架与绝对情形对应，推广到空间对。" }
      ],
      applications: "Hurewicz 定理是连接同伦论和同调论的桥梁，用于从同调群计算最低非零同伦群，在稳定同伦论中用于构造谱的同伦群，在代数K理论中用于计算K群。",
      refs: [{ book: "Hatcher", ch: "Ch.4", sec: "§4.2" }, { book: "Munkres", ch: "Ch.9", sec: "§62" }]
    },
    {
      id: "t27", label: "同伦群的计算", chapter: "ch4", layer: 4,
      desc: "同伦群的计算是代数拓扑的核心难题，涉及谱序列、Postnikov塔和稳定同伦论等高级工具。",
      content: "同伦群的计算极其困难，即使对球面 S^n 也远未完全解决。主要工具：(1) 纤维化长正合序列：利用 Hopf 纤维化等计算同伦群；(2) Freudenthal 悬挂定理：π_{n+k}(S^n) 对 n 充分大时稳定，稳定同伦群 π_k^S 是重要研究对象；(3) Serre 谱序列：计算纤维化的同调/上同调，进而通过 Hurewicz 定理和模 p 理论推算同伦群；(4) Postnikov 塔：将空间分解为同伦群逐层构建的纤维化序列；(5) 有理同伦论：Quillen 和 Sullivan 的工作将有理同伦群的计算转化为微分分次李代数的问题。",
      understanding: "计算同伦群是一桩'拓扑学界的奥林匹克竞赛'。即使是最简单的空间——球面 S^2——其同伦群 π_n(S^2) 至今仍未完全算出。稳定同伦群（n 足够大时 π_{n+k}(S^n) 不再依赖 n）相对容易，但仍有大量未解问题。Serre 的诺贝尔奖级别工作（他获得的是菲尔兹奖）利用谱序列证明了 π_n(S^k) 大多是有限群。计算同伦群需要几乎所有的代数拓扑工具：谱序列、同调代数、模理论、甚至代数几何。",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#fafafa"/><text x="100" y="22" font-size="11" fill="#333" font-weight="bold" text-anchor="middle">同伦群计算工具</text><rect x="10" y="40" width="85" height="25" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/><text x="52" y="57" font-size="8" fill="#2563eb" text-anchor="middle">纤维化长正合列</text><rect x="105" y="40" width="85" height="25" rx="3" fill="#fce7f3" stroke="#dc2626" stroke-width="1"/><text x="147" y="57" font-size="8" fill="#dc2626" text-anchor="middle">谱序列</text><rect x="10" y="75" width="85" height="25" rx="3" fill="#fef3c7" stroke="#d97706" stroke-width="1"/><text x="52" y="92" font-size="8" fill="#d97706" text-anchor="middle">悬挂定理</text><rect x="105" y="75" width="85" height="25" rx="3" fill="#e0f2fe" stroke="#0d9488" stroke-width="1"/><text x="147" y="92" font-size="8" fill="#0d9488" text-anchor="middle">Postnikov塔</text><rect x="10" y="110" width="85" height="25" rx="3" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1"/><text x="52" y="127" font-size="8" fill="#7c3aed" text-anchor="middle">有理同伦论</text><rect x="105" y="110" width="85" height="25" rx="3" fill="#fce4ec" stroke="#e91e63" stroke-width="1"/><text x="147" y="127" font-size="8" fill="#e91e63" text-anchor="middle">模p理论</text><text x="100" y="160" font-size="9" fill="#333">π_{n+k}(S^n) 稳定同伦群</text><text x="100" y="178" font-size="9" fill="#dc2626">至今未完全计算！</text></svg>',
      examples: [
        { title: "π_3(S^2)≅Z", content: "利用 Hopf 纤维化 S^1→S^3→S^2 的长正合序列，π_3(S^3)≅Z 推出 π_3(S^2)≅Z。" },
        { title: "π_4(S^2)≅Z/2", content: "利用 π_3(S^2)≅Z 和纤维化 ΩS^2→PS^2→S^2，通过谱序列计算得到。" },
        { title: "稳定同伦群 π_1^S", content: "π_{n+1}(S^n)≅Z/2 (n≥3)，稳定同伦群 π_1^S≅Z/2。这是Freudenthal悬挂定理的经典结果。" }
      ],
      theorems: [
        { name: "Freudenthal 悬挂定理", statement: "悬挂同态 Σ: π_{n+k}(S^n)→π_{n+k+1}(S^{n+1}) 对 k≤n-1 是同构，对 k=n 是满射。", proof: "悬挂同态由悬挂映射诱导：Σ[f]=[Σf]。利用Blakers-Massey定理或同调论证：考虑映射S^n×I→S^{n+1}的像。在稳定范围内（k≤n-1），悬挂映射在球面上诱导同伦群的同构。核心是维数足够高时，映射的像有充分空间规避低维障碍。这定义了稳定同伦群π_k^S=colim π_{n+k}(S^n)。" },
        { name: "Serre 有限性定理", statement: "π_{n+k}(S^n) 对 k>0 是有限群（除 π_{4n-1}(S^{2n}) 包含一个 Z 直和项外）。", proof: "利用Serre谱序列计算球面的模p上同调，进而通过模p同伦群和有理同伦论推断。有理同伦群π_*(S^n)⊗Q在n为奇数时只有π_n⊗Q=Q；n为偶数时加上π_{2n-1}⊗Q=Q。其余全为有限群。Serre的突破性工作揭示了球面同伦群几乎全是有限群，例外情形由Hopf不变量解释。" }
      ],
      applications: "同伦群计算在数学物理中用于分类拓扑孤子（Skyrmion），在弦理论中 D 膜的分类用到同伦群和 K 理论，在代数几何中球面同伦群与代数 K 理论和模形式有深刻联系。",
      refs: [{ book: "Hatcher", ch: "Ch.4", sec: "§4.2" }, { book: "Hatcher", ch: "Ch.4", sec: "§4.3" }]
    }
  ],

  edges: [
    { source: "t1", target: "t2", label: "前提知识" },
    { source: "t2", target: "t3", label: "前提知识" },
    { source: "t2", target: "t4", label: "前提知识" },
    { source: "t4", target: "t5", label: "前提知识" },
    { source: "t2", target: "t6", label: "前提知识" },
    { source: "t3", target: "t7", label: "前提知识" },
    { source: "t6", target: "t7", label: "前提知识" },
    { source: "t1", target: "t8", label: "前提知识" },
    { source: "t9", target: "t10", label: "前提知识" },
    { source: "t10", target: "t11", label: "前提知识" },
    { source: "t11", target: "t12", label: "前提知识" },
    { source: "t12", target: "t13", label: "前提知识" },
    { source: "t11", target: "t14", label: "前提知识" },
    { source: "t14", target: "t15", label: "前提知识" },
    { source: "t10", target: "t16", label: "前提知识" },
    { source: "t13", target: "t16", label: "前提知识" },
    { source: "t10", target: "t17", label: "前提知识" },
    { source: "t17", target: "t18", label: "前提知识" },
    { source: "t17", target: "t19", label: "前提知识" },
    { source: "t10", target: "t20", label: "前提知识" },
    { source: "t17", target: "t20", label: "前提知识" },
    { source: "t16", target: "t21", label: "前提知识" },
    { source: "t18", target: "t22", label: "前提知识" },
    { source: "t21", target: "t22", label: "前提知识" },
    { source: "t2", target: "t23", label: "前提知识" },
    { source: "t23", target: "t24", label: "前提知识" },
    { source: "t23", target: "t25", label: "前提知识" },
    { source: "t10", target: "t26", label: "前提知识" },
    { source: "t23", target: "t26", label: "前提知识" },
    { source: "t25", target: "t27", label: "前提知识" },
    { source: "t26", target: "t27", label: "前提知识" }
  ],

  quizzes: [
    // ==================== Ch1 测验题 ====================
    { q: "两个映射 f,g: X→Y 同伦的定义是什么？", options: ["存在连续映射 H: X×[0,1]→Y 使得 H(x,0)=f(x), H(x,1)=g(x)", "f 和 g 的像相同", "f 和 g 是同胚", "f 和 g 有相同的定义域"], answer: 0, explanation: "同伦的定义是通过连续映射 H: X×[0,1]→Y 连接两个映射，H(x,0)=f(x) 且 H(x,1)=g(x)。", difficulty: "easy", chapter: "ch1" },
    { q: "S^1 的基本群 π₁(S^1) 同构于什么？", options: ["Z", "Z/2", "平凡群", "Z×Z"], answer: 0, explanation: "π₁(S^1)≅Z，每个同伦类由绕数（整数）唯一确定。", difficulty: "easy", chapter: "ch1" },
    { q: "下列哪个空间是可缩的？", options: ["R^n", "S^1", "S^2", "T^2"], answer: 0, explanation: "R^n 可形变收缩到原点，同伦等价于点，故可缩。S^1, S^2, T^2 有非平凡同调群，不可缩。", difficulty: "easy", chapter: "ch1" },
    { q: "覆叠空间 p: X̃→X 的纤维 p^{-1}(x) 是什么？", options: ["离散空间", "连通空间", "紧致空间", "可缩空间"], answer: 0, explanation: "覆叠空间的纤维是离散空间，这是覆叠映射的定义要求。", difficulty: "easy", chapter: "ch1" },
    { q: "Seifert-van Kampen 定理主要用于计算什么？", options: ["基本群", "同调群", "同伦群", "上同调环"], answer: 0, explanation: "van Kampen 定理是计算基本群的核心工具，通过分解空间为开集利用自由积计算。", difficulty: "medium", chapter: "ch1" },
    { q: "万有覆叠空间的基本群是什么？", options: ["平凡群", "Z", "自由群", "Z/2"], answer: 0, explanation: "万有覆叠是单连通的覆叠空间，其基本群为平凡群。", difficulty: "medium", chapter: "ch1" },
    { q: "Brouwer 不动点定理（二维）的基本群证明中，关键矛盾是什么？", options: ["收缩映射 r: D²→S^1 诱导恒等映射在基本群上，但 π₁(D²)={e} 而 π₁(S^1)≅Z", "D² 和 S^1 的基本群相同", "基本群是函子", "S^1 不可缩"], answer: 0, explanation: "假设无不动点可构造收缩映射，导致基本群层面的矛盾：{e}→Z 不能是满射。", difficulty: "medium", chapter: "ch1" },
    { q: "形变收缩与同伦等价的关系是什么？", options: ["形变收缩比同伦等价更强，形变收缩一定是同伦等价", "两者完全相同", "同伦等价比形变收缩更强", "两者没有关系"], answer: 0, explanation: "形变收缩是特殊的同伦等价，要求收缩映射在子空间上是恒等映射且同伦保持子空间点不动。", difficulty: "medium", chapter: "ch1" },
    { q: "在覆叠空间分类中，π₁(X) 的平凡子群对应什么覆叠？", options: ["万有覆叠", "平凡覆叠", "正则覆叠", "没有覆叠"], answer: 0, explanation: "Galois对应中，π₁(X)的平凡子群对应万有覆叠（单连通覆叠空间）。", difficulty: "hard", chapter: "ch1" },
    { q: "设 X 道路连通，不同基点对应的基本群有何关系？", options: ["同构（但同构不自然）", "完全相同", "完全不同", "互不相关"], answer: 0, explanation: "不同基点的基本群同构，但同构依赖于连接两基点的道路选择，不是自然的。", difficulty: "hard", chapter: "ch1" },

    // ==================== Ch2 测验题 ====================
    { q: "n维标准单纯形 Δ^n 有多少个顶点？", options: ["n+1", "n", "2n", "n²"], answer: 0, explanation: "Δ^n 是 R^{n+1} 中 n+1 个点的凸包，有 n+1 个顶点。", difficulty: "easy", chapter: "ch2" },
    { q: "单纯同调中边界算子 ∂ 满足什么关键性质？", options: ["∂∘∂ = 0", "∂∘∂ = id", "∂ = 0", "∂∘∂ = ∂"], answer: 0, explanation: "∂_{n-1}∘∂_n = 0 是链复形的核心性质，保证了同调群的良定义性。", difficulty: "easy", chapter: "ch2" },
    { q: "S^2 的同调群 H_1(S^2) 是什么？", options: ["0", "Z", "Z/2", "Z²"], answer: 0, explanation: "球面 S^2 没有一维洞，H_1(S^2)=0。H_0≅Z, H_2≅Z。", difficulty: "easy", chapter: "ch2" },
    { q: "奇异同调相比单纯同调的主要优势是什么？", options: ["函子性和同伦不变性自然成立", "计算更简单", "链群总是有限生成", "不需要连续映射"], answer: 0, explanation: "奇异同调具有自然的函子性和同伦不变性，这些性质在单纯同调中需要额外证明。", difficulty: "medium", chapter: "ch2" },
    { q: "Mayer-Vietoris 序列连接哪些同调群？", options: ["H_n(U∩V), H_n(U)⊕H_n(V), H_n(X)", "H_n(X), H_n(A), H_n(X,A)", "π_n(F), π_n(E), π_n(B)", "H^n(X), H_n(X), H_{n-1}(X)"], answer: 0, explanation: "Mayer-Vietoris 序列连接 H_n(U∩V), H_n(U)⊕H_n(V), H_n(U∪V)。", difficulty: "medium", chapter: "ch2" },
    { q: "CW 复形的胞腔同调中，n 维链群 C_n^{CW} 的秩等于什么？", options: ["n 维胞腔的个数", "n 维同调群的秩", "Euler 示性数", "基本群的秩"], answer: 0, explanation: "C_n^{CW}(X) = H_n(X^n, X^{n-1}) 是自由阿贝尔群，秩等于 n 维胞腔数。", difficulty: "medium", chapter: "ch2" },
    { q: "切除定理的条件是什么？", options: ["Z̄ ⊂ Int(A)", "Z 是开集", "A 是紧致集", "X 是流形"], answer: 0, explanation: "切除定理要求 Z 的闭包包含在 A 的内部，即 Z̄⊂Int(A)。", difficulty: "medium", chapter: "ch2" },
    { q: "RP^2 的同调群 H_1(RP^2;Z) 是什么？", options: ["Z/2", "Z", "0", "Z²"], answer: 0, explanation: "RP^2 的胞腔边界 d_2(e²)=2e¹，故 H_1(RP^2;Z)≅Z/2（扭转）。", difficulty: "hard", chapter: "ch2" },
    { q: "Lefschetz 不动点定理中，Lefschetz 数 L(f) 如何定义？", options: ["Σ(-1)^n tr(f_*: H_n(X)→H_n(X))", "Σ rank H_n(X)", "Σ tr(f_*: π_n→π_n)", "Σ dim H_n(X)"], answer: 0, explanation: "L(f) = Σ_{n}(-1)^n tr(f_*: H_n(X;Q)→H_n(X;Q))，是各维同调诱导映射的迹的交错和。", difficulty: "hard", chapter: "ch2" },
    { q: "对于可定向闭曲面 Σ_g，其 H_1(Σ_g) 的秩是多少？", options: ["2g", "g", "g+1", "1"], answer: 0, explanation: "亏格 g 的可定向闭曲面 Σ_g 的 H_1≅Z^{2g}，秩为 2g。", difficulty: "hard", chapter: "ch2" },

    // ==================== Ch3 测验题 ====================
    { q: "上同调群 H^n(X;G) 中的上链群 C^n 定义为什么？", options: ["Hom(C_n, G)", "C_n ⊗ G", "H_n(X;G)", "C_n ⊕ G"], answer: 0, explanation: "C^n = Hom(C_n, G)，即从链群到系数群的所有群同态。", difficulty: "easy", chapter: "ch3" },
    { q: "Cup 积 ⌣: H^p×H^q→H^{p+q} 满足什么交换律？", options: ["α⌣β = (-1)^{pq} β⌣α", "α⌣β = β⌣α", "α⌣β = -β⌣α", "α⌣β = 0"], answer: 0, explanation: "Cup 积是分次交换的：α⌣β = (-1)^{pq} β⌣α。", difficulty: "easy", chapter: "ch3" },
    { q: "CP^n 的上同调环 H^*(CP^n;Z) 同构于什么？", options: ["Z[α]/(α^{n+1})，|α|=2", "Z[α]/(α²)，|α|=n", "Z×Z", "Z/2[α]"], answer: 0, explanation: "H^*(CP^n;Z) ≅ Z[α]/(α^{n+1})，其中 α 是度为 2 的生成元，α^{n+1}=0。", difficulty: "medium", chapter: "ch3" },
    { q: "万有系数定理（同调版本）的短正合序列包含什么？", options: ["0→H_n⊗G→H_n(X;G)→Tor(H_{n-1},G)→0", "0→H_n→H_n(X;G)→H_{n-1}→0", "0→G→H_n(X;G)→H_n→0", "0→Tor→H_n(X;G)→H_n⊗G→0"], answer: 0, explanation: "同调UCT为 0→H_n(X)⊗G→H_n(X;G)→Tor(H_{n-1}(X),G)→0。", difficulty: "medium", chapter: "ch3" },
    { q: "Künneth 公式在域系数下，H^n(X×Y) 等于什么？", options: ["⊕_{i+j=n} H^i(X)⊗H^j(Y)", "H^n(X)⊕H^n(Y)", "H^n(X)⊗H^n(Y)", "H^n(X)×H^n(Y)"], answer: 0, explanation: "在域系数下，上同调 Künneth 公式给出 H^n(X×Y) ≅ ⊕_{i+j=n} H^i(X)⊗H^j(Y)。", difficulty: "medium", chapter: "ch3" },
    { q: "Poincaré 对偶定理中，n 维紧致可定向流形 M 的 H^k(M) 同构于什么？", options: ["H_{n-k}(M)", "H_k(M)", "H^{n-k}(M)", "H_n(M)"], answer: 0, explanation: "Poincaré 对偶：H^k(M) ≅ H_{n-k}(M)，通过 Cap 积与基本类实现。", difficulty: "medium", chapter: "ch3" },
    { q: "Chern 类 c_k(E) 属于哪个上同调群？", options: ["H^{2k}(X;Z)", "H^k(X;Z)", "H^{2k}(X;Z/2)", "H^k(X;R)"], answer: 0, explanation: "Chern 类 c_k(E)∈H^{2k}(X;Z)，是复向量丛的整系数示性类。", difficulty: "hard", chapter: "ch3" },
    { q: "de Rham 定理表明什么？", options: ["H^k_{dR}(M) ≅ H^k(M;R)", "H^k_{dR}(M) ≅ H_k(M;R)", "H^k_{dR}(M) ≅ π_k(M)", "H^k_{dR}(M) ≅ H^k(M;Z)"], answer: 0, explanation: "de Rham 定理给出了微分形式上同调与奇异上同调（实系数）的同构，楔积对应 Cup 积。", difficulty: "hard", chapter: "ch3" },
    { q: "Ext(H_{n-1}(X), G) 在上同调万有系数定理中出现在哪里？", options: ["短正合序列的左端", "短正合序列的右端", "短正合序列的中间", "不出现"], answer: 0, explanation: "上同调UCT为 0→Ext(H_{n-1}(X),G)→H^n(X;G)→Hom(H_n(X),G)→0，Ext 在左端。", difficulty: "hard", chapter: "ch3" },
    { q: "RP^2 的 Z/2 系数上同调环 H^*(RP^2;Z/2) 同构于什么？", options: ["Z/2[α]/(α³)，|α|=1", "Z/2[α]/(α²)，|α|=2", "Z/2⊕Z/2", "Z/2"], answer: 0, explanation: "H^*(RP^2;Z/2) ≅ Z/2[α]/(α³)，其中 α∈H^1(RP^2;Z/2) 是生成元。", difficulty: "hard", chapter: "ch3" },

    // ==================== Ch4 测验题 ====================
    { q: "n≥2 时，π_n(X) 是什么类型的群？", options: ["阿贝尔群（交换群）", "非交换群", "有限群", "自由群"], answer: 0, explanation: "当 n≥2 时，同伦群 π_n(X) 总是阿贝尔群。这是高维同伦群的基本性质。", difficulty: "easy", chapter: "ch4" },
    { q: "π_n(S^n) 同构于什么？", options: ["Z", "Z/2", "平凡群", "Z×Z"], answer: 0, explanation: "π_n(S^n)≅Z，由恒等映射的度数生成。这是同伦群最基本的计算结果。", difficulty: "easy", chapter: "ch4" },
    { q: "纤维化 F→E→B 诱导什么序列？", options: ["同伦群长正合序列", "同调群长正合序列", "基本群正合序列", "上同调长正合序列"], answer: 0, explanation: "纤维化诱导同伦群长正合序列 ...→π_n(F)→π_n(E)→π_n(B)→π_{n-1}(F)→...。", difficulty: "medium", chapter: "ch4" },
    { q: "Whitehead 定理在什么范畴中成立？", options: ["CW 复形范畴", "所有拓扑空间范畴", "流形范畴", "紧致空间范畴"], answer: 0, explanation: "Whitehead 定理在 CW 复形范畴中成立：弱同伦等价（诱导同伦群同构）⇒ 同伦等价。", difficulty: "medium", chapter: "ch4" },
    { q: "Hurewicz 定理中，若 X 是 (n-1) 连通空间 (n≥2)，则 π_n(X) 同构于什么？", options: ["H_n(X)", "H_{n-1}(X)", "H_n(X)⊗Z/2", "π_{n-1}(X)"], answer: 0, explanation: "Hurewicz 定理：若 X 是 (n-1) 连通 (n≥2)，则 Hurewicz 同态 π_n(X)→H_n(X) 是同构。", difficulty: "medium", chapter: "ch4" },
    { q: "Hopf 纤维化 S^1→S^3→S^2 给出 π_3(S^2) 同构于什么？", options: ["Z", "Z/2", "0", "Z×Z"], answer: 0, explanation: "由 Hopf 纤维化同伦群长正合序列，π_3(S^3)≅Z 推出 π_3(S^2)≅Z。", difficulty: "medium", chapter: "ch4" },
    { q: "Freudenthal 悬挂定理描述了什么？", options: ["π_{n+k}(S^n) 对充分大的 n 稳定", "π_n(S^n)≅Z", "π_n 是阿贝尔群", "π_n 与 H_n 的关系"], answer: 0, explanation: "Freudenthal 定理：悬挂同态 Σ: π_{n+k}(S^n)→π_{n+k+1}(S^{n+1}) 对 n>k+1 是同构。", difficulty: "hard", chapter: "ch4" },
    { q: "π_{n+1}(S^n) (n≥3) 同构于什么？", options: ["Z/2", "Z", "0", "Z/3"], answer: 0, explanation: "π_{n+1}(S^n)≅Z/2 (n≥3)，这是稳定同伦群 π_1^S≅Z/2 的经典结果。", difficulty: "hard", chapter: "ch4" },
    { q: "Serre 谱序列主要用于计算什么？", options: ["纤维化的同调/上同调", "基本群", "覆叠空间", "同伦等价"], answer: 0, explanation: "Serre 谱序列是计算纤维化 F→E→B 的同调群和上同调群的核心工具。", difficulty: "hard", chapter: "ch4" },
    { q: "Hurewicz 定理在 n=1 时给出什么关系？", options: ["π₁(X)_{ab} ≅ H₁(X)", "π₁(X) ≅ H₁(X)", "π₁(X) ≅ H₁(X)⊗Z/2", "π₁(X) ≅ H₂(X)"], answer: 0, explanation: "n=1 时，Hurewicz 同态诱导 π₁(X) 的交换化与 H₁(X) 的同构。", difficulty: "hard", chapter: "ch4" }
  ]
};