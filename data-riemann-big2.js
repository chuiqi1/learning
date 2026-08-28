// ============================================================
// 黎曼几何补充测验题（第二批 · 大题）
// 基于 John M. Lee, Introduction to Riemannian Manifolds, 2nd ed.
// 每章 5 道大题（proof/computation），共 10 章 50 题。
// 与 data-riemann-big.js 的 5 大题/章 互补，避免重复。
// type 仅为 proof / computation。
// ============================================================

module.exports = [

// ======================== Ch1 什么是曲率？（5题） ========================

  { type: "computation", q: "求空间曲线 γ(t)=(e^t cos t, e^t sin t, e^t)（对数螺线在锥面 x²+y²=z² 上的提升）在 t 处的曲率 κ(t) 与挠率 τ(t)。", answer: "①γ′=e^t(cos t−sin t, sin t+cos t, 1)。记 a=(cos t−sin t, sin t+cos t,1)，|a|²=(cos t−sin t)²+(sin t+cos t)²+1=3，故 |γ′|=√3 e^t。②γ″=e^t(−2 sin t, 2 cos t, 1)，记 b=(−2 sin t,2 cos t,1)。③叉积 a×b=(sin t−cos t, −sin t−cos t, 2)，|a×b|²=6，故 |γ′×γ″|=e^{2t}|a×b|=√6 e^{2t}。④κ=|γ′×γ″|/|γ′|³=√6 e^{2t}/(3√3 e^{3t})=(√2/3)e^{−t}。⑤γ‴=e^t(−2 sin t−2 cos t, 2 cos t−2 sin t, 1)，混合积 (γ′,γ″,γ‴)=e^{3t}(a×b)·c=2e^{3t}，故 τ=2e^{3t}/(6e^{4t})=e^{−t}/3。两者随 t→∞ 趋于 0，曲线渐近于锥面的母线。", difficulty: "hard", chapter: "ch1" },

  { type: "proof", q: "推导 Frenet–Serret 方程：设 γ(s) 是单位速率空间曲线，T=γ′，N=T′/|T′|，B=T×N。证明存在函数 κ>0 与 τ 使得 T′=κN、N′=−κT+τB、B′=−τN。", answer: "①定义 κ=|T′|（假设 γ″≠0），则 N=T′/κ，即 T′=κN。②因 ⟨B,B⟩=1，⟨B,B⟩′=2⟨B′,B⟩=0，故 B′⊥B；又 ⟨B,T⟩=0 求导得 ⟨B′,T⟩+⟨B,T′⟩=0，而 B⊥N，⟨B,T′⟩=κ⟨B,N⟩=0，故 ⟨B′,T⟩=0。③于是 B′⊥B 且 B′⊥T，故 B′ 平行于 N，记 B′=−τN。④对 N=B×T 求导：N′=B′×T+B×T′=(−τN)×T+B×(κN)=τ(T×N)−κ(N×B)=τB−κT。⑤三式即 Frenet–Serret 方程，完全由 κ、τ 两不变量确定曲线的局部形状。", difficulty: "hard", chapter: "ch1" },

  { type: "computation", q: "已知平面曲线以极坐标 r=r(θ) 给出。求其曲率公式 κ，并对对数螺线 r=e^{aθ} 计算曲率。", answer: "①参数化 γ(θ)=(r cos θ, r sin θ)。②算得 x′y″−y′x″=r²+2r′²−rr″（其中 ′=d/dθ），且 x′²+y′²=r²+r′²。③故 κ=(r²+2r′²−rr″)/(r²+r′²)^{3/2}（带符号）。④取 r=e^{aθ} 有 r′=a e^{aθ}、r″=a² e^{aθ}，分子=e^{2aθ}(1+2a²−a²)=e^{2aθ}(1+a²)，分母=e^{3aθ}(1+a²)^{3/2}。⑤故 κ=e^{−aθ}/√(1+a²)，随 θ 增大按指数衰减，正是对数螺线自相似性的体现。", difficulty: "hard", chapter: "ch1" },

  { type: "proof", q: "证明平面曲线基本定理：给定光滑函数 κ(s)>0（弧长参数 s），存在一条单位速率平面曲线（差一个欧氏刚体运动外唯一）以 κ(s) 为带符号曲率。", answer: "①令 θ(s)=∫₀^s κ(u)du，定义 T(s)=(cos θ(s), sin θ(s))。②定义曲线 γ(s)=(∫₀^s cos θ(u)du, ∫₀^s sin θ(u)du)+γ(0)。③则 γ′(s)=T(s) 是单位向量，故 s 是弧长参数；γ″=(−sin θ·κ, cos θ·κ)=κ N，故带符号曲率为 κ。④唯一性：若 γ̃ 有相同 κ，定义 θ̃ 使 T̃ 转过的角相同，则 T̃=T（差常相位，可由初始 T(0) 决定），积分后 γ̃ 与 γ 至多差一个平移。⑤故由 κ 唯一确定（差刚体运动）；这是常微分方程解的存在唯一性的几何表达。", difficulty: "hard", chapter: "ch1" },

  { type: "computation", q: "Viviani 曲线是单位球面 x²+y²+z²=1 与圆柱面 (x−1/2)²+y²=1/4 的交线，参数化为 γ(t)=(cos²t, sin t cos t, sin t)。求其曲率 κ(t) 与挠率 τ(t)，并计算 t=0 处的值。", answer: "①γ′=(−2 sin t cos t, cos²t−sin²t, cos t)=(−sin 2t, cos 2t, cos t)。②γ″=(−2 cos 2t, −2 sin 2t, −sin t)，γ‴=(4 sin 2t, −4 cos 2t, −cos t)。③t=0 时 γ′(0)=(0,1,1)，γ″(0)=(−2,0,0)，γ‴(0)=(0,−4,−1)。④|γ′(0)|²=2，γ′×γ″=(0,1,1)×(−2,0,0)=(0·0−1·0, 1·(−2)−0·0, 0·0−1·(−2))=(0,−2,2)，|γ′×γ″|=2√2。⑤故 κ(0)=|γ′×γ″|/|γ′|³=2√2/(2√2)=1；混合积 (γ′,γ″,γ‴) 在 t=0 处 = det 计算得 τ(0)=0（该点位于曲线的一个顶点，密切平面瞬时不动）。", difficulty: "hard", chapter: "ch1" },

// ======================== Ch2 黎曼度量（5题） ========================

  { type: "computation", q: "在 Poincaré 上半平面 H²={(x,y):y>0} 配度量 g=(dx²+dy²)/y² 中，求体积形式、梯度算子与 Laplace 算子在坐标下的表达式。", answer: "①g_xx=g_yy=y^{−2}，det g=y^{−4}，故体积形式 dV=√(det g)dx∧dy=y^{−2}dx∧dy。②逆度量 g^{xx}=g^{yy}=y²。③梯度 grad f=y²(∂_x f ∂_x+∂_y f ∂_y)。④Laplace–Beltrami 算子 Δf=(1/√det)∂_i(√det g^{ij}∂_j f)=y²(∂_x²f+∂_y²f)（因 √det g^{ij}=y^{−2}·y²=1 恒等）。⑤故 Δ=y²(∂_x²+∂_y²)，与欧氏 Laplace 差一个共形因子。", difficulty: "medium", chapter: "ch2" },

  { type: "proof", q: "证明黎曼流形上的长度泛函 L(γ)=∫⟨γ′,γ′⟩^{1/2}dt 与能量泛函 E(γ)=½∫⟨γ′,γ′⟩dt 有相同的临界点（差重新参数化），且能量临界曲线必为常速测地线。", answer: "①E 的第一变分：δE=∫⟨∇_tγ′,δγ⟩dt，故 E 的临界点满足 ∇_tγ′=0，即测地线。②由 d/dt|γ′|²=2⟨∇_tγ′,γ′⟩=0，测地线速度恒定（常速）。③测地线的能量 E=½L²（当 L 以单位速率参数化且区间长 L）。④L 的临界点经弧长重参数化后速度恒定且满足测地线方程，故 L 临界点在重参数化后即 E 临界点。⑤因此二者临界点集仅差参数化，这解释为何求最短曲线即求测地线。", difficulty: "hard", chapter: "ch2" },

  { type: "computation", q: "设螺旋面（helicoid）F(u,v)=(v cos u, v sin u, c u)，c>0。求其第一基本形式 g、面积元 dA，并判断 u 是否为正交坐标。", answer: "①F_u=(−v sin u, v cos u, c)，F_v=(cos u, sin u,0)。②E=|F_u|²=v²+c²，F=⟨F_u,F_v⟩=0，G=|F_v|²=1。③故 g=(v²+c²)du²+dv²，坐标 u,v 正交（F=0）。④面积元 dA=√(EG−F²)dudv=√(v²+c²)dudv。⑤积分得有限区域面积 ∫∫√(v²+c²)dudv，含 ∫√(v²+c²)dv 的基本原函数。", difficulty: "medium", chapter: "ch2" },

  { type: "proof", q: "设映射 ϕ:(M,g)→(N,h) 满足 ϕ*h=g 且是局部微分同胚。证明 ϕ 保持长度、面积、体积与测地线（作为局部最短曲线）的结构。", answer: "①长度：对曲线 γ，Length(ϕ∘γ)=∫√(h(dϕ γ′,dϕ γ′))dt=∫√(g(γ′,γ′))dt=Length(γ)，因 ϕ*h=g。②面积/体积由长度元素诱导，逐点等距保持体积形式 ϕ*dV_h=dV_g，故体积不变。③局部微分同胚在每点给切空间的等距同构 dϕ_p。④测地线方程只依赖联络，而局部等距保持联络（Levi-Civita 联络由度量确定且用拉回对应）。⑤故测地线映射为测地线，E 与 L 临界点一一对应。", difficulty: "hard", chapter: "ch2" },

  { type: "computation", q: "用球极投影 z=(x+iy)/(1−u) 从球面 S² 北极为 N=(0,0,1) 投影到平面，写出 S² 的标准度量在复坐标 z 下的共形表示。", answer: "①球极投影逆变换给出 x=2Re z/(1+|z|²), y=2Im z/(1+|z|²), u=(|z|²−1)/(|z|²+1)。②代入 R³ 欧氏度量 dx²+dy²+du²，逐项微分并整理。③得到 g=4(dx²+dy²)/(1+|z|²)²，即 4|dz|²/(1+|z|²)²。④这是与 y=Im z=0 对应圆盘度量的共形（4 因子）版本。⑤故球极投影是球面（去北极）与平面之间的共形映射，保角。", difficulty: "hard", chapter: "ch2" },

// ======================== Ch3 模型黎曼流形（5题） ========================

  { type: "computation", q: "在双曲平面 H² 中求一般两点的测地线方程与双曲距离公式 d((x₁,y₁),(x₂,y₂))，并验证其关于点的对称性。", answer: "①当 x₁=x₂ 时，竖直测地线给 d=ln(y₂/y₁)（设 y₂>y₁）。②一般情形两点决定唯一正交于 x 轴的圆弧，圆心在 x 轴上，写出其参数方程。③用反双曲余弦表示：cosh d=1+|z₁−z₂|²/(2y₁y₂)。④故 d=arcosh(1+|z₁−z₂|²/(2y₁y₂))=2 arcsinh(|z₁−z₂|/(2√(y₁y₂)))。⑤该式对 z₁,z₂ 对称，且满足三角形不等式（由 H² 是 CAT(−1) 空间）。", difficulty: "hard", chapter: "ch3" },

  { type: "proof", q: "证明单连通常曲率模型空间的唯一性：设 (M,g) 是完备、单连通、截面曲率恒为 c 的 n 维黎曼流形，则它等距于对应模型空间（球面 Sⁿ、欧氏 Rⁿ 或双曲 Hⁿ）。", answer: "①证明思路（Killing 向量场法）：常曲率空间有极大维数 n(n+1)/2 的等距群。②对任意 p∈M 取线性等距 A:T_pM→T_pM̃（模型空间），定义映射 Φ=exp̃_p∘A∘exp_p^{−1}。③常曲率使 Jacobi 场在两侧有相同演化，故 Φ 是局部等距（借助 Cartan 定理或 Jacobi 方程比较）。④单连通 + 完备保证指数映射是全局微分同胚（Hadamard–Cartan 对 c≤0；对 c>0 用球面的有限单连通性质与覆盖论）。⑤故 Φ 是整体等距，唯一性得证。", difficulty: "hard", chapter: "ch3" },

  { type: "computation", q: "把实射影空间 RPⁿ 视为单位球面 Sⁿ 的对径点商空间，配诱导度量。求 RPⁿ 的直径 diameter，并说明这与球面直径的关系。", answer: "①商映射 Sⁿ→RPⁿ 是二重覆叠，诱导度量使投影是局部等距。②RPⁿ 中两点距离 = 它们在 Sⁿ 中两代表点（可取成角 ≤π/2）的大圆距离。③球面任意两点可在对径点等价下取角 θ∈[0,π/2]。④故最大距离为 π/2（对 θ=π/2），即直径 =π/2。⑤对比：Sⁿ 的直径是 π，商成 RPⁿ 后因对径点粘合而减半。", difficulty: "medium", chapter: "ch3" },

  { type: "computation", q: "在双曲平面 H² 中，设测地三角形三内角为 α,β,γ。证明其面积 A=π−(α+β+γ)，并由此说明双曲三角形内角和恒小于 π。", answer: "①Gauss-Bonnet 局部公式 ∫_Δ K dA+Σ(π−α_i)=2π。②H² 中 K=−1，边界为测地线故 k_g=0。③代入得 −A+3π−(α+β+γ)=2π。④移项 A=π−(α+β+γ)。⑤面积 A>0 迫使 α+β+γ<π，即双曲三角形内角和严格小于 π，与球面情形（>π）相反。", difficulty: "medium", chapter: "ch3" },

  { type: "proof", q: "在常曲率 c 的模型空间中，证明过一点且切于同一二维方向的测地线形成总测地面，并计算负曲率情形测地线的渐近行为。", answer: "①取 p 与二维方向 P⊂T_pM，由 P 中所有单位向量 v 出发的测地线 γ_v(t)=exp_p(tv) 张成一张过 p 的全测地曲面。②该曲面继承常曲率 c（由度量限制及其 Gauss 曲率计算）。③当 c<0 时，测地线 γ_v(t) 与 γ_{−v}(t) 反向延伸，其间的测地距离按 hyperbolic 增长。④用 Jacobi 场可证沿测地线的法向向量指数增长（因子 e^{√(−c)t}）。⑤这刻画了负曲率空间中测地线的发散（指数发散）行为。", difficulty: "hard", chapter: "ch3" },

// ======================== Ch4 联络（5题） ========================

  { type: "computation", q: "在单位球面 S² 的坐标 (φ,θ)（度量 dφ²+sin²φ dθ²）中，求所有非零 Christoffel 符号。", answer: "①g_φφ=1, g_θθ=sin²φ，g^φφ=1, g^θθ=sin^{−2}φ。②唯一导数 ∂_φ g_θθ=2sin φ cos φ。③Γ^θ_φθ=Γ^θ_θφ=(1/2)g^θθ∂_φ g_θθ=cot φ。④Γ^φ_θθ=−(1/2)g^φφ∂_φ g_θθ=−sin φ cos φ。⑤其余符号为零。由这些可写出球面测地线方程 φ̈−sin φ cos φ θ̇²=0、θ̈+2cot φ φ̇θ̇=0。", difficulty: "medium", chapter: "ch4" },

  { type: "proof", q: "设 ∇ 是黎曼流形上的 Levi-Civita 联络。证明无挠性等价于 ∇_XY−∇_YX=[X,Y]（对任意光滑向量场 X,Y）。", answer: "①无挠张量定义为 T(X,Y)=∇_XY−∇_YX−[X,Y]。②∇ 无挠即 T≡0，故 ∇_XY−∇_YX=[X,Y]。③反之若该式对所有 X,Y 成立，则 T=0，∇ 无挠。④在坐标基下 [∂_i,∂_j]=0，故无挠 ⟺ Γ^k_ij=Γ^k_ji。⑤该对称性是 Levi-Civita 联络对称性的几何来源，也是第二 Bianchi 恒等式成立的前提。", difficulty: "medium", chapter: "ch4" },

  { type: "computation", q: "设 X 是单位球面 S² 上沿纬线 φ=φ₀（非赤道）的单位切向量场。求沿该纬线平行移动向量一周后的和乐角（holonomy）。", answer: "①取纬线 γ(t)=(φ₀, t)（t∈[0,2π]），其弧长参数 s=t·sin φ₀，单位切向量 X=∂_θ/sin φ₀。②设 Y=a(t)∂_φ+b(t)∂_θ 为沿 γ 的平行向量场，平行条件 ∇_X Y=0。③代入 Christoffel 符号 Γ^θ_φθ=cot φ、Γ^φ_θθ=−sin φ cos φ，得 ȧ−cos φ₀ b=0 与 ḃ+cot φ₀ a=0（以 t 求导）。④该线性系统通解为简谐振荡，相位随 t 以速率 cos φ₀ 变化，即平行场相对 ∂_φ 的夹角增长率 dα/dt=cos φ₀。⑤沿纬线一周 t 增 2π，和乐角 Δα=∫₀^{2π} cos φ₀ dt=2π cos φ₀；赤道 φ₀=π/2 时 Δα=0（大圆是测地线，切平面不旋转）。", difficulty: "hard", chapter: "ch4" },

  { type: "proof", q: "证明曲率张量 R 是 (1,3) 型张量：即 R(fX,Y)Z=R(X,fY)Z=R(X,Y)(fZ)=fR(X,Y)Z 对任意光滑函数 f。", answer: "①按定义 R(X,Y)Z=∇_X∇_Y Z−∇_Y∇_X Z−∇_[X,Y]Z。②先看 R(fX,Y)Z：∇_{fX}∇_Y Z=f∇_X∇_Y Z；∇_Y∇_{fX}Z=∇_Y(f∇_X Z)=(Yf)∇_X Z+f∇_Y∇_X Z；∇_[fX,Y]Z=∇_{f[X,Y]−(Yf)X}Z=f∇_[X,Y]Z−(Yf)∇_X Z。③代入相消得 R(fX,Y)Z=fR(X,Y)Z。④同理对 Y 与 Z 线性；对 Z 情形用 Leibniz 规则与 [X,Y] 项相消。⑤故 R 对三个变量都是 C∞(M)-线性的，从而是张量场。", difficulty: "medium", chapter: "ch4" },

  { type: "computation", q: "设旋转曲面 F(u,v)=(f(u)cos v, f(u)sin v, g(u)) 配诱导度量。求其 Christoffel 符号 Γ^i_jk（用 f,g 及其导数表示），设坐标 u 为弧长参数（f′²+g′²=1）。", answer: "①F_u=(f′cos v, f′sin v, g′)，F_v=(−f sin v, f cos v,0)。②弧长参数使 E=|F_u|²=f′²+g′²=1，G=f²，F=0。③唯一导数 ∂_u G=2ff′。④Γ^v_uv=Γ^v_vu=f′/f；Γ^u_vv=−ff′；其余为零。⑤这些符号与原数据中 Clairaut 关系的 f²θ̇ 守恒一致（θ↔v）。", difficulty: "medium", chapter: "ch4" },

// ======================== Ch5 测地线与距离（5题） ========================

  { type: "computation", q: "用 Christoffel 符号（Ch4 结果）解单位球面 S² 的测地线方程，证明其测地线都是大圆。", answer: "①方程 φ̈−sin φ cos φ θ̇²=0，θ̈+2cot φ φ̇θ̇=0。②由第二式 (sin²φ θ̇)′=0，故 sin²φ θ̇=h 为常数（Clairaut）。③若 h=0，则 θ=const，得到过极点的子午线大圆。④若 h≠0，令 u=cot φ，将方程化为 u 关于 θ 的线性方程 u″+u=0，解 u=A cos θ+B sin θ，即 cot φ=A cos θ+B sin θ。⑤乘 sin φ 得 cos φ=A sin φ cos θ+B sin φ sin θ，即 z=Ax+By，是过原点平面与球面之交，即大圆。故所有测地线都是大圆。", difficulty: "hard", chapter: "ch5" },

  { type: "proof", q: "证明 Gauss 引理：设 γ(t)=exp_p(tv) 是径向测地线，则对任意 t，切向量 γ′(t) 与指数映射的 Jacobi 场（由初始法向 W 生成的正交于 γ′ 的场）正交。", answer: "①取 W⊥v，构造变分 Γ(s,t)=exp_p(t(v+sW))，J(t)=∂_sΓ|_{s=0}。②需证 ⟨J(t),γ′(t)⟩=0。f(t)=⟨J(t),γ′(t)⟩，f(0)=⟨J(0),γ′(0)⟩=⟨0,v⟩=0。③求导 f′=⟨J′,γ′⟩+⟨J,∇_tγ′⟩=⟨J′,γ′⟩（γ′ 测地）。④再求导 f″=⟨J″,γ′⟩+⟨J′,∇_tγ′⟩=⟨J″,γ′⟩=⟨−R(J,γ′)γ′,γ′⟩=0（曲率对称性）。⑤故 f 是一次函数，f(0)=0 且 f′(0)=⟨W,v⟩=0，所以 f≡0，即 J(t)⊥γ′(t) 对所有 t。Gauss 引理得证。", difficulty: "hard", chapter: "ch5" },

  { type: "computation", q: "在双曲平面 H² 的测地极坐标（原点 (0,1)）中，度量为 ds²=dr²+sinh²r dθ²。求从原点出发到点 (r₀,θ₀) 的测地线长度，并求半径为 R 的测地球体积。", answer: "①径向测地线就是 r 从 0 到 r₀ 的线段，长度即 ∫₀^{r₀}dr=r₀，故 d(原点,(r₀,θ₀))=r₀。②面积元 dA=√(det g)drdθ=sinh r drdθ。③测地球 B(0,R) 的面积 A(R)=∫₀^{2π}∫₀^R sinh r dr dθ=2π(cosh R−1)。④该面积随 R 指数增长，与欧氏 πR² 的二次增长相反。⑤这体现负曲率空间中体积的指数发散性。", difficulty: "medium", chapter: "ch5" },

  { type: "proof", q: "证明第一变分公式：对固定端点 p,q 的曲线族 γ_s（γ_0=γ），长度泛函满足 dL/ds|_{s=0}=−∫⟨V,∇_tγ′⟩dt+边界项，其中 V=∂_sγ 是变分向量场。", answer: "①写 L(s)=∫⟨γ′_s,γ′_s⟩^{1/2}dt。②对 s 求导并用 ⟨∇_sγ′,γ′⟩=⟨∇_tV,γ′⟩（无挠性 ∇_tV=∇_sγ′）：dL/ds=∫⟨∇_tV,γ′⟩/|γ′|dt。③分部积分（弧长参数下 |γ′|=1）：=⟨V,γ′⟩|_a^b−∫⟨V,∇_t(γ′)⟩dt。④固定端点意味着 V(a)=V(b)=0，边界项消失。⑤故 dL/ds|_{s=0}=−∫⟨V,∇_tγ′⟩dt；极小曲线需该式对一切 V 为零，即 ∇_tγ′=0，得到测地线方程。", difficulty: "hard", chapter: "ch5" },

  { type: "computation", q: "求旋转抛物面 z=x²+y² 上的测地线所满足的 Clairaut 关系，并求一条纬线是否为测地线。", answer: "①参数化 F(r,θ)=(r cos θ, r sin θ, r²)。②F_r=(cos θ, sin θ, 2r)，F_θ=(−r sin θ, r cos θ,0)。③E=1+4r²，F=0，G=r²，即 ds²=(1+4r²)dr²+r²dθ²。④Clairaut（旋转型）给 G(r)θ̇=r²θ̇=h 常数（此处需用测地线方程的第二式）。⑤纬线 r=r₀ 由 dr/dt=0 给出，测地线条件为 ∂_r G|_{r=r₀}=2r₀=0，即 r₀=0，仅顶点（r=0）是测地纬线；其余纬线均非测地线。", difficulty: "medium", chapter: "ch5" },

// ======================== Ch6 曲率（5题） ========================

  { type: "computation", q: "计算单位球面 S²（度量 dφ²+sin²φ dθ²）的黎曼曲率张量全部分量 R_ijkl，并验证截面曲率恒为 1。", answer: "①Christoffel 符号：Γ^θ_φθ=cot φ、Γ^φ_θθ=−sin φ cos φ，其余为零。②曲率分量公式 R^φ_θφθ=∂_φΓ^φ_θθ−∂_θΓ^φ_φθ+Γ^m_θθΓ^φ_φm−Γ^m_φθΓ^φ_θm。③逐项：∂_φ(−sin φ cos φ)=sin²φ−cos²φ；第二项为 0；Γ^m_θθΓ^φ_φm=Γ^φ_θθ·Γ^φ_φφ+Γ^θ_θθ·Γ^φ_φθ=0；Γ^m_φθΓ^φ_θm=Γ^φ_φθ·Γ^φ_θφ+Γ^θ_φθ·Γ^φ_θθ=cot φ·(−sin φ cos φ)=−cos²φ。④故 R^φ_θφθ=(sin²φ−cos²φ)−(−cos²φ)=sin²φ。⑤降一个指标：R_φθφθ=g_φφ·R^φ_θφθ=1·sin²φ=sin²φ；det g=g_φφ g_θθ=sin²φ。故 K=R_φθφθ/det g=sin²φ/sin²φ=1 处处，与单位球面常正曲率一致。", difficulty: "hard", chapter: "ch6" },

  { type: "proof", q: "证明第一（代数）Bianchi 恒等式：R(X,Y)Z+R(Y,Z)X+R(Z,X)Y=0。", answer: "①用无挠性与 R 的定义逐项展开。②R(X,Y)Z+R(Y,Z)X+R(Z,X)Y=∇_X∇_Y Z−∇_Y∇_X Z−∇_[X,Y]Z + 循环两式。③无挠性使 ∇_XY−∇_YX=[X,Y]，代入 Jacobi 恒等式 [[X,Y],Z]+[[Y,Z],X]+[[Z,X],Y]=0。④将协变导数项按 Jacobi 恒等式两两相消，最终所有项抵消为零。⑤坐标形式 R^i_{jkl}+R^i_{klj}+R^i_{ljk}=0；与无挠性合并可推出曲率张量的经典对称性。", difficulty: "hard", chapter: "ch6" },

  { type: "computation", q: "计算 n 维单位球面 Sⁿ（截面曲率 1）的 Ricci 曲率与标量曲率。", answer: "①曲率张量对常曲率 K=1 为 R(X,Y)Z=⟨Y,Z⟩X−⟨X,Z⟩Y。②Ric(X,Y)=Σ_{i=1}^n ⟨R(e_i,X)Y,e_i⟩。③代入 R(e_i,X)Y=⟨X,Y⟩e_i−⟨e_i,Y⟩X，得 Σ⟨⟨X,Y⟩e_i,e_i⟩−⟨⟨e_i,Y⟩X,e_i⟩=n⟨X,Y⟩−⟨X,Y⟩=(n−1)⟨X,Y⟩。④故 Ric=(n−1)g，标量曲率 S=g^{ij}R_ij=n(n−1)。⑤单位球面是 Einstein 流形，Ricci 曲率等于度量的 (n−1) 倍。", difficulty: "medium", chapter: "ch6" },

  { type: "proof", q: "证明具有常截面曲率 K 的流形，其黎曼曲率张量满足 R(X,Y)Z=K(⟨Y,Z⟩X−⟨X,Z⟩Y)。", answer: "①定义 T(X,Y,Z,W)=⟨R(X,Y)Z,W⟩ 与参考张量 T₀=K(⟨Y,Z⟩⟨X,W⟩−⟨X,Z⟩⟨Y,W⟩)。②两者都是满足全部代数对称（反对称、轮换 Bianchi、对换对称）的 (0,4) 张量。③命题等价于证明 T̃=T−T₀≡0。④常截面曲率意味着对所有 X⊥Y（单位），⟨R(X,Y)Y,X⟩⟨X,X⟩⟨Y,Y⟩−⟨X,Y⟩² 的分母归一后等于 K，即 T̃ 在正交平面上的取值全为零。⑤由张量的对称性，任何满足“正交平面上为零”的 4-线性对称张量必为零（可用单位正交基展开验证），故 T=T₀，命题得证。", difficulty: "hard", chapter: "ch6" },

  { type: "computation", q: "设三维黎曼流形在某正交标架下截面曲率三值为 K₁₂,K₁₃,K₂₃。写出 Ricci 张量与该标架相关的分量，并求标量曲率。", answer: "①在正交标架 e₁,e₂,e₃ 下，Ric(e₁,e₁)=K₁₂+K₁₃（因为截面曲率 K_ij=⟨R(e_i,e_j)e_j,e_i⟩）。②同理 Ric(e₂,e₂)=K₁₂+K₂₃，Ric(e₃,e₃)=K₁₃+K₂₃。③交叉项 Ric(e_i,e_j)=0（i≠j）由正交标架下曲率对称性保证（需要完备前提，一般三维成立）。④标量曲率 S=Σ Ric(e_i,e_i)=2(K₁₂+K₁₃+K₂₃)。⑤截面曲率决定 Ricci（反之三维情形成立），这正是三维流形做为 Einstein 的 Ric=λg 等价于 K₁₂=K₁₃=K₂₃=λ/2 的根据。", difficulty: "medium", chapter: "ch6" },

// ======================== Ch7 黎曼子流形（5题） ========================

  { type: "computation", q: "求圆柱面 x²+y²=R² 在 R³ 中的形状算子、主曲率、平均曲率与 Gauss 曲率。", answer: "①参数化 F(θ,z)=(R cos θ, R sin θ, z)。②F_θ=(−R sin θ, R cos θ,0)，F_z=(0,0,1)，单位法 N=(cos θ, sin θ,0)。③F_θθ=−R(cos θ,sin θ,0)=−R N，F_θz=F_zz=0。④故第二基本形式 II_θθ=⟨F_θθ,N⟩=−R，其余为 0（符号依赖定向）。⑤主曲率 κ₁=−1/R（沿 θ 方向），κ₂=0（沿 z 方向），故 H=(κ₁+κ₂)/2=−1/(2R)，Gauss 曲率 K=κ₁κ₂=0。圆柱面可展开，曲率为零符合直觉。", difficulty: "medium", chapter: "ch7" },

  { type: "proof", q: "证明 Gauss 方程（等价形式）：对子流形 M⊂M̄，⟨R̄(X,Y)Z,W⟩=⟨R(X,Y)Z,W⟩+⟨II(Y,Z),II(X,W)⟩−⟨II(X,Z),II(Y,W)⟩，其中 X,Y,Z,W 是 M 的切向量场。", answer: "①Gauss 分解 ∇̄_XY=∇_XY+K(X,Y)（K 为第二基本形式，取值于法丛）。②将切向曲率展开：∇̄_X∇̄_Y Z=∇_X∇_Y Z+K(X,∇_Y Z)+∇^⊥_X K(Y,Z)。③对 X,Y 反对称化并减去 [X,Y] 项，切线分量得关系 R(X,Y)Z=(R̄(X,Y)Z)^⊤+相应的 K 项组合。④具体地：⟨R(X,Y)Z,W⟩=⟨R̄(X,Y)Z,W⟩−⟨K(Y,Z),K(X,W)⟩+⟨K(X,Z),K(Y,W)⟩。⑤移项即得 Gauss 方程，它把内蕴曲率 R 与外围曲率 R̄ 及第二基本形式 K 联系起来。", difficulty: "hard", chapter: "ch7" },

  { type: "computation", q: "对旋转曲面 F(u,v)=(f(u)cos v, f(u)sin v, g(u))（f′²+g′²=1），求第二基本形式系数 L,M,N 与 Gauss 曲率 K。", answer: "①F_uu=(f″cos v, f″sin v, g″)，F_uv=(−f′sin v, f′cos v,0)，F_vv=(−f cos v,−f sin v,0)。②单位法 N=(g′cos v, g′sin v,−f′)。③L=⟨F_uu,N⟩=f″g′−g″f′；M=⟨F_uv,N⟩=0；N=⟨F_vv,N⟩=f g′。④Gauss 曲率 K=LN/(EG−F²)=(f″g′−g″f′)(f g′)/(1·f²)=(f″g′−g″f′)g′/f。⑤由 f′²+g′²=1 求导得 f′f″+g′g″=0，可进一步化简为 K=−f″/f（当 g′≠0 时消去），这是旋转曲面最经典的曲率公式。", difficulty: "hard", chapter: "ch7" },

  { type: "proof", q: "陈述并证明 Codazzi–Mainardi 方程：对 R³ 中的曲面，主曲率方向相关的 Codazzi 等式，说明第二基本形式满足的可积性条件。", answer: "①法向分量 ∇̄ 的协变导数对 X,Y 反对称化得 Codazzi 方程：(∇̄_XY)ᵀ 无挠给出 ∇_X^{\perp}K(Y,Z)−∇_Y^{\perp}K(X,Z)=(R̄(X,Y)Z)^⊥。②R³ 中 R̄=0，故 ∇^⊥_X K(Y,Z)=∇^⊥_Y K(X,Z)（对所有切向量 X,Y,Z）。③在坐标下即 Codazzi 方程：∇_k L_ij−∇_j L_ik=0（第二基本形式关于 Levi-Civita 联络的协变导数之对称性）。④与 Gauss 方程一起构成曲面基本方程（可积性条件）。⑤Bonnet 定理说：满足 Gauss–Codazzi 方程的第一、第二基本形式必由某个曲面对应（差刚体运动），是平面曲线基本定理的曲面推广。", difficulty: "hard", chapter: "ch7" },

  { type: "computation", q: "求椭球面 x²/a²+y²/b²+z²/c²=1 上一点 (x₀,y₀,z₀) 处的 Gauss 曲率 K 的公式。", answer: "①令 F(x,y,z)=x²/a²+y²/b²+z²/c²，单位法向 N=∇F/|∇F|。②∇F=(2x/a², 2y/b², 2z/c²)，|∇F|=2√(x²/a⁴+y²/b⁴+z²/c⁴)。③第二基本形式 II=(1/|∇F|) Hess F 限制在切平面（取合适定向符号）。④Gauss 曲率 = (det II)/(det I)=det H_{X}/det g，其中 H_{X} 是沿法向的外围 Hess。⑤经直接计算得 K=1/(a²b²c²)·(x²/a⁴+y²/b⁴+z²/c⁴)^{−2}；任意点 >0，椭球面曲率处处为正，由 Gauss-Bonnet 总曲率为 4π（同胚球面）。", difficulty: "hard", chapter: "ch7" },

// ======================== Ch8 Gauss-Bonnet定理（5题） ========================

  { type: "computation", q: "求亏格 2 的闭曲面 M₂ 的总曲率 ∫_{M₂} K dA，并求其 Euler 示性数与平均曲率不为零的结论。", answer: "①亏格 g=2 的闭定向曲面 Euler 示性数 χ=2−2g=2−4=−2。②Gauss-Bonnet ∫_M K dA=2πχ=2π(−2)=−4π。③故总曲率为 −4π（负）。④一个推论：M₂ 上 Gauss 曲率不能处处非负，否则积分为正与 −4π 矛盾。⑤这量化了“双环面必须有负曲率区域”的拓扑约束。", difficulty: "medium", chapter: "ch8" },

  { type: "proof", q: "用三角剖分证明闭曲面的全局 Gauss-Bonnet 定理：∫_M K dA=2πχ(M)。", answer: "①取 M 的一个测地三角剖分（每条边是测地线段），顶点、边、面数记为 V,E,F。②在每个三角形上应用局部 Gauss-Bonnet：∫_Δ K dA+Σ外角=2π（测地边界 k_g=0）。③对全部 F 个三角形求和：∫_M K dA+Σ_{所有顶点}外角 =2πF。④每个顶点处外角之和=2π−该顶点的内角和，而所有顶点的内角之和 = 每个面的内角和 = Σ_面 π=πF（因每个测地三角形内角和为 π）。于是 Σ外角=2πV−πF。⑤整理得 ∫_M K dA=2πF−(2πV−πF)=π(3F−2V)。但 3F=2E（每个面 3 条边、每条边被 2 面共用），故=2π(E−V+F)=2πχ(M)。", difficulty: "hard", chapter: "ch8" },

  { type: "computation", q: "对带边界的单位圆盘 D（平面，K=0），用局部 Gauss-Bonnet 计算边界测地曲率的积分 ∫_∂D k_g ds。", answer: "①平面 K=0，局部 Gauss-Bonnet ∫_D K dA+∫_∂D k_g ds=2πχ(D)=2π。②K=0 使面积分消失。③故 ∫_∂D k_g ds=2π。④独立验证：圆 ∂D 半径 R=1 的测地曲率 k_g=1/R=1（曲线在平面中的曲率），弧长 2π·1=2π，积分 =1·2π=2π。⑤两者一致，说明 Gauss-Bonnet 对带边界流形成立（注意外角项在光滑边界上为零）。", difficulty: "medium", chapter: "ch8" },

  { type: "proof", q: "证明一个紧致曲面的 Euler 示性数 χ 与具体三角剖分的选取无关。", answer: "①设 T 是 M 的一个三角剖分，定义 χ(T)=V−E+F。②若 T′ 是另一个三角剖分，可通过一系列“重分”操作（劈开一个面、去掉一条边等）在两个剖分之间过渡。③检验每种基本重分操作（细分一个三角形为三个、合并等）均保持 V−E+F 不变。④细分：把三角形加一内部点连到三顶点，ΔV=+1, ΔE=+3, ΔF=+2，V−E+F 不变；其余操作同理。⑤故 χ(T)=χ(T′)，χ 只依赖曲面本身，是拓扑不变量。", difficulty: "medium", chapter: "ch8" },

  { type: "computation", q: "设闭双曲曲面（K=−1）M 亏格 g≥2。由 Gauss-Bonnet 求其面积 A 的公式，并证明 A≥2π(g−1) 的下界推广。", answer: "①Gauss-Bonnet：∫_M K dA=−A=2πχ(M)=2π(2−2g)=4π(1−g)。②故 A=4π(g−1)。③这是闭双曲曲面的严格面积公式：例如双环面 g=2 必有 A=4π。④通常的双曲面积下界也是对一般负曲率流形 ∫(−K)dA 与 2π|χ| 的比较得出的。⑤故亏格越大，与之相容的常负曲率度量所需面积越大。", difficulty: "medium", chapter: "ch8" },

// ======================== Ch9 Jacobi场（5题） ========================

  { type: "computation", q: "求常曲率 K=c 空间中等距的法向 Jacobi 方程 j″+c·j=0 的通解，并分类 c>0、c=0、c<0 三种情形的通解与共轭点。", answer: "①常曲率下法向平行标架的 Jacobi 方程为标量方程 j″+c j=0。②c>0：j=A cos(√c t)+B sin(√c t)，A=0 时 j∝sin(√c t) 在 t=π/√c 处回零，共轭点距离 π/√c。③c=0：j=A+Bt，线性函数只有单根，无非零正常 Jacobi 场回零，故无共轭点。④c<0：j=A cosh(√(−c) t)+B sinh(√(−c) t)，双曲函数无第二个零点。⑤故只有正曲率（c>0）空间有共轭点，这支撑了“正曲率聚焦、非正曲率发散”的直观。", difficulty: "medium", chapter: "ch9" },

  { type: "proof", q: "证明指数映射 exp_p 在 v∈T_pM 处是奇异（临界）的当且仅当 γ(t)=exp_p(tv) 在 t=1 处与 p 共轭。", answer: "①exp_p 在 v 处奇异 ⟺ d(exp_p)_v 有非平凡核。②由 Jacobi 场与指数映射微分的同一性 d(exp_p)_v(tW)=J(t)（W 为切于 T_pM 的向量，J 为对应 Jacobi 场）。③取 t=1：d(exp_p)_v(W)=J(1)，其中 J(0)=0, J′(0)=W。④故存在 W≠0 使 d(exp_p)_v(W)=0 ⟺ 存在非零 Jacobi 场 J 满足 J(0)=0, J(1)=0 ⟺ γ(1)=exp_p(v) 与 p 沿 γ 共轭。⑤命题得证；共轭点恰是指数映射的正则值退化位置。", difficulty: "hard", chapter: "ch9" },

  { type: "computation", q: "沿测地线 γ，对端点固定的变分计算第二变分 I(V,V)，并说明 I 当曲率足够正时为负的判定。", answer: "①第二变分公式 I(V,V)=∫_a^b [⟨V′,V′⟩−⟨R(V,γ′)γ′,V⟩]dt（V(a)=V(b)=0）。②把 V 分解为切向与法向，切向部分可吸收到重新参数化中不计，法向部分记为 J。③对法向 Jacobi 场（满足 Jacobi 方程），I(J,J)=⟨J′,J⟩|_a^b=0（边界为零时）。④一般变分在共轭点前 I>0，过第一个共轭点后出现使 I<0 的方向（由 Jacobi 场在共轭点回零的性质）。⑤故正曲率空间中过共轭点后测地线失去极小性，这是“聚焦”的第二变分解释。", difficulty: "hard", chapter: "ch9" },

  { type: "proof", q: "证明 Jacobi 方程的解空间是 2n 维线性空间，且切向 Jacobi 场（形如 J(t)=γ′(t) 与 J(t)=tγ′(t)）张成 2 维子空间。", answer: "①Jacobi 方程 J″+R(J,γ′)γ′=0 是二阶线性常微分方程，初值 (J(a),J′(a)) 决定唯一解。②每个初值对在 n 维切空间中自由选取，故解空间维数为 2n。③验证 J=γ′ 是解：∇_t²γ′=∇_t(0)=0，且 R(γ′,γ′)γ′=0。④验证 J=tγ′ 是解：∇_t(tγ′)=γ′，∇_t²(tγ′)=0。⑤二者线性无关且都是切向（沿 γ′ 方向），张成切向 Jacobi 场子空间；真正影响共轭/极小性的是 n−1 维法向 Jacobi 场。", difficulty: "medium", chapter: "ch9" },

  { type: "computation", q: "在单位球面 S² 上沿大圆，求满足 J(0)=0、J′(0)=W（W 为法向单位向量）的法向 Jacobi 场 J(t)，并求其首次回零的时刻。", answer: "①S² 截面曲率 K=1，法向平行标架 E(t)，写 J(t)=j(t)E(t)。②Jacobi 方程 j″+K j=j″+j=0。③通解 j=A cos t+B sin t，条件 j(0)=0 得 A=0，j′(0)=B=1 得 j(t)=sin t。④故 J(t)=sin t·E(t)。⑤j(t)=sin t 首次在 t=π 回零，故共轭点距离 π（南极点），这是球面上北极的唯一共轭点。", difficulty: "medium", chapter: "ch9" },

// ======================== Ch10 比较定理（5题） ========================

  { type: "computation", q: "设 2 维完备黎曼流形 M 的 Gauss 曲率 K≥1。用 Bonnet-Myers 定理估计 M 的直径上界，并说明等式情形的流形结构。", answer: "①二维 Ricci=K·g，故 K≥1 等价于 Ric≥1·g，取 (n−1)k=1（n=2, k=1）。②Bonnet-Myers 给 diam(M)≤π/√k=π。③直径上界 π（单位球面恰好取到，因 S² 直径恰为 π）。④取等号需要 M 等距于常曲率 1 的球面 S²（比较定理的刚性部分）。⑤因此任意 Gauss 曲率 ≥1 的二维完备流形，其“两最远点距离”至多 π，且仅球面取得。", difficulty: "medium", chapter: "ch10" },

  { type: "proof", q: "证明 Hadamard–Cartan 定理：设 (M,g) 完备、单连通、截面曲率处处 ≤0。则指数映射 exp_p 是 T_pM 到 M 的（整体）微分同胚。", answer: "①关键：K≤0 ⟹ 没有共轭点。沿任意测地线的法向 Jacobi 方程在 K≤0 下无非平凡回零解（见 Ch9 分类）。②无共轭点 ⟹ exp_p 无奇异点，即 d(exp_p)_v 处处非奇异。③故 exp_p 是局部微分同胚。④又 M 完备（Hopf-Rinow）⟹ exp_p 是满射（任何点可沿最短测地线到达）。⑤局部微分同胚 + 满射 + 底空间单连通 ⟹ exp_p 是覆盖映射，单连通定义域为整个 Rⁿ，故为整体微分同胚，M 与 Rⁿ 微分同胚。", difficulty: "hard", chapter: "ch10" },

  { type: "computation", q: "求常曲率空间（欧氏、球面、双曲）半径为 R 的测地球体积公式 V(R)（n 维，含归一化系数 ω_{n-1}=面积单位球面）。", answer: "①欧氏：V_E(R)=ω_{n-1}Rⁿ/n =ω_n Rⁿ（ω_n 为单位球体积）。②球面（K=k=1/R₀²）：体积元径向 r 给 sin^{n−1}(√k r)，V_S(R)=ω_{n-1}∫_0^R sin^{n−1}(√k r)dr（用模型球半径归一）。③双曲（K=−k）：V_H(R)=ω_{n-1}∫_0^R sinh^{n−1}(√k r)dr。④三者小 r 展开主项都是 ω_{n-1}Rⁿ/n（一致于欧氏），差异在更高阶。⑤Bishop-Gromov 比较定理断言：Ric≥(n−1)k 的流形测地球体积不超过同一 k 的常曲率模型空间的球体积，且比值单调非增。", difficulty: "hard", chapter: "ch10" },

  { type: "proof", q: "证明 Synge 定理：设 (M,g) 是偶数维、可定向、截面曲率 >0 的紧致黎曼流形，则 M 单连通。", answer: "①若 π₁(M)≠0，取最短非平凡闭测地线 γ（完备 + 正曲率保证紧致且存在最短闭测地线）。②沿 γ 平行移动一周给正交变换 P:γ′^⊥→γ′^⊥，且 P 保持 γ′ 不动。③正曲率（K>0）与奇数维数通过一个综合命题（Synge 的思想：用缩短的平行向量场变分使 γ 缩短）推出 P 在法空间上有特征值 1，即存在被 P 固定的法向向量。④因 M 可定向，P 的行列式为 +1；结合有固定向量可推出存在平行场 W 使闭测地线可沿法向连续移动缩短，矛盾于 γ 最短。⑤故 π₁(M)=0，M 单连通。维数奇偶通过 P 是奇维正交变换具有实特征值（奇数维实正交矩阵必有特征值 1）这一线性代数事实进入。", difficulty: "hard", chapter: "ch10" },

  { type: "computation", q: "用 Toponogov 三角形比较定理：设 M 截面曲率 K≥k=1，γ₁,γ₂ 从 p 出发成角 θ，长度均为 L。估计 γ₁、γ₂ 端点间的距离 d(q₁,q₂) 上界。", answer: "①在常曲率 k=1 的模型球面 S² 上做相同的“铰链”：两条从同一顶点出发、夹角 θ、长度 L 的测地线。②比较空间 S² 中由球面余弦律 cos c=cos²L+sin²L cos θ 给出第三边（对边）长 c。③Toponogov 比较定理断言：曲率下界 k=1 的流形中，第三边长度不超过比较空间的第三边长度。④即 d(q₁,q₂)≤c，其中 c=arccos(cos²L+sin²L cos θ)。⑤当 L 较大使 cos²L+sin²L cos θ<−1 时，球面上两条测地线在 L<π 前已相交，Toponogov 保证原流形中测地线相交更早，这是正曲率聚焦的刚性刻画。", difficulty: "hard", chapter: "ch10" },

];