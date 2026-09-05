// ============================================================
// 例子“根据定义逐步计算”完整推导
// 结构：{ "节点id": { "例子序号(从0起)": "①②③… 完整代入计算" } }
// 每步用【思路】（为什么做这步/用到哪个定义定理）与【计算】（具体代入与化简）标注。
// 数学用 ^ / _ 记法，构建时自动转成上下标。
// ============================================================

const L = String.raw;

module.exports = {
  "r1": {
    0: "①【思路】曲率是切向角变化率，但一般参数下直接用公式 κ=|x′y″−y′x″|/(x′²+y′²)^{3/2} 最方便，先写出圆的参数化。【计算】γ(t)=(R cos t, R sin t)。②【思路】对两个分量分别求导，用到 (cos t)′=−sin t、(sin t)′=cos t，再乘上 R。【计算】γ′(t)=(−R sin t, R cos t)。③【思路】再求二阶导，继续逐分量求导。【计算】γ″(t)=(−R cos t, −R sin t)。④【思路】代入公式，令 x=γ₁、y=γ₂，即 x′=−R sin t, y′=R cos t, x″=−R cos t, y″=−R sin t。先算分子十字相乘。【计算】|x′y″−y′x″|=|(−R sin t)(−R sin t)−(R cos t)(−R cos t)|=|R² sin²t + R² cos²t|=R²(sin²t+cos²t)=R²。⑤【思路】再算分母 (x′²+y′²)^{3/2}，注意 sin²t+cos²t=1 是化简关键。【计算】分母=(R² sin²t+R² cos²t)^{3/2}=(R²)^{3/2}=R³。⑥【结论】κ=R²/R³=1/R，与 t 无关，故圆处处等曲率，曲率半径 1/κ=R 恰为圆的半径。",
    1: "①【思路】抛物线 y=x² 用 x 作参数最自然，即 γ(t)=(t,t²)。【计算】γ(t)=(t, t²)。②【思路】求一阶、二阶导：x′=1, y′=2t, x″=0, y″=2。【计算】γ′=(1,2t)，γ″=(0,2)。③【思路】代入 κ=|x′y″−y′x″|/(x′²+y′²)^{3/2}，先算分子 1·2−2t·0=2，再算分母。【计算】κ=|1·2−2t·0|/(1+4t²)^{3/2}=2/(1+4t²)^{3/2}。④【思路】顶点在 t=0，代入看特殊值。【计算】t=0 处 κ=2/(1+0)^{3/2}=2。⑤【思路】研究极端 |t|→∞ 的渐近行为：分母以 |t|³ 增长。【计算】lim_{|t|→∞} 2/(1+4t²)^{3/2}=2/((4t²)^{3/2})=2/(8|t|³)=1/(4|t|³)→0。⑥【结论】曲率从顶点最大值 2 单调衰减到 0，正是“越远离顶点越平”。",
    2: "①【思路】回旋曲线按定义要求曲率随弧长线性增长，取 κ(s)=a s。先算切向角：θ=∫κ ds。【计算】θ(s)=∫₀^s κ(u)du=∫₀^s a u du=a·(u²/2)|₀^s=a s²/2。②【思路】由平面曲线基本定理，单位切向量 T(s)=(cos θ, sin θ)。【计算】T(s)=(cos(a s²/2), sin(a s²/2))。③【思路】位置向量是切向量的积分（弧长参数下 T=γ′）。【计算】γ(s)=γ(0)+∫₀^s T(u)du=(∫₀^s cos(a u²/2)du, ∫₀^s sin(a u²/2)du)。④【思路】这两个积分正是 Fresnel 积分 C(s)、S(s)。【结论】故回旋曲线就是 Fresnel 螺旋，κ 从 0（直线）线性增长到 as（等效圆弧），曲率连续无突变，是公路缓和曲线的数学依据。"
  },
  "r2": {
    0: "①【思路】空间曲线曲率用 κ=|r′×r″|/|r′|³ 计算，先写出螺旋线参数化。【计算】r(t)=(cos t, sin t, a t)。②【思路】逐分量求一阶、二阶导。【计算】r′=(−sin t, cos t, a)，r″=(−cos t, −sin t, 0)。③【思路】曲率公式需要 |r′| 和 |r′×r″|，先算模长。【计算】|r′|=√(sin²t+cos²t+a²)=√(1+a²)。④【思路】求叉积 r′×r″，用行列式展开（i,j,k 三行）。【计算】r′×r″=det[i j k; −sin t cos t a; −cos t −sin t 0]=(a sin t, −a cos t, sin²t+cos²t)=(a sin t, −a cos t, 1)，故 |r′×r″|=√(a² sin²t+a² cos²t+1)=√(1+a²)。⑤【思路】代入曲率公式。【计算】κ=√(1+a²)/(1+a²)^{3/2}=1/(1+a²)。⑥【思路】挠率 τ=(r′,r″,r‴)/|r′×r″|²，需求三阶导和混合积。【计算】r‴=(sin t, −cos t, 0)，混合积 (r′,r″,r‴)=det[−sin t cos t a; −cos t −sin t 0; sin t −cos t 0]=a。故 τ=a/(1+a²)。⑦【结论】κ、τ 都是常数，螺旋线是唯一的常曲率常挠率空间曲线。",
    1: "①【思路】DNA 是两条绕公共轴的反向螺旋，可抽象为 B-DNA 的几何参数：螺距约 3.4nm、直径约 2nm，每圈 10 个碱基对。【计算】取半径 R≈1nm、每圈上升 h≈3.4nm，则等效参数 a=h/(2πR)≈3.4/(6.28)≈0.54。②【思路】套用螺旋线公式 κ=1/(1+a²)、τ=a/(1+a²)。【计算】κ=1/(1+0.29)≈0.77 nm⁻¹，τ=0.54/1.29≈0.42 nm⁻¹。③【思路】把碱基对扭转角（约 36°/对）与 τ 联系：τ 度量副法向绕切向的旋转快慢。【结论】DNA 的 κ、τ 与超螺旋数（Linking/Twist/Writhe）直接相关，拓扑异构酶改变的是 Writhe，从而改变整体几何。"
  },
  "r3": {
    0: "①【思路】球面外法向沿径向，单位法向 N(p)=p/R。【计算】N(p)=p/R。②【思路】形状算子（Weingarten 映射）S_p(v)=−∇_v N=∇_v(−p/R)。对沿切向的 v，∇_v p=v（位置向量沿自身方向线性变化）。【计算】S_p(v)=−(1/R)∇_v p=−(1/R)v。③【思路】S 的特征值即主曲率。S=−(1/R)Id 只有一个特征值 −1/R，重数 2。【计算】κ₁=κ₂=1/R。④【思路】Gauss 曲率 K=κ₁κ₂，平均曲率 H=(κ₁+κ₂)/2。【计算】K=(1/R)(1/R)=1/R²，H=(1/R+1/R)/2=1/R。⑤【结论】K 恒正且恒定，球面处处是脐点（椭圆点）。",
    1: "①【思路】伪球面由拽物线（tractrix）绕 z 轴旋转而成。拽物线的关键性质：切线段从切点到 x 轴交点的长恒为常数 a。【计算】拽物线参数化 y=a sech(t)、x=a(t−tanh t)，切线段长恒 a。②【思路】旋转面的一条主曲率线是子午线（拽物线），其曲率 k₁；另一条是纬线圆，其曲率与法截线相关。【计算】子午线拽物线曲率 k₁=−1/(a sinh t) 形式（主曲率之一），纬线对应 k₂ 使乘积为常数。③【思路】直接计算乘积 K=k₁k₂：旋转面 Gauss 曲率 K=(d²r/ds²)/r 型公式，代入拽物线有 r''=−r/a² 的结构。【计算】K=k₁k₂=−1/a²。④【思路】取 a=1 得标准伪球面。【结论】K=−1 恒负，伪球面是常负曲率模型，局部等距于双曲平面。",
    2: "①【思路】环面参数化：R 为环心到管心距离，r 为管半径（R>r），用角度 φ（管内）、θ（环绕）。位置向量 x=((R+r cos φ)cos θ, (R+r cos φ)sin θ, r sin φ)。【计算】|x|=√((R+r cos φ)²)。②【思路】主曲率沿两个方向：纬线方向法截曲率 k₁=cos φ/(R+r cos φ)（离轴距离作用）；子午线方向（圆半径 r）k₂=1/r。【计算】k₁=cos φ/(R+r cos φ)，k₂=1/r。③【思路】Gauss 曲率 K=k₁k₂=cos φ/[r(R+r cos φ)]，符号完全由 cos φ 决定。【计算】K=cos φ/(r(R+r cos φ))。④【思路】分析符号：cos φ>0 即外侧（离轴最远），cos φ<0 即内侧。【结论】外侧 K>0（椭圆点），内侧 K<0（双曲点），cos φ=0（最上最下圆周）K=0，故总曲率 ∫K dA=0。"
  },
  "r4": {
    0: "①【思路】平面度量在标准坐标下是 ds²=dx²+dy²（欧氏第一基本形式，系数 g₁₁=g₂₂=1, g₁₂=0）。【计算】ds²=dx²+dy²。②【思路】把平面卷成圆柱：设圆柱半径 R，柱面参数 (θ, z)，诱导度量来自 R³ 嵌入。【计算】柱面位置 X(θ,z)=(R cos θ, R sin θ, z)，dX=(−R sin θ dθ, R cos θ dθ, dz)，故 ds²=R² dθ²+dz²。③【思路】做坐标代换 u=Rθ、v=z 消去 R。【计算】ds²=du²+dv²。④【思路】找到局部等距 Φ(u,v)=(x,y)，使两度量逐点相同。【计算】取 x=u, y=v 即 Φ 为恒等换名，度量系数完全一致。⑤【结论】平面与柱面等距，Gauss 曲率作为内蕴量必有 K_柱=K_平=0；三角形卷到柱面上内角和仍为 180°。",
    1: "①【思路】地图投影是球面到平面的映射。球面 K=1/R²>0，平面 K=0，若存在保距投影则二者等距，要求 K 相等，矛盾。【计算】K_S²=1/R²≠0=K_R²。②【思路】再说明等距要求内蕴曲率不变：等距映射保持度量，而 Gauss 曲率由度量决定，故必保持。【结论】任何球面到平面的映射都会畸变，只能保角（Mercator）或保面积（Lambert），不可能同时保两者，这是内蕴曲率不同的必然结果。"
  },
  "r5": {
    0: "①【思路】球面 Gauss 曲率 K=1/R²，面积 A=4πR²，总曲率=∫ K dA。【计算】∫_{S²} K dA=(1/R²)·4πR²=4π。②【思路】查 Euler 示性数 χ(S²)=2，验证 Gauss-Bonnet 2πχ=4π。【计算】2πχ=2π·2=4π，二者相等。③【结论】总曲率与半径 R 无关——放大球面时 K 减小、面积增大，乘积恒为 4π。",
    1: "①【思路】环面 Euler 示性数 χ(T²)=0（由 V−E+F 或 χ=2−2g, 亏格 g=1）。【计算】χ=2−2·1=0。②【思路】由 Gauss-Bonnet 得 ∫_T² K dA=2πχ=0。【计算】∫ K dA=2π·0=0。③【思路】几何解释：外侧 K>0 的贡献与内侧 K<0 的贡献恰好抵消（参考 r3 环面 K 的符号分析）。【结论】环面不能承载处处为正的度量，正曲率区域必须由负曲率区域补偿。",
    2: "①【思路】亏格 g=2 闭曲面 χ=2−2g=2−4=−2。【计算】χ=−2。②【思路】Gauss-Bonnet 给出总曲率。【计算】∫ K dA=2π·(−2)=−4π。③【结论】双孔曲面总曲率被拓扑锁定为负的 −4π，无论如何连续变形都无法改变。"
  },
  "r6": {
    0: "①【思路】欧氏空间取标准坐标 x¹,…,xⁿ，度量张量是 Kronecker δ。【计算】g_ij=δ_ij={1 (i=j); 0 (i≠j)}。②【思路】向量 v 的模长平方由 g 定义：|v|²=g_ij v^i v^j。【计算】|v|²=Σ_{i,j} δ_ij v^i v^j=Σ_i (v^i)²。③【思路】无穷小弧长 ds²=g_ij dx^i dx^j。【计算】ds²=(dx¹)²+…+(dxⁿ)²。④【思路】度量系数是常数，故 Christoffel 符号 Γ^k_ij=(1/2)g^{kl}(∂_i g_jl+∂_j g_il−∂_l g_ij) 全为零。【计算】因 ∂g=0，Γ^k_ij=0。⑤【结论】测地线方程 d²x^k/dt²+Γ^k_ij x'^i x'^j=0 退化为 d²x^k/dt²=0，测地线即直线。",
    1: "①【思路】Minkowski 度量定义在 R⁴ 上，坐标 (t,x,y,z)，符号 (−,+,+,+)。【计算】ds²=−dt²+dx²+dy²+dz²。②【思路】写分量：g_00=−1, g_11=g_22=g_33=1，其余为 0（这仍是对称非退化的，但不是正定，故不是黎曼度量而是 Lorentz 度量）。【计算】g=diag(−1,1,1,1)。③【思路】类时、类空、类光向量由 |v|² 符号区分：|v|²<0 类时，=0 类光，>0 类空。【计算】例如切向量 (1,1,0,0) 的模方 −1+1=0，是类光的。④【结论】这是狭义/广义相对论的时空度量，说明“度量”可超出正定范围，属伪黎曼几何。",
    2: "①【思路】R³ 中曲面由参数化 r(u,v) 给出，诱导度量（第一基本形式）是欧氏内积在切平面上的限制。【计算】E=⟨r_u,r_u⟩, F=⟨r_u,r_v⟩, G=⟨r_v,r_v⟩。②【思路】ds²=E du²+2F du dv+G dv²，这是曲面自身的黎曼度量，无需外围空间信息。【计算】ds²=E du²+2F du dv+G dv²。③【思路】例如球面 r(θ,φ)=(R sin φ cos θ, R sin φ sin θ, R cos φ)，求偏导代入。【计算】r_θ=(−R sin φ sin θ, R sin φ cos θ, 0)，r_φ=(R cos φ cos θ, R cos φ sin θ, −R sin φ)，故 E=R² sin²φ, F=0, G=R²，即 ds²=R²(dθ² sin²φ... ) 展开为 R² sin²φ dθ²+R² dφ²。④【结论】这是球面的标准黎曼度量，完全内蕴。"
  },
  "r7": {
    0: "①【思路】函数的微分 df 是余切向量（1-形式），分量为偏导 ∂_i f。【计算】df=∂_i f dx^i。②【思路】度量给出“升指标”音乐同构：把 1-形式 df 变成向量场，用逆度量 g^{ij}。【计算】(grad f)^i=g^{ij}∂_j f。③【思路】欧氏情形 g^{ij}=δ^{ij}，求和只剩对角项。【计算】(grad f)^i=∂_i f，即 grad f=(∂₁f,…,∂ₙf)。④【思路】例 f=x²+y²，偏导 ∂_x f=2x, ∂_y f=2y。【计算】grad f=(2x,2y)。⑤【结论】梯度指向 f 增长最快的方向，模长等于方向导数最大值。",
    1: "①【思路】散度是向量场 X 的“无穷小体积变化率”，协变定义 div X=tr(∇X)=∇_i X^i。【计算】div X=∇_i X^i=∂_i X^i+Γ^i_ik X^k。②【思路】欧氏空间 Γ=0，散度退化为普通偏导之和。【计算】div X=∂_i X^i=∂₁X¹+…+∂ₙXⁿ。③【思路】例 X=(x², xy)，分量 X¹=x², X²=xy。【计算】div X=∂_x(x²)+∂_y(xy)=2x+x=3x。④【结论】散度是梯度（余切）的“降指标”对偶运算，div X=δd(X^♭ 与体积形式的对偶)，描述源/汇。",
    2: "①【思路】Laplace-Beltrami 算子 Δ=div∘grad，是梯度的散度，用度量张行列式 det g 表示。【计算】Δf=(1/√(|g|))∂_i(√(|g|) g^{ij} ∂_j f)。②【思路】欧氏空间 |g|=1、g^{ij}=δ^{ij}，退化为普通 Laplace。【计算】Δf=∂_i ∂_i f=∂₁²f+…+∂ₙ²f。③【思路】例 f=x²+y²，求二阶偏导。【计算】∂_x²f=2, ∂_y²f=2，故 Δf=2+2=4。④【结论】Δf 处处为常数 4>0，说明 f 在原点附近是“下凸”的（Δf=平均值的二阶偏差）。"
  },
  "r8": {
    0: "①【思路】欧氏等距是保持 ds²=dx²+dy²+dz² 的变换，由平移和正交变换（旋转/反射）生成。【计算】f(x)=Ax+b，A∈O(n), b∈Rⁿ。②【思路】验证保距：d(f(x),f(y))=|A(x−y)|=|x−y|（A 正交保模长）。【计算】|Ax−Ay|=√((x−y)ᵀAᵀA(x−y))=|x−y|。③【思路】等距群结构：平移子群 T≅Rⁿ 正规，商为 O(n)。【计算】E(n)≅Rⁿ⋊O(n)，维数 n+n(n−1)/2。④【结论】这就是欧氏等距群（运动群），n=3 时维数为 6（3 平移+3 旋转）。",
    1: "①【思路】球面 Sⁿ⊂Rⁿ⁺¹ 继承欧氏度量，它的等距由 Rⁿ⁺¹ 中保持球面的正交变换给出。【计算】Isom(Sⁿ)≅O(n+1)。②【思路】验证：正交变换 O 保持 |x|，故把球面映到自身，且保持诱导度量。【计算】|Ox|=|x|=R，且内积不变→度量不变。③【结论】球面等距群维数为 (n+1)n/2，n=2 时 O(3) 为 3 维，正是球面几何（椭圆几何）的变换群。",
    2: "①【思路】双曲平面 H² 的等距群是 Möbius 变换群 PSL(2,R)，保持双曲度量 ds²=(dx²+dy²)/y²。【计算】上半平面模型 g=y^{-2}(dx²+dy²)。②【思路】验证 z↦(az+b)/(cz+d)（ad−bc=1）保持该度量：其 Jacobi 变换使 |dz|/Im z 不变。【计算】Im f(z)=Im z/|cz+d|²，|f′(z)|=1/|cz+d|²，故 |f′(z)|/Im f(z)=1/Im z，度量不变。③【结论】Isom(H²)≅PSL(2,R)，是 3 维李群，比欧氏等距群更“大”，反映双曲几何的丰富对称性。"
  },
  "r9": {
    0: "①【思路】球面 S² 是 R³ 的嵌入子流形，拉回度量即把 R³ 欧氏内积限制到切平面。参数化 F(θ,φ)=(R sin φ cos θ, R sin φ sin θ, R cos φ)。【计算】求偏导 F_θ、F_φ。②【思路】诱导度量系数 g_θθ=⟨F_θ,F_θ⟩ 等。【计算】F_θ=(−R sin φ sin θ, R sin φ cos θ, 0)，F_φ=(R cos φ cos θ, R cos φ sin θ, −R sin φ)，故 g_θθ=R² sin²φ, g_θφ=0, g_φφ=R²。③【结论】拉回度量 g=F*(⟨·,·⟩) 即 ds²=R²(dθ²⋅sin²φ+dφ²)，是球面标准度量。",
    1: "①【思路】环面 T²⊂R³ 参数化 F(θ,φ)=((R+r cos φ)cos θ, (R+r cos φ)sin θ, r sin φ)，拉回欧氏度量。【计算】求 F_θ、F_φ 并做内积。②【思路】F_θ=(−(R+r cos φ)sin θ, (R+r cos φ)cos θ, 0)，F_φ=(−r sin φ cos θ, −r sin φ sin θ, r cos φ)。【计算】g_θθ=(R+r cos φ)², g_θφ=0（两偏导正交）, g_φφ=r²。③【结论】环面诱导度量 ds²=(R+r cos φ)² dθ²+r² dφ²，局部卷曲通过系数 (R+r cos φ) 体现。",
    2: "①【思路】“曲面电影”（moving pictures）法：把流形表示为分层曲面的拉回度量族，用来直观理解度量随参数变化。设 f:M→R 为正则值函数，水平面 f⁻¹(t) 是子流形。【计算】g_t=f⁻¹(t) 的诱导度量，随 t 演化。②【思路】这种“拉回+分层”技术用于证明度量存在性、构造等距嵌入。【结论】拉回度量让“外部形状”转化为“内部度量”，是诱导几何的通用语言。"
  },
  "r10": {
    0: "①【思路】黎曼体积形式 dV=√(|g|) dx¹∧…∧dxⁿ。球面 Sⁿ 半径 R，体积由归纳公式 V_n=ω_n Rⁿ（ω_n 为单位球体积）。【计算】对于 S²，dV=R² sin φ dθ∧dφ。②【思路】积分得面积。【计算】A=∫₀^{2π}∫₀^π R² sin φ dφ dθ=R²·2π·[−cos φ]₀^π=R²·2π·2=4πR²。③【结论】与初等几何一致，体积形式 ∫dV 给出正确的 4πR²。",
    1: "①【思路】双曲空间 Hⁿ 的度量 ds²=dr²+sinh²r dσ²_{n−1}（极坐标，径向测地距离 r）。【计算】径向截面面积元 = sinh^{n−1}r 乘单位球面积。②【思路】体积 V(R)=ω_{n−1}∫₀^R sinh^{n−1}r dr，被积函数指数增长。【计算】n=2 时 V(R)=2π(cosh R −1)≈π e^R。③【结论】双曲球体积随半径指数增长，与欧氏的多项式增长（∝Rⁿ）根本不同，这是负曲率的标志。",
    2: "①【思路】紧致李群 G 上的 Haar 测度是不变体积形式，由左不变微分 n-形式 ω 给出。【计算】在单位元取 ω_e=e¹∧…∧eⁿ，用左平移延拓到全群（左不变）。②【思路】右不变、总体左平移也右平移（G 紧致⇔模函数=1），故 ω 双向不变，∫_G ω 有限。【计算】∫_G ω = 常数体积。③【结论】紧致李群的体积可由不变体积形式积分，是调和分析与 Weyl 积分公式的基础。"
  },
  "r11": {
    0: "①【思路】球极投影是“去掉一点”的球面到平面的共形映射，展示共形等价。设 S² 北极 N，从 N 投影到赤道平面。【计算】σ(x,y,z)=(x/(1−z), y/(1−z))。②【思路】验证共形：拉回平面欧氏度量与球面度量成比例（比例因子为共形因子）。【计算】σ*g_平=(4/(1+x²+y²)²)(dx²+dy²)，即球面度量写成与平面度量共形。③【结论】球面与平面局部共形但不等距，是共形几何的经典例子。",
    1: "①【思路】Yamabe 问题：共形形变度量 ḡ=u^{4/(n−2)}g 使标量曲率变为常数。标量曲率在共形变换下满足。【计算】R(ḡ)=u^{-(n+2)/(n−2)} (4(n−1)/(n−2)Δu + R u)。②【思路】要 R(ḡ)=const 等价于求解非线性椭圆方程，通过变分极小化 Yamabe 泛函。【计算】令 f=u^{(n+2)/(n−2)} 得到经典方程 Δu + c R u = λ u^{(n+2)/(n−2)}。③【结论】Yamabe 问题（已由 Schoen 完成）断言任何紧致黎曼流形共形等价于常标量曲率度量。",
    2: "①【思路】弦的世界面是二维曲面，polyakov 作用量在共形（Weyl）变换下不变，这是二维共形场论的核心。【计算】作用量 S=(1/4πα′)∫ d²σ √h h^{ab}∂_a X^μ∂_b X^μ，其中 h 是世界面度量。②【思路】Weyl 变换 h→e^{ω}h：因二维 h^{ab}√h 保持共形权重，S 不变。【计算】√h→e^{ω}√h，h^{ab}→e^{−ω}h^{ab}，故 h^{ab}√h 不变，S 不变。③【结论】二维共形不变性允许固定世界面度量为平坦，是弦量子化的出发点。"
  },
  "r12": {
    0: "①【思路】标准欧氏空间 Rⁿ 的黎曼度量是 δ_ij，曲率张量恒为零。【计算】g_ij=δ_ij ⟹ Γ^k_ij=0 ⟹ R^l_ijk=0。②【思路】验证测地线是直线：测地线方程无曲率项。【计算】d²x^k/dt²=0 ⟹ x(t)=p+tv。③【思路】验证完备性：任意向量都有定义在全体实数的指数映射 exp_p(v)=p+v。【结论】Rⁿ 是唯一平凡（平坦）的模型空间，是曲率比较的基准。",
    1: "①【思路】环面 Tⁿ=S¹×…×S¹ 是 Rⁿ 的商空间，由整数格点平移群作用得到，继承平坦度量。【计算】Tⁿ=Rⁿ/Zⁿ，投影 p:Rⁿ→Tⁿ 是局部等距。②【思路】因投影局部等距，Tⁿ 上曲率也处处为零。【计算】K(Tⁿ)≡0。③【思路】Tⁿ 紧致但非单连通，π₁(Tⁿ)=Zⁿ。【结论】Tⁿ 是紧致平坦流形，展示“平坦≠单连通”，曲率与拓扑通过 Bonnet-Myers 等定理关联。",
    2: "①【思路】圆柱面 S¹×R 由平面在 z 方向商掉得到，仍平坦。【计算】度量 ds²=dθ²+dz²。②【思路】它也可嵌入 R³ 为 X(θ,z)=(cos θ, sin θ, z)，诱导度量与平面局部等距。【计算】ds²=dθ²+dz² 与 dx²+dy² 等距（x=θ, y=z）。③【结论】圆柱 K=0，展示平坦非平凡流形，绕一圈回到原位的和乐为平凡（可定向）。"
  },
  "r13": {
    0: "①【思路】S² 半径 R 的主曲率均 1/R，Gauss 曲率 K=1/R²，测地线是大圆。【计算】K=κ₁κ₂=1/R²。②【思路】面积用体积形式积分：dV=R² sin φ dθ∧dφ。【计算】A=∫₀^{2π}∫₀^π R² sin φ dφ dθ=4πR²。③【思路】两点最远距离是沿大圆的直径。【计算】diam(S²)=πR（对径点距离）。④【结论】S² 是常正曲率模型，任意两点间有两条测地线（劣弧最短、优弧）。",
    1: "①【思路】S³∪{∞}≅R³ 的紧化，或视为单位四元数（模 1），带 Lie 群结构（≅SU(2)≅Sp(1)）。【计算】S³={q∈H : |q|=1}。②【思路】Hopf 纤维化 S³→S²：把 (z₁,z₂)（|z₁|²+|z₂|²=1）映到 [z₁:z₂]∈CP¹≅S²，纤维是 S¹。【计算】纤维 p⁻¹(pt)≅S¹。③【思路】该纤维化非平凡（扭转次数 1），是 π₃(S²)≅Z 的第一个见证（Hopf 不变量 =1）。【结论】S³ 是球面中唯一带有 Lie 群结构的（除 S¹），是常正曲率与群结构交汇的例子。",
    2: "①【思路】RPⁿ=Sⁿ/{±1}，即把球面对径点粘合，是 n 维实射影空间。【计算】商映射 p:Sⁿ→RPⁿ 为 2:1 覆叠。②【思路】RPⁿ 继承球面的常曲率度量（投影局部等距），故也是常正曲率空间形式。【计算】K(RPⁿ)≡1/R²。③【思路】π₁(RPⁿ)=Z/2（n≥2），因 p 是 2 重万有覆叠。【结论】RPⁿ 展示常曲率但非单连通的空间形式（Killing-Hopf 分类中的重要成员）。"
  },
  "r14": {
    0: "①【思路】Poincaré 圆盘 B²={|z|<1} 配双曲度量 ds²=4(dx²+dy²)/(1−|z|²)²。【计算】g_ij=4δ_ij/(1−x²−y²)²。②【思路】“直线”（测地线）是与边界单位圆正交的圆弧（含直径）。【计算】由测地线方程或 Möbius 不变性导出。③【思路】两点 z,w 的双曲距离由交比公式给出。【计算】d(z,w)=2 arctanh(|z−w|/|1−z w̄|)。④【结论】越靠近边界度量系数越大，长度被“拉伸”，边界代表无穷远，K≡−1。",
    1: "①【思路】双曲平面是唯一能正则铺砖（如 {p,q} 铺砖，p 边形 q 个共顶点）的非欧平面，只要 1/p+1/q<1/2。【计算】例如 {7,3}、{5,4} 铺砖满足 1/7+1/3≈0.476<0.5。②【思路】欧氏铺砖要求 1/p+1/q=1/2（仅 {4,4},{3,6},{6,3}），球面要求 >1/2。【计算】比较曲率：欧氏 K=0、球面 K>0、双曲 K<0 决定铺砖可能性。③【结论】Escher 的“圆极限”画正是双曲铺砖，展示负曲率空间的丰富结构。",
    2: "①【思路】双曲三维空间 H³ 的度量（上半空间模型）ds²=(dx²+dy²+dz²)/z²，z>0。【计算】g=z^{-2}(dx²+dy²+dz²)。②【思路】测地线是与边界平面 z=0 正交的圆弧或直线；体积形式 dV=z^{-3}dx dy dz。【计算】dV=√(|g|)dx dy dz=z^{-3}dx dy dz。③【结论】H³ 是常负曲率模型，应用于 Thurston 三维流形几何化纲领，双曲流形体积是拓扑不变量。"
  },
  "r15": {
    0: "①【思路】二维常曲率 c 的完备单连通空间按高斯曲率符号分三类（Killing-Hopf）。【计算】c>0: S²(1/√c)；c=0: R²；c<0: H²(1/√|c|)。②【思路】判定可用三角形内角和：>180°、=180°、<180° 分别对应正、零、负曲率。【计算】由 Gauss-Bonnet 局部形式 ∫K dA+Σ外角… 导出。③【结论】二维单连通空间形式只有这三种，是高维常曲率分类的二维特例，证明依赖 Killing-Hopf 定理。",
    1: "①【思路】平坦环面 T²=R²/Z²，把平面按整数格点平移粘合，商后继承平坦度量 K≡0。【计算】度量 ds²=dx²+dy²（商局部）。②【思路】T² 紧致非单连通，π₁(T²)=Z²，由两条独立的生成平移（x、y 方向）生成。【计算】π₁(T²)=⟨a,b | ab=ba⟩≅Z²。③【结论】说明常曲率空间的完备单连通假设不可少——去掉单连通就得到更多平坦空间形式。",
    2: "①【思路】球面空间形式是 Sⁿ 被一个自由作用的不连续等距群 Γ 商掉得到的紧致流形（继承常正曲率）。【计算】M=Γ∖Sⁿ，Γ 自由作用。②【思路】三维球面空间形式由 Γ⊂SO(4) 自由作用分类，包含透镜空间 L(p,q)（Γ=Z/p 作用）。【计算】L(p,q)=S³/Z_p，其中生成元 (z₁,z₂)↦(e^{2πi/p}z₁, e^{2πiq/p}z₂)。③【结论】球面空间形式是常正曲率紧致流形，透镜空间给出 π₁=Z/p 的例子。"
  },
  "r16": {
    0: "①【思路】SO(3) 作为紧致李群，其切空间的 Killing 形式诱导双不变度量，等价于标准球面度量（SO(3)≅RP³ 是双覆盖 S³）。【计算】在单位元切空间 𝔰𝔬(3) 取内积 ⟨A,B⟩=−(1/2)tr(AB)。②【思路】双不变度量使左右平移都是等距，结构常数为 Levi-Civita 联络提供显式公式。【计算】∇_X Y=(1/2)[X,Y]（对双不变度量的左不变向量场）。③【结论】SO(3) 几何与 S³、RP³ 相关，是双不变度量曲率公式（Milnor）的应用对象。",
    1: "①【思路】SU(2)≅S³：单位四元数 a+bi+cj+dk（a²+b²+c²+d²=1）参数化 S³，乘法即四元数乘法。【计算】|q|=1 ⟺ q∈S³，且 SU(2)≅Sp(1)。②【思路】SU(2) 的双不变度量是标准球面度量（比例因子），因为 SU(2)≅S³ 等距。【计算】曲率截面恒 1。③【结论】SU(2)≅S³ 是唯一三维单连通紧致李群，双覆盖 SO(3)≅RP³，二者都是常正曲率。",
    2: "①【思路】CPⁿ=U(n+1)/(U(n)×U(1)) 是齐性空间，用 Fubini-Study 度量（Kähler 度量）。【计算】FS 度量由 U(n+1) 不变性唯一确定（差尺度）。②【思路】其截面曲率取值在 [1,4]（取合适尺度），是正定 Kähler-Einstein。【计算】Ric=2(n+1)g（Einstein 常数）。③【结论】CPⁿ 是正曲率 Kähler 流形的样板，其几何比球面更丰富（截面曲率非恒定但 pinched）。"
  },
  "r17": {
    0: "①【思路】欧氏空间上的标准（平坦）联络是平移的无穷小生成元，协变导数就是方向导数。【计算】∇_X Y=Σ X(Y^i)∂_i（分量）。②【思路】其 Christoffel 符号全为零，故平行移动就是普通平移，无和乐。【计算】Γ^k_ij=0，R=0。③【结论】这是最简单的仿射联络，也是所有曲率的零基准。",
    1: "①【思路】R³ 中曲面的诱导联络由欧氏联络“投影”得到：对切向量场 X,Y，先沿欧氏方向求导，再取切向分量。【计算】∇^诱导_X Y = tan(∇^欧_X Y)。②【思路】用法向量 N 表示，即 ∇^诱导_X Y=∇^欧_X Y − ⟨∇^欧_X Y, N⟩N（减去法向分量）。【计算】这就是 Gauss 方程中的“第二基本形式项”。③【结论】曲面诱导联络保持度量，是无挠的 Levi-Civita 联络，是黎曼子流形几何的基础。",
    2: "①【思路】李群 G 上的左不变联络由单位元切空间上的双线性映射 α:T_eG×T_eG→T_eG 定义并左平移延拓。【计算】∇_X Y 对左不变向量场由 α(X_e,Y_e) 左平移给出。②【思路】Cartan 无挠联络取 α(X,Y)=(1/2)[X,Y]，对应 ±-联络族 α_±(X,Y)=±(1/2)[X,Y]。【计算】左不变联络的一般形式 ∇_X Y=(1/2)[X,Y]+U(X,Y)。③【结论】李群上的联络族包含 Cartan 联络、平坦左不变联络等，是研究齐性几何的工具。"
  },
  "r18": {
    0: "①【思路】Levi-Civita 联络是唯一无挠、与度量相容的联络，其 Christoffel 符号由度量决定。【计算】Γ^k_ij=(1/2)g^{kl}(∂_i g_jl+∂_j g_il−∂_l g_ij)。②【思路】欧氏空间 g_ij=δ_ij 为常数，故 Γ=0。【计算】∂_k g_ij=0 ⟹ Γ^k_ij=0。③【结论】欧氏 Levi-Civita 联络就是平凡联络，∇∂_i ∂_j=0。",
    1: "①【思路】球面 S² 度量 ds²=R²(dθ²+sin²θ dφ²)（用余纬 θ），由公式算 Christoffel 符号。【计算】g_θθ=R², g_φφ=R² sin²θ, g^{θθ}=R^{-2}, g^{φφ}=R^{-2} sin^{-2}θ。②【思路】唯一非零导数是 ∂_θ g_φφ=2R² sin θ cos θ，代入公式算非零 Γ。【计算】Γ^θ_φφ=−sin θ cos θ，Γ^φ_θφ=Γ^φ_φθ=cot θ，其余为 0。③【结论】这些 Christoffel 符号给出球面测地线方程与曲率张量，是显式计算的起点。",
    2: "①【思路】Poincaré 上半平面度量 ds²=(dx²+dy²)/y²，g=h^2 δ_ij（h=1/y）。【计算】g_ij=y^{-2}δ_ij，g^{ij}=y²δ^{ij}。②【思路】只有 ∂_y g 非零，∂_y g_xx=∂_y g_yy=−2/y³，代入公式。【计算】Γ^x_xy=Γ^x_yx=−1/y，Γ^y_xx=1/y，Γ^y_yy=−1/y（其余 0）。③【结论】由此可算出截面曲率 K=−1，验证上半平面模型是双曲空间。"
  },
  "r19": {
    0: "①【思路】球面上沿大圆平行移动：切向量沿测地线平移时保持与测地线的夹角不变（Levi-Civita 无挠相容）。【计算】沿大圆平移切向量，其切向分量不变。②【思路】绕一个球面三角形（三边为大圆弧）平移一周，向量方向改变一个角 = 三角形内角和 −π（=面积/r²，即 Gauss-Bonnet）。【计算】三角形内角和=π+Area/R²，故转角=Area/R²。③【结论】平行移动的和乐正是曲率积分，是球面 K>0 的直观体现。",
    1: "①【思路】Foucault 摆是地球（近似球面）上平行移动的物理实现：摆的摆动平面沿地球自转所定义的“平行移动”缓慢旋转。【计算】摆平面旋转角速度 = Ω sin φ（Ω 为地球自转角速度，φ 为纬度）。②【思路】这是球面平行移动和乐的结果：绕纬度圈平移摆动平面积累了转角。【计算】北极 φ=90°，一天转 360°（转一整圈）。③【结论】Foucault 摆实验直接证实地球在自转，是曲率（球面）与和乐的经典物理验证。",
    2: "①【思路】Berry 相位：量子系统沿参数空间闭曲线绝热演化，波函数获得几何相位，正是“联络的和乐”。【计算】Berry 联络 A_n=i⟨n|∇|n⟩，相位 γ=∮ A_n·dR。②【思路】对二能级系统，参数空间是球面（Bloch 球），Berry 相位等于闭曲线围成的立体角的一半（对应球面曲率通量）。【计算】γ=(1/2)Ω（Ω 为立体角）。③【结论】Berry 相位是平行移动/和乐在量子力学中的化身，把黎曼几何与物理深刻联系。"
  },
  "r20": {
    0: "①【思路】函数的协变导数就是普通方向导数：∇_X f=X f=X^i ∂_i f（函数没有“指标”可平移）。【计算】∇_X f=X^i ∂_i f。②【思路】对 (0,1) 张量（1-形式）ω，协变导数含 Christoffel 修正：∇_i ω_j=∂_i ω_j−Γ^k_ij ω_k。【计算】∇_i ω_j=∂_i ω_j−Γ^k_ij ω_k。③【思路】对 (1,1) 张量加两项修正（上指标 +Γ、下指标 −Γ）。【计算】∇_i T^j_k=∂_i T^j_k+Γ^j_il T^l_k−Γ^l_ik T^j_l。④【结论】协变导数按张量阶数加相应 Christoffel 项，保证与度量相容并与坐标无关。",
    1: "①【思路】度量的协变导数为零是 Levi-Civita 联络的定义性质（度量相容）。【计算】∇_k g_ij=0。②【思路】用分量验证：∇_k g_ij=∂_k g_ij−Γ^l_ki g_lj−Γ^l_kj g_il，代入 Γ 公式恰为零。【计算】∂_k g_ij=Γ^l_ki g_lj+Γ^l_kj g_il（由 Γ 的对称性与相容性）。③【结论】∇g=0⟺测地线保长度：平行移动保持内积，故度量沿任何平移不变。",
    2: "①【思路】Killing 向量场 X 是“无穷小等距”，满足李导数消失 L_X g=0，等价于 ∇_i X_j+∇_j X_i=0。【计算】L_X g_ij=∇_i X_j+∇_j X_i=0。②【思路】欧氏空间的 Killing 场：把 X 写成分量，解 Killing 方程。【计算】X=x 方向平移、旋转场 −y∂_x+x∂_y 等满足 ∇_i X_j+∇_j X_i=0。③【结论】Killing 场生成等距群，与守恒量（Noether）一一对应，是研究对称性核心。"
  },
  "r21": {
    0: "①【思路】Levi-Civita 联络由“无挠 + 度量相容”两条公理唯一确定，属于一般联络的特例。【计算】T(X,Y)=∇_X Y−∇_Y X−[X,Y]=0，且 ∇g=0。②【思路】有挠率的联络则保留挠率张量 T 及其坐标分量 T^k_ij=Γ^k_ij−Γ^k_ji。【计算】T^k_ij=Γ^k_ij−Γ^k_ji≠0。③【结论】Levi-Civita 联络是挠率为零的选择，是最“自然”的联络，故黎曼几何默认使用它。",
    1: "①【思路】Cartan 联络是李群上左不变的“中点联络”，定义 ∇_X Y=(1/2)[X,Y]（对左不变 X,Y）。【计算】对左不变向量场 ∇_X Y=(1/2)[X,Y]。②【思路】验证无挠：T(X,Y)=∇_X Y−∇_Y X−[X,Y]=(1/2)[X,Y]−(1/2)[Y,X]−[X,Y]=0。【计算】T=0。③【思路】其曲率 R(X,Y)Z=−(1/4)[[X,Y],Z]，一般非零（非平坦）。【结论】Cartan 联络无挠但一般不保度量，是李群几何的标准联络。",
    2: "①【思路】构造有挠联络：给定任意度量 g 与挠率张量 T，存在唯一保持该挠率的度量联络。【计算】Γ^k_ij=Γ^{LC,k}_ij+(1/2)(T^k_ij−T_i{}^k_j−T_j{}^k_i)。②【思路】在黎曼几何中也可人为指定扭（twisting）得到有挠联络，如 teleparallel 引力理论。【结论】挠率是联络的独立自由度，虽不在标准黎曼几何中出现，但在引力的 teleparallel 形式化中扮演关键角色。"
  },
  "r22": {
    0: "①【思路】平坦流形的和乐群是平凡的（或离散），因为沿任何闭路平行移动不变。【计算】R=0 ⟹ 平行移动仅依赖路径的同伦类，单连通平坦空间和乐平凡。②【思路】非单连通平坦流形（如平坦环面、Klein 瓶）的和乐可由整系数平移表示。【计算】Tⁿ 的和乐平凡，但某些平坦流形（Bieberbach）和乐 = 有限群。③【结论】和乐群平凡（或有限）刻画平坦流形。",
    1: "①【思路】Kähler 流形有复结构和黎曼度量相容，和乐群含于 U(n)。【计算】复结构的相容性 ∇J=0 ⟹ 平行移动保持 J ⟹ Hol⊂U(n)。②【思路】Ricci 平坦 Kähler 流形（Calabi-Yau）进一步有 Hol⊂SU(n)。【计算】第一陈类 c₁=0 ⟺ Hol⊂SU(n)。③【结论】和乐群把几何结构（复、Kähler、Calabi-Yau）编码为群论条件。",
    2: "①【思路】Calabi-Yau 流形是 Ricci 平坦的紧致 Kähler 流形，和乐群恰为 SU(n)（n≥3 时“严格”）。【计算】Ric=0 ⟺ Hol⊂SU(n)，且一般情形 Hol=SU(n)。②【思路】其存在性由 Calabi 猜想（Yau 证明）：给定 Kähler 类与 c₁=0，存在唯一 Ricci 平坦度量。【计算】解 Monge-Ampère 方程（复化 determinant 方程）。③【结论】Calabi-Yau 流形是弦论紧化的核心对象，和乐 SU(n) 保证低能超对称。"
  },
  "r23": {
    0: "①【思路】测地线方程 d²x^k/dt²+Γ^k_ij x'^i x'^j=0，欧氏空间 Γ=0。【计算】d²x^k/dt²=0。②【思路】积分两次。【计算】一次积分 x'^k=c^k（常数），二次 x^k(t)=p^k+c^k t，即 x(t)=p+tv。③【结论】欧氏测地线是直线，且是严格最短路径（Gauss 引理）。",
    1: "①【思路】球面 S² 度量 ds²=dθ²+sin²θ dφ²（余纬 θ），Christoffel 符号见 r18。【计算】Γ^θ_φφ=−sin θ cos θ，Γ^φ_θφ=cot θ。②【思路】测地线方程展开：θ″−sin θ cos θ φ′²=0，φ″+2 cot θ θ′φ′=0。【计算】对经线 φ=const，φ′=φ″=0，得 θ″=0，即 θ=as+b（大圆）。③【思路】一般大圆满足 Clairaut：r sin α=const（r 到极轴距离，α 切线与纬线夹角）。【结论】球面测地线都是过球心平面截出的大圆。",
    2: "①【思路】旋转面度量 ds²=(1+f′(r)²)dr²+r² dθ²（用半径 r）。测地线的 Clairaut 关系 r cos ψ=const（因 ∂_θ 是 Killing 场）。【计算】由 Noether 定理，∂_θ 对应守恒量 r² θ′。②【思路】代入弧长参数化 |γ′|=1 得 Clairaut 积分 r cos ψ=c。【计算】r cos ψ=c 决定测地线形状。③【结论】旋转面上测地线由单一守恒量刻画，用于研究椭球面等测地线。"
  },
  "r24": {
    0: "①【思路】指数映射 exp_p: T_pM→M 把切向量 v 映到测地线 γ_v(1)。欧氏空间 γ_v(t)=p+tv。【计算】exp_p(v)=γ_v(1)=p+v。②【思路】故 exp_p 是线性等距（平移），微分 d(exp_p)_0=id。【计算】d(exp_p)_0(v)=v。③【结论】欧氏指数映射平凡，是基点处的“线性化”。",
    1: "①【思路】S² 上从 p 出发单位速度 v 的测地线 γ_v(t)=cos t·p+sin t·v（大圆）。【计算】令 |v|=t 时，exp_p(v)=cos(|v|)p+sin(|v|)(v/|v|)。②【思路】当 |v|=π 时 cos π=−1, sin π=0，故所有方向的 v 都映到对径点 −p。【计算】exp_p(v)=−p（|v|=π）。③【思路】故 exp_p 在半径 π 处不再单射，切空间圆盘半径 π 处整体塌缩为一点。【结论】这对应共轭点（对径点），Gauss 引理保证 |v|<π 内 exp_p 是微分同胚。",
    2: "①【思路】李群 G 的指数映射 exp: 𝔤→G 与黎曼指数映射（双不变度量）一致：exp(X)=γ_X(1)，γ 是过 e 的单参数子群。【计算】exp(tX)=单参数子群。②【思路】对矩阵群 exp(A)=Σ Aⁿ/n!。【计算】例如 SO(3) 中 exp(θ n̂×)=旋转矩阵（Rodrigues 公式）。③【结论】李群指数映射给出测地线，且是李群坐标与黎曼几何的统一。"
  },
  "r25": {
    0: "①【思路】完备黎曼流形指每条测地线可延拓到全体实数（测地完备），由 Hopf-Rinow 等价于度量空间完备。【计算】M 完备 ⟺ 有界闭集紧致（度量完备）⟺ 测地完备。②【思路】完备时任意两点可由最短测地线连接（距离实现）。【计算】d(p,q)=d 时存在测地线 γ 使 L(γ)=d。③【结论】紧致流形必完备，Rⁿ、Sⁿ、Hⁿ 都完备。",
    1: "①【思路】不完备流形的典型：Rⁿ∖{0} 去掉原点，某些测地线在有限时间“冲出”边界无法延拓。【计算】R²∖{0} 中沿直线以匀速趋向原点，测地线定义域有限。②【思路】度量空间也不完备（Cauchy 序列无极限）。【计算】序列 (1/n,0) 是 Cauchy 列但极限 0 不在流形中。③【结论】不完备性来自“挖洞”，Hopf-Rinow 失效，指数映射不再全局满射。",
    2: "①【思路】紧致流形自动完备：度量空间紧致 ⟹ 完备 ⟹ Hopf-Rinow 给出测地完备与距离实现。【计算】紧致 ⟹ 任意 Cauchy 列有收敛子列 ⟹ 完备。②【思路】故紧致流形上任意两点都有最短测地线相连。【结论】紧致性是保证完备的充分条件，是全局几何的有利情形。"
  },
  "r26": {
    0: "①【思路】S² 上 p 的对径点 −p 是唯一的割点，割迹 Cut(p)={−p}。【计算】沿任何方向 v 的测地线 γ_v 在 t=π 处到达 −p 后不再最短。②【思路】S²∖Cut(p)=S²∖{−p} 通过 exp_p 微分同胚于开圆盘（半径 π）。【计算】exp_p 在 B(0,π) 上是微分同胚。③【结论】S² 的割迹是单点，是割迹结构的最简单情形。",
    1: "①【思路】平坦环面 T²=R²/Z²，从点 p 出发的割迹是“中点格点”的并（测地线从两个方向到达同一点）。【计算】Cut(p) 对应 |v|=各方向最短到达“骨架”处的点。②【思路】T² 的割迹把环面切成一个基本域（矩形），exp_p 在内部是微分同胚。【结论】割迹是 8 字形骨架，展示平坦但紧致的割迹结构。",
    2: "①【思路】RP²=S²/{±1}，从 [p] 出发的割迹是“赤道”RP¹（对径点已粘合）。【计算】沿大圆走 π/2 到赤道，再远即不再唯一最短。②【思路】RP² 割迹使 exp 在半径 π/2 圆盘上微分同胚，边界赤道整体粘合。【结论】RP² 割迹是 RP¹，直径 π/2，是常正曲率空间中割迹的又一例子。"
  },
  "r27": {
    0: "①【思路】第一变分公式 δ∫|γ′|dt 消失给出测地线条件。对变分 γ_s（固定端点），能量 E(s)=∫⟨γ_s′,γ_s′⟩dt。【计算】E′(0)=−∫⟨V, γ′̇⟩dt（V 为变分场），故 E′(0)=0 ⟺ γ″=0（测地线）。②【思路】最小化能量的曲线必是测地线。【计算】由变分原理，能量泛函临界点是测地线。③【结论】测地线是“长度/能量”的临界点，是变分法的直接应用。",
    1: "①【思路】闭测地线是周期测地线 γ(t+L)=γ(t)，对应自由环路空间中能量泛函的临界点。【计算】闭测地线 ⟺ 能量在自由环路上的临界点。②【思路】紧致流形上存在闭测地线（Birkhoff、Lusternik-Schnirelmann 用变分/Morse 理论证明）。【计算】至少存在一条闭测地线（smooth 情形）。③【结论】闭测地线是 Morse 理论在自由环空间上的经典应用，如球面上的大圆。",
    2: "①【思路】Morse 理论把能量泛函的临界点与流形的拓扑联系起来：临界点的指标决定拓扑变化。【计算】能量泛函 Hesse 二次型（第二变分）的负特征值个数 = Morse 指标。②【思路】球面 Sⁿ 上 p,q 间测地线的 Morse 指标 = 经过的共轭点数（含重数）。【计算】index(大圆弧)=Σ 内部共轭点重数。③【结论】Morse 指标定理连接测地线变分与流形拓扑，是 Bott、Morse 的深刻结果。"
  },
  "r28": {
    0: L`<h4>目标</h4>
二维黎曼流形上，曲率张量的分量看似有 $2^4=16$ 个，但对称性把独立分量压到<strong>只有一个</strong>。我们要找出它与 Gauss 曲率 $K$ 的关系。

<h4>第一步：数独立分量</h4>
曲率张量的对称性（反对称性 $R_{ijkl}=-R_{jikl}=-R_{ijlk}$ 与对偶对称 $R_{ijkl}=R_{klij}$）在二维时把所有分量都约化到一个：$R_{1212}$。其余分量要么为零、要么是 $\pm R_{1212}$。

<h4>第二步：与 Gauss 曲率挂钩</h4>
截面曲率定义在唯一的二维切平面（整个切空间）上，恰好就是 Gauss 曲率：

<div class="eq">$$K=\frac{R_{1212}}{g_{11}g_{22}-g_{12}^{2}}=\frac{R_{1212}}{\det g}$$</div>

<div class="keybox">$$\boxed{R_{1212}=K\det g}$$</div>

<h4>结论</h4>
二维时曲率张量完全退化为标量 $K$——这就是为什么二维曲面的弯曲只需一个函数即可描述，也是 Gauss 曲率是内蕴量（仅由度量决定）的体现。

<div class="memobox"><strong>关键词：</strong>二维 ⟹ 曲率张量只有一个独立分量 ⟹ 它正是 Gauss 曲率 $K$。</div>`,
    1: L`<h4>目标</h4>
常截面曲率 $c$ 的空间里，曲率张量有极其简洁的规范形式，我们要把它写出来。

<h4>推导</h4>
若所有二维截面的曲率都等于同一个数 $c$，则曲率张量作为 (0,4) 型张量必须是唯一的、由 $g$ 和 $c$ 决定的那个张量。这个规范形式是：

<div class="keybox">$$\boxed{R(X,Y)Z=c\big(\langle Y,Z\rangle X-\langle X,Z\rangle Y\big)}$$</div>

<h4>验证</h4>
代入截面曲率公式验证：取正交单位向量 $u,v$，则

<div class="eq">$$\langle R(u,v)v,u\rangle=c\big(\langle v,v\rangle\langle u,u\rangle-\langle u,v\rangle^2\big)=c\cdot(1\cdot 1-0)=c$$</div>

确实每个截面的曲率都是 $c$。

<div class="memobox"><strong>一句话记忆：</strong>常曲率 $c$ ⟹ 曲率张量 = 规范形式 $c(\langle Y,Z\rangle X-\langle X,Z\rangle Y)$，完全由标量 $c$ 决定。</div>`,
    2: L`<h4>目标</h4>
欧氏空间 $\mathbb R^n$ 的曲率张量恒为零，我们要验证它，并说明判断「是否局部等距于欧氏度量」的判据。

<h4>第一步：欧氏空间协变导数可交换</h4>
在 $\mathbb R^n$ 的标准坐标系下，Christoffel 符号全部为零，协变导数退化为普通偏导：

<div class="eq">$$\nabla_i=\partial_i,\qquad \nabla_i\nabla_j=\partial_i\partial_j=\partial_j\partial_i$$</div>

所以协变导数<strong>可交换</strong>，交换子为零。

<h4>第二步：曲率张量为零</h4>

<div class="eq">$$R(X,Y)Z=\nabla_X\nabla_Y Z-\nabla_Y\nabla_X Z-\nabla_{[X,Y]}Z=0$$</div>

<div class="keybox">$$\boxed{\text{平坦空间 }\iff R\equiv 0}$$</div>

<h4>结论</h4>
反过来，若一个度量满足 $R\equiv 0$，则它局部等距于欧氏度量（曲率张量是「偏离欧氏」的唯一障碍）。这就是判断度量是否平坦的根本判据。

<div class="memobox"><strong>关键词：</strong>协变导数可交换 ⟺ 曲率为零 ⟺ 局部平坦。</div>`
  },
  "r29": {
    0: L`<h4>目标</h4>
模型空间 $S^n$、$\mathbb R^n$、$H^n$ 的截面曲率分别为 $1/R^2$、$0$、$-1$，我们要说明它们「所有截面方向曲率相同」的含义。

<h4>计算</h4>
这三个模型空间的共同点是曲率张量都是规范形式：

<div class="eq">$$R(X,Y)Z=c\big(\langle Y,Z\rangle X-\langle X,Z\rangle Y\big)$$</div>

其中 $c$ 分别取 $1/R^2,\ 0,\ -1$。代入截面曲率公式，对<strong>任意</strong>二维平面 $\sigma$：

<div class="eq">$$K(\sigma)=\frac{c(|u|^2|v|^2-\langle u,v\rangle^2)}{|u|^2|v|^2-\langle u,v\rangle^2}=c$$</div>

<div class="keybox">$$\boxed{K_{S^n}=\frac{1}{R^2},\quad K_{\mathbb R^n}=0,\quad K_{H^n}=-1}$$</div>

<h4>几何含义</h4>
这三个空间是「常曲率空间」的三种代表：正、零、负。它们分别是黎曼几何里的三个「标准尺」，其它流形的曲率都是和它们比较得来的。

<div class="memobox"><strong>关键词：</strong>正 / 零 / 负曲率的三个模型：球面 / 欧氏 / 双曲。</div>`,
    1: L`<h4>目标</h4>
复射影空间 $\mathbb{CP}^n$ 配 Fubini–Study 度量，截面曲率不是常数，而是落在区间 $[1/4,\,1]$ 内，取决于二维平面相对复结构的位置。

<h4>第一步：Fubini–Study 度量的截面曲率</h4>
对 $\mathbb{CP}^n$，截面曲率由平面与复结构 $J$ 的夹角决定：

<div class="eq">$$K(\sigma)=\frac{1+3\cos^2\theta}{4},\qquad \theta=\text{平面 }\sigma\text{ 与 }J\sigma\text{ 的夹角}$$</div>

<h4>第二步：两种极端情形</h4>

<div class="warnbox"><strong>全实平面</strong>（$\sigma$ 垂直于 $J\sigma$，$\cos\theta=0$）：$K=1/4$。<br><strong>全复平面</strong>（$\sigma$ 是复直线，$\cos\theta=1$）：$K=1$。</div>

<div class="keybox">$$\boxed{\tfrac14\le K(\mathbb{CP}^n)\le 1}$$</div>

<h4>几何含义</h4>
$\mathbb{CP}^n$ 是「非负但非零」曲率的经典例子——它不常曲率，但截面曲率被严格控制在 $[1/4,1]$ 之间，这使它成为比较定理的重要测试场。

<div class="memobox"><strong>关键词：</strong>复结构「扭曲」曲率：复方向曲率最大（1），实方向最小（1/4）。</div>`,
    2: L`<h4>目标</h4>
乘积流形 $M\times N$ 的截面曲率取决于截面「横跨」还是「落在」两个因子，我们要分三种情形算。

<h4>第一步：乘积度量的曲率结构</h4>
乘积度量的曲率张量在因子间「解耦」：若 $X,Y$ 分别在 $M$、$N$ 的切空间里，则

<div class="eq">$$R(X,Y)Z=0\quad(\text{跨因子的方向})$$</div>

<h4>第二步：三种截面</h4>

<div class="warnbox">1. <strong>跨因子</strong>（一个方向在 $M$，一个在 $N$）：$K=0$。<br>2. <strong>全在 $M$</strong>：$K=K_M$（原流形 $M$ 的截面曲率）。<br>3. <strong>全在 $N$</strong>：$K=K_N$。</div>

<div class="keybox">$$\boxed{K(\text{跨因子})=0,\quad K(\text{全在 }M)=K_M,\quad K(\text{全在 }N)=K_N}$$</div>

<h4>几何含义</h4>
乘积流形总是含有「零曲率平面」（跨因子方向），所以只要一个因子是弯曲的，乘积流形就不可能常曲率——它是「非负曲率但非正曲率」的构造来源。

<div class="memobox"><strong>关键词：</strong>乘积把两个因子的曲率「并列」起来，跨因子方向总是平坦的。</div>`
  },
  "r30": {
    0: L`<h4>目标</h4>
计算半径 $R$ 的球面 $S^n$ 的 Ricci 曲率与标量曲率，验证它是 Einstein 流形。

<h4>第一步：写出曲率张量</h4>
$S^n(R)$ 是常曲率 $c=1/R^2$ 空间，曲率张量为

<div class="eq">$$R_{ijkl}=\frac{1}{R^2}(g_{ik}g_{jl}-g_{il}g_{jk})$$</div>

<h4>第二步：缩并得 Ricci</h4>
对 $i,l$ 缩并（即 $R_{jk}=g^{il}R_{ijkl}$）：

<div class="eq">$$R_{jk}=g^{il}\frac{1}{R^2}(g_{ik}g_{jl}-g_{il}g_{jk})=\frac{n-1}{R^2}g_{jk}$$</div>

<div class="keybox">$$\boxed{\mathrm{Ric}=\frac{n-1}{R^2}\,g}$$</div>

<h4>第三步：再缩并得标量曲率</h4>

<div class="eq">$$S=g^{jk}R_{jk}=\frac{n-1}{R^2}\,n=\frac{n(n-1)}{R^2}$$</div>

<div class="keybox">$$\boxed{S=\frac{n(n-1)}{R^2}}$$</div>

<h4>结论</h4>
$\mathrm{Ric}=\lambda g$（$\lambda=\frac{n-1}{R^2}$），所以球面是 <strong>Einstein 流形</strong>，且标量曲率恒正。

<div class="memobox"><strong>关键词：</strong>球面 $\mathrm{Ric}=\frac{n-1}{R^2}g$、$S=\frac{n(n-1)}{R^2}$，是 Einstein 流形的标准模型。</div>`,
    1: L`<h4>目标</h4>
Einstein 度量指 $\mathrm{Ric}=\lambda g$（Ricci 与度量成比例）。我们要看一个极端情形：Ricci 平坦但曲率非零的 Einstein 流形。

<h4>第一步：Ricci 平坦 $\neq$ 平坦</h4>
Ricci 曲率是曲率张量的<strong>迹</strong>。迹为零只说明「部分」曲率信息消失，但曲率张量本身（尤其是无迹的 Weyl 部分）可以非零：

<div class="eq">$$\mathrm{Ric}=0\quad\nRightarrow\quad R=0$$</div>

<h4>第二步：Calabi–Yau / K3 曲面</h4>
K3 曲面上的 Calabi–Yau 度量满足 $\mathrm{Ric}=0$（Ricci 平坦），但它是紧致 Ricci 平坦但<strong>非平坦</strong>的 4 维流形，$R\neq 0$。

<div class="keybox">$$\boxed{\mathrm{Ric}=0,\ R\neq 0\quad(\text{Ricci 平坦但不平坦})}$$</div>

<h4>几何含义</h4>
这类流形是 $\lambda=0$ 的 Einstein 流形，在弦论与 Kähler 几何里极其重要。它说明「Einstein」是一类比「平坦」宽松得多的条件。

<div class="memobox"><strong>关键词：</strong>Ricci 平坦（迹为零）≠ 平坦（全张量为零），中间隔着 Weyl 张量。</div>`,
    2: L`<h4>目标</h4>
Schwarzschild 解是真空 Einstein 方程 $\mathrm{Ric}=0$ 的解，我们要说明它 Ricci 为零但曲率张量非零。

<h4>第一步：真空 Einstein 方程</h4>
真空（无物质）时，Einstein 方程化为

<div class="eq">$$\mathrm{Ric}-\frac12 Sg=0\ \Longrightarrow\ \mathrm{Ric}=0$$</div>

所以 Schwarzschild 时空满足 $\mathrm{Ric}=0$。

<h4>第二步：曲率张量非零</h4>
但 Schwarzschild 时空不是平坦的——它的 Weyl 张量非零：

<div class="eq">$$\mathrm{Ric}=0,\quad W\neq 0$$</div>

<div class="keybox">$$\boxed{\text{真空：}\mathrm{Ric}=0,\ \text{但 }W\neq 0}$$</div>

<h4>几何含义</h4>
Weyl 张量描述的是「潮汐力」——真空引力场里，物体不受 Ricci（体积收缩）影响，但仍被 Weyl 张量（形状拉伸压缩）作用。这就是引力波携带的曲率信息。

<div class="memobox"><strong>关键词：</strong>真空 ⟹ $\mathrm{Ric}=0$，但引力（潮汐力）由 Weyl 张量承载。</div>`
  },
  "r31": {
    0: L`<h4>目标</h4>
从第二 Bianchi 恒等式缩并出 $\nabla^j G_{ij}=0$（Einstein 张量无散度），说明它与能量-动量守恒的联系。

<h4>第一步：对第二 Bianchi 缩并</h4>
对 $m$ 与 $l$ 缩并（乘 $g^l{}_m$）：

<div class="eq">$$\nabla_m R^m{}_{ijk}+\nabla_i R^m{}_{jmk}+\nabla_j R^m{}_{mik}=0$$</div>

即

<div class="eq">$$\nabla_m R^m{}_{ijk}+\nabla_i R_{jk}-\nabla_j R_{ik}=0$$</div>

<h4>第二步：再缩并 $g^{ik}$</h4>

<div class="eq">$$\nabla_m R^m{}_j+\nabla_i R^i{}_j-\nabla_j S=0\ \Longrightarrow\ \nabla^i R_{ij}=\frac12\nabla_j S$$</div>

<h4>第三步：得到 Einstein 张量无散度</h4>
定义 Einstein 张量 $G_{ij}=R_{ij}-\frac12 S g_{ij}$，于是

<div class="keybox">$$\boxed{\nabla^j G_{ij}=0}$$</div>

<h4>物理意义</h4>
Einstein 场方程 $G_{ij}=8\pi G\,T_{ij}$，左边无散度 $\nabla^j G_{ij}=0$ 自动给出 $\nabla^j T_{ij}=0$——即<strong>能量-动量守恒</strong>。这就是场方程自洽性的几何保证。

<div class="memobox"><strong>关键词：</strong>第二 Bianchi ⟹ $\nabla^j G_{ij}=0$ ⟹ 场方程 ⟹ 能量守恒。</div>`,
    1: L`<h4>目标</h4>
Einstein 流形（$\mathrm{Ric}=\lambda g$）自动满足缩并 Bianchi 恒等式，且 $n\ge 3$ 时标量曲率 $S$ 为常数。

<h4>第一步：Einstein 条件代入缩并恒等式</h4>
由缩并 Bianchi 恒等式 $\nabla^i R_{ij}=\frac12\nabla_j S$。又 $\mathrm{Ric}=\lambda g$ 给出 $S=\lambda n$（缩并 $n$ 次）。

<h4>第二步：两边比较</h4>
对 $\mathrm{Ric}=\lambda g$ 取散度：$\nabla^i R_{ij}=\nabla_j\lambda$。同时 $\frac12\nabla_j S=\frac{n}{2}\nabla_j\lambda$。二者相等要求：

<div class="eq">$$\nabla_j\lambda=\frac{n}{2}\nabla_j\lambda\ \Longrightarrow\ (1-\tfrac{n}{2})\nabla_j\lambda=0$$</div>

<div class="keybox">$$\boxed{n\ge 3\ \Longrightarrow\ \nabla\lambda=0\ \Longrightarrow\ \lambda,\ S\text{ 为常数}}$$</div>

<h4>结论</h4>
$n\ge 3$ 时，Einstein 流形的比例系数 $\lambda$（从而 $S=n\lambda$）必为常数。这也是 Schur 引理的一个直接推论。

<div class="memobox"><strong>关键词：</strong>Einstein 条件 + Bianchi ⟹ $\lambda$ 常数（$n\ge 3$）。</div>`,
    2: L`<h4>目标</h4>
对比黎曼几何的 Bianchi 恒等式与 Yang–Mills 理论的 Bianchi 恒等式，看到两者结构上的「同源性」。

<h4>第一步：黎曼几何的 Bianchi（外微分形式）</h4>
用曲率 2-形式 $\Omega^i{}_j$，第二 Bianchi 恒等式写作：

<div class="eq">$$d\Omega+\omega\wedge\Omega-\Omega\wedge\omega=0$$</div>

即曲率的<strong>协变外微分</strong>为零：$D\Omega=0$。

<h4>第二步：Yang–Mills 的 Bianchi</h4>
规范场强 $F=dA+A\wedge A$ 自动满足

<div class="keybox">$$\boxed{d_A F=0\quad(\text{Bianchi 恒等式})}$$</div>

<h4>结论：结构同源</h4>
两者本质相同——都是「曲率 $=$ 联络的某种微分，故曲率自动满足一个恒等式」。黎曼几何的 Christoffel 符号对应规范场的联络 $A$，黎曼曲率对应场强 $F$。

<div class="memobox"><strong>关键词：</strong>黎曼 Bianchi $\leftrightarrow$ Yang–Mills Bianchi，都是「曲率自动无源」的微分恒等式。</div>`
  },
  "r32": {
    0: L`<h4>目标</h4>
说明 $S^n$、$H^n$、$\mathbb R^n$ 都是共形平坦的（Weyl 张量为零）。

<h4>第一步：常曲率空间 Weyl 为零</h4>
Weyl 张量是曲率张量去掉 Ricci 部分后的「无迹」剩余。常曲率空间 $R(X,Y)Z=c(\langle Y,Z\rangle X-\langle X,Z\rangle Y)$ 的曲率完全由 $c$（标量曲率）决定，所以 Ricci 部分已经「吃掉」了全部曲率信息：

<div class="eq">$$R_{ijkl}=c(g_{ik}g_{jl}-g_{il}g_{jk})\ \Longrightarrow\ W_{ijkl}=0$$</div>

<div class="keybox">$$\boxed{W(S^n)=W(H^n)=W(\mathbb R^n)=0}$$</div>

<h4>第二步：共形等价</h4>
因此球面、双曲空间都与欧氏空间<strong>共形等价</strong>——它们之间只差一个共形因子，几何「形状」信息全由 $W$ 承载，而这三个空间 $W=0$。

<div class="memobox"><strong>关键词：</strong>常曲率 ⟹ $W=0$ ⟹ 共形平坦。球面 / 双曲 / 欧氏互相共形等价。</div>`,
    1: L`<h4>目标</h4>
Schwarzschild 时空 $\mathrm{Ric}=0$ 但 $W\neq 0$，说明 Weyl 张量承载潮汐力。

<h4>第一步：Ricci 为零但曲率非零</h4>
Schwarzschild 解是真空解，$\mathrm{Ric}=0$。但曲率张量非零，故它的「无迹部分」——Weyl 张量——非零：

<div class="eq">$$\mathrm{Ric}=0,\quad W\neq 0$$</div>

<h4>第二步：Weyl 与潮汐力</h4>
在真空里，测地偏离（潮汐力）由 Weyl 张量决定。物体在引力场中沿不同方向被<strong>拉伸</strong>（径向）和<strong>压缩</strong>（横向），体积不变（因为 Ricci=0 意味着无体积变化）。

<div class="keybox">$$\boxed{\text{潮汐力}=\text{Weyl 张量的作用}}$$</div>

<div class="memobox"><strong>关键词：</strong>真空引力场的「形状扭曲」由 Weyl 张量描述，Ricci 只负责体积变化。</div>`,
    2: L`<h4>目标</h4>
说明二维时 Weyl 张量无定义，所有曲率信息都由 Gauss 曲率承载。

<h4>第一步：Weyl 的定义在低维退化</h4>
Weyl 张量的构造要求「曲率张量 − Ricci 部分 − 标量部分」在 $n\ge 3$ 才有非平凡定义。具体地：

<div class="warnbox">$n=2$：Weyl 张量<strong>无定义</strong>（所有分量恒为零）。$n=3$：Weyl 张量<strong>恒为零</strong>。$n\ge4$：Weyl 张量非平凡。</div>

<h4>第二步：二维曲率全由 Gauss 曲率决定</h4>
二维时曲率张量只有一个独立分量，等于 Gauss 曲率（=标量曲率的一半）：

<div class="eq">$$S=2K\quad(\text{二维})$$</div>

<div class="keybox">$$\boxed{\text{二维：曲率信息}=\text{标量 }K}$$</div>

<h4>结论</h4>
二维没有「纯共形弯曲」可言——共形变换在二维总是把任何度量变平（等温坐标），所以 Weyl 张量这一概念在二维失去意义。

<div class="memobox"><strong>关键词：</strong>Weyl 张量在 $n\ge4$ 才非平凡；二维曲率 = Gauss 曲率一个标量。</div>`
  },
  "r33": {
    0: L`<h4>目标</h4>
用 Ricci 恒等式把曲率张量写成协变导数交换子，作为曲率张量的经典定义。

<h4>推导</h4>
对向量场 $X$，协变导数交换子：

<div class="eq">$$\nabla_i\nabla_j X^k-\nabla_j\nabla_i X^k=R^k{}_{lij}X^l$$</div>

无挠联络下，这等价于曲率张量的坐标自由定义：

<div class="keybox">$$\boxed{R(X,Y)Z=\nabla_X\nabla_Y Z-\nabla_Y\nabla_X Z-\nabla_{[X,Y]}Z}$$</div>

<h4>为什么两种写法等价</h4>
取 $X=\partial_i,\ Y=\partial_j$（坐标向量场，$[X,Y]=0$），第二式的 $\nabla_{[X,Y]}Z$ 项消失，就回到第一式的分量形式。

<div class="memobox"><strong>关键词：</strong>曲率张量 = 协变导数交换子，两种定义（分量 / 坐标自由）等价。</div>`,
    1: L`<h4>目标</h4>
说明函数的 Hessian 是对称的——因为函数没有指标让曲率作用。

<h4>推导</h4>
对函数 $f$，两次协变导数：$\nabla_j\nabla_i f$。用 Ricci 恒等式（作用于 (0,1) 型张量，即 $X_l=\nabla_l f$）：

<div class="eq">$$\nabla_i\nabla_j f-\nabla_j\nabla_i f=R^l{}_{lij}\nabla_l f=0$$</div>

右边为零是因为 $R^l{}_{lij}=0$（曲率张量对第一、三指标缩并为零）。于是：

<div class="keybox">$$\boxed{\nabla_i\nabla_j f=\nabla_j\nabla_i f\quad(\text{Hessian 对称})}$$</div>

<h4>几何含义</h4>
函数没有「向量指标」让曲率去交换，所以 Hessian 自动对称。这与欧氏空间里 $\partial_i\partial_j f=\partial_j\partial_i f$ 一致。

<div class="memobox"><strong>关键词：</strong>函数 Hessian 对称，因为 $R^l{}_{lij}=0$ 使曲率对纯函数不起作用。</div>`,
    2: L`<h4>目标</h4>
推导 Bochner 公式——它是 Ricci 曲率与分析（Laplace 算子）之间的桥梁，是 Bochner 技巧的核心。

<h4>第一步：Bochner 公式</h4>

<div class="eq">$$\frac12\Delta|\nabla f|^2=|\nabla^2 f|^2+\langle\nabla f,\nabla\Delta f\rangle+\mathrm{Ric}(\nabla f,\nabla f)$$</div>

<h4>第二步：各项含义</h4>

<div class="warnbox">$|\nabla^2 f|^2$：Hessian 的模平方（非负）。$\langle\nabla f,\nabla\Delta f\rangle$：梯度与 Laplace 梯度的内积。$\mathrm{Ric}(\nabla f,\nabla f)$：<strong>Ricci 曲率项</strong>，这是唯一与曲率相关的项。</div>

<h4>第三步：为什么重要</h4>
Bochner 公式把 $|\nabla f|^2$ 的 Laplacian 分解为「Hessian 正项 + Ricci 项」。当 $\mathrm{Ric}\ge 0$ 时，这一项非负，可推出调和函数或特征函数的刚性结论（如：正 Ricci 流形上没有非常数调和函数）。

<div class="keybox">$$\boxed{\mathrm{Ric}\ge 0\ \Longrightarrow\ \text{Bochner 技巧适用}}$$</div>

<div class="memobox"><strong>关键词：</strong>Bochner 公式把曲率（Ricci）与 Laplace 算子联系起来，是几何分析的核心工具。</div>`
  },
  "r34": {
    0: L`<h4>目标</h4>
陈述 Bonnet–Myers 定理并指出球面 $S^n(1)$ 是达到上界的刚性例子。

<h4>定理</h4>
若完备黎曼流形满足 $\mathrm{Ric}\ge(n-1)c>0$，则

<div class="keybox">$$\boxed{\mathrm{diam}(M)\le\frac{\pi}{\sqrt c}}$$</div>

<h4>刚性</h4>
$S^n(1)$ 有 $\mathrm{Ric}=(n-1)g$（即 $c=1$），直径 $=\pi$，恰好达到上界 $\pi/\sqrt c=\pi$。

<div class="warnbox">达到上界时（且 $\mathrm{Ric}\ge(n-1)c$ 取等），流形等距于半径 $1/\sqrt c$ 的球面——这是 Bonnet–Myers 的刚性情形。</div>

<div class="memobox"><strong>关键词：</strong>Ricci 正下界 ⟹ 直径上界 $\pi/\sqrt c$，球面是取等号的刚性模型。</div>`,
    1: L`<h4>目标</h4>
Cartan–Hadamard 定理：完备单连通 + 非正截面曲率 ⟹ 微分同胚于 $\mathbb R^n$。

<h4>第一步：非正曲率 ⟹ 无共轭点</h4>
截面曲率 $K\le 0$ 时，沿任何测地线的 Jacobi 场满足 $J''\ge 0$，故非零 Jacobi 场不会回到零（与 $H^n$ 里 $\sinh$ 解同理）：

<div class="eq">$$K\le 0\ \Longrightarrow\ \text{无共轭点}$$</div>

<h4>第二步：指数映射是局部微分同胚</h4>
无共轭点 ⟹ $d\exp_p$ 处处非退化 ⟹ $\exp_p$ 是局部微分同胚。

<h4>第三步：完备 + 单连通 ⟹ 全局</h4>
完备性保证测地线可无限延伸；单连通 + 无共轭点保证 $\exp_p$ 是覆盖映射，故是全局微分同胚：

<div class="keybox">$$\boxed{\exp_p:T_pM\simeq\mathbb R^n\ \xrightarrow{\ \sim\ }\ M}$$</div>

<div class="memobox"><strong>关键词：</strong>非正曲率 + 完备 + 单连通 ⟹ $M\simeq\mathbb R^n$（$H^n$ 是典型例子）。</div>`,
    2: L`<h4>目标</h4>
Gromov 的 Betti 数定理：截面曲率有界 + 直径有界 ⟹ 所有 Betti 数有界。

<h4>定理</h4>
若截面曲率 $|K|\le 1$ 且 $\mathrm{diam}(M)\le D$，则存在常数 $C(n,D)$，使得所有 Betti 数满足：

<div class="keybox">$$\boxed{\sum_i b_i(M)\le C(n,D)}$$</div>

<h4>为什么深刻</h4>
Betti 数是拓扑量，本可任意大（如拼接许多环柄）。Gromov 的定理说：一旦曲率和直径都被「钳住」，拓扑复杂度（Betti 数之和）就被一个只依赖 $n$ 和 $D$ 的常数限制。

<div class="warnbox">这是「曲率控制拓扑」的巅峰结果之一：几何有界 ⟹ 拓扑有界。证明用体积比较与 Gromov 的临界半径覆盖技巧。</div>

<div class="memobox"><strong>关键词：</strong>曲率有界 + 直径有界 ⟹ Betti 数有界——几何钳制拓扑复杂度。</div>`
  },
  "r35": {
    0: L`<h4>目标</h4>
写出 $\mathbb R^3$ 中曲面的第二基本形式的经典表示，并联系主曲率。

<h4>第一步：第二基本形式的坐标表示</h4>
$\mathbb R^3$ 中曲面 $M$ 的第二基本形式写作

<div class="eq">$$\mathrm{II}=L\,du^2+2M\,dudv+N\,dv^2$$</div>

其中 $L=\langle r_{uu},N\rangle,\ M=\langle r_{uv},N\rangle,\ N=\langle r_{vv},N\rangle$，$N$ 是单位法向量。

<h4>第二步：形状算子（Weingarten 映射）</h4>
形状算子 $S(X)=-\nabla_X N$ 满足 $\langle S(X),Y\rangle=\mathrm{II}(X,Y)$。它的特征值就是主曲率 $\kappa_1,\kappa_2$：

<div class="keybox">$$\boxed{S\ \text{的特征值}=\text{主曲率 }\kappa_1,\kappa_2}$$</div>

<h4>第三步：Gauss 曲率与平均曲率</h4>

<div class="eq">$$K=\kappa_1\kappa_2=\frac{LN-M^2}{EG-F^2},\qquad H=\frac{\kappa_1+\kappa_2}{2}$$</div>

<div class="memobox"><strong>关键词：</strong>第二基本形式 $Ldu^2+2Mdudv+Ndv^2$，主曲率 = 形状算子特征值。</div>`,
    1: L`<h4>目标</h4>
余维 1 的超曲面的第二基本形式可写成 $h\cdot g$ 的简化形式，并给出平均曲率。

<h4>第一步：超曲面的第二基本形式</h4>
超曲面（余维数 1）的法空间是一维的，所以第二基本形式（法向值）等价于一个对称 $(0,2)$ 张量 $h$：

<div class="eq">$$\mathrm{II}(X,Y)=h(X,Y)\,N$$</div>

<h4>第二步：平均曲率</h4>
平均曲率是 $h$ 的迹（再除维数）：

<div class="keybox">$$\boxed{H=\frac{1}{n}\mathrm{tr}(h)=\frac{\kappa_1+\cdots+\kappa_n}{n}}$$</div>

<h4>几何含义</h4>
$H=0$ 就是极小超曲面（平均曲率为零），这类曲面是变分问题（面积泛函的临界点）的解。

<div class="memobox"><strong>关键词：</strong>超曲面的第二基本形式 = 对称张量 $h$，平均曲率 $H=\frac1n\mathrm{tr}(h)$。</div>`,
    2: L`<h4>目标</h4>
说明全测地子流形（$\mathrm{II}\equiv 0$）的概念，并举球面中赤道 vs 纬线的例子。

<h4>第一步：全测地的定义</h4>
若第二基本形式恒为零，则子流形是<strong>全测地</strong>的：

<div class="eq">$$\mathrm{II}\equiv 0\ \Longrightarrow\ \nabla^N_X Y=\nabla^M_X Y$$</div>

此时 $M$ 的测地线也是 $N$ 的测地线——沿 $M$ 走「最直」的线，在整个外围空间里也是最直的。

<h4>第二步：球面中的例子</h4>

<div class="warnbox"><strong>赤道 $S^{n-1}\subset S^n$</strong>：全测地（大圆是球面测地线）。<br><strong>一般纬线</strong>：不是全测地，因为沿纬线走会「向外弯」，$\mathrm{II}\neq 0$。</div>

<div class="keybox">$$\boxed{\text{全测地 }\iff \mathrm{II}\equiv 0\iff\text{ 子流形测地线}=外围测地线}$$</div>

<div class="memobox"><strong>关键词：</strong>全测地 = 第二基本形式为零 = 大球面（赤道）是，纬线不是。</div>`
  },
  "r36": {
    0: L`<h4>目标</h4>
推导 $\mathbb R^3$ 中曲面的 Gauss 曲率公式，说明「绝妙定理」。

<h4>第一步：Gauss 方程用于 $\mathbb R^3$ 中曲面</h4>
外围 $\mathbb R^3$ 平坦（$R^N=0$），Gauss 方程给出

<div class="eq">$$R^M(X,Y,Z,W)=\mathrm{II}(X,W)\mathrm{II}(Y,Z)-\mathrm{II}(X,Z)\mathrm{II}(Y,W)$$</div>

<h4>第二步：二维时化为行列式</h4>
二维曲率张量只有一个分量，代入得

<div class="keybox">$$\boxed{K=\frac{LN-M^2}{EG-F^2}}$$</div>

<h4>第三步：绝妙定理</h4>
左边 $K$ 是内蕴量（只依赖度量 $E,F,G$），右边看似依赖 $L,M,N$（外蕴的第二基本形式），但等式说右边结果只由 $E,F,G$ 决定。Gauss 称此为「绝妙定理」——$K$ 是内蕴的。

<div class="memobox"><strong>关键词：</strong>$K=\frac{LN-M^2}{EG-F^2}$ 只依赖第一基本形式 ⟹ 绝妙定理。</div>`,
    1: L`<h4>目标</h4>
写出常曲率空间 $c$ 中子流形的 Gauss 方程。

<h4>第一步：外围曲率的贡献</h4>
若外围是常曲率 $c$ 空间，则 $R^N(X,Y)Z=c(\langle Y,Z\rangle X-\langle X,Z\rangle Y)$。代入 Gauss 方程：

<div class="eq">$$R^M(X,Y,Z,W)=c(\langle Y,Z\rangle\langle X,W\rangle-\langle X,Z\rangle\langle Y,W\rangle)+\langle\mathrm{II}(X,W),\mathrm{II}(Y,Z)\rangle-\langle\mathrm{II}(X,Z),\mathrm{II}(Y,W)\rangle$$</div>

<h4>第二步：二维情形的标量形式</h4>
对二维曲面：

<div class="keybox">$$\boxed{K^M=c+\frac{\det(\mathrm{II})}{\det(\mathrm I)}}$$</div>

<h4>几何含义</h4>
外围曲率 $c$ 是「基底」，第二基本形式的行列式是「外蕴弯曲的附加项」。球面 $c>0$ 里的曲面，即使 $\mathrm{II}$ 退化也有正的内蕴曲率。

<div class="memobox"><strong>关键词：</strong>常曲率 $c$ 外围 ⟹ $K^M=c+\det(\mathrm{II})/\det(\mathrm I)$。</div>`,
    2: L`<h4>目标</h4>
说明 $\mathbb R^3$ 中 Gauss 曲率为零的曲面是可展曲面。

<h4>第一步：平坦曲面 ⟹ 第二基本形式退化</h4>
$\mathbb R^3$ 中曲面 $K=0$ 代入 $K=\frac{LN-M^2}{EG-F^2}$，得

<div class="eq">$$K=0\ \Longrightarrow\ LN-M^2=0\ \Longrightarrow\ \det(\mathrm{II})=0$$</div>

<div class="keybox">$$\boxed{\mathbb R^3\text{ 中 }K=0\iff\det(\mathrm{II})=0}$$</div>

<h4>第二步：可展曲面</h4>
$\det(\mathrm{II})=0$ 意味着两个主曲率至少一个为零，曲面沿某个方向「不弯」。这类曲面叫<strong>可展曲面</strong>——可以摊平到平面而不拉伸（如圆柱面、锥面）。

<div class="memobox"><strong>关键词：</strong>平坦曲面（$K=0$）⟹ $\det(\mathrm{II})=0$ ⟹ 可展曲面。</div>`
  },
  "r37": {
    0: L`<h4>目标</h4>
写出 $\mathbb R^3$ 中曲面 Codazzi 方程的 Christoffel 符号形式。

<h4>第一步：分量形式</h4>
Codazzi 方程 $\nabla_i h_{jk}=\nabla_j h_{ik}$ 展开（协变导数用 Christoffel 符号表示）：

<div class="eq">$$\partial_1 h_{22}-\partial_2 h_{12}=h_{1j}\Gamma^j_{22}-h_{2j}\Gamma^j_{12}$$</div>

<h4>第二步：用 $L,M,N$ 写出</h4>
记 $h_{11}=L,\ h_{12}=M,\ h_{22}=N$，则 Codazzi 方程化为

<div class="keybox">$$\boxed{L_v-M_u=L\Gamma^1_{12}+M(\Gamma^2_{12}-\Gamma^1_{11})-N\Gamma^2_{11}}$$</div>

（及关于 $M_v-N_u$ 的对称式。）

<h4>几何含义</h4>
Codazzi 方程是 $L,M,N$ 必须满足的微分关系——它们是子流形可嵌入的<strong>可积性条件</strong>之一。

<div class="memobox"><strong>关键词：</strong>Codazzi 方程用 Christoffel 符号给出 $L,M,N$ 的可积性约束。</div>`,
    1: L`<h4>目标</h4>
说明常平均曲率（CMC）曲面中 Gauss–Codazzi 方程构成可积系统。

<h4>第一步：CMC 条件</h4>
常平均曲率曲面 $H=\mathrm{const}$（肥皂膜是物理实现）。

<h4>第二步：Gauss + Codazzi = 可积系统</h4>
Gauss 方程给出 $K$ 与 $\mathrm{II}$ 的关系，Codazzi 方程给出 $\mathrm{II}$ 的协变导数对称性。二者合起来是 $h_{ij}$ 的<strong>非线性偏微分方程组</strong>：

<div class="eq">$$K=\frac{LN-M^2}{EG-F^2}\ (\text{Gauss}),\qquad \nabla_i h_{jk}=\nabla_j h_{ik}\ (\text{Codazzi})$$</div>

<div class="keybox">$$\boxed{\text{Gauss--Codazzi 方程组 }=\text{ CMC 曲面的可积系统}}$$</div>

<h4>意义</h4>
CMC 曲面理论（如 Delaunay 曲面、泡泡）本质就是研究这个可积系统的解。

<div class="memobox"><strong>关键词：</strong>CMC 曲面 = Gauss–Codazzi 可积系统的解。</div>`,
    2: L`<h4>目标</h4>
说明 Gauss–Codazzi 方程是等距嵌入的局部可积性条件，联系 Nash 嵌入定理。

<h4>第一步：基本定理</h4>
子流形几何的基本定理：给定第一、第二基本形式满足 Gauss–Codazzi 方程，则存在（局部唯一的）等距嵌入。

<div class="eq">$$\text{Gauss + Codazzi 满足}\ \Longrightarrow\ \text{局部可嵌入}$$</div>

<h4>第二步：Nash 嵌入定理</h4>
Nash 定理断言任何黎曼流形都能等距嵌入到足够高维的欧氏空间：

<div class="keybox">$$\boxed{\text{任何 }(M^n,g)\ \text{可等距嵌入 }\mathbb R^N\ (N\gg n)}$$</div>

<h4>联系</h4>
Gauss–Codazzi 方程就是这个嵌入的<strong>局部障碍</strong>——它们必须满足才能局部等距嵌入；Nash 定理说全局上总能找到足够大的 $N$ 使一切光滑嵌入。

<div class="memobox"><strong>关键词：</strong>Gauss–Codazzi = 局部可积条件；Nash = 全局嵌入总存在（高维）。</div>`
  },
  "r38": {
    0: L`<h4>目标</h4>
介绍悬链面（catenoid）——唯一的极小旋转曲面（除平面外）。

<h4>第一步：旋转极小曲面的方程</h4>
旋转曲面 $y=y(x)$ 绕轴旋转，极小条件 $H=0$ 化为 ODE，解为悬链线：

<div class="eq">$$y=a\cosh\frac{x}{a}$$</div>

<h4>第二步：验证极小</h4>
悬链面两个主曲率等值反号：

<div class="keybox">$$\boxed{\kappa_1=-\kappa_2\ \Longrightarrow\ H=\frac{\kappa_1+\kappa_2}{2}=0}$$</div>

<h4>第三步：Gauss 曲率</h4>
$K=\kappa_1\kappa_2=-\kappa_1^2<0$，悬链面处处负曲率。它与螺旋面是「共轭极小曲面对」。

<div class="memobox"><strong>关键词：</strong>悬链面 = 悬链线旋转 = 唯一极小旋转面，$H=0$、$K<0$。</div>`,
    1: L`<h4>目标</h4>
介绍螺旋面（helicoid）——直纹极小曲面，与悬链面共形等价。

<h4>第一步：螺旋面的构造</h4>
螺旋面由一条直线沿轴旋转并同时上升生成，是<strong>直纹面</strong>（由直线族织成）。

<h4>第二步：极小性</h4>
螺旋面满足 $H=0$，是极小曲面。它与悬链面通过 Weierstrass 表示联系，是<strong>共形等价</strong>的一对：

<div class="keybox">$$\boxed{\text{螺旋面}\ \xleftrightarrow{\text{共形}}\ \text{悬链面}}$$</div>

<h4>应用</h4>
螺旋面出现在 DNA 双螺旋、纳米螺旋结构等自然界里——因为极小曲面是「面积最小、最省材料」的形状。

<div class="memobox"><strong>关键词：</strong>螺旋面 = 直纹极小曲面，与悬链面共形，是自然界的「最省材料」形状。</div>`,
    2: L`<h4>目标</h4>
说明球面是唯一紧致无边 CMC 曲面，并联系等周问题。

<h4>第一步：Alexandrov 定理</h4>
$\mathbb R^3$ 中紧致无边 CMC 曲面 = 球面。球面的平均曲率：

<div class="eq">$$H=\frac{1}{R}$$</div>

<h4>第二步：等周问题</h4>
等周问题：给定面积，求体积最大的曲面。解是球面——因为体积变分的一阶条件正是 $H=\mathrm{const}$（常数平均曲率），而球面是唯一紧致解。

<div class="keybox">$$\boxed{\text{等周问题（定面积最大体积）的解}=\text{球面}}$$</div>

<div class="memobox"><strong>关键词：</strong>球面 = 唯一紧致 CMC 曲面 = 等周问题最优解，$H=1/R$。</div>`
  },
  "r39": {
    0: L`<h4>目标</h4>
说明 $S^3$ 中极小曲面的 Gauss 曲率 $K\le 1$，并提 Lawson 构造。

<h4>第一步：$S^3$ 中曲面的 Gauss 方程</h4>
外围 $S^3$ 曲率 $c=1$，Gauss 方程 $K^M=1+\det(\mathrm{II})/\det(\mathrm I)$。极小曲面 $H=0$ 意味着 $\kappa_1=-\kappa_2$，故 $\det(\mathrm{II})=\kappa_1\kappa_2=-\kappa_1^2\le 0$：

<div class="eq">$$K=1-\frac{\kappa_1^2}{EG-F^2}\le 1$$</div>

<div class="keybox">$$\boxed{S^3\text{ 中极小曲面：}K\le 1}$$</div>

<h4>第二步：Lawson 构造</h4>
Lawson 构造了 $S^3$ 中任意亏格的紧致极小曲面——说明 $S^3$ 中极小曲面极其丰富。

<div class="memobox"><strong>关键词：</strong>$S^3$ 中极小曲面 $K\le 1$，Lawson 构造任意亏格紧致极小曲面。</div>`,
    1: L`<h4>目标</h4>
说明 $S^n$ 中极小子流形满足 $\Delta x=-nx$，这是 Simons 刚性研究的出发点。

<h4>第一步：位置向量与第二基本形式</h4>
$S^n\subset\mathbb R^{n+1}$ 的位置向量 $x$ 即单位法向量。对 $S^n$ 中的极小子流形 $M^k$，平均曲率向量 $H=0$，而 $H=\frac1k\Delta x$（子流形 Laplacian 作用于位置向量 = 平均曲率向量）。

<h4>第二步：极小 ⟹ 特征方程</h4>

<div class="keybox">$$\boxed{\Delta x=-k\,x}$$</div>

（其中 $-k$ 来自 $S^n$ 的曲率。）

<h4>几何含义</h4>
位置向量 $x$ 是 $M$ 上 Laplace 算子的<strong>特征函数</strong>（特征值 $-k$）。这使极小子流形可以用谱理论工具研究，是 Simons 刚性定理的起点。

<div class="memobox"><strong>关键词：</strong>极小 ⟹ $\Delta x=-kx$，位置向量是 Laplace 的特征函数。</div>`,
    2: L`<h4>目标</h4>
陈述球面中子流形的曲率 pinching 定理。

<h4>第一步：pinching 条件</h4>
若 $S^n$ 中子流形的截面曲率满足

<div class="eq">$$K>\frac{n-2}{2n-3}$$</div>

<h4>第二步：结论</h4>
则子流形必为<strong>全测地</strong>的——即 $S^n$ 的大球面 $S^k$。

<div class="keybox">$$\boxed{K>\frac{n-2}{2n-3}\ \Longrightarrow\ \text{全测地（大球面）}}$$</div>

<h4>几何含义</h4>
「曲率被压得很紧（接近 $1$）⟹ 子流形就是最标准的大球面」。这是球面曲率 pinching 的经典结果，说明高曲率钳制住了子流形的形状。

<div class="memobox"><strong>关键词：</strong>截面曲率 pinching $>\frac{n-2}{2n-3}$ ⟹ 全测地大球面。</div>`
  },
  "r40": {
    0: L`<h4>目标</h4>
用球面三角形验证局部 Gauss–Bonnet 定理。

<h4>第一步：球面三角形的面积</h4>
球面上由赤道和两条经线构成的三角形（两条经线夹角 $\pi/2$），三个内角都是 $\pi/2$，内角和 $=\frac{3\pi}{2}$。Girard 定理给出面积：

<div class="eq">$$\mathrm{Area}=R^2(\alpha+\beta+\gamma-\pi)=R^2\cdot\frac{\pi}{2}=\frac{\pi R^2}{2}$$</div>

这恰好是 $1/8$ 球面面积 $4\pi R^2/8$。

<h4>第二步：验证 Gauss–Bonnet</h4>
边界是测地线（赤道、经线），$\kappa_g=0$；三个角点外角各 $\pi-\frac\pi2=\frac\pi2$。Gauss–Bonnet 给出：

<div class="eq">$$\int_T K\,dA=\frac{1}{R^2}\cdot\frac{\pi R^2}{2}=\frac{\pi}{2}=\alpha+\beta+\gamma-\pi$$</div>

<div class="keybox">$$\boxed{\int_T K\,dA=\alpha+\beta+\gamma-\pi=\frac{\pi}{2}}$$</div>

<div class="memobox"><strong>关键词：</strong>球面三角形内角和 $>\pi$，差量 = 曲率积分 = $K\cdot$面积。</div>`,
    1: L`<h4>目标</h4>
说明测地三角形的 Gauss–Bonnet 公式 $\int K\,dA=\sum\alpha_i-\pi$。

<h4>第一步：测地边界 ⟹ 无测地曲率项</h4>
测地三角形边界是测地线，$\kappa_g=0$，角点内角 $\alpha_i$。局部 Gauss–Bonnet 化为：

<div class="eq">$$\int_T K\,dA+\sum_i(\pi-\alpha_i)=2\pi\ \Longrightarrow\ \int_T K\,dA=\sum_i\alpha_i-\pi$$</div>

<div class="keybox">$$\boxed{\int_T K\,dA=\alpha_1+\alpha_2+\alpha_3-\pi}$$</div>

<h4>第二步：平面特例</h4>
平面上 $K=0$，于是 $\alpha_1+\alpha_2+\alpha_3-\pi=0$，即内角和 $=\pi$——正是欧氏几何的三角形内角和定理。

<div class="memobox"><strong>关键词：</strong>测地三角形 $\int K\,dA=\sum\alpha_i-\pi$；平面 $K=0$ 退回内角和 $=\pi$。</div>`,
    2: L`<h4>目标</h4>
球冠（球面上半径 $\theta$ 的球冠）的局部 Gauss–Bonnet 验证。

<h4>第一步：球冠的测地曲率</h4>
球冠边界（纬度 $\theta$ 的圆）的测地曲率：

<div class="eq">$$\kappa_g=\frac{\cot\theta}{R}$$</div>

<h4>第二步：球冠的曲率积分与边界贡献</h4>
球冠面积 $=2\pi R^2(1-\cos\theta)$，故曲率积分 $=\frac{1}{R^2}\cdot 2\pi R^2(1-\cos\theta)=2\pi(1-\cos\theta)$。边界长度 $=2\pi R\sin\theta$，边界测地曲率积分 $=2\pi R\sin\theta\cdot\frac{\cot\theta}{R}=2\pi\cos\theta$。

<h4>第三步：两者之和</h4>

<div class="keybox">$$\boxed{\int K\,dA+\int\kappa_g\,ds=2\pi(1-\cos\theta)+2\pi\cos\theta=2\pi=2\pi\chi(\text{球冠})}$$</div>

<div class="memobox"><strong>关键词：</strong>球冠的曲率积分与边界测地曲率互补，之和恰为 $2\pi$。</div>`
  },
  "r41": {
    0: L`<h4>目标</h4>
验证球面 $S^2$ 的总曲率。

<h4>计算</h4>
球面 $\chi=2$，$K=1/R^2$，面积 $=4\pi R^2$：

<div class="eq">$$\int_{S^2}K\,dA=\frac{1}{R^2}\cdot 4\pi R^2=4\pi=2\pi\cdot 2=2\pi\chi(S^2)$$</div>

<div class="keybox">$$\boxed{\int_{S^2}K\,dA=4\pi\quad(\text{与半径无关})}$$</div>

<h4>关键观察</h4>
无论球面半径多大，总曲率恒为 $4\pi$。曲率 $1/R^2$ 变小，但面积 $4\pi R^2$ 变大，乘积不变——这是 Gauss–Bonnet 的深刻体现：总曲率是拓扑量。

<div class="memobox"><strong>关键词：</strong>球面总曲率恒 $4\pi$，半径任意，拓扑量不随度量变。</div>`,
    1: L`<h4>目标</h4>
验证环面 $T^2$ 的总曲率为零。

<h4>计算</h4>
环面 $\chi=0$。环面外侧正曲率、内侧负曲率：

<div class="eq">$$\int_{T^2}K\,dA=2\pi\chi(T^2)=2\pi\cdot 0=0$$</div>

<div class="keybox">$$\boxed{\int_{T^2}K\,dA=0}$$</div>

<h4>几何含义</h4>
正曲率（外侧）与负曲率（内侧）恰好抵消。虽然环面上处处有弯曲，但「总弯曲」为零——这只有 Gauss–Bonnet 能保证，也解释了为什么环面可以摊平度量（$K\equiv 0$ 的平坦度量存在）。

<div class="memobox"><strong>关键词：</strong>环面 $\chi=0$，正负曲率抵消，总曲率为零。</div>`,
    2: L`<h4>目标</h4>
亏格 2 曲面（双环面）的总曲率。

<h4>计算</h4>
亏格 $g=2$ 曲面 $\chi=2-2g=-2$：

<div class="eq">$$\int_M K\,dA=2\pi\chi(M)=2\pi\cdot(-2)=-4\pi$$</div>

<div class="keybox">$$\boxed{\int_M K\,dA=-4\pi\quad(\text{亏格 }2)}$$</div>

<h4>几何含义</h4>
亏格 $\ge 2$ 的闭曲面<strong>总曲率为负</strong>。这强制了高亏格曲面必然存在负曲率区域（不能处处 $K\ge 0$），是 Gauss–Bonnet 对曲率符号的拓扑约束。

<div class="memobox"><strong>关键词：</strong>亏格 $g$ ⟹ 总曲率 $2\pi(2-2g)$，亏格 $\ge2$ 必为负总曲率。</div>`
  },
  "r42": {
    0: L`<h4>目标</h4>
用 Euler 公式 $V-E+F=2$ 验证五种正多面体的 $\chi=2$。

<h4>计算</h4>
五种柏拉图立体都满足 $\chi=V-E+F=2$：

<div class="eq">$$\text{四面体 }4-6+4=2,\quad \text{立方体 }8-12+6=2,\quad \text{八面体 }6-12+8=2$$</div>

<div class="keybox">$$\boxed{V-E+F=2\quad(\text{五种正多面体})}$$</div>

<h4>几何含义</h4>
正多面体分类（只有五种）正是由 Euler 公式 $V-E+F=2$ 加上边、面的度约束推出来的。$\chi=2$ 是「球面形」曲面的共同特征。

<div class="memobox"><strong>关键词：</strong>Euler 公式 $V-E+F=2$ 限制出五种正多面体，$\chi=2$ 是球面拓扑。</div>`,
    1: L`<h4>目标</h4>
环面剖分的 Euler 示性数。

<h4>计算</h4>
环面可剖分为 $16$ 个矩形：$V=16$，$E=32$，$F=16$：

<div class="eq">$$\chi=V-E+F=16-32+16=0$$</div>

<div class="keybox">$$\boxed{\chi(T^2)=0\quad(\text{与剖分方式无关})}$$</div>

<h4>关键观察</h4>
任何剖分都给出 $\chi=0$——Euler 示性数是<strong>拓扑不变量</strong>，不依赖剖分的粗细。

<div class="memobox"><strong>关键词：</strong>环面 $\chi=0$，Euler 示性数不依赖剖分。</div>`,
    2: L`<h4>目标</h4>
不可定向曲面 Klein 瓶的 Euler 示性数，及 Gauss–Bonnet 的修正。

<h4>计算</h4>
Klein 瓶不可定向，$\chi=0$。对不可定向曲面，$\chi=2-k$（$k$ 为交叉帽数）。

<h4>Gauss–Bonnet 的修正</h4>
Gauss–Bonnet 定理要求<strong>可定向</strong>。对不可定向曲面，需转到它的<strong>定向二重覆盖</strong> $\widetilde M$：

<div class="keybox">$$\boxed{\int_{\widetilde M}K\,dA=2\pi\chi(\widetilde M)=2\cdot 2\pi\chi(M)}$$</div>

（二重覆盖的 Euler 示性数翻倍。）

<div class="memobox"><strong>关键词：</strong>Klein 瓶 $\chi=0$；不可定向曲面需用定向覆盖修正 Gauss–Bonnet。</div>`
  },
  "r43": {
    0: L`<h4>目标</h4>
说明 $n=1$ 时 Chern–Gauss–Bonnet 退化为经典 Gauss–Bonnet。

<h4>计算</h4>
二维（$2n=2$，$n=1$）时，Pfaffian 恰是 Gauss 曲率密度：

<div class="eq">$$\mathrm{Pf}(\Omega)=\frac{1}{2\pi}K\,dA$$</div>

代入 Chern–Gauss–Bonnet：

<div class="keybox">$$\boxed{\int_M\frac{K}{2\pi}\,dA=(2\pi)^1\chi(M)=2\pi\chi(M)\ \Longrightarrow\ \int_M K\,dA=2\pi\chi(M)}$$</div>

<h4>结论</h4>
正是经典的全局 Gauss–Bonnet 定理。所以 Chern 的公式是「经典 → 高维」的自然推广。

<div class="memobox"><strong>关键词：</strong>$n=1$ 时 Pfaffian $=K/2\pi$，Chern–GB 退回经典 GB。</div>`,
    1: L`<h4>目标</h4>
写出四维的 Chern–Gauss–Bonnet 公式，含 Weyl 张量贡献。

<h4>四维公式</h4>
四维（$n=2$）时，Pfaffian 展开为曲率张量的二次组合，可分解为 Weyl 张量、Ricci、标量曲率三部分：

<div class="eq">$$\int_M\frac{1}{32\pi^2}\Big(|W|^2-2|\mathrm{Ric}|^2+\frac{S^2}{3}\Big)dV=\chi(M)$$</div>

<div class="keybox">$$\boxed{\frac{1}{32\pi^2}\int_M\Big(|W|^2-2|\mathrm{Ric}|^2+\frac{S^2}{3}\Big)dV=\chi(M)}$$</div>

<h4>应用：引力瞬子</h4>
引力瞬子的拓扑荷（Euler 数）由此公式确定，Weyl 张量 $|W|^2$ 描述引力波/瞬子的贡献。

<div class="memobox"><strong>关键词：</strong>四维 GB 含 $|W|^2$、$|\mathrm{Ric}|^2$、$S^2$ 三项，确定引力瞬子拓扑荷。</div>`,
    2: L`<h4>目标</h4>
计算 $\mathbb{CP}^2$ 的 Euler 示性数。

<h4>第一步：$\mathbb{CP}^2$ 的拓扑</h4>
$\mathbb{CP}^2$ 的 Betti 数 $b_0=b_2=b_4=1$，故：

<div class="eq">$$\chi(\mathbb{CP}^2)=1+1+1=3$$</div>

<h4>第二步：Chern–Gauss–Bonnet</h4>
配 Fubini–Study 度量，Chern–Gauss–Bonnet 给出曲率形式的 Pfaffian 积分：

<div class="keybox">$$\boxed{\int_{\mathbb{CP}^2}\mathrm{Pf}(\Omega)=(2\pi)^2\chi=(2\pi)^2\cdot 3=12\pi^2}$$</div>

<h4>几何含义</h4>
$\mathbb{CP}^2$ 是四维紧致流形里 $\chi=3$ 的典型例子，其 Fubini–Study 度量的曲率积分被拓扑锁定为 $12\pi^2$。

<div class="memobox"><strong>关键词：</strong>$\chi(\mathbb{CP}^2)=3$，Pfaffian 积分 $=12\pi^2$。</div>`
  },
  "r44": {
    0: L`<h4>已知与目标</h4>
在欧氏空间 \(\mathbb R^n\) 中曲率为零，\(R\equiv 0\)。Jacobi 方程退化为

<div class="eq">$$J''(t)=0$$</div>

我们要解出 Jacobi 场的显式表达式，并看它的几何意义。

<h4>直接积分两次</h4>

<div class="eq">$$J''=0\;\Longrightarrow\;J'(t)=\text{常数}=J'(0)\;\Longrightarrow\;J(t)=J(0)+t\,J'(0)$$</div>

所以平坦空间里的 Jacobi 场是<strong>线性</strong>的：沿测地线匀速“张开”。

<div class="keybox">$$\boxed{J(t)=J(0)+t\,J'(0)\quad\text{线性增长，永不聚焦}}$$</div>

<h4>几何含义</h4>
若 \(J(0)=0\)，则 \(J(t)=tJ'(0)\)，只要 \(J'(0)\neq 0\) 就永不为零，所以<strong>不存在共轭点</strong>——这正是平坦空间“无曲率聚焦”的体现。

<div class="memobox"><strong>关键词：</strong>曲率 \(=0\) ⟹ Jacobi 场线性 ⟹ 无共轭点 ⟹ \(\exp_p\) 是全局微分同胚。</div>`,
    1: L`<h4>已知与目标</h4>
标准球面 \(S^n(1)\) 的曲率张量为 \(R(U,V)V=U-\langle U,V\rangle V\)。沿大圆（测地线）取法向 Jacobi 场，曲率项简化为

<div class="eq">$$R(J,\dot\gamma)\dot\gamma=J\quad(\text{法向分量})$$</div>

于是 Jacobi 方程变成简谐振子方程

<div class="eq">$$J''+J=0$$</div>

<h4>解方程</h4>
特征方程 \(r^2+1=0\)，通解为

<div class="eq">$$J(t)=\cos t\cdot J(0)+\sin t\cdot J'(0)$$</div>

<h4>观察：何时回到零？</h4>
若 \(J(0)=0\)（从同一点出发的 Jacobi 场），则

<div class="eq">$$J(t)=\sin t\cdot J'(0),\qquad J(\pi)=\sin\pi\cdot J'(0)=0$$</div>

所以在 \(t=\pi\) 处，<strong>所有</strong>法向 Jacobi 场同时回到零向量。

<div class="keybox">$$\boxed{\text{对径点 }t=\pi\text{ 是共轭点，Jacobi 场在此聚焦}}$$</div>

<h4>几何意义</h4>
球面从北极出发的所有大圆，都在南极（对径点）重新汇聚。这种“正曲率使测地线聚焦”的现象，正是共轭点与割点的来源。

<div class="memobox"><strong>一句话记忆：</strong>正曲率 = 回复力，测地线像弹簧一样振荡并聚焦（\(\sin/\cos\) 解）。</div>`,
    2: L`<h4>已知与目标</h4>
双曲空间 \(H^n(-1)\) 的曲率张量为 \(R(U,V)V=-(U-\langle U,V\rangle V)\)。沿测地线的法向 Jacobi 方程变成

<div class="eq">$$J''-J=0$$</div>

注意曲率项前面是<strong>负号</strong>，与球面 \(J''+J=0\) 恰好相反。

<h4>解方程</h4>
特征方程 \(r^2-1=0\)，通解为双曲函数

<div class="eq">$$J(t)=\cosh t\cdot J(0)+\sinh t\cdot J'(0)$$</div>

<h4>观察：能否回到零？</h4>
若 \(J(0)=0\)，则 \(J(t)=\sinh t\cdot J'(0)\)。而

<div class="eq">$$\sinh t>0\ (t>0),\qquad \cosh t\ge 1$$</div>

所以非零 Jacobi 场<strong>永远不可能</strong>在 \(t>0\) 处再次归零。

<div class="keybox">$$\boxed{\text{负曲率 }\Longrightarrow\text{ 无共轭点}}$$</div>

<h4>几何意义</h4>
双曲空间中相邻测地线<strong>指数发散</strong>，永不相交。这直接导致 Cartan–Hadamard 定理：负曲率完备单连通流形的指数映射是全局微分同胚。

<div class="memobox"><strong>一句话记忆：</strong>负曲率 = 排斥力，测地线像 \(\sinh/\cosh\) 一样指数发散，永不聚焦。</div>`
  },
  "r45": {
    0: L`<h4>目标</h4>
确定标准球面 \(S^n(1)\) 上，从一点 p 出发的测地线在何处出现共轭点。

<h4>计算</h4>
沿大圆 \(\gamma(t)\)，法向 Jacobi 场满足 \(J''+J=0\)，解为

<div class="eq">$$J(t)=\cos t\cdot J(0)+\sin t\cdot J'(0)$$</div>

取 \(J(0)=0\)，则 \(J(t)=\sin t\cdot J'(0)\)，它在

<div class="eq">$$t=\pi$$</div>

处回到零。所以 p 的第一个共轭点是对径点 \(\gamma(\pi)=-p\)，共轭距离为 \(\pi\)。

<div class="keybox">$$\boxed{\text{球面 }S^n(1)\text{ 的共轭距离 }=\pi}$$</div>

<h4>重数</h4>
满足 \(J(0)=J(\pi)=0\) 的线性无关法向 Jacobi 场有 \(n-1\) 个（法向空间的维数），所以这个共轭点的重数是 \(n-1\)。

<h4>与割点的关系</h4>

<div class="warnbox">在球面上，共轭点与割点<strong>重合</strong>（都在对径点）：从 p 出发的所有大圆在对径点汇聚，且恰好越过它之后不再最短。</div>

<div class="memobox"><strong>关键词：</strong>正曲率聚焦 ⟹ 共轭点在对径点 ⟹ 共轭距离 \(\pi\)，重数 \(n-1\)。</div>`,
    1: L`<h4>目标</h4>
证明欧氏空间 \(\mathbb R^n\) 中<strong>不存在</strong>共轭点。

<h4>计算</h4>
曲率为零，Jacobi 方程为 \(J''=0\)，解为

<div class="eq">$$J(t)=J(0)+t\,J'(0)$$</div>

若 \(J(0)=0\)，则 \(J(t)=tJ'(0)\)。要使 \(J(b)=0\)（\(b>0\)）且 J 非零，必须 \(J'(0)=0\)，此时 J 恒为零，矛盾。

<div class="keybox">$$\boxed{\text{平坦空间无共轭点}}$$</div>

<h4>几何意义</h4>
所有测地线都是直线，永不相交。因此 \(\exp_p:T_p\mathbb R^n\to\mathbb R^n\) 是全局微分同胚——平坦空间里指数映射“完美”。

<div class="memobox"><strong>关键词：</strong>曲率 \(=0\) ⟹ 无聚焦 ⟹ 无共轭点 ⟹ \(\exp_p\) 全局微分同胚。</div>`,
    2: L`<h4>目标</h4>
平坦环面 \(T^2=\mathbb R^2/\mathbb Z^2\) 是一个重要的<strong>反例</strong>：它有割点，却<strong>没有</strong>共轭点。这证明“割点”和“共轭点”是两个不同的概念。

<h4>为什么无共轭点</h4>
环面是平面按 \(\mathbb Z^2\) 平移作商，投影 \(\mathbb R^2\to T^2\) 是局部等距，曲率保持为零：

<div class="eq">$$R\equiv 0$$</div>

于是 Jacobi 方程仍是 \(J''=0\)，Jacobi 场线性，永不在 \(t>0\) 归零——所以<strong>无共轭点</strong>。

<h4>为什么有割点</h4>
在环面上，从一点 p 出发、沿“水平”和“竖直”两个方向的测地线，会各自绕一圈后<strong>同时回到同一点</strong>。于是存在两条等长的不同测地线连接同一对端点——这正是<strong>割点</strong>的定义。

<div class="keybox">$$\boxed{T^2:\ \text{无共轭点，但有割点}}$$</div>

<h4>结论</h4>

<div class="warnbox">“割点”可以纯粹由<strong>拓扑 / 周期性</strong>产生（多条等长测地线相遇），不一定需要曲率聚焦（共轭点）。这是共轭点理论里最重要的反例。</div>

<div class="memobox"><strong>关键词：</strong>共轭点 = 曲率聚焦（Jacobi 场归零）；割点 = 最短性失效（可来自拓扑）。两者在球面重合，在环面分离。</div>`
  },
  "r46": {
    0: L`<h4>目标</h4>
用球面大圆验证第二变分的正定性与共轭点处的退化。

<h4>第一步：指数形式的第二变分</h4>
对测地线 $\gamma$ 的变分场 $V$，指标形式（第二变分的两倍）：

<div class="eq">$$I(V,V)=\int_a^b\Big(\lvert V'\rvert^2-\langle R(V,\dot\gamma)\dot\gamma,V\rangle\Big)dt$$</div>

<h4>第二步：球面大圆，取法向正弦场</h4>
$S^2$ 上取 $V(t)=\sin t\cdot E$（$E$ 平行法向场）。球面曲率 $R(V,\dot\gamma)\dot\gamma=V$，于是

<div class="eq">$$I(V,V)=\int_0^L(\cos^2 t-\sin^2 t)dt=\int_0^L\cos 2t\,dt$$</div>

<h4>第三步：分情况</h4>

<div class="warnbox">$L<\pi$：$I>0$，大圆弧是<strong>极小值</strong>。<br>$L=\pi$：$I=0$，半圆有零特征值（$V$ 是对径点处的 Jacobi 场，即共轭点）。</div>

<div class="keybox">$$\boxed{L<\pi:\ \delta^2E>0;\quad L=\pi:\ \delta^2E=0\ (\text{共轭点})}$$</div>

<div class="memobox"><strong>关键词：</strong>大圆弧 $<\pi$ 极小；$=\pi$ 时零特征值 = 共轭点。</div>`,
    1: L`<h4>目标</h4>
Morse 指标定理：能量泛函在测地线上的 Morse 指标等于共轭点个数（计重数）。

<h4>第一步：Morse 指标的定义</h4>
Morse 指标 = 第二变分 $\delta^2E$ 的<strong>负特征值个数</strong>。而 $\delta^2E(V,V)=\int\langle LV,V\rangle dt$，其中

<div class="eq">$$L=-\nabla_{\dot\gamma}^2-R(\cdot,\dot\gamma)\dot\gamma$$</div>

是 Jacobi 算子（Sturm–Liouville 型二阶算子）。

<h4>第二步：Sturm–Liouville 理论</h4>
Jacobi 算子 $L$ 的特征值关于边界条件单调。随着区间长度增长，每当穿过一个共轭点（对应一个零特征值的 Jacobi 场），就多一个负特征值。

<div class="keybox">$$\boxed{\text{Morse 指标}=\text{共轭点个数（计重数）}}$$</div>

<h4>意义</h4>
这把「能量泛函的临界点退化程度」（分析量）与「共轭点」（几何量）精确对应，是变分理论与 Jacobi 场理论之间的桥梁。

<div class="memobox"><strong>关键词：</strong>Morse 指标 = 负特征值个数 = 共轭点个数（计重数）。</div>`,
    2: L`<h4>目标</h4>
极小曲面的第二变分公式，研究极小曲面稳定性。

<h4>第一步：极小曲面的 Jacobi 算子</h4>
极小曲面的第二变分涉及算子：

<div class="eq">$$\Delta+\lvert\mathrm{II}\rvert^2+\mathrm{Ric}(\nu,\nu)$$</div>

其中 $\nu$ 是法向量，$\mathrm{II}$ 是第二基本形式，$\mathrm{Ric}(\nu,\nu)$ 是外围 Ricci 曲率在法向的值。

<h4>第二步：稳定性条件</h4>
极小曲面<strong>稳定</strong> ⟺ 这个算子的特征值全部非负：

<div class="keybox">$$\boxed{\Delta+\lvert\mathrm{II}\rvert^2+\mathrm{Ric}(\nu,\nu)\ge 0\ \Longrightarrow\ \text{稳定}}$$</div>

<h4>几何含义</h4>
第二基本形式（$\lvert\mathrm{II}\rvert^2$）与外围曲率（$\mathrm{Ric}(\nu,\nu)$）共同决定极小曲面的稳定性。肥皂膜稳定 ⟺ 扰动面积不减。

<div class="memobox"><strong>关键词：</strong>极小曲面稳定性由 Jacobi 算子 $\Delta+|\mathrm{II}|^2+\mathrm{Ric}(\nu,\nu)$ 的谱决定。</div>`
  },
  "r47": {
    0: L`<h4>目标</h4>
用 Morse 理论解释球面 $S^n$ 上连接对径点的测地线的退化性。

<h4>第一步：大圆弧与共轭点</h4>
$S^n$ 上大圆弧每隔 $\pi$ 经过一个共轭点（对径点），每个共轭点重数 $n-1$（法向 Jacobi 场维数）。过 $k$ 个共轭点的大弧：

<div class="eq">$$\mathrm{index}=(n-1)k$$</div>

<h4>第二步：临界点的退化</h4>
连接对径点 $p,-p$ 的测地线有<strong>无穷多条</strong>（所有大圆）。Morse 理论解释：这些是能量泛函在环路空间 $\Omega(S^n)$ 上的退化临界点，其指标随「绕数」递增。

<div class="keybox">$$\boxed{\text{绕 }k\text{ 圈的大圆：}\mathrm{index}=(n-1)k}$$</div>

<h4>意义</h4>
球面测地线族是 Morse 理论在环路空间上最标准的例子，也是 Bott 周期定理的起点。

<div class="memobox"><strong>关键词：</strong>球面对径点间无穷多条测地线 = 不同绕数的退化临界点，指标 $(n-1)k$。</div>`,
    1: L`<h4>目标</h4>
紧致 Lie 群上的闭测地线，与 Morse 理论的估计。

<h4>第一步：双不变度量与单参数子群</h4>
紧致 Lie 群 $G$ 配双不变度量，单参数子群 $t\mapsto\exp(tX)$ 是<strong>闭测地线</strong>（通过单位元）。

<h4>第二步：Morse 理论的应用</h4>
把 Morse 理论应用于 $G$ 的环路空间（或自由环路空间），能量泛函的临界点就是这些闭测地线。Morse 不等式给出闭测地线数量的下界估计：

<div class="keybox">$$\boxed{\#\{\text{闭测地线}\}\ge \text{环路空间的拓扑复杂性下界}}$$</div>

<h4>意义</h4>
Lie 群的代数结构（单参数子群）与其几何（闭测地线）通过 Morse 理论联系起来，可用于估计闭测地线的分布。

<div class="memobox"><strong>关键词：</strong>Lie 群单参数子群 = 闭测地线，Morse 理论估计其数量与分布。</div>`,
    2: L`<h4>目标</h4>
Bott 周期定理：把 Morse 理论应用于环路空间 $\Omega(S^n)$ 得到稳定同伦群的周期性。

<h4>第一步：Morse 理论用于环路空间</h4>
Bott 把 Morse 理论应用到球面环路空间 $\Omega(S^n)$。能量泛函的临界点是球面测地线（大圆），指标可用共轭点精确算出（前面算过 $(n-1)k$）。

<h4>第二步：临界点拓扑 = 环路空间拓扑</h4>
Morse 理论的核心：临界点的指标结构决定空间的胞腔分解。于是 $\Omega(S^n)$ 的同伦型可由测地线（临界点）的指标完全读出。

<h4>第三步：Bott 周期性</h4>

<div class="keybox">$$\boxed{\pi_{i+n}(S^n)\ \text{的稳定化 }=\ \Omega(S^n)\text{ 的同伦 }\ \Rightarrow\ \text{Bott 周期性}}$$</div>

稳定同伦群 $\pi_{k+n}(S^n)$（$n$ 充分大）呈现周期性，周期为 8（实）或 2（复）——这是 Morse 理论最辉煌的应用。

<div class="memobox"><strong>关键词：</strong>Morse 理论 + 环路空间 $\Omega(S^n)$ ⟹ 稳定同伦群的 Bott 周期性。</div>`
  },
  "r48": {
    0: L`<h4>目标</h4>
比较球面 $S^n(1)$ 与欧氏空间 $\mathbb R^n$ 的 Jacobi 场增长。

<h4>第一步：球面 Jacobi 场</h4>
$S^n(1)$ 上 $J''+J=0$，解为

<div class="eq">$$\lvert J(t)\rvert\le\lvert J(0)\rvert\cos t+\lvert J'(0)\rvert\sin t$$</div>

<h4>第二步：欧氏 Jacobi 场</h4>
$\mathbb R^n$ 上 $J''=0$，解为线性增长

<div class="eq">$$\lvert J(t)\rvert=\lvert J(0)+tJ'(0)\rvert$$</div>

<h4>第三步：比较</h4>
球面曲率 $1>0$（欧氏曲率 $0$），由 Rauch 定理球面 Jacobi 场增长更慢：

<div class="keybox">$$\boxed{K=1>0\ \Longrightarrow\ \text{球面 Jacobi 场 }(\sin/\cos)\text{ 增长慢于欧氏 }(\text{线性})}$$</div>

<div class="memobox"><strong>关键词：</strong>正曲率（球面）Jacobi 场振荡收缩，零曲率（欧氏）线性增长。</div>`,
    1: L`<h4>目标</h4>
比较双曲空间 $H^n(-1)$ 与欧氏空间的 Jacobi 场。

<h4>第一步：双曲 Jacobi 场</h4>
$H^n(-1)$ 上 $J''-J=0$，解为指数增长：

<div class="eq">$$\lvert J(t)\rvert=\lvert\cosh t\cdot J(0)+\sinh t\cdot J'(0)\rvert$$</div>

<h4>第二步：比较</h4>
双曲曲率 $-1<0$（欧氏曲率 $0$），由 Rauch 定理，负曲率空间 Jacobi 场增长<strong>快于</strong>欧氏空间：

<div class="keybox">$$\boxed{K=-1<0\ \Longrightarrow\ \text{双曲 Jacobi 场 }(\sinh/\cosh)\text{ 指数增长，快于欧氏线性}}$$</div>

<h4>几何含义</h4>
负曲率是「排斥力」，相邻测地线指数发散。Rauch 定理把这个直观现象推广到任意曲率下界。

<div class="memobox"><strong>关键词：</strong>负曲率（双曲）Jacobi 场指数发散，快于欧氏线性增长。</div>`,
    2: L`<h4>目标</h4>
说明 Rauch 定理如何用于球面定理（pinching 定理）。

<h4>第一步：球面定理的条件</h4>
若截面曲率满足

<div class="eq">$$\frac14<K\le 1$$</div>

<h4>第二步：下界 $1/4$ 的作用</h4>
下界 $K>\frac14$ 通过 Rauch 定理与共轭点比较，保证直径有上界（比球面 $S^n$ 更早出现共轭点），从而流形紧致且拓扑与球面相近；上界 $1$ 排除「过大曲率」的奇异性。

<div class="keybox">$$\boxed{\tfrac14<K\le 1\ \Longrightarrow\ M\ \text{同胚于 }S^n}$$</div>

<h4>几何含义</h4>
曲率被「压」在 $(1/4,1]$ 之间时，流形拓扑上就是球面。这是比较几何最著名的应用——曲率条件决定拓扑类型。

<div class="memobox"><strong>关键词：</strong>球面定理：$\frac14<K\le1$ ⟹ 同胚于 $S^n$，下界用 Rauch 定理推出。</div>`
  },
  "r49": {
    0: L`<h4>目标</h4>
说明 Toponogov 定理在球面定理中的应用。

<h4>第一步：球面定理的条件</h4>
$\frac14<K\le 1$。Toponogov 定理用 $c=\frac14$ 比较：$M$ 中三角形角度 $\ge$ 曲率 $1/4$ 球面中同边三角形的角。

<h4>第二步：推出直径上界</h4>
角度比较 ⟹ 边长比较 ⟹ 直径上界。曲率下界 $1/4$ 使所有测地线在有限距离内「收拢」，给出 $\mathrm{diam}(M)\le\pi$（与球面 $S^n$ 相当）。

<div class="keybox">$$\boxed{\text{Toponogov 比较}\ \Longrightarrow\ \mathrm{diam}(M)\ \text{上界}\ \Longrightarrow\ M\text{ 紧致}}$$</div>

<h4>意义</h4>
Toponogov 定理是球面定理证明里的关键几何工具——把曲率 pinching 翻译成三角形/距离的全局控制。

<div class="memobox"><strong>关键词：</strong>Toponogov 定理把曲率下界转成角度/直径控制，是球面定理的关键。</div>`,
    1: L`<h4>目标</h4>
说明 Toponogov 定理如何启发 Alexandrov 空间的定义。

<h4>第一步：Alexandrov 空间的定义</h4>
Alexandrov 空间（曲率下界 $c$）是满足「三角形比较」的度量空间：任意测地三角形，其顶角 $\ge$ 常曲率 $c$ 空间同边三角形的对应角。

<h4>第二步：Toponogov 定理的意义</h4>
Toponogov 定理正是说：光滑流形 $K\ge c$ ⟹ 满足 Alexandrov 的比较条件。所以 Alexandrov 空间是「曲率下界」概念在<strong>非光滑</strong>度量空间上的推广：

<div class="keybox">$$\boxed{\text{光滑 }K\ge c\ \subset\ \text{Alexandrov 曲率下界 }c}$$</div>

<h4>意义</h4>
Alexandrov 空间允许奇点、崩塌极限等非光滑对象，是现代比较几何（Perelman、Cheeger–Colding 的工作）的舞台。

<div class="memobox"><strong>关键词：</strong>Alexandrov 空间 = 用「三角形比较」定义曲率下界的非光滑度量空间。</div>`,
    2: L`<h4>目标</h4>
说明 Cheeger–Gromoll 分裂定理依赖 Toponogov 定理。

<h4>第一步：分裂定理的陈述</h4>
若 $\mathrm{Ric}\ge 0$ 且流形含一条<strong>直线</strong>（两端无限延伸的最短测地线），则流形分裂为乘积：

<div class="eq">$$M\ \text{含直线}\ \Longrightarrow\ M=\mathbb R\times N$$</div>

<h4>第二步：Toponogov 的作用</h4>
直线对应的 Busemann 函数 $b$ 是「距离函数」，要证明 $b$ 是仿射的（$\nabla^2 b=0$）。这一步用 Toponogov 比较：$\mathrm{Ric}\ge0$（其实分裂定理只需这个 Ricci 条件，但比较工具来自 Toponogov 思想）把三角形角度关系转为 $b$ 的凸性，最终 $b$ 是线性函数。

<div class="keybox">$$\boxed{\mathrm{Ric}\ge 0+\text{直线}\ \Longrightarrow\ M=\mathbb R\times N}$$</div>

<div class="memobox"><strong>关键词：</strong>分裂定理：非负 Ricci + 直线 ⟹ 乘积结构，依赖比较几何（Toponogov 思想）。</div>`
  },
  "r50": {
    0: L`<h4>目标</h4>
Ricci 平坦流形（$\mathrm{Ric}\ge0$）的体积增长。

<h4>第一步：取 $c=0$</h4>
$\mathrm{Ric}\ge0$ 对应 $c=0$，比较空间是欧氏空间 $V_0(r)=\omega_n r^n$。Bishop–Gromov 给出：

<div class="eq">$$\frac{\mathrm{Vol}(B(p,r))}{r^n}\ \text{单调非增}$$</div>

<h4>第二步：体积上界</h4>

<div class="keybox">$$\boxed{\mathrm{Ric}\ge0\ \Longrightarrow\ \mathrm{Vol}(B(p,r))\le\omega_n r^n}$$</div>

<h4>应用</h4>
Calabi–Yau 流形是 Ricci 平坦的，其体积增长最多像欧氏空间一样快（体积 ≤ $\omega_n r^n$）。

<div class="memobox"><strong>关键词：</strong>Ricci 平坦 ⟹ 体积 ≤ 欧氏体积 $\omega_n r^n$，体积比单调非增。</div>`,
    1: L`<h4>目标</h4>
正 Ricci 曲率（$\mathrm{Ric}\ge n-1$，即球面）的体积上界。

<h4>第一步：取 $c=1$</h4>
$\mathrm{Ric}\ge n-1$ 对应 $c=1$，比较空间是球面 $S^n$。Bishop–Gromov 给出体积比 $\mathrm{Vol}(B(p,r))/V_{S^n}(r)$ 单调非增。

<h4>第二步：体积上界</h4>

<div class="eq">$$\mathrm{Vol}(B(p,r))\le V_{S^n}(r),\qquad \mathrm{Vol}(M)\le\mathrm{Vol}(S^n)$$</div>

<div class="keybox">$$\boxed{\mathrm{Ric}\ge n-1\ \Longrightarrow\ \mathrm{Vol}(M)\le\mathrm{Vol}(S^n)=\frac{2\pi^{(n+1)/2}}{\Gamma((n+1)/2)}}$$</div>

<h4>几何含义</h4>
正 Ricci 下界（球面量级）钳住总体积，球面是体积上界的「饱和」模型。

<div class="memobox"><strong>关键词：</strong>$\mathrm{Ric}\ge n-1$ ⟹ 体积 ≤ 球面体积，Bishop–Gromov 的球面版。</div>`,
    2: L`<h4>目标</h4>
Gromov 紧致性定理：曲率、直径、体积有界的流形集合紧致。

<h4>第一步：条件</h4>
考虑满足 $\lvert K\rvert\le1$、$\mathrm{diam}\le D$、$\mathrm{vol}\ge v>0$ 的 $n$ 维闭流形族。

<h4>第二步：体积比较给出 ε-网</h4>
由 Bishop–Gromov，体积下界 $v>0$ + 曲率有界给出统一的覆盖数上界（每个流形可被有限个 $\varepsilon$-球覆盖，个数一致有界）。

<h4>第三步：Gromov 紧致性</h4>

<div class="keybox">$$\boxed{\{\lvert K\rvert\le1,\ \mathrm{diam}\le D,\ \mathrm{vol}\ge v\}\ \text{在 Gromov–Hausdorff 拓扑下紧致}}$$</div>

<h4>意义</h4>
这是「几何有界 ⟹ 紧致」的模空间结果：满足这些界的流形只有「有限种形状」（模紧致），是当代几何分析（Ricci 流、极限空间）的基础。

<div class="memobox"><strong>关键词：</strong>曲率/直径/体积有界 ⟹ 流形族 GH 紧致（Gromov 紧致性定理）。</div>`
  },
  "r51": {
    0: L`<h4>目标</h4>
球面 $S^n(R)$ 达到 Bonnet–Myers 上界，是刚性情形。

<h4>计算</h4>
$S^n(R)$ 的 Ricci $=\frac{n-1}{R^2}$（取等），直径 $=\pi R$：

<div class="eq">$$\mathrm{Ric}=\frac{n-1}{R^2},\qquad \mathrm{diam}(S^n(R))=\pi R$$</div>

<div class="keybox">$$\boxed{\mathrm{diam}(S^n(R))=\pi R\ \text{达到 Bonnet–Myers 上界}}$$</div>

<h4>刚性</h4>
球面是 Bonnet–Myers 直径界的「饱和」例子——取等号时流形等距于半径 $R$ 的球面。

<div class="memobox"><strong>关键词：</strong>$S^n(R)$ 达到直径界 $\pi R$，是 Bonnet–Myers 的刚性情形。</div>`,
    1: L`<h4>目标</h4>
实射影空间 $\mathbb{RP}^n$ 验证 Bonnet–Myers 的有限基本群结论。

<h4>第一步：Ricci 与球面相同</h4>
$\mathbb{RP}^n$ 是 $S^n$ 的对径商，Ricci 曲率与 $S^n$ 相同：$\mathrm{Ric}=\frac{n-1}{R^2}$。

<h4>第二步：直径更小，基本群有限</h4>
$\mathbb{RP}^n$ 直径 $=\frac{\pi R}{2}$（对径点被粘合，最大距离减半），基本群 $\pi_1(\mathbb{RP}^n)=\mathbb Z_2$：

<div class="keybox">$$\boxed{\mathrm{diam}(\mathbb{RP}^n)=\frac{\pi R}{2},\quad\pi_1(\mathbb{RP}^n)=\mathbb Z_2}$$</div>

<h4>验证定理</h4>
直径 $\frac{\pi R}{2}\le\pi R$ 满足上界；基本群 $\mathbb Z_2$ 有限，验证了 Bonnet–Myers 的「基本群有限」结论。

<div class="memobox"><strong>关键词：</strong>$\mathbb{RP}^n$ 直径 $\pi R/2$、$\pi_1=\mathbb Z_2$，验证 Bonnet–Myers 有限性。</div>`,
    2: L`<h4>目标</h4>
说明「Ricci 正」≠「紧致」——需要一致下界。

<h4>第一步：反例</h4>
存在 Ricci 曲率为正但<strong>非紧致</strong>的流形，如 $\mathbb R^2$ 上的旋转抛物面（Ricci 处处 $>0$，但 Ricci 下界趋于 $0$）。

<h4>第二步：关键区别</h4>
Bonnet–Myers 需要的是<strong>一致</strong>正下界 $\mathrm{Ric}\ge\frac{n-1}{R^2}>0$，而不是「点点正」：

<div class="warnbox">「$\mathrm{Ric}>0$ 点点正」⟹ 可以非紧致；「$\mathrm{Ric}\ge c>0$ 一致正」⟹ 紧致、直径有界。</div>

<div class="keybox">$$\boxed{\mathrm{Ric}>0\ \nRightarrow\ \text{紧致};\quad \mathrm{Ric}\ge c>0\ \Rightarrow\ \text{紧致}}$$</div>

<div class="memobox"><strong>关键词：</strong>Ricci 一致正下界才保证紧致；点点正（如抛物面）可以非紧致。</div>`
  },
  "r52": {
    0: L`<h4>目标</h4>
平坦环面崩塌的 GH 极限。

<h4>第一步：崩塌过程</h4>
取平坦环面 $T^2(R,r)$（大半径 $R$ 固定，小半径 $r\to0$）。当 $r\to0$，环面「退化」成一个方向消失：

<div class="eq">$$T^2(R,r)\ \xrightarrow{\text{GH}}\ S^1(R)$$</div>

<h4>第二步：维数崩塌</h4>
极限从二维崩塌到一维。这是 GH 收敛区别于光滑收敛的关键——极限空间可以降维：

<div class="keybox">$$\boxed{\dim\ \text{从 }2\ \text{崩塌到 }1}$$</div>

<h4>意义</h4>
崩塌（collapse）现象说明 GH 极限不保持维数，这是理解 Ricci 流奇点和极限空间结构的核心困难。

<div class="memobox"><strong>关键词：</strong>环面小半径 →0 ⟹ GH 极限是圆 $S^1$，维数从 2 崩塌到 1。</div>`,
    1: L`<h4>目标</h4>
Perelman 的 $W$-泛函单调性在 Ricci 流 GH 极限分析中的作用。

<h4>第一步：$W$-泛函</h4>
Perelman 引入 $W$-泛函（熵），它沿 Ricci 流<strong>单调</strong>。单调性提供了 Ricci 流的「能量」，用于控制奇点形成。

<h4>第二步：分析 GH 极限</h4>
$W$-泛函单调性 ⟹ Ricci 流奇点可被「手术」（surgery）处理，手术后的流形序列的 GH 极限可分析。

<div class="keybox">$$\boxed{W\text{-泛函单调性}\ \Longrightarrow\ \text{Ricci 流奇点可控}\ \Longrightarrow\ \text{分析 GH 极限}}$$</div>

<h4>意义</h4>
这是 Perelman 证明 Poincaré 猜想的关键工具之一——用单调量控制 Ricci 流的长期行为与极限。

<div class="memobox"><strong>关键词：</strong>Perelman $W$-泛函单调性，控制 Ricci 流奇点与 GH 极限。</div>`,
    2: L`<h4>目标</h4>
Cheeger–Colding 理论：Ricci 下界序列的 GH 极限结构。

<h4>第一步：Ricci 下界序列的极限</h4>
考虑 $\mathrm{Ric}\ge-(n-1)$ 的流形序列，其 GH 极限是<strong>度量空间</strong>（可能非光滑、带奇点）。

<h4>第二步：几乎处处可微结构</h4>
Cheeger–Colding 证明：这样的极限空间<strong>几乎处处</strong>有切锥，是（reifenberg 意义下的）Lipschitz 流形，具有可测的黎曼度量结构。

<div class="keybox">$$\boxed{\mathrm{Ric}\text{ 下界序列的 GH 极限}=\text{几乎处处可微的 Lipschitz 流形}}$$</div>

<h4>意义</h4>
这把经典黎曼几何推广到奇异空间，是 Ricci 曲率下界极限空间理论（Cheeger–Colding 理论）的核心，支撑了后来对 Ricci 极限的深入研究。

<div class="memobox"><strong>关键词：</strong>Ricci 下界 GH 极限 = 几乎处处可微的 Lipschitz 流形（Cheeger–Colding）。</div>`
  },
  "t1": {
    0: "①【思路】Rⁿ 可缩：构造同伦 F(x,t)=(1−t)x 从恒等映射缩到常值映射。【计算】F(x,0)=x（id），F(x,1)=0（常值）。②【思路】故 Rⁿ 与单点同伦等价，π₁=0、H_n=0（n>0）。【结论】Rⁿ 是标准可缩空间，H_n(Rⁿ)=Z（n=0）余为 0。",
    1: "①【思路】S¹ 与 R²∖{0} 同伦等价：R²∖{0} 形变收缩到单位圆。【计算】F(x,t)=(1−t)x+t(x/|x|) 径向投影到 S¹。②【思路】故二者有同构的基本群与同调。【计算】π₁(S¹)=π₁(R²∖{0})=Z。③【结论】形变收缩保持同伦型，是判断空间等价的基本手段。",
    2: "①【思路】Möbius 带中带（中心圆）是其形变收缩核，故 Möbius 带 ≃ S¹。【计算】把带沿宽度收缩到中心圆，F 连续且固定中心圆。②【思路】故 π₁(Möbius)≅π₁(S¹)≅Z。【计算】H_1(Möbius)≅Z。③【结论】Möbius 带与 S¹ 同伦等价（但不同胚，边界是一个圈）。"
  },
  "t2": {
    0: "①【思路】S¹={z∈ℂ:|z|=1}，π₁(S¹) 是其上基点为 1 的环路同伦类。核心工具是万有覆叠 p:ℝ→S¹, p(t)=e^{2πit}，配合道路提升唯一性。【计算】纤维 p⁻¹(1)=ℤ，覆叠变换群是平移 ℤ。②【思路】用道路提升定理：每个环路 γ:I→S¹（γ(0)=γ(1)=1）唯一提升为 γ̃:I→ℝ 且 γ̃(0)=0；其终点 γ̃(1) 是纤维中的一个整数，正是 γ 的绕数 n(γ)。【计算】n(γ)=γ̃(1)∈ℤ。③【思路】同伦不变性：同伦（固定端点）的环路提升后仍是同伦（固定端点），故终点不变，绕数与代表元选取无关；正向一圈 γ(t)=e^{2πit} 的提升是 γ̃(t)=t，绕数为 1。【计算】n(γ)=1（正向一圈），反向一圈为 −1。④【思路】绕数可加：γ·δ 的提升终点 = γ 的提升终点 + δ 的提升平移，即 n(γ·δ)=n(γ)+n(δ)，给出群同构 π₁(S¹)→ℤ。【结论】π₁(S¹)≅ℤ，绕数是完整不变量，正向一圈对应 1、反向对应 −1。",
    1: "①【思路】Sⁿ(n≥2) 单连通：任意环路 γ:S¹→Sⁿ 都可缩为常环路。关键是用维数优势——连续映射 S¹→Sⁿ 的像不会“充满”Sⁿ（S¹ 是 1 维、Sⁿ 维数 ≥2）。【推导】由单纯逼近（或 Sard），γ 不是满射，取不在像中的点 p∈Sⁿ∖γ(S¹)。②【思路】Sⁿ∖{p} 经球极投影同胚于 ℝⁿ，而 ℝⁿ 可缩，故 γ 在 Sⁿ∖{p} 内可缩为常映射。【计算】Sⁿ∖{p}≅ℝⁿ 可缩 ⟹ γ 可缩。③【思路】等价地，Sⁿ 的 CW 结构 e⁰∪eⁿ 无 1 胞腔（n≥2），任何 1 维环路同伦平凡。【结论】π₁(Sⁿ)=0（n≥2），高维球面单连通。",
    2: "①【思路】环面 T²=S¹×S¹ 用乘积公式 π₁(X×Y)≅π₁(X)×π₁(Y) 计算。【计算】π₁(S¹)=ℤ，故 π₁(T²)≅ℤ×ℤ。②【思路】两个生成元是“赤道方向”与“经线方向”的独立环路：a(t)=(e^{2πit},1)（第一坐标绕一圈）、b(t)=(1,e^{2πit})（第二坐标绕一圈）。【计算】[a]、[b] 独立生成 ℤ×ℤ。③【思路】验证阿贝尔性：T² 上两个坐标方向可独立“滑动”，a·b≃b·a（正方形两对边各自粘合，两个因子独立），故 π₁(T²) 是阿贝尔群。【结论】π₁(T²)≅ℤ×ℤ，由赤道与经线两个独立环路生成，对应 T² 的两个“1 维洞”。"
  },
  "t3": {
    0: "①【思路】有限连通图 G 的基本群用“极大生成树”计算。取生成树 T（连通、无圈、含所有顶点），T 可缩故对基本群无贡献；剩余非树边各贡献一个自由生成元。【计算】非树边数 = E−(V−1)=E−V+1=1−χ(G)（χ(G)=V−E）。②【思路】每条非树边 e 提供一个环路：沿 T 中唯一道路连接 e 的两端点再经 e 回到起点。这些环路自由生成 π₁(G)。【推导】把 T 收缩为一点后，G/T 是 (1−χ(G)) 个圆的楔和（wedge），其基本群是自由积。③【思路】故得。【计算】π₁(G)≅F_{1−χ(G)}（秩 1−χ(G) 的自由群）。【结论】有限连通图的基本群是自由群，秩由欧拉示性数 χ(G)=V−E 决定。",
    1: "①【思路】环面 T² 用 Seifert–van Kampen 计算：把正方形 [0,1]² 对边粘合，取 U=正方形中心挖去一个小开圆盘、V=小开圆盘，则 U∩V 是圆周，π₁(U∩V)≅ℤ。【推导】U 形变收缩到“8 字形”（正方形边界粘合后的像），故 π₁(U)≅F₂=⟨a,b⟩；V 可缩 π₁(V)=0。②【思路】van Kampen 关系来自 U∩V 的边界回路：该回路沿正方形边界走一圈是 a b a⁻¹b⁻¹（正向），它在 U 中可缩，故商掉此关系。【计算】π₁(T²)=⟨a,b | a b a⁻¹b⁻¹=1⟩。③【思路】关系 aba⁻¹b⁻¹=1 等价于 ab=ba（a、b 交换），故生成元交换，群是自由阿贝尔群。【计算】⟨a,b|aba⁻¹b⁻¹=1⟩≅ℤ×ℤ。【结论】π₁(T²)≅ℤ×ℤ，van Kampen 定理通过“切开、记录边界关系、粘合”算出基本群。",
    2: "①【思路】Klein 瓶 K 是正方形把一组对边同向粘合、另一组对边反向粘合。同例1取 U、V 分解：π₁(U)≅F₂=⟨a,b⟩、π₁(V)=0、π₁(U∩V)≅ℤ。【推导】van Kampen 的关系是边界回路 aba⁻¹b=1（因反向粘合使第二个 b 的走向不取逆）。②【思路】该关系不交换 a、b：它等价于 ba=a⁻¹b（或 ab=ba⁻¹），故 a、b 不交换，群非阿贝尔。【计算】π₁(K)≅⟨a,b|aba⁻¹b=1⟩。③【思路】验证非交换：把 a、b 映到无限二面体群的生成元（b²=1、aba=b⁻¹），关系 aba⁻¹b=1 仍成立而 a、b 的像不可换，故群非阿贝尔。【推导】非阿贝尔 ⟹ 与 ℤ×ℤ 不同构。【结论】π₁(K)≅⟨a,b|aba⁻¹b=1⟩ 是非交换群，Klein 瓶与环面基本群不同。"
  },
  "t4": {
    0: "①【思路】p:ℝ→S¹, p(t)=e^{2πit} 是万有覆叠。验证局部同胚与均匀覆盖：对任意 z₀=e^{2πiθ₀}∈S¹，取开弧 U=S¹∖{−z₀}（去掉对径点）。【计算】p⁻¹(U)=∐_{n∈ℤ}(θ₀+n−1/2, θ₀+n+1/2)，每个开区间在 p 下同胚于 U。②【思路】故 p 是覆叠映射，纤维 p⁻¹(z)=θ+ℤ≅ℤ。【计算】p⁻¹(1)=ℤ。③【思路】ℝ 单连通（可缩），故这是万有覆叠；覆叠变换群（Deck 群）由平移 t↦t+1 生成。【计算】Aut(ℝ/S¹)≅ℤ。④【思路】由覆叠理论，万有覆叠的 Deck 群同构于基本群。【结论】R→S¹ 万有覆叠，纤维 ℤ、Deck 群 ℤ，直接给出 π₁(S¹)≅ℤ。",
    1: "①【思路】p:Sⁿ→RPⁿ, p(x)=[x]=±x（粘合对径点）是二重覆叠。对 x∈Sⁿ 取不含对径点的小邻域 U，p|U 是同胚；p⁻¹(p(U)) 由 U 与 −U 两片组成，各自同胚于 p(U) 且无交。【计算】纤维 p⁻¹([x])={x,−x}，恰两个点。②【思路】故是二重覆叠。Sⁿ(n≥2) 单连通 ⟹ 是万有覆叠，Deck 群是 ℤ/2（恒等与对径映射 A(x)=−x）。【计算】Deck(Sⁿ→RPⁿ)≅ℤ/2。③【思路】故 π₁(RPⁿ)≅ℤ/2（n≥2），唯一非平凡元是“从 x 到 −x 的圆弧”投影成的环路。【结论】Sⁿ→RPⁿ 是二重覆叠，Deck 群 ℤ/2，π₁(RPⁿ)≅ℤ/2。",
    2: "①【思路】p:S¹→S¹, p(z)=zⁿ（n≥1）是 n 重覆叠。对 z₀∈S¹ 取开弧 U（不含 z₀ 的全体 n 次根），p⁻¹(U) 是 n 个无交开弧，各同胚于 U。【计算】纤维 p⁻¹(z₀)={全体 n 次单位根}，恰 n 个点。②【思路】诱导同态 p_*:π₁(S¹)→π₁(S¹) 把绕数 k 的环路映为绕数 n·k 的环路。【计算】p_*(1)=n（单位环 z↦zⁿ 绕数 n），故 p_*(π₁(S¹))=nℤ。③【思路】验证：p 是 n 重覆叠 ⟹ 像子群 p_*(π₁(S¹))=nℤ 是指数 n 的子群（覆叠次数 = 纤维基数 = 指数）。【结论】S¹→S¹(z↦zⁿ) 是 n 重覆叠，诱导 π₁(S¹)=ℤ 映到 nℤ。"
  },
  "t5": {
    0: "①【思路】覆叠分类定理：连通覆叠 (p:X̃→S¹) 的等价类 ↔ π₁(S¹)=ℤ 的子群共轭类。ℤ 的子群全部形如 nℤ（n≥0），其中 n=0 对应万有覆叠 ℝ→S¹。【计算】ℤ 的子群为 {0}, ℤ, 2ℤ, 3ℤ, …, nℤ。②【思路】n≥1 对应覆叠 z↦zⁿ（S¹→S¹，n 重），对应子群恰为 p_*(π₁)=nℤ；n=0 对应 ℝ→S¹（万有覆叠）。【计算】p(z)=zⁿ ⟹ p_*π₁=nℤ。③【思路】逆向验证：给定子群 nℤ，从万有覆叠 ℝ 商掉 Deck 群的子群 nℤ（平移 n 的整倍数）得 ℝ/nℤ≅S¹，投影即 z↦zⁿ。【结论】S¹ 的连通覆叠恰为 ℝ→S¹ 与 S¹→S¹(z↦zⁿ)，与 ℤ 的子群一一对应。",
    1: "①【思路】环面 T² 的万有覆叠是 p:ℝ²→T²（两个坐标各自 e^{2πit}），π₁(T²)=ℤ×ℤ 的子群格决定所有连通覆叠。【计算】p(t₁,t₂)=(e^{2πit₁},e^{2πit₂})，纤维 ℤ×ℤ。②【思路】ℤ×ℤ 的子群是秩 ≤2 的自由阿贝尔群：0、ℤ、ℤ×ℤ、由单个向量 (a,b) 生成的秩 1 子群、由两个独立向量生成的秩 2 子群。每个子群 H 对应商 ℝ²/H → T²。【推导】秩 2 子群对应“环面覆叠环面”；秩 1 子群对应无限圆柱 S¹×ℝ→T²；0 对应万有覆叠。③【思路】对应关系：每个子群 H 给出一个覆叠，Deck 群是 π₁(T²)/H，纤维是陪集。【结论】T² 的连通覆叠与 ℤ×ℤ 的子群一一对应，万有覆叠为 ℝ²→T²。",
    2: "①【思路】8 字形 X=S¹∨S¹ 的 π₁≅F₂（秩 2 自由群），其子群结构极其丰富（自由群的子群自由，Nielsen–Schreier 定理），故覆叠空间都是各种图。【推导】万有覆叠是“无穷 4-正则树”（每顶点 4 条边，以 a、b 及其逆标记）。②【思路】F₂ 的有限指数子群对应有限覆叠图：指数 n 子群对应 n 层覆叠。例如指数 2 子群对应 2 层覆叠。【计算】F₂ 的指数 n 子群个数由 Schreier 计数公式给出。③【思路】所有连通覆叠空间都是图（图被图覆盖仍是图），且与 F₂ 的子群共轭类一一对应。【结论】8 字形的覆叠空间都是图，与自由群 F₂ 的子群一一对应，是覆叠理论中结构最丰富的例子。"
  },
  "t6": {
    0: "①【思路】楔和 X=S¹∨S¹ 是两圆交于一点。取 U、V 为两个圆分别的加粗开邻域（各含一个圆并伸出一小段到基点），使 U∩V 可缩（小十字邻域）。【计算】U≃S¹、V≃S¹，U∩V≃ 单点。②【思路】van Kampen：π₁(X)≅π₁(U)*π₁(V)/N，N 由 π₁(U∩V)（平凡群）生成，故 N={e}。【计算】π₁(X)≅ℤ*ℤ=F₂（两生成元自由积）。③【思路】因 U∩V 可缩，没有关系把两个生成元粘合，故它们自由地生成。【结论】π₁(S¹∨S¹)≅F₂，van Kampen 在无关系项时退化为自由积。",
    1: "①【思路】环面 T² 沿子午线 m 与赤道 l 切开：U=去掉一个点附近小圆盘后的环面（≃ 子午线∨赤道的 8 字形）、V=小圆盘（可缩），U∩V=圆周（π₁≅ℤ）。【计算】π₁(U)≅F₂=⟨a,b⟩、π₁(V)=0、π₁(U∩V)≅ℤ=⟨c⟩。②【思路】van Kampen 融合关系来自 U∩V 的生成元 c 在两个含入下的像：c 在 U 中对应沿子午线 a、赤道 b 走一遍的边界回路 a b a⁻¹b⁻¹。【计算】融合关系 a b a⁻¹b⁻¹=1。③【思路】该关系即 a、b 交换，故。【计算】π₁(T²)=⟨a,b|aba⁻¹b⁻¹=1⟩≅ℤ×ℤ。【结论】van Kampen 切开环面得到生成元与交换关系，π₁(T²)≅ℤ×ℤ。",
    2: "①【思路】亏格 g 可定向闭曲面 Σ_g 可视为 4g 边形按标准方式成对粘边，边界回路是 a₁b₁a₁⁻¹b₁⁻¹a₂b₂a₂⁻¹b₂⁻¹…a_g b_g a_g⁻¹b_g⁻¹。取 U=去掉中心小圆盘（≃ 2g 个圆的楔和）、V=圆盘。【计算】π₁(U)≅F_{2g}=⟨a₁,b₁,…,a_g,b_g⟩。②【思路】van Kampen 融合关系是 U∩V（边界回路）的像，恰为上述乘积字。【计算】∏_{i=1}^g [a_i,b_i]=1，其中 [a_i,b_i]=a_i b_i a_i⁻¹ b_i⁻¹。③【思路】故 π₁(Σ_g) 是 2g 个生成元、一个关系的群。【计算】π₁(Σ_g)=⟨a₁,b₁,…,a_g,b_g | ∏[a_i,b_i]=1⟩。【结论】g=0 得 π₁(S²)=0，g=1 得 π₁(T²)=ℤ×ℤ。"
  },
  "t7": {
    0: "①【思路】代数基本定理（复系数非常数多项式有根）用基本群证明。设 p(z)=zⁿ+a_{n−1}z^{n−1}+…+a₀ 无根，定义 f_r:S¹→S¹，f_r(z)=p(rz)/|p(rz)|。【推导】因 p 无根，f_r 良定义且连续。②【思路】r→0 时 p(rz)→a₀（常数项），故 f_0(z)=a₀/|a₀| 是常值映射，绕数为 0。【计算】deg(f_0)=0。③【思路】r→∞ 时 p(rz)=rⁿzⁿ+低阶项，主项 rⁿzⁿ，故 f_r(z) 同伦于 z↦zⁿ。【计算】deg(f_∞)=deg(z↦zⁿ)=n。④【思路】f_r 关于 r 连续 ⟹ 绕数不变（连续的整数值函数必为常数），但 0=deg(f_0)≠deg(f_∞)=n，矛盾。【结论】p 必有根，代数基本定理得证——绕数不变性排斥了“无根”假设。",
    1: "①【思路】毛球定理：S² 上不存在处处非零的连续切向量场。反证设有 v(x)≠0 且 v(x)⊥x（x∈S²）。归一化 û(x)=v(x)/|v(x)|:S²→S²，满足 û(x)⊥x。【计算】|û(x)|=|x|=1，⟨û(x),x⟩=0。②【思路】构造同伦 F(x,t)=cos(πt)x+sin(πt)û(x)：因 x 与 û(x) 正交且为单位向量，F(x,t) 是两正交单位向量的旋转组合，恒在 S² 上。【计算】F(x,0)=x（恒等），F(x,1)=−x（对径映射 A(x)=−x）。③【思路】故恒等 id ≃ 对径映射 A。但 deg(id)=1，而 A(x)=−x 在 S² 上是反向映射，deg(A)=(−1)^{n+1}=(−1)³=−1。【计算】deg(id)=1 ≠ deg(A)=−1，与“同伦映射度数相等”矛盾。④【结论】矛盾，故处处非零切向量场不存在，毛球定理得证（头发无法被光滑“梳理”）。",
    2: "①【思路】证 ℝ² 与 ℝ³ 不同胚。反证设存在同胚 φ:ℝ²→ℝ³，则去掉一点后 φ 限制为同胚 ℝ²∖{0}→ℝ³∖{φ(0)}。【推导】同胚诱导基本群同构。②【思路】计算两侧基本群：ℝ²∖{0}≃S¹（径向收缩），故 π₁(ℝ²∖{0})≅ℤ；ℝ³∖{p}≃S²，π₁(S²)=0。【计算】π₁(ℝ²∖{0})≅ℤ，π₁(ℝ³∖{p})≅0。③【思路】同胚须保持基本群，但 ℤ≇0，矛盾。【结论】ℝ² 与 ℝ³ 不同胚；一般地 ℝᵐ≅ℝⁿ ⟺ m=n（去一点后比较同调 H_{m−1}）。"
  },
  "t8": {
    0: "①【思路】R²∖{0} 强形变收缩到 S¹。构造径向收缩 r(x)=x/|x|:R²∖{0}→S¹，r|S¹=id。【计算】r(x)=x/|x|，且 r(x)=x（当 |x|=1）。②【思路】证明 i∘r≃id_{R²∖{0}}（i:S¹↪R²∖{0} 包含），同伦 F(x,t)=(1−t)x+t·(x/|x|)。【计算】F(x,0)=x，F(x,1)=x/|x|=i(r(x))，F 连续（|x|≠0 时中间点模长始终 >0）。③【思路】又 r∘i=id_{S¹}。故 r 与 i 互为同伦逆。【计算】r∘i=id，i∘r≃id。④【结论】R²∖{0}≃S¹，故 π₁(R²∖{0})≅ℤ，H₁(R²∖{0})≅ℤ。",
    1: "①【思路】Möbius 带 M 形变收缩到其中心圆。M 可视作 [0,1]×[0,1] 把 (0,y) 与 (1,1−y) 反向粘合；中心圆是 y=1/2 处的纬度圆。【计算】中心圆 C≅S¹。②【思路】沿竖直方向收缩到 y=1/2：F((x,y),t)=(x,(1−t)y+t/2)，保持中心圆 y=1/2 不动，且粘合处 (0,y)~(1,1−y) 保持一致（两边 y 同收到 1/2）。【计算】F(·,0)=id，F(·,1) 映到 C，F|C=id。③【思路】故 C 是 M 的强形变收缩核。【结论】M≃C≅S¹，π₁(M)≅ℤ、H₁(M)≅ℤ；注意 M 只有一条边界（区别于有两条边界的普通环带）。",
    2: "①【思路】ℝⁿ 可缩到原点。同伦 F(x,t)=(1−t)x 从恒等缩到常值。【计算】F(x,0)=x，F(x,1)=0。②【思路】故 ℝⁿ 与单点 {0} 同伦等价：i:0↦0 与 r:x↦0 满足 r∘i=id、i∘r=F(·,1)≃id。【计算】r∘i=id，i∘r≃id。③【思路】可缩空间的所有同伦群、正维同调平凡。【计算】π_k(ℝⁿ)=0（k≥1），H_k(ℝⁿ)=ℤ（k=0）且 H_k=0（k>0）。【结论】ℝⁿ 是可缩空间，同伦等价于一点，是最简单的同伦型。"
  },
  "t9": {
    0: "①【思路】S¹ 的一个三角剖分是三角形边界 ∂Δ²（3 顶点、3 边），S¹=|∂Δ²|。【计算】顶点 {v₀,v₁,v₂}，边 [v₀v₁],[v₁v₂],[v₂v₀]。②【思路】链复形 C₁=ℤ³（3 边）、C₀=ℤ³（3 顶点），边界 ∂₁[vᵢvⱼ]=vⱼ−vᵢ。【计算】∂₁(e₀₁)=v₁−v₀，∂₁(e₁₂)=v₂−v₁，∂₁(e₂₀)=v₀−v₂。③【思路】算同调：H₁=ker ∂₁（1 维闭链），唯一本质闭链是 e₀₁+e₁₂+e₂₀（绕一整圈）。【计算】H₁(S¹)≅ℤ（由 e₀₁+e₁₂+e₂₀ 生成），H₀≅ℤ。④【结论】S¹ 的最简三角剖分是三角形边界，H₁(S¹)≅ℤ 由整圈边界生成。",
    1: "①【思路】环面 T² 的最小三角剖分用 7 顶点、21 边、14 个三角形（经典结果）。【计算】V=7, E=21, F=14。②【思路】验证欧拉示性数：χ(T²)=V−E+F=7−21+14=0（与 T² 的 χ=0 一致）。【计算】χ=0。③【思路】由 χ=rankH₀−rankH₁+rankH₂，且 H₀=ℤ、H₂=ℤ（可定向闭曲面），得 0=1−rankH₁+1 ⟹ rankH₁=2，无扭转（可定向）。【计算】rank H₁=2 ⟹ H₁(T²)≅ℤ²。④【结论】T² 最小三角剖分 7-21-14，χ=0，H₁≅ℤ²。",
    2: "①【思路】RP² 的三角剖分（教科书常用）为 10 顶点、27 边、18 面。【计算】V=10, E=27, F=18。②【思路】验证 χ：χ(RP²)=V−E+F=10−27+18=1（RP² 的 χ=1）。【计算】χ=1。③【思路】不可定向 ⟹ 无基本类 ⟹ H₂=0。由 χ=rankH₀−rankH₁+rankH₂=1−rankH₁+0=1 ⟹ rankH₁=0，但 H₁ 含扭转 ℤ/2。【计算】H₁(RP²)=ℤ/2（本质闭链绕两圈才是边界），H₂=0。④【结论】RP² 三角剖分 χ=1，H₁=ℤ/2 含扭转，体现不可定向性。"
  },
  "t10": {
    0: "①【思路】球面 S² 是四面体边界 ∂Δ³（4 顶点、6 边、4 面）。链复形 C₂=ℤ⁴、C₁=ℤ⁶、C₀=ℤ⁴。【计算】V=4, E=6, F=4。②【思路】H₂：唯一的 2 维闭链是 4 个面按定向求和（整个球面），无 3 维边界，故 H₂≅ℤ。【计算】H₂(S²)≅ℤ（生成元=整个四面体表面）。③【思路】H₁：所有 1 维闭链都是边界（四面体骨架可充入面），故 H₁=0。【计算】H₁(S²)=0。④【结论】H₀(S²)=ℤ、H₁(S²)=0、H₂(S²)=ℤ：一个 2 维洞（空腔），无 1 维洞。",
    1: "①【思路】环面 T² 剖分后计算链复形（如 7-21-14 剖分）。用欧拉示性数 χ=0 与已知 H₀=ℤ、H₂=ℤ。【计算】χ=V−E+F=7−21+14=0。②【思路】由 χ=rankH₀−rankH₁+rankH₂：0=1−rankH₁+1 ⟹ rankH₁=2，可定向故无扭转。【计算】rank H₁=2 ⟹ H₁≅ℤ²。③【思路】两个生成元：赤道方向环与经线方向环（剖分中取的两条本质 1-闭链）。【计算】H₁(T²)≅ℤ²≅⟨[赤道],[经线]⟩，H₂≅ℤ。【结论】H₀=ℤ、H₁=ℤ²、H₂=ℤ：两个独立 1 维洞 + 一个 2 维洞。",
    2: "①【思路】RP² 用三角剖分（标准 10-27-18）。χ=1，不可定向 ⟹ H₂=0。【计算】H₂(RP²)=0。②【思路】算 H₁：C₂→C₁ 的边界矩阵在 ℤ 上的余核含一个 2 阶元——“整圈”的 2 倍才是边界（不可定向半边）。【计算】H₁(RP²)=ker∂₁/im∂₂≅ℤ/2。③【思路】验证：本质 1 闭链 c（RP² 的中腰环路）绕一圈非零，但 2c 是某 2 链的边界，故 [c] 是 2 阶元。【计算】2[c]=0，[c]≠0 ⟹ H₁=ℤ/2。【结论】H₀=ℤ、H₁=ℤ/2、H₂=0，RP² 含扭转，是不可定向闭曲面的典型同调。"
  },
  "t11": {
    0: "①【思路】可缩空间 X（id≃常值映射）的同调与一点相同：用同伦不变性。【推导】若 X 可缩，id_X≃c（常值），则 id_*=c_*:H_n(X)→H_n(X)。而 c 经一点分解 c:X→{pt}→X，n>0 时 H_n({pt})=0 ⟹ c_*=0。【计算】n>0 时 id_*=0，但 id_* 是恒等同态，只在群为 0 时可能等于零同态 ⟹ H_n(X)=0。②【思路】H₀：可缩空间道路连通，H₀(X)≅ℤ。【计算】H₀(X)≅ℤ。③【思路】总结。【结论】X 可缩 ⟹ H₀≅ℤ、H_n=0（n>0），奇异同调完美刻画可缩性。",
    1: "①【思路】Sⁿ 的同调用 CW 结构（e⁰∪eⁿ）或 (Dⁿ,Sⁿ⁻¹)。Sⁿ 有一个 0 胞腔和一个 n 胞腔。【计算】Sⁿ=e⁰∪eⁿ。②【思路】胞腔同调：d_n(eⁿ)=0（粘贴映射 Sⁿ⁻¹→e⁰ 常值，度数 0），故 H_n(Sⁿ)=ℤ⟨eⁿ⟩、中间维 0。【计算】H₀(Sⁿ)=ℤ、H_n(Sⁿ)=ℤ、其余 0。③【思路】也可用 M–V：Sⁿ=Dⁿ₊∪Dⁿ₋，交 Sⁿ⁻¹，递推得同结果。【结论】H₀(Sⁿ)=ℤ、H_n(Sⁿ)=ℤ、H_k(Sⁿ)=0（k≠0,n）：球面的 n 维洞。",
    2: "①【思路】同伦等价保持同调：X≃Y ⟹ H_n(X)≅H_n(Y)（∀n）。设 f:X→Y、g:Y→X 互为同伦逆（g∘f≃id_X、f∘g≃id_Y）。【推导】由同伦不变性，(g∘f)_*=g_*∘f_*=(id_X)_*=id，同理 f_*∘g_*=id。②【思路】故 f_*:H_n(X)→H_n(Y) 与 g_* 互为逆，是同构。【计算】g_*∘f_*=id_{H_n(X)}，f_*∘g_*=id_{H_n(Y)}。③【思路】因此同调是“同伦不变量”，比同胚更弱。【结论】X≃Y ⟹ H_n(X)≅H_n(Y) ∀n，同调不区分同伦等价的“软”差异。"
  },
  "t12": {
    0: "①【思路】用空间对 (Dⁿ,Sⁿ⁻¹) 的长正合序列算 Sⁿ。先算相对同调 H_k(Dⁿ,Sⁿ⁻¹)：商 Dⁿ/Sⁿ⁻¹=Sⁿ，由切除/相对同调。【计算】H_k(Dⁿ,Sⁿ⁻¹)≅H̃_k(Sⁿ)=ℤ(k=n)、0(k≠n)。②【思路】长正合序列 …→H_k(Sⁿ⁻¹)→H_k(Dⁿ)→H_k(Dⁿ,Sⁿ⁻¹)→H_{k−1}(Sⁿ⁻¹)→…，H_k(Dⁿ)=0（k>0，Dⁿ 可缩）。【计算】k>1 正合段 0→H_k(Dⁿ,Sⁿ⁻¹)→H_{k−1}(Sⁿ⁻¹)→0 给出 H_k(Dⁿ,Sⁿ⁻¹)≅H_{k−1}(Sⁿ⁻¹)。③【思路】结合两步 H_{k−1}(Sⁿ⁻¹)≅H_k(Dⁿ,Sⁿ⁻¹)≅H_k(Sⁿ)（k>1），即球的“悬链递推”。【计算】H_k(Sⁿ)≅H_{k−1}(Sⁿ⁻¹)。【结论】H_k(Sⁿ)=ℤ(k=0,n)、0(其他)，由长正合序列 + 切除递推得出。",
    1: "①【思路】Mayer–Vietoris 序列是“分而治之”计算同调的工具。设 X=Int(U)∪Int(V)，序列 …→H_n(U∩V)→H_n(U)⊕H_n(V)→H_n(X)→H_{n−1}(U∩V)→…。【推导】它把 X 的同调用 U、V、U∩V 的同调表达。②【思路】实例 X=S¹=U∪V（两个开弧，U∩V 两点）。序列 H₁(U∩V)=0→H₁(U)⊕H₁(V)=0→H₁(S¹)→H₀(U∩V)=ℤ²→H₀(U)⊕H₀(V)=ℤ²→H₀(S¹)→0。【计算】正合段 0→H₁(S¹)→ℤ²→ℤ²→H₀(S¹)→0 给出 H₁(S¹)≅ℤ。③【思路】连接同态把“两个交点的差”映成“绕圈”生成元。【结论】M–V 是 van Kampen 的同调版本，从局部信息拼出全局同调。",
    2: "①【思路】相对同调 H_n(X,A) 由 (X,A) 长正合序列从 H_n(A)、H_n(X) 计算：…→H_n(A)→H_n(X)→H_n(X,A)→H_{n−1}(A)→…。【推导】它把 H(X,A) 与 H(X)、H(A) 精确挂钩。②【思路】例：X=D²、A=S¹。因 D² 可缩，H₂(D²)=H₁(D²)=0。序列 0→H₂(D²,S¹)→H₁(S¹)≅ℤ→H₁(D²)=0→H₁(D²,S¹)→H₀(S¹)≅ℤ→H₀(D²)≅ℤ→…。【计算】正合段得 H₂(D²,S¹)≅ℤ，H₁(D²,S¹)=0。③【思路】与 H_k(D²,S¹)≅H̃_k(S²)（商 D²/S¹=S²）一致。【结论】相对同调由长正合序列 + 绝对同调确定，是“商空间同调”的关联版本。"
  },
  "t13": {
    0: "①【思路】Sⁿ 分解为两个半球 U=Dⁿ₊、V=Dⁿ₋（开半球稍扩大），U∩V≃Sⁿ⁻¹。M–V 序列 …→H_k(U∩V)→H_k(U)⊕H_k(V)→H_k(Sⁿ)→H_{k−1}(U∩V)→…。【计算】U、V 可缩 ⟹ H_k(U)=H_k(V)=0（k>0）。②【思路】代入得 0→H_k(Sⁿ)→H_{k−1}(Sⁿ⁻¹)→0（k>1）⟹ H_k(Sⁿ)≅H_{k−1}(Sⁿ⁻¹)。【计算】H_k(Sⁿ)≅H_{k−1}(Sⁿ⁻¹)。③【思路】起始 H₀(Sⁿ)=ℤ、H₀(S⁰)=ℤ²，归纳得。【计算】H_k(Sⁿ)=ℤ(k=0,n)、0(其他)。【结论】M–V 消去半球给出递推 H_k(Sⁿ)≅H_{k−1}(Sⁿ⁻¹)，简洁算出球面同调。",
    1: "①【思路】环面 T² 分解为两个圆柱 U、V（各 ≃S¹），交 U∩V=S¹⊔S¹。M–V 序列 n=2 段：0→H₂(T²)→H₁(S¹⊔S¹)=ℤ²→H₁(U)⊕H₁(V)=ℤ²→H₁(T²)→H₀(S¹⊔S¹)=ℤ²→H₀(U)⊕H₀(V)=ℤ²→H₀(T²)。【计算】关键正合段。②【思路】H₂：0→H₂(T²)→ℤ²→ℤ²（等值映射），故 H₂(T²)=ker≅ℤ。【计算】H₂(T²)≅ℤ。③【思路】H₁：ℤ²→ℤ² 的像与核决定 H₁(T²)，两圆柱的经线/纬线粘合得。【计算】H₁(T²)≅ℤ⊕ℤ（由两独立环生成）。【结论】H₁(T²)=ℤ²、H₂(T²)=ℤ，与 t10 一致，M–V 提供独立算法。",
    2: "①【思路】Klein 瓶 K 分解为两个圆柱，交 U∩V=S¹⊔S¹，但反向粘合使连接同态产生扭转。M–V 序列同例1，区别在 H₀ 层映射反向，H₂(K)=0。【计算】H₂(K)=0（反向粘合 ⟹ 无基本类）。②【思路】H₁ 段：H₁(S¹⊔S¹)=ℤ²→H₁(U)⊕H₁(V)=ℤ² 的映射 (a,b)↦(a+b, a−b)（反向粘合一侧反转），其余正合得 H₁(K)≅ℤ⊕ℤ/2。【计算】H₁(K)≅ℤ⊕ℤ/2（余核含 ℤ/2，因 a+b 与 a−b 差 2b）。③【思路】故 H₁(K) 有一个 ℤ 和一个 ℤ/2 扭转，与环面（纯 ℤ²）不同。【结论】H₁(K)=ℤ⊕ℤ/2、H₂(K)=0，M–V 揭示 Klein 瓶的扭转同调。"
  },
  "t14": {
    0: "①【思路】Sⁿ 的 CW 结构：一个 0 胞腔 e⁰ 与一个 n 胞腔 eⁿ（Dⁿ 沿边界坍缩为一点得 Sⁿ=Dⁿ/∂Dⁿ）。【计算】Sⁿ=e⁰∪eⁿ，骨架 X⁰=…=Xⁿ⁻¹={点}。②【思路】胞腔链复形 C_n=ℤ⟨eⁿ⟩、C₀=ℤ⟨e⁰⟩、中间 0。边界 d_n(eⁿ) 由粘贴映射 φ:Sⁿ⁻¹→Xⁿ⁻¹={点}（常值）诱导，度数 0。【计算】d_n(eⁿ)=0。③【思路】故 H_n(Sⁿ)=ℤ、H₀=ℤ、其余 0。【结论】Sⁿ 的 CW 结构（e⁰∪eⁿ）使同调一望即知：边界平凡 ⟹ H_n≅ℤ。",
    1: "①【思路】RPⁿ 的 CW 结构：每维 k=0,…,n 恰一个胞腔 e^k，粘贴映射 φ:S^{k−1}→RP^{k−1} 是二重覆叠投射（粘合对径点）。【计算】RP^k=RP^{k−1}∪e^k。②【思路】边界映射 d_k(e^k) 的度数：合成 S^{k−1}→RP^{k−1}→S^{k−1}（塌缩 RP^{k−2} 到点）是对径映射，度数 1+(−1)^k。【计算】d_k(e^k)=(1+(−1)^k)e^{k−1}，即 d_k=2（k 偶）、d_k=0（k 奇）。③【思路】据此算 H：中间维（0<k<n）得 ℤ/2（d_{k+1} 与 d_k 交替给出 2 倍关系）；H_n=ℤ（n 奇）或 0（n 偶）。【计算】H₁(RPⁿ)=ℤ/2（n≥2）。【结论】RPⁿ 每维一胞腔，边界度数交替 0/2，产生大量 ℤ/2 扭转。",
    2: "①【思路】CPⁿ 的 CW 结构：只有偶数维胞腔 e⁰,e²,e⁴,…,e^{2n}（每偶数维一个）。【计算】CPⁿ=e⁰∪e²∪…∪e^{2n}。②【思路】边界映射 d：奇维无胞腔 ⟹ 所有 d_k=0（无相邻维胞腔可映射）。【计算】d_k=0 ∀k。③【思路】故 H_{2k}(CPⁿ)=ℤ（k=0,…,n）、奇维 H=0。【计算】H_{2k}(CPⁿ)=ℤ，H_{2k+1}(CPⁿ)=0。【结论】CPⁿ 只有偶数维同调 ℤ，边界全平凡，是最易算的胞腔同调之一。"
  },
  "t15": {
    0: "①【思路】RP² 的胞腔结构 e⁰∪e¹∪e²，粘贴映射 φ:S¹→S¹ 是 z↦z²（对径粘合 ⟹ 度数 2）。【计算】d₂(e²)=deg(φ)·e¹=2e¹。②【思路】d₁(e¹)=0（两端点重合到 e⁰，边界 v₀−v₀=0）。链复形 0→ℤ→(×2)→ℤ→0→ℤ→0。【计算】d₂ 乘 2，d₁=0。③【思路】算同调：H₂=ker d₂=0（×2 是单射）；H₁=ker d₁/im d₂=ℤ/2ℤ；H₀=ℤ。【计算】H₀=ℤ、H₁=ℤ/2、H₂=0。【结论】RP² 的胞腔同调 H₁=ℤ/2 直接由粘贴映射度数 2 给出。",
    1: "①【思路】CPⁿ 胞腔结构 e⁰∪e²∪…∪e^{2n}，只有偶数维，故所有边界 d=0。【计算】d_{2k}=0、d_{2k+1}=0。②【思路】链复形在偶数维是 ℤ、奇维是 0，无邻接边界。【计算】C_{2k}=ℤ、C_{2k+1}=0。③【思路】同调即链群。【计算】H_{2k}=ℤ（k=0,…,n）、H_{2k+1}=0。【结论】H_{2k}(CPⁿ)=ℤ、奇维 0，是所有胞腔同调里最直白的。",
    2: "①【思路】透镜空间 L(p,q)（p≥2，gcd(p,q)=1）有胞腔 e⁰,e¹,e²,e³。粘贴映射：e² 沿 S¹ 的 z↦z^p（度数 p）粘合，e³ 的粘贴使 d₃=0。【计算】d₂(e²)=p·e¹，d₃(e³)=0。②【思路】链复形：d₁=0、d₂=×p、d₃=0。故 H₃=ℤ（ker d₃ 无上边界）；H₂=ker d₂=0（×p 单射）且 im d₃=0；H₁=ℤ/im(×p)=ℤ/pℤ。【计算】H₀=ℤ、H₁=ℤ/p、H₂=0、H₃=ℤ。③【思路】p 越大扭转越大；L(2,1)=RP³ 时 H₁=ℤ/2、H₃=ℤ。【结论】H(L(p,q))=(ℤ, ℤ/p, 0, ℤ)，透镜空间由 H₁ 的 p 区分。"
  },
  "t16": {
    0: "①【思路】Lefschetz 数 L(f)=Σ_n(−1)^n tr(f_*:H_n(X;ℚ)→H_n(X;ℚ))，若 L(f)≠0 则 f 有不动点。【计算】对自映射 f:X→X 按此公式计算。②【思路】可缩空间 X：H₀=ℚ、H_n=0（n>0），故 L(f)=tr(f_*:H₀→H₀)。而 f 把唯一连通分支映到自身 ⟹ f_*=id ⟹ tr=1。【计算】L(f)=1≠0 ⟹ f 有不动点。③【思路】这就是 Brouwer 不动点定理（取 X=Dⁿ）的推广。【结论】Lefschetz 数非零保证不动点存在；可缩空间 L=1 恒成立，必有无动点。",
    1: "①【思路】Borsuk–Ulam：连续 f:Sⁿ→ℝⁿ 存在 x 使 f(x)=f(−x)。反证设 f(x)≠f(−x) 恒真，定义 g(x)=(f(x)−f(−x))/|f(x)−f(−x)|:Sⁿ→Sⁿ⁻¹。【计算】g 连续且 g(−x)=−g(x)（奇映射）。②【思路】奇映射 g 下降为 ḡ:RPⁿ→RPⁿ⁻¹（因 g 在对径对上取值一致模对径）。考虑 ℤ/2 上同调环：H*(RPⁿ;ℤ/2)≅ℤ/2[α]/(α^{n+1})，含非零的 αⁿ；而 Hⁿ(RPⁿ⁻¹;ℤ/2)=0。【推导】ḡ*:Hⁿ(RPⁿ⁻¹;ℤ/2)→Hⁿ(RPⁿ;ℤ/2) 定义域为 0，但环结构要求 αⁿ=(ḡ*α)ⁿ 非零矛盾。③【思路】更直接：Borsuk–Ulam 的经典证明即此环结构矛盾（αⁿ≠0 而像空间 αⁿ=0）。【结论】Borsuk–Ulam 得证；推论：地球某时刻有对径两点温度气压完全相同。",
    2: "①【思路】向量场指标定理（Poincaré–Hopf）：紧流形 M 上孤立奇点向量场的指标和 = χ(M)。指标 ind_p(v)=deg(v/|v|:Sⁿ⁻¹→Sⁿ⁻¹)（绕奇点小球面）。【计算】ind_p(v)=deg(v/|v|)。②【思路】用 Lefschetz：向量场的小流 φ_ε:M→M 的不动点即 v 的奇点，且 φ_ε≃id_M ⟹ L(φ_ε)=L(id_M)=χ(M)。【计算】L(φ_ε)=χ(M)。③【思路】另一方面 L(φ_ε)=Σ_{奇点} ind_p(v)（局部指标求和=全局 Lefschetz 数）。故 Σ ind_p(v)=χ(M)。【结论】向量场奇点指标之和等于欧拉示性数，与向量场无关；χ(S²)=2 ⟹ S² 无处处非零向量场（毛球定理）。"
  },
  "t17": {
    0: "①【思路】Sⁿ 的上同调用万有系数定理或直接对偶：H_k(Sⁿ)=ℤ(k=0,n)、0，无扭转 ⟹ H^k=Hom(H_k,ℤ)。【计算】H⁰(Sⁿ)=Hom(ℤ,ℤ)=ℤ、Hⁿ(Sⁿ)=ℤ、其余 0。②【思路】验证：无扭转发 H^k(Sⁿ)≅H_k(Sⁿ)。【计算】H⁰≅ℤ、Hⁿ≅ℤ。③【思路】区别在于同调无环结构、上同调有 Cup 积（Sⁿ 的 H* 集中两维，高维积为零）。【结论】H⁰(Sⁿ)=ℤ、Hⁿ(Sⁿ)=ℤ、其余 0，与同调同构。",
    1: "①【思路】T² 上同调：H₁(T²)=ℤ²、H₀=H₂=ℤ，无扭转 ⟹ H^k≅Hom(H_k,ℤ)。【计算】H⁰=ℤ、H¹=Hom(ℤ²,ℤ)=ℤ²、H²=ℤ。②【思路】Cup 积：取 H¹ 的生成元 α（对偶赤道）、β（对偶经线），α⌣β 是 H² 的生成元。【计算】α⌣β 生成 H²，α²=β²=0（分次交换 α⌣α=−α⌣α）。③【思路】故 H*(T²)≅ℤ[α,β]/(α²,β²)（外代数）。【结论】H⁰=ℤ、H¹=ℤ²、H²=ℤ，环为外代数，Cup 积把两 1 维类乘成 2 维类。",
    2: "①【思路】RPⁿ 的 ℤ/2 上同调环 H*(RPⁿ;ℤ/2)≅ℤ/2[α]/(α^{n+1})，|α|=1。【计算】生成元 α∈H¹(RPⁿ;ℤ/2)≅ℤ/2。②【思路】Cup 积 α^k 生成 H^k(RPⁿ;ℤ/2)≅ℤ/2（k=0,…,n），且 α^{n+1}=0。【计算】H^k=ℤ/2（0≤k≤n）。③【思路】对比 ℤ 系数：H*(RPⁿ;ℤ) 含扭转，而 ℤ/2 系数下处处 ℤ/2 且是多项式环商。【结论】H*(RPⁿ;ℤ/2)≅ℤ/2[α]/(α^{n+1})，是上同调环的经典截断多项式例子。"
  },
  "t18": {
    0: "①【思路】CPⁿ 上同调环 H*(CPⁿ;ℤ)≅ℤ[α]/(α^{n+1})，|α|=2。因 H^{2k}(CPⁿ)=ℤ、奇维 0，取 α 为 H² 生成元（超平面类）。【计算】H²(CPⁿ)=ℤ⟨α⟩、H⁴=ℤ⟨α²⟩、…、H^{2n}=ℤ⟨αⁿ⟩。②【思路】Cup 积 α^k 生成 H^{2k}（子流形相交），α^{n+1}=0（H^{2n+2}=0）。【计算】α^k⌣α=α^{k+1}（k<n）且 α^{n+1}=0。③【思路】故是截断多项式环。【结论】H*(CPⁿ;ℤ)≅ℤ[α]/(α^{n+1})，|α|=2，与 RPⁿ 的 ℤ/2 环类似但次数加倍。",
    1: "①【思路】S^p×S^q 的上同调环由 Künneth：H*(S^p×S^q)≅H*(S^p)⊗H*(S^q)。H*(S^p)=ℤ[α]/(α²)、H*(S^q)=ℤ[β]/(β²)。【计算】H*≅ℤ[α,β]/(α²,β²)。②【思路】生成元 α∈H^p（|α|=p）、β∈H^q（|β|=q），Cup 积 α⌣β 生成 H^{p+q}，α²=β²=0。【计算】H^{p+q}≅ℤ⟨α⌣β⟩。③【思路】分次交换性：p、q 皆奇时 α⌣β=−β⌣α（奇维换号）。【结论】H*(S^p×S^q)≅ℤ[α,β]/(α²,β²)，|α|=p、|β|=q。",
    2: "①【思路】CP² 与 S²∨S⁴ 有相同同调（H⁰=H²=H⁴=ℤ，其余 0），但上同调环不同。CP²：H*≅ℤ[α]/(α³),|α|=2，故 α⌣α=β（H⁴ 生成元，非零）。【计算】α²=β≠0 in H⁴(CP²)。②【思路】S²∨S⁴：H² 来自 S²、H⁴ 来自 S⁴，二者在并点处“不相交”，Cup 积时 H²⌣H²=0。【计算】α²=0 in H⁴(S²∨S⁴)。③【思路】故两空间上同调环不同构 ⟹ 不同伦等价；展示 Cup 积比单纯同调更精细。【结论】CP² 的 α²≠0 而 S²∨S⁴ 的 α²=0，Cup 积区分了同调同构但不同伦的空间。"
  },
  "t19": {
    0: "①【思路】RP² 的 ℤ 系数同调 H₀=ℤ、H₁=ℤ/2、H₂=0。用同调万有系数定理算 ℤ/2 系数：H_n(X;ℤ/2)≅H_n⊗ℤ/2 ⊕ Tor(H_{n−1},ℤ/2)。【计算】H₀⊗ℤ/2=ℤ/2、H₁⊗ℤ/2=ℤ/2、H₂=0。②【思路】Tor 项：Tor(H₀,ℤ/2)=0、Tor(H₁,ℤ/2)=Tor(ℤ/2,ℤ/2)=ℤ/2。【计算】H₂(RP²;ℤ/2)=0⊕Tor(ℤ/2,ℤ/2)=ℤ/2。③【思路】汇总各维。【计算】H₀(RP²;ℤ/2)=ℤ/2、H₁=ℤ/2、H₂=ℤ/2。【结论】ℤ/2 系数下 RP² 各维同调都是 ℤ/2，隐藏了 ℤ 系数的扭转细节。",
    1: "①【思路】有理系数同调 H_n(X;ℚ)≅H_n(X)⊗ℚ（ℚ 无扭转 ⟹ Tor(·,ℚ)=0）。【计算】万有系数定理 Tor 项为 0，只剩 ⊗ℚ 项。②【思路】ℤ/2⊗ℚ=0（扭转群与 ℚ 张量为 0），只保留自由部分。设 H_n(X)=ℤ^r⊕(扭转)，则 H_n(X;ℚ)=ℚ^r。【计算】rank H_n(X;ℚ)=r=rank H_n(X)。③【思路】故有理同调是“无扭转版”，完全由 Betti 数决定。【结论】H_n(X;ℚ)≅ℚ^{b_n}，有理同调只保留自由部分。",
    2: "①【思路】同调与上同调的区别由万有系数定理体现：Hⁿ(X;ℤ)≅Hom(H_n,ℤ)⊕Ext(H_{n−1},ℤ)。对 RP²：H₁=ℤ/2、H₂=0。【计算】H¹(RP²;ℤ)=Hom(ℤ/2,ℤ)=0、H²(RP²;ℤ)=Hom(0,ℤ)⊕Ext(ℤ/2,ℤ)=ℤ/2。②【思路】而 H₁(RP²)=ℤ/2、H₂=0。故 H¹=0 但 H₁=ℤ/2；H²=ℤ/2 但 H₂=0。【计算】出现“错位”：Ext(ℤ/2,ℤ)=ℤ/2 落在 H²。③【思路】原因：Ext(H_{n−1},ℤ) 把 n−1 维扭转“搬运”到 n 维上同调。【结论】上同调与同调在扭转处“错位一维”，H¹(RP²)=0≠H₁=ℤ/2 是经典例子。"
  },
  "t20": {
    0: "①【思路】T²=S¹×S¹ 的同调用 Künneth：H_n(X×Y)≅⊕_{i+j=n}H_i(X)⊗H_j(Y)⊕⊕Tor 项。H(S¹)=(ℤ,ℤ)。【计算】H₁=H₁⊗H₀⊕H₀⊗H₁=ℤ⊗ℤ⊕ℤ⊗ℤ=ℤ⊕ℤ。②【思路】H₂=H₁⊗H₁=ℤ⊗ℤ=ℤ；H₀=H₀⊗H₀=ℤ。Tor 项消失（H(S¹) 无扭转）。【计算】H₀=ℤ、H₁=ℤ²、H₂=ℤ。③【思路】每个 S¹ 各贡献一个 H₁ 生成元，二者张量积得 H₂。【结论】H(T²)=(ℤ,ℤ²,ℤ)，Künneth 直观地“相乘”因子同调。",
    1: "①【思路】S^p×S^q 上同调环由 Künneth：H^n(S^p×S^q)≅⊕_{i+j=n}H^i(S^p)⊗H^j(S^q)。【计算】H^p=ℤ、H^q=ℤ、H^{p+q}=ℤ、H⁰=ℤ。②【思路】环结构分次张量积：H*(S^p)⊗H*(S^q)=ℤ[α]/(α²)⊗ℤ[β]/(β²)。乘法 (α⊗1)⌣(1⊗β)=α⊗β 生成 H^{p+q}。【计算】α⌣β 非零、α²=β²=0。③【思路】若 p=q（如 S²×S²），|α|=|β|=2 ⟹ αβ=βα（偶维不换号）。【结论】H*(S^p×S^q)≅ℤ[α,β]/(α²,β²)，|α|=p、|β|=q。",
    2: "①【思路】RP²×S¹ 的同调用 Künneth（ℤ 系数，注意 Tor）。H(RP²)=(ℤ,ℤ/2,0)、H(S¹)=(ℤ,ℤ)。【计算】H₀=ℤ。②【思路】逐维：H₁=H₁(RP²)⊗H₀(S¹)⊕H₀(RP²)⊗H₁(S¹)=ℤ/2⊗ℤ⊕ℤ⊗ℤ=ℤ/2⊕ℤ。【计算】H₁≅ℤ⊕ℤ/2。③【思路】H₂=H₂(RP²)⊗H₀⊕H₁(RP²)⊗H₁(S¹)⊕Tor(H₀,H₁)=0⊕(ℤ/2⊗ℤ)⊕0=ℤ/2；H₃=Tor(H₁(RP²),H₁(S¹))=Tor(ℤ/2,ℤ)=0。【计算】H₂≅ℤ/2、H₃=0。【结论】H(RP²×S¹)=(ℤ, ℤ⊕ℤ/2, ℤ/2, 0)，Tor 项在 H₁、H₂ 提供扭转修正。"
  },
  "t21": {
    0: "①【思路】Poincaré 对偶：紧致可定向 n 流形 M 上 H^k(M)≅H_{n−k}(M)。对 Sⁿ：H₀=H_n=ℤ、其余 0。【计算】H⁰(Sⁿ)≅H_n(Sⁿ)=ℤ、Hⁿ(Sⁿ)≅H₀(Sⁿ)=ℤ。②【思路】其余维：H^k=0 ⟺ H_{n−k}=0（k≠0,n）。【计算】对偶处处成立。③【思路】体现为基本类 [Sⁿ]∈H_n 与 Cap 积给出同构。【结论】H⁰≅H_n≅ℤ、Hⁿ≅H₀≅ℤ，Poincaré 对偶把 0 维与 n 维对偶。",
    1: "①【思路】CPⁿ 上 Poincaré 对偶（维数 2n，可定向）：H^{2k}(CPⁿ)≅H_{2n−2k}(CPⁿ)。因 H^{2k}=ℤ、H_{2n−2k}=ℤ。【计算】H^{2k}(CPⁿ)≅H_{2n−2k}(CPⁿ)≅ℤ（k=0,…,n）。②【思路】Cup 积 α^k⌣α^{n−k}=αⁿ 对应子流形 CP^k 与 CP^{n−k} 的横截交（一点），生成基本类。【计算】α^k⌣α^{n−k}=αⁿ=[pt] 的对偶。③【思路】验证维数：|α^k|=2k、|α^{n−k}|=2n−2k，和为 2n 恰当。【结论】Poincaré 对偶把 H^{2k} 与 H_{2n−2k} 对应，Cup 积体现子流形的相交数。",
    2: "①【思路】不可定向流形无 ℤ 系数 Poincaré 对偶。RP²（维 2，不可定向）：H⁰=ℤ 但 H₂=0，故 H⁰≇H₂，对偶破坏。【计算】H⁰(RP²)=ℤ ≠ H₂(RP²)=0。②【思路】改用 ℤ/2 系数（方向消失，对偶恢复）：H^k(RP²;ℤ/2)≅H_{2−k}(RP²;ℤ/2)=ℤ/2。【计算】H⁰=H¹=H²=ℤ/2，逐维对偶。③【思路】原因：不可定向 ⟹ 无整系数基本类；模 2 时“方向”无关，基本类 [RP²]∈H₂(RP²;ℤ/2) 存在。【结论】不可定向流形对偶需 mod 2 系数：H^k(RP²;ℤ/2)≅H_{2−k}(RP²;ℤ/2)。"
  },
  "t22": {
    0: "①【思路】CPⁿ 的切丛 Chern 类：c(TCPⁿ)=(1+α)^{n+1}，α∈H²(CPⁿ;ℤ) 是超平面类、|α|=2。公式来自 Euler 序列 0→𝒪→𝒪(1)^{⊕(n+1)}→TCPⁿ→0 与乘法性。【计算】c(𝒪(1))=1+α ⟹ c(𝒪(1)^{⊕(n+1)})=(1+α)^{n+1}。②【思路】由短正合列的乘法性 c(TCPⁿ)·c(𝒪)=c(𝒪(1)^{⊕(n+1)}) 且 c(𝒪)=1。【计算】c(TCPⁿ)=(1+α)^{n+1}。③【思路】最高项 c_n=(n+1)αⁿ，积分/配对得 Chern 数。【结论】c(TCPⁿ)=(1+α)^{n+1}，Chern 类是复向量丛到上同调的示性类。",
    1: "①【思路】RPⁿ 的全 Stiefel–Whitney 类 w(RPⁿ)=(1+α)^{n+1}∈H*(RPⁿ;ℤ/2)，α∈H¹。公式来自重言线丛 γ¹ 与 Whitney 和 γ⊕γ^⊥=ℝ^{n+1}（平凡）。【计算】w(γ)=1+α（α=w₁(γ)），w(ℝ^{n+1})=1。②【思路】由 Whitney 乘积公式 w(γ)w(γ^⊥)=1 ⟹ w(γ^⊥)=(1+α)^{−1}，而 TRPⁿ 的 w 类可算出 (1+α)^{n+1}（mod 2 中 (1+α)^{−1}=(1+α)^{-1} 配合）。【计算】w(RPⁿ)=(1+α)^{n+1}（mod 2）。③【思路】w₁=第一项系数=(n+1)α mod 2，n 偶时 w₁=α≠0 ⟹ 不可定向；n 奇时 w₁=0 ⟹ 可定向。【计算】w₁(RPⁿ)=α（n 偶）、0（n 奇）。【结论】w(RPⁿ)=(1+α)^{n+1}，w₁≠0 刻画不可定向。",
    2: "①【思路】de Rham 定理：H^k_{dR}(M)≅H^k(M;ℝ)。核心映射 I:ω↦(σ↦∫_σω)（积分配对）。Stokes 定理保证 I(dω)=δI(ω)。【计算】I(dω)(σ)=∫_σ dω=∫_{∂σ}ω=δI(ω)(σ)。②【思路】楔积 ↔ Cup 积：I(ω∧η)=I(ω)⌣I(η)（Fubini 定理把积分在单纯形前后面分解）。【计算】楔积与 Cup 积在 I 下对应。③【思路】故 de Rham 上同调（分析）与奇异上同调（拓扑）作为环同构。【结论】H^k_{dR}(M)≅H^k(M;ℝ)，把微分形式与上同调连接，楔积对应 Cup 积。"
  },
  "t23": {
    0: "①【思路】π_n(Sⁿ)≅ℤ。Hurewicz 定理：Sⁿ 是 (n−1) 连通，最低非零同调 H_n(Sⁿ)=ℤ，故 π_n(Sⁿ)≅H_n(Sⁿ)=ℤ。【计算】π_n(Sⁿ)≅ℤ。②【思路】同构由 Hurewicz 同态 h:[f]↦f_*([Sⁿ]) 给出。恒等映射 id 对应基本类 [Sⁿ]，故 h(id)=[Sⁿ] 是生成元。【计算】h(id_{Sⁿ})=[Sⁿ]（生成元）。③【思路】一般 [f] 对应 f_*([Sⁿ])=deg(f)·[Sⁿ]，故 h 即度数。【计算】π_n(Sⁿ)∋[f]↦deg(f)∈ℤ。【结论】π_n(Sⁿ)≅ℤ，同构由映射度给出，恒等映射对应 1。",
    1: "①【思路】π₃(S²)≅ℤ 由 Hopf 纤维化给出。Hopf 纤维化 η:S³→S² 定义为 η(z₁,z₂)=z₁/z₂（射影到 ℂP¹=S²）。【计算】纤维 η⁻¹(pt)≅S¹。②【思路】Hopf 不变量 H(η)=1。取 S² 上两点 p≠q，其逆像 η⁻¹(p)、η⁻¹(q) 是 S³ 中两个互相链结的圆（Hopf 链环），链结数 1。【计算】H(η)=链结数=1。③【思路】Hopf 不变量同态 H:π₃(S²)→ℤ 把 η 映为 1 且满射，故 π₃(S²)≅ℤ，由 η 生成。【结论】π₃(S²)≅ℤ，生成元是 Hopf 纤维化，Hopf 不变量=1。",
    2: "①【思路】π_{n+1}(Sⁿ)≅ℤ/2（n≥3）由 Freudenthal 悬挂定理（稳定范围）。对 π_{n+1}(Sⁿ)，稳定范围 k=1≤n−1（n≥2 成立），故悬挂同构。【计算】Σ 是稳定同构。②【思路】故 π_{n+1}(Sⁿ)≅π_{n+2}(Sⁿ⁺¹)≅…≅π₁^S（稳定同伦群），而 π₁^S=ℤ/2（n≥3 后稳定，π₄(S³)=ℤ/2）。【计算】π_{n+1}(Sⁿ)≅π₁^S=ℤ/2。③【思路】生成元是 Hopf 元的悬挂幂。【结论】π_{n+1}(Sⁿ)≅ℤ/2（n≥3），是球面同伦群的第一个稳定有限结果。"
  },
  "t24": {
    0: "①【思路】Hopf 纤维化 S¹→S³→S² 的同伦群长正合序列 …→π_n(S¹)→π_n(S³)→π_n(S²)→π_{n−1}(S¹)→…。【计算】π_k(S¹)=ℤ（k=1）、0（k≥2）。②【思路】n≥3 时 π_n(S¹)=π_{n−1}(S¹)=0，故正合段 0→π_n(S³)→π_n(S²)→0 ⟹ π_n(S³)≅π_n(S²)。【计算】π_n(S³)≅π_n(S²)（n≥3）。③【思路】特别 n=3：π₃(S³)=ℤ ⟹ π₃(S²)=ℤ。【结论】Hopf 纤维化使 π_n(S³)≅π_n(S²)(n≥3)，长正合序列由纤维 S¹ 的高维平凡性给出同构。",
    1: "①【思路】道路空间纤维化：PX={γ:[0,1]→X, γ(0)=x₀} 到 X 的映射 ev₁:γ↦γ(1) 是纤维化，纤维是环路空间 ΩX={γ:γ(0)=γ(1)=x₀}。【计算】ev₁⁻¹(x₀)=ΩX。②【思路】同伦提升：PX 中的点就是道路，提升是同伦的逐点重参数化。由长正合序列 …→π_n(ΩX)→π_n(PX)→π_n(X)→π_{n−1}(ΩX)→…。【推导】PX 可缩（收缩到常道路），π_n(PX)=0。③【思路】正合 ⟹ π_n(X)≅π_{n−1}(ΩX)，即 π_n(ΩX)≅π_{n+1}(X)。【计算】π_n(ΩX)≅π_{n+1}(X)。【结论】道路空间纤维化给出“环路空间与同伦群的平移”关系。",
    2: "①【思路】覆叠空间 p:X̃→X 是离散纤维的纤维化。纤维 F≅离散集，π_n(F)=0（n≥1）。长正合序列 …→π_n(F)→π_n(X̃)→π_n(X)→π_{n−1}(F)→…。【计算】π_n(F)=0（n≥1）⟹ π_n(X̃)≅π_n(X)（n≥2）。②【思路】n=2：0→π₂(X̃)→π₂(X)→π₁(F)=0 ⟹ π₂(X̃)≅π₂(X)。【计算】π₂(X̃)≅π₂(X)。③【思路】n=1 特殊：π₁(X̃) 单射到 π₁(X)（提升唯一性），像为指数子群。【结论】覆叠 ⟹ π_n(X̃)≅π_n(X)(n≥2)，高维同伦群在覆叠下不变，只有 π₁ 改变。"
  },
  "t25": {
    0: "①【思路】Whitehead 定理（同调版本）：单连通 CW 复形 X 若所有同调 H_n(X)=0（n>0），则 X 可缩（同伦等价于点）。【推导】单连通 + 无同调 ⟹ 由 Hurewicz 归纳，所有同伦群 π_n(X)=0。②【思路】再由 Whitehead 定理（弱同伦等价 ⟹ 同伦等价）：含入 {x₀}→X 诱导所有同伦群同构（都平凡），故是弱同伦等价 ⟹ 同伦等价。【计算】π_n(X)=0 ∀n ⟹ X≃pt。③【思路】这推广了“单连通 + 零同调 ⟹ 可缩”。【结论】连通单连通 CW 复形可缩 ⟺ 所有同调平凡，是 Whitehead 定理的典型应用。",
    1: "①【思路】Sⁿ 与 Sᵐ 同伦等价 ⟹ n=m。反证设 Sⁿ≃Sᵐ 且 n<m，则同伦等价诱导 π_n 同构：π_n(Sⁿ)≅π_n(Sᵐ)。【计算】π_n(Sⁿ)=ℤ，而 n<m ⟹ π_n(Sᵐ)=0（Sᵐ 是 (m−1) 连通）。②【思路】ℤ≇0，矛盾；n>m 对称矛盾。【计算】故只能 n=m。③【思路】结论。【结论】Sⁿ≃Sᵐ ⟹ n=m，球面之间同伦等价当且仅当维数相等。",
    2: "①【思路】CW 逼近定理：任何拓扑空间 X 存在 CW 复形 Z 与弱同伦等价 Z→X。归纳构造：对每个 n 粘贴 n 胞腔消 π_n 的“多余”并补“缺失”。【推导】取 Z⁰ 为 X 的基点集（离散），逐维粘贴胞腔。②【思路】对 π_n 的每个生成元粘 n 胞腔（使诱导 π_n 满），再对 kernel 粘 (n+1) 胞腔（消 kernel）。取极限 Z=colim Zⁿ。【计算】由此 Z→X 诱导所有 π_n 同构（弱同伦等价）。③【思路】由 Whitehead 定理，CW 复形间弱同伦等价是同伦等价，故逼近在同伦范畴唯一。【结论】任何空间弱同伦等价于 CW 复形，同伦论可归于 CW 范畴。"
  },
  "t26": {
    0: "①【思路】Sⁿ 是 (n−1) 连通，Hurewicz 定理：h:π_n(Sⁿ)→H_n(Sⁿ) 同构，h([f])=f_*([Sⁿ])。【计算】h(id)=[Sⁿ] 是 H_n(Sⁿ)=ℤ 的生成元。②【思路】一般 [f]↦deg(f)[Sⁿ]，故 h 是同构 π_n(Sⁿ)≅ℤ→H_n(Sⁿ)≅ℤ。【计算】h 同构。③【思路】这印证 Hurewicz：最低非零同伦群 ≅ 最低非零同调。【结论】h:π_n(Sⁿ)→H_n(Sⁿ) 是度数同构 ≅ℤ，Sⁿ 的经典 Hurewicz 例子。",
    1: "①【思路】T² 道路连通，π₁=ℤ×ℤ 交换。Hurewicz n=1 给出交换化：H₁(T²)≅π₁(T²)^{ab}。【计算】π₁(T²)=ℤ×ℤ 本身交换 ⟹ π₁^{ab}=ℤ×ℤ。②【思路】故 h:π₁(T²)→H₁(T²) 是同构，H₁(T²)=ℤ×ℤ。【计算】h([赤道])=[赤道]，h([经线])=[经线] 生成 ℤ²。③【思路】n=1 时 Hurewicz 是“π₁ 的交换化”，因 π₁ 已交换所以是直接同构。【结论】H₁(T²)≅π₁(T²)≅ℤ×ℤ，Hurewicz 同态是同构。",
    2: "①【思路】8 字形 X=S¹∨S¹ 的 π₁=F₂=⟨a,b⟩（非交换）。Hurewicz n=1：h:π₁(X)→H₁(X) 是交换化，即 H₁(X)≅π₁(X)/[π₁,π₁]。【计算】F₂^{ab}=ℤ⊕ℤ。②【思路】故 H₁(X)=ℤ²（a、b 的像）是自由阿贝尔群，而 π₁=F₂ 非交换。【计算】H₁(S¹∨S¹)=ℤ²，π₁=F₂。③【思路】差异由换位子群引起：π₁ 中 ab≠ba，但 H₁ 中 [a,b]=0 被消去。【结论】Hurewicz n=1 把非交换 π₁ 交换化为 H₁=ℤ²，展示 n=1 时同调丢失换位子信息。"
  },
  "t27": {
    0: "①【思路】π₃(S²)≅ℤ 用 Hopf 纤维化 S¹→S³→S² 的长正合序列：…→π₃(S¹)→π₃(S³)→π₃(S²)→π₂(S¹)→…。【计算】π₃(S¹)=0、π₂(S¹)=0，正合段 0→π₃(S³)→π₃(S²)→0。②【思路】故 π₃(S²)≅π₃(S³)。已知 π₃(S³)≅ℤ（π_n(Sⁿ)≅ℤ）。【计算】π₃(S²)≅π₃(S³)=ℤ。③【思路】生成元：连接同态把 [id_{S³}]∈π₃(S³) 映到 Hopf 纤维化 [η]∈π₃(S²)。【结论】π₃(S²)≅ℤ，由 Hopf 纤维化 η 生成。",
    1: "①【思路】π₄(S²)≅ℤ/2 用纤维化 ΩS²→PS²→S²。由道路空间纤维化 π_n(ΩS²)≅π_{n+1}(S²)。【计算】π₄(S²)≅π₃(ΩS²)。②【思路】ΩS² 的同调已知（H_*(ΩS²) 在偶数维 =ℤ 交替），由 Serre 谱序列算出 π₄(S²)≅ℤ/2，生成元是 Hopf 元的悬挂 η∘Ση（2 阶元）。【计算】π₄(S²)=ℤ/2，生成元 η²=η∘Ση。③【思路】这是第一个“非平凡且含挠”的球面高阶同伦群，展示稳定前的不稳定性。【结论】π₄(S²)≅ℤ/2，与稳定群 π_{n+2}(Sⁿ)=ℤ/2（n≥2）呼应。",
    2: "①【思路】稳定同伦群 π_k^S=colim_n π_{n+k}(Sⁿ)（悬挂同态的正向极限）。Freudenthal 悬挂定理保证极限在 n 充分大时稳定。【推导】Σ:π_{n+k}(Sⁿ)→π_{n+k+1}(Sⁿ⁺¹) 在 k≤n−1 同构。②【思路】k=1：π_{n+1}(Sⁿ) 对 n≥2 稳定（1≤n−1），故 π₁^S=π_{n+1}(Sⁿ)=ℤ/2（n≥3）。【计算】π₁^S≅ℤ/2。③【思路】生成元是 Hopf 元的悬挂类 η∈π₁^S。【结论】π₁^S≅ℤ/2，由 π_{n+1}(Sⁿ)=ℤ/2(n≥3) 稳定，是 Freudenthal 定理的经典结果。"
  }
};
