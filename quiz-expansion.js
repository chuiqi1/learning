// 围绕 Lee《Introduction to Riemannian Manifolds》与 Hatcher《Algebraic Topology》
// 的相关章节自编；不转录教材习题，也不伪称教材题号。
const L = String.raw;
const detailed = x => ({ ...x, richAnswer: true });

const riemann = [
  {
    type: 'choice', chapter: 'ch2', difficulty: 'easy',
    q: '给定局部坐标中的矩阵 g_ij，哪一条保证它定义黎曼度量？',
    options: ['每个矩阵元素都大于零', '矩阵对称，且任意非零 v 满足 vᵀgv>0', '矩阵行列式为零', '矩阵可逆即可'],
    answer: 1,
    explanation: '逐点定义要求 g_p 是切空间上的正定内积。矩阵须对称，而且任意非零切向量的长度平方 vᵀgv 严格为正；单个矩阵元素可以为零或负，可逆也不等于正定。',
    source: 'Lee 第 2 章'
  },
  detailed({
    type: 'computation', chapter: 'ch4', difficulty: 'medium',
    q: '欧氏平面去掉原点后用极坐标，g=dr²+r²dθ²。逐项求所有非零 Christoffel 符号，并验证 θ=常数的径向曲线是测地线。',
    idea: '先写度量矩阵和逆矩阵，再把唯一非零的度量偏导代入 Christoffel 公式；最后代入测地线方程。',
    source: 'Lee 第 5—6 章',
    answer: L`<h4>第一步：把度量写成矩阵</h4>
令 \(x^1=r,x^2=\theta\)，从 \(g=dr^2+r^2d\theta^2\) 读出 \(g_{rr}=1,g_{r\theta}=0,g_{\theta\theta}=r^2\)。
<h4>第二步：求逆矩阵</h4>
因为 \(r>0\)，对角矩阵可逆，且 \(g^{rr}=1,g^{r\theta}=0,g^{\theta\theta}=r^{-2}\)。
<h4>第三步：找非零的一阶偏导</h4>
\(\partial_r g_{\theta\theta}=2r\)；其余分量是常数或不依赖 \(\theta\)，偏导全部为零。
<h4>第四步：回忆公式</h4>
<div class="eq">$$\Gamma^k_{ij}=\frac12\sum_\ell g^{k\ell}(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij}).$$</div>
<h4>第五步：算 \(\Gamma^r_{\theta\theta}\)</h4>
只剩 \(\ell=r\)：\(\Gamma^r_{\theta\theta}=\frac12(1)(0+0-2r)=-r\)。
<h4>第六步：算 \(\Gamma^\theta_{r\theta}\)</h4>
只剩 \(\ell=\theta\)：\(\Gamma^\theta_{r\theta}=\frac12r^{-2}(2r+0-0)=1/r\)。
<h4>第七步：检查对称与剩余项</h4>
下指标对称，故 \(\Gamma^\theta_{\theta r}=1/r\)。其余组合都不含唯一非零的 \(\partial_r g_{\theta\theta}\)，或者被 \(g^{r\theta}=0\) 消掉，故为零。
<h4>第八步：代入测地线方程</h4>
定义 \(\ddot x^k+\Gamma^k_{ij}\dot x^i\dot x^j=0\)。代入上面三项，得 \(\ddot r-r\dot\theta^2=0\) 和 \(\ddot\theta+2\dot r\dot\theta/r=0\)。
<h4>第九步：代入径向曲线</h4>
令 \(\theta(t)=\theta_0\)，则 \(\dot\theta=\ddot\theta=0\)。角度方程变为 \(0=0\)，径向方程为 \(\ddot r=0\)。积分得 \(r(t)=at+b\)，限于 \(r>0\) 的区间。
<div class="keybox">$$\boxed{\Gamma^r_{\theta\theta}=-r,\quad\Gamma^\theta_{r\theta}=\Gamma^\theta_{\theta r}=r^{-1};\quad(r,\theta)=(at+b,\theta_0)\text{ 为测地线。}}$$</div>`
  })
];

