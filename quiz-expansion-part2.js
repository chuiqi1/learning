// 围绕本地 Lee、do Carmo、陈维桓与 Hatcher 教材的主题自编。
// 题目与解答均为原创，不对应或转录教材习题。
const L = String.raw;
const detailed = q => ({ ...q, richAnswer: true });

const riemann = [
  detailed({
    type: 'proof', chapter: 'ch4', difficulty: 'medium',
    q: '概念辨析：为什么函数在临界点的坐标二阶偏导能表示 Hessian，而在一般点不能？先写出 Hessian 的坐标公式，再用欧氏直线上的 f(x)=x 和新坐标 u=e^x 给出明确反例。',
    idea: '从协变 Hessian 的定义出发；临界点的一阶导数消掉联络项。反例中同时计算普通二阶偏导和联络修正项。',
    source: 'Lee《Introduction to Riemannian Manifolds》：联络与 Hessian；陈维桓《黎曼几何引论》：协变微分',
    answer: L`<h4>第一步：先定义真正的 Hessian</h4>
对光滑函数 \(f\)，定义 \(\operatorname{Hess}_g f(X,Y)=X(Yf)-(\nabla_XY)f\)。减去后一项，是为了使结果对 \(X,Y\) 都是逐点线性的双线性型。
<h4>第二步：把定义写成坐标公式</h4>
令 \(X=\partial_i,Y=\partial_j\)，并用 \(\nabla_{\partial_i}\partial_j=\Gamma^k_{ij}\partial_k\)，逐项代入得到
<div class="eq">$$\operatorname{Hess}_g f(\partial_i,\partial_j)=\partial_i\partial_jf-\Gamma^k_{ij}\partial_kf.$$</div>
<h4>第三步：解释临界点为什么特殊</h4>
若 \(p\) 是临界点，则 \(df_p=0\)，即每一个 \((\partial_k f)(p)=0\)。因此联络修正项 \(\Gamma^k_{ij}(p)(\partial_kf)(p)=0\)，于是 \(\operatorname{Hess}_g f|_p\) 的坐标矩阵就是 \(((\partial_i\partial_jf)(p))\)。这并不是说任意点的普通二阶偏导本身就是张量。
<h4>第四步：在旧坐标中算反例</h4>
取 \(\mathbb R\) 上的欧氏度量 \(g=dx^2\) 和 \(f(x)=x\)。在 \(x\) 坐标中，\(f_{xx}=0\) 且 \(\Gamma^x_{xx}=0\)，所以 \(\operatorname{Hess}_g f=0\)。
<h4>第五步：换成合法的新坐标</h4>
令 \(u=e^x>0\)，故 \(x=\log u\)、\(dx=du/u\)。由此 \(f=\log u\)，而 \(g=u^{-2}du^2\)。普通二阶偏导现在是 \(\partial_u^2f=\partial_u(1/u)=-u^{-2}\)，已经不等于旧坐标中的零。
<h4>第六步：计算联络项并核对</h4>
一维时 \(\Gamma^u_{uu}=\tfrac12g^{uu}\partial_ug_{uu}\)。代入 \(g^{uu}=u^2\) 和 \(\partial_u g_{uu}=-2u^{-3}\)，得 \(\Gamma^u_{uu}=\tfrac12u^2(-2u^{-3})=-u^{-1}\)。因此
<div class="eq">$$\operatorname{Hess}_g f(\partial_u,\partial_u)=-u^{-2}-(-u^{-1})(u^{-1})=0.$$</div>
<h4>第七步：指出差别来自哪里</h4>
\(df=dx=du/u\) 处处非零，所以这里不是临界点。坐标变换把普通二阶偏导改成了 \(-u^{-2}\)，而联络项恰好抵消它；真正的 Hessian 在两套坐标下都为零。
<div class="keybox">$$\boxed{(\operatorname{Hess}_g f)_{ij}=\partial_i\partial_jf-\Gamma^k_{ij}\partial_kf;\quad df_p=0\Longrightarrow(\operatorname{Hess}_g f)_{ij}(p)=\partial_i\partial_jf(p).}$$</div>`
  }),
  detailed({
    type: 'computation', chapter: 'ch6', difficulty: 'medium',
    q: '计算题：在 R² 上取 g=e^{2(x²+y²)}(dx²+dy²)。求非零 Christoffel 符号、Gauss 曲率 K、面积元，并计算欧氏圆盘 x²+y²≤a²（a>0）的总曲率。',
    idea: '写成共形度量 g=e^{2u}g₀，先代入 Christoffel 公式，再由二维共形曲率公式求 K；最后让 K 与面积元相乘。',
    source: 'do Carmo《Riemannian Geometry》：曲面的曲率计算；Lee《Introduction to Riemannian Manifolds》：共形度量',
    answer: L`<h4>第一步：读出度量和逆度量</h4>
记 \(u=x^2+y^2\)。于是 \(g_{xx}=g_{yy}=e^{2u},g_{xy}=0\)，逆矩阵满足 \(g^{xx}=g^{yy}=e^{-2u},g^{xy}=0\)。这里 \(u_x=2x,u_y=2y\)。
<h4>第二步：代入 Christoffel 公式</h4>
由 \(\Gamma^k_{ij}=\tfrac12g^{k\ell}(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij})\)，而 \(\partial_xe^{2u}=2u_xe^{2u}\)、\(\partial_ye^{2u}=2u_ye^{2u}\)。例如 \(\Gamma^x_{xx}=\tfrac12e^{-2u}(2u_xe^{2u})=u_x=2x\)，\(\Gamma^x_{yy}=\tfrac12e^{-2u}(-2u_xe^{2u})=-2x\)。
<h4>第三步：列全所有可能非零项</h4>
继续代入并使用下指标对称，得到
<div class="eq">$$\Gamma^x_{xx}=2x,\quad\Gamma^x_{xy}=\Gamma^x_{yx}=2y,\quad\Gamma^x_{yy}=-2x;\qquad\Gamma^y_{xx}=-2y,\quad\Gamma^y_{xy}=\Gamma^y_{yx}=2x,\quad\Gamma^y_{yy}=2y.$$</div>
所谓“非零”是指这些符号作为函数并非恒为零；在特殊点它们仍可能取零值。
<h4>第四步：由联络得到共形曲率式</h4>
在约定 \(R(\partial_x,\partial_y)\partial_y\) 的 \(x\) 分量下，代入上一步的符号可得 \(R^x{}_{yxy}=-(u_{xx}+u_{yy})\)：两组二次项分别都是 \(-u_x^2+u_y^2\)，相减抵消。再用 \(R_{xyxy}=g_{xx}R^x{}_{yxy}\) 与 \(\det(g)=e^{4u}\)，得到
<div class="eq">$$K=\frac{R_{xyxy}}{\det(g)}=-e^{-2u}(u_{xx}+u_{yy}).$$</div>
<h4>第五步：把具体函数代入</h4>
\(u_{xx}=\partial_x(2x)=2\)，\(u_{yy}=\partial_y(2y)=2\)，所以 \(u_{xx}+u_{yy}=4\)。故 \(K(x,y)=-4e^{-2(x^2+y^2)}\)，处处为负。
<h4>第六步：求面积元</h4>
二维黎曼面积元是 \(dA=\sqrt{\det(g)}\,dx\,dy\)。这里 \(\sqrt{e^{4u}}=e^{2u}\)，故 \(dA=e^{2(x^2+y^2)}dx\,dy\)。
<h4>第七步：积分时先约掉共形因子</h4>
令 \(D_a=\{x^2+y^2\le a^2\}\)。逐点有 \(K\,dA=(-4e^{-2u})e^{2u}dx\,dy=-4dx\,dy\)。因此 \(\int_{D_a}K\,dA=-4\operatorname{Area}_{\mathrm{Euclid}}(D_a)=-4\pi a^2\)。这里圆盘面积用的是欧氏坐标面积，绝非黎曼面积。
<div class="keybox">$$\boxed{K=-4e^{-2(x^2+y^2)},\quad dA=e^{2(x^2+y^2)}dx\,dy,\quad\int_{D_a}K\,dA=-4\pi a^2.}$$</div>`
  }),
  detailed({
    type: 'proof', chapter: 'ch5', difficulty: 'medium',
    q: '定理应用：实直线取度量 g=dx²/(1+x²)²。证明它不是完备的黎曼流形：给出到无穷远的有限长度路径、一个没有极限的 Cauchy 列，并写出在有限时间无法延拓的单位速测地线。',
    idea: '把弧长坐标设为 s=arctan x，流形就等距于有限开区间；再逐项验证度量完备性和测地完备性都失败。',
    source: 'Lee《Introduction to Riemannian Manifolds》：距离与 Hopf–Rinow；do Carmo《Riemannian Geometry》：测地完备性',
    answer: L`<h4>第一步：找弧长坐标</h4>
令 \(s=\arctan x\)，则 \(ds=dx/(1+x^2)\)。逐项平方得到 \(ds^2=dx^2/(1+x^2)^2=g\)。坐标 \(s\) 的取值范围是开区间 \((-\pi/2,\pi/2)\)，所以原流形与带欧氏度量的这个开区间等距。
<h4>第二步：求一条逃向无穷远的路径长度</h4>
沿 \(x\) 从 \(0\) 走到 \(R>0\)，长度为 \(\int_0^R\sqrt{g_{xx}}\,dx=\int_0^R dx/(1+x^2)=\arctan R\)。令 \(R\to\infty\)，长度趋向 \(\pi/2<\infty\)。
<h4>第三步：构造 Cauchy 列</h4>
取 \(x_n=n\)。因为一维弧长坐标给出精确距离，\(d_g(x_m,x_n)=|\arctan m-\arctan n|\)。数列 \(\arctan n\to\pi/2\)，故 \((x_n)\) 对 \(d_g\) 是 Cauchy 列。
<h4>第四步：说明它没有流形内的极限</h4>
若 \(x_n\to x_*\in\mathbb R\) 按 \(d_g\) 收敛，则连续的等距坐标应满足 \(\arctan x_n\to\arctan x_*<\pi/2\)。但左边实际趋于 \(\pi/2\)，矛盾。缺失的端点并不属于流形，因此它不度量完备。
<h4>第五步：写出单位速测地线</h4>
在 \(s\) 坐标中欧氏直线 \(s(t)=t\) 是单位速测地线。换回 \(x\) 坐标得到 \(x(t)=\tan t\)，定义域为 \((-\pi/2,\pi/2)\)。由 \(g_{xx}(x(t))\dot x(t)^2=(1+x^2)^{-2}(1+x^2)^2=1\)，速度确为一。
<h4>第六步：核对测地线方程</h4>
一维联络系数 \(\Gamma^x_{xx}=\tfrac12g^{xx}\partial_xg_{xx}=-2x/(1+x^2)\)。而 \(\dot x=1+x^2\)、\(\ddot x=2x(1+x^2)\)，所以 \(\ddot x+\Gamma^x_{xx}\dot x^2=2x(1+x^2)-2x(1+x^2)=0\)。
<h4>第七步：解释有限时间不能延拓</h4>
当 \(t\uparrow\pi/2\) 时 \(x(t)=\tan t\to+\infty\)。任何延拓到 \(t=\pi/2\) 的连续曲线都必须在该时刻有一个实数值，这做不到。Hopf–Rinow 把度量完备与测地完备联系起来，本例直接展示两者同时失败。
<div class="keybox">$$\boxed{(\mathbb R,g)\cong(-\pi/2,\pi/2,ds^2)\text{ 不完备};\quad x_n=n\text{ 是无极限 Cauchy 列};\quad x(t)=\tan t\text{ 在 }t=\pi/2\text{ 失效。}}$$</div>`
  }),
  detailed({
    type: 'proof', chapter: 'ch9', difficulty: 'hard',
    q: '挑战题：在平面极坐标中给出 g=dr²+(r+r³)²dθ²（r>0，θ 模 2π），并在原点按光滑方式延拓。证明度量光滑且完备，求 Gauss 曲率；求从原点出发的径向 Jacobi 场的长度，并应用 Cartan–Hadamard 定理说明任意两点间最短测地线的存在与唯一性。',
    idea: '把度量改写为笛卡尔坐标的光滑表达式，利用 f(r)=r+r³ 的旋转度量公式 K=−f″/f；再核对完备、简单连通、非正曲率三个定理前提。',
    source: 'do Carmo《Riemannian Geometry》：极坐标曲率；Lee《Introduction to Riemannian Manifolds》：Jacobi 场与 Cartan–Hadamard；陈维桓《黎曼几何引论》：比较几何',
    answer: L`<h4>第一步：先检查原点是否真能补上</h4>
记 \(r^2=x^2+y^2\)。欧氏度量满足 \(dx^2+dy^2=dr^2+r^2d\theta^2\)，而 \(r^2d\theta^2=(x\,dy-y\,dx)^2/r^2\)。因此在 \(r>0\) 上
<div class="eq">$$g=dx^2+dy^2+(2+r^2)(x\,dy-y\,dx)^2.$$</div>
右端是关于 \(x,y\) 的光滑正定二次型，在 \((0,0)\) 也有定义；取此表达式即得到整个 \(\mathbb R^2\) 上的光滑延拓。
<h4>第二步：由正项比较两个度量</h4>
对任意切向量 \(v\)，上式给出 \(g(v,v)=|v|_{\mathrm E}^2+(2+r^2)(x\,dy-y\,dx)(v)^2\ge |v|_{\mathrm E}^2\)。所以 \(d_g(p,q)\ge|p-q|\)。
<h4>第三步：证明完备性，而不只看直觉</h4>
若 \((p_n)\) 对 \(d_g\) 是 Cauchy 列，第二步表明它也是欧氏 Cauchy 列，故收敛到某个 \(p\in\mathbb R^2\)。取包含尾列和 \(p\) 的小闭欧氏球；在此球上光滑度量的最大特征值有上界 \(C\)。于是沿球内直线段 \(d_g(p_n,p)\le\sqrt C,|p_n-p|\to0\)。所以 \((\mathbb R^2,g)\) 度量完备。
<h4>第四步：代入旋转度量的曲率公式</h4>
对 \(g=dr^2+f(r)^2d\theta^2\)，在 \(r>0\) 上 \(K=-f''/f\)。这里 \(f(r)=r+r^3=r(1+r^2)\)，故 \(f'(r)=1+3r^2\)、\(f''(r)=6r\)。代入得到
<div class="eq">$$K(r)=-\frac{6r}{r+r^3}=-\frac6{1+r^2}\quad(r>0).$$</div>
因度量在原点光滑，曲率也连续，令 \(r\downarrow0\) 得 \(K(0)=-6\)。因此曲率处处严格为负。
<h4>第五步：找径向单位速测地线</h4>
固定角度 \(\theta_0\)，取 \(\gamma(t)=(r=t,\theta_0)\)，\(t\ge0\)。由于 \(g_{rr}=1\)，其速度长度为一；径向的 Christoffel 项 \(\Gamma^r_{rr}=\Gamma^\theta_{rr}=0\)，故满足测地线方程。
<h4>第六步：把角向变分写成 Jacobi 场</h4>
转动初始方向得到一族单位速径向测地线 \(\gamma_s(t)=(t,\theta_0+s)\)。其变分场 \(J(t)=\partial_s\gamma_s(t)|_{s=0}=\partial_\theta\)。这是 Jacobi 场，且 \(|J(t)|=\sqrt{g_{\theta\theta}}=f(t)=t+t^3\)。在 \(t=0\) 时它为零，且因 \(f'(0)=1\)，初始协变导数的长度为一。
<h4>第七步：直接核对 Jacobi 方程</h4>
沿径向线设 \(E=(1/f)\partial_\theta\)。由 \(\nabla_{\partial_r}\partial_\theta=(f'/f)\partial_\theta\)，乘积求导可得 \(\nabla_{\dot\gamma}E=0\)。写 \(J=fE\)，法向 Jacobi 方程是 \(f''+Kf=0\)。代入第四步的 \(K\)：\(6t-\frac6{1+t^2}(t+t^3)=6t-6t=0\)。且 \(f(t)>0\) 对每个 \(t>0\) 成立，所以这支场不再回零。
<h4>第八步：应用全局定理</h4>
流形底空间是 \(\mathbb R^2\)，故单连通；第三步证明完备，第四步证明截面曲率 \(K\le0\)。Cartan–Hadamard 定理因此保证每个 \(\exp_p:T_pM\to M\) 都是全局微分同胚。Hopf–Rinow 保证两点间有最短测地线；指数映射单射说明从给定起点到终点的测地线只有一条，所以这条最短测地线唯一。
<div class="keybox">$$\boxed{K(r)=-\frac6{1+r^2},\quad |J(t)|=t+t^3;\quad (\mathbb R^2,g)\text{ 完备且任意两点有唯一最短测地线。}}$$</div>`
  })
];

