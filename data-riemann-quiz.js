// ============================================================
// 黎曼几何题库（扩展版）
// 基于 John M. Lee, Introduction to Riemannian Manifolds, 2nd ed.
// 每章 22-23 题（原有10题 + 新增12-13题），共 220+ 题
// 格式：module.exports = [quiz1, quiz2, ...]
// 生成日期: 2026-08-28
// ============================================================

module.exports = [

// ================================================================
// Ch1: 什么是曲率？(原有10题 + 新增12题 = 22题)
// ================================================================

  // ---- 原有题目 ----
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

  // ---- 新增题目 (12题) ----
  { q: "直线的曲率是多少？", options: ["0", "1", "∞", "未定义"], answer: 0, explanation: "直线不弯曲，单位切向量恒定，γ''(s)=0，故曲率恒为零。这也是曲率定义的自然推论：曲率度量偏离直线的程度。", difficulty: "easy", chapter: "ch1" },
  { q: "曲面上一点处的主曲率κ₁, κ₂是下列哪个量的特征值？", options: ["度量张量g_ij", "形状算子（Weingarten映射）", "Christoffel符号", "Gauss映射的微分"], answer: 1, explanation: "主曲率是形状算子S = -dN（Weingarten映射）的特征值。形状算子是切空间到自身的自伴线性映射，特征值κ₁, κ₂给出法曲率的极值。", difficulty: "easy", chapter: "ch1" },
  { q: "Euler公式κ_n(θ) = κ₁cos²θ + κ₂sin²θ描述了曲面上一点的什么性质？", options: ["Gauss曲率随方向变化", "法曲率随切方向的变化", "测地曲率随方向变化", "平均曲率随方向变化"], answer: 1, explanation: "Euler公式给出沿与主方向成角θ的切方向的法曲率。法曲率在κ₁和κ₂之间变化，是主曲率的方向加权平均。", difficulty: "medium", chapter: "ch1" },
  { q: "曲面上一点的平均曲率H的定义是？", options: ["H = κ₁κ₂", "H = (κ₁ + κ₂)/2", "H = κ₁ - κ₂", "H = √(κ₁κ₂)"], answer: 1, explanation: "平均曲率H = (κ₁+κ₂)/2 = (1/2)tr(S)，是形状算子迹的一半。极小曲面满足H=0，即面积泛函的临界点。", difficulty: "easy", chapter: "ch1" },
  { q: "曲面上一点称为脐点（umbilical point），如果：", options: ["K = 0", "H = 0", "κ₁ = κ₂", "K < 0"], answer: 2, explanation: "脐点处两个主曲率相等（κ₁=κ₂），所有方向的法曲率都相同，形状算子是纯量算子。球面上每点都是脐点；椭球面有4个脐点。", difficulty: "medium", chapter: "ch1" },
  { q: "Gauss映射N: M → S²将曲面上一点映射到该点的什么？", options: ["位置向量", "单位法向量", "切平面", "主方向"], answer: 1, explanation: "Gauss映射将曲面上的每点映射到该点处的单位法向量（视为S²上的点）。Gauss曲率K = det(dN)是Gauss映射微分的行列式。", difficulty: "medium", chapter: "ch1" },
  { q: "Meusnier定理断言：曲面上过同一点且有相同切方向的所有曲线，它们的什么量相同？", options: ["测地曲率", "法曲率", "Gauss曲率", "挠率"], answer: 1, explanation: "Meusnier定理：法曲率仅依赖于切方向，不依赖于曲线在曲面内的具体形状。κ_n = κ cosθ，其中κ是曲线曲率，θ是曲线主法向与曲面法向的夹角。", difficulty: "medium", chapter: "ch1" },
  { q: "对于旋转曲面，经线和纬线总是：", options: ["测地线", "曲率线（lines of curvature）", "渐近曲线", "脐点曲线"], answer: 1, explanation: "旋转曲面的经线和纬线构成正交的曲率线网。沿曲率线，切方向是主方向，法曲率达到极值，且曲率线具有正交性和可积性。", difficulty: "medium", chapter: "ch1" },
  { q: "平面曲线基本定理：给定光滑函数κ(s)>0，平面曲线由κ(s)确定到差什么？", options: ["一个刚体运动（旋转+平移）", "一个缩放变换", "一个反射", "完全确定，无自由度"], answer: 0, explanation: "给定曲率函数κ(s)，存在唯一（差刚体运动）的平面曲线以κ(s)为曲率。这由求解Frenet方程得到，初始标架的选择对应刚体运动自由度。参考Lee习题1-3。", difficulty: "medium", chapter: "ch1" },
  { q: "极小曲面（如悬链面、螺旋面）满足什么条件？", options: ["H = 0且K = 0", "H = 0", "K = 0", "H = K = 常数"], answer: 1, explanation: "极小曲面是面积泛函的临界点，满足平均曲率H = 0。这不一定意味着K = 0：例如悬链面H=0但K<0（除个别点外）。极小曲面方程是二阶非线性椭圆型PDE。", difficulty: "medium", chapter: "ch1" },
  { q: "封闭简单平面曲线的总曲率（∫κ ds）等于多少？", options: ["0", "2π", "π", "4π"], answer: 1, explanation: "对于简单封闭平面曲线，切线旋转的总角度为2π（绕行一周），故∫κ ds = 2π。这是平面曲线版本的Gauss-Bonnet型定理，也是旋转指标定理。", difficulty: "hard", chapter: "ch1" },
  { q: "R³中曲面的第二基本形式II(X,Y)和形状算子S的关系是？", options: ["II(X,Y) = ⟨S(X), Y⟩", "II(X,Y) = ⟨X, S(Y)⟩", "II(X,Y) = ⟨S(X), Y⟩N", "II(X,Y) = ⟨S(X), S(Y)⟩"], answer: 0, explanation: "标量第二基本形式定义为II(X,Y) = ⟨S(X), Y⟩ = ⟨X, S(Y)⟩（S是自伴算子）。向量值第二基本形式为II(X,Y) = ⟨S(X), Y⟩N。S的特征值即主曲率。", difficulty: "hard", chapter: "ch1" },

// ================================================================
// Ch2: 黎曼度量 (原有10题 + 新增12题 = 22题)
// ================================================================

  // ---- 原有题目 ----
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

  // ---- 新增题目 (12题) ----
  { q: "设F: M → N是光滑映射，h是N上的黎曼度量。拉回度量F*h在局部坐标下的分量表达式为？", options: ["(F*h)_ij = h_ij ∘ F", "(F*h)_ij = (∂F^a/∂x^i)(∂F^b/∂x^j) h_ab ∘ F", "(F*h)_ij = h_ij", "(F*h)_ij = (∂F^i/∂x^a)(∂F^j/∂x^b) h_ab"], answer: 1, explanation: "拉回度量分量公式：(F*h)_ij = (∂F^a/∂x^i)(∂F^b/∂x^j) h_ab(F(x))。这是张量变换法则的直接应用，两个Jacobi矩阵的缩并。参考Lee习题2-3。", difficulty: "easy", chapter: "ch2" },
  { q: "设(M,g)是黎曼流形，f: M → R是光滑函数。函数f的Laplacian定义为Δf = div(grad f)。在局部坐标下，Δf = ?", options: ["Δf = ∂_i∂^i f", "Δf = (1/√|g|) ∂_i(√|g| g^ij ∂_j f)", "Δf = g^ij ∂_i∂_j f", "Δf = ∂_i(g^ij ∂_j f)"], answer: 1, explanation: "Laplace-Beltrami算子：Δf = (1/√|g|) ∂_i(√|g| g^ij ∂_j f)。注意√|g|项来自散度算子在弯曲空间中的修正，这是黎曼几何中Laplace算子的标准形式。", difficulty: "medium", chapter: "ch2" },
  { q: "设f: (M,g) → (N,h)是等距浸入（即f*h = g），则dim M和dim N满足什么关系？", options: ["dim M = dim N", "dim M ≤ dim N", "dim M ≥ dim N", "dim M = dim N - 1"], answer: 1, explanation: "等距浸入要求f*h = g，即对任意v,w，h(df(v), df(w)) = g(v,w)。由于g正定，df必须是单射，故dim M ≤ dim N。当dim M = dim N时，等距浸入就是等距映射（局部微分同胚）。", difficulty: "medium", chapter: "ch2" },
  { q: "共形变换h = e^(2f)g下，体积形式如何变化？", options: ["不变", "乘以e^(2f)", "乘以e^(nf)，其中n=dim M", "乘以e^(f)"], answer: 2, explanation: "在共形变换g' = e^(2f)g下，det(g') = e^(2nf)det(g)，故√(det(g')) = e^(nf)√(det(g))。因此体积形式dV_g' = e^(nf) dV_g。", difficulty: "medium", chapter: "ch2" },
  { q: "设(M,g)是黎曼流形，其上一组局部坐标(x^i)满足g_ij = δ_ij在某点p处成立。以下说法正确的是？", options: ["该坐标一定是法坐标", "这样的坐标总是存在", "该坐标一定是等温坐标", "在p处Christoffel符号Γ^k_ij(p)=0"], answer: 1, explanation: "通过Gram-Schmidt正交化过程，总可以在任意点p处找到一组坐标使g_ij(p)=δ_ij。但注意这只保证度量在p点的值，不保证一阶导数为零（后者需要法坐标）。", difficulty: "medium", chapter: "ch2" },
  { q: "设(M,g)是n维黎曼流形，一个(0,2)-型张量T称为共形Killing张量，如果它满足什么条件？", options: ["∇_i T_jk = 0", "∇_i T_jk + ∇_j T_ki + ∇_k T_ij = 0", "∇_i T_jk + ∇_j T_ik = λg_ij", "T_ij = c·g_ij"], answer: 2, explanation: "共形Killing张量满足∇_i T_jk + ∇_j T_ik = λg_ij（λ是某函数）。当T = g时，左端为∇_i g_jk + ∇_j g_ik = 0（度量相容性），退化为平凡情形。这是Killing向量场概念的推广。", difficulty: "hard", chapter: "ch2" },
  { q: "设(X, g_X)和(Y, g_Y)是黎曼流形。乘积流形X×Y上的乘积度量定义为？", options: ["g = g_X + g_Y", "g = g_X × g_Y", "g = π_X^*g_X + π_Y^*g_Y", "g = π_X^*g_X · π_Y^*g_Y"], answer: 2, explanation: "乘积度量定义为g = π_X^*g_X + π_Y^*g_Y，其中π_X, π_Y是投影映射。在乘积坐标(x,y)下，度量矩阵为分块对角形式diag(g_X, g_Y)。", difficulty: "medium", chapter: "ch2" },
  { q: "设S^n是R^{n+1}中的单位球面，配备从R^{n+1}诱导的度量。该诱导度量的拉回形式是什么？", options: ["g_S = i^*g_R，其中i: S^n → R^{n+1}是包含映射", "g_S与g_R无关", "g_S = g_R", "g_S = i_*g_R"], answer: 0, explanation: "球面S^n作为R^{n+1}的子流形，其黎曼度量由包含映射i: S^n → R^{n+1}从欧氏度量拉回得到：g_S = i^*g_R。这是黎曼子流形度量的标准定义方式。", difficulty: "medium", chapter: "ch2" },
  { q: "在等温坐标下，二维黎曼度量可写为ds² = e^(2λ)(dx²+dy²)。函数λ和Gauss曲率K的关系是什么？", options: ["K = λ", "K = -e^(-2λ) Δλ", "K = e^(2λ)", "K = 0"], answer: 1, explanation: "在等温坐标下，Gauss曲率由Liouville公式给出：K = -e^(-2λ) Δλ = -e^(-2λ)(∂_x²λ + ∂_y²λ)。这是二维共形平坦性的直接推论，也是研究二维曲率的重要工具。参考Lee习题2-10。", difficulty: "hard", chapter: "ch2" },
  { q: "设(M,g)是黎曼流形，X是光滑向量场。散度div X在局部坐标下的表达式为？", options: ["div X = ∂_i X^i", "div X = (1/√|g|) ∂_i(√|g| X^i)", "div X = g^ij ∂_i X_j", "div X = ∂_i X^i + Γ^i_ij X^j"], answer: 1, explanation: "散度div X = (1/√|g|) ∂_i(√|g| X^i)。注意选项D也正确（两者等价，因为∂_i√|g|/√|g| = Γ^j_ij），但B是最常用的形式。", difficulty: "hard", chapter: "ch2" },
  { q: "设f: (M,g) → (M,g)是等距映射。以下哪个量在等距映射下保持不变？", options: ["仅度量张量", "度量张量和所有曲率张量", "仅长度", "仅Christoffel符号"], answer: 1, explanation: "等距映射保持度量张量（f*g = g），因此所有由度量决定的量都保持不变，包括：Christoffel符号、曲率张量、Ricci曲率、标量曲率、截面曲率、体积形式等。这是等距不变性的完整表述。", difficulty: "easy", chapter: "ch2" },
  { q: "共形变换h = e^(2f)g下，对任意向量场X，|X|_h与|X|_g的关系是？", options: ["|X|_h = |X|_g", "|X|_h = e^f |X|_g", "|X|_h = e^(2f) |X|_g", "|X|_h = (1/e^f) |X|_g"], answer: 1, explanation: "h(X,X) = e^(2f)g(X,X)，故|X|_h = e^f|X|_g。长度缩放因子为e^f。但两向量夹角不变，因为cosθ_h = h(X,Y)/(|X|_h|Y|_h) = e^(2f)g(X,Y)/(e^f|X|_g·e^f|Y|_g) = cosθ_g。", difficulty: "easy", chapter: "ch2" },

// ================================================================
// Ch3: 模型黎曼流形 (原有10题 + 新增12题 = 22题)
// ================================================================

  // ---- 原有题目 ----
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

  // ---- 新增题目 (12题) ----
  { q: "球面Sⁿ(R)的极坐标度量形式是什么？", options: ["ds² = dr² + R² sin²(r/R) dΩ²_{n-1}", "ds² = dr² + r² dΩ²_{n-1}", "ds² = dr² + R² sinh²(r/R) dΩ²_{n-1}", "ds² = R²(dr² + sin²r dΩ²_{n-1})"], answer: 0, explanation: "球面Sⁿ(R)的极坐标度量：ds² = dr² + R² sin²(r/R) dΩ²_{n-1}，其中dΩ²_{n-1}是单位球面S^{n-1}(1)上的标准度量。当n=2时即ds² = dr² + R² sin²(r/R) dθ²。", difficulty: "easy", chapter: "ch3" },
  { q: "双曲空间Hⁿ的极坐标度量形式是什么？", options: ["ds² = dr² + sin²(r) dΩ²", "ds² = dr² + r² dΩ²", "ds² = dr² + sinh²(r) dΩ²", "ds² = dr² + cosh²(r) dΩ²"], answer: 2, explanation: "双曲空间Hⁿ的极坐标度量：ds² = dr² + sinh²(r) dΩ²_{n-1}。与球面的sin²(r)对比，双曲空间用sinh²(r)，反映其负曲率特性。", difficulty: "easy", chapter: "ch3" },
  { q: "Poincaré上半平面模型H² = {(x,y) | y>0}的度量是什么？", options: ["ds² = (dx²+dy²)/y²", "ds² = dx²+dy²", "ds² = 4(dx²+dy²)/(1-x²-y²)²", "ds² = dx² - dy²"], answer: 0, explanation: "Poincaré上半平面模型度量：ds² = (dx²+dy²)/y²。在y轴方向，距离随y减小而增大，边界y=0对应于无穷远。此模型等距于Poincaré圆盘模型。", difficulty: "medium", chapter: "ch3" },
  { q: "球面S²上三角形的面积公式是什么？", options: ["A = (α+β+γ-π)R²", "A = (π-α-β-γ)R²", "A = (α+β+γ)R²", "A = (α+β+γ-π)/R²"], answer: 0, explanation: "球面三角形面积：A = (α+β+γ-π)R²。内角和超出π的“角盈”与面积成正比。这也是Gauss-Bonnet定理在球面三角形上的直接应用。", difficulty: "medium", chapter: "ch3" },
  { q: "双曲平面上三角形面积公式是什么？", options: ["A = (π-α-β-γ)", "A = (α+β+γ-π)", "A = (π-α-β-γ)R²", "A = 0"], answer: 0, explanation: "双曲平面上标准曲率K=-1的三角形面积：A = π - (α+β+γ)。内角和小于π，“角亏”等于面积。所有双曲三角形面积不超过π。", difficulty: "medium", chapter: "ch3" },
  { q: "设G是Lie群，配备左不变度量。左不变向量场X,Y的李括号[X,Y]与Levi-Civita联络的关系是？", options: ["∇_X Y = [X,Y]", "∇_X Y = (1/2)[X,Y]", "∇_X Y = 0", "∇_X Y = -[X,Y]"], answer: 1, explanation: "对于左不变向量场X,Y，若度量是双不变的，则∇_X Y = (1/2)[X,Y]。这是从Koszul公式推导的结果，体现了李群几何中联络与李括号的紧密关系。", difficulty: "hard", chapter: "ch3" },
  { q: "球面Sⁿ上，一条大圆（great circle）是什么？", options: ["球面与通过球心的平面的交线", "球面上的任意圆", "球面上的小圆", "球面的赤道"], answer: 0, explanation: "大圆是球面与通过球心的二维平面的交线。球面上的所有测地线都是大圆（或其一部分）。大圆给出了球面上两点之间的最短路径。", difficulty: "easy", chapter: "ch3" },
  { q: "在Poincaré圆盘模型中，点(0,0)到点(0,r)（r<1）的双曲距离是多少？", options: ["r", "r/(1-r²)", "ln((1+r)/(1-r))", "2 tanh^{-1}(r)"], answer: 2, explanation: "沿径向弧的双曲距离d = ∫₀ʳ 2dt/(1-t²) = ln((1+r)/(1-r)) = 2 tanh^{-1}(r)。注意D选项也正确（两者等价），但C是更直接的积分结果。当r→1时，距离→∞。", difficulty: "hard", chapter: "ch3" },
  { q: "设(M,g)是常截面曲率c的黎曼流形。其曲率张量可表示为？", options: ["R(X,Y)Z = c·g(Y,Z)X", "R(X,Y)Z = c(g(Y,Z)X - g(X,Z)Y)", "R(X,Y)Z = 0", "R(X,Y)Z = c(g(X,Y)Z - g(Y,Z)X)"], answer: 1, explanation: "常曲率c空间的曲率张量：R(X,Y)Z = c(g(Y,Z)X - g(X,Z)Y)。截面曲率K(X,Y) = c对所有二维平面成立。这是曲率张量最简单的非平凡形式。", difficulty: "medium", chapter: "ch3" },
  { q: "双曲空间Hⁿ的Lorentz模型（超boloid模型）定义在什么空间中？", options: ["欧氏空间R^{n+1}", "Minkowski空间R^{n,1}", "R^{n+2}", "R^{n-1}"], answer: 1, explanation: "Lorentz模型：Hⁿ = {x ∈ R^{n,1} : ⟨x,x⟩_L = -1, x₀ > 0}，其中⟨·,·⟩_L是Minkowski内积⟨x,y⟩_L = -x₀y₀ + Σ_{i=1}^n x_i y_i。此模型揭示了双曲几何与狭义相对论的联系。", difficulty: "hard", chapter: "ch3" },
  { q: "在球面S²上，周长C(r)与半径r的关系（对小的测地圆）是？", options: ["C(r) = 2πr", "C(r) = 2π sin(r) ≈ 2πr - πr³/3", "C(r) = 2π sinh(r)", "C(r) = 2πr + πr³"], answer: 1, explanation: "S²(1)上半径为r的测地圆周长C(r) = 2π sin(r) = 2πr - πr³/3 + O(r⁵)。r很小时C(r) < 2πr，体现正曲率的“聚焦”效应。这与欧氏空间的C(r)=2πr和双曲空间的C(r)=2π sinh(r)对比。", difficulty: "medium", chapter: "ch3" },
  { q: "齐性空间（homogeneous space）的定义是什么？", options: ["等距群可递地作用在流形上", "流形是紧致的", "流形曲率为常数", "流形是单连通的"], answer: 0, explanation: "齐性空间是指等距群的作用是可递的：对任意两点p,q∈M，存在等距映射将p映到q。所有模型空间（Sⁿ, Rⁿ, Hⁿ）都是齐性空间。齐性空间可表示为G/H，其中H是G的闭子群。", difficulty: "medium", chapter: "ch3" },

// ================================================================
// Ch4: 联络 (原有10题 + 新增12题 = 22题)
// ================================================================

  // ---- 原有题目 ----
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

  // ---- 新增题目 (12题) ----
  { q: "Koszul公式用于计算什么？", options: ["曲率张量", "Levi-Civita联络的Christoffel符号", "测地线方程", "体积形式"], answer: 1, explanation: "Koszul公式：2g(∇_X Y, Z) = Xg(Y,Z) + Yg(Z,X) - Zg(X,Y) + g([X,Y],Z) - g([Y,Z],X) + g([Z,X],Y)。它通过度量和李括号表达Levi-Civita联络，是唯一性证明和显式计算的基础。参考Lee定理5.4。", difficulty: "medium", chapter: "ch4" },
  { q: "设∇是Levi-Civita联络。度量相容性条件∇g = 0的等价表述是什么？", options: ["Xg(Y,Z) = g(∇_X Y, Z) + g(Y, ∇_X Z)", "Xg(Y,Z) = 0", "g(∇_X Y, Z) = 0", "g(Y, ∇_X Z) = g(∇_X Y, Z)"], answer: 0, explanation: "度量相容性∇g = 0等价于Xg(Y,Z) = g(∇_X Y, Z) + g(Y, ∇_X Z)，即协变导数满足对度量的“莱布尼茨法则”。这是联络保持内积结构的必要条件。", difficulty: "easy", chapter: "ch4" },
  { q: "在局部坐标下，向量场X = X^i ∂_i的协变导数∇_j X^i的表达式为？", options: ["∇_j X^i = ∂_j X^i", "∇_j X^i = ∂_j X^i + Γ^i_jk X^k", "∇_j X^i = ∂_j X^i - Γ^i_jk X^k", "∇_j X^i = Γ^i_jk X^k"], answer: 1, explanation: "向量场的协变导数：∇_j X^i = ∂_j X^i + Γ^i_jk X^k。上标接受+Γ修正。对于1-形式ω_i，协变导数∇_j ω_i = ∂_j ω_i - Γ^k_ji ω_k（下标接受-Γ修正）。", difficulty: "medium", chapter: "ch4" },
  { q: "设γ(t)是黎曼流形中的曲线，V(t)是沿γ的向量场。沿γ的协变导数∇_t V的局部坐标表达式为？", options: ["∇_t V^k = dV^k/dt", "∇_t V^k = dV^k/dt + Γ^k_ij γ'^i V^j", "∇_t V^k = dV^k/dt - Γ^k_ij γ'^i V^j", "∇_t V^k = Γ^k_ij V^i V^j"], answer: 1, explanation: "沿曲线的协变导数：∇_t V^k = dV^k/dt + Γ^k_ij(γ(t)) γ'^i(t) V^j(t)。这是平行移动方程∇_t V = 0的局部坐标形式。", difficulty: "medium", chapter: "ch4" },
  { q: "联络形式ω^i_j与Christoffel符号的关系是什么？", options: ["ω^i_j = Γ^i_jk dx^k", "ω^i_j = Γ^i_jk", "ω^i_j = Γ^i_jk ∂_k", "ω^i_j = Γ^i_jk g_kl"], answer: 0, explanation: "在坐标基下，联络1-形式ω^i_j = Γ^i_jk dx^k。Cartan结构方程dθ^i + ω^i_j ∧ θ^j = Θ^i（挠率）和dω^i_j + ω^i_k ∧ ω^k_j = Ω^i_j（曲率）用联络形式表达。", difficulty: "hard", chapter: "ch4" },
  { q: "设(M,g)是二维黎曼流形，在等温坐标(x,y)下g = e^(2λ)(dx²+dy²)。Christoffel符号Γ^x_xy等于什么？", options: ["0", "∂_x λ", "∂_y λ", "-∂_x λ"], answer: 1, explanation: "在等温坐标g = e^(2λ)(dx²+dy²)下，非零Christoffel符号为：Γ^x_xx = Γ^y_xy = Γ^y_yx = ∂_x λ，Γ^x_yy = -Γ^y_xx = -∂_x λ，Γ^y_yy = Γ^x_xy = Γ^x_yx = ∂_y λ，Γ^y_xx = -Γ^x_xy = -∂_y λ。这是二维共形度量的标准计算。参考Lee习题4-5。", difficulty: "hard", chapter: "ch4" },
  { q: "无挠联络的定义是∇_X Y - ∇_Y X = [X,Y]。在局部坐标下，这等价于什么？", options: ["Γ^k_ij = 0", "Γ^k_ij = Γ^k_ji", "Γ^k_ij = -Γ^k_ji", "∂_i Γ^j_kl = 0"], answer: 1, explanation: "无挠性在坐标基下等价于Christoffel符号的对称性：Γ^k_ij = Γ^k_ji。这是无挠联络的坐标表征，也是Levi-Civita联络Christoffel符号公式推导的关键前提。", difficulty: "easy", chapter: "ch4" },
  { q: "设X,Y,Z是光滑向量场。R(X,Y)Z = ∇_X∇_Y Z - ∇_Y∇_X Z - ∇_[X,Y]Z。∇_[X,Y]Z项的作用是什么？", options: ["确保R是张量（C^∞-多线性）", "使R满足Bianchi恒等式", "使R与度量相容", "使R对称"], answer: 0, explanation: "∇_[X,Y]Z项的存在确保曲率算子R(X,Y)Z关于X,Y,Z是C^∞-多线性的，即对任意函数f，R(fX,Y)Z = f·R(X,Y)Z。没有这项，∇_X∇_Y Z - ∇_Y∇_X Z不是张量。", difficulty: "medium", chapter: "ch4" },
  { q: "设γ是黎曼流形中的闭曲线，P_γ: T_pM → T_pM是沿γ的平行移动。和乐群Hol_p(M)是？", options: ["所有P_γ生成的O(T_pM)的子群", "基本群π_1(M)", "曲率张量在p的值", "等距群在p的迷向子群"], answer: 0, explanation: "和乐群Hol_p(M) = {P_γ : γ是以p为基点的分段光滑闭曲线}，是正交群O(T_pM)的子群。和乐群度量了平行移动对路径的依赖程度。Ambrose-Singer定理将和乐代数与曲率张量联系起来。", difficulty: "medium", chapter: "ch4" },
  { q: "设(M,g)是黎曼流形，f: M → R光滑。Hessian ∇²f定义为∇²f(X,Y) = ?", options: ["∇²f(X,Y) = X(Yf) - (∇_X Y)f", "∇²f(X,Y) = X(Yf)", "∇²f(X,Y) = g(∇_X grad f, Y)", "∇²f(X,Y) = X(Yf) - (∇_X Y)f，且等于g(∇_X grad f, Y)"], answer: 3, explanation: "Hessian有两种等价定义：∇²f(X,Y) = X(Yf) - (∇_X Y)f = g(∇_X grad f, Y)。前者更直接，后者揭示了Hessian与梯度协变导数的关系。Hessian是对称(0,2)-张量。", difficulty: "hard", chapter: "ch4" },
  { q: "在二维球面S²上，从北极出发沿纬线平行移动一个向量一周后，该向量旋转了多少？", options: ["0", "等于该纬线围成面积的球面面积", "等于围成面积的Gauss曲率积分", "2π"], answer: 2, explanation: "平行移动一周后的旋转角等于该纬线所围区域上Gauss曲率的积分（即球面面积/R²）。对于纬度φ的纬线，围成的球冠面积为2πR²(1-sin φ)，旋转角为2π(1-sin φ)。这是Gauss-Bonnet定理的平行移动解释。", difficulty: "hard", chapter: "ch4" },
  { q: "在黎曼流形上，对光滑函数f，下列哪个等式成立？", options: ["Δf = tr_g(∇²f) = g^ij ∇²f_ij", "Δf = g^ij ∂_i∂_j f", "Δf = div(grad f) = tr_g(∇²f)", "Δf = div(grad f) = tr_g(∇²f) = g^ij ∇²f_ij"], answer: 3, explanation: "Laplace-Beltrami算子有三种等价定义：Δf = div(grad f) = tr_g(∇²f) = g^ij ∇²f_ij。在局部坐标下，Δf = g^ij(∂_i∂_j f - Γ^k_ij ∂_k f)。", difficulty: "easy", chapter: "ch4" },

// ================================================================
// Ch5: 测地线与距离 (原有10题 + 新增12题 = 22题)
// ================================================================

  // ---- 原有题目 ----
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

  // ---- 新增题目 (12题) ----
  { q: "在法坐标下，径向测地线γ(t) = (tv^1, ..., tv^n)的参数方程是什么？", options: ["γ^k(t) = t v^k", "γ^k(t) = t^2 v^k", "γ^k(t) = sin(t) v^k", "γ^k(t) = e^t v^k"], answer: 0, explanation: "在法坐标下，从原点出发的径向测地线简化为直线γ^k(t) = t v^k。这是因为原点处Christoffel符号为零，测地线方程退化为d²γ^k/dt² = 0。这是法坐标最重要的性质。", difficulty: "easy", chapter: "ch5" },
  { q: "设(M,g)是完备黎曼流形，d(p,q)是黎曼距离。以下哪个函数是Lipschitz连续的？", options: ["d(p,q)对q不是Lipschitz的", "d(p,·)是1-Lipschitz函数", "d(p,q)的平方是Lipschitz的", "d(p,q)在割迹上不是Lipschitz的"], answer: 1, explanation: "由三角不等式|d(p,q₁) - d(p,q₂)| ≤ d(q₁,q₂)，距离函数d(p,·)是1-Lipschitz的。这是距离函数的基本性质。在割迹上，距离函数仅仅是Lipschitz的，不是光滑的。", difficulty: "medium", chapter: "ch5" },
  { q: "指数映射exp_p: T_pM → M的微分d(exp_p)_0等于什么？", options: ["恒等映射id: T_pM → T_pM", "零映射", "曲率张量", "Christoffel符号"], answer: 0, explanation: "d(exp_p)_0 = id_{T_pM}。这是因为exp_p(tv) = γ_v(t)，对t求导在t=0处给出d(exp_p)_0(v) = γ_v'(0) = v。由反函数定理，exp_p在0附近是局部微分同胚。", difficulty: "medium", chapter: "ch5" },
  { q: "球面S²(1)上，从北极出发的指数映射exp_N的共轭半径（即第一个共轭点出现的距离）是多少？", options: ["π/2", "π", "2π", "1"], answer: 1, explanation: "在S²(1)上，从北极出发的大圆在对径点（南极）首次出现共轭点。沿大圆的距离为π。因此共轭半径（injectivity radius的共轭版本）为π。在距离π处，exp_N的微分退化。", difficulty: "medium", chapter: "ch5" },
  { q: "设(M,g)是完备黎曼流形，p∈M。割迹C(p)的定义是什么？", options: ["所有到p距离为最大值的点", "exp_p的微分退化的点集", "exp_p不是单射的最近点集（沿每条射线）", "所有共轭点的集合"], answer: 2, explanation: "割迹C(p) = {exp_p(tv) : v∈T_pM, |v|=1, t是使得exp_p(sv)在[0,t]上最短的最大t}。割迹是exp_p从单射变为非单射的边界，也是距离函数失去光滑性的点集。", difficulty: "hard", chapter: "ch5" },
  { q: "在欧氏空间Rⁿ中，任意两点之间有唯一的最短测地线。该陈述对一般黎曼流形是否成立？", options: ["总是成立", "仅对完备流形成立", "对完备流形，两点间总存在最短测地线，但不一定唯一", "仅对单连通流形成立"], answer: 2, explanation: "Hopf-Rinow定理保证完备流形中任意两点间存在最短测地线，但唯一性不保证。反例：球面S²上对径点有无穷多条最短测地线（所有大圆的一半）。", difficulty: "medium", chapter: "ch5" },
  { q: "设γ: [0,∞) → M是完备测地线，p=γ(0)。q=γ(t₀)是p的共轭点。以下关于γ|[0,t₀+ε]的说法哪个正确？", options: ["γ在[0,t₀+ε]上仍然最短", "γ在[0,t₀+ε]上不再是最短测地线", "γ仍然是测地线但不再最短", "γ不再是测地线"], answer: 2, explanation: "共轭点之后，γ仍然是测地线（满足∇_γ'γ'=0），但不再极小化距离。即存在比γ更短的连接p和γ(t₀+ε)的曲线。这是共轭点判别极小性的经典结论。参考Lee定理10.9。", difficulty: "hard", chapter: "ch5" },
  { q: "设(M,g)是黎曼流形，γ是测地线。能量泛函的第二变分δ²E(V,V)的表达式为？", options: ["δ²E = ∫|∇_t V|² dt", "δ²E = ∫(|∇_t V|² - ⟨R(V,γ')γ',V⟩) dt", "δ²E = ∫⟨R(V,γ')γ',V⟩ dt", "δ²E = 0对所有V"], answer: 1, explanation: "第二变分：δ²E(V,V) = ∫ₐᵇ (|∇_t V|² - ⟨R(V,γ')γ',V⟩) dt。第一项是“拉伸”能量，第二项是曲率贡献。正曲率使第二变分可能为负（共轭点），负曲率使第二变分恒正。", difficulty: "medium", chapter: "ch5" },
  { q: "完备黎曼流形上，距离函数d(p,q)在q处光滑当且仅当？", options: ["q不在p的割迹上", "q是p的共轭点", "d(p,q) < inj(p)", "q不在p的割迹上且q ≠ p"], answer: 3, explanation: "距离函数d(p,·)在q ≠ p处光滑当且仅当q不在p的割迹上。在割迹上，距离函数一般不是光滑的（甚至不是C²）。在p处，距离函数也不是光滑的。", difficulty: "hard", chapter: "ch5" },
  { q: "单射半径inj(p)的定义是什么？", options: ["到割迹的距离", "到第一个共轭点的距离", "exp_p是单射的球的最大半径", "exp_p是微分同胚的球的最大半径"], answer: 2, explanation: "inj(p) = sup{r > 0 : exp_p限制在B(0,r)⊂T_pM上是单射}。注意exp_p是局部微分同胚的最大半径是共轭半径，单射半径≤共轭半径。", difficulty: "medium", chapter: "ch5" },
  { q: "在球面S²上，北极的单射半径inj(N)是多少？", options: ["π/2", "π", "2π", "π/4"], answer: 1, explanation: "S²上inj(N) = π。在距离<π时，exp_N是单射；在距离=π时，南极是割点（也是共轭点），exp_N不再单射。球面Sⁿ(R)的全局单射半径为πR。", difficulty: "easy", chapter: "ch5" },
  { q: "设γ是黎曼流形中的测地线。若γ上存在一对共轭点，则γ是否一定不是最短的？", options: ["一定不是最短的", "仍然是全局最短的", "仅在共轭点之间不是最短的", "取决于曲率"], answer: 0, explanation: "若γ上存在共轭点p和q（p在q之前），则γ在[p,q]之后不再最短。更精确地说，存在严格短于γ的曲线连接p和q之后的点。这是共轭点判别极小性的基本定理。", difficulty: "medium", chapter: "ch5" },

// ================================================================
// Ch6: 曲率 (原有10题 + 新增12题 = 22题)
// ================================================================

  // ---- 原有题目 ----
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

  // ---- 新增题目 (12题) ----
  { q: "第一Bianchi恒等式的内容是什么？", options: ["R(X,Y)Z + R(Y,Z)X + R(Z,X)Y = 0", "∇_X R = 0", "R(X,Y) = -R(Y,X)", "R(X,Y,Z,W) = R(Z,W,X,Y)"], answer: 0, explanation: "第一（代数）Bianchi恒等式：R(X,Y)Z + R(Y,Z)X + R(Z,X)Y = 0。这是曲率张量最基本的代数恒等式，隐含了截面曲率完全决定曲率张量的事实。", difficulty: "easy", chapter: "ch6" },
  { q: "第二（微分）Bianchi恒等式的内容是什么？", options: ["∇R = 0", "(∇_X R)(Y,Z) + (∇_Y R)(Z,X) + (∇_Z R)(X,Y) = 0", "R(X,Y) = 0", "∇_X R(Y,Z) = 0"], answer: 1, explanation: "第二Bianchi恒等式：(∇_X R)(Y,Z)W + (∇_Y R)(Z,X)W + (∇_Z R)(X,Y)W = 0。缩并后得到∇^j R_ij = (1/2)∇_i R，即Einstein张量的守恒律。", difficulty: "medium", chapter: "ch6" },
  { q: "标量曲率S（或R）与Ricci曲率的关系是什么？", options: ["S = R_ij", "S = g^ij R_ij", "S = det(R_ij)", "S = tr(R_ij)/n"], answer: 1, explanation: "标量曲率S = g^ij R_ij = tr_g(Ric)，是Ricci曲率的迹。在二维，S = 2K；在n维，S是截面曲率在所有方向上的某种平均。", difficulty: "easy", chapter: "ch6" },
  { q: "在二维黎曼流形上，曲率张量有多少个独立分量？", options: ["1", "6", "20", "n²(n²-1)/12"], answer: 0, explanation: "二维时，曲率张量由Gauss曲率K完全决定：R_ijkl = K(g_ik g_jl - g_il g_jk)。因此只有一个独立分量。一般n维曲率张量有n²(n²-1)/12个独立分量。", difficulty: "medium", chapter: "ch6" },
  { q: "设Einstein流形满足Ric = λg。在n≥3维时，λ必须满足什么条件？", options: ["λ是常数（由Schur型论证）", "λ可以是任意函数", "λ = 0", "λ = 1"], answer: 0, explanation: "对n≥3的Einstein流形，缩并第二Bianchi恒等式可得∇_i R = 0，即标量曲率S = nλ为常数，故λ也是常数。这是Schur引理的推广：Ricci曲率在各向同性时自动为常数。", difficulty: "hard", chapter: "ch6" },
  { q: "曲率张量R_ijkl的对称性中，哪个是配对对称性（pair symmetry）？", options: ["R_ijkl = -R_jikl", "R_ijkl = -R_ijlk", "R_ijkl = R_klij", "R_ijkl + R_iklj + R_iljk = 0"], answer: 2, explanation: "配对对称性：R_ijkl = R_klij。这是曲率张量四个对称性之一（前两个反对称、配对对称、第一Bianchi）。这四种对称性将n⁴个分量约化到n²(n²-1)/12个独立分量。", difficulty: "medium", chapter: "ch6" },
  { q: "在Kähler流形上，Ricci形式ρ与Ricci曲率的关系是什么？", options: ["ρ_ij = R_ij", "ρ = -i∂∂̄ log det(g)", "ρ = 0", "ρ = dω"], answer: 1, explanation: "在Kähler流形上，Ricci形式ρ = -i∂∂̄ log det(g_αβ̄) = Ric(J·,·)。Ricci形式是闭的(1,1)-形式，其Chern类为c₁(M) = [ρ/2π]。这是复几何与黎曼几何的交汇点。", difficulty: "hard", chapter: "ch6" },
  { q: "设(M,g)是三维Einstein流形。此时Einstein条件等价于什么？", options: ["截面曲率为常数", "Ricci曲率为常数", "标量曲率为常数", "曲率张量为零"], answer: 0, explanation: "在三维，Einstein条件Ric = λg等价于截面曲率为常数。这是因为三维时曲率张量完全由Ricci曲率决定（Weyl张量恒为零）。这是三维黎曼几何的特殊性质。", difficulty: "hard", chapter: "ch6" },
  { q: "设(M,g)的截面曲率满足a ≤ K ≤ b。Ricci曲率Ric(v,v)的上下界是什么？", options: ["(n-1)a ≤ Ric(v,v) ≤ (n-1)b", "a ≤ Ric(v,v) ≤ b", "a ≤ Ric(v,v) ≤ (n-1)b", "无法确定"], answer: 0, explanation: "Ric(v,v) = Σ_{i=2}^n K(v,e_i)，其中{e_i}是v的正交补的一组基。由于每个K(v,e_i) ∈ [a,b]，有(n-1)a ≤ Ric(v,v) ≤ (n-1)b。但反向不成立：Ricci曲率有界不能推出截面曲率有界。", difficulty: "medium", chapter: "ch6" },
  { q: "在法坐标下，原点处度量张量的Taylor展开中，二阶项由什么决定？", options: ["Christoffel符号", "曲率张量", "Ricci曲率", "标量曲率"], answer: 1, explanation: "在法坐标原点附近，g_ij(x) = δ_ij - (1/3) R_iklj x^k x^l + O(|x|³)。二阶项系数由曲率张量决定。这是法坐标展开的核心公式，也是证明曲率决定局部几何的关键。参考Lee第5章。", difficulty: "hard", chapter: "ch6" },
  { q: "设X,Y,Z,W是向量场。g(R(X,Y)Z,W)作为(0,4)-张量，其对称性有几个？", options: ["2个", "4个", "3个", "1个"], answer: 1, explanation: "(0,4)-曲率张量Rm(X,Y,Z,W) = g(R(X,Y)Z,W)满足四个基本对称性：(1)前两个反对称；(2)后两个反对称；(3)配对对称；(4)第一Bianchi恒等式。这些对称性完全刻画了曲率张量的代数结构。", difficulty: "medium", chapter: "ch6" },
  { q: "在广义相对论中，真空Einstein场方程Ric = 0意味着什么？", options: ["时空没有曲率", "Ricci曲率为零（但Weyl曲率可以非零）", "截面曲率为零", "时空是平坦的"], answer: 1, explanation: "Ric = 0意味着Ricci曲率为零，但Weyl曲率（描述引力波、潮汐力等）可以非零。例如Schwarzschild解是Ric=0但Weyl≠0，描述了黑洞外部的时空弯曲。Ric=0不等于Riemann=0。", difficulty: "medium", chapter: "ch6" },

// ================================================================
// Ch7: 黎曼子流形 (原有10题 + 新增12题 = 22题)
// ================================================================

  // ---- 原有题目 ----
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

  // ---- 新增题目 (12题) ----
  { q: "设M是R³中的曲面。第二基本形式II的系数L, M, N的定义是什么？", options: ["L = ⟨∂_x²f, N⟩, M = ⟨∂_x∂_y f, N⟩, N = ⟨∂_y²f, N⟩", "L = E, M = F, N = G", "L = ∂_x N, M = ∂_y N", "L = K, M = H, N = K"], answer: 0, explanation: "对于参数化f: U → R³，第二基本形式系数：L = ⟨f_xx, N⟩ = -⟨f_x, N_x⟩，M = ⟨f_xy, N⟩，N = ⟨f_yy, N⟩。其中N是单位法向量。这些系数与第一基本形式E,F,G共同决定曲面几何。", difficulty: "easy", chapter: "ch7" },
  { q: "对于R³中的曲面，平均曲率向量H⃗ = H·N。H的表达式（用第一和第二基本形式系数）是什么？", options: ["H = (L+N)/2", "H = (EN - 2FM + GL)/(2(EG-F²))", "H = (LN-M²)/(EG-F²)", "H = (E+G)/2"], answer: 1, explanation: "平均曲率H = (EN - 2FM + GL)/(2(EG-F²)) = (κ₁+κ₂)/2。在等温坐标下（E=G=e^(2λ), F=0），H = e^(-2λ)(L+N)/2。", difficulty: "medium", chapter: "ch7" },
  { q: "设M是黎曼流形N的子流形。切丛TN限制在M上分解为TN|_M = TM ⊕ NM。∇^N_X Y的切向和法向分量分别是什么？", options: ["切向=0, 法向=II(X,Y)", "切向=∇^M_X Y, 法向=II(X,Y)", "切向=II(X,Y), 法向=∇^M_X Y", "切向=∇^M_X Y, 法向=0"], answer: 1, explanation: "Gauss公式：∇^N_X Y = ∇^M_X Y + II(X,Y)。切向分量∇^M_X Y是M上的Levi-Civita联络，法向分量II(X,Y)是第二基本形式。这是子流形几何最基本的分解。", difficulty: "medium", chapter: "ch7" },
  { q: "Weingarten公式（对余维1子流形）描述了什么？", options: ["∇^N_X N = -S(X)", "∇^N_X N = S(X)", "∇^N_X N = 0", "∇^N_X N = N"], answer: 0, explanation: "Weingarten公式：∇^N_X N = -S(X)（其中S是形状算子，N是单位法向量）。这表示N沿X方向的协变导数（在N中）等于-S(X)，其切向分量为-S(X)，法向分量为0。", difficulty: "medium", chapter: "ch7" },
  { q: "对于R³中由函数图z = f(x,y)给出的曲面，Gauss曲率K的表达式是什么？", options: ["K = f_xx·f_yy - f_xy²", "K = (f_xx f_yy - f_xy²)/(1 + f_x² + f_y²)²", "K = f_xx + f_yy", "K = (f_xx f_yy - f_xy²)/(1 + f_x² + f_y²)"], answer: 1, explanation: "对于Monge片z = f(x,y)，Gauss曲率K = (f_xx f_yy - f_xy²)/(1 + f_x² + f_y²)²。这是计算显式曲面Gauss曲率的标准公式，来源于第一和第二基本形式系数。", difficulty: "medium", chapter: "ch7" },
  { q: "设M是N的全测地子流形。M中测地线与N中测地线的关系是什么？", options: ["M中测地线不一定是N中测地线", "M中测地线一定是N中测地线", "M中没有测地线", "N中测地线一定是M中测地线"], answer: 1, explanation: "全测地子流形II=0，Gauss公式给出∇^N = ∇^M。因此M中测地线（满足∇^M_γ'γ'=0）也满足∇^N_γ'γ'=0，即也是N中测地线。例如R³中的平面（全测地）内直线也是R³的直线。", difficulty: "medium", chapter: "ch7" },
  { q: "Gauss-Codazzi方程在R³中曲面的情况下，Gauss方程简化为？", options: ["K = (LN-M²)/(EG-F²)", "K = 0", "K = H²", "K = R"], answer: 0, explanation: "R³中曲面的Gauss方程：K = det(II)/det(I) = (LN-M²)/(EG-F²)。这是Gauss绝妙定理的精确公式。注意右边仅依赖于第一和第二基本形式系数，但Gauss证明K仅依赖于第一基本形式。", difficulty: "medium", chapter: "ch7" },
  { q: "设M是N的余维数为k的子流形。第二基本形式II有k个分量。对于每个法向量ξ，形状算子S_ξ定义为？", options: ["S_ξ(X) = -∇^N_X ξ", "⟨S_ξ(X), Y⟩ = ⟨II(X,Y), ξ⟩", "S_ξ(X) = -(∇^N_X ξ)^T", "S_ξ(X) = -(∇^N_X ξ)^T且⟨S_ξ(X), Y⟩ = ⟨II(X,Y), ξ⟩"], answer: 3, explanation: "对于余维数k>1，II在每个法方向上有分量。形状算子S_ξ(X) = -(∇^N_X ξ)^T（切向投影），满足⟨S_ξ(X), Y⟩ = ⟨II(X,Y), ξ⟩。这是余维1情形的高维推广。", difficulty: "hard", chapter: "ch7" },
  { q: "R³中极小曲面的Gauss曲率满足什么性质？", options: ["K ≥ 0", "K ≤ 0", "K = 0", "K ≥ 0或K ≤ 0均可"], answer: 1, explanation: "R³中极小曲面（H=0）满足κ₁ = -κ₂，因此Gauss曲率K = κ₁κ₂ = -κ₁² ≤ 0。极小曲面的Gauss曲率非正，仅在平面点（κ₁=κ₂=0）处为零。", difficulty: "medium", chapter: "ch7" },
  { q: "设M是N的超曲面（余维1）。Gauss方程⟨R^M(X,Y)Z,W⟩与⟨R^N(X,Y)Z,W⟩的关系是什么？", options: ["⟨R^M(X,Y)Z,W⟩ = ⟨R^N(X,Y)Z,W⟩ + ⟨II(X,W),II(Y,Z)⟩ - ⟨II(X,Z),II(Y,W)⟩", "⟨R^M(X,Y)Z,W⟩ = ⟨R^N(X,Y)Z,W⟩", "⟨R^M(X,Y)Z,W⟩ = ⟨II(X,W),II(Y,Z)⟩", "⟨R^M(X,Y)Z,W⟩ = ⟨R^N(X,Y)Z,W⟩ - ⟨II(X,W),II(Y,Z)⟩"], answer: 0, explanation: "Gauss方程：⟨R^M(X,Y)Z,W⟩ = ⟨R^N(X,Y)Z,W⟩ + ⟨II(X,W),II(Y,Z)⟩ - ⟨II(X,Z),II(Y,W)⟩。子流形曲率 = 外围曲率（投影） + 第二基本形式的二次项。当N=R³时，R^N=0，K = LN-M²。", difficulty: "hard", chapter: "ch7" },
  { q: "设F: M → Rⁿ是等距浸入。位置向量场x = (x^1,...,x^n)看作M上的向量值函数。Δx等于什么？", options: ["Δx = 0", "Δx = n·H⃗（平均曲率向量）", "Δx = 位置向量", "Δx = 法向量"], answer: 1, explanation: "Δx = n·H⃗，其中H⃗是平均曲率向量。因此M是极小浸入（H⃗=0）当且仅当坐标函数是调和函数（Δx^i=0对所有i）。这是极小浸入的重要特征。", difficulty: "hard", chapter: "ch7" },
  { q: "R³中全脐曲面（umbilical surface）是什么？", options: ["所有点都是脐点的曲面", "Gauss曲率为零的曲面", "极小曲面", "可展曲面"], answer: 0, explanation: "全脐曲面每点κ₁=κ₂，形状算子S = κ·id。R³中全脐曲面只能是平面（κ=0）或球面（κ≠0，常数）。这是古典微分几何的经典结果。", difficulty: "easy", chapter: "ch7" },

// ================================================================
// Ch8: Gauss-Bonnet定理 (原有10题 + 新增12题 = 22题)
// ================================================================

  // ---- 原有题目 ----
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

  // ---- 新增题目 (12题) ----
  { q: "对于紧致带边曲面M，Gauss-Bonnet公式中边界的测地曲率积分∫_∂M κ_g ds的符号约定是什么？", options: ["κ_g是正的（对逆时针边界）", "κ_g的符号取决于边界的定向", "κ_g总是零", "κ_g与Gauss曲率符号相同"], answer: 1, explanation: "测地曲率κ_g的符号依赖于边界的定向：当曲面在其左侧时κ_g为正。这是Gauss-Bonnet公式中边界的定向约定，确保公式符号一致。", difficulty: "medium", chapter: "ch8" },
  { q: "设M是紧致二维曲面，三角剖分为T。验证χ(M) = V-E+F不依赖于剖分的基本原理是什么？", options: ["群论", "Gauss-Bonnet定理", "同调论（Euler示性数是同伦不变量）", "微分拓扑"], answer: 2, explanation: "Euler示性数是同伦不变量，因此不依赖于三角剖分的选择。这可以通过同调论证明：χ = Σ(-1)^i dim H_i(M;R)。Gauss-Bonnet定理从几何角度给出了χ的曲率积分表示，也证明了χ的拓扑不变性。", difficulty: "medium", chapter: "ch8" },
  { q: "利用Gauss-Bonnet定理，亏格为g的定向闭曲面总曲率∫K dA等于？", options: ["4π(1-g)", "2π(1-g)", "4π(1+g)", "2π(1+g)"], answer: 0, explanation: "∫K dA = 2πχ(M) = 2π(2-2g) = 4π(1-g)。球面(g=0)总曲率4π，环面(g=1)总曲率0，双环面(g=2)总曲率-4π。", difficulty: "easy", chapter: "ch8" },
  { q: "设M是亏格g=2的定向闭曲面。若M上Gauss曲率处处满足K ≥ -1，则M的面积至少是多少？", options: ["4π", "2π", "8π", "无法确定"], answer: 0, explanation: "由Gauss-Bonnet：∫K dA = 4π(1-2) = -4π。若K ≥ -1，则-4π = ∫K dA ≥ -Area(M)，故Area(M) ≥ 4π。这是Gauss-Bonnet定理给出的面积下界估计。", difficulty: "hard", chapter: "ch8" },
  { q: "对于球面S²，若Gauss曲率满足K ≥ 1/R²，则面积的最大值是多少？", options: ["4πR²", "2πR²", "πR²", "∞"], answer: 0, explanation: "由Gauss-Bonnet：∫K dA = 4π。若K ≥ 1/R²，则4π = ∫K dA ≥ Area(M)/R²，故Area(M) ≤ 4πR²。球面S²(R)恰好达到此上界，面积4πR²且K=1/R²。", difficulty: "medium", chapter: "ch8" },
  { q: "设γ是二维曲面M上的简单闭曲线，围成区域Ω。由Gauss-Bonnet，∫_Ω K dA + ∫_γ κ_g ds等于什么？", options: ["2π", "2πχ(Ω)", "2π - Σ(外角)", "0"], answer: 1, explanation: "对于带边区域Ω，局部Gauss-Bonnet：∫_Ω K dA + ∫_∂Ω κ_g ds = 2πχ(Ω)。若Ω同胚于圆盘（χ=1），则∫_Ω K dA + ∫_γ κ_g ds = 2π。", difficulty: "medium", chapter: "ch8" },
  { q: "在Gauss-Bonnet定理中，若边界∂M由分段光滑曲线组成，外角（exterior angles）的贡献是什么？", options: ["外角之和需要加到公式中", "外角被忽略", "外角等于测地曲率", "外角等于Gauss曲率"], answer: 0, explanation: "对于分段光滑边界，Gauss-Bonnet公式为：∫_M K dA + ∫_∂M κ_g ds + Σε_i = 2πχ(M)，其中ε_i是各角点处的外角（切向量转向角）。光滑边界时ε_i = 0。", difficulty: "medium", chapter: "ch8" },
  { q: "设M是二维曲面，p∈M。取以p为中心、半径为ε的小测地圆D_ε。lim_{ε→0} ∫_∂D_ε κ_g ds等于什么？", options: ["0", "2π", "π", "4π"], answer: 1, explanation: "当ε→0时，小测地圆趋近于欧氏圆，κ_g → 1/ε，周长 → 2πε，故∫κ_g ds → 2π。这也与Gauss-Bonnet一致：∫_D_ε K dA → 0，∫_D_ε K dA + ∫_∂D_ε κ_g ds = 2πχ(D_ε) = 2π。", difficulty: "hard", chapter: "ch8" },
  { q: "Chern-Gauss-Bonnet定理中，Pfaffian Pf(Ω)在四维流形上的表达式是什么？", options: ["Pf(Ω) = (1/32π²) ε^ijkl Ω_ij ∧ Ω_kl", "Pf(Ω) = K dA", "Pf(Ω) = (1/2π) Ω", "Pf(Ω) = Ω ∧ Ω"], answer: 0, explanation: "在四维，Pf(Ω) = (1/32π²) ε^ijkl R_ij ∧ R_kl（其中R_ij是曲率2-形式）。∫_M Pf(Ω) = χ(M)。这是Chern的伟大推广，将二维Gauss-Bonnet推广到任意偶维。", difficulty: "hard", chapter: "ch8" },
  { q: "设M是紧致带边曲面。以下哪个组合在微分同胚下不变？", options: ["∫_M K dA", "∫_M K dA + ∫_∂M κ_g ds", "∫_M K dA - ∫_∂M κ_g ds", "∫_∂M κ_g ds"], answer: 1, explanation: "∫_M K dA + ∫_∂M κ_g ds = 2πχ(M)是拓扑不变量，因此在微分同胚下不变。单独的∫_M K dA和∫_∂M κ_g ds都不是拓扑不变量，它们依赖于度量。", difficulty: "medium", chapter: "ch8" },
  { q: "对于亏格g=3的紧致曲面，若要使其Gauss曲率K ≥ 0处处成立，则必须满足什么？", options: ["g=0（球面）", "g≤1", "不可能实现", "g=1"], answer: 2, explanation: "若K≥0，则∫K dA ≥ 0。但由Gauss-Bonnet：∫K dA = 4π(1-g)。对g=3，∫K dA = -8π < 0，与K≥0矛盾。因此亏格≥2的曲面不能有处处非负的Gauss曲率。", difficulty: "medium", chapter: "ch8" },
  { q: "Gauss-Bonnet定理在物理学中的一个重要应用是什么？", options: ["计算天体轨道", "拓扑绝缘体和量子Hall效应中的Chern数", "计算流体动力学", "电磁学"], answer: 1, explanation: "Gauss-Bonnet定理（及Chern推广）在现代物理学中有重要应用：拓扑绝缘体的Chern数、量子Hall效应的TKNN不变量、引力理论中的Gauss-Bonnet项等。这些应用本质上是将曲率积分与拓扑不变量联系起来。", difficulty: "easy", chapter: "ch8" },

// ================================================================
// Ch9: Jacobi场 (原有10题 + 新增12题 = 22题)
// ================================================================

  // ---- 原有题目 ----
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

  // ---- 新增题目 (12题) ----
  { q: "设γ是测地线，J是沿γ的Jacobi场。若J(0) = 0且J'(0) = v，则J(t)在小t下的渐近行为是什么？", options: ["J(t) ≈ t·v", "J(t) ≈ t²·v", "J(t) ≈ v", "J(t) ≈ sin(t)v"], answer: 0, explanation: "由Jacobi方程∇_t²J + R(J,γ')γ' = 0，当t→0时，曲率项为O(t²)，故J(t) ≈ t·J'(0) = t·v。这反映了Jacobi场在原点附近的线性行为。", difficulty: "medium", chapter: "ch9" },
  { q: "设J₁, J₂是沿同一测地线γ的Jacobi场。以下哪个量沿γ是常数？", options: ["⟨J₁, J₂⟩", "⟨J₁', J₂⟩ - ⟨J₁, J₂'⟩", "|J₁|²", "⟨J₁, J₂'⟩"], answer: 1, explanation: "Wronskian W(J₁,J₂) = ⟨J₁', J₂⟩ - ⟨J₁, J₂'⟩沿γ是常数。这是因为Jacobi方程是二阶线性ODE，两个解的Wronskian守恒。这是焦散理论中重要的守恒量。", difficulty: "hard", chapter: "ch9" },
  { q: "设γ是完备黎曼流形中的测地线。若存在t₀ > 0使得γ(t₀)是γ(0)的共轭点，则γ在[0, t₀+ε]上：", options: ["一定是最短测地线", "不再是最短测地线", "可能是最短测地线", "不再是测地线"], answer: 1, explanation: "共轭点之后，测地线不再极小化距离。存在连接γ(0)和γ(t₀+ε)的、比γ更短的曲线。这是共轭点判别极小性的基本结论。参考Lee定理10.9。", difficulty: "medium", chapter: "ch9" },
  { q: "在常曲率c的空间中，沿测地线γ的法Jacobi场J(t)（满足J(0)=0, |J'(0)|=1）的模长|J(t)|等于什么？", options: ["|J(t)| = t", "|J(t)| = (1/√c) sin(√c t)（c>0）或(1/√|c|) sinh(√|c| t)（c<0）或t（c=0）", "|J(t)| = e^t", "|J(t)| = 1"], answer: 1, explanation: "常曲率c空间中，Jacobi方程简化为J'' + cJ = 0（法分量）。c>0时J(t)=sin(√c t)/√c（振荡），c<0时J(t)=sinh(√|c| t)/√|c|（指数增长），c=0时J(t)=t（线性增长）。", difficulty: "medium", chapter: "ch9" },
  { q: "Jacobi场的几何意义是什么？", options: ["描述测地线的长度", "描述测地线变分的无穷小偏差", "描述曲率的变化", "描述度量的变化"], answer: 1, explanation: "Jacobi场是测地线变分Γ(s,t)的变分向量场J(t) = ∂Γ/∂s|_{s=0}。它描述了从一条测地线到邻近测地线的无穷小偏差，是研究共轭点和焦散现象的核心工具。", difficulty: "easy", chapter: "ch9" },
  { q: "设γ是完备流形中的测地线。若沿γ的截面曲率≤0，则共轭点的情况如何？", options: ["一定存在共轭点", "不存在共轭点", "可能有共轭点", "每个点都是共轭点"], answer: 1, explanation: "若K≤0，则沿γ的Jacobi场满足|J|'' ≥ 0（从Jacobi方程可得），因此|J|是凸函数。若J(0)=0且J≠0，则|J(t)|严格递增，J(t)≠0对t>0成立。故不存在共轭点。这是Hadamard-Cartan定理的局部版本。", difficulty: "medium", chapter: "ch9" },
  { q: "Morse指标定理建立了能量泛函E在测地线γ上的Morse指标与什么之间的关系？", options: ["与曲率", "与沿γ的共轭点个数（计重数）", "与γ的长度", "与流形的维数"], answer: 1, explanation: "Morse指标定理：index(γ) = Σ_{t∈(0,b)} dim{J: J是Jacobi场, J(0)=J(t)=0}。即Morse指标等于沿γ（在端点之间）的共轭点个数（计重数）。这是变分法和黎曼几何的深刻联系。", difficulty: "hard", chapter: "ch9" },
  { q: "在球面S²(1)上，从北极出发的大圆测地线γ(t) = (sin t, 0, cos t)。沿γ的法Jacobi场J(t)（满足J(0)=0, J'(0)=∂_θ）的表达式是什么？", options: ["J(t) = t·∂_θ", "J(t) = sin(t)·∂_θ", "J(t) = sinh(t)·∂_θ", "J(t) = (1-cos t)·∂_θ"], answer: 1, explanation: "S²(1)上法Jacobi方程J''+J=0，初始条件J(0)=0, J'(0)=∂_θ给出J(t)=sin(t)·∂_θ。在t=π处J(π)=0，对应南极（共轭点）。这也是经典球面Jacobi场的显式解。", difficulty: "medium", chapter: "ch9" },
  { q: "设γ是测地线，J是沿γ的Jacobi场。J可以分解为切向分量和法向分量。切向Jacobi场的通解是什么？", options: ["J^T(t) = (at+b)γ'(t)", "J^T(t) = a·γ'(t)", "J^T(t) = 0", "J^T(t) = sin(t)γ'(t)"], answer: 0, explanation: "切向Jacobi场满足J^T'' = 0（因为R(γ',γ')γ' = 0），故J^T(t) = (at+b)γ'(t)。切向Jacobi场对应测地线的重新参数化，不包含新的几何信息。通常只考虑法Jacobi场。", difficulty: "medium", chapter: "ch9" },
  { q: "在紧致黎曼流形上，Morse理论如何用于证明闭测地线的存在性？", options: ["通过分析曲率张量", "通过研究自由环路空间ΩM上的能量泛函的临界点", "通过Gauss-Bonnet定理", "通过Ricci流"], answer: 1, explanation: "Morse理论应用于自由环路空间ΩM = {γ: S¹ → M}上的能量泛函E(γ) = ∫|γ'|² dt。E的临界点即闭测地线。利用Morse不等式和流形的拓扑性质（如Betti数），可证明闭测地线的存在性。Lyusternik-Fet定理是经典应用。", difficulty: "hard", chapter: "ch9" },
  { q: "设γ: [0,b] → M是测地线，p=γ(0)。Jacobi场J满足J(0)=0。J(b)与d(exp_p)_{bγ'(0)}的关系是什么？", options: ["J(b) = d(exp_p)_{bγ'(0)}(b J'(0))", "J(b) = d(exp_p)_{bγ'(0)}(J'(0))", "J(b) = exp_p(J'(0))", "J(b)与exp_p无关"], answer: 1, explanation: "J(b) = d(exp_p)_{bγ'(0)}(b J'(0))。这是Jacobi场与指数映射微分的核心关系：Jacobi场的值等于指数映射的微分在相应方向上的值。共轭点对应于d(exp_p)退化的点。参考Lee定理10.4。", difficulty: "hard", chapter: "ch9" },
  { q: "在双曲空间Hⁿ中，从一点出发的测地线上是否有共轭点？", options: ["有，且很多", "没有", "仅在无穷远处", "仅在特定距离处"], answer: 1, explanation: "Hⁿ截面曲率为负（K<0），Jacobi场|J(t)| ≥ t|J'(0)|（对J(0)=0），因此对所有t>0有J(t)≠0，不存在共轭点。这是Cartan-Hadamard定理的体现：非正曲率单连通流形上exp_p是全局微分同胚。", difficulty: "medium", chapter: "ch9" },

// ================================================================
// Ch10: 比较定理 (原有10题 + 新增13题 = 23题)
// ================================================================

  // ---- 原有题目 ----
  { q: "Rauch比较定理比较的是什么？", options: ["两个流形的体积", "两个流形中Jacobi场的模长", "两个流形的直径", "两个流形的曲率"], answer: 1, explanation: "Rauch定理：若K_M ≥ K_M~，则沿等长测地线相同初始条件的Jacobi场满足|J(t)| ≤ |J~(t)|。", difficulty: "easy", chapter: "ch10" },
  { q: "Bishop-Gromov体积比较定理的结论是什么？", options: ["Vol(B(p,r)) ≥ V_c(r)", "Vol(B(p,r)) ≤ V_c(r)", "Vol(B(p,r)) = V_c(r)", "Vol(B(p,r))与V_c(r)无关"], answer: 1, explanation: "若Ric≥(n-1)c·g，则Vol(B(p,r)) ≤ V_c(r)，且比值Vol(B(p,r))/V_c(r)单调非增。", difficulty: "easy", chapter: "ch10" },
  { q: "Toponogov定理比较的是什么？", options: ["两个流形的曲率", "测地三角形的边长和角度", "两个流形的体积", "测地线的长度"], answer: 1, explanation: "Toponogov定理：若K≥c，则测地三角形各角不小于常曲率c空间中同边长三角形的对应角。", difficulty: "medium", chapter: "ch10" },
  { q: "Bonnet-Myers定理中，若Ric≥(n-1)/R²·g，直径的上界是多少？", options: ["R", "πR", "2πR", "πR/2"], answer: 1, explanation: "Bonnet-Myers定理：diam(M) ≤ πR。球面Sⁿ(R)达到此上界，是刚性情形。", difficulty: "easy", chapter: "ch10" },
  { q: "Gromov紧致性定理要求哪些条件？", options: ["仅曲率有界", "截面曲率有界、直径有界、体积有下界", "仅直径有界", "仅体积有下界"], answer: 1, explanation: "Gromov紧致性定理：|K|≤1, diam≤D, vol≥v>0的n维流形集合在GH拓扑下紧致。", difficulty: "medium", chapter: "ch10" },
  { q: "Rauch定理中，正曲率对Jacobi场有什么影响？", options: ["使Jacobi场增长更快", "使Jacobi场增长变慢（或振荡）", "无影响", "使Jacobi场消失"], answer: 1, explanation: "正曲率使Jacobi场增长变慢或振荡，负曲率使Jacobi场指数增长。曲率像'弹簧'。", difficulty: "medium", chapter: "ch10" },
  { q: "Gromov-Hausdorff距离度量什么？", options: ["两个黎曼流形的曲率差异", "两个度量空间之间的'形状差异'", "两个流形的体积差异", "两个流形的直径差异"], answer: 1, explanation: "d_GH(X,Y)度量两个紧致度量空间之间的形状差异，定义为等距嵌入到同一空间后Hausdorff距离的下确界。", difficulty: "medium", chapter: "ch10" },
  { q: "Cheeger-Gromoll分裂定理的条件和结论是什么？", options: ["Ric≥0且存在直线→M=R×N", "Ric≤0→M是紧致的", "K≥0→M是球面", "Ric=0→M是平坦的"], answer: 0, explanation: "Cheeger-Gromoll分裂定理：若完备非紧致流形Ric≥0且包含一条直线，则等距于乘积R×N。", difficulty: "hard", chapter: "ch10" },
  { q: "Cartan-Hadamard定理适用于什么曲率条件？", options: ["截面曲率≥0", "截面曲率≤0", "Ricci曲率≥0", "标量曲率≤0"], answer: 1, explanation: "Cartan-Hadamard定理：若完备单连通流形截面曲率≤0，则微分同胚于Rⁿ。", difficulty: "medium", chapter: "ch10" },
  { q: "Perelman证明Poincaré猜想时使用了什么工具？", options: ["仅Gauss-Bonnet定理", "Ricci流和Gromov-Hausdorff收敛", "仅Toponogov定理", "仅Rauch定理"], answer: 1, explanation: "Perelman使用Ricci流（带手术的）和Gromov-Hausdorff收敛分析奇点形成，证明了Poincaré猜想和Thurston几何化猜想。", difficulty: "hard", chapter: "ch10" },

  // ---- 新增题目 (13题) ----
  { q: "Rauch比较定理I（曲率比较）的基本假设是什么？", options: ["两个流形有相同的体积", "两个流形中沿等长测地线的Jacobi场满足相同的初始条件", "两个流形有相同的直径", "两个流形有相同的Euler示性数"], answer: 1, explanation: "Rauch定理I：设M和M~是黎曼流形，γ和γ~是等长的测地线。若K_M ≤ K_M~，且J, J~是满足相同初始条件J(0)=J~(0)=0, |J'(0)|=|J~'(0)|, J'⊥γ', J~'⊥γ~'的法Jacobi场，则|J(t)| ≥ |J~(t)|。", difficulty: "medium", chapter: "ch10" },
  { q: "Bishop-Gromov定理中，Ricci曲率下界给出的体积比较是：Vol(B(p,R))/Vol(B(p,r))与什么比较？", options: ["与V_c(R)/V_c(r)比较", "与(R/r)^n比较", "与常数比较", "与R-r比较"], answer: 0, explanation: "Bishop-Gromov定理：若Ric ≥ (n-1)c，则函数f(r) = Vol(B(p,r))/V_c(r)是r的非增函数。特别地，Vol(B(p,R))/Vol(B(p,r)) ≤ V_c(R)/V_c(r)（对R>r）。这是体积比较的最强形式。", difficulty: "hard", chapter: "ch10" },
  { q: "Toponogov定理在三角形比较中的“铰链”版本（hinge version）陈述了什么？", options: ["比较两个三角形的面积", "比较由两条边和夹角决定的第三边长度", "比较三角形的内角和", "比较三角形的周长"], answer: 1, explanation: "Toponogov铰链定理：设M中两条测地线γ₁, γ₂从p出发，夹角为α。若K_M ≥ c，则d(γ₁(t), γ₂(s)) ≤ d_c(γ̃₁(t), γ̃₂(s))，其中γ̃₁, γ̃₂是常曲率c空间中同样长度和夹角的测地线。", difficulty: "hard", chapter: "ch10" },
  { q: "Bonnet-Myers定理的刚性情形是什么？", options: ["直径=πR时，M等距于球面Sⁿ(R)", "直径任意时都等距于球面", "没有刚性情形", "直径=0时等距于球面"], answer: 0, explanation: "Bonnet-Myers定理的刚性部分：若Ric ≥ (n-1)/R²且diam(M) = πR，则M等距于半径为R的球面Sⁿ(R)。这是Cheng的刚性定理，证明了球面是唯一达到直径上界的流形。", difficulty: "medium", chapter: "ch10" },
  { q: "Gromov紧致性定理（Gromov预紧致性定理）中，条件vol ≥ v > 0的作用是什么？", options: ["技术性条件，可以去掉", "防止序列坍缩（collapse）到低维空间", "保证曲率有界", "保证直径有界"], answer: 1, explanation: "体积下界vol ≥ v > 0防止流形序列坍缩到低维极限空间。若无此条件，例如一系列越来越薄的平坦环面会在GH极限下坍缩到圆。体积下界与曲率上界、直径上界构成Gromov紧致性的三个核心条件。", difficulty: "medium", chapter: "ch10" },
  { q: "Cheeger-Gromoll分裂定理的几何内涵是什么？", options: ["正曲率流形必然分裂", "非负Ricci曲率流形中的“直线”导致等距分裂", "负曲率流形必然分裂", "所有流形都能分裂"], answer: 1, explanation: "Cheeger-Gromoll分裂定理：若完备流形Ric ≥ 0且包含一条直线（双向无穷的最短测地线），则M等距于R × N。几何上，这表示流形沿直线方向“分裂”出一个欧氏因子。", difficulty: "medium", chapter: "ch10" },
  { q: "Cartan-Hadamard定理的结论中，exp_p: T_pM → M是什么？", options: ["局部微分同胚", "全局微分同胚", "覆盖映射", "浸入"], answer: 1, explanation: "Cartan-Hadamard定理：若M完备单连通且K≤0，则exp_p: T_pM → M是全局微分同胚。因此M微分同胚于R^n。这是非正曲率流形最基本的拓扑刚性定理。", difficulty: "medium", chapter: "ch10" },
  { q: "Bishop不等式（Bishop-Gromov的前身）给出了什么估计？", options: ["Vol(B(p,r)) ≥ V_c(r)", "Vol(B(p,r)) ≤ V_c(r)", "Vol(B(p,r)) = V_c(r)", "面积比较"], answer: 1, explanation: "Bishop不等式：若Ric ≥ (n-1)c，则Vol(B(p,r)) ≤ V_c(r)。Gromov的改进是证明比值Vol(B(p,r))/V_c(r)是单调非增的，这是更强的结果（Bishop-Gromov不等式）。", difficulty: "medium", chapter: "ch10" },
  { q: "在Gromov-Hausdorff收敛中，若M_i → X且X是光滑流形，则dim X与dim M_i的关系是什么？", options: ["dim X > dim M_i", "dim X = dim M_i", "dim X ≤ dim M_i（可能坍缩）", "dim X ≥ dim M_i"], answer: 2, explanation: "在GH收敛中，极限空间的维数可能严格小于收敛序列的维数（坍缩现象）。例如，半径趋于零的圆S¹(r_i)的GH极限是单点。但若有曲率下界和体积下界，则维数保持不变。", difficulty: "hard", chapter: "ch10" },
  { q: "Synge定理的结论是什么？", options: ["偶维定向正曲率紧致流形是单连通的", "所有正曲率流形都是球面", "正曲率流形直径有限", "正曲率流形Ricci曲率有界"], answer: 0, explanation: "Synge定理：若M是紧致黎曼流形，截面曲率K>0，则：(1)若M是偶维可定向的，则M单连通；(2)若M是奇维的，则M可定向。这是正曲率流形拓扑的早期经典结果。", difficulty: "medium", chapter: "ch10" },
  { q: "Gromov的Betti数估计定理给出了什么结果？", options: ["Betti数与曲率无关", "截面曲率有下界时，Betti数之和有上界", "Betti数总是1", "Betti数等于维数"], answer: 1, explanation: "Gromov定理：若完备流形M满足K ≥ -1且diam ≤ D，则M的Betti数之和Σ b_i(M) ≤ C(n,D)，其中C(n,D)是仅依赖于n和D的常数。这是曲率下界对流形拓扑的深刻控制。", difficulty: "hard", chapter: "ch10" },
  { q: "Berger球面定理（sphere theorem）的经典版本说什么？", options: ["所有紧致流形都是球面", "若1/4 < K ≤ 1，则M同胚于球面", "若K ≥ 0，则M是球面", "K=1的流形是球面"], answer: 1, explanation: "Berger-Klingenberg球面定理：若紧致单连通n维黎曼流形M满足1/4 < K ≤ 1（截面曲率被pinched），则M同胚于Sⁿ。Brendle-Schoen使用Ricci流证明了微分同胚版本。", difficulty: "hard", chapter: "ch10" },
  { q: "Ricci流方程∂g/∂t = -2Ric(g)的几何意义是什么？", options: ["度量随时间不变", "度量沿Ricci曲率方向演化（类似热方程）", "度量膨胀", "度量收缩为零"], answer: 1, explanation: "Ricci流∂g/∂t = -2Ric(g)使度量沿Ricci曲率方向演化，类似于热方程。正曲率区域收缩，负曲率区域膨胀。Hamilton引入Ricci流，Perelman用它证明了Poincaré猜想和Thurston几何化猜想。", difficulty: "medium", chapter: "ch10" }

];