const topo = [
  {
    type: 'choice', chapter: 'ch2', difficulty: 'medium',
    q: '链复形 C₂=Z、C₁=Z²、C₀=Z 中，∂₂(1)=(0,2)、∂₁=0。H₁ 是什么？',
    options: ['Z²', 'Z⊕Z/2', 'Z/2', '0'], answer: 1,
    explanation: '按定义 H₁=ker∂₁/im∂₂。这里核是 Z²，像是由 (0,2) 生成的子群；商掉第二坐标的偶数倍后，第一坐标仍为 Z，第二坐标变成 Z/2。',
    source: 'Hatcher 第 2 章'
  },
  detailed({
    type: 'computation', chapter: 'ch2', difficulty: 'medium',
    q: 'Klein 瓶的标准 CW 分解有一个 0-胞腔、1-胞腔 a,b 和一个沿 aba⁻¹b 粘合的 2-胞腔。写出整数边界映射，求全部同调群。',
    idea: '按粘合词中各有向边的带符号次数计算二维边界，再取每个次数的核与像。',
    source: 'Hatcher 第 2 章',
    answer: L`<h4>第一步：写链群</h4>
每个 \(k\)-胞腔给 \(C_k\) 一个自由生成元，所以 \(C_2=\mathbb Z\langle e^2\rangle,C_1=\mathbb Z\langle a,b\rangle,C_0=\mathbb Z\langle v\rangle\)，其它链群为零。
<h4>第二步：计算 \(\partial_1\)</h4>
\(a,b\) 的起点与终点都是 \(v\)，故 \(\partial_1a=v-v=0,\partial_1b=v-v=0\)。因此 \(\partial_1=0\)。
<h4>第三步：数 \(a\) 的系数</h4>
粘合词 \(aba^{-1}b\) 中，\(a\) 正向一次、反向一次，系数 \(1-1=0\)。
<h4>第四步：数 \(b\) 的系数</h4>
\(b\) 正向出现两次，系数 \(1+1=2\)，所以 \(\partial_2(e^2)=0a+2b\)。
<h4>第五步：计算二维同调</h4>
\(\partial_2(n e^2)=2n b\)。由于 \(C_1\) 无挠，\(2nb=0\) 只在 \(n=0\) 时成立，故 \(\ker\partial_2=0\)，于是 \(H_2=0\)。
<h4>第六步：计算一维同调</h4>
\(\ker\partial_1=C_1=\mathbb Za\oplus\mathbb Zb\)，\(\operatorname{im}\partial_2=2\mathbb Zb\)。取商得到 \(H_1\cong\mathbb Z a\oplus(\mathbb Zb/2\mathbb Zb)\cong\mathbb Z\oplus\mathbb Z/2\)。
<h4>第七步：计算零维同调</h4>
\(H_0=C_0/\operatorname{im}\partial_1=\mathbb Z/0=\mathbb Z\)，与空间连通相符。
<div class="keybox">$$\boxed{H_0=\mathbb Z,\qquad H_1=\mathbb Z\oplus\mathbb Z/2,\qquad H_2=0.}$$</div>`
  })
];

