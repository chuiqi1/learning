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
    0: "①【思路】证同伦是等价关系在映射集上的关系（自反、对称、传递）。自反：X×I 上 F(x,t)=f(x) 给出 f≃f。对称：若 f≃g 由同伦 F，则反转时间 F(x,1−t) 给出 g≃f。【推导】对称性的实现就是 F(x,t) 换成 F(x,1−t)。②【思路】传递：f≃g 用 F、g≃h 用 G，拼接成 f≃h 的同伦 H。定义 H(x,t)=F(x,2t)（0≤t≤1/2）、H(x,t)=G(x,2t−1)（1/2≤t≤1）。【计算】H(x,0)=F(x,0)=f(x)，H(x,1/2)=F(x,1)=g(x)=G(x,0)，H(x,1)=G(x,1)=h(x)；t=1/2 处连续（两者都取 g(x)）。③【思路】验证连续性：两个闭集 [0,1/2]、[1/2,1] 上连续且在交点上值一致，由粘合引理 H 连续。【结论】同伦是等价关系，映射集按同伦分等价类。",
    1: "①【思路】目标证同伦等价保持连通性。设 f:X→Y 是同伦等价，即存在 g:Y→X 使 g∘f≃id_X、f∘g≃id_Y。先证连续映射（不必同伦等价）把连通空间映为连通空间。【推导】若 X 连通、f 连续，则 f(X) 连通（连通集的连续像是连通的）。②【思路】现在用同伦等价交换两个映射得结论：X 连通 ⟹ f(X) 连通；反过来 Y 连通 ⟹ g(Y) 连通。但要证 X 与 Y 同连通。【推导】由 g∘f≃id_X 与 f∘g≃id_Y，f、g 互为同伦逆；若 X 连通则 f(X)⊂Y 连通，且 Y≃X，故 Y 也连通。③【思路】更严格的论证：连续映射把连通性保持这个事实，加上同伦等价是两个方向都存在连续映射的组合。【结论】同伦等价保持连通性（连通分支数不变）。"
  },
  "t2": {
    0: "①【思路】基本群函子性：连续映射诱导群同态。定义 f_*([γ])=[f∘γ]，先证代表元无关（良定义）。若 γ≃γ′（保持端点），则 f∘γ≃f∘γ′（同伦复合连续映射仍是同伦）。【推导】故 [f∘γ] 只依赖 [γ]，f_* 良定义。②【思路】验证 f_* 是群同态：路的拼接与复合映射交换。对环路 α,β，计算 (f∘(α·β))(t)。【计算】t≤1/2 时 α·β(t)=α(2t)、t≥1/2 时 α·β(t)=β(2t−1)，故 f(α·β(t)) 当 t≤1/2 为 f(α(2t))=(f∘α)(2t)、t≥1/2 为 f(β(2t−1))=(f∘β)(2t−1)，恰为 (f∘α)·(f∘β)(t)。③【思路】故 f_*([α·β])=[(f∘α)·(f∘β)]=f_*([α])·f_*([β])，保持群运算。④【思路】复合性由结合的直接的出。【计算】(g∘f)_*([γ])=[(g∘f)∘γ]=[g∘(f∘γ)]=g_*([f∘γ])=(g_*∘f_*)([γ])。⑤【结论】π₁ 是从带基点拓扑空间范畴到群范畴的函子，且 f_* 只依赖 f 的同伦类。",
    1: "①【思路】同伦不变性：若 f≃g 且保持基点（rel x₀），则 f_*=g_*。设 H:X×I→Y 是 f 到 g 的同伦（H(x,0)=f(x)、H(x,1)=g(x)、H(x₀,t)=y₀ 恒成立）。对环路 γ（基于 x₀），构造 f∘γ 到 g∘γ 的同伦。【推导】令 K(s,t)=H(γ(s),t)，则 K(s,0)=H(γ(s),0)=f(γ(s))、K(s,1)=g(γ(s))。②【思路】验证 K 保持端点：γ 是环路 γ(0)=γ(1)=x₀，而 H(x₀,t)=y₀，故 K(0,t)=H(x₀,t)=y₀、K(1,t)=H(x₀,t)=y₀。【计算】所以 K 是 f∘γ 到 g∘γ 的端点固定同伦。③【思路】故 [f∘γ]=[g∘γ]，即 f_*([γ])=g_*([γ])，对任意 [γ] 成立。【结论】f_*=g_*；特别地同伦等价（f、g 互为同伦逆）诱导基本群同构。"
  },
  "t3": {
    0: "①【思路】Seifert–van Kampen 定理：X=U∪V、U∩V 道路连通时，π₁(X) 由 π₁(U)、π₁(V) 融合而成。取基点 x₀∈U∩V。先证任意基于 x₀ 的环路可分解为落在 U 或 V 中的片段。【推导】由 γ:I→X 连续、I 紧致，覆盖 {γ⁻¹(U),γ⁻¹(V)} 的 Lebesgue 数给出有限分点 0=t₀<t₁<…<t_k=1，使每段 γ([t_{i−1},t_i]) 落在 U 或 V 内。②【思路】当前段 [t_i,t_{i+1}] 起点 γ(t_i) 不在 x₀ 时，用连接道路把首尾接到 x₀：取 U 或 V 内（因 U、V、U∩V 均道路连通可保证）从 x₀ 到 γ(t_i) 的道路 λ_i，把 γ 的第 i 段替换为 λ_i·γ|_{[t_i,t_{i+1}]}·λ_{i+1}⁻¹，得到落在单个 U 或 V 内、基于 x₀ 的环路。【推导】故 [γ] 由若干 π₁(U) 或 π₁(V) 的元素相乘表示，自由积 π₁(U)*π₁(V)→π₁(X) 满。③【思路】关系来自 U∩V 中的环路：对 η∈π₁(U∩V,x₀)，其在 U、V 中经包含映射 i_*、j_* 得到同一元素，故 i_*(η)=j_*(η) 是必须商掉的关系。【推导】这些 η 遍历 π₁(U∩V) 生成正规子群 N，由自由积万有性质 π₁(X)≅π₁(U)*π₁(V)/N。④【结论】π₁(X)≅π₁(U)*_{π₁(U∩V)}π₁(V)（融合自由积），核心是“把环路切成落在 U、V 的片段”。",
    1: "①【思路】乘积公式 π₁(X×Y,x₀,y₀)≅π₁(X,x₀)×π₁(Y,y₀)。构造同态：投影 p_X,p_Y 诱导 (p_X,p_Y)_*:π₁(X×Y)→π₁(X)×π₁(Y)。【推导】(p_X,p_Y)_*([γ])=([p_X∘γ],[p_Y∘γ])。②【思路】构造逆映射：对 [α]∈π₁(X)、[β]∈π₁(Y)，取乘积环路。【计算】定义 φ([α],[β])=[α×β]，其中 (α×β)(t)=(α(t),β(t))。③【思路】验证两者互逆。先正向：([γ]) 经投影得 ([p_X∘γ],[p_Y∘γ])，再经 φ 得 [(p_X∘γ,p_Y∘γ)]。【计算】因 γ(t)=(p_X∘γ(t),p_Y∘γ(t)) 恒成立，故 [(p_X∘γ,p_Y∘γ)]=[γ]。反向：([α],[β])→[α×β]→([p_X∘(α×β)],[p_Y∘(α×β)])=([α],[β])。④【思路】二者都是群同态（拼接与逐分量拼接一致）。【结论】π₁(X×Y)≅π₁(X)×π₁(Y)，乘积空间的环路是两个因子的独立环路的逐分量组合。"
  },
  "t4": {
    0: "①【思路】道路提升定理：覆叠 p:X̃→X 下底空间道路提升唯一。γ:I→X、γ(0)=x₀，取 x̃₀∈p⁻¹(x₀)。先取被均匀覆盖的开集覆盖 {V_λ} 与相应 U_λ（p(V_λ)=U_λ 且 p|V_λ 同胚）。【推导】{γ⁻¹(U_λ)} 覆盖 I，Lebesgue 数 δ>0，取分点使每段落在某 U_λ。②【思路】逐段提升：对首段 [0=a₀,a₁]，设像在 U 内，p⁻¹(U)=∐_α V_α（每个 V_α≅U），取含 x̃₀ 的 V，定义 γ̃|_{[a₀,a₁]}=(p|_{V})⁻¹∘γ|。【计算】γ̃(a₀)=x̃₀，逐段如此延拓到整个 I，得 γ̃ 满足 p∘γ̃=γ。③【思路】唯一性：设 γ̃₁、γ̃₂ 都提升 γ 且 γ̃₁(0)=γ̃₂(0)。考虑集合 A={t:γ̃₁(t)=γ̃₂(t)}。由 p 局部同胚，A 在 I 中既开又闭；0∈A 且 I 连通 ⟹ A=I。【结论】起点固定时提升唯一，此唯一性是覆叠理论一切推论的基础。",
    1: "①【思路】同伦提升定理：底空间的道路同伦可提升到覆叠空间。设 H:I×I→X 是道路 γ₀ 到 γ₁ 的同伦（固定端点），已知 γ̃₀ 是 γ₀ 的提升。用 Lebesgue 数把 I×I 分割成小方格，使每个方格的像落在均匀覆盖邻域 U 内。【推导】I×I 紧致 ⟹ 存在 δ>0，使直径 <δ 的方格像都落在某均匀覆盖 U 中。②【思路】逐格提升：底方格 (t,0)（即 γ₀）已提升为 γ̃₀；对每个方格，其像在 U 内，p⁻¹(U) 是若干同胚片之并，取含已提升值的片做局部同胚延拓。【计算】按“逐列逐行”次序把每个方格提升，相邻方格在公共边上由提升唯一性而一致。③【思路】得连续 H̃:I×I→X̃ 满足 p∘H̃=H；因 H 固定端点，竖边 (0,s)、(1,s) 被映到常点，故其提升保持不动，即 H̃ 固定端点。④【结论】同伦提升性质成立，直接推出覆叠诱导单射 p_* 与基本群到覆盖变换群的联系。"
  },
  "t5": {
    0: "①【思路】覆叠空间分类定理：连通覆叠等价类 ↔ π₁(X,x₀) 子群共轭类。方向一：给定覆叠 p:(X̃,x̃₀)→(X,x₀)，对应子群 H=p_*(π₁(X̃,x̃₀))⊂π₁(X,x₀)。由道路提升唯一性 p_* 是单射，故 H 是子群。【推导】覆叠诱导单射（提升唯一性 ⟹ kernel 平凡）。②【思路】方向二：给定子群 H<π₁(X)，从万有覆叠构造对应覆叠。万有覆叠的点是“从 x₀ 出发的道路同伦类”，定义等价 x̃₁~x̃₂ ⟺ 终点相同 p(x̃₁)=p(x̃₂) 且连接道路类落在 H 中。【推导】商空间连同投影 p([γ])=γ(1) 是覆叠，其对应子群恰为 H。③【思路】验证双向互逆，且基点改变到同一纤维另一点时子群经共轭变换，故“同构类”对应“共轭类”。【结论】连通覆叠等价类与 π₁(X) 子群共轭类一一对应；万有覆叠对应平凡子群，X 自身对应全群。",
    1: "①【思路】万有覆叠存在性：X 半局部单连通 ⟺ 存在万有覆叠。构造 X̃ 为“从 x₀ 出发的道路同伦类”集合，赋以生成拓扑与投影 p([γ])=γ(1)。半局部单连通性用于证明 p 是覆叠映射。【推导】半局部单连通：每点有邻域 U，使 i_*:π₁(U)→π₁(X) 平凡（U 中环路在 X 可缩）。②【思路】证明 exp/投影是覆叠：取覆盖邻域 U，对每个固定终点的道路类 [γ]，用 U 中的道路 η 生成开集 V([γ],U)={[γ·η]:η 是 U 中从 γ(1) 出发的道路}，这些片无交且在 p 下同胚于 U。【计算】p|_{V}:V→U 是同胚（由半局部单连通保证 U 中不同道路类不重合）。③【思路】证 X̃ 单连通：任何 X̃ 中的环路投影到 X 是某环路 γ，其提升的闭性迫使 γ 可缩（对应 X̃ 中道路类不变），故 X̃ 无本质环路。【结论】X 半局部单连通 ⟺ 存在万有覆叠；万有覆叠单连通且覆盖其它所有连通覆叠。"
  },
  "t6": {
    0: "①【思路】Seifert–van Kampen（融合自由积形式）：X=U∪V、U∩V 道路连通，x₀∈U∩V。包含映射诱导 i_*:π₁(U∩V)→π₁(U)、j_*:π₁(U∩V)→π₁(V)。要证 π₁(X) 是推出（融合自由积）。【推导】把环路切段接基点（同 t3 论证），得满同态 φ:π₁(U)*π₁(V)→π₁(X)。②【思路】证 ker φ 恰由 i_*(η)j_*(η)^{-1}（η∈π₁(U∩V)）生成。对乘积字 w=u₁v₁u₂v₂…（u_i∈π₁(U)、v_i∈π₁(V)）满足 φ(w)=e，则 φ(w) 在 X 中可缩，其同伦像给出一系列“U∩V 中跨越横截”的环路，逐段把字改写为 U∩V 中元素。【推导】重复用“同一环路在 U、V 中相等的唯一方式”归约为 i_*(η)=j_*(η) 关系，故 ker φ 由它们生成。③【思路】故 π₁(X)=π₁(U)*π₁(V)/⟨i_*(η)j_*(η)^{-1}⟩，这正是融合自由积的万有性质刻画。【结论】π₁(X)≅π₁(U)*_{π₁(U∩V)}π₁(V)，与 t3 的商形式等价。",
    1: "①【思路】van Kampen 的推广形式：覆盖可多于两个开集，用基本群胚（fundamental groupoid）表述。基本群胚 Π(X) 的对象是 X 的点，态射是道路同伦类（不必基于同一点）。【推导】与基本群相比，群胚避免了基点选择的限制。②【思路】对开覆盖 {U_α}，Π(X) 是各 Π(U_α) 沿 Π(U_α∩U_β) 的 2-余极限（2-colimit）。局部信息沿交叠粘合成整体信息。【推导】这自然处理多个开集的重叠关系，是 Grothendieck 的 Galois 理论观点。③【思路】单连通/道路连通条件下可回到基本群的融合自由积（两个开集时退化为 t6 的标准形式）。【结论】多开集的 van Kampen 以群胚语言最简洁，且可推广到“基本群只能表述单连通局部情形”之外的场景。"
  },
  "t7": {
    0: "①【思路】Brouwer 不动点定理（二维用基本群）：连续 f:D²→D² 有不动点。反证设 f(x)≠x 对所有 x。从 f(x) 出发沿过 x 的射线交边界 S¹ 于 r(x)，定义 r:D²→S¹。【推导】r 连续，且对 x∈S¹ 有 r(x)=x（射线方向不穿过），即 r∘i=id_{S¹}（i:S¹→D² 包含）。②【思路】作用基本群：i_*:π₁(S¹)=ℤ→π₁(D²)=0（D² 可缩，π₁ 平凡），故 i_* 为零同态；r_*:π₁(D²)=0→π₁(S¹)=ℤ 也为零。【推导】复合 r∘i=id ⟹ 诱导 r_*∘i_*=id_ℤ。③【思路】但 i_*:ℤ→0 是零 ⟹ r_*∘i_*=0，与 id_ℤ 矛盾（ℤ 非零群无 0 到自身的恒等分解）。【计算】0=id_ℤ 不可能。④【结论】矛盾，故 f 有不动点；高维用 H_{n−1}(S^{n−1})=ℤ、H_{n−1}(D^n)=0 的平行论证。",
    1: "①【思路】Borsuk–Ulam 定理：连续 f:Sⁿ→ℝⁿ 存在 x 使 f(x)=f(−x)。反证设 f(x)≠f(−x) 恒成立，定义 g:Sⁿ→S^{n−1} 为 g(x)=(f(x)−f(−x))/|f(x)−f(−x)|。【推导】g 连续，且 g(−x)=(f(−x)−f(x))/|f(−x)−f(x)|=−g(x)，即 g 是奇映射。②【思路】奇映射 g 通过对径作用下降：把 Sⁿ 的二重覆叠 π:Sⁿ→RPⁿ（x↦[x]）与对径配对相结合，g 诱导映射 ḡ:RPⁿ→RP^{n−1}，使图表交换。【推导】因 g(−x)=−g(x)，g 在每一对径纤维上取值一致（模对径），故下降为 ḡ。③【思路】比较同调：ḡ 诱导同调同态 ḡ_*:H*(RPⁿ;ℤ/2)→H*(RP^{n−1};ℤ/2)。但 H^n(RPⁿ;ℤ/2)≅ℤ/2 非零，而 H^n(RP^{n−1};ℤ/2)=0（维度不足），任何映射诱导的 H^n 同态不可能非平凡地把非零类映成存在矛盾的结构（配合环结构 αⁿ≠0 而像空间 αⁿ=0）。【计算】得到公爵等式矛盾。④【结论】f 必有对径重合点，Borsuk–Ulam 得证；推论：任一时刻地球某直径两端温度与气压完全相同。"
  },
  "t8": {
    0: "①【思路】形变收缩诱导同伦等价。设 A 是 X 的形变收缩核：i:A→X 包含、r:X→A 满足 r∘i=id_A 且 i∘r≃id_X。此后两式即 i 与 r 互为“同伦逆”。【推导】同伦等价定义：存在 g:A→X（即 i）与 f:X→A（即 r）使 g∘f≃id_X、f∘g≃id_A，故 i 是同伦等价。②【思路】对基本群作用：同伦等价诱导群同构。由 (i∘r)_*=i_*∘r_* 与 i∘r≃id_X、r∘i=id_A，同伦不变性给出。【计算】i_*∘r_*=(i∘r)_*=(id_X)_*=id；r_*∘i_*=(r∘i)_*=(id_A)_*=id。③【思路】故 i_*:π₁(A)→π₁(X) 与 r_* 互为逆，是同构。【结论】π₁(A)≅π₁(X)，计算基本群时可把空间收缩到其形变收缩核，大幅简化。",
    1: "①【思路】CW 复形的形变收缩：若子复形 A⊂X 是形变收缩核，可通过逐胞腔收缩构造。方法是从高维到低维逐层收缩。对每个 n 维胞腔 e_α^n，先把其内部沿径向收缩到边界，再逐层降维。【推导】e_α^n 的内部可径向形变收缩到其边界 S^{n−1}（因为闭胞腔 D^n 可保持边界不动地收缩到边界）。②【思路】归纳法：设已把 X 形变收缩到 X^{n−1}，再处理 X^n 中的胞腔。因收缩到边界时边界上的同伦已由低维构造给出，逐胞腔拼接保持连续性。【推导】按维数从 h→h−1 逐层做，直接 m−1 维骨架；每步连续且保持已收缩部分不动。③【思路】闭包有限性（closure finiteness）保证每一步只涉及有限多个胞腔同时被处理，故整体形变收缩良定义。【结论】逐胞腔收缩给出 X 到子复形 A 的形变收缩，用于把 CW 复形化为“更简单”的同伦型。"
  },
  "t9": {
    0: "①【思路】单纯逼近定理：连续映射 f:K→L（介于单纯复形）可经重心重分由单纯映射同伦逼近。取 L 顶点开星覆盖 {St⁰(v)}，拉回 {f⁻¹(St⁰(v))} 是 K 的开覆盖，由 K 紧致取 Lebesgue 数 λ。【推导】把 K 重心重分足够多次使每个单纯形直径 <λ/2。②【思路】定义顶点映射 φ:K⁰→L⁰：对 K 的每个顶点 x，f(x) 落在某 St⁰(v)，取 φ(x)=v。因为 K 的每个单纯形 σ 的像 f(σ) 落在某单星内，所以 σ 的全体顶点映射到 L 中同一单纯形的顶点集。【推导】φ 保持每个单纯形顶点集到 L 某单纯形顶点集，可线性延拓为单纯映射 g:|K|→|L|。③【思路】g 与 f 同伦：对 x∈|K|（重心坐标），f(x) 与 g(x) 落在 L 的同一闭单纯形内，凸性给出线性同伦 F(x,t)=(1−t)f(x)+t g(x)。【计算】该直线段落在 L 某单纯形内，故 F 连续、F(·,0)=f、F(·,1)=g。④【结论】f≃g，g 为单纯映射，从而同调/基本群可由单纯映射计算。",
    1: "①【思路】三角剖分存在性：光滑流形总可三角剖分。第一步用 Whitney 嵌入定理把 M 光滑嵌入某个 ℝ^N。【推导】光滑流形可闭嵌入 ℝ^N（N 足够大）。②【思路】在 ℝ^N 中取足够细的立方剖分，M 与其（细）立方复形的交集逐块是光滑图形；把每个立方体进一步细分为单纯形，得到 M 的单纯剖分。【推导】光滑性保证剖分足够细时，每个交块是“标准”的开胞腔，与欧氏空间中的单纯形一致同胚。③【思路】Cairns–Whitehead 定理严格化了“光滑 ⟹ 可三角剖分”。但并非所有拓扑流形都可三角剖分：Freedman 的 E₈ 流形是四维不可三角剖分的例子。【结论】光滑流形可三角剖分，但拓扑流形一般未必，这揭示光滑结构与拓扑结构的差异。"
  },
  "t10": {
    0: "①【思路】∂²=0 定理：∂_{n−1}∘∂_n=0。对单纯形 [v₀,…,v_n] 显式计算。【计算】∂_n[v₀,…,v_n]=Σ_{i=0}^n (−1)^i [v₀,…,v̂_i,…,v_n]（删第 i 个顶点）。②【思路】再对每一项施 ∂_{n−1}：先删 i 再删 j，或先删 j 再删 i。按 j<i 与 j>i 分两类写。【计算】∂_{n−1}∂_n[v₀,…,v_n]=Σ_{j<i}(−1)^i(−1)^j[…,v̂_j,…,v̂_i,…]+Σ_{i<j}(−1)^i(−1)^{j−1}[…,v̂_i,…,v̂_j,…]。③【思路】固定一对被删顶点 {i,j}（i<j），它在前一项（先删 i 后删 j，作为 i<j 情形）与后一项（先删 j 后删 i，j<i 情形）各出现一次，系数分别为 (−1)^{i+j−1} 与 (−1)^{i+j}，恰好相反。【计算】两项相消，故总和为 0。④【结论】∂²=0，故 im ∂_{n+1}⊂ker ∂_n，同调 H_n=ker ∂_n/im ∂_{n+1} 良定义。",
    1: "①【思路】同调的不变性：同胚空间有同构单纯同调；更一般地同伦等价空间有同构同调。同胚部分直接：同胚诱导单纯复形同构，进而链复形同构、同调群同构。【推导】f:|K|→|L| 同胚诱导 K、L（重心重分后）的单纯同构。②【思路】同伦不变性：f≃g 需构造链同伦。对单纯映射 f,g:K→L，构造棱柱算子 P:C_n(K)→C_{n+1}(L) 满足 ∂P+P∂=g_#−f_#。【推导】把单纯形 Δⁿ×I 标准三角剖分为 n+1 个 (n+1) 维单纯形，P 把每个棱柱单纯形经 f 或 g 组合映到 L。③【思路】由链同伦得 f_*=g_*（同 t11 的推理）。故同伦等价 ⟹ 链同伦等价 ⟹ 同调同构。【结论】同调是拓扑不变量（同胚不变量）更是同伦不变量，是它相对基本群的“可计算性优势”所在。"
  },
  "t11": {
    0: "①【思路】（奇异）同伦不变性定理：f≃g ⟹ f_*=g_*。核心构造链同伦算子 P:C_n(X)→C_{n+1}(Y)。对奇异单纯形 σ:Δⁿ→X，把棱柱 Δⁿ×I 标准三角剖分为 n+1 个 (n+1) 维单纯形，配合 f 在底、g 在顶映射进 Y。【推导】定义 P(σ)=Σ_{i=0}^n(−1)^i(f∘g 组合作用在棱柱第 i 个 (n+1)-单形上)（标准棱柱分解）。②【思路】验证链同伦恒等式 ∂P+P∂=g_#−f_#：∂P(σ) 由棱柱的“顶、底、侧”三部分边界组成。【计算】顶贡献 g_#(σ)、底贡献 −f_#(σ)，侧面由各侧面棱柱（对应 ∂σ 的棱柱）即 P(∂σ) 抵消，故 ∂P(σ)+P(∂σ)=g_#(σ)−f_#(σ)。③【思路】链同伦 ⟹ 同调同态相等：对闭链 c（∂c=0）。【计算】g_#(c)−f_#(c)=(∂P+P∂)(c)=∂P(c)+P(0)=∂P(c)∈im∂，故 [g_#c]=[f_#c]，即 f_*=g_*。④【结论】同伦等价空间有同构的奇异同调群，同调是比同胚更弱的“同伦不变量”。",
    1: "①【思路】切除定理：若 Z⊂A⊂X 且 Z̄⊂Int(A)，则包含映射 (X∖Z,A∖Z)→(X,A) 诱导同调同构。记 B=X∖Z，则 B 与 Int(A) 覆盖 X。定义 C_n^{𝓤}(X) 为像落在 B 或 A 中的奇异链生成的子复形。【推导】先证含入 C_*^{𝓤}(X)→C_*(X) 是拟同构。②【思路】用重心重分：构造重分算子 sd 与链同伦 T（sd≃id），反复重分使任意链的每个单纯形像落入 B 或 A（Lebesgue 数 + 凸组合）。【计算】对足够大的 k，sd^k(c)∈C_*^{𝓤}(X)；因 sd 链同伦于恒等，诱导同调同构。③【思路】再证 C_*(X∖Z,A∖Z) 与 C_*^{𝓤}(X)/C_*(A) 链同伦等价：相对链中落在 A 的链模掉，剩“触及 Z 之前”落在 B 的链。【推导】由 Z̄⊂Int(A)，重分足够细时与 Z 相交的单纯形必整体落在 A 内，故两类链等价。④【结论】H_n(X∖Z,A∖Z)→H_n(X,A) 同构，切除定理得证，它使同调可沿空间“切除”子集局部化。"
  },
  "t12": {
    0: "①【思路】空间对的长正合序列：对 (X,A)（A⊂X）存在 …→H_n(A)→H_n(X)→H_n(X,A)→H_{n−1}(A)→…。核心是链复形短正合序列 0→C_*(A)→C_*(X)→C_*(X,A)→0（C_*(X,A)=C_*(X)/C_*(A)）。【推导】含入 C_n(A)→C_n(X) 是单射，商映射 C_n(X)→C_n(X,A) 是满射，中间核=左像，故逐维短正合。②【思路】短正合链复形序列由蛇形引理诱导同调长正合序列。连接同态 ∂:H_n(X,A)→H_{n−1}(A) 的构造：取相对闭链 c∈C_n(X)（∂c∈C_{n−1}(A)，因相对闭链的边界在 A 中），定义 ∂[c]=[∂c]∈H_{n−1}(A)。【计算】此定义与代表元选取无关（若 c=c′+∂d+a，a∈A，则 ∂c 与 ∂c′ 差一个 A 中的边界）。③【思路】正合性验证：im(H_n(A)→H_n(X))=ker(H_n(X)→H_n(X,A))、im(H_n(X)→H_n(X,A))=ker(∂) 等，由链层面的蛇形引理直接给出。【结论】得空间对长正合序列，是相对同调的基本工具。",
    1: "①【思路】切除公理（Eilenberg–Steenrod 公理版本）：条件 Z̄⊂Int(A) 等价于「令 U=X∖Z 时，X=Int(U)∪Int(A)」。目标是证含入映射 i:(X∖Z,A∖Z)→(X,A) 诱导同调同构 H_n(X∖Z,A∖Z)≅H_n(X,A)。核心工具是“小链子复形” C_n^𝓤(X)，它由像整体落在 U 或落在 A 中的奇异单形生成。【推导】由 Z̄⊂Int(A) 得 Ū=X∖Int(A) ⊂ X∖Z̄，而 X∖Z̄ 是开集，故 {U, Int(A)} 是 X 的开覆盖。②【思路】第一步：证含入 C_*^𝓤(X)→C_*(X) 是拟同构（诱导同调同构）。要用重心重分构造出“把任意链推进小链”的机制。取重心重分算子 sd:C_*→C_*，它满足链同伦恒等式 ∂T+T∂=id−sd（存在链同伦 T 连接 sd 与 id）。【计算】给定链 c，对其每个奇异单形 σ:Δⁿ→X，用开覆盖 {σ⁻¹(U),σ⁻¹(Int A)} 的 Lebesgue 数 δ 把 Δⁿ 重心重分到直径 <δ；重分 k 次后每个子单形的像整体落在 U 或 Int(A)，即 sd^k(c)∈C_*^𝓤(X)。因 sd≃id 链同伦，含入诱导 H_n(C_*^𝓤)≅H_n(X)。③【思路】第二步：证商复形 C_*^𝓤(X)/C_*(A) 与相对链复形 C_*(X∖Z,A∖Z) 链同伦等价。商掉 C_*(A) 后，C_*^𝓤/C_*(A) 由像落在 U=X∖Z 中的单形（模 A 中的链）生成；而 C_*(X∖Z,A∖Z)=C_*(X∖Z)/C_*(A∖Z) 正是落在 X∖Z 中的单形（模 A∖Z 中的链）。【推导】由 Z̄⊂Int(A)，重分足够细时任何与 Z 相交的单形必整体落进 A、在商中被消去，故含入 C_*(X∖Z,A∖Z)→C_*^𝓤(X)/C_*(A) 是链同伦等价。④【思路】第三步：把两步拼合。由短正合序列 0→C_*(A)→C_*^𝓤(X)→C_*^𝓤(X)/C_*(A)→0 诱导长正合，且 C_*(A)→C_*(X) 也是拟同构（同理用重心重分），配上第一步的拟同构 C_*^𝓤≃C_*(X)，用“同调正合序列 + 五引理”得 H_n(C_*^𝓤/C_*(A))≅H_n(X,A)。【计算】拼接：H_n(X∖Z,A∖Z) ≅ H_n(C_*^𝓤(X)/C_*(A)) ≅ H_n(X,A)。⑤【结论】含入诱导同构 H_n(X∖Z,A∖Z)≅H_n(X,A)，切除公理得证。正是这条公理让同调可在空间上“切除”任意满足 Z̄⊂Int(A) 的子集而不改变相对同调，是 Mayer–Vietoris、胞腔同调等一切计算的基础。"
  },
  "t13": {
    0: "①【思路】Mayer–Vietoris 定理：X=Int(U)∪Int(V) 时存在长正合序列。定义 C_n^{U+V}(X) 为像落在 U 或 V 中的链生成子复形，考虑短正合链复形序列 0→C_*(U∩V)→C_*(U)⊕C_*(V)→C_*^{U+V}(X)→0。【推导】三映射分别 z↦(z,−z)、⊕ 元素 (u,v)↦u+v。②【思路】验证正合：中间核为 {(u,v):u+v=0}，即 u 与 v 在 U∩V 中相消 ⟹ (u,v)=(z,−z) 型，恰是左映射像。右满射显然（U+V 中链由 U、V 链之和组成）。【计算】故是短正合序列。③【思路】由蛇形引理，短正合链复形序列诱导同调长正合序列。连接同态 ∂:H_n(X)→H_{n−1}(U∩V) 构造：取 X 闭链 z=u+v（u∈U、v∈V），∂z=∂u+∂v=0 ⟹ ∂u=−∂v∈C_{n−1}(U∩V)，定义 ∂[z]=[∂u]。【推导】由切除定理 H_n^{U+V}(X)≅H_n(X)，故得正合序列。④【结论】…→H_n(U∩V)→H_n(U)⊕H_n(V)→H_n(X)→H_{n−1}(U∩V)→… 是计算同调的 Mayer–Vietoris 长正合序列。",
    1: "①【思路】诱导长正合序列（Mayer–Vietoris 的自然性）：若 f:X→Y 保持两开覆盖（f(U)⊂U′、f(V)⊂V′），则 f 诱导 M–V 长正合序列间的映射且各方块交换。先明确连接同态 ∂:H_n(X)→H_{n−1}(U∩V) 的构造。【推导】取 X 闭链 z，重分使 z=u+v（u∈U、v∈V），则 ∂z=∂u+∂v=0 ⟹ ∂u=−∂v∈C_{n−1}(U∩V)，定义 ∂[z]=[∂u]。②【思路】验证 ∂ 与代表元、重分选取无关：两分解 z=u+v=u′+v′，其差 (u−u′,v−v′) 的边界在 U∩V 中相差边界，故 [∂u]=[∂u′]。【计算】故 ∂ 良定义。③【思路】自然性：链映射 f_# 与重分、分解交换（f 保持覆盖），故 f 诱导的各方块图交换，即 M–V 序列关于 f 自然。【结论】M–V 序列是自然的长正合序列，可配合函子性、切除公理统一使用。"
  },
  "t14": {
    0: "①【思路】胞腔同调定理：CW 复形 X 的胞腔同调 ≅ 奇异同调。关键输入是相对同调计算：H_k(X^n,X^{n−1}) 在 k≠n 时为零，在 k=n 时是自由阿贝尔群、秩等于 n 维胞腔数（因 X^n/X^{n−1}=∨_α S^n_α 是 n 维球束和）。【推导】由 X^n∖X^{n−1}=∐ e_α^n（开胞腔），商空间 X^n/X^{n−1}≅∨ S^n，故 H_n(X^n,X^{n−1})≅ℤ^{#(n 胞腔)}。②【思路】用长正合序列逐维回推：由 H_k(X^{n−1})→H_k(X^n)→H_k(X^n,X^{n−1})→H_{k−1}(X^{n−1}) 正合，归纳证 H_n(X^n) 等于胞腔同调第 n 群。【计算】正合性切断高维与低维的干扰：k>n 时 H_k(X^n)=0，k=n 时由相对群与下阶连接确定。③【思路】取正向极限：CW 复形 X=colim X^n，紧致性断言每个奇异链/同调类落在某 X^n 内，故 H_k(X)≅H_k(X^n) 对足够大 n。【结论】H_n(X)≅H_n^{CW}(X)，胞腔同调与奇异同调自然同构。",
    1: "①【思路】CW 逼近定理：任何拓扑空间 X 存在弱同伦等价 f:Z→X，其中 Z 是 CW 复形。归纳构造：假设已构造 (n−1) 维 CW 骨架 Z^{n−1} 与映射 f^{n−1}（诱导 i≤n−1 的同伦群同构）。【推导】对每个 π_n(X) 的生成元，粘贴 n 维胞腔把 Z^{n−1} 的“缺失”的 π_n 信息补上（用表示球面 Sⁿ→X 的映射作粘贴映射）。②【思路】再处理核：对 f*:π_n(Z)→π_n(X) 的核中元素，粘贴 (n+1) 维胞腔（用表示该核元素的同伦填充）将其消去；同时粘贴更多胞腔填充 π_n(Z) 之外的高维信息。【推导】逐维进行，取极限 Z=colim Z^n。③【思路】由构造，f 诱导所有同伦群同构（弱同伦等价）。在同伦范畴中 CW 逼近唯一（由 Whitehead 定理）。【结论】任何空间弱同伦等价于一个 CW 复形，故同伦论可限于 CW 复形范畴。"
  },
  "t15": {
    0: "①【思路】边界公式 d_n(e_α^n)=Σ_β deg(φ_{αβ}) e_β^{n−1}。d_n 是胞腔链复形的合成 H_n(X^n,X^{n−1})→H_{n−1}(X^{n−1})→H_{n−1}(X^{n−1},X^{n−2})。对每个 n 细胞 e_α^n 带粘贴映射 φ_α:S^{n−1}→X^{n−1}。【推导】d_n(e_α^n) 的第二映射是把 X^{n−1} 中除 e_β^{n−1} 外的胞腔塌缩到一点，得到合成映射 S^{n−1}→X^{n−1}→S^{n−1}_β。③【思路】该合成是球面间映射，其度数为 deg(φ_{αβ})，正是 d_n(e_α^n) 中 e_β^{n−1} 的系数。【计算】d_n(e_α^n)=Σ_β deg(φ_{αβ})·e_β^{n−1}。④【结论】胞腔边界由粘贴映射的度数决定，这是胞腔同调的计算核心（如 RP² 中 d₂(e²)=2e¹）。",
    1: "①【思路】胞腔边界公式：d_n(e_α^n)=Σ_β deg(φ_{αβ}) e_β^{n−1}，其中 deg 是粘贴映射诱导的球面映射度数。d_n 是合成 H_n(X^n,X^{n−1})→H_{n−1}(X^{n−1})→H_{n−1}(X^{n−1},X^{n−2})。【推导】第一映射是长正合序列的连接同态，第二是塌缩映射（把 X^{n−1} 中除 e_β^{n−1} 外的胞腔塌为一点）。②【思路】对 e_α^n 的粘贴映射 φ_α:S^{n−1}→X^{n−1}，其与“塌缩到 e_β^{n−1} 的球面”合成得到 S^{n−1}→S^{n−1}_β，度数为 deg(φ_{αβ})。【计算】该度数即 d_n(e_α^n) 中 e_β^{n−1} 前的系数。③【思路】应用：RP² 的粘贴映射 S¹→S¹ 是 z↦z²（度数 2），故 d₂(e²)=2e¹，得 H₁(RP²)=ℤ/2。【结论】胞腔边界由粘贴映射度数决定，是胞腔同调计算的核心公式。"
  },
  "t16": {
    0: "①【思路】Lefschetz 不动点定理：L(f)=Σ_n(−1)^n tr(f_*:H_n(X;ℚ)→H_n(X;ℚ))≠0 ⟹ f 有不动点。反证设 f 无不动点。由紧致性，可把 X 三角剖分足够细使 f 把每个单纯形映离自身（开覆盖逼近）。【推导】构造链映射使 tr(f_#) 可局部化：若 f 不含不动点，则对足够细剖分，f 不把任何单纯形映入其闭包邻域，故 tr(f_#)=0 的局部化计算给出 L(f)=∑(−1)^n tr(f_#)=0。②【思路】对可缩空间：H_0=ℚ、H_n=0（n>0），故 L(id)=tr(id_{H_0})=1≠0，必有不动点。（这也恢复 Brouwer）。【计算】一般 L(f)≠0 ⟹ 存在不动点。④【结论】Lefschetz 数是代数拓扑不变量，其非零是存在不动点的充分条件，是 Brouwer 的深远推广。",
    1: "①【思路】Hopf 指标定理：紧致流形 M 上向量场孤立奇点的指标和等于 Euler 示性数 χ(M)，且与向量场选择无关。指标定义：向量场 v 的孤立奇点 p 处，取小环绕 S^{n−1}，v/|v|:S^{n−1}→S^{n−1} 的度数即指标。【推导】ind_p(v)=deg(v/|v|)。②【思路】构造 M 的自映射：用向量场的流把小动 ε 时间，得映射 φ_ε:M→M；φ_ε 的不动点恰好是 v 的奇点，且每个不动点处的 Lefschetz 局部指标等于该奇点的向量场指标。【推导】由 Lefschetz 不动点定理，L(φ_ε)=Σ(−1)^n tr((φ_ε)_*:H_n→H_n)，而 φ_ε≃id_M ⟹ L(φ_ε)=χ(M)。③【思路】另一方面 L(φ_ε)=Σ_{奇点} ind_p(v)（局部指标求和）。故 Σ ind_p(v)=χ(M)。【结论】向量场奇点指标和等于 χ(M)，与向量场无关；推论：χ(M)≠0 的流形上不存在处处非零的向量场（如 S² 毛球定理）。"
  },
  "t17": {
    0: "①【思路】上同调函子性：上同调是反变函子。设 f:X→Y，其上链映射 f^#:C^n(Y)→C^n(X) 定义为前复合 φ↦φ∘f_#。【推导】验证 f^# 与上边缘 δ 交换：(δf^#φ)(c)=f^#φ(∂c)=φ(f_#∂c)=φ(∂f_#c)=δφ(f_#c)=f^#(δφ)(c)。②【思路】故 f^# 是链映射（交换 δ），诱导上同调同态 f^*：H^n(Y)→H^n(X)。反变性来自复合顺序。③【计算】(g∘f)^*(φ)=φ∘(g∘f)_#=φ∘g_#∘f_#=(g^*φ)∘f_#=f^*(g^*φ)=(f^*∘g^*)(φ)。【结论】故 H^n 是从空间范畴到分次群范畴的反变函子；上同调的“反变”是它区别于同调的本质特征。",
    1: "①【思路】上同调与同调的关系由万有系数定理给出：H^n(X;G)≅Hom(H_n(X),G)⊕Ext(H_{n−1}(X),G)。同调测度“洞”，上同调测度“函数（余链）”。【推导】同调 H_n 是几何对象（链模边界），上同调 H^n 是其对偶（上链模余边界）。②【思路】区别在于环结构：同调只有分次群结构，而上同调有 Cup 积赋予的环结构 H^*(X)=⊕H^n(X)。该环结构可分辨“同调同构但不同伦等价”的空间。【推导】例如 CP² 与 S²∨S⁴ 同调同构，但前者的 Cup 积 α²=β≠0，后者 Cup 积全零，故不同伦等价。③【思路】故上同调携带严格更多的信息：既有对偶的群结构（万有系数定理完全可以由同调+Ext 确定），又有多出的环结构。【结论】上同调的优势在于 Cup 积环结构，这让它成为示性类、Poincaré 对偶等理论的天然居所。"
  },
  "t18": {
    0: "①【思路】Cup 积分次交换性：α⌣β=(−1)^{pq}β⌣α（|α|=p、|β|=q）。上链层面 (φ⌣ψ)(σ)=φ(σ|_[v₀,…,v_p])·ψ(σ|_[v_p,…,v_{p+q}])。交换 φ、ψ 需把顶点序 (v₀,…,v_p,v_p,…,v_{p+q}) 重排为 (v_p,…,v_{p+q},v₀,…,v_p)。【推导】此重排是一个 (p+q+1) 元置换，符号为 (−1)^{pq}（把后 q 个顶点移到前面需要 p·q 次相邻对换）。②【思路】因此 φ⌣ψ 与 (−1)^{pq}ψ⌣φ 相差一个边界（反对称化），在上同调类层面相等。【计算】[φ⌣ψ]=(−1)^{pq}[ψ⌣φ]。③【结论】H^*(X) 是分次交换环，这是上同调相对同调的核心优势（同调只有分次群结构、无乘法）。",
    1: "①【思路】Cup 积的自然性：连续映射 f:X→Y 诱导环同态 f^*:H^*(Y)→H^*(X)，即 f^*(α⌣β)=f^*(α)⌣f^*(β)。在上链层面验证。对 φ∈C^p(Y)、ψ∈C^q(Y)、奇异单纯形 σ:Δ^{p+q}→X。【计算】f^#(φ⌣ψ)(σ)=(φ⌣ψ)(f∘σ)=φ((f∘σ)|_前)·ψ((f∘σ)|_后)。②【思路】而与 f^#φ⌣f^#ψ 比较。【计算】(f^#φ⌣f^#ψ)(σ)=f^#φ(σ|_前)·f^#ψ(σ|_后)=φ(f∘σ|_前)·ψ(f∘σ|_后)。③【思路】两式相等（因 (f∘σ)|_前=f∘(σ|_前) 是同一个限制），故 f^#(φ⌣ψ)=f^#φ⌣f^#ψ 在上链层面成立，传递到上同调即 f^* 保持 Cup 积。【结论】f^*:H^*(Y)→H^*(X) 是分次环同态，上同调是从空间到分次环的反变函子。"
  },
  "t19": {
    0: "①【思路】同调万有系数定理：0→H_n(X)⊗G→H_n(X;G)→Tor(H_{n−1}(X),G)→0 分裂（非自然）。取 Z 系数奇异链复形 C_*，则 C_*(X;G)=C_*⊗G。关键：C_n 是自由 Abel 群。故其子群 B_n=im∂ 也自由（自由群的子群自由）。【推导】这使同调作为 ker∂/im∂ 的取模过程可用纯代数分解。②【思路】对自由（上）链复形做代数万有系数定理：H_n(C⊗G) 由 H_n(C)⊗G 与 Tor(H_{n−1}(C),G) 决定。Tor(H,G) 度量 H 的扭转元素在张量积中的“损失”。【计算】如 H_{n−1}=ℤ/2、G=ℤ 时 Tor(ℤ/2,ℤ)=ℤ/2。③【思路】序列分裂：因 C_n、ker 自由，可选同伦分解让短正合序列分裂（但分列不自然、依赖基选取）。【结论】H_n(X;G) 由“自由部分⊗G”加“扭转的 Tor 修正”组成。",
    1: "①【思路】上同调万有系数定理：0→Ext(H_{n−1}(X),G)→H^n(X;G)→Hom(H_n(X),G)→0（分裂非自然）。对 Z 系数链复形 C_* 应用 Hom(·,G) 得上链复形 C^*=Hom(C_*,G)。【推导】上同调 H^n(C^*) 由 Hom(H_n,G) 与 Ext(H_{n−1},G) 决定。②【思路】Hom(H_n,G) 是自由部分的“对偶”（取同调到 G 的线性映射），Ext(H_{n−1},G) 测度扭转部分到 G 的“扩张”。【计算】如 H_1(RP²)=ℤ/2、G=ℤ 时 Hom(ℤ/2,ℤ)=0 而 Ext(ℤ/2,ℤ)=ℤ/2，故 H¹(RP²;ℤ)=0、但含 Ext 的下一维 H²(RP²;ℤ)=ℤ/2（由 H_1=ℤ/2 贡献 Ext）。③【思路】序列分裂但不自然（依赖自由链复形的基选取）。【结论】上同调 = Hom(同调) ⊕ Ext(降一维同调的扭转)，是万有系数定理的上同调版本。"
  },
  "t20": {
    0: "①【思路】同调 Künneth 定理：H_n(X×Y) 由 ⊕_{i+j=n}H_i(X)⊗H_j(Y) 与 ⊕Tor 项决定。第一步用 Eilenberg–Zilber 定理：链复形 C_*(X×Y) 与 C_*(X)⊗C_*(Y)（分次张量积）链同伦等价。【推导】由标准单纯形的棱柱三角剖分 + acyclic model 论证，存在自然链等价 C_*(X×Y)≃C_*(X)⊗C_*(Y)。②【思路】对张量积链复形应用代数 Künneth 公式。【计算】H_n(C⊗D)≅⊕_{i+j=n}H_i(C)⊗H_j(D) ⊕ ⊕_{i+j=n−1}Tor(H_i(C),H_j(D))（分裂但不自然）。③【思路】域系数下 Tor 消失，公式简化为纯张量。【结论】H_n(X×Y;𝕜)≅⊕_{i+j=n}H_i(X;𝕜)⊗H_j(Y;𝕜)，域系数下最简洁。",
    1: "①【思路】上同调 Künneth 定理：域系数 𝕜 下，H^n(X×Y;𝕜)≅⊕_{i+j=n}H^i(X;𝕜)⊗H^j(Y;𝕜)，且上同调环是因子环的分次张量积。【推导】域系数下 Tor、Ext 都消失，同调 Künneth 公式给出同调同构，再由万有系数定理（域上 H^n=Hom(H_n,𝕜)=H_n 的对偶）传递到上同调。②【思路】环结构显式：H^*(X×Y)≅H^*(X)⊗H^*(Y) 作为分次代数，乘法满足 (α⊗β)⌣(γ⊗δ)=(−1)^{|β||γ|}(α⌣γ)⊗(β⌣δ)。【推导】符号 (−1)^{|β||γ|} 来自上链层面重排顶点序。③【思路】例：T²=S¹×S¹ ⟹ H^*(T²)≅(ℤ[α]/α²)⊗(ℤ[β]/β²)≅ℤ[α,β]/(α²,β²)，|α|=|β|=1。【结论】上同调 Künneth 定理把乘积空间的上同调（含环结构）完全分解为因子贡献。"
  },
  "t21": {
    0: "①【思路】Poincaré 对偶定理：紧致可定向 n 流形 M 上，Cap 积 D(α)=α⌢[M] 给出同构 H^k(M)≅H_{n−k}(M)。[M]∈H_n(M) 是基本类。策略是用对偶胞腔分解（dual cell decomposition）把上链复形对应到胞腔链复形。【推导】把 M 三角剖分，对偶剖分中每个 k 胞腔恰对应一个 (n−k) 胞腔。②【思路】对偶胞腔复形的链复形与上链复形同构（dim 互补 + 定向一致），故 H^k(M)≅H_{n−k}^{dual}(M)≅H_{n−k}(M)。用 Mayer–Vietoris 归纳到一般流形。③【思路】基本类 [M] 的存在由可定向性保证（可定向 ⟹ 存在全局一致定向的 n 链）。【推导】D(α) 与 α 的对应在局部同调上良定义。④【结论】H^k(M)≅H_{n−k}(M)，把上同调与同调经由基本类对偶起来，是流形理论最深的结构定理之一。",
    1: "①【思路】Lefschetz 对偶（Poincaré–Lefschetz）：紧致可定向带边流形 (M,∂M) 上，H^k(M)≅H_{n−k}(M,∂M) 与 H^k(M,∂M)≅H_{n−k}(M)。核心是把 Poincaré 对偶推广到带边。取 M 的二倍流形 DM=M∪_{∂M}M（沿边界粘两个副本）。【推导】DM 是紧致无边流形，应用 Poincaré 对偶。②【思路】用 Mayer–Vietoris 序列分解 DM 为两个 M（交于 ∂M），把 DM 的对偶关系“退回”到 M 的相对/绝对同调。基本类现在落在 H_n(M,∂M) 中（相对基本类）。【推导】Cap 积 D(α)=α⌢[M,∂M] 给出 H^k(M)→H_{n−k}(M,∂M) 的同构。③【思路】另一半 H^k(M,∂M)≅H_{n−k}(M) 由同一基本类配相对/绝对系数的对偶得到。【结论】带边流形的 Poincaré–Lefschetz 对偶得证，本质是基本类在边界上的“相对”行为。"
  },
  "t22": {
    0: "①【思路】de Rham 定理：H^k_{dR}(M)≅H^k(M;ℝ)，且楔积对应 Cup 积。构造映射 I:H^k_{dR}(M)→H^k(M;ℝ)，把微分形式 ω 映为上链 σ↦∫_σ ω。【推导】由 Stokes 定理 I(dω)=δI(ω)，故 I 是链映射，诱导上同调同态。②【思路】证 I 是同构：先对 ℝⁿ（凸域）用 Poincaré 引理（闭形式必恰当 ⟹ H^k_{dR}(ℝⁿ)=0，k>0，且 H⁰=ℝ），I 在该情形是显然同构。再用 Mayer–Vietoris + 单位分解归纳到一般流形。【推导】两上同调理论都满足 Mayer–Vietoris，且 I 与之自然交换，故归纳传递同构。③【思路】楔积 ↔ Cup 积由 Fubini 定理保证（积分在因子上的乘积分解）。【结论】H^k_{dR}(M)≅H^k(M;ℝ) 作为环同构，把分析与代数拓扑连接起来。",
    1: "①【思路】Chern–Weil 理论：向量丛的曲率形式通过不变多项式产生示性类，且不依赖联络选取。对秩 r 复向量丛 E 取联络，曲率形式 Ω 是取值 gl(r) 的 2-形式。对 Ad-不变多项式 P（如 P(A)=det(1+(i/2π)A) 的各齐次系数），构造 P(Ω)。【推导】Bianchi 恒等式 dΩ+[ω,Ω]=0 且 P 不变 ⟹ dP(Ω)=0（P(Ω) 是闭形式）。②【思路】证 de Rham 类 [P(Ω)] 不依赖联络：另取联络 ω′，则 Ω′−Ω 恰当（联络差是 1-形式，其曲率差可写成差联系数的协变外导），故 P(Ω′)−P(Ω) 恰当。【计算】用变分公式 d/dt P(Ω_t)=r·dP(⋯)，其中 Ω_t 是联络线性插值的曲率，故积分路径显示差是恰当形式。③【思路】由 de Rham 定理，闭形式 P(Ω) 对应上同调类（如 Chern 类 c_k(E)∈H^{2k}(M;ℤ)）。【结论】曲率形式确定了不依赖联络的示性类，把几何（曲率）与拓扑（示性类）连接起来。"
  },
  "t23": {
    0: "①【思路】n≥2 时 π_n 是阿贝尔群：高阶同伦群可交换。核心是 Sⁿ(n≥2) 有足够维数让两个环路“彼此绕过”。把 [f]、[g] 的乘积 f·g（沿赤道拼接）与 g·f 比较。【推导】在 Sⁿ 上将两个代表映射 f、g 放在两个互不相交的“胖”半球上（拼接点沿赤道 S^{n−1}）。n≥2 ⟹ S^{n−1} 非离散、连通性强，可在赤道上连续旋转，使拼接位置互换而不让 f、g 的像相撞。②【思路】构造同伦把 f·g 变到 g·f：先在赤道两侧各给 f、g 预留一个收缩的邻域（用 X 中道路把基点连接），旋转坐标使两张“球帽”互换。【计算】该旋转在 Sⁿ 上可实现（n≥2 时 O(n+1) 连通），诱导 f·g≃g·f。③【结论】π_n(X)（n≥2）是阿贝尔群；n=1 时 π₁ 一般非交换（如 8 字形 π₁=F₂），阿贝尔性从 n=2 开始。",
    1: "①【思路】同伦群的函子性：π_n 是带基点空间范畴到群范畴（n≥2 为 Abel 群范畴）的函子。定义 f_*([α])=[f∘α]，其中 α:Sⁿ→X。【推导】先证良定义：α≃α′（保持基点）⟹ f∘α≃f∘α′，故 [f∘α] 只依赖 [α]。②【思路】证 f_* 是群同态：拼接与复合映射交换。【计算】f∘(α·β)=(f∘α)·(f∘β)（拼接点处 f 保持连续性、基点），故 f_*([α·β])=f_*([α])·f_*([β])。③【思路】反变/协变方向：π_n 是协变函子（与基本群同向）。复合性 (g∘f)_*=g_*∘f_* 由 (g∘f)∘α=g∘(f∘α) 直接得。【结论】π_n 是协变函子，是连接同伦与代数的基本桥梁。"
  },
  "t24": {
    0: "①【思路】纤维化 F→E→p→B 的同伦群长正合序列 …→π_n(F)→π_n(E)→π_n(B)→∂ π_{n−1}(F)→…。连接同态 ∂:π_n(B)→π_{n−1}(F) 用同伦提升性质构造。给定 f:Sⁿ→B，视 Sⁿ=Dⁿ/{∂Dⁿ}，把 (Dⁿ,∂Dⁿ) 提升到 E。【推导】底映射 f∘q（q:Dⁿ→Sⁿ 商映射）经同伦提升性质提升到 E，其在边界 S^{n−1} 上的限制落进纤维 F（因 p 把边界映到基点）。③【思路】∂[f]=[提升|_{S^{n−1}}]∈π_{n−1}(F)。正合性逐处验证：π_n(E)→π_n(B) 的 kernel 恰为从 F 来的像（提升到 E 的映射边界落 F ⟹ 来自 F）；其余各处类似用提升与压缩同伦。【结论】此长正合序列把纤维、全空间、底空间的同伦群链起来，是纤维化理论的中心工具。",
    1: "①【思路】同伦提升性质（HLP）：纤维化 p:E→B 对任意空间 X 具有同伦提升性质。纤维化（Hurewicz 意义）定义为“对任意 X 及同伦 H:X×I→B，若初始映射可提升到 E，则整个同伦可提升到 E 且保持初始提升”。【推导】这是纤维化的定义本身；覆叠空间、纤维丛都满足 HLP。②【思路】对局部平凡纤维丛（如覆叠），证明 HLP：把底同伦 H 用 Lebesgue 数分解为小段，在每段上用局部平凡化（乘积结构）提升，逐段拼接。【推导】紧致性保证有限分解，局部乘积 p⁻¹(U)≅U×F 提供每段的提升。③【思路】由 HLP 得到纤维化的同伦群长正合序列及同伦群的众多性质。【结论】HLP 是纤维化理论的基石，连接底空间、全空间、纤维的拓扑不变性。"
  },
  "t25": {
    0: "①【思路】Whitehead 定理（同调版本）：单连通 CW 复形间映射 f:X→Y，诱导同调同构 ⟹ f 同伦等价。单连通 ⟹ 可用 Hurewicz 定理搭建同调与同伦的桥。先看最低非零群：设 H_n(X) 是 X 的第一个非零同调（n≥1，因单连通 H₁=0）。【推导】由绝对 Hurewicz，π_n(X)≅H_n(X)（第一个非零群处），且 f 在此诱导同构。②【思路】归纳推进：在 n 维以下 f 诱导同伦群同构后，相对 Hurewicz 定理保证下一维 π_n 也被 f 映为同构（同调同构传递）。逐维归纳至所有 n。【计算】每一步用同调同构 ⟹ 相对同调同构 ⟹ 相对 Hurewicz ⟹ 同伦群同构。③【思路】再由 Whitehead 定理（同伦群版本：弱同伦等价 ⟹ 同伦等价），f 同伦等价。【结论】单连通情形下同调同构 ⟹ 同伦等价。",
    1: "①【思路】Whitehead 定理（同调版本）：单连通 CW 复形间映射 f:X→Y 诱导同调同构 ⟹ f 是同伦等价。单连通性使 Hurewicz 定理可用（第一步非零群由同调识别）。【推导】设 H_n(X) 是 X 第一个非零同调（n≥2，因单连通 H₁=0、H₀=ℤ），由绝对 Hurewicz 定理，π_n(X)≅H_n(X)。②【思路】f 诱导同调同构 ⟹ f 诱导第一步 π_n 同构。再用相对 Hurewicz 逐维推进：已知 f 诱导 i≤m 同伦群同构，则相对同调谱序列/相对 Hurewicz 给出 π_{m+1} 也同构。【计算】归纳到所有维数，得 f 是弱同伦等价。③【思路】由 Whitehead 定理（同伦群版本）：CW 复形间的弱同伦等价是同伦等价。【结论】单连通 CW 复形间，同调同构 ⟺ 同伦等价，这是“同调充分判定同伦型”的重要情形。"
  },
  "t26": {
    0: "①【思路】Hurewicz 定理：若 X 是 (n−1) 连通（n≥2），则 Hurewicz 同态 h:π_n(X)→H_n(X) 是同构（n=1 时是交换化同构）。定义 h([f])=f_*([Sⁿ])，[Sⁿ] 是 Sⁿ 的基本类。【推导】先证 X (n−1) 连通 ⟹ H_i(X)=0（i<n）且 h 是满射：对 π_n 生成元逐个用相对同调 + 切除（把球贴进去）实现。②【思路】n≥2 时证 h 单射：用五引理或直接构造。h 的 kernel 由“边界为 0 的映射”组成，这类映射 f:Sⁿ→X 延伸为 D^{n+1}→X 上的映射当 X (n−1) 连通且 n≥2 时成立（相对 Hurewicz 归纳），故 kernel 平凡。【计算】n=1 时：h:π₁(X)→H₁(X) 是满射且 kernel=[π₁,π₁]（换位子群），故 H₁(X)≅π₁(X)^{ab}。④【结论】最低非零同伦群同构于对应同调群（或交换化），把两类不变量连接起来。",
    1: "①【思路】相对 Hurewicz 定理：空间对 (X,A)（A 道路连通）若 (n−1) 连通，则相对 Hurewicz 同态 h:π_n(X,A)→H_n(X,A) 同构（n≥2）。相对同伦群 π_n(X,A) 的元素是 (Dⁿ,∂Dⁿ)→(X,A) 的映射（边界映到 A）。【推导】h 把 f:(Dⁿ,∂Dⁿ)→(X,A) 映到 f_*([Dⁿ,∂Dⁿ])∈H_n(X,A)（相对基本类）。②【思路】(X,A) (n−1) 连通 ⟹ π_i(X,A)=0（i<n），由绝对情形的平行论证（相对同调 + 相对同伦的正合序列）归纳得 H_i(X,A)=0（i<n）且 h 满射。【推导】五引理或直接构造证明 h 单射（n≥2）。③【思路】n=1 时是交换化：h:π₁(X,A)→H₁(X,A) 的核是换位子群。【结论】相对 Hurewicz 把相对同伦与相对同调连接，是 Whitehead 定理（同调版本）的归纳基石。"
  },
  "t27": {
    0: "①【思路】Freudenthal 悬挂定理：悬挂同态 Σ:π_{n+k}(Sⁿ)→π_{n+k+1}(S^{n+1}) 在 k≤n−1 是同构、k=n 是满射。悬挂 Σf 由 f 逐点悬挂得到。核心是 Blakers–Massey 定理与同调论证。【推导】Blakers–Massey：映射的像（悬挂）在维数较低时，同伦群的信息在低维被“稳定化”截断，多余信息随 n 增大消失。②【思路】在稳定范围 k≤n−1，Σ 在 π 上诱导同构：因 Sⁿ 的 (2n−1) 维以下同伦群等于 S^{n+1} 的对应同伦群（悬挂稳定），由 π_{n+k}(Sⁿ) 的双悬浮稳定。【计算】重复悬挂取正向极限得稳定同伦群 π_k^S=colim_n π_{n+k}(Sⁿ)。③【结论】悬挂在稳定范围是同构，据此可定义稳定同伦群；如 π_{n+1}(Sⁿ)≅ℤ/2（n≥3），即 π₁^S≅ℤ/2。",
    1: "①【思路】Serre 有限性定理：π_{n+k}(Sⁿ) 在 k>0 时是有限群，唯一例外是 π_{4n−1}(S^{2n}) 含一个 ℤ 直和项。方法：Serre 谱序列计算球面模 p 上同调，结合模 C 理论。【推导】用 Serre 谱序列（对纤维化 ΩSⁿ→PSⁿ→Sⁿ）迭代计算出 H^*(球面纤维化) 的模 p 信息。②【思路】有理同调上：π_*(Sⁿ)⊗ℚ 极大简单——n 奇时只有 π_n(Sⁿ)⊗ℚ=ℚ；n 偶时再加 π_{2n−1}(Sⁿ)⊗ℚ=ℚ（由 Hopf 不变量 1 解释）。【计算】故有理部分只有这两个，其余同伦群 ⊗ℚ 为零 ⟹ 其余群是有限群。③【思路】唯一例外 π_{4n−1}(S^{2n}) 的 ℤ 直和项由 Hopf 不变量的非子存在（Hopf 纤维化的稳定化）。【结论】球面同伦群除有限个例外几乎全都是有限群，这是 Serre 的突破性结果。"
  }
};
