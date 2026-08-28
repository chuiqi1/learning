// ============================================================
// 代数拓扑补充测验题（大题 + 选择题扩展版）
// 基于 Hatcher, Algebraic Topology 的经典习题
// 每章：5道大题（proof/computation，含分步骤解答）+ 5道补充选择题
// 共4章，40题。type仅为 proof / computation / choice。
// 数学符号采用 LaTeX 风格。
// ============================================================

module.exports = [

  // ======================== Ch1 (10题) ========================

  { type: "proof", q: "设 γ:S¹→S¹ 是连续映射。利用万有覆叠 p:R→S¹ 定义 γ 的环绕数 deg γ，证明 deg γ=0 当且仅当 γ 零伦，并由此证明 π₁(S¹,x₀)≅Z。", answer: "①取提升γ̃:[0,1]→R，定义deg γ=γ̃(1)−γ̃(0)。②同伦提升使端点差同伦不变，故deg良定义。③deg=0时γ̃为R中闭路，R可缩，投影得γ零伦；反之亦然。④deg给出π₁(S¹)→Z的满且单同态，故π₁(S¹)≅Z。", difficulty: "hard", chapter: "ch1" },

  { type: "computation", q: "把正方形 I² 的边界按 aba⁻¹b⁻¹ 粘合得到环面 T²。取 U=T²∖{p}（p 为内点）和 V 为 p 的一个小开圆盘，用 Van Kampen 定理计算 π₁(T²)，并证明它同构于 Z⊕Z。", answer: "①U≃S¹∨S¹，故π₁U=⟨a,b⟩；V可缩。②U∩V≃S¹，边界一圈给[a,b]=aba⁻¹b⁻¹。③Van Kampen得π₁T²=⟨a,b|[a,b]=1⟩。④交换化即Z²，aᵐbⁿ↔(m,n)为同构。", difficulty: "hard", chapter: "ch1" },

  { type: "computation", q: "把正方形边界按 aba⁻¹b 粘合得到 Klein 瓶 K（一组对边反向粘合）。用 Van Kampen 定理计算 K 的基本群，并求其交换化。", answer: "①U≃S¹∨S¹，π₁U=⟨a,b⟩；V可缩。②U∩V中边界词aba⁻¹b生成关系。③Van Kampen得π₁K=⟨a,b|aba⁻¹b=1⟩。④等价aba⁻¹=b⁻¹故非交换；交换化剩b²=1，得Z⊕Z/2。", difficulty: "hard", chapter: "ch1" },

  { type: "computation", q: "利用对径映射给出的二重覆叠 p:S²→RP² 与道路提升定理，计算 π₁(RP²)，并指出哪一类环路是非平凡元素。", answer: "①p为二重正则覆叠，变换群Z/2。②S²单连通，p_*像为指数2子群。③故|π₁RP²|=2，即π₁(RP²)≅Z/2。④非平凡元为连接对径点的路径投影，绕两圈为恒等。", difficulty: "medium", chapter: "ch1" },

  { type: "proof", q: "设 X=U∪V，U、V 是道路连通开集且 U∩V 可缩，基点 x₀∈U∩V。证明 π₁(X,x₀)≅π₁(U,x₀)∗π₁(V,x₀)；并用这个特殊形式计算 S¹∨S¹ 的基本群。", answer: "①Van Kampen中关系由π₁(U∩V)的像之差生成。②U∩V可缩故π₁(U∩V)=1，关系平凡，融合积退化为π₁U∗π₁V。③对S¹∨S¹取两圆加宽邻域，交集可缩。④故π₁(S¹∨S¹)=Z∗Z=F₂。", difficulty: "medium", chapter: "ch1" },

  { type: "choice", q: "三维实射影空间 RP³ 的基本群是什么？", options: ["Z", "Z/2", "{e}", "Z⊕Z"], answer: 1, explanation: "对径映射 S³→RP³ 是二重万有覆叠，S³ 单连通，覆叠层数为 2，故 π₁(RP³) 为 2 阶群，即 Z/2。这与 RP¹≅S¹ 的特殊情形不同：RP¹ 的 π₁ 才是 Z。", difficulty: "easy", chapter: "ch1" },

  { type: "choice", q: "设 p:S¹→S¹ 为 p(z)=zⁿ（n≥1）。则诱导同态 p_*:π₁(S¹)≅Z→π₁(S¹)≅Z 的像等于哪个子群？", options: ["0", "nZ", "Z/nZ", "(1/n)Z"], answer: 1, explanation: "该映射是 n 重覆叠，把 S¹ 中绕数为 1 的生成元送到绕数为 n 的环路，因此 p_* 是乘法映射 k↦nk，其像为 nZ。覆叠理论中像子群 p_*(π₁(S¹))=nZ 正对应指数 n 的子群。", difficulty: "easy", chapter: "ch1" },

  { type: "choice", q: "对覆叠 p:X̃→X，若 X̃ 道路连通且 H=p_*(π₁(X̃,x̃₀))，当覆叠层数有限时，它等于什么？", options: ["指数 [π₁(X,x₀):H]", "|H|", "|π₁(X,x₀)/H|⁻¹", "H 的生成元个数"], answer: 0, explanation: "覆叠空间分类表明，连通覆叠的等价类对应 π₁(X) 的子群共轭类，且覆叠层数等于对应子群的指数 [π₁(X):p_*π₁(X̃)]。例如 z↦zⁿ 的层数 n 等于 [Z:nZ]=n。", difficulty: "medium", chapter: "ch1" },

  { type: "choice", q: "连续映射 f:S¹→S¹ 的度为 2。则 f 在基本群上诱导的 f_*:Z→Z 是什么？", options: ["乘 2", "乘 −2", "恒等映射", "零映射"], answer: 0, explanation: "度 2 表示 f 把 S¹ 的生成元（正向绕一圈）送到绕数为 2 的环路，因此 f_* 在 Z 上是乘 2。度数与诱导的同调同态 H₁(f) 也一致，同调论中同样表现为乘 d。", difficulty: "easy", chapter: "ch1" },

  { type: "choice", q: "图 G=S¹∨S¹∨S¹（三个圆粘于同一点）的基本群是什么？", options: ["F₃（三个生成元的自由群）", "Z³", "Z/3", "与 S³ 的基本群相同"], answer: 0, explanation: "由 Van Kampen 定理，G 分解为三个 S¹ 的开邻域，交集可缩，故 π₁(G)≅Z∗Z∗Z=F₃。注意它不交换，因此不同于 Z³。", difficulty: "medium", chapter: "ch1" },

  // ======================== Ch2 (10题) ========================

  { type: "computation", q: "设闭定向曲面 M_g 有 Δ-复形结构：1 个 0 胞腔、2g 个 1 胞腔 a₁,b₁,…,a_g,b_g 和 1 个 2 胞腔，其边界由单词 ∏_{i=1}^g [a_i,b_i] 给出。计算 H₀(M_g;Z)、H₁(M_g;Z)、H₂(M_g;Z)。", answer: "①链复形为0→Z—∂₂→Z^{2g}—∂₁→Z→0。②1胞腔两端同点，∂₁=0。③边界词中a_i与a_i⁻¹、b_i与b_i⁻¹系数相消，∂₂=0。④故H₂=Z，H₁=Z^{2g}，H₀=Z。", difficulty: "hard", chapter: "ch2" },

  { type: "computation", q: "Klein 瓶 K 取 CW 结构：1 个 0 胞腔、两个 1 胞腔 a,b、1 个 2 胞腔，附着词为 aba⁻¹b。计算胞腔边缘 ∂₂ 以及 H_*(K;Z)。", answer: "①C₂=Z，C₁=Z⟨a,b⟩，C₀=Z，∂₁=0。②词aba⁻¹b中a系数0、b系数2，故∂₂(1)=2b。③ker∂₂=0，故H₂=0；H₁=Z⟨a,b⟩/⟨2b⟩=Z⊕Z/2；H₀=Z。④此H₁与π₁K的交换化一致。", difficulty: "hard", chapter: "ch2" },

  { type: "computation", q: "用约化 Mayer-Vietoris 序列对 n 归纳，计算球面 Sⁿ（n≥1）的整系数同调群。", answer: "①把Sⁿ写成Dⁿ_+∪Dⁿ_-，圆盘可缩，约化MV给0→H̃_i(Sⁿ)→H̃_{i−1}(Sⁿ⁻¹)→0。②故H̃_i(Sⁿ)≅H̃_{i−1}(Sⁿ⁻¹)。③迭代得H̃_i(Sⁿ)≅H̃_{i−n}(S⁰)，而H̃₀(S⁰)=Z。④故H₀(Sⁿ)=Z、H_n(Sⁿ)=Z，其余为0。", difficulty: "medium", chapter: "ch2" },

  { type: "computation", q: "令 X=S²∪_f e³ 为把 3 胞腔沿度 d 的映射 f:S²→S² 附着到 S² 得到的 CW 复形。求 X 的整系数同调群。", answer: "①链复形为0→Z—d→Z→0→Z。②S²胞腔无边界，∂₁=∂₂=0。③∂₃是把Z乘d。④故H₃=ker∂₃=0，H₂=Z/dZ，H₁=0，H₀=Z。", difficulty: "medium", chapter: "ch2" },

  { type: "proof", q: "设有限 CW 复形 X 有 c_n 个 n 胞腔。证明 χ(X)=Σ_n (−1)^n c_n 等于 Σ_n (−1)^n rank H_n(X)，并说明欧拉示性数是同伦不变量。", answer: "①记C_n=胞腔链，rank C_n=c_n。②对有限链复形，Σ(−1)ⁱrank C_i=Σ(−1)ⁱrank H_i，由Z_i、B_i的秩关系相消。③左端=Σ(−1)ⁿc_n，右端=Σ(−1)ⁿrank H_n。④同调同伦不变，故χ同伦不变。", difficulty: "hard", chapter: "ch2" },

  { type: "choice", q: "Möbius 带 M 的 H₁(M;Z) 是什么？", options: ["Z", "Z/2", "0", "Z⊕Z"], answer: 0, explanation: "Möbius 带可沿中心圆强形变收缩到 S¹，同调是同伦不变量，故 H₁(M)≅H₁(S¹)≅Z。中心圆是生成元，跨过 Möbius 带的横截线段不是闭链，因此不贡献一维同调。", difficulty: "easy", chapter: "ch2" },

  { type: "choice", q: "Klein 瓶 K 的 H₂(K;Z) 是什么？", options: ["Z", "Z/2", "0", "Z⊕Z"], answer: 2, explanation: "K 是紧致无边的非定向 2 维流形；由胞腔同调，其 2 胞腔边界 ∂₂(1)=2b 是单射，故没有二维闭链，H₂(K;Z)=0。这与闭定向曲面（例如环面）的 H₂=Z 不同。", difficulty: "medium", chapter: "ch2" },

  { type: "choice", q: "离散两点空间 X={p,q} 的 H₀(X;Z) 是什么？", options: ["Z", "Z⊕Z", "Z/2", "0"], answer: 1, explanation: "H₀ 的秩等于道路连通分支数。X 有两个连通分支 p 和 q，每个点代表一个 0 维闭链类，故 H₀(X;Z)≅Z⊕Z。道路连通空间的 H₀ 才是单个 Z。", difficulty: "easy", chapter: "ch2" },

  { type: "choice", q: "若 X 是可缩空间（如同胚于一点的同伦型），则对 n≥1，H_n(X;Z) 等于什么？", options: ["Z", "0", "Z/2", "依赖于 X 的结构"], answer: 1, explanation: "同调是同伦不变量。点空间满足 H₀(pt)=Z 而 H_n(pt)=0（n≥1），因此任何可缩空间的高维同调都为零。", difficulty: "easy", chapter: "ch2" },

  { type: "choice", q: "三维环面 T³=S¹×S¹×S¹ 有 1 个 0 胞腔、3 个 1 胞腔、3 个 2 胞腔、1 个 3 胞腔。其欧拉示性数 χ(T³) 是多少？", options: ["0", "1", "2", "8"], answer: 0, explanation: "χ(T³)=c₀−c₁+c₂−c₃=1−3+3−1=0。这也可由 H_*(T³) 的秩或乘积空间的乘法性 χ(T³)=χ(S¹)³=0³ 得到。", difficulty: "medium", chapter: "ch2" },

  // ======================== Ch3 (10题) ========================

  { type: "computation", q: "用环面 T² 的胞腔结构（0 胞腔一个、1 胞腔 a,b、2 胞腔一个，边界词 aba⁻¹b⁻¹）写出上链复形，计算 H^*(T²;Z)，并证明其杯积为外代数 Λ_Z(α,β)。", answer: "①对偶上链复形δ⁰=δ¹=0，故H⁰=Z，H¹=Z²，H²=Z。②设α,β为a,b的对偶，α⌣β在2胞腔取1，生成H²。③分次交换给α²=−α²且H²无挠，故α²=0，同理β²=0。④故H*(T²)=Λ_Z(α,β)。", difficulty: "hard", chapter: "ch3" },

  { type: "computation", q: "已知 RP² 的整系数同调为 H₀=Z、H₁=Z/2、H₂=0。用万有系数定理计算 Hⁿ(RP²;Z)，n=0,1,2。", answer: "①短正合列0→Ext(H_{n−1},Z)→Hⁿ→Hom(H_n,Z)→0。②H⁰=Hom(Z,Z)=Z。③H¹=Hom(Z/2,Z)⊕Ext(Z,Z)=0。④H²=Hom(0,Z)⊕Ext(Z/2,Z)=Z/2。", difficulty: "medium", chapter: "ch3" },

  { type: "computation", q: "计算乘积空间 S²×S⁴ 的整系数上同调环 H^*(S²×S⁴;Z)，并写出各维数上的群。", answer: "①Künneth给出H*(S²×S⁴)=H*(S²)⊗H*(S⁴)。②H*(S²)=Z[α]/(α²),|α|=2；H*(S⁴)=Z[β]/(β²),|β|=4。③α,β同偶维可交换，αβ∈H⁶非零。④故环为Z[α,β]/(α²,β²)，维0,2,4,6各Z。", difficulty: "medium", chapter: "ch3" },

  { type: "computation", q: "对系数群 G=Z/2，用万有系数定理计算 Hⁿ(RP²;Z/2)，n=0,1,2。", answer: "①已知H₀=Z、H₁=Z/2、H₂=0。②H⁰=Hom(Z,Z/2)=Z/2。③H¹=Hom(Z/2,Z/2)⊕Ext(Z,Z/2)=Z/2。④H²=Hom(0,Z/2)⊕Ext(Z/2,Z/2)=Z/2；故逐维都是Z/2。", difficulty: "medium", chapter: "ch3" },

  { type: "proof", q: "证明上同调中杯积的分次交换律：对 α∈H^p(X;R)、β∈H^q(X;R)，有 α⌣β = (−1)^{pq} β⌣α。", answer: "①α⌣β与β⌣α只差顶点逆序。②存在链同伦ρ使(α⌣β)(σ)=(−1)^{pq}(β⌣α)(σ)+上边缘项。③取同调类后上边缘项消失。④故分次交换律成立；奇次生成元杯平方为2挠元。", difficulty: "hard", chapter: "ch3" },

  { type: "choice", q: "Hⁿ(Sⁿ;Z) 同构于哪个群？", options: ["Z", "0", "Z/2", "Z⊕Z"], answer: 0, explanation: "Sⁿ 的整系数同调只在 0 维和 n 维为 Z。由万有系数定理，Hⁿ(Sⁿ;Z)≅Hom(Z,Z)=Z。这正是 Poincaré 对偶 Hⁿ(M)≅H₀(M)≅Z 在球面情形下的直接体现。", difficulty: "easy", chapter: "ch3" },

  { type: "choice", q: "设 x 是 H²(CP²;Z)≅Z 的生成元，则杯积 x⌣x∈H⁴(CP²;Z) 是什么？", options: ["0", "x 的两倍", "H⁴ 的生成元", "两个生成元之和"], answer: 2, explanation: "H^*(CP²;Z)≅Z[x]/(x³) 且 |x|=2，所以 x² 生成 H⁴(CP²;Z)≅Z。杯积不是零，这表明 CP² 的上同调环有非平凡的乘法结构，与 S²∨S⁴ 的上同调环不同。", difficulty: "medium", chapter: "ch3" },

  { type: "choice", q: "设 M 是 n 维紧致无边定向连通流形。由 Poincaré 对偶，H⁰(M;Z) 同构于什么？", options: ["H₀(M;Z)", "H_n(M;Z)", "H₁(M;Z)", "H_{n−1}(M;Z)"], answer: 1, explanation: "Poincaré 对偶给出 H^k(M)≅H_{n−k}(M)。取 k=0 得 H⁰(M)≅H_n(M)。对连通闭定向流形，H_n(M)≅Z，其基本类的存在是定向流形最核心的代数结论。", difficulty: "medium", chapter: "ch3" },

  { type: "choice", q: "对道路连通 CW 复形的楔和 X∨Y，其约化上同调满足什么关系？", options: ["\\widetilde H^n(X∨Y)≅\\widetilde H^n(X)⊕\\widetilde H^n(Y)", "\\widetilde H^n(X∨Y)≅\\widetilde H^n(X)⊗\\widetilde H^n(Y)", "\\widetilde H^n(X∨Y)≅\\widetilde H^n(X)∗\\widetilde H^n(Y)", "\\widetilde H^n(X∨Y)≅\\widetilde H^{n−1}(X)⊕\\widetilde H^{n−1}(Y)"], answer: 0, explanation: "楔和可以用两个开邻域覆盖，其交可缩，约化 Mayer-Vietoris 序列正合段变为直和分裂，因此约化上同调逐维相加。这也是楔和的同调群逐维直和的对偶事实。", difficulty: "medium", chapter: "ch3" },

  { type: "choice", q: "对闭连通定向亏格 g 曲面 M_g，一维上同调类之间的杯积配对 H¹×H¹→H²≅Z 是什么结构？", options: ["辛（交错非退化）结构", "欧几里得正定结构", "平凡结构", "对称非退化结构"], answer: 0, explanation: "在辛基 {α_i,β_i} 上，杯积满足 α_i⌣α_j=β_i⌣β_j=0、α_i⌣β_j=δ_{ij}·[M_g]，因此是交错非退化配对，即辛结构。这是闭曲面拓扑的重要不变量。", difficulty: "hard", chapter: "ch3" },

  // ======================== Ch4 (10题) ========================

  { type: "proof", q: "利用万有覆叠 p:R→S¹ 证明：当 n≥2 时，π_n(S¹,x₀)=0。", answer: "①任取[f]∈π_n(S¹)。②n≥2时Sⁿ单连通，提升判据给f̃:Sⁿ→R且p∘f̃=f。③R可缩，故f̃零伦。④投影得f零伦，故π_n(S¹)=0。", difficulty: "medium", chapter: "ch4" },

  { type: "computation", q: "考虑 Hopf 纤维化 S¹→S³→S²。利用同伦群的长正合序列计算 π₂(S²) 和 π₃(S²)。", answer: "①LES片段：π₂(S¹)→π₂(S³)→π₂(S²)→π₁(S¹)→π₁(S³)。②代入0→π₂(S²)→Z→0得π₂(S²)≅Z。③由0→π₃(S³)→π₃(S²)→0得π₃(S²)≅π₃(S³)。④π₃(S³)=Z，故π₃(S²)=Z。", difficulty: "hard", chapter: "ch4" },

  { type: "computation", q: "利用二重覆叠 p:S³→RP³ 计算 πₙ(RP³) 对所有 n≥1。", answer: "①二重覆叠给出π₁(RP³)=Z/2。②n≥2时Sⁿ单连通，映射到RP³可提升到S³。③提升在同伦下唯一，故p_*对n≥2是同构。④π₂(S³)=0、π₃(S³)=Z，故π₂(RP³)=0、π₃(RP³)=Z。", difficulty: "hard", chapter: "ch4" },

  { type: "computation", q: "已知 π₄(S³)≅Z/2，并且 π₃(S¹)=π₄(S¹)=0。用 Hopf 纤维化 S¹→S³→S² 的长正合序列计算 π₄(S²)。", answer: "①LES含片段π₄(S¹)→π₄(S³)→π₄(S²)→π₃(S¹)。②代入0→Z/2→π₄(S²)→0。③正合性给同构，故π₄(S²)≅Z/2。④说明S²的高维同伦群含Z/2挠元。", difficulty: "hard", chapter: "ch4" },

  { type: "proof", q: "构造四元数单位群 S³≅SU(2) 到 SO(3) 的二重覆叠，并证明 π₁(SO(3))≅Z/2。", answer: "①单位四元数群S³≅SU(2)共轭作用于纯虚四元数R³，给同态SU(2)→SO(3)。②该同态满射且核{±1}≅Z/2，故为二重覆叠。③S³单连通，p_*像为指数2子群。④故|π₁(SO(3))|=2，π₁(SO(3))≅Z/2。", difficulty: "hard", chapter: "ch4" },

  { type: "choice", q: "对 k≥2，π_k(S¹) 同构于什么？", options: ["Z", "0", "Z/k", "Z/2"], answer: 1, explanation: "万有覆叠 p:R→S¹ 中，对 k≥2 的映射 S^k→S¹ 可提升到可缩空间 R，因此所有高阶同伦类都零伦。只有 π₁(S¹)≅Z 是非平凡的。", difficulty: "easy", chapter: "ch4" },

  { type: "choice", q: "Hopf 映射 η:S³→S² 的 Hopf 不变量 H(η) 等于多少？", options: ["0", "1", "2", "−1"], answer: 1, explanation: "Hopf 映射的映射锥给出 CP²，其上同调环满足 x²=y，因此 Hopf 不变量 H(η)=1。非零 Hopf 不变量表明 S³→S² 存在非零伦映射，这是球面同伦群 π₃(S²)≠0 的关键来源。", difficulty: "medium", chapter: "ch4" },

  { type: "choice", q: "设 p:X̃→X 是覆叠映射。当 n≥2 时，诱导同态 p_*:π_n(X̃)→π_n(X) 是什么？", options: ["同构", "单射", "满射", "零映射"], answer: 0, explanation: "覆叠空间在同伦提升意义下，高维球面映射可唯一提升，且底空间的同伦也提升，故 n≥2 时 p_* 是双射，即同构。覆叠在 π₁ 层面一般只是单射，未必是满射。", difficulty: "medium", chapter: "ch4" },

  { type: "choice", q: "特殊正交群 SO(3) 的基本群 π₁(SO(3)) 同构于什么？", options: ["Z", "0", "Z/2", "Z/4"], answer: 2, explanation: "SU(2)≅S³ 通过 {±I} 的商给出 SO(3)，构成二重覆叠。因为 S³ 单连通，π₁(SO(3)) 是 2 阶群，即 Z/2。这在物理上对应自旋量子化的拓扑起源。", difficulty: "medium", chapter: "ch4" },

  { type: "choice", q: "Whitehead 定理的同调版本（用同调同构推出同伦等价）通常要求 X 和 Y 满足什么条件？", options: ["道路连通", "单连通", "紧致 Hausdorff", "可缩"], answer: 1, explanation: "单连通 CW 复形之间，若映射 f 诱导所有同调群的同构，则由相对 Hurewicz 定理可逐维推出 π_n 同构，再用 Whitehead 定理得到同伦等价。若无单连通条件，结论可能不成立。", difficulty: "medium", chapter: "ch4" },

];