const cross = [
  detailed({
    type: 'computation', difficulty: 'hard', riemannChapter: 'ch8', topoChapter: 'ch2',
    q: '跨学科：闭合可定向亏格 2 曲面带常曲率 K=−1。求其面积、Euler 示性数、整数同调 H₀/H₁/H₂，并核对 Betti 数交错和。',
    idea: '先由亏格算 Euler 示性数并应用 Gauss–Bonnet，再用曲面的标准 CW 分解计算胞腔同调。',
    source: 'Lee 第 9 章；Hatcher 第 2 章',
    answer: L`<h4>第一步：算 Euler 示性数</h4>
可定向闭曲面 \(\Sigma_g\) 的 \(\chi=2-2g\)。取 \(g=2\)，得 \(\chi=-2\)。
<h4>第二步：回忆 Gauss–Bonnet</h4>
\(\int_{\Sigma_2}K\,dA=2\pi\chi=2\pi(-2)=-4\pi\)。
<h4>第三步：利用常曲率求面积</h4>
\(K\equiv-1\)，故左边是 \(-\int dA=-\operatorname{Area}\)。所以 \(-\operatorname{Area}=-4\pi\)，即面积 \(4\pi\)。
<h4>第四步：写出胞腔链群</h4>
标准多边形表示有一个 0-胞腔、\(2g=4\) 个 1-胞腔、一个 2-胞腔，因此 \(C_0=\mathbb Z,C_1=\mathbb Z^4,C_2=\mathbb Z\)。
<h4>第五步：计算两个边界</h4>
四条 1-胞腔首尾都在同一个顶点，故 \(\partial_1=0\)。2-胞腔的粘合词是 \([a_1,b_1][a_2,b_2]\)，每条边正反各走一次，带符号次数为零，故 \(\partial_2=0\)。
<h4>第六步：逐个取核与像</h4>
\(H_2=\ker\partial_2/\operatorname{im}\partial_3=\mathbb Z\)，\(H_1=\ker\partial_1/\operatorname{im}\partial_2=\mathbb Z^4\)，\(H_0=C_0/\operatorname{im}\partial_1=\mathbb Z\)。
<h4>第七步：用 Betti 数核对</h4>
\(b_0=1,b_1=4,b_2=1\)，交错和 \(1-4+1=-2\)，恰与第一步的 \(\chi\) 一致。
<div class="keybox">$$\boxed{\chi=-2,\quad\operatorname{Area}=4\pi,\quad(H_0,H_1,H_2)=(\mathbb Z,\mathbb Z^4,\mathbb Z).}$$</div>`
  }),
  detailed({
    type: 'computation', difficulty: 'medium', riemannChapter: 'ch3', topoChapter: 'ch1',
    q: '跨学科：平坦环面 T²=R²/Λ，其中 Λ 由 (2,0)、(1,3) 生成。求面积、Gauss 曲率、基本群、H₁，以及格向量 (3,3) 对应的闭测地线长度。',
    idea: '面积来自格基行列式，基本群来自万有覆盖与 Deck 平移，闭测地线来自欧氏直线投影。',
    source: 'Lee 第 3、6 章；Hatcher 第 1—2 章',
    answer: L`<h4>第一步：求基本平行四边形面积</h4>
格基列矩阵是 \(A=\begin{pmatrix}2&1\\0&3\end{pmatrix}\)。\(\det A=2\cdot3-0\cdot1=6\)，故商环面的面积为 \(6\)。
<h4>第二步：算局部曲率</h4>
格平移是欧氏等距，商映射局部等距。欧氏平面度量分量恒定，Christoffel 符号和曲率为零，所以 \(K_{T^2}=0\)。
<h4>第三步：算基本群</h4>
\(\mathbb R^2\) 单连通，是环面的万有覆盖；Deck 群正是格平移 \(\Lambda\)。因此 \(\pi_1(T^2)\cong\Lambda\cong\mathbb Z^2\)。
<h4>第四步：算一维同调</h4>
\(H_1\) 是基本群的交换化。因 \(\mathbb Z^2\) 已交换，\(H_1(T^2;\mathbb Z)\cong\mathbb Z^2\)。
<h4>第五步：检查位移闭合</h4>
解 \(m(2,0)+n(1,3)=(3,3)\)：从第二坐标得 \(n=1\)，第一坐标得 \(2m+1=3\Rightarrow m=1\)。因此位移属于 \(\Lambda\)。
<h4>第六步：计算长度</h4>
欧氏直线 \(\gamma(t)=t(3,3)\) 在商空间中首尾相接，局部等距保持测地性。速度常为 \((3,3)\)，长度为 \(\int_0^1\sqrt{3^2+3^2}\,dt=3\sqrt2\)。
<div class="keybox">$$\boxed{\operatorname{Area}=6,\quad K=0,\quad\pi_1=H_1=\mathbb Z^2,\quad L=3\sqrt2.}$$</div>`
  })
];

