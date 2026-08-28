// ============================================================
// 代数拓扑测验题库（扩展版）
// 基于 Hatcher, Algebraic Topology 和 Munkres, Topology
// 新增题目：每章15题，共60题
// 格式：module.exports = [quiz1, quiz2, ...]
// 生成日期: 2026-08-28
// ============================================================

module.exports = [

// ================================================================
// Ch1: 基本群与覆叠空间 (新增15题)
// 覆盖：π₁(S¹)=Z的计算、覆叠空间分类、Van Kampen定理应用、提升性质、Borsuk-Ulam定理
// ================================================================

  { q: "S¹的基本群π₁(S¹) ≅ Z的生成元对应什么？", options: ["绕S¹逆时针旋转一圈的环路", "绕S¹顺时针旋转半圈", "常值环路", "绕S¹旋转两圈"], answer: 0, explanation: "π₁(S¹) ≅ Z，生成元是绕S¹逆时针一圈的环路（绕数为1）。绕数给出同构π₁(S¹)→Z。这是Hatcher §1.1中最核心的计算，也是所有基本群计算的基石。", difficulty: "easy", chapter: "ch1" },

  { q: "可缩空间X的基本群π₁(X)是什么？", options: ["平凡群{e}", "Z", "自由群", "非交换群"], answer: 0, explanation: "可缩空间同伦等价于点，而点的基本群平凡。由于基本群是同伦不变量，故π₁(X) ≅ {e}。例如Rⁿ、星形区域、实心球Dⁿ（n≥1）的基本群都是平凡的。", difficulty: "easy", chapter: "ch1" },

  { q: "8字形空间（两个圆粘合于一点）的基本群π₁(S¹∨S¹)是什么？", options: ["Z × Z", "Z * Z（两个生成元的自由群）", "Z", "平凡群"], answer: 1, explanation: "由Van Kampen定理，S¹∨S¹可分解为两个S¹（开邻域各加宽），交集为可缩点。故π₁(S¹∨S¹) ≅ π₁(S¹) * π₁(S¹) = Z * Z。这是两个生成元a,b的自由群，没有交换关系。", difficulty: "medium", chapter: "ch1" },

  { q: "Van Kampen定理中，若X = U∪V，且U∩V是道路连通的，则π₁(X) = π₁(U) * π₁(V) / N，其中N是由什么元素生成的？", options: ["π₁(U)的所有元素", "π₁(U∩V)中元素在包含映射i_U和i_V下的像的商", "π₁(V)的所有元素", "π₁(U)和π₁(V)的交换子"], answer: 1, explanation: "N是由形如i_U*(ω)·i_V*(ω)⁻¹的元素生成的正规子群，其中ω ∈ π₁(U∩V)。这反映了U∩V中环路在π₁(U)和π₁(V)中必须被等同。这是Van Kampen定理的核心：交集的路必须融合。", difficulty: "medium", chapter: "ch1" },

  { q: "覆叠空间p: X̃→X的分类定理（Galois对应）说的是：X̃的连通覆叠空间与下列哪个对象一一对应？", options: ["π₁(X)的共轭类", "π₁(X)的子群的共轭类", "π₁(X)的商群", "π₁(X)的生成元"], answer: 1, explanation: "对充分好的空间X（如道路连通、局部道路连通、半局部单连通），连通覆叠空间的等价类与π₁(X)的子群共轭类一一对应。特别地，万有覆叠对应平凡子群，底空间X对应π₁(X)本身。这是Hatcher §1.3的核心定理。", difficulty: "medium", chapter: "ch1" },

  { q: "设p: R→S¹, p(t)=e^{2πit}是万有覆叠。沿S¹上绕数为3的环路，提升到R中起于0，终点是？", options: ["0", "1", "3", "-3"], answer: 2, explanation: "S¹上绕数为n的环路γ(t)=e^{2πint}，提升到R中为γ̃(t)=nt。起于0则在t=1时终点为n。绕数为3，故终点为3。提升终点的坐标恰好等于绕数，这是π₁(S¹)≅Z的覆叠解释。", difficulty: "easy", chapter: "ch1" },

  { q: "覆叠空间p: X̃→X的覆叠变换群（deck transformation group）Γ(X̃,p)与π₁(X)的关系是什么？", options: ["Γ ≅ π₁(X)", "Γ ≅ N(p_*π₁(X̃)) / p_*π₁(X̃)", "Γ ≅ π₁(X̃)", "Γ ≅ π₁(X) / π₁(X̃)"], answer: 1, explanation: "Γ ≅ N(p_*π₁(X̃)) / p_*π₁(X̃)，其中N(H)是H在π₁(X)中的正规化子。当p_*π₁(X̃)是π₁(X)的正规子群时（正规覆叠），Γ ≅ π₁(X)/p_*π₁(X̃)。万有覆叠时Γ ≅ π₁(X)。", difficulty: "hard", chapter: "ch1" },

  { q: "Borsuk-Ulam定理（二维情形）的经典结论：任何连续映射f: S²→R²，必存在什么？", options: ["f是常值映射", "存在一对对径点x,-x使f(x)=f(-x)", "f是满射", "f有不动点"], answer: 1, explanation: "Borsuk-Ulam定理：对任意连续映射f: S^n→R^n，存在x∈S^n使f(x)=f(-x)。二维情形（n=2）的经典推论：地球上任一时刻总存在一对对径点有相同温度和气压。证明依赖于覆叠空间和π₁的论证。", difficulty: "medium", chapter: "ch1" },

  { q: "闭曲面M_g（亏格g的定向曲面）的基本群可由Van Kampen定理计算。对于环面T²（g=1），其基本群用生成元a,b的表现为？", options: ["⟨a,b⟩（自由群）", "⟨a,b | aba⁻¹b⁻¹ = 1⟩", "⟨a,b | a² = b² = 1⟩", "⟨a,b | aᵏ = bᵏ = 1⟩"], answer: 1, explanation: "将正方形对边粘合得环面T²。用Van Kampen定理，a和b分别对应赤道和经线方向，正方形边界给出关系aba⁻¹b⁻¹=1，故π₁(T²)≅Z×Z（交换群）。这正是Hatcher §1.2的经典计算。", difficulty: "medium", chapter: "ch1" },

  { q: "Klein瓶K的基本群用生成元a,b的表现为？", options: ["⟨a,b | aba⁻¹b⁻¹ = 1⟩", "⟨a,b | aba⁻¹b = 1⟩", "⟨a,b | a² = b² = 1⟩", "⟨a,b⟩"], answer: 1, explanation: "Klein瓶也可由正方形对边粘合得到，但一组对边反向粘合，得关系abab⁻¹=1或等价地aba⁻¹b=1。这是非交换群，与环面T²的π₁=Z×Z（交换）不同，因此Klein瓶与环面不同伦等价。", difficulty: "medium", chapter: "ch1" },

  { q: "道路提升定理（Path Lifting Property）说的是：对于覆叠p: X̃→X，给定X̃中一点x̃₀和X中起点为p(x̃₀)的道路γ，存在什么？", options: ["无穷多条提升道路", "唯一的提升道路γ̃满足γ̃(0)=x̃₀", "提升道路γ̃当且仅当γ是闭路", "提升道路存在但不一定唯一"], answer: 1, explanation: "道路提升定理：存在唯一的提升道路γ̃: [0,1]→X̃使p∘γ̃=γ且γ̃(0)=x̃₀。唯一性来自覆叠空间的局部同胚和离散纤维性质。这是覆叠空间理论最基本的定理（Hatcher命题1.30）。", difficulty: "easy", chapter: "ch1" },

  { q: "同伦提升定理（Homotopy Lifting Property）保证：对覆叠p: X̃→X，底空间中的同伦H: Y×I→X可提升为什么？", options: ["仅当Y是单连通时", "对任意空间Y，给定H的部分提升，存在唯一提升H̃", "仅当H是道路同伦", "仅当X是CW复形"], answer: 1, explanation: "同伦提升定理：若H: Y×I→X有提升h̃: Y×{0}→X̃，则存在唯一提升H̃: Y×I→X̃扩展h̃。这是覆叠空间具有「同伦提升性质」的精确表述，是覆叠空间分类理论的基础。", difficulty: "hard", chapter: "ch1" },

  { q: "设X是道路连通、局部道路连通、半局部单连通空间。X的万有覆叠X̃的基本群是什么？", options: ["π₁(X)", "平凡群", "Z", "与X相同"], answer: 1, explanation: "万有覆叠X̃是单连通的，即π₁(X̃) = {e}。这是万有覆叠的定义特征。由覆叠空间分类，万有覆叠对应π₁(X)的平凡子群。万有覆叠是「最大」的覆叠空间。", difficulty: "medium", chapter: "ch1" },

  { q: "实射影平面RP²的基本群π₁(RP²)是什么？", options: ["Z", "Z₂ = Z/2Z", "平凡群", "Z × Z"], answer: 1, explanation: "S²是RP²的二重万有覆叠（对径映射p: S²→RP²）。覆叠变换群为Z/2，故π₁(RP²) ≅ Z/2。唯一的非平凡环路是连接一对对径点的路径在RP²中的投影。此环路绕两次可缩为一点。", difficulty: "medium", chapter: "ch1" },

  { q: "设p: X̃→X是覆叠映射。提升判据（Lifting Criterion）说：映射f: Y→X可提升到X̃当且仅当什么？", options: ["f是连续满射", "f_*(π₁(Y)) ⊆ p_*(π₁(X̃))", "Y是单连通的", "f是同伦等价"], answer: 1, explanation: "提升判据：对充分好的空间Y，存在提升f̃: Y→X̃使p∘f̃=f当且仅当f_*(π₁(Y,y₀)) ⊆ p_*(π₁(X̃, x̃₀))。这是Hatcher命题1.33，是覆叠空间理论中判断映射能否提升的核心工具。", difficulty: "hard", chapter: "ch1" },

// ================================================================
// Ch2: 同调论 (新增15题)
// 覆盖：单纯同调计算、奇异同调公理、切除定理、Mayer-Vietoris序列、CW复形胞腔同调、Euler示性数
// ================================================================

  { q: "n维标准单纯形Δⁿ的顶点数是多少？", options: ["n", "n+1", "2n", "n²"], answer: 1, explanation: "Δⁿ = {(t₀,...,t_n)∈R^{n+1} | Σt_i=1, t_i≥0}，有n+1个顶点（每个坐标轴上的单位点）。Δ⁰是点，Δ¹是线段，Δ²是三角形，Δ³是四面体。顶点数是单纯形的基本参数。", difficulty: "easy", chapter: "ch2" },

  { q: "边缘算子∂_n: C_n→C_{n-1}的核心性质∂_{n-1}∘∂_n = 0反映了什么？", options: ["链复形是正合的", "边界没有边界", "同调群为零", "链群是自由的"], answer: 1, explanation: "∂_{n-1}∘∂_n = 0反映了几何事实：单纯形的边界本身没有边界。例如三角形边界是三条边，每条边的边界是两个顶点，但两次取边界后正负抵消。这是链复形定义的核心，使得同调群H_n = Ker ∂_n / Im ∂_{n+1}有意义。", difficulty: "easy", chapter: "ch2" },

  { q: "奇异同调群H_n(X)与单纯同调群相比，其优势在于？", options: ["只适用于单纯复形", "定义适用于任意拓扑空间，且满足Eilenberg-Steenrod公理", "计算更简单", "只适用于紧致空间"], answer: 1, explanation: "奇异同调通过任意连续映射σ: Δⁿ→X（奇异单形）定义，适用于所有拓扑空间。它满足Eilenberg-Steenrod公理，且对CW复形与单纯同调一致。这是Hatcher第2章的核心内容。", difficulty: "easy", chapter: "ch2" },

  { q: "Eilenberg-Steenrod同调公理中，「维数公理」说的是什么？", options: ["H_n(X)对所有n都有定义", "H_n(pt) = Z当n=0，否则为0", "H_n(X)是有限生成的", "dim H_n = dim X"], answer: 1, explanation: "维数公理：H_n({pt}) = Z（n=0）且H_n({pt}) = 0（n≠0）。点的同调只在0维非平凡。此公理排除了广义同调论（如K-理论、配边），是普通同调论的特征公理。", difficulty: "medium", chapter: "ch2" },

  { q: "切除定理（Excision Theorem）说的是：若Z的闭包⊂A的内部，则包含映射(A, A∩B)→(A∪B, B)诱导什么？", options: ["同调群同构", "同伦群同构", "仅是单同态", "仅是满同态"], answer: 1, explanation: "切除定理：包含映射(A, A∩B)→(A∪B, B)诱导同调群的同构H_n(A, A∩B) ≅ H_n(A∪B, B)。这等价于H_n(X, A) ≅ H_n(X\Z, A\Z)。切除是计算相对同调群的核心工具，也是同调论区别于同伦论的关键定理。", difficulty: "medium", chapter: "ch2" },

  { q: "Mayer-Vietoris序列适用于什么情形？", options: ["仅当X是紧致的", "X = A∪B，其中A,B是子空间且满足切除条件", "仅当X是单连通的", "仅当X是CW复形"], answer: 1, explanation: "Mayer-Vietoris序列：若X = int(A)∪int(B)（或A,B是子复形对），则存在长正合序列...→H_n(A∩B)→H_n(A)⊕H_n(B)→H_n(X)→H_{n-1}(A∩B)→...。这是「同调论的Van Kampen定理」，将空间分解为两部分的同调信息拼接。", difficulty: "medium", chapter: "ch2" },

  { q: "用Mayer-Vietoris序列计算S²的同调群。将S²分解为两个半球D²。H₁(S²) = ?", options: ["Z", "0", "Z × Z", "Z₂"], answer: 1, explanation: "S² = D²_+ ∪ D²_-，交集≃S¹。Mayer-Vietoris序列：...→H₁(D²_+)⊕H₁(D²_-)→H₁(S²)→H₀(S¹)→H₀(D²_+)⊕H₀(D²_-)→H₀(S²)→0。H₁(D²)=0，H₀(S¹)≅Z，H₀(D²)≅Z。由正合性得H₁(S²)=0（且H₂(S²)≅Z）。", difficulty: "medium", chapter: "ch2" },

  { q: "CW复形X的胞腔同调中，n维胞腔对应什么？", options: ["链群C_n的生成元", "同调群H_n的生成元", "边缘算子的核", "同伦群的生成元"], answer: 0, explanation: "在CW复形的胞腔同调中，链群C_n^{CW}(X)是由X的n维胞腔生成的自由交换群，每个n维胞腔对应一个生成元。边缘算子∂_n由附着映射的度数决定。这是Hatcher §2.2的核心内容，极大地简化了同调计算。", difficulty: "medium", chapter: "ch2" },

  { q: "CW复形X的胞腔同调中，边缘算子∂_n: C_n^{CW}→C_{n-1}^{CW}的矩阵元由什么决定？", options: ["胞腔的维数", "附着映射的度数（degree）", "胞腔的大小", "胞腔的位置"], answer: 1, explanation: "∂_n(e_αⁿ) = Σ_β d_αβ e_β^{n-1}，其中d_αβ是附着映射S^{n-1}→X^{n-1}→X^{n-1}/X^{n-2}≅∨S^{n-1}投射到第β个S^{n-1}的度数。这是胞腔同调的核心计算公式（Hatcher命题2.2.7）。", difficulty: "medium", chapter: "ch2" },

  { q: "有限CW复形X的Euler示性数χ(X)定义为？", options: ["χ(X) = Σ_n (-1)^n rank H_n(X)", "χ(X) = Σ_n rank H_n(X)", "χ(X) = dim X", "χ(X) = Σ_n (-1)^n dim C_n"], answer: 0, explanation: "χ(X) = Σ_{n≥0} (-1)^n rank H_n(X) = Σ_{n≥0} (-1)^n (n维胞腔数)。两者相等是因为同调群是链复形的同调，而交错和与边缘算子无关。例如S²有两个胞腔（0维和2维），χ(S²)=1+1=2，H₂=Z, H₀=Z，χ=1+1=2。", difficulty: "medium", chapter: "ch2" },

  { q: "实射影平面RP²的CW结构：一个0维胞腔、一个1维胞腔、一个2维胞腔。附着映射∂_2(e²)的度数是多少？", options: ["0", "1", "2", "-1"], answer: 2, explanation: "RP²的2维胞腔以度数为2的映射附着：S¹→S¹, z↦z²。因此胞腔链复形为：C₂=Z, C₁=Z, C₀=Z，∂_2(z)=2z，∂_1=0。故H₂(RP²)=0, H₁(RP²)=Z₂, H₀(RP²)=Z。这是胞腔同调的经典计算。", difficulty: "hard", chapter: "ch2" },

  { q: "环面T²的胞腔同调中，链复形C₂→C₁→C₀是什么样的？", options: ["∂_2=0, ∂_1=0", "∂_2≠0, ∂_1=0", "∂_2=0, ∂_1≠0", "∂_2≠0, ∂_1≠0"], answer: 0, explanation: "T²有1个0维胞腔、2个1维胞腔（a和b）、1个2维胞腔，附着映射为aba⁻¹b⁻¹，其在C₁上的边缘为0（因为a+b-a-b=0）。故∂_2=0, ∂_1=0，H₂(T²)≅Z, H₁(T²)≅Z⊕Z, H₀(T²)≅Z。这是胞腔同调最简洁的计算之一。", difficulty: "medium", chapter: "ch2" },

  { q: "相对同调群H_n(X,A)的长正合序列...→H_n(A)→H_n(X)→H_n(X,A)→H_{n-1}(A)→...中，连接同态是什么？", options: ["仅由包含映射诱导", "∂: H_n(X,A)→H_{n-1}(A)由边缘算子诱导", "由切除定理诱导", "由Mayer-Vietoris诱导"], answer: 1, explanation: "连接同态∂: H_n(X,A)→H_{n-1}(A)定义如下：取相对循环z∈Z_n(X,A)（∂z⊂A），则∂z∈Z_{n-1}(A)，其同调类为∂[z]。这是代数拓扑中长正合序列的标准构造，是推导Mayer-Vietoris和计算相对同调的核心工具。", difficulty: "hard", chapter: "ch2" },

  { q: "设X是道路连通空间。H_0(X)的秩（rank）是什么？", options: ["0", "1", "等于连通分支数", "等于π₁(X)的秩"], answer: 1, explanation: "对于道路连通空间X，H_0(X) ≅ Z（秩为1）。生成元为任意点。一般地，H_0(X) ≅ Z^{⊕c}，其中c是X的道路连通分支数。H_0度量了空间的连通性。约化同调H̃_0 = 0对道路连通空间。", difficulty: "easy", chapter: "ch2" },

  { q: "链同伦（chain homotopy）在链复形之间的链映射f, g: C_*→D_*之间定义了同伦等价。若f ≃ g（链同伦），则它们诱导的同调群同态有什么关系？", options: ["f_* ≠ g_*", "f_* = g_*", "f_* = -g_*", "f_* = 0"], answer: 1, explanation: "链同伦的链映射诱导相同的同调同态：f_* = g_*: H_n(C)→H_n(D)。链同伦P满足f - g = ∂_D P + P ∂_C，当作用于循环z时，(f-g)(z) = ∂_D(Pz)，是边界。这是代数拓扑中同伦不变性的代数基础。", difficulty: "hard", chapter: "ch2" },

// ================================================================
// Ch3: 上同调论 (新增15题)
// 覆盖：Cup积具体计算、上同调环结构、万有系数定理、Kunneth公式、Poincaré对偶
// ================================================================

  { q: "上同调群H^n(X; G)的定义中，上链群C^n(X; G)是什么？", options: ["C_n(X) ⊗ G", "Hom(C_n(X), G)", "C_n(X) × G", "G ⊗ C_n(X)"], answer: 1, explanation: "C^n(X; G) = Hom(C_n(X), G)，即从链群到系数群G的同态集合。上边缘δ: C^n→C^{n+1}定义为(δφ)(σ) = φ(∂σ)。上同调H^n = Ker δ / Im δ。这是同调的对偶构造。", difficulty: "easy", chapter: "ch3" },

  { q: "上边缘算子δ: C^n→C^{n+1}与边缘算子∂: C_{n+1}→C_n的关系是什么？", options: ["δ = ∂⁻¹", "(δφ)(σ) = φ(∂σ)（差符号）", "δ = ∂", "δ = -∂"], answer: 1, explanation: "上边缘算子定义为(δφ)(σ) = (-1)^{n+1} φ(∂σ)（或等价地δφ = φ∘∂）。核心性质δ² = 0来自∂² = 0：(δ²φ)(σ) = δφ(∂σ) = φ(∂²σ) = 0。", difficulty: "easy", chapter: "ch3" },

  { q: "Cup积⌣: H^p(X) × H^q(X) → H^{p+q}(X)在上链层面如何定义？", options: ["(φ⌣ψ)(σ) = φ(σ)ψ(σ)", "(φ⌣ψ)(σ) = φ(σ|_{[v₀,...,v_p]}) · ψ(σ|_{[v_p,...,v_{p+q}]})", "(φ⌣ψ)(σ) = φ(σ) + ψ(σ)", "(φ⌣ψ)(σ) = φ(ψ(σ))"], answer: 1, explanation: "Cup积在上链层面：(φ⌣ψ)(σ) = φ(σ|_{[v₀,...,v_p]}) · ψ(σ|_{[v_p,...,v_{p+q}]})，其中σ|_{[v₀,...,v_p]}是σ的前p+1个顶点。这使上同调H^*(X)成为分次环。Cup积是上同调区别于同调的最重要额外结构。", difficulty: "easy", chapter: "ch3" },

  { q: "环面T²的上同调环H^*(T²; Z)作为分次环的结构是什么？", options: ["Z[x]/(x²) 其中|x|=1", "Λ_Z(a,b)（外代数），其中|a|=|b|=1", "Z[x]/(x³) 其中|x|=2", "Z[x,y]/(x²,y²) 其中|x|=|y|=2"], answer: 1, explanation: "T² = S¹×S¹。H^*(S¹)≅Λ_Z(a)，|a|=1。由Kunneth公式，H^*(T²)≅H^*(S¹)⊗H^*(S¹)≅Λ_Z(a,b)，其中a,b∈H¹且a²=b²=0，ab是H²的生成元。这是外代数与外积结构的经典例子。", difficulty: "medium", chapter: "ch3" },

  { q: "万有系数定理（Universal Coefficient Theorem）给出上同调群H^n(X; G)与同调群的关系。其分裂短正合序列为？", options: ["0→H^n(X)⊗G→H^n(X;G)→Tor(H_{n+1}(X),G)→0", "0→Ext(H_{n-1}(X),G)→H^n(X;G)→Hom(H_n(X),G)→0", "0→H_n(X)⊗G→H_n(X;G)→Tor(H_{n-1}(X),G)→0", "0→Hom(H_n(X),G)→H^n(X;G)→Ext(H_{n-1}(X),G)→0"], answer: 1, explanation: "万有系数定理：0→Ext(H_{n-1}(X), G)→H^n(X;G)→Hom(H_n(X),G)→0是分裂短正合序列（但不自然分裂）。这意味着上同调由同调+Ext项决定。当G=Z且H_{n-1}(X)无挠时，H^n(X;Z)≅Hom(H_n(X),Z)⊕Ext(H_{n-1}(X),Z)。", difficulty: "medium", chapter: "ch3" },

  { q: "Kunneth公式给出H^*(X×Y)与H^*(X)和H^*(Y)的关系。对于域系数，Kunneth公式的简化形式是什么？", options: ["H^*(X×Y) ≅ H^*(X) ⊕ H^*(Y)", "H^*(X×Y) ≅ H^*(X) ⊗ H^*(Y)（分次张量积）", "H^*(X×Y) ≅ H^*(X) × H^*(Y)", "H^*(X×Y) ≅ H^*(X) * H^*(Y)"], answer: 1, explanation: "对于域系数，Kunneth公式简化为分次张量积同构：H^*(X×Y; k) ≅ H^*(X; k) ⊗_k H^*(Y; k)。对于整数系数，需加上Tor项。这是计算乘积空间上同调的基本工具。", difficulty: "medium", chapter: "ch3" },

  { q: "Poincaré对偶定理（定向情形）断言：对于n维紧致定向闭流形M，有什么同构？", options: ["H^k(M) ≅ H_n(M)", "H^k(M) ≅ H_{n-k}(M)", "H^k(M) ≅ H^k(M)", "H^k(M) ≅ H_{n+k}(M)"], answer: 1, explanation: "Poincaré对偶：H^k(M) ≅ H_{n-k}(M)。这个同构由与基本类[M]的Cap积给出：D(α) = α⌢[M]。特别地，H^n(M) ≅ H_0(M) ≅ Z。这是流形拓扑中最深刻的定理之一。", difficulty: "hard", chapter: "ch3" },

  { q: "实射影平面RP²的上同调环H^*(RP²; Z₂)作为分次环的结构是什么？", options: ["Z₂[x]/(x²) 其中|x|=1", "Z₂[x]/(x³) 其中|x|=1", "Z₂[x]/(x²) 其中|x|=2", "Z₂[x] 其中|x|=1"], answer: 1, explanation: "H^*(RP²; Z₂) ≅ Z₂[x]/(x³)，其中|x|=1。即H⁰=Z₂, H¹=Z₂（由x生成）, H²=Z₂（由x²生成）。x³=0因为RP²是2维的。这与S²的上同调环Z₂[x]/(x²)（|x|=2）不同，说明RP²和S²不同伦等价。", difficulty: "hard", chapter: "ch3" },

  { q: "复射影空间CPⁿ的上同调环H^*(CPⁿ; Z)是什么？", options: ["Z[x]/(x^{n+1}) 其中|x|=2", "Z[x]/(x^{n+1}) 其中|x|=1", "Λ_Z(x) 其中|x|=1", "Z[x,y]/(x²,y²)"], answer: 0, explanation: "H^*(CPⁿ; Z) ≅ Z[x]/(x^{n+1})，其中|x|=2。即上同调群只在偶数维非零：H^{2k}(CPⁿ)≅Z（k=0,...,n）。生成元x是超平面类的对偶（或Fubini-Study度量的Kähler形式）。这是Hatcher §3.2的经典计算。", difficulty: "medium", chapter: "ch3" },

  { q: "S²∨S⁴（2维球面和4维球面粘合于一点）的上同调环H^*(S²∨S⁴; Z)是什么？", options: ["Z[x]/(x²)⊗Z[y]/(y²)", "Z[x,y]/(x²,y²,xy)", "Z[x]/(x³)", "Z[x,y]/(x²,y²)不含xy"], answer: 1, explanation: "S²∨S⁴中，H²和H⁴分别由x和y生成。由于这两维来自不同球面，Cup积x⌣y=0（它们支撑在不交的子空间上）。此外x²=0（因为x⌣x∈H⁴但来自S²的H⁴为零），y²=0（因为y⌣y∈H⁸为零）。故环为Z[x,y]/(x²,y²,xy)，|x|=2,|y|=4。", difficulty: "hard", chapter: "ch3" },

  { q: "Cap积⌢: H_k(X) × H^l(X) → H_{k-l}(X)与Cup积的对偶关系是什么？", options: ["⟨φ⌣ψ, σ⟩ = ⟨φ, σ⟩⟨ψ, σ⟩", "⟨φ⌣ψ, σ⟩ = ⟨φ, σ|_{front}⟩·⟨ψ, σ|_{back}⟩", "⟨φ, ψ⌢σ⟩ = ⟨φ⌣ψ, σ⟩", "没有关系"], answer: 2, explanation: "Cap积与Cup积满足对偶关系：⟨φ, ψ⌢σ⟩ = ⟨φ⌣ψ, σ⟩。在Poincaré对偶H^k(M)≅H_{n-k}(M)中，同构由α↦α⌢[M]给出（[M]是基本类）。这体现了Cap积和Cup积的紧密联系。", difficulty: "medium", chapter: "ch3" },

  { q: "万有系数定理中，Ext(H_{n-1}(X), Z)项何时为零？", options: ["总是为零", "当H_{n-1}(X)是自由交换群时", "当H_{n-1}(X)是挠群时", "当X是单连通时"], answer: 1, explanation: "Ext(H, Z) = 0当且仅当H是自由交换群（没有挠元）。因为Ext(Z, Z)=0且Ext(Z_m, Z)=Z_m。当H_{n-1}(X)无挠时，H^n(X; Z)≅Hom(H_n(X), Z)，即上同调完全由同调决定。", difficulty: "medium", chapter: "ch3" },

  { q: "对于闭曲面M_g（亏格g的定向曲面），H¹(M_g; Z)的秩是多少？", options: ["g", "2g", "1", "0"], answer: 1, explanation: "M_g中，H₁(M_g; Z)≅Z^{2g}（由2g个1维循环生成）。由万有系数定理，H¹(M_g; Z) ≅ Hom(H₁(M_g), Z) ⊕ Ext(H₀(M_g), Z) = Hom(Z^{2g}, Z) ⊕ 0 ≅ Z^{2g}。故秩为2g。由Poincaré对偶，H¹(M_g)≅H₁(M_g)。", difficulty: "medium", chapter: "ch3" },

  { q: "de Rham上同调H^*_{dR}(M)与奇异上同调H^*(M; R)的关系是什么？", options: ["没有关系", "de Rham定理：H^*_{dR}(M) ≅ H^*(M; R)（作为环同构）", "H^*_{dR}(M) ≅ H^*(M; Z)", "H^*_{dR}(M) ≅ H_*(M; R)"], answer: 1, explanation: "de Rham定理：对光滑流形M，de Rham上同调（微分形式的上同调）与奇异上同调（实系数）存在环同构。Cup积对应微分形式的外积。这是联系分析与拓扑的桥梁，由de Rham在1931年证明。", difficulty: "medium", chapter: "ch3" },

  { q: "设X是道路连通空间。H⁰(X; G)等于什么？", options: ["0", "G", "Hom(G, Z)", "G⊕G"], answer: 1, explanation: "H⁰(X; G) ≅ G（对于道路连通空间）。H⁰由在0维单形上取常数值的上链生成，上边缘条件自动满足。一般地，H⁰(X; G) ≅ G^{⊕c}，其中c是道路连通分支数。H⁰度量了「局部常值函数」的空间。", difficulty: "easy", chapter: "ch3" },

// ================================================================
// Ch4: 同伦群 (新增15题)
// 覆盖：球面同伦群计算、纤维化长正合序列、Whitehead定理应用、Hurewicz定理实例
// ================================================================

  { q: "高阶同伦群π_n(X)的定义中，元素是映射S^n→X的同伦类。与基本群π₁不同，π_n(X)（n≥2）总是？", options: ["交换群", "非交换群", "自由群", "有限群"], answer: 0, explanation: "对n≥2，π_n(X)总是交换群。这是高阶同伦群与基本群最根本的区别。直观上，n≥2时有足够空间将两个映射「交换位置」。证明利用S^n上两个基点不动的同伦可交换。", difficulty: "easy", chapter: "ch4" },

  { q: "π_n(S^n)等于什么？", options: ["Z", "Z₂", "0", "Z × Z"], answer: 0, explanation: "π_n(S^n) ≅ Z，由恒等映射的度数为1生成。Hurewicz定理的同态h: π_n(S^n)→H_n(S^n)≅Z是同构，因为S^n是(n-1)连通的。这是同伦群中最基本的计算，也是Hurewicz定理最直接的应用。", difficulty: "easy", chapter: "ch4" },

  { q: "Hopf纤维化S³→S²的纤维是S¹。由纤维化的长正合序列，π₂(S²)与π₂(S³)的关系是什么？", options: ["π₂(S²) ≅ π₂(S³)", "π₂(S²) ≅ π₁(S¹)", "π₂(S²) ≅ π₂(S³) ⊕ π₂(S¹)", "π₂(S²) ≅ π₃(S²)"], answer: 1, explanation: "纤维化S¹→S³→S²的长正合序列：...→π₂(S¹)→π₂(S³)→π₂(S²)→π₁(S¹)→π₁(S³)→...。π₂(S¹)=0, π₁(S³)=0, π₁(S¹)=Z, π₂(S³)=0。由正合性0→π₂(S²)→Z→0，故π₂(S²)≅Z。这是计算π₂(S²)的经典方法。", difficulty: "easy", chapter: "ch4" },

  { q: "Whitehead定理的内容是：若f: X→Y是CW复形之间的连续映射，且f诱导所有同伦群的同构，则f是什么？", options: ["同胚", "同伦等价", "覆叠映射", "纤维化"], answer: 1, explanation: "Whitehead定理：若CW复形间映射f: X→Y诱导所有同伦群同构f_*: π_n(X)≅π_n(Y)（对所有n），则f是同伦等价。这是同伦论的核心定理，表明同伦群完全刻画了CW复形的同伦型。", difficulty: "medium", chapter: "ch4" },

  { q: "Hurewicz定理断言：若X是(n-1)连通的（n≥2），则π_n(X)与H_n(X)的关系是什么？", options: ["π_n(X) ≅ H_n(X)（Hurewicz同态是同构）", "π_n(X) ≅ H_{n-1}(X)", "π_n(X) ≅ H_{n+1}(X)", "π_n(X) ≅ H_n(X) ⊕ Z"], answer: 0, explanation: "Hurewicz定理：若X是(n-1)连通的（即π_i(X)=0对i<n），则Hurewicz同态h: π_n(X)→H_n(X)是同构（n≥2时）。特别地，第一个非平凡的同伦群与同调群同构。这是联系同伦论与同调论的基本定理。", difficulty: "medium", chapter: "ch4" },

  { q: "π₃(S²)等于什么？", options: ["0", "Z", "Z₂", "Z × Z"], answer: 1, explanation: "π₃(S²) ≅ Z，由Hopf映射S³→S²生成。这是Hopf在1931年的著名发现：存在非平凡映射S³→S²（Hopf纤维化）。由纤维化S¹→S³→S²的长正合序列得π₃(S²)≅π₃(S³)≅Z。这是第一个k>n非平凡π_k(S^n)的例子。", difficulty: "medium", chapter: "ch4" },

  { q: "纤维化F→E→B的长正合同伦序列是什么？", options: ["...→π_n(F)→π_n(E)→π_n(B)→π_{n-1}(F)→...", "...→π_n(B)→π_n(E)→π_n(F)→π_{n-1}(B)→...", "...→π_n(E)→π_n(F)→π_n(B)→π_{n-1}(E)→...", "...→π_n(F)→π_n(B)→π_n(E)→π_{n-1}(F)→..."], answer: 0, explanation: "纤维化F→E→B的长正合序列：...→π_n(F)→π_n(E)→π_n(B)→π_n(F)→...→π₀(F)→π₀(E)→π₀(B)。这是计算同伦群最强大的工具之一，通过已知空间的同伦群推导纤维和全空间的同伦群。", difficulty: "medium", chapter: "ch4" },

  { q: "π₄(S³)等于什么？", options: ["Z", "Z₂", "0", "Z × Z"], answer: 1, explanation: "π₄(S³) ≅ Z₂。这是球面同伦群最早的「意外」结果之一。由Frenkel和Pontryagin独立计算。说明球面同伦群非常复杂，即使k=n+1时也不一定为Z。一般地，π_{n+1}(S^n) ≅ Z₂（n≥3）。", difficulty: "hard", chapter: "ch4" },

  { q: "Freudenthal悬挂定理（Freudenthal Suspension Theorem）断言：悬挂同态Σ: π_k(S^n)→π_{k+1}(S^{n+1})在什么条件下是同构？", options: ["k ≤ 2n-2", "k ≤ n", "k = n", "总是同构"], answer: 0, explanation: "Freudenthal悬挂定理：悬挂同态Σ: π_k(S^n)→π_{k+1}(S^{n+1})在k ≤ 2n-2时是同构，在k = 2n-1时是满同态。这解释了为什么球面同伦群在稳定范围（k-n较小时）呈现规律性，产生了稳定同伦群的概念。", difficulty: "hard", chapter: "ch4" },

  { q: "Eilenberg-MacLane空间K(G,n)的定义特征是什么？", options: ["π_k(K(G,n)) = G（k=n）且其他同伦群为零", "H_k(K(G,n)) = G（k=n）且其他同调群为零", "所有同伦群都是G", "所有同调群都是G"], answer: 0, explanation: "K(G,n)是满足π_n(K(G,n))≅G且π_k(K(G,n))=0（k≠n）的CW复形。例如K(Z,1)≃S¹, K(Z,2)≃CP^∞, K(Z₂,1)≃RP^∞。K(G,n)表示上同调：H^n(X;G)≅[X, K(G,n)]。", difficulty: "medium", chapter: "ch4" },

  { q: "Hurewicz定理的更一般形式：若X是(n-1)连通的，则Hurewicz同态h: π_k(X)→H_k(X)在什么范围内是满射/同构？", options: ["对所有k", "k≤n时同构，k=n+1时满射", "仅k=n时同构", "仅k=n+1时同构"], answer: 1, explanation: "Hurewicz定理的完整形式：若X是(n-1)连通的，则h: π_k(X)→H_k(X)对k≤n是同构，对k=n+1是满射。这是连通性与Hurewicz同态关系的最完整表述，在计算具体同伦群时非常有用。", difficulty: "hard", chapter: "ch4" },

  { q: "设X是单连通CW复形，且H_k(X) = 0对所有k < n。由Hurewicz定理，以下哪个结论成立？", options: ["π_k(X) = 0对所有k < n", "π_n(X) ≅ H_n(X)", "π_k(X) ≅ H_k(X)对所有k", "π_n(X) = 0"], answer: 1, explanation: "由相对Hurewicz定理，若X是单连通且H_k(X)=0对k<n，则π_k(X)=0对k<n，且π_n(X)≅H_n(X)（Hurewicz同态是同构）。这是一个经常使用的计算技巧：利用同调信息推导同伦群。", difficulty: "medium", chapter: "ch4" },

  { q: "Whitehead定理的另一种形式：若X,Y是单连通CW复形，且f: X→Y诱导同调同构，则f是什么？", options: ["同胚", "同伦等价", "覆叠映射", "纤维化"], answer: 1, explanation: "Whitehead定理的同调版本：若X,Y是单连通CW复形，且f诱导同调同构f_*: H_n(X)≅H_n(Y)（对所有n），则f是同伦等价。这是通过Hurewicz定理和原始的Whitehead定理得到的。注意单连通条件不可忽略。", difficulty: "medium", chapter: "ch4" },

  { q: "Hopf不变量的定义：对映射f: S^{2n-1}→S^n，Hopf不变量H(f) ∈ Z。H(f)与什么结构有关？", options: ["f的映射度", "f的映射锥的上同调环结构", "f的同伦群", "f的同调群"], answer: 1, explanation: "Hopf不变量H(f)由映射锥C_f = S^n ∪_f D^{2n}的上同调环决定：H^n(C_f)≅Z, H^{2n}(C_f)≅Z，生成元x²=H(f)·y。H(f)非零当且仅当f不零伦。Hopf映射S³→S²的H(f)=1，这是Hopf不变量的经典例子。", difficulty: "hard", chapter: "ch4" },

  { q: "设X是道路连通空间。π₁(X)的交换化（abelianization）与H₁(X)的关系是什么？", options: ["π₁(X)_{ab} ≅ H₁(X)", "π₁(X) ≅ H₁(X)", "π₁(X)_{ab} ≅ H₁(X) ⊕ Z", "π₁(X)_{ab} ≅ H₂(X)"], answer: 0, explanation: "Hurewicz定理（n=1情形）：H₁(X) ≅ π₁(X)_{ab} = π₁(X)/[π₁(X),π₁(X)]。即一维同调群是基本群的交换化。例如8字形空间：π₁=Z*Z（非交换），H₁=Z⊕Z（交换化）。这是Hurewicz定理在n=1时的特殊形式。", difficulty: "easy", chapter: "ch4" },

];