// ============================================================
// 定理“详细证明”完整逐步推演
// 结构：{ "节点id": { "定理序号(从0起)": "①②③… 完整证明" } }
// 每步用【思路】（为什么做这步 / 用到哪个定义、引理、公式）
// 与【推导】【计算】（具体代入、化简、代数操作）标注，结尾用【结论】收束。
// 数学用 ^ / _ 记法，构建时自动转成上下标（张量指标自动上下堆叠）。
// ============================================================

const L = String.raw;

module.exports = {
  "r1": {
    0: L`<h4>我们要证明什么</h4>
平面曲线基本定理说：曲率函数 \(\kappa(s)>0\) <strong>完全决定</strong>一条平面曲线的形状——只要给定 \(\kappa\)，曲线就唯一（差一个刚体运动）。这告诉我们，曲率不是曲线的附属信息，而是<strong>刻画形状的完整不变量</strong>。

<h4>第一步：弧长参数化，切线用角度表示</h4>
用弧长 \(s\) 参数化，单位切向量 \(T(s)=\gamma'(s)\) 落在单位圆上，故可写成角度形式 \(T(s)=(\cos\theta(s),\ \sin\theta(s))\)。曲率正是切线方向随弧长转动的速率，因此有核心关系式

<div class="eq">$$\frac{d\theta}{ds}=\kappa(s)$$</div>

<h4>第二步：由曲率积分还原角度，再还原位置</h4>
对上一式积分立即得到角度函数

<div class="eq">$$\theta(s)=\theta(0)+\int_0^s \kappa(u)\,du$$</div>

再用 \(T(s)=(\cos\theta(s),\sin\theta(s))\) 积分一次，曲线被完整恢复为

<div class="eq">$$\gamma(s)=\gamma(0)+\int_0^s T(u)\,du$$</div>

<h4>第三步：唯一性——两个初始条件对应刚体运动</h4>
上述两步里，唯一待定的只有两个「初值」：起始位置 \(\gamma(0)\) 和起始方向 \(\theta(0)\)。改变 \(\gamma(0)\) 相当于把曲线<strong>平移</strong>，改变 \(\theta(0)\) 相当于把曲线<strong>旋转</strong>——平移加旋转恰好就是平面上的刚体运动。因此任意两条曲率同为 \(\kappa\) 的曲线，必然通过某个刚体运动彼此重合。

<div class="keybox">$$\boxed{\kappa(s)\ \text{完全决定平面曲线（差刚体运动）}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>曲率是「方向转动的速率」，积分两次（先得方向、再得位置）就还原整条曲线，两个积分常数正是平移与旋转。</div>`
  },
  "r2": {
    0: L`<h4>我们要证明什么</h4>
空间曲线基本定理：给定 \(\kappa(s)>0\) 与 \(\tau(s)\)，存在唯一（差刚体运动）空间曲线以它们为曲率与挠率。换言之，<strong>曲率 + 挠率</strong> 这对函数是空间曲线的完整形状不变量。

<h4>第一步：建立 Frenet–Serret 标架</h4>
对弧长参数曲线，定义单位切向量 \(T=\gamma'\)、主法向量 \(N=T'/|T'|\)（即 \(T'=\kappa N\)）、副法向量 \(B=T\times N\)。三者构成右手正交标架 \(\{T,N,B\}\)，其变化率满足

<div class="eq">$$\frac{dT}{ds}=\kappa N,\qquad \frac{dN}{ds}=-\kappa T+\tau B,\qquad \frac{dB}{ds}=-\tau N$$</div>

<h4>第二步：写成线性常微分方程组</h4>
把九个分量看作未知函数，这是一个<strong>线性</strong> ODE 组，系数完全由 \(\kappa(s),\tau(s)\) 决定。由常微分方程的 Picard–Lindelöf 存在唯一性定理：给定初始标架 \(\{T(0),N(0),B(0)\}\)，解<strong>唯一存在</strong>。

<h4>第三步：积分恢复曲线</h4>
标架一旦确定，曲线由 \(T=\gamma'\) 积分恢复：

<div class="eq">$$\gamma(s)=\gamma(0)+\int_0^s T(u)\,du$$</div>

<h4>第四步：初始条件 = 刚体运动自由度</h4>
初值 \(\gamma(0)\) 决定空间位置（平移），初始标架 \(\{T(0),N(0),B(0)\}\) 决定空间取向（旋转）。平移加旋转正是 \(\mathbb R^3\) 的刚体运动，故曲线差刚体运动唯一。

<div class="keybox">$$\boxed{(\kappa,\tau)\ \text{完全决定空间曲线（差刚体运动）}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>曲率管「平面内怎么弯」，挠率管「平面怎么转」，两者一起锁死空间曲线的形状。</div>`
  },
  "r3": {
    0: L`<h4>我们要证明什么</h4>
Gauss 绝妙定理（Theorema Egregium）断言：Gauss 曲率 \(K\) 虽然<strong>定义时</strong>用到了曲面在 \(\mathbb R^3\) 中的嵌入（第二基本形式），但<strong>最终结果</strong>只依赖第一基本形式 \(g_{ij}\) 及其导数，因而是<strong>内蕴量</strong>——曲面上的二维居民不离开曲面就能测出 \(K\)。

<h4>第一步：认清「外蕴」的起点</h4>
曲率最自然的定义用形状算子 \(S\)（Weingarten 映射），其特征值 \(\kappa_1,\kappa_2\) 是主曲率，\(K=\kappa_1\kappa_2=\det S\)。而 \(S\) 由第二基本形式与第一基本形式共同决定，看起来是外蕴的。

<h4>第二步：把曲率用 Christoffel 符号写出</h4>
关键一步：第二基本形式可由「法向量方向的二阶变化」表出，而 Christoffel 符号 \(\Gamma^k_{ij}\) 完全由度量 \(g_{ij}\) 决定。将曲率张量 \(R^l_{\ ijk}\) 用 Christoffel 符号及其导数表示后，可证明在二维情形

<div class="eq">$$K=\frac{R^1_{\ 212}}{\det g}$$</div>

<h4>第三步：断言内蕴性</h4>
右边只含 \(g_{ij}\) 及其一、二阶导数，与嵌入方式无关。因此若两个曲面等距（度量相同），它们必然有相同的 \(K\)。

<div class="keybox">$$\boxed{K\ \text{仅由第一基本形式决定，是等距不变量}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>「Gauss 绝妙定理」= 曲率看起来是外蕴的，算出来却全是内蕴的。</div>`
  },
  "r4": {
    0: L`<h4>我们要证明什么</h4>
等距不变性定理：若两个黎曼流形等距，则它们的曲率张量、截面曲率、Ricci 曲率、标量曲率<strong>一一对应相等</strong>。核心思想是——曲率是「度量张量的二阶导数信息」，等距保度量，故必保曲率。

<h4>第一步：等距保度量</h4>
等距映射 \(F\) 满足拉回度量等于原度量：\(F^*h=g\)，即在坐标下 \(h_{ij}\circ F=g_{ij}\)。度量的所有信息在等距下不变。

<h4>第二步：曲率由度量逐级构造</h4>
Christoffel 符号 \(\Gamma^k_{ij}=\tfrac12 g^{kl}(\partial_i g_{jl}+\partial_j g_{il}-\partial_l g_{ij})\) 完全由度量及其一阶导决定；曲率张量

<div class="eq">$$R^l_{\ ijk}=\partial_i\Gamma^l_{jk}-\partial_j\Gamma^l_{ik}+\Gamma^m_{jk}\Gamma^l_{im}-\Gamma^m_{ik}\Gamma^l_{jm}$$</div>

由 Christoffel 符号及其一阶导决定，即由度量的<strong>二阶导</strong>决定。

<h4>第三步：等距下逐级保持</h4>
因为度量在等距下不变，其导数也不变，故 \(\Gamma\)、\(R\) 均不变；缩并得到的 Ricci 曲率、标量曲率，以及截面曲率，也都在等距下不变。

<div class="keybox">$$\boxed{F^*h=g\ \Longrightarrow\ \text{所有曲率量对应相等}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>等距保度量 ⟹ 保度量的一切导数 ⟹ 保曲率。</div>`
  },
  "r5": {
    0: L`<h4>我们要证明什么</h4>
全局 Gauss–Bonnet 定理：紧致定向闭曲面 \(M\) 上，Gauss 曲率的总积分等于 \(2\pi\) 乘以 Euler 示性数。它把<strong>局部微分几何量</strong>（曲率积分）与<strong>全局拓扑不变量</strong>（Euler 示性数）绑在一起。

<h4>第一步：三角剖分，用局部公式</h4>
把 \(M\) 剖成若干测地三角形 \(\Delta\)。对每个三角形，局部 Gauss–Bonnet 公式给出

<div class="eq">$$\int_{\Delta}K\,dA+\sum_{\text{顶点}}(\pi-\alpha_i)-\pi=0$$</div>

其中 \(\alpha_i\) 是内角（此处用了测地三角形内角和 = \(\pi+\int_\Delta K\)）。

<h4>第二步：全部求和，内部边抵消</h4>
把所有三角形求和。曲率积分之和即总曲率 \(\int_M K\,dA\)；每条内部边被两个三角形共享，其贡献相消；边界项在闭曲面（无边）上自动消失。角度贡献合计后利用 Euler 公式 \(\chi=V-E+F\) 以及 \(3F=2E\)（每个面三条边、每条边被两面共享）化简。

<h4>第三步：化为 Euler 示性数</h4>
代数整理后得到

<div class="keybox">$$\boxed{\int_M K\,dA = 2\pi\,\chi(M)}$$</div>

其中 \(\chi(M)=V-E+F\) 是 Euler 示性数。左端随曲率连续变化，右端是纯拓扑整数，二者相等意味着曲率的<strong>总</strong>行为被拓扑锁定。

<div class="memobox"><strong>一句话记忆：</strong>Gauss–Bonnet = 「总曲率 ÷ \(2\pi\) = Euler 示性数」，局部弯曲的总和被拓扑刚性约束。</div>`
  },
  "r6": {
    0: L`<h4>我们要证明什么</h4>
黎曼度量存在性定理：<strong>任何</strong>光滑流形上都存在黎曼度量。初看令人惊讶——流形可能千奇百怪，凭什么总能量出「内积」？答案是单位分解这个拓扑工具让我们能把局部的平坦度量「黏」成全局度量。

<h4>第一步：局部总有的度量</h4>
取流形的一个局部坐标覆盖 \(\{U_\alpha\}\)。在每个坐标卡 \(U_\alpha\) 上，可以定义「坐标欧氏度量」\(g_\alpha\)，其在坐标下就是 \(g_{ij}=\delta_{ij}\)——局部上总能用平坦度量。

<h4>第二步：单位分解加权拼接</h4>
取从属于 \(\{U_\alpha\}\) 的单位分解 \(\{\rho_\alpha\}\)（光滑、\(\rho_\alpha\ge 0\)、支撑在 \(U_\alpha\) 内、且每点附近只有有限个非零、处处 \(\sum_\alpha\rho_\alpha=1\)）。定义全局度量

<div class="eq">$$g=\sum_{\alpha}\rho_\alpha\, g_\alpha$$</div>

<h4>第三步：验证正定性</h4>
对任意非零切向量 \(v\neq 0\)，\(g_\alpha(v,v)>0\) 恒成立，且每点至少有一个 \(\rho_\alpha>0\)，故凸组合 \(g(v,v)=\sum_\alpha\rho_\alpha\, g_\alpha(v,v)>0\)。正定性、对称性、光滑性全部由 \(g_\alpha\) 与 \(\rho_\alpha\) 继承。

<div class="keybox">$$\boxed{\text{任何光滑流形上总存在黎曼度量}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>局部拿平坦度量，用单位分解加权求和，正定性被凸组合保留。</div>`
  },
  "r7": {
    0: L`<h4>我们要证明什么</h4>
音乐同构定理：黎曼度量 \(g\) 在切丛 \(TM\) 与余切丛 \(T^*M\) 之间建立<strong>自然的线性同构</strong>，即「降调」\(\flat:TM\to T^*M\) 与「升调」\(\sharp:T^*M\to TM\)。

<h4>第一步：定义降调映射</h4>
对每个切向量 \(v\in T_pM\)，定义余切向量 \(v^\flat\in T^*_pM\) 为

<div class="eq">$$v^\flat(w)=g_p(v,w),\qquad \forall w\in T_pM$$</div>

即把 \(v\) 和任意 \(w\) 做内积。坐标下这读作 \(v^\flat_i=g_{ij}v^j\)——正是「降指标」。

<h4>第二步：证明是同构</h4>
\(\flat\) 是线性的；又因 \(g\) 正定（非退化），若 \(v^\flat=0\) 则 \(g(v,v)=v^\flat(v)=0\)，推出 \(v=0\)，故 \(\flat\) 单射。切空间与余切空间同维，单射即同构。

<h4>第三步：升调是逆映射</h4>
逆映射 \(\sharp\) 用逆度量张量 \(g^{ij}\)（满足 \(g^{ik}g_{kj}=\delta^i_j\)）升指标：

<div class="keybox">$$\boxed{\alpha^\sharp = g^{ij}\alpha_j\,\partial_i}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>度量把「向量 ↔ 余向量」打通，降调用 \(g_{ij}\)、升调用 \(g^{ij}\)。</div>`
  },
  "r8": {
    0: L`<h4>我们要证明什么</h4>
Myers–Steenrod 定理：黎曼流形的等距群是有限维 Lie 群，且维数不超过 \(\frac{n(n+1)}{2}\)。直觉是——一个等距映射被「它在一点的行为」完全锁定。

<h4>第一步：等距由一点的值与微分决定</h4>
等距映射 \(F\) 保持度量与测地线。若已知 \(F(p)\) 与微分 \(dF_p\)，则沿任意测地线 \(\gamma\) 从 \(p\) 出发，\(F(\gamma)\) 被唯一确定（测地线被初值唯一决定且等距保测地线）。故等距映射「被 \(p\) 处的 1-射影（1-jet）决定」。

<h4>第二步：数自由度</h4>
在点 \(p\)：位置 \(F(p)\) 有 \(n\) 个自由度；微分 \(dF_p\) 是保内积的正交变换，属于正交群 \(O(n)\)，有 \(\frac{n(n-1)}{2}\) 个自由度。合计

<div class="eq">$$n+\frac{n(n-1)}{2}=\frac{n(n+1)}{2}$$</div>

<h4>第三步：Lie 群结构</h4>
把等距群嵌入正交标架丛（其维数恰为 \(\frac{n(n+1)}{2}\)），可证它是闭子流形，因而成为 Lie 群。

<div class="keybox">$$\boxed{\dim\operatorname{Isom}(M,g)\le \frac{n(n+1)}{2}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>等距由「位置 + 正交标架」决定，自由度 \(n+\frac{n(n-1)}{2}\)。</div>`
  },
  "r9": {
    0: L`<h4>我们要证明什么</h4>
诱导度量定理：若 \(F:M\to N\) 是<strong>浸入</strong>（微分处处单射），\(h\) 是 \(N\) 上黎曼度量，则拉回 \(F^*h\) 是 \(M\) 上的黎曼度量。

<h4>第一步：定义拉回度量</h4>
对 \(v,w\in T_pM\)，定义

<div class="eq">$$(F^*h)_p(v,w)=h_{F(p)}\big(dF_p(v),\,dF_p(w)\big)$$</div>

即「先推到外围空间再做内积」。

<h4>第二步：对称性、双线性、光滑性</h4>
这些都是 \(h\) 与 \(dF\) 的相应性质直接遗传：\(h\) 对称双线性，\(dF\) 线性光滑，故 \(F^*h\) 对称双线性且光滑。

<h4>第三步：正定性依赖浸入条件</h4>
若 \(dF_p\) 单射（浸入），则 \(v\neq 0\Rightarrow dF_p(v)\neq 0\)，再由 \(h\) 正定得 \((F^*h)(v,v)=h(dF_p v,dF_p v)>0\)。若 \(F\) 不是浸入，存在 \(v\neq 0\) 使 \(dF_p v=0\)，此时 \((F^*h)(v,v)=0\)，只能得到半正定，不再是黎曼度量。

<div class="keybox">$$\boxed{F\ \text{浸入}\ \Longrightarrow\ F^*h\ \text{是黎曼度量}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>浸入保证微分单射，单射保住正定性，于是拉回度量是黎曼度量。</div>`
  },
  "r10": {
    0: L`<h4>我们要证明什么</h4>
体积比较定理（Bishop–Gromov 型）：截面曲率有下界 \(K\ge c\) 时，测地球的体积<strong>不超过</strong>常曲率 \(c\) 空间中同半径球的体积。

<h4>第一步：法坐标下的体积元</h4>
在指数映射给出的法坐标（极坐标）下，体积元由 Jacobi 场的行列式表出。沿测地线，体积密度函数对应 Jacobi 场沿径向的展开。

<h4>第二步：Rauch 比较控制 Jacobi 场</h4>
Rauch 比较定理断言：曲率越大，Jacobi 场（反映测地线分离快慢）增长越慢。若 \(K\ge c\)，则 \(M\) 中的 Jacobi 场范数不超过常曲率 \(c\) 空间中的对应量：

<div class="eq">$$|J(t)|\le |J_c(t)|$$</div>

<h4>第三步：积分得体积比较</h4>
体积元 ≤ 常曲率体积元，积分得

<div class="keybox">$$\boxed{\operatorname{Vol}\big(B(p,r)\big)\le V_c(r)}$$</div>

其中 \(V_c(r)\) 是常曲率 \(c\) 空间半径为 \(r\) 的球体积。

<div class="memobox"><strong>一句话记忆：</strong>曲率越大 ⟹ 测地线「聚拢」越慢 ⟹ 体积越小，被常曲率空间上界控制。</div>`
  },
  "r11": {
    0: L`<h4>我们要证明什么</h4>
等温坐标存在性：二维黎曼流形<strong>局部</strong>总存在坐标使度量呈共形平坦形式 \(ds^2=e^{2\lambda}(dx^2+dy^2)\)。这是二维独有的奇迹。

<h4>第一步：把问题化为复方程</h4>
设一般度量 \(ds^2=E\,dx^2+2F\,dx\,dy+G\,dy^2\)。要找等温坐标 \(w\)，即要求存在 \(\lambda\) 使 \(E=G=e^{2\lambda},\ F=0\)。这一条件等价于解 Beltrami 方程

<div class="eq">$$\partial_{\bar w}=\mu\,\partial w$$</div>

其中 \(\mu\) 由 \(E,F,G\) 决定。

<h4>第二步：二维度量的复结构</h4>
关键点：二维时，度量与复结构一一对应（保角类 = 复结构）。任何二维定向流形局部都有复坐标。

<h4>第三步：可测 Riemann 映射定理</h4>
由可测 Riemann 映射定理（Beltrami 方程的可测系数版本）保证等温坐标的局部存在性。

<div class="keybox">$$\boxed{\text{二维：任何度量局部共形平坦}\ ds^2=e^{2\lambda}(dx^2+dy^2)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>二维的特殊性：Weyl 张量退化，度量局部总能「共形拉平」。</div>`
  },
  "r12": {
    0: L`<h4>我们要证明什么</h4>
Cartan–Hadamard 定理：完备黎曼流形若截面曲率处处非正（\(K\le 0\)），则其<strong>万有覆盖</strong>微分同胚于 \(\mathbb R^n\)。这是「负曲率 ⟹ 拓扑简单」的最强表达。

<h4>第一步：曲率非正 ⟹ 无共轭点</h4>
沿测地线的 Jacobi 场满足 Jacobi 方程

<div class="eq">$$J''+R(J,\dot\gamma)\dot\gamma=0$$</div>

当 \(K\le 0\) 时，曲率项使方程成为「凸」的：Jacobi 场范数 \(|J(t)|\) 是凸函数，且从 \(0\) 出发的 Jacobi 场在 \(t>0\) 处不再回到 \(0\)——即<strong>没有共轭点</strong>。

<h4>第二步：指数映射无临界点</h4>
共轭点正是指数映射 \(\exp_p\) 的临界点所对应之处。无共轭点 ⟹ \(d\exp_p\) 处处非退化 ⟹ \(\exp_p\) 是<strong>局部微分同胚</strong>。

<h4>第三步：完备性推出整体性</h4>
Hopf–Rinow 定理：完备 ⟹ \(\exp_p\) 定义在整个 \(T_pM\cong\mathbb R^n\) 上。于是 \(\exp_p:\mathbb R^n\to M\) 是覆盖映射；单连通的万有覆盖与之微分同胚。

<div class="keybox">$$\boxed{K\le 0\ \text{且完备}\ \Longrightarrow\ \widetilde M\cong\mathbb R^n}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>负曲率让测地线「发散」、永不重新聚焦，指数映射就成了覆盖。</div>`
  },
  "r13": {
    0: L`<h4>我们要证明什么</h4>
球面定理（Sphere Theorem）：若紧致单连通黎曼流形的截面曲率严格夹在 \(1/4\) 与 \(1\) 之间，则它<strong>同胚</strong>于球面。这是用曲率钳制推出拓扑的经典结果。

<h4>第一步：下界 \(1/4\) 控制共轭点</h4>
由 Rauch 比较定理，\(K\ge 1/4\) 时，从一点出发的测地线要经历至少 \(\pi\) 的距离才可能相遇（共轭点距离 \(\ge\pi\)），这保证指数映射在半径 \(\pi\) 内是单射。

<h4>第二步：上界 \(1\) 控制直径</h4>
Bonnet–Myers 定理：\(K\ge 1/4>0\) 时流形紧致且直径 \(\le\pi\)（实际用到 \(K\ge 1/4\) 更强的结论，上界 \(K\le 1\) 配合 Toponogov 定理给出直径恰好约束）。

<h4>第三步：距离函数无临界点 ⟹ 可收缩</h4>
取相距最远的两点 \(p,q\)，令 \(f(x)=d(p,x)\)。用 Toponogov 定理比较三角形可证 \(f\) 在 \(M\setminus\{p,q\}\) 上无临界点。于是 \(M\) 可通过「梯度流」收缩到 \(p\)，从而同胚于球面。

<div class="keybox">$$\boxed{1/4<K<1\ \text{且单连通紧致}\ \Longrightarrow\ M\cong S^n}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>曲率被「夹」在球面附近 ⟹ 拓扑也被「夹」成球面。</div>`
  },
  "r14": {
    0: L`<h4>我们要证明什么</h4>
双曲空间的唯一性：同维数、同常负曲率的两个<strong>完备单连通</strong>黎曼流形必定等距。常曲率空间被曲率常数与维数完全决定。

<h4>第一步：常曲率的曲率张量标准形</h4>
截面曲率为常数 \(c\) 时，曲率张量有固定形式

<div class="eq">$$R(X,Y)Z=c\big(\langle Y,Z\rangle X-\langle X,Z\rangle Y\big)$$</div>

这意味着曲率张量处处「一样」，没有位置信息。

<h4>第二步：局部等距</h4>
取 \(p\in M\) 与正交标架，与标准双曲空间模型在对应点、对应标架处对齐。因曲率张量形式一致，指数映射保持度量，给出局部等距。

<h4>第三步：单连通完备 ⟹ 整体等距</h4>
完备性使指数映射全局定义，单连通性排除「缠绕」，局部等距提升为整体等距。

<div class="keybox">$$\boxed{\text{完备单连通常负曲率空间 ⟹ 等距于唯一双曲空间}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>常曲率 ⟹ 曲率张量被锁死 ⟹ 单连通完备 ⟹ 空间被唯一确定。</div>`
  },
  "r15": {
    0: L`<h4>我们要证明什么</h4>
Killing–Hopf 定理：完备单连通的常曲率流形，等距于三类标准模型之一——球面、欧氏空间、双曲空间（差缩放）。这是「空间形式」分类的基石。

<h4>第一步：常曲率的曲率张量标准形</h4>
设截面曲率为常数 \(c\)，曲率张量必为

<div class="eq">$$R(X,Y)Z=c\big(\langle Y,Z\rangle X-\langle X,Z\rangle Y\big)$$</div>

<h4>第二步：构造到模型空间的等距</h4>
取 \(p\in M\) 与正交标架，按 \(c\) 的符号映射到对应模型：

<div class="eq">$$c>0\to S^n(1/\sqrt c),\quad c=0\to \mathbb R^n,\quad c<0\to H^n(1/\sqrt{|c|})$$</div>

曲率张量形式一致 ⟹ 指数映射保度量。

<h4>第三步：整体性</h4>
完备单连通 ⟹ 指数映射是整体微分同胚 ⟹ 得到整体等距。

<div class="keybox">$$\boxed{\text{完备单连通常曲率空间}\ \cong\ S^n,\ \mathbb R^n,\ \text{或}\ H^n}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>常曲率空间只有三种「原形」：正、零、负。</div>`
  },
  "r16": {
    0: L`<h4>我们要证明什么</h4>
紧致 Lie 群曲率公式：配备双不变度量的紧致 Lie 群上，截面曲率由 Lie 括号长度给出

<div class="eq">$$K(X,Y)=\frac14\big|[X,Y]\big|^2\ge 0$$</div>

其中 \(X,Y\) 是正交单位 Lie 代数元素。曲率完全由 Lie 代数结构决定。

<h4>第一步：双不变度量的 Levi-Civita 联络</h4>
对左不变向量场 \(X,Y\)，双不变度量下联络有简洁形式

<div class="eq">$$\nabla_X Y=\frac12[X,Y]$$</div>

<h4>第二步：计算曲率张量</h4>
代入曲率张量定义，利用 Lie 括号的 Jacobi 恒等式与双不变性（\(\langle[X,Y],Z\rangle=\langle X,[Y,Z]\rangle\)），得到

<div class="eq">$$R(X,Y)Z=\frac14\big[[X,Y],Z\big]$$</div>

<h4>第三步：取截面曲率</h4>
截面曲率 \(K(X,Y)=\langle R(X,Y)Y,X\rangle\)。当 \(|X|=|Y|=1\) 且 \(\langle X,Y\rangle=0\)，配合双不变性化简：

<div class="keybox">$$\boxed{K(X,Y)=\frac14|[X,Y]|^2\ge 0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>双不变度量的曲率 = Lie 括号长度的平方，天然非负。</div>`
  },
  "r17": {
    0: L`<h4>我们要证明什么</h4>
联络存在性定理：<strong>任何</strong>光滑流形上都存在仿射联络。与黎曼度量存在性类似，这里同样用单位分解把局部联络「黏」成全局联络，且不依赖度量。

<h4>第一步：局部总有联络</h4>
在每个坐标卡 \(U_\alpha\) 上，可定义「平凡联络」\(\nabla^\alpha\)（取 Christoffel 符号 \(\Gamma^k_{ij}=0\)），局部上总存在联络。

<h4>第二步：单位分解加权拼接</h4>
取从属于 \(\{U_\alpha\}\) 的单位分解 \(\{\rho_\alpha\}\)，定义全局联络

<div class="eq">$$\nabla=\sum_\alpha \rho_\alpha\,\nabla^\alpha$$</div>

<h4>第三步：验证联络公理</h4>
需验证 \(C^\infty\)-线性与 Leibniz 法则。这两个公理对凸组合封闭：\(\nabla_X Y\) 关于 \(X\) 线性、关于 \(Y\) 满足 Leibniz 法则，逐项成立则加权和也成立。

<div class="keybox">$$\boxed{\text{任何光滑流形上总存在仿射联络}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>联络的构造不依赖度量，单位分解把局部平凡联络拼成全局联络。</div>`
  },
  "r18": {
    0: L`<h4>我们要证明什么</h4>
黎曼几何基本定理：任何黎曼流形上存在<strong>唯一</strong>的无挠、度量相容联络，称为 Levi-Civita 联络。它完全由度量决定，是黎曼几何的「心脏」。

<h4>第一步：两条公理</h4>
无挠性 \(T(X,Y)=\nabla_X Y-\nabla_Y X-[X,Y]=0\)；度量相容性 \(\nabla g=0\)，即

<div class="eq">$$X\langle Y,Z\rangle=\langle\nabla_X Y,Z\rangle+\langle Y,\nabla_X Z\rangle$$</div>

<h4>第二步：轮换指标得 Koszul 公式</h4>
把度量相容式对 \(X,Y,Z\) 轮换写出三个方程，配合无挠性消去未知量，解得

<div class="eq">$$2\langle\nabla_X Y,Z\rangle=X\langle Y,Z\rangle+Y\langle Z,X\rangle-Z\langle X,Y\rangle-\langle X,[Y,Z]\rangle+\langle Y,[Z,X]\rangle+\langle Z,[X,Y]\rangle$$</div>

右端全部由度量与 Lie 括号决定，故 \(\nabla_X Y\) 被唯一确定。

<h4>第三步：坐标下的 Christoffel 符号</h4>
取坐标基，得

<div class="keybox">$$\boxed{\Gamma^k_{ij}=\frac12 g^{kl}\big(\partial_i g_{jl}+\partial_j g_{il}-\partial_l g_{ij}\big)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>无挠 + 度量相容 ⟹ Koszul 公式 ⟹ Christoffel 符号由度量唯一给出。</div>`
  },
  "r19": {
    0: L`<h4>我们要证明什么</h4>
平行移动的存在唯一性：给定联络与曲线 \(\gamma\)，对任意初始向量 \(V_0\)，存在<strong>唯一</strong>的沿 \(\gamma\) 平行向量场，从而定义平行移动同构 \(P_\gamma\)。

<h4>第一步：平行条件写成 ODE</h4>
平行性 \(\nabla_{\gamma'}V=0\) 在坐标下展开为

<div class="eq">$$\frac{dV^k}{dt}+\Gamma^k_{ij}\big(\gamma(t)\big)\,\dot\gamma^i(t)\,V^j(t)=0$$</div>

<h4>第二步：线性 ODE 的存在唯一性</h4>
这是关于 \(V^k\) 的<strong>一阶线性</strong>常微分方程组，系数由 \(\gamma,\Gamma\) 给定。由 Picard–Lindelöf 定理，给定初值 \(V(0)=V_0\)，存在唯一整体解。

<h4>第三步：平行移动是同构</h4>
解对初值的线性依赖给出线性映射 \(P_\gamma:T_{\gamma(0)}M\to T_{\gamma(1)}M\)；可逆性来自沿反向曲线解同一 ODE，故是线性同构。

<div class="keybox">$$\boxed{P_\gamma:T_{\gamma(0)}M\xrightarrow{\ \cong\ }T_{\gamma(1)}M}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>平行移动 = 解一个线性 ODE，存在唯一 ⟹ 它是切空间的同构。</div>`
  },
  "r20": {
    0: L`<h4>我们要证明什么</h4>
Ricci 恒等式：二阶协变导数的交换子由曲率张量度量

<div class="eq">$$(\nabla_i\nabla_j-\nabla_j\nabla_i)T=R_{ij}\cdot T$$</div>

这揭示了曲率张量的本质——它正是「协变导数不可交换」的度量。

<h4>第一步：以向量场为例展开</h4>
写 \(\nabla_i\nabla_j X^k\) 的完整表达式（含两次 Christoffel 符号项），交换 \(i,j\) 后相减。

<h4>第二步：偏导数项抵消</h4>
交换后，对称项 \(\partial_i\partial_j X^k\) 相互抵消，剩下含 Christoffel 符号及其导数的项。

<h4>第三步：整理出曲率张量</h4>
剩下的项恰好组成

<div class="eq">$$R^k_{\ lij}=\partial_i\Gamma^k_{jl}-\partial_j\Gamma^k_{il}+\Gamma^m_{jl}\Gamma^k_{im}-\Gamma^m_{il}\Gamma^k_{jm}$$</div>

于是交换子等于 \(R^k_{\ lij}X^l\)。对一般张量，每个指标贡献一个曲率项。

<div class="keybox">$$\boxed{[\nabla_i,\nabla_j]X^k=R^k_{\ lij}X^l}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>曲率张量 = 「协变导数交换子的系数」，度量了平行移动的路径依赖性。</div>`
  },
  "r21": {
    0: L`<h4>我们要证明什么</h4>
联络的分解定理：任何仿射联络 \(\nabla\) 可唯一分解为 Levi-Civita 联络加上一个 \((1,2)\)-张量的对称与反对称部分，其中反对称部分对应挠率。

<h4>第一步：联络之差是张量</h4>
两个联络之差 \(A=\nabla-\nabla^{LC}\) 是 \((1,2)\)-张量（虽然联络本身不是张量，但差是）。

<h4>第二步：分解为对称与反对称部分</h4>
把 \(A^k_{ij}\) 关于下标 \(i,j\) 分解：

<div class="eq">$$A^k_{ij}=S^k_{ij}+D^k_{ij},\qquad S^k_{ij}=\frac12\big(A^k_{ij}-A^k_{ji}\big)$$</div>

<h4>第三步：反对称部分对应挠率</h4>
挠率 \(T^k_{ij}=\Gamma^k_{ij}-\Gamma^k_{ji}\)。因 \(\nabla^{LC}\) 无挠，反对称部分 \(S\) 正是挠率的贡献，对称部分 \(D\) 对应非度量相容性。

<div class="keybox">$$\boxed{\nabla=\nabla^{LC}+S+D,\quad S\ \text{对应挠率},\ D\ \text{对应非度量相容}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>联络 = Levi-Civita + 挠率部分 + 非度量相容部分。</div>`
  },
  "r22": {
    0: L`<h4>我们要证明什么</h4>
Berger 分类定理：不可约非对称黎曼流形的<strong>限制和乐群</strong>只有七种可能。它把黎曼流形按「平行移动能产生哪些变换」分成了有限的七类。

<h4>第一步：和乐群的 Lie 代数由曲率生成</h4>
限制和乐群 \(\mathrm{Hol}^0(p)\) 的 Lie 代数由曲率张量 \(R\) 及其协变导数在 \(p\) 点的值<strong>生成</strong>。因此和乐群被曲率的代数性质约束，必须满足 Bianchi 恒等式。

<h4>第二步：逐个排除</h4>
通过分析曲率张量算子的代数结构与 Bianchi 恒等式，Berger 排除了所有不可能的李代数，只剩七种。

<h4>第三步：七类和乐群</h4>

<div class="keybox">$$\boxed{SO(n),\ U(n),\ SU(n),\ Sp(n)Sp(1),\ Sp(n),\ G_2,\ Spin(7)}$$</div>

分别对应一般黎曼、Kähler、Calabi–Yau、四元 Kähler、超 Kähler，以及两种例外几何。

<div class="memobox"><strong>一句话记忆：</strong>和乐群被曲率「锁死」，不可约非对称情形只有七种。</div>`
  },
  "r23": {
    0: L`<h4>我们要证明什么</h4>
测地线存在唯一性：对任意点 \(p\in M\) 与切向量 \(v\in T_pM\)，存在<strong>唯一</strong>的极大测地线 \(\gamma_v\) 满足 \(\gamma_v(0)=p,\ \dot\gamma_v(0)=v\)。

<h4>第一步：测地线方程</h4>
测地线由 \(\nabla_{\dot\gamma}\dot\gamma=0\) 定义，坐标下是

<div class="eq">$$\frac{d^2x^k}{dt^2}+\Gamma^k_{ij}\,\frac{dx^i}{dt}\frac{dx^j}{dt}=0$$</div>

<h4>第二步：化为一阶系统</h4>
令 \(y=(x,\dot x)\)，方程化为 \(dy/dt=F(y)\)，其中 \(F\) 由光滑的 \(\Gamma^k_{ij}\) 组成，也是光滑的。

<h4>第三步：Picard–Lindelöf 定理</h4>
这是光滑的一阶 ODE，由存在唯一性定理，对任意初值 \((p,v)\) 存在唯一局部解；再通过解的延伸得到包含 \(0\) 的最大开区间上的极大解。

<div class="keybox">$$\boxed{\gamma_v(0)=p,\ \dot\gamma_v(0)=v\ \Longrightarrow\ \gamma_v\ \text{唯一存在}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>测地线方程是二阶 ODE，初值 \((p,v)\) 唯一决定一条测地线。</div>`
  },
  "r24": {
    0: L`<h4>我们要证明什么</h4>
Gauss 引理：指数映射的微分<strong>保持径向与切向的正交性</strong>。这是指数映射最重要性质，直接推出「测地线局部最短」。

<h4>第一步：构造测地线变分</h4>
设 \(v,w\in T_pM\) 且 \(w\perp v\)。构造变分

<div class="eq">$$\Gamma(s,t)=\exp_p\big(t(v+sw)\big)$$</div>

变分向量场 \(J(t)=\partial_s\Gamma|_{s=0}\) 是沿 \(\gamma_v\) 的 Jacobi 场，满足 \(J(0)=0,\ J'(0)=w\)。

<h4>第二步：证明内积恒定</h4>
计算

<div class="eq">$$\frac{d}{dt}\langle J(t),\dot\gamma_v(t)\rangle=\langle J',\dot\gamma_v\rangle+\langle J,\nabla_{\dot\gamma_v}\dot\gamma_v\rangle=0$$</div>

（第二项因 \(\nabla_{\dot\gamma_v}\dot\gamma_v=0\)）。初值 \(\langle J'(0),\dot\gamma_v(0)\rangle=\langle w,v\rangle=0\)，故 \(\langle J(t),\dot\gamma_v(t)\rangle\equiv 0\)。

<h4>第三步：结论</h4>
在 \(t=1\) 处：

<div class="keybox">$$\boxed{\langle d(\exp_p)_v(v),\ d(\exp_p)_v(w)\rangle=\langle v,w\rangle=0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>指数映射保「径向 ⊥ 切向」，所以测地线是局部最短。</div>`
  },
  "r25": {
    0: L`<h4>我们要证明什么</h4>
Hopf–Rinow 定理：连通黎曼流形上，以下四条<strong>等价</strong>——度量完备、测地完备、任意两点由最短测地线相连、有界闭集紧致。

<h4>第一步：证明链条</h4>
证明按 \((1)\Rightarrow(2)\Rightarrow(3)\Rightarrow(4)\Rightarrow(1)\) 进行。最关键的是 \((2)\Rightarrow(3)\)。

<h4>第二步：(2)⇒(3) 的核心</h4>
测地完备保证 \(\exp_p\) 定义在整个 \(T_pM\) 上。对任意 \(q\)，取 \(T_pM\) 中以 \(p\) 为中心、\(d(p,q)\) 为半径的球面上的点，由紧致性找使距离最小的切向量 \(v\)。由 Gauss 引理，\(\gamma_v\) 是连接 \(p,q\) 的最短测地线。

<h4>第三步：等价性</h4>
其余方向由距离连续性、Heine–Borel 性质等完成，闭环成立。

<div class="keybox">$$\boxed{\text{完备}\ \Longleftrightarrow\ \text{测地完备}\ \Longleftrightarrow\ \text{最短测地线存在}\ \Longleftrightarrow\ \text{有界闭集紧致}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>Hopf–Rinow = 「完备」有四种等价说法，核心是测地完备 ⟹ 最短线存在。</div>`
  },
  "r26": {
    0: L`<h4>我们要证明什么</h4>
割迹结构定理：\(M\setminus\mathrm{Cut}(p)\) 通过 \(\exp_p\) 微分同胚于 \(T_pM\) 中的<strong>星形开集</strong>，且割迹 \(\mathrm{Cut}(p)\) 是零测集、其补集稠密。

<h4>第一步：定义切集</h4>
在切空间定义

<div class="eq">$$\mathrm{TCL}(p)=\{v\in T_pM:\ \exp_p\ \text{在}\ v\ \text{非退化且}\ \gamma_v|_{[0,1]}\ \text{最短}\}$$</div>

<h4>第二步：整体微分同胚</h4>
\(M\setminus\mathrm{Cut}(p)=\exp_p(\mathrm{TCL}(p))\)。由 Gauss 引理，\(\exp_p\) 在 \(\mathrm{TCL}(p)\) 上是单射且局部微分同胚，故为<strong>整体</strong>微分同胚。

<h4>第三步：割迹的零测与稠密补</h4>
\(\mathrm{Cut}(p)=\exp_p(\partial\,\mathrm{TCL}(p))\)，边界是 \((n-1)\) 维 Lipschitz 面，故零测度；\(\mathrm{TCL}(p)\) 星形开 ⟹ 其补集稠密。

<div class="keybox">$$\boxed{M\setminus\mathrm{Cut}(p)\cong\text{星形开集},\quad \mathrm{Cut}(p)\ \text{零测、补稠密}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>去掉割迹后，指数映射是「单射微分同胚」，割迹本身可忽略（零测）。</div>`
  },
  "r27": {
    0: L`<h4>我们要证明什么</h4>
第一变分公式：长度泛函对固定端点变分的变分为

<div class="eq">$$\delta L(\gamma)[V]=-\int\langle\nabla_{\dot\gamma}\dot\gamma,\ V\rangle\,dt$$</div>

从而测地线正是长度泛函的临界点。

<h4>第一步：变分与变分向量场</h4>
设 \(\Gamma(s,t)\) 是 \(\gamma\) 的变分，\(V(t)=\partial_s\Gamma|_{s=0}\)。对长度 \(L(\gamma_s)=\int|\partial_t\Gamma|\,dt\) 求导。

<h4>第二步：求导与交换协变导数</h4>

<div class="eq">$$\frac{d}{ds}L\Big|_{s=0}=\int\frac{1}{|\dot\gamma|}\langle\nabla_s\partial_t\Gamma,\ \partial_t\Gamma\rangle\,dt$$</div>

由无挠性 \(\nabla_s\partial_t\Gamma=\nabla_t\partial_s\Gamma\)，分部积分（弧长参数 \(|\dot\gamma|=1\)）得 \(\delta L=-\int\langle\nabla_{\dot\gamma}\dot\gamma,V\rangle\,dt\)。

<h4>第三步：临界点条件</h4>
\(\delta L=0\) 对一切 \(V\) 成立，当且仅当 \(\nabla_{\dot\gamma}\dot\gamma=0\)，即测地线方程。

<div class="keybox">$$\boxed{\delta L=-\int\langle\nabla_{\dot\gamma}\dot\gamma,V\rangle\,dt\ \Longrightarrow\ \text{测地线}=\text{长度临界点}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>长度变分为零 ⟺ 加速度（协变）为零 ⟺ 测地线。</div>`
  },
  "r28": {
    0: L`<h4>我们要证明什么</h4>
第一 Bianchi 恒等式是曲率张量的<strong>代数对称性</strong>——它说曲率张量关于三个向量场做循环求和后为零：

<div class="eq">$$R(X,Y)Z+R(Y,Z)X+R(Z,X)Y=0$$</div>

它不涉及任何微分方程，纯粹是曲率张量定义的一个代数推论，但却是许多后续结论（如截面曲率决定曲率张量、Ricci 的对称性）的根基。

<h4>第一步：写出曲率张量定义</h4>
回忆曲率张量的定义是协变导数的交换子：

<div class="eq">$$R(X,Y)Z=\nabla_X\nabla_Y Z-\nabla_Y\nabla_X Z-\nabla_{[X,Y]}Z$$</div>

我们现在把这一项一项写出来，并对 X,Y,Z 做循环轮换。

<h4>第二步：写出三项之和</h4>
对 \((X,Y,Z)\)、\((Y,Z,X)\)、\((Z,X,Y)\) 三个轮换分别写出定义式并相加。关键观察是：\(\nabla_X\nabla_Y Z\) 这类「二阶协变导数」项在轮换求和时会两两抵消，剩下的只有 \(\nabla_{[X,Y]}Z\) 这类「交换子项」。

<h4>第三步：用 Jacobi 恒等式消去交换子项</h4>
剩下的交换子项恰好构成向量场的 Jacobi 恒等式：

<div class="eq">$$[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]=0$$</div>

由于 \(\nabla\) 无挠，\(\nabla_{[X,Y]}Z\) 与 \([X,Y]\) 的这些项也两两抵消。

<div class="keybox">$$\boxed{R(X,Y)Z+R(Y,Z)X+R(Z,X)Y=0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>第一 Bianchi 恒等式 = 曲率张量在三个槽位上「轮换求和为零」，本质是交换子的 Jacobi 恒等式。</div>`
  },
  "r29": {
    0: L`<h4>这一定理在说什么</h4>
截面曲率 \(K(\sigma)\) 只是曲率张量在<strong>二维平面</strong>上取的一个标量值。乍看之下信息量比整个曲率张量少得多。但定理断言：只要知道<strong>所有</strong>二维平面的截面曲率，就能<strong>唯一还原</strong>整个曲率张量。

<h4>第一步：截面曲率定义</h4>
对切空间里的二维平面 \(\sigma=\mathrm{span}\{u,v\}\)，

<div class="eq">$$K(\sigma)=K(u,v)=\frac{\langle R(u,v)v,u\rangle}{|u|^2|v|^2-\langle u,v\rangle^2}$$</div>

<h4>第二步：极化恒等式——从二次型反解双线性型</h4>
核心是代数里的经典技巧：一个对称双线性型 \(B(x,y)\) 可由它的对角值 \(B(x,x)\) 通过极化还原：

<div class="eq">$$B(x,y)=\frac{B(x+y,x+y)-B(x-y,x-y)}{4}$$</div>

截面曲率 \(K(u,v)\) 是「平面上的值」，对它做类似的极化，就能逐项反解出 (0,4) 型曲率张量 \(\langle R(X,Y)Z,W\rangle\) 的<strong>所有</strong>分量。

<h4>第三步：结论</h4>
因此所有截面的 \(K\) 一起完全确定 \(R\)。

<div class="keybox">$$\boxed{\text{两个流形所有截面曲率相等 }\iff\text{ 曲率张量相等}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>截面曲率是曲率张量的「完全指纹」——知道每个平面的曲率，就知道整个张量。</div>`
  },
  "r30": {
    0: L`<h4>这一定理在说什么</h4>
Schur 引理（\(n\ge 3\)）：如果截面曲率只依赖于<strong>点</strong> \(p\)、不依赖于<strong>方向</strong> \(\sigma\)（即每点都是「各向同性」的），那么它其实连点都不依赖——是个全局常数。这是一个关于「局部各向同性 ⟹ 全局均匀」的刚性结论。

<h4>第一步：把条件翻译成曲率张量形式</h4>
若 \(K\) 与方向无关，则曲率张量在每点有规范形式：

<div class="eq">$$R(X,Y)Z=K(p)\big(\langle Y,Z\rangle X-\langle X,Z\rangle Y\big)$$</div>

这里 \(K(p)\) 是只依赖点的函数。

<h4>第二步：取协变导数</h4>
对两边求协变导数 \(\nabla_W\)，注意 \(g\) 的协变导数为零，于是

<div class="eq">$$(\nabla_W R)(X,Y)Z=(\nabla_W K)\big(\langle Y,Z\rangle X-\langle X,Z\rangle Y\big)$$</div>

<h4>第三步：用第二 Bianchi 恒等式推出 \(\nabla K=0\)</h4>
第二 Bianchi 恒等式 \((\nabla_W R)(X,Y)Z+(\nabla_X R)(Y,W)Z+(\nabla_Y R)(W,X)Z=0\) 代入上式，得到关于 \(\nabla K\) 的代数方程。当 \(n\ge 3\) 时，这个方程的唯一解是：

<div class="keybox">$$\boxed{\nabla K=0\ \Longrightarrow\ K=\text{常数}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>「每点各向同性」＋「Bianchi 恒等式」＝「全局常曲率」（\(n\ge 3\)）。\(n=2\) 时失效，因为二维恒等截面曲率不足够约束。</div>`
  },
  "r31": {
    0: L`<h4>我们要证明什么</h4>
第二 Bianchi 恒等式是曲率张量<strong>协变导数</strong>的循环恒等式：

<div class="eq">$$\nabla_m R^l{}_{ijk}+\nabla_i R^l{}_{jmk}+\nabla_j R^l{}_{mik}=0$$</div>

它是曲率张量的「微分恒等式」（区别于第一 Bianchi 的「代数恒等式」），是 Einstein 场方程自洽性与能量守恒的几何来源。

<h4>第一步：法坐标简化</h4>
由于这是张量恒等式，我们只需在一点 \(p\) 验证。取 \(p\) 处的<strong>法坐标</strong>（测地线坐标），使 Christoffel 符号在 \(p\) 为零：\(\Gamma^k_{ij}(p)=0\)。于是在 \(p\) 点协变导数退化为普通偏导：

<div class="eq">$$\nabla_m R^l{}_{ijk}\Big|_p=\partial_m R^l{}_{ijk}\Big|_p$$</div>

<h4>第二步：代入曲率分量并求导</h4>
回忆 \(R^l{}_{ijk}=\partial_i\Gamma^l_{jk}-\partial_j\Gamma^l_{ik}+\Gamma^l_{im}\Gamma^m_{jk}-\Gamma^l_{jm}\Gamma^m_{ik}\)。在 \(p\) 点 \(\Gamma=0\)，故

<div class="eq">$$R^l{}_{ijk}=\partial_i\Gamma^l_{jk}-\partial_j\Gamma^l_{ik}\quad(\text{在 }p)$$</div>

对 \(m\) 求偏导并做轮换，\(\partial_m\partial_i\Gamma^l_{jk}\) 这类项两两抵消，恰好得到零。

<div class="keybox">$$\boxed{\nabla_m R^l{}_{ijk}+\nabla_i R^l{}_{jmk}+\nabla_j R^l{}_{mik}=0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>第二 Bianchi = 曲率的「协变导数轮换求和为零」，在法坐标下退化为偏导轮换抵消。</div>`
  },
  "r32": {
    0: L`<h4>这一定理在说什么</h4>
Weyl 张量 \(W\) 是曲率张量里「去掉 Ricci 信息后的纯共形部分」。定理给出它在共形变换下的变换规律，并刻画共形平坦。

<h4>第一步：共形变换下 Christoffel 的变化</h4>
设 \(g'=e^{2f}g\)，则 Christoffel 符号变换为：

<div class="eq">$$\Gamma'^k_{ij}=\Gamma^k_{ij}+\delta^k_i\partial_j f+\delta^k_j\partial_i f-g_{ij}g^{kl}\partial_l f$$</div>

<h4>第二步：曲率张量的共形变换</h4>
代入曲率公式，得到黎曼张量在共形变换下分「旧曲率 + Ricci 项 + Hessian 项」的复杂表达式。关键是：把这些项里「可被 Ricci 和标量曲率表达」的部分<strong>剥离</strong>后，剩下的部分 \(W\) 满足最简单的变换律：

<div class="keybox">$$\boxed{W'=e^{2f}W}$$</div>

<h4>第三步：共形平坦的判据</h4>
\(W=0\) 意味着度量可以（局部）通过共形变换变平。\(n\ge 4\) 时：

<div class="warnbox">\(W=0\iff\) 度量<strong>共形平坦</strong>（局部共形于欧氏度量）。</div>

<div class="memobox"><strong>一句话记忆：</strong>Weyl 张量是「共形不变的纯弯曲」，\(W'=e^{2f}W\)；\(W=0\) 即共形平坦（\(n\ge4\)）。</div>`
  },
  "r33": {
    0: L`<h4>我们要证明什么</h4>
Ricci 恒等式给出协变导数交换子与曲率张量的关系：

<div class="eq">$$\nabla_i\nabla_j X^k-\nabla_j\nabla_i X^k=R^k{}_{lij}X^l$$</div>

它其实是曲率张量的<strong>另一个等价定义</strong>——「协变导数不可交换的程度由 \(R\) 度量」。

<h4>第一步：写出一次协变导数</h4>

<div class="eq">$$\nabla_i X^k=\partial_i X^k+\Gamma^k_{il}X^l$$</div>

<h4>第二步：求二次协变导数</h4>
注意 \(\nabla_i X^k\) 是 (1,1) 型张量，再求 \(\nabla_j\) 时上标、下标都要带联络项：

<div class="eq">$$\nabla_j\nabla_i X^k=\partial_j(\partial_i X^k+\Gamma^k_{il}X^l)+\Gamma^k_{jm}(\partial_i X^m+\Gamma^m_{il}X^l)-\Gamma^m_{ji}(\partial_m X^k+\Gamma^k_{ml}X^l)$$</div>

<h4>第三步：交换 \(i,j\) 相减</h4>
\(\partial_j\partial_i X^k\) 与 \(\partial_i\partial_j X^k\) 抵消（普通偏导可交换），剩下的项整理为 \((\partial_i\Gamma^k_{jl}-\partial_j\Gamma^k_{il}+\Gamma^k_{im}\Gamma^m_{jl}-\Gamma^k_{jm}\Gamma^m_{il})X^l\)，正是曲率分量 \(R^k{}_{lij}X^l\)。

<div class="keybox">$$\boxed{\nabla_i\nabla_j X^k-\nabla_j\nabla_i X^k=R^k{}_{lij}X^l}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>Ricci 恒等式 = 协变导数交换子 = 曲率张量作用在向量上。</div>`
  },
  "r34": {
    0: L`<h4>这一定理在说什么</h4>
Bonnet–Myers 定理是「曲率控制拓扑」的经典结果：正的下界 Ricci 曲率 ⟹ 流形有界、紧致，且基本群有限。

<div class="eq">$$\mathrm{Ric}\ge\frac{n-1}{R^2}\,g\ \Longrightarrow\ \mathrm{diam}(M)\le\pi R,\quad \pi_1(M)\text{ 有限}$$</div>

<h4>第一步：沿最短测地线构造变分场</h4>
设 \(\gamma:[0,L]\to M\) 是最短测地线（弧长参数，\(L=\mathrm{dist}(p,q)\)）。取沿 \(\gamma\) 平行的正交标架 \(E_1,\dots,E_{n-1}\)（\(\nabla_{\dot\gamma}E_i=0\)），构造变分场：

<div class="eq">$$V_i(t)=\sin\frac{\pi t}{L}\,E_i(t)$$</div>

它在端点为零（\(V_i(0)=V_i(L)=0\)）。

<h4>第二步：第二变分公式</h4>
对每个 \(i\)，能量泛函的第二变分：

<div class="eq">$$\delta^2E(V_i,V_i)=\int_0^L\Big(|\dot V_i|^2-\langle R(V_i,\dot\gamma)\dot\gamma,V_i\rangle\Big)dt$$</div>

代入 \(V_i=\sin(\pi t/L)E_i\)，计算得

<div class="eq">$$\delta^2E(V_i,V_i)=\int_0^L\sin^2\frac{\pi t}{L}\Big(\frac{\pi^2}{L^2}-\langle R(E_i,\dot\gamma)\dot\gamma,E_i\rangle\Big)dt$$</div>

<h4>第三步：对所有 \(i\) 求和，用 Ricci 下界</h4>
\(\sum_i\langle R(E_i,\dot\gamma)\dot\gamma,E_i\rangle=\mathrm{Ric}(\dot\gamma,\dot\gamma)\ge\frac{n-1}{R^2}\)，故

<div class="eq">$$\sum_i\delta^2E(V_i,V_i)\le\int_0^L\sin^2\frac{\pi t}{L}\Big(\frac{n-1}{L^2}-\frac{n-1}{R^2}\Big)dt$$</div>

若 \(L>\pi R\)，则括号内为负，\(\sum_i\delta^2E<0\)，与 \(\gamma\) 最短矛盾。

<div class="keybox">$$\boxed{L\le\pi R\ \Longrightarrow\ \mathrm{diam}(M)\le\pi R}$$</div>

<h4>第四步：基本群有限</h4>
完备性 + 直径有界 ⟹ 紧致。对万有覆盖用同样的 Ricci 下界（覆盖映射保 Ricci），万有覆盖也紧致，故 \(\pi_1(M)\) 有限。

<div class="memobox"><strong>一句话记忆：</strong>正 Ricci 下界 = 弹簧拉回，迫使测地线在 \(\pi R\) 内重逢，流形被「箍」成一个有限紧致体。</div>`
  },
  "r35": {
    0: L`<h4>我们要证明什么</h4>
Gauss 公式把外围空间 \(N\) 的联络沿子流形 \(M\) 分解成「切向 + 法向」两部分：

<div class="eq">$$\nabla^N_X Y=\nabla^M_X Y+\mathrm{II}(X,Y)$$</div>

其中 \(X,Y\) 切于 \(M\)。左边是 \(N\) 里的协变导数，右边第一项是 \(M\) 自己的联络，第二项是第二基本形式（法向部分）。

<h4>第一步：把 \(\nabla^N_X Y\) 按切/法分解</h4>
\(\nabla^N_X Y\) 是 \(N\) 在 \(p\) 的切向量，可以唯一分解为切向分量与法向分量：

<div class="eq">$$\nabla^N_X Y=(\nabla^N_X Y)^{\top}+(\nabla^N_X Y)^{\perp}$$</div>

<h4>第二步：切向部分就是 \(M\) 的联络</h4>
切向分量 \((\nabla^N_X Y)^{\top}\) 满足 Levi-Civita 联络的全部性质（保持度量、无挠），因此它就是 \(M\) 诱导的 Levi-Civita 联络 \(\nabla^M_X Y\)。

<h4>第三步：法向部分定义为第二基本形式</h4>
法向分量记为第二基本形式：

<div class="keybox">$$\boxed{\mathrm{II}(X,Y)=(\nabla^N_X Y)^{\perp}}$$</div>

于是得到 Gauss 公式 \(\nabla^N_X Y=\nabla^M_X Y+\mathrm{II}(X,Y)\)。

<div class="memobox"><strong>一句话记忆：</strong>Gauss 公式 = 外围联络沿子流形切/法分解；法向部分就是第二基本形式。</div>`
  },
  "r36": {
    0: L`<h4>我们要证明什么</h4>
Gauss 方程把子流形的<strong>内蕴</strong>曲率（\(R^M\)）与<strong>外蕴</strong>曲率（第二基本形式 \(\mathrm{II}\)）联系起来：

<div class="eq">$$\langle R^M(X,Y)Z,W\rangle=\langle R^N(X,Y)Z,W\rangle+\langle \mathrm{II}(X,W),\mathrm{II}(Y,Z)\rangle-\langle \mathrm{II}(X,Z),\mathrm{II}(Y,W)\rangle$$</div>

<h4>第一步：从 Gauss 公式出发算外围曲率</h4>
代入 \(\nabla^N_X Y=\nabla^M_X Y+\mathrm{II}(X,Y)\) 到 \(R^N(X,Y)Z=\nabla^N_X\nabla^N_Y Z-\nabla^N_Y\nabla^N_X Z-\nabla^N_{[X,Y]}Z\)，每一项展开。

<h4>第二步：与切向量 \(W\) 取内积，分离切/法项</h4>
与切向量 \(W\) 做内积时，法向的 \(\mathrm{II}\) 项通过「两个法向量的内积」留下 \(\langle\mathrm{II},\mathrm{II}\rangle\) 项。整理后恰好得到上面三个部分。

<h4>第三步：得到 Gauss 方程</h4>

<div class="keybox">$$\boxed{\langle R^M(X,Y)Z,W\rangle=\langle R^N(X,Y)Z,W\rangle+\langle\mathrm{II}(X,W),\mathrm{II}(Y,Z)\rangle-\langle\mathrm{II}(X,Z),\mathrm{II}(Y,W)\rangle}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>Gauss 方程 = 内蕴曲率 = 外围曲率 + 「第二基本形式的外积」，是内外几何的桥梁。</div>`
  },
  "r37": {
    0: L`<h4>我们要证明什么</h4>
Codazzi 方程是第二基本形式<strong>协变导数</strong>的对称性：

<div class="eq">$$(\nabla_X \mathrm{II})(Y,Z)=(\nabla_Y \mathrm{II})(X,Z)$$</div>

它与 Gauss 方程一起构成子流形几何的「基本方程」。

<h4>第一步：算外围曲率的法向分量</h4>
用 Gauss 公式展开 \(R^N(X,Y)Z\)，取其<strong>法向分量</strong> \((R^N(X,Y)Z)^{\perp}\)。

<h4>第二步：切向联络与第二基本形式交叉项</h4>
展开后，含 \(\mathrm{II}\) 的项通过切向 \(\nabla\) 作用。整理得到

<div class="eq">$$(R^N(X,Y)Z)^{\perp}=(\nabla_X\mathrm{II})(Y,Z)-(\nabla_Y\mathrm{II})(X,Z)$$</div>

<h4>第三步：令法向分量为零</h4>
对欧氏空间（或当 \(R^N\) 无切向-法向混合项时），法向分量 \((R^N(X,Y)Z)^{\perp}=0\)，于是：

<div class="keybox">$$\boxed{(\nabla_X\mathrm{II})(Y,Z)=(\nabla_Y\mathrm{II})(X,Z)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>Codazzi 方程 = 第二基本形式的协变导数对称，来自外围曲率的法向分量为零。</div>`
  },
  "r38": {
    0: L`<h4>这一定理在说什么</h4>
Alexandrov 定理：\(\mathbb R^3\) 中唯一的<strong>紧致无边</strong>常平均曲率（CMC）曲面是球面。

<h4>第一步：移动平面法（反射法）</h4>
取任意单位方向 \(\nu\)。用垂直于 \(\nu\) 的平面族 \(\Pi_t=\{x:\langle x,\nu\rangle=t\}\) 从 \(+\infty\) 方向逼近曲面 \(M\)。记 \(t_0\) 为首次接触曲面的时刻。

<h4>第二步：反射与相切</h4>
对 \(t\) 略小于 \(t_0\)，把 \(M\) 在 \(\Pi_t\) 之下的部分反射到上方。反射后的曲面与 \(M\) 相切。关键用<strong>强极大值原理</strong>：两个 CMC 曲面在某点相切且法向一致时，若一方的平均曲率不小于另一方，则它们在局部重合。

<h4>第三步：逐点反射推进</h4>
由相切点的唯一性，可把反射过程从 \(t_0\) 一路推进到「对称点」。最终推出 \(M\) 关于某个平面的反射等于自身——即 \(M\) 关于<strong>任意方向</strong> \(\nu\) 都有对称平面。

<h4>第四步：结论</h4>
关于所有方向都有对称平面的紧致曲面只能是球面：

<div class="keybox">$$\boxed{\text{紧致无边 CMC 曲面 }=\text{ 球面}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>移动平面法 + 极大值原理 ⟹ CMC 紧致曲面处处对称 ⟹ 只能是球面。</div>`
  },
  "r39": {
    0: L`<h4>这一定理在说什么</h4>
Simons 不等式是 \(S^n\) 中<strong>极小子流形</strong>第二基本形式模平方 \(\lvert\mathrm{II}\rvert^2\) 的次调和性不等式，是极小子流形刚性理论的基石。

<h4>第一步：用 Bochner 技巧算 Laplacian</h4>
对第二基本形式 \(\mathrm{II}\) 这个法向张量场取迹 Laplacian：

<div class="eq">$$\Delta\lvert\mathrm{II}\rvert^2=2\lvert\nabla\mathrm{II}\rvert^2+2\langle\mathrm{II},\Delta\mathrm{II}\rangle$$</div>

<h4>第二步：用 Codazzi + Gauss 方程化简</h4>
\(\Delta\mathrm{II}\) 通过 Codazzi 方程（协变导数对称）与 Gauss 方程（曲率关系）化为 \(\mathrm{II}\) 与外围曲率（球面曲率）的组合。对球面 \(S^n\)（曲率 \(1\)），整理得

<div class="keybox">$$\boxed{\Delta\lvert\mathrm{II}\rvert^2\ge -2\lvert\mathrm{II}\rvert^2+\cdots}$$</div>

<h4>第三步：刚性推论</h4>
这个不等式加上积分技巧（\(\lvert\mathrm{II}\rvert^2\) 有界、紧致），可推出 Simons 的刚性定理：\(S^n\) 中极小超曲面若是紧致且 \(\lvert\mathrm{II}\rvert^2\) 落在某范围，则只能是全测地（大球面）。

<div class="memobox"><strong>一句话记忆：</strong>Simons 不等式 = Bochner 技巧 + Gauss–Codazzi 应用到极小子流形，控制 \(\lvert\mathrm{II}\rvert^2\) 推出刚性。</div>`
  },
  "r40": {
    0: L`<h4>我们要证明什么</h4>
局部 Gauss–Bonnet 定理把曲面上区域 \(\Omega\) 的总曲率、边界测地曲率积分、以及角盈（顶点外角之和）三者打包成一个拓扑量：

<div class="eq">$$\int_\Omega K\,dA+\int_{\partial\Omega}\kappa_g\,ds+\sum_i(\pi-\alpha_i)=2\pi\chi(\Omega)$$</div>

<h4>第一步：用活动标架与 Stokes 定理</h4>
取正交活动标架 \(\{e_1,e_2\}\)，设联络 1-形式为 \(\omega^1{}_2\)。由结构方程：

<div class="eq">$$d\omega^1{}_2=-K\,dA$$</div>

<h4>第二步：对区域 \(\Omega\) 用 Stokes 定理</h4>

<div class="eq">$$\int_\Omega K\,dA=-\int_\Omega d\omega^1{}_2=-\int_{\partial\Omega}\omega^1{}_2$$</div>

<h4>第三步：边界项 = 测地曲率 + 角盈</h4>
边界 \(\partial\Omega\) 分段光滑，在每个光滑弧段上 \(\omega^1{}_2\) 沿边界的积分恰好是测地曲率 \(\int\kappa_g\,ds\)；在每个角点处，标架转过一个外角 \((\pi-\alpha_i)\)。于是：

<div class="keybox">$$\boxed{\int_\Omega K\,dA+\int_{\partial\Omega}\kappa_g\,ds+\sum_i(\pi-\alpha_i)=2\pi\chi(\Omega)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>局部 Gauss–Bonnet = 曲率积分 + 边界测地曲率 + 角盈 = 拓扑量 \(2\pi\chi\)，核心是 Stokes 定理。</div>`
  },
  "r41": {
    0: L`<h4>我们要证明什么</h4>
全局 Gauss–Bonnet 定理：紧致定向无边曲面 \(M\) 的总曲率由拓扑决定：

<div class="eq">$$\int_M K\,dA=2\pi\chi(M)$$</div>

<h4>第一步：三角剖分</h4>
把 \(M\) 三角剖分为测地三角形 \(\Delta_i\)（每条边都是测地线，故 \(\kappa_g=0\)）。对每个 \(\Delta_i\) 用局部 Gauss–Bonnet：

<div class="eq">$$\int_{\Delta_i}K\,dA+\sum_{\text{顶点}}(\pi-\alpha)=2\pi$$</div>

<h4>第二步：对所有三角形求和</h4>
曲率积分相加得 \(\int_M K\,dA\)。角盈项 \(\sum(\pi-\alpha)\) 在内部顶点处凑成 \(2\pi\)、在边上的顶点两两抵消。整体上：

<div class="eq">$$\int_M K\,dA+2\pi V-\sum\alpha=2\pi F$$</div>

<h4>第三步：用 Euler 公式</h4>
每个顶点处内角之和 \(=2\pi\)，每条边属于两个三角形，每个三角形贡献 \(\pi\)。整理后恰好得到 \(\chi(M)=V-E+F\)：

<div class="keybox">$$\boxed{\int_M K\,dA=2\pi\chi(M)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>把局部 Gauss–Bonnet 对三角剖分求和，角盈凑成 Euler 示性数，得全局公式 \(\int K=2\pi\chi\)。</div>`
  },
  "r42": {
    0: L`<h4>这一定理在说什么</h4>
Chern–Gauss–Bonnet 定理把 Gauss–Bonnet 推广到任意偶维 \(2n\)：

<div class="eq">$$\int_M \mathrm{Pf}(\Omega)=(2\pi)^n\,\chi(M)$$</div>

其中 \(\mathrm{Pf}(\Omega)\) 是曲率 2-形式 \(\Omega\) 的 Pfaffian——一个 \(2n\)-形式，是 Gauss 曲率在偶维的推广。

<h4>第一步：曲率形式的 Pfaffian</h4>
在正交标架下，曲率 2-形式 \(\Omega^i{}_j\) 是反对称矩阵值 2-形式。Pfaffian \(\mathrm{Pf}(\Omega)\) 是它的一个「组合不变量」：

<div class="eq">$$n=2:\ \mathrm{Pf}(\Omega)=\frac{1}{2\pi}K\,dA$$</div>

<h4>第二步：Chern 的超渡构造</h4>
Chern 在单位球丛 \(SM\) 上构造了一个 \((2n-1)\)-形式 \(\Pi\)，满足

<div class="eq">$$d\Pi=\pi^*\mathrm{Pf}(\Omega)$$</div>

即 \(\mathrm{Pf}(\Omega)\) 是 \(\Pi\) 的「外微分」（拉回到球丛后）。这使积分 \(\int_M\mathrm{Pf}(\Omega)\) 成为一个拓扑不变量。

<h4>第三步：Stokes 定理 + 球面纤维</h4>
球丛纤维 \(S^{2n-1}\) 的 Euler 类积分贡献 \((2\pi)^n\)，最终：

<div class="keybox">$$\boxed{\int_M\mathrm{Pf}(\Omega)=(2\pi)^n\chi(M)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>Chern 用「超渡形式 + 球丛」把 Gauss 曲率推广成 Pfaffian，积分恒等于 Euler 示性数。</div>`
  },
  "r43": {
    0: L`<h4>这一定理在说什么</h4>
Chern 把 Gauss–Bonnet 推广到高维偶维流形 \(M^{2n}\)：

<div class="eq">$$\int_M \mathrm{Pf}(\Omega)=(2\pi)^n\chi(M)$$</div>

<h4>第一步：方法的骨架（与二维一致）</h4>
二维时用「联络形式 + Stokes」；高维时同样：在单位球丛 \(SM\) 上构造 \((2n-1)\)-形式 \(\Pi\) 满足 \(d\Pi=\pi^*\mathrm{Pf}(\Omega)\)。

<h4>第二步：Pfaffian 是 Gauss 曲率的推广</h4>
\(\mathrm{Pf}(\Omega)\) 是曲率形式的外积组合，\(n=1\) 时退化为 \(\frac{1}{2\pi}K\,dA\)，\(n=2\) 时涉及曲率张量的二次组合（含 Weyl 项）。

<h4>第三步：积分 = 拓扑量</h4>
Stokes 定理把 \(\int_M\mathrm{Pf}(\Omega)\) 化为球丛边界上的积分，球纤维的 Euler 类给出 \((2\pi)^n\)：

<div class="keybox">$$\boxed{\int_M\mathrm{Pf}(\Omega)=(2\pi)^n\chi(M)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>高维 Chern–Gauss–Bonnet：曲率形式的 Pfaffian 积分 = 拓扑量 \((2\pi)^n\chi\)，是二维公式的偶维推广。</div>`
  },
  "r44": {
    0: L`<h4>我们要证明什么</h4>
Jacobi 方程刻画的是<strong>相邻测地线的一阶分离</strong>。设 γ 是一条测地线，考虑一族测地线 Γ(s,t)：对每个固定的 s，曲线 t↦Γ(s,t) 都是测地线，且 Γ(0,t)=γ(t)。这一族测地线相对 γ 的“分离速度”就是变分场

<div class="eq">$$J(t)=\left.\frac{\partial\Gamma}{\partial s}\right|_{s=0}$$</div>

下面从“测地线”这一个条件出发，推导 J 必须满足的二阶方程。

<h4>第一步：测地线条件</h4>
对每个 s，Γ(s,·) 是测地线，意味着横截场 ∂Γ/∂t 沿 t 方向平行：

<div class="eq">$$\nabla_t\frac{\partial\Gamma}{\partial t}=0$$</div>

<strong>关键想法：</strong>把这个恒等式对 s 求导，把“测地线”这一几何条件翻译成关于 J 的方程。

<h4>第二步：对 s 求导，交换协变导数</h4>
对 s 求协变导数得

<div class="eq">$$0=\nabla_s\nabla_t\frac{\partial\Gamma}{\partial t}$$</div>

协变导数交换的“代价”是曲率张量（这就是曲率第一次进入推导的地方）：

<div class="eq">$$\nabla_s\nabla_t X-\nabla_t\nabla_s X=R\left(\frac{\partial\Gamma}{\partial s},\frac{\partial\Gamma}{\partial t}\right)X$$</div>

取 \(X=\partial\Gamma/\partial t\)，得到

<div class="eq">$$\nabla_s\nabla_t\frac{\partial\Gamma}{\partial t}=\nabla_t\nabla_s\frac{\partial\Gamma}{\partial t}+R\left(\frac{\partial\Gamma}{\partial s},\frac{\partial\Gamma}{\partial t}\right)\frac{\partial\Gamma}{\partial t}$$</div>

<h4>第三步：再用一次无挠性</h4>
Levi-Civita 联络无挠，所以偏导可交换：

<div class="eq">$$\nabla_s\frac{\partial\Gamma}{\partial t}=\nabla_t\frac{\partial\Gamma}{\partial s}$$</div>

代回上一式，并利用第一步的 0：

<div class="eq">$$0=\nabla_t\nabla_t\frac{\partial\Gamma}{\partial s}+R\left(\frac{\partial\Gamma}{\partial s},\frac{\partial\Gamma}{\partial t}\right)\frac{\partial\Gamma}{\partial t}$$</div>

<h4>第四步：令 s=0</h4>
在 s=0 处，\(\partial\Gamma/\partial s=J\)、\(\partial\Gamma/\partial t=\dot\gamma\)，于是得到

<div class="keybox">$$\boxed{\;\nabla_{\dot\gamma}\nabla_{\dot\gamma}J+R(J,\dot\gamma)\dot\gamma=0\;}$$</div>

这就是 <strong>Jacobi 方程</strong>。在平行标架下，它写成二阶线性常微分方程

<div class="eq">$$J''+R(J,\dot\gamma)\dot\gamma=0$$</div>

其中 \(J'=\nabla_{\dot\gamma}J\)。

<div class="memobox"><strong>一句话记忆：</strong>测地线族的一阶分离，被“曲率项 \(R(J,\dot\gamma)\dot\gamma\)”这个线性回复力所控制——曲率通过 Jacobi 方程决定测地线是会聚还是发散。</div>`
  },
  "r45": {
    0: L`<h4>这一定理在说什么</h4>
共轭点是“测地线丧失最短性”的第一个信号：在第一个共轭点 <strong>之前</strong>，测地线仍是连接两端的最短路径；一旦 <strong>越过</strong> 第一个共轭点，就存在更短的路径。证明分“之前仍最短”和“之后不再最短”两步。

<h4>先回顾共轭点的定义</h4>
点 \(q=\gamma(b)\) 是 \(p=\gamma(a)\) 沿 γ 的共轭点，当且仅当存在<strong>非零</strong> Jacobi 场 J 满足

<div class="eq">$$J(a)=J(b)=0$$</div>

这种“两端为零的非零 Jacobi 场”正是共轭点的代数本质。

<h4>第一步：把 J 延拓成变分场</h4>
设 γ(b) 是第一个共轭点，取相应的非零 Jacobi 场 \(J(a)=J(b)=0\)。在 [a,b] 上取变分场为 J；在 b 之后 (b,b+ε] 接上一段光滑截断（端点 γ(a)、γ(b+ε) 固定），得到一族曲线。

<h4>第二步：[a,b] 上的第二变分为零</h4>
J 是 Jacobi 场且满足边界条件 J(a)=J(b)=0。第二变分公式给出

<div class="eq">$$\delta^2E_{[a,b]}(J,J)=0$$</div>

<strong>为什么是零？</strong>因为 J 满足 Jacobi 方程（即第二变分的 Euler–Lagrange 方程），所以在这一段 J 是能量泛函的“临界方向”，二阶变分为零。

<h4>第三步：在 b 之后制造负贡献</h4>
因为 J 是第一个共轭点处的非零场，它在 b 处的导数 \(J'(b)\neq 0\)。在 (b,b+ε] 上取平行移动并乘一个光滑截断函数，可构造变分 \(V_\varepsilon\)，使得

<div class="eq">$$\delta^2E_{[b,b+\varepsilon]}(V_\varepsilon,V_\varepsilon)<0$$</div>

把两段拼接（端点固定），总第二变分

<div class="eq">$$\delta^2E=0+\delta^2E_{[b,b+\varepsilon]}<0$$</div>

<div class="keybox">$$\boxed{\text{存在比 }\gamma\text{ 更短的 }\gamma(a)\to\gamma(b+\varepsilon)\text{ 的道路}}$$</div>

<h4>结论</h4>

<div class="warnbox">在第一个共轭点 <strong>之前</strong>（[a,b] 上）测地线仍最短；<strong>一旦越过</strong>第一个共轭点就不再最短。共轭点 = 最短性失效的前兆。</div>

<div class="memobox"><strong>一句话记忆：</strong>第一个共轭点是“最短性”的生命线——越过它，测地线就“输了”。</div>`
  },
  "r46": {
    0: L`<h4>我们要证明什么</h4>
第二变分公式给出能量泛函在测地线处的二阶导数：

<div class="eq">$$\delta^2 E(V,V)=\int_a^b\Big(\lvert\nabla_{\dot\gamma}V\rvert^2-\langle R(V,\dot\gamma)\dot\gamma,V\rangle\Big)dt$$</div>

它是判断测地线是否为「能量极小」的基本工具。

<h4>第一步：设变分，写能量</h4>
设 \(\Gamma(s,t)\) 是测地线 \(\gamma\) 的变分，\(V(t)=\left.\frac{\partial\Gamma}{\partial s}\right|_{s=0}\) 是变分场，记 \(\nabla=\nabla_{\dot\gamma}\)。能量：

<div class="eq">$$E(\gamma_s)=\int_a^b\Big\langle\frac{\partial\Gamma}{\partial t},\frac{\partial\Gamma}{\partial t}\Big\rangle dt$$</div>

<h4>第二步：一阶变分</h4>
对 \(s\) 求导一次，用无挠性与分部积分：

<div class="eq">$$\frac{dE}{ds}=2\int_a^b\Big\langle\nabla_s\frac{\partial\Gamma}{\partial t},\frac{\partial\Gamma}{\partial t}\Big\rangle dt$$</div>

\(\gamma\) 是测地线 ⟹ 一阶变分为零（\(\gamma\) 是临界点）。

<h4>第三步：二阶变分</h4>
再对 \(s\) 求导，交换协变导数（出现曲率项 \(R\)），并在 \(s=0\) 处取值：

<div class="keybox">$$\boxed{\delta^2 E(V,V)=\int_a^b\Big(\lvert\nabla_{\dot\gamma}V\rvert^2-\langle R(V,\dot\gamma)\dot\gamma,V\rangle\Big)dt}$$</div>

<h4>第四步：共轭点 ⟹ 负特征方向</h4>
若 \(\gamma\) 上存在共轭点，则存在非零 Jacobi 场 \(V\)（两端为零）使 \(\delta^2E(V,V)=0\)；进一步可构造变分使 \(\delta^2E<0\)——测地线不再是极小。

<div class="memobox"><strong>一句话记忆：</strong>第二变分 = \(\int(|V'|^2-\langle R(V,\dot\gamma)\dot\gamma,V\rangle)\)，曲率项是「变负」的根源，共轭点带来负方向。</div>`
  },
  "r47": {
    0: L`<h4>这一定理在说什么</h4>
Morse 指标定理：能量泛函 \(E\) 在测地线 \(\gamma\) 上的 Morse 指标（负特征值个数）等于沿 \(\gamma\) 的共轭点个数（计重数）：

<div class="eq">$$\mathrm{index}(\gamma)=\#\{\text{共轭点（计重数）}\}$$</div>

<h4>第一步：第二变分与 Jacobi 算子</h4>
第二变分 \(\delta^2E(V,V)=\int_a^b\langle LV,V\rangle dt\)，其中 Jacobi 算子

<div class="eq">$$L=-\nabla_{\dot\gamma}^2-R(\cdot,\dot\gamma)\dot\gamma$$</div>

是 Sturm–Liouville 型算子。Morse 指标就是 \(L\) 的负特征值个数。

<h4>第二步：特征值与共轭点对应</h4>
固定端点 \(V(a)=V(b)=0\)。\(L\) 的特征值 \(\lambda_1<\lambda_2<\cdots\) 单调依赖于区间 \([a,b]\)。当 \(b\) 增大经过一个共轭点时，就有一个特征值从正变负——因为共轭点对应 \(LV=0\) 的非零解（零特征值）。

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{\mathrm{index}(\gamma)=\sum_{t\in(a,b)}\dim\{\text{Jacobi 场在 }t\text{ 为零}\}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>测地线的 Morse 指标 = 它经过的共轭点个数（计重数），共轭点 = 负特征值「新生的地方」。</div>`
  },
  "r48": {
    0: L`<h4>这一定理在说什么</h4>
Rauch 比较定理是比较几何的基石：<strong>曲率越大，Jacobi 场增长越慢</strong>。设截面曲率 \(K_M\ge K_{\tilde M}\)，两条等长单位速度测地线 \(\gamma,\tilde\gamma\) 上的 Jacobi 场 \(J,\tilde J\) 有相同初值，则

<div class="eq">$$\lvert J(t)\rvert\le\lvert\tilde J(t)\rvert$$</div>

<h4>第一步：Jacobi 方程的比较</h4>
\(J\) 满足 \(J''+R(J,\dot\gamma)\dot\gamma=0\)。曲率大 ⟹ \(R\) 大 ⟹ 回复力强 ⟹ 振荡更快、模长更早收缩。

<h4>第二步：指标形式的单调性</h4>
引入指标形式 \(I_t(J,J)=\int_0^t(\lvert J'\rvert^2-\langle R(J,\dot\gamma)\dot\gamma,J\rangle)ds\)。由于 \(K_M\ge K_{\tilde M}\)，被积函数里 \(-R\) 更小，故指标形式之间有关系，进而推出模长比较。

<h4>第三步：积分比较</h4>
对 \(f(t)=\lvert J(t)\rvert^2\) 求二阶导，用 Jacobi 方程与初值相同，得到微分不等式，解得：

<div class="keybox">$$\boxed{K_M\ge K_{\tilde M}\ \Longrightarrow\ \lvert J(t)\rvert\le\lvert\tilde J(t)\rvert}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>Rauch 定理：曲率越大 = 回复力越强 = Jacobi 场增长越慢（无共轭点区间内）。</div>`
  },
  "r49": {
    0: L`<h4>这一定理在说什么</h4>
Toponogov 定理把截面曲率下界转化为测地三角形的<strong>角度</strong>关系：

<div class="eq">$$K\ge c\ \Longrightarrow\ \text{顶角 }\ge\text{ 常曲率 }c\text{ 空间中同边长三角形的对应角}$$</div>

<h4>第一步：构造比较三角形</h4>
设 \(\Delta(p,q,r)\) 是 \(M\) 中测地三角形。在常曲率 \(c\) 空间 \(\widetilde M\) 中构造「同边长」的比较三角形 \(\tilde\Delta(\tilde p,\tilde q,\tilde r)\)。

<h4>第二步：固定一条边，用 Rauch 比较</h4>
固定边 \(pq\)，沿它构造 Jacobi 场 \(J\)，比较 \(M\) 与 \(\widetilde M\) 中从同一顶点发出的 Jacobi 场。由 Rauch 定理（\(K\ge c\)），\(M\) 中 Jacobi 场模长 \(\le\widetilde M\) 中对应场。

<h4>第三步：角度比较</h4>
两边模长与夹角的关系（余弦定理的变分版本）把「模长比较」翻译成「角度比较」，得到：

<div class="keybox">$$\boxed{K\ge c\ \Longrightarrow\ \angle(pqr)\ge\angle(\tilde p\tilde q\tilde r)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>Toponogov：曲率有下界 ⟹ 三角形「更胖」，顶角不小于常曲率比较三角形的角。</div>`
  },
  "r50": {
    0: L`<h4>这一定理在说什么</h4>
Bishop–Gromov 体积比较：Ricci 下界控制测地球体积的增长。若 \(\mathrm{Ric}\ge(n-1)c\,g\)，则体积比

<div class="eq">$$r\mapsto\frac{\mathrm{Vol}(B(p,r))}{V_c(r)}\quad\text{单调非增},\ \le 1,\ \lim_{r\to0}=1$$</div>

<h4>第一步：法坐标下的体积元</h4>
法坐标下体积元 \(dV=A(t,\theta)\,dt\,d\theta\)，其中 \(A=\det(\text{沿径向测地线的 Jacobi 场行列式})\)。

<h4>第二步：Ricci 下界 ⟹ \(A\) 增长受控</h4>
\(A\) 满足的微分不等式由 Ricci 曲率下界控制。设 \(A_c\) 是常曲率 \(c\) 空间的对应量，则

<div class="eq">$$\frac{A(t)}{A_c(t)}\ \text{单调非增}$$</div>

这是核心的「相对体积元单调性」。

<h4>第三步：积分得体积比较</h4>
对 \(\theta\) 积分得到体积比 \(\mathrm{Vol}(B(p,r))/V_c(r)\) 单调非增；当 \(r\to0\) 时两体积都趋于欧氏小球体积，比值为 \(1\)：

<div class="keybox">$$\boxed{\mathrm{Ric}\ge(n-1)c\ \Longrightarrow\ \frac{\mathrm{Vol}(B(p,r))}{V_c(r)}\ \text{单调非增}\le 1}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>Bishop–Gromov：Ricci 下界 ⟹ 体积比单调非增，测地球体积 ≤ 常曲率空间对应体积。</div>`
  },
  "r51": {
    0: L`<h4>这一定理在说什么</h4>
Bonnet–Myers 定理（直径界版本）：正 Ricci 下界 ⟹ 直径上界 + 基本群有限。

<div class="eq">$$\mathrm{Ric}\ge\frac{n-1}{R^2}g\ \Longrightarrow\ \mathrm{diam}(M)\le\pi R,\quad\pi_1(M)\ \text{有限}$$</div>

<h4>第一步：沿最长测地线构造变分</h4>
设 \(\gamma:[0,L]\to M\) 是最短测地线（\(L=\mathrm{diam}\)），取平行正交法向量场 \(E_1,\dots,E_{n-1}\)，构造固定端点的变分场：

<div class="eq">$$V_i(t)=\sin\frac{\pi t}{L}E_i(t),\qquad V_i(0)=V_i(L)=0$$</div>

<h4>第二步：第二变分公式</h4>

<div class="eq">$$\delta^2E(V_i,V_i)=\int_0^L\Big(\lvert\dot V_i\rvert^2-\langle R(V_i,\dot\gamma)\dot\gamma,V_i\rangle\Big)dt$$</div>

代入并利用 \(\sin^2\)，得

<div class="eq">$$\delta^2E(V_i,V_i)=\int_0^L\sin^2\frac{\pi t}{L}\Big(\frac{\pi^2}{L^2}-\langle R(E_i,\dot\gamma)\dot\gamma,E_i\rangle\Big)dt$$</div>

<h4>第三步：求和 + Ricci 下界 ⟹ 直径界</h4>
\(\sum_i\langle R(E_i,\dot\gamma)\dot\gamma,E_i\rangle=\mathrm{Ric}(\dot\gamma,\dot\gamma)\ge\frac{n-1}{R^2}\)。若 \(L>\pi R\)，则 \(\sum_i\delta^2E<0\)，与最短矛盾：

<div class="keybox">$$\boxed{\mathrm{diam}(M)\le\pi R}$$</div>

<h4>第四步：基本群有限</h4>
完备 + 直径有界 ⟹ 紧致；万有覆盖保留 Ricci 下界，也紧致 ⟹ \(\pi_1(M)\) 有限。

<div class="memobox"><strong>一句话记忆：</strong>正 Ricci 下界 = 弹簧，测地线在 \(\pi R\) 内被拉回重逢，流形紧致、基本群有限。</div>`
  },
  "r52": {
    0: L`<h4>这一定理在说什么</h4>
Gromov 紧致性定理：曲率、直径、体积有界的流形族在 Gromov–Hausdorff 拓扑下是<strong>预紧</strong>的。

<div class="eq">$$\{\lvert K\rvert\le1,\ \mathrm{diam}\le D,\ \mathrm{vol}\ge v>0\}\ \text{GH 预紧}$$</div>

<h4>第一步：构造一致的 ε-网</h4>
由 Bishop–Gromov 体积比较，曲率有界 + 体积下界给出每个流形可被一致有界个数（\(N(\varepsilon)\) 个）的 \(\varepsilon\)-球覆盖。

<h4>第二步：Gromov 的预紧判别</h4>
Gromov 证明：一族紧致度量空间若（1）直径一致有界，（2）对任意 \(\varepsilon\) 存在一致的 \(\varepsilon\)-网个数上界，则该族在 GH 拓扑下预紧。

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{\lvert K\rvert\le1+\mathrm{diam}\le D+\mathrm{vol}\ge v\ \Longrightarrow\ \text{GH 预紧}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>曲率/直径/体积有界 ⟹ 流形族只有「有限种形状」，GH 拓扑下预紧。</div>`
  },
  "t1": {
    0: L`<h4>我们要证明什么</h4>
连续映射间的同伦关系是<strong>等价关系</strong>（自反、对称、传递）。这是代数拓扑「分类」的起点——只有先确认同伦是等价关系，才能谈同伦类。

<h4>第一步：自反性</h4>
\(f\simeq f\)：取常数同伦

<div class="eq">$$H(x,t)=f(x),\qquad \forall t$$</div>

显然 \(H(x,0)=H(x,1)=f(x)\)。

<h4>第二步：对称性</h4>
若 \(H\) 给出 \(f\simeq g\)，则逆转时间参数给出 \(g\simeq f\)：

<div class="eq">$$H'(x,t)=H(x,1-t)$$</div>

<h4>第三步：传递性</h4>
若 \(f\simeq g\)（同伦 \(H_1\)）、\(g\simeq h\)（同伦 \(H_2\)），把两段各加速一倍拼接：

<div class="eq">$$H(x,t)=\begin{cases}H_1(x,2t),&t\le 1/2\\ H_2(x,2t-1),&t\ge 1/2\end{cases}$$</div>

在 \(t=1/2\) 处两者都等于 \(g(x)\)，连续衔接。

<div class="keybox">$$\boxed{f\simeq f,\quad f\simeq g\Rightarrow g\simeq f,\quad f\simeq g\simeq h\Rightarrow f\simeq h}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>同伦是等价关系，关键靠区间 \([0,1]\) 的重参数化拼接。</div>`,
    1: L`<h4>我们要证明什么</h4>
同伦等价保持连通分支数：\(X\simeq Y\) 时，两者有相同数量的连通分支。

<h4>第一步：映射保连通分支</h4>
连续映射把连通集映为连通集，故 \(f:X\to Y\) 把每个连通分支映到某个连通分支。

<h4>第二步：同伦逆保证双射</h4>
同伦等价有映射 \(f:X\to Y,\ g:Y\to X\) 满足 \(g\circ f\simeq\mathrm{id}_X,\ f\circ g\simeq\mathrm{id}_Y\)。于是 \(f\) 诱导连通分支间的映射，且 \(g\) 是它的逆——因为同伦保持分支对应关系（同伦映射把同一分支映到同一分支）。

<div class="keybox">$$\boxed{X\simeq Y\ \Longrightarrow\ \pi_0(X)\cong\pi_0(Y)}$$</div>

其中 \(\pi_0\) 记连通分支集合。

<div class="memobox"><strong>一句话记忆：</strong>连通分支数 \(\pi_0\) 是同伦不变量。</div>`
  },
  "t2": {
    0: L`<h4>我们要证明什么</h4>
基本群的函子性：连续映射 \(f:X\to Y\) 诱导群同态 \(f_*:\pi_1(X,x_0)\to\pi_1(Y,f(x_0))\)，且满足 \((f\circ g)_*=f_*\circ g_*\)。这使 \(\pi_1\) 成为从拓扑到群的<strong>函子</strong>。

<h4>第一步：定义诱导同态</h4>
对环路同伦类 \([\gamma]\)，定义

<div class="eq">$$f_*[\gamma]=[f\circ\gamma]$$</div>

即「把环路映过去」。

<h4>第二步：验证是群同态</h4>
环路乘积按定义 \((f_*(\alpha\cdot\beta))(t)\) 在 \(t\le 1/2\) 为 \(f(\alpha(2t))\)、\(t\ge 1/2\) 为 \(f(\beta(2t-1))\)，恰等于 \((f_*\alpha)\cdot(f_*\beta)\)。故 \(f_*(\alpha\cdot\beta)=f_*\alpha\cdot f_*\beta\)。

<h4>第三步：函子性</h4>
复合直接验证：

<div class="keybox">$$\boxed{(f\circ g)_*=f_*\circ g_*}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>\(\pi_1\) 是函子：映射复合对应同态复合。</div>`,
    1: L`<h4>我们要证明什么</h4>
同伦不变性：若 \(f\simeq g\)（保持基点），则 \(f_*=g_*\)。特别地，<strong>同伦等价的空间有同构的基本群</strong>。

<h4>第一步：用同伦搬运环路</h4>
设同伦 \(H:f\simeq g\) 保持基点。对任意环路 \(\gamma\)，\(H(\gamma(s),t)\) 给出 \(f\circ\gamma\) 与 \(g\circ\gamma\) 之间的同伦。

<h4>第二步：诱导同态相等</h4>
故 \([f\circ\gamma]=[g\circ\gamma]\) 对一切环路成立，即 \(f_*=g_*\)。

<h4>第三步：同伦等价 ⟹ 同构</h4>
若 \(X\simeq Y\)（映射 \(f,g\) 互为同伦逆），则 \(f_*\circ g_*=\mathrm{id}\)、\(g_*\circ f_*=\mathrm{id}\)，故 \(f_*\) 是同构。

<div class="keybox">$$\boxed{f\simeq g\ \Longrightarrow\ f_*=g_*,\qquad X\simeq Y\ \Longrightarrow\ \pi_1(X)\cong\pi_1(Y)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>基本群只看见「同伦型」，看不见更细的拓扑。</div>`
  },
  "t3": {
    0: L`<h4>我们要证明什么</h4>
Seifert–van Kampen 定理：若 \(X=U\cup V\)（开集）且 \(U\cap V\) 道路连通，则

<div class="eq">$$\pi_1(X)\cong\pi_1(U)*_{\pi_1(U\cap V)}\pi_1(V)$$</div>

即「融合自由积」。

<h4>第一步：分解环路</h4>
把 \(X\) 中任一环路分解为交替落在 \(U\)、\(V\) 中的片段，每段端点用 \(U\cap V\) 中的道路修正到基点。

<h4>第二步：自由积与融合关系</h4>
\(U\) 中的片段生成 \(\pi_1(U)\)，\(V\) 中的生成 \(\pi_1(V)\)，自由拼接得自由积。但 \(U\cap V\) 中的环路既属于 \(U\) 又属于 \(V\)，其两个包含像 \(i_*(\gamma),\ j_*(\gamma)\) 必须等同，这给出融合关系 \(N\)。

<h4>第三步：商掉关系</h4>

<div class="keybox">$$\boxed{\pi_1(X)\cong\big(\pi_1(U)*\pi_1(V)\big)/N}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>van Kampen = 把空间切两块，基本群是自由积模掉交集的关系。</div>`,
    1: L`<h4>我们要证明什么</h4>
乘积公式：\(\pi_1(X\times Y)\cong\pi_1(X)\times\pi_1(Y)\)。

<h4>第一步：投影诱导同态</h4>
投影 \(p_X,p_Y\) 诱导

<div class="eq">$$p_*[\gamma]=\big([p_X\circ\gamma],\ [p_Y\circ\gamma]\big)\in\pi_1(X)\times\pi_1(Y)$$</div>

<h4>第二步：逆映射</h4>
对 \(([\alpha],[\beta])\in\pi_1(X)\times\pi_1(Y)\)，构造乘积环路

<div class="eq">$$\gamma(t)=\big(\alpha(t),\ \beta(t)\big)$$</div>

<h4>第三步：互逆</h4>
两者互为逆映射（由乘积空间的万有性质），故

<div class="keybox">$$\boxed{\pi_1(X\times Y)\cong\pi_1(X)\times\pi_1(Y)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>基本群把「乘积」变为「直积」。</div>`
  },
  "t4": {
    0: L`<h4>我们要证明什么</h4>
道路提升定理：覆叠 \(p:\tilde X\to X\) 下，底空间道路 \(\gamma\) 可<strong>唯一</strong>提升到 \(\tilde X\) 中以给定 \(x_0\in p^{-1}(x_0)\) 为起点的道路。

<h4>第一步：Lebesgue 数分解区间</h4>
用 Lebesgue 数把 \([0,1]\) 分为有限个小区间 \([t_i,t_{i+1}]\)，使每个 \(\gamma([t_i,t_{i+1}])\) 落在某平凡化邻域 \(U\) 内。

<h4>第二步：逐段提升</h4>
在每段上，利用局部同胚 \(p^{-1}(U)\cong U\times F\) 唯一地选择「叶片」来提升道路。

<h4>第三步：端点衔接</h4>
相邻区间的提升在端点处由唯一性自动衔接，得到整体的提升道路。

<div class="keybox">$$\boxed{\gamma\ \text{可唯一提升到}\ \tilde\gamma,\quad \tilde\gamma(0)=x_0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>覆叠的局部乘积结构 ⟹ 道路逐段唯一提升。</div>`,
    1: L`<h4>我们要证明什么</h4>
同伦提升定理：覆叠空间具有<strong>同伦提升性质</strong>——底空间的道路同伦可整体提升。

<h4>第一步：Lebesgue 数分解方格</h4>
把同伦 \(H:I\times I\to X\) 的方形定义域用 Lebesgue 数分成小方格，每格像落在平凡化邻域。

<h4>第二步：逐格提升</h4>
按「下到上、左到右」顺序逐格提升，每格内用局部乘积结构，边界连续性由唯一性保证。

<h4>第三步：完整提升</h4>
紧致性保证有限分解，最终得到完整的提升同伦 \(\tilde H\)。

<div class="keybox">$$\boxed{H:I\times I\to X\ \text{可提升为}\ \tilde H:I\times I\to\tilde X}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>紧致性 ⟹ 有限方格 ⟹ 逐格提升同伦。</div>`
  },
  "t5": {
    0: L`<h4>我们要证明什么</h4>
覆叠空间分类定理：对「好空间」\(X\)，连通覆叠的等价类与 \(\pi_1(X,x_0)\) 的<strong>子群共轭类</strong>一一对应。

<h4>第一步：从子群构造覆叠</h4>
给定子群 \(H\subset\pi_1(X)\)，取万有覆叠 \(\tilde X_{\mathrm{univ}}\)，定义等价关系：两点等价若投影相同且连接道路在 \(H\) 中。商空间即对应 \(H\) 的覆叠。

<h4>第二步：从覆叠读子群</h4>
给定覆叠 \(p:\tilde X\to X\)，对应子群为 \(p_*(\pi_1(\tilde X,\tilde x_0))\)。

<h4>第三步：共轭类对应</h4>
基点选择的不确定性体现为子群共轭，故等价类 ↔ 共轭类。

<div class="keybox">$$\boxed{\{\text{连通覆叠}\}/\sim\ \longleftrightarrow\ \{\pi_1(X)\ \text{子群}\}/\text{共轭}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>覆叠分类 = 基本群子群的共轭类分类。</div>`,
    1: L`<h4>我们要证明什么</h4>
万有覆叠存在性：\(X\) 半局部单连通 ⟺ 存在万有覆叠。

<h4>第一步：构造候选空间</h4>
取 \(X\) 中以 \(x_0\) 为起点的道路同伦类集合，赋以由开集 \(UV_\alpha=\{[\gamma\cdot\eta]:\eta\subset V_\alpha\}\) 生成的拓扑。

<h4>第二步：投影映射</h4>
投影取终点 \(p[\gamma]=\gamma(1)\)。

<h4>第三步：验证是覆叠且单连通</h4>
半局部单连通性保证 \(p\) 是覆叠；该空间单连通因为任何环路可收缩到基点。

<div class="keybox">$$\boxed{\text{半局部单连通}\ \Longleftrightarrow\ \text{存在万有覆叠}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>万有覆叠由「道路同伦类」构造，单连通性自动满足。</div>`
  },
  "t6": {
    0: L`<h4>我们要证明什么</h4>
Seifert–van Kampen 定理（完整形式）：若 \(X=U\cup V\) 且 \(U\cap V\) 道路连通，则

<div class="eq">$$\pi_1(X)\cong\pi_1(U)*_{\pi_1(U\cap V)}\pi_1(V)$$</div>

<h4>第一步：诱导同态</h4>
包含映射诱导 \(i_*:\pi_1(U\cap V)\to\pi_1(U)\) 与 \(j_*:\pi_1(U\cap V)\to\pi_1(V)\)。

<h4>第二步：融合自由积</h4>
融合自由积由 \(\pi_1(U)\)、\(\pi_1(V)\) 的生成元生成，关系为 \(i_*(\gamma)=j_*(\gamma)\) 对一切 \(\gamma\in\pi_1(U\cap V)\)。

<h4>第三步：万有性质</h4>
这是群范畴中的<strong>推出</strong>，其万有性质唯一确定 \(\pi_1(X)\)。

<div class="keybox">$$\boxed{\pi_1(X)\cong\pi_1(U)*_{\pi_1(U\cap V)}\pi_1(V)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>van Kampen 是群范畴中的推出图表。</div>`,
    1: L`<h4>我们要证明什么</h4>
van Kampen 定理的推广：可推广到多个开集覆盖，用<strong>基本群胚</strong>（fundamental groupoid）或范畴论语言表述更简洁。

<h4>第一步：基本群胚</h4>
考虑基本群胚 \(\Pi(X)\)——对象是点、态射是道路同伦类。它比基本群更「无基点」，更适合多开集覆盖。

<h4>第二步：多开集的 2-余极限</h4>
对覆盖 \(\{U_\alpha\}\)，\(\Pi(X)\) 同构于 \(\Pi(U_\alpha)\) 沿 \(\Pi(U_\alpha\cap U_\beta)\) 的 2-余极限（colimit）。

<h4>第三步：范畴论意义</h4>
这一表述避免了基点选择问题，自然处理多个开集的重叠关系，是 Grothendieck 的 Galois 理论在拓扑中的体现。

<div class="keybox">$$\boxed{\Pi(X)\cong\operatorname{colim}_\alpha\Pi(U_\alpha)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>群胚版本 = 把 van Kampen 写成范畴的余极限。</div>`
  },
  "t7": {
    0: L`<h4>我们要证明什么</h4>
Brouwer 不动点定理（二维）：连续映射 \(f:D^2\to D^2\) 必有不动点。我们用基本群给出一个漂亮的矛盾证明。

<h4>第一步：反设无不动点</h4>
假设 \(f(x)\neq x\) 恒成立。对每点 \(x\)，从 \(f(x)\) 出发过 \(x\) 的射线交边界 \(S^1\) 于一点 \(r(x)\)。

<h4>第二步：构造收缩映射</h4>
这样得到 \(r:D^2\to S^1\)，且在边界上 \(r|_{S^1}=\mathrm{id}_{S^1}\)，即 \(r\circ i=\mathrm{id}_{S^1}\)。

<h4>第三步：基本群矛盾</h4>
作用在基本群上得 \(\mathrm{id}_{\mathbb Z}=r_*\circ i_*\)。但 \(\pi_1(D^2)=\{e\}\)、\(\pi_1(S^1)=\mathbb Z\)，于是 \(i_*:\mathbb Z\to\{e\}\) 是零映射，复合必为零，矛盾于 \(\mathrm{id}_{\mathbb Z}\)。

<div class="keybox">$$\boxed{f:D^2\to D^2\ \text{必有不动点}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>若无不动点就收缩到边界，但基本群 \(\mathbb Z\to\{e\}\to\mathbb Z\) 不可能是恒等。</div>`,
    1: L`<h4>我们要证明什么</h4>
Borsuk–Ulam 定理：连续映射 \(f:S^n\to\mathbb R^n\) 必存在 \(x\) 使 \(f(x)=f(-x)\)。

<h4>第一步：反设处处不同</h4>
假设 \(f(x)\neq f(-x)\) 恒成立，定义

<div class="eq">$$g(x)=\frac{f(x)-f(-x)}{|f(x)-f(-x)|}:S^n\to S^{n-1}$$</div>

<h4>第二步：g 是奇映射</h4>
直接验证 \(g(-x)=-g(x)\)。

<h4>第三步：奇映射诱导矛盾</h4>
奇映射 \(g\) 下降到 \(RP^n\to RP^{n-1}\) 的映射，这与两者的同调群结构矛盾（奇映射不能保持拓扑不变量）。

<div class="keybox">$$\boxed{\exists x\in S^n:\ f(x)=f(-x)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>若对径点值总不同，就构造出不可能的「奇映射」。</div>`
  },
  "t8": {
    0: L`<h4>我们要证明什么</h4>
形变收缩诱导同伦等价：若 \(A\) 是 \(X\) 的形变收缩核，则包含映射 \(i:A\hookrightarrow X\) 是同伦等价，故 \(\pi_1(A)\cong\pi_1(X)\)。

<h4>第一步：形变收缩的定义</h4>
存在收缩 \(r:X\to A\) 满足 \(r\circ i=\mathrm{id}_A\) 且 \(i\circ r\simeq\mathrm{id}_X\)（保持 \(A\) 中点不动）。

<h4>第二步：i 与 r 互为同伦逆</h4>
两条复合都是恒等（或同伦于恒等），故 \(i\) 是同伦等价。

<h4>第三步：作用于基本群</h4>

<div class="keybox">$$\boxed{i_*:\pi_1(A)\xrightarrow{\cong}\pi_1(X)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>形变收缩核与原空间同伦等价，基本群直接相等。</div>`,
    1: L`<h4>我们要证明什么</h4>
CW 复形中的形变收缩可逐细胞构造。

<h4>第一步：径向收缩胞腔</h4>
对每个 \(n\) 维胞腔，沿径向把内部形变收缩到边界 \(S^{n-1}\)。

<h4>第二步：从高维到低维归纳</h4>
先收缩最高维胞腔，保持已收缩部分不动；再收缩次高维，依此类推。

<h4>第三步：闭包有限性保证有限步</h4>
CW 复形的闭包有限性使归纳在有限步内完成，得到整体形变收缩。

<div class="keybox">$$\boxed{\text{CW 复形的子复形可逐细胞收缩}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>细胞从高到低逐个「捏瘪」，得到形变收缩。</div>`
  },
  "t9": {
    0: L`<h4>我们要证明什么</h4>
单纯逼近定理：任何连续映射 \(f:K\to L\) 可被单纯映射<strong>逼近</strong>（在重心重分后）。

<h4>第一步：开星形覆盖</h4>
取 \(L\) 的开星形覆盖。\(K\) 的紧致性保证存在 Lebesgue 数。

<h4>第二步：重心重分</h4>
把 \(K\) 充分重心重分，使每个单纯形的像落在 \(L\) 的某个开星形内。

<h4>第三步：定义单纯逼近</h4>
定义单纯映射 \(g\) 把每个顶点映到其像所在开星形的顶点，则 \(g\) 与 \(f\) 同伦。

<div class="keybox">$$\boxed{f\ \text{可被单纯映射逼近（重分后）}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>连续映射「离散化」为单纯映射，靠开星形覆盖与 Lebesgue 数。</div>`,
    1: L`<h4>我们要证明什么</h4>
三角剖分存在性：光滑流形总可三角剖分，但存在不可三角剖分的拓扑流形。

<h4>第一步：光滑流形可三角剖分</h4>
Whitney 嵌入定理把流形嵌入 \(\mathbb R^N\)，取足够细的立方剖分，再细分每个立方体为单纯形。光滑性保证足够细时与流形同胚。

<h4>第二步：反例</h4>
Freedman 的 \(E8\) 流形等拓扑流形不可三角剖分。

<div class="keybox">$$\boxed{\text{光滑流形可三角剖分；但有些拓扑流形不可}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>光滑 ⟹ 可剖分；拓扑流形不一定。</div>`
  },
  "t10": {
    0: L`<h4>我们要证明什么</h4>
\(\partial^2=0\) 定理：\(\partial_n\circ\partial_{n+1}=0\)，故 \(\mathrm{im}\,\partial_{n+1}\subset\ker\partial_n\)，同调群良定义。

<h4>第一步：边界算子</h4>
\(\partial_n[v_0,\dots,v_n]=\sum_{i=0}^n(-1)^i[v_0,\dots,\hat v_i,\dots,v_n]\)。

<h4>第二步：二次取边界</h4>
计算 \(\partial_{n-1}\partial_n[v_0,\dots,v_n]\)：每个去掉两个顶点的面出现<strong>两次</strong>，一次 \((-1)^{i+j}\)、一次 \((-1)^{i+j-1}\)，符号相反。

<h4>第三步：相消</h4>

<div class="keybox">$$\boxed{\partial_{n-1}\circ\partial_n=0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>「边界没有边界」——每个面被计入两次且符号相反。</div>`,
    1: L`<h4>我们要证明什么</h4>
同调的不变性：同胚（乃至同伦等价）的空间有同构的同调群。

<h4>第一步：同胚诱导链复形同构</h4>
同胚直接诱导单纯复形同构，进而链复形同构，同调群同构。

<h4>第二步：同伦不变性需链同伦</h4>
对单纯映射 \(f,g\)，构造棱柱算子 \(P\) 满足

<div class="eq">$$\partial P+P\partial=g_\#-f_\#$$</div>

<h4>第三步：链同伦 ⟹ 相同同调</h4>
\(f_\#,g_\#\) 链同伦，故诱导相同的同调同态。

<div class="keybox">$$\boxed{X\simeq Y\ \Longrightarrow\ H_n(X)\cong H_n(Y)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>同调是同伦不变量，靠棱柱算子构造链同伦。</div>`
  },
  "t11": {
    0: L`<h4>我们要证明什么</h4>
奇异同调的同伦不变性：\(f\simeq g\) 时 \(f_*=g_*:H_n(X)\to H_n(Y)\)。

<h4>第一步：构造棱柱算子</h4>
对奇异单纯形 \(\sigma:\Delta^n\to X\)，把棱柱 \(\Delta^n\times I\) 三角剖分，定义 \(P:C_n(X)\to C_{n+1}(Y)\)。

<h4>第二步：验证链同伦公式</h4>

<div class="eq">$$\partial P+P\partial=g_\#-f_\#$$</div>

<h4>第三步：诱导相同同调</h4>
故 \(f_\#,g_\#\) 链同伦，诱导相同同调同态。

<div class="keybox">$$\boxed{f\simeq g\ \Longrightarrow\ f_*=g_*}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>棱柱的三角剖分给出链同伦，同调不随同伦变。</div>`,
    1: L`<h4>我们要证明什么</h4>
切除定理：若 \(\bar Z\subset\mathrm{Int}(A)\)，则 \((X\setminus Z,\ A\setminus Z)\hookrightarrow(X,A)\) 诱导同调同构。

<h4>第一步：重心重分</h4>
把 \(X\) 中的奇异链重心重分为小单纯形，使其像要么落在 \(A\)、要么落在 \(X\setminus Z\)。

<h4>第二步：利用包含条件</h4>
条件 \(\bar Z\subset\mathrm{Int}(A)\) 保证重分足够细时，任何与 \(Z\) 相交的单纯形都完全落在 \(A\) 内。

<h4>第三步：链可分解</h4>
于是 \(X\) 的链可分解为 \(A\) 与 \(X\setminus Z\) 中链之和，包含映射是链同伦等价。

<div class="keybox">$$\boxed{H_n(X\setminus Z,\ A\setminus Z)\cong H_n(X,A)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>切除 = 重心重分把链「推入」\(A\) 或 \(X\setminus Z\)。</div>`
  },
  "t12": {
    0: L`<h4>我们要证明什么</h4>
空间对的长正合序列：对 \((X,A)\) 有

<div class="eq">$$\cdots\to H_n(A)\to H_n(X)\to H_n(X,A)\xrightarrow{\partial}H_{n-1}(A)\to\cdots$$</div>

<h4>第一步：短正合序列</h4>
链复形层面有 \(0\to C_n(A)\to C_n(X)\to C_n(X,A)\to 0\)。

<h4>第二步：蛇形引理</h4>
短正合序列诱导同调长正合序列（蛇形引理）。

<h4>第三步：连接同态</h4>
连接同态 \(\partial\) 取相对闭链的边界。

<div class="keybox">$$\boxed{\cdots\to H_n(A)\to H_n(X)\to H_n(X,A)\to H_{n-1}(A)\to\cdots}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>空间对给出长正合序列，靠短正合链列与蛇形引理。</div>`,
    1: L`<h4>我们要证明什么</h4>
切除定理（Eilenberg–Steenrod 公理形式）：若 \(\bar Z\subset\mathrm{Int}(A)\)，则包含映射诱导同调同构。

<h4>第一步：令 \(U=X\setminus Z\)</h4>
条件等价于 \(\bar U\subset\mathrm{Int}(A)\) 的补集形式，且 \(U\) 与 \(A\) 的内部覆盖 \(X\)。

<h4>第二步：重心重分</h4>
把奇异链细分为落在 \(U\) 或 \(A\) 中的小链。

<h4>第三步：链同伦等价</h4>
\(C_n^{U+A}(X)\hookrightarrow C_n(X)\) 是链同伦等价，从而是拟同构。

<div class="keybox">$$\boxed{H_n(X\setminus Z,\ A\setminus Z)\xrightarrow{\cong}H_n(X,A)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>切除是公理体系的第 5 条（Eilenberg–Steenrod）。</div>`
  },
  "t13": {
    0: L`<h4>我们要证明什么</h4>
若 \(X=\mathrm{Int}(U)\cup\mathrm{Int}(V)\)，则存在连接 \(U,V\) 各自同调与 \(X\) 同调的长正合序列——这就是 <strong>Mayer–Vietoris 序列</strong>，它是「把空间拆成两块算同调」的核心工具。

<h4>第一步：构造链复形短正合列</h4>
定义 \(C_n^{U+V}(X)\) 为像落在 \(U\) 或 \(V\) 中的奇异链生成的子复形。考虑链复形短正合列

<div class="eq">$$0\to C_*(U\cap V)\to C_*(U)\oplus C_*(V)\to C_*^{U+V}(X)\to 0$$</div>

三个映射分别是 \(z\mapsto(z,-z)\) 与 \((u,v)\mapsto u+v\)。

<h4>第二步：验证正合性</h4>
中间核是 \(\{(u,v):u+v=0\}\)，即 \(u\) 与 \(v\) 在 \(U\cap V\) 中相消，故 \((u,v)=(z,-z)\) 型——恰好是左映射的像；右映射满射显然（\(U+V\) 中链本就可拆成 \(U\)、\(V\) 链之和）。

<h4>第三步：蛇形引理 + 切除</h4>
短正合链列由蛇形引理诱导同调长正合序列。连接同态 \(\partial:H_n(X)\to H_{n-1}(U\cap V)\) 的构造是：取 \(X\) 的闭链 \(z=u+v\)（\(u\in U\)、\(v\in V\)），由 \(\partial z=\partial u+\partial v=0\) 得 \(\partial u=-\partial v\in C_{n-1}(U\cap V)\)，定义 \(\partial[z]=[\partial u]\)。最后由切除定理 \(H_n^{U+V}(X)\cong H_n(X)\)。

<div class="keybox">$$\boxed{\cdots\to H_n(U\cap V)\to H_n(U)\oplus H_n(V)\to H_n(X)\to H_{n-1}(U\cap V)\to\cdots}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>拆空间 ⟹ 短正合链列 ⟹ 蛇形引理 ⟹ 长正合序列。</div>`,
    1: L`<h4>我们要证明什么</h4>
Mayer–Vietoris 序列是<strong>自然的</strong>：若 \(f:X\to Y\) 满足 \(f(U)\subset U'\)、\(f(V)\subset V'\)，则 \(f\) 诱导两条 M–V 序列之间的映射，且所有方块交换。这是「工具可随函子使用」的保证。

<h4>第一步：连接同态良定义</h4>
取 \(X\) 闭链 \(z\)，重分使 \(z=u+v\)（\(u\in U\)、\(v\in V\)），则 \(\partial z=\partial u+\partial v=0\) 给出 \(\partial u=-\partial v\in C_{n-1}(U\cap V)\)，定义 \(\partial[z]=[\partial u]\)。

<h4>第二步：不依赖代表元与重分</h4>
若有两种分解 \(z=u+v=u'+v'\)，差 \((u-u',v-v')\) 的边界在 \(U\cap V\) 中只相差边界，故 \([\partial u]=[\partial u']\)——连接同态良定义。

<h4>第三步：自然性</h4>
链映射 \(f_\#\) 与重分、分解交换（因为 \(f\) 保持覆盖），故 \(f\) 诱导的各方块图交换。

<div class="keybox">$$\boxed{f\ \text{保持覆盖}\ \Longrightarrow\ f_*\ \text{使 M–V 序列自然交换}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>M–V 序列是自然变换，可与函子性、切除公理统一使用。</div>`
  },
  "t14": {
    0: L`<h4>我们要证明什么</h4>
CW 复形 \(X\) 的<strong>胞腔同调</strong>与奇异同调自然同构。这是把抽象的奇异同调化为「按胞腔数」可手算的局部同调。

<h4>第一步：相对同调的基本计算</h4>
关键是相对同调 \(H_k(X^n,X^{n-1})\)：因为商空间

<div class="eq">$$X^n/X^{n-1}=\bigvee_\alpha S^n_\alpha$$</div>

是 \(n\) 维球的束和（\(X^n\setminus X^{n-1}=\coprod_\alpha e_\alpha^n\) 是开胞腔的不交并），所以

<div class="eq">$$H_k(X^n,X^{n-1})=\begin{cases}\mathbb Z^{\#(n\text{ 胞腔})},&k=n\\0,&k\neq n\end{cases}$$</div>

<h4>第二步：长正合序列逐维回推</h4>
由 \(H_k(X^{n-1})\to H_k(X^n)\to H_k(X^n,X^{n-1})\to H_{k-1}(X^{n-1})\) 正合，归纳地证明 \(H_n(X^n)\) 恰好等于胞腔同调第 \(n\) 群：正合性把高维（\(k>n\) 时为 0）与低维的干扰都切断。

<h4>第三步：取正向极限</h4>
\(X=\operatorname{colim}_n X^n\)，紧致性断言每个奇异链（同调类）都落在某个有限骨架 \(X^n\) 内，故 \(H_k(X)\cong H_k(X^n)\) 对足够大的 \(n\)。

<div class="keybox">$$\boxed{H_n(X)\cong H_n^{\mathrm{CW}}(X)\quad(\text{自然同构})}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>胞腔同调 = 相对同调 \(H_n(X^n,X^{n-1})\) 沿骨架的长正合序列拼接。</div>`,
    1: L`<h4>我们要证明什么</h4>
CW 逼近定理：任何拓扑空间 \(X\) 都存在弱同伦等价 \(f:Z\to X\)，其中 \(Z\) 是 CW 复形。这是「同伦论可限于 CW 复形范畴」的依据。

<h4>第一步：归纳构造骨架</h4>
假设已构造 \(Z^{n-1}\) 与映射 \(f^{n-1}\)（诱导 \(i\le n-1\) 维同伦群同构）。

<h4>第二步：粘贴胞腔补全 \(\pi_n\)</h4>
对 \(\pi_n(X)\) 的每个生成元（即表示球面 \(S^n\to X\) 的映射），粘贴一个 \(n\) 维胞腔把 \(Z^{n-1}\) 缺失的 \(\pi_n\) 信息补上。

<h4>第三步：消去核并填充高维</h4>
对 \(f_*:\pi_n(Z)\to\pi_n(X)\) 核中元素，粘贴 \((n+1)\) 维胞腔用同伦填充消去之；逐维进行取极限 \(Z=\operatorname{colim} Z^n\)。

<div class="keybox">$$\boxed{\text{任何空间弱同伦等价于某个 CW 复形}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>逐维「粘贴胞腔补生成元、消核」，任何空间都弱等价于 CW 复形。</div>`
  },
  "t15": {
    0: L`<h4>我们要证明什么</h4>
胞腔边界公式：胞腔链复形中的边界算子由<strong>粘贴映射的度数</strong>完全决定

<div class="eq">$$d_n(e_\alpha^n)=\sum_\beta \deg(\varphi_{\alpha\beta})\,e_\beta^{n-1}$$</div>

这是胞腔同调「可手算」的关键——把抽象边界化为球面映射度数。

<h4>第一步：边界算子的分解</h4>
\(d_n\) 是合成

<div class="eq">$$H_n(X^n,X^{n-1})\xrightarrow{\partial}H_{n-1}(X^{n-1})\xrightarrow{q}H_{n-1}(X^{n-1},X^{n-2})$$</div>

其中第一映射是长正合序列的连接同态，第二映射 \(q\) 是把 \(X^{n-1}\) 中除 \(e_\beta^{n-1}\) 外的胞腔都塌缩到一点。

<h4>第二步：合成得到球面映射</h4>
对 \(e_\alpha^n\) 的粘贴映射 \(\varphi_\alpha:S^{n-1}\to X^{n-1}\)，与「塌缩到 \(e_\beta^{n-1}\) 的球面」合成，得到球面间映射 \(S^{n-1}\to S^{n-1}_\beta\)。

<h4>第三步：度数即系数</h4>
该合成的度数 \(\deg(\varphi_{\alpha\beta})\) 正是 \(d_n(e_\alpha^n)\) 中 \(e_\beta^{n-1}\) 前的系数。

<div class="keybox">$$\boxed{d_n(e_\alpha^n)=\sum_\beta \deg(\varphi_{\alpha\beta})\,e_\beta^{n-1}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>胞腔边界 = 粘贴映射的度数；RP² 中 \(d_2(e^2)=2e^1\) 由此而来。</div>`,
    1: L`<h4>我们要证明什么</h4>
用边界公式算一个具体例子：\(RP^2\) 的胞腔同调，验证公式 \(d_2(e^2)=2e^1\)。

<h4>第一步：\(RP^2\) 的胞腔结构</h4>
\(RP^2=e^0\cup e^1\cup e^2\)，粘贴映射 \(\varphi:S^1\to S^1\) 是 \(z\mapsto z^2\)（对径粘合）。

<h4>第二步：度数</h4>
映射 \(z\mapsto z^2\) 的度数为 \(2\)，故

<div class="eq">$$d_2(e^2)=\deg(\varphi)\,e^1=2e^1$$</div>

而 \(d_1(e^1)=0\)（两端点重合到 \(e^0\)）。

<h4>第三步：链复形与同调</h4>
链复形 \(0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\xrightarrow{0}\mathbb Z\to 0\)，故 \(H_2=\ker(\times2)=0\)、\(H_1=\ker(0)/\mathrm{im}(\times2)=\mathbb Z/2\)、\(H_0=\mathbb Z\)。

<div class="keybox">$$\boxed{H_0(RP^2)=\mathbb Z,\quad H_1(RP^2)=\mathbb Z/2,\quad H_2(RP^2)=0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>粘贴映射度数 2 直接给出 \(H_1=\mathbb Z/2\)。</div>`
  },
  "t16": {
    0: L`<h4>我们要证明什么</h4>
Lefschetz 不动点定理：定义 Lefschetz 数

<div class="eq">$$L(f)=\sum_{n}(-1)^n\,\mathrm{tr}\bigl(f_*:H_n(X;\mathbb Q)\to H_n(X;\mathbb Q)\bigr)$$</div>

若 \(L(f)\neq 0\)，则 \(f\) 必有不动点。它是 Brouwer 不动点定理的深远推广。

<h4>第一步：反证设无不动点</h4>
由紧致性，把 \(X\) 三角剖分得足够细，使 \(f\) 把每个单纯形映离自身。

<h4>第二步：链层面的迹局部化为零</h4>
对足够细的剖分，\(f\) 不把任何单纯形映入其闭包邻域，故链映射迹的局部化计算给出

<div class="eq">$$L(f)=\sum_n(-1)^n\,\mathrm{tr}(f_\#)=0$$</div>

<h4>第三步：矛盾</h4>
这与 \(L(f)\neq 0\) 矛盾。对可缩空间，\(H_0=\mathbb Q\)、\(H_n=0\ (n>0)\)，故 \(L(\mathrm{id})=\mathrm{tr}(\mathrm{id}_{H_0})=1\neq0\)，必有不动态点——这正恢复 Brouwer。

<div class="keybox">$$\boxed{L(f)\neq0\ \Longrightarrow\ f\ \text{有不动点}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>Lefschetz 数非零 ⟹ 有不动点，可缩空间 \(L=1\) 恒成立。</div>`,
    1: L`<h4>我们要证明什么</h4>
Poincaré–Hopf 指标定理：紧流形 \(M\) 上孤立奇点向量场的<strong>指标和等于 Euler 示性数</strong> \(\chi(M)\)，且与向量场选取无关。

<h4>第一步：指标的定义</h4>
向量场 \(v\) 在孤立奇点 \(p\) 处，取小环绕球面 \(S^{n-1}\)，指标为

<div class="eq">$$\mathrm{ind}_p(v)=\deg\!\left(\frac{v}{|v|}:S^{n-1}\to S^{n-1}\right)$$</div>

<h4>第二步：用流构造自映射</h4>
取向量场的小流 \(\varphi_\varepsilon:M\to M\)（推进小时间 \(\varepsilon\)）。\(\varphi_\varepsilon\) 的不动点恰是 \(v\) 的奇点，且每个不动点的局部 Lefschetz 指标等于该奇点的向量场指标。

<h4>第三步：双面计算 Lefschetz 数</h4>
一方面 \(\varphi_\varepsilon\simeq\mathrm{id}_M\)，故 \(L(\varphi_\varepsilon)=L(\mathrm{id}_M)=\chi(M)\)；另一方面 \(L(\varphi_\varepsilon)=\sum_{\text{奇点}}\mathrm{ind}_p(v)\)。二者相等。

<div class="keybox">$$\boxed{\sum_{\text{奇点 }p}\mathrm{ind}_p(v)=\chi(M)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>向量场奇点指标和 = \(\chi(M)\)；\(\chi(S^2)=2\) ⟹ 毛球定理。</div>`
  },
  "t17": {
    0: L`<h4>我们要证明什么</h4>
上同调 \(H^n\) 是<strong>反变函子</strong>：连续映射 \(f:X\to Y\) 诱导 \(f^*:H^n(Y)\to H^n(X)\)，方向与 \(f\) 相反。

<h4>第一步：上链映射的定义</h4>
上链映射 \(f^\#:C^n(Y)\to C^n(X)\) 定义为<strong>前复合</strong> \(\varphi\mapsto\varphi\circ f_\#\)。

<h4>第二步：验证与上边缘交换</h4>

<div class="eq">$$(\delta f^\#\varphi)(c)=f^\#\varphi(\partial c)=\varphi(f_\#\partial c)=\varphi(\partial f_\#c)=\delta\varphi(f_\#c)=f^\#(\delta\varphi)(c)$$</div>

故 \(f^\#\) 是链映射，诱导上同调同态 \(f^*\)。

<h4>第三步：反变性</h4>

<div class="eq">$$(g\circ f)^*\varphi=\varphi\circ g_\#\circ f_\#=(g^*\varphi)\circ f_\#=f^*(g^*\varphi)=(f^*\circ g^*)\varphi$$</div>

<div class="keybox">$$\boxed{H^n:\ \text{空间范畴}^{\mathrm{op}}\to\text{分次群范畴}\quad(\text{反变})}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>上同调反变，来自上链「拉回」的前复合。</div>`,
    1: L`<h4>我们要证明什么</h4>
上同调与同调的关系：群结构由万有系数定理给出，但上同调<strong>多出一个环结构</strong>，这使它携带严格更多的信息。

<h4>第一步：万有系数定理</h4>

<div class="eq">$$H^n(X;G)\cong\mathrm{Hom}(H_n(X),G)\oplus\mathrm{Ext}(H_{n-1}(X),G)$$</div>

同调测「洞」（链模边界），上同调测「函数」（上链模余边界）。

<h4>第二步：环结构</h4>
同调只有分次群结构，上同调有 Cup 积赋予的环结构 \(H^*(X)=\bigoplus_n H^n(X)\)，可分辨「同调同构但不同伦」的空间。

<h4>第三步：具体例子</h4>
\(CP^2\) 与 \(S^2\vee S^4\) 同调同构，但前者 Cup 积 \(\alpha^2=\beta\neq0\)，后者 Cup 积全零，故不同伦等价。

<div class="keybox">$$\boxed{H^*(X)\ \text{的 Cup 积环结构}\ \Longrightarrow\ \text{更精细的拓扑信息}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>上同调 = 同调的对偶 + Cup 积环结构。</div>`
  },
  "t18": {
    0: L`<h4>我们要证明什么</h4>
Cup 积的<strong>分次交换性</strong>：\(\alpha\smile\beta=(-1)^{pq}\beta\smile\alpha\)（\(|\alpha|=p\)、\(|\beta|=q\)）。

<h4>第一步：上链层面</h4>

<div class="eq">$$(\varphi\smile\psi)(\sigma)=\varphi(\sigma|_{[v_0,\dots,v_p]})\cdot\psi(\sigma|_{[v_p,\dots,v_{p+q}]})$$</div>

交换 \(\varphi,\psi\) 需把顶点序 \((v_0,\dots,v_p,v_p,\dots,v_{p+q})\) 重排为 \((v_p,\dots,v_{p+q},v_0,\dots,v_p)\)。

<h4>第二步：重排的符号</h4>
把后 \(q\) 个顶点移到前面需 \(p\cdot q\) 次相邻对换，故符号为 \((-1)^{pq}\)。

<h4>第三步：相差边界</h4>
因此 \(\varphi\smile\psi\) 与 \((-1)^{pq}\psi\smile\varphi\) 相差一个边界，在上同调类层面相等。

<div class="keybox">$$\boxed{[\varphi\smile\psi]=(-1)^{pq}[\psi\smile\varphi]}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>换序要做 \(pq\) 次相邻对换，Cup 积分次交换。</div>`,
    1: L`<h4>我们要证明什么</h4>
Cup 积的<strong>自然性</strong>：连续映射 \(f:X\to Y\) 诱导的 \(f^*:H^*(Y)\to H^*(X)\) 是环同态，即

<div class="eq">$$f^*(\alpha\smile\beta)=f^*(\alpha)\smile f^*(\beta)$$</div>

<h4>第一步：上链层面验证</h4>
对 \(\varphi\in C^p(Y)\)、\(\psi\in C^q(Y)\)、奇异单纯形 \(\sigma:\Delta^{p+q}\to X\)：

<div class="eq">$$f^\#(\varphi\smile\psi)(\sigma)=(\varphi\smile\psi)(f\circ\sigma)=\varphi((f\circ\sigma)|_{\text{前}})\cdot\psi((f\circ\sigma)|_{\text{后}})$$</div>

<h4>第二步：另一边</h4>

<div class="eq">$$(f^\#\varphi\smile f^\#\psi)(\sigma)=f^\#\varphi(\sigma|_{\text{前}})\cdot f^\#\psi(\sigma|_{\text{后}})=\varphi(f\circ\sigma|_{\text{前}})\cdot\psi(f\circ\sigma|_{\text{后}})$$</div>

<h4>第三步：相等</h4>
因为 \((f\circ\sigma)|_{\text{前}}=f\circ(\sigma|_{\text{前}})\) 是同一个限制，两式相等，故 \(f^\#(\varphi\smile\psi)=f^\#\varphi\smile f^\#\psi\) 在上链层面成立。

<div class="keybox">$$\boxed{f^*:H^*(Y)\to H^*(X)\ \text{是分次环同态}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>拉回与限制交换 ⟹ Cup 积自然。</div>`
  },
  "t19": {
    0: L`<h4>我们要证明什么</h4>
同调万有系数定理：系数群 \(G\) 下的同调 \(H_n(X;G)\) 由整数同调与 \(\mathrm{Tor}\) 完全决定

<div class="eq">$$0\to H_n(X)\otimes G\to H_n(X;G)\to\mathrm{Tor}(H_{n-1}(X),G)\to 0$$</div>

且这个短正合序列<strong>分裂</strong>（但不自然）。

<h4>第一步：系数变换的链复形</h4>
取 \(\mathbb Z\) 系数奇异链复形 \(C_*\)，则 \(C_*(X;G)=C_*\otimes G\)。关键在于 \(C_n\) 是<strong>自由阿贝尔群</strong>，故其子群 \(B_n=\mathrm{im}\,\partial\) 也自由（自由群的子群自由）。

<h4>第二步：代数万有系数定理</h4>
对自由链复形做纯代数分解：\(H_n(C\otimes G)\) 由 \(H_n(C)\otimes G\) 与 \(\mathrm{Tor}(H_{n-1}(C),G)\) 决定。\(\mathrm{Tor}(H,G)\) 度量 \(H\) 的扭转元素在张量积中的「损失」。

<h4>第三步：分裂性</h4>
因 \(C_n\)、\(\ker\) 都自由，可选同伦分解使短正合序列分裂（但分裂不自然、依赖基选取）。

<div class="keybox">$$\boxed{H_n(X;G)\cong\bigl(H_n(X)\otimes G\bigr)\oplus\mathrm{Tor}(H_{n-1}(X),G)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>换系数 = 「自由部分 \(\otimes G\)」+「扭转的 Tor 修正」，Tor 度量扭转损失。</div>`,
    1: L`<h4>我们要证明什么</h4>
上同调万有系数定理：

<div class="eq">$$0\to\mathrm{Ext}(H_{n-1}(X),G)\to H^n(X;G)\to\mathrm{Hom}(H_n(X),G)\to 0$$</div>

同样分裂但不自然。

<h4>第一步：对偶链复形</h4>
对 \(\mathbb Z\) 系数链复形 \(C_*\) 应用 \(\mathrm{Hom}(\cdot,G)\)，得上链复形 \(C^*=\mathrm{Hom}(C_*,G)\)。

<h4>第二步：Ext 的含义</h4>
\(\mathrm{Hom}(H_n,G)\) 是自由部分的「对偶」（取到 \(G\) 的线性映射），\(\mathrm{Ext}(H_{n-1},G)\) 测度扭转部分到 \(G\) 的「扩张」。

<h4>第三步：经典例子</h4>
对 \(RP^2\)：\(H_1=\mathbb Z/2\)，故 \(\mathrm{Hom}(\mathbb Z/2,\mathbb Z)=0\) 而 \(\mathrm{Ext}(\mathbb Z/2,\mathbb Z)=\mathbb Z/2\)。于是 \(H^1(RP^2;\mathbb Z)=0\)，但 \(H^2(RP^2;\mathbb Z)=\mathbb Z/2\)（由 \(H_1=\mathbb Z/2\) 贡献的 Ext 项）。

<div class="keybox">$$\boxed{H^n(X;G)\cong\mathrm{Hom}(H_n(X),G)\oplus\mathrm{Ext}(H_{n-1}(X),G)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>上同调 = 同调的对偶 + 降一维扭转的 Ext 修正，扭转会「错位一维」。</div>`
  },
  "t20": {
    0: L`<h4>我们要证明什么</h4>
同调 Künneth 公式：乘积空间 \(X\times Y\) 的同调由因子同调与 Tor 项完全决定

<div class="eq">$$H_n(X\times Y)\cong\bigoplus_{i+j=n}H_i(X)\otimes H_j(Y)\ \oplus\ \bigoplus_{i+j=n-1}\mathrm{Tor}(H_i(X),H_j(Y))$$</div>

<h4>第一步：Eilenberg–Zilber 定理</h4>
链复形 \(C_*(X\times Y)\) 与分次张量积 \(C_*(X)\otimes C_*(Y)\) <strong>链同伦等价</strong>。由标准单纯形的棱柱三角剖分 + acyclic model 论证给出自然链等价

<div class="eq">$$C_*(X\times Y)\simeq C_*(X)\otimes C_*(Y)$$</div>

<h4>第二步：对张量积应用代数 Künneth 公式</h4>

<div class="eq">$$H_n(C\otimes D)\cong\bigoplus_{i+j=n}H_i(C)\otimes H_j(D)\ \oplus\ \bigoplus_{i+j=n-1}\mathrm{Tor}(H_i(C),H_j(D))$$</div>

<h4>第三步：域系数下简化</h4>
域 \(\Bbbk\) 系数下 Tor 消失，公式简化为纯张量。

<div class="keybox">$$\boxed{H_n(X\times Y;\Bbbk)\cong\bigoplus_{i+j=n}H_i(X;\Bbbk)\otimes H_j(Y;\Bbbk)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>乘积同调 = 因子同调的张量积（+ Tor 修正），域系数下最简洁。</div>`,
    1: L`<h4>我们要证明什么</h4>
上同调 Künneth 公式（域系数）：域 \(\Bbbk\) 下

<div class="eq">$$H^n(X\times Y;\Bbbk)\cong\bigoplus_{i+j=n}H^i(X;\Bbbk)\otimes H^j(Y;\Bbbk)$$</div>

且上同调环是因子环的<strong>分次张量积</strong>。

<h4>第一步：域系数下 Tor/Ext 消失</h4>
域系数下 Tor、Ext 都消失，同调 Künneth 公式给出同调同构，再由万有系数定理（域上 \(H^n=\mathrm{Hom}(H_n,\Bbbk)\) 即 \(H_n\) 的对偶）传递到上同调。

<h4>第二步：环结构的显式乘法</h4>
作为分次代数，\(H^*(X\times Y)\cong H^*(X)\otimes H^*(Y)\)，乘法满足

<div class="eq">$$(\alpha\otimes\beta)\smile(\gamma\otimes\delta)=(-1)^{|\beta||\gamma|}(\alpha\smile\gamma)\otimes(\beta\smile\delta)$$</div>

符号来自上链层面重排顶点序。

<h4>第三步：典型例子</h4>
\(T^2=S^1\times S^1\) ⟹

<div class="keybox">$$\boxed{H^*(T^2)\cong(\mathbb Z[\alpha]/\alpha^2)\otimes(\mathbb Z[\beta]/\beta^2)\cong\mathbb Z[\alpha,\beta]/(\alpha^2,\beta^2)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>乘积上同调 = 因子上同调的分次张量积，乘法带 Koszul 符号。</div>`
  },
  "t21": {
    0: L`<h4>我们要证明什么</h4>
Poincaré 对偶定理：紧致可定向 \(n\) 维流形 \(M\) 上，Cap 积给出同构

<div class="eq">$$D(\alpha)=\alpha\frown[M]:\quad H^k(M)\xrightarrow{\cong}H_{n-k}(M)$$</div>

其中 \([M]\in H_n(M)\) 是基本类。

<h4>第一步：对偶胞腔分解</h4>
把 \(M\) 三角剖分，取对偶剖分：每个 \(k\) 胞腔恰对应一个 \((n-k)\) 胞腔。

<h4>第二步：链复形同构</h4>
对偶胞腔复形的链复形与上链复形同构（维数互补 + 定向一致），故

<div class="eq">$$H^k(M)\cong H_{n-k}^{\mathrm{dual}}(M)\cong H_{n-k}(M)$$</div>

再用 Mayer–Vietoris 归纳到一般流形。

<h4>第三步：基本类的存在</h4>
基本类 \([M]\) 的存在由<strong>可定向性</strong>保证（可定向 ⟹ 存在全局一致定向的 \(n\) 链）。

<div class="keybox">$$\boxed{H^k(M)\cong H_{n-k}(M)\quad(\text{紧致可定向 }n\text{ 流形})}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>可定向流形上，上同调与同调经基本类互补对偶。</div>`,
    1: L`<h4>我们要证明什么</h4>
Lefschetz 对偶（Poincaré–Lefschetz）：紧致可定向带边流形 \((M,\partial M)\) 上

<div class="eq">$$H^k(M)\cong H_{n-k}(M,\partial M),\qquad H^k(M,\partial M)\cong H_{n-k}(M)$$</div>

<h4>第一步：取二倍流形</h4>
构造 \(DM=M\cup_{\partial M}M\)（沿边界粘两个副本），它是紧致无边流形，可应用 Poincaré 对偶。

<h4>第二步：Mayer–Vietoris 分解</h4>
用 M–V 序列把 \(DM\) 分解为两个 \(M\)（交于 \(\partial M\)），把 \(DM\) 的对偶关系「退回」到 \(M\) 的相对/绝对同调。

<h4>第三步：相对基本类</h4>
基本类现在落在 \(H_n(M,\partial M)\) 中（相对基本类），Cap 积 \(D(\alpha)=\alpha\frown[M,\partial M]\) 给出同构。

<div class="keybox">$$\boxed{H^k(M)\cong H_{n-k}(M,\partial M),\qquad H^k(M,\partial M)\cong H_{n-k}(M)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>带边流形的对偶靠二倍流形 + 相对基本类，边界使对偶「相对化」。</div>`
  },
  "t22": {
    0: L`<h4>我们要证明什么</h4>
de Rham 定理：微分形式上同调与奇异上同调（实系数）作为<strong>环</strong>同构

<div class="eq">$$H^k_{\mathrm{dR}}(M)\cong H^k(M;\mathbb R)$$</div>

且楔积 \(\wedge\) 对应 Cup 积 \(\smile\)。这打通了分析与代数拓扑。

<h4>第一步：构造映射 \(I\)</h4>
把微分形式 \(\omega\) 映为上链 \(\sigma\mapsto\int_\sigma\omega\)，即

<div class="eq">$$I(\omega)(\sigma)=\int_\sigma\omega$$</div>

<h4>第二步：Stokes 定理保证链映射</h4>

<div class="eq">$$I(d\omega)(\sigma)=\int_\sigma d\omega=\int_{\partial\sigma}\omega=\delta I(\omega)(\sigma)$$</div>

故 \(I(d\omega)=\delta I(\omega)\)，\(I\) 是链映射，诱导上同调同态。

<h4>第三步：Mayer–Vietoris 归纳</h4>
先对 \(\mathbb R^n\)（凸域）用 Poincaré 引理（闭形式必恰当），两上同调理论都满足 Mayer–Vietoris，且 \(I\) 与之自然交换，归纳传递同构。

<div class="keybox">$$\boxed{H^k_{\mathrm{dR}}(M)\cong H^k(M;\mathbb R)\quad(\text{环同构})}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>积分 + Stokes 定理把微分形式变成上链，楔积对应 Cup 积。</div>`,
    1: L`<h4>我们要证明什么</h4>
Chern–Weil 理论：向量丛的曲率形式通过不变多项式产生<strong>示性类</strong>，且不依赖联络选取。

<h4>第一步：曲率形式与不变多项式</h4>
对秩 \(r\) 复向量丛 \(E\) 取联络，曲率形式 \(\Omega\) 是取值 \(\mathfrak{gl}(r)\) 的 \(2\)-形式。对 Ad-不变多项式 \(P\)（如 \(\det(1+\frac{i}{2\pi}A)\) 的各齐次系数）构造 \(P(\Omega)\)。

<h4>第二步：闭形式</h4>
Bianchi 恒等式 \(d\Omega+[\omega,\Omega]=0\) 与 \(P\) 的不变性 ⟹

<div class="eq">$$dP(\Omega)=0$$</div>

<h4>第三步：不依赖联络</h4>
另取联络 \(\omega'\)，则 \(\Omega'-\Omega\) 恰当（联络差是 \(1\)-形式），用变分公式 \(d/dt\,P(\Omega_t)=r\cdot dP(\cdots)\) 沿线性插值路径积分，得 \(P(\Omega')-P(\Omega)\) 恰当。

<div class="keybox">$$\boxed{[P(\Omega)]\in H^{2k}(M;\mathbb Z)\quad(\text{如 Chern 类 }c_k(E))}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>曲率形式的闭性来自 Bianchi，不依赖联络来自变分公式。</div>`
  },
  "t23": {
    0: L`<h4>我们要证明什么</h4>
高阶同伦群是<strong>阿贝尔群</strong>：\(n\ge2\) 时 \(\pi_n(X)\) 可交换。

<h4>第一步：交换的几何直觉</h4>
\(S^n\)（\(n\ge2\)）有足够维数让两个环路「彼此绕过」。把 \([f]\)、\([g]\) 的乘积 \(f\cdot g\)（沿赤道拼接）与 \(g\cdot f\) 比较。

<h4>第二步：构造旋转同伦</h4>
把两个代表映射放在两个不相交的「胖」半球上，拼接点沿赤道 \(S^{n-1}\)。\(n\ge2\) ⟹ \(S^{n-1}\) 连通性强，可在赤道上连续旋转使拼接位置互换，而不让 \(f,g\) 的像相撞。

<h4>第三步：结论</h4>

<div class="keybox">$$\boxed{\pi_n(X)\ \text{在 }n\ge2\ \text{是阿贝尔群};\quad \pi_1\ \text{一般非交换}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>\(n\ge2\) 时球面有「绕行空间」，\(f\cdot g\simeq g\cdot f\)。</div>`,
    1: L`<h4>我们要证明什么</h4>
同伦群的<strong>函子性</strong>：\(\pi_n\) 是带基点空间范畴到群范畴的协变函子，定义为

<div class="eq">$$f_*([\alpha])=[f\circ\alpha],\quad \alpha:S^n\to X$$</div>

<h4>第一步：良定义</h4>
若 \(\alpha\simeq\alpha'\)（保持基点），则 \(f\circ\alpha\simeq f\circ\alpha'\)，故 \([f\circ\alpha]\) 只依赖 \([\alpha]\)。

<h4>第二步：群同态</h4>
拼接与复合交换：

<div class="eq">$$f\circ(\alpha\cdot\beta)=(f\circ\alpha)\cdot(f\circ\beta)$$</div>

故 \(f_*([\alpha\cdot\beta])=f_*([\alpha])\cdot f_*([\beta])\)。

<h4>第三步：协变性</h4>

<div class="eq">$$(g\circ f)_*(\alpha)=(g\circ f)\circ\alpha=g\circ(f\circ\alpha)=g_*f_*(\alpha)$$</div>

<div class="keybox">$$\boxed{\pi_n:\text{带基点空间}\to\text{群}\quad(\text{协变函子})}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>\(\pi_n\) 协变，复合与拼接自然交换。</div>`
  },
  "t24": {
    0: L`<h4>我们要证明什么</h4>
纤维化 \(F\to E\xrightarrow{p}B\) 的同伦群长正合序列：

<div class="eq">$$\cdots\to\pi_n(F)\to\pi_n(E)\to\pi_n(B)\xrightarrow{\partial}\pi_{n-1}(F)\to\cdots$$</div>

<h4>第一步：连接同态的构造</h4>
给定 \(f:S^n\to B\)，视 \(S^n=D^n/\partial D^n\)，把 \((D^n,\partial D^n)\) 提升到 \(E\)。

<h4>第二步：用同伦提升性质</h4>
底映射 \(f\circ q\)（\(q:D^n\to S^n\) 商映射）经同伦提升性质提升到 \(E\)，其在边界 \(S^{n-1}\) 上的限制落进纤维 \(F\)（因 \(p\) 把边界映到基点）。

<h4>第三步：正合性</h4>
\(\partial[f]=[\text{提升}|_{S^{n-1}}]\in\pi_{n-1}(F)\)。\(\pi_n(E)\to\pi_n(B)\) 的核恰为从 \(F\) 来的像。

<div class="keybox">$$\boxed{\cdots\to\pi_n(F)\to\pi_n(E)\to\pi_n(B)\xrightarrow{\partial}\pi_{n-1}(F)\to\cdots}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>纤维化的长正合序列把纤维、全空间、底空间的同伦群链起来。</div>`,
    1: L`<h4>我们要证明什么</h4>
纤维化 \(p:E\to B\) 具有<strong>同伦提升性质</strong>（HLP）：对任意空间 \(X\) 及同伦 \(H:X\times I\to B\)，若初始映射可提升到 \(E\)，则整个同伦可提升且保持初始提升。

<h4>第一步：局部平凡丛的证明</h4>
把底同伦 \(H\) 用 Lebesgue 数分解为小段，在每段上用局部平凡化（乘积结构）提升，逐段拼接。

<h4>第二步：紧致性保证有限分解</h4>
紧致性保证有限分解，局部乘积 \(p^{-1}(U)\cong U\times F\) 提供每段的提升。

<h4>第三步：由 HLP 导出长正合序列</h4>

<div class="keybox">$$\boxed{\text{HLP 是纤维化理论的基石}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>覆叠空间、纤维丛都满足 HLP，靠 Lebesgue 数逐段提升。</div>`
  },
  "t25": {
    0: L`<h4>我们要证明什么</h4>
Whitehead 定理（同调版本）：单连通 CW 复形间的映射 \(f:X\to Y\)，若诱导同调同构，则 \(f\) 是同伦等价。

<h4>第一步：找到最低非零同调</h4>
设 \(H_n(X)\) 是 \(X\) 的第一个非零同调（\(n\ge2\)，因单连通 \(H_1=0\)）。由绝对 Hurewicz 定理

<div class="eq">$$\pi_n(X)\cong H_n(X)\quad(\text{第一个非零群处})$$</div>

<h4>第二步：同调同构传递到同伦</h4>
\(f\) 诱导同调同构 ⟹ 在第一步 \(\pi_n\) 处诱导同构；再用相对 Hurewicz 定理逐维推进。

<h4>第三步：同伦等价</h4>
归纳得 \(f\) 是弱同伦等价，再由 Whitehead 定理（同伦群版本：CW 复形间弱同伦等价 ⟹ 同伦等价）。

<div class="keybox">$$\boxed{\text{单连通 CW 复形间：同调同构}\iff\text{同伦等价}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>单连通时 Hurewicz 搭桥，同调同构 ⟹ 同伦等价。</div>`,
    1: L`<h4>我们要证明什么</h4>
（同一定理的另一表述）单连通 CW 复形间，同调同构 ⟹ 同伦等价，关键是 Hurewicz 定理与相对 Hurewicz 的归纳使用。

<h4>第一步：最低非零同调识别最低非零同伦</h4>
单连通 ⟹ \(H_1=0\)、\(H_0=\mathbb Z\)，设 \(H_n\) 是第一个非零同调（\(n\ge2\)），绝对 Hurewicz 给出 \(\pi_n(X)\cong H_n(X)\)。

<h4>第二步：逐维归纳</h4>
已知 \(f\) 诱导 \(i\le m\) 维同伦群同构，则相对 Hurewicz 给出 \(\pi_{m+1}\) 也同构（同调同构传递）。

<h4>第三步：弱同伦等价即同伦等价</h4>

<div class="keybox">$$\boxed{f\ \text{诱导所有 }\pi_n\text{ 同构}\ \Longrightarrow\ f\ \text{是同伦等价}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>同调同构 + 单连通 ⟹ 弱同伦等价 ⟹ 同伦等价。</div>`
  },
  "t26": {
    0: L`<h4>我们要证明什么</h4>
Hurewicz 定理：若 \(X\) 是 \((n-1)\) 连通（\(n\ge2\)），则 Hurewicz 同态是同构

<div class="eq">$$h:\pi_n(X)\xrightarrow{\cong}H_n(X),\qquad h([f])=f_*([S^n])$$</div>

（\(n=1\) 时是交换化同构）。

<h4>第一步：定义 Hurewicz 同态</h4>
\(h\) 把同伦类 \([f]\) 映到基本类 \([S^n]\) 的像 \(f_*([S^n])\in H_n(X)\)。

<h4>第二步：满射性</h4>
\((n-1)\) 连通 ⟹ \(H_i(X)=0\ (i<n)\)。对 \(\pi_n\) 生成元逐个用相对同调 + 切除（把球贴进去）实现满射。

<h4>第三步：单射性（\(n\ge2\)）</h4>
\(h\) 的核由「边界为 0 的映射」组成，这类 \(f:S^n\to X\) 在 \((n-1)\) 连通、\(n\ge2\) 时延伸为 \(D^{n+1}\to X\) 上的映射，故核平凡。\(n=1\) 时核是换位子群 \([\pi_1,\pi_1]\)。

<div class="keybox">$$\boxed{\pi_n(X)\cong H_n(X)\ (n\ge2),\qquad H_1(X)\cong\pi_1(X)^{\mathrm{ab}}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>最低非零同伦群 ≅ 对应同调群（或交换化）。</div>`,
    1: L`<h4>我们要证明什么</h4>
相对 Hurewicz 定理：若空间对 \((X,A)\)（\(A\) 道路连通）是 \((n-1)\) 连通，则（\(n\ge2\)）

<div class="eq">$$h:\pi_n(X,A)\xrightarrow{\cong}H_n(X,A)$$</div>

<h4>第一步：相对同伦群的元素</h4>
\(\pi_n(X,A)\) 的元素是映射 \(f:(D^n,\partial D^n)\to(X,A)\)（边界映到 \(A\)）。\(h\) 把它映到相对基本类

<div class="eq">$$h(f)=f_*([D^n,\partial D^n])\in H_n(X,A)$$</div>

<h4>第二步：平行论证</h4>
\((n-1)\) 连通 ⟹ \(\pi_i(X,A)=0\ (i<n)\)，由绝对情形的平行论证归纳得 \(H_i(X,A)=0\ (i<n)\) 且 \(h\) 满射；五引理或直接构造证单射。

<h4>第三步：\(n=1\) 是交换化</h4>

<div class="keybox">$$\boxed{h:\pi_n(X,A)\xrightarrow{\cong}H_n(X,A)\ (n\ge2)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>相对 Hurewicz 是 Whitehead 定理（同调版本）的归纳基石。</div>`
  },
  "t27": {
    0: L`<h4>我们要证明什么</h4>
Freudenthal 悬挂定理：悬挂同态

<div class="eq">$$\Sigma:\pi_{n+k}(S^n)\to\pi_{n+k+1}(S^{n+1})$$</div>

在 \(k\le n-1\) 是同构、\(k=n\) 是满射。

<h4>第一步：Blakers–Massey 定理</h4>
悬挂的像在维数较低时，同伦群的信息被「稳定化」截断——多余信息随 \(n\) 增大消失。

<h4>第二步：稳定范围</h4>
在 \(k\le n-1\)，\(\Sigma\) 在 \(\pi\) 上诱导同构。

<h4>第三步：稳定同伦群</h4>
重复悬挂取正向极限：

<div class="eq">$$\pi_k^S=\operatorname{colim}_n\pi_{n+k}(S^n)$$</div>

<div class="keybox">$$\boxed{\Sigma\ \text{在 }k\le n-1\ \text{是同构};\quad \pi_1^S=\mathbb Z/2}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>悬挂在稳定范围是同构，据此定义稳定同伦群。</div>`,
    1: L`<h4>我们要证明什么</h4>
Serre 有限性定理：\(\pi_{n+k}(S^n)\)（\(k>0\)）是<strong>有限群</strong>，唯一例外是 \(\pi_{4n-1}(S^{2n})\) 含一个 \(\mathbb Z\) 直和项。

<h4>第一步：Serre 谱序列</h4>
对纤维化 \(\Omega S^n\to PS^n\to S^n\) 用 Serre 谱序列，迭代计算球面纤维化的模 \(p\) 上同调。

<h4>第二步：有理同调极简</h4>
\(\pi_*(S^n)\otimes\mathbb Q\)：\(n\) 奇时只有 \(\pi_n(S^n)\otimes\mathbb Q=\mathbb Q\)；\(n\) 偶时再加 \(\pi_{2n-1}(S^n)\otimes\mathbb Q=\mathbb Q\)（Hopf 不变量 1）。其余同伦群 \(\otimes\mathbb Q\) 为零 ⟹ 是有限群。

<h4>第三步：唯一例外</h4>
\(\pi_{4n-1}(S^{2n})\) 的 \(\mathbb Z\) 直和项来自 Hopf 不变量非平凡。

<div class="keybox">$$\boxed{\pi_{n+k}(S^n)\ \text{有限}\ (k>0),\ \text{例外}\ \pi_{4n-1}(S^{2n})\ni\mathbb Z}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>球面同伦群除有限个例外几乎全有限。</div>`
  }
};