riemann.push(
  {
    type: 'computation', chapter: 'ch1', difficulty: 'medium',
    q: '椭圆 γ(t)=(3 cos t,2 sin t) 在 t=0 和 t=π/2 的曲率各是多少？请从一般参数曲率公式逐项计算。',
    idea: '先求两阶导，算行列式分子和速度平方分母，最后分别代入两个参数值。',
    answer: '①x′=−3 sin t，y′=2 cos t；x″=−3 cos t，y″=−2 sin t。②分子 |x′y″−y′x″|=|6 sin²t+6 cos²t|=6。③速度平方 x′²+y′²=9 sin²t+4 cos²t，故 κ(t)=6/(9 sin²t+4 cos²t)^(3/2)。④t=0 时分母 4^(3/2)=8，故 κ(0)=6/8=3/4。⑤t=π/2 时分母 9^(3/2)=27，故 κ(π/2)=6/27=2/9。⑥两处曲率不同，因椭圆沿不同方向的弯曲程度不同。',
    source: 'Lee 第 1 章'
  },
  {
    type: 'computation', chapter: 'ch2', difficulty: 'medium',
    q: '平面上取共形度量 h=e^(2x)(dx²+dy²)。求直线段 γ(t)=(t,0)，0≤t≤1 的 h-长度，以及矩形 0≤x≤1、0≤y≤2 的 h-面积。',
    idea: '长度取速度的 h-范数积分；二维面积密度是 √det(h_ij)，不要与长度因子混淆。',
    answer: '①度量矩阵 h_ij=e^(2x)I₂，沿 γ 有 x=t、γ′=(1,0)。②h(γ′,γ′)=e^(2t)，速度范数是 e^t。③长度 ∫₀¹e^t dt=[e^t]₀¹=e−1。④det(h_ij)=e^(2x)·e^(2x)=e^(4x)，面积密度 √det h=e^(2x)。⑤面积 ∫₀¹∫₀² e^(2x)dy dx=∫₀¹2e^(2x)dx=[e^(2x)]₀¹=e²−1。⑥长度因子是 e^x，而二维面积因子是 e^(2x)，与维数一致。',
    source: 'Lee 第 2 章'
  },
  {
    type: 'computation', chapter: 'ch5', difficulty: 'medium',
    q: '单位球面 S² 北极 N=(0,0,1)，取切向量 v=(π/2,0,0)。求 exp_N(v)、从 N 到该点的球面距离，并指出 v 的长度。',
    idea: '单位球面的指数映射沿大圆 γ_v(t)=cos(t|v|)N+sin(t|v|)v/|v|；逐项代入 t=1。',
    answer: '①N·v=0，故 v∈T_N S²。②欧氏长度 |v|=π/2；在诱导度量下切向量长度相同。③单位初速方向 v/|v|=(1,0,0)。④代入球面指数公式：exp_N(v)=cos(π/2)N+sin(π/2)(1,0,0)=(1,0,0)。⑤两点球面夹角是 arccos(N·(1,0,0))=arccos0=π/2。⑥该角小于 π，所以短大圆弧极小；单位球面距离等于 π/2，也等于 |v|。',
    source: 'Lee 第 6 章'
  },
  {
    type: 'computation', chapter: 'ch6', difficulty: 'medium',
    q: '一个 4 维常截面曲率为 3 的黎曼流形，Ricci 张量和标量曲率各是什么？请按正交标架的迹定义求。',
    idea: 'Ric(v,v) 是包含 v 的所有正交二维截面曲率之和；标量曲率再对 Ric 求一次迹。',
    answer: '①在一点取正交单位基 e₁,e₂,e₃,e₄。②固定 e₁，Ric(e₁,e₁)=Σ_{j=2}^4 K(e₁,e_j)=3+3+3=9。③任意单位方向 v 都同样有三个正交方向，故 Ric(v,v)=9；极化后 Ric=9g。④标量曲率 S=Σ_{i=1}^4 Ric(e_i,e_i)=9+9+9+9=36。⑤一般 n 维常曲率 c 的公式 Ric=(n−1)c g、S=n(n−1)c；代入 n=4,c=3 核对得到 9g 与 36。',
    source: 'Lee 第 7 章'
  },
  {
    type: 'computation', chapter: 'ch9', difficulty: 'medium',
    q: '常截面曲率 4 的空间中，一条单位速度测地线的法向 Jacobi 标量满足 j″+4j=0。给定 j(0)=0、j′(0)=1，求 j(t) 和第一次正零点。',
    idea: '先解常系数二阶方程，再用两个初值固定系数，最后解 sin(2t)=0。',
    answer: '①特征方程 λ²+4=0，根为 ±2i，所以实通解 j(t)=A cos(2t)+B sin(2t)。②代 j(0)=0 得 A=0。③求导 j′(t)=2B cos(2t)，代 j′(0)=1 得 2B=1，即 B=1/2。④所以 j(t)=(1/2)sin(2t)。⑤令 j(t)=0，得到 2t=mπ；最小的正 m 是 1，故首次正零点为 t=π/2。⑥对应法向 Jacobi 场在 t=π/2 首次回零，表示该测地线的首个共轭时刻。',
    source: 'Lee 第 10 章'
  }
);

