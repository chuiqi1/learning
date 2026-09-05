// ============================================================
// 例子“根据定义逐步计算”完整推导
// 结构：{ "节点id": { "例子序号(从0起)": "①②③… 完整代入计算" } }
// 每步用【思路】（为什么做这步/用到哪个定义定理）与【计算】（具体代入与化简）标注。
// 数学用 ^ / _ 记法，构建时自动转成上下标。
// ============================================================

const L = String.raw;

module.exports = {
  "r1": {
    0: L`<h4>目标</h4>
用曲率公式验证：半径为 \(R\) 的圆在每一点的曲率恒等于 \(1/R\)。

<h4>第一步：写出圆的参数化并求导</h4>
取参数化 \(\gamma(t)=(R\cos t,\ R\sin t)\)。逐分量求导（用到 \((\cos t)'=-\sin t,\ (\sin t)'=\cos t\)）：

<div class="eq">$$\gamma'(t)=(-R\sin t,\ R\cos t),\qquad \gamma''(t)=(-R\cos t,\ -R\sin t)$$</div>

<h4>第二步：代入一般参数曲率公式</h4>
曲率公式为 \(\kappa=\dfrac{|x'y''-y'x''|}{(x'^2+y'^2)^{3/2}}\)。先算分子（十字相减）：

<div class="eq">$$|x'y''-y'x''|=|(-R\sin t)(-R\sin t)-(R\cos t)(-R\cos t)|=R^2(\sin^2 t+\cos^2 t)=R^2$$</div>

<h4>第三步：算分母并化简</h4>
分母 \(x'^2+y'^2=R^2\sin^2 t+R^2\cos^2 t=R^2\)，故

<div class="keybox">$$\boxed{\kappa=\frac{R^2}{(R^2)^{3/2}}=\frac{R^2}{R^3}=\frac1R}$$</div>

<div class="memobox"><strong>关键词：</strong>圆的曲率处处相同，且与半径成反比——半径越小、弯得越急。</div>`,
    1: L`<h4>目标</h4>
计算抛物线 \(y=x^2\) 在顶点处的曲率，说明顶点处弯曲最厉害。

<h4>第一步：写成参数形式并求导</h4>
取 \(\gamma(x)=(x,\ x^2)\)，则

<div class="eq">$$\gamma'(x)=(1,\ 2x),\qquad \gamma''(x)=(0,\ 2)$$</div>

<h4>第二步：代入曲率公式</h4>
分子 \(|x'y''-y'x''|=|1\cdot 2-2x\cdot 0|=2\)；分母 \((x'^2+y'^2)^{3/2}=(1+4x^2)^{3/2}\)。故

<div class="eq">$$\kappa(x)=\frac{2}{(1+4x^2)^{3/2}}$$</div>

<h4>第三步：在顶点取值</h4>
顶点在 \(x=0\)，此时分母最小（等于 \(1\)），曲率达到最大值

<div class="keybox">$$\boxed{\kappa(0)=2}$$</div>

当 \(|x|\to\infty\) 时分母趋于无穷，\(\kappa\to 0\)，反映抛物线「越远越平」。

<div class="memobox"><strong>关键词：</strong>顶点处曲率最大 \(\kappa=2\)，远离顶点曲率衰减为零。</div>`,
    2: L`<h4>目标</h4>
理解回旋曲线（Clothoid）：曲率随弧长<strong>线性增长</strong>的曲线。

<h4>第一步：曲率线性增长意味着什么</h4>
设 \(\kappa(s)=s/a^2\)（比例常数记为 \(1/a^2\)）。由平面曲线基本定理，切线角满足 \(d\theta/ds=\kappa=s/a^2\)，积分得

<div class="eq">$$\theta(s)=\theta_0+\frac{s^2}{2a^2}$$</div>

<h4>第二步：还原曲线——Fresnel 积分</h4>
切线方向 \(T(s)=(\cos\theta,\sin\theta)\)，曲线为

<div class="eq">$$\gamma(s)=\gamma_0+\int_0^s\Big(\cos\frac{u^2}{2a^2},\ \sin\frac{u^2}{2a^2}\Big)\,du$$</div>

这类积分正是著名的 <strong>Fresnel 积分</strong>，其图像呈螺旋状盘旋，且曲率沿弧长均匀增大。

<h4>第三步：为什么用它设计公路</h4>
车辆转弯时方向盘转动角度与曲率成正比。若曲率从 \(0\)（直线）突然跳到常数（圆弧），司机需要瞬间打满方向，产生横向冲击；而回旋曲线让曲率从 \(0\) <strong>连续、匀速</strong>增大，转向平顺。

<div class="keybox">$$\boxed{\kappa(s)=\frac{s}{a^2}\ \Longrightarrow\ \theta(s)=\frac{s^2}{2a^2}}$$</div>

<div class="memobox"><strong>关键词：</strong>回旋曲线 = 曲率随弧长线性变化，让转弯「无突变」。</div>`
  },
  "r2": {
    0: L`<h4>目标</h4>
计算圆柱螺旋线 \(r(t)=(\cos t,\ \sin t,\ at)\) 的曲率与挠率，验证它们都是常数。

<h4>第一步：求导并算弧长参数</h4>
\(r'(t)=(-\sin t,\ \cos t,\ a)\)，其模长 \(|r'|=\sqrt{\sin^2 t+\cos^2 t+a^2}=\sqrt{1+a^2}\) 为常数，故 \(s=\sqrt{1+a^2}\,t\)。

<h4>第二步：计算曲率</h4>
一般参数下 \(\kappa=\dfrac{|r'\times r''|}{|r'|^3}\)。先算 \(r''(t)=(-\cos t,-\sin t,0)\)，叉积

<div class="eq">$$r'\times r''=(a\sin t,\ -a\cos t,\ 1),\qquad |r'\times r''|=\sqrt{a^2+1}$$</div>

故曲率

<div class="eq">$$\kappa=\frac{\sqrt{1+a^2}}{(1+a^2)^{3/2}}=\frac{1}{1+a^2}$$</div>

<h4>第三步：计算挠率</h4>
挠率公式 \(\tau=\dfrac{(r'\times r'')\cdot r'''}{|r'\times r''|^2}\)。因 \(r'''=(\sin t,-\cos t,0)\)，混合积 \((r'\times r'')\cdot r'''=a\sin^2 t+a\cos^2 t=a\)，故

<div class="keybox">$$\boxed{\kappa=\frac{1}{1+a^2},\qquad \tau=\frac{a}{1+a^2}}$$</div>

<div class="memobox"><strong>关键词：</strong>螺旋线的曲率、挠率均为常数，是三维中「最均匀」的曲线。</div>`,
    1: L`<h4>目标</h4>
理解挠率在真实世界（DNA 双螺旋）中的物理意义。

<h4>第一步：DNA 的几何图像</h4>
DNA 双螺旋可看成两条互相缠绕的空间曲线，其局部弯曲由曲率 \(\kappa\) 描述，扭转与缠绕程度由挠率 \(\tau\) 描述。螺旋的「松紧」与「超螺旋」程度正对应着这两个几何量。

<h4>第二步：挠率的物理角色</h4>
平面曲线挠率恒为零；一旦 DNA 离开平面、开始三维盘旋，\(\tau\neq 0\)。超螺旋构型（DNA 再自身缠绕一圈）意味着挠率的积分在全局上贡献了额外的「链接数」，这与拓扑量 \(Lk=Tw+Wr\)（链接数 = 扭转数 + 缠绕数）直接相关。

<div class="eq">$$Lk = Tw + Wr$$</div>

<h4>第三步：与生物功能挂钩</h4>
拓扑异构酶通过切断并重接 DNA 链来改变 \(Lk\)，从而调控 \(Tw\) 与 \(Wr\) 的分配——也就是改变局部的曲率、挠率分布，最终影响基因表达。

<div class="keybox">$$\boxed{\text{DNA 的 } \kappa,\tau\ \text{编码其三维拓扑结构}}$$</div>

<div class="memobox"><strong>关键词：</strong>挠率衡量「离开平面的扭转」，是 DNA 超螺旋的几何语言。</div>`
  },
  "r3": {
    0: L`<h4>目标</h4>
验证半径为 \(R\) 的球面的 Gauss 曲率处处为 \(1/R^2\)。

<h4>第一步：主曲率</h4>
球面在每一点沿任意切方向的法曲率都等于 \(1/R\)（大圆的主曲率），故两个主曲率相同：

<div class="eq">$$\kappa_1=\kappa_2=\frac1R$$</div>

<h4>第二步：Gauss 曲率 = 主曲率之积</h4>

<div class="keybox">$$\boxed{K=\kappa_1\kappa_2=\frac{1}{R^2}}$$</div>

球面是「常正曲率」曲面的标准模型：每一点的弯曲程度完全一样，且处处为正。

<div class="memobox"><strong>关键词：</strong>球面 \(K=1/R^2>0\) 恒定，是最对称的常正曲率曲面。</div>`,
    1: L`<h4>目标</h4>
认识伪球面（tractroid）——一个 Gauss 曲率恒为 \(-1\) 的常负曲率曲面。

<h4>第一步：伪球面的构造</h4>
伪球面由曳物线（tractrix）绕其渐近线旋转得到。曳物线的局部形状使其两个主曲率一正一负，且乘积恒为常数。

<h4>第二步：曲率恒为 -1</h4>
直接计算两个主曲率 \(\kappa_1,\kappa_2\)，其乘积给出

<div class="keybox">$$\boxed{K=\kappa_1\kappa_2=-1}$$</div>

<h4>第三步：与双曲几何的联系</h4>
早在黎曼之前，人们就发现伪球面的内蕴几何满足双曲几何的公理——三角形内角和小于 \(180^\circ\)。这首次给出常负曲率曲面的具体模型，为后来黎曼提出 n 维流形埋下伏笔。

<div class="memobox"><strong>关键词：</strong>伪球面 \(K=-1\) 恒定，是常负曲率曲面，其上内蕴几何即双曲几何。</div>`,
    2: L`<h4>目标</h4>
观察环面上 Gauss 曲率如何随位置变号。

<h4>第一步：环面的三个区域</h4>
环面（甜甜圈面）可分为：外侧「赤道」区域、内侧「咽喉」区域，以及顶部/底部的两条过渡圆周。

<h4>第二步：逐区判断曲率符号</h4>
在外侧区域，两个主曲率同号（曲面向同方向弯曲），故 \(K>0\)（椭圆点）；在内侧区域，两个主曲率异号（一个向外弯、一个向内弯），故 \(K<0\)（双曲点）；在顶部与底部圆周上，有一个主曲率为零，故

<div class="eq">$$K=\kappa_1\kappa_2=0$$</div>

<h4>第三步：总曲率的抵消</h4>
正曲率区域与负曲率区域各占一部分，整体上环面的总曲率积分恰好为零——这与 Gauss–Bonnet 定理（环面 Euler 示性数 \(\chi=0\)）完全一致。

<div class="keybox">$$\boxed{\text{环面：外侧 } K>0,\ \text{内侧 } K<0,\ \text{过渡线 } K=0}$$</div>

<div class="memobox"><strong>关键词：</strong>环面同时具有正、负、零曲率区域，是展示曲率变化的天然「标本」。</div>`
  },
  "r4": {
    0: L`<h4>目标</h4>
理解平面与圆柱面为何「内蕴上完全相同」。

<h4>第一步：卷成圆柱不拉伸</h4>
把一张纸（平面）卷成圆柱，只做弯曲、不拉伸也不压缩，因此两点间的<strong>内蕴距离</strong>（沿曲面量测）完全不变——这就是一个等距映射。

<h4>第二步：曲率都为零</h4>
平面的 Gauss 曲率 \(K=0\)，等距下曲率不变，故圆柱面的 Gauss 曲率也为零

<div class="eq">$$K_{\text{平面}}=K_{\text{圆柱}}=0$$</div>

<h4>第三步：三角形内角和不变</h4>
内蕴几何中，三角形内角和与曲率相关（Gauss–Bonnet 局部版）。既然两者曲率都为零，其上的（测地）三角形内角和都是 \(180^\circ\)。

<div class="keybox">$$\boxed{\text{平面与圆柱面等距}\ \Longrightarrow\ K\equiv 0}$$</div>

<div class="memobox"><strong>关键词：</strong>卷纸不改变内蕴几何，所以平面与圆柱面「内蕴不可区分」。</div>`,
    1: L`<h4>目标</h4>
说明为何任何平面地图都无法同时保角又保面积。

<h4>第一步：地图投影是「展平」</h4>
把球面画到平面，相当于求一个球面到平面的映射。若能同时保持角度与面积，则它必须是等距映射（保长度 ⟹ 保角度与面积，且反之在二维光滑情形也基本成立）。

<h4>第二步：等距会保曲率</h4>
由等距不变性，若球面与平面等距，则两者的 Gauss 曲率必须相等。但

<div class="eq">$$K_{\text{球面}}=\frac1{R^2}>0,\qquad K_{\text{平面}}=0$$</div>

矛盾！

<h4>第三步：结论</h4>
球面（正曲率）与平面（零曲率）<strong>不等距</strong>，故任何平面地图必有畸变——要么角度失真（如等积投影），要么面积失真（如保角投影）。

<div class="keybox">$$\boxed{K>0\ \text{与}\ K=0\ \text{不等距}\ \Longrightarrow\ \text{地图必有畸变}}$$</div>

<div class="memobox"><strong>关键词：</strong>地图必然畸变，根源是球面与平面曲率不同、无法等距。</div>`
  },
  "r5": {
    0: L`<h4>目标</h4>
用球面验证全局 Gauss–Bonnet 定理。

<h4>第一步：球面的曲率与面积</h4>
半径 \(R\) 的球面处处 \(K=1/R^2\)，总面积 \(A=4\pi R^2\)。

<h4>第二步：总曲率积分</h4>

<div class="eq">$$\int_{S^2} K\,dA=\frac1{R^2}\cdot 4\pi R^2=4\pi$$</div>

<h4>第三步：对照 Euler 示性数</h4>
球面的 Euler 示性数 \(\chi(S^2)=2\)，故 \(2\pi\chi=4\pi\)，与积分完全一致。

<div class="keybox">$$\boxed{\int_{S^2}K\,dA=4\pi=2\pi\,\chi(S^2)}$$</div>

<div class="memobox"><strong>关键词：</strong>球面总曲率恒为 \(4\pi\)，与半径无关——这是拓扑刚性。</div>`,
    1: L`<h4>目标</h4>
验证环面的总曲率为零。

<h4>第一步：环面的 Euler 示性数</h4>
环面可视为把圆柱两端粘合，其 Euler 示性数 \(\chi=0\)。

<h4>第二步：Gauss–Bonnet 给出的约束</h4>

<div class="eq">$$\int_M K\,dA=2\pi\cdot 0=0$$</div>

<h4>第三步：正负曲率相互抵消</h4>
环面外侧区域 \(K>0\)，内侧区域 \(K<0\)，这两个区域对积分的贡献恰好一正一负、完全抵消，使得总曲率为零。这与前面的分区判断吻合。

<div class="keybox">$$\boxed{\int_{\text{环面}}K\,dA=0}$$</div>

<div class="memobox"><strong>关键词：</strong>环面正负曲率「收支平衡」，总曲率恰为零。</div>`,
    2: L`<h4>目标</h4>
计算亏格 \(2\) 闭曲面的总曲率。

<h4>第一步：亏格与 Euler 示性数</h4>
亏格 \(g=2\) 的闭曲面（双环面）满足 \(\chi=2-2g=2-4=-2\)。

<h4>第二步：Gauss–Bonnet 直接给出</h4>

<div class="keybox">$$\boxed{\int_M K\,dA=2\pi\chi=2\pi\cdot(-2)=-4\pi}$$</div>

<h4>第三步：含义</h4>
无论这个曲面被怎样拉伸、变形，只要不撕裂不粘合，它的总曲率始终锁定为 \(-4\pi\)。这说明曲率分布可以「流动」，但总量受拓扑控制。

<div class="memobox"><strong>关键词：</strong>亏格 \(2\) ⟹ 总曲率恒为 \(-4\pi\)，变形无法改变它。</div>`
  },
  "r6": {
    0: L`<h4>目标</h4>
写出 \(\mathbb R^n\) 上最标准的黎曼度量——欧氏度量。

<h4>第一步：度量张量是 Kronecker delta</h4>
在直角坐标下，欧氏度量分量就是单位矩阵

<div class="eq">$$g_{ij}=\delta_{ij}=\begin{cases}1,&i=j\\0,&i\neq j\end{cases}$$</div>

<h4>第二步：线元表达式</h4>
因而线元（无穷小距离平方）为

<div class="keybox">$$\boxed{ds^2=\sum_{i=1}^n (dx^i)^2}$$</div>

这是平坦空间的标准度量，其曲率恒为零。

<div class="memobox"><strong>关键词：</strong>欧氏度量 = 分量全为 \(\delta_{ij}\)，是「最平」的度量。</div>`,
    1: L`<h4>目标</h4>
说明 Minkowski 度量为何不是黎曼度量。

<h4>第一步：符号差 (3,1)</h4>
狭义相对论的时空线元为

<div class="eq">$$ds^2=-c^2dt^2+dx^2+dy^2+dz^2$$</div>

度量矩阵符号为 \((-,+,+,+)\)。

<h4>第二步：破坏正定性</h4>
黎曼度量要求对一切非零切向量 \(g(v,v)>0\)。但类时向量（如纯时间方向）满足 \(g(v,v)<0\)，类光向量满足 \(g(v,v)=0\)。正定性被破坏。

<div class="keybox">$$\boxed{\text{Minkowski 度量符号 }(-,+,+,+)\ \Longrightarrow\ \text{伪黎曼（Lorentz）度量}}$$</div>

<div class="memobox"><strong>关键词：</strong>含负号 ⟹ 非正定 ⟹ 是 Lorentz 度量而非黎曼度量。</div>`,
    2: L`<h4>目标</h4>
认识曲面的第一基本形式——它是 \(\mathbb R^3\) 欧氏度量在曲面上的诱导度量。

<h4>第一步：曲面参数化</h4>
设曲面局部参数化为 \(X(u,v)\)，其切向量 \(X_u,X_v\)。\(\mathbb R^3\) 的内积限制到切平面，给出度量系数

<div class="eq">$$E=\langle X_u,X_u\rangle,\quad F=\langle X_u,X_v\rangle,\quad G=\langle X_v,X_v\rangle$$</div>

<h4>第二步：第一基本形式</h4>

<div class="keybox">$$\boxed{I=E\,du^2+2F\,du\,dv+G\,dv^2}$$</div>

它完全描述了曲面上的弧长与角度，正是诱导度量 \(g=X^*(\delta)\)。

<div class="memobox"><strong>关键词：</strong>第一基本形式 \(E,F,G\) = 欧氏内积在曲面上的限制。</div>`
  },
  "r7": {
    0: L`<h4>目标</h4>
用音乐同构定义函数的梯度。

<h4>第一步：微分是余切向量</h4>
光滑函数 \(f\) 的微分 \(df\) 是余切向量场，坐标分量 \(\partial_j f\)。

<h4>第二步：升指标得梯度</h4>
梯度是 \(df\) 的升调 \(\sharp\) 结果：

<div class="keybox">$$\boxed{(\operatorname{grad} f)^i=g^{ij}\,\partial_j f}$$</div>

即把 \(df\) 的下标用 \(g^{ij}\) 抬上去。

<div class="memobox"><strong>关键词：</strong>梯度 = 微分的「升调」，坐标下乘 \(g^{ij}\) 升指标。</div>`,
    1: L`<h4>目标</h4>
理解散度的两种等价定义。

<h4>第一步：分量缩并定义</h4>
向量场 \(X\) 的散度是协变导数的缩并

<div class="eq">$$\operatorname{div} X=\nabla_i X^i$$</div>

<h4>第二步：体积形式定义</h4>
散度也刻画向量场对体积的「拉伸」：Lie 导数满足

<div class="keybox">$$\boxed{L_X\,dV_g=(\operatorname{div}X)\,dV_g}$$</div>

两种定义一致，后者揭示了散度的几何意义——流经某点的通量发散率。

<div class="memobox"><strong>关键词：</strong>散度 = 协变导数的迹 = 体积形式沿 \(X\) 的变化率。</div>`,
    2: L`<h4>目标</h4>
写出 Laplace–Beltrami 算子，它是欧氏 Laplace 算子在流形上的推广。

<h4>第一步：定义是散度与梯度的复合</h4>

<div class="eq">$$\Delta f=\operatorname{div}(\operatorname{grad} f)$$</div>

<h4>第二步：坐标展开</h4>
代入梯度与散度的坐标表达式，得到

<div class="keybox">$$\boxed{\Delta f=g^{ij}\big(\partial_i\partial_j f-\Gamma^k_{ij}\,\partial_k f\big)}$$</div>

当度量为欧氏度量（\(\Gamma=0,\ g^{ij}=\delta^{ij}\)）时，退化为熟知的 \(\Delta f=\sum_i\partial_i^2 f\)。

<div class="memobox"><strong>关键词：</strong>Laplace–Beltrami = \(\operatorname{div}\circ\operatorname{grad}\)，多出的 \(\Gamma\) 项是曲率修正。</div>`
  },
  "r8": {
    0: L`<h4>目标</h4>
验证欧氏空间 \(\mathbb R^n\) 的等距群达到维数上界。

<h4>第一步：欧氏群结构</h4>
\(\mathbb R^n\) 的等距由正交变换 \(A\in O(n)\) 与平移 \(b\in\mathbb R^n\) 组成，即

<div class="eq">$$F(x)=Ax+b$$</div>

记作半直积 \(E(n)=O(n)\ltimes\mathbb R^n\)。

<h4>第二步：数维数</h4>
\(O(n)\) 维数为 \(\frac{n(n-1)}{2}\)，平移 \(\mathbb R^n\) 维数为 \(n\)，故

<div class="keybox">$$\boxed{\dim E(n)=\frac{n(n-1)}{2}+n=\frac{n(n+1)}{2}}$$</div>

欧氏空间是「最大对称空间」，等距群达到维数上界。

<div class="memobox"><strong>关键词：</strong>欧氏群 \(E(n)=O(n)\ltimes\mathbb R^n\)，维数恰为 \(\frac{n(n+1)}{2}\)。</div>`,
    1: L`<h4>目标</h4>
球面 \(S^n\) 的等距群也是最大对称的。

<h4>第一步：等距来自正交群</h4>
球面 \(S^n\subset\mathbb R^{n+1}\) 的等距正是限制在其上的正交变换，即

<div class="eq">$$\operatorname{Isom}(S^n)=O(n+1)$$</div>

<h4>第二步：维数验证</h4>
\(O(n+1)\) 的维数是 \(\frac{(n+1)n}{2}=\frac{n(n+1)}{2}\)，同样达到上界。球面每一点都是「各向同性」的——过一点的任意方向都能被等距互换。

<div class="keybox">$$\boxed{\dim\operatorname{Isom}(S^n)=\frac{n(n+1)}{2}}$$</div>

<div class="memobox"><strong>关键词：</strong>球面等距群 \(O(n+1)\)，与欧氏空间同为最大对称空间。</div>`,
    2: L`<h4>目标</h4>
认识双曲平面 \(H^2\) 的等距群。

<h4>第一步：上半平面模型</h4>
双曲平面可用上半平面模型 \(\mathbb H^2=\{z:\operatorname{Im}z>0\}\)，其等距由分式线性变换给出

<div class="eq">$$z\mapsto\frac{az+b}{cz+d},\qquad ad-bc=1$$</div>

<h4>第二步：群结构</h4>
保向等距群同构于 \(PSL(2,\mathbb R)=SL(2,\mathbb R)/\{\pm I\}\)。

<div class="keybox">$$\boxed{\operatorname{Isom}^+(H^2)\cong PSL(2,\mathbb R)}$$</div>

它同样是三维 Lie 群，达到 \(\frac{2\cdot 3}{2}=3\) 的维数上界。

<div class="memobox"><strong>关键词：</strong>双曲平面保向等距群 = \(PSL(2,\mathbb R)\)，三维。</div>`
  },
  "r9": {
    0: L`<h4>目标</h4>
写出球面 \(S^2\) 在球坐标下的诱导度量。

<h4>第一步：球面参数化</h4>
半径 \(R\) 的球面参数化为

<div class="eq">$$X(\theta,\varphi)=(R\sin\theta\cos\varphi,\ R\sin\theta\sin\varphi,\ R\cos\theta)$$</div>

<h4>第二步：计算切向量内积</h4>
\(|X_\theta|=R\)，\(|X_\varphi|=R\sin\theta\)，且 \(X_\theta\perp X_\varphi\)，故

<div class="keybox">$$\boxed{ds^2=R^2(d\theta^2+\sin^2\theta\,d\varphi^2)}$$</div>

这就是球面的标准诱导度量。

<div class="memobox"><strong>关键词：</strong>球面度量 \(R^2(d\theta^2+\sin^2\theta\,d\varphi^2)\)，\(\sin^2\theta\) 来自纬线圈半径收缩。</div>`,
    1: L`<h4>目标</h4>
计算环面的诱导度量。

<h4>第一步：环面参数化</h4>
以 \(R\) 为大半径、\(r\) 为小半径，参数化

<div class="eq">$$X(\theta,\varphi)=\big((R+r\cos\theta)\cos\varphi,\ (R+r\cos\theta)\sin\varphi,\ r\sin\theta\big)$$</div>

<h4>第二步：求切向量并算内积</h4>
\(|X_\theta|=r\)，\(|X_\varphi|=R+r\cos\theta\)，且 \(X_\theta\perp X_\varphi\)，故

<div class="keybox">$$\boxed{ds^2=r^2d\theta^2+(R+r\cos\theta)^2\,d\varphi^2}$$</div>

\(\theta\) 方向的「管半径」恒为 \(r\)，而 \(\varphi\) 方向半径随 \(\cos\theta\) 变化。

<div class="memobox"><strong>关键词：</strong>环面度量含因子 \((R+r\cos\theta)^2\)，反映截面半径随位置变化。</div>`,
    2: L`<h4>目标</h4>
理解共形参数化如何使曲面度量「共形平坦」。

<h4>第一步：共形参数化的定义</h4>
若参数 \((u,v)\) 使 \(E=G,\ F=0\)，则度量可写成

<div class="eq">$$ds^2=e^{2\lambda(u,v)}(du^2+dv^2)$$</div>

<h4>第二步：几何意义</h4>
此时度量与欧氏度量只差一个正标量因子 \(e^{2\lambda}\)——角度被保持，长度被逐点缩放。

<div class="keybox">$$\boxed{ds^2=e^{2\lambda}(du^2+dv^2)}$$</div>

<h4>第三步：应用</h4>
这种「共形平坦」形式在计算机图形学纹理映射、地图投影中广泛使用，因为它保角、变形可控。

<div class="memobox"><strong>关键词：</strong>共形参数化 ⟹ 度量 = \(e^{2\lambda}\) 乘欧氏度量，保角。</div>`
  },
  "r10": {
    0: L`<h4>目标</h4>
给出 n 维球面的体积公式。

<h4>第一步：公式</h4>
半径 \(R\) 的 \(n\) 维球面体积为

<div class="keybox">$$\boxed{\operatorname{Vol}(S^n)=\frac{2\pi^{(n+1)/2}\,R^n}{\Gamma\!\big((n+1)/2\big)}}$$</div>

<h4>第二步：低维特例</h4>
\(S^2\)：\(\operatorname{Vol}=\frac{2\pi^{3/2}}{\Gamma(3/2)}\cdot R^2=4\pi R^2\)（因 \(\Gamma(3/2)=\sqrt\pi/2\)）。\(S^1\)：\(\frac{2\pi}{\Gamma(1)}R=2\pi R\)，正是圆周长。

<div class="memobox"><strong>关键词：</strong>球面体积用 \(\Gamma\) 函数统一表达，\(S^2\) 是 \(4\pi R^2\)。</div>`,
    1: L`<h4>目标</h4>
对比双曲空间球的体积增长——它是<strong>指数型</strong>的。

<h4>第一步：双曲球的体积渐近</h4>
双曲空间 \(H^n\) 中半径为 \(r\) 的球，体积随 \(r\) 指数增长：

<div class="eq">$$\operatorname{Vol}(B(r))\sim \omega_{n-1}\,\frac{e^{(n-1)r}}{2^{n-1}(n-1)}$$</div>

<h4>第二步：对比欧氏空间</h4>
欧氏空间球体积是<strong>幂增长</strong>（\(\propto r^n\)）。负曲率使空间「比欧氏大得多」，半径线性增加时体积指数爆炸。

<div class="keybox">$$\boxed{\text{双曲：体积 }\sim e^{(n-1)r}\ \text{（指数）}\quad\text{vs}\quad\text{欧氏：体积 }\sim r^n\ \text{（幂）}}$$</div>

<div class="memobox"><strong>关键词：</strong>负曲率 ⟹ 体积指数增长，这是双曲空间的标志性特征。</div>`,
    2: L`<h4>目标</h4>
理解紧致 Lie 群上的 Haar 测度与体积形式的联系。

<h4>第一步：双不变度量</h4>
紧致 Lie 群 \(G\) 上存在「双不变」黎曼度量（左右平移都是等距），它由 Killing 形式或其正定化给出。

<h4>第二步：体积形式 = Haar 测度</h4>
这个双不变度量诱导的体积形式，由于左右平移保体积，正是群上的 Haar 测度。

<div class="keybox">$$\boxed{\text{双不变度量的体积形式}=\text{Haar 测度}}$$</div>

<h4>第三步：应用</h4>
Haar 测度在紧 Lie 群的表示论（Peter–Weyl 定理）、调和分析、量子力学中都是积分的基准。

<div class="memobox"><strong>关键词：</strong>紧 Lie 群的双不变度量给出 Haar 测度，是群上积分的标准。</div>`
  },
  "r11": {
    0: L`<h4>目标</h4>
用球极投影展示球面的共形平坦性。

<h4>第一步：球极投影</h4>
从北极 \(N\) 把 \(S^2\setminus\{N\}\) 投影到赤道平面，得到一个<strong>保角</strong>（共形）双射。

<h4>第二步：共形平坦</h4>
在球极投影坐标下，球面度量写成

<div class="eq">$$ds^2=\frac{4R^4}{(R^2+x^2+y^2)^2}(dx^2+dy^2)$$</div>

这正是 \(e^{2\lambda}(dx^2+dy^2)\) 的形式。

<div class="keybox">$$\boxed{S^2\setminus\{N\}\ \text{共形等价于}\ \mathbb R^2}$$</div>

<div class="memobox"><strong>关键词：</strong>球极投影是保角映射，故球面（去一点）共形平坦。</div>`,
    1: L`<h4>目标</h4>
理解 Yamabe 问题——共形类中能否找到常标量曲率度量。

<h4>第一步：问题陈述</h4>
给定紧致黎曼流形及其共形类 \([g]\)，问是否存在共形度量 \(\tilde g=e^{2f}g\) 使其标量曲率 \(R_{\tilde g}\) 为常数？

<h4>第二步：标量曲率的共形变换公式</h4>
在共形变换 \(\tilde g=e^{2f}g\) 下，标量曲率按

<div class="eq">$$R_{\tilde g}=e^{-2f}\big(R_g - 2(n-1)\Delta f - (n-2)(n-1)|\nabla f|^2\big)$$</div>

变换，问题化为解非线性椭圆 PDE。

<h4>第三步：解答</h4>
经 Trudinger、Aubin、Schoen 等人努力，Yamabe 问题的答案是<strong>肯定的</strong>。

<div class="keybox">$$\boxed{\text{任何紧致流形的共形类中都存在常标量曲率度量}}$$</div>

<div class="memobox"><strong>关键词：</strong>Yamabe 问题：共形类内总存在常标量曲率度量，答案是肯定的。</div>`,
    2: L`<h4>目标</h4>
认识二维共形场论（CFT）为何是弦论的基础。

<h4>第一步：弦的世界面是二维</h4>
弦在时空中扫过的「世界面」是二维曲面，其上的理论天然是二维场论。

<h4>第二步：共形对称性</h4>
二维的特殊性（度量局部共形平坦）使世界面理论具有<strong>共形不变性</strong>，即二维共形对称性——这是一个无限维的对称代数（Virasoro 代数）。

<div class="eq">$$[L_m,L_n]=(m-n)L_{m+n}+\frac{c}{12}m(m^2-1)\delta_{m+n,0}$$</div>

<h4>第三步：意义</h4>
这个无限维对称性赋予了二维 CFT 极强的约束，使许多物理量可精确计算，是弦论可解性的核心来源。

<div class="keybox">$$\boxed{\text{二维共形对称（无限维 Virasoro）}\Longrightarrow\text{弦论可精确求解}}$$</div>

<div class="memobox"><strong>关键词：</strong>弦世界面二维 ⟹ 无限维共形对称 ⟹ 可精确求解。</div>`
  },
  "r12": {
    0: L`<h4>目标</h4>
确认标准欧氏空间 \(\mathbb R^n\) 是最基本、最「平」的黎曼流形。

<h4>第一步：度量与联络</h4>
标准内积 \(\langle x,y\rangle=\sum_i x_i y_i\) 给出度量 \(g_{ij}=\delta_{ij}\)。Christoffel 符号全部为零

<div class="eq">$$\Gamma^k_{ij}=0$$</div>

<h4>第二步：曲率与测地线</h4>
曲率张量恒为零，测地线是直线，距离由勾股定理给出。

<div class="keybox">$$\boxed{\mathbb R^n:\ \Gamma\equiv 0,\ R\equiv 0,\ \text{测地线为直线}}$$</div>

<div class="memobox"><strong>关键词：</strong>欧氏空间一切几何量有显式公式，是曲率为零的基准。</div>`,
    1: L`<h4>目标</h4>
理解平坦环面 \(T^n=\mathbb R^n/\mathbb Z^n\)——平坦但紧致。

<h4>第一步：商空间</h4>
把 \(\mathbb R^n\) 按整格 \(\mathbb Z^n\) 取商，得到紧致流形 \(T^n\)，其上自然诱导欧氏度量。

<h4>第二步：内蕴平坦</h4>
商映射是<strong>局部等距</strong>，故 \(T^n\) 的内蕴曲率处处为零。虽然 \(T^n\) 能等距嵌入 \(\mathbb R^{2n}\)（外观弯曲），但它的内蕴几何是平坦的。

<div class="keybox">$$\boxed{T^n\ \text{平坦且紧致，但}\ \pi_1(T^n)=\mathbb Z^n\neq 0}$$</div>

<div class="memobox"><strong>关键词：</strong>平坦环面 = 欧氏空间模格，内蕴平坦、外蕴弯曲。</div>`,
    2: L`<h4>目标</h4>
说明圆柱面是「平坦但非单连通」的曲面。

<h4>第一步：圆柱与平面局部等距</h4>
圆柱面 \(C=S^1\times\mathbb R\) 可把平面卷成，卷曲过程不改变内蕴距离，故局部等距于平面。

<h4>第二步：曲率为零</h4>
等距保曲率，故圆柱面的 Gauss 曲率

<div class="keybox">$$\boxed{K_C=0}$$</div>

但圆柱面基本群 \(\pi_1(C)=\mathbb Z\neq 0\)，故非单连通。这正说明「平坦」与「单连通」是两回事。

<div class="memobox"><strong>关键词：</strong>圆柱面平坦但非单连通，平坦性不蕴含单连通。</div>`
  },
  "r13": {
    0: L`<h4>目标</h4>
总结二维球面 \(S^2\) 的关键几何量。

<h4>第一步：基本数据</h4>
半径 \(R\) 的 \(S^2\)：

<div class="eq">$$\text{面积}=4\pi R^2,\qquad K=\frac{1}{R^2},\qquad \text{直径}=\pi R$$</div>

<h4>第二步：测地线</h4>
测地线是大圆（过球心平面与球面的交线）。球面上两点间有<strong>两段</strong>大圆弧（一短一长），对应两条测地线。

<div class="keybox">$$\boxed{S^2:\ \text{面积}=4\pi R^2,\ K=1/R^2,\ \text{直径}=\pi R}$$</div>

<div class="memobox"><strong>关键词：</strong>球面测地线是大圆，两点间有两条测地线。</div>`,
    1: L`<h4>目标</h4>
认识三维球面 \(S^3\) 与 Lie 群、Hopf 纤维化的联系。

<h4>第一步：\(S^3\cong SU(2)\)</h4>
\(S^3\) 的底流形同胚于 \(SU(2)\)，故 \(S^3\) 是 Lie 群，承载描述自旋与旋转对称性的结构。

<h4>第二步：Hopf 纤维化</h4>
存在著名的纤维化

<div class="eq">$$S^1\hookrightarrow S^3\longrightarrow S^2$$</div>

每个纤维是一个圆，总空间 \(S^3\) 由这些圆「织」成。

<div class="keybox">$$\boxed{S^3\cong SU(2),\qquad S^1\to S^3\to S^2\ \text{（Hopf）}}$$</div>

<div class="memobox"><strong>关键词：</strong>\(S^3\) 既是 Lie 群，又是 Hopf 纤维化的总空间。</div>`,
    2: L`<h4>目标</h4>
认识实射影空间 \(RP^n\)——常正曲率的非单连通流形。

<h4>第一步：对径点等同</h4>
\(RP^n=S^n/\{\pm 1\}\)，即把球面的对径点视为同一点。

<h4>第二步：诱导度量与基本群</h4>
球面度量下降为 \(RP^n\) 的度量（常正曲率），但商过程使基本群变为

<div class="keybox">$$\boxed{\pi_1(RP^n)=\mathbb Z_2}$$</div>

于是 \(RP^n\) 是常正曲率但非单连通的空间形式。

<div class="memobox"><strong>关键词：</strong>\(RP^n=S^n/\mathbb Z_2\)，常正曲率、基本群 \(\mathbb Z_2\)。</div>`
  },
  "r14": {
    0: L`<h4>目标</h4>
认识 Poincaré 圆盘模型中的双曲几何。

<h4>第一步：模型与度量</h4>
单位圆盘 \(B^2=\{|z|<1\}\) 配度量

<div class="eq">$$ds^2=\frac{4(dx^2+dy^2)}{(1-|z|^2)^2}$$</div>

<h4>第二步：双曲直线</h4>
模型中的「直线」（测地线）是与边界圆周<strong>正交</strong>的圆弧。两点距离由交比给出，边界圆周对应「无穷远」。

<div class="keybox">$$\boxed{ds^2=\frac{4|dz|^2}{(1-|z|^2)^2},\quad \text{测地线}=\text{正交圆弧}}$$</div>

<div class="memobox"><strong>关键词：</strong>Poincaré 圆盘中直线是正交圆弧，边界是无穷远。</div>`,
    1: L`<h4>目标</h4>
理解双曲平面的铺砖——欧氏几何做不到的事。

<h4>第一步：双曲三角形内角和</h4>
双曲三角形内角和<strong>小于</strong> \(180^\circ\)，面积正比于「角度缺额」

<div class="eq">$$\text{面积}=\pi-(\alpha+\beta+\gamma)$$</div>

<h4>第二步：正七边形铺砖</h4>
在双曲平面，正七边形的每个内角可以取到使 \(7\) 个七边形恰好在一点拼合的值；这在欧氏几何（内角恒 \(>\frac{2\pi}{7}\) 且固定）不可能。

<div class="keybox">$$\boxed{\text{双曲平面可被正七边形铺满，欧氏平面不能}}$$</div>

<div class="memobox"><strong>关键词：</strong>内角和不足 ⟹ 更多正多边形能铺满双曲平面。</div>`,
    2: L`<h4>目标</h4>
认识双曲三维空间 \(H^3\) 与 Thurston 几何化。

<h4>第一步：等距群</h4>
三维双曲空间 \(H^3\) 的保向等距群是

<div class="eq">$$\operatorname{Isom}^+(H^3)\cong PSL(2,\mathbb C)$$</div>

<h4>第二步：Kleinian 群与几何化</h4>
\(H^3\) 的离散等距子群（Kleinian 群）给出三维双曲流形，Thurston 的几何化猜想（后由 Perelman 证明）以双曲几何为八大几何之一的核心。

<div class="keybox">$$\boxed{H^3\ \text{的几何是 Thurston 几何化拼图的关键一块}}$$</div>

<div class="memobox"><strong>关键词：</strong>\(PSL(2,\mathbb C)\) 作用在 \(H^3\)，双曲三维流形是其商。</div>`
  },
  "r15": {
    0: L`<h4>目标</h4>
列出二维常曲率空间的三种原形。

<h4>第一步：按曲率符号分类</h4>

<div class="eq">$$c>0:\ S^2(1/\sqrt c),\qquad c=0:\ \mathbb R^2,\qquad c<0:\ H^2(1/\sqrt{|c|})$$</div>

<h4>第二步：几何特征</h4>
三者的三角形内角和分别为 \(>180^\circ\)、\(=180^\circ\)、\(<180^\circ\)，对应球面、平面、双曲几何。

<div class="keybox">$$\boxed{\text{二维空间形式}=\{S^2,\ \mathbb R^2,\ H^2\}}$$</div>

<div class="memobox"><strong>关键词：</strong>二维常曲率单连通空间只有球面、平面、双曲平面。</div>`,
    1: L`<h4>目标</h4>
理解平坦环面 \(T^2\) 作为非单连通的零曲率空间形式。

<h4>第一步：商构造</h4>
\(T^2=\mathbb R^2/\mathbb Z^2\)，基本群 \(\pi_1(T^2)=\mathbb Z^2\neq 0\)。

<h4>第二步：仍是常曲率空间形式</h4>
它平坦（\(c=0\)）且完备，但不单连通——所以它属于「空间形式」的商类，而非三种「原形」本身。

<div class="keybox">$$\boxed{T^2=\mathbb R^2/\mathbb Z^2,\quad \pi_1=\mathbb Z^2,\quad c=0}$$</div>

<div class="memobox"><strong>关键词：</strong>平坦环面是零曲率空间形式的商，非单连通。</div>`,
    2: L`<h4>目标</h4>
认识透镜空间——常正曲率的三维空间形式。

<h4>第一步：商构造</h4>
透镜空间 \(L(p,q)=S^3/\mathbb Z_p\)，其中 \(\mathbb Z_p\) 是 \(S^3\) 的有限循环等距子群。

<h4>第二步：性质</h4>
它继承 \(S^3\) 的常正曲率，但基本群为

<div class="keybox">$$\boxed{\pi_1\big(L(p,q)\big)=\mathbb Z_p}$$</div>

透镜空间在三维流形分类中扮演重要角色，是球面空间形式的基本例子。

<div class="memobox"><strong>关键词：</strong>透镜空间 \(S^3/\mathbb Z_p\)，常正曲率、基本群 \(\mathbb Z_p\)。</div>`
  },
  "r16": {
    0: L`<h4>目标</h4>
分析旋转群 \(SO(3)\) 的几何。

<h4>第一步：Killing 形式诱导度量</h4>
\(SO(3)\) 配 Killing 形式诱导的双不变度量，作为流形同胚于 \(RP^3\)。

<h4>第二步：曲率与测地线</h4>
此时任意正交单位 \(X,Y\) 有 \(|[X,Y]|=1\)，故截面曲率恒为

<div class="keybox">$$\boxed{K_{SO(3)}=\frac14}$$</div>

测地线对应「匀速旋转」，单参数子群正是测地线。

<div class="memobox"><strong>关键词：</strong>\(SO(3)\cong RP^3\)，截面曲率恒 \(1/4\)，测地线 = 匀速旋转。</div>`,
    1: L`<h4>目标</h4>
说明 \(SU(2)\) 等距于三维球面 \(S^3\)。

<h4>第一步：群与球面的同胚</h4>
\(SU(2)\) 的矩阵可写成 \(\begin{pmatrix}a&b\\-\bar b&\bar a\end{pmatrix}\)，\(|a|^2+|b|^2=1\)，正是 \(S^3\)。

<h4>第二步：双不变度量</h4>
配备标准双不变度量后，\(SU(2)\) 等距于单位 \(S^3\)，截面曲率恒为

<div class="keybox">$$\boxed{K_{SU(2)}=K_{S^3}=1}$$</div>

<div class="memobox"><strong>关键词：</strong>\(SU(2)\cong S^3\)，双不变度量下曲率恒为 \(1\)。</div>`,
    2: L`<h4>目标</h4>
认识复射影空间 \(CP^n\) 及其 Fubini–Study 度量。

<h4>第一步：齐性空间表示</h4>

<div class="eq">$$CP^n=\frac{U(n+1)}{U(1)\times U(n)}$$</div>

<h4>第二步：Fubini–Study 度量</h4>
配备 Fubini–Study 度量后，\(CP^n\) 的截面曲率被夹在

<div class="keybox">$$\boxed{1\le K\le 4}$$</div>

之间（按不同正规化）。它是 Kahler 流形，兼具黎曼与复结构。

<div class="memobox"><strong>关键词：</strong>\(CP^n\) 的 Fubini–Study 度量，截面曲率 \(1\sim 4\)。</div>`
  },
  "r17": {
    0: L`<h4>目标</h4>
写出欧氏空间的标准（平坦）联络。

<h4>第一步：方向导数</h4>
\(\mathbb R^n\) 上联络由普通方向导数给出

<div class="eq">$$\nabla_X Y=(XY^i)\,\partial_i$$</div>

<h4>第二步：Christoffel 符号为零</h4>

<div class="keybox">$$\boxed{\Gamma^k_{ij}=0}$$</div>

这是最简单的联络：协变导数退化为普通偏导数。

<div class="memobox"><strong>关键词：</strong>欧氏联络 = 方向导数，Christoffel 符号全为零。</div>`,
    1: L`<h4>目标</h4>
理解曲面在 \(\mathbb R^3\) 中的诱导联络。

<h4>第一步：切向投影</h4>
设 \(D_X Y\) 是 \(\mathbb R^3\) 中普通方向导数，诱导联络取它的<strong>切平面投影</strong>

<div class="eq">$$\nabla_X Y=(D_X Y)^\top$$</div>

<h4>第二步：几何意义</h4>
即把 \(D_X Y\) 中垂直于曲面的法向分量去掉，只保留切向部分。这正是曲面「内蕴」看待导数的方式。

<div class="keybox">$$\boxed{\nabla_X Y=(D_X Y)^\top}$$</div>

<div class="memobox"><strong>关键词：</strong>曲面诱导联络 = 外蕴导数的切向投影。</div>`,
    2: L`<h4>目标</h4>
认识 Lie 群上的左不变联络。

<h4>第一步：由 Lie 代数双线性映射确定</h4>
左不变联络由单位元处的双线性映射 \(\alpha:\mathfrak g\times\mathfrak g\to\mathfrak g\) 完全确定，因为左不变向量场由 Lie 代数元素一一对应。

<h4>第二步：几何力学应用</h4>
不同的 \(\alpha\) 对应不同的联络（挠率、曲率各异），在刚体运动、控制论的几何力学中用于刻画系统的几何结构。

<div class="keybox">$$\boxed{\text{左不变联络}\ \longleftrightarrow\ \alpha:\mathfrak g\times\mathfrak g\to\mathfrak g}$$</div>

<div class="memobox"><strong>关键词：</strong>左不变联络由 Lie 代数上一个双线性映射确定。</div>`
  },
  "r18": {
    0: L`<h4>目标</h4>
验证欧氏空间的 Levi-Civita 联络就是普通导数。

<h4>第一步：度量为常数</h4>
欧氏度量 \(g_{ij}=\delta_{ij}\) 是常数，故 \(\partial_i g_{jl}=0\)。

<h4>第二步：Christoffel 符号消失</h4>

<div class="keybox">$$\boxed{\Gamma^k_{ij}=0}$$</div>

于是 Levi-Civita 联络退化为普通方向导数，协变导数 = 偏导数。

<div class="memobox"><strong>关键词：</strong>度量常数 ⟹ Christoffel 符号为零 ⟹ 联络平凡。</div>`,
    1: L`<h4>目标</h4>
计算球面 \(S^2\) 的非零 Christoffel 符号。

<h4>第一步：球面度量与诱导联络</h4>
\(S^2\) 的 Levi-Civita 联络是 \(\nabla_X Y=(D_X Y)^\top\)。在球坐标 \((\theta,\varphi)\) 下，度量 \(ds^2=R^2(d\theta^2+\sin^2\theta\,d\varphi^2)\)。

<h4>第二步：直接计算 Christoffel 符号</h4>
代入公式得非零项

<div class="keybox">$$\boxed{\Gamma^\theta_{\varphi\varphi}=-\sin\theta\cos\theta,\qquad \Gamma^\varphi_{\theta\varphi}=\Gamma^\varphi_{\varphi\theta}=\cot\theta}$$</div>

其余为零。这些符号反映了球面度量随纬度变化。

<div class="memobox"><strong>关键词：</strong>球面 Christoffel 符号含 \(\sin\theta\cos\theta\) 与 \(\cot\theta\)。</div>`,
    2: L`<h4>目标</h4>
计算双曲平面（上半平面模型）的 Christoffel 符号。

<h4>第一步：度量</h4>
上半平面模型 \(H^2=\{y>0\}\) 配度量

<div class="eq">$$ds^2=\frac{dx^2+dy^2}{y^2}$$</div>

<h4>第二步：计算 Christoffel 符号</h4>
非零项为

<div class="keybox">$$\boxed{\Gamma^x_{xy}=\Gamma^y_{xx}=-\Gamma^y_{yy}=-\frac1y}$$</div>

<div class="memobox"><strong>关键词：</strong>双曲平面 Christoffel 符号都是 \(\pm 1/y\) 的形式。</div>`
  },
  "r19": {
    0: L`<h4>目标</h4>
理解球面上沿纬线平行移动的「转角」。

<h4>第一步：沿纬线平行移动</h4>
球面上沿一条闭纬线平行移动一个切向量，回到起点后向量相对原方向旋转了一个角。

<h4>第二步：转角 = 围出球冠的曲率积分</h4>
这个转角等于纬线所围球冠的 Gauss 曲率积分

<div class="eq">$$\text{转角}=\int_{\text{球冠}}K\,dA$$</div>

这是 Gauss–Bonnet 定理的和乐（holonomy）版本。

<div class="keybox">$$\boxed{\text{平行移动的转角}=\text{围成区域的曲率积分}}$$</div>

<div class="memobox"><strong>关键词：</strong>球面平行移动产生转角，转角即曲率积分——和乐现象。</div>`,
    1: L`<h4>目标</h4>
理解 Foucault 摆是平行移动的物理实例。

<h4>第一步：摆面与地球</h4>
Foucault 摆的摆动平面在空间中保持方向，但地球自转使其相对地面旋转——这正是摆动方向沿球面<strong>平行移动</strong>的体现。

<h4>第二步：转角公式</h4>
摆面每周期旋转角度 \(2\pi\sin\varphi\)（\(\varphi\) 为纬度），对应球面平行移动绕纬线的和乐。

<div class="keybox">$$\boxed{\text{Foucault 摆转角}=2\pi\sin\varphi}$$</div>

<div class="memobox"><strong>关键词：</strong>Foucault 摆是地球自转造成的平行移动和乐。</div>`,
    2: L`<h4>目标</h4>
认识量子力学中的 Berry 相位——参数空间的平行移动。

<h4>第一步：绝热演化</h4>
系统参数 \(\lambda\) 绕参数空间闭路绝热演化一周，波函数获得一个<strong>几何相位</strong>（Berry 相位）。

<h4>第二步：联络与和乐</h4>
Berry 相位正是参数空间上「Berry 联络」沿闭路的平行移动和乐，是微分几何在量子力学的直接应用。

<div class="keybox">$$\boxed{\text{Berry 相位}=\text{参数空间联络的和乐}}$$</div>

<div class="memobox"><strong>关键词：</strong>Berry 相位 = 量子系统的「平行移动和乐」。</div>`
  },
  "r20": {
    0: L`<h4>目标</h4>
区分函数的一阶与二阶协变导数。

<h4>第一步：一阶协变导数</h4>
对函数 \(f\)，协变导数就是普通微分

<div class="eq">$$\nabla f=df$$</div>

<h4>第二步：二阶协变导数是 Hessian</h4>
再导一次得 \((0,2)\)-张量

<div class="keybox">$$\boxed{\nabla^2 f=\nabla(df),\quad (\nabla^2 f)_{ij}=\partial_i\partial_j f-\Gamma^k_{ij}\partial_k f}$$</div>

这就是黎曼流形上的 Hessian，是研究函数极值与凸性的基本工具。

<div class="memobox"><strong>关键词：</strong>函数的 Hessian = 二阶协变导数 \(\nabla^2 f\)。</div>`,
    1: L`<h4>目标</h4>
理解度量相容性 \(\nabla g=0\) 的坐标含义。

<h4>第一步：度量相容性</h4>
Levi-Civita 联络满足 \(\nabla g=0\)，坐标下

<div class="eq">$$\nabla_k g_{ij}=0$$</div>

<h4>第二步：展开</h4>

<div class="keybox">$$\boxed{\partial_k g_{ij}=\Gamma^l_{ki}g_{lj}+\Gamma^l_{kj}g_{il}}$$</div>

这说度量「沿联络不变」，与升降指标运算交换。

<div class="memobox"><strong>关键词：</strong>\(\nabla g=0\) = 度量沿协变导数不变，升降指标与求导交换。</div>`,
    2: L`<h4>目标</h4>
认识 Killing 向量场——生成等距的向量场。

<h4>第一步：Killing 方程</h4>
向量场 \(X\) 称为 Killing 的，若

<div class="eq">$$\nabla_i X_j+\nabla_j X_i=0$$</div>

<h4>第二步：几何意义</h4>
Killing 方程等价于 \(X\) 的流保持度量，即生成<strong>等距</strong>。其解空间维数正是等距群维数。

<div class="keybox">$$\boxed{\nabla_i X_j+\nabla_j X_i=0\ \Longleftrightarrow\ X\ \text{生成等距}}$$</div>

<div class="memobox"><strong>关键词：</strong>Killing 向量场 = 等距的无穷小生成元。</div>`
  },
  "r21": {
    0: L`<h4>目标</h4>
确认 Levi-Civita 联络无挠。

<h4>第一步：无挠条件</h4>
挠率 \(T^k_{ij}=\Gamma^k_{ij}-\Gamma^k_{ji}=0\)。

<h4>第二步：对称性</h4>

<div class="keybox">$$\boxed{\Gamma^k_{ij}=\Gamma^k_{ji}}$$</div>

Christoffel 符号关于下标对称，这是黎曼几何的标准设定。

<div class="memobox"><strong>关键词：</strong>无挠 ⟺ Christoffel 符号关于下标对称。</div>`,
    1: L`<h4>目标</h4>
认识带挠率的 Cartan 联络与 Einstein–Cartan 引力理论。

<h4>第一步：非零挠率</h4>
Einstein–Cartan 理论中，联络具有非零挠率，不再是无挠的 Levi-Civita 联络。

<h4>第二步：挠率与自旋</h4>
挠率张量与物质场的<strong>自旋</strong>张量耦合，这是对广义相对论（无挠）的推广。

<div class="keybox">$$\boxed{\text{Einstein–Cartan：挠率}\longleftrightarrow\text{物质自旋}}$$</div>

<div class="memobox"><strong>关键词：</strong>带挠率引力理论中，挠率与自旋张量相关。</div>`,
    2: L`<h4>目标</h4>
理解任意联络如何分解出挠率部分。

<h4>第一步：差张量</h4>
任意联络 \(\nabla\) 与 Levi-Civita 联络之差是 \((1,2)\)-张量 \(A\)。

<h4>第二步：挠率来自反对称部分</h4>

<div class="keybox">$$\boxed{\nabla=\nabla^{LC}+A,\qquad A\ \text{的反对称部分}=\text{挠率}}$$</div>

<div class="memobox"><strong>关键词：</strong>差张量的反对称部分就是挠率。</div>`
  },
  "r22": {
    0: L`<h4>目标</h4>
理解平坦流形的和乐群是平凡的。

<h4>第一步：平坦 ⟹ 平行移动与路径无关</h4>
平坦流形（\(\mathbb R^n,\ T^n\)）曲率为零，平行移动不依赖路径。

<h4>第二步：和乐群平凡</h4>

<div class="keybox">$$\boxed{\mathrm{Hol}=\{\mathrm{id}\}}$$</div>

任何闭曲线的平行移动都回到原向量，故和乐群只含恒等元。

<div class="memobox"><strong>关键词：</strong>平坦流形的和乐群平凡，平行移动与路径无关。</div>`,
    1: L`<h4>目标</h4>
认识 Kähler 流形的和乐群。

<h4>第一步：和乐群含于 \(U(n)\)</h4>
Kähler 流形具有平行的复结构 \(J\) 与辛形式 \(\omega\)，平行移动保持它们，故和乐群含于酉群

<div class="eq">$$\mathrm{Hol}\subseteq U(n)$$</div>

<h4>第二步：几何意义</h4>

<div class="keybox">$$\boxed{\mathrm{Hol}\subseteq U(n)\ \Longleftrightarrow\ \text{Kähler 结构}}$$</div>

Kähler 流形是复几何、代数几何与黎曼几何的交汇点。

<div class="memobox"><strong>关键词：</strong>Kähler 流形和乐群含于 \(U(n)\)，有平行复结构。</div>`,
    2: L`<h4>目标</h4>
认识 Calabi–Yau 流形及其在弦论中的角色。

<h4>第一步：和乐群为 \(SU(n)\)</h4>
Calabi–Yau 流形是 Ricci 平坦的 Kähler 流形，其和乐群恰为

<div class="eq">$$\mathrm{Hol}=SU(n)$$</div>

<h4>第二步：平行全纯 n-形式</h4>
\(SU(n)\) 和乐意味着存在平行的全纯 \(n\)-形式，这是 Calabi–Yau 的关键特征。

<h4>第三步：弦论应用</h4>

<div class="keybox">$$\boxed{\mathrm{Hol}=SU(n)\ \Longrightarrow\ \text{Calabi–Yau，弦论紧致化的核心}}$$</div>

<div class="memobox"><strong>关键词：</strong>Calabi–Yau 和乐群 \(SU(n)\)，弦论紧致化的主角。</div>`
  },
  "r23": {
    0: L`<h4>目标</h4>
验证欧氏空间的测地线是直线。

<h4>第一步：Christoffel 符号为零</h4>
\(\mathbb R^n\) 中 \(\Gamma^k_{ij}=0\)，测地线方程退化为

<div class="eq">$$\frac{d^2x}{dt^2}=0$$</div>

<h4>第二步：积分得直线</h4>

<div class="keybox">$$\boxed{x(t)=p+tv}$$</div>

这正是直线，速度恒为 \(v\)。

<div class="memobox"><strong>关键词：</strong>欧氏空间测地线 = 直线 \(p+tv\)。</div>`,
    1: L`<h4>目标</h4>
理解球面上的测地线是大圆。

<h4>第一步：大圆</h4>
\(S^2\) 上，过球心平面与球面的交线（大圆）都是测地线。

<h4>第二步：球坐标下的刻画</h4>
在球坐标下，经线 \(\varphi=\text{const}\) 是大圆；更一般地，测地线满足 Clairaut 关系

<div class="keybox">$$\boxed{\sin\theta\cdot\cos\alpha=\text{const}}$$</div>

（\(\alpha\) 为测地线与纬线的夹角），给出所有大圆。

<div class="memobox"><strong>关键词：</strong>球面测地线 = 大圆，满足 Clairaut 关系。</div>`,
    2: L`<h4>目标</h4>
理解旋转曲面测地线的 Clairaut 定理。

<h4>第一步：Clairaut 定理</h4>
旋转曲面上，沿测地线有守恒量

<div class="eq">$$r\sin\alpha=\text{const}$$</div>

其中 \(r\) 是点到旋转轴的距离，\(\alpha\) 是测地线与纬线的夹角。

<h4>第二步：几何意义</h4>
这是旋转对称性对应的守恒律（Noether 定理的几何版）：靠近旋转轴时 \(r\) 减小，夹角 \(\alpha\) 必须增大。

<div class="keybox">$$\boxed{r\sin\alpha=\text{const}}$$</div>

<div class="memobox"><strong>关键词：</strong>旋转曲面上 \(r\sin\alpha\) 沿测地线守恒。</div>`
  },
  "r24": {
    0: L`<h4>目标</h4>
欧氏空间的指数映射就是「加法」。

<h4>第一步：测地线是直线</h4>
\(\gamma_v(t)=p+tv\)，故 \(\gamma_v(1)=p+v\)。

<h4>第二步：指数映射</h4>

<div class="keybox">$$\boxed{\exp_p(v)=p+v}$$</div>

<div class="memobox"><strong>关键词：</strong>欧氏空间 \(\exp_p(v)=p+v\)，平凡无比。</div>`,
    1: L`<h4>目标</h4>
写出球面 \(S^2\) 的指数映射。

<h4>第一步：公式</h4>

<div class="eq">$$\exp_p(v)=\cos(|v|)\,p+\sin(|v|)\,\frac{v}{|v|}$$</div>

<h4>第二步：非单射处</h4>
当 \(|v|=\pi\) 时 \(\exp_p(v)=-p\)（对径点），此时指数映射不再是单射——这是共轭点的体现。

<div class="keybox">$$\boxed{\exp_p(v)=\cos|v|\cdot p+\frac{\sin|v|}{|v|}\,v,\quad |v|=\pi\Rightarrow -p}$$</div>

<div class="memobox"><strong>关键词：</strong>球面指数映射在 \(|v|=\pi\) 处首次失去单射。</div>`,
    2: L`<h4>目标</h4>
理解紧 Lie 群上两种指数映射的一致。

<h4>第一步：单参数子群是测地线</h4>
紧 Lie 群配双不变度量时，单参数子群 \(\exp(tX)\) 同时是黎曼测地线。

<h4>第二步：两种指数映射一致</h4>

<div class="keybox">$$\boxed{\text{群指数映射}=\text{黎曼指数映射}}$$</div>

群论与几何在此完美契合。

<div class="memobox"><strong>关键词：</strong>双不变度量下，群指数映射与黎曼指数映射一致。</div>`
  },
  "r25": {
    0: L`<h4>目标</h4>
列举完备流形的典型例子。

<h4>第一步：完备流形</h4>

<div class="eq">$$\mathbb R^n,\ S^n,\ H^n,\ \text{以及一切紧致（无边界）流形}$$</div>

<h4>第二步：原因</h4>
欧氏、球面、双曲空间都是测地完备的；紧致流形由 Hopf–Rinow 定理自动完备。

<div class="keybox">$$\boxed{\mathbb R^n,\ S^n,\ H^n,\ \text{紧致流形}\ \text{均完备}}$$</div>

<div class="memobox"><strong>关键词：</strong>三大模型空间与紧致流形都完备。</div>`,
    1: L`<h4>目标</h4>
认识不完备流形：\(\mathbb R^2\) 去掉原点。

<h4>第一步：挖去一点</h4>
\(M=\mathbb R^2\setminus\{0\}\) 配欧氏度量。

<h4>第二步：Cauchy 列不收敛</h4>
点列 \(p_n=(1/n,0)\) 是 Cauchy 列，但极限 \((0,0)\notin M\)，故不完备。测地线可能「撞向」原点而无法延伸。

<div class="keybox">$$\boxed{\mathbb R^2\setminus\{0\}\ \text{不完备：Cauchy 列不收敛}}$$</div>

<div class="memobox"><strong>关键词：</strong>挖去一点就破坏了完备性。</div>`,
    2: L`<h4>目标</h4>
理解紧致流形自动完备且直径有限。

<h4>第一步：紧致 ⟹ 完备</h4>
任何紧致（无边界）黎曼流形都完备，直径 \(=\max d(p,q)<\infty\)。

<h4>第二步：直径例子</h4>

<div class="keybox">$$\boxed{\operatorname{diam}(S^2)=\pi R,\qquad \operatorname{diam}(RP^2)=\frac{\pi R}{2}}$$</div>

\(RP^2\) 直径是球面的一半，因对径点已被等同。

<div class="memobox"><strong>关键词：</strong>紧致流形直径有限，\(RP^2\) 直径是 \(S^2\) 的一半。</div>`
  },
  "r26": {
    0: L`<h4>目标</h4>
球面 \(S^2\) 的割迹是单点。

<h4>第一步：对径点是唯一割点</h4>
北极 \(p\) 的割迹就是南极

<div class="eq">$$\mathrm{Cut}(p)=\{-p\}$$</div>

<h4>第二步：原因</h4>
所有从 \(p\) 出发的大圆在到达 \(-p\) 之前都是最短的，一旦越过 \(-p\) 就不再最短。

<div class="keybox">$$\boxed{\mathrm{Cut}_{S^2}(p)=\{-p\}}$$</div>

<div class="memobox"><strong>关键词：</strong>球面割迹是单个对径点。</div>`,
    1: L`<h4>目标</h4>
认识平坦环面 \(T^2\) 的割迹——网格状。

<h4>第一步：商空间</h4>
\(T^2=\mathbb R^2/\mathbb Z^2\)，从一点出发的测地线在基本域中「撞」到对边。

<h4>第二步：割迹结构</h4>
割迹由基本域中心出发的线段组成<strong>矩形网格</strong>，距离函数在割迹上不可微。

<div class="keybox">$$\boxed{\mathrm{Cut}_{T^2}(p)=\text{矩形网格}}$$</div>

<div class="memobox"><strong>关键词：</strong>平坦环面割迹是网格状，距离函数在此不可微。</div>`,
    2: L`<h4>目标</h4>
实射影平面 \(RP^2\) 的割迹。

<h4>第一步：割迹是赤道</h4>

<div class="eq">$$\mathrm{Cut}_{RP^2}(p)=\text{到 }p\text{ 距离 } \frac{\pi R}{2} \text{ 的「赤道」}\cong RP^1$$</div>

<h4>第二步：等长测地线</h4>
从 \(p\) 到割迹上任意点的所有测地线长度相等。

<div class="keybox">$$\boxed{\mathrm{Cut}_{RP^2}(p)=RP^1,\ \text{距离恒 } \pi R/2}$$</div>

<div class="memobox"><strong>关键词：</strong>\(RP^2\) 割迹是一条 \(RP^1\)，等距。</div>`
  },
  "r27": {
    0: L`<h4>目标</h4>
球面上大圆是能量泛函的临界点，但短弧与长弧性质不同。

<h4>第一步：大圆是临界点</h4>
球面两点间的大圆满足测地线方程，是能量泛函的临界点。

<h4>第二步：短弧极小、长弧鞍点</h4>
短弧（<半圆）是<strong>局部极小</strong>；长弧（>半圆）是<strong>鞍点</strong>而非极小值。

<div class="keybox">$$\boxed{\text{短大圆弧}=极小值,\quad \text{长大圆弧}=鞍点}$$</div>

<div class="memobox"><strong>关键词：</strong>球面大圆中，短弧极小、长弧是鞍点。</div>`,
    1: L`<h4>目标</h4>
认识闭测地线的存在性——Lyusternik–Fet 定理。

<h4>第一步：定理</h4>
任何<strong>紧致</strong>黎曼流形上总存在<strong>闭测地线</strong>。

<h4>第二步：球面的例子</h4>
球面上所有大圆都是闭测地线，是最丰富的例子。

<div class="keybox">$$\boxed{\text{紧致流形必有闭测地线}}$$</div>

<div class="memobox"><strong>关键词：</strong>紧致流形上闭测地线一定存在。</div>`,
    2: L`<h4>目标</h4>
理解 Morse 理论如何联系测地线与拓扑。

<h4>第一步：能量泛函的临界点</h4>
测地线是能量泛函的临界点，Morse 理论用这些临界点的指标研究流形拓扑。

<h4>第二步：临界点个数下界</h4>

<div class="keybox">$$\boxed{\text{测地线（临界点）个数}\ \ge\ \sum_i \beta_i(M)}$$</div>

其中 \(\beta_i\) 是 Betti 数。拓扑越复杂，测地线越多。

<div class="memobox"><strong>关键词：</strong>Morse 理论：测地线数量被 Betti 数之和下界控制。</div>`
  },
  "r28": {
    0: L`<h4>目标</h4>
二维黎曼流形上，曲率张量的分量看似有 \(2^4=16\) 个，但对称性把独立分量压到<strong>只有一个</strong>。我们要找出它与 Gauss 曲率 \(K\) 的关系。

<h4>第一步：数独立分量</h4>
曲率张量的对称性（反对称性 \(R_{ijkl}=-R_{jikl}=-R_{ijlk}\) 与对偶对称 \(R_{ijkl}=R_{klij}\)）在二维时把所有分量都约化到一个：\(R_{1212}\)。其余分量要么为零、要么是 \(\pm R_{1212}\)。

<h4>第二步：与 Gauss 曲率挂钩</h4>
截面曲率定义在唯一的二维切平面（整个切空间）上，恰好就是 Gauss 曲率：

<div class="eq">$$K=\frac{R_{1212}}{g_{11}g_{22}-g_{12}^{2}}=\frac{R_{1212}}{\det g}$$</div>

<div class="keybox">$$\boxed{R_{1212}=K\det g}$$</div>

<h4>结论</h4>
二维时曲率张量完全退化为标量 \(K\)——这就是为什么二维曲面的弯曲只需一个函数即可描述，也是 Gauss 曲率是内蕴量（仅由度量决定）的体现。

<div class="memobox"><strong>关键词：</strong>二维 ⟹ 曲率张量只有一个独立分量 ⟹ 它正是 Gauss 曲率 \(K\)。</div>`,
    1: L`<h4>目标</h4>
常截面曲率 \(c\) 的空间里，曲率张量有极其简洁的规范形式，我们要把它写出来。

<h4>推导</h4>
若所有二维截面的曲率都等于同一个数 \(c\)，则曲率张量作为 (0,4) 型张量必须是唯一的、由 \(g\) 和 \(c\) 决定的那个张量。这个规范形式是：

<div class="keybox">$$\boxed{R(X,Y)Z=c\big(\langle Y,Z\rangle X-\langle X,Z\rangle Y\big)}$$</div>

<h4>验证</h4>
代入截面曲率公式验证：取正交单位向量 \(u,v\)，则

<div class="eq">$$\langle R(u,v)v,u\rangle=c\big(\langle v,v\rangle\langle u,u\rangle-\langle u,v\rangle^2\big)=c\cdot(1\cdot 1-0)=c$$</div>

确实每个截面的曲率都是 \(c\)。

<div class="memobox"><strong>一句话记忆：</strong>常曲率 \(c\) ⟹ 曲率张量 = 规范形式 \(c(\langle Y,Z\rangle X-\langle X,Z\rangle Y)\)，完全由标量 \(c\) 决定。</div>`,
    2: L`<h4>目标</h4>
欧氏空间 \(\mathbb R^n\) 的曲率张量恒为零，我们要验证它，并说明判断「是否局部等距于欧氏度量」的判据。

<h4>第一步：欧氏空间协变导数可交换</h4>
在 \(\mathbb R^n\) 的标准坐标系下，Christoffel 符号全部为零，协变导数退化为普通偏导：

<div class="eq">$$\nabla_i=\partial_i,\qquad \nabla_i\nabla_j=\partial_i\partial_j=\partial_j\partial_i$$</div>

所以协变导数<strong>可交换</strong>，交换子为零。

<h4>第二步：曲率张量为零</h4>

<div class="eq">$$R(X,Y)Z=\nabla_X\nabla_Y Z-\nabla_Y\nabla_X Z-\nabla_{[X,Y]}Z=0$$</div>

<div class="keybox">$$\boxed{\text{平坦空间 }\iff R\equiv 0}$$</div>

<h4>结论</h4>
反过来，若一个度量满足 \(R\equiv 0\)，则它局部等距于欧氏度量（曲率张量是「偏离欧氏」的唯一障碍）。这就是判断度量是否平坦的根本判据。

<div class="memobox"><strong>关键词：</strong>协变导数可交换 ⟺ 曲率为零 ⟺ 局部平坦。</div>`
  },
  "r29": {
    0: L`<h4>目标</h4>
模型空间 \(S^n\)、\(\mathbb R^n\)、\(H^n\) 的截面曲率分别为 \(1/R^2\)、\(0\)、\(-1\)，我们要说明它们「所有截面方向曲率相同」的含义。

<h4>计算</h4>
这三个模型空间的共同点是曲率张量都是规范形式：

<div class="eq">$$R(X,Y)Z=c\big(\langle Y,Z\rangle X-\langle X,Z\rangle Y\big)$$</div>

其中 \(c\) 分别取 \(1/R^2,\ 0,\ -1\)。代入截面曲率公式，对<strong>任意</strong>二维平面 \(\sigma\)：

<div class="eq">$$K(\sigma)=\frac{c(|u|^2|v|^2-\langle u,v\rangle^2)}{|u|^2|v|^2-\langle u,v\rangle^2}=c$$</div>

<div class="keybox">$$\boxed{K_{S^n}=\frac{1}{R^2},\quad K_{\mathbb R^n}=0,\quad K_{H^n}=-1}$$</div>

<h4>几何含义</h4>
这三个空间是「常曲率空间」的三种代表：正、零、负。它们分别是黎曼几何里的三个「标准尺」，其它流形的曲率都是和它们比较得来的。

<div class="memobox"><strong>关键词：</strong>正 / 零 / 负曲率的三个模型：球面 / 欧氏 / 双曲。</div>`,
    1: L`<h4>目标</h4>
复射影空间 \(\mathbb{CP}^n\) 配 Fubini–Study 度量，截面曲率不是常数，而是落在区间 \([1/4,\,1]\) 内，取决于二维平面相对复结构的位置。

<h4>第一步：Fubini–Study 度量的截面曲率</h4>
对 \(\mathbb{CP}^n\)，截面曲率由平面与复结构 \(J\) 的夹角决定：

<div class="eq">$$K(\sigma)=\frac{1+3\cos^2\theta}{4},\qquad \theta=\text{平面 }\sigma\text{ 与 }J\sigma\text{ 的夹角}$$</div>

<h4>第二步：两种极端情形</h4>

<div class="warnbox"><strong>全实平面</strong>（\(\sigma\) 垂直于 \(J\sigma\)，\(\cos\theta=0\)）：\(K=1/4\)。<br><strong>全复平面</strong>（\(\sigma\) 是复直线，\(\cos\theta=1\)）：\(K=1\)。</div>

<div class="keybox">$$\boxed{\tfrac14\le K(\mathbb{CP}^n)\le 1}$$</div>

<h4>几何含义</h4>
\(\mathbb{CP}^n\) 是「非负但非零」曲率的经典例子——它不常曲率，但截面曲率被严格控制在 \([1/4,1]\) 之间，这使它成为比较定理的重要测试场。

<div class="memobox"><strong>关键词：</strong>复结构「扭曲」曲率：复方向曲率最大（1），实方向最小（1/4）。</div>`,
    2: L`<h4>目标</h4>
乘积流形 \(M\times N\) 的截面曲率取决于截面「横跨」还是「落在」两个因子，我们要分三种情形算。

<h4>第一步：乘积度量的曲率结构</h4>
乘积度量的曲率张量在因子间「解耦」：若 \(X,Y\) 分别在 \(M\)、\(N\) 的切空间里，则

<div class="eq">$$R(X,Y)Z=0\quad(\text{跨因子的方向})$$</div>

<h4>第二步：三种截面</h4>

<div class="warnbox">1. <strong>跨因子</strong>（一个方向在 \(M\)，一个在 \(N\)）：\(K=0\)。<br>2. <strong>全在 \(M\)</strong>：\(K=K_M\)（原流形 \(M\) 的截面曲率）。<br>3. <strong>全在 \(N\)</strong>：\(K=K_N\)。</div>

<div class="keybox">$$\boxed{K(\text{跨因子})=0,\quad K(\text{全在 }M)=K_M,\quad K(\text{全在 }N)=K_N}$$</div>

<h4>几何含义</h4>
乘积流形总是含有「零曲率平面」（跨因子方向），所以只要一个因子是弯曲的，乘积流形就不可能常曲率——它是「非负曲率但非正曲率」的构造来源。

<div class="memobox"><strong>关键词：</strong>乘积把两个因子的曲率「并列」起来，跨因子方向总是平坦的。</div>`
  },
  "r30": {
    0: L`<h4>目标</h4>
计算半径 \(R\) 的球面 \(S^n\) 的 Ricci 曲率与标量曲率，验证它是 Einstein 流形。

<h4>第一步：写出曲率张量</h4>
\(S^n(R)\) 是常曲率 \(c=1/R^2\) 空间，曲率张量为

<div class="eq">$$R_{ijkl}=\frac{1}{R^2}(g_{ik}g_{jl}-g_{il}g_{jk})$$</div>

<h4>第二步：缩并得 Ricci</h4>
对 \(i,l\) 缩并（即 \(R_{jk}=g^{il}R_{ijkl}\)）：

<div class="eq">$$R_{jk}=g^{il}\frac{1}{R^2}(g_{ik}g_{jl}-g_{il}g_{jk})=\frac{n-1}{R^2}g_{jk}$$</div>

<div class="keybox">$$\boxed{\mathrm{Ric}=\frac{n-1}{R^2}\,g}$$</div>

<h4>第三步：再缩并得标量曲率</h4>

<div class="eq">$$S=g^{jk}R_{jk}=\frac{n-1}{R^2}\,n=\frac{n(n-1)}{R^2}$$</div>

<div class="keybox">$$\boxed{S=\frac{n(n-1)}{R^2}}$$</div>

<h4>结论</h4>
\(\mathrm{Ric}=\lambda g\)（\(\lambda=\frac{n-1}{R^2}\)），所以球面是 <strong>Einstein 流形</strong>，且标量曲率恒正。

<div class="memobox"><strong>关键词：</strong>球面 \(\mathrm{Ric}=\frac{n-1}{R^2}g\)、\(S=\frac{n(n-1)}{R^2}\)，是 Einstein 流形的标准模型。</div>`,
    1: L`<h4>目标</h4>
Einstein 度量指 \(\mathrm{Ric}=\lambda g\)（Ricci 与度量成比例）。我们要看一个极端情形：Ricci 平坦但曲率非零的 Einstein 流形。

<h4>第一步：Ricci 平坦 \(\neq\) 平坦</h4>
Ricci 曲率是曲率张量的<strong>迹</strong>。迹为零只说明「部分」曲率信息消失，但曲率张量本身（尤其是无迹的 Weyl 部分）可以非零：

<div class="eq">$$\mathrm{Ric}=0\quad\nRightarrow\quad R=0$$</div>

<h4>第二步：Calabi–Yau / K3 曲面</h4>
K3 曲面上的 Calabi–Yau 度量满足 \(\mathrm{Ric}=0\)（Ricci 平坦），但它是紧致 Ricci 平坦但<strong>非平坦</strong>的 4 维流形，\(R\neq 0\)。

<div class="keybox">$$\boxed{\mathrm{Ric}=0,\ R\neq 0\quad(\text{Ricci 平坦但不平坦})}$$</div>

<h4>几何含义</h4>
这类流形是 \(\lambda=0\) 的 Einstein 流形，在弦论与 Kähler 几何里极其重要。它说明「Einstein」是一类比「平坦」宽松得多的条件。

<div class="memobox"><strong>关键词：</strong>Ricci 平坦（迹为零）≠ 平坦（全张量为零），中间隔着 Weyl 张量。</div>`,
    2: L`<h4>目标</h4>
Schwarzschild 解是真空 Einstein 方程 \(\mathrm{Ric}=0\) 的解，我们要说明它 Ricci 为零但曲率张量非零。

<h4>第一步：真空 Einstein 方程</h4>
真空（无物质）时，Einstein 方程化为

<div class="eq">$$\mathrm{Ric}-\frac12 Sg=0\ \Longrightarrow\ \mathrm{Ric}=0$$</div>

所以 Schwarzschild 时空满足 \(\mathrm{Ric}=0\)。

<h4>第二步：曲率张量非零</h4>
但 Schwarzschild 时空不是平坦的——它的 Weyl 张量非零：

<div class="eq">$$\mathrm{Ric}=0,\quad W\neq 0$$</div>

<div class="keybox">$$\boxed{\text{真空：}\mathrm{Ric}=0,\ \text{但 }W\neq 0}$$</div>

<h4>几何含义</h4>
Weyl 张量描述的是「潮汐力」——真空引力场里，物体不受 Ricci（体积收缩）影响，但仍被 Weyl 张量（形状拉伸压缩）作用。这就是引力波携带的曲率信息。

<div class="memobox"><strong>关键词：</strong>真空 ⟹ \(\mathrm{Ric}=0\)，但引力（潮汐力）由 Weyl 张量承载。</div>`
  },
  "r31": {
    0: L`<h4>目标</h4>
从第二 Bianchi 恒等式缩并出 \(\nabla^j G_{ij}=0\)（Einstein 张量无散度），说明它与能量-动量守恒的联系。

<h4>第一步：对第二 Bianchi 缩并</h4>
对 \(m\) 与 \(l\) 缩并（乘 \(g^l{}_m\)）：

<div class="eq">$$\nabla_m R^m{}_{ijk}+\nabla_i R^m{}_{jmk}+\nabla_j R^m{}_{mik}=0$$</div>

即

<div class="eq">$$\nabla_m R^m{}_{ijk}+\nabla_i R_{jk}-\nabla_j R_{ik}=0$$</div>

<h4>第二步：再缩并 \(g^{ik}\)</h4>

<div class="eq">$$\nabla_m R^m{}_j+\nabla_i R^i{}_j-\nabla_j S=0\ \Longrightarrow\ \nabla^i R_{ij}=\frac12\nabla_j S$$</div>

<h4>第三步：得到 Einstein 张量无散度</h4>
定义 Einstein 张量 \(G_{ij}=R_{ij}-\frac12 S g_{ij}\)，于是

<div class="keybox">$$\boxed{\nabla^j G_{ij}=0}$$</div>

<h4>物理意义</h4>
Einstein 场方程 \(G_{ij}=8\pi G\,T_{ij}\)，左边无散度 \(\nabla^j G_{ij}=0\) 自动给出 \(\nabla^j T_{ij}=0\)——即<strong>能量-动量守恒</strong>。这就是场方程自洽性的几何保证。

<div class="memobox"><strong>关键词：</strong>第二 Bianchi ⟹ \(\nabla^j G_{ij}=0\) ⟹ 场方程 ⟹ 能量守恒。</div>`,
    1: L`<h4>目标</h4>
Einstein 流形（\(\mathrm{Ric}=\lambda g\)）自动满足缩并 Bianchi 恒等式，且 \(n\ge 3\) 时标量曲率 \(S\) 为常数。

<h4>第一步：Einstein 条件代入缩并恒等式</h4>
由缩并 Bianchi 恒等式 \(\nabla^i R_{ij}=\frac12\nabla_j S\)。又 \(\mathrm{Ric}=\lambda g\) 给出 \(S=\lambda n\)（缩并 \(n\) 次）。

<h4>第二步：两边比较</h4>
对 \(\mathrm{Ric}=\lambda g\) 取散度：\(\nabla^i R_{ij}=\nabla_j\lambda\)。同时 \(\frac12\nabla_j S=\frac{n}{2}\nabla_j\lambda\)。二者相等要求：

<div class="eq">$$\nabla_j\lambda=\frac{n}{2}\nabla_j\lambda\ \Longrightarrow\ (1-\tfrac{n}{2})\nabla_j\lambda=0$$</div>

<div class="keybox">$$\boxed{n\ge 3\ \Longrightarrow\ \nabla\lambda=0\ \Longrightarrow\ \lambda,\ S\text{ 为常数}}$$</div>

<h4>结论</h4>
\(n\ge 3\) 时，Einstein 流形的比例系数 \(\lambda\)（从而 \(S=n\lambda\)）必为常数。这也是 Schur 引理的一个直接推论。

<div class="memobox"><strong>关键词：</strong>Einstein 条件 + Bianchi ⟹ \(\lambda\) 常数（\(n\ge 3\)）。</div>`,
    2: L`<h4>目标</h4>
对比黎曼几何的 Bianchi 恒等式与 Yang–Mills 理论的 Bianchi 恒等式，看到两者结构上的「同源性」。

<h4>第一步：黎曼几何的 Bianchi（外微分形式）</h4>
用曲率 2-形式 \(\Omega^i{}_j\)，第二 Bianchi 恒等式写作：

<div class="eq">$$d\Omega+\omega\wedge\Omega-\Omega\wedge\omega=0$$</div>

即曲率的<strong>协变外微分</strong>为零：\(D\Omega=0\)。

<h4>第二步：Yang–Mills 的 Bianchi</h4>
规范场强 \(F=dA+A\wedge A\) 自动满足

<div class="keybox">$$\boxed{d_A F=0\quad(\text{Bianchi 恒等式})}$$</div>

<h4>结论：结构同源</h4>
两者本质相同——都是「曲率 \(=\) 联络的某种微分，故曲率自动满足一个恒等式」。黎曼几何的 Christoffel 符号对应规范场的联络 \(A\)，黎曼曲率对应场强 \(F\)。

<div class="memobox"><strong>关键词：</strong>黎曼 Bianchi \(\leftrightarrow\) Yang–Mills Bianchi，都是「曲率自动无源」的微分恒等式。</div>`
  },
  "r32": {
    0: L`<h4>目标</h4>
说明 \(S^n\)、\(H^n\)、\(\mathbb R^n\) 都是共形平坦的（Weyl 张量为零）。

<h4>第一步：常曲率空间 Weyl 为零</h4>
Weyl 张量是曲率张量去掉 Ricci 部分后的「无迹」剩余。常曲率空间 \(R(X,Y)Z=c(\langle Y,Z\rangle X-\langle X,Z\rangle Y)\) 的曲率完全由 \(c\)（标量曲率）决定，所以 Ricci 部分已经「吃掉」了全部曲率信息：

<div class="eq">$$R_{ijkl}=c(g_{ik}g_{jl}-g_{il}g_{jk})\ \Longrightarrow\ W_{ijkl}=0$$</div>

<div class="keybox">$$\boxed{W(S^n)=W(H^n)=W(\mathbb R^n)=0}$$</div>

<h4>第二步：共形等价</h4>
因此球面、双曲空间都与欧氏空间<strong>共形等价</strong>——它们之间只差一个共形因子，几何「形状」信息全由 \(W\) 承载，而这三个空间 \(W=0\)。

<div class="memobox"><strong>关键词：</strong>常曲率 ⟹ \(W=0\) ⟹ 共形平坦。球面 / 双曲 / 欧氏互相共形等价。</div>`,
    1: L`<h4>目标</h4>
Schwarzschild 时空 \(\mathrm{Ric}=0\) 但 \(W\neq 0\)，说明 Weyl 张量承载潮汐力。

<h4>第一步：Ricci 为零但曲率非零</h4>
Schwarzschild 解是真空解，\(\mathrm{Ric}=0\)。但曲率张量非零，故它的「无迹部分」——Weyl 张量——非零：

<div class="eq">$$\mathrm{Ric}=0,\quad W\neq 0$$</div>

<h4>第二步：Weyl 与潮汐力</h4>
在真空里，测地偏离（潮汐力）由 Weyl 张量决定。物体在引力场中沿不同方向被<strong>拉伸</strong>（径向）和<strong>压缩</strong>（横向），体积不变（因为 Ricci=0 意味着无体积变化）。

<div class="keybox">$$\boxed{\text{潮汐力}=\text{Weyl 张量的作用}}$$</div>

<div class="memobox"><strong>关键词：</strong>真空引力场的「形状扭曲」由 Weyl 张量描述，Ricci 只负责体积变化。</div>`,
    2: L`<h4>目标</h4>
说明二维时 Weyl 张量无定义，所有曲率信息都由 Gauss 曲率承载。

<h4>第一步：Weyl 的定义在低维退化</h4>
Weyl 张量的构造要求「曲率张量 − Ricci 部分 − 标量部分」在 \(n\ge 3\) 才有非平凡定义。具体地：

<div class="warnbox">\(n=2\)：Weyl 张量<strong>无定义</strong>（所有分量恒为零）。\(n=3\)：Weyl 张量<strong>恒为零</strong>。\(n\ge4\)：Weyl 张量非平凡。</div>

<h4>第二步：二维曲率全由 Gauss 曲率决定</h4>
二维时曲率张量只有一个独立分量，等于 Gauss 曲率（=标量曲率的一半）：

<div class="eq">$$S=2K\quad(\text{二维})$$</div>

<div class="keybox">$$\boxed{\text{二维：曲率信息}=\text{标量 }K}$$</div>

<h4>结论</h4>
二维没有「纯共形弯曲」可言——共形变换在二维总是把任何度量变平（等温坐标），所以 Weyl 张量这一概念在二维失去意义。

<div class="memobox"><strong>关键词：</strong>Weyl 张量在 \(n\ge4\) 才非平凡；二维曲率 = Gauss 曲率一个标量。</div>`
  },
  "r33": {
    0: L`<h4>目标</h4>
用 Ricci 恒等式把曲率张量写成协变导数交换子，作为曲率张量的经典定义。

<h4>推导</h4>
对向量场 \(X\)，协变导数交换子：

<div class="eq">$$\nabla_i\nabla_j X^k-\nabla_j\nabla_i X^k=R^k{}_{lij}X^l$$</div>

无挠联络下，这等价于曲率张量的坐标自由定义：

<div class="keybox">$$\boxed{R(X,Y)Z=\nabla_X\nabla_Y Z-\nabla_Y\nabla_X Z-\nabla_{[X,Y]}Z}$$</div>

<h4>为什么两种写法等价</h4>
取 \(X=\partial_i,\ Y=\partial_j\)（坐标向量场，\([X,Y]=0\)），第二式的 \(\nabla_{[X,Y]}Z\) 项消失，就回到第一式的分量形式。

<div class="memobox"><strong>关键词：</strong>曲率张量 = 协变导数交换子，两种定义（分量 / 坐标自由）等价。</div>`,
    1: L`<h4>目标</h4>
说明函数的 Hessian 是对称的——因为函数没有指标让曲率作用。

<h4>推导</h4>
对函数 \(f\)，两次协变导数：\(\nabla_j\nabla_i f\)。用 Ricci 恒等式（作用于 (0,1) 型张量，即 \(X_l=\nabla_l f\)）：

<div class="eq">$$\nabla_i\nabla_j f-\nabla_j\nabla_i f=R^l{}_{lij}\nabla_l f=0$$</div>

右边为零是因为 \(R^l{}_{lij}=0\)（曲率张量对第一、三指标缩并为零）。于是：

<div class="keybox">$$\boxed{\nabla_i\nabla_j f=\nabla_j\nabla_i f\quad(\text{Hessian 对称})}$$</div>

<h4>几何含义</h4>
函数没有「向量指标」让曲率去交换，所以 Hessian 自动对称。这与欧氏空间里 \(\partial_i\partial_j f=\partial_j\partial_i f\) 一致。

<div class="memobox"><strong>关键词：</strong>函数 Hessian 对称，因为 \(R^l{}_{lij}=0\) 使曲率对纯函数不起作用。</div>`,
    2: L`<h4>目标</h4>
推导 Bochner 公式——它是 Ricci 曲率与分析（Laplace 算子）之间的桥梁，是 Bochner 技巧的核心。

<h4>第一步：Bochner 公式</h4>

<div class="eq">$$\frac12\Delta|\nabla f|^2=|\nabla^2 f|^2+\langle\nabla f,\nabla\Delta f\rangle+\mathrm{Ric}(\nabla f,\nabla f)$$</div>

<h4>第二步：各项含义</h4>

<div class="warnbox">\(|\nabla^2 f|^2\)：Hessian 的模平方（非负）。\(\langle\nabla f,\nabla\Delta f\rangle\)：梯度与 Laplace 梯度的内积。\(\mathrm{Ric}(\nabla f,\nabla f)\)：<strong>Ricci 曲率项</strong>，这是唯一与曲率相关的项。</div>

<h4>第三步：为什么重要</h4>
Bochner 公式把 \(|\nabla f|^2\) 的 Laplacian 分解为「Hessian 正项 + Ricci 项」。当 \(\mathrm{Ric}\ge 0\) 时，这一项非负，可推出调和函数或特征函数的刚性结论（如：正 Ricci 流形上没有非常数调和函数）。

<div class="keybox">$$\boxed{\mathrm{Ric}\ge 0\ \Longrightarrow\ \text{Bochner 技巧适用}}$$</div>

<div class="memobox"><strong>关键词：</strong>Bochner 公式把曲率（Ricci）与 Laplace 算子联系起来，是几何分析的核心工具。</div>`
  },
  "r34": {
    0: L`<h4>目标</h4>
陈述 Bonnet–Myers 定理并指出球面 \(S^n(1)\) 是达到上界的刚性例子。

<h4>定理</h4>
若完备黎曼流形满足 \(\mathrm{Ric}\ge(n-1)c>0\)，则

<div class="keybox">$$\boxed{\mathrm{diam}(M)\le\frac{\pi}{\sqrt c}}$$</div>

<h4>刚性</h4>
\(S^n(1)\) 有 \(\mathrm{Ric}=(n-1)g\)（即 \(c=1\)），直径 \(=\pi\)，恰好达到上界 \(\pi/\sqrt c=\pi\)。

<div class="warnbox">达到上界时（且 \(\mathrm{Ric}\ge(n-1)c\) 取等），流形等距于半径 \(1/\sqrt c\) 的球面——这是 Bonnet–Myers 的刚性情形。</div>

<div class="memobox"><strong>关键词：</strong>Ricci 正下界 ⟹ 直径上界 \(\pi/\sqrt c\)，球面是取等号的刚性模型。</div>`,
    1: L`<h4>目标</h4>
Cartan–Hadamard 定理：完备单连通 + 非正截面曲率 ⟹ 微分同胚于 \(\mathbb R^n\)。

<h4>第一步：非正曲率 ⟹ 无共轭点</h4>
截面曲率 \(K\le 0\) 时，沿任何测地线的 Jacobi 场满足 \(J''\ge 0\)，故非零 Jacobi 场不会回到零（与 \(H^n\) 里 \(\sinh\) 解同理）：

<div class="eq">$$K\le 0\ \Longrightarrow\ \text{无共轭点}$$</div>

<h4>第二步：指数映射是局部微分同胚</h4>
无共轭点 ⟹ \(d\exp_p\) 处处非退化 ⟹ \(\exp_p\) 是局部微分同胚。

<h4>第三步：完备 + 单连通 ⟹ 全局</h4>
完备性保证测地线可无限延伸；单连通 + 无共轭点保证 \(\exp_p\) 是覆盖映射，故是全局微分同胚：

<div class="keybox">$$\boxed{\exp_p:T_pM\simeq\mathbb R^n\ \xrightarrow{\ \sim\ }\ M}$$</div>

<div class="memobox"><strong>关键词：</strong>非正曲率 + 完备 + 单连通 ⟹ \(M\simeq\mathbb R^n\)（\(H^n\) 是典型例子）。</div>`,
    2: L`<h4>目标</h4>
Gromov 的 Betti 数定理：截面曲率有界 + 直径有界 ⟹ 所有 Betti 数有界。

<h4>定理</h4>
若截面曲率 \(|K|\le 1\) 且 \(\mathrm{diam}(M)\le D\)，则存在常数 \(C(n,D)\)，使得所有 Betti 数满足：

<div class="keybox">$$\boxed{\sum_i b_i(M)\le C(n,D)}$$</div>

<h4>为什么深刻</h4>
Betti 数是拓扑量，本可任意大（如拼接许多环柄）。Gromov 的定理说：一旦曲率和直径都被「钳住」，拓扑复杂度（Betti 数之和）就被一个只依赖 \(n\) 和 \(D\) 的常数限制。

<div class="warnbox">这是「曲率控制拓扑」的巅峰结果之一：几何有界 ⟹ 拓扑有界。证明用体积比较与 Gromov 的临界半径覆盖技巧。</div>

<div class="memobox"><strong>关键词：</strong>曲率有界 + 直径有界 ⟹ Betti 数有界——几何钳制拓扑复杂度。</div>`
  },
  "r35": {
    0: L`<h4>目标</h4>
写出 \(\mathbb R^3\) 中曲面的第二基本形式的经典表示，并联系主曲率。

<h4>第一步：第二基本形式的坐标表示</h4>
\(\mathbb R^3\) 中曲面 \(M\) 的第二基本形式写作

<div class="eq">$$\mathrm{II}=L\,du^2+2M\,dudv+N\,dv^2$$</div>

其中 \(L=\langle r_{uu},N\rangle,\ M=\langle r_{uv},N\rangle,\ N=\langle r_{vv},N\rangle\)，\(N\) 是单位法向量。

<h4>第二步：形状算子（Weingarten 映射）</h4>
形状算子 \(S(X)=-\nabla_X N\) 满足 \(\langle S(X),Y\rangle=\mathrm{II}(X,Y)\)。它的特征值就是主曲率 \(\kappa_1,\kappa_2\)：

<div class="keybox">$$\boxed{S\ \text{的特征值}=\text{主曲率 }\kappa_1,\kappa_2}$$</div>

<h4>第三步：Gauss 曲率与平均曲率</h4>

<div class="eq">$$K=\kappa_1\kappa_2=\frac{LN-M^2}{EG-F^2},\qquad H=\frac{\kappa_1+\kappa_2}{2}$$</div>

<div class="memobox"><strong>关键词：</strong>第二基本形式 \(Ldu^2+2Mdudv+Ndv^2\)，主曲率 = 形状算子特征值。</div>`,
    1: L`<h4>目标</h4>
余维 1 的超曲面的第二基本形式可写成 \(h\cdot g\) 的简化形式，并给出平均曲率。

<h4>第一步：超曲面的第二基本形式</h4>
超曲面（余维数 1）的法空间是一维的，所以第二基本形式（法向值）等价于一个对称 \((0,2)\) 张量 \(h\)：

<div class="eq">$$\mathrm{II}(X,Y)=h(X,Y)\,N$$</div>

<h4>第二步：平均曲率</h4>
平均曲率是 \(h\) 的迹（再除维数）：

<div class="keybox">$$\boxed{H=\frac{1}{n}\mathrm{tr}(h)=\frac{\kappa_1+\cdots+\kappa_n}{n}}$$</div>

<h4>几何含义</h4>
\(H=0\) 就是极小超曲面（平均曲率为零），这类曲面是变分问题（面积泛函的临界点）的解。

<div class="memobox"><strong>关键词：</strong>超曲面的第二基本形式 = 对称张量 \(h\)，平均曲率 \(H=\frac1n\mathrm{tr}(h)\)。</div>`,
    2: L`<h4>目标</h4>
说明全测地子流形（\(\mathrm{II}\equiv 0\)）的概念，并举球面中赤道 vs 纬线的例子。

<h4>第一步：全测地的定义</h4>
若第二基本形式恒为零，则子流形是<strong>全测地</strong>的：

<div class="eq">$$\mathrm{II}\equiv 0\ \Longrightarrow\ \nabla^N_X Y=\nabla^M_X Y$$</div>

此时 \(M\) 的测地线也是 \(N\) 的测地线——沿 \(M\) 走「最直」的线，在整个外围空间里也是最直的。

<h4>第二步：球面中的例子</h4>

<div class="warnbox"><strong>赤道 \(S^{n-1}\subset S^n\)</strong>：全测地（大圆是球面测地线）。<br><strong>一般纬线</strong>：不是全测地，因为沿纬线走会「向外弯」，\(\mathrm{II}\neq 0\)。</div>

<div class="keybox">$$\boxed{\text{全测地 }\iff \mathrm{II}\equiv 0\iff\text{ 子流形测地线}=外围测地线}$$</div>

<div class="memobox"><strong>关键词：</strong>全测地 = 第二基本形式为零 = 大球面（赤道）是，纬线不是。</div>`
  },
  "r36": {
    0: L`<h4>目标</h4>
推导 \(\mathbb R^3\) 中曲面的 Gauss 曲率公式，说明「绝妙定理」。

<h4>第一步：Gauss 方程用于 \(\mathbb R^3\) 中曲面</h4>
外围 \(\mathbb R^3\) 平坦（\(R^N=0\)），Gauss 方程给出

<div class="eq">$$R^M(X,Y,Z,W)=\mathrm{II}(X,W)\mathrm{II}(Y,Z)-\mathrm{II}(X,Z)\mathrm{II}(Y,W)$$</div>

<h4>第二步：二维时化为行列式</h4>
二维曲率张量只有一个分量，代入得

<div class="keybox">$$\boxed{K=\frac{LN-M^2}{EG-F^2}}$$</div>

<h4>第三步：绝妙定理</h4>
左边 \(K\) 是内蕴量（只依赖度量 \(E,F,G\)），右边看似依赖 \(L,M,N\)（外蕴的第二基本形式），但等式说右边结果只由 \(E,F,G\) 决定。Gauss 称此为「绝妙定理」——\(K\) 是内蕴的。

<div class="memobox"><strong>关键词：</strong>\(K=\frac{LN-M^2}{EG-F^2}\) 只依赖第一基本形式 ⟹ 绝妙定理。</div>`,
    1: L`<h4>目标</h4>
写出常曲率空间 \(c\) 中子流形的 Gauss 方程。

<h4>第一步：外围曲率的贡献</h4>
若外围是常曲率 \(c\) 空间，则 \(R^N(X,Y)Z=c(\langle Y,Z\rangle X-\langle X,Z\rangle Y)\)。代入 Gauss 方程：

<div class="eq">$$R^M(X,Y,Z,W)=c(\langle Y,Z\rangle\langle X,W\rangle-\langle X,Z\rangle\langle Y,W\rangle)+\langle\mathrm{II}(X,W),\mathrm{II}(Y,Z)\rangle-\langle\mathrm{II}(X,Z),\mathrm{II}(Y,W)\rangle$$</div>

<h4>第二步：二维情形的标量形式</h4>
对二维曲面：

<div class="keybox">$$\boxed{K^M=c+\frac{\det(\mathrm{II})}{\det(\mathrm I)}}$$</div>

<h4>几何含义</h4>
外围曲率 \(c\) 是「基底」，第二基本形式的行列式是「外蕴弯曲的附加项」。球面 \(c>0\) 里的曲面，即使 \(\mathrm{II}\) 退化也有正的内蕴曲率。

<div class="memobox"><strong>关键词：</strong>常曲率 \(c\) 外围 ⟹ \(K^M=c+\det(\mathrm{II})/\det(\mathrm I)\)。</div>`,
    2: L`<h4>目标</h4>
说明 \(\mathbb R^3\) 中 Gauss 曲率为零的曲面是可展曲面。

<h4>第一步：平坦曲面 ⟹ 第二基本形式退化</h4>
\(\mathbb R^3\) 中曲面 \(K=0\) 代入 \(K=\frac{LN-M^2}{EG-F^2}\)，得

<div class="eq">$$K=0\ \Longrightarrow\ LN-M^2=0\ \Longrightarrow\ \det(\mathrm{II})=0$$</div>

<div class="keybox">$$\boxed{\mathbb R^3\text{ 中 }K=0\iff\det(\mathrm{II})=0}$$</div>

<h4>第二步：可展曲面</h4>
\(\det(\mathrm{II})=0\) 意味着两个主曲率至少一个为零，曲面沿某个方向「不弯」。这类曲面叫<strong>可展曲面</strong>——可以摊平到平面而不拉伸（如圆柱面、锥面）。

<div class="memobox"><strong>关键词：</strong>平坦曲面（\(K=0\)）⟹ \(\det(\mathrm{II})=0\) ⟹ 可展曲面。</div>`
  },
  "r37": {
    0: L`<h4>目标</h4>
写出 \(\mathbb R^3\) 中曲面 Codazzi 方程的 Christoffel 符号形式。

<h4>第一步：分量形式</h4>
Codazzi 方程 \(\nabla_i h_{jk}=\nabla_j h_{ik}\) 展开（协变导数用 Christoffel 符号表示）：

<div class="eq">$$\partial_1 h_{22}-\partial_2 h_{12}=h_{1j}\Gamma^j_{22}-h_{2j}\Gamma^j_{12}$$</div>

<h4>第二步：用 \(L,M,N\) 写出</h4>
记 \(h_{11}=L,\ h_{12}=M,\ h_{22}=N\)，则 Codazzi 方程化为

<div class="keybox">$$\boxed{L_v-M_u=L\Gamma^1_{12}+M(\Gamma^2_{12}-\Gamma^1_{11})-N\Gamma^2_{11}}$$</div>

（及关于 \(M_v-N_u\) 的对称式。）

<h4>几何含义</h4>
Codazzi 方程是 \(L,M,N\) 必须满足的微分关系——它们是子流形可嵌入的<strong>可积性条件</strong>之一。

<div class="memobox"><strong>关键词：</strong>Codazzi 方程用 Christoffel 符号给出 \(L,M,N\) 的可积性约束。</div>`,
    1: L`<h4>目标</h4>
说明常平均曲率（CMC）曲面中 Gauss–Codazzi 方程构成可积系统。

<h4>第一步：CMC 条件</h4>
常平均曲率曲面 \(H=\mathrm{const}\)（肥皂膜是物理实现）。

<h4>第二步：Gauss + Codazzi = 可积系统</h4>
Gauss 方程给出 \(K\) 与 \(\mathrm{II}\) 的关系，Codazzi 方程给出 \(\mathrm{II}\) 的协变导数对称性。二者合起来是 \(h_{ij}\) 的<strong>非线性偏微分方程组</strong>：

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
Gauss–Codazzi 方程就是这个嵌入的<strong>局部障碍</strong>——它们必须满足才能局部等距嵌入；Nash 定理说全局上总能找到足够大的 \(N\) 使一切光滑嵌入。

<div class="memobox"><strong>关键词：</strong>Gauss–Codazzi = 局部可积条件；Nash = 全局嵌入总存在（高维）。</div>`
  },
  "r38": {
    0: L`<h4>目标</h4>
介绍悬链面（catenoid）——唯一的极小旋转曲面（除平面外）。

<h4>第一步：旋转极小曲面的方程</h4>
旋转曲面 \(y=y(x)\) 绕轴旋转，极小条件 \(H=0\) 化为 ODE，解为悬链线：

<div class="eq">$$y=a\cosh\frac{x}{a}$$</div>

<h4>第二步：验证极小</h4>
悬链面两个主曲率等值反号：

<div class="keybox">$$\boxed{\kappa_1=-\kappa_2\ \Longrightarrow\ H=\frac{\kappa_1+\kappa_2}{2}=0}$$</div>

<h4>第三步：Gauss 曲率</h4>
\(K=\kappa_1\kappa_2=-\kappa_1^2<0\)，悬链面处处负曲率。它与螺旋面是「共轭极小曲面对」。

<div class="memobox"><strong>关键词：</strong>悬链面 = 悬链线旋转 = 唯一极小旋转面，\(H=0\)、\(K<0\)。</div>`,
    1: L`<h4>目标</h4>
介绍螺旋面（helicoid）——直纹极小曲面，与悬链面共形等价。

<h4>第一步：螺旋面的构造</h4>
螺旋面由一条直线沿轴旋转并同时上升生成，是<strong>直纹面</strong>（由直线族织成）。

<h4>第二步：极小性</h4>
螺旋面满足 \(H=0\)，是极小曲面。它与悬链面通过 Weierstrass 表示联系，是<strong>共形等价</strong>的一对：

<div class="keybox">$$\boxed{\text{螺旋面}\ \xleftrightarrow{\text{共形}}\ \text{悬链面}}$$</div>

<h4>应用</h4>
螺旋面出现在 DNA 双螺旋、纳米螺旋结构等自然界里——因为极小曲面是「面积最小、最省材料」的形状。

<div class="memobox"><strong>关键词：</strong>螺旋面 = 直纹极小曲面，与悬链面共形，是自然界的「最省材料」形状。</div>`,
    2: L`<h4>目标</h4>
说明球面是唯一紧致无边 CMC 曲面，并联系等周问题。

<h4>第一步：Alexandrov 定理</h4>
\(\mathbb R^3\) 中紧致无边 CMC 曲面 = 球面。球面的平均曲率：

<div class="eq">$$H=\frac{1}{R}$$</div>

<h4>第二步：等周问题</h4>
等周问题：给定面积，求体积最大的曲面。解是球面——因为体积变分的一阶条件正是 \(H=\mathrm{const}\)（常数平均曲率），而球面是唯一紧致解。

<div class="keybox">$$\boxed{\text{等周问题（定面积最大体积）的解}=\text{球面}}$$</div>

<div class="memobox"><strong>关键词：</strong>球面 = 唯一紧致 CMC 曲面 = 等周问题最优解，\(H=1/R\)。</div>`
  },
  "r39": {
    0: L`<h4>目标</h4>
说明 \(S^3\) 中极小曲面的 Gauss 曲率 \(K\le 1\)，并提 Lawson 构造。

<h4>第一步：\(S^3\) 中曲面的 Gauss 方程</h4>
外围 \(S^3\) 曲率 \(c=1\)，Gauss 方程 \(K^M=1+\det(\mathrm{II})/\det(\mathrm I)\)。极小曲面 \(H=0\) 意味着 \(\kappa_1=-\kappa_2\)，故 \(\det(\mathrm{II})=\kappa_1\kappa_2=-\kappa_1^2\le 0\)：

<div class="eq">$$K=1-\frac{\kappa_1^2}{EG-F^2}\le 1$$</div>

<div class="keybox">$$\boxed{S^3\text{ 中极小曲面：}K\le 1}$$</div>

<h4>第二步：Lawson 构造</h4>
Lawson 构造了 \(S^3\) 中任意亏格的紧致极小曲面——说明 \(S^3\) 中极小曲面极其丰富。

<div class="memobox"><strong>关键词：</strong>\(S^3\) 中极小曲面 \(K\le 1\)，Lawson 构造任意亏格紧致极小曲面。</div>`,
    1: L`<h4>目标</h4>
说明 \(S^n\) 中极小子流形满足 \(\Delta x=-nx\)，这是 Simons 刚性研究的出发点。

<h4>第一步：位置向量与第二基本形式</h4>
\(S^n\subset\mathbb R^{n+1}\) 的位置向量 \(x\) 即单位法向量。对 \(S^n\) 中的极小子流形 \(M^k\)，平均曲率向量 \(H=0\)，而 \(H=\frac1k\Delta x\)（子流形 Laplacian 作用于位置向量 = 平均曲率向量）。

<h4>第二步：极小 ⟹ 特征方程</h4>

<div class="keybox">$$\boxed{\Delta x=-k\,x}$$</div>

（其中 \(-k\) 来自 \(S^n\) 的曲率。）

<h4>几何含义</h4>
位置向量 \(x\) 是 \(M\) 上 Laplace 算子的<strong>特征函数</strong>（特征值 \(-k\)）。这使极小子流形可以用谱理论工具研究，是 Simons 刚性定理的起点。

<div class="memobox"><strong>关键词：</strong>极小 ⟹ \(\Delta x=-kx\)，位置向量是 Laplace 的特征函数。</div>`,
    2: L`<h4>目标</h4>
陈述球面中子流形的曲率 pinching 定理。

<h4>第一步：pinching 条件</h4>
若 \(S^n\) 中子流形的截面曲率满足

<div class="eq">$$K>\frac{n-2}{2n-3}$$</div>

<h4>第二步：结论</h4>
则子流形必为<strong>全测地</strong>的——即 \(S^n\) 的大球面 \(S^k\)。

<div class="keybox">$$\boxed{K>\frac{n-2}{2n-3}\ \Longrightarrow\ \text{全测地（大球面）}}$$</div>

<h4>几何含义</h4>
「曲率被压得很紧（接近 \(1\)）⟹ 子流形就是最标准的大球面」。这是球面曲率 pinching 的经典结果，说明高曲率钳制住了子流形的形状。

<div class="memobox"><strong>关键词：</strong>截面曲率 pinching \(>\frac{n-2}{2n-3}\) ⟹ 全测地大球面。</div>`
  },
  "r40": {
    0: L`<h4>目标</h4>
用球面三角形验证局部 Gauss–Bonnet 定理。

<h4>第一步：球面三角形的面积</h4>
球面上由赤道和两条经线构成的三角形（两条经线夹角 \(\pi/2\)），三个内角都是 \(\pi/2\)，内角和 \(=\frac{3\pi}{2}\)。Girard 定理给出面积：

<div class="eq">$$\mathrm{Area}=R^2(\alpha+\beta+\gamma-\pi)=R^2\cdot\frac{\pi}{2}=\frac{\pi R^2}{2}$$</div>

这恰好是 \(1/8\) 球面面积 \(4\pi R^2/8\)。

<h4>第二步：验证 Gauss–Bonnet</h4>
边界是测地线（赤道、经线），\(\kappa_g=0\)；三个角点外角各 \(\pi-\frac\pi2=\frac\pi2\)。Gauss–Bonnet 给出：

<div class="eq">$$\int_T K\,dA=\frac{1}{R^2}\cdot\frac{\pi R^2}{2}=\frac{\pi}{2}=\alpha+\beta+\gamma-\pi$$</div>

<div class="keybox">$$\boxed{\int_T K\,dA=\alpha+\beta+\gamma-\pi=\frac{\pi}{2}}$$</div>

<div class="memobox"><strong>关键词：</strong>球面三角形内角和 \(>\pi\)，差量 = 曲率积分 = \(K\cdot\)面积。</div>`,
    1: L`<h4>目标</h4>
说明测地三角形的 Gauss–Bonnet 公式 \(\int K\,dA=\sum\alpha_i-\pi\)。

<h4>第一步：测地边界 ⟹ 无测地曲率项</h4>
测地三角形边界是测地线，\(\kappa_g=0\)，角点内角 \(\alpha_i\)。局部 Gauss–Bonnet 化为：

<div class="eq">$$\int_T K\,dA+\sum_i(\pi-\alpha_i)=2\pi\ \Longrightarrow\ \int_T K\,dA=\sum_i\alpha_i-\pi$$</div>

<div class="keybox">$$\boxed{\int_T K\,dA=\alpha_1+\alpha_2+\alpha_3-\pi}$$</div>

<h4>第二步：平面特例</h4>
平面上 \(K=0\)，于是 \(\alpha_1+\alpha_2+\alpha_3-\pi=0\)，即内角和 \(=\pi\)——正是欧氏几何的三角形内角和定理。

<div class="memobox"><strong>关键词：</strong>测地三角形 \(\int K\,dA=\sum\alpha_i-\pi\)；平面 \(K=0\) 退回内角和 \(=\pi\)。</div>`,
    2: L`<h4>目标</h4>
球冠（球面上半径 \(\theta\) 的球冠）的局部 Gauss–Bonnet 验证。

<h4>第一步：球冠的测地曲率</h4>
球冠边界（纬度 \(\theta\) 的圆）的测地曲率：

<div class="eq">$$\kappa_g=\frac{\cot\theta}{R}$$</div>

<h4>第二步：球冠的曲率积分与边界贡献</h4>
球冠面积 \(=2\pi R^2(1-\cos\theta)\)，故曲率积分 \(=\frac{1}{R^2}\cdot 2\pi R^2(1-\cos\theta)=2\pi(1-\cos\theta)\)。边界长度 \(=2\pi R\sin\theta\)，边界测地曲率积分 \(=2\pi R\sin\theta\cdot\frac{\cot\theta}{R}=2\pi\cos\theta\)。

<h4>第三步：两者之和</h4>

<div class="keybox">$$\boxed{\int K\,dA+\int\kappa_g\,ds=2\pi(1-\cos\theta)+2\pi\cos\theta=2\pi=2\pi\chi(\text{球冠})}$$</div>

<div class="memobox"><strong>关键词：</strong>球冠的曲率积分与边界测地曲率互补，之和恰为 \(2\pi\)。</div>`
  },
  "r41": {
    0: L`<h4>目标</h4>
验证球面 \(S^2\) 的总曲率。

<h4>计算</h4>
球面 \(\chi=2\)，\(K=1/R^2\)，面积 \(=4\pi R^2\)：

<div class="eq">$$\int_{S^2}K\,dA=\frac{1}{R^2}\cdot 4\pi R^2=4\pi=2\pi\cdot 2=2\pi\chi(S^2)$$</div>

<div class="keybox">$$\boxed{\int_{S^2}K\,dA=4\pi\quad(\text{与半径无关})}$$</div>

<h4>关键观察</h4>
无论球面半径多大，总曲率恒为 \(4\pi\)。曲率 \(1/R^2\) 变小，但面积 \(4\pi R^2\) 变大，乘积不变——这是 Gauss–Bonnet 的深刻体现：总曲率是拓扑量。

<div class="memobox"><strong>关键词：</strong>球面总曲率恒 \(4\pi\)，半径任意，拓扑量不随度量变。</div>`,
    1: L`<h4>目标</h4>
验证环面 \(T^2\) 的总曲率为零。

<h4>计算</h4>
环面 \(\chi=0\)。环面外侧正曲率、内侧负曲率：

<div class="eq">$$\int_{T^2}K\,dA=2\pi\chi(T^2)=2\pi\cdot 0=0$$</div>

<div class="keybox">$$\boxed{\int_{T^2}K\,dA=0}$$</div>

<h4>几何含义</h4>
正曲率（外侧）与负曲率（内侧）恰好抵消。虽然环面上处处有弯曲，但「总弯曲」为零——这只有 Gauss–Bonnet 能保证，也解释了为什么环面可以摊平度量（\(K\equiv 0\) 的平坦度量存在）。

<div class="memobox"><strong>关键词：</strong>环面 \(\chi=0\)，正负曲率抵消，总曲率为零。</div>`,
    2: L`<h4>目标</h4>
亏格 2 曲面（双环面）的总曲率。

<h4>计算</h4>
亏格 \(g=2\) 曲面 \(\chi=2-2g=-2\)：

<div class="eq">$$\int_M K\,dA=2\pi\chi(M)=2\pi\cdot(-2)=-4\pi$$</div>

<div class="keybox">$$\boxed{\int_M K\,dA=-4\pi\quad(\text{亏格 }2)}$$</div>

<h4>几何含义</h4>
亏格 \(\ge 2\) 的闭曲面<strong>总曲率为负</strong>。这强制了高亏格曲面必然存在负曲率区域（不能处处 \(K\ge 0\)），是 Gauss–Bonnet 对曲率符号的拓扑约束。

<div class="memobox"><strong>关键词：</strong>亏格 \(g\) ⟹ 总曲率 \(2\pi(2-2g)\)，亏格 \(\ge2\) 必为负总曲率。</div>`
  },
  "r42": {
    0: L`<h4>目标</h4>
用 Euler 公式 \(V-E+F=2\) 验证五种正多面体的 \(\chi=2\)。

<h4>计算</h4>
五种柏拉图立体都满足 \(\chi=V-E+F=2\)：

<div class="eq">$$\text{四面体 }4-6+4=2,\quad \text{立方体 }8-12+6=2,\quad \text{八面体 }6-12+8=2$$</div>

<div class="keybox">$$\boxed{V-E+F=2\quad(\text{五种正多面体})}$$</div>

<h4>几何含义</h4>
正多面体分类（只有五种）正是由 Euler 公式 \(V-E+F=2\) 加上边、面的度约束推出来的。\(\chi=2\) 是「球面形」曲面的共同特征。

<div class="memobox"><strong>关键词：</strong>Euler 公式 \(V-E+F=2\) 限制出五种正多面体，\(\chi=2\) 是球面拓扑。</div>`,
    1: L`<h4>目标</h4>
环面剖分的 Euler 示性数。

<h4>计算</h4>
环面可剖分为 \(16\) 个矩形：\(V=16\)，\(E=32\)，\(F=16\)：

<div class="eq">$$\chi=V-E+F=16-32+16=0$$</div>

<div class="keybox">$$\boxed{\chi(T^2)=0\quad(\text{与剖分方式无关})}$$</div>

<h4>关键观察</h4>
任何剖分都给出 \(\chi=0\)——Euler 示性数是<strong>拓扑不变量</strong>，不依赖剖分的粗细。

<div class="memobox"><strong>关键词：</strong>环面 \(\chi=0\)，Euler 示性数不依赖剖分。</div>`,
    2: L`<h4>目标</h4>
不可定向曲面 Klein 瓶的 Euler 示性数，及 Gauss–Bonnet 的修正。

<h4>计算</h4>
Klein 瓶不可定向，\(\chi=0\)。对不可定向曲面，\(\chi=2-k\)（\(k\) 为交叉帽数）。

<h4>Gauss–Bonnet 的修正</h4>
Gauss–Bonnet 定理要求<strong>可定向</strong>。对不可定向曲面，需转到它的<strong>定向二重覆盖</strong> \(\widetilde M\)：

<div class="keybox">$$\boxed{\int_{\widetilde M}K\,dA=2\pi\chi(\widetilde M)=2\cdot 2\pi\chi(M)}$$</div>

（二重覆盖的 Euler 示性数翻倍。）

<div class="memobox"><strong>关键词：</strong>Klein 瓶 \(\chi=0\)；不可定向曲面需用定向覆盖修正 Gauss–Bonnet。</div>`
  },
  "r43": {
    0: L`<h4>目标</h4>
说明 \(n=1\) 时 Chern–Gauss–Bonnet 退化为经典 Gauss–Bonnet。

<h4>计算</h4>
二维（\(2n=2\)，\(n=1\)）时，Pfaffian 恰是 Gauss 曲率密度：

<div class="eq">$$\mathrm{Pf}(\Omega)=\frac{1}{2\pi}K\,dA$$</div>

代入 Chern–Gauss–Bonnet：

<div class="keybox">$$\boxed{\int_M\frac{K}{2\pi}\,dA=(2\pi)^1\chi(M)=2\pi\chi(M)\ \Longrightarrow\ \int_M K\,dA=2\pi\chi(M)}$$</div>

<h4>结论</h4>
正是经典的全局 Gauss–Bonnet 定理。所以 Chern 的公式是「经典 → 高维」的自然推广。

<div class="memobox"><strong>关键词：</strong>\(n=1\) 时 Pfaffian \(=K/2\pi\)，Chern–GB 退回经典 GB。</div>`,
    1: L`<h4>目标</h4>
写出四维的 Chern–Gauss–Bonnet 公式，含 Weyl 张量贡献。

<h4>四维公式</h4>
四维（\(n=2\)）时，Pfaffian 展开为曲率张量的二次组合，可分解为 Weyl 张量、Ricci、标量曲率三部分：

<div class="eq">$$\int_M\frac{1}{32\pi^2}\Big(|W|^2-2|\mathrm{Ric}|^2+\frac{S^2}{3}\Big)dV=\chi(M)$$</div>

<div class="keybox">$$\boxed{\frac{1}{32\pi^2}\int_M\Big(|W|^2-2|\mathrm{Ric}|^2+\frac{S^2}{3}\Big)dV=\chi(M)}$$</div>

<h4>应用：引力瞬子</h4>
引力瞬子的拓扑荷（Euler 数）由此公式确定，Weyl 张量 \(|W|^2\) 描述引力波/瞬子的贡献。

<div class="memobox"><strong>关键词：</strong>四维 GB 含 \(|W|^2\)、\(|\mathrm{Ric}|^2\)、\(S^2\) 三项，确定引力瞬子拓扑荷。</div>`,
    2: L`<h4>目标</h4>
计算 \(\mathbb{CP}^2\) 的 Euler 示性数。

<h4>第一步：\(\mathbb{CP}^2\) 的拓扑</h4>
\(\mathbb{CP}^2\) 的 Betti 数 \(b_0=b_2=b_4=1\)，故：

<div class="eq">$$\chi(\mathbb{CP}^2)=1+1+1=3$$</div>

<h4>第二步：Chern–Gauss–Bonnet</h4>
配 Fubini–Study 度量，Chern–Gauss–Bonnet 给出曲率形式的 Pfaffian 积分：

<div class="keybox">$$\boxed{\int_{\mathbb{CP}^2}\mathrm{Pf}(\Omega)=(2\pi)^2\chi=(2\pi)^2\cdot 3=12\pi^2}$$</div>

<h4>几何含义</h4>
\(\mathbb{CP}^2\) 是四维紧致流形里 \(\chi=3\) 的典型例子，其 Fubini–Study 度量的曲率积分被拓扑锁定为 \(12\pi^2\)。

<div class="memobox"><strong>关键词：</strong>\(\chi(\mathbb{CP}^2)=3\)，Pfaffian 积分 \(=12\pi^2\)。</div>`
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
对测地线 \(\gamma\) 的变分场 \(V\)，指标形式（第二变分的两倍）：

<div class="eq">$$I(V,V)=\int_a^b\Big(\lvert V'\rvert^2-\langle R(V,\dot\gamma)\dot\gamma,V\rangle\Big)dt$$</div>

<h4>第二步：球面大圆，取法向正弦场</h4>
\(S^2\) 上取 \(V(t)=\sin t\cdot E\)（\(E\) 平行法向场）。球面曲率 \(R(V,\dot\gamma)\dot\gamma=V\)，于是

<div class="eq">$$I(V,V)=\int_0^L(\cos^2 t-\sin^2 t)dt=\int_0^L\cos 2t\,dt$$</div>

<h4>第三步：分情况</h4>

<div class="warnbox">\(L<\pi\)：\(I>0\)，大圆弧是<strong>极小值</strong>。<br>\(L=\pi\)：\(I=0\)，半圆有零特征值（\(V\) 是对径点处的 Jacobi 场，即共轭点）。</div>

<div class="keybox">$$\boxed{L<\pi:\ \delta^2E>0;\quad L=\pi:\ \delta^2E=0\ (\text{共轭点})}$$</div>

<div class="memobox"><strong>关键词：</strong>大圆弧 \(<\pi\) 极小；\(=\pi\) 时零特征值 = 共轭点。</div>`,
    1: L`<h4>目标</h4>
Morse 指标定理：能量泛函在测地线上的 Morse 指标等于共轭点个数（计重数）。

<h4>第一步：Morse 指标的定义</h4>
Morse 指标 = 第二变分 \(\delta^2E\) 的<strong>负特征值个数</strong>。而 \(\delta^2E(V,V)=\int\langle LV,V\rangle dt\)，其中

<div class="eq">$$L=-\nabla_{\dot\gamma}^2-R(\cdot,\dot\gamma)\dot\gamma$$</div>

是 Jacobi 算子（Sturm–Liouville 型二阶算子）。

<h4>第二步：Sturm–Liouville 理论</h4>
Jacobi 算子 \(L\) 的特征值关于边界条件单调。随着区间长度增长，每当穿过一个共轭点（对应一个零特征值的 Jacobi 场），就多一个负特征值。

<div class="keybox">$$\boxed{\text{Morse 指标}=\text{共轭点个数（计重数）}}$$</div>

<h4>意义</h4>
这把「能量泛函的临界点退化程度」（分析量）与「共轭点」（几何量）精确对应，是变分理论与 Jacobi 场理论之间的桥梁。

<div class="memobox"><strong>关键词：</strong>Morse 指标 = 负特征值个数 = 共轭点个数（计重数）。</div>`,
    2: L`<h4>目标</h4>
极小曲面的第二变分公式，研究极小曲面稳定性。

<h4>第一步：极小曲面的 Jacobi 算子</h4>
极小曲面的第二变分涉及算子：

<div class="eq">$$\Delta+\lvert\mathrm{II}\rvert^2+\mathrm{Ric}(\nu,\nu)$$</div>

其中 \(\nu\) 是法向量，\(\mathrm{II}\) 是第二基本形式，\(\mathrm{Ric}(\nu,\nu)\) 是外围 Ricci 曲率在法向的值。

<h4>第二步：稳定性条件</h4>
极小曲面<strong>稳定</strong> ⟺ 这个算子的特征值全部非负：

<div class="keybox">$$\boxed{\Delta+\lvert\mathrm{II}\rvert^2+\mathrm{Ric}(\nu,\nu)\ge 0\ \Longrightarrow\ \text{稳定}}$$</div>

<h4>几何含义</h4>
第二基本形式（\(\lvert\mathrm{II}\rvert^2\)）与外围曲率（\(\mathrm{Ric}(\nu,\nu)\)）共同决定极小曲面的稳定性。肥皂膜稳定 ⟺ 扰动面积不减。

<div class="memobox"><strong>关键词：</strong>极小曲面稳定性由 Jacobi 算子 \(\Delta+|\mathrm{II}|^2+\mathrm{Ric}(\nu,\nu)\) 的谱决定。</div>`
  },
  "r47": {
    0: L`<h4>目标</h4>
用 Morse 理论解释球面 \(S^n\) 上连接对径点的测地线的退化性。

<h4>第一步：大圆弧与共轭点</h4>
\(S^n\) 上大圆弧每隔 \(\pi\) 经过一个共轭点（对径点），每个共轭点重数 \(n-1\)（法向 Jacobi 场维数）。过 \(k\) 个共轭点的大弧：

<div class="eq">$$\mathrm{index}=(n-1)k$$</div>

<h4>第二步：临界点的退化</h4>
连接对径点 \(p,-p\) 的测地线有<strong>无穷多条</strong>（所有大圆）。Morse 理论解释：这些是能量泛函在环路空间 \(\Omega(S^n)\) 上的退化临界点，其指标随「绕数」递增。

<div class="keybox">$$\boxed{\text{绕 }k\text{ 圈的大圆：}\mathrm{index}=(n-1)k}$$</div>

<h4>意义</h4>
球面测地线族是 Morse 理论在环路空间上最标准的例子，也是 Bott 周期定理的起点。

<div class="memobox"><strong>关键词：</strong>球面对径点间无穷多条测地线 = 不同绕数的退化临界点，指标 \((n-1)k\)。</div>`,
    1: L`<h4>目标</h4>
紧致 Lie 群上的闭测地线，与 Morse 理论的估计。

<h4>第一步：双不变度量与单参数子群</h4>
紧致 Lie 群 \(G\) 配双不变度量，单参数子群 \(t\mapsto\exp(tX)\) 是<strong>闭测地线</strong>（通过单位元）。

<h4>第二步：Morse 理论的应用</h4>
把 Morse 理论应用于 \(G\) 的环路空间（或自由环路空间），能量泛函的临界点就是这些闭测地线。Morse 不等式给出闭测地线数量的下界估计：

<div class="keybox">$$\boxed{\#\{\text{闭测地线}\}\ge \text{环路空间的拓扑复杂性下界}}$$</div>

<h4>意义</h4>
Lie 群的代数结构（单参数子群）与其几何（闭测地线）通过 Morse 理论联系起来，可用于估计闭测地线的分布。

<div class="memobox"><strong>关键词：</strong>Lie 群单参数子群 = 闭测地线，Morse 理论估计其数量与分布。</div>`,
    2: L`<h4>目标</h4>
Bott 周期定理：把 Morse 理论应用于环路空间 \(\Omega(S^n)\) 得到稳定同伦群的周期性。

<h4>第一步：Morse 理论用于环路空间</h4>
Bott 把 Morse 理论应用到球面环路空间 \(\Omega(S^n)\)。能量泛函的临界点是球面测地线（大圆），指标可用共轭点精确算出（前面算过 \((n-1)k\)）。

<h4>第二步：临界点拓扑 = 环路空间拓扑</h4>
Morse 理论的核心：临界点的指标结构决定空间的胞腔分解。于是 \(\Omega(S^n)\) 的同伦型可由测地线（临界点）的指标完全读出。

<h4>第三步：Bott 周期性</h4>

<div class="keybox">$$\boxed{\pi_{i+n}(S^n)\ \text{的稳定化 }=\ \Omega(S^n)\text{ 的同伦 }\ \Rightarrow\ \text{Bott 周期性}}$$</div>

稳定同伦群 \(\pi_{k+n}(S^n)\)（\(n\) 充分大）呈现周期性，周期为 8（实）或 2（复）——这是 Morse 理论最辉煌的应用。

<div class="memobox"><strong>关键词：</strong>Morse 理论 + 环路空间 \(\Omega(S^n)\) ⟹ 稳定同伦群的 Bott 周期性。</div>`
  },
  "r48": {
    0: L`<h4>目标</h4>
比较球面 \(S^n(1)\) 与欧氏空间 \(\mathbb R^n\) 的 Jacobi 场增长。

<h4>第一步：球面 Jacobi 场</h4>
\(S^n(1)\) 上 \(J''+J=0\)，解为

<div class="eq">$$\lvert J(t)\rvert\le\lvert J(0)\rvert\cos t+\lvert J'(0)\rvert\sin t$$</div>

<h4>第二步：欧氏 Jacobi 场</h4>
\(\mathbb R^n\) 上 \(J''=0\)，解为线性增长

<div class="eq">$$\lvert J(t)\rvert=\lvert J(0)+tJ'(0)\rvert$$</div>

<h4>第三步：比较</h4>
球面曲率 \(1>0\)（欧氏曲率 \(0\)），由 Rauch 定理球面 Jacobi 场增长更慢：

<div class="keybox">$$\boxed{K=1>0\ \Longrightarrow\ \text{球面 Jacobi 场 }(\sin/\cos)\text{ 增长慢于欧氏 }(\text{线性})}$$</div>

<div class="memobox"><strong>关键词：</strong>正曲率（球面）Jacobi 场振荡收缩，零曲率（欧氏）线性增长。</div>`,
    1: L`<h4>目标</h4>
比较双曲空间 \(H^n(-1)\) 与欧氏空间的 Jacobi 场。

<h4>第一步：双曲 Jacobi 场</h4>
\(H^n(-1)\) 上 \(J''-J=0\)，解为指数增长：

<div class="eq">$$\lvert J(t)\rvert=\lvert\cosh t\cdot J(0)+\sinh t\cdot J'(0)\rvert$$</div>

<h4>第二步：比较</h4>
双曲曲率 \(-1<0\)（欧氏曲率 \(0\)），由 Rauch 定理，负曲率空间 Jacobi 场增长<strong>快于</strong>欧氏空间：

<div class="keybox">$$\boxed{K=-1<0\ \Longrightarrow\ \text{双曲 Jacobi 场 }(\sinh/\cosh)\text{ 指数增长，快于欧氏线性}}$$</div>

<h4>几何含义</h4>
负曲率是「排斥力」，相邻测地线指数发散。Rauch 定理把这个直观现象推广到任意曲率下界。

<div class="memobox"><strong>关键词：</strong>负曲率（双曲）Jacobi 场指数发散，快于欧氏线性增长。</div>`,
    2: L`<h4>目标</h4>
说明 Rauch 定理如何用于球面定理（pinching 定理）。

<h4>第一步：球面定理的条件</h4>
若截面曲率满足

<div class="eq">$$\frac14<K\le 1$$</div>

<h4>第二步：下界 \(1/4\) 的作用</h4>
下界 \(K>\frac14\) 通过 Rauch 定理与共轭点比较，保证直径有上界（比球面 \(S^n\) 更早出现共轭点），从而流形紧致且拓扑与球面相近；上界 \(1\) 排除「过大曲率」的奇异性。

<div class="keybox">$$\boxed{\tfrac14<K\le 1\ \Longrightarrow\ M\ \text{同胚于 }S^n}$$</div>

<h4>几何含义</h4>
曲率被「压」在 \((1/4,1]\) 之间时，流形拓扑上就是球面。这是比较几何最著名的应用——曲率条件决定拓扑类型。

<div class="memobox"><strong>关键词：</strong>球面定理：\(\frac14<K\le1\) ⟹ 同胚于 \(S^n\)，下界用 Rauch 定理推出。</div>`
  },
  "r49": {
    0: L`<h4>目标</h4>
说明 Toponogov 定理在球面定理中的应用。

<h4>第一步：球面定理的条件</h4>
\(\frac14<K\le 1\)。Toponogov 定理用 \(c=\frac14\) 比较：\(M\) 中三角形角度 \(\ge\) 曲率 \(1/4\) 球面中同边三角形的角。

<h4>第二步：推出直径上界</h4>
角度比较 ⟹ 边长比较 ⟹ 直径上界。曲率下界 \(1/4\) 使所有测地线在有限距离内「收拢」，给出 \(\mathrm{diam}(M)\le\pi\)（与球面 \(S^n\) 相当）。

<div class="keybox">$$\boxed{\text{Toponogov 比较}\ \Longrightarrow\ \mathrm{diam}(M)\ \text{上界}\ \Longrightarrow\ M\text{ 紧致}}$$</div>

<h4>意义</h4>
Toponogov 定理是球面定理证明里的关键几何工具——把曲率 pinching 翻译成三角形/距离的全局控制。

<div class="memobox"><strong>关键词：</strong>Toponogov 定理把曲率下界转成角度/直径控制，是球面定理的关键。</div>`,
    1: L`<h4>目标</h4>
说明 Toponogov 定理如何启发 Alexandrov 空间的定义。

<h4>第一步：Alexandrov 空间的定义</h4>
Alexandrov 空间（曲率下界 \(c\)）是满足「三角形比较」的度量空间：任意测地三角形，其顶角 \(\ge\) 常曲率 \(c\) 空间同边三角形的对应角。

<h4>第二步：Toponogov 定理的意义</h4>
Toponogov 定理正是说：光滑流形 \(K\ge c\) ⟹ 满足 Alexandrov 的比较条件。所以 Alexandrov 空间是「曲率下界」概念在<strong>非光滑</strong>度量空间上的推广：

<div class="keybox">$$\boxed{\text{光滑 }K\ge c\ \subset\ \text{Alexandrov 曲率下界 }c}$$</div>

<h4>意义</h4>
Alexandrov 空间允许奇点、崩塌极限等非光滑对象，是现代比较几何（Perelman、Cheeger–Colding 的工作）的舞台。

<div class="memobox"><strong>关键词：</strong>Alexandrov 空间 = 用「三角形比较」定义曲率下界的非光滑度量空间。</div>`,
    2: L`<h4>目标</h4>
说明 Cheeger–Gromoll 分裂定理依赖 Toponogov 定理。

<h4>第一步：分裂定理的陈述</h4>
若 \(\mathrm{Ric}\ge 0\) 且流形含一条<strong>直线</strong>（两端无限延伸的最短测地线），则流形分裂为乘积：

<div class="eq">$$M\ \text{含直线}\ \Longrightarrow\ M=\mathbb R\times N$$</div>

<h4>第二步：Toponogov 的作用</h4>
直线对应的 Busemann 函数 \(b\) 是「距离函数」，要证明 \(b\) 是仿射的（\(\nabla^2 b=0\)）。这一步用 Toponogov 比较：\(\mathrm{Ric}\ge0\)（其实分裂定理只需这个 Ricci 条件，但比较工具来自 Toponogov 思想）把三角形角度关系转为 \(b\) 的凸性，最终 \(b\) 是线性函数。

<div class="keybox">$$\boxed{\mathrm{Ric}\ge 0+\text{直线}\ \Longrightarrow\ M=\mathbb R\times N}$$</div>

<div class="memobox"><strong>关键词：</strong>分裂定理：非负 Ricci + 直线 ⟹ 乘积结构，依赖比较几何（Toponogov 思想）。</div>`
  },
  "r50": {
    0: L`<h4>目标</h4>
Ricci 平坦流形（\(\mathrm{Ric}\ge0\)）的体积增长。

<h4>第一步：取 \(c=0\)</h4>
\(\mathrm{Ric}\ge0\) 对应 \(c=0\)，比较空间是欧氏空间 \(V_0(r)=\omega_n r^n\)。Bishop–Gromov 给出：

<div class="eq">$$\frac{\mathrm{Vol}(B(p,r))}{r^n}\ \text{单调非增}$$</div>

<h4>第二步：体积上界</h4>

<div class="keybox">$$\boxed{\mathrm{Ric}\ge0\ \Longrightarrow\ \mathrm{Vol}(B(p,r))\le\omega_n r^n}$$</div>

<h4>应用</h4>
Calabi–Yau 流形是 Ricci 平坦的，其体积增长最多像欧氏空间一样快（体积 ≤ \(\omega_n r^n\)）。

<div class="memobox"><strong>关键词：</strong>Ricci 平坦 ⟹ 体积 ≤ 欧氏体积 \(\omega_n r^n\)，体积比单调非增。</div>`,
    1: L`<h4>目标</h4>
正 Ricci 曲率（\(\mathrm{Ric}\ge n-1\)，即球面）的体积上界。

<h4>第一步：取 \(c=1\)</h4>
\(\mathrm{Ric}\ge n-1\) 对应 \(c=1\)，比较空间是球面 \(S^n\)。Bishop–Gromov 给出体积比 \(\mathrm{Vol}(B(p,r))/V_{S^n}(r)\) 单调非增。

<h4>第二步：体积上界</h4>

<div class="eq">$$\mathrm{Vol}(B(p,r))\le V_{S^n}(r),\qquad \mathrm{Vol}(M)\le\mathrm{Vol}(S^n)$$</div>

<div class="keybox">$$\boxed{\mathrm{Ric}\ge n-1\ \Longrightarrow\ \mathrm{Vol}(M)\le\mathrm{Vol}(S^n)=\frac{2\pi^{(n+1)/2}}{\Gamma((n+1)/2)}}$$</div>

<h4>几何含义</h4>
正 Ricci 下界（球面量级）钳住总体积，球面是体积上界的「饱和」模型。

<div class="memobox"><strong>关键词：</strong>\(\mathrm{Ric}\ge n-1\) ⟹ 体积 ≤ 球面体积，Bishop–Gromov 的球面版。</div>`,
    2: L`<h4>目标</h4>
Gromov 紧致性定理：曲率、直径、体积有界的流形集合紧致。

<h4>第一步：条件</h4>
考虑满足 \(\lvert K\rvert\le1\)、\(\mathrm{diam}\le D\)、\(\mathrm{vol}\ge v>0\) 的 \(n\) 维闭流形族。

<h4>第二步：体积比较给出 ε-网</h4>
由 Bishop–Gromov，体积下界 \(v>0\) + 曲率有界给出统一的覆盖数上界（每个流形可被有限个 \(\varepsilon\)-球覆盖，个数一致有界）。

<h4>第三步：Gromov 紧致性</h4>

<div class="keybox">$$\boxed{\{\lvert K\rvert\le1,\ \mathrm{diam}\le D,\ \mathrm{vol}\ge v\}\ \text{在 Gromov–Hausdorff 拓扑下紧致}}$$</div>

<h4>意义</h4>
这是「几何有界 ⟹ 紧致」的模空间结果：满足这些界的流形只有「有限种形状」（模紧致），是当代几何分析（Ricci 流、极限空间）的基础。

<div class="memobox"><strong>关键词：</strong>曲率/直径/体积有界 ⟹ 流形族 GH 紧致（Gromov 紧致性定理）。</div>`
  },
  "r51": {
    0: L`<h4>目标</h4>
球面 \(S^n(R)\) 达到 Bonnet–Myers 上界，是刚性情形。

<h4>计算</h4>
\(S^n(R)\) 的 Ricci \(=\frac{n-1}{R^2}\)（取等），直径 \(=\pi R\)：

<div class="eq">$$\mathrm{Ric}=\frac{n-1}{R^2},\qquad \mathrm{diam}(S^n(R))=\pi R$$</div>

<div class="keybox">$$\boxed{\mathrm{diam}(S^n(R))=\pi R\ \text{达到 Bonnet–Myers 上界}}$$</div>

<h4>刚性</h4>
球面是 Bonnet–Myers 直径界的「饱和」例子——取等号时流形等距于半径 \(R\) 的球面。

<div class="memobox"><strong>关键词：</strong>\(S^n(R)\) 达到直径界 \(\pi R\)，是 Bonnet–Myers 的刚性情形。</div>`,
    1: L`<h4>目标</h4>
实射影空间 \(\mathbb{RP}^n\) 验证 Bonnet–Myers 的有限基本群结论。

<h4>第一步：Ricci 与球面相同</h4>
\(\mathbb{RP}^n\) 是 \(S^n\) 的对径商，Ricci 曲率与 \(S^n\) 相同：\(\mathrm{Ric}=\frac{n-1}{R^2}\)。

<h4>第二步：直径更小，基本群有限</h4>
\(\mathbb{RP}^n\) 直径 \(=\frac{\pi R}{2}\)（对径点被粘合，最大距离减半），基本群 \(\pi_1(\mathbb{RP}^n)=\mathbb Z_2\)：

<div class="keybox">$$\boxed{\mathrm{diam}(\mathbb{RP}^n)=\frac{\pi R}{2},\quad\pi_1(\mathbb{RP}^n)=\mathbb Z_2}$$</div>

<h4>验证定理</h4>
直径 \(\frac{\pi R}{2}\le\pi R\) 满足上界；基本群 \(\mathbb Z_2\) 有限，验证了 Bonnet–Myers 的「基本群有限」结论。

<div class="memobox"><strong>关键词：</strong>\(\mathbb{RP}^n\) 直径 \(\pi R/2\)、\(\pi_1=\mathbb Z_2\)，验证 Bonnet–Myers 有限性。</div>`,
    2: L`<h4>目标</h4>
说明「Ricci 正」≠「紧致」——需要一致下界。

<h4>第一步：反例</h4>
存在 Ricci 曲率为正但<strong>非紧致</strong>的流形，如 \(\mathbb R^2\) 上的旋转抛物面（Ricci 处处 \(>0\)，但 Ricci 下界趋于 \(0\)）。

<h4>第二步：关键区别</h4>
Bonnet–Myers 需要的是<strong>一致</strong>正下界 \(\mathrm{Ric}\ge\frac{n-1}{R^2}>0\)，而不是「点点正」：

<div class="warnbox">「\(\mathrm{Ric}>0\) 点点正」⟹ 可以非紧致；「\(\mathrm{Ric}\ge c>0\) 一致正」⟹ 紧致、直径有界。</div>

<div class="keybox">$$\boxed{\mathrm{Ric}>0\ \nRightarrow\ \text{紧致};\quad \mathrm{Ric}\ge c>0\ \Rightarrow\ \text{紧致}}$$</div>

<div class="memobox"><strong>关键词：</strong>Ricci 一致正下界才保证紧致；点点正（如抛物面）可以非紧致。</div>`
  },
  "r52": {
    0: L`<h4>目标</h4>
平坦环面崩塌的 GH 极限。

<h4>第一步：崩塌过程</h4>
取平坦环面 \(T^2(R,r)\)（大半径 \(R\) 固定，小半径 \(r\to0\)）。当 \(r\to0\)，环面「退化」成一个方向消失：

<div class="eq">$$T^2(R,r)\ \xrightarrow{\text{GH}}\ S^1(R)$$</div>

<h4>第二步：维数崩塌</h4>
极限从二维崩塌到一维。这是 GH 收敛区别于光滑收敛的关键——极限空间可以降维：

<div class="keybox">$$\boxed{\dim\ \text{从 }2\ \text{崩塌到 }1}$$</div>

<h4>意义</h4>
崩塌（collapse）现象说明 GH 极限不保持维数，这是理解 Ricci 流奇点和极限空间结构的核心困难。

<div class="memobox"><strong>关键词：</strong>环面小半径 →0 ⟹ GH 极限是圆 \(S^1\)，维数从 2 崩塌到 1。</div>`,
    1: L`<h4>目标</h4>
Perelman 的 \(W\)-泛函单调性在 Ricci 流 GH 极限分析中的作用。

<h4>第一步：\(W\)-泛函</h4>
Perelman 引入 \(W\)-泛函（熵），它沿 Ricci 流<strong>单调</strong>。单调性提供了 Ricci 流的「能量」，用于控制奇点形成。

<h4>第二步：分析 GH 极限</h4>
\(W\)-泛函单调性 ⟹ Ricci 流奇点可被「手术」（surgery）处理，手术后的流形序列的 GH 极限可分析。

<div class="keybox">$$\boxed{W\text{-泛函单调性}\ \Longrightarrow\ \text{Ricci 流奇点可控}\ \Longrightarrow\ \text{分析 GH 极限}}$$</div>

<h4>意义</h4>
这是 Perelman 证明 Poincaré 猜想的关键工具之一——用单调量控制 Ricci 流的长期行为与极限。

<div class="memobox"><strong>关键词：</strong>Perelman \(W\)-泛函单调性，控制 Ricci 流奇点与 GH 极限。</div>`,
    2: L`<h4>目标</h4>
Cheeger–Colding 理论：Ricci 下界序列的 GH 极限结构。

<h4>第一步：Ricci 下界序列的极限</h4>
考虑 \(\mathrm{Ric}\ge-(n-1)\) 的流形序列，其 GH 极限是<strong>度量空间</strong>（可能非光滑、带奇点）。

<h4>第二步：几乎处处可微结构</h4>
Cheeger–Colding 证明：这样的极限空间<strong>几乎处处</strong>有切锥，是（reifenberg 意义下的）Lipschitz 流形，具有可测的黎曼度量结构。

<div class="keybox">$$\boxed{\mathrm{Ric}\text{ 下界序列的 GH 极限}=\text{几乎处处可微的 Lipschitz 流形}}$$</div>

<h4>意义</h4>
这把经典黎曼几何推广到奇异空间，是 Ricci 曲率下界极限空间理论（Cheeger–Colding 理论）的核心，支撑了后来对 Ricci 极限的深入研究。

<div class="memobox"><strong>关键词：</strong>Ricci 下界 GH 极限 = 几乎处处可微的 Lipschitz 流形（Cheeger–Colding）。</div>`
  },
  "t1": {
    0: L`<h4>目标</h4>
证明 \(\mathbb R^n\) 可缩——同伦等价于一个点。

<h4>第一步：写出同伦</h4>
恒等映射 \(\mathrm{id}:\mathbb R^n\to\mathbb R^n\) 与常值映射 \(c_0(x)=0\) 之间的同伦为

<div class="eq">$$H(x,t)=(1-t)x$$</div>

<h4>第二步：验证端点</h4>
\(H(x,0)=x=\mathrm{id}(x)\)，\(H(x,1)=0=c_0(x)\)，且连续。

<div class="keybox">$$\boxed{\mathbb R^n\simeq\{\ast\},\quad \text{同伦 } H(x,t)=(1-t)x}$$</div>

<div class="memobox"><strong>关键词：</strong>可缩空间 = 同伦等价于单点，\(\mathbb R^n\) 是典型。</div>`,
    1: L`<h4>目标</h4>
说明 \(S^1\) 与穿孔平面 \(\mathbb R^2\setminus\{0\}\) 同伦等价。

<h4>第一步：两个方向</h4>
包含映射 \(i:S^1\hookrightarrow\mathbb R^2\setminus\{0\}\) 与径向投影

<div class="eq">$$r(x)=\frac{x}{|x|}$$</div>

<h4>第二步：验证同伦逆</h4>
\(r\circ i=\mathrm{id}_{S^1}\)；\(i\circ r\simeq\mathrm{id}\)（沿射线方向收缩），同伦为 \(H(x,t)=(1-t)x+t\frac{x}{|x|}\)。

<div class="keybox">$$\boxed{S^1\simeq\mathbb R^2\setminus\{0\}}$$</div>

<div class="memobox"><strong>关键词：</strong>穿孔平面沿径向收缩到 \(S^1\)。</div>`,
    2: L`<h4>目标</h4>
说明 Möbius 带与 \(S^1\) 同伦等价但不同胚。

<h4>第一步：沿中心线收缩</h4>
Möbius 带可沿其中心圆<strong>形变收缩</strong>到 \(S^1\)，故两者同伦等价。

<h4>第二步：不同胚</h4>
但 Möbius 带是<strong>带边流形</strong>，\(S^1\) 是闭流形，边界性质不同，故不同胚。这体现了「同伦等价比同胚弱」。

<div class="keybox">$$\boxed{\text{Möbius 带}\simeq S^1,\quad \text{但不同胚}}$$</div>

<div class="memobox"><strong>关键词：</strong>同伦等价允许「压缩维度」，同胚不允许。</div>`
  },
  "t2": {
    0: L`<h4>目标</h4>
理解 \(\pi_1(S^1)\cong\mathbb Z\) 的几何含义。

<h4>第一步：绕数</h4>
\(S^1\) 上的每个环路同伦类由「绕数」唯一确定——正向绕一圈记 \(1\)，反向记 \(-1\)。

<h4>第二步：群结构</h4>
绕数相加对应环路拼接，故

<div class="keybox">$$\boxed{\pi_1(S^1)\cong\mathbb Z}$$</div>

生成元是绕一圈的环路，对应整数 \(1\)。

<div class="memobox"><strong>关键词：</strong>\(\pi_1(S^1)=\mathbb Z\)，绕数刻画同伦类。</div>`,
    1: L`<h4>目标</h4>
高维球面 \(S^n\)（\(n\ge 2\)）的基本群平凡。

<h4>第一步：环路可收缩</h4>
\(n\ge 2\) 时，\(S^n\) 上的任何环路都能连续缩为一点（高维有足够的「空间」避开障碍）。

<h4>第二步：基本群平凡</h4>

<div class="keybox">$$\boxed{\pi_1(S^n)=\{e\},\qquad n\ge 2}$$</div>

<div class="memobox"><strong>关键词：</strong>高维球面单连通，基本群平凡。</div>`,
    2: L`<h4>目标</h4>
理解环面 \(T^2\) 的基本群。

<h4>第一步：两个生成环</h4>
\(T^2\) 有赤道方向与经线方向两个独立环路，记生成元 \(a,b\)。

<h4>第二步：群结构</h4>
两个方向独立且可交换，故

<div class="keybox">$$\boxed{\pi_1(T^2)\cong\mathbb Z\times\mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>\(\pi_1(T^2)=\mathbb Z^2\)，由两个独立环生成。</div>`
  },
  "t3": {
    0: L`<h4>目标</h4>
计算有限图的基本群。

<h4>第一步：图是一维复形</h4>
有限连通图 \(G\) 有 \(V\) 个顶点、\(E\) 条边，其 Euler 示性数 \(\chi(G)=V-E\)。

<h4>第二步：基本群是自由群</h4>
把生成树收缩掉，剩下的每条「多余边」贡献一个自由生成元，故

<div class="keybox">$$\boxed{\pi_1(G)\cong F_{1-\chi(G)}}$$</div>

秩为 \(E-V+1=1-\chi(G)\)。

<div class="memobox"><strong>关键词：</strong>图的基本群是自由群，秩 = 边数 − 顶点数 + 1。</div>`,
    1: L`<h4>目标</h4>
用 van Kampen 定理计算 \(\pi_1(T^2)\)。

<h4>第一步：粘合正方形</h4>
环面由正方形对边粘合得到，生成元 \(a\)（水平边）、\(b\)（竖直边）。

<h4>第二步：关系</h4>
沿边界的粘合给出关系 \(aba^{-1}b^{-1}=1\)，故

<div class="keybox">$$\boxed{\pi_1(T^2)\cong\langle a,b\mid aba^{-1}b^{-1}=1\rangle\cong\mathbb Z\times\mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>环面基本群 = 两个交换生成元，关系是交换子平凡。</div>`,
    2: L`<h4>目标</h4>
计算 Klein 瓶的基本群。

<h4>第一步：粘合与关系</h4>
Klein 瓶由正方形对边粘合，但一条边反向，给出关系

<div class="eq">$$aba^{-1}b=1$$</div>

<h4>第二步：非交换群</h4>

<div class="keybox">$$\boxed{\pi_1(K)\cong\langle a,b\mid aba^{-1}b=1\rangle}$$</div>

这个群<strong>非交换</strong>，与环面 \(\mathbb Z^2\) 本质不同。

<div class="memobox"><strong>关键词：</strong>Klein 瓶基本群非交换，区别于环面的 \(\mathbb Z^2\)。</div>`
  },
  "t4": {
    0: L`<h4>目标</h4>
认识万有覆叠 \(\mathbb R\to S^1\)。

<h4>第一步：覆叠映射</h4>

<div class="eq">$$p(t)=e^{2\pi it}$$</div>

<h4>第二步：纤维与变换群</h4>
纤维 \(p^{-1}(1)=\mathbb Z\)，覆叠变换群是平移 \(\mathbb Z\)。\(\mathbb R\) 单连通，故是万有覆叠。

<div class="keybox">$$\boxed{\mathbb R\xrightarrow{e^{2\pi it}}S^1,\quad \text{万有覆叠}}$$</div>

<div class="memobox"><strong>关键词：</strong>\(\mathbb R\to S^1\) 是万有覆叠，纤维 \(\mathbb Z\)。</div>`,
    1: L`<h4>目标</h4>
认识 \(S^n\to RP^n\) 的二重覆叠。

<h4>第一步：对径等同</h4>
\(RP^n=S^n/\{\pm 1\}\)，商映射 \(p(x)=[x]\) 是对径等同。

<h4>第二步：二重覆叠</h4>
每点纤维有两个点，覆叠变换群为 \(\mathbb Z/2\)。

<div class="keybox">$$\boxed{S^n\xrightarrow{\text{对径}}RP^n,\quad \text{二重覆叠},\ \text{变换群}\ \mathbb Z_2}$$</div>

<div class="memobox"><strong>关键词：</strong>\(S^n\to RP^n\) 是二重覆叠，变换群 \(\mathbb Z_2\)。</div>`,
    2: L`<h4>目标</h4>
理解 \(n\) 重覆叠 \(S^1\to S^1\)。

<h4>第一步：映射</h4>

<div class="eq">$$p(z)=z^n$$</div>

<h4>第二步：纤维与诱导同态</h4>
纤维有 \(n\) 个点。诱导同态 \(p_*:\pi_1(S^1)\cong\mathbb Z\to\mathbb Z\) 是乘 \(n\)：

<div class="keybox">$$\boxed{p_*(k)=nk,\qquad p_*(\pi_1(S^1))=n\mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>\(z\mapsto z^n\) 诱导乘 \(n\) 的同态。</div>`
  },
  "t5": {
    0: L`<h4>目标</h4>
分类 \(S^1\) 的所有覆叠。

<h4>第一步：子群</h4>
\(\pi_1(S^1)\cong\mathbb Z\) 的子群为 \(n\mathbb Z\)（\(n=0,1,2,\dots\)）。

<h4>第二步：对应覆叠</h4>
\(n>0\) 对应 \(n\) 重覆叠 \(z\mapsto z^n\)；\(n=0\)（平凡子群）对应万有覆叠 \(\mathbb R\to S^1\)。

<div class="keybox">$$\boxed{n\mathbb Z\ \longleftrightarrow\ z\mapsto z^n,\qquad 0\ \longleftrightarrow\ \mathbb R\to S^1}$$</div>

<div class="memobox"><strong>关键词：</strong>\(S^1\) 的覆叠由整数 \(n\) 完全分类。</div>`,
    1: L`<h4>目标</h4>
理解环面的覆叠。

<h4>第一步：子群格</h4>
\(\pi_1(T^2)\cong\mathbb Z\times\mathbb Z\) 的子群构成一个格，对应各种覆叠环面。

<h4>第二步：万有覆叠</h4>
万有覆叠是

<div class="keybox">$$\boxed{\mathbb R^2\to T^2}$$</div>

<div class="memobox"><strong>关键词：</strong>环面万有覆叠是 \(\mathbb R^2\)。</div>`,
    2: L`<h4>目标</h4>
认识 8 字形 \(S^1\vee S^1\) 的覆叠。

<h4>第一步：自由群</h4>
\(\pi_1(S^1\vee S^1)\cong F_2\)（两生成元自由群）。

<h4>第二步：丰富的子群</h4>
自由群的子群极其丰富，对应各种图作为覆叠空间。

<div class="keybox">$$\boxed{F_2\ \text{的子群}\ \longleftrightarrow\ \text{各种图覆叠}}$$</div>

<div class="memobox"><strong>关键词：</strong>8 字形的覆叠对应自由群 \(F_2\) 的子群。</div>`
  },
  "t6": {
    0: L`<h4>目标</h4>
计算楔和 \(S^1\vee S^1\) 的基本群。

<h4>第一步：取开邻域</h4>
取 \(U,V\) 为两个圆各自的加厚开邻域，交集 \(U\cap V\) 可缩。

<h4>第二步：van Kampen</h4>
\(\pi_1(U)\cong\mathbb Z,\ \pi_1(V)\cong\mathbb Z\)，交集平凡，故

<div class="keybox">$$\boxed{\pi_1(S^1\vee S^1)\cong\mathbb Z*\mathbb Z\cong F_2}$$</div>

<div class="memobox"><strong>关键词：</strong>楔和的基本群是两个 \(\mathbb Z\) 的自由积 \(F_2\)。</div>`,
    1: L`<h4>目标</h4>
用 van Kampen 定理计算环面。

<h4>第一步：切开</h4>
沿子午线与赤道切开环面，交集是环带（基本群 \(\mathbb Z\)）。

<h4>第二步：关系</h4>
两个生成元 \(a,b\) 满足交换关系 \(aba^{-1}b^{-1}=1\)。

<div class="keybox">$$\boxed{\pi_1(T^2)\cong\langle a,b\mid aba^{-1}b^{-1}\rangle\cong\mathbb Z\times\mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>环面 = 两个圆环的自由积模交换关系。</div>`,
    2: L`<h4>目标</h4>
写出亏格 \(g\) 曲面 \(\Sigma_g\) 的基本群。

<h4>第一步：标准生成元</h4>
\(\Sigma_g\) 有 \(2g\) 个生成元 \(a_1,b_1,\dots,a_g,b_g\)。

<h4>第二步：唯一关系</h4>
唯一的粘合关系是乘积

<div class="eq">$$\prod_{i=1}^g [a_i,b_i]=1$$</div>

<h4>第三步：基本群</h4>

<div class="keybox">$$\boxed{\pi_1(\Sigma_g)\cong\Big\langle a_1,b_1,\dots,a_g,b_g\ \Big|\ \prod_{i=1}^g[a_i,b_i]=1\Big\rangle}$$</div>

<div class="memobox"><strong>关键词：</strong>亏格 \(g\) 曲面有 \(2g\) 生成元、1 个关系。</div>`
  },
  "t7": {
    0: L`<h4>目标</h4>
用基本群证明代数基本定理。

<h4>第一步：反设多项式无根</h4>
设 \(p(z)\) 无根，对半径 \(r\) 定义映射

<div class="eq">$$f_r(z)=\frac{p(rz)}{|p(rz)|}:S^1\to S^1$$</div>

<h4>第二步：比较绕数</h4>
\(r\to 0\) 时 \(f_r\) 近似常值（绕数 \(0\)）；\(r\to\infty\) 时 \(f_r(z)\approx z^{\deg p}/|z^{\deg p}|\)（绕数 \(\deg p\)）。绕数连续变化必为常数，矛盾（除非 \(\deg p=0\)）。

<div class="keybox">$$\boxed{\text{非常数多项式必有复根}}$$</div>

<div class="memobox"><strong>关键词：</strong>绕数从 0 连续变到 \(\deg p\)，除非有根否则矛盾。</div>`,
    1: L`<h4>目标</h4>
理解毛球定理：\(S^2\) 上无处处非零切向量场。

<h4>第一步：反设</h4>
若有处处非零切向量场，则每点的切向量可归一化，给出映射 \(S^2\to S^1\) 于每条纤维，进而构造与基本群/同伦矛盾的结构。

<h4>第二步：矛盾</h4>

<div class="keybox">$$\boxed{S^2\ \text{上不存在处处非零的连续切向量场}}$$</div>

<div class="memobox"><strong>关键词：</strong>「毛球」总有一根毛竖不起来（必有零点）。</div>`,
    2: L`<h4>目标</h4>
证明 \(\mathbb R^2\not\cong\mathbb R^3\)。

<h4>第一步：去掉一点</h4>
若同胚，则去掉一点后仍同胚：\(\mathbb R^2\setminus\{0\}\cong\mathbb R^3\setminus\{0\}\)。

<h4>第二步：比较基本群</h4>
\(\pi_1(\mathbb R^2\setminus\{0\})=\mathbb Z\)，而 \(\pi_1(\mathbb R^3\setminus\{0\})=\{e\}\)（高维穿孔仍单连通）。矛盾。

<div class="keybox">$$\boxed{\mathbb R^m\cong\mathbb R^n\ \Longleftrightarrow\ m=n}$$</div>

<div class="memobox"><strong>关键词：</strong>去掉一点后基本群不同，故维数不同。</div>`
  },
  "t8": {
    0: L`<h4>目标</h4>
穿孔平面形变收缩到 \(S^1\)。

<h4>第一步：径向投影</h4>
映射

<div class="eq">$$r(x)=\frac{x}{|x|}$$</div>

<h4>第二步：强形变收缩</h4>
\(r\) 是强形变收缩（保持 \(S^1\) 不动），故

<div class="keybox">$$\boxed{\mathbb R^2\setminus\{0\}\simeq S^1,\quad \pi_1=\mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>径向投影是穿孔平面到 \(S^1\) 的强形变收缩。</div>`,
    1: L`<h4>目标</h4>
Möbius 带形变收缩到中心圆。

<h4>第一步：中心圆周</h4>
Möbius 带的中心线是一条 \(S^1\)，整个带可「压」到它上面。

<h4>第二步：基本群</h4>

<div class="keybox">$$\boxed{\text{Möbius 带}\simeq S^1,\quad \pi_1\cong\mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>Möbius 带压到中心圆，基本群 \(\mathbb Z\)。</div>`,
    2: L`<h4>目标</h4>
\(\mathbb R^n\) 形变收缩到原点。

<h4>第一步：线性收缩</h4>
同伦

<div class="eq">$$H(x,t)=(1-t)x$$</div>

<h4>第二步：可缩空间</h4>

<div class="keybox">$$\boxed{\mathbb R^n\simeq\{\ast\}}$$</div>

<div class="memobox"><strong>关键词：</strong>\(\mathbb R^n\) 可缩，同伦等价于单点。</div>`
  },
  "t9": {
    0: L`<h4>目标</h4>
\(S^1\) 的最简三角剖分。

<h4>第一步：三角形边界</h4>
\(S^1\) 可剖分为 3 条边、3 个顶点——即一个三角形的边界。

<h4>第二步：验证</h4>
三角形的三条边首尾相接、无交叉，同胚于圆周。

<div class="keybox">$$\boxed{S^1:\ 3\text{ 顶点},\ 3\text{ 边}}$$</div>

<div class="memobox"><strong>关键词：</strong>\(S^1\) 最简剖分是三角形边界。</div>`,
    1: L`<h4>目标</h4>
环面 \(T^2\) 的最小三角剖分。

<h4>第一步：最小剖分</h4>
\(T^2\) 最小需 14 个三角形、7 个顶点、21 条边。

<h4>第二步：与同调的关系</h4>
最小剖分的规模由同调群结构约束（需足够的三角形生成 \(H_1=\mathbb Z^2\)）。

<div class="keybox">$$\boxed{T^2:\ 7\text{ 顶点},\ 21\text{ 边},\ 14\text{ 面}}$$</div>

<div class="memobox"><strong>关键词：</strong>环面最小剖分 14 个三角形。</div>`,
    2: L`<h4>目标</h4>
射影平面 \(RP^2\) 的最小三角剖分。

<h4>第一步：最小剖分</h4>
\(RP^2\) 最小剖分需 10 顶点、27 边、18 面。

<h4>第二步：扭转的来源</h4>
其同调群含扭转 \(H_1(RP^2)=\mathbb Z/2\)，扭转需要更复杂的剖分结构来体现。

<div class="keybox">$$\boxed{RP^2:\ 10\text{ 顶点},\ 27\text{ 边},\ 18\text{ 面}}$$</div>

<div class="memobox"><strong>关键词：</strong>\(RP^2\) 最小剖分，同调含 \(\mathbb Z/2\) 扭转。</div>`
  },
  "t10": {
    0: L`<h4>目标</h4>
球面 \(S^2\) 的同调群。

<h4>第一步：各维同调</h4>

<div class="eq">$$H_0(S^2)=\mathbb Z,\quad H_1(S^2)=0,\quad H_2(S^2)=\mathbb Z$$</div>

<h4>第二步：解释</h4>
一个二维洞（空腔），没有一维洞（无「环」）。

<div class="keybox">$$\boxed{H_*(S^2)=\mathbb Z,\ 0,\ \mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>\(S^2\) 有一个二维洞、无一维洞。</div>`,
    1: L`<h4>目标</h4>
环面 \(T^2\) 的同调群。

<h4>第一步：各维同调</h4>

<div class="eq">$$H_0(T^2)=\mathbb Z,\quad H_1(T^2)=\mathbb Z^2,\quad H_2(T^2)=\mathbb Z$$</div>

<h4>第二步：解释</h4>
两个独立的一维洞（赤道与经线），一个二维洞（内部空腔）。

<div class="keybox">$$\boxed{H_*(T^2)=\mathbb Z,\ \mathbb Z^2,\ \mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>环面有两个一维洞、一个二维洞。</div>`,
    2: L`<h4>目标</h4>
射影平面 \(RP^2\) 的同调群（含扭转）。

<h4>第一步：各维同调</h4>

<div class="eq">$$H_0(RP^2)=\mathbb Z,\quad H_1(RP^2)=\mathbb Z/2,\quad H_2(RP^2)=0$$</div>

<h4>第二步：扭转的含义</h4>
存在非平凡的一维闭链，它绕<strong>两圈</strong>才成为边缘——这就是 \(\mathbb Z/2\) 扭转。

<div class="keybox">$$\boxed{H_*(RP^2)=\mathbb Z,\ \mathbb Z/2,\ 0}$$</div>

<div class="memobox"><strong>关键词：</strong>\(RP^2\) 同调含 \(\mathbb Z/2\) 扭转。</div>`
  },
  "t11": {
    0: L`<h4>目标</h4>
可缩空间的同调。

<h4>第一步：可缩 ⟹ 同伦等价于单点</h4>
\(X\simeq\{\ast\}\)，由同伦不变性

<div class="eq">$$H_0(X)=\mathbb Z,\quad H_n(X)=0\ (n>0)$$</div>

<h4>第二步：结论</h4>

<div class="keybox">$$\boxed{X\ \text{可缩}\ \Longrightarrow\ H_*(X)=\mathbb Z,\ 0,\ 0,\dots}$$</div>

<div class="memobox"><strong>关键词：</strong>可缩空间同调平凡（除 \(H_0\)）。</div>`,
    1: L`<h4>目标</h4>
\(S^n\) 的奇异同调。

<h4>第一步：各维同调</h4>

<div class="eq">$$H_0(S^n)=\mathbb Z,\quad H_n(S^n)=\mathbb Z,\quad H_k(S^n)=0\ (k\neq 0,n)$$</div>

<h4>第二步：解释</h4>
球面只有一个 \(n\) 维洞。

<div class="keybox">$$\boxed{H_*(S^n)=\mathbb Z,\ 0,\dots,0,\ \mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>\(S^n\) 只在 0 维与 \(n\) 维有非平凡同调。</div>`,
    2: L`<h4>目标</h4>
同伦等价保持同调。

<h4>第一步：同伦等价</h4>
\(X\simeq Y\) 时，同伦逆映射诱导互逆的同调同态。

<h4>第二步：同构</h4>

<div class="keybox">$$\boxed{X\simeq Y\ \Longrightarrow\ H_n(X)\cong H_n(Y)\ \forall n}$$</div>

<div class="memobox"><strong>关键词：</strong>同调是比同胚更弱的拓扑不变量。</div>`
  },
  "t12": {
    0: L`<h4>目标</h4>
用长正合序列与切除计算 \(S^n\) 的同调。

<h4>第一步：考虑 \((D^n,S^{n-1})\)</h4>
\(D^n\) 可缩，其长正合序列结合切除给出递推关系。

<h4>第二步：递推</h4>
由 \(H_k(D^n,S^{n-1})\cong H_k(S^n)\)（切除）与 \(H_k(D^n)=0\)，得 \(H_k(S^n)\cong H_{k-1}(S^{n-1})\)。

<h4>第三步：归纳</h4>

<div class="keybox">$$\boxed{H_k(S^n)=\mathbb Z\ (k=0,n),\quad 0\ \text{否则}}$$</div>

<div class="memobox"><strong>关键词：</strong>长正合序列 + 切除 ⟹ 递推算出球面同调。</div>`,
    1: L`<h4>目标</h4>
认识 Mayer–Vietoris 序列。

<h4>第一步：来源</h4>
由正合序列与切除定理导出，是 van Kampen 定理的同调版本。

<h4>第二步：形式</h4>
对 \(X=U\cup V\)：

<div class="eq">$$\cdots\to H_n(U\cap V)\to H_n(U)\oplus H_n(V)\to H_n(X)\to H_{n-1}(U\cap V)\to\cdots$$</div>

<h4>第三步：用途</h4>

<div class="keybox">$$\boxed{\text{Mayer–Vietoris：把空间拆两块算同调}}$$</div>

<div class="memobox"><strong>关键词：</strong>同调版的 van Kampen，拆空间算同调。</div>`,
    2: L`<h4>目标</h4>
理解相对同调的计算。

<h4>第一步：长正合序列的作用</h4>
由 \((X,A)\) 的长正合序列，从 \(H_n(A)\) 与 \(H_n(X)\) 可推出 \(H_n(X,A)\) 的信息。

<h4>第二步：典型结果</h4>

<div class="eq">$$\cdots\to H_n(A)\to H_n(X)\to H_n(X,A)\to H_{n-1}(A)\to\cdots$$</div>

<h4>第三步：应用</h4>
相对同调衡量「模掉 \(A\) 后的洞」，在局部化、切除计算中常用。

<div class="keybox">$$\boxed{H_n(X,A)\ \text{衡量「}X\text{ 中除 }A\text{ 外的洞」}}$$</div>

<div class="memobox"><strong>关键词：</strong>相对同调 = 模掉子空间的同调。</div>`
  },
  "t13": {
    0: L`<h4>目标</h4>
用 M–V 序列重新推导 \(S^n\) 的同调。

<h4>第一步：拆成两个半球</h4>
把 \(S^n\) 写成两开半球稍扩大的并：\(U=D^n_+\)、\(V=D^n_-\)，交 \(U\cap V\simeq S^{n-1}\)。代入 M–V 序列

<div class="eq">$$\cdots\to H_k(U\cap V)\to H_k(U)\oplus H_k(V)\to H_k(S^n)\to H_{k-1}(U\cap V)\to\cdots$$</div>

<h4>第二步：半球可缩</h4>
\(U,V\) 都可缩，故 \(k>0\) 时 \(H_k(U)=H_k(V)=0\)。

<h4>第三步：得出递推</h4>
代入得 \(0\to H_k(S^n)\to H_{k-1}(S^{n-1})\to 0\)（\(k>1\)），于是 \(H_k(S^n)\cong H_{k-1}(S^{n-1})\)，再配合 \(H_0(S^n)=\mathbb Z\)、\(H_0(S^0)=\mathbb Z^2\) 归纳。

<div class="keybox">$$\boxed{H_k(S^n)\cong H_{k-1}(S^{n-1}),\quad H_k(S^n)=\begin{cases}\mathbb Z,&k=0,n\\0,&\text{其他}\end{cases}}$$</div>

<div class="memobox"><strong>关键词：</strong>消去两个可缩半球，M–V 直接给出 \(H_k(S^n)\cong H_{k-1}(S^{n-1})\)。</div>`,
    1: L`<h4>目标</h4>
用 M–V 序列算环面 \(T^2\) 的同调。

<h4>第一步：拆成两个圆柱</h4>
\(T^2=U\cup V\)，其中 \(U,V\) 各是圆柱（都 \(\simeq S^1\)），交 \(U\cap V=S^1\sqcup S^1\)。

<h4>第二步：看 \(n=2\) 段</h4>

<div class="eq">$$0\to H_2(T^2)\to H_1(S^1\sqcup S^1)=\mathbb Z^2\to H_1(U)\oplus H_1(V)=\mathbb Z^2\to H_1(T^2)\to H_0(S^1\sqcup S^1)=\mathbb Z^2\to\cdots$$</div>

<h4>第三步：分别提取</h4>
\(H_2\)：\(0\to H_2(T^2)\to\mathbb Z^2\xrightarrow{\text{等值}}\mathbb Z^2\)，故 \(H_2(T^2)=\ker\cong\mathbb Z\)。\(H_1\)：两圆柱的经线与纬线粘合，产生两个独立环。

<div class="keybox">$$\boxed{H_1(T^2)=\mathbb Z^2,\quad H_2(T^2)=\mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>两个圆柱交两个圆周，M–V 独立算出 \(H_1=\mathbb Z^2\)、\(H_2=\mathbb Z\)。</div>`,
    2: L`<h4>目标</h4>
算 Klein 瓶 \(K\) 的同调，看扭转从何而来。

<h4>第一步：同样拆两圆柱</h4>
\(K=U\cup V\)，交 \(U\cap V=S^1\sqcup S^1\)，但粘贴时<strong>一侧反向</strong>，使连接同态产生扭转。

<h4>第二步：\(H_2\) 消失</h4>
反向粘合使没有基本类，故 \(H_2(K)=0\)。

<h4>第三步：\(H_1\) 段的映射</h4>
\(H_1(S^1\sqcup S^1)=\mathbb Z^2\to H_1(U)\oplus H_1(V)=\mathbb Z^2\) 由反向粘合给出映射

<div class="eq">$$(a,b)\mapsto(a+b,\ a-b)$$</div>

余核含 \(\mathbb Z/2\)（因 \(a+b\) 与 \(a-b\) 相差 \(2b\)）。

<div class="keybox">$$\boxed{H_1(K)=\mathbb Z\oplus\mathbb Z/2,\quad H_2(K)=0}$$</div>

<div class="memobox"><strong>关键词：</strong>Klein 瓶反向粘合，\(H_1\) 出现 \(\mathbb Z/2\) 扭转，区别于环面的纯 \(\mathbb Z^2\)。</div>`
  },
  "t14": {
    0: L`<h4>目标</h4>
\(S^n\) 的 CW 结构：一个 \(0\) 胞腔 \(e^0\) 加一个 \(n\) 胞腔 \(e^n\)。

<h4>第一步：商构造</h4>

<div class="eq">$$S^n=D^n/\partial D^n=e^0\cup e^n$$</div>

骨架 \(X^0=\cdots=X^{n-1}=\{点\}\)。

<h4>第二步：胞腔链复形与边界</h4>
\(C_n=\mathbb Z\langle e^n\rangle\)、\(C_0=\mathbb Z\langle e^0\rangle\)、中间为零。边界 \(d_n(e^n)\) 由粘贴映射 \(\varphi:S^{n-1}\to X^{n-1}=\{点\}\)（常值）诱导，度数为 0，故 \(d_n(e^n)=0\)。

<h4>第三步：同调一望即知</h4>

<div class="keybox">$$\boxed{H_n(S^n)=\mathbb Z,\quad H_0(S^n)=\mathbb Z,\quad\text{其余 }0}$$</div>

<div class="memobox"><strong>关键词：</strong>边界平凡，\(S^n\) 的胞腔同调只由两个生成元构成。</div>`,
    1: L`<h4>目标</h4>
\(RP^n\) 的 CW 结构：每维 \(k=0,\dots,n\) 恰一个胞腔 \(e^k\)。

<h4>第一步：粘贴映射</h4>
\(RP^k=RP^{k-1}\cup e^k\)，粘贴映射 \(\varphi:S^{k-1}\to RP^{k-1}\) 是二重覆叠投射（粘合对径点）。

<h4>第二步：边界映射的度数</h4>
合成 \(S^{k-1}\to RP^{k-1}\to S^{k-1}\)（塌缩 \(RP^{k-2}\) 到点）是对径映射，度数为 \(1+(-1)^k\)。故

<div class="eq">$$d_k(e^k)=\bigl(1+(-1)^k\bigr)e^{k-1}=\begin{cases}2e^{k-1},&k\text{ 偶}\\0,&k\text{ 奇}\end{cases}$$</div>

<h4>第三步：提取同调</h4>
交替出现的 \(0\) 与 \(2\) 倍关系，使中间维产生大量 \(\mathbb Z/2\) 扭转。

<div class="keybox">$$\boxed{H_1(RP^n)=\mathbb Z/2\ (n\ge2),\quad H_n(RP^n)=\begin{cases}\mathbb Z,&n\text{ 奇}\\0,&n\text{ 偶}\end{cases}}$$</div>

<div class="memobox"><strong>关键词：</strong>对径粘合度数为 \(1+(-1)^k\)，交替产生 \(\mathbb Z/2\) 扭转。</div>`,
    2: L`<h4>目标</h4>
\(CP^n\) 的 CW 结构：只有偶数维胞腔 \(e^0,e^2,\dots,e^{2n}\)。

<h4>第一步：逐偶维粘胞腔</h4>

<div class="eq">$$CP^n=e^0\cup e^2\cup\cdots\cup e^{2n}$$</div>

<h4>第二步：边界全平凡</h4>
奇维无胞腔，故任何相邻维间无胞腔可映射，所有 \(d_k=0\)。

<h4>第三步：同调等于链群</h4>

<div class="keybox">$$\boxed{H_{2k}(CP^n)=\mathbb Z\ (k=0,\dots,n),\quad H_{2k+1}(CP^n)=0}$$</div>

<div class="memobox"><strong>关键词：</strong>只有偶数维胞腔 ⟹ 边界全零，同调最直白。</div>`
  },
  "t15": {
    0: L`<h4>目标</h4>
完整手算 \(RP^2\) 的胞腔同调。

<h4>第一步：链复形</h4>

<div class="eq">$$0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\xrightarrow{0}\mathbb Z\to 0$$</div>

其中 \(d_2(e^2)=2e^1\)、\(d_1(e^1)=v_0-v_0=0\)。

<h4>第二步：各维同调</h4>

<div class="eq">$$H_2=\ker d_2=0,\quad H_1=\ker d_1/\mathrm{im}\,d_2=\mathbb Z/2\mathbb Z,\quad H_0=\mathbb Z$$</div>

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{H_*(RP^2)=\mathbb Z,\ \mathbb Z/2,\ 0}$$</div>

<div class="memobox"><strong>关键词：</strong>\(H_1=\mathbb Z/2\) 直接由 \(d_2\) 乘 2 得到。</div>`,
    1: L`<h4>目标</h4>
\(CP^n\) 的胞腔同调：只有偶数维胞腔。

<h4>第一步：链复形</h4>
偶数维是 \(\mathbb Z\)、奇维是 \(0\)，且无相邻维胞腔可映射，故所有边界 \(d=0\)。

<h4>第二步：同调即链群</h4>

<div class="eq">$$H_{2k}(CP^n)=\mathbb Z\ (k=0,\dots,n),\quad H_{2k+1}(CP^n)=0$$</div>

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{H_{2k}(CP^n)=\mathbb Z,\quad H_{2k+1}(CP^n)=0}$$</div>

<div class="memobox"><strong>关键词：</strong>无边界算子，同调最直白。</div>`,
    2: L`<h4>目标</h4>
透镜空间 \(L(p,q)\)（\(p\ge2\)、\(\gcd(p,q)=1\)）的胞腔同调。

<h4>第一步：胞腔结构与边界</h4>
胞腔 \(e^0,e^1,e^2,e^3\)，粘贴映射 \(e^2\) 沿 \(z\mapsto z^p\)（度数 \(p\)），\(e^3\) 使 \(d_3=0\)。故

<div class="eq">$$d_2(e^2)=p\,e^1,\quad d_3(e^3)=0$$</div>

<h4>第二步：链复形与同调</h4>
\(H_3=\mathbb Z\)、\(H_2=\ker d_2=0\)、\(H_1=\mathbb Z/\mathrm{im}(\times p)=\mathbb Z/p\)、\(H_0=\mathbb Z\)。

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{H_*(L(p,q))=(\mathbb Z,\ \mathbb Z/p,\ 0,\ \mathbb Z)}$$</div>

<div class="memobox"><strong>关键词：</strong>透镜空间由 \(H_1=\mathbb Z/p\) 区分，\(L(2,1)=RP^3\)。</div>`
  },
  "t16": {
    0: L`<h4>目标</h4>
用 Lefschetz 数证明可缩空间的自映射必有不动点。

<h4>第一步：计算 Lefschetz 数</h4>
可缩空间 \(X\)：\(H_0=\mathbb Q\)、\(H_n=0\ (n>0)\)，故

<div class="eq">$$L(f)=\mathrm{tr}(f_*:H_0\to H_0)$$</div>

<h4>第二步：迹为 1</h4>
\(f\) 把唯一连通分支映到自身，\(f_*=\mathrm{id}\)，故 \(\mathrm{tr}=1\)。

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{L(f)=1\neq0\ \Longrightarrow\ f\ \text{有不动点}}$$</div>

<div class="memobox"><strong>关键词：</strong>可缩空间 \(L=1\) 恒成立，取 \(X=D^n\) 即 Brouwer。</div>`,
    1: L`<h4>目标</h4>
用上同调环证明 Borsuk–Ulam 定理：连续 \(f:S^n\to\mathbb R^n\) 存在 \(x\) 使 \(f(x)=f(-x)\)。

<h4>第一步：反设并构造奇映射</h4>
反设 \(f(x)\neq f(-x)\) 恒成立，定义

<div class="eq">$$g(x)=\frac{f(x)-f(-x)}{|f(x)-f(-x)|}:S^n\to S^{n-1}$$</div>

则 \(g\) 连续且 \(g(-x)=-g(x)\)（奇映射）。

<h4>第二步：下降与环结构矛盾</h4>
奇映射 \(g\) 下降为 \(\bar g:RP^n\to RP^{n-1}\)。但 \(\mathbb Z/2\) 上同调环

<div class="eq">$$H^*(RP^n;\mathbb Z/2)\cong\mathbb Z/2[\alpha]/(\alpha^{n+1})$$</div>

含非零的 \(\alpha^n\)，而 \(H^n(RP^{n-1};\mathbb Z/2)=0\)，矛盾于环结构要求 \(\alpha^n=(\bar g^*\alpha)^n\neq0\)。

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{\exists x\in S^n:\ f(x)=f(-x)}$$</div>

<div class="memobox"><strong>关键词：</strong>奇映射下降导致环结构矛盾；地球某时刻必有对径两点温度气压相同。</div>`,
    2: L`<h4>目标</h4>
用 Poincaré–Hopf 证明毛球定理。

<h4>第一步：指标定理</h4>
紧流形 \(M\) 上孤立奇点向量场指标和 = \(\chi(M)\)。

<h4>第二步：球面示性数</h4>

<div class="eq">$$\chi(S^2)=2\neq0$$</div>

<h4>第三步：矛盾</h4>
若存在处处非零向量场，则无奇点，指标和为 0，与 \(\chi(S^2)=2\) 矛盾。

<div class="keybox">$$\boxed{S^2\ \text{上不存在处处非零的连续切向量场}}$$</div>

<div class="memobox"><strong>关键词：</strong>\(\chi(S^2)=2\neq0\) ⟹ 毛球必有一根毛竖不起来。</div>`
  },
  "t17": {
    0: L`<h4>目标</h4>
\(S^n\) 的上同调。

<h4>第一步：用万有系数定理</h4>
\(H_k(S^n)=\mathbb Z\ (k=0,n)\)、其余 0，无扭转 ⟹ \(H^k=\mathrm{Hom}(H_k,\mathbb Z)\)。

<h4>第二步：各维</h4>

<div class="eq">$$H^0(S^n)=\mathrm{Hom}(\mathbb Z,\mathbb Z)=\mathbb Z,\quad H^n(S^n)=\mathbb Z,\quad\text{其余 }0$$</div>

<h4>第三步：环结构</h4>
\(H^*\) 集中在两维，高维 Cup 积为零。

<div class="keybox">$$\boxed{H^0(S^n)=\mathbb Z,\quad H^n(S^n)=\mathbb Z,\quad\text{其余 }0}$$</div>

<div class="memobox"><strong>关键词：</strong>无扭转 ⟹ 上同调与同调同构。</div>`,
    1: L`<h4>目标</h4>
\(T^2\) 的上同调环。

<h4>第一步：各维上同调</h4>

<div class="eq">$$H^0=\mathbb Z,\quad H^1=\mathrm{Hom}(\mathbb Z^2,\mathbb Z)=\mathbb Z^2,\quad H^2=\mathbb Z$$</div>

<h4>第二步：Cup 积</h4>
取 \(H^1\) 生成元 \(\alpha\)（对偶赤道）、\(\beta\)（对偶经线），\(\alpha\smile\beta\) 是 \(H^2\) 的生成元，且 \(\alpha^2=\beta^2=0\)（分次交换 \(\alpha\smile\alpha=-\alpha\smile\alpha\)）。

<h4>第三步：环结构</h4>

<div class="keybox">$$\boxed{H^*(T^2)\cong\mathbb Z[\alpha,\beta]/(\alpha^2,\beta^2)\quad(\text{外代数})}$$</div>

<div class="memobox"><strong>关键词：</strong>Cup 积把两个 1 维类乘成 2 维类，环是外代数。</div>`,
    2: L`<h4>目标</h4>
\(RP^n\) 的 \(\mathbb Z/2\) 上同调环。

<h4>第一步：生成元</h4>

<div class="eq">$$\alpha\in H^1(RP^n;\mathbb Z/2)\cong\mathbb Z/2$$</div>

<h4>第二步：截断多项式环</h4>
Cup 积 \(\alpha^k\) 生成 \(H^k(RP^n;\mathbb Z/2)\cong\mathbb Z/2\ (k=0,\dots,n)\)，且 \(\alpha^{n+1}=0\)。

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{H^*(RP^n;\mathbb Z/2)\cong\mathbb Z/2[\alpha]/(\alpha^{n+1}),\quad |\alpha|=1}$$</div>

<div class="memobox"><strong>关键词：</strong>\(\mathbb Z/2\) 系数下处处 \(\mathbb Z/2\)，是截断多项式环。</div>`
  },
  "t18": {
    0: L`<h4>目标</h4>
\(CP^n\) 的整数上同调环。

<h4>第一步：生成元</h4>
\(H^{2k}(CP^n)=\mathbb Z\)、奇维 0，取 \(\alpha\) 为 \(H^2\) 的生成元（超平面类），\(|\alpha|=2\)。

<h4>第二步：Cup 积</h4>
\(\alpha^k\) 生成 \(H^{2k}\)，\(\alpha^k\smile\alpha=\alpha^{k+1}\)（\(k<n\)），且 \(\alpha^{n+1}=0\)。

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{H^*(CP^n;\mathbb Z)\cong\mathbb Z[\alpha]/(\alpha^{n+1}),\quad |\alpha|=2}$$</div>

<div class="memobox"><strong>关键词：</strong>截断多项式环，次数比 \(RP^n\) 的 \(\mathbb Z/2\) 环加倍。</div>`,
    1: L`<h4>目标</h4>
\(S^p\times S^q\) 的上同调环。

<h4>第一步：Künneth 公式</h4>

<div class="eq">$$H^*(S^p\times S^q)\cong H^*(S^p)\otimes H^*(S^q)$$</div>

其中 \(H^*(S^p)=\mathbb Z[\alpha]/(\alpha^2)\)、\(H^*(S^q)=\mathbb Z[\beta]/(\beta^2)\)。

<h4>第二步：环结构</h4>

<div class="eq">$$H^*(S^p\times S^q)\cong\mathbb Z[\alpha,\beta]/(\alpha^2,\beta^2)$$</div>

生成元 \(|\alpha|=p\)、\(|\beta|=q\)，\(\alpha\smile\beta\) 生成 \(H^{p+q}\)。

<h4>第三步：分次交换的体现</h4>

<div class="keybox">$$\boxed{H^*(S^p\times S^q)\cong\mathbb Z[\alpha,\beta]/(\alpha^2,\beta^2)}$$</div>

<div class="memobox"><strong>关键词：</strong>\(p,q\) 皆奇时 \(\alpha\smile\beta=-\beta\smile\alpha\)（奇维换号）。</div>`,
    2: L`<h4>目标</h4>
用 Cup 积区分 \(CP^2\) 与 \(S^2\vee S^4\)。

<h4>第一步：同调相同</h4>
两者都有 \(H^0=H^2=H^4=\mathbb Z\)、其余 0，同调无法区分。

<h4>第二步：Cup 积不同</h4>
\(CP^2\)：\(H^*\cong\mathbb Z[\alpha]/(\alpha^3)\)，故

<div class="eq">$$\alpha^2=\beta\neq0\in H^4(CP^2)$$</div>

\(S^2\vee S^4\)：\(H^2\) 来自 \(S^2\)、\(H^4\) 来自 \(S^4\)，二者在并点处「不相交」，故 \(H^2\smile H^2=0\)，即 \(\alpha^2=0\)。

<h4>第三步：不同伦等价</h4>

<div class="keybox">$$\boxed{CP^2:\ \alpha^2\neq0,\qquad S^2\vee S^4:\ \alpha^2=0}$$</div>

<div class="memobox"><strong>关键词：</strong>Cup 积比同调更精细，区分了同调同构但不同伦的空间。</div>`
  },
  "t19": {
    0: L`<h4>目标</h4>
算 \(RP^2\) 的 \(\mathbb Z/2\) 系数同调。

<h4>第一步：已知 \(\mathbb Z\) 系数同调</h4>

<div class="eq">$$H_0(RP^2)=\mathbb Z,\quad H_1(RP^2)=\mathbb Z/2,\quad H_2(RP^2)=0$$</div>

<h4>第二步：应用万有系数定理</h4>

<div class="eq">$$H_n(X;\mathbb Z/2)\cong H_n\otimes\mathbb Z/2\ \oplus\ \mathrm{Tor}(H_{n-1},\mathbb Z/2)$$</div>

<h4>第三步：逐维计算</h4>
\(\mathrm{Tor}(\mathbb Z/2,\mathbb Z/2)=\mathbb Z/2\)，其余 Tor 项为 0。故

<div class="keybox">$$\boxed{H_0=H_1=H_2(RP^2;\mathbb Z/2)=\mathbb Z/2}$$</div>

<div class="memobox"><strong>关键词：</strong>\(\mathbb Z/2\) 系数下各维都是 \(\mathbb Z/2\)，隐藏了整数系数的扭转细节。</div>`,
    1: L`<h4>目标</h4>
有理系数同调只保留自由部分。

<h4>第一步：\(\mathbb Q\) 无扭转</h4>
\(\mathbb Q\) 无扭转 ⟹ \(\mathrm{Tor}(\cdot,\mathbb Q)=0\)，万有系数定理只剩 \(\otimes\mathbb Q\) 项。

<h4>第二步：扭转消失</h4>
\(\mathbb Z/2\otimes\mathbb Q=0\)（扭转群与 \(\mathbb Q\) 张量为 0）。设 \(H_n(X)=\mathbb Z^r\oplus(\text{扭转})\)，则

<div class="eq">$$H_n(X;\mathbb Q)=\mathbb Q^r$$</div>

<h4>第三步：Betti 数</h4>

<div class="keybox">$$\boxed{\mathrm{rank}\,H_n(X;\mathbb Q)=r=b_n(X)}$$</div>

<div class="memobox"><strong>关键词：</strong>有理同调是「无扭转版」，完全由 Betti 数决定。</div>`,
    2: L`<h4>目标</h4>
理解同调与上同调的「错位」：以 \(RP^2\) 为例。

<h4>第一步：应用上同调万有系数定理</h4>

<div class="eq">$$H^n(X;\mathbb Z)\cong\mathrm{Hom}(H_n,\mathbb Z)\oplus\mathrm{Ext}(H_{n-1},\mathbb Z)$$</div>

<h4>第二步：逐维计算</h4>

<div class="eq">$$H^1(RP^2;\mathbb Z)=\mathrm{Hom}(\mathbb Z/2,\mathbb Z)=0$$</div>

<div class="eq">$$H^2(RP^2;\mathbb Z)=\mathrm{Hom}(0,\mathbb Z)\oplus\mathrm{Ext}(\mathbb Z/2,\mathbb Z)=\mathbb Z/2$$</div>

<h4>第三步：对比同调</h4>
\(H_1=\mathbb Z/2\) 但 \(H^1=0\)；\(H_2=0\) 但 \(H^2=\mathbb Z/2\)——扭转「搬运」了一维。

<div class="keybox">$$\boxed{H^1(RP^2)=0\neq H_1=\mathbb Z/2,\quad H^2(RP^2)=\mathbb Z/2\neq H_2=0}$$</div>

<div class="memobox"><strong>关键词：</strong>\(\mathrm{Ext}(H_{n-1},\mathbb Z)\) 把 \(n-1\) 维扭转搬到 \(n\) 维上同调。</div>`
  },
  "t20": {
    0: L`<h4>目标</h4>
用 Künneth 算 \(T^2=S^1\times S^1\) 的同调。

<h4>第一步：因子同调</h4>

<div class="eq">$$H(S^1)=(\mathbb Z,\ \mathbb Z)$$</div>

<h4>第二步：逐维张量</h4>

<div class="eq">$$H_1=H_1\otimes H_0\oplus H_0\otimes H_1=\mathbb Z\otimes\mathbb Z\oplus\mathbb Z\otimes\mathbb Z=\mathbb Z\oplus\mathbb Z$$</div>

<div class="eq">$$H_2=H_1\otimes H_1=\mathbb Z,\quad H_0=H_0\otimes H_0=\mathbb Z$$</div>

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{H(T^2)=(\mathbb Z,\ \mathbb Z^2,\ \mathbb Z)}$$</div>

<div class="memobox"><strong>关键词：</strong>两个 \(S^1\) 各贡献一个 \(H_1\) 生成元，张量积得 \(H_2\)。</div>`,
    1: L`<h4>目标</h4>
\(S^p\times S^q\) 的上同调环。

<h4>第一步：Künneth 各维</h4>

<div class="eq">$$H^p=\mathbb Z,\quad H^q=\mathbb Z,\quad H^{p+q}=\mathbb Z,\quad H^0=\mathbb Z$$</div>

<h4>第二步：环结构</h4>

<div class="eq">$$H^*(S^p\times S^q)\cong\mathbb Z[\alpha]/(\alpha^2)\otimes\mathbb Z[\beta]/(\beta^2)$$</div>

乘法 \((\alpha\otimes1)\smile(1\otimes\beta)=\alpha\otimes\beta\) 生成 \(H^{p+q}\)，且 \(\alpha^2=\beta^2=0\)。

<h4>第三步：符号</h4>

<div class="keybox">$$\boxed{H^*(S^p\times S^q)\cong\mathbb Z[\alpha,\beta]/(\alpha^2,\beta^2),\quad|\alpha|=p,\ |\beta|=q}$$</div>

<div class="memobox"><strong>关键词：</strong>\(p,q\) 皆奇时 \(\alpha\smile\beta=-\beta\smile\alpha\)；皆偶时 \(\alpha\beta=\beta\alpha\)。</div>`,
    2: L`<h4>目标</h4>
\(RP^2\times S^1\) 的同调（注意 Tor 项）。

<h4>第一步：因子同调</h4>

<div class="eq">$$H(RP^2)=(\mathbb Z,\ \mathbb Z/2,\ 0),\quad H(S^1)=(\mathbb Z,\ \mathbb Z)$$</div>

<h4>第二步：逐维计算</h4>

<div class="eq">$$H_1=H_1(RP^2)\otimes H_0(S^1)\oplus H_0(RP^2)\otimes H_1(S^1)=\mathbb Z/2\oplus\mathbb Z$$</div>

<div class="eq">$$H_2=H_2(RP^2)\otimes H_0\oplus H_1(RP^2)\otimes H_1(S^1)\oplus\mathrm{Tor}(H_0,H_1)=0\oplus(\mathbb Z/2\otimes\mathbb Z)\oplus0=\mathbb Z/2$$</div>

<div class="eq">$$H_3=\mathrm{Tor}(H_1(RP^2),H_1(S^1))=\mathrm{Tor}(\mathbb Z/2,\mathbb Z)=0$$</div>

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{H(RP^2\times S^1)=(\mathbb Z,\ \mathbb Z\oplus\mathbb Z/2,\ \mathbb Z/2,\ 0)}$$</div>

<div class="memobox"><strong>关键词：</strong>Tor 项在 \(H_1,H_2\) 提供扭转修正。</div>`
  },
  "t21": {
    0: L`<h4>目标</h4>
验证 \(S^n\) 的 Poincaré 对偶。

<h4>第一步：已知同调</h4>

<div class="eq">$$H_0(S^n)=\mathbb Z,\quad H_n(S^n)=\mathbb Z,\quad\text{其余 }0$$</div>

<h4>第二步：对偶关系</h4>

<div class="eq">$$H^0(S^n)\cong H_n(S^n)=\mathbb Z,\qquad H^n(S^n)\cong H_0(S^n)=\mathbb Z$$</div>

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{H^0\cong H_n\cong\mathbb Z,\quad H^n\cong H_0\cong\mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>Poincaré 对偶把 0 维与 \(n\) 维对偶。</div>`,
    1: L`<h4>目标</h4>
\(CP^n\)（维数 \(2n\)，可定向）的 Poincaré 对偶。

<h4>第一步：对偶关系</h4>

<div class="eq">$$H^{2k}(CP^n)\cong H_{2n-2k}(CP^n)\cong\mathbb Z\quad(k=0,\dots,n)$$</div>

<h4>第二步：Cup 积的几何含义</h4>

<div class="eq">$$\alpha^k\smile\alpha^{n-k}=\alpha^n=[\mathrm{pt}]\ \text{的对偶}$$</div>

对应子流形 \(CP^k\) 与 \(CP^{n-k}\) 的横截交（一点），生成基本类。

<h4>第三步：验证维数</h4>
\(|\alpha^k|=2k\)、\(|\alpha^{n-k}|=2n-2k\)，和为 \(2n\)，恰当。

<div class="keybox">$$\boxed{H^{2k}(CP^n)\cong H_{2n-2k}(CP^n)\cong\mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>Cup 积体现子流形的相交数。</div>`,
    2: L`<h4>目标</h4>
不可定向流形无整数 Poincaré 对偶：\(RP^2\) 为例。

<h4>第一步：对偶破坏</h4>
\(RP^2\)（维 2，不可定向）：\(H^0=\mathbb Z\) 但 \(H_2=0\)，故

<div class="eq">$$H^0(RP^2)=\mathbb Z\neq H_2(RP^2)=0$$</div>

<h4>第二步：改用 \(\mathbb Z/2\) 系数</h4>
模 2 下「方向」消失，基本类 \([RP^2]\in H_2(RP^2;\mathbb Z/2)\) 存在，对偶恢复

<div class="eq">$$H^k(RP^2;\mathbb Z/2)\cong H_{2-k}(RP^2;\mathbb Z/2)=\mathbb Z/2$$</div>

<h4>第三步：原因</h4>
不可定向 ⟹ 无整系数基本类；模 2 时方向无关，故基本类存在。

<div class="keybox">$$\boxed{H^k(RP^2;\mathbb Z/2)\cong H_{2-k}(RP^2;\mathbb Z/2)=\mathbb Z/2}$$</div>

<div class="memobox"><strong>关键词：</strong>不可定向流形对偶需 mod 2 系数。</div>`
  },
  "t22": {
    0: L`<h4>目标</h4>
\(CP^n\) 的切丛 Chern 类。

<h4>第一步：Euler 序列</h4>

<div class="eq">$$0\to\mathcal O\to\mathcal O(1)^{\oplus(n+1)}\to TCP^n\to 0$$</div>

<h4>第二步：乘法性</h4>
\(c(\mathcal O(1))=1+\alpha\)（\(\alpha\) 是超平面类，\(|\alpha|=2\)），故

<div class="eq">$$c(\mathcal O(1)^{\oplus(n+1)})=(1+\alpha)^{n+1}$$</div>

<h4>第三步：切丛的 Chern 类</h4>
由短正合列乘法性 \(c(TCP^n)\cdot c(\mathcal O)=c(\mathcal O(1)^{\oplus(n+1)})\) 且 \(c(\mathcal O)=1\)。

<div class="keybox">$$\boxed{c(TCP^n)=(1+\alpha)^{n+1},\qquad c_n=(n+1)\alpha^n}$$</div>

<div class="memobox"><strong>关键词：</strong>Chern 类是复向量丛到上同调的示性类。</div>`,
    1: L`<h4>目标</h4>
\(RP^n\) 的全 Stiefel–Whitney 类。

<h4>第一步：重言线丛</h4>

<div class="eq">$$w(RP^n)=(1+\alpha)^{n+1}\in H^*(RP^n;\mathbb Z/2),\quad \alpha\in H^1$$</div>

<h4>第二步：Whitney 乘积公式</h4>
由 \(\gamma\oplus\gamma^\perp=\mathbb R^{n+1}\)（平凡）与 \(w(\gamma)=1+\alpha\)：

<div class="eq">$$w(\gamma)w(\gamma^\perp)=1\ \Longrightarrow\ w(RP^n)=(1+\alpha)^{n+1}\ (\mathrm{mod}\ 2)$$</div>

<h4>第三步：可定向性判别</h4>

<div class="eq">$$w_1(RP^n)=(n+1)\alpha\ (\mathrm{mod}\ 2)=\begin{cases}\alpha,&n\text{ 偶}\\0,&n\text{ 奇}\end{cases}$$</div>

<div class="keybox">$$\boxed{w_1(RP^n)\neq0\iff n\ \text{偶}\iff\text{不可定向}}$$</div>

<div class="memobox"><strong>关键词：</strong>\(w_1\neq0\) 刻画不可定向。</div>`,
    2: L`<h4>目标</h4>
理解 de Rham 同构的核心映射。

<h4>第一步：积分配对</h4>

<div class="eq">$$I(\omega)(\sigma)=\int_\sigma\omega$$</div>

<h4>第二步：Stokes 定理</h4>

<div class="eq">$$I(d\omega)(\sigma)=\int_\sigma d\omega=\int_{\partial\sigma}\omega=\delta I(\omega)(\sigma)$$</div>

<h4>第三步：楔积对应 Cup 积</h4>
Fubini 定理把积分在单纯形前后面分解，故

<div class="keybox">$$\boxed{I(\omega\wedge\eta)=I(\omega)\smile I(\eta)}$$</div>

<div class="memobox"><strong>关键词：</strong>楔积与 Cup 积在 \(I\) 下对应，分析 ↭ 拓扑。</div>`
  },
  "t23": {
    0: L`<h4>目标</h4>
\(\pi_n(S^n)\cong\mathbb Z\)。

<h4>第一步：Hurewicz 定理</h4>
\(S^n\) 是 \((n-1)\) 连通，最低非零同调 \(H_n(S^n)=\mathbb Z\)，故

<div class="eq">$$\pi_n(S^n)\cong H_n(S^n)=\mathbb Z$$</div>

<h4>第二步：Hurewicz 同态即度数</h4>
恒等映射对应基本类 \(h(\mathrm{id})=[S^n]\)，一般

<div class="eq">$$[f]\mapsto f_*([S^n])=\deg(f)\cdot[S^n]$$</div>

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{\pi_n(S^n)\cong\mathbb Z,\quad [f]\mapsto\deg(f)}$$</div>

<div class="memobox"><strong>关键词：</strong>同构由映射度给出，恒等映射对应 1。</div>`,
    1: L`<h4>目标</h4>
\(\pi_3(S^2)\cong\mathbb Z\)（Hopf 纤维化）。

<h4>第一步：Hopf 纤维化</h4>

<div class="eq">$$\eta(z_1,z_2)=\frac{z_1}{z_2}:\ S^3\to\mathbb C P^1=S^2$$</div>

纤维 \(\eta^{-1}(\mathrm{pt})\cong S^1\)。

<h4>第二步：Hopf 不变量</h4>
取 \(S^2\) 上两点 \(p\neq q\)，其逆像 \(\eta^{-1}(p),\eta^{-1}(q)\) 是 \(S^3\) 中互相链结的两个圆（Hopf 链环），链结数为 1。

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{\pi_3(S^2)\cong\mathbb Z,\quad\text{由 Hopf 纤维化 }\eta\text{ 生成}}$$</div>

<div class="memobox"><strong>关键词：</strong>Hopf 不变量 \(H(\eta)=1\)，生成 \(\pi_3(S^2)\)。</div>`,
    2: L`<h4>目标</h4>
\(\pi_{n+1}(S^n)\cong\mathbb Z/2\)（\(n\ge3\)，稳定范围）。

<h4>第一步：Freudenthal 悬挂定理</h4>
对 \(\pi_{n+1}(S^n)\)，稳定范围 \(1\le n-1\)（\(n\ge2\)），悬挂 \(\Sigma\) 是稳定同构。

<h4>第二步：取稳定极限</h4>

<div class="eq">$$\pi_{n+1}(S^n)\cong\pi_{n+2}(S^{n+1})\cong\cdots\cong\pi_1^S$$</div>

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{\pi_{n+1}(S^n)\cong\pi_1^S=\mathbb Z/2\quad(n\ge3)}$$</div>

<div class="memobox"><strong>关键词：</strong>生成元是 Hopf 元的悬挂幂，是第一个稳定有限结果。</div>`
  },
  "t24": {
    0: L`<h4>目标</h4>
Hopf 纤维化 \(S^1\to S^3\to S^2\) 的同伦群。

<h4>第一步：已知</h4>

<div class="eq">$$\pi_k(S^1)=\mathbb Z\ (k=1),\quad 0\ (k\ge2)$$</div>

<h4>第二步：长正合序列的截断</h4>
\(n\ge3\) 时 \(\pi_n(S^1)=\pi_{n-1}(S^1)=0\)，故

<div class="eq">$$0\to\pi_n(S^3)\to\pi_n(S^2)\to0$$</div>

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{\pi_n(S^3)\cong\pi_n(S^2)\quad(n\ge3),\quad\pi_3(S^2)=\mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>纤维 \(S^1\) 高维平凡 ⟹ 长正合序列给出同构。</div>`,
    1: L`<h4>目标</h4>
道路空间纤维化给出「环路空间平移」关系。

<h4>第一步：道路空间纤维化</h4>
\(PX=\{\gamma:[0,1]\to X,\gamma(0)=x_0\}\)，映射 \(\mathrm{ev}_1:\gamma\mapsto\gamma(1)\) 是纤维化，纤维是环路空间

<div class="eq">$$\mathrm{ev}_1^{-1}(x_0)=\Omega X$$</div>

<h4>第二步：\(PX\) 可缩</h4>
\(PX\) 收缩到常道路，故 \(\pi_n(PX)=0\)。

<h4>第三步：由长正合序列</h4>

<div class="keybox">$$\boxed{\pi_n(\Omega X)\cong\pi_{n+1}(X)}$$</div>

<div class="memobox"><strong>关键词：</strong>环路空间把同伦群平移一维。</div>`,
    2: L`<h4>目标</h4>
覆叠空间是高维同伦不变（只改变 \(\pi_1\)）。

<h4>第一步：离散纤维</h4>
覆叠 \(p:\tilde X\to X\) 的纤维 \(F\) 离散，故 \(\pi_n(F)=0\)（\(n\ge1\)）。

<h4>第二步：长正合序列</h4>

<div class="eq">$$0\to\pi_n(\tilde X)\to\pi_n(X)\to0\quad(n\ge2)$$</div>

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{\pi_n(\tilde X)\cong\pi_n(X)\quad(n\ge2)}$$</div>

<div class="memobox"><strong>关键词：</strong>覆叠下高维同伦群不变，只有 \(\pi_1\) 改变。</div>`
  },
  "t25": {
    0: L`<h4>目标</h4>
单连通 + 零同调 ⟹ 可缩。

<h4>第一步：Hurewicz 归纳</h4>
单连通 + 所有 \(H_n=0\)（\(n>0\)）⟹ 所有 \(\pi_n(X)=0\)。

<h4>第二步：弱同伦等价</h4>
含入 \(\{x_0\}\to X\) 诱导所有同伦群同构（都平凡），是弱同伦等价。

<h4>第三步：同伦等价</h4>

<div class="keybox">$$\boxed{\pi_n(X)=0\ \forall n\ \Longrightarrow\ X\simeq\mathrm{pt}}$$</div>

<div class="memobox"><strong>关键词：</strong>单连通 + 零同调 ⟹ 可缩，Whitehead 定理的典型应用。</div>`,
    1: L`<h4>目标</h4>
\(S^n\simeq S^m\iff n=m\)。

<h4>第一步：反设并比较 \(\pi_n\)</h4>
若 \(S^n\simeq S^m\) 且 \(n<m\)，同伦等价诱导

<div class="eq">$$\pi_n(S^n)\cong\pi_n(S^m)$$</div>

<h4>第二步：矛盾</h4>
\(\pi_n(S^n)=\mathbb Z\)，而 \(n<m\) ⟹ \(\pi_n(S^m)=0\)（\(S^m\) 是 \((m-1)\) 连通）。

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{S^n\simeq S^m\iff n=m}$$</div>

<div class="memobox"><strong>关键词：</strong>球面同伦等价当且仅当维数相等。</div>`,
    2: L`<h4>目标</h4>
CW 逼近定理的构造方法。

<h4>第一步：逐维粘贴胞腔</h4>
取 \(Z^0\) 为 \(X\) 的基点集（离散），逐维粘贴胞腔。

<h4>第二步：补满与消核</h4>
对 \(\pi_n\) 的每个生成元粘 \(n\) 胞腔（使诱导 \(\pi_n\) 满），再对 kernel 粘 \((n+1)\) 胞腔（消 kernel）。取极限 \(Z=\operatorname{colim} Z^n\)。

<h4>第三步：弱同伦等价</h4>

<div class="keybox">$$\boxed{\text{任何空间弱同伦等价于 CW 复形}}$$</div>

<div class="memobox"><strong>关键词：</strong>同伦论可归于 CW 范畴。</div>`
  },
  "t26": {
    0: L`<h4>目标</h4>
\(S^n\) 的 Hurewicz 同构即度数。

<h4>第一步：\(S^n\) 是 \((n-1)\) 连通</h4>

<div class="eq">$$h([f])=f_*([S^n])\in H_n(S^n)=\mathbb Z$$</div>

<h4>第二步：恒等映射生成</h4>
\(h(\mathrm{id})=[S^n]\) 是生成元，一般

<div class="eq">$$[f]\mapsto\deg(f)[S^n]$$</div>

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{h:\pi_n(S^n)\xrightarrow{\cong}H_n(S^n)=\mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>Hurewicz 同态就是映射度。</div>`,
    1: L`<h4>目标</h4>
\(T^2\) 的 Hurewicz（\(n=1\)）。

<h4>第一步：\(\pi_1\) 已交换</h4>

<div class="eq">$$\pi_1(T^2)=\mathbb Z\times\mathbb Z$$</div>

<h4>第二步：交换化是自身</h4>
\(\pi_1\) 已交换 ⟹ \(\pi_1^{\mathrm{ab}}=\mathbb Z\times\mathbb Z\)，故

<div class="eq">$$H_1(T^2)\cong\pi_1(T^2)\cong\mathbb Z\times\mathbb Z$$</div>

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{H_1(T^2)\cong\pi_1(T^2)\cong\mathbb Z^2}$$</div>

<div class="memobox"><strong>关键词：</strong>\(\pi_1\) 已交换时 Hurewicz 是直接同构。</div>`,
    2: L`<h4>目标</h4>
8 字形 \(S^1\vee S^1\) 展示交换化。

<h4>第一步：非交换基本群</h4>

<div class="eq">$$\pi_1(S^1\vee S^1)=F_2=\langle a,b\rangle$$</div>

<h4>第二步：交换化</h4>
Hurewicz（\(n=1\)）给出

<div class="eq">$$H_1(S^1\vee S^1)\cong F_2^{\mathrm{ab}}=\mathbb Z\oplus\mathbb Z$$</div>

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{\pi_1=F_2\ (\text{非交换}),\qquad H_1=\mathbb Z^2}$$</div>

<div class="memobox"><strong>关键词：</strong>同调在 \(n=1\) 丢失换位子信息（\(ab\neq ba\) 被消去）。</div>`
  },
  "t27": {
    0: L`<h4>目标</h4>
用长正合序列重推 \(\pi_3(S^2)\cong\mathbb Z\)。

<h4>第一步：Hopf 纤维化长正合序列</h4>

<div class="eq">$$\cdots\to\pi_3(S^1)\to\pi_3(S^3)\to\pi_3(S^2)\to\pi_2(S^1)\to\cdots$$</div>

<h4>第二步：高维平凡</h4>
\(\pi_3(S^1)=0\)、\(\pi_2(S^1)=0\)，故正合段

<div class="eq">$$0\to\pi_3(S^3)\to\pi_3(S^2)\to0$$</div>

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{\pi_3(S^2)\cong\pi_3(S^3)=\mathbb Z}$$</div>

<div class="memobox"><strong>关键词：</strong>连接同态把 \([id_{S^3}]\) 映到 Hopf 纤维化。</div>`,
    1: L`<h4>目标</h4>
\(\pi_4(S^2)\cong\mathbb Z/2\)。

<h4>第一步：道路空间纤维化</h4>

<div class="eq">$$\pi_4(S^2)\cong\pi_3(\Omega S^2)$$</div>

<h4>第二步：Serre 谱序列</h4>
由 \(H_*(\Omega S^2)\) 的信息算得 \(\pi_4(S^2)\cong\mathbb Z/2\)，生成元是 Hopf 元的悬挂 \(\eta\circ\Sigma\eta\)（2 阶元）。

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{\pi_4(S^2)=\mathbb Z/2,\quad\text{生成元 }\eta^2}$$</div>

<div class="memobox"><strong>关键词：</strong>第一个非平凡含挠的球面高阶同伦群。</div>`,
    2: L`<h4>目标</h4>
稳定同伦群 \(\pi_1^S\)。

<h4>第一步：正向极限</h4>

<div class="eq">$$\pi_k^S=\operatorname{colim}_n\pi_{n+k}(S^n)$$</div>

<h4>第二步：Freudenthal 稳定范围</h4>
\(k=1\)：\(\pi_{n+1}(S^n)\) 对 \(n\ge2\) 稳定（\(1\le n-1\)），故

<div class="eq">$$\pi_1^S=\pi_{n+1}(S^n)=\mathbb Z/2\quad(n\ge3)$$</div>

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{\pi_1^S\cong\mathbb Z/2,\quad\text{生成元是 Hopf 元的悬挂类 }\eta}$$</div>

<div class="memobox"><strong>关键词：</strong>\(\pi_{n+1}(S^n)=\mathbb Z/2\)（\(n\ge3\)）稳定，是 Freudenthal 的经典结果。</div>`
  }
};