const topo = [
  detailed({
    type: 'proof', chapter: 'ch2', difficulty: 'medium',
    q: '概念辨析：令 X=T²，Y=S¹∨S¹∨S²。证明二者的所有整数同调群相同，但基本群不同；指出为什么单靠同调不能判定这两个空间同伦等价。',
    idea: '给两个空间各写一个含 1 个零胞腔、2 个一胞腔、1 个二胞腔的 CW 结构；比较二胞腔在同调与基本群中记录的信息。',
    source: 'Hatcher《Algebraic Topology》：van Kampen 定理、胞腔同调与楔和',
    answer: L`<h4>第一步：列出两套胞腔结构</h4>
环面 \(X\) 的标准 CW 结构有一个 \(0\)-胞腔、两条闭合 \(1\)-胞腔 \(a,b\)，以及沿交换子 \(aba^{-1}b^{-1}\) 贴上的一个 \(2\)-胞腔。楔和 \(Y\) 也有一个公共 \(0\)-胞腔、来自两只圆的 \(a,b\)，另有一个来自 \(S^2\) 的 \(2\)-胞腔，它按常值映射贴在公共点。
<h4>第二步：写链群并求一维边界</h4>
两者都有 \(C_2=\mathbb Z,C_1=\mathbb Z^2,C_0=\mathbb Z\)，其余胞腔链群为零。\(a,b\) 各自始末点相同，所以 \(\partial_1(a)=\partial_1(b)=0\)。
<h4>第三步：分别求二维边界</h4>
对 \(X\)，贴合词 \(aba^{-1}b^{-1}\) 中 \(a,b\) 都正反各出现一次，故 \(\partial_2(e^2)=(1-1)a+(1-1)b=0\)。对 \(Y\)，贴合映射是常值，因而每条一胞腔的带符号次数也为零，即 \(\partial_2(e^2)=0\)。
<h4>第四步：逐维求整数同调</h4>
对 \(X,Y\) 都有 \(H_2=\ker\partial_2=\mathbb Z\)、\(H_1=\ker\partial_1/\operatorname{im}\partial_2=\mathbb Z^2\)、\(H_0=C_0/\operatorname{im}\partial_1=\mathbb Z\)；更高维为零。所以所有整数同调群逐维同构。
<h4>第五步：计算环面的基本群</h4>
van Kampen 定理或 CW 表示给出 \(\pi_1(X)=\langle a,b\mid aba^{-1}b^{-1}=1\rangle\)。关系式等价于 \(ab=ba\)，故 \(\pi_1(X)\cong\mathbb Z^2\)，是交换群。
<h4>第六步：计算楔和的基本群</h4>
\(S^2\) 单连通，贴在一点不会给两只圆的环路增加关系。van Kampen 定理给出 \(\pi_1(Y)\cong\mathbb Z*\mathbb Z=F(a,b)\)。在自由群中，约化词 \(ab\) 与 \(ba\) 不相同，因此它非交换。
<h4>第七步：说明同调漏掉了什么</h4>
同调的一维部分是基本群的交换化。环面的交换子关系在交换化之后自动成立；楔和虽没有这条关系，交换化之后也得到 \(\mathbb Z^2\)。两者基本群一个交换、一个非交换，不可能同构；同伦等价必诱导基本群同构，故 \(X\) 与 \(Y\) 不同伦等价。
<div class="keybox">$$\boxed{H_*(X;\mathbb Z)\cong H_*(Y;\mathbb Z),\qquad \pi_1(X)\cong\mathbb Z^2\not\cong F_2\cong\pi_1(Y).}$$</div>`
  }),
  detailed({
    type: 'computation', chapter: 'ch2', difficulty: 'hard',
    q: '挑战计算：一个二维 CW 复形只有一个 0-胞腔、1-胞腔 a,b，以及两个 2-胞腔，粘合词分别为 a²b³ 和 a⁴b。求全部整数同调群，并解释为什么 Euler 示性数看不见一维同调中的挠。',
    idea: '把粘合词的指数和写成整数边界矩阵；先解整数核，再在生成元与关系中消去 b，并用模 10 映射确认 a 的准确阶。',
    source: 'Hatcher《Algebraic Topology》：CW 复形和胞腔同调',
    answer: L`<h4>第一步：写出胞腔链群</h4>
设两个 \(2\)-胞腔为 \(e_1^2,e_2^2\)。按胞腔个数，\(C_2=\mathbb Z\langle e_1^2,e_2^2\rangle\cong\mathbb Z^2\)，\(C_1=\mathbb Z\langle a,b\rangle\cong\mathbb Z^2\)，\(C_0=\mathbb Z\)，其余为零。两个环路都从唯一的顶点出发并回到它，所以 \(\partial_1=0\)。
<h4>第二步：数粘合词的带符号次数</h4>
词 \(a^2b^3\) 对 \(a,b\) 的指数和是 \((2,3)\)，故 \(\partial_2(e_1^2)=2a+3b\)。词 \(a^4b\) 的指数和是 \((4,1)\)，故 \(\partial_2(e_2^2)=4a+b\)。以 \((a,b)\) 为行、\((e_1^2,e_2^2)\) 为列，矩阵为
<div class="eq">$$[\partial_2]=\begin{pmatrix}2&4\\3&1\end{pmatrix},\qquad\det[\partial_2]=2\cdot1-4\cdot3=-10.$$</div>
<h4>第三步：直接解二维循环条件</h4>
若 \(m e_1^2+n e_2^2\in\ker\partial_2\)，则 \(2m+4n=0\) 和 \(3m+n=0\)。第二式给出 \(n=-3m\)；代入第一式得 \(2m-12m=-10m=0\)。在整数中这迫使 \(m=n=0\)，故 \(H_2=\ker\partial_2=0\)。
<h4>第四步：把一维同调写成生成元与关系</h4>
因 \(\partial_1=0\)，有 \(H_1=C_1/\operatorname{im}\partial_2=\langle a,b\mid 2a+3b=0,\ 4a+b=0\rangle_{\mathrm{ab}}\)。第二个关系给 \(b=-4a\)，代进第一个关系得到 \(2a+3(-4a)=-10a=0\)。所以 \(a\) 生成整个 \(H_1\)，其阶至多为 \(10\)。
<h4>第五步：确认不是更小的商群</h4>
定义到 \(\mathbb Z/10\) 的映射 \(a\mapsto1,b\mapsto-4\equiv6\pmod{10}\)。两个关系分别映到 \(2\cdot1+3\cdot6=20\equiv0\) 与 \(4\cdot1+6=10\equiv0\)，因此映射从 \(H_1\) 良定义且满射。既然 \(H_1\) 由满足 \(10a=0\) 的一个元素生成，又能满射到阶 \(10\) 的群，只能有 \(H_1\cong\mathbb Z/10\)。
<h4>第六步：计算零维同调与 Euler 示性数</h4>
\(H_0=C_0/\operatorname{im}\partial_1=\mathbb Z\)。胞腔数给 \(\chi=1-2+2=1\)。从同调的自由秩看，\(b_0=1,b_1=0,b_2=0\)，故 \(b_0-b_1+b_2=1\) 也吻合。\(\mathbb Z/10\) 的自由秩为零，所以挠在 Euler 示性数中不贡献数值。
<div class="keybox">$$\boxed{H_0=\mathbb Z,\quad H_1=\mathbb Z/10,\quad H_2=0,\quad H_k=0\ (k>2),\quad\chi=1.}$$</div>`
  }),
  detailed({
    type: 'proof', chapter: 'ch1', difficulty: 'medium',
    q: '定理应用：六重覆叠 p:S¹→S¹，p(z)=z⁶。令 f(z)=z⁴。判定 f 能否提升到该覆叠；若先与 r 重自覆叠 z↦zʳ 复合，求使它可提升的最小正整数 r，并写出此时全部连续提升。',
    idea: '在 π₁(S¹)≅Z 下，提升判据化为整除关系；确定最小 r 后，用一个显式提升乘上全部 Deck 变换。',
    source: 'Hatcher《Algebraic Topology》：圆周基本群、覆叠与提升判据',
    answer: L`<h4>第一步：回忆提升判据</h4>
基点取 \(1\in S^1\)。对覆叠 \(p\) 和映射 \(f\)，存在满足指定起点的连续提升，当且仅当 \(f_*(\pi_1(S^1,1))\subseteq p_*(\pi_1(S^1,1))\)。圆周基本群由一次正向绕圈生成，故可把诱导映射看成整数乘法。
<h4>第二步：计算两个诱导同态</h4>
\(z\mapsto z^k\) 把一次绕圈变成 \(k\) 次绕圈。因此 \(p_*(\mathbb Z)=6\mathbb Z\)，\(f_*(\mathbb Z)=4\mathbb Z\)。由于 \(4\notin6\mathbb Z\)，包含关系 \(4\mathbb Z\subseteq6\mathbb Z\) 不成立，故 \(f\) 无连续提升。
<h4>第三步：加入预复合的覆叠</h4>
设 \(c_r(z)=z^r\)，则 \((f\circ c_r)(z)=z^{4r}\)。此映射在基本群上把 \(1\) 送到 \(4r\)。提升判据因此成为 \(4r\in6\mathbb Z\)，也就是 \(6\mid4r\)。
<h4>第四步：解整除条件</h4>
把 \(6\mid4r\) 同除以 \(\gcd(6,4)=2\)，得到 \(3\mid2r\)。因 \(2\) 与 \(3\) 互素，必须 \(3\mid r\)，所以最小正整数是 \(r=3\)。这时 \(f\circ c_3(z)=z^{12}\)。
<h4>第五步：写出一个显式提升</h4>
取 \(\widetilde f_0(z)=z^2\)，则 \(p(\widetilde f_0(z))=(z^2)^6=z^{12}=(f\circ c_3)(z)\)，所以它确实是提升。
<h4>第六步：列出并证明全部提升</h4>
令 \(\zeta=e^{2\pi i/6}\)。每个 \(k=0,1,\ldots,5\) 都给出 \(\widetilde f_k(z)=\zeta^kz^2\)，且 \((\widetilde f_k(z))^6=z^{12}\)。反过来，任一提升 \(h\) 满足 \((h(z)/z^2)^6=1\)。商函数连续，定义域 \(S^1\) 连通，值域是离散的六个六次单位根，所以它必须是某个固定的 \(\zeta^k\)。因此上列六个提升已穷尽全部可能。
<div class="keybox">$$\boxed{f(z)=z^4\text{ 不可提升};\quad r_{\min}=3;\quad\widetilde f_k(z)=e^{2\pi ik/6}z^2\ (k=0,\ldots,5).}$$</div>`
  })
];