topo.push(
  {
    type: 'computation', chapter: 'ch2', difficulty: 'medium',
    q: 'CW 复形 X 只有一个 0-胞腔、一个 1-胞腔 a、一个沿 a³ 粘合的 2-胞腔。求整数同调 H₀、H₁、H₂。',
    idea: '按粘合词的次数写 ∂₂=×3；一维胞腔是环，故 ∂₁=0，然后逐次取核与像。',
    answer: '①链群是 C₂≅Z、C₁≅Z、C₀≅Z，其余为零。②1-胞腔 a 的起点终点同为唯一顶点，故 ∂₁=0。③粘合词 a³ 表示 2-胞腔边界沿 a 正向走三次，所以 ∂₂:Z→Z 是乘 3。④H₂=ker(×3)=0，因为整数没有 3 阶挠。⑤H₁=ker∂₁/im∂₂=Z/3Z。⑥H₀=C₀/im∂₁=Z。⑦检查 Euler 示性数：胞腔交错数 1−1+1=1；同调自由秩交错数 1−0+0=1，一致。',
    source: 'Hatcher 第 2 章'
  },
  {
    type: 'computation', chapter: 'ch3', difficulty: 'medium',
    q: '已知 H*(S²;Z) 在次数 0、2 各为 Z，H*(S¹;Z) 在次数 0、1 各为 Z。用无挠 Künneth 公式求 S²×S¹ 的各次整数上同调群。',
    idea: '把每个次数 n 的所有 p+q=n 项逐项列出；两因子都无挠，所以没有 Tor 项。',
    answer: '①Künneth 给 H^n(S²×S¹;Z)≅⊕_{p+q=n}H^p(S²;Z)⊗H^q(S¹;Z)，因为各群自由。②n=0：H⁰(S²)⊗H⁰(S¹)=Z⊗Z=Z。③n=1：H⁰(S²)⊗H¹(S¹)=Z，另一个 H¹(S²)⊗H⁰(S¹)=0，故 H¹=Z。④n=2：H²(S²)⊗H⁰(S¹)=Z，其它候选项为零，故 H²=Z。⑤n=3：唯一非零项 H²(S²)⊗H¹(S¹)=Z⊗Z=Z。⑥n>3 无非零项，故 H^n=0。⑦这与三维闭可定向流形的 Poincaré 对偶所预言的秩对称相符。',
    source: 'Hatcher 第 3 章'
  },
  {
    type: 'computation', chapter: 'ch4', difficulty: 'medium',
    q: 'Hopf 纤维化 S¹→S³→S² 的长正合序列中，已知 π₂(S³)=0、π₁(S³)=0、π₁(S¹)=Z。求 π₂(S²)，写出所用的正合片段。',
    idea: '把相邻四项完整写出；首尾零群逼使连接同态既单射又满射。',
    answer: '①同伦长正合序列的相关片段是 π₂(S³)→π₂(S²)→π₁(S¹)→π₁(S³)。②代入已知群，得到 0→π₂(S²)→Z→0。③在 π₂(S²) 处正合说明连接映射的核等于前一零映射的像，即核为 0，所以它单射。④在 Z 处正合说明连接映射的像等于后一零映射的核，即整个 Z，所以它满射。⑤既单又满是同构，因此 π₂(S²)≅Z。⑥这个计算用的是长正合序列的正合性，而非直接把 π₂(S²) 当成 H₂。',
    source: 'Hatcher 第 4 章'
  }
);

module.exports = { riemann, topo, cross };
