// ============================================================
// 黎曼几何补充测验题库（大题 + 选择题）
// 基于 John M. Lee, Introduction to Riemannian Manifolds, 2nd ed.
// 每章 5 道大题（proof/computation）+ 5 道选择题，共 100 题
// 格式：module.exports = [ ... ]
// 生成日期: 2026-08-28
// ============================================================

module.exports = [

// ======================== Ch1 (10题) ========================
// 什么是曲率？

  { type: "computation", q: "设圆柱螺旋线 γ(t)=(a cos t, a sin t, b t)，其中 a>0, b≠0。求其曲率 κ 与挠率 τ，并用 a,b 表示。", answer: "①求 γ′=(−a sin t,a cos t,b)，|γ′|=√(a²+b²)。②γ″=(−a cos t,−a sin t,0)，γ′×γ″=(ab sin t,−ab cos t,a²)，|γ′×γ″|=a√(a²+b²)。③故 κ=|γ′×γ″|/|γ′|³=a/(a²+b²)。④γ‴=(a sin t,−a cos t,0)，混合积 (γ′,γ″,γ‴)=a²b，故 τ=(γ′,γ″,γ‴)/|γ′×γ″|²=b/(a²+b²)。⑤两者均为常数，说明螺旋线是最简单的等曲率等挠率空间曲线。", difficulty: "hard", chapter: "ch1" },

  { type: "computation", q: "求平面椭圆 γ(t)=(a cos t, b sin t)（a,b>0）在一般参数 t 处的曲率 κ(t)，并求顶点 t=0 与 t=π/2 处的曲率值。", answer: "①γ′=(−a sin t,b cos t)，γ″=(−a cos t,−b sin t)。②平面曲线曲率 κ=|x′y″−y′x″|/(x′²+y′²)^(3/2)。③此处 x′y″−y′x″=(−a sin t)(−b sin t)−(b cos t)(−a cos t)=ab(sin²t+cos²t)=ab。④|γ′|²=a²sin²t+b²cos²t，故 κ(t)=ab/(a²sin²t+b²cos²t)^(3/2)。⑤t=0 时 κ=b/a²；t=π/2 时 κ=a/b²。", difficulty: "medium", chapter: "ch1" },

  { type: "proof", q: "证明：若单位速率平面曲线 γ(s) 的曲率 κ(s)≡κ₀>0 为常数，则 γ 是一段半径为 1/κ₀ 的圆弧。", answer: "①取 Frenet 标架 T=γ′、N，Frenet 方程 T′=κ₀N，N′=−κ₀T。②定义 c(s)=γ(s)+(1/κ₀)N(s)。③求导 c′=T+(1/κ₀)N′=T+(1/κ₀)(−κ₀T)=0。④故 c(s) 为常点，且 |γ(s)−c|=(1/κ₀)|N|=1/κ₀。⑤因此 γ 的每点都与固定点 c 距离恒为 1/κ₀，即 γ 落在以 c 为心的圆上。", difficulty: "hard", chapter: "ch1" },

  { type: "computation", q: "求平面曲线 y=f(x) 在点 (x,f(x)) 处的曲率公式，并对抛物线 f(x)=x² 求其顶点处的曲率。", answer: "①参数化为 γ(x)=(x,f(x))，则 γ′=(1,f′)，γ″=(0,f″)。②x′y″−y′x″=1·f″−f′·0=f″，|γ′|²=1+f′²。③故 κ=|f″|/(1+f′²)^(3/2)。④对 f=x²，有 f′=2x，f″=2，故 κ(x)=2/(1+4x²)^(3/2)。⑤顶点 x=0 处 κ=2，远离顶点时 κ 趋近于 0。", difficulty: "medium", chapter: "ch1" },

  { type: "proof", q: "对任意参数化的平面曲线 γ(t)=(x(t),y(t))（γ′≠0），证明其曲率公式为 κ=(x′y″−y′x″)/(x′²+y′²)^(3/2)，并求半径为 R 的圆的曲率。", answer: "①单位切向量 T=γ′/|γ′|，弧长 s 满足 ds/dt=|γ′|。②γ′的单位切向变化率给出 κ=|dT/ds|，平面情形等于 |γ′×γ″|/|γ′|³。③二维叉积 |γ′×γ″|=|x′y″−y′x″|，|γ′|²=x′²+y′²，故得所求公式。④对圆 γ=(R cos t,R sin t)，x′y″−y′x″=R²(sin²t+cos²t)=R²，|γ′|=R。⑤故 κ=R²/R³=1/R。", difficulty: "hard", chapter: "ch1" },

  { type: "choice", q: "设单位速率空间曲线 γ(s)，其副法向量 B(s) 满足 B′=−τN。挠率 τ 的几何意义是？", options: ["曲线切向量的旋转速率", "密切平面绕切线旋转的速率", "曲线弯曲程度的度量", "曲线弧长的变化率"], answer: 1, explanation: "挠率 τ 描述密切平面（由 T,N 张成）绕切向量 T 旋转的速率。τ=0 意味着密切平面不变，曲线为平面曲线；曲率才是曲线弯曲程度的度量。", difficulty: "medium", chapter: "ch1" },

  { type: "choice", q: "设螺旋线 γ(t)=(cos t, sin t, t) 按比例除以 √2 得到单位速率曲线 γ̃(t)=(cos t, sin t, t)/√2。其挠率 τ 等于？", options: ["1/√2", "1/2", "√2", "2"], answer: 0, explanation: "γ̃″与γ̃‴的混合积为 1/(2√2)，而 |γ̃′×γ̃″|²=1/2，故 τ=混合积/|γ̃′×γ̃″|²=1/√2。注意参数曲线的缩放会同时改变速度，不可直接把原螺旋线的 b/(a²+b²) 当作答案。", difficulty: "hard", chapter: "ch1" },

  { type: "choice", q: "对于带定向的平面曲线，其带符号曲率 κ_s 在参数反定向（即令 t↦−t）下如何变化？", options: ["保持不变", "改变符号", "变为其倒数", "变为其两倍"], answer: 1, explanation: "反定向使单位切向 T 反向，法向 N 也相应反向，带符号曲率的分母 |γ′|³ 不变，而分子 x′y″−y′x″ 改变符号，因此 κ_s 变号。不带符号的曲率 |κ_s| 则不变。", difficulty: "medium", chapter: "ch1" },

  { type: "choice", q: "空间曲线在曲率处处为零时是？", options: ["直线段", "圆弧", "任一平面曲线", "球面曲线"], answer: 0, explanation: "曲率 κ 度量曲线偏离直线的程度。κ≡0 等价于对弧长参数 T′=0，故切向量恒定，γ 是直线（或直线段）。圆弧有非零常曲率，球面曲线曲率也不一定为零。", difficulty: "easy", chapter: "ch1" },

  { type: "choice", q: "关于曲线曲率的下列陈述，错误的是？", options: ["半径为 R 的圆曲率恒为 1/R", "曲率在欧氏刚体运动下不变", "仅当 γ 是弧长参数化时才有 κ=|γ″|", "曲率依赖外围坐标选取，因而并非几何量"], answer: 3, explanation: "曲率是几何不变量：虽然数值可通过具体参数化计算，但它在刚体运动、保向等距和允许的参数变换下保持同一个几何意义。选项 A、B、C 均正确。", difficulty: "medium", chapter: "ch1" },

// ======================== Ch2 (10题) ========================
// 黎曼度量

  { type: "computation", q: "设 γ:R→R³ 由 γ(t)=(t,t²,t³) 给出，R³ 配标准欧氏度量 g。求拉回度量 γ*g，并写出 γ 在 [0,1] 上的长度公式。", answer: "①γ′(t)=(1,2t,3t²)。②拉回度量在坐标 t 下为 (γ*g)(∂_t,∂_t)=|γ′(t)|²。③故 γ*g=(1+4t²+9t⁴)dt²。④长度 L=∫₀¹√(1+4t²+9t⁴)dt。⑤该积分给出空间三次曲线从 t=0 到 t=1 的弧长，通常需数值计算。", difficulty: "medium", chapter: "ch2" },

  { type: "proof", q: "设 h=e^(2f)g 是黎曼度量 g 的共形变换。证明 h 保持任意两个非零切向量的夹角，并求 n 维体积形式 dV_h 与 dV_g 的关系。", answer: "①夹角 cos θ_h=h(X,Y)/(|X|_h|Y|_h)=e^(2f)g(X,Y)/(e^f|X|_g·e^f|Y|_g)=cos θ_g。②det h=e^(2nf)det g。③因此 dV_h=√(det h)dx¹∧…∧dxⁿ=e^(nf)dV_g。④长度、面积与曲率一般改变，但共形角保形。", difficulty: "hard", chapter: "ch2" },

  { type: "computation", q: "设单位球面 S² 由球坐标 (φ,θ) 参数化为 (sin φ cos θ, sin φ sin θ, cos φ)。求 R³ 欧氏度量在 S² 上的诱导度量 g 与体积形式。", answer: "①∂_φ=(cos φ cos θ,cos φ sin θ,−sin φ)，∂_θ=(−sin φ sin θ,sin φ cos θ,0)。②|∂_φ|²=1，|∂_θ|²=sin²φ，∂_φ·∂_θ=0。③故 g=dφ²+sin²φ dθ²（等温型正交坐标）。④体积形式 dV=√(det g)dφdθ=sin φ dφdθ。", difficulty: "medium", chapter: "ch2" },

  { type: "proof", q: "设 F:(M,g)→(N,h) 是光滑映射且满足 F*h=g。证明在每个点 p 处 dF_p 是单射，从而 dim M≤dim N；若维数相等，则 F 是局部等距。", answer: "①任取 v∈ker dF_p，由拉回定义 0=h(dF_p v,dF_p v)=g_p(v,v)。②g 正定，故 v=0，即 ker dF_p={0}，dF_p 单射。③由秩-零化度定理，dim M=dim ker dF_p+rank dF_p≤dim N。④若 dim M=dim N，则 dF_p 是线性同构且保持内积；反函数定理给出局部微分同胚，故 F 是局部等距浸入，且为局部等距。", difficulty: "hard", chapter: "ch2" },

  { type: "computation", q: "设圆柱面 C={(x,y,z):x²+y²=1, z∈R} 配有从 R³ 诱导的度量。写出一个局部参数化，计算诱导度量，并说明 C 局部等距于欧氏平面。", answer: "①取柱坐标参数化 F(θ,v)=(cos θ,sin θ,v)。②F_θ=(−sin θ,cos θ,0)，F_v=(0,0,1)，故 g=|F_θ|²dθ²+|F_v|²dv²=dθ²+dv²。③此即欧氏平面的标准度量，因此 F 是局部等距。④但 C 与平面不全等距：平面单连通，圆柱面基本群为 Z。", difficulty: "medium", chapter: "ch2" },

  { type: "choice", q: "在坐标变换 x→x̃ 下，度量张量分量 g_ij 的变换规律是？", options: ["g̃_ij=g_ij", "g̃_ij=(∂x^k/∂x̃^i)(∂x^l/∂x̃^j)g_kl", "g̃_ij=(∂x̃^i/∂x^k)(∂x̃^j/∂x^l)g_kl", "g̃_ij=g_kl∂_i∂_jx^k"], answer: 1, explanation: "(0,2) 型张量在坐标变换下每个下指标按 ∂x^旧/∂x̃^新 收缩一次。故 g̃_ij=(∂x^k/∂x̃^i)(∂x^l/∂x̃^j)g_kl。选项 C 是 (2,0) 型张量的变换律。", difficulty: "medium", chapter: "ch2" },

  { type: "choice", q: "黎曼流形 (M,g) 上两点 p,q 的黎曼距离 d(p,q) 定义为？", options: ["所有连接 p,q 的分段光滑曲线长度的下确界", "任意一条曲线的长度", "连接 p,q 的测地线的唯一长度", "p,q 坐标差的欧氏范数"], answer: 0, explanation: "黎曼距离是连接两点的一切分段光滑曲线长度的下确界；完备流形上该下确界由某条最短测地线实现，但不唯一。它不依赖坐标选取，坐标差范数只在欧氏空间中才等于距离。", difficulty: "medium", chapter: "ch2" },

  { type: "choice", q: "若 h=e^(2f)g，则 h 的逆度量 h^ij 与 g^ij 的关系为？", options: ["h^ij=e^(2f)g^ij", "h^ij=e^(−2f)g^ij", "h^ij=g^ij", "h^ij=e^f g^ij"], answer: 1, explanation: "由 h_ij=e^(2f)g_ij，其逆矩阵满足 h^ij=e^(−2f)g^ij。验证：h^ik h_kj=e^(−2f)g^ik·e^(2f)g_kj=δ^i_j。因此共形变换以相反因子作用于逆度量。", difficulty: "medium", chapter: "ch2" },

  { type: "choice", q: "设平坦环面 T²=S¹×S¹ 配乘积度量 dθ²+dφ²（θ,φ 为角度坐标），其总体积为？", options: ["2π", "π²", "4π²", "2π²"], answer: 2, explanation: "体积形式 dV=dθ∧dφ，积分区域 θ∈[0,2π],φ∈[0,2π]，故 Vol(T²)=∫∫dθdφ=(2π)(2π)=4π²。同时 T² 的断面曲率处处为零但总体积有限。", difficulty: "medium", chapter: "ch2" },

  { type: "choice", q: "关于任意光滑仿紧流形上黎曼度量的存在性，以下说法正确的是？", options: ["仅紧致流形上存在", "任何光滑仿紧流形上都存在", "仅可定向流形上存在", "仅偶数维流形上存在"], answer: 1, explanation: "利用单位分解把每个坐标卡上的欧氏度量（或其凸组合）粘合成整体度量，可证明任意光滑仿紧 Hausdorff 流形上总存在黎曼度量。这与定向性、维数、紧致性均无关。", difficulty: "easy", chapter: "ch2" },

// ======================== Ch3 (10题) ========================
// 模型黎曼流形

  { type: "proof", q: "证明单位球面 S² 的每条测地线都是一段大圆；特别地验证赤道 γ(t)=(cos t, sin t,0) 是测地线。", answer: "①任取 p∈S², v∈T_pS² 且 |v|=1, p⊥v，定义 γ(t)=cos t·p+sin t·v。②γ 落在单位球面，γ″=−γ，与球面法向 n=γ 平行。③因此切向加速度分量 ∇_{γ′}γ′=(γ″)ᵀ=0，γ 是测地线。④反之测地线初值唯一，故所有测地线均由上述大圆给出。赤道是 p=(0,0,1),v=(1,0,0) 的特例。", difficulty: "hard", chapter: "ch3" },

  { type: "computation", q: "在 Poincaré 上半平面 H²={(x,y):y>0}、度量 ds²=(dx²+dy²)/y² 中，求连接 (0,a) 与 (0,b)（b>a>0）的竖直测地线长度。", answer: "①竖直曲线 γ(t)=(0,t) 的切向量 γ′=(0,1)，|γ′|_g=1/t。②从 y=a 到 y=b 的长度 L=∫_a^b (1/t)dt=ln b−ln a=ln(b/a)。③作弧长参数 s=ln t，即 t=e^s 时，γ 满足测地线方程，故竖直射线为测地线。④该长度就是两点间双曲距离。", difficulty: "medium", chapter: "ch3" },

  { type: "computation", q: "在双曲平面 H² 中，以 (0,1) 为圆心、双曲半径为 R 的圆，其周长是多少？证明其为 2π sinh R。", answer: "①对 H² 使用测地极坐标，度量为 ds²=dr²+sinh²r dθ²。②以 (0,1) 为圆心的双曲圆由 r=R 给出，其切向系数 √(g_θθ)=sinh R。③周长=∫₀^(2π) sinh R dθ=2π sinh R。④当 R 很大时 sinh R≈e^R/2，周长指数增长，与欧氏圆 2πR 的线性增长根本不同。", difficulty: "hard", chapter: "ch3" },

  { type: "computation", q: "在单位球面 S² 上，一个测地三角形的三个内角分别为 α=π/2, β=π/3, γ=π/3。求该三角形面积及角盈。", answer: "①对 S² 上测地三角形，Gauss-Bonnet 局部公式给出面积 A=α+β+γ−π。②代入得 A=π/2+π/3+π/3−π=π/6。③角盈为 α+β+γ−π=π/6，等于面积。④这体现球面 K=1：曲率积分 ∫_Δ K dA=面积=角盈。", difficulty: "medium", chapter: "ch3" },

  { type: "proof", q: "设 Poincaré 圆盘 D={|w|<1} 配度量 ds²=4|dw|²/(1−|w|²)²，上半平面 H={Im z>0} 配度量 ds²=|dz|²/(Im z)²。验证 Cayley 变换 w=(z−i)/(z+i) 是等距映射。", answer: "①求导 dw=2i(z+i)^(−2)dz，故 |dw|=2|dz|/|z+i|²。②设 z=x+iy，计算 1−|w|²=(|z+i|²−|z−i|²)/|z+i|²=4y/|z+i|²。③于是 4|dw|²/(1−|w|²)²=[16|dz|²/|z+i|⁴]/[16y²/|z+i|⁴]=|dz|²/y²。④拉回度量恰为 H 的度量，故得等距。", difficulty: "hard", chapter: "ch3" },

  { type: "choice", q: "在 Poincaré 圆盘模型 D 中，从内部点 (0,0) 到边界点 |w|=1 的双曲距离是？", options: ["π", "2", "有限常数 1", "无穷大"], answer: 3, explanation: "圆盘度量 g=4|dw|²/(1−|w|²)²。沿径向 w=re^(iθ) 有 |dw|=dr，从 0 到 r₀ 的长度 ∫₀^{r₀} 2dr/(1−r²)=ln((1+r₀)/(1−r₀))；当 r₀→1 时趋于无穷大。故边界是无穷远，内部点到边界距离无穷。", difficulty: "hard", chapter: "ch3" },

  { type: "choice", q: "单位球面 Sⁿ(1) 的直径（任意两点距离的最大值）为？", options: ["π/2", "π", "2π", "1"], answer: 1, explanation: "球面上两点沿大圆的最短弧长最大值为半圆周 π，例如北极到南极的距离为 π。由于指数映射到半径为 π 的切向量时到达对径点，球直径恰为 π。", difficulty: "easy", chapter: "ch3" },

  { type: "choice", q: "设常曲率空间有此性质：截面曲率恒为 c=4。其对应的模型球面半径 R 为？", options: ["2", "1/2", "4", "1/4"], answer: 1, explanation: "半径为 R 的球面截面曲率为 1/R²。要求 1/R²=4，解得 R=1/2。一般地，常曲率 c>0 的模型球半径为 1/√c。", difficulty: "medium", chapter: "ch3" },

  { type: "choice", q: "以下哪个黎曼流形可配一个完备的、截面曲率处处为零的黎曼度量？", options: ["S²", "双曲平面 H²", "S¹×R（圆柱面）", "S³"], answer: 2, explanation: "S¹×R 可配乘积度量 dθ²+dt²，其度量局部为欧氏，是全平坦的完备黎曼流形。S²、S³、H² 作为单连通常曲率空间分别有常正/正/负曲率，不能配成平坦度量。", difficulty: "medium", chapter: "ch3" },

  { type: "choice", q: "双曲空间 Hⁿ 的极坐标度量形式为？", options: ["ds²=dr²+sin²r dΩ²", "ds²=dr²+r² dΩ²", "ds²=dr²+sinh²r dΩ²", "ds²=dr²+cos²r dΩ²"], answer: 2, explanation: "常曲率模型空间的标准径向度量：欧氏空间为 dr²+r²dΩ²，球面为 dr²+sin²r dΩ²，双曲空间为 dr²+sinh²r dΩ²。sinh²r 导致双曲空间中球的周长和面积指数增长。", difficulty: "easy", chapter: "ch3" },

// ======================== Ch4 (10题) ========================
// 联络

  { type: "computation", q: "在欧氏平面 R²∖{0} 的极坐标 (r,θ) 中，求度量 g=dr²+r²dθ² 的所有非零 Christoffel 符号 Γ^k_ij。", answer: "①g_rr=1,g_θθ=r²，g^rr=1,g^θθ=r^(−2)。②唯一相关导数为 ∂_r g_θθ=2r。③Γ^r_θθ=−(1/2)∂_r g_θθ=−r；Γ^θ_rθ=Γ^θ_θr=(1/2)g^θθ∂_r g_θθ=1/r。④其余 Γ 均为零。⑤这组符号给出极坐标下测地线方程 r̈−rθ̇²=0，rθ̈+2ṙθ̇=0。", difficulty: "medium", chapter: "ch4" },

  { type: "computation", q: "求 Poincaré 上半平面度量 g=(dx²+dy²)/y² 的非零 Christoffel 符号，并写出测地线方程组。", answer: "①g_xx=g_yy=1/y²，g^xx=g^yy=y²，且只有 ∂_y g_xx=∂_y g_yy=−2/y³ 非零。②按 Γ^i_jk=(1/2)g^il(∂_j g_kl+∂_k g_jl−∂_l g_jk) 计算。③得到 Γ^x_xy=Γ^x_yx=−1/y，Γ^y_xx=1/y，Γ^y_xy=Γ^y_yx=Γ^y_yy=−1/y。④测地线方程：ẍ−(2/y)ẋẏ=0；ÿ+(1/y)ẋ²−(2/y)ẋẏ−(1/y)ẏ²=0。", difficulty: "hard", chapter: "ch4" },

  { type: "proof", q: "证明黎曼流形上存在唯一与度量相容且无挠的联络（Levi-Civita 联络），并写出 Koszul 公式。", answer: "①定义 Koszul 公式：2g(∇_XY,Z)=Xg(Y,Z)+Yg(Z,X)−Zg(X,Y)−g(Y,[X,Z])−g(Z,[Y,X])+g(X,[Z,Y])。②该式对 Z 光滑且 C∞ 线性，确定唯一 ∇_XY。③逐项验证 ∇ 与度量相容、无挠：无挠性由对称项抵消，度量相容性由对 |X|² 求导检验。④若 ∇′ 也满足两条件，差 S=∇−∇′ 为对称且满足三线性消失轮换式，推出 S=0，故唯一。", difficulty: "hard", chapter: "ch4" },

  { type: "computation", q: "在欧氏平面的极坐标 (r,θ) 下，用 Christoffel 符号计算 ∇_∂_r ∂_θ、∇_∂_θ ∂_r 与 ∇_∂_θ ∂_θ，并说明联络无挠。", answer: "①由 Ch4 的符号，∇_∂_r ∂_θ=Γ^θ_rθ∂_θ=(1/r)∂_θ。②∇_∂_θ∂_r=Γ^r_θr∂_r+Γ^θ_θr∂_θ=(1/r)∂_θ。③两式相等，验证无挠 T(∂_r,∂_θ)=0。④∇_∂_θ∂_θ=Γ^r_θθ∂_r=−r∂_r。⑤这些式子与坐标基欧氏内积导数一致，体现 ∇ 由欧氏联络诱导。", difficulty: "medium", chapter: "ch4" },

  { type: "proof", q: "设联络在坐标基下 Christoffel 符号为 Γ^k_ij。证明协变导数的坐标公式 ∇_XY=(X^i∂_i Y^k+Γ^k_ij X^iY^j)∂_k。", answer: "①把联络对 ∂_i 的作用记为 ∇_∂_i∂_j=Γ^k_ij∂_k。②对 Y=Y^j∂_j 作用 Leibniz 法则：∇_X(Y^j∂_j)=X(Y^j)∂_j+Y^jX^i∇_∂_i∂_j。③X(Y^j)=X^i∂_iY^j，第二项为 X^iY^jΓ^k_ij∂_k。④重命名哑指标得 ∇_XY=[X^i∂_iY^k+Γ^k_ij X^iY^j]∂_k。", difficulty: "hard", chapter: "ch4" },

  { type: "choice", q: "Christoffel 符号在坐标变换下是否为张量？", options: ["是 (1,2) 型张量", "是 (0,3) 型张量", "不是张量，其变换律含坐标变换的二阶导数项", "只在正交坐标下是张量"], answer: 2, explanation: "联络系数 Γ^k_ij 的变换律中包含 ∂²x^旧/∂x̃∂x̃ 这样的二阶导数项，因此不是张量。不过两个联络的差 Γ−Γ′ 在相同坐标变换下按 (1,2) 型张量变换。", difficulty: "medium", chapter: "ch4" },

  { type: "choice", q: "联络 ∇ 无挠的充要条件是，在任意坐标下 Christoffel 符号满足？", options: ["Γ^k_ij=Γ^k_ji", "Γ^k_ij=−Γ^k_ji", "Γ^k_ij=0", "Γ^i_ij=0"], answer: 0, explanation: "无挠性 T(∂_i,∂_j)=∇_∂_i∂_j−∇_∂_j∂_i−[∂_i,∂_j]=0，而在坐标基下 [∂_i,∂_j]=0，故等价于 Γ^k_ij∂_k=Γ^k_ji∂_k，即 Γ^k_ij=Γ^k_ji。", difficulty: "easy", chapter: "ch4" },

  { type: "choice", q: "与度量相容（∇g=0）在坐标下等价于？", options: ["∂_k g_ij=Γ^l_ki g_lj+Γ^l_kj g_il", "∂_k g_ij=0", "∂_k g_ij=Γ^l_ki Γ^l_kj", "∂_k g_ij=Γ^l_ij g_kl"], answer: 0, explanation: "由乘积法则，∇_k g_ij=∂_k g_ij−Γ^l_ki g_lj−Γ^l_kj g_il=0，移项即得选项 A。它与度量在平行移动下保持内积等价。", difficulty: "medium", chapter: "ch4" },

  { type: "choice", q: "n 维流形上，由度量 g 确定的对称 Christoffel 符号 Γ^k_ij 的独立分量个数为？", options: ["n³", "n²(n+1)/2", "n(n+1)/2", "n(n−1)/2"], answer: 1, explanation: "上指标 k 有 n 种，下指标 (i,j) 由无挠性对称有 n(n+1)/2 种，因此共有 n×n(n+1)/2=n²(n+1)/2 个独立分量。", difficulty: "medium", chapter: "ch4" },

  { type: "choice", q: "在带曲率的黎曼流形上，把一个向量沿闭合曲线平行移动一圈回到起点后，该向量通常？", options: ["仍与原向量完全相同", "绕一个与曲率和环路有关的角旋转（holonomy）", "变为零向量", "长度发生改变"], answer: 1, explanation: "度量相容性保证平行移动保持向量长度，但方向可能改变；改变量由曲率沿环路的积分决定，称为和乐（holonomy）。在平坦流形上和乐为零，闭曲线平行移动回到原向量。", difficulty: "medium", chapter: "ch4" },

// ======================== Ch5 (10题) ========================
// 测地线与距离

  { type: "computation", q: "在欧氏平面极坐标 g=dr²+r²dθ² 中，解测地线方程，并证明其所有测地线都是直线。", answer: "①Γ^r_θθ=−r，Γ^θ_rθ=1/r。测地线方程：r̈−rθ̇²=0，rθ̈+2ṙθ̇=0。②第二式等价于 (r²θ̇)′=0，故 r²θ̇=L 为常数。③若 L=0，则 θ 为常数，得到过原点的射线。④若 L≠0，作 u=1/r 得 u″+u=0，解为 u=A cos θ+B sin θ，即 r cos(θ−θ₀)=p，这是不过原点的直线。⑤故所有测地线均为直线。", difficulty: "hard", chapter: "ch5" },

  { type: "computation", q: "对单位球面 Sⁿ 的北极点 N，写出指数映射 exp_N，说明它是从 T_N Sⁿ 到 Sⁿ 的何种映射，并求其共轭点。", answer: "①把 v∈T_N Sⁿ≅Rⁿ 写成 v=|v|w, |w|=1，问：大圆测地线 γ(t)=cos(t|v|)N+sin(t|v|)w。②exp_N(v)=γ(1)=cos|v|·N+sin|v|·(v/|v|)。③它是 {|v|<π} 到 Sⁿ∖{南极点} 的微分同胚。④边界 |v|=π 全部映到南极点，故南极点是与 N 共轭的唯一（对）点。", difficulty: "hard", chapter: "ch5" },

  { type: "proof", q: "证明任何测地线的速率 |γ′| 恒为常数。", answer: "①对任意曲线，d/dt g(γ′,γ′)=2g(∇_γ′γ′,γ′)。②若 γ 是测地线，则 ∇_γ′γ′=0。③故导数为零，g(γ′,γ′) 为常数，即 |γ′| 恒定。④因此测地线可以线性重新参数化，使其成为单位速率（弧长参数化）测地线。", difficulty: "medium", chapter: "ch5" },

  { type: "proof", q: "在旋转曲面度量 g=dr²+f(r)²dθ² 上，证明沿测地线 f(r)²θ̇ 为常数（Clairaut 关系），并由此求纬线成为测地线的条件。", answer: "①非零 Christoffel 为 Γ^r_θθ=−f f′，Γ^θ_rθ=f′/f。②θ-测地线方程为 θ̈+2(f′/f)ṙθ̇=0。③乘以 f² 得 d/dt(f²θ̇)=f²θ̈+2ff′ṙθ̇=0，故 f²θ̇=h 常数。④纬线 r=r₀ 的 θ̇≠0、ṙ=0，需同时满足 r̈ 方程 −f(r₀)f′(r₀)θ̇²=0，即 f′(r₀)=0。⑤故 f′ 的驻点处纬线是测地线。", difficulty: "hard", chapter: "ch5" },

  { type: "computation", q: "在 Poincaré 上半平面 H² 中，p=(0,1)，v=∂_y。求过 p 且初始切向量为 v 的测地线，并计算指数映射 exp_p(a∂_y)。", answer: "①竖直曲线 γ(s)=(0,e^s) 有 (γ₂′)/γ₂=e^s/e^s=1，且满足测地线方程，故为单位速率测地线。②p=(0,1) 处 ∂_y 的范数为 |∂_y|_g=|∂_y|/y=1，故 v 本身是单位切向量。③γ(0)=(0,1)=p，γ′(0)=(0,1)=∂_y。④由唯一性，exp_p(a∂_y)=γ(a)=(0,e^a)。⑤水平方向对应的测地线均为与 x 轴正交的圆弧。", difficulty: "medium", chapter: "ch5" },

  { type: "choice", q: "测地线方程在局部坐标下的形式为？", options: ["ẍ^k+Γ^k_ij ẋ^i ẋ^j=0", "ẍ^k=0", "ẋ^k+Γ^k_ij x^i x^j=0", "ẍ^k−Γ^k_ij ẋ^i ẋ^j=0"], answer: 0, explanation: "测地线方程 ∇_γ′γ′=0 在坐标下即为 ẍ^k+Γ^k_ij ẋ^i ẋ^j=0，其中 ẋ^i=dx^i/dt。这是二阶常微分方程组，其解由初始位置和初始速度唯一确定。", difficulty: "easy", chapter: "ch5" },

  { type: "choice", q: "指数映射 exp_p: T_pM→M 在 0∈T_pM 处的微分是？", options: ["零映射", "恒等映射 id_{T_pM}", "正交投影", "依赖于度量的缩放"], answer: 1, explanation: "d(exp_p)_0 是 T_0(T_pM)≅T_pM 到 T_pM 的恒等映射，因为局部上 exp_p 是一阶恒同。由此指数映射在 0 点附近是局部微分同胚。", difficulty: "medium", chapter: "ch5" },

  { type: "choice", q: "Hopf-Rinow 定理给出：黎曼流形测地完备等价于以下哪一条？", options: ["截面曲率有界", "有界闭子集紧致", "单连通", "常曲率"], answer: 1, explanation: "Hopf-Rinow 定理：对连通黎曼流形，测地完备、紧致有界闭集、任意两点间存在最短测地线、指数映射全局定义等条件彼此等价。", difficulty: "medium", chapter: "ch5" },

  { type: "choice", q: "如果一条曲线是连接两点 p,q 的最短曲线，则它（适当重新参数化后）必是？", options: ["任意光滑曲线", "测地线", "圆弧", "直线"], answer: 1, explanation: "长度极小的曲线必须满足变分的一阶条件，即测地线方程 ∇_γ′γ′=0。所以最短曲线必为测地线；但测地线不一定处处最短，越过割点后可能失去极小性。", difficulty: "medium", chapter: "ch5" },

  { type: "choice", q: "在单位球面 S² 上，从北极 N 到南极 S 的所有最短测地线（大圆半周）的长度为？", options: ["π/2", "π", "2π", "1"], answer: 1, explanation: "N 到 S 沿任意大圆的弧长都是 π（单位球面半圆）。它们都是具有相同初终点但不同初始方向的测地线，体现了共轭点处指数映射非单射。", difficulty: "easy", chapter: "ch5" },

// ======================== Ch6 (10题) ========================
// 曲率

  { type: "computation", q: "用 Christoffel 符号计算 Poincaré 上半平面度量 g=(dx²+dy²)/y² 的截面曲率 K，并验证 K=−1。", answer: "①非零 Christoffel 为 Γ^x_xy=Γ^x_yx=−1/y，Γ^y_xx=1/y，Γ^y_xy=Γ^y_yx=Γ^y_yy=−1/y。②关键分量 R^x_yxy=∂_xΓ^x_yy−∂_yΓ^x_xy+Γ^m_yyΓ^x_xm−Γ^m_xyΓ^x_ym。③代入得 R^x_yxy=−1/y²。④R_xyxy=g_xx R^x_yxy=(1/y²)(−1/y²)=−1/y⁴，det g=1/y⁴。⑤故 K=R_xyxy/det g=−1。", difficulty: "hard", chapter: "ch6" },

  { type: "computation", q: "对单位球面 S² 的度量 g=dφ²+sin²φ dθ²（φ 为余纬度），求 Gauss 曲率并证明 K=1。", answer: "①度量形如 ds²=du²+f(u)²dv²，其中 f=sin φ。②对二维旋转型度量，Gauss 曲率公式为 K=−f″/f。③这里 f′=cos φ，f″=−sin φ。④故 K=−(−sin φ)/sin φ=1。⑤于是单位球面是所有点 Gauss 曲率恒为 1 的常正曲率曲面。", difficulty: "medium", chapter: "ch6" },

  { type: "proof", q: "设 (M,g) 为二维黎曼流形。证明 Ricci 曲率与 Gauss 曲率满足 Rc=K·g，且标量曲率 S=2K。", answer: "①二维曲率张量只有一个独立分量 K=R_1212/det g。②由曲率张量的对称性，Ricci 分量满足 R_ij=(S/2)g_ij；再由 S=g^ik g^jl R_ijkl=2K。③故 R_ij=K g_ij，即 Rc=K g。④因此二维流形总是 Einstein 流形，这是维数 2 的特有结论。", difficulty: "hard", chapter: "ch6" },

  { type: "proof", q: "证明黎曼曲率张量的代数对称性：R_ijkl=−R_jikl=−R_ijlk=R_klij。", answer: "①由定义 R(X,Y)Z 关于 X,Y 反对称，故 R_ijkl=−R_jikl。②由 R(X,Y) 是 g-反对称算子，即 g(R(X,Y)Z,W)=−g(R(X,Y)W,Z)，得 R_ijkl=−R_ijlk。③无挠性与第一 Bianchi 恒等式 R_ijkl+R_jkil+R_kijl=0 联立可推出轮换全对称。④由三组对称联合可证 R_ijkl=R_klij。", difficulty: "hard", chapter: "ch6" },

  { type: "proof", q: "设 M=M₁×M₂ 配乘积度量，X 是 M₁ 上的向量场、Y 是 M₂ 上的向量场并提升到积流形上。证明截面曲率 K(X,Y)=0。", answer: "①乘积度量的 Levi-Civita 联络分块作用：与两因子相切的 Lie 括号 [X,Y]=0，且 ∇_XY=∇_YX=0。②由曲率定义 R(X,Y)Z=∇_X∇_Y Z−∇_Y∇_X Z−∇_[X,Y]Z。③对 Z 与 M₁ 相切时前两项中 Y 方向的协变导数为零，得 R(X,Y)Z=0。④故 X,Y 张成的平面截面曲率 K=0。混合截面为平坦，Ricci 保持分块对角结构。", difficulty: "hard", chapter: "ch6" },

  { type: "choice", q: "黎曼曲率张量 R(X,Y)Z 对光滑函数 f 的性质是？", options: ["R(fX,Y)Z=fR(X,Y)Z", "R(fX,Y)Z=f²R(X,Y)Z", "R(fX,Y)Z=∂f·R(X,Y)Z", "R(X,Y)(fZ)=f²R(X,Y)Z"], answer: 0, explanation: "曲率张量是 C∞(M)-多线性的张量场：R(fX,Y)Z=fR(X,Y)Z，R(X,Y)(fZ)=fR(X,Y)Z。它对函数 f 一次相位线，不含函数导数，故是张量场。", difficulty: "easy", chapter: "ch6" },

  { type: "choice", q: "平面 P⊂T_pM 的截面曲率 K(P) 的标准定义是？", options: ["K(P)=⟨R(e₁,e₂)e₂,e₁⟩，其中 e₁,e₂ 是 P 的单位正交基", "K(P)=⟨R(e₁,e₂)e₁,e₂⟩", "K(P)=|R(e₁,e₂)|²", "K(P)=tr R(e₁,e₂)"], answer: 0, explanation: "对二维平面 P 取单位正交基 e₁,e₂，定义 K(P)=⟨R(e₁,e₂)e₂,e₁⟩。该值与单位正交基的选取无关，因为二维正交变换不改变该内积。", difficulty: "medium", chapter: "ch6" },

  { type: "choice", q: "Ricci 曲率 Ric(X,Y) 的定义为？", options: ["Ric(X,Y)=Σ_i⟨R(e_i,X)Y,e_i⟩", "Ric(X,Y)=Σ_i⟨R(X,Y)e_i,e_i⟩", "Ric(X,Y)=tr R", "Ric(X,Y)=K g(X,Y)"], answer: 0, explanation: "按 Lee 的符号约定，Ric(X,Y)=trace(Z↦R(Z,X)Y)。在单位正交基下即 Σ_i⟨R(e_i,X)Y,e_i⟩，它与基选取无关，是 (0,2) 型对称张量。", difficulty: "medium", chapter: "ch6" },

  { type: "choice", q: "标量曲率 S 与 Ricci 曲率 R_ij 的关系为？", options: ["S=g^ij R_ij", "S=√(g^ijR_ij)", "S=tr g_ij", "S=Σ R_ii 而无指标升降"], answer: 0, explanation: "标量曲率是 Ricci 曲率的度量迹：S=g^ij R_ij=Σ R(e_i,e_i)。它是每点上的标量函数，进一步与截面曲率对所有平面的平均值有关。", difficulty: "easy", chapter: "ch6" },

  { type: "choice", q: "在二维黎曼流形上，标量曲率 S 与 Gauss 曲率 K 的关系是？", options: ["S=K", "S=2K", "S=K/2", "S=4K"], answer: 1, explanation: "二维时 Rc=K g，取迹得 S=g^ij(K g_ij)=2K。这是曲率张量在二维流形上只有一个独立分量的直接推论。", difficulty: "medium", chapter: "ch6" },

// ======================== Ch7 (10题) ========================
// 黎曼子流形

  { type: "computation", q: "把单位球面 Sⁿ 嵌入 R^{n+1}，取某一单位法向量。求形状算子 S、第二基本形式 II 与平均曲率 H，并在 n=2 时求 Gauss 曲率 K。", answer: "①球面位置向量 p 可作单位法 N=±p。②对切向量 X，欧氏联络有 ∇̄_X N=±∇̄_X p=±X。③形状算子 S(X)=−∇̄_X N=∓X，即 S=λI 为纯量算子（全脐）。④II(X,Y)=⟨S X,Y⟩=∓⟨X,Y⟩。⑤n=2 时 K=det S=1，与单位球面常正曲率一致。", difficulty: "hard", chapter: "ch7" },

  { type: "computation", q: "设环面由 F(u,v)=((R+r cos v)cos u,(R+r cos v)sin u,r sin v) 给出（R>r>0）。求其 Gauss 曲率 K 与平均曲率 H。", answer: "①E=|F_u|²=(R+r cos v)²，G=|F_v|²=r²，F=0。②取内单位法后，L=(R+r cos v)cos v，M=0，N=r。③主曲率为 κ_u=L/E=cos v/(R+r cos v)，κ_v=N/G=1/r。④故 K=κ_uκ_v=cos v/[r(R+r cos v)]。⑤H=(κ_u+κ_v)/2=[cos v/(R+r cos v)+1/r]/2。", difficulty: "hard", chapter: "ch7" },

  { type: "proof", q: "设 M 是 (M̄,ḡ) 的等距浸入子流形，第二基本形式 K 定义为切向联络与外围联络的差。证明 K(X,Y)=K(Y,X)，且 K 对 X,Y 均 C∞(M)-线性。", answer: "①由 Gauss 分解 ∇̄_XY=∇_XY+K(X,Y)，其中第一项切向、第二项法向。②无挠性给出 ∇̄_XY−∇̄_YX=[X,Y]，且 [X,Y] 切向，故法向部分 K(X,Y)−K(Y,X)=0。③对函数 f，K(fX,Y)=(∇̄_{fX}Y)⊥=(f∇̄_XY)⊥=fK(X,Y)。④由对称性与线性性，K 对第二个变量也是 C∞-线性的，故为向量值对称张量。", difficulty: "hard", chapter: "ch7" },

  { type: "computation", q: "验证悬链面 F(u,v)=(cosh u cos v, cosh u sin v, u) 是 R³ 中的极小曲面。", answer: "①F_u=(sinh u cos v, sinh u sin v,1)，F_v=(−cosh u sin v, cosh u cos v,0)。②E=cosh²u，F=0，G=cosh²u。③选择适当法向可得 L=1, M=0, N=−1（符号随定向）。④H=(L G−2M F+N E)/(2(EG−F²))=(cosh²u−cosh²u)/(2 cosh⁴u)=0。⑤故平均曲率恒为零，悬链面是极小曲面。", difficulty: "medium", chapter: "ch7" },

  { type: "proof", q: "对 R³ 中曲面 Σ，写出超曲面的 Gauss 方程，并证明内蕴 Gauss 曲率 K 等于形状算子行列式 det S。", answer: "①Gauss 方程 R(X,Y)Z=⟨S Y,Z⟩S X−⟨S X,Z⟩S Y。②取二维单位正交基 e₁,e₂，则 K=R_1221=⟨S e₂,e₂⟩⟨S e₁,e₁⟩−⟨S e₂,e₁⟩⟨S e₁,e₂⟩。③该式等于 II 矩阵的 2×2 子行列式轮换，即 det II。④又 R_1221=K，II 相对第一基本形式的表示 S 满足 det II=det S，故 K=det S=κ₁κ₂。", difficulty: "hard", chapter: "ch7" },

  { type: "choice", q: "子流形 M⊂M̄ 的第二基本形式 K 的方向取值于？", options: ["切空间 TM", "法丛 NM", "外围流形的切空间 TM̄", "M 的余切丛"], answer: 1, explanation: "第二基本形式定义为 K(X,Y)=(∇̄_XY)⊥，即把外围联络沿 M 的协变导数的法向分量取出，因此 K(X,Y) 取值于法丛 NM。", difficulty: "medium", chapter: "ch7" },

  { type: "choice", q: "全脐（totally umbilical）子流形是指？", options: ["第二基本形式恒为零", "形状算子/第二基本形式对每个点均为度量的常倍", "平均曲率恒为零", "截面曲率恒为常数"], answer: 1, explanation: "全脐子流形在每个点满足 K=λg（或 S=λI），即沿所有方向的法曲率相同，恰如球面属于外围欧氏空间的情形。λ=0 对应测地子流形。", difficulty: "medium", chapter: "ch7" },

  { type: "choice", q: "M⊂M̄ 是测地子流形（totally geodesic）当且仅当？", options: ["K≡0", "K=λg 且 λ≠0", "平均曲率为常数", "dim M=dim M̄−1"], answer: 0, explanation: "测地子流形的判定是第二基本形式 K≡0；此时 M 中测地线也是 M̄ 中测地线。例如球面的赤道大圆是 S² 的测地子流形。", difficulty: "easy", chapter: "ch7" },

  { type: "choice", q: "单位球面 Sⁿ 嵌入 R^{n+1}，选取合适法向后其平均曲率 H（即 tr S/n）为？", options: ["0", "1", "n", "−1"], answer: 1, explanation: "取适当法向可使形状算子 S=I，则 H=(1/n)tr S=1；若取相反法向则为 −1。无论定向如何，|H|=1。球面是最基本的全脐、常平均曲率超曲面。", difficulty: "medium", chapter: "ch7" },

  { type: "choice", q: "曲面 M²⊂R³ 为极小曲面（边界固定时面积泛函的临界点）的充要条件是？", options: ["平均曲率 H=0", "Gauss 曲率 K=0", "第二基本形式 K=0", "H=K"], answer: 0, explanation: "面积泛函的一阶变分给出 Euler-Lagrange 方程 H=0。极小曲面不要求 K=0；例如悬链面满足 H=0 但 K<0（除奇异点外仍有负 Gauss 曲率）。", difficulty: "medium", chapter: "ch7" },

// ======================== Ch8 (10题) ========================
// Gauss-Bonnet定理

  { type: "computation", q: "在标准环面 T²（参数见 Ch7，R>r>0）上计算总曲率 ∫_T K dA，并验证 Gauss-Bonnet 定理。", answer: "①Ch7 已得 K=cos v/[r(R+r cos v)]。②面积元 dA=√(EG−F²)dudv=r(R+r cos v)dudv。③∫ K dA=∫_0^{2π}∫_0^{2π} cos v du dv=(2π)∫_0^{2π} cos v dv=0。④T² 的 Euler 示性数 χ=0，而 2πχ=0，两者一致。⑤外侧正曲率与内侧负曲率恰好抵消。", difficulty: "hard", chapter: "ch8" },

  { type: "computation", q: "半径为 R 的球面 S² 具有 Gauss 曲率 K=1/R²。求总曲率 ∫ K dA，并由 Gauss-Bonnet 定理求 Euler 示性数 χ(S²)。", answer: "①K 为常数 1/R²。②∫_S² K dA=(1/R²)Area(S²)=(1/R²)·4πR²=4π。③Gauss-Bonnet 定理给出 ∫_S² K dA=2πχ(S²)。④因此 4π=2πχ，得 χ(S²)=2。⑤球面是亏格 g=0 的闭曲面，χ=2−2g=2。", difficulty: "medium", chapter: "ch8" },

  { type: "proof", q: "设单位球面 S² 上的测地三角形 T 三内角为 α,β,γ。用局部 Gauss-Bonnet 公式证明其面积为 A=α+β+γ−π。", answer: "①测地三角形的边 k_g=0。②局部 Gauss-Bonnet 公式 ∫_T K dA+∫_∂T k_g ds+Σ外角=2π。③三个外角分别为 π−α, π−β, π−γ，其和为 3π−(α+β+γ)。④K=1，且边界积分为 0，故 A+3π−(α+β+γ)=2π。⑤移项得 A=α+β+γ−π，即角盈等于面积。", difficulty: "medium", chapter: "ch8" },

  { type: "proof", q: "在双曲平面 H²（K=−1）中，设 T 是由测地线围成的 n 边形。证明其内角和满足 Σα_i<(n−2)π，并求面积 A。", answer: "①对测地 n 边形，局部 Gauss-Bonnet 为 ∫_M K dA+Σ(π−α_i)=2π。②K=−1，外角和为 nπ−Σα_i。③于是 −A+nπ−Σα_i=2π，解得 A=(n−2)π−Σα_i。④因为面积 A>0，故 Σα_i<(n−2)π，这是双曲几何中内角和严格小于欧氏内角和的体现。", difficulty: "hard", chapter: "ch8" },

  { type: "proof", q: "设 M 是亏格 g 的紧致定向闭曲面。证明总曲率 ∫_M K dA=4π(1−g)，并说明处处正 Gauss 曲率的闭曲面必为球面。", answer: "①紧致定向曲面的 Euler 示性数 χ=2−2g。②Gauss-Bonnet 定理 ∫_M K dA=2πχ。③代入得 ∫ K dA=2π(2−2g)=4π(1−g)。④若 K>0 处处，则左边为正，必须有 1−g>0，即整数 g 只能为 0。⑤故曲面同胚于球面 S²。", difficulty: "hard", chapter: "ch8" },

  { type: "choice", q: "亏格为 g 的紧致定向闭曲面，其 Euler 示性数是？", options: ["χ=2−2g", "χ=2+2g", "χ=g", "χ=1−g"], answer: 0, explanation: "亏格 g 曲面的 Euler 示性数为 χ=2−2g。例如球面 g=0 得 χ=2，环面 g=1 得 χ=0，双环面 g=2 得 χ=−2。", difficulty: "easy", chapter: "ch8" },

  { type: "choice", q: "局部 Gauss-Bonnet 公式 ∫_Δ K dA+∫_∂Δ k_g ds+Σ(π−α_i)=2π 中，α_i 表示？", options: ["曲线角（内角）", "外角", "圆心角", "测地曲率占角"], answer: 0, explanation: "对带角点的多边形区域，α_i 是各顶点处的内角；π−α_i 是转向的外角。若边界是光滑闭曲线，则外角项消失，公式变为 ∫K dA+∫k_g ds=2π。", difficulty: "medium", chapter: "ch8" },

  { type: "choice", q: "曲面三角剖分中 Euler 示性数与顶点数 V、边数 E、面数 F 的关系是？", options: ["χ=V−E+F", "χ=V+E+F", "χ=V+E−F", "χ=E−V−F"], answer: 0, explanation: "Euler 示性数定义为 χ=V−E+F，与具体三角剖分无关。它通过 Gauss-Bonnet 定理与曲率积分 ∫_M K dA=2πχ 联系。", difficulty: "easy", chapter: "ch8" },

  { type: "choice", q: "由 Gauss-Bonnet 定理，标准环面 T² 上的总曲率 ∫_T² K dA 等于？", options: ["4π", "2π", "0", "−4π"], answer: 2, explanation: "环面 χ=0，故 ∫K dA=2π·0=0。这意味着无论环面如何嵌入 R³，其外侧正曲率与内侧负曲率的总贡献必相互抵消。", difficulty: "medium", chapter: "ch8" },

  { type: "choice", q: "若闭曲面 M 处处 Gauss 曲率 K<0，则其亏格 g 满足？", options: ["g=0", "g=1", "g≥2", "g≤0"], answer: 2, explanation: "由 ∫K dA=4π(1−g)<0 得 1−g<0，即 g>1，故 g≥2。这说明负曲率闭曲面的拓扑至少是双环面。", difficulty: "medium", chapter: "ch8" },

// ======================== Ch9 (10题) ========================
// Jacobi场

  { type: "computation", q: "在欧氏空间 Rⁿ 中，沿测地线 γ(t)=p+t v（|v|=1）求解所有 Jacobi 场，并求满足 J(0)=0, J′(0)=W 的解。", answer: "①欧氏曲率张量 R=0。②Jacobi 方程 J″+R(J,γ′)γ′=J″=0。③通解为 J(t)=A+tB，其中 A,B 为常向量。④条件 J(0)=0 得 A=0，J′(0)=W 得 B=W，故 J(t)=tW。⑤任意初值都无非零解在有限时刻回到零点，故 Rⁿ 中没有共轭点。", difficulty: "medium", chapter: "ch9" },

  { type: "computation", q: "在单位球面 Sⁿ 上沿大圆 γ(t)=cos t·N+sin t·e（e⊥N, |e|=1）构造 Jacobi 场，并求共轭点。", answer: "①沿 γ 选平行正交标架 E(t)，令 J(t)=sin t·E(t)。②Sⁿ 截面曲率 K=1，且 E 平行，故 J″+R(J,γ′)γ′=J″+J=0。③J(0)=0，J′(0)=E(0)，是正常 Jacobi 场。④当 t=π 时 J(π)=0 对所有方向的 E 都成立，故共轭点为 γ(π)，即南极点。⑤球面上北极的共轭点唯一，为对径点。", difficulty: "hard", chapter: "ch9" },

  { type: "proof", q: "设 γ(t)=exp_p(tv) 是以 γ(0)=p、γ′(0)=v 为初始条件的测地线，W∈T_v(T_pM)。构造变分 Γ(s,t)=exp_p(t(v+sW))，证明 J(t)=∂_sΓ|_{s=0} 是 Jacobi 场。", answer: "①对每个 s，Γ(s,·) 是测地线，所以 ∂_tΓ 沿测地线，且 ∂_s 与 ∂_t 的 Lie 括号为零。②记 J=∂_sΓ，则 ∇_tJ=∇_t∂_sΓ=∇_s∂_tΓ+[∂_t,∂_s]Γ=∇_s∂_tΓ。③再用曲率与 Lie 括号恒等式，得 ∇_t∇_tJ=R(∂_t,∂_s)∂_t。④故 J″=−R(J,γ′)γ′，即 J″+R(J,γ′)γ′=0。⑤J(0)=∂_s exp_p(0)=0，且 J′(0)=W，双方对应。", difficulty: "hard", chapter: "ch9" },

  { type: "computation", q: "在双曲平面 H²（K=−1）中沿一条单位测地线 γ，求正常 Jacobi 方程的通解，并证明 H² 没有共轭点。", answer: "①把正常 Jacobi 场写成 J(t)=j(t)E(t)，E 为沿 γ 的平行正交场。②Jacobi 方程 j″+K j=0，而 K=−1，故 j″−j=0。③通解 j(t)=A e^t+B e^{−t}。④若 J(0)=0，则 j(t)=c sinh t，只有在 t=0 时才为零。⑤因此任何两个不同点之间都不存在共轭点，与 Cartan-Hadamard 定理一致。", difficulty: "medium", chapter: "ch9" },

  { type: "proof", q: "沿单位测地线 γ，证明 J(t)=γ′(t) 与 J(t)=tγ′(t) 都是 Jacobi 场，并说明它们对应何种变分。", answer: "①对 J=γ′，有 J′=∇_tγ′=0，所以 J″=0，且 R(γ′,γ′)γ′=0，Jacobi 方程成立。②对 J=tγ′，有 J′=γ′，J″=0，同样满足方程。③它们的方向都切于测地线，称为切向 Jacobi 场。④其对应沿测地线本身的重新参数化变分，不改变测地线的像，也不影响割点与共轭点。", difficulty: "medium", chapter: "ch9" },

  { type: "choice", q: "沿单位测地线 γ 的正常 Jacobi 方程是？", options: ["J″+R(J,γ′)γ′=0", "J″−R(J,γ′)γ′=0", "J′+R(J,γ′)γ′=0", "J″+K J=0"], answer: 0, explanation: "测地线变分的变分向量场满足 Jacobi 方程 ∇_t∇_t J+R(J,γ′)γ′=0。选项 D 只有在常曲率空间且 J 为法向平行标架时才成立（J″+KJ=0）。", difficulty: "medium", chapter: "ch9" },

  { type: "choice", q: "点 q 称为沿着测地线 γ 的共轭点，如果？", options: ["存在沿 γ 的非零 Jacobi 场在 γ(0) 和 q 处都为零", "γ 是闭测地线", "曲率在 q 处为零", "q 是 γ 的中点"], answer: 0, explanation: "共轭点的定义为：存在一个沿 γ 的非零 Jacobi 场 J，使得 J(t₀)=J(t₁)=0。共轭点对应指数映射的奇点，与曲率和测地线长度密切相关。", difficulty: "easy", chapter: "ch9" },

  { type: "choice", q: "在截面曲率 K=1 的单位球面 S² 上，从一点出发沿某条测地线，其共轭点出现在距离为？", options: ["π/2", "π", "2π", "1"], answer: 1, explanation: "对常曲率 K=1 的球面，法向正常 Jacobi 方程 j″+j=0，j(t)=sin t。j 在 t=π 再次为零，故共轭点距离为 π，即对径点。", difficulty: "medium", chapter: "ch9" },

  { type: "choice", q: "设 J 是 Jacobi 场且 J(0)=0, J′(0)=W。它与指数映射微分的关系是？", options: ["J(t)=d exp_p(tv)(tW)", "J(t)=exp_p(W)", "J(t)=d exp_p(0)(W)", "J(t)=tW+O(t²)"], answer: 0, explanation: "由变分构造 Γ(s,t)=exp_p(t(v+sW)) 得到 J(t)=∂_s exp_p(t(v+sW))|_{s=0}=d exp_p(tv)(tW)。这建立了 Jacobi 场与指数映射微分的等同。", difficulty: "hard", chapter: "ch9" },

  { type: "choice", q: "沿一条测地线越过其第一个共轭点之后，该测地线？", options: ["仍保持全局最短", "一般不再是最短测地线", "一定变成闭测地线", "长度发生改变"], answer: 1, explanation: "共轭点是测地线失去局部极小性的临界位置。越过第一个共轭点后，测地线不再是最短的，尽管它当然仍是测地线。割点通常在前一个共轭点或更早出现。", difficulty: "medium", chapter: "ch9" },

// ======================== Ch10 (10题) ========================
// 比较定理

  { type: "computation", q: "用 Bonnet-Myers 定理估计单位球面 S² 的直径上界，并与实际直径比较。", answer: "①S² 的 Ricci 曲率满足 Ric≥g，取 (n−1)k=1（n=2, k=1）。②Bonnet-Myers 定理给出 diam(S²)≤π/√k=π。③另一方面，球面上对径两点（如北极与南极）的距离为 π。④故 diam(S²)=π，定理的上界被恰好取到。⑤这说明 Bonnet-Myers 的估计在常正曲率模型上是锐利的。", difficulty: "medium", chapter: "ch10" },

  { type: "computation", q: "比较欧氏平面 R²、单位球面 S² 与双曲平面 H² 中半径为 r 的测地圆盘面积 A_r，说明曲率对体积/面积增长的影响。", answer: "①欧氏：周长 2πr，故 A_E(r)=∫₀^r 2πs ds=πr²。②球面：周长 2π sin s，A_S(r)=∫₀^r 2π sin s ds=2π(1−cos r)。③双曲：周长 2π sinh s，A_H(r)=∫₀^r 2π sinh s ds=2π(cosh r−1)。④小 r 三者近似 πr²；大 r 时球面面积有界，双曲面积指数增长，欧氏为二次增长。", difficulty: "hard", chapter: "ch10" },

  { type: "proof", q: "证明 Bonnet-Myers 定理的关键思想：若 Ric≥(n−1)k（k>0），任何长度超过 π/√k 的测地线都不再极小。", answer: "①取单位测地线 γ:[0,L]，沿其张成平行正交标架 E_1,…,E_{n−1}。②构造变分场 V_i(t)=sin(πt/L)E_i(t)。③第二变分公式 I(V_i,V_i)=∫⟨V_i″,V_i⟩−∫K(V_i,γ′)dt=[π²/L²−K(V_i,γ′)]∫sin²(πt/L)dt。④求和得 I≤(n−1)[π²/L²−k]∫sin² dt。⑤若 L>π/√k，则 I<0，γ 非极小；故直径≤π/√k。", difficulty: "hard", chapter: "ch10" },

  { type: "proof", q: "设 (M,g) 是 n 维黎曼流形且 Ric≥0。用 Bishop-Gromov 比较定理证明测地球体积满足 Vol(B(p,R))≤ωₙ Rⁿ。", answer: "①Ric=0 对应的比较空间是欧氏空间 Rⁿ。②Bishop-Gromov 定理：r↦Vol(B(p,r))/ωₙ rⁿ 单调非增。③当 r→0 时，该比值趋于 limVol(B_r)/ωₙrⁿ=1（小半径趋于欧氏）。④故在 r=R 处 Vol(B_R)/ωₙRⁿ≤1。⑤因此 Vol(B(p,R))≤ωₙRⁿ，非负 Ricci 流形的体积增长至多与欧氏空间相同。", difficulty: "hard", chapter: "ch10" },

  { type: "proof", q: "设 M 是 n 维完备黎曼流形且 Ric≥(n−1)k>0。证明 M 紧致，并给出直径与体积的上界。", answer: "①Bonnet-Myers 定理给出 diam(M)≤π/√k。②完备且 diameter 有限的黎曼流形按 Hopf-Rinow 是有界闭集紧致的，故 M 紧致。③再由 Bishop 体积比较，Vol(M)≤比较空间 S_n(k) 中半径为 π/√k 的球体积。④即 Vol(M)≤Vol(Sⁿ(1/√k))。⑤等号成立当且仅当 M 等距于常曲率 k 的球面。", difficulty: "hard", chapter: "ch10" },

  { type: "choice", q: "Bonnet-Myers 定理假设 Ric≥(n−1)k>0，其结论是？", options: ["流形必紧致且直径≤π/√k", "流形必平坦", "流形必单连通", "流形必常曲率"], answer: 0, explanation: "Ricci 有正下界时，Bonnet-Myers 定理给出直径的有界性，配合完备性可知流形紧致。它并不推出单连通或平坦；例如带度量的实射影空间也可能满足曲率下界条件。", difficulty: "medium", chapter: "ch10" },

  { type: "choice", q: "Hadamard-Cartan 定理：若完备黎曼流形 M 的截面曲率处处非正，则？", options: ["M 紧致", "M 单连通", "M 的万有覆盖空间微分同胚于 Rⁿ", "M 的直径有限"], answer: 2, explanation: "截面曲率非正的完备（且单连通的适当前提下）空间由 Hadamard-Cartan 定理可知与 Rⁿ 微分同胚，至少其万有覆盖空间同胚于 Rⁿ。直接 M 本身可以不单连通。", difficulty: "medium", chapter: "ch10" },

  { type: "choice", q: "Bishop-Gromov 体积比较定理中，能量条件对应的比较空间是？", options: ["相同维数的常曲率 k 模型空间", "欧氏空间", "任意球面", "双曲空间"], answer: 0, explanation: "当 Ric≥(n−1)k 时，比较对象是常截面曲率 k 的模型空间 Sⁿ(1/√k)、Rⁿ 或 Hⁿ(1/√|k|)；Bishop-Gromov 定理比较相应测地球体积的比值。", difficulty: "medium", chapter: "ch10" },

  { type: "choice", q: "Toponogov 三角形比较定理主要用于？", options: ["用曲率下界比较测地三角形边长与角", "计算 Euler 示性数", "证明曲面极小", "求等距群维数"], answer: 0, explanation: "Toponogov 定理在截面曲率有下界的流形与常曲率模型空间之间比较测地三角形的第三边、角度等几何量，是研究曲率下界几何的强有力工具。", difficulty: "medium", chapter: "ch10" },

  { type: "choice", q: "对 Ricci 曲率下界 Ric≥(n−1)k>0，对应的模型球面半径为？", options: ["1/√k", "√k", "1/k", "k"], answer: 0, explanation: "常曲率 k 的 n 维空间 Ric=(n−1)k，其实模型流形为半径 R=1/√k 的球面（截面曲率 1/R²=k）。因此在比较定理中常以此为基准模型。", difficulty: "easy", chapter: "ch10" },

];