const cross = [
  detailed({
    type: 'proof', difficulty: 'hard', riemannChapter: 'ch5', topoChapter: 'ch3',
    q: '跨学科挑战：令 C=(R/2πZ)×R，取度量 g=4dθ²+dz²。证明绕数为 n 的任意分段光滑闭曲线长度至少为 4π|n|，指出何时取等号；求 H₁(C;Z)，并用闭 1-形式 dθ 的周期解释为什么绕数不能被连续变形消去。',
    idea: '把曲线的角坐标提升到实数，长度估计来自绝对值的三角不等式；拓扑部分用形变收缩和闭形式沿环路的积分。',
    source: 'Lee《Introduction to Riemannian Manifolds》：长度与测地线；Hatcher《Algebraic Topology》：基本群、同调与上同调',
    answer: L`<h4>第一步：明确圆柱的度量</h4>
\(\theta\) 是模 \(2\pi\) 的角变量，\(z\in\mathbb R\)。在任一局部角坐标中 \(g_{\theta\theta}=4,g_{zz}=1,g_{\theta z}=0\)，故曲线 \(c(t)=(\theta(t),z(t))\) 的长度为 \(L(c)=\int_0^1\sqrt{4\dot\theta^2+\dot z^2}\,dt\)。
<h4>第二步：把闭曲线的角坐标提升到实线</h4>
沿闭曲线选连续实值提升 \(\widetilde\theta:[0,1]\to\mathbb R\)。闭合意味着 \(\widetilde\theta(1)-\widetilde\theta(0)=2\pi n\)，其中 \(n\in\mathbb Z\) 是绕数。局部导数满足 \(\dot{\widetilde\theta}=\dot\theta\)。
<h4>第三步：一行一行估计长度</h4>
逐点有 \(\sqrt{4\dot{\widetilde\theta}^2+\dot z^2}\ge2|\dot{\widetilde\theta}|\)。积分并用三角不等式得
<div class="eq">$$L(c)\ge2\int_0^1|\dot{\widetilde\theta}|\,dt\ge2\left|\int_0^1\dot{\widetilde\theta}\,dt\right|=2|2\pi n|=4\pi|n|.$$</div>
<h4>第四步：分析取等号的条件</h4>
第一处不等式取等号要求 \(\dot z=0\) 几乎处处，故 \(z\) 恒定。第二处取等号要求 \(\dot{\widetilde\theta}\) 几乎处处不变号，故角度沿同一方向走、不往返。\(n=0\) 时下界为零，只有常值曲线能取等号；\(n\ne0\) 时任一恒高、单调绕行 \(|n|\) 圈的曲线都取等号。
<h4>第五步：给出等号曲线中的测地线</h4>
具体取 \(c_n(t)=([2\pi nt],z_0)\)。度量分量为常数，所以局部 Christoffel 符号全为零；\(\theta\) 线性、\(z\) 常数满足测地线方程。长度是 \(\sqrt{4(2\pi n)^2}\int_0^1dt=4\pi|n|\)，因此每个非零绕数类都有闭测地线实现最短长度。
<h4>第六步：用形变收缩求同调</h4>
定义 \(H_s([\theta],z)=([\theta],(1-s)z)\)。当 \(s=0\) 是恒等，\(s=1\) 落在高度 \(0\) 的圆周，并且该圆周每点始终固定。所以 \(C\) 形变收缩到 \(S^1\)，于是 \(H_1(C;\mathbb Z)\cong H_1(S^1;\mathbb Z)\cong\mathbb Z\)，生成元可取 \(c_1\)。
<h4>第七步：用闭 1-形式检测绕数</h4>
局部形式 \(d\theta\) 在角坐标变换 \(\theta\mapsto\theta+2\pi k\) 下不变，故拼成 \(C\) 上的全局闭 \(1\)-形式。沿 \(c\) 积分给 \(\int_c d\theta=\int_0^1\dot{\widetilde\theta}\,dt=2\pi n\)。若它是恰当形式 \(dF\)，闭曲线上的积分应为 \(F(c(1))-F(c(0))=0\)；取 \(n=1\) 即否定这一点。周期 \(2\pi n\) 在环路同伦下不变，故非零绕数不能靠连续变形消去。
<div class="keybox">$$\boxed{L(c)\ge4\pi|n|,\quad H_1(C;\mathbb Z)=\mathbb Z,\quad\int_c d\theta=2\pi n;\quad c_n(t)=([2\pi nt],z_0)\text{ 实现下界。}}$$</div>`
  }),
  detailed({
    type: 'computation', difficulty: 'medium', riemannChapter: 'ch8', topoChapter: 'ch2',
    q: '跨学科：单位球面上取球带 A={π/3≤θ≤2π/3}，θ 为从北极量起的余纬，φ 为经度。求面积、两条边界按球带诱导定向的测地曲率积分；用带边 Gauss–Bonnet 核对 χ(A)，再求全部整数同调群。',
    idea: '先在球坐标中算 K 与面积，再明确两条边界的相反定向和测地曲率符号；拓扑上把球带收缩到中间纬线。',
    source: 'do Carmo《Riemannian Geometry》与陈维桓《黎曼几何引论》：曲面 Gauss–Bonnet；Hatcher《Algebraic Topology》：形变收缩与同调',
    answer: L`<h4>第一步：写球面的局部度量</h4>
在余纬、经度坐标中，单位球面的度量是 \(g=d\theta^2+\sin^2\theta\,d\varphi^2\)，面积元为 \(dA=\sin\theta\,d\theta\,d\varphi\)，Gauss 曲率为 \(K=1\)。球带采用 \(d\theta\wedge d\varphi\) 给出的定向。
<h4>第二步：把面积积分逐项算出</h4>
<div class="eq">$$\operatorname{Area}(A)=\int_0^{2\pi}\!\int_{\pi/3}^{2\pi/3}\sin\theta\,d\theta\,d\varphi=2\pi\bigl(\cos(\pi/3)-\cos(2\pi/3)\bigr)=2\pi(\tfrac12-(-\tfrac12))=2\pi.$$</div>
由于 \(K=1\)，同时有 \(\int_AK\,dA=2\pi\)。
<h4>第三步：先定两条边界的方向</h4>
带边曲面的正向边界要求行走时区域在左侧。在上边界 \(\theta=2\pi/3\)，正向切向量沿 \(+\partial_\varphi\)；在下边界 \(\theta=\pi/3\)，正向切向量沿 \(-\partial_\varphi\)。两边方向相反，后面的符号因此不能直接当成同一个值。
<h4>第四步：算固定纬线的测地曲率</h4>
令 \(T=\pm(\sin\theta)^{-1}\partial_\varphi\) 为单位切向量。由 \(\Gamma^\theta_{\varphi\varphi}=-\sin\theta\cos\theta\)，代入 \(\nabla_TT\) 得 \(\nabla_TT=-\cot\theta\,\partial_\theta\)，无论走向如何都成立。若取球面的正向转角 \(J\)，则 \(J((\sin\theta)^{-1}\partial_\varphi)=-\partial_\theta\)。故沿 \(+\varphi\) 方向的有符号测地曲率是 \(\cot\theta\)，反向则是 \(-\cot\theta\)。
<h4>第五步：分别代入两条边界</h4>
上边界沿 \(+\varphi\)，\(k_g=\cot(2\pi/3)=-1/\sqrt3\)，周长 \(2\pi\sin(2\pi/3)=\pi\sqrt3\)，故积分为 \(-\pi\)。下边界沿 \(-\varphi\)，\(k_g=-\cot(\pi/3)=-1/\sqrt3\)，周长同为 \(\pi\sqrt3\)，故积分也为 \(-\pi\)。两条边界合计 \(\int_{\partial A}k_g\,ds=-2\pi\)。
<h4>第六步：应用带边 Gauss–Bonnet</h4>
球带边界光滑、没有角点，定理给 \(\int_AK\,dA+\int_{\partial A}k_g\,ds=2\pi\chi(A)\)。代入前两步的数值，左边为 \(2\pi-2\pi=0\)，所以 \(\chi(A)=0\)。
<h4>第七步：从形变收缩独立核对</h4>
映射 \((\theta,\varphi)\mapsto((1-s)\theta+s\pi/2,\varphi)\) 将整个球带形变收缩到赤道 \(\theta=\pi/2\cong S^1\)。因此 \(H_0(A;\mathbb Z)=\mathbb Z,H_1(A;\mathbb Z)=\mathbb Z,H_k(A;\mathbb Z)=0\ (k\ge2)\)。Betti 数交错和 \(1-1=0\)，与 Gauss–Bonnet 得到的 \(\chi\) 一致。
<div class="keybox">$$\boxed{\operatorname{Area}(A)=2\pi,\quad\int_{\partial A}k_g\,ds=-2\pi,\quad\chi(A)=0,\quad(H_0,H_1,H_2)=(\mathbb Z,\mathbb Z,0).}$$</div>`
  }),
  detailed({
    type: 'proof', difficulty: 'hard', riemannChapter: 'ch8', topoChapter: 'ch1',
    q: '跨学科挑战：单位球面 S² 经对径点识别，赋予 RP² 商黎曼度量。求 K、面积、π₁ 和整数 H₀/H₁/H₂；用 Gauss–Bonnet 核对 Euler 示性数，并证明非平凡自由同伦类中闭曲线的最短长度为 π，且由闭测地线实现。',
    idea: '对径商映射是二重局部等距覆叠；用胞腔链群看整数同调，用覆叠提升把非平凡闭曲线变成球面上连接对径点的路径。',
    source: 'Lee《Introduction to Riemannian Manifolds》与 do Carmo《Riemannian Geometry》：局部等距、测地线与 Gauss–Bonnet；Hatcher《Algebraic Topology》：射影空间的覆叠与胞腔同调',
    answer: L`<h4>第一步：从球面得到商空间的局部几何</h4>
对径映射 \(A(x)=-x\) 是单位球面的等距映射，故商映射 \(p:S^2\to\mathbb{RP}^2\) 是二重局部等距覆叠。局部等距保持 Gauss 曲率，单位球面有 \(K=1\)，因此商空间也处处有 \(K=1\)。
<h4>第二步：按覆盖次数求面积</h4>
除去测度为零的切割边界，球面上每两个对径小片对应商空间中的一个小片，并且局部等距保持面积。于是 \(\operatorname{Area}(\mathbb{RP}^2)=\operatorname{Area}(S^2)/2=4\pi/2=2\pi\)。
<h4>第三步：求基本群</h4>
\(S^2\) 单连通，所以 \(p\) 是 \(\mathbb{RP}^2\) 的万有覆叠。其 Deck 群只有恒等与对径映射，故 \(\pi_1(\mathbb{RP}^2)\cong\mathbb Z/2\)。
<h4>第四步：建立胞腔链复形</h4>
\(\mathbb{RP}^2\) 的标准 CW 结构在维数 \(0,1,2\) 各有一个胞腔，因而 \(C_2=C_1=C_0=\mathbb Z\)。一胞腔首尾贴到同一个顶点，故 \(\partial_1=0\)。二维贴合映射在一骨架 \(\mathbb{RP}^1\cong S^1\) 上绕两次，选合适取向后 \(\partial_2:\mathbb Z\to\mathbb Z\) 是乘以 \(2\)。
<h4>第五步：逐维求整数同调与 Euler 示性数</h4>
\(H_2=\ker(\times2)=0\)，\(H_1=\ker\partial_1/\operatorname{im}\partial_2=\mathbb Z/2\)，\(H_0=C_0/\operatorname{im}\partial_1=\mathbb Z\)。胞腔数给 \(\chi=1-1+1=1\)；自由秩也给 \(b_0-b_1+b_2=1-0+0=1\)。
<h4>第六步：用总曲率核对</h4>
虽然 \(\mathbb{RP}^2\) 不可定向，\(K\,dA\) 作为面积密度仍可积分，二维 Gauss–Bonnet 仍成立；也可在可定向二重覆叠 \(S^2\) 上验证后除以二。这里 \(\int_{\mathbb{RP}^2}K\,dA=1\cdot2\pi=2\pi=2\pi\chi(\mathbb{RP}^2)\)。
<h4>第七步：把非平凡闭曲线提升到球面</h4>
任取 \(\mathbb{RP}^2\) 中代表非平凡基本群元素的闭曲线 \(c\)，选一点 \(x\in S^2\) 在其起点上方。覆叠提升 \(\widetilde c\) 从 \(x\) 出发；若终点仍是 \(x\)，投影环路会对应平凡元素，所以非平凡时终点必须是 \(-x\)。局部等距保证 \(L(c)=L(\widetilde c)\)。
<h4>第八步：以球面距离给长度下界</h4>
球面上从 \(x\) 到 \(-x\) 的最短距离是大圆半周长 \(\pi\)，所以 \(L(c)=L(\widetilde c)\ge d_{S^2}(x,-x)=\pi\)。这对该非平凡自由同伦类的任意分段光滑闭曲线都成立，因为 \(\mathbb Z/2\) 的非零元素只有一个共轭类。
<h4>第九步：构造达到下界的闭测地线</h4>
任取从 \(x\) 到 \(-x\) 的单位速大圆半周 \(\gamma:[0,\pi]\to S^2\)。其投影 \(p\circ\gamma\) 首尾相接，长度 \(\pi\)，且局部等距使它在内部仍是测地线。在接合处，\(\dot\gamma(\pi)=-\dot\gamma(0)\)；对径识别的微分也乘 \(-1\)，故两端投影后的切向量一致。它因此是一条光滑闭测地线，并实现下界。
<div class="keybox">$$\boxed{K=1,\quad\operatorname{Area}=2\pi,\quad\pi_1=\mathbb Z/2,\quad(H_0,H_1,H_2)=(\mathbb Z,\mathbb Z/2,0),\quad\chi=1,\quad L_{\min}^{\mathrm{nontrivial}}=\pi.}$$</div>`
  })
];

module.exports = { riemann, topo, cross };
