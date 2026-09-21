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
定理说：只要给一个处处为正的光滑函数 \(\kappa(s)>0\)，就一定能找到一条平面曲线，它的曲率处处等于 \(\kappa(s)\)；而且这样的曲线在"差一个刚体运动"（允许镜像反射，再旋转、平移）的意义下是唯一的。换句话说，曲率函数是平面曲线形状的"完整身份证"——拿到 \(\kappa\)，形状就完全定了，剩下的只是把它摆在哪里、转成什么朝向。

<h4>第一步：回忆弧长参数化</h4>
回忆：一条平面曲线就是把每个参数 \(s\) 对应到平面上的一个点 \(\gamma(s)=(x(s),y(s))\)。所谓<strong>弧长参数化</strong>，是指切向量 \(\gamma'(s)\) 的长度恒为 \(1\)，即 \(|\gamma'(s)|=1\)。这时参数 \(s\) 恰好等于"沿曲线走过的路程"。下面全部用弧长参数，因为曲率的定义在这种参数下最简洁。

<h4>第二步：回忆曲率的定义</h4>
回忆：在弧长参数下，曲率定义为
<div class="eq">$$\kappa(s)=|\gamma''(s)|$$</div>
也就是切向量 \(\gamma'(s)\) 随弧长的变化快慢。因为 \(\gamma'(s)\) 是单位向量，它只能"转方向"而不能"伸长缩短"，所以 \(|\gamma''(s)|\) 衡量的正是方向转得多快。这就是曲率的直观含义。

<h4>第三步：把单位切向量写成角度形式</h4>
记单位切向量 \(T(s)=\gamma'(s)\)。因为 \(|T(s)|=1\)，点 \(T(s)\) 始终落在单位圆上；单位圆上每一点都能用一个角度 \(\theta(s)\) 表示，所以存在角度函数 \(\theta(s)\)，使得
<div class="eq">$$T(s)=(\cos\theta(s),\ \sin\theta(s))$$</div>
这个 \(\theta(s)\) 就是曲线在 \(s\) 处的"方向角"。

<h4>第四步：建立曲率与角度的核心关系</h4>
对 \(T(s)=(\cos\theta(s),\sin\theta(s))\) 求导。回忆链式法则以及 \((\cos u)'=-\sin u,\ (\sin u)'=\cos u\)，其中 \(u=\theta(s)\)，所以 \(u'=\theta'(s)\)：
<div class="eq">$$T'(s)=\theta'(s)\cdot(-\sin\theta(s),\ \cos\theta(s))$$</div>
向量 \((-\sin\theta,\cos\theta)\) 是单位向量，因为 \(\sin^2\theta+\cos^2\theta=1\)，所以 \(|T'(s)|=|\theta'(s)|\)。而由第二步 \(\kappa(s)=|T'(s)|\)。在<strong>构造</strong>曲线时可以选正向转动，于是得到一个解所满足的核心关系式
<div class="eq">$$\frac{d\theta}{ds}=\kappa(s)$$</div>
这句话就是：曲率等于方向角随弧长的变化速率。

<h4>第五步：存在性第一步——由曲率积分出角度</h4>
第四步得到了微分方程 \(\theta'(s)=\kappa(s)\)。回忆微积分基本定理：若 \(F'(s)=f(s)\)，则 \(F(s)=F(0)+\int_0^s f(u)\,du\)。这里把 \(F\) 看成 \(\theta\)、把 \(f\) 看成 \(\kappa\)，直接积分：
<div class="eq">$$\theta(s)=\theta(0)+\int_0^s \kappa(u)\,du$$</div>
\(\theta(0)\) 是一个任意取的初始角度，后面会看到它正好对应"旋转"。

<h4>第六步：存在性第二步——再由角度积分出曲线</h4>
有了 \(\theta(s)\)，切向量 \(T(s)=(\cos\theta(s),\sin\theta(s))\) 就完全确定了。而 \(T(s)=\gamma'(s)\)，所以再积一次分（还是微积分基本定理）：
<div class="eq">$$\gamma(s)=\gamma(0)+\int_0^s \big(\cos\theta(u),\ \sin\theta(u)\big)\,du$$</div>
\(\gamma(0)\) 是一个任意取的初始位置，后面会看到它对应"平移"。到此，我们已经用 \(\kappa\) 造出了一条曲线。

<h4>第七步：验证造出来的曲线确实以 \(\kappa\) 为曲率</h4>
需要回代检查，不能只"看起来对"。第一步看参数：\(\gamma'(s)=(\cos\theta(s),\sin\theta(s))=T(s)\)，其长度
<div class="eq">$$|\gamma'(s)|=\sqrt{\cos^2\theta+\sin^2\theta}=1$$</div>
所以 \(s\) 确实是弧长参数。第二步看二阶导：由第四步，\(\gamma''(s)=T'(s)=\theta'(s)(-\sin\theta,\cos\theta)=\kappa(s)(-\sin\theta,\cos\theta)\)（这里代入了 \(\theta'=\kappa\)）。于是
<div class="eq">$$|\gamma''(s)|=\kappa(s)\sqrt{\sin^2\theta+\cos^2\theta}=\kappa(s)$$</div>
这正是曲率的定义。所以这条曲线以给定的 \(\kappa(s)\) 为曲率，存在性证完。

<h4>第八步：唯一性——设两条曲线曲率相同</h4>
现在设 \(\gamma\) 与 \(\tilde\gamma\) 是两条以 \(\kappa\) 为曲率的弧长参数曲线，要证它们差一个刚体运动。设它们的方向角分别为 \(\theta(s)\) 与 \(\tilde\theta(s)\)。由第四步，任意已有曲线只满足 \(|\theta'|=\kappa\)。因为 \(\kappa>0\)，连续的 \(\theta'\) 在连通参数区间上不可能从正变负而不经过零，所以每条曲线的转动符号恒定。若某条曲线的符号为负，就先对它作镜像反射：反射保长度和无符号曲率，但把有向转动符号取反。逐条处理后，两条曲线才同时满足 \(\theta'=\kappa\) 与 \(\tilde\theta'=\kappa\)，下面可以比较积分常数。

<h4>第九步：两个角度之差是常数</h4>
把两个方程相减：
<div class="eq">$$(\theta-\tilde\theta)'(s)=\theta'(s)-\tilde\theta'(s)=\kappa(s)-\kappa(s)=0$$</div>
回忆：导函数恒为零的函数必是常数（因为在任意区间上它的变化量等于导数的积分，而导数恒为零）。所以存在常数 \(c=\theta(0)-\tilde\theta(0)\)，使得
<div class="eq">$$\theta(s)-\tilde\theta(s)=c$$</div>

<h4>第十步：角度差常数意味着差一个旋转</h4>
由第九步 \(\tilde\theta=\theta-c\)。回忆两角差的余弦与正弦公式：\(\cos(\theta-c)=\cos\theta\cos c+\sin\theta\sin c\)，\(\sin(\theta-c)=\sin\theta\cos c-\cos\theta\sin c\)。写成向量：
<div class="eq">$$\begin{pmatrix}\cos\tilde\theta\\ \sin\tilde\theta\end{pmatrix}=\begin{pmatrix}\cos c & \sin c\\ -\sin c & \cos c\end{pmatrix}\begin{pmatrix}\cos\theta\\ \sin\theta\end{pmatrix}$$</div>
把这个 \(2\times2\) 矩阵记作 \(R\)（它是一个旋转矩阵，因为 \(R^T R=I\) 且 \(\det R=\cos^2 c+\sin^2 c=1\)）。于是
<div class="eq">$$\tilde T(s)=R\,T(s)$$</div>

<h4>第十一步：位置之差是常数意味着差一个平移</h4>
因为 \(\tilde\gamma'(s)=\tilde T(s)=R\,T(s)=R\,\gamma'(s)\)（矩阵 \(R\) 是常矩阵，可以提到导数外面），所以
<div class="eq">$$(\tilde\gamma-R\gamma)'(s)=\tilde\gamma'(s)-R\gamma'(s)=0$$</div>
导数恒为零，故存在常向量 \(p\)，使得
<div class="eq">$$\tilde\gamma(s)=R\,\gamma(s)+p$$</div>

<h4>第十二步：拼成刚体运动</h4>
回忆：平面上"可能先镜像反射，再旋转（矩阵 \(R\)）和平移（向量 \(p\)）"正是允许反射的刚体运动，它保持任意两点的距离不变。第十一步恰好说，经第八步必要时先反射后，\(\tilde\gamma\) 就是 \(\gamma\) 再旋转 \(R\)、平移 \(p\) 得到的，所以二者只差一个刚体运动。唯一性证完。

<div class="keybox">$$\boxed{\kappa(s)\ \text{完全决定平面曲线的形状，且曲线差刚体运动唯一}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>曲率是"方向角的转速"；把 \(\kappa\) 积分一次得方向 \(\theta\)，再积分一次得位置 \(\gamma\)，两个积分常数对应旋转与平移；由于题目给的是无符号曲率，反向转动还需允许镜像反射。</div>`
  },
  "r2": {
    0: L`<h4>我们要证明什么</h4>
空间曲线基本定理说：给定两个光滑函数 \(\kappa(s)>0\) 与 \(\tau(s)\)，存在唯一（差刚体运动）的一条空间曲线，以 \(\kappa\) 为曲率、以 \(\tau\) 为挠率。平面曲线只需要一个 \(\kappa\)，空间曲线要多一个 \(\tau\)——它衡量曲线"离开平面扭转"的快慢。曲率加挠率这一对函数，就是空间曲线形状的完整不变量。

<h4>第一步：回忆弧长参数化与切向量</h4>
设曲线用弧长参数 \(\gamma(s)\)，切向量 \(T(s)=\gamma'(s)\)，满足 \(|T(s)|=1\)。下面定义三个互相垂直的单位向量 \(T,N,B\)，它们构成曲线上每一点的一个"移动坐标架"。

<h4>第二步：回忆主法向量 \(N\) 的定义</h4>
因为 \(T\) 是单位向量，\(T\) 与 \(T'\) 垂直（这一点：对 \(T\cdot T=1\) 两边求导得 \(2T\cdot T'=0\)，所以 \(T\perp T'\)）。曲率定义为 \(\kappa(s)=|T'(s)|\)。题目给定 \(\kappa(s)>0\)，于是可以定义单位主法向量
<div class="eq">$$N(s)=\frac{T'(s)}{|T'(s)|}=\frac{T'(s)}{\kappa(s)}$$</div>
即 \(T'(s)=\kappa(s)N(s)\)。\(N\) 指向曲线"往哪个方向弯"。

<h4>第三步：回忆副法向量 \(B\) 的定义</h4>
再定义副法向量为叉积
<div class="eq">$$B(s)=T(s)\times N(s)$$</div>
回忆叉积性质：叉积与两个因子都垂直，且 \(|T\times N|=|T||N|\sin 90^\circ=1\)。所以 \(T,N,B\) 是两两垂直的三个单位向量，构成右手系。它们随 \(s\) 变化的规律就是下面要推的 Frenet–Serret 公式。

<h4>第四步：第一条公式 \(dT/ds=\kappa N\) 已是定义</h4>
由第二步直接有
<div class="eq">$$\frac{dT}{ds}=\kappa N$$</div>

<h4>第五步：推出 \(dB/ds\) 的方向</h4>
对 \(B=T\times N\) 求导（回忆叉积求导按乘积法则，每项分别求导再叉积）：
<div class="eq">$$\frac{dB}{ds}=\frac{dT}{ds}\times N+T\times\frac{dN}{ds}=\kappa N\times N+T\times\frac{dN}{ds}=T\times\frac{dN}{ds}$$</div>
其中用了 \(N\times N=0\)。叉积 \(T\times(dN/ds)\) 同时垂直于 \(T\) 和 \(dN/ds\)，特别地它与 \(T\) 垂直。另一方面 \(B\) 是单位向量，与第二步同理 \(B\perp B'\)。所以 \(B'\) 既垂直于 \(T\)、又垂直于 \(B\)；在三维空间里同时垂直于 \(T\) 和 \(B\) 的方向只有 \(N\) 这一条直线。于是 \(B'\) 平行于 \(N\)，即存在一个函数 \(\tau(s)\) 使得
<div class="eq">$$\frac{dB}{ds}=-\tau(s)N$$</div>
这个 \(\tau(s)\) 就定义为曲线的<strong>挠率</strong>（负号是历史约定）。

<h4>第六步：推出 \(dN/ds\) 的公式</h4>
由右手系关系 \(N=B\times T\)（验证：\((T\times N)\times T=N\)，因为 \(T\times N=B\) 再叉乘 \(T\) 用三重积公式得 \(N\)）。对 \(N=B\times T\) 求导，代入第四、五步的结果：
<div class="eq">$$\frac{dN}{ds}=\frac{dB}{ds}\times T+B\times\frac{dT}{ds}=(-\tau N)\times T+B\times(\kappa N)$$</div>
回忆 \(N\times T=-(T\times N)=-B\)，以及 \(B\times N=-(N\times B)=-T\)（右手系 \(N\times B=T\)）。代入：
<div class="eq">$$\frac{dN}{ds}=-\tau(-B)+\kappa(-T)=\tau B-\kappa T=-\kappa T+\tau B$$</div>

<h4>第七步：汇总成 Frenet–Serret 方程组</h4>
把第四、五、六步的三条写在一起：
<div class="eq">$$\frac{dT}{ds}=\kappa N,\qquad \frac{dN}{ds}=-\kappa T+\tau B,\qquad \frac{dB}{ds}=-\tau N$$</div>

<h4>第八步：把它看成一个线性常微分方程组</h4>
把 \(T,N,B\) 各三个分量、一共九个分量看成九个未知函数。第七步的方程组中，右边的系数全部只由 \(\kappa(s)\)、\(\tau(s)\) 决定，且关于未知函数是<strong>线性</strong>的（每一项都是未知函数乘已知函数，没有平方、乘积）。所以这是一个线性常微分方程组，系数完全由给定的 \(\kappa,\tau\) 决定。

<h4>第九步：回忆 Picard–Lindelöf 存在唯一性定理</h4>
回忆常微分方程的基本定理：只要系数函数连续（光滑当然连续），线性方程组在给定<strong>初值</strong>后有<strong>唯一的全局解</strong>。也就是说，给定初始标架 \(T(0),N(0),B(0)\)，第九步的方程组有且仅有一组解 \(T(s),N(s),B(s)\)。

<h4>第十步：由标架积分恢复曲线</h4>
有了 \(T(s)\)，曲线由 \(T(s)=\gamma'(s)\) 积分一次恢复：
<div class="eq">$$\gamma(s)=\gamma(0)+\int_0^s T(u)\,du$$</div>
存在性证完：给定 \(\kappa,\tau\)，选一个初始右手正交标架，就能按上述步骤造出一条空间曲线。

<h4>第十一步：验证恢复的曲线确实以 \(\kappa,\tau\) 为曲率、挠率</h4>
回代检查。因为解满足第七步，\(\gamma'(s)=T(s)\) 且 \(|T|=1\)，是弧长参数；\(\gamma''(s)=T'(s)=\kappa N\)，所以 \(|\gamma''|=\kappa\)，且 \(N\) 正是主法向，故曲率为 \(\kappa\)。又解满足 \(dB/ds=-\tau N\)，按第五步挠率的定义，挠率正是 \(\tau\)。一切吻合。

<h4>第十二步：唯一性——两条曲线有相同的 \(\kappa,\tau\)</h4>
设 \(\gamma,\tilde\gamma\) 都以 \(\kappa,\tau\) 为曲率挠率。它们各自的 Frenet 标架都满足第七步的同一个方程组（系数相同）。唯一的区别是初始标架不同。

<h4>第十三步：两个初始标架差一个旋转</h4>
两个初始右手正交标架 \((T_0,N_0,B_0)\) 与 \((\tilde T_0,\tilde N_0,\tilde B_0)\) 都是三维空间的右手标准正交基。回忆线性代数：任意两组同取向的标准正交基之间，存在唯一的<strong>旋转</strong>（行列式为 \(1\) 的正交矩阵）\(R\)，使得 \(\tilde T_0=R T_0,\ \tilde N_0=R N_0,\ \tilde B_0=R B_0\)。

<h4>第十四步：用解的唯一性把旋转传到所有 \(s\)</h4>
因为 \((RT,RN,RB)\) 也是第七步方程组的一个解（把方程两边同时乘常数矩阵 \(R\) 不改变线性方程），且它在 \(s=0\) 处的初值恰好是 \((\tilde T_0,\tilde N_0,\tilde B_0)\)，所以由第九步解的唯一性，对所有 \(s\)：
<div class="eq">$$(\tilde T,\tilde N,\tilde B)=(RT,RN,RB)$$</div>

<h4>第十五步：位置差一个平移，拼成刚体运动</h4>
由 \(\tilde T=RT\)，即 \(\tilde\gamma'=R\gamma'\)，所以 \((\tilde\gamma-R\gamma)'=0\)，故存在常向量 \(p\) 使
<div class="eq">$$\tilde\gamma(s)=R\,\gamma(s)+p$$</div>
旋转加平移正是 \(\mathbb R^3\) 的刚体运动。唯一性证完。

<div class="keybox">$$\boxed{(\kappa,\tau)\ \text{完全决定空间曲线的形状（差刚体运动）}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>曲率管"平面内怎么弯"，挠率管"平面怎么转"；Frenet 标架的变化率被 \((\kappa,\tau)\) 完全写死，积分一次再配一个初始标架就还原整条曲线——初始标架与位置就是刚体运动的自由度。</div>`
  },
  "r3": {
    0: L`<h4>要证明的命题与约定</h4>
设光滑曲面用正则参数 (x=x(u^1,u^2)) 表示。Gauss 曲率原本用曲面在三维空间中的弯曲定义；我们要推到一个<strong>只含第一基本形式 (g_{ij}) 及其导数</strong>的式子。全篇取 (R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z)，以免不同教材的曲率符号约定造成正负号混乱。

<h4>第一步：确认参数曲面是正则的</h4>
记 (e_i=\partial_i x)（(i=1,2)）。「正则」的意思是 (e_1,e_2) 线性无关，因此它们张成曲面的切平面。以后把三维向量分成沿 (e_1,e_2) 的切向部分和沿单位法向量 (n) 的法向部分。

<h4>第二步：从长度定义第一基本形式</h4>
切向量 (V=a^1e_1+a^2e_2) 的长度平方为 (V\cdot V=\sum_{i,j}a^ia^j(e_i\cdot e_j))。所以令 (g_{ij}=e_i\cdot e_j)，便有
<div class="eq">$$I=g_{11}(du^1)^2+2g_{12}du^1du^2+g_{22}(du^2)^2.$$</div>
这一步把「量长度」变成了一个可计算的 (2\times2) 矩阵。

<h4>第三步：算出面积分母</h4>
由叉积恒等式 (\lvert e_1\times e_2\rvert^2=\lvert e_1\rvert^2\lvert e_2\rvert^2-(e_1\cdot e_2)^2)，得到
<div class="eq">$$\det(g)=g_{11}g_{22}-g_{12}^2=\lvert e_1\times e_2\rvert^2>0.$$</div>
正则性保证分母严格为正，后面可以除以它。

<h4>第四步：定义单位法向量与第二基本形式</h4>
选 (n=(e_1\times e_2)/\lvert e_1\times e_2\rvert)。因为 (x_{ij}=\partial_i\partial_jx) 不一定沿切平面，取其法向分量
<div class="eq">$$b_{ij}=x_{ij}\cdot n,qquad II=\sum_{i,j}b_{ij}du^i du^j.$$</div>
这一步才引入嵌入空间的信息。

<h4>第五步：说明 (b_{12}=b_{21})</h4>
光滑函数的混合偏导可交换：(x_{12}=x_{21})。两边都与同一个 (n) 作内积，便得 (b_{12}=x_{12}\cdot n=x_{21}\cdot n=b_{21})。因此第二基本形式的矩阵对称。

<h4>第六步：从法向变化定义形状算子</h4>
因为 (n\cdot n=1)，微分得 (2n_i\cdot n=0)，故 (n_i=\partial_i n) 是切向量。形状算子定义为 (S(e_i)=-n_i)。再对 (n\cdot e_j=0) 求导：(n_i\cdot e_j+n\cdot x_{ij}=0)，于是
<div class="eq">$$g(S(e_i),e_j)=-n_i\cdot e_j=b_{ij}.$$</div>
这说明矩阵 (b) 正是形状算子的度量配对。

<h4>第七步：把外蕴曲率化成矩阵行列式</h4>
形状算子的两个特征值叫主曲率 (\kappa_1,\kappa_2)，Gauss 曲率按定义是 (K=\kappa_1\kappa_2=\det S)。由第六步，(S) 在基 (e_i) 下的矩阵为 (g^{-1}b)（(b) 对称，指标次序不影响行列式），故
<div class="eq">$$K=\det(g^{-1}b)=\det(g^{-1})\det(b)=\frac{b_{11}b_{22}-b_{12}^{2}}{g_{11}g_{22}-g_{12}^{2}}.$$</div>
问题变成：能否用 (g) 的导数替代分子 (\det b)？

<h4>第八步：分解二阶导数，准备寻找替代式</h4>
每个 (x_{ij}) 都能唯一分解为切向与法向：
<div class="eq">$$x_{ij}=\sum_k\Gamma^k_{ij}e_k+b_{ij}n.$$</div>
这里 (\Gamma^k_{ij}) 只是切向分量的系数。下面从 (g) 求出这些系数，不把它当作凭空出现的公式。

<h4>第九步：对度量分量求一次导</h4>
由 (g_{jl}=e_j\cdot e_l) 和乘积法则，
<div class="eq">$$\partial_i g_{jl}=x_{ij}\cdot e_l+e_j\cdot x_{il}.$$</div>
交换 (i,j,l) 得到另外两式，正好能消掉不需要的内积项。

<h4>第十步：组合三式消元</h4>
把第九步的式子写成 (\partial_i g_{jl})、(\partial_j g_{il})、(\partial_l g_{ij})，前两式相加、第三式相减。由于 (x_{ij}=x_{ji})，余项相消，留下
<div class="eq">$$\partial_i g_{jl}+\partial_j g_{il}-\partial_l g_{ij}=2x_{ij}\cdot e_l.$$</div>
所以 (x_{ij}\cdot e_l) 完全由度量的一阶导数决定。

<h4>第十一步：解出 Christoffel 符号</h4>
用第八步与 (n\cdot e_l=0)，(x_{ij}\cdot e_l=\sum_k\Gamma^k_{ij}g_{kl})。把第十步右边除以 (2)，再乘逆矩阵 (g^{lm})，得到
<div class="eq">$$\Gamma^m_{ij}=\frac12\sum_l g^{ml}(\partial_i g_{jl}+\partial_j g_{il}-\partial_l g_{ij}).$$</div>
这里 (g^{ml}) 是 (g^{-1}) 的分量。至此 (\Gamma) 只用到了 (g) 和 (\partial g)。

<h4>第十二步：解出法向量的导数</h4>
由第六步，(n_i\cdot e_j=-b_{ij})。既然 (n_i) 切向，就写 (n_i=c^k_i e_k)，于是 (c^k_i g_{kj}=-b_{ij})。乘逆矩阵后
<div class="eq">$$\partial_i n=-\sum_{k,l}g^{kl}b_{il}e_k=-\sum_k b_i{}^k e_k.$$</div>
这就是 Weingarten 方程；它稍后用于三阶导数的切向部分。

<h4>第十三步：定义曲面内部的协变导数</h4>
对切向量场 (Y=Y^ke_k)，先在 (\mathbb R^3) 求普通导数，再只留切向分量，定义 (\nabla_{e_i}Y=(\partial_iY)^{\top})。特别地，第八步给出
<div class="eq">$$\nabla_{e_i}e_j=\sum_k\Gamma^k_{ij}e_k.$$</div>
第十一步说明这个内部导数能由第一基本形式单独求得。

<h4>第十四步：定义内部的曲率算子</h4>
曲率测量两次协变求导交换时的差。由于坐标向量场满足 ([e_i,e_j]=0)，在这里
<div class="eq">$$R(e_i,e_j)e_k=\nabla_{e_i}\nabla_{e_j}e_k-\nabla_{e_j}\nabla_{e_i}e_k.$$</div>
记右边沿 (e_l) 的系数为 (R^l{}_{kij})。这一步定义的是内蕴曲率，尚未断言它等于外蕴的 (K)。

<h4>第十五步：展开曲率算子的第一项</h4>
从第十三步 (\nabla_{e_j}e_k=\Gamma^m_{jk}e_m) 出发，用乘积法则：
<div class="eq">$$\nabla_{e_i}(\Gamma^m_{jk}e_m)=\sum_l\left(\partial_i\Gamma^l_{jk}+\sum_m\Gamma^m_{jk}\Gamma^l_{im}\right)e_l.$$</div>
一部分是系数求导，另一部分是基向量本身变化。

<h4>第十六步：交换 (i,j) 并相减</h4>
将第十五步中的 (i,j) 互换，代入第十四步，得到可直接由 (g) 计算的公式：
<div class="eq">$$R^l{}_{kij}=\partial_i\Gamma^l_{jk}-\partial_j\Gamma^l_{ik}+\sum_m(\Gamma^m_{jk}\Gamma^l_{im}-\Gamma^m_{ik}\Gamma^l_{jm}).$$</div>
由于 (\Gamma) 只用 (g,\partial g)，这里最多再用一次偏导，故 (R) 只用 (g,\partial g,\partial^2g)。

<h4>第十七步：找出外蕴与内蕴相等的桥梁</h4>
上一步还没有证明 (R) 与 (b) 有关系。桥梁是普通混合偏导交换：由于 (e_k=\partial_kx)，
<div class="eq">$$\partial_i\partial_j e_k-\partial_j\partial_i e_k=0.$$</div>
接下来分别求这两项的切向部分，不能只说「由 Gauss 方程得」。

<h4>第十八步：先展开 (\partial_i\partial_j e_k)</h4>
由第八步，(\partial_j e_k=\Gamma^m_{jk}e_m+b_{jk}n)。再对 (u^i) 求导，乘积法则逐项给出
<div class="eq">$$\partial_i\partial_j e_k=(\partial_i\Gamma^m_{jk})e_m+\Gamma^m_{jk}\partial_i e_m+(\partial_i b_{jk})n+b_{jk}\partial_i n.$$</div>
其中第三项是纯法向的，投影到切平面时可以去掉。

<h4>第十九步：逐项取切向部分</h4>
在第十八步里，(\partial_i e_m) 的切向部分是 (\Gamma^l_{im}e_l)；第十二步给 (\partial_i n=-b_i{}^l e_l)。因此
<div class="eq">$$\bigl(\partial_i\partial_j e_k\bigr)^{\top}=\sum_l\left(\partial_i\Gamma^l_{jk}+\sum_m\Gamma^m_{jk}\Gamma^l_{im}-b_{jk}b_i{}^l\right)e_l.$$</div>
最后一项的负号来自法向量导数，不能漏掉。

<h4>第二十步：写出交换指标后的切向部分</h4>
同样把上式中的 (i,j) 互换，得到
<div class="eq">$$\bigl(\partial_j\partial_i e_k\bigr)^{\top}=\sum_l\left(\partial_j\Gamma^l_{ik}+\sum_m\Gamma^m_{ik}\Gamma^l_{jm}-b_{ik}b_j{}^l\right)e_l.$$</div>
现在第十七步说两项相减为零，可以逐个比较 (e_l) 的系数。

<h4>第二十一步：相减，推得 Gauss 方程</h4>
第十九步减第二十步，前四个 (\Gamma) 项正是第十六步的 (R^l{}_{kij})。余下两项是 (-b_{jk}b_i{}^l+b_{ik}b_j{}^l)，故
<div class="eq">$$0=R^l{}_{kij}-b_{jk}b_i{}^l+b_{ik}b_j{}^l,\qquad R^l{}_{kij}=b_{jk}b_i{}^l-b_{ik}b_j{}^l.$$</div>
这就是 Gauss 方程的具体来源；没有把最关键的等式当黑箱。

<h4>第二十二步：把上指标降下来</h4>
记 (R_{lkij}=g(R(e_i,e_j)e_k,e_l)=\sum_mg_{lm}R^m{}_{kij})。对第二十一步乘 (g_{lm}) 并求和，利用 (\sum_mg_{lm}b_i{}^m=b_{il})，得
<div class="eq">$$R_{lkij}=b_{jk}b_{il}-b_{ik}b_{jl}.$$</div>
左边可由第一基本形式算，右边暂时仍写着第二基本形式。

<h4>第二十三步：选能产生行列式的四个指标</h4>
在第二十二步取 (l=1,k=2,i=1,j=2)，便有
<div class="eq">$$R_{1212}=b_{22}b_{11}-b_{12}b_{21}=b_{11}b_{22}-b_{12}^2=\det b.$$</div>
第二个等号用了第五步 (b_{21}=b_{12})。这是消去外蕴分子的精确等式。

<h4>第二十四步：代入原始曲率定义</h4>
第七步是 (K=\det b/\det g)，第二十三步是 (\det b=R_{1212})。把后式代入前式，逐项写成
<div class="eq">$$K=\frac{b_{11}b_{22}-b_{12}^2}{g_{11}g_{22}-g_{12}^2}=\frac{R_{1212}}{g_{11}g_{22}-g_{12}^2}=\frac{R_{1212}}{\det g}.$$</div>
再由第十六步和第十一步，右边只含 (g,\partial g,\partial^2g)。

<h4>第二十五步：说明为什么等距一定保持 (K)</h4>
等距映射把每对切向量的内积保持不变；在对应的局部坐标中，两曲面的 (g_{ij}) 是同一组函数。对相同函数求导得到相同的 (\Gamma)（第十一步），再代入曲率公式得到相同的 (R_{1212})（第十六步）；分母 (\det g) 也相同。因此对应点的 Gauss 曲率相等。这里谈「坐标分量相同」时，<strong>必须先选对应的坐标</strong>。

<h4>第二十六步：用圆柱面做一个检查</h4>
取 (x(u,v)=(r\cos(u/r),r\sin(u/r),v))。直接求得 (g_{11}=g_{22}=1,g_{12}=0)，所有 (g_{ij}) 均为常数。第十一步给 (\Gamma^k_{ij}=0)，第十六步给 (R_{1212}=0)，于是第二十四步给 (K=0)。圆柱虽在三维空间中弯了，内部测距却与平面一样，这正是定理的意思。

<div class="keybox">$$\boxed{K=\frac{g(R(e_1,e_2)e_2,e_1)}{g_{11}g_{22}-g_{12}^2}=\frac{R_{1212}}{\det g};\quad K\text{ 由第一基本形式决定。}}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>先用 (g) 求 (\Gamma)，再求内部的 (R)；混合三阶导数可交换，逼出 (R_{1212}=\det b)，把外蕴定义里的 (b) 消掉。</div>`
  },
  "r4": {
    0: L`<h4>我们要证明什么</h4>
等距不变性定理说：如果两个黎曼流形之间存在一个等距映射，那么它们的曲率张量、截面曲率、Ricci 曲率、标量曲率都<strong>一一对应地相等</strong>。核心思想只有一句话：曲率是"度量张量的二阶导数信息"，而等距映射把度量完整地搬过去，所以度量的所有导数信息、进而所有曲率，都被完整地搬过去。

<h4>第一步：回忆等距映射的定义</h4>
设 \(F:(M,g)\to(N,h)\) 是两个黎曼流形之间的光滑映射。\(F\) 叫作<strong>等距映射</strong>，如果它把 \(N\) 的度量 \(h\) 拉回到 \(M\) 上得到 \(g\)，记作
<div class="eq">$$F^{*}h=g$$</div>
它的含义是：对 \(M\) 上任意两个切向量 \(X,Y\)，都有 \(h(dF(X),dF(Y))=g(X,Y)\)，即 \(F\) 保持所有切向量的长度与夹角。

<h4>第二步：等距在坐标下的写法</h4>
先在 \(M\) 上取坐标图 \(x:U\to M\)，再用 \(F\circ x\) 给 \(N\) 的像取<strong>对应坐标</strong>。在同一个参数 \(u\) 下，等距条件逐项成为
<div class="eq">$g_{ij}(u)=h_{ab}(F(x(u)))\,\partial_iF^a\,\partial_jF^b.$</div>
如果 \(N\) 使用刚才随 \(F\) 搬过去的坐标，右边就记作 \(\tilde h_{ij}(u)\)，故 \(g_{ij}(u)=\tilde h_{ij}(u)\)。<strong>只有在对应坐标中</strong>，后面才能逐项比较偏导数；在任意两套坐标下不能直接写 \(h_{ij}\circ F=g_{ij}\)。

<h4>第三步：回忆 Christoffel 符号由度量决定</h4>
回忆 Christoffel 符号的定义（它描述平行移动）：
<div class="eq">$$\Gamma^{k}_{ij}=\frac12\sum_{l}g^{kl}\Big(\partial_i g_{jl}+\partial_j g_{il}-\partial_l g_{ij}\Big)$$</div>
看右边：它只由 \(g_{ij}\) 和它的一阶偏导数 \(\partial g\) 决定。第二步已在对应坐标中得到 \(g_{ij}=\tilde h_{ij}\)，因此两边的逆矩阵与一阶偏导也逐项相等。代入上式可得两组 Christoffel <strong>在这两套对应坐标中</strong>有相同分量。Christoffel 符号本身不是张量，换成不对应的坐标后不能说它们的数值不变。

<h4>第四步：回忆曲率张量由 Christoffel 符号决定</h4>
曲率张量的分量定义为
<div class="eq">$$R^{l}_{\ ijk}=\partial_i\Gamma^{l}_{jk}-\partial_j\Gamma^{l}_{ik}+\sum_m\Gamma^{m}_{jk}\Gamma^{l}_{im}-\sum_m\Gamma^{m}_{ik}\Gamma^{l}_{jm}$$</div>
右边只由 Christoffel 符号和它的一阶偏导数决定。在第二步选好的对应坐标中，第三步给出相同的 Christoffel 函数，故其偏导与上式的乘积项也逐项相同；于是曲率张量的<strong>对应坐标分量</strong>相同。将坐标语言还原成向量语言，就是 \(dF(R^M(X,Y)Z)=R^N(dFX,dFY)dFZ\)。

<h4>第五步：小结——度量到曲率的"逐级构造"</h4>
把前面三步串起来：度量 \(g\) 决定 Christoffel 符号 \(\Gamma\)（用一阶导），\(\Gamma\) 决定曲率张量 \(R\)（再用一阶导）。所以 \(R\) 是 \(g\) 的<strong>二阶导数信息</strong>。等距保 \(g\)，就逐级保 \(\Gamma\)、保 \(R\)。这就是整个定理的骨干。

<h4>第六步：回忆截面曲率的定义</h4>
回忆：给定切空间里一个二维平面 \(\Pi\)，由两个线性无关的切向量 \(X,Y\) 张成，截面曲率定义为
<div class="eq">$$K(\Pi)=\frac{\langle R(X,Y)Y,X\rangle}{g(X,X)g(Y,Y)-g(X,Y)^2}$$</div>
分子是曲率张量作用后与 \(X\) 的内积，分母是 \(X,Y\) 张成平行四边形的面积平方。

<h4>第七步：截面曲率在等距下不变</h4>
等距映射 \(F\) 把 \(M\) 的切向量 \(X,Y\) 映到 \(N\) 的切向量 \(dF(X),dF(Y)\)，且保持内积（第一步）。又由第四步，曲率张量 \(R\) 也被 \(F\) 保持。所以第六步的分子、分母在 \(F\) 下<strong>逐项不变</strong>，故
<div class="eq">$$K^{M}(\Pi)=K^{N}(dF(\Pi))$$</div>
截面曲率在等距下不变。

<h4>第八步：回忆 Ricci 曲率的定义</h4>
Ricci 曲率是曲率张量的一次"缩并"（对两个指标求迹）。取局部正交标架 \(e_1,\dots,e_n\)，定义
<div class="eq">$$\mathrm{Ric}(Y,Z)=\sum_{i}\langle R(e_i,Y)Z,e_i\rangle$$</div>
在坐标中也可对曲率张量缩并得到 Ricci 分量（对相应的一上、一下指标缩并；具体位置依前面的曲率指标约定）。

<h4>第九步：Ricci 曲率在等距下不变</h4>
等距映射把正交标架 \(\{e_i\}\) 映成另一组正交标架 \(\{dF(e_i)\}\)（保内积、保正交性），并且保持曲率张量（第四步）。所以第八步的每一项 \(\langle R(e_i,Y)Z,e_i\rangle\) 都被 \(F\) 逐项保持，求和后
<div class="eq">$$\mathrm{Ric}^{M}(Y,Z)=\mathrm{Ric}^{N}(dF(Y),dF(Z))$$</div>
Ricci 曲率在等距下不变。

<h4>第十步：回忆标量曲率的定义</h4>
标量曲率是 Ricci 曲率的再一次缩并（对度量取迹）：
<div class="eq">$$S=\sum_{i}\mathrm{Ric}(e_i,e_i)=\sum_{i,j}\langle R(e_i,e_j)e_j,e_i\rangle$$</div>
它把曲率压缩成一个标量函数。

<h4>第十一步：标量曲率在等距下不变</h4>
与第九步同理：等距保持正交标架与曲率张量，所以第十步右边每一项 \(\langle R(e_i,e_j)e_j,e_i\rangle\) 都被 \(F\) 逐项保持，求和后
<div class="eq">$$S^{M}=S^{N}\circ F$$</div>
标量曲率在等距下不变。

<h4>第十二步：总结所有结论</h4>
把第七、九、十一步汇总：等距映射 \(F^{*}h=g\) 保持曲率张量、截面曲率、Ricci 曲率、标量曲率，全部对应相等。

<div class="keybox">$$\boxed{F^{*}h=g\ \Longrightarrow\ \text{曲率张量、截面曲率、Ricci 曲率、标量曲率均对应相等}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>等距保度量 ⟹ 保度量的一、二阶导数 ⟹ 保 Christoffel 符号 ⟹ 保曲率张量 ⟹ 保它缩并出来的 Ricci、标量以及截面曲率。</div>`
  },
  "r5": {
    0: L`<h4>命题、约定与证明路线</h4>
设 \(M\) 是紧致、定向、无边界的二维黎曼流形。要证明
<div class="eq">$$\int_M K\,dA=2\pi\chi(M).$$</div>
路线是：先从曲面上的转角推得每个小圆盘的局部公式；再对一张有限测地三角网逐片相加；最后把角度和变成顶点、边、面的计数。

<h4>第一步：回忆 Gauss 曲率和面积元</h4>
在局部坐标 \(u^1,u^2\) 中，\(K\) 是切平面截面曲率，\(dA=\sqrt{\det(g_{ij})}\,du^1du^2\)。积分 \(\int_MK\,dA\) 把每小块的曲率按面积加权。定向保证我们能一致地选择“正向”绕边界走。

<h4>第二步：先在一块拓扑圆盘 \(D\) 上选标架</h4>
圆盘可缩，故能选一组处处光滑的有向正交单位向量场 \(e_1,e_2\)。它们像曲面内部的一把移动直角尺；我们先用这把尺测边界切向量的转角。

<h4>第三步：定义联络一形式 \(\omega\)</h4>
因 \(e_1,e_2\) 保持单位正交，\(e_1\) 的协变导数必垂直于 \(e_1\)，可写
<div class="eq">$$\nabla_Xe_1=\omega(X)e_2,\qquad \nabla_Xe_2=-\omega(X)e_1.$$</div>
第二式来自对 \(g(e_1,e_2)=0\) 求导；\(\omega(X)\) 衡量直角尺沿 \(X\) 转了多少。

<h4>第四步：先算两次求导的交换差</h4>
采用 \(R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z\)。将第三步代入并对 \(e_1\) 计算：\(\nabla_X(\omega(Y)e_2)=X(\omega(Y))e_2-\omega(Y)\omega(X)e_1\)；交换 \(X,Y\) 后相减，两个 \(e_1\) 项抵消，得到
<div class="eq">$$R(X,Y)e_1=[X\omega(Y)-Y\omega(X)-\omega([X,Y])]e_2=d\omega(X,Y)e_2.$$</div>

<h4>第五步：把 \(d\omega\) 识别成曲率</h4>
按本文的曲率约定，\(K=g(R(e_1,e_2)e_2,e_1)\)。曲率算子在 \(e_1,e_2\) 平面上斜对称，故 \(g(R(e_1,e_2)e_1,e_2)=-K\)。第四步左边正是后者，因此
<div class="eq">$$d\omega(e_1,e_2)=-K,\qquad d\omega=-K\,dA.$$</div>
不同教材若把 \(R\) 定义成相反号，两式会同时变号，最终 Gauss–Bonnet 不变。

<h4>第六步：把边界切向量写成一个角度</h4>
沿 \(\partial D\) 的每段光滑弧用弧长 \(s\) 参数化。单位切向量 \(T\) 能写成 \(T=\cos\theta\,e_1+\sin\theta\,e_2\)。定义同方向旋转 \(90^\circ\) 的单位向量 \(N=-\sin\theta\,e_1+\cos\theta\,e_2\)。

<h4>第七步：逐项求 \(T\) 的协变导数</h4>
对第六步求导：三角函数求导给 \(\theta'(-\sin\theta\,e_1+\cos\theta\,e_2)=\theta'N\)；标架求导由第三步给 \(\omega(T)(-\sin\theta\,e_1+\cos\theta\,e_2)=\omega(T)N\)。相加为
<div class="eq">$$\nabla_TT=(\theta'(s)+\omega(T))N.$$</div>

<h4>第八步：从定义读出测地曲率</h4>
有向测地曲率定义为 \(k_g=g(\nabla_TT,N)\)。把第七步代入，\(g(N,N)=1\)，所以
<div class="eq">$$k_g=\theta'+\omega(T).$$</div>
它把“边界自身转角”与“参考标架转角”分开了。

<h4>第九步：在光滑边界段上积分</h4>
第八步两边沿各光滑段积分并求和：
<div class="eq">$$\int_{\partial D}k_g\,ds=\sum_{\text{段}}\Delta\theta+\int_{\partial D}\omega.$$</div>
遇到角点时切向量跳跃，\(\theta\) 也跳跃；这些跳跃要另外计入外角，不能藏在积分中。

<h4>第十步：用 Stokes 定理处理标架项</h4>
Stokes 公式给 \(\int_{\partial D}\omega=\int_Dd\omega\)。由第五步 \(d\omega=-K\,dA\)，于是
<div class="eq">$$\int_{\partial D}\omega=-\int_DK\,dA.$$</div>
这是把边界标架转动换成区域曲率的关键一步。

<h4>第十一步：计算切向量绕一圈的总转角</h4>
圆盘的正向简单闭边界，切向量相对圆盘上的有向标架转一整圈。若边界有折角，把每段连续变化 \(\Delta\theta\) 与各角点的有向外角 \(\varepsilon_j\) 一起算，转角数定理给
<div class="eq">$$\sum_{\text{段}}\Delta\theta+\sum_j\varepsilon_j=2\pi.$$</div>
这个“转一圈”是平面转角数定理经圆盘上的标架搬来的；若边界自交或区域不是圆盘，右边不能直接写 \(2\pi\)。

<h4>第十二步：把前三个等式合成局部公式</h4>
从第九步加上角点外角，再用第十、十一步：
<div class="eq">$$\int_{\partial D}k_g\,ds+\sum_j\varepsilon_j
=2\pi-\int_DK\,dA.$$</div>
把曲率积分移到左边，得到局部 Gauss–Bonnet：
<div class="eq">$$\int_DK\,dA+\int_{\partial D}k_g\,ds+\sum_j\varepsilon_j=2\pi.$$</div>

<h4>第十三步：选择足够细的测地三角剖分</h4>
紧致曲面有有限三角剖分；把网格取得足够细，使每条小边处在测地凸邻域内，再用唯一短测地线代替小边，可得到保持同一组合结构的测地三角剖分。这一步使用曲面三角剖分与局部测地凸性两个标准结果。记顶点数 \(V\)、边数 \(E\)、面数 \(F\)。

<h4>第十四步：说明每个小面都可用局部公式</h4>
每个测地三角形 \(\Delta\) 连同内部是一块拓扑圆盘，符合第十二步的使用条件。三个内角记为 \(\alpha,\beta,\gamma\)；它们在切平面内由度量测量。

<h4>第十五步：把测地边的边界积分消去</h4>
测地线的定义是沿自身满足 \(\nabla_TT=0\)，因此由第八步的测地曲率定义，三条边上 \(k_g=g(0,N)=0\)。于是 \(\int_{\partial\Delta}k_g\,ds=0\)。

<h4>第十六步：把内角改写成外角</h4>
沿正向边界在一个顶点转弯，外角是 \(\varepsilon=\pi-\alpha\)。三顶点合计 \((\pi-\alpha)+(\pi-\beta)+(\pi-\gamma)=3\pi-(\alpha+\beta+\gamma)\)。

<h4>第十七步：推得每个三角形的角盈公式</h4>
把第十五、十六步代入第十二步：
<div class="eq">$$\int_\Delta K\,dA+3\pi-(\alpha+\beta+\gamma)=2\pi.$$</div>
两边减去 \(3\pi\) 再移项，得到
<div class="eq">$$\int_\Delta K\,dA=\alpha+\beta+\gamma-\pi.$$</div>
右边就是这片三角形相对欧氏三角形的角盈。

<h4>第十八步：对所有三角形左边求和</h4>
三角形内部互不重叠，合起来覆盖整个 \(M\)；共同边只有二维面积零。积分的可加性给
<div class="eq">$$\sum_\Delta\int_\Delta K\,dA=\int_MK\,dA.$$</div>

<h4>第十九步：把右边拆成角度总和与面数</h4>
第十七步的右边对全部 \(F\) 个三角形求和为
<div class="eq">$$\sum_\Delta(\alpha_\Delta+\beta_\Delta+\gamma_\Delta-\pi)
=\sum_{\text{所有三角形顶角}}\alpha-\pi F.$$</div>
所以 \(\int_MK\,dA=\sum_{\text{顶角}}\alpha-\pi F\)。

<h4>第二十步：在一个顶点周围算角度和</h4>
固定一个顶点 \(v\)。所有相邻三角形的角在同一个切平面中按顺序排满一圈，既无重叠也无缺口；因 \(M\) 没有边界，这一圈的角度和为 \(2\pi\)。

<h4>第二十一步：对所有顶点求和</h4>
每个三角形的每个角恰属于一个顶点，故
<div class="eq">$$\sum_{\text{所有三角形顶角}}\alpha=\sum_{v}2\pi=2\pi V.$$</div>
代回第十九步，得到 \(\int_MK\,dA=2\pi V-\pi F\)。

<h4>第二十二步：从面一侧数边的出现次数</h4>
每个三角形都有三条边，若按“面上的边”计数，合计 \(3F\) 次。这里一条公共边在它相邻的两个面里各算一次。

<h4>第二十三步：从边一侧再数同一批次数</h4>
闭曲面无边，每条剖分边恰属于两个三角形，故同一批“面上的边”也有 \(2E\) 次。两种计数相等：
<div class="eq">$$3F=2E.$$</div>

<h4>第二十四步：把 \(2\pi V-\pi F\) 改写成 \(V-E+F\)</h4>
由 \(3F=2E\)，得到 \(2E-2F=F\)，所以 \(\pi F=2\pi(E-F)\)。代入第二十一步：
<div class="eq">$$\int_MK\,dA=2\pi V-\pi F=2\pi V-2\pi(E-F)=2\pi(V-E+F).$$</div>

<h4>第二十五步：识别 Euler 示性数</h4>
Euler 示性数定义为有限三角剖分的交错计数 \(\chi(M)=V-E+F\)，并且拓扑定理保证它不依赖具体剖分。把它代入第二十四步，得所求全局公式。

<div class="keybox">$$\boxed{\int_MK\,dA=2\pi\chi(M).}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>局部曲率使三角形角和偏离 \(\pi\)；把所有角盈相加，顶点各给 \(2\pi\)，边面关系 \(3F=2E\) 把剩余项变成 \(2\pi(V-E+F)\)。</div>`
  },
  "r6": {
    0: L`<h4>第1步：逐字写出目标</h4>回忆：黎曼度量是在每一点正定的光滑对称双线性型；必须分别验证这三种性质。<div class="eq">$$g_p(v,w)=g_p(w,v),\qquad g_p(v,v)>0\quad(v\ne0)$$</div>所以构造的终点是一个全局张量场，且每个非零向量都要得到严格正值。
<h4>第2步：说明单位分解的使用条件</h4>回忆：通常的光滑流形约定包含 Hausdorff 与第二可数；这样的有限维流形仿紧致，因而有从属于坐标覆盖的光滑单位分解。<div class="eq">$$M=\bigcup_{\alpha}U_\alpha,\qquad \operatorname{supp}\rho_\alpha\subset U_\alpha$$</div>取坐标覆盖并细化到适合单位分解的覆盖；支撑包含关系保证后面的零延拓有定义。
<h4>第3步：在每张坐标卡上造欧氏内积</h4>回忆：坐标函数的微分是余切基；两个一阶余切基张量积给出二阶协变张量。<div class="eq">$$h_\alpha=\sum_{i=1}^{n}dx_\alpha^i\otimes dx_\alpha^i$$</div>这里的内积只在坐标域 \(U_\alpha\) 内使用，不要求不同卡上的坐标欧氏内积彼此相同。
<h4>第4步：把切向量逐项代入局部内积</h4>回忆：若 \(v=\sum_i v^i\partial_{x_\alpha^i}\)，则 \(dx_\alpha^i(v)=v^i\)。<div class="eq">$$h_\alpha(v,v)=\sum_i dx_\alpha^i(v)\,dx_\alpha^i(v)=\sum_i(v^i)^2$$</div>非零向量至少有一个坐标分量非零，所以此和严格为正。
<h4>第5步：核对局部张量对称</h4>回忆：对两个向量 \(v,w\)，实数乘法可交换。<div class="eq">$$h_\alpha(v,w)=\sum_i v^iw^i=\sum_i w^iv^i=h_\alpha(w,v)$$</div>局部张量对称；每个分量在此坐标卡上为常数，也就光滑。
<h4>第6步：列出权函数的三个性质</h4>回忆：单位分解定理给出非负、和为一、局部有限的光滑函数族。<div class="eq">$$\rho_\alpha\ge0,\qquad \sum_\alpha\rho_\alpha(p)=1,\qquad \{\rho_\alpha\}\text{局部有限}$$</div>非负性将保住正定性，局部有限性将保住光滑性。
<h4>第7步：处理局部张量在卡外未定义的问题</h4>回忆：\(\rho_\alpha\) 的支撑在 \(U_\alpha\) 内；支撑外每一点都有邻域使 \(\rho_\alpha=0\)。<div class="eq">$$\widetilde h_\alpha(p)=\begin{cases}\rho_\alpha(p)h_\alpha(p),&p\in U_\alpha,\\0,&p\notin U_\alpha.\end{cases}$$</div>在卡的边缘附近表达式已恒为零，因此零延拓仍是光滑张量。
<h4>第8步：定义候选全局度量</h4>回忆：局部有限的和在每一点附近只有有限个非零项。<div class="eq">$$g=\sum_\alpha\widetilde h_\alpha=\sum_\alpha\rho_\alpha h_\alpha$$</div>第二个写法约定每项已作零延拓，因而 \(g\) 在整个 \(M\) 上有定义。
<h4>第9步：逐项检验双线性</h4>回忆：每个 \(h_\alpha\) 对两个变量分别线性。<div class="eq">$$g_p(av_1+bv_2,w)=\sum_\alpha\rho_\alpha(p)\bigl[a h_\alpha(v_1,w)+b h_\alpha(v_2,w)\bigr]=a g_p(v_1,w)+b g_p(v_2,w)$$</div>对第二个变量作同一代入也成立，所以 \(g_p\) 是双线性的。
<h4>第10步：逐项检验对称</h4>回忆：每个 \(h_\alpha\) 已在第5步验证对称。<div class="eq">$$g_p(v,w)=\sum_\alpha\rho_\alpha(p)h_\alpha(v,w)=\sum_\alpha\rho_\alpha(p)h_\alpha(w,v)=g_p(w,v)$$</div>非负性在这一步并非必需；实数加权和本身保住对称性。
<h4>第11步：逐项检验光滑</h4>回忆：张量场光滑等价于它在每张坐标卡中的全部分量光滑。<div class="eq">$$g_{ij}\big|_V=\sum_{\alpha\in A_V}(\widetilde h_\alpha)_{ij}\big|_V,\qquad |A_V|<\infty$$</div>在足够小的邻域 \(V\) 里，局部有限性只留下有限个光滑分量；有限和仍光滑。
<h4>第12步：找出严格正的权重</h4>回忆：所有 \(\rho_\alpha(p)\) 都非负，而且和恰为一。<div class="eq">$$\sum_\alpha\rho_\alpha(p)=1>0\quad\Longrightarrow\quad\exists\alpha_0:\rho_{\alpha_0}(p)>0$$</div>这一项的支撑位于 \(U_{\alpha_0}\)，因此可以在该点代入局部正定内积。
<h4>第13步：把非零向量代入并比较</h4>回忆：正定性要对任意 \(p\) 和任意 \(0\ne v\in T_pM\) 成立；每个权重非负。<div class="eq">$$g_p(v,v)=\sum_\alpha\rho_\alpha(p)h_{\alpha,p}(v,v)\ge\rho_{\alpha_0}(p)h_{\alpha_0,p}(v,v)>0$$</div>一个严格正项加上其余非负项，给出所需的严格正值。
<h4>第14步：合并各项检查</h4>回忆：第9、10步给双线性和对称，第11步给光滑，第13步给正定。<div class="eq">$$g\in\Gamma(S^2T^*M),\qquad g_p(v,v)>0\quad(p\in M,\ v\ne0)$$</div>这些恰是黎曼度量的定义条件，故构造完成。
<div class="keybox">$$\boxed{g=\sum_\alpha\rho_\alpha h_\alpha\text{ 是 }M\text{ 上的黎曼度量}}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>每张坐标卡先放一个欧氏内积，再用非负且和为一的光滑权重拼起来。</div>`
  },
  "r7": {
    0: L`<h4>第1步：明确两个空间</h4>回忆：\(T_pM\) 是切向量空间，\(T_p^*M\) 是作用在切向量上的线性函数空间。<div class="eq">$$\dim T_pM=\dim T_p^*M=n$$</div>目标是在每一点建立互逆线性映射，再核查它们随点光滑变化。
<h4>第2步：按定义固定度量的第一个变量</h4>回忆：度量 \(g_p\) 对第二个变量线性。<div class="eq">$$v^\flat(w):=g_p(v,w),\qquad w\in T_pM$$</div>固定 \(v\) 后，右边是关于 \(w\) 的线性函数，因此 \(v^\flat\in T_p^*M\)。
<h4>第3步：验证降调对向量线性</h4>回忆：度量对第一个变量也线性；测试两个余向量相等要让它们作用于任意 \(w\)。<div class="eq">$$(av+bu)^\flat(w)=g_p(av+bu,w)=a g_p(v,w)+b g_p(u,w)$$</div>于是 \((av+bu)^\flat=a v^\flat+b u^\flat\)，降调是线性映射。
<h4>第4步：用正定性排除非零核</h4>回忆：正定性规定 \(g_p(v,v)=0\) 只能在 \(v=0\) 时发生。<div class="eq">$$v^\flat=0\quad\Longrightarrow\quad 0=v^\flat(v)=g_p(v,v)\quad\Longrightarrow\quad v=0$$</div>降调的核为零，所以它在每个纤维上单射。
<h4>第5步：由维数相等得到满射</h4>回忆：有限维线性代数的秩–零度公式为 \(\dim V=\dim\ker L+\operatorname{rank}L\)。<div class="eq">$$n=0+\operatorname{rank}(\flat_p)\quad\Longrightarrow\quad\operatorname{rank}(\flat_p)=n=\dim T_p^*M$$</div>因此每个余向量都有唯一的降调原像。
<h4>第6步：选坐标并写出度量矩阵</h4>回忆：在坐标基 \(\partial_i\) 和对偶基 \(dx^i\) 下，\(g_{ij}=g(\partial_i,\partial_j)\)。<div class="eq">$$v=v^j\partial_j,\qquad g=g_{ij}\,dx^i\otimes dx^j$$</div>接下来把抽象映射变为可计算的矩阵乘法。
<h4>第7步：逐分量计算降指标</h4>回忆：余向量的第 \(i\) 个分量是它在 \(\partial_i\) 上的取值。<div class="eq">$$(v^\flat)_i=v^\flat(\partial_i)=g(v^j\partial_j,\partial_i)=\sum_j g_{ij}v^j$$</div>所以降调在坐标中的矩阵就是 \(G=(g_{ij})\)。
<h4>第8步：证明这个矩阵可逆</h4>回忆：正定矩阵的二次型对非零列向量严格为正。<div class="eq">$$Gz=0\quad\Longrightarrow\quad z^TGz=0\quad\Longrightarrow\quad z=0$$</div>方阵没有非零核，因此 \(\det G\ne0\)，可以定义逆矩阵。
<h4>第9步：把逆矩阵的指标约定写清</h4>回忆：定义 \(G^{-1}=(g^{ij})\)，矩阵乘法给 Kronecker 符号。<div class="eq">$$\sum_k g^{ik}g_{kj}=\delta^i_j,\qquad \sum_k g_{ik}g^{kj}=\delta_i^j$$</div>这些等式是稍后两次复合化为恒等映射的关键。
<h4>第10步：按逆矩阵定义升调</h4>回忆：设 \(\alpha=\alpha_jdx^j\)；我们要找到满足 \(g_{ij}v^j=\alpha_i\) 的向量。<div class="eq">$$\alpha^\sharp:=\sum_{i,j}g^{ij}\alpha_j\partial_i$$</div>这就是线性方程 \(Gv=\alpha\) 的解 \(v=G^{-1}\alpha\)。
<h4>第11步：先升后降逐项核对</h4>回忆：降调的分量规则是第7步的 \(g_{ki}v^i\)。<div class="eq">$$((\alpha^\sharp)^\flat)_k=\sum_i g_{ki}(\alpha^\sharp)^i=\sum_{i,j}g_{ki}g^{ij}\alpha_j=\sum_j\delta_k^j\alpha_j=\alpha_k$$</div>每个分量与原余向量相同，故 \(\flat_p\circ\sharp_p=\operatorname{id}_{T_p^*M}\)。
<h4>第12步：先降后升逐项核对</h4>回忆：升调的分量规则是第10步的 \(g^{ik}\alpha_k\)。<div class="eq">$$((v^\flat)^\sharp)^i=\sum_k g^{ik}(v^\flat)_k=\sum_{k,j}g^{ik}g_{kj}v^j=\sum_j\delta^i_jv^j=v^i$$</div>每个分量与原向量相同，故 \(\sharp_p\circ\flat_p=\operatorname{id}_{T_pM}\)。
<h4>第13步：核查逆矩阵随位置光滑</h4>回忆：\(g_{ij}(p)\) 光滑且 \(\det G(p)>0\)；伴随矩阵的分量是矩阵分量的多项式。<div class="eq">$$G^{-1}(p)=\frac{\operatorname{adj}G(p)}{\det G(p)}$$</div>分母处处非零，故 \(g^{ij}(p)\) 光滑；升调不只逐点存在，也随 \(p\) 光滑变化。
<h4>第14步：核查坐标改变后的含义</h4>回忆：\(v^\flat(w)=g(v,w)\) 完全用张量定义，不用坐标；逆映射由它唯一确定。<div class="eq">$$\flat:TM\to T^*M,\qquad \sharp=\flat^{-1}:T^*M\to TM$$</div>坐标公式只用来计算；两张坐标卡上的公式表示同一对全局光滑丛映射。
<div class="keybox">$$\boxed{v_i=g_{ij}v^j,\qquad \alpha^{\sharp i}=g^{ij}\alpha_j,\qquad \sharp=\flat^{-1}}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>把向量放进内积的一个位置得到余向量；乘逆度量再把它还原。</div>`
  },
  "r8": {
    0: L`<h4>第1步：交代连通性与原命题的范围</h4>回忆：维数上界要以连通的 \(n\) 维黎曼流形为前提；若有无限多个彼此独立的相同分支，等距群可能含无穷多个连续参数。<div class="eq">$$M\text{ 连通},\qquad G=\operatorname{Isom}(M,g)$$</div>下文按黎曼几何中常用的连通情形证明原题结论；缺少此条件时原句不能无条件成立。
<h4>第2步：从等距定义写出逐点等式</h4>回忆：全局等距自同构是满足 \(F^*g=g\) 的微分同胚。<div class="eq">$$g_{F(x)}(dF_xu,dF_xv)=g_x(u,v)$$</div>它把 \(T_xM\) 的内积原样带到 \(T_{F(x)}M\)，故导数是正交线性同构。
<h4>第3步：检查恒等、复合和逆</h4>回忆：拉回满足 \((F\circ H)^*g=H^*(F^*g)\)，而微分同胚有逆映射。<div class="eq">$$\operatorname{id}^*g=g,\qquad(F\circ H)^*g=H^*g=g,\qquad(F^{-1})^*g=g$$</div>因此所有全局等距自同构确实组成群。
<h4>第4步：由度量等式算曲线速度</h4>回忆：复合曲线求导使用链式法则。<div class="eq">$$(F\circ\gamma)^{\prime}(t)=dF_{\gamma(t)}\dot\gamma(t),\qquad g((F\circ\gamma)^{\prime},(F\circ\gamma)^{\prime})=g(\dot\gamma,\dot\gamma)$$</div>等距保持每一时刻的速度长度。
<h4>第5步：对速度积分得到保距</h4>回忆：曲线长度定义为速度长度的积分，内蕴距离定义为所有连接曲线长度的下确界。<div class="eq">$$L(F\circ\gamma)=\int\sqrt{g((F\circ\gamma)^{\prime},(F\circ\gamma)^{\prime})}\,dt=L(\gamma),\quad d(Fx,Fy)=d(x,y)$$</div>最后一个等号还使用 \(F^{-1}\)：两方向的长度下确界互相不大于。
<h4>第6步：说明逆问题所需的正则性</h4>回忆：距离保持双射的光滑性属于 Myers–Steenrod 的解析结论；在光滑黎曼流形上，它与度量等距的定义一致。<div class="eq">$$d(Fx,Fy)=d(x,y)\quad\Longrightarrow\quad F\text{ 光滑且 }F^*g=g$$</div>这一步需要该正则性定理，不能只凭距离等式对坐标函数形式求导。
<h4>第7步：把等距作用于联络</h4>回忆：Levi-Civita 联络由无挠和与度量相容两条性质唯一确定。<div class="eq">$$F_*\nabla_XY:=dF\bigl(\nabla_XY\bigr),\qquad F_*\nabla\text{ 仍无挠且与 }g\text{ 相容}$$</div>唯一性给出 \(dF(\nabla_XY)=\nabla_{dF X}(dF Y)\)。
<h4>第8步：将测地线方程逐项代入</h4>回忆：测地线的定义是其速度沿自身平行，即 \(\nabla_{\dot\gamma}\dot\gamma=0\)。<div class="eq">$$\nabla_{(F\circ\gamma)^{\prime}}(F\circ\gamma)^{\prime}=dF\bigl(\nabla_{\dot\gamma}\dot\gamma\bigr)=dF(0)=0$$</div>因此等距把测地线送到测地线，且新初速度为 \(dF_p\dot\gamma(0)\)。
<h4>第9步：用测地线唯一性控制指数映射</h4>回忆：\(\exp_p(v)\) 是初值 \(\gamma(0)=p,\dot\gamma(0)=v\) 的测地线在时间一的终点。<div class="eq">$$F(\exp_p v)=\exp_{F(p)}(dF_pv)$$</div>两侧是同一初始点、同一初速度的测地线终点；在指数映射有定义处相等。
<h4>第10步：先在一个法邻域证明唯一</h4>回忆：指数映射在零向量附近是微分同胚。设 \(F(p)=H(p)\) 且 \(dF_p=dH_p\)。<div class="eq">$$F(\exp_pv)=\exp_{F(p)}(dF_pv)=\exp_{H(p)}(dH_pv)=H(\exp_pv)$$</div>当 \(v\) 足够小时，\(F\) 与 \(H\) 在 \(p\) 的一个开邻域逐点相同。
<h4>第11步：把局部唯一性传播到全局</h4>回忆：令 \(A=\{x:F(x)=H(x),\ dF_x=dH_x\}\)；连续性使 \(A\) 闭，第10步使它在其每点附近开。<div class="eq">$$p\in A,\qquad A\text{ 既开又闭},\qquad M\text{ 连通}\quad\Longrightarrow\quad A=M$$</div>所以连通流形上的全局等距由一点的像与该点的微分唯一决定。
<h4>第12步：选定一个参考正交标架</h4>回忆：每个有限维内积空间都可选一组正交归一基。<div class="eq">$$e=(e_1,\ldots,e_n)\text{ 是 }T_pM\text{ 的正交标架}$$</div>记录 \(F(p)\) 与各个 \(dF_pe_i\) 就记录了上一部的全部初值资料。
<h4>第13步：定义记录等距的标架映射</h4>回忆：第2步说明 \(dF_p\) 保内积，因此它送正交标架到正交标架。<div class="eq">$$\Phi(F)=\bigl(F(p);dF_pe_1,\ldots,dF_pe_n\bigr)\in O(M)$$</div>这里 \(O(M)\) 是正交标架丛，\(\Phi\) 对每个等距都有定义。
<h4>第14步：证明标架记录没有重号</h4>回忆：若 \(\Phi(F)=\Phi(H)\)，则两个标架底点及每个基向量的像相同。<div class="eq">$$F(p)=H(p),\qquad dF_pe_i=dH_pe_i\ (1\le i\le n)\quad\Longrightarrow\quad F=H$$</div>基向量的像相同表示两导数相同，再用第11步即可得到单射。
<h4>第15步：计算底点自由度</h4>回忆：正交标架丛投影到 \(M\)；底点在 \(n\) 维流形中变化。<div class="eq">$$\dim M=n$$</div>选择 \(F(p)\) 最多需要 \(n\) 个局部实参数。
<h4>第16步：计算同一底点处的标架空间</h4>回忆：固定底点后，两个正交标架之间差一个正交矩阵。<div class="eq">$$O(n)=\{A\in\mathbb R^{n\times n}:A^TA=I\}$$</div>所以纤维的局部维数等于 \(O(n)\) 的维数。
<h4>第17步：对正交约束求导</h4>回忆：令 \(A(t)\in O(n)\) 且 \(A(0)=I\)，记 \(B=\dot A(0)\)。<div class="eq">$$0=\frac{d}{dt}\big|_{t=0}(A(t)^TA(t))=B^T+B$$</div>正交群单位元处的切向量必须是斜对称矩阵。
<h4>第18步：数出斜对称矩阵的参数</h4>回忆：\(B^T=-B\) 给出 \(B_{ii}=0\) 且 \(B_{ji}=-B_{ij}\)。<div class="eq">$$\#\{(i,j):1\le i<j\le n\}=\sum_{i=1}^{n-1}(n-i)=\frac{n(n-1)}2$$</div>上三角每项可自由选取，下三角被它决定；这就是 \(O(n)\) 的维数。
<h4>第19步：相加得到标架丛维数</h4>回忆：局部平凡化把标架丛写成底点坐标乘以 \(O(n)\)。<div class="eq">$$\dim O(M)=\dim M+\dim O(n)=n+\frac{n(n-1)}2=\frac{n(n+1)}2$$</div>这给出了位置加朝向的总自由度。
<h4>第20步：指出集合单射尚不足以比较维数</h4>回忆：任意集合都可能单射到低维连续空间，故第14步的集合单射本身不给 Lie 群维数不等式。<div class="eq">$$\Phi:G\longrightarrow O(M)\text{ 单射}\quad\not\Rightarrow\quad \dim G\le\dim O(M)$$</div>需要先建立 \(G\) 的 Lie 结构以及 \(\Phi\) 是光滑轨道映射。
<h4>第21步：明确使用的非初等解析输入</h4>回忆：光滑等距作用的 Lie 化结论是 Myers–Steenrod 证明中的深层解析步骤：带紧开拓扑的等距群有有限维 Lie 结构，且在正交标架丛上的作用光滑。<div class="eq">$$G\text{ 是 Lie 群},\qquad G\curvearrowright O(M)\text{ 为光滑作用}$$</div>这一步不能由前面的代数代入证明；将它明确作为标准解析引理，余下的维数估计逐项完成。
<h4>第22步：确定参考标架的稳定子</h4>回忆：若 \(F\) 固定参考标架，则 \(F(p)=p\) 且 \(dF_pe_i=e_i\) 对所有 \(i\)。<div class="eq">$$\Phi(F)=e\quad\Longrightarrow\quad F(p)=p,\ dF_p=I\quad\Longrightarrow\quad F=\operatorname{id}$$</div>最后一步用第11步与恒等映射比较，故稳定子只有单位元。
<h4>第23步：核查轨道映射的微分单射</h4>回忆：光滑 Lie 群作用的轨道映射在单位元处的微分，其核等于稳定子 Lie 代数。<div class="eq">$$\ker(d\Phi_{\operatorname{id}})=\operatorname{Lie}(G_e)=\{0\}$$</div>第22步给出平凡稳定子，因此 \(d\Phi_{\operatorname{id}}\) 是线性单射。
<h4>第24步：逐项比较切空间维数</h4>回忆：线性单射的定义域维数不超过值域维数。<div class="eq">$$\dim G=\dim T_{\operatorname{id}}G\le\dim T_eO(M)=n+\frac{n(n-1)}2=\frac{n(n+1)}2$$</div>这就得到原题的维数上界。
<h4>第25步：用欧氏空间核查上界可取等</h4>回忆：欧氏空间的平移有 \(n\) 个参数，正交部分有 \(n(n-1)/2\) 个参数。<div class="eq">$$\dim\operatorname{Isom}(\mathbb R^n)=n+\frac{n(n-1)}2=\frac{n(n+1)}2$$</div>所以这个上界是尖锐的；球面和双曲空间也达到相同维数。
<div class="keybox">$$\boxed{M\text{ 连通时，}\operatorname{Isom}(M,g)\text{ 是 Lie 群，且 }\dim\operatorname{Isom}(M,g)\le\frac{n(n+1)}2}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>等距由一点的位置和该点的正交标架确定；Lie 群结构还需要独立的解析定理。</div>`
  },
  "r9": {
    0: L`<h4>第1步：把原题翻译成四项检查</h4>回忆：黎曼度量是光滑、对称、双线性且逐点正定的二阶协变张量。<div class="eq">$$(F^*h)_p(v,w):=h_{F(p)}(dF_pv,dF_pw)$$</div>这个定义把两个切向量先送到目标切空间，再用目标度量量它们。
<h4>第2步：固定一点并检验映射的类型</h4>回忆：光滑映射的微分是切空间之间的线性映射。<div class="eq">$$dF_p:T_pM\longrightarrow T_{F(p)}N,\qquad dF_p(av+bw)=a\,dF_pv+b\,dF_pw$$</div>所以拉回式的两个输入都属于同一个可用内积的空间。
<h4>第3步：核对第一个变量的线性</h4>回忆：目标度量 \(h_{F(p)}\) 对第一个变量线性。<div class="eq">$$(F^*h)_p(av_1+bv_2,w)=h(a\,dF_pv_1+b\,dF_pv_2,dF_pw)=a(F^*h)_p(v_1,w)+b(F^*h)_p(v_2,w)$$</div>第一变量的线性是由微分线性与内积线性逐次代入得到的。
<h4>第4步：核对第二个变量的线性</h4>回忆：目标度量对第二个变量也线性。<div class="eq">$$(F^*h)_p(v,aw_1+bw_2)=h(dF_pv,a\,dF_pw_1+b\,dF_pw_2)=a(F^*h)_p(v,w_1)+b(F^*h)_p(v,w_2)$$</div>两个变量分别线性，故拉回式是双线性型。
<h4>第5步：交换两个输入检验对称</h4>回忆：黎曼度量 \(h\) 满足 \(h_q(a,b)=h_q(b,a)\)。<div class="eq">$$(F^*h)_p(v,w)=h(dF_pv,dF_pw)=h(dF_pw,dF_pv)=(F^*h)_p(w,v)$$</div>拉回式因此对称。
<h4>第6步：选坐标使光滑性成为函数计算</h4>回忆：若 \(x^i\) 是源坐标、\(y^a\) 是目标坐标，则 \(dF_p(\partial_i)=\partial_iF^a\,\partial_{y^a}\)。<div class="eq">$$F^a=y^a\circ F,\qquad dF_p(\partial_{x^i})=\sum_a\frac{\partial F^a}{\partial x^i}(p)\,\partial_{y^a}|_{F(p)}$$</div>微分的坐标系数就是映射分量的偏导数。
<h4>第7步：逐分量代入目标度量</h4>回忆：令 \(h_{ab}(q)=h_q(\partial_{y^a},\partial_{y^b})\)，再用双线性展开。<div class="eq">$$(F^*h)_{ij}(p)=\sum_{a,b}h_{ab}(F(p))\,\frac{\partial F^a}{\partial x^i}(p)\frac{\partial F^b}{\partial x^j}(p)$$</div>这就是原题所用的拉回度量坐标公式。
<h4>第8步：从坐标公式验证光滑</h4>回忆：光滑映射的分量和一阶偏导光滑，度量的分量 \(h_{ab}\) 也光滑。<div class="eq">$$(F^*h)_{ij}=\sum_{a,b}(h_{ab}\circ F)(\partial_iF^a)(\partial_jF^b)\in C^\infty$$</div>有限个光滑函数的乘积与和仍光滑，且拉回定义与坐标无关。
<h4>第9步：把非零向量放入浸入条件</h4>回忆：浸入的定义是每一点 \(dF_p\) 单射，故它的核只有零向量。<div class="eq">$$v\ne0\quad\Longrightarrow\quad v\notin\ker dF_p\quad\Longrightarrow\quad dF_pv\ne0$$</div>正定性所需的非零输入在推前后仍非零。
<h4>第10步：将非零像代入目标度量</h4>回忆：\(h\) 正定意味着任意非零 \(z\in T_{F(p)}N\) 满足 \(h(z,z)>0\)。<div class="eq">$$(F^*h)_p(v,v)=h_{F(p)}(dF_pv,dF_pv)>0\qquad(v\ne0)$$</div>浸入条件在这里真正发挥作用：它保住严格大于零。
<h4>第11步：检验非浸入时会发生什么</h4>回忆：若 \(dF_p\) 不单射，则有非零 \(v\in\ker dF_p\)。<div class="eq">$$(F^*h)_p(v,v)=h_{F(p)}(0,0)=0\qquad(v\ne0)$$</div>因此一般光滑映射的拉回只是半正定型，在该点退化。
<h4>第12步：合并定义中的全部条件</h4>回忆：第3至5步给双线性和对称，第8步给光滑，第10步给正定。<div class="eq">$$F\text{ 是浸入}\quad\Longrightarrow\quad F^*h\in\Gamma(S^2T^*M),\quad (F^*h)_p(v,v)>0\ (v\ne0)$$</div>四项条件齐备，原题得证。
<div class="keybox">$$\boxed{F:M\to N\text{ 为浸入}\ \Longrightarrow\ F^*h\text{ 是 }M\text{ 上的黎曼度量}}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>先用微分把切向量送到目标空间；单射保证非零向量不会被压成零。</div>`
  },
  "r10": {
    0: L`<h4>第1步：说明原题的全局版本与记号</h4>回忆：测地球 \(B(p,r)=\{q:d(p,q)<r\}\)；标准全局比较定理把 \(M^n\) 取为完备流形。<div class="eq">$$K_M(\sigma)\ge c\quad\text{对每个截面 }\sigma,\qquad V_c(r):=\operatorname{Vol}_{M_c^n}(B_c(r))$$</div>以下证明完备情形；若缺少完备性，必须另行限定可用的测地极坐标范围。
<h4>第2步：固定测地球中心和一个初始方向</h4>回忆：指数映射把切向量 \(t	heta\) 送到初速度为 \(	heta\) 的测地线在时刻 \(t\) 的点。<div class="eq">$$\theta\in S_pM,\qquad \gamma_\theta(t)=\exp_p(t\theta),\qquad |\dot\gamma_\theta(0)|=1$$</div>球体积可以按方向 \(	heta\) 和径向距离 \(t\) 拆开积分。
<h4>第3步：回忆曲率下界的径向意义</h4>回忆：沿测地线的 Jacobi 方程为 \(J^{\prime\prime}+R(J,\dot\gamma)\dot\gamma=0\)。<div class="eq">$$\langle R(J,\dot\gamma)\dot\gamma,J\rangle=K(J,\dot\gamma)|J|^2\ge c|J|^2\quad(J\perp\dot\gamma)$$</div>正曲率使邻近径向测地线更早聚拢，这是后面比较体积元的来源。
<h4>第4步：取法向初值的正交基</h4>回忆：\(T_pM\) 的 \(	heta\) 正交补维数为 \(n-1\)。<div class="eq">$$\theta^\perp=\operatorname{span}\{e_1,\ldots,e_{n-1}\},\qquad \langle e_i,e_j\rangle=\delta_{ij}$$</div>这些基向量分别标记改变初始方向的 \(n-1\) 个角向自由度。
<h4>第5步：构造角向 Jacobi 场</h4>回忆：改变测地线初速度得到的变分场满足 Jacobi 方程。<div class="eq">$$J_i(0)=0,\qquad D_tJ_i(0)=e_i,\qquad D_t^2J_i+R(J_i,\dot\gamma)\dot\gamma=0$$</div>每个 \(J_i(t)\) 描述一个小角度变化在半径 \(t\) 处张开的长度。
<h4>第6步：把 Jacobi 场认作指数映射的微分</h4>回忆：对 \(\exp_p(t	heta)\) 沿单位方向球变化，导数就是相应测地变分场。<div class="eq">$$d(\exp_p)_{t\theta}(t e_i)=J_i(t)$$</div>这样角向体积伸缩可以用 \(J_1,\ldots,J_{n-1}\) 的体积来算。
<h4>第7步：写出角向 Gram 行列式</h4>回忆：一组向量张成的平行多面体体积等于其 Gram 行列式的平方根。<div class="eq">$$A(t,\theta)=\sqrt{\det\bigl(\langle J_i(t),J_j(t)\rangle\bigr)_{1\le i,j\le n-1}}$$</div>径向单位向量与这些角向量正交，所以 \(A\) 正是极坐标体积密度。
<h4>第8步：从测地极坐标写出体积元</h4>回忆：径向长度元是 \(dt\)，角向基的体积伸缩由第7步给出。<div class="eq">$$dV_g=A(t,\theta)\,dt\,d\theta$$</div>这里 \(d	heta\) 是单位球 \(S_pM\) 的标准角度测度。
<h4>第9步：定义常曲率模型的径向函数</h4>回忆：模型 Jacobi 方程是标量常系数方程 \(s_c^{\prime\prime}+c s_c=0\)，初值 \(s_c(0)=0,s_c^{\prime}(0)=1\)。<div class="eq">$$s_c(t)=\begin{cases}\sin(\sqrt c\,t)/\sqrt c,&c>0,\\t,&c=0,\\\sinh(\sqrt{-c}\,t)/\sqrt{-c},&c<0.\end{cases}$$</div>三种表达都满足相同初值，描述模型空间的径向张开速度。
<h4>第10步：直接核对模型方程</h4>回忆：对 \(c>0\)，\(s_c^{\prime}=\cos(\sqrt c\,t)\)；对 \(c<0\)，\(s_c^{\prime}=\cosh(\sqrt{-c}\,t)\)。<div class="eq">$$s_c^{\prime\prime}(t)=-c\,s_c(t),\qquad s_c(0)=0,\quad s_c^{\prime}(0)=1$$</div>所以常曲率模型中相同初始角速度的 Jacobi 场长为 \(s_c(t)\)。
<h4>第11步：确定比较可用的径向区间</h4>回忆：从 \(p\) 出发的单位速测地线在切时刻 \(\ell(	heta)\) 前保持最短，也没有共轭点。<div class="eq">$$0<t<\ell(\theta),\qquad \gamma_\theta(t)\in B(p,\ell(\theta))$$</div>我们只在这个区间使用 Rauch；切集之后可能一地多方向，不能重复计数。
<h4>第12步：明确所用的 Rauch 比较输入</h4>回忆：Rauch 比较定理说曲率不低于模型时，同样初值的法向 Jacobi 场增长不超过模型场，直至第一个共轭点。<div class="eq">$$K_M\ge c\quad\Longrightarrow\quad |J_i(t)|\le s_c(t)\,|e_i|=s_c(t)\quad(0<t<\ell(\theta))$$</div>这是证明中真正调用的非初等比较定理；初值和有效区间已逐项对齐。
<h4>第13步：用 Gram 不等式控制体积密度</h4>回忆：Hadamard 行列式不等式给 \(\det(\langle v_i,v_jangle)\le\prod_i|v_i|^2\)。<div class="eq">$$A(t,\theta)\le\prod_{i=1}^{n-1}|J_i(t)|\le s_c(t)^{n-1}$$</div>即使各 Jacobi 场不互相正交，也得到所需的体积元上界。
<h4>第14步：单独写出模型的体积密度</h4>回忆：常曲率空间各角向 Jacobi 场为 \(s_c(t)\) 乘平行正交基。<div class="eq">$$\langle J_i^c,J_j^c\rangle=s_c(t)^2\delta_{ij},\qquad A_c(t)=\sqrt{\det(s_c(t)^2I_{n-1})}=s_c(t)^{n-1}$$</div>模型体积密度正好等于上一步的上界。
<h4>第15步：处理正曲率模型的径向终点</h4>回忆：若 \(c>0\)，常曲率 \(c\) 的球面从一点到反极点的距离为 \(\pi/\sqrt c\)。<div class="eq">$$T_c=\begin{cases}\pi/\sqrt c,&c>0,\\+\infty,&c\le0.\end{cases}\qquad s_c(t)\ge0\ (0\le t\le T_c)$$</div>模型球半径超过 \(T_c\) 后就是整个模型球面，不再继续按正弦周期积分。
<h4>第16步：说明原流形的最短径向也不越过终点</h4>回忆：正曲率下的 Rauch 比较使法向 Jacobi 场至迟在模型反极点时出现共轭点；含共轭点后的测地段不再最短。<div class="eq">$$c>0\quad\Longrightarrow\quad \ell(\theta)\le T_c=\pi/\sqrt c$$</div>此处也可由 \(K\ge c\Rightarrow\operatorname{Ric}\ge(n-1)c\) 和 Bonnet–Myers 定理得到。
<h4>第17步：把切时刻放入积分上限</h4>回忆：完备流形上，除体积为零的切集外，测地极坐标到球内为一一对应。<div class="eq">$$\operatorname{Vol}(B(p,r))=\int_{S_pM}\int_0^{\min\{r,\ell(\theta)\}}A(t,\theta)\,dt\,d\theta$$</div>截到切时刻可避免把同一点用多条测地线重复算入。
<h4>第18步：把逐点密度不等式代入积分</h4>回忆：被积函数均非负，且第13步给 \(A(t,	heta)\le s_c(t)^{n-1}\)。<div class="eq">$$\operatorname{Vol}(B(p,r))\le\int_{S_pM}\int_0^{\min\{r,\ell(\theta)\}}s_c(t)^{n-1}\,dt\,d\theta$$</div>体积比较已经化为一个只含模型径向函数的不等式。
<h4>第19步：扩张积分区间到模型半径</h4>回忆：对 \(c>0\) 用第16步，对 \(c\le0\) 有 \(T_c=+\infty\)。<div class="eq">$$\min\{r,\ell(\theta)\}\le\min\{r,T_c\}\quad\Longrightarrow\quad\operatorname{Vol}(B(p,r))\le\int_{S_pM}\int_0^{\min\{r,T_c\}}s_c(t)^{n-1}\,dt\,d\theta$$</div>放大非负函数的积分区间只会让右边增加。
<h4>第20步：计算方向球的总角度</h4>回忆：任意 \(n\) 维内积空间的单位球与标准 \(S^{n-1}\) 等距，面积记为 \(\omega_{n-1}\)。<div class="eq">$$\int_{S_pM}d\theta=\omega_{n-1}$$</div>右端的角向积分成为一个固定常数。
<h4>第21步：认出常曲率空间的球体积</h4>回忆：第14步给模型体积密度 \(s_c(t)^{n-1}\)。<div class="eq">$$V_c(r)=\omega_{n-1}\int_0^{\min\{r,T_c\}}s_c(t)^{n-1}\,dt$$</div>这与第19至20步所得上界完全相同。
<h4>第22步：核对零曲率模型的熟悉情形</h4>回忆：当 \(c=0\) 时 \(s_0(t)=t\)。<div class="eq">$$V_0(r)=\omega_{n-1}\int_0^r t^{n-1}dt=\frac{\omega_{n-1}}n r^n$$</div>模型上界退化为欧氏 \(n\) 维球的体积。
<h4>第23步：合并比较链并给出原题结论</h4>回忆：第17步是精确体积式，第18、19步逐次放大右端，第21步认出模型体积。<div class="eq">$$\operatorname{Vol}(B(p,r))\le\omega_{n-1}\int_0^{\min\{r,T_c\}}s_c(t)^{n-1}dt=V_c(r)$$</div>曲率下界通过 Jacobi 场控制每一条径向的体积张开，积分后给出体积上界。
<div class="keybox">$$\boxed{K\ge c\quad\Longrightarrow\quad\operatorname{Vol}(B(p,r))\le V_c(r)\quad(M\text{ 完备})}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>径向 Jacobi 场在较大曲率下张开得不超过模型；先比体积密度，再沿方向与半径积分。</div>`
  },
  "r11": {
    0: L`<h4>第1步：逐字写出所需的坐标形式</h4>回忆：二维度量在一般坐标中写成 \(E\,ds^2+2F\,ds\,dt+G\,dt^2\)，正定要求 \(E>0\) 且 \(EG-F^2>0\)。<div class="eq">$$g=e^{2\lambda(x,y)}(dx^2+dy^2)$$</div>目标是构造新的局部坐标 \((x,y)\)，使混合项为零且两个平方项系数相同。
<h4>第2步：在一点附近选择定向</h4>回忆：任何二维流形在足够小的坐标圆盘上都可选定向，即使整个流形不可定向。<div class="eq">$$dV_g>0\quad\text{在选定正向基上},\qquad *:T^*M\to T^*M$$</div>局部定向使我们能定义把余向量旋转九十度的 Hodge 星算子。
<h4>第3步：取法坐标控制一点的度量</h4>回忆：在 \(p\) 的法坐标 \((s,t)\) 中，度量在中心等于单位矩阵且一阶导数为零。<div class="eq">$$g_{ij}(p)=\delta_{ij},\qquad \partial_k g_{ij}(p)=0$$</div>此坐标让后面构造非临界调和函数的误差在缩小圆盘时趋零。
<h4>第4步：从一个非零微分的函数起步</h4>回忆：法坐标函数 \(s\) 的微分在中心就是坐标余基。<div class="eq">$$ds_p(\partial_s)=1,\qquad ds_p\ne0$$</div>我们将修正 \(s\) 为调和函数，同时保住其非零微分。
<h4>第5步：用度量定义写出 Laplace 算子</h4>回忆：取符号约定 \(\Delta_g=\operatorname{div}_g\operatorname{grad}_g\)，体积密度 \(ho=\sqrt{\det(g_{ij})}\)。<div class="eq">$$\Delta_g f=\rho^{-1}\partial_i(\rho g^{ij}\partial_jf)$$</div>这是要代入坐标函数和求解修正方程的椭圆算子。
<h4>第6步：代入法坐标函数计算中心误差</h4>回忆：\(\partial_j s=\delta_j^1\)，法坐标在中心有 \(\partial g_{ij}=0\)。<div class="eq">$$\Delta_g s=\rho^{-1}\partial_i(\rho g^{i1}),\qquad (\Delta_gs)(p)=0$$</div>因此把圆盘缩小时，\(\Delta_g s\) 在圆盘上的上界可取得很小。
<h4>第7步：明确非初等的局部解析输入</h4>回忆：光滑一致椭圆算子的局部 Dirichlet 问题有光滑解，并有缩放后的内部梯度估计。<div class="eq">$$\Delta_g u=-\Delta_gs\ \text{于 }D_\varepsilon,\qquad u|_{\partial D_\varepsilon}=0,\qquad |du_p|\le C\varepsilon\sup_{D_\varepsilon}|\Delta_gs|$$</div>这一椭圆方程存在与估计是证明中引用的标准解析定理，不能仅由代数代入得到。
<h4>第8步：选择小圆盘使修正足够小</h4>回忆：第6步给 \((\Delta_gs)(p)=0\)，故光滑性给 \(\sup_{D_arepsilon}|\Delta_gs|	o0\)。<div class="eq">$$|du_p|\le C\varepsilon\sup_{D_\varepsilon}|\Delta_gs|<\tfrac12|ds_p|$$</div>当 \(arepsilon\) 足够小时，修正不会抵消原函数的非零微分。
<h4>第9步：得到非临界调和函数</h4>回忆：线性算子满足 \(\Delta_g(s+u)=\Delta_gs+\Delta_gu\)。<div class="eq">$$x:=s+u,\qquad \Delta_gx=0,\qquad |dx_p|\ge |ds_p|-|du_p|>0$$</div>我们已在 \(p\) 附近造出梯度不消失的调和函数。
<h4>第10步：再缩小邻域保持非零微分</h4>回忆：光滑一形式的范数连续。<div class="eq">$$|dx_p|>0\quad\Longrightarrow\quad |dx_q|>0\quad(q\in U\text{，取足够小的 }U)$$</div>之后所有变换都在这个小而可缩的邻域 \(U\) 上进行。
<h4>第11步：用正交余标架定义星算子</h4>回忆：在正定向正交余标架 \((\omega^1,\omega^2)\) 中，Hodge 星由九十度旋转规定。<div class="eq">$$*\omega^1=\omega^2,\qquad *\omega^2=-\omega^1,\qquad *^2=-I$$</div>星算子把每个余向量转为等长的垂直余向量。
<h4>第12步：逐项计算星算子的几何作用</h4>回忆：把 \(dx=a\omega^1+b\omega^2\) 代入第11步的线性规则。<div class="eq">$$*dx=a\omega^2-b\omega^1,\quad\langle dx,*dx\rangle_g=a(-b)+ba=0,\quad |*dx|_g^2=a^2+b^2=|dx|_g^2$$</div>因此 \(dx\) 与 \(*dx\) 正交且等长。
<h4>第13步：把调和性转成闭形式</h4>回忆：二维微分形式恒等式在 \(\Delta_g=\operatorname{div}\operatorname{grad}\) 约定下是 \(d*df=(\Delta_g f)dV_g\)。<div class="eq">$$d(*dx)=(\Delta_gx)dV_g=0\cdot dV_g=0$$</div>要找第二个坐标，只需把这个闭一形式积分。
<h4>第14步：用 Poincaré 引理积分第二坐标</h4>回忆：可缩邻域上的闭一形式必为某光滑函数的微分。<div class="eq">$$d(*dx)=0\quad\Longrightarrow\quad \exists y\in C^\infty(U):dy=*dx$$</div>函数 \(y\) 的加法常数无关紧要；它沿与 \(x\) 梯度正交的方向变化。
<h4>第15步：计算两个函数的 Jacobian</h4>回忆：若 \(dx=a\omega^1+b\omega^2\)，则 \(dy=-b\omega^1+a\omega^2\)。<div class="eq">$$dx\wedge dy=(a\omega^1+b\omega^2)\wedge(-b\omega^1+a\omega^2)=(a^2+b^2)\omega^1\wedge\omega^2=|dx|_g^2dV_g$$</div>由于第10步给 \(|dx|_g>0\)，这个二形式处处非零。
<h4>第16步：用反函数定理确认它们真是坐标</h4>回忆：二维映射的 Jacobian 非零时，它在该点附近是局部微分同胚。<div class="eq">$$dx\wedge dy\ne0\quad\Longrightarrow\quad q\longmapsto(x(q),y(q))\text{ 是局部坐标映射}$$</div>所以 \((x,y)\) 不只是两个函数，确实能作为新坐标。
<h4>第17步：计算逆度量的对角项</h4>回忆：逆度量在余基上的值为 \(g^{ij}=\langle dx^i,dx^jangle_g\)。<div class="eq">$$g^{xx}=|dx|_g^2=:q>0,\qquad g^{yy}=|dy|_g^2=|*dx|_g^2=q$$</div>新坐标中两个余基的平方长度相同。
<h4>第18步：计算逆度量的混合项</h4>回忆：第12步已逐项算出星旋转与原余向量垂直。<div class="eq">$$g^{xy}=\langle dx,dy\rangle_g=\langle dx,*dx\rangle_g=0$$</div>新坐标中的混合项消失。
<h4>第19步：把逆矩阵真正求逆</h4>回忆：矩阵 \(qI_2\) 的逆是 \(q^{-1}I_2\)。<div class="eq">$$(g^{ij})=\begin{pmatrix}q&0\\0&q\end{pmatrix}\quad\Longrightarrow\quad(g_{ij})=\begin{pmatrix}q^{-1}&0\\0&q^{-1}\end{pmatrix}$$</div>因此正向度量的两个对角系数也相同，而交叉系数为零。
<h4>第20步：定义共形因子并写出线元</h4>回忆：\(q>0\) 且光滑，所以 \(\log q\) 光滑。<div class="eq">$$\lambda=-\tfrac12\log q,\qquad e^{2\lambda}=q^{-1},\qquad ds^2=e^{2\lambda}(dx^2+dy^2)$$</div>所求的等温坐标形式已经从构造和矩阵求逆中得到。
<h4>第21步：对照原题的一般系数</h4>回忆：一般二维线元写成 \(E\,dx^2+2F\,dx\,dy+G\,dy^2\)。<div class="eq">$$E=e^{2\lambda},\qquad F=0,\qquad G=e^{2\lambda}$$</div>这逐项满足等温坐标的三个系数条件。
<h4>第22步：解释局部性与二维特殊性</h4>回忆：二维里一个非零余向量经星旋转就给另一个等长正交方向，且调和性使它可积分。<div class="eq">$$dy=*dx,\qquad dx\wedge dy=|dx|_g^2dV_g>0$$</div>构造只要求点附近的小圆盘，不要求整个流形有一张全局等温坐标图。
<h4>第23步：合并解析输入与代入计算</h4>回忆：第7步的椭圆存在定理给调和 \(x\)，第13至20步用外微分、星算子和逆矩阵完成坐标构造。<div class="eq">$$\forall p\in M^2\ \exists U\ni p,\ (x,y):U\to\mathbb R^2,\quad g|_U=e^{2\lambda}(dx^2+dy^2)$$</div>原题的局部存在性得证；深层部分已明确定位为调和函数的局部存在。
<div class="keybox">$$\boxed{\dim M=2\quad\Longrightarrow\quad\text{局部有 }g=e^{2\lambda}(dx^2+dy^2)}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>先造一个微分不为零的调和函数，再把它的微分旋转九十度并积分成第二个坐标。</div>`
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
    0: L`<h4>第1步：明确联络要满足什么</h4><p>回忆：仿射联络对第一变量为函数线性，对第二变量满足乘积法则。</p><p><div class="eq">$$\nabla_{fX}Y=f\nabla_XY,\qquad\nabla_X(fY)=f\nabla_XY+(Xf)Y$$</div>我们要在所有坐标片上构造同一个满足这两式的运算。</p><p>因此，目标是拼接局部联络。</p><h4>第2步：从定义推出局部坐标公式</h4>
写 \(X=X^i\partial_i\)、\(Y=Y^j\partial_j\)。先对第二变量反复使用 Leibniz 法则，再对第一变量使用函数线性，得到 <div class="eq">$$\nabla_XY=X^i\bigl(\partial_iY^k+\Gamma^k_{ij}Y^j\bigr)\partial_k.$$</div>所以只要给定光滑的 \(\Gamma^k_{ij}\)，就能在该坐标片上定义联络。
<h4>第3步：检验局部零系数的含义</h4>
在一张固定坐标片令全部 \(\Gamma^k_{ij}=0\)，上一式变为 <div class="eq">$$\nabla^{(x)}_XY=X^i\partial_iY^k\,\partial_k.$$</div>这是该坐标标架下的零系数联络；只在这张片上先行定义。
<h4>第4步：选择局部坐标覆盖</h4><p>回忆：光滑流形按通常定义是 Hausdorff、第二可数，因而仿紧致。</p><p>取局部有限的坐标覆盖 \(\{U_lpha\}\)；局部有限指每点附近只碰到有限多个坐标片。</p><p>因此，稍后求和在每个点附近都是有限和。</p><h4>第5步：在每张坐标片定义简单联络</h4><p>回忆：坐标向量场 \(\partial_i\) 构成该片的切丛标架。</p><p>在 \(U_lpha\) 中规定 \(
abla^lpha_{\partial_i}\partial_j=0\)，再令 <div class="eq">$$\nabla^\alpha_XY=X(Y^j)\partial_j,\quad X=X^i\partial_i,\;Y=Y^j\partial_j$$</div>这就是该坐标中的普通方向导数。</p><p>因此，得到一个局部仿射联络。</p><h4>第6步：检查第一变量的函数线性</h4><p>回忆：函数乘向量场会把方向导数乘同一个函数。</p><p><div class="eq">$$\nabla^\alpha_{fX}Y=(fX)(Y^j)\partial_j=fX(Y^j)\partial_j=f\nabla^\alpha_XY$$</div></p><p>因此，局部运算满足第一条公理。</p><h4>第7步：检查第二变量的乘积法则</h4><p>回忆：普通导数满足 \(X(fY^j)=(Xf)Y^j+fX(Y^j)\)。</p><p><div class="eq">$$\nabla^\alpha_X(fY)=X(fY^j)\partial_j=(Xf)Y+f\nabla^\alpha_XY$$</div></p><p>因此，局部运算满足第二条公理。</p><h4>第8步：解释不同局部零系数为何不能直接粘合</h4>
设另一坐标为 \(y^a=y^a(x)\)。链式法则给出 <div class="eq">$$\nabla^{(x)}_{\partial_{y^a}}\partial_{y^b}=\frac{\partial x^i}{\partial y^a}\frac{\partial^2x^j}{\partial x^i\partial y^b}\,\partial_{x^j},$$</div>一般不为零。两个坐标片各自取零系数所得联络在交叠区未必相等，因此需要单位分解加权。
<h4>第9步：取从属单位分解</h4><p>回忆：仿紧致流形上的单位分解定理给出非负光滑函数，支集落在相应坐标片内。</p><p>选 \(ho_lpha\geq0\)、\(\operatorname{supp}ho_lpha\subset U_lpha\)，且 <div class="eq">$$\sum_\alpha\rho_\alpha(p)=1\quad(p\in M)$$</div>这是本证明唯一引用的全局微分拓扑定理。</p><p>因此，系数在每点相加为一。</p><h4>第10步：解释局部项如何全局求和</h4><p>回忆：支集在 \(U_lpha\) 内，故乘上 \(ho_lpha\) 的局部表达式可以零延拓。</p><p>对全局向量场 \(X,Y\) 定义 <div class="eq">$$\nabla_XY:=\sum_\alpha\rho_\alpha\nabla^\alpha_{X|_{U_\alpha}}Y|_{U_\alpha}$$</div>局部有限性保证这不是无穷项的收敛问题。</p><p>因此，得到全局光滑向量场。</p><h4>第11步：确认局部有限和的光滑性</h4>
对任意 \(p\)，可取邻域 \(W\) 只与有限个权函数的支集相交。在 \(W\) 内，\(\nabla_XY\) 是这些 \(\rho_\alpha\nabla^\alpha_XY\) 的有限和；每一项在自己的支集边界已光滑零延拓，因此和为光滑向量场。
<h4>第12步：检验全局第一变量线性</h4><p>回忆：每个局部联络已满足第一变量的函数线性。</p><p><div class="eq">$$\nabla_{fX}Y=\sum_\alpha\rho_\alpha f\nabla^\alpha_XY=f\sum_\alpha\rho_\alpha\nabla^\alpha_XY=f\nabla_XY$$</div></p><p>因此，第一条公理在全局成立。</p><h4>第13步：检验全局第二变量的乘积法则</h4><p>回忆：每个局部联络对第二变量的乘积法则会产生一项 \((Xf)Y\)。</p><p><div class="eq">$$\nabla_X(fY)=\sum_\alpha\rho_\alpha[f\nabla^\alpha_XY+(Xf)Y]=f\nabla_XY+(Xf)Y\sum_\alpha\rho_\alpha$$</div></p><p>因此，只差代入单位分解之和。</p><h4>第14步：逐项核对双线性中的常数</h4>
对常数 \(a,b\in\mathbb R\)，各局部运算满足 <div class="eq">$$\nabla^\alpha_{aX+bZ}Y=a\nabla^\alpha_XY+b\nabla^\alpha_ZY,\qquad\nabla^\alpha_X(aY+bZ)=a\nabla^\alpha_XY+b\nabla^\alpha_XZ.$$</div>乘权后逐项相加，故全局运算也满足实双线性。
<h4>第15步：把单位分解之和代为一</h4><p>回忆：单位分解满足 \(\sum_lphaho_lpha=1\)。</p><p><div class="eq">$$\nabla_X(fY)=f\nabla_XY+(Xf)Y$$</div></p><p>因此，第二条公理也成立。</p><h4>第16步：说明坐标选择为何不妨碍存在性</h4><p>回忆：局部平坦联络在重叠区一般并不相同，但加权和仍满足联络公理。</p><p>构造只要求存在一个联络；不同坐标覆盖或单位分解可产生不同联络，定理不主张唯一性。</p><p>因此，全局存在性已经证明。</p><h4>第17步：点明适用假设</h4><p>回忆：单位分解依赖通常的仿紧致流形假设。</p><p>若把“光滑流形”定义得不含第二可数或仿紧致条件，应额外加上仿紧致假设；此处采用教材惯例。</p><p>因此，定理的假设与构造完全对齐。</p><h4>第18步：用两个权重直接核查 Leibniz 系数</h4>
在仅有两个权重非零的一点，额外项具体为 <div class="eq">$$\rho_1(Xf)Y+\rho_2(Xf)Y=(\rho_1+\rho_2)(Xf)Y=(Xf)Y.$$</div>一般有限多项的计算完全相同，关键是权重和等于一。
<h4>第19步：解释为何没有权重导数</h4>
定义是 \(\rho_\alpha\nabla^\alpha_XY\) 的加权和，并未对 \(\rho_\alpha\) 作协变导数。因此展开 \(\nabla_X(fY)\) 时只出现 \((Xf)Y\)，不出现 \((X\rho_\alpha)Y\)。若把权重放进被求导的第二变量，才会出现那种额外项。
<h4>第20步：对照联络之差说明非唯一性</h4>
若 \(\nabla,\widetilde\nabla\) 都是联络，令 \(A(X,Y)=\nabla_XY-\widetilde\nabla_XY\)。两次 Leibniz 展开中的 \((Xf)Y\) 相消，故 <div class="eq">$$A(X,fY)=fA(X,Y),\qquad A(fX,Y)=fA(X,Y).$$</div>于是任取 \((1,2)\) 型张量 \(A\)，\(\nabla+A\) 又是联络；存在性并不包含唯一性。
<div class="keybox">$$\boxed{\exists\,\nabla\text{ 为 }M\text{ 上的仿射联络}}$$</div><div class="memobox"><strong>一句话记忆：</strong>局部先按坐标求导，再用和为一的光滑权重拼成全局规则。</div>`
  },
  "r18": {
    0: L`<h4>第1步：写下目标与两条公理</h4><p>回忆：无挠是 \(
abla_XY-
abla_YX=[X,Y]\)；度量相容是 \(Xg(Y,Z)=g(
abla_XY,Z)+g(Y,
abla_XZ)\)。</p><p>我们要从这两式推出联络的唯一公式，再由该公式构造联络。</p><p>因此，证明分成唯一性和存在性。</p><h4>第2步：对第一组向量写度量相容式</h4><p>回忆：对 \(X,Y,Z\) 直接使用度量相容。</p><p><div class="eq">$$Xg(Y,Z)=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$$</div></p><p>因此，得到第一个等式。</p><h4>第3步：循环换位得到第二式</h4><p>回忆：把上式的 \((X,Y,Z)\) 换成 \((Y,Z,X)\)。</p><p><div class="eq">$$Yg(Z,X)=g(\nabla_YZ,X)+g(Z,\nabla_YX)$$</div></p><p>因此，得到第二个等式。</p><h4>第4步：再换位得到第三式</h4><p>回忆：把三元组换成 \((Z,X,Y)\)。</p><p><div class="eq">$$Zg(X,Y)=g(\nabla_ZX,Y)+g(X,\nabla_ZY)$$</div></p><p>因此，得到将被减去的等式。</p><h4>第5步：把前两式相加再减第三式</h4><p>回忆：内积对称，故可把向量放到所需的一侧。</p><p><div class="eq">$$Xg(Y,Z)+Yg(Z,X)-Zg(X,Y)=g(\nabla_XY,Z)+g(\nabla_XZ,Y)+g(\nabla_YZ,X)+g(\nabla_YX,Z)-g(\nabla_ZX,Y)-g(\nabla_ZY,X)$$</div></p><p>因此，右边有两项含 \(
abla_XY\) 的潜在线索。</p><h4>第6步：用无挠性替换第一对混合项</h4><p>回忆：无挠给出 \(
abla_XZ-
abla_ZX=[X,Z]\)。</p><p><div class="eq">$$g(\nabla_XZ,Y)-g(\nabla_ZX,Y)=g([X,Z],Y)$$</div></p><p>因此，这两项化为一个 Lie 括号项。</p><h4>第7步：替换第二对混合项</h4><p>回忆：同一个无挠公式用于 \(Y,Z\)。</p><p><div class="eq">$$g(\nabla_YZ,X)-g(\nabla_ZY,X)=g([Y,Z],X)$$</div></p><p>因此，又消去一对协变导数。</p><h4>第8步：把剩余的 \(
abla_YX\) 换掉</h4><p>回忆：无挠给出 \(
abla_YX=
abla_XY-[X,Y]\)。</p><p><div class="eq">$$g(\nabla_YX,Z)=g(\nabla_XY,Z)-g([X,Y],Z)$$</div></p><p>因此，右边现在恰有两个 \(g(
abla_XY,Z)\)。</p><h4>第9步：整理成 Koszul 公式</h4><p>回忆：把前面三个替换代回相加相减式。</p><p><div class="eq">$$2g(\nabla_XY,Z)=Xg(Y,Z)+Yg(Z,X)-Zg(X,Y)+g([X,Y],Z)-g([X,Z],Y)-g([Y,Z],X)$$</div></p><p>因此，联络若存在，其内积必须由右边决定。</p><h4>第10步：从非退化性得到唯一性</h4><p>回忆：黎曼度量在每点是非退化内积：若 \(g(U,Z)=g(V,Z)\) 对所有 \(Z\) 成立，则 \(U=V\)。</p><p>若两个联络满足公理，它们的 Koszul 右边相同，所以在每点对所有 \(Z\) 的内积相同。</p><p>因此，两个联络逐点相同。</p><h4>第11步：把公式反过来当定义</h4><p>回忆：每个线性泛函 \(Z\mapsto F(Z)\) 都有唯一度量对偶向量。</p><p>令 \(F(X,Y,Z)\) 为 Koszul 右边；先检查它对 \(Z\) 为函数线性，再定义 <div class="eq">$$2g(\nabla_XY,Z):=F(X,Y,Z)$$</div>这一步是存在性构造。</p><p>因此，右边若为一形式，就能定义 \(
abla_XY\)。</p><h4>第12步：逐项验证测试变量的函数线性</h4>
令 \(F(X,Y,Z)\) 为 Koszul 右边。代入 \(fZ\) 时，\(Xg(Y,fZ)\) 多出 \((Xf)g(Y,Z)\)，而 \(-g([X,fZ],Y)\) 多出它的相反数；\(Yg(fZ,X)\) 多出的 \((Yf)g(Z,X)\) 又被 \(-g([Y,fZ],X)\) 抵消。因此 <div class="eq">$$F(X,Y,fZ)=fF(X,Y,Z).$$</div>这保证 \(Z\mapsto F(X,Y,Z)\) 逐点是一形式。
<h4>第13步：逐项验证第一变量的函数线性</h4>
代入 \(fX\)：\(Yg(Z,fX)\) 带来 \((Yf)g(Z,X)\)，被 \(g([fX,Y],Z)\) 的 \(-(Yf)g(X,Z)\) 抵消；\(-Zg(fX,Y)\) 带来 \(-(Zf)g(X,Y)\)，被 \(-g([fX,Z],Y)\) 的 \((Zf)g(X,Y)\) 抵消。故 <div class="eq">$$F(fX,Y,Z)=fF(X,Y,Z)\ \Longrightarrow\ \nabla_{fX}Y=f\nabla_XY.$$</div>
<h4>第14步：逐项验证第二变量的乘积法则</h4>
代入 \(fY\)：\(Xg(fY,Z)\) 和 \(g([X,fY],Z)\) 各贡献一份 \((Xf)g(Y,Z)\)；\(-Zg(X,fY)\) 的 \(-(Zf)g(X,Y)\) 与 \(-g([fY,Z],X)\) 的 \((Zf)g(Y,X)\) 相消。于是 <div class="eq">$$F(X,fY,Z)=fF(X,Y,Z)+2(Xf)g(Y,Z),$$</div>两边除以二并用度量非退化性，得到 \(\nabla_X(fY)=f\nabla_XY+(Xf)Y\)。
<h4>第15步：说明构造出的场是光滑的</h4><p>回忆：在局部坐标中，度量矩阵 \(g_{ij}\) 光滑且可逆。</p><p>由 \(g_{k\ell}(
abla_XY)^k=F(X,Y,\partial_\ell)/2\) 解线性方程，乘以光滑逆矩阵 \(g^{k\ell}\)，所得分量光滑。</p><p>因此，构造确实是光滑仿射联络。</p><h4>第16步：把两个 Koszul 式相加验证度量相容</h4>
分别写 \(F(X,Y,Z)\) 与 \(F(X,Z,Y)\)。其中 \(Yg(Z,X)\) 与 \(-Yg(X,Z)\) 抵消，\(-Zg(X,Y)\) 与 \(Zg(Y,X)\) 抵消；每个 Lie 括号项也与交换 \(Y,Z\) 后的对应项抵消，只剩两份 \(Xg(Y,Z)\)：<div class="eq">$$2g(\nabla_XY,Z)+2g(Y,\nabla_XZ)=2Xg(Y,Z).$$</div>除以二即 \(\nabla g=0\)。
<h4>第17步：把两个 Koszul 式相减验证无挠</h4>
从 \(F(X,Y,Z)\) 减去 \(F(Y,X,Z)\)：度量导数项逐对相消，\(g([X,Y],Z)-g([Y,X],Z)=2g([X,Y],Z)\)，其余括号项成对相消。因此 <div class="eq">$$2g(\nabla_XY-\nabla_YX,Z)=2g([X,Y],Z).$$</div>对所有 \(Z\) 成立，非退化性推出 \(T(X,Y)=0\)。
<h4>第18步：把 Koszul 公式放到坐标标架</h4><p>回忆：坐标向量场两两对易：\([\partial_i,\partial_j]=0\)。</p><p><div class="eq">$$2g_{k\ell}\Gamma^k_{ij}=\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij}$$</div></p><p>因此，坐标中的联络系数只由度量的一阶导数给出。</p><h4>第19步：用逆矩阵解出 Christoffel 符号</h4><p>回忆：逆度量满足 \(g^{m\ell}g_{k\ell}=\delta^m_k\)。</p><p><div class="eq">$$\Gamma^m_{ij}=\tfrac12g^{m\ell}(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij})$$</div></p><p>因此，得到了常用的局部计算公式。</p><h4>第20步：收束存在与唯一</h4><p>回忆：第十步给唯一；第十一至十七步给存在，坐标公式说明可计算。</p><p>故每个黎曼度量恰好确定一个无挠且度量相容的仿射联络。</p><p>因此，这就是 Levi-Civita 联络。</p><div class="keybox">$$\boxed{\exists!\,\nabla:\quad T^\nabla=0,\qquad\nabla g=0}$$</div><div class="memobox"><strong>一句话记忆：</strong>三次写出度量相容式，前两式相加减第三式，就把联络锁定为 Koszul 公式。</div>`
  },
  "r19": {
    0: L`<h4>第1步：定义沿曲线的平行性</h4><p>回忆：沿 \(\gamma:[a,b]	o M\) 的向量场 \(V(t)\in T_{\gamma(t)}M\) 平行是指 \(D_tV=0\)。</p><p>给定 \(V(a)=V_0\)，要证明整个紧参数区间上恰有一个解。</p><p>因此，问题转化为沿曲线的初值问题。</p><h4>第2步：限定曲线的正则性</h4>
以下取定义在紧区间 \([a,b]\) 上的分段 \(C^1\) 曲线，且每一光滑段的导数连续。于是坐标速度 \(\dot x^i(t)\) 在每段连续，线性 ODE 的系数也在每段连续；转折点处只要求沿曲线的向量值连续。
<h4>第3步：选一段位于坐标片中的曲线</h4><p>回忆：连续曲线在足够短的参数区间内落入一个坐标片。</p><p>写 \(\gamma(t)=(x^1(t),\dots,x^n(t))\)，\(V(t)=V^k(t)\partial_k|_{\gamma(t)}\)。</p><p>因此，未知量是 \(n\) 个分量 \(V^k(t)\)。</p><h4>第4步：从乘积法则算出沿曲线导数</h4>
把 \(V(t)=V^j(t)\partial_j|_{\gamma(t)}\) 对时间求协变导数：分量求导贡献 \(\dot V^k\partial_k\)，坐标基沿速度 \(\dot x^i\partial_i\) 的导数贡献 \(V^j\dot x^i\Gamma^k_{ij}\partial_k\)。两项相加就是下一步的分量式。
<h4>第5步：展开沿曲线的协变导数</h4><p>回忆：联络局部式为 \(
abla_{\partial_i}\partial_j=\Gamma^k_{ij}\partial_k\)。</p><p><div class="eq">$$D_tV=\left(\dot V^k+\Gamma^k_{ij}(\gamma(t))\dot x^iV^j\right)\partial_k$$</div></p><p>因此，平行条件变成分量方程。</p><h4>第6步：写成矩阵形式</h4><p>回忆：定义 \(A^k{}_j(t)=\Gamma^k_{ij}(\gamma(t))\dot x^i(t)\)。</p><p><div class="eq">$$\dot V(t)=-A(t)V(t),\qquad V(a)=V_0$$</div></p><p>因此，这是线性常微分方程组。</p><h4>第7步：核对方程确实满足局部唯一性条件</h4>
右端 \(F(t,v)=-A(t)v\) 对 \(v\) 是线性的。在任一紧小段上 \(\|A(t)\|\le C\)，故 <div class="eq">$$\|F(t,v)-F(t,w)\|\le C\|v-w\|.$$</div>这就是常微分方程初值定理要求的局部 Lipschitz 条件。
<h4>第8步：应用局部 ODE 定理</h4><p>回忆：连续矩阵系数的线性 ODE 对给定初值有唯一局部解。</p><p>\(\Gamma\) 光滑、\(\gamma\) 至少分段 \(C^1\)，所以在每个光滑段上 \(A(t)\) 连续。</p><p>因此，每小段有唯一平行场。</p><h4>第9步：用积分形式检查延拓</h4>
局部解满足 <div class="eq">$$V(t)=V(t_0)-\int_{t_0}^{t}A(s)V(s)\,ds.$$</div>若 \(A\) 在紧小段有界，Gronwall 估计使 \(V\) 有界；积分式还使它在小段端点有极限，可用该极限继续解下一段。
<h4>第10步：用基本矩阵核对不退化</h4>
对标准初值基逐列求解，得到基本矩阵 \(\Phi(t)\) 且 \(\Phi(t_0)=I\)。Jacobi 行列式公式给 <div class="eq">$$\frac{d}{dt}\det\Phi(t)=-\operatorname{tr}A(t)\det\Phi(t),\qquad\det\Phi(t)=\exp\!\left(-\int_{t_0}^{t}\operatorname{tr}A(s)\,ds\right)\ne0.$$</div>故每一坐标段的端点映射已经是线性同构。
<h4>第11步：说明线性解不会有限时刻爆炸</h4><p>回忆：线性方程满足 \(\|\dot V\|\leq\|A\|\|V\|\)。</p><p>在一张坐标片覆盖的紧时间段上，\(\|A(t)\|\leq C\)；Gronwall 不等式给 <div class="eq">$$\|V(t)\|\leq e^{C|t-t_0|}\|V(t_0)\|$$</div>所以分量保持有限。</p><p>因此，局部解能延伸到该小段末端。</p><h4>第12步：用有限个坐标段覆盖整条曲线</h4><p>回忆：紧区间的开覆盖有有限子覆盖；Lebesgue 数保证可划成有限个小段。</p><p>把 \([a,b]\) 分成 \(a=t_0<\cdots<t_N=b\)，使每个闭小段落在某坐标片中。</p><p>因此，整体延伸只需要有限次局部求解。</p><h4>第13步：写出重叠区的分量变换</h4>
若 \(y=y(x)\)，同一个几何向量在两套坐标中的分量满足 \(V^a_{(y)}=(\partial y^a/\partial x^k)V^k_{(x)}\)。沿 \(\gamma\) 求导时会出现 Jacobian 的导数；联络系数的坐标变换中恰有相应的二阶坐标导数项，两者抵消。因此两套分量 ODE 描述同一 \(D_tV=0\)。
<h4>第14步：在坐标交叠处拼接</h4><p>回忆：沿曲线的协变导数是坐标无关的。</p><p>第一段末值是下一段初值；两套坐标中的分量由切向量变换律对应，局部唯一性保证重叠处是同一向量场。</p><p>因此，得到全区间的存在性。</p><h4>第15步：证明全局唯一性</h4><p>回忆：同一初值的两解在第一小段相等。</p><p>归纳地，若两解在第 \(j\) 段末端相等，则在第 \(j+1\) 段以相同初值解同一线性 ODE，故仍相等。</p><p>因此，整个 \([a,b]\) 上解唯一。</p><h4>第16步：证明平行移动的线性</h4><p>回忆：线性 ODE 的解可叠加。</p><p>若 \(V,W\) 分别来自初值 \(v,w\)，则 \(cV+dW\) 满足同一方程且初值为 \(cv+dw\)。</p><p>因此，端点映射 \(P_\gamma\) 线性。</p><h4>第17步：核对常值曲线的端点映射</h4>
若 \(\gamma(t)\equiv p\)，则 \(\dot x^i=0\)，方程变为 \(\dot V^k=0\)。所以唯一解是 \(V(t)=V_0\)，即 <div class="eq">$$P_{\mathrm{const}_p}=\operatorname{id}_{T_pM}.$$</div>
<h4>第18步：核对分段连接的复合律</h4>
把曲线分为先走 \(\gamma_1\) 再走 \(\gamma_2\)。第一段的末向量正是第二段初值，由唯一性得到 <div class="eq">$$P_{\gamma_2*\gamma_1}=P_{\gamma_2}\circ P_{\gamma_1}.$$</div>这是平行移动沿路径逐段计算的精确表达。
<h4>第19步：说明端点映射可逆</h4><p>回忆：把曲线倒走 \(ar\gamma(t)=\gamma(a+b-t)\)。</p><p>倒走的初值问题唯一，先正走再倒走把每个初向量送回自身。</p><p>因此，\(P_{ar\gamma}=P_\gamma^{-1}\)。</p><h4>第20步：补充度量联络的特例</h4><p>回忆：若 \(
abla g=0\)，则沿曲线 \(d_tg(V,W)=g(D_tV,W)+g(V,D_tW)\)。</p><p>平行场满足 \(D_tV=D_tW=0\)，故 \(d_tg(V,W)=0\)。</p><p>因此，Levi-Civita 平行移动保持长度和夹角；一般仿射联络不必保持。</p><h4>第21步：将度量相容公式逐项代入</h4>
对 Levi-Civita 联络，取两个平行场 \(V,W\)。沿曲线求导：<div class="eq">$$\frac{d}{dt}g(V,W)=(\nabla_{\dot\gamma}g)(V,W)+g(D_tV,W)+g(V,D_tW)=0+0+0=0.$$</div>故内积、长度与夹角在两端完全相同。
<h4>第22步：给一般联络的反例限定结论</h4>
在 \(\mathbb R\) 取 \(g=dx^2\)，并规定 \(\nabla_{\partial_x}\partial_x=c\partial_x\)，其中 \(c\ne0\)。沿 \(\gamma(t)=t\)，平行方程是 \(\dot V+cV=0\)，解为 \(V(t)=e^{-ct}V(0)\)；其欧氏长度随 \(t\) 变化。因此“一般仿射联络的平行移动保持长度”是错误的。
<div class="keybox">$$\boxed{\forall V_0\in T_{\gamma(a)}M,\ \exists!V:\ D_tV=0,\ V(a)=V_0}$$</div><div class="memobox"><strong>一句话记忆：</strong>沿曲线的平行方程是线性 ODE；小段唯一解拼起来就是全程唯一解。</div>`
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
    0: L`<h4>第一步：先定曲率的符号</h4>
回忆 Levi-Civita 联络 \(\nabla\) 无挠。本文固定 \(R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z\)；这个次序决定后面每个符号。我们的目标是三个循环项之和为零。

<h4>第二步：在一点选坐标</h4>
回忆张量恒等式只需逐点验证。取点 \(p\) 的局部坐标 \(x^i\)，记 \(e_i=\partial_i\)，则 \([e_i,e_j]=0\)；验证 \(R(e_i,e_j)e_k\) 的循环和即可。

<h4>第三步：写联络系数</h4>
回忆 \(\nabla_{e_i}e_j=\Gamma^a_{ij}e_a\)。无挠给出 \(\Gamma^a_{ij}-\Gamma^a_{ji}=[e_i,e_j]^a=0\)，故两个下标对称。

<h4>第四步：先算第一重导数</h4>
回忆联络满足 Leibniz 法则。<div class="eq">$$\nabla_{e_i}\nabla_{e_j}e_k=\nabla_{e_i}(\Gamma^a_{jk}e_a)=(\partial_i\Gamma^l_{jk}+\Gamma^a_{jk}\Gamma^l_{ia})e_l$$</div>。这一行同时保留了偏导项和二次项。

<h4>第五步：交换两个方向</h4>
同一 Leibniz 法则把 \(i,j\) 对调：<div class="eq">$$\nabla_{e_j}\nabla_{e_i}e_k=(\partial_j\Gamma^l_{ik}+\Gamma^a_{ik}\Gamma^l_{ja})e_l$$</div>。这是待相减的第二项。

<h4>第六步：得到曲率分量</h4>
回忆坐标向量场括号为零，按首步的定义相减：<div class="eq">$$R(e_i,e_j)e_k=R^l{}_{kij}e_l,\quad R^l{}_{kij}=\partial_i\Gamma^l_{jk}-\partial_j\Gamma^l_{ik}+\Gamma^a_{jk}\Gamma^l_{ia}-\Gamma^a_{ik}\Gamma^l_{ja}$$</div>。指标 \(k\) 是被作用的向量，\(i,j\) 是求导方向。

<h4>第七步：列出首个循环项</h4>
回忆循环和要对 \((i,j,k)\) 做 \((i,j,k),(j,k,i),(k,i,j)\)。首项分量是 \(R^l{}_{kij}\)，已经由上一步写出。

<h4>第八步：列出第二循环项</h4>
把分量式的 \((i,j,k)\) 换成 \((j,k,i)\)：<div class="eq">$$R^l{}_{ijk}=\partial_j\Gamma^l_{ki}-\partial_k\Gamma^l_{ji}+\Gamma^a_{ki}\Gamma^l_{ja}-\Gamma^a_{ji}\Gamma^l_{ka}$$</div>。这对应 \(R(e_j,e_k)e_i\)。

<h4>第九步：列出第三循环项</h4>
把 \((i,j,k)\) 换成 \((k,i,j)\)：<div class="eq">$$R^l{}_{jki}=\partial_k\Gamma^l_{ij}-\partial_i\Gamma^l_{kj}+\Gamma^a_{ij}\Gamma^l_{ka}-\Gamma^a_{kj}\Gamma^l_{ia}$$</div>。这对应 \(R(e_k,e_i)e_j\)。

<h4>第十步：配对第一组偏导</h4>
回忆 \(\Gamma^l_{jk}=\Gamma^l_{kj}\)。因此第一项中的 \(\partial_i\Gamma^l_{jk}\) 与第三项中的 \(-\partial_i\Gamma^l_{kj}\) 相加为零。

<h4>第十一步：配对第二组偏导</h4>
同样利用下标对称，首项的 \(-\partial_j\Gamma^l_{ik}\) 与第二项的 \(+\partial_j\Gamma^l_{ki}\) 相加为零。

<h4>第十二步：配对第三组偏导</h4>
第二项的 \(-\partial_k\Gamma^l_{ji}\) 与第三项的 \(+\partial_k\Gamma^l_{ij}\) 相加为零；六个偏导项现在全部消去。

<h4>第十三步：配对第一组乘积</h4>
回忆标量乘法可换序且 \(\Gamma^a_{jk}=\Gamma^a_{kj}\)。首项的 \(+\Gamma^a_{jk}\Gamma^l_{ia}\) 与第三项的 \(-\Gamma^a_{kj}\Gamma^l_{ia}\) 抵消。

<h4>第十四步：配对第二组乘积</h4>
首项的 \(-\Gamma^a_{ik}\Gamma^l_{ja}\) 与第二项的 \(+\Gamma^a_{ki}\Gamma^l_{ja}\) 抵消；只用了 \(\Gamma^a_{ik}=\Gamma^a_{ki}\)。

<h4>第十五步：配对第三组乘积</h4>
第二项的 \(-\Gamma^a_{ji}\Gamma^l_{ka}\) 与第三项的 \(+\Gamma^a_{ij}\Gamma^l_{ka}\) 抵消。因此十二项确实一项不剩。

<h4>第十六步：写出分量等式</h4>
前六项偏导与后六项乘积分别成对消去，故对每个 \(l\) 都有<div class="eq">$$R^l{}_{kij}+R^l{}_{ijk}+R^l{}_{jki}=0$$</div>。各分量为零即向量和为零。

<h4>第十七步：扩展到任意切向量</h4>
回忆 \(R\) 对三个输入都是逐点多重线性的。把 \(X_p=X^ie_i,Y_p=Y^je_j,Z_p=Z^ke_k\) 代入，循环和的每个系数都是上一步的零。

<h4>第十八步：说明法坐标不是必要条件</h4>
本证明在任意坐标里使用了 \([e_i,e_j]=0\) 和无挠性，并没有假定 \(\Gamma(p)=0\)；因此结论不依赖特殊坐标。

<h4>第十九步：检查平坦情形</h4>
回忆欧氏坐标的 \(\Gamma^l_{ij}=0\)。分量式给出 \(R=0\)，循环和当然为零；这与一般证明的符号约定相合。

<h4>第二十步：收束为张量恒等式</h4>
把 \(e_i,e_j,e_k\) 分别换回 \(X,Y,Z\)，得到<div class="eq">$$R(X,Y)Z+R(Y,Z)X+R(Z,X)Y=0$$</div>。这条式子叫第一 Bianchi 恒等式，关键是无挠性使 Christoffel 下标对称。

<div class="keybox">$$\boxed{R(X,Y)Z+R(Y,Z)X+R(Z,X)Y=0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>把三个求导方向轮换，偏导项和乘积项都借无挠性成对消去。</div>`
  },
  "r29": {
    0: L`<h4>第一步：先说明比较的前提</h4>
回忆两个不同切空间中的张量不能直接说相等；需先给出线性等距同构，或在同一内积空间比较两个代数曲率张量 \(R,\widetilde R\)。以下固定后一种情形。

<h4>第二步：固定四槽记号</h4>
回忆本文 \(R(X,Y)Z=[\nabla_X,\nabla_Y]Z-\nabla_{[X,Y]}Z\)，设 \(T(a,b,c,d)=\langle R(a,b)c,d\rangle\)。由度量相容、无挠性，有前后两对反对称、两对交换对称及第一 Bianchi 恒等式。

<h4>第三步：把截面曲率变成未归一化值</h4>
回忆 \(K(a,b)=T(a,b,b,a)/(\langle a,a\rangle\langle b,b\rangle-\langle a,b\rangle^2)\)。所以已知所有二维平面的 \(K\)，就已知所有独立 \(a,b\) 的 \(Q(a,b):=T(a,b,b,a)\)；相关向量时两边由反对称性都为零。

<h4>第四步：取两个张量之差</h4>
设 \(A=T-\widetilde T\)。由同一内积和同一截面曲率，<div class="eq">$$A(a,b,b,a)=Q(a,b)-\widetilde Q(a,b)=0$$</div>，对任意 \(a,b\) 成立。只需证明 \(A\) 的所有四槽值为零。

<h4>第五步：记录反对称性</h4>
回忆代数曲率张量在第一对与第二对反对称：<div class="eq">$$A(a,b,c,d)=-A(b,a,c,d)=-A(a,b,d,c)$$</div>。以后换位时都按这两个负号计算。

<h4>第六步：记录配对对称性</h4>
回忆曲率的配对对称给出<div class="eq">$$A(a,b,c,d)=A(c,d,a,b)$$</div>。这允许把前一对和后一对整体互换，免去重复计算。

<h4>第七步：记录 Bianchi 关系</h4>
在本文四槽次序下，第一 Bianchi 为<div class="eq">$$A(a,b,c,d)+A(b,c,a,d)+A(c,a,b,d)=0$$</div>。这是最后从部分槽值恢复全部槽值的关键。

<h4>第八步：先极化第一个输入</h4>
把 \(a+c\) 代入 \(A(a,b,b,a)=0\)，展开多重线性：<div class="eq">$$0=A(a+c,b,b,a+c)=A(a,b,b,c)+A(c,b,b,a)$$</div>，两项对角值为零。

<h4>第九步：证明两交叉项相同</h4>
利用配对对称，\(A(c,b,b,a)=A(b,a,c,b)\)。再在前后两对各交换一次，\(A(b,a,c,b)=A(a,b,b,c)\)。因此上一步是 \(2A(a,b,b,c)=0\)。

<h4>第十步：得到第一种零值</h4>
实数域里 \(2\ne0\)，于是<div class="eq">$$A(a,b,b,c)=0\qquad(\forall a,b,c)$$</div>。这比原始的对角零值多恢复了一个自由输入。

<h4>第十一步：极化重复的中间输入</h4>
在上一步把 \(b\) 改为 \(b+d\)：<div class="eq">$$0=A(a,b+d,b+d,c)=A(a,b,d,c)+A(a,d,b,c)$$</div>。两个对角项由上一步为零。

<h4>第十二步：转成更方便的次序</h4>
利用后两槽反对称，上一式等价于<div class="eq">$$A(a,b,c,d)+A(a,d,c,b)=0$$</div>。后面将它与 Bianchi 联立。

<h4>第十三步：把第二项移到 Bianchi 的位置</h4>
回忆配对对称与两次反对称。<div class="eq">$$A(a,d,c,b)=A(c,b,a,d)=-A(b,c,a,d)$$</div>。代回上一步，得到 \(A(a,b,c,d)=A(b,c,a,d)\)。

<h4>第十四步：再循环一次</h4>
把 \((a,b,c)\) 换成 \((b,c,a)\)，同一等式给出 \(A(b,c,a,d)=A(c,a,b,d)\)。因此 Bianchi 中的三个加数完全相等。

<h4>第十五步：使用 Bianchi 消去三项</h4>
把三个相等值代入第七步：<div class="eq">$$0=A(a,b,c,d)+A(b,c,a,d)+A(c,a,b,d)=3A(a,b,c,d)$$</div>。故任意四个输入都有 \(A(a,b,c,d)=0\)。

<h4>第十六步：恢复原张量</h4>
回忆 \(A=T-\widetilde T\)。既然全部四槽值为零，非退化内积给出 \(R(a,b)c=\widetilde R(a,b)c\)。

<h4>第十七步：回到两个流形</h4>
若原题说两个流形，必须通过给定的切空间线性等距把 \(g\) 与截面对应；在该识别下，刚才的逐点代数论证适用。

<h4>第十八步：辨认不能省略的条件</h4>
只说两个空间的数值曲率集合相同并不足以比较张量；例如必须明确哪个二维平面对应哪个平面。题目的“对所有二维切平面相等”按对应平面逐一相等理解。

<h4>第十九步：收束</h4>
全部截面曲率提供 \(Q(a,b)\)，两次极化与第一 Bianchi 恢复每个四槽值。因此曲率张量由截面曲率唯一决定。

<div class="keybox">$$\boxed{K(\sigma)\ \text{对每个对应的 }\sigma\text{ 相等}\Longrightarrow R=\widetilde R}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>先把截面曲率乘回面积平方，再极化两次并用 Bianchi 消去余项。</div>`
  },
  "r30": {
    0: L`<h4>第一步：说明假设</h4>
设连通 \(n\ge3\) 维黎曼流形每一点的截面曲率与方向无关，记这个随点变化的数为 \(k(p)\)。目标是证明 \(dk=0\)。

<h4>第二步：固定符号</h4>
沿用 \(R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z\)，于是常曲率 \(k\) 时 \(R(X,Y)Z=k(\langle Y,Z\rangle X-\langle X,Z\rangle Y)\)。

<h4>第三步：由截面曲率恢复整个张量</h4>
回忆上一条定理：同一点所有截面曲率决定曲率张量。故逐点有<div class="eq">$$R(X,Y)Z=k(p)(\langle Y,Z\rangle X-\langle X,Z\rangle Y)$$</div>。

<h4>第四步：选正交标架</h4>
在 \(p\) 取正交单位向量 \(e_1,\ldots,e_n\)。回忆 Ricci 定义 \(\operatorname{Ric}(v,w)=\sum_a\langle R(e_a,v)w,e_a\rangle\)。

<h4>第五步：算 Ricci 的一个分量</h4>
把第三步代入：<div class="eq">$$\langle R(e_a,v)w,e_a\rangle=k(\langle v,w\rangle-\langle e_a,w\rangle\langle v,e_a\rangle)$$</div>。这是第 \(a\) 个求和项。

<h4>第六步：把第一个部分求和</h4>
由于 \(a=1,\ldots,n\) 共 \(n\) 项，第一项之和是 \(nk\langle v,w\rangle\)。

<h4>第七步：把第二个部分求和</h4>
回忆正交展开 \(\sum_a\langle e_a,w\rangle\langle v,e_a\rangle=\langle v,w\rangle\)。因此第二项之和是 \(k\langle v,w\rangle\)。

<h4>第八步：得 Einstein 型关系</h4>
合并前两步：<div class="eq">$$\operatorname{Ric}=(n-1)k\,g$$</div>。这是逐点式，并未假定 \(k\) 为常数。

<h4>第九步：再取迹</h4>
回忆标量曲率 \(S=\operatorname{tr}_g\operatorname{Ric}\)。在正交基下 <div class="eq">$$S=\sum_i\operatorname{Ric}(e_i,e_i)=n(n-1)k$$</div>。

<h4>第十步：引入缩并 Bianchi</h4>
回忆第二 Bianchi 的两次缩并：<div class="eq">$$\operatorname{div}\operatorname{Ric}=\tfrac12\,dS$$</div>，其中 \((\operatorname{div}\operatorname{Ric})_i=\nabla^j\operatorname{Ric}_{ij}\)。

<h4>第十一步：对 Ricci 求散度</h4>
回忆 \(\nabla g=0\)。所以 <div class="eq">$$\nabla^j[(n-1)k g_{ij}]=(n-1)(\nabla^j k)g_{ij}=(n-1)\nabla_i k$$</div>。

<h4>第十二步：对标量曲率求微分</h4>
由 \(S=n(n-1)k\) 和 \(n\) 固定，<div class="eq">$$\tfrac12\nabla_i S=\tfrac12 n(n-1)\nabla_i k$$</div>。

<h4>第十三步：联立两边</h4>
把第十一、十二步代入缩并 Bianchi：<div class="eq">$$(n-1)\nabla_i k=\tfrac12 n(n-1)\nabla_i k$$</div>。

<h4>第十四步：移到同一侧</h4>
两边乘 \(2\) 再移项：<div class="eq">$$(n-1)(n-2)\nabla_i k=0$$</div>。这明确指出维数 \(2\) 为什么特殊。

<h4>第十五步：用维数条件</h4>
由于 \(n\ge3\)，系数 \((n-1)(n-2)>0\)，可逐个指标除掉，得到 \(\nabla_i k=0\)。

<h4>第十六步：从梯度零到局部常数</h4>
回忆沿任意光滑曲线 \(c(t)\)，链式法则给 \(d(k\circ c)/dt=dk(c')=0\)。故 \(k\) 沿每条局部曲线不变。

<h4>第十七步：利用连通性</h4>
连通流形可用分段光滑路径连接任意两点；沿每段 \(k\) 不变，故整个流形的 \(k\) 都等于同一常数。

<h4>第十八步：检验二维反例</h4>
在二维每点只有一个二维切平面，方向无关是自动的，但一般曲面 \(K(p)\) 可变。此时第十四步系数为零，确实得不到 \(dk=0\)。

<h4>第十九步：收束</h4>
当 \(n\ge3\)，逐点各向同性与 Bianchi 的微分约束一起迫使截面曲率全局恒定。

<div class="keybox">$$\boxed{n\ge3,\ K_p(\sigma)=k(p)\Longrightarrow dk=0\Longrightarrow K\equiv\text{常数}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>先缩并成 \(\operatorname{Ric}=(n-1)kg\)，再用 \(\operatorname{div}\operatorname{Ric}=dS/2\) 算出 \((n-1)(n-2)dk=0\)。</div>`
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
    0: L`<h4>题目、范围与目标</h4>

原题是局部 Gauss–Bonnet。约定曲面和区域取相容定向，边界按区域在左侧的正向行走，外转角为 \(\pi-\alpha_i\)。区域紧致、边界分段光滑，必要时按连通分支处理。证明不能把联络形式沿边界的积分直接认作测地曲率积分：两者还差切向角的变化。

<h4>第1步：固定曲率与定向约定</h4>

回忆：定向正交标架可写为 \(e_1,e_2\)，令 \(\nabla e_1=\omega e_2\)。

取 \(R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z\)。此约定给 <div class="eq">$$d\omega=-K\,dA$$</div>。

本步得到：联络形式的负外微分是曲率面积形式。

<h4>第2步：把边界切向量写成一个角</h4>

回忆：单位切向量在局部正交标架中有角函数。

沿光滑边写 <div class="eq">$$T=\cos\varphi\,e_1+\sin\varphi\,e_2,\qquad N=-\sin\varphi\,e_1+\cos\varphi\,e_2$$</div>。

本步得到：切向角 \(\varphi\) 可分别在各光滑边连续选取。

<h4>第3步：求切向量的协变导数</h4>

回忆：测地曲率定义为 \(\kappa_g=\langle\nabla_TT,N\rangle\)。

对上式逐项求导，标架的转动贡献 \(\omega(T)N\)，角函数贡献 \(\dot\varphi(s)N\)，故 <div class="eq">$$\nabla_TT=(\dot\varphi(s)+\omega(T))N$$</div>。

本步得到：测地曲率同时记录相对标架转角和标架本身转角。

<h4>第4步：沿一条边积分</h4>

回忆：弧长参数满足 \(ds(T)=1\)。

把第三步逐点积分，<div class="eq">$$\int_e\kappa_g\,ds=\varphi(e_+)-\varphi(e_-)+\int_e\omega$$</div>。

本步得到：不能丢掉端点角度差。

<h4>第5步：处理顶点跳角</h4>

回忆：正向绕过内角 \(\alpha_i\) 的角点，切向量向左转的外角是 \(\theta_i=\pi-\alpha_i\)。

把边上连续转角与顶点跳角相加，得到总转角 <div class="eq">$$\sum_e\Delta_e\varphi+\sum_i(\pi-\alpha_i)=2\pi\,w$$</div>，其中 \(w\) 是相对所选标架的转数。

本步得到：角点必须计入，不能只积分光滑边。

<h4>第6步：先在一块圆盘上选全局标架</h4>

回忆：可定向圆盘上的切丛平凡，因而存在全局定向正交标架。

对拓扑圆盘 \(D\)，正向边界的切向总转数 \(w=1\)；这是平面旋转数定理经全局标架识别的结果。

本步得到：圆盘边界的总转角等于 \(2\pi\)。

<h4>第7步：对联络形式应用 Stokes</h4>

回忆：Stokes 定理把边界一形式积分变为内部外微分积分。

在圆盘上 <div class="eq">$$\int_{\partial D}\omega=\int_Dd\omega=-\int_DK\,dA$$</div>。

本步得到：联络项带负号，符号由第一步的约定固定。

<h4>第8步：得到圆盘公式</h4>

回忆：第三至七步都在同一正向约定下。

逐边相加 <div class="eq">$$\oint_{\partial D}\kappa_g\,ds=\sum_e\Delta_e\varphi-\int_DK\,dA$$</div>；再加角点，并用总转角 \(2\pi\)，得到 <div class="eq">$$\int_DK\,dA+\oint_{\partial D}\kappa_g\,ds+\sum_i(\pi-\alpha_i)=2\pi$$</div>。

本步得到：圆盘情形已经严格成立。

<h4>第9步：说明一般区域为何要剖分</h4>

回忆：带洞区域未必能选与第六步相同的全局角函数。

将 \(\Omega\) 三角剖分为 \(F\) 个拓扑圆盘；可选足够细的光滑边，圆盘公式适用于每个三角形。

本步得到：用有限求和代替在带洞区域强行使用单个标架。

<h4>第10步：把所有曲率积分相加</h4>

回忆：面积积分对无重叠内部的有限分割可加。

<div class="eq">$$\sum_{\Delta}\int_\Delta K\,dA=\int_\Omega K\,dA$$</div>；公共边的面积为零，不产生重复积分。

本步得到：内部曲率只计一次。

<h4>第11步：核对内部边的测地曲率符号</h4>

回忆：相邻三角形在公共边上的正向相反。

若一侧单位切向为 \(T\)，另一侧为 \(-T\)，左法向也变为 \(-N\)；\(\langle\nabla_{-T}(-T),-N\rangle=-\kappa_g\)。故公共边积分一正一负。

本步得到：内部边界项完全抵消。

<h4>第12步：留下真正边界的积分</h4>

回忆：外边界边只属于一个三角形。

将所有边界积分求和并消去内部边，<div class="eq">$$\sum_\Delta\oint_{\partial\Delta}\kappa_g\,ds=\oint_{\partial\Omega}\kappa_g\,ds$$</div>。

本步得到：边界方向由区域定向自动确定，包括洞的顺时针边界。

<h4>第13步：记下顶点与边的数目</h4>

回忆：Euler 示性数由有限三角剖分给出 \(\chi=V-E+F\)。

记内部顶点、边界顶点分别为 \(V_i,V_b\)，内部边、边界边为 \(E_i,E_b\)，则 \(V=V_i+V_b\)、\(E=E_i+E_b\)。

本步得到：后面的角度计数有了统一符号。

<h4>第14步：计算内部顶点的角和</h4>

回忆：一个内部顶点周围的三角形无缝铺满一圈。

故该顶点所接三角形内角之和为 \(2\pi\)。对全部内部顶点求和，贡献 <div class="eq">$$\sum_{\text{内部顶角}}\alpha=2\pi V_i$$</div>。

本步得到：内部顶点给出整圈角度。

<h4>第15步：计算边界顶点的角和</h4>

回忆：边界顶点的扇形总角等于区域在该顶点的内角。

若原边界在此光滑，约定内角 \(\alpha_v=\pi\)；无论此点接几个小三角形，都有 <div class="eq">$$\sum_{\Delta\ni v}\alpha_{\Delta,v}=\alpha_v$$</div>。

本步得到：三角剖分新添的边界顶点也可统一计数。

<h4>第16步：求全部小三角形的外角和</h4>

回忆：每个三角形贡献三个 \(\pi-\alpha\)。

把第十四、十五步代入，<div class="eq">$$\sum_{\Delta}\sum_{v\in\Delta}(\pi-\alpha_{\Delta,v})=3\pi F-2\pi V_i-\sum_{v\in\partial\Omega}\alpha_v$$</div>。

本步得到：这里每个小三角形恰有三个顶角。

<h4>第17步：写出求和后的等式</h4>

回忆：每个小三角形右边都是 \(2\pi\)。

结合第十至十六步，<div class="eq">$$\int_\Omega K\,dA+\oint_{\partial\Omega}\kappa_g\,ds+3\pi F-2\pi V_i-\sum_{\partial\Omega}\alpha_v=2\pi F$$</div>。

本步得到：只剩把计数项化成 Euler 示性数。

<h4>第18步：把原边界外角加到两边</h4>

回忆：原区域边界外角和为 \(\sum_{\partial\Omega}(\pi-\alpha_v)=\pi V_b-\sum\alpha_v\)。

由上式移项得到 <div class="eq">$$\int_\Omega K\,dA+\oint_{\partial\Omega}\kappa_g\,ds+\sum_{\partial\Omega}(\pi-\alpha_v)=\pi(2V_i+V_b-F)$$</div>。

本步得到：几何左边已经是题目要求的形式。

<h4>第19步：双重计数三角形的边</h4>

回忆：内部边被两个三角形共享，边界边只被一个三角形使用。

因此 <div class="eq">$$3F=2E_i+E_b,\qquad E_b=V_b$$</div>；第二式对每条闭合多边形边界逐分支成立。

本步得到：边数可以消去。

<h4>第20步：算出右边正是拓扑数</h4>

回忆：Euler 公式是 \(\chi=V_i+V_b-E_i-E_b+F\)。

用 \(2E_i=3F-E_b\) 及 \(E_b=V_b\) 化简 <div class="eq">$$2\chi=2V_i+2V_b-(3F-E_b)-2E_b+2F=2V_i+V_b-F$$</div>。

本步得到：第十八步的右端等于 \(2\pi\chi(\Omega)\)。

<h4>第21步：检验测地三角形特例</h4>

回忆：测地线的测地曲率为零，三角形拓扑为圆盘，\(\chi=1\)。

代入 \(\sum(\pi-\alpha_i)=3\pi-\sum\alpha_i\)，有 <div class="eq">$$\int_\Delta K\,dA+3\pi-\sum_i\alpha_i=2\pi\quad\Longleftrightarrow\quad\int_\Delta K\,dA=\sum_i\alpha_i-\pi$$</div>。

本步得到：局部公式的符号与球面角盈相符。

<div class="keybox">$$\boxed{\int_\Omega K\,dA+\oint_{\partial\Omega}\kappa_g\,ds+\sum_i(\pi-\alpha_i)=2\pi\chi(\Omega)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>曲率、沿边转弯、顶点转弯三项合计，是区域的 Euler 数乘 \(2\pi\)。</div>`
  },
  "r41": {
    0: L`<h4>命题、约定与证明路线</h4>
设 \(M\) 是紧致、定向、无边界的二维黎曼流形。要证明
<div class="eq">$$\int_M K\,dA=2\pi\chi(M).$$</div>
路线是：先从曲面上的转角推得每个小圆盘的局部公式；再对一张有限测地三角网逐片相加；最后把角度和变成顶点、边、面的计数。

<h4>第一步：回忆 Gauss 曲率和面积元</h4>
在局部坐标 \(u^1,u^2\) 中，\(K\) 是切平面截面曲率，\(dA=\sqrt{\det(g_{ij})}\,du^1du^2\)。积分 \(\int_MK\,dA\) 把每小块的曲率按面积加权。定向保证我们能一致地选择“正向”绕边界走。

<h4>第二步：先在一块拓扑圆盘 \(D\) 上选标架</h4>
圆盘可缩，故能选一组处处光滑的有向正交单位向量场 \(e_1,e_2\)。它们像曲面内部的一把移动直角尺；我们先用这把尺测边界切向量的转角。

<h4>第三步：定义联络一形式 \(\omega\)</h4>
因 \(e_1,e_2\) 保持单位正交，\(e_1\) 的协变导数必垂直于 \(e_1\)，可写
<div class="eq">$$\nabla_Xe_1=\omega(X)e_2,\qquad \nabla_Xe_2=-\omega(X)e_1.$$</div>
第二式来自对 \(g(e_1,e_2)=0\) 求导；\(\omega(X)\) 衡量直角尺沿 \(X\) 转了多少。

<h4>第四步：先算两次求导的交换差</h4>
采用 \(R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z\)。将第三步代入并对 \(e_1\) 计算：\(\nabla_X(\omega(Y)e_2)=X(\omega(Y))e_2-\omega(Y)\omega(X)e_1\)；交换 \(X,Y\) 后相减，两个 \(e_1\) 项抵消，得到
<div class="eq">$$R(X,Y)e_1=[X\omega(Y)-Y\omega(X)-\omega([X,Y])]e_2=d\omega(X,Y)e_2.$$</div>

<h4>第五步：把 \(d\omega\) 识别成曲率</h4>
按本文的曲率约定，\(K=g(R(e_1,e_2)e_2,e_1)\)。曲率算子在 \(e_1,e_2\) 平面上斜对称，故 \(g(R(e_1,e_2)e_1,e_2)=-K\)。第四步左边正是后者，因此
<div class="eq">$$d\omega(e_1,e_2)=-K,\qquad d\omega=-K\,dA.$$</div>
不同教材若把 \(R\) 定义成相反号，两式会同时变号，最终 Gauss–Bonnet 不变。

<h4>第六步：把边界切向量写成一个角度</h4>
沿 \(\partial D\) 的每段光滑弧用弧长 \(s\) 参数化。单位切向量 \(T\) 能写成 \(T=\cos\theta\,e_1+\sin\theta\,e_2\)。定义同方向旋转 \(90^\circ\) 的单位向量 \(N=-\sin\theta\,e_1+\cos\theta\,e_2\)。

<h4>第七步：逐项求 \(T\) 的协变导数</h4>
对第六步求导：三角函数求导给 \(\theta'(-\sin\theta\,e_1+\cos\theta\,e_2)=\theta'N\)；标架求导由第三步给 \(\omega(T)(-\sin\theta\,e_1+\cos\theta\,e_2)=\omega(T)N\)。相加为
<div class="eq">$$\nabla_TT=(\theta'(s)+\omega(T))N.$$</div>

<h4>第八步：从定义读出测地曲率</h4>
有向测地曲率定义为 \(k_g=g(\nabla_TT,N)\)。把第七步代入，\(g(N,N)=1\)，所以
<div class="eq">$$k_g=\theta'+\omega(T).$$</div>
它把“边界自身转角”与“参考标架转角”分开了。

<h4>第九步：在光滑边界段上积分</h4>
第八步两边沿各光滑段积分并求和：
<div class="eq">$$\int_{\partial D}k_g\,ds=\sum_{\text{段}}\Delta\theta+\int_{\partial D}\omega.$$</div>
遇到角点时切向量跳跃，\(\theta\) 也跳跃；这些跳跃要另外计入外角，不能藏在积分中。

<h4>第十步：用 Stokes 定理处理标架项</h4>
Stokes 公式给 \(\int_{\partial D}\omega=\int_Dd\omega\)。由第五步 \(d\omega=-K\,dA\)，于是
<div class="eq">$$\int_{\partial D}\omega=-\int_DK\,dA.$$</div>
这是把边界标架转动换成区域曲率的关键一步。

<h4>第十一步：计算切向量绕一圈的总转角</h4>
圆盘的正向简单闭边界，切向量相对圆盘上的有向标架转一整圈。若边界有折角，把每段连续变化 \(\Delta\theta\) 与各角点的有向外角 \(\varepsilon_j\) 一起算，转角数定理给
<div class="eq">$$\sum_{\text{段}}\Delta\theta+\sum_j\varepsilon_j=2\pi.$$</div>
这个“转一圈”是平面转角数定理经圆盘上的标架搬来的；若边界自交或区域不是圆盘，右边不能直接写 \(2\pi\)。

<h4>第十二步：把前三个等式合成局部公式</h4>
从第九步加上角点外角，再用第十、十一步：
<div class="eq">$$\int_{\partial D}k_g\,ds+\sum_j\varepsilon_j
=2\pi-\int_DK\,dA.$$</div>
把曲率积分移到左边，得到局部 Gauss–Bonnet：
<div class="eq">$$\int_DK\,dA+\int_{\partial D}k_g\,ds+\sum_j\varepsilon_j=2\pi.$$</div>

<h4>第十三步：选择足够细的测地三角剖分</h4>
紧致曲面有有限三角剖分；把网格取得足够细，使每条小边处在测地凸邻域内，再用唯一短测地线代替小边，可得到保持同一组合结构的测地三角剖分。这一步使用曲面三角剖分与局部测地凸性两个标准结果。记顶点数 \(V\)、边数 \(E\)、面数 \(F\)。

<h4>第十四步：说明每个小面都可用局部公式</h4>
每个测地三角形 \(\Delta\) 连同内部是一块拓扑圆盘，符合第十二步的使用条件。三个内角记为 \(\alpha,\beta,\gamma\)；它们在切平面内由度量测量。

<h4>第十五步：把测地边的边界积分消去</h4>
测地线的定义是沿自身满足 \(\nabla_TT=0\)，因此由第八步的测地曲率定义，三条边上 \(k_g=g(0,N)=0\)。于是 \(\int_{\partial\Delta}k_g\,ds=0\)。

<h4>第十六步：把内角改写成外角</h4>
沿正向边界在一个顶点转弯，外角是 \(\varepsilon=\pi-\alpha\)。三顶点合计 \((\pi-\alpha)+(\pi-\beta)+(\pi-\gamma)=3\pi-(\alpha+\beta+\gamma)\)。

<h4>第十七步：推得每个三角形的角盈公式</h4>
把第十五、十六步代入第十二步：
<div class="eq">$$\int_\Delta K\,dA+3\pi-(\alpha+\beta+\gamma)=2\pi.$$</div>
两边减去 \(3\pi\) 再移项，得到
<div class="eq">$$\int_\Delta K\,dA=\alpha+\beta+\gamma-\pi.$$</div>
右边就是这片三角形相对欧氏三角形的角盈。

<h4>第十八步：对所有三角形左边求和</h4>
三角形内部互不重叠，合起来覆盖整个 \(M\)；共同边只有二维面积零。积分的可加性给
<div class="eq">$$\sum_\Delta\int_\Delta K\,dA=\int_MK\,dA.$$</div>

<h4>第十九步：把右边拆成角度总和与面数</h4>
第十七步的右边对全部 \(F\) 个三角形求和为
<div class="eq">$$\sum_\Delta(\alpha_\Delta+\beta_\Delta+\gamma_\Delta-\pi)
=\sum_{\text{所有三角形顶角}}\alpha-\pi F.$$</div>
所以 \(\int_MK\,dA=\sum_{\text{顶角}}\alpha-\pi F\)。

<h4>第二十步：在一个顶点周围算角度和</h4>
固定一个顶点 \(v\)。所有相邻三角形的角在同一个切平面中按顺序排满一圈，既无重叠也无缺口；因 \(M\) 没有边界，这一圈的角度和为 \(2\pi\)。

<h4>第二十一步：对所有顶点求和</h4>
每个三角形的每个角恰属于一个顶点，故
<div class="eq">$$\sum_{\text{所有三角形顶角}}\alpha=\sum_{v}2\pi=2\pi V.$$</div>
代回第十九步，得到 \(\int_MK\,dA=2\pi V-\pi F\)。

<h4>第二十二步：从面一侧数边的出现次数</h4>
每个三角形都有三条边，若按“面上的边”计数，合计 \(3F\) 次。这里一条公共边在它相邻的两个面里各算一次。

<h4>第二十三步：从边一侧再数同一批次数</h4>
闭曲面无边，每条剖分边恰属于两个三角形，故同一批“面上的边”也有 \(2E\) 次。两种计数相等：
<div class="eq">$$3F=2E.$$</div>

<h4>第二十四步：把 \(2\pi V-\pi F\) 改写成 \(V-E+F\)</h4>
由 \(3F=2E\)，得到 \(2E-2F=F\)，所以 \(\pi F=2\pi(E-F)\)。代入第二十一步：
<div class="eq">$$\int_MK\,dA=2\pi V-\pi F=2\pi V-2\pi(E-F)=2\pi(V-E+F).$$</div>

<h4>第二十五步：识别 Euler 示性数</h4>
Euler 示性数定义为有限三角剖分的交错计数 \(\chi(M)=V-E+F\)，并且拓扑定理保证它不依赖具体剖分。把它代入第二十四步，得所求全局公式。

<div class="keybox">$$\boxed{\int_MK\,dA=2\pi\chi(M).}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>局部曲率使三角形角和偏离 \(\pi\)；把所有角盈相加，顶点各给 \(2\pi\)，边面关系 \(3F=2E\) 把剩余项变成 \(2\pi(V-E+F)\)。</div>`
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
    0: L`<h4>准确的命题与适用区间</h4>
取两个同维黎曼流形上的单位速度测地线 \(\gamma,\widetilde\gamma:[0,T]\to M,\widetilde M\)，以及法向 Jacobi 场 \(J,\widetilde J\)，满足 \(J(0)=\widetilde J(0)=0\) 和 \(|D_tJ(0)|=|D_t\widetilde J(0)|>0\)。假设沿两条测地线，\(M\) 的<strong>每个包含切向量的二维平面</strong>的截面曲率都不小于 \(\widetilde M\) 的相应这类平面的截面曲率；并在所比较区间内没有使以下 Jacobi 矩阵退化的共轭点。要证 \(|J(t)|\le|\widetilde J(t)|\)。只说“曲率大，回复力强”并不是证明；下面把指标形式的比较写成导数不等式。

<h4>第一步：回忆 Jacobi 场的定义</h4>
沿单位速度测地线 \(\gamma\)，Jacobi 场满足
<div class="eq">$$D_t^2J+R(J,T)T=0,\qquad T=\dot\gamma,\quad D_tT=0.$$</div>
它描述从同一起点发出的邻近测地线怎样分开。我们使用 \(R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z\)。

<h4>第二步：核对“法向”条件沿路保持</h4>
记 \(h(t)=\langle J(t),T(t)\rangle\)。因 \(D_tT=0\)，\(h''=\langle D_t^2J,T\rangle=-\langle R(J,T)T,T\rangle=0\)；最后一项为零是曲率算子对最后两槽的斜对称性。由 \(J(0)=0\) 及 \(D_tJ(0)\perp T(0)\)，\(h(0)=h'(0)=0\)，所以 \(h\equiv0\)。

<h4>第三步：把曲率比较写成可代入的不等式</h4>
若 \(X\perp T,\ \widetilde X\perp\widetilde T\) 都是单位向量，条件是
<div class="eq">$$\langle R(X,T)T,X\rangle
\ge\langle\widetilde R(\widetilde X,\widetilde T)\widetilde T,\widetilde X\rangle.$$</div>
它是<strong>径向截面曲率</strong>比较，必须对后面将出现的各个法向方向成立；并不要求两条测地线所在流形的全部截面曲率都有统一大小。

<h4>第四步：在法丛中选平行正交标架</h4>
沿 \(\gamma\) 取平行法向标架 \(E_1,\ldots,E_{n-1}\)，沿 \(\widetilde\gamma\) 取 \(\widetilde E_1,\ldots,\widetilde E_{n-1}\)。平行意味着 \(D_tE_a=D_t\widetilde E_a=0\)，所以场的坐标导数就是协变导数的坐标。

<h4>第五步：把 Jacobi 方程变为矩阵方程</h4>
在 \(E_a\) 坐标下，曲率算子 \(X\mapsto R(X,T)T\) 是对称矩阵 \(\mathcal R(t)\)。写 \(J=\sum_aj^aE_a\) 后，第一步成为
<div class="eq">$$j''(t)+\mathcal R(t)j(t)=0.$$</div>
对称性来自曲率张量的配对对称性；另一个流形也有对应的 \(\widetilde{\mathcal R}\)。

<h4>第六步：用初始条件控制原点附近的长度</h4>
因为 \(J(0)=0\)，微分的定义给 \(J(t)=tD_tJ(0)+o(t)\)；故 \(|J(t)|/t\to|D_tJ(0)|\)。同理 \(|\widetilde J(t)|/t\to|D_t\widetilde J(0)|\)。两初始导数等长，所以
<div class="eq">$$\lim_{t\downarrow0}\frac{|J(t)|}{|\widetilde J(t)|}=1.$$</div>
这将是积分微分不等式时的初始常数。

<h4>第七步：说明无共轭点假设的用途</h4>
共轭点是存在非零 Jacobi 场在起点和该点都为零的时刻。假设在 \((0,T]\) 内没有这种时刻，保证下面的 Jacobi 矩阵可逆，也保证非零初始导数产生的 \(J(t),\widetilde J(t)\) 在 \(t>0\) 不为零。于是可对其长度取对数。

<h4>第八步：定义两个要比较的正函数</h4>
记 \(f(t)=|J(t)|>0,\ \widetilde f(t)=|\widetilde J(t)|>0\)（\(0<t\le T\)）。目标是 \(f/\widetilde f\le1\)；直接比较 \(f''\) 会出现 \(|D_tJ|^2\) 的角向项，所以下面改比较对数的一阶导数。

<h4>第九步：回忆指标形式</h4>
对沿 \(\gamma|_{[0,t]}\) 的法向场 \(V\)，定义
<div class="eq">$$I_t(V,V)=\int_0^t\left(|D_sV|^2-\langle R(V,T)T,V\rangle\right)ds.$$</div>
第一项量度场变化，第二项是曲率给出的修正。两个流形各有自己的指标形式。

<h4>第十步：沿 Jacobi 场积分分部</h4>
因 Jacobi 方程 \(D_s^2J=-R(J,T)T\)，有
<div class="eq">$$\frac d{ds}\langle D_sJ,J\rangle
=\langle D_s^2J,J\rangle+|D_sJ|^2
=|D_sJ|^2-\langle R(J,T)T,J\rangle.$$</div>
积分 \(0\) 到 \(t\)，且 \(J(0)=0\)，所以 \(I_t(J,J)=\langle D_tJ(t),J(t)\rangle\)。

<h4>第十一步：把端点内积换成长度导数</h4>
由 \(f^2=\langle J,J\rangle\) 求导得 \(2ff'=2\langle D_tJ,J\rangle\)。因此第十步给
<div class="eq">$$I_t(J,J)=f(t)f'(t),\qquad
I_t\!\left(\frac{J}{f(t)},\frac{J}{f(t)}\right)=\frac{f'(t)}{f(t)}.$$</div>
注意分母 \(f(t)\) 对积分变量 \(s\) 是常数，不是 \(f(s)\)。

<h4>第十二步：先证明要用的指标形式极小性</h4>
固定 \(t>0\) 与端点法向量 \(u\)。令 \(J_u\) 是满足 \(J_u(0)=0,J_u(t)=u\) 的 Jacobi 场。无共轭点保证解存在唯一。我们要证明：任何也满足 \(V(0)=0,V(t)=u\) 的法向场都有 \(I_t(J_u,J_u)\le I_t(V,V)\)。

<h4>第十三步：构造 Jacobi 矩阵 \(A(s)\)</h4>
在第四步的平行标架中，令矩阵 \(A\) 的每一列解第五步的方程，并满足 \(A(0)=0,\ A'(0)=I\)。任意从起点出发的法向 Jacobi 场都可写 \(A(s)w\)。没有共轭点恰说明 \(A(s)\) 在 \(0<s\le t\) 可逆。

<h4>第十四步：定义对称的 Riccati 矩阵</h4>
对 \(s>0\) 令 \(S=A'A^{-1}\)。Jacobi 矩阵的 Wronskian 满足
<div class="eq">$$\frac d{ds}(A^\top A'-A'^\top A)
=A^\top A''-A''^\top A
=-A^\top\mathcal RA+A^\top\mathcal R^\top A=0.$$</div>
原点处该矩阵为零，故恒为零；两边乘 \(A^{-\top},A^{-1}\) 得 \(S^\top=S\)。

<h4>第十五步：对 \(S\) 求导，得到 Riccati 等式</h4>
使用逆矩阵求导 \((A^{-1})'=-A^{-1}A'A^{-1}\)，
<div class="eq">$$S'=A''A^{-1}-A'A^{-1}A'A^{-1}
=-\mathcal R-S^2,$$</div>
这里 \(A''=-\mathcal RA\)。于是 \(S'+S^2+\mathcal R=0\)。

<h4>第十六步：把竞争场与 Jacobi 场作差</h4>
令 \(W=V-J_u\)。两场起点和终点都一样，所以 \(W(0)=W(t)=0\)。指标形式是二次型，展开
<div class="eq">$$I_t(V,V)=I_t(J_u,J_u)+2I_t(J_u,W)+I_t(W,W).$$</div>
要得到极小性，分别处理交叉项和最后一项。

<h4>第十七步：把交叉项算成零</h4>
用与第十步同样的积分分部及 Jacobi 方程，
<div class="eq">$$I_t(J_u,W)
=\big[\langle D_sJ_u,W\rangle\big]_{s=0}^{s=t}
-\int_0^t\langle D_s^2J_u+R(J_u,T)T,W\rangle ds=0.$$</div>
边界项为零是因为 \(W\) 两端为零，积分项为零是因为 \(J_u\) 是 Jacobi 场。

<h4>第十八步：把 \(I_t(W,W)\) 配成平方</h4>
在平行标架坐标中，利用第十四步 \(S^\top=S\) 和第十五步 \(S'+S^2=-\mathcal R\)，逐项展开：
<div class="eq">$$|W'-SW|^2+\frac d{ds}\langle SW,W\rangle
=|W'|^2-2\langle SW,W'\rangle+|SW|^2
+\langle S'W,W\rangle+2\langle SW,W'\rangle
=|W'|^2-\langle\mathcal RW,W\rangle.$$</div>
中间的交叉项正好抵消，这正是指标形式的被积函数。

<h4>第十九步：检查端点项并得到非负性</h4>
把第十八步从 \(\varepsilon\) 积到 \(t\)。在 \(t\) 处 \(W(t)=0\)，边界项为零；在 \(s\downarrow0\) 处，\(A(s)=sI+O(s^3)\)，故 \(S(s)=s^{-1}I+O(s)\)，而光滑且 \(W(0)=0\) 给 \(W(s)=O(s)\)，于是 \(\langle S(s)W(s),W(s)\rangle=O(s)\to0\)。因此
<div class="eq">$$I_t(W,W)=\int_0^t|D_sW-SW|^2ds\ge0.$$</div>

<h4>第二十步：完成指标形式极小性</h4>
第十六步的展开中，交叉项由第十七步为零，最后一项由第十九步非负，所以
<div class="eq">$$I_t(J_u,J_u)\le I_t(V,V).$$</div>
这一步已证明所用的指标引理，而不是只说“指标形式比较可得”。

<h4>第二十一步：在固定时刻对齐两个端点</h4>
固定一个 \(t\in(0,T]\)。由第四步的两组平行标架，把两条法丛的坐标空间都认作 \(\mathbb R^{n-1}\)。取一个<strong>不随 \(s\) 变化</strong>的正交矩阵 \(O\)，把 \(\widetilde J(t)/\widetilde f(t)\) 的坐标送到 \(J(t)/f(t)\) 的坐标；两者都是单位向量，所以这样的 \(O\) 存在。

<h4>第二十二步：把对照 Jacobi 场搬到 \(M\) 上</h4>
沿整个区间用平行标架及刚才的同一个 \(O\)，定义
<div class="eq">$$V(s)=P_s\!\left(\frac{\widetilde J(s)}{\widetilde f(t)}\right),$$</div>
其中 \(P_s\) 是这两组平行标架之间的正交对应。于是 \(V(0)=0\)，且由第二十一步 \(V(t)=J(t)/f(t)\)。所以 \(V\) 正是第二十步可用的竞争场。

<h4>第二十三步：比较导数项</h4>
\(P_s\) 在平行标架中的矩阵固定为 \(O\)，故它既保长度又与沿测地线的协变求导交换：
<div class="eq">$$|D_sV|^2=\frac{|D_s\widetilde J|^2}{\widetilde f(t)^2},
\qquad |V|^2=\frac{|\widetilde J|^2}{\widetilde f(t)^2}.$$</div>
导数项在两个指标形式中<strong>完全相等</strong>。

<h4>第二十四步：比较曲率项并注意负号</h4>
由第三步对每个 \(s\) 的径向平面应用曲率下界，并用第二十三步的长度对应，
<div class="eq">$$\langle R(V,T)T,V\rangle
\ge\left\langle\widetilde R\!\left(\frac{\widetilde J}{\widetilde f(t)},\widetilde T\right)
\widetilde T,\frac{\widetilde J}{\widetilde f(t)}\right\rangle.$$</div>
指标形式里曲率项前有<strong>负号</strong>，故积分不等号反向：
<div class="eq">$$I_t^M(V,V)\le I_t^{\widetilde M}\!\left(\frac{\widetilde J}{\widetilde f(t)},\frac{\widetilde J}{\widetilde f(t)}\right).$$</div>

<h4>第二十五步：把两个指标不等式连起来</h4>
对 \(M\) 用第二十步，\(J/f(t)\) 是端点为 \(J(t)/f(t)\) 的 Jacobi 场；再用第二十四步，得到
<div class="eq">$$I_t^M(J/f(t),J/f(t))
\le I_t^M(V,V)
\le I_t^{\widetilde M}(\widetilde J/\widetilde f(t),\widetilde J/\widetilde f(t)).$$</div>
由第十一步及其对照版本，两端分别等于 \(f'(t)/f(t)\) 和 \(\widetilde f'(t)/\widetilde f(t)\)。

<h4>第二十六步：识别成对数导数</h4>
第八步保证 \(f,\widetilde f>0\)，因此
<div class="eq">$$\frac d{dt}\log\frac{f(t)}{\widetilde f(t)}
=\frac{f'(t)}{f(t)}-\frac{\widetilde f'(t)}{\widetilde f(t)}
\le0.$$</div>
这说明两场长度比随 \(t\) 不增；方向性的结论来自前一步的不等号，而非物理比喻。

<h4>第二十七步：从原点极限积分到任意时刻</h4>
对 \(0<\varepsilon<t\) 积分第二十六步，得 \(\log(f(t)/\widetilde f(t))\le\log(f(\varepsilon)/\widetilde f(\varepsilon))\)。由第六步，右边在 \(\varepsilon\downarrow0\) 时趋于 \(\log1=0\)。故 \(\log(f(t)/\widetilde f(t))\le0\)，指数函数单调递增，得到 \(f(t)/\widetilde f(t)\le1\)。

<div class="keybox">$$\boxed{|J(t)|\le|\widetilde J(t)|\quad(0<t\le T),\qquad
\text{在所述径向曲率比较与无共轭点条件下。}}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>指标形式的“端点固定极小性”给 \((\log|J|)'\) 的上界；更大的径向曲率让指标形式更小，积分后 Jacobi 场就更短。</div>`
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
    0: L`<h4>命题与参数</h4>
设 \(M^n\) 连通、完备，\(n\ge2\)，且存在 \(R>0\) 使任意切向量 \(v\) 都满足 \(\operatorname{Ric}(v,v)\ge (n-1)R^{-2}g(v,v)\)。要证明
<div class="eq">$$\operatorname{diam}(M)\le\pi R,\qquad |\pi_1(M)|<\infty.$$</div>
前半段的工具是极小测地线的第二变分；后半段把同样的直径界搬到万有覆盖上。

<h4>第一步：把 Ricci 下界理解为每条单位方向上的不等式</h4>
若 \(T\) 是单位切向量，\(g(T,T)=1\)，题设直接给
<div class="eq">$$\operatorname{Ric}(T,T)\ge\frac{n-1}{R^2}.$$</div>
证明将沿一条测地线逐点使用它，不要求每个截面曲率都正。

<h4>第二步：任取两个不同点</h4>
取 \(p,q\in M\)，记 \(L=d(p,q)>0\)。连通且完备时，Hopf–Rinow 定理保证存在从 \(p\) 到 \(q\) 的长度极小测地线 \(\gamma:[0,L]\to M\)；这里是<strong>任意</strong>两点，不需要先假设直径已被取到。

<h4>第三步：把测地线按弧长参数化</h4>
取 \(T=\dot\gamma\)，则 \(|T|=1\) 且 \(D_tT=\nabla_TT=0\)。前一个等式让 \(t\) 真的是路程，后一个是测地线定义；以后曲率项都沿这个 \(T\) 计算。

<h4>第四步：沿曲线取法向正交基</h4>
在 \(T(0)^\perp\) 取正交基 \(E_1(0),\ldots,E_{n-1}(0)\)。把每个向量按平行移动方程 \(D_tE_i=0\) 延伸到 \([0,L]\)。度量相容给 \(d\langle E_i,E_j\rangle/dt=0\)，所以它们沿路始终正交单位。

<h4>第五步：检查平行基始终垂直于 \(T\)</h4>
计算 \(d\langle E_i,T\rangle/dt=\langle D_tE_i,T\rangle+\langle E_i,D_tT\rangle=0+0=0\)。初始内积为零，因此 \(\langle E_i(t),T(t)\rangle=0\) 对所有 \(t\) 成立。

<h4>第六步：选一个两端为零的标量函数</h4>
令 \(f(t)=\sin(\pi t/L)\)。逐项核对 \(f(0)=\sin0=0\)、\(f(L)=\sin\pi=0\)，且
<div class="eq">$$f'(t)=\frac{\pi}{L}\cos\frac{\pi t}{L}.$$</div>
这个函数是区间上的第一个 Dirichlet 正弦模态，其两端为零正好满足固定端点变分的条件。

<h4>第七步：构造 \(n-1\) 个变分向量场</h4>
取 \(V_i(t)=f(t)E_i(t)\)。由第六步 \(V_i(0)=V_i(L)=0\)，由第五步 \(V_i\perp T\)。因此 \(V_i\) 是沿 \(\gamma\) 的合法固定端点法向变分场。

<h4>第八步：回忆第二变分的指标形式</h4>
对固定端点的变分，取能量 \(E(\gamma)=\tfrac12\int_0^L|\dot\gamma|^2dt\)。沿测地线的二阶变分是
<div class="eq">$$I(V,V)=\int_0^L\left(|D_tV|^2-\langle R(V,T)T,V\rangle\right)dt.$$</div>
这里使用 \(R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z\) 的曲率约定。

<h4>第九步：说明极小性为什么给 \(I(V,V)\ge0\)</h4>
对任意两端仍固定在 \(p,q\) 的曲线 \(c:[0,L]\to M\)，Cauchy–Schwarz 给 \(E(c)=\tfrac12\int_0^L|c'|^2dt\ge\frac{1}{2L}(\int_0^L|c'|dt)^2\)。又因 \(\gamma\) 长度极小，\(\int|c'|dt\ge L\)，于是 \(E(c)\ge L/2=E(\gamma)\)。所以任何固定端点变分的能量函数在变分参数 \(s=0\) 取局部最小值，\(E''(0)\ge0\)。第二变分公式把它写成 \(I(V,V)\)，故每个 \(I(V_i,V_i)\ge0\)。

<h4>第十步：先算导数项，不能把正弦误乘进去</h4>
乘积法则给 \(D_t(fE_i)=f'E_i+fD_tE_i=f'E_i\)，因为 \(E_i\) 平行。因此
<div class="eq">$$|D_tV_i|^2=(f')^2=\frac{\pi^2}{L^2}\cos^2\frac{\pi t}{L}.$$</div>
注意此项含 \(\cos^2\)，<strong>不是</strong> \(\sin^2\)。

<h4>第十一步：再算曲率项</h4>
曲率张量对第一个和第三个向量线性，\(V_i=fE_i\)，故
<div class="eq">$$\langle R(V_i,T)T,V_i\rangle=f^2\langle R(E_i,T)T,E_i\rangle
=\sin^2\frac{\pi t}{L}\langle R(E_i,T)T,E_i\rangle.$$</div>
这里的两个 \(f\) 分别来自曲率算子的输入和最终内积。

<h4>第十二步：把两项代回指标形式</h4>
第八至十一步合起来：
<div class="eq">$$I(V_i,V_i)=\int_0^L\left[\frac{\pi^2}{L^2}\cos^2\frac{\pi t}{L}
-\sin^2\frac{\pi t}{L}\langle R(E_i,T)T,E_i\rangle\right]dt.$$</div>
这一步还没有用 Ricci 下界。

<h4>第十三步：对所有法向方向求和</h4>
将第十二步对 \(i=1,\ldots,n-1\) 相加。导数项出现 \(n-1\) 次，而曲率项的求和恰是 Ricci 曲率的定义：
<div class="eq">$$\operatorname{Ric}(T,T)=\sum_{i=1}^{n-1}\langle R(E_i,T)T,E_i\rangle.$$</div>
因此
<div class="eq">$$\sum_i I(V_i,V_i)=\int_0^L\left[(n-1)\frac{\pi^2}{L^2}\cos^2\frac{\pi t}{L}
-\operatorname{Ric}(T,T)\sin^2\frac{\pi t}{L}\right]dt.$$</div>

<h4>第十四步：在积分内逐点应用 Ricci 下界</h4>
由第一步，\(\operatorname{Ric}(T,T)\ge(n-1)/R^2\)。乘以非负的 \(\sin^2\) 后再加负号，不等号方向变成
<div class="eq">$$-\operatorname{Ric}(T,T)\sin^2\frac{\pi t}{L}
\le-\frac{n-1}{R^2}\sin^2\frac{\pi t}{L}.$$</div>
所以
<div class="eq">$$\sum_i I(V_i,V_i)\le(n-1)\int_0^L\left[\frac{\pi^2}{L^2}\cos^2\frac{\pi t}{L}
-\frac1{R^2}\sin^2\frac{\pi t}{L}\right]dt.$$</div>

<h4>第十五步：单独计算余弦平方积分</h4>
用 \(\cos^2x=(1+\cos2x)/2\)，
<div class="eq">$$\int_0^L\cos^2\frac{\pi t}{L}\,dt
=\frac L2+\frac12\int_0^L\cos\frac{2\pi t}{L}\,dt
=\frac L2+\frac{L}{4\pi}\left[\sin\frac{2\pi t}{L}\right]_0^L=\frac L2.$$</div>

<h4>第十六步：单独计算正弦平方积分</h4>
同样由 \(\sin^2x=(1-\cos2x)/2\)，余弦在整周期上的积分为零，故
<div class="eq">$$\int_0^L\sin^2\frac{\pi t}{L}\,dt=\frac L2.$$</div>
两种平方的积分一样，但它们在被积函数中配的系数不同，不能在积分前混淆。

<h4>第十七步：化简指标形式的上界</h4>
把第十五、十六步代入第十四步：
<div class="eq">$$\sum_i I(V_i,V_i)\le(n-1)\left[\frac{\pi^2}{L^2}\frac L2-\frac1{R^2}\frac L2\right]
=\frac{(n-1)L}{2}\left(\frac{\pi^2}{L^2}-\frac1{R^2}\right).$$</div>
这就是关键数值不等式，每个因子都已算出。

<h4>第十八步：假设距离过长并逐项检查符号</h4>
若 \(L>\pi R\)，则 \(L^2>\pi^2R^2\)，因此 \(\pi^2/L^2<1/R^2\)。第十七步右边的括号为负；前面的 \((n-1)L/2>0\)，故 \(\sum_i I(V_i,V_i)<0\)。

<h4>第十九步：把矛盾写完整，得到直径界</h4>
第九步说每个 \(I(V_i,V_i)\ge0\)，所以它们的和 \(\sum_iI(V_i,V_i)\ge0\)；第十八步若 \(L>\pi R\) 则同一和小于零，两者不能同时成立。因此任意两点均有 \(d(p,q)=L\le\pi R\)。对所有点对取上确界：
<div class="eq">$$\operatorname{diam}(M)=\sup_{p,q}d(p,q)\le\pi R.$$</div>

<h4>第二十步：由完备与有界得到原流形紧致</h4>
任取 \(p\)，直径界给 \(M=\overline B_{\pi R}(p)\)。Hopf–Rinow 的另一部分说完备连通黎曼流形的闭有界集紧致，因此整个 \(M\) 紧致。这个结论本身还<strong>不能</strong>推出基本群有限，例如平坦环面紧致而 \(\pi_1\cong\mathbb Z^2\)。

<h4>第二十一步：把度量提升到万有覆盖</h4>
取万有覆盖 \(p:\widetilde M\to M\)，定义 \(\tilde g=p^*g\)。在每个均匀覆盖小片上 \(p\) 是局部等距，所以对应的曲率张量与 Ricci 曲率一致；对任意 \(\tilde v\)，
<div class="eq">$$\operatorname{Ric}_{\tilde g}(\tilde v,\tilde v)
=\operatorname{Ric}_g(dp\,\tilde v,dp\,\tilde v)
\ge\frac{n-1}{R^2}\tilde g(\tilde v,\tilde v).$$</div>

<h4>第二十二步：说明万有覆盖为什么仍完备</h4>
一条 \(\widetilde M\) 上的局部测地线投影到 \(M\) 后是底面的测地线；底面完备使投影能对全部时间延拓。给定提升路径的起点，覆盖空间的路径提升定理让延拓的底面测地线有唯一的连续提升，且在各覆盖小片上仍是测地线。故 \(\widetilde M\) 测地完备；由 Hopf–Rinow，它也作为度量空间完备。

<h4>第二十三步：在覆盖面重复直径论证</h4>
\(\widetilde M\) 连通、完备，且第二十一步给了同一个 Ricci 下界。因此第二至十九步原封不动适用于覆盖面：
<div class="eq">$$\operatorname{diam}(\widetilde M)\le\pi R.$$</div>
再由 Hopf–Rinow 的闭有界集紧致，\(\widetilde M\) 本身紧致。

<h4>第二十四步：证明覆盖纤维只有有限个点</h4>
固定 \(x\in M\)。纤维 \(p^{-1}(x)\) 是闭集，因为 \(p\) 连续且单点闭；它又是离散集，因为覆盖映射在每个原像附近单叶。闭集落在紧致的 \(\widetilde M\) 中仍紧致，而紧致离散集只有有限个点，所以 \(p^{-1}(x)\) 有限。

<h4>第二十五步：把纤维数与基本群联系起来</h4>
给定基点的一个提升 \(\tilde x\)，底面每个基点环路从 \(\tilde x\) 开始提升，终点在 \(p^{-1}(x)\)。两个环路的同伦类相同，当且仅当提升终点相同（万有覆盖单连通）。故 \(\pi_1(M,x)\) 与这个纤维作为集合一一对应；纤维有限，基本群就有限。

<div class="keybox">$$\boxed{\operatorname{Ric}\ge\frac{n-1}{R^2}g,\quad M\text{ 完备}
\ \Longrightarrow\ \operatorname{diam}(M)\le\pi R,\quad |\pi_1(M)|<\infty.}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>正 Ricci 下界让足够长的极小测地线出现“负的第二变分”；同样的估计施加到万有覆盖，迫使覆盖面紧致，纤维于是有限。</div>`
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
给定同一对空间之间的连续映射，同伦是指用连续的 \(H:X\times I\to Y\) 把一个映射逐渐变成另一个。要分别验证自反、对称和传递。

<h4>第1步：固定同伦的定义</h4>
回忆：\(f\simeq g\) 意味着 \(H(x,0)=f(x),H(x,1)=g(x)\)，且 \(H\) 连续。

所有验证都要同时检查端点和连续性，不能只给出公式。

本步得到：同伦验证有统一标准。

<h4>第2步：构造自反同伦</h4>
回忆：恒定于时间的映射是连续映射的复合。

令 \(H(x,t)=f(x)\)，则 \(H(x,0)=H(x,1)=f(x)\)，由投影 \(X\times I\to X\) 与 \(f\) 复合可知连续。

本步得到：得到 \(f\simeq f\)。

<h4>第3步：倒转一段同伦</h4>
回忆：区间反向 \(t\mapsto1-t\) 是连续的。

已知 \(H:f\simeq g\)，令 \(\bar H(x,t)=H(x,1-t)\)。端点分别为 \(g(x),f(x)\)，复合映射连续。

本步得到：得到 \(g\simeq f\)。

<h4>第4步：为传递性准备两段</h4>
回忆：设 \(H:f\simeq g\) 与 \(K:g\simeq h\)。

两段在共同端点满足 \(H(x,1)=g(x)=K(x,0)\)，所以可以尝试拼接。

本步得到：拼接处有匹配条件。

<h4>第5步：压缩第一段时间</h4>
回忆：连续重参数化保持连续性。

在 \(0\le t\le1/2\) 定义 \(L(x,t)=H(x,2t)\)；当 \(t=1/2\) 时值为 \(g(x)\)。

本步得到：第一段走完 \(f\) 到 \(g\)。

<h4>第6步：压缩第二段时间</h4>
回忆：同一原理用于 \(K\)。

在 \(1/2\le t\le1\) 定义 \(L(x,t)=K(x,2t-1)\)；当 \(t=1/2\) 时值也是 \(g(x)\)。

本步得到：两段在接缝一致。

<h4>第7步：验证整个拼接连续</h4>
回忆：粘贴引理说闭集上的连续映射在交集相同即可拼成连续映射。

\(X\times[0,1/2]\) 和 \(X\times[1/2,1]\) 是闭集，交集 \(X\times\{1/2\}\) 上两公式同为 \(g(x)\)。

本步得到：\(L:X\times I\to Y\) 连续。

<h4>第8步：检查首尾并收束</h4>
回忆：传递性还需要正确端点。

<div class="eq">$$L(x,0)=H(x,0)=f(x)$$</div>，\(L(x,1)=K(x,1)=h(x)\)。连同前两项，三条公理均成立。

本步得到：同伦是等价关系。

<div class="keybox">$$\boxed{\simeq\ \text{是连续映射集上的等价关系}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>恒定、倒放、拼接三种时间操作分别给出自反、对称、传递。</div>`,
    1: L`<h4>我们要证明什么</h4>
设 \(f:X\to Y\)、\(g:Y\to X\) 是同伦逆。证明它们使连通分支集合双射。

<h4>第1步：先定义分支映射</h4>
回忆：连通分支是含某点的极大连通子集。

若 \(C\subset X\) 连通，则连续像 \(f(C)\) 连通，所以落在 \(Y\) 的唯一连通分支 \(D\) 中。记 \(f_\pi(C)=D\)。

本步得到：分支映射有定义。

<h4>第2步：检查与选点无关</h4>
回忆：同一分支内任何两点都在一个连通集里。

取 \(x,x'\in C\)，则 \(f(x),f(x')\in f(C)\subset D\)，故用哪个点标记都得到 \(D\)。

本步得到：\(f_\pi\) 良定义。

<h4>第3步：同伦的两个端点在同一分支</h4>
回忆：对每个 \(x\)，轨迹 \(t\mapsto H(x,t)\) 是一条连续道路。

若 \(H:gf\simeq\mathrm{id}_X\)，那么 \(gf(x)\) 与 \(x\) 被该道路连起来，因此处于同一连通分支。

本步得到：\((gf)_\pi\) 是恒等映射。

<h4>第4步：把复合关系移到分支上</h4>
回忆：连续像的分支映射满足复合律。

对每个 \(C\)，<div class="eq">$$g_\pi(f_\pi(C))=(gf)_\pi(C)=C$$</div>。

本步得到：\(g_\pi f_\pi=\mathrm{id}\)。

<h4>第5步：反向再做一次</h4>
回忆：同伦 \(fg\simeq\mathrm{id}_Y\) 给每个 \(y\) 一条连接 \(fg(y)\) 和 \(y\) 的道路。

因此 \(f_\pi g_\pi=\mathrm{id}_{\pi_0^{\rm conn}(Y)}\)。

本步得到：两个分支映射互逆。

<h4>第6步：得出基数相等</h4>
回忆：互逆映射必为双射。

\(f_\pi\) 与 \(g_\pi\) 互逆，所以连通分支集合等势；有限时个数相同，无限时也有双射。

本步得到：连通分支数不变。

<h4>第7步：辨认更强结论</h4>
回忆：道路也保持在连续映射下的道路。

上述论证把“连通分支”改为“道路分支”仍成立，因为同伦轨迹就是道路。

本步得到：同伦等价也保持道路分支。

<h4>第8步：检查空空间和无限多个分支</h4>
回忆：集合双射的定义不要求集合有限；空集的分支集合也是空集。

若 \(X=\varnothing\)，同伦等价必须有 \(Y\to X\)，所以 \(Y=\varnothing\)。若分支无限多个，\(f_\pi,g_\pi\) 互逆的等式仍逐个分支成立。

本步得到：结论覆盖所有分支个数情形。

<div class="keybox">$$\boxed{\pi_0^{\rm conn}(X)\cong\pi_0^{\rm conn}(Y)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>同伦逆在分支上仍互为逆，因为同伦轨迹把对应点连在同一分支。</div>`
  },
  "t2": {
    0: L`<h4>我们要证明什么</h4>
连续映射 \(f:(X,x_0)\to(Y,f(x_0))\) 把基点环路送到基点环路；需证明同伦类上的映射良定、保乘法，并与复合相容。

<h4>第1步：定义候选映射</h4>
回忆：基点环路满足 \(\gamma(0)=\gamma(1)=x_0\)。

令 \(f_*[\gamma]=[f\circ\gamma]\)；端点都是 \(f(x_0)\)，所以右边是目标基本群的元素。

本步得到：候选映射有正确值域。

<h4>第2步：核对同伦类良定</h4>
回忆：基点同伦 \(H(s,t)\) 在 \(s=0,1\) 恒为 \(x_0\)。

若 \(\gamma\sim\eta\)，则 \(fH(s,t)=f(H(s,t))\) 连续，首尾为 \(f\gamma,f\eta\)，左右边界恒为 \(f(x_0)\)。

本步得到：\([f\gamma]=[f\eta]\)。

<h4>第3步：展开环路乘积</h4>
回忆：拼接定义按两个半区间分别运行环路。

\((\alpha*\beta)(t)=\alpha(2t)\) 当 \(t\le1/2\)，否则为 \(\beta(2t-1)\)。

本步得到：可逐段比较 \(f\) 与拼接。

<h4>第4步：逐段比较同态等式</h4>
回忆：复合映射可直接代入分段公式。

\(f((\alpha*\beta)(t))\) 在两段分别为 \(f\alpha(2t), f\beta(2t-1)\)，这正是 \((f\alpha*f\beta)(t)\)。

本步得到：<div class="eq">$$f_*([\alpha][\beta])=f_*[\alpha]f_*[\beta]$$</div>。

<h4>第5步：检查单位与逆元</h4>
回忆：群同态由乘法性质自动保单位和逆元，也可直接核对。

常值环路送到常值环路；\(f(\bar\gamma(t))=f(\gamma(1-t))=\overline{f\gamma}(t)\)。

本步得到：群结构完全相容。

<h4>第6步：核对恒等映射</h4>
回忆：\(\mathrm{id}_X\circ\gamma=\gamma\)。

对每一同伦类，\((\mathrm{id}_X)_*[\gamma]=[\gamma]\)。

本步得到：恒等连续映射诱导恒等群同态。

<h4>第7步：核对复合映射</h4>
回忆：映射复合满足结合律。

若 \(g:W\to X\)，则 \((f\circ g)_*[\gamma]=[f\circ g\circ\gamma]=f_*([g\circ\gamma])=(f_*g_*)[\gamma]\)。

本步得到：得到函子复合律。

<h4>第8步：把函子律落实到正确基点</h4>
回忆：诱导映射的目标群基点是原映射对基点的像。

若 \(g:(W,w_0)\to(X,x_0)\) 且 \(f:(X,x_0)\to(Y,y_0)\)，则 \(g(w_0)=x_0\)、\(f(x_0)=y_0\)。所以 \(g_*:\pi_1(W,w_0)\to\pi_1(X,x_0)\) 与 \(f_*:\pi_1(X,x_0)\to\pi_1(Y,y_0)\) 的源、靶正好接上。

本步得到：复合等式是带基点群之间的等式。

<div class="keybox">$$\boxed{(f\circ g)_*=f_*\circ g_*}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>把环路逐点送过去，先检查同伦类，再逐段检查拼接。</div>`,
    1: L`<h4>我们要证明什么</h4>
若 \(H:f\simeq g\) 固定基点 \(x_0\)，则两映射诱导相同的基本群同态。由此证明<strong>基点保持的</strong>同伦等价诱导同构；一般同伦等价须加入基点变换。

<h4>第1步：写清固定基点</h4>
回忆：\(f\simeq g\operatorname{rel}x_0\) 指 \(H(x_0,t)=y_0\) 恒定。

这保证 \(f(x_0)=g(x_0)=y_0\)，所以 \(f_*,g_*\) 有同一个目标群。

本步得到：两同态可比较。

<h4>第2步：拿任意基点环路</h4>
回忆：基本群元素由 \(\gamma:I\to X\) 且 \(\gamma(0)=\gamma(1)=x_0\) 表示。

令 \(K(s,t)=H(\gamma(s),t)\)，它由连续映射复合而连续。

本步得到：构造了像环路间的候选同伦。

<h4>第3步：核对同伦四边</h4>
回忆：基点同伦需要左右边界不动。

\(K(s,0)=f\gamma(s), K(s,1)=g\gamma(s)\)，且 \(K(0,t)=K(1,t)=H(x_0,t)=y_0\)。

本步得到：\(f\gamma\sim g\gamma\) 相对基点。

<h4>第4步：传到所有群元素</h4>
回忆：相同同伦类代表相同基本群元素。

任意 \([\gamma]\) 都满足 \(f_*[\gamma]=[f\gamma]=[g\gamma]=g_*[\gamma]\)。

本步得到：\(f_*=g_*\)。

<h4>第5步：套用基点同伦逆</h4>
回忆：若 \(u:X\to Y,v:Y\to X\) 的两复合同伦分别固定相应基点，函子性可用。

\(v_*u_*=(vu)_*=(\mathrm{id}_X)_*\)，\(u_*v_*=(uv)_*=(\mathrm{id}_Y)_*\)。

本步得到：\(u_*\) 为同构。

<h4>第6步：记录同伦中的基点道路</h4>
回忆：普通同伦 \(H:f\simeq g\) 未必固定 \(x_0\)。

令 \(c(t)=H(x_0,t)\)，则 \(c(0)=f(x_0)=y_0\)、\(c(1)=g(x_0)=y_1\)。所以 \(f_*\) 与 \(g_*\) 分别落在 \(\pi_1(Y,y_0)\) 和 \(\pi_1(Y,y_1)\)，不能在搬运基点前直接写 \(f_*=g_*\)。

本步得到：需要沿 (c) 建立两个目标群的同构。

<h4>第7步：构造并验证基点变换</h4>
回忆：道路 \(c:y_0\to y_1\) 能把 \(y_1\) 处的环路接回 \(y_0\)。

定义 <div class="eq">$$c_\#:\pi_1(Y,y_1)\to\pi_1(Y,y_0)$$</div>，\(c_\#[\alpha]=[c*\alpha*\bar c]\)。若 \(\alpha\) 相对基点同伦，前后接同一条道路仍同伦；\(\bar c\) 给出逆映射，因为 \(c*\bar c\) 和 \(\bar c*c\) 都可收缩。沿方形 \(H(\gamma(s),t)\) 的四边读取，得到 \(f_*[\gamma]=c_\#(g_*[\gamma])\)。

本步得到：一般同伦满足 (f_*=c_#circ g_*)。

<h4>第8步：验证一般同伦等价的同构</h4>
回忆：同伦等价有两段复合同伦；各自的基点轨迹给基点变换同构。

令 \(u:X\to Y\)、\(v:Y\to X\) 为同伦逆，取 \(y_0=u(x_0)\)。由 \(vu\simeq\mathrm{id}_X\) 和上步公式，\(v_*u_*:\pi_1(X,x_0)\to\pi_1(X,vu(x_0))\) 是基点变换同构；于是 \(u_*\) 单射。再以 \(y_0\) 为基点用 \(uv\simeq\mathrm{id}_Y\)，可知 \(u_*\) 在基点 \(vu(x_0)\) 处的版本满射。将 \(x_0\) 沿复合同伦轨迹搬到 \(vu(x_0)\)，诱导映射与基点变换可交换，所以 \(u_*:\pi_1(X,x_0)\to\pi_1(Y,y_0)\) 也满射。

本步得到：任意同伦等价都诱导基本群抽象同构。

<div class="keybox">$$\boxed{f\simeq g\operatorname{rel}x_0\Longrightarrow f_*=g_*}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>同伦让每条像环路一起变形；基点轨迹若动了，先搬运基点。</div>`
  },
  "t3": {
    0: L`<h4>我们要证明什么</h4>
取道路连通开集 \(U,V\subset X\)，\(X=U\cup V\)，\(W=U\cap V\) 道路连通，基点 \(x_0\in W\)。要严格推出群的融合自由积公式；\(N\) 是两包含像“必须相等”的差的<strong>正规闭包</strong>。

<h4>第1步：固定开覆盖与基点</h4>
回忆：开覆盖保证道路的紧参数区间能细分为落在单一开集的小段。

记 \(A=\pi_1(U,x_0),B=\pi_1(V,x_0),C=\pi_1(W,x_0)\)。

本步得到：三个群和共同基点已明确。

<h4>第2步：写出两个包含同态</h4>
回忆：连续包含会诱导基本群同态。

记 \(i:C\to A\)、\(j:C\to B\)，由 \(W\hookrightarrow U,V\) 得到。

本步得到：交集的环路有两种像。

<h4>第3步：定义自由积</h4>
回忆：\(A*B\) 由来自 \(A\) 与 \(B\) 的字组成，仅保留各群内部关系。

设典范嵌入 \(\iota_A:A\to A*B\)、\(\iota_B:B\to A*B\)。

本步得到：先有不施加交集关系的候选群。

<h4>第4步：施加融合关系</h4>
回忆：在 \(X\) 里同一 \(W\) 环路不应有两个不同名字。

令 <div class="eq">$$N=\langle\!\langle\iota_A i(c)(\iota_B j(c))^{-1}:c\in C\rangle\!\rangle$$</div>，双尖括号表示正规闭包。

本步得到：商群 \(Q=(A*B)/N\) 有目标关系。

<h4>第5步：构造到 \(\pi_1(X)\) 的同态</h4>
回忆：两包含 \(U,V\hookrightarrow X\) 给 \(A,B\to\pi_1(X)\)。

自由积的泛性质把它们拼成 \(\Phi_0:A*B\to\pi_1(X)\)。

本步得到：每个字可看成 \(X\) 中拼接环路。

<h4>第6步：验证 \(\Phi_0\) 消掉 \(N\)</h4>
回忆：交集环路在 \(X\) 中无论经 \(U\) 还是 \(V\) 包含都是同一环路。

\(\Phi_0(\iota_A i(c)(\iota_Bj(c))^{-1})=1\)，故整个正规闭包都入核。

本步得到：\(\Phi_0\) 降为 \(\Phi:Q\to\pi_1(X)\)。

<h4>第7步：细分任意环路</h4>
回忆：\(\gamma^{-1}(U),\gamma^{-1}(V)\) 是 \(I\) 的开覆盖。

Lebesgue 数给分点 \(0=t_0<\cdots<t_m=1\)，每一段 \(\gamma([t_{k-1},t_k])\) 在 \(U\) 或 \(V\) 中。

本步得到：每段有一个字母类型。

<h4>第8步：让切换点落在交集</h4>
回忆：若相邻段分别选 \(U\) 与 \(V\)，它们共同端点属于两者。

在同类相邻段之间合并；余下每个切换点 \(z_k=\gamma(t_k)\) 属于 \(W\)。

本步得到：可从交集把各段接回基点。

<h4>第9步：选择连接道路</h4>
回忆：\(W\) 道路连通。

对每个切换点选 \(\lambda_k:x_0\to z_k\) 位于 \(W\)，两端取常值道路。

本步得到：有了闭合每个片段的辅助道路。

<h4>第10步：把每段改成环路</h4>
回忆：道路乘积允许用往返道路补齐端点。

令 \(\ell_k=\lambda_{k-1}*\gamma_k*\bar\lambda_k\)，其像位于该段所属的 \(U\) 或 \(V\)。

本步得到：每个片段给 \(A\) 或 \(B\) 的元素。

<h4>第11步：重新拼回原环路</h4>
回忆：\(\bar\lambda_k*\lambda_k\) 与常值道路相对端点同伦。

\(\ell_1*\cdots*\ell_m\simeq\gamma\)，因为内部辅助道路逐对抵消。

本步得到：\(\Phi\) 满射。

<h4>第12步：把单词赋给细分</h4>
回忆：按各段类型把 \([\ell_k]\) 放入自由积再取 \(Q\)。

得到 \(q(\gamma;\text{细分},\lambda)=\prod_k[\ell_k]\in Q\)。

本步得到：开始构造 \(\Phi\) 的逆。

<h4>第13步：改变一条辅助道路</h4>
回忆：两条 \(x_0\to z_k\) 的 \(W\) 道路之差构成 \(W\) 环路。

替换 \(\lambda_k\) 会在相邻两个字母中分别乘上 \(i(c)\) 与 \(j(c)^{-1}\)；在 \(Q\) 中这两者相等并相消。

本步得到：\(q\) 不依赖辅助道路。

<h4>第14步：加一个同类分点</h4>
回忆：道路拼接的中间补路往返可约掉。

若在单一 \(U\) 段中再切一刀，两小段改成的两环路在 \(A\) 中乘积就是原段环路；\(V\) 情况相同。

本步得到：\(q\) 不依赖同类细分。

<h4>第15步：处理不同的开集标签</h4>
回忆：一小段若同时落在 \(U\) 与 \(V\)，其闭合环路可选在 \(W\)。

该环路在两群中分别是 \(i(c),j(c)\)，\(Q\) 的定义强制它们相同。

本步得到：\(q\) 不依赖标签选择。

<h4>第16步：统一两套细分</h4>
回忆：有限分点集可取公共加细。

先把两套细分共同加细，再用前两步逐一比较，所得 \(Q\) 元素相同。

本步得到：\(q\) 只依赖环路本身。

<h4>第17步：考虑环路同伦</h4>
回忆：设 \(H:I^2\to X\) 为基点同伦。

逆像 \(H^{-1}(U),H^{-1}(V)\) 开覆盖紧方形，取足够细的方格三角化，使每小三角形像落在一个开集。

本步得到：同伦可拆成有限局部关系。

<h4>第18步：把同伦方格化成局部换路</h4>
回忆：开覆盖的 Lebesgue 数保证足够小的闭三角形整个落在 \(U\) 或 \(V\)。

对基点同伦 \(H:I^2\to X\) 取细三角剖分并给每个小三角形标记 \(U\) 或 \(V\)。沿三角形两条边走，与沿第三条反向边走，在该开集中相对端点同伦：因为三角形本身可缩。相邻三角形若标签不同，其公共边的像同时在 \(U,V\) 内，故位于 \(W\)。沿水平路径形成单词时，只在标签转换的顶点接一条 \(W\) 道路回基点；这样的顶点确实在 \(W\)，无需把任意内部顶点接到 \(W\)。

本步得到：每个小三角形提供一次合法的局部换路。

<h4>第19步：核对局部换路不改变商群元素</h4>
回忆：三角形的边界在其标签开集中零伦；同一条位于 \(W\) 的边在两群中的像由商关系认成同一个元素。

扫过一个小三角形时，先把同时落在 \(U,V\) 的公共边改用三角形的标签；这只用 \(i(c)=j(c)\) 的关系。三角形边界在该标签群中是单位，所以把两条边替换为第三条不改变单词在 \(Q\) 中的值。沿有限个小三角形从同伦方形的下边扫到上边，内部边以相反方向成对消去；左右基点边对应常值道路。

本步得到：同伦的始末环路给出同一商群元素。

<h4>第20步：定义逆同态</h4>
回忆：前述独立性让 \(\Psi[\gamma]=q(\gamma)\) 良定义。

两环路串接的细分可直接拼接，故 \(\Psi([\alpha][\beta])=\Psi[\alpha]\Psi[\beta]\)。

本步得到：\(\Psi:\pi_1(X)\to Q\) 是同态。

<h4>第21步：检查 \(\Phi\Psi\)</h4>
回忆：每段构造的辅助道路在 \(X\) 中相邻抵消。

\(\Phi\Psi[\gamma]=[\ell_1*\cdots*\ell_m]=[\gamma]\)。

本步得到：复合在 \(\pi_1(X)\) 上恒等。

<h4>第22步：检查 \(\Psi\Phi\)</h4>
回忆：自由积由 \(A,B\) 的字母生成。

对完全位于 \(U\) 或 \(V\) 的环路，取单段细分，\(\Psi\Phi\) 保持该字母；因 \(N\) 已商掉，保持整个 \(Q\)。

本步得到：\(\Psi\Phi=\mathrm{id}_Q\)。

<h4>第23步：写出最终同构</h4>
回忆：互逆同态给群同构。

得到 \(\pi_1(X,x_0)\cong(A*B)/N\)；开集和交集道路连通是构造中实际用到的条件。

本步得到：van Kampen 公式得证。

<div class="keybox">$$\boxed{\pi_1(X,x_0)\cong(\pi_1(U,x_0)*\pi_1(V,x_0))/\langle\!\langle i(c)j(c)^{-1}\rangle\!\rangle}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>把环路切成两类字，交集环路的两种写法在商群中认成同一个。</div>`,
    1: L`<h4>我们要证明什么</h4>
对带基点空间 \((X,x_0),(Y,y_0)\)，把乘积空间中的环路投影到两个因子，证明所得映射是群同构。

<h4>第1步：从环路取坐标</h4>
回忆：乘积拓扑中映射 \(\gamma:I\to X\times Y\) 连续当且仅当两个坐标连续。

写 \(\gamma(t)=(\alpha(t),\beta(t))\)，端点为 \((x_0,y_0)\) 使 \(\alpha,\beta\) 各是基点环路。

本步得到：每条乘积环路有一对坐标环路。

<h4>第2步：定义投影映射</h4>
回忆：投影 \(p_X,p_Y\) 是连续映射。

令 \(P[\gamma]=([p_X\gamma],[p_Y\gamma])\)。

本步得到：得到候选 \(P:\pi_1(X\times Y)\to\pi_1(X)\times\pi_1(Y)\)。

<h4>第3步：证明良定</h4>
回忆：乘积空间中的同伦投影后仍是同伦。

若 \(H\) 连接 \(\gamma_0,\gamma_1\)，则 \(p_XH,p_YH\) 分别连接对应坐标环路且固定基点。

本步得到：\(P\) 与代表元无关。

<h4>第4步：核对乘法</h4>
回忆：坐标投影逐段保拼接。

\(p_X(\gamma*\delta)=p_X\gamma*p_X\delta\)，\(p_Y\) 也一样，所以 \(P([\gamma][\delta])=P[\gamma]P[\delta]\)。

本步得到：\(P\) 是同态。

<h4>第5步：构造逆映射</h4>
回忆：两条坐标环路合成乘积环路。

定义 \(J([\alpha],[\beta])=[t\mapsto(\alpha(t),\beta(t))]\)。

本步得到：有逆映射候选。

<h4>第6步：核对逆映射良定</h4>
回忆：两坐标同伦可同步配对。

若 \(H_X:\alpha\sim\alpha'\)、\(H_Y:\beta\sim\beta'\)，则 \((H_X(s,t),H_Y(s,t))\) 是乘积同伦。

本步得到：\(J\) 与两边代表元无关。

<h4>第7步：检查两个复合</h4>
回忆：取坐标再配对会回到原环路。

\(PJ([\alpha],[\beta])=([\alpha],[\beta])\)；<div class="eq">$$JP[\gamma]=[t\mapsto(p_X\gamma(t),p_Y\gamma(t))]=[\gamma]$$</div>。

本步得到：\(P,J\) 互逆。

<h4>第8步：逐段验证逆映射也保乘法</h4>
回忆：乘积环路的拼接按两个坐标同步进行。

设 \(J([\alpha],[\beta])=[(\alpha,\beta)]\)。对两对环路，\(J([\alpha][\alpha'],[\beta][\beta'])=[(\alpha*\alpha',\beta*\beta')]=[(\alpha,\beta)*(\alpha',\beta')]=J([\alpha],[\beta])J([\alpha'],[\beta'])\)。

本步得到：逆映射也是群同态。

<div class="keybox">$$\boxed{\pi_1(X\times Y,(x_0,y_0))\cong\pi_1(X,x_0)\times\pi_1(Y,y_0)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>乘积环路就是一对同步运行的环路。</div>`
  },
  "t4": {
    0: L`<h4>我们要做什么</h4>给定覆叠映射 \(p:\widetilde X\to X\)、道路 \(\gamma:[0,1]\to X\) 和起点上方的点 \(\widetilde x_0\in p^{-1}(\gamma(0))\)。我们逐段使用覆盖片的局部逆，并把存在性与唯一性分别证明。<h4>第1步：回忆均匀覆盖邻域</h4>回忆：覆叠的定义说每个 x∈X 都有开邻域 U，使 p⁻¹(U) 分裂成互不相交的开片。<div class="eq">$$p^{-1}(U)=\coprod_{\alpha}U_{\alpha},\qquad p|_{U_\alpha}:U_\alpha\xrightarrow{\cong}U.$$</div>每个限制都是同胚，所以在一张片内可以单值地取逆。本步得到：局部提升的公式已经存在。<h4>第2步：把覆盖拉回参数区间</h4>回忆：γ 连续，所以均匀覆盖邻域的逆像 γ⁻¹(U) 是 [0,1] 中的开集。让 U 跑遍 γ([0,1]) 上的均匀覆盖邻域，所得逆像构成 [0,1] 的开覆盖。本步得到：问题被转化为紧区间上的开覆盖。<h4>第3步：使用紧致性取得 Lebesgue 数</h4>回忆：紧致度量空间的每个开覆盖都有 Lebesgue 数 δ>0。选 δ，使任何长度小于 δ 的参数小区间都完整落入某个 γ⁻¹(U)。本步得到：足够短的一段道路必落在同一个均匀覆盖邻域。<h4>第4步：选取有限分点</h4>回忆：把区间切得比 δ 更细即可。<div class="eq">$$0=t_0<t_1<\cdots<t_m=1,\qquad t_i-t_{i-1}<\delta.$$</div>对每个 i 选均匀覆盖邻域 Uᵢ，使 γ([tᵢ₋₁,tᵢ])⊂Uᵢ。本步得到：只需有限次局部构造。<h4>第5步：确定第一张覆盖片</h4>回忆：纤维中的一点位于 p⁻¹(U₁) 的唯一连通片中。记含 \(\widetilde x_0\) 的片为 \(U_{1,\alpha_1}\)。片互不相交，所以这个选择没有歧义。本步得到：初始点选定了第一张片。<h4>第6步：在第一小段写出提升公式</h4>回忆：同胚 p|U₁,α₁ 有连续逆。<div class="eq">$$\widetilde\gamma(t)=\bigl(p|_{U_{1,\alpha_1}}\bigr)^{-1}(\gamma(t)),\qquad t\in[t_0,t_1].$$</div>代入 t=t₀，逆映射选中的正是给定点 \(\widetilde x_0\)。本步得到：第一段提升连续、投影正确且起点正确。<h4>第7步：取第一段的终点</h4>回忆：连续小段已经在 t₁ 给出唯一值。<div class="eq">$$\widetilde x_1:=\widetilde\gamma(t_1),\qquad p(\widetilde x_1)=\gamma(t_1).$$</div>这个点将成为下一小段的指定起点。本步得到：相邻小段有了接缝数据。<h4>第8步：确定第二张覆盖片</h4>回忆：p⁻¹(U₂) 也分解成互不相交的片。在这些片中，只有一张含 \(\widetilde x_1\)；记为 U₂,α₂。即使 U₁ 与 U₂ 重叠，也不能重新随意挑片。本步得到：上一段终点唯一决定下一段所在层。<h4>第9步：重复局部逆公式</h4>回忆：下一段和第一段使用同一构造。<div class="eq">$$\widetilde\gamma(t)=\bigl(p|_{U_{2,\alpha_2}}\bigr)^{-1}(\gamma(t)),\qquad t\in[t_1,t_2].$$</div>在 t₁ 处该式等于 \(\widetilde x_1\)，与第一段终点一致。本步得到：前两段可以连续拼接。<h4>第10步：做有限归纳</h4>回忆：每一步只需要前一段终点和下一段的均匀覆盖邻域。依次得到覆盖片 Uᵢ,αᵢ 以及 [tᵢ₋₁,tᵢ] 上的提升；因为 m 有限，过程必在 t=1 结束。本步得到：提升在每个闭小区间上都有定义。<h4>第11步：应用粘贴引理</h4>回忆：有限个闭集覆盖 [0,1]，其上的连续映射若在交集一致，就能拼成连续映射。相邻区间只在端点 tᵢ 相交，而两段公式都取值 \(\widetilde x_i\)。所以所有局部提升拼成连续 \(\widetilde\gamma:[0,1]\to\widetilde X\)。本步得到：提升的存在性得证。<h4>第12步：核对投影等式</h4>回忆：每个局部公式都是覆盖片逆映射与 γ 的复合。<div class="eq">$$p\circ\widetilde\gamma(t)=p\circ(p|_{U_{i,\alpha_i}})^{-1}(\gamma(t))=\gamma(t).$$</div>小区间覆盖全部参数，因此等式处处成立。本步得到：构造出的道路确实是 γ 的提升。<h4>第13步：为唯一性定义相等时刻集合</h4>回忆：设 \(\widetilde\gamma_1,\widetilde\gamma_2\) 是同起点的两个提升。<div class="eq">$$A=\{t\in[0,1]:\widetilde\gamma_1(t)=\widetilde\gamma_2(t)\}.$$</div>起点相同给出 0∈A。本步得到：只需证明 A 既开又闭，或等价地证明 A 与补集都开。<h4>第14步：证明 A 是开集</h4>回忆：若两个提升在 t₀ 相等，取其公共像附近的均匀覆盖邻域 U。连续性使 t₀ 附近两条提升都留在含公共点的同一覆盖片；在该片中 p 是单射，而两者投影都等于 γ，所以它们在这个参数邻域完全相等。本步得到：A 中每点都有仍在 A 内的邻域。<h4>第15步：证明补集也是开集</h4>回忆：若两提升在 t₀ 不同，它们位于同一纤维的两个不同点。取底点的均匀覆盖邻域 U；两个点落在两张互不相交的覆盖片。缩小参数邻域后，两条提升分别留在各自片中，因而不可能相等。本步得到：[0,1]\A 也是开集。<h4>第16步：利用区间连通性收束唯一性</h4>回忆：[0,1] 连通，不可能被两个非空互不相交开集 A 与其补集分开。A 非空，且 A 与补集都开，所以补集只能为空，即 A=[0,1]。本步得到：两个同起点提升处处相同。<div class="keybox">$$\boxed{\exists!\,\widetilde\gamma:[0,1]\to\widetilde X,\quad p\widetilde\gamma=\gamma,\quad\widetilde\gamma(0)=\widetilde x_0}$$</div><div class="memobox"><strong>一句话记忆：</strong>先把参数区间切成能落进均匀覆盖邻域的小段；每段取局部逆，而上一段终点唯一决定下一张覆盖片。</div>`,
    1: L`<h4>我们要做什么</h4>设 \(H:I\times I\to X\) 是一族道路的同伦，并已给定底边 \(H(s,0)\) 的提升。我们把方形切成有限小格，从底边开始逐格提升。<h4>第1步：写清初始资料</h4>回忆：同伦提升不能只指定左下角；一般需要指定整条底边的提升。<div class="eq">$$p\circ\widetilde H_0(s)=H(s,0).$$</div>目标是找 \(\widetilde H(s,t)\)，满足 \(\widetilde H(s,0)=\widetilde H_0(s)\)。本步得到：二维问题有一维初始边界。<h4>第2步：用均匀覆盖邻域覆盖像</h4>回忆：H(I²) 中每点都有均匀覆盖邻域。这些邻域的 H 逆像组成紧方形 I² 的开覆盖。本步得到：可以对参数方形使用 Lebesgue 数。<h4>第3步：选足够细的矩形网格</h4>回忆：方形是紧致度量空间，开覆盖有 Lebesgue 数 δ。取网格 \(0=s_0<...<s_m=1\)、\(0=t_0<...<t_n=1\)，使每个闭小矩形直径小于 δ。于是每格 Qᵢⱼ 的 H 像落入某个均匀覆盖邻域 Uᵢⱼ。本步得到：每个小格内都能使用一张覆盖片的逆。<h4>第4步：观察已知底边在一张片内</h4>回忆：第一排小格 Qᵢ₁ 的底边是连通区间。其提升 \(\widetilde H_0([s_{i-1},s_i])\) 落在 p⁻¹(Uᵢ₁) 中；连通集不能同时落在两个互不相交开片，所以整条底边位于同一张片。本步得到：底边不只在一个点，而是整体选定了第一排的片。<h4>第5步：提升左下第一格</h4>回忆：取含该格已知底边的覆盖片 \(U_{11,\alpha}\)。<div class="eq">$$\widetilde H(s,t)=\bigl(p|_{U_{11,\alpha}}\bigr)^{-1}(H(s,t)),\qquad(s,t)\in Q_{11}.$$</div>这是连续映射。本步得到：第一格内部与四条边都有提升。<h4>第6步：核对它与底边初值一致</h4>回忆：在第一格底边上，候选公式与 \(\widetilde H_0\) 都投影为 H，并且二者都落在同一张片。该片上的 p 是单射，所以两者在整条底边相等。本步得到：局部公式满足指定初值。<h4>第7步：沿第一排向右扩张</h4>回忆：相邻格共享一条竖边，前一格已经给出这条边的提升。下一格的像落在 U；共享边提升是连通的，因而落在 p⁻¹(U) 的一张片。选这张片取逆，新旧公式在共享边上由单射性相等。本步得到：可从左到右完成第一排。<h4>第8步：从第一排向第二排扩张</h4>回忆：完成第一排后，第二排每格的下边已经有提升。对第二排重复第四至七步：由已有下边确定覆盖片，再取局部逆，并沿横向依次粘接。本步得到：提升可以逐排向上推进。<h4>第9步：有限次完成全部方格</h4>回忆：网格只有 m×n 个小格。逐排操作在有限步后定义整个 I² 上的候选 \(\widetilde H\)。本步得到：不存在无限过程的收敛问题。<h4>第10步：用粘贴引理证明整体连续</h4>回忆：每格是闭集，局部提升连续，并且在公共边上已经验证相等。有限闭覆盖的粘贴引理给出整个方形上的连续映射。本步得到：所有局部片真正拼成一个同伦。<h4>第11步：核对投影与底边</h4>回忆：每格上的定义都是局部逆与 H 的复合。<div class="eq">$$p\widetilde H=H,\qquad\widetilde H(s,0)=\widetilde H_0(s).$$</div>两个等式分别由局部公式和第六步得到。本步得到：存在性要求全部满足。<h4>第12步：证明提升的唯一性</h4>回忆：若有两个同初始底边的提升，先在第一格比较。它们在第一格底边相同，因此落入同一张覆盖片；p 的单射性迫使它们在第一格相同。再沿公共边逐格归纳，所有方格上都相同。本步得到：指定底边后，二维提升也是唯一的。<h4>第13步：处理相对左端点</h4>回忆：若 H(0,t)=x₀ 恒定，则左边提升 t↦H̃(0,t) 落在离散纤维 p⁻¹(x₀) 中。区间 I 连通，而离散空间的连通子集只有单点，所以 \(\widetilde H(0,t)\) 恒定。本步得到：固定的左端点提升后仍固定。<h4>第14步：处理相对右端点</h4>回忆：若 H(1,t)=x₁ 恒定，完全相同的离散纤维论证适用。t↦H̃(1,t) 连续且值域在 p⁻¹(x₁)，所以它也是常值。本步得到：道路同伦若相对两端点，提升同伦也相对两端点。<h4>第15步：读出常用推论</h4>回忆：两条基点环路若在 X 中相对基点同伦，它们从同一覆盖点出发的提升由同伦提升连接。提升同伦的右边也固定，因此两条提升具有同一个终点。反过来，在万有覆叠里终点相同刻画同伦类。本步得到：提升终点可以检测基本群元素。<h4>第16步：说明紧致性的具体作用</h4>回忆：我们没有假设一张覆盖片覆盖整个同伦像。紧致性只用于得到有限网格；每格小到能局部取逆，然后靠公共边逐块粘接。本步得到：证明中没有把局部逆误当成全局逆。<div class="keybox">$$\boxed{\exists!\,\widetilde H:I^2\to\widetilde X,\quad p\widetilde H=H,\quad\widetilde H(s,0)=\widetilde H_0(s)}$$</div><div class="memobox"><strong>一句话记忆：</strong>把同伦方形切成小格：底边确定第一排，公共边确定邻格，有限次取局部逆便抬起整个同伦。</div>`
  },
  "t5": {
    0: L`<h4>我们要做什么</h4>设 (X) 道路连通、局部道路连通且半局部单连通，固定基点 (x_0)，并记 (G=\pi_1(X,x_0))。我们要把“连通覆叠”与“(G) 的子群”来回构造，并解释为什么忘掉覆叠基点后只能得到共轭类。<h4>第1步：先分清带基点与不带基点的结论</h4>回忆：带基点覆叠是三元组 ((\widetilde X,\widetilde x_0,p))，等价映射还必须保持所选基点。带基点连通覆叠对应具体子群 (H\le G)；若忘掉 (\widetilde x_0)，同一覆叠的不同纤维基点会给出共轭子群。本步得到：题目中的“子群共轭类”来自忘掉覆叠基点。<h4>第2步：调用万有覆叠</h4>回忆：三个局部条件保证存在单连通覆叠 (q:(\widehat X,\widehat x_0)\to(X,x_0))。因为 (\widehat X) 单连通，底空间每条基点环路的提升终点只由其同伦类决定。本步得到：可以在同一个万有覆叠上构造所有中间覆叠。<h4>第3步：让基本群作用在万有覆叠上</h4>回忆：对 ([\gamma]\in G)，可用道路提升把 (\widehat X) 中的点沿 (\gamma) 搬到同一纤维中的另一个点。采用固定的一侧作用约定，写成 (\widehat x\cdot[\gamma])。作用满足 ((\widehat x\cdot g_1)\cdot g_2=\widehat x\cdot(g_1g_2))，并保持投影 (q)。本步得到：G 通过覆叠变换在万有覆叠上作用。<h4>第4步：解释纤维为什么就是一份 G</h4>回忆：从 (\widehat x_0) 提升代表环路 (\gamma)，终点是 (\widehat x_0\cdot[\gamma])。不同同伦类有不同终点；反过来，纤维中每个点可由某条底空间环路的提升到达。因此映射 (g\mapsto\widehat x_0\cdot g) 是集合双射。本步得到：万有覆叠在 (x_0) 上方的点可用 G 的元素编号。<h4>第5步：从一个覆叠抽取子群</h4>回忆：给定连通覆叠 (p:(Y,y_0)\to(X,x_0))，覆叠映射诱导同态 (p_*:\pi_1(Y,y_0)\to G)。<div class="eq">$$H:=p_*\pi_1(Y,y_0)\le G.$$</div>这里 H 由那些在 Y 中闭合的提升所组成。本步得到：每个带基点覆叠都给出一个子群 H。<h4>第6步：证明 p_* 是单射</h4>回忆：若 Y 中环路 (\alpha) 的投影 (p\alpha) 在 X 中零伦，同伦提升定理可把这个零伦提升回 Y。提升的初始边是 (\alpha)，其余三边因落在离散纤维中而保持常值，于是 (\alpha) 也零伦。因此 (\ker p_*=1)。本步得到：可以把 (\pi_1(Y,y_0)) 直接看成 G 的子群。<h4>第7步：用提升闭合判据识别 H</h4>回忆：基点环路 (\gamma) 从 (y_0) 出发有唯一提升 (\widetilde\gamma)。<div class="eq">$$[\gamma]\in Hquad\Longleftrightarrow\quad\widetilde\gamma(1)=y_0.$$</div>向右是某个 Y 中环路的投影；向左时，闭合提升本身就是 Y 中环路。本步得到：H 精确记录哪些底空间环路提升后回到原层。<h4>第8步：更换纤维基点并计算变化</h4>回忆：取同一纤维中的另一点 (y_1)，由于 Y 连通且局部道路连通，可选道路 (\eta:y_0\leadsto y_1)。设 (g=[p\eta]in G)。把以 (y_1) 为基点的环路搬回 (y_0)，投影后得到共轭，所以新子群为 (g^{-1}Hg)（若采用相反的道路乘法约定，式子整体反向但共轭类不变）。本步得到：同一无基点覆叠只确定 H 的共轭类。<h4>第9步：检查覆叠等价不会改变共轭类</h4>回忆：覆叠等价 (F:Y\to Y′) 满足 (p′F=p)。若 F 还保持基点，则 (p_*\pi_1(Y,y_0)=p′_*\pi_1(Y′,F(y_0)))；若不保持指定基点，再用上一步得到共轭。本步得到：“覆叠等价类到子群共轭类”的映射定义良好。<h4>第10步：反向从子群 H 开始</h4>回忆：现在固定任意子群 (H\le G)。在万有覆叠 (\widehat X) 上只保留 H 中元素给出的覆叠变换，并把同一 H 轨道内的点识别。本步得到：候选中间空间是一个轨道商。<h4>第11步：写出商空间与等价关系</h4>回忆：群作用的轨道关系是等价关系。<div class="eq">$$Y_H:=\widehat X/H,\qquad \widehat x\sim_H\widehat x\cdot hquad(h\in H).$$</div>一个商点 ([\widehat x]_H) 是 H 轨道，而不是单个原点。本步得到：H 指定了万有覆叠中哪些层要先拼成一层。<h4>第12步：定义到 X 的投影</h4>回忆：所有覆叠变换都保持 q，即 (q(\widehat x\cdot h)=q(\widehat x))。<div class="eq">$$p_H([\widehat x]_H):=q(\widehat x).$$</div>换代表元不会改变右边，所以公式良定义。本步得到：得到候选映射 (p_H:Y_H\to X)。<h4>第13步：在小邻域上观察轨道商</h4>回忆：取 X 中一个均匀覆盖且可用于万有覆叠的邻域 U。q⁻¹(U) 是互不相交覆盖片的并。H 的作用只会把整张覆盖片搬到另一张覆盖片，不会在一张片内部识别两个不同点，因为作用是自由的。本步得到：商以后每个覆盖片轨道仍留下一个 U 的副本。<h4>第14步：验证 p_H 是覆叠映射</h4>回忆：覆叠定义要求 U 的逆像分成若干开片，每片同胚到 U。从每个 H 轨道中选一张 q 覆盖片作代表；它在商中的像彼此不交，并由 p_H 同胚到 U。这些像覆盖 p_H⁻¹(U)。本步得到：轨道商确实给出一个覆叠。<h4>第15步：验证 Y_H 连通</h4>回忆：连续像保持道路连通。万有覆叠 (\widehat X) 道路连通，而商映射 (\widehat X\to Y_H) 连续且满射，所以 Y_H 道路连通。本步得到：构造落在“连通覆叠”的分类范围内。<h4>第16步：求构造所得覆叠的子群</h4>回忆：底空间环路类 (gin G) 在万有覆叠中把 (\widehat x_0) 提升到 (\widehat x_0\cdot g)。它投到 Y_H 后闭合，当且仅当 ([\widehat x_0\cdot g]_H=[\widehat x_0]_H)，这又当且仅当 (gin H)。本步得到：由 Y_H 取回的子群恰好是原来的 H。<h4>第17步：证明每个覆叠都来自这个构造</h4>回忆：原覆叠 Y 的子群记为 H。万有覆叠可唯一地提升到 Y，得到 (F:\widehat X\to Y)。两点有相同 F 像，当且仅当它们相差一个使提升闭合的元素，而这些元素正是 H。因此 F 的纤维就是 H 轨道。本步得到：F 可下降为双射 (\overline F:\widehat X/H\to Y)。<h4>第18步：验证下降映射是覆叠同构</h4>回忆：在每个均匀覆盖邻域的一张片上，q、p 与商映射都是到 U 的同胚。在这些局部坐标中 (\overline F) 就是 U 上的恒等映射，所以它与逆映射都连续，并满足 (p\overline F=p_H)。本步得到：Y 与 Y_H 作为覆叠等价。<h4>第19步：证明分类映射的单射性</h4>回忆：若两个带基点连通覆叠给出同一 H，它们都等价于 (\widehat X/H)。把一个等价映射的逆与另一个复合，便得到两个原覆叠之间保持基点的覆叠同构。本步得到：同一子群不会产生两个不同的带基点覆叠类。<h4>第20步：忘掉基点得到共轭类</h4>回忆：无基点覆叠允许同构把所选纤维点送到另一点。第 8 步说明这种移动把 H 换成共轭子群；反过来，若 (K=g^{-1}Hg)，用 g 对万有覆叠作一次层的重标号可给出 (Y_H\cong Y_K)。本步得到：无基点连通覆叠恰对应子群的共轭类。<h4>第21步：补上正规覆叠与对称群</h4>回忆：不是每个 H 都能让 G/H 成为群；只有 H 正规时左右陪集一致。<div class="eq">$$\operatorname{Deck}(Y_H/X)\cong N_G(H)/H.$$</div>当且仅当 H 正规时 (N_G(H)=G)，才简化为 (G/H)。本步得到：分类定理也解释了覆叠变换群的正确公式。<h4>第22步：把两个方向并排收口</h4>回忆：正向取 (H=p_*\pi_1(Y,y_0))，反向取 (Y_H=\widehat X/H)。第 16 步证明先反后正回到 H，第 17–18 步证明先正后反回到原覆叠；第 20 步处理忘掉基点。本步得到：两套构造互为逆，对应关系完成。<div class="keybox">$$\boxed{\{\text{连通覆叠 }Y\to X\}/\simeq\;\longleftrightarrow\;\{H\le\pi_1(X,x_0)\}/\text{共轭}}$$</div><div class="memobox"><strong>一句话记忆：</strong>覆叠的每一层由“哪些环路提升后闭合”标记；这个闭合环路集合是子群，换纤维基点只会把它共轭。</div>`,
    1: L`<h4>我们要做什么</h4>在 (X) 道路连通且局部道路连通的前提下，证明：(X) 半局部单连通，当且仅当它存在单连通的万有覆叠。构造时不用猜空间，而是直接把“从基点出发的道路同伦类”当作点。<h4>第1步：写清半局部单连通</h4>回忆：半局部单连通是一个逐点条件。对每个 (xin X)，存在邻域 U，使包含映射诱导的 (\pi_1(U,x)\to\pi_1(X,x)) 为零同态。局部道路连通允许把 U 换成含 x 的道路连通分支。本步得到：可以选道路连通的“小邻域”，其中的环路放到 X 里都可缩。<h4>第2步：定义候选空间的点</h4>回忆：两条同起点、同终点道路若相对端点同伦，就代表同一个道路类。<div class="eq">$$\widehat X:=\{[\alpha]:\alpha(0)=x_0\},\qquad \alpha\sim\beta\iff\alpha\simeq\beta\  \mathrm{rel} \{0,1\}.$$</div>不同终点的道路绝不等价。本步得到：候选空间的一个点就是一段“走法”的同伦类。<h4>第3步：定义终点投影</h4>回忆：同伦相对端点会保持终点。<div class="eq">$$p:\widehat X\to X,\qquad p([\alpha])=\alpha(1).$$</div>所以这个定义不依赖代表道路。本步得到：候选覆叠映射已经写出。<h4>第4步：挑选可用的小邻域 U</h4>回忆：由半局部单连通和局部道路连通，可在每个 x 附近选道路连通开集 U，使 U 中每条环路在 X 中零伦。固定一条终点为 x 的道路类 ([\alpha])。本步得到：下面可以用 U 中短道路延长 α。<h4>第5步：定义一张候选覆盖片</h4>回忆：若 (yin U)，道路连通性保证有 U 中道路 (\eta:x\leadsto y)。<div class="eq">$$B([\alpha],U)=\{[\alpha*\eta]:\eta\text{ 是 }U\text{ 中从 }x\text{ 出发的道路}\}.$$</div>星号表示先走 α，再走 η。本步得到：每个道路类附近得到一个基本邻域。<h4>第6步：证明终点 y 决定唯一道路类</h4>回忆：若 (\eta_1,\eta_2) 都在 U 中从 x 走到 y，则 (\eta_1*\overline{\eta_2}) 是 U 中环路。该环路在 X 中零伦，所以 (\alpha*\eta_1) 与 (\alpha*\eta_2) 相对端点同伦。本步得到：B([α],U) 中每个终点 y 只有一个点。<h4>第7步：得到与 U 的双射</h4>回忆：上一部给单射，道路连通性给满射。<div class="eq">$$p|_{B([\alpha],U)}:B([\alpha],U)\longrightarrow U$$</div>逐点把道路类送到它的终点，是集合上的双射。本步得到：每张候选片恰有一份 U。<h4>第8步：用这些集合定义拓扑</h4>回忆：要定义拓扑，只需验证基本邻域交于一点时还能缩小。若 ([\gamma]in B([\alpha],U)\cap B([\beta],V))，取终点附近道路连通小开集 W⊂U∩V；则 (B([\gamma],W)) 同时包含在两个原集合中。本步得到：这些 B 集构成一个拓扑基。<h4>第9步：证明每张片开且局部同胚</h4>回忆：按定义 B([α],U) 是基本开集。给 U 原有拓扑时，第 7 步的双射把 B 中更小的基本开集恰送到 U 中更小的开集，因此该双射与逆都连续。本步得到：p 在每张 B([α],U) 上是同胚。<h4>第10步：描述 p⁻¹(U) 的所有片</h4>回忆：U 中延长道路不会改变到 x 之前的道路历史。取 p⁻¹(x) 中各道路类 [α]。对应集合 B([α],U) 两两相等或不交，并覆盖 p⁻¹(U)。如果相交，第 6 步的零环路论证会迫使两个中心类相同。本步得到：U 的整个逆像分解成互不相交的覆盖片。<h4>第11步：得出 p 是覆叠映射</h4>回忆：覆叠的定义正是每个底点有这样的均匀覆盖邻域。<div class="eq">$$p^{-1}(U)=\coprod_{[\alpha]\in p^{-1}(x)}B([\alpha],U),\qquad p|_{B([\alpha],U)}\cong U.$$</div>第 9–10 步给出全部条件。本步得到：道路类空间确实覆盖 X。<h4>第12步：证明候选空间道路连通</h4>回忆：一个道路类 [α] 自带一条从基点走到它的路径。定义 (\widehat\alpha(t)=[\alpha_t])，其中 (\alpha_t(s)=\alpha(ts))。终点从 x₀ 沿 α 前进，局部看正是基本邻域中的连续延长。本步得到：每个 [α] 都可由常值道路类连到。<h4>第13步：算出任意底路的显式提升</h4>回忆：从 ([\alpha]) 出发提升道路 (\gamma)，就是不断把已走过的 γ 接到 α 后面。<div class="eq">$$\widetilde\gamma(t)=[\alpha*\gamma_t],\qquad \gamma_t(s)=\gamma(ts).$$</div>终点投影为 γ(t)，t=0 时仍是 [α]。本步得到：道路提升公式与空间构造完全吻合。<h4>第14步：识别基点纤维</h4>回忆：以 x₀ 为终点的道路就是基点环路。<div class="eq">$$p^{-1}(x_0)\cong\pi_1(X,x_0).$$</div>常值道路类对应群单位元。本步得到：万有覆叠的层由基本群元素编号。<h4>第15步：取候选空间中的任意环路</h4>回忆：设 (\Lambda:I\to\widehat X) 从常值道路类出发并回到它。投影 (\gamma=p\Lambda) 是 X 中基点环路；由道路提升唯一性，Λ 必等于第 13 步从常值类出发的显式提升。本步得到：Λ 的终点由 [γ] 决定。<h4>第16步：闭合迫使投影环路零伦</h4>回忆：显式提升的终点是 ([\gamma]in p^{-1}(x_0))。因为 Λ 闭合，这个终点又等于常值道路类，所以 ([\gamma]=1in\pi_1(X,x_0))。本步得到：pΛ 在 X 中有一个相对端点的零伦。<h4>第17步：把零伦提升回来</h4>回忆：覆叠具有同伦提升性质。把 pΛ 的零伦提升到 (\widehat X)，初始边指定为 Λ。边界其余部分投到 x₀ 的离散纤维，且在角点接上常值，因此保持常值。本步得到：Λ 在 (\widehat X) 中也可缩。<h4>第18步：得出单连通性</h4>回忆：空间已在第 12 步证明道路连通，第 17 步证明每个基点环路零伦。<div class="eq">$$\pi_1(\widehat X)=0.$$</div>因此 p 是单连通覆叠。本步得到：正向构造得到万有覆叠。<h4>第19步：开始证明反向必要性</h4>回忆：现在假设已有单连通覆叠 (p:\widetilde X\to X)。对任意 x∈X，选一个均匀覆盖邻域 U，并选 x 上方某点所在的覆盖片 (\widetilde U)。本步得到：要证明 U 中的环路放进 X 后都可缩。<h4>第20步：提升 U 中的环路</h4>回忆：p|Ũ:Ũ→U 是同胚。任意基于 x 的 U 中环路 γ 可用该逆同胚提升为 Ũ 中的闭环路 (\widetilde\gamma)；它从所选纤维点出发，也回到同一点。本步得到：局部环路有一个闭合提升。<h4>第21步：利用覆叠空间单连通</h4>回忆：单连通表示每条闭环路都有零伦。在 (\widetilde X) 中缩掉 (\widetilde\gamma)，再与 p 复合，便得到 γ 在 X 中的零伦。本步得到：包含 (U\hookrightarrow X) 诱导的基本群同态为零。<h4>第22步：收束等价命题</h4>回忆：第 1–18 步从半局部单连通构造万有覆叠；第 19–21 步从万有覆叠推出半局部单连通。道路连通用于讨论一个万有覆叠，局部道路连通用于构造拓扑基中的道路连通 U。本步得到：两个方向都在正确假设下完成。<div class="keybox">$$\boxed{X\text{ 半局部单连通}\quad\Longleftrightarrow\quad X\text{ 存在单连通覆叠}}$$</div><div class="memobox"><strong>一句话记忆：</strong>把“从基点怎样走到 x”当成 x 上方的一层；小邻域里环路若都能在全空间缩掉，这些道路历史就能局部整齐地分成互不相交的覆盖片。</div>`
  },
  "t6": {
    0: L`<h4>我们要做什么</h4>设 (X=U\cup V)，其中 (U,V,U\cap V) 都道路连通，基点 (x_0\in U\cap V)。我们不把“分段后得到自由积”一笔带过，而是逐段拆环路、补连接路、证明满射，再用同伦小方格找出全部关系。<h4>第1步：固定三个包含映射</h4>回忆：交集同时包含在 U 与 V 中，U、V 又包含在 X 中。记 (i:U\cap V\hookrightarrow U)、(j:U\cap V\hookrightarrow V)、(k:U\hookrightarrow X)、(l:V\hookrightarrow X)。它们都保持基点。本步得到：基本群上有四个可比较的诱导同态。<h4>第2步：写出待商掉的关系</h4>回忆：同一条交集环路 ω 放进 U 或 V 后，在 X 中仍是同一条环路。<div class="eq">$$k_*i_*([\omega])=l_*j_*([\omega]).$$</div>所以在自由积里必须加入关系 (i_*([\omega])j_*([\omega])^{-1}=1)。本步得到：交集告诉我们两边哪些词应视为相同。<h4>第3步：先形成自由积</h4>回忆：自由积 (A*B) 的元素是 A、B 中非单位元素交替组成的约化词。<div class="eq">$$F:=\pi_1(U,x_0)*\pi_1(V,x_0).$$</div>U 中环路类和 V 中环路类先彼此自由，不额外交换。本步得到：局部基本群被放进同一个候选群。<h4>第4步：定义到整体基本群的同态</h4>回忆：包含映射给出 (k_*) 与 (l_*)。自由积的万有性质给唯一同态 (\Phi:F\to\pi_1(X,x_0))，使它在两个因子上的限制分别为 k_* 与 l_*。本步得到：任何局部词都能在 X 中按顺序走出来。<h4>第5步：定义关系的正规闭包</h4>回忆：商群中若想令一批元素等于单位，必须商掉包含它们的最小正规子群。<div class="eq">$$N=\left\langle\!\left\langle i_*(\omega)j_*(\omega)^{-1}:\omega\in\pi_1(U\cap V,x_0)\right\rangle\!\right\rangle.$$</div>双尖括号表示正规闭包。本步得到：N 是全部强制交集关系的候选集合。<h4>第6步：证明这些关系都在核里</h4>回忆：第 2 步已说明两个像在 X 中相等。<div class="eq">$$\Phi(i_*(\omega)j_*(\omega)^{-1})=k_*i_*(\omega)\,igl(l_*j_*(\omega)igr)^{-1}=1.$$</div>核是正规子群，所以包含这些元素的正规闭包 N。本步得到：得到 (N\subseteq\ker\Phi)。<h4>第7步：让同态下降到商群</h4>回忆：若 N⊂ker Φ，则 Φ 在每个 N 陪集上取同一个值。<div class="eq">$$\overline\Phi:F/N\longrightarrow\pi_1(X,x_0).$$</div>它把 U、V 中的环路类仍送到它们在 X 中的类。本步得到：只需证明这个下降同态是双射。<h4>第8步：取 X 中任意基点环路</h4>回忆：为证满射，从任意 ([\gamma]\in\pi_1(X,x_0)) 开始。γ 的像被 U、V 覆盖，逆像 (\gamma^{-1}(U),\gamma^{-1}(V)) 是紧区间 I 的开覆盖。本步得到：可以在参数区间上使用 Lebesgue 数。<h4>第9步：把环路切成足够短的小段</h4>回忆：Lebesgue 数保证每个足够短的小区间完整落入一张逆像开集。<div class="eq">$$0=t_0<t_1<\cdots<t_m=1$$</div>使每段 (\gamma_r=\gamma|_{[t_{r-1},t_r]}) 的像完整包含于 U 或完整包含于 V。本步得到：整体环路变成有限个局部道路片段。<h4>第10步：合并连续落在同一开集的段</h4>回忆：相邻两段若都在 U 中，可直接合成一段；在 V 中也一样。不断合并后，段的标签可令 U、V 交替。每个真正换标签的分点 (x_r=\gamma(t_r)) 同时属于 U 和 V。本步得到：所有转场点都落在道路连通的交集。<h4>第11步：从基点连到每个转场点</h4>回忆：U∩V 道路连通，故可在交集中选道路 (c_r:x_0\leadsto x_r)。取 c₀ 与 c_m 为常值道路。对每一局部段 γᵣ，考虑加上前后连接路的闭环路。本步得到：每段都能被改造成以统一 x₀ 为基点的环路。<h4>第12步：写出局部基点环路</h4>回忆：若 γᵣ 落在 U，则 cᵣ₋₁、cᵣ 也落在 U；V 情形相同。<div class="eq">$$\alpha_r=c_{r-1}*\gamma_r*\overline{c_r}.$$</div>因此 αᵣ 代表 π₁(U,x₀) 或 π₁(V,x₀) 中的元素。本步得到：从 γ 得到自由积中的词 ([\alpha_1]\cdots[\alpha_m])。<h4>第13步：检查连接路会逐对消掉</h4>回忆：相邻因子中出现 (\overline{c_r}*c_r)，这是先原路返回再原路走出的可缩回头路。把 α₁*⋯*αₘ 展开后，所有中间连接路成对收缩，只留下 γ₁*⋯*γₘ，也就是 γ。本步得到：Φ 把该局部词送到 [γ]。<h4>第14步：得到满射</h4>回忆：γ 是任意基点环路。第 8–13 步为它构造了 F 中原像，因此 Φ 满射，下降后的 (\overline\Phi) 也满射。本步得到：X 中每条环路都能写成 U、V 局部环路的交替词。<h4>第15步：为核的计算改用万有性质</h4>回忆：直接把空词变换追到核较繁琐；证明推出图的万有性质可一次性得到正确商群。取任意群 G，以及同态 (f_U:\pi_1(U)\to G)、(f_V:\pi_1(V)\to G)，并假设它们在交集上相容：(f_Ui_*=f_Vj_*)。本步得到：目标是构造唯一 (f_X:\pi_1(X)\to G)。<h4>第16步：用分段给整体环路赋值</h4>回忆：第 11–12 步把 γ 写成局部基点环路 αᵣ。<div class="eq">$$f_X([\gamma]):=f_{\varepsilon_1}([\alpha_1])\cdots f_{\varepsilon_m}([\alpha_m]),\qquad\varepsilon_r\in\{U,V\}.$$</div>公式看似依赖切分与连接路，后面逐项消除这些依赖。本步得到：得到候选函数。<h4>第17步：证明细分不改变值</h4>回忆：在同一开集里把一段 γᵣ 再切成两段，并在新分点插入连接路 c。新的两个局部环路相乘时出现 (\bar c*c)，其类为单位；群同态把乘积送到原来未切分环路的值。本步得到：增加或删除细分点不改变候选值。<h4>第18步：证明更换交集连接路不改变值</h4>回忆：若 cᵣ 换成 c′ᵣ，两者的差 (c_r*\overline{c′_r}) 是 U∩V 中的基点环路。它在相邻 U 因子与 V 因子中分别出现一次、方向相反；相容条件 (f_Ui_*=f_Vj_*) 使两项在 G 中精确抵消。本步得到：候选值与连接路的选择无关。<h4>第19步：把环路同伦切成小方格</h4>回忆：若 γ₀ 与 γ₁ 相对基点同伦，取 (H:I^2\to X)。H⁻¹(U)、H⁻¹(V) 覆盖紧方形。取足够细方格，使每个小格的像完全落在 U 或 V，并细分上下边。本步得到：同伦被离散成有限个局部变形。<h4>第20步：比较相邻水平行的词</h4>回忆：一个小方格的边界在 U 或 V 中零伦。把一行的局部词与下一行的局部词相除，所得乘积可按小方格边界分组；格子内部公共边方向相反而成对消失，换颜色处的差由交集相容关系消失。本步得到：同伦的相邻两行在 G 中取相同值。<h4>第21步：得出候选函数对同伦类良定义</h4>回忆：有限方格行数允许逐行比较。从底边 γ₀ 一直比较到顶边 γ₁，得到 f_X([γ₀])=f_X([γ₁])。结合第 17–18 步，定义与全部辅助选择无关。本步得到：f_X 真正定义在 π₁(X) 上。<h4>第22步：验证 f_X 是群同态</h4>回忆：环路乘积可把两条环路的分段依次拼接。定义给出 (f_X([\gamma*\delta])=f_X([\gamma])f_X([\delta]))，常值环路给单位，反向环路给逆元。本步得到：候选函数是群同态。<h4>第23步：验证它延伸 f_U 与 f_V</h4>回忆：若 γ 整条落在 U 中，可只取一个 U 段且连接路为常值。此时定义直接给 (f_X(k_*[\gamma])=f_U([\gamma]))；V 情形同理。本步得到：所需交换图成立。<h4>第24步：证明延伸唯一</h4>回忆：第 14 步说明 π₁(X) 由 U 与 V 的像生成。任何满足同样限制的群同态，在每个局部因子上的值已被 f_U、f_V 固定，所以在所有局部词上都只能等于 f_X。本步得到：推出图的填充同态唯一。<h4>第25步：用推出的唯一性识别群</h4>回忆：群的推出对象在同构意义下唯一。F/N 本身由自由积与交集关系构造，具有同一万有性质；π₁(X) 由第 15–24 步也具有它。因此 (\overline\Phi) 是同构。本步得到：不存在交集关系以外的遗漏关系。<h4>第26步：写出最终形式</h4>回忆：沿公共群取的融合自由积就是上述推出商群。<div class="eq">$$\pi_1(U)*_{\pi_1(U\cap V)}\pi_1(V)=\frac{\pi_1(U)*\pi_1(V)}{\langle\!\langle i_*(\omega)j_*(\omega)^{-1}\rangle\!\rangle}.$$</div>包含诱导映射不必单射，因此把它理解成群的推出最稳妥。本步得到：定理的代数对象与拓扑构造完全对应。<div class="keybox">$$\boxed{\pi_1(X,x_0)\cong\pi_1(U,x_0)*_{\pi_1(U\cap V,x_0)}\pi_1(V,x_0)}$$</div><div class="memobox"><strong>一句话记忆：</strong>先把环路切成 U、V 中的局部词；再把交集里同一条环路在两边的写法设为相等，这就是整个基本群。</div>`,
    1: L`<h4>我们要做什么</h4>把 Van Kampen 从两个开集推广到多个开集。使用基本群胚后，不必强迫所有开集与交集共享同一个基点；对象是选定点集，态射是道路同伦类。<h4>第1步：回忆基本群胚</h4>回忆：群胚是每个态射都可逆的范畴。基本群胚 (\Pi_1(X,A)) 的对象是 A⊂X 中的点，从 a 到 b 的态射是 X 中道路的相对端点同伦类；复合是道路拼接。本步得到：一个基点的基本群只是端点同为 x₀ 的自同构群。<h4>第2步：说明单基点版本的限制</h4>回忆：多个开集的全部交集未必道路连通，甚至可能为空。若硬选一个共同基点，有些交集分支无法用保持在交集内的道路接到它，局部信息会丢失。本步得到：需要在每个相关连通分支中放置对象。<h4>第3步：选择足够多的对象 A</h4>回忆：要求 A 与每个非空有限交集的每个道路分支相交。例如为覆盖中的所有非空交集分支各选一个点，并把这些点合成 A。本步得到：每个局部道路片段都有可用的端点对象。<h4>第4步：写出开覆盖</h4>回忆：设 (X=\bigcup_{\alpha}U_\alpha)，通常要求 Uα 开。每个包含 (U_\alpha\hookrightarrow X) 诱导函子 (\Pi_1(U_\alpha,A\cap U_\alpha)\to\Pi_1(X,A))。交集上也有对应函子。本步得到：得到一张由局部群胚组成的粘合图。<h4>第5步：取任意整体道路</h4>回忆：群胚态射允许起点、终点不同。给道路 γ:[0,1]→X，紧致性与 Lebesgue 数仍允许分点，使每一小段完整落在某个 Uα 中。本步得到：整体态射可写成局部态射的复合。<h4>第6步：把分点移到对象集中</h4>回忆：分点可能不在 A，但它位于若干开集的交叠分支中。利用该分支内通向所选 A 点的道路，在相邻局部段之间插入一条道路及其逆，和两开集证明中的连接路做法相同。本步得到：每个局部因子都成为某个局部基本群胚中的态射。<h4>第7步：理解交集关系</h4>回忆：一条完全落在 Uα∩Uβ 的道路，在两个局部群胚中有两份写法。粘合时强制这两份态射相等；更高重交叠保证这些两两相等关系彼此相容。本步得到：交集负责识别局部态射。<h4>第8步：定义余锥数据</h4>回忆：范畴中的推出推广为余极限。设另有群胚 G，且每个局部群胚都有函子 Fα→G，并且这些函子在所有交集限制上相同。本步得到：这是等待由整体群胚统一延伸的相容局部数据。<h4>第9步：用局部分解定义整体函子</h4>回忆：任一整体道路类可分为局部道路类的复合。依次应用相应 Fα，再在 G 中复合，定义 F:Π₁(X,A)→G。本步得到：构造与两个开集时的局部词赋值完全平行。<h4>第10步：消除细分选择</h4>回忆：增加分点只会把一个局部态射拆成两个可复合态射。函子保持复合，所以拆分前后的像相同；删除分点同理。本步得到：定义不依赖切得多细。<h4>第11步：消除开集标签选择</h4>回忆：若某段同时落在 Uα 与 Uβ，它就在交集中。相容条件说两个局部函子在交集态射上取同一值，所以选择哪一个开集标签都不影响结果。本步得到：重叠处没有歧义。<h4>第12步：消除道路同伦选择</h4>回忆：道路同伦的参数方形也可切成小格，每格像落在某个 Uα。逐格比较边界态射；内部边反向成对抵消，跨开集的公共边由交集相容性识别。本步得到：同伦道路得到同一个 G 中态射。<h4>第13步：验证函子规律</h4>回忆：常值道路代表恒等态射，反向道路代表逆态射，拼接代表复合。局部定义逐项保持这三种操作，因此 F 是群胚函子。本步得到：整体延伸合法。<h4>第14步：证明延伸唯一</h4>回忆：每个整体态射由局部态射生成。任何延伸 Fα 的整体函子，在每段上的值都已确定，故在它们的复合上也唯一。本步得到：整体群胚满足余极限的唯一性。<h4>第15步：退回普通 Van Kampen</h4>回忆：若所有集合与交集道路连通并共享 x₀，可令 A={x₀}。此时每个群胚只有一个对象，它就是一个群；群胚余极限退化为群的融合自由积。本步得到：推广与两开集定理一致。<h4>第16步：说明推广真正解决的问题</h4>回忆：群胚同时保留多个基点之间的道路信息。即使 Uα∩Uβ 不连通，只要 A 命中每个分支，每个分支的粘合关系都会进入余极限，不需要人为选择跨出交集的换基点道路。本步得到：多个开集的粘合得到了无基点偏差的表达。<div class="keybox">$$\boxed{\Pi_1(X,A)\cong\operatorname*{colim}_{\alpha,\beta,\ldots}\Pi_1(U_{\alpha_0}\cap\cdots\cap U_{\alpha_k},A)}$$</div><div class="memobox"><strong>一句话记忆：</strong>多个开集时把“一个基点上的群”升级成“许多对象之间的道路群胚”；局部道路负责生成，交集道路负责识别。</div>`
  },
  "t7": {
    0: L`<h4>我们要做什么</h4>证明 Brouwer 不动点定理：每个连续映射 (f:D^n\to D^n) 都有不动点。先在反设下写出一个真正连续的边界收缩 (r:D^n\to S^{n-1})，再由“球面不是圆盘的收缩核”得到矛盾；二维时把最后一步完整翻译成基本群计算。<h4>第1步：写出圆盘与边界</h4>回忆：闭 n 维圆盘及其边界是<div class="eq">$$D^n=\{x\in\mathbb R^n:\|x\|\le1\},\qquad S^{n-1}=\{x:\|x\|=1\}.$$</div>包含映射记为 (i:S^{n-1}\hookrightarrow D^n)。本步得到：问题被固定在单位圆盘模型中。<h4>第2步：作反设</h4>回忆：不动点是满足 f(x)=x 的点。<div class="eq">$$f(x)\ne x\qquad\text{对每个 }x\in D^n.$$</div>于是向量 (d(x)=x-f(x)) 永远非零。本步得到：从 f(x) 指向 x 的射线在每点都有确定方向。<h4>第3步：描述几何射线</h4>回忆：从 y=f(x) 出发并经过 x 的射线可参数化为 y+t(x−y)。<div class="eq">$$L_x(t)=f(x)+t\bigl(x-f(x)\bigr),\qquad t\ge0.$$</div>t=0 在 f(x)，t=1 在 x。本步得到：要找的边界点是某个 t≥1 的 Lₓ(t)。<h4>第4步：说明射线一定再次碰到边界</h4>回忆：f(x) 与 x 都在凸集 Dⁿ 中，所以 0≤t≤1 的线段留在圆盘。沿同一方向令 t 继续增大，范数最终趋于无穷；由连续性，射线会在离开圆盘的第一时刻碰到 Sⁿ⁻¹。本步得到：存在一个出口参数 λ(x)≥1。<h4>第5步：建立出口参数方程</h4>回忆：边界条件是范数平方等于 1。令 y=f(x)、d=x−y。<div class="eq">$$\|y+td\|^2=\|d\|^2t^2+2\langle y,d\rangle t+\|y\|^2=1.$$</div>这是 t 的二次方程。本步得到：出口参数可以显式求根。<h4>第6步：写出正确的根</h4>回忆：二次公式给两个与直线和球面的交点；沿正方向离开圆盘应取较大的根。<div class="eq">$$\lambda(x)=\frac{-\langle y,d\rangle+\sqrt{\langle y,d\rangle^2+\|d\|^2(1-\|y\|^2)}}{\|d\|^2}.$$</div>分母非零，因为 d≠0。本步得到：λ(x) 有全局显式公式。<h4>第7步：核对根号有意义</h4>回忆：y=f(x)∈Dⁿ，所以 1−‖y‖²≥0。根号内是一个平方数与非负数之和，故非负。第 4 步的几何论证又说明所选较大根满足 λ≥1。本步得到：公式对每个 x 都定义。<h4>第8步：定义边界收缩</h4>回忆：把 x 沿从 f(x) 指向 x 的方向继续推到出口。<div class="eq">$$r(x)=f(x)+\lambda(x)\bigl(x-f(x)\bigr).$$</div>由 λ 的定义，(\|r(x)\|=1)。本步得到：得到集合映射 r:Dⁿ→Sⁿ⁻¹。<h4>第9步：证明 r 连续</h4>回忆：f 连续，内积、范数、加法、乘法和非负平方根都是连续运算。公式中唯一的分母 ‖x−f(x)‖² 由反设始终大于 0，因此 λ 连续，代回后 r 连续。本步得到：r 是连续映射，不只是逐点几何作图。<h4>第10步：检查边界点保持不动</h4>回忆：若 x∈Sⁿ⁻¹，射线从 f(x) 经过边界点 x。线段到 t=1 为止位于圆盘，而过 x 后立刻离开；故较大的出口参数正是 λ(x)=1。代入得 r(x)=f(x)+x−f(x)=x。本步得到：r|Sⁿ⁻¹=id。<h4>第11步：识别出收缩关系</h4>回忆：收缩映射的定义是 r∘i=id_A。<div class="eq">$$r\circ i=\operatorname{id}_{S^{n-1}}.$$</div>所以反设制造了一个从圆盘到边界球面的收缩。本步得到：只需证明这种收缩不可能存在。<h4>第12步：先完成二维基本群证明</h4>回忆：当 n=2 时，边界是 S¹。<div class="eq">$$\pi_1(S^1)\cong\mathbb Z,\qquad\pi_1(D^2)=0.$$</div>圆盘可缩，所以其中每条环路都零伦。本步得到：诱导同态的定义域和值域已经算出。<h4>第13步：计算包含映射诱导同态</h4>回忆：群同态从 Z 到平凡群只能是零同态。<div class="eq">$$i_*:\mathbb Z\longrightarrow0.$$</div>因此后续无论复合什么同态，结果仍为零。本步得到：得到 (r_*i_*=0)。<h4>第14步：计算恒等映射诱导同态</h4>回忆：函子性给 ((r\circ i)_*=r_*\circ i_*)。<div class="eq">$$r_*i_*=(r\circ i)_*=(\operatorname{id}_{S^1})_*=\operatorname{id}_{\mathbb Z}.$$</div>但上一部又算出左边是零。本步得到：得到 (0=\operatorname{id}_{\mathbb Z}) 的矛盾。<h4>第15步：说明矛盾为何真实</h4>回忆：Z 非平凡；例如 1≠0。零同态把 1 送到 0，恒等同态把 1 送到 1，它们不可能相等。本步得到：D² 不可能收缩到 S¹。<h4>第16步：推广时选择约化同调</h4>回忆：对一般 n≥1，使用约化同调能统一处理 n=1。<div class="eq">$$\widetilde H_{n-1}(S^{n-1};\mathbb Z)\cong\mathbb Z,\qquad\widetilde H_{n-1}(D^n;\mathbb Z)=0.$$</div>第二式因为 Dⁿ 可缩。本步得到：得到与二维基本群相同的代数形状。<h4>第17步：在同调上重复复合计算</h4>回忆：同调也是函子。<div class="eq">$$r_*i_*=(r\circ i)_*=\operatorname{id}_{\mathbb Z},$$</div>但 i_* 经过零群，所以 r_*i_*=0。本步得到：一般 n≥1 也产生矛盾。<h4>第18步：处理 n=0</h4>回忆：D⁰ 是一个点。从一点到一点的唯一映射当然固定该点。本步得到：所有维数都已覆盖。<h4>第19步：回到最初反设</h4>回忆：矛盾只依赖于“f 处处无不动点”。因此这个反设不成立，至少存在一个 x∈Dⁿ 满足 f(x)=x。本步得到：不动点存在性得证。<h4>第20步：指出证明的关键桥梁</h4>回忆：拓扑不变量没有直接研究 f，而是阻止一个不可能的收缩。无不动点让每个 x 都能沿射线连续推到边界；边界上的点又被固定，于是 f 间接制造收缩。本步得到：几何反设被转化成代数矛盾。<h4>第21步：检查不能省略连续性</h4>回忆：若 r 只是逐点定义而不连续，基本群或同调函子不能应用。第 5–9 步专门给出根公式并检查分母与根号，就是为了保证 r 连续。本步得到：射线图像和代数论证之间的技术缺口已补齐。<h4>第22步：写出二维结论链</h4>回忆：二维证明最短的完整逻辑链为：<div class="eq">$$f\text{ 无不动点}\Rightarrow r:D^2\to S^1\Rightarrow r_*i_*=\operatorname{id}_{\mathbb Z}\Rightarrow0=\operatorname{id}_{\mathbb Z}.$$</div>每个箭头都已逐步证明。本步得到：基本群版本完整闭合。<div class="keybox">$$\boxed{\forall f:D^n\to D^n\text{ 连续},\quad\exists x\in D^n\text{ 使 }f(x)=x}$$</div><div class="memobox"><strong>一句话记忆：</strong>若没有不动点，就能从 f(x) 穿过 x 把圆盘连续推到边界并固定边界；但同调或二维基本群禁止圆盘收缩到球面。</div>`,
    1: L`<h4>我们要做什么</h4>证明 Borsuk–Ulam 定理：任意连续 (f:S^n\to\mathbb R^n) 都存在一对对径点取相同值。反设会产生奇映射 (g:S^n\to S^{n-1})，再下降到射影空间；模 2 上同调环的幂次给出最终矛盾。<h4>第1步：先处理 n=0</h4>回忆：S⁰={−1,1}，而 R⁰ 只有一个点。任意 f 都把两点送到唯一点，所以 f(1)=f(−1)。本步得到：零维情形成立。<h4>第2步：对 n≥1 作反设</h4>回忆：目标结论失败意味着每一对对径点的像都不同。<div class="eq">$$f(x)\ne f(-x)\qquad\text{对所有 }x\in S^n.$$</div>因此差向量 f(x)−f(−x) 从不为零。本步得到：可以把差向量归一化。<h4>第3步：定义归一化差映射</h4>回忆：非零向量除以自身长度落在单位球面。<div class="eq">$$g(x)=\frac{f(x)-f(-x)}{\|f(x)-f(-x)\|}\in S^{n-1}.$$</div>分母由反设始终为正。本步得到：得到连续映射 g:Sⁿ→Sⁿ⁻¹。<h4>第4步：逐项验证 g 连续</h4>回忆：x↦−x、f、向量减法、范数以及正数上的倒数均连续。这些连续映射复合，且分母不为零，所以 g 连续。本步得到：后续可合法使用同伦与上同调。<h4>第5步：验证奇性</h4>回忆：把 x 换成 −x 后，分子变号而长度不变。<div class="eq">$$g(-x)=\frac{f(-x)-f(x)}{\|f(-x)-f(x)\|}=-g(x).$$</div>这种满足 g(−x)=−g(x) 的映射叫奇映射。本步得到：反设推出一个降维奇映射。<h4>第6步：单独排除 n=1</h4>回忆：此时 g:S¹→S⁰，而 S¹ 连通、S⁰ 的两个点彼此分离。连续像 g(S¹) 必连通，所以只能是 S⁰ 中一个点；但奇性要求若取一个点也同时取其对径点，矛盾。本步得到：n=1 已得证，以下假设 n≥2。<h4>第7步：回忆射影空间是对径商</h4>回忆：RPᵐ=Sᵐ/(x∼−x)，商映射记作 qₘ。奇性保证 x 与 −x 的像 g(x)、g(−x) 也互为对径点。本步得到：g 尊重两个对径等价关系。<h4>第8步：把 g 下降到商空间</h4>回忆：尊重等价关系的连续映射唯一诱导商空间映射。<div class="eq">$$\bar g:\mathbb{RP}^{n}\to\mathbb{RP}^{n-1},\qquad\bar g([x])=[g(x)].$$</div>并有 (q_{n-1}g=\bar gq_n)。本步得到：降维奇映射变成射影空间间的普通映射。<h4>第9步：回忆射影空间的模 2 上同调环</h4>回忆：RPᵐ 有一个次数 1 的生成元 u，并且恰在 m+1 次幂时消失。<div class="eq">$$H^*(\mathbb{RP}^{m};\mathbb F_2)\cong\mathbb F_2[u]/(u^{m+1}),\qquad|u|=1.$$</div>乘法是 cup 积。本步得到：幂次能探测射影空间的维数。<h4>第10步：分别命名两个一次生成元</h4>回忆：避免把两个空间中的类混为一谈。令 (a\in H^1(\mathbb{RP}^{n-1};\mathbb F_2))，令 (b\in H^1(\mathbb{RP}^{n};\mathbb F_2)) 为各自唯一非零类。本步得到：只需算 (\bar g^*(a)) 是 0 还是 b。<h4>第11步：选取射影空间的生成环路</h4>回忆：在 Sⁿ 中取一条从 x 走到 −x 的道路 γ。投影 qₙγ 是 RPⁿ 中的闭环路；它提升后不闭合，而从 x 到 −x，因此代表基本群 Z/2 的非平凡元。本步得到：该环路能检测一次上同调生成元 b。<h4>第12步：观察生成环路经过 bar g 后的提升</h4>回忆：交换关系给 (\bar gq_n\gamma=q_{n-1}g\gamma)。路径 gγ 从 g(x) 走到 g(−x)=−g(x)，所以它投影后也是闭环路，且在二重覆叠 Sⁿ⁻¹→RPⁿ⁻¹ 中从一层走到另一层。本步得到：bar g 把非平凡对径环路送到非平凡的模 2 环路。<h4>第13步：推出一次类的拉回</h4>回忆：H¹(−;F₂) 可看成到 F₂ 的环路同态；唯一非零类在上述换层环路上取 1。a 在 (\bar g_*[q_n\gamma]) 上取 1，因此 (\bar g^*a) 在 ([q_n\gamma]) 上也取 1。它不是零类，只能等于 b。本步得到：得到 (\bar g^*(a)=b)。<h4>第14步：核对 n=2 的边界情况</h4>回忆：目标 RP¹≅S¹ 的整数基本群比 Z/2 大，但模 2 一次上同调仍只有一个非零类。gγ 从 y 到 −y，投影到 RP¹ 后绕奇数个半圈，模 2 评价为 1；所以上一步结论对 n=2 仍成立。本步得到：证明没有偷偷假设 n≥3。<h4>第15步：在目标空间计算 a 的 n 次幂</h4>回忆：目标维数是 n−1，其上同调环满足 aⁿ=0。<div class="eq">$$a^n=0\in H^n(\mathbb{RP}^{n-1};\mathbb F_2).$$</div>也可从 n 维上同调群为零看出。本步得到：目标中的 n 次幂消失。<h4>第16步：在定义域计算 b 的 n 次幂</h4>回忆：RPⁿ 的最高非零幂是 bⁿ。<div class="eq">$$b^n\ne0\in H^n(\mathbb{RP}^{n};\mathbb F_2).$$</div>它生成最高维模 2 上同调。本步得到：定义域中的同次数类不消失。<h4>第17步：利用拉回保持 cup 积</h4>回忆：连续映射诱导的上同调同态是分次环同态。<div class="eq">$$\bar g^*(a^n)=\bigl(\bar g^*a\bigr)^n=b^n.$$</div>左边由 aⁿ=0 应为 0，右边由上一部非零。本步得到：得到 0=bⁿ≠0 的矛盾。<h4>第18步：否定奇映射的存在</h4>回忆：矛盾来自假设存在 g:Sⁿ→Sⁿ⁻¹ 的连续奇映射。因此这样的降维奇映射不存在。本步得到：归一化差映射不可能处处定义。<h4>第19步：回到 f 的差向量</h4>回忆：g 不能处处定义，意味着某个 x 的分母为零。<div class="eq">$$\|f(x)-f(-x)\|=0\quad\Longrightarrow\quad f(x)=f(-x).$$</div>这正是所求对径点。本步得到：Borsuk–Ulam 结论得到。<h4>第20步：解释为什么只看普通同调群不够</h4>回忆：RPⁿ 与 RPⁿ⁻¹ 的低维模 2 同调群在许多次数相同。真正制造矛盾的是一次类可以连续相乘：目标中 aⁿ 因维数而为零，定义域中 bⁿ 却仍存活。本步得到：这里需要的是上同调环，而不只是群的列表。<h4>第21步：整理逻辑链</h4>回忆：整条证明只使用一次反设。<div class="eq">$$f(x)\ne f(-x)\Rightarrow g\text{ 奇}\Rightarrow\bar g^*a=b\Rightarrow0=\bar g^*(a^n)=b^n\ne0.$$</div>每个箭头已在前面展开。本步得到：难点脉络完整收口。<div class="keybox">$$\boxed{\forall f:S^n\to\mathbb R^n\text{ 连续},\quad\exists x\in S^n: f(x)=f(-x)}$$</div><div class="memobox"><strong>一句话记忆：</strong>若每对对径点的像都不同，差向量就给出一个降一维的奇映射；射影空间的一次类在定义域还能乘 n 次，在目标却不能，因而奇映射不可能存在。</div>`
  },
  "t8": {
    0: L`<h4>我们要证明什么</h4>若子空间 (A\subset X) 是 (X) 的强形变收缩核，证明包含映射 (i:A\hookrightarrow X) 是同伦等价，并逐式算出它在基本群上的逆同态。<h4>第1步：写出强形变收缩的全部数据</h4>回忆：A 是 X 的强形变收缩核，表示存在连续映射 (H:X\times I\to X)。<div class="eq">$$H(x,0)=x,\qquad H(x,1)\in A,\qquad H(a,t)=a\  (a\in A).$$</div>第三个条件说 A 中每点在全过程都不动。本步得到：端点条件和固定条件都已列全。<h4>第2步：定义终态收缩映射</h4>回忆：同伦的 t=1 截面是连续映射。<div class="eq">$$r:X\to A,\qquad r(x)=H(x,1).$$</div>第二个端点条件保证值确实落在 A。本步得到：得到候选同伦逆 r。<h4>第3步：定义包含映射</h4>回忆：子空间 A 到 X 有自然包含。<div class="eq">$$i:A\hookrightarrow X,\qquad i(a)=a.$$</div>目标是检查 r∘i 与 i∘r。本步得到：两个方向的映射都已明确。<h4>第4步：计算 r∘i</h4>回忆：A 中的点在同伦全过程固定。<div class="eq">$$(r\circ i)(a)=r(a)=H(a,1)=a.$$</div>这对每个 a∈A 成立。本步得到：得到严格等式 r∘i=id_A。<h4>第5步：计算 i∘r 的点值</h4>回忆：r(x) 本来就是 A 中的点，包含回 X 不改变它。<div class="eq">$$(i\circ r)(x)=i(H(x,1))=H(x,1).$$</div>这不是一般等于 x，而是同伦的终态。本步得到：i∘r 已与 H 的终点对应。<h4>第6步：把 H 读成所需同伦</h4>回忆：H(x,0)=x 给恒等映射，H(x,1)=(i∘r)(x) 给复合映射。<div class="eq">$$H:\operatorname{id}_X\simeq i\circ r.$$</div>若同伦方向定义相反，可把参数 t 换成 1−t。本步得到：得到 i∘r≃id_X。<h4>第7步：核对同伦等价定义</h4>回忆：f:X→Y 若有 g:Y→X，使 gf≃id_X、fg≃id_Y，则 f 是同伦等价。这里 i 与 r 满足一个复合严格等于 id_A，另一个复合同伦于 id_X。本步得到：i 与 r 互为同伦逆。<h4>第8步：得到空间同伦型相同</h4>回忆：存在同伦逆正是空间同伦等价。<div class="eq">$$A\simeq X.$$</div>强形变收缩比一般同伦等价多给了“A 中点全程固定”的信息。本步得到：形变收缩必保持全部同伦不变量。<h4>第9步：在基本群上写出两个复合</h4>回忆：基本群是函子，复合映射变成复合同态，同伦映射诱导相同同态。<div class="eq">$$r_*i_*=(r\circ i)_*=\operatorname{id}_{\pi_1(A)},\qquad i_*r_*=(i\circ r)_*=\operatorname{id}_{\pi_1(X)}.$$</div>基点取在 A 中，强形变保证它始终固定。本步得到：i_* 与 r_* 互为逆同态。<h4>第10步：明确写出同构</h4>回忆：一个同态有双边逆就必为同构。<div class="eq">$$i_*:\pi_1(A,a_0)\xrightarrow{\cong}\pi_1(X,a_0),\qquad i_*^{-1}=r_*.$$</div>没有省略基点变化。本步得到：基本群结论得到。<h4>第11步：推广到同调等不变量</h4>回忆：同伦等价不仅保持基本群。同样的复合计算给 (H_k(A)\cong H_k(X))、(H^k(A)\cong H^k(X))，并保持上同调环结构。本步得到：形变收缩是计算多种不变量的统一简化工具。<h4>第12步：说明实际计算方法</h4>回忆：应用时先写出 H，再逐项核对四件事：连续、t=0 为恒等、t=1 落入 A、A 中点固定。四项都成立后，才能把 X 安全替换为 A；只画一张“看起来能压扁”的图还不够。本步得到：证明与计算的检查清单完整。<div class="keybox">$$\boxed{A\simeq X,\qquad\pi_1(A,a_0)\cong\pi_1(X,a_0)}$$</div><div class="memobox"><strong>一句话记忆：</strong>终态 H(−,1) 就是收缩 r；在 A 上它真等于恒等，在 X 上“先收缩再包含”由 H 连续变回恒等，因此 i 与 r 正好互为同伦逆。</div>`,
    1: L`<h4>我们要证明什么</h4>初等塌缩并不是“把任意胞腔径向压到整个边界”。正确命题需要一对单形（σ,τ），其中 τ 是只属于 σ 的自由面。下面给出可直接代入检查的重心坐标公式。<h4>第1步：先把“可以逐胞腔收缩”说准确</h4>回忆：任意闭圆盘都不能在保持整个边界逐点不动的条件下收缩到边界。因此必须有自由面条件。设有限单纯复形 K 含 n 单形 σ=[v₀,v₁,…,vₙ]，而 τ=[v₁,…,vₙ] 是 σ 的自由面；“自由”指 τ 不属于 K 的任何其他 n 单形。<h4>第2步：写出塌缩后的子复形</h4>从 K 中删去 σ 的内部和 τ 的内部，所得子复形记为 L。由于 τ 没有被别的 n 单形使用，删除这对开单形不会要求删掉任何邻接 n 单形。我们要构造保持 |L| 中每一点不动的同伦。<h4>第3步：把问题局部化到一个单形</h4>在 |K|\setminus|σ| 上可以令同伦恒等。因此真正要做的只有一件事：把闭单形 |σ| 强形变收缩到它除去自由面内部后的部分。该保留部分是 v₀ 与 ∂τ 的锥，记为 v₀*∂τ。<h4>第4步：回忆重心坐标</h4>σ 中每一点 x 都唯一写成<div class="eq">$$x=\lambda_0v_0+\lambda_1v_1+\cdots+\lambda_nv_n,\qquad \lambda_i\ge0,\quad\sum_{i=0}^n\lambda_i=1.$$</div>某个 λᵢ=0 表示 x 落在与 vᵢ 相对的面上。<h4>第5步：用坐标刻画要保留的部分</h4>自由面 τ 由 λ₀=0 刻画。σ 的其余各个余维一面分别由 λᵢ=0（i≥1）刻画。因此<div class="eq">$$v_0*\partial\tau=\{x\in\sigma:\text{至少一个 }\lambda_i=0\text{，其中 }i\ge1\}.$$</div><h4>第6步：找出该减去多少</h4>令<div class="eq">$$m(x)=\min\{\lambda_1,\ldots,\lambda_n\}.$$</div>最小值函数是有限个连续函数的最小值，所以 m(x) 连续，并且 0≤m≤1/n。<h4>第7步：定义终点映射的重心坐标</h4>规定<div class="eq">$$\lambda_0^{\prime}=\lambda_0+n m,\qquad \lambda_i^{\prime}=\lambda_i-m\quad(1\le i\le n).$$</div>然后定义 r(x)=Σᵢλᵢ′vᵢ。直观上，我们从后 n 个坐标各拿走同样的 m，再把总量 nm 放到 v₀。<h4>第8步：逐项检查新坐标非负</h4>因为 m 是 λ₁,…,λₙ 的最小值，每个 i≥1 都满足 λᵢ−m≥0；而 λ₀+nm≥0。因此所有 λᵢ′ 都非负。<h4>第9步：检查新坐标的和仍为一</h4>逐行计算<div class="eq">$$\sum_{i=0}^n\lambda_i^{\prime}=(\lambda_0+nm)+\sum_{i=1}^n(\lambda_i-m)=\sum_{i=0}^n\lambda_i+nm-nm=1.$$</div>所以 r(x) 仍在 σ 中。<h4>第10步：证明终点落到保留部分</h4>至少有一个下标 j≥1 达到最小值 λⱼ=m，于是 λⱼ′=λⱼ−m=0。按第五步的刻画，r(x)∈v₀*∂τ。<h4>第11步：证明保留部分逐点固定</h4>若 x 已在 v₀*∂τ 中，就有某个 j≥1 满足 λⱼ=0。所有 λᵢ≥0，所以 m=0；第七步给 λᵢ′=λᵢ，故 r(x)=x。<h4>第12步：检查 r 连续</h4>各重心坐标 λᵢ(x) 连续，m(x) 是它们的有限最小值，λᵢ′ 又由加减得到。因此 r:σ→v₀*∂τ 连续。<h4>第13步：写出完整同伦</h4>令<div class="eq">$$H(x,t)=(1-t)x+t\,r(x),\qquad 0\le t\le1.$$</div>这是 x 与 r(x) 之间的直线插值。<h4>第14步：证明同伦不会跑出单形</h4>单形 σ 是凸集；x 与 r(x) 都属于 σ，所以它们的任意凸组合 (1−t)x+tr(x) 仍属于 σ。<h4>第15步：核对两个端点</h4>把 t=0 代入得 H(x,0)=x；把 t=1 代入得 H(x,1)=r(x)∈v₀*∂τ。于是同伦确实从恒等映射走到收缩映射。<h4>第16步：核对强形变条件</h4>若 x∈v₀*∂τ，第十一步给 r(x)=x，所以<div class="eq">$$H(x,t)=(1-t)x+tx=x.$$</div>保留部分的每一点在整个过程中都不动。<h4>第17步：把局部同伦粘回整个复形</h4>在 |σ| 上使用 H，在 |K|\setminus(\mathring σ\cup\mathring τ) 上使用恒等同伦。两种公式在公共部分 v₀*∂τ 上都等于 x；由粘贴引理，它们组成 |K| 上的连续强形变收缩。<h4>第18步：说明有限次塌缩</h4>若 K=K₀↘K₁↘⋯↘Kᵣ=L 是有限串初等塌缩，就把每段同伦依次压缩到时间区间 [0,1/r]、[1/r,2/r] 等再拼接。每一段都固定下一阶段，故最终 |K| 强形变收缩到 |L|。<div class="keybox">$$\boxed{K\searrow L\quad\Longrightarrow\quad |L|\text{ 是 }|K|\text{ 的强形变收缩核}}$$</div><div class="memobox"><strong>一句话记忆：</strong>找到只被一个高维单形使用的自由面，把这一对单形一起塌掉；重心坐标里“减去最小坐标”就是不跳步的收缩公式。</div>`
  },
  "t9": {
    0: L`<h4>我们要做什么</h4>设 (K,L) 是单纯复形，(f:|K|\to|L|) 连续。证明经过足够多次重心重分后，可以给每个顶点选择一个 L 的顶点，得到单纯映射 (\varphi)，并使 (|\varphi|) 与 f 同伦。<h4>第1步：回忆顶点星形邻域</h4>回忆：顶点 w 的开星形 (\operatorname{st}^{\circ}(w)) 是所有含 w 单形的内部之并。若一点的重心坐标中 w 的系数为正，它就落在这个开星形中。L 的所有顶点开星形覆盖 |L|。本步得到：目标空间已有适合单纯结构的开覆盖。<h4>第2步：把星形覆盖拉回 K</h4>回忆：连续映射的开集逆像仍开。集合 (f^{-1}(\operatorname{st}^{\circ}(w))) 随 w 遍历 L 的顶点，构成 |K| 的开覆盖。本步得到：问题变成让 K 的小单形落在这些逆像开集中。<h4>第3步：先处理有限复形</h4>回忆：若 K 有限，则 |K| 紧致且可度量。对上述开覆盖取 Lebesgue 数 δ>0：直径小于 δ 的子集必完整落入某个星形逆像。局部有限情形可逐紧集作同样论证。本步得到：只需把单形切得足够小。<h4>第4步：回忆重心重分会缩小网格</h4>回忆：一次重心重分把每个 n 单形切成由面旗标决定的小单形。若原单形直径为 d，新单形直径至多 (n/(n+1)d)；反复重分后网格直径趋于 0。本步得到：存在 r 使 sdʳK 的每个单形足够小。<h4>第5步：选定足够细的重分</h4>回忆：取 r 使每个 (\operatorname{sd}^rK) 的闭单形及其顶点星形像都受 Lebesgue 数控制。更具体地，可要求每个新顶点 v 的闭星形 (\overline{\operatorname{st}}(v)) 落入某个 (f^{-1}(\operatorname{st}^{\circ}(w)))。本步得到：每个新顶点都有至少一个可选目标顶点。<h4>第6步：定义顶点映射</h4>回忆：对 sdʳK 的每个顶点 v，任选满足上一条件的 L 顶点 w。<div class="eq">$$\varphi(v)=w\quad\text{使}quad f(\operatorname{st}^{\circ}(v))\subset\operatorname{st}^{\circ}(w).$$</div>这叫星形条件。本步得到：φ 先在顶点集上定义。<h4>第7步：取一个新单形检查</h4>回忆：设 ([v_0,\ldots,v_q]) 是 sdʳK 的单形。其内部取一点 x，则 x 同时属于每个 vᵢ 的开星形；所以 f(x) 同时属于每个 (\varphi(v_i)) 的开星形。本步得到：目标顶点的开星形有共同点。<h4>第8步：由共同星形点推出共面</h4>回忆：在单纯复形中，一组顶点的开星形有非空交，当且仅当这些顶点共同属于某个单形。因为 f(x) 位于全部这些星形，(\varphi(v_0),\ldots,\varphi(v_q)) 共同张成 L 的一个单形；其中允许若干顶点重复。本步得到：顶点映射满足单纯映射条件。<h4>第9步：线性延拓为单纯映射</h4>回忆：单纯映射在每个单形上由顶点像仿射决定。<div class="eq">$$|\varphi|(\sum_i\lambda_iv_i)=\sum_i\lambda_i\varphi(v_i),\qquad\lambda_i\ge0,\ sum_i\lambda_i=1.$$</div>相邻单形在公共面上的公式一致。本步得到：得到连续映射 |φ|:|K|→|L|。<h4>第10步：说明“逼近”的精确定义</h4>回忆：单纯逼近不要求欧氏距离数值接近，而要求星形相容。对每个顶点 v，有 (f(\operatorname{st}^{\circ}v)\subset\operatorname{st}^{\circ}(\varphi(v)))。这保证 f(x) 与 |φ|(x) 位于一个共同单形中。本步得到：两映射可在每个目标单形内直线连接。<h4>第11步：找出共同目标单形</h4>回忆：固定 x，令 σ 是包含 x 的最小 sdʳK 单形。φ(σ) 是 L 的单形；由星形条件可选一个含 φ(σ) 且含 f(x) 的 L 单形 τ。本步得到：f(x) 与 |φ|(x) 同时属于凸单形 |τ|。<h4>第12步：写出逐点直线同伦</h4>回忆：几何单形是其顶点的凸包，在线性实现中是凸集。<div class="eq">$$H(x,t)=(1-t)f(x)+t|\varphi|(x).$$</div>两端点在同一 |τ| 中，所以整条线段仍在 |L|。本步得到：得到候选同伦。<h4>第13步：证明 H 连续</h4>回忆：公式在环境欧氏空间中由连续运算组成。虽然共同单形 τ 随 x 变化，但公式本身不分片；且已经逐点证明值落在 |L|，所以 H:|K|×I→|L| 连续。本步得到：f≃|φ|。<h4>第14步：处理相对版本</h4>回忆：若 f 在子复形 A 上本来就是单纯映射，可在重分和选顶点时固定 A 上已有顶点像。星形条件在 A 上自动满足，延拓得到的同伦也可令 A 逐点固定。本步得到：定理可相对一个已处理的子复形使用。<h4>第15步：说明选择不唯一但同伦类稳定</h4>回忆：一个顶点可能有多个满足星形条件的目标顶点。任意两种选择在每个源单形上的全部像顶点仍共同落在某个目标单形，故两单纯映射相邻并由同样的直线公式同伦。本步得到：逼近的具体组合公式可变，同伦类不变。<h4>第16步：收束构造链</h4>回忆：开星形覆盖经 f 拉回，重心重分把源单形缩小，星形条件选出顶点像，共同星形点保证它们张成单形。最后在共同目标单形中作直线同伦。本步得到：连续问题被转化为有限的顶点组合数据。<div class="keybox">$$\boxed{\exists r,\ exists\varphi:\operatorname{sd}^rK\to L\text{ 单纯},\qquad|\varphi|\simeq f}$$</div><div class="memobox"><strong>一句话记忆：</strong>先把源复形切到每个小星形都落进一个目标顶点星形，再把“小块落在哪个星形”记录成顶点映射；共同星形保证这些顶点真的能连成单形。</div>`,
    1: L`<h4>我们要做什么</h4>解释光滑流形可三角剖分的 Whitehead 定理，并明确“可三角剖分”是存在一个局部有限单纯复形与流形同胚。完整证明依赖若干深引理；这里把每个引理承担的工作和拼接链条逐步展开。<h4>第1步：写清目标</h4>回忆：三角剖分不是在流形上随便画三角形。要构造局部有限单纯复形 K 和同胚 (h:|K|\to M)，且每个紧集只遇有限个单形。本步得到：需要同时控制组合结构与拓扑。<h4>第2步：取可数局部有限坐标覆盖</h4>回忆：光滑流形通常假设 Hausdorff、第二可数，因此仿紧。可选相对紧坐标球 (U_i) 的可数局部有限覆盖，并缩小为 (V_iSubset U_i) 仍覆盖 M。本步得到：全局问题被分为局部有限的小块。<h4>第3步：给每块设置精细尺度</h4>回忆：闭包 (\overline V_i) 在坐标图中紧致。在每块上选择正数 εᵢ，使 εᵢ 足够小，保证落在 Uᵢ 内并控制坐标变换的一阶误差；局部有限性允许这些尺度彼此协调。本步得到：后续单形可小到近似平直。<h4>第4步：调用 Whitney 嵌入</h4>回忆：每个光滑 n 流形都可光滑嵌入某个 Rᴺ。把 M 视为 Rᴺ 中的光滑子流形；嵌入是同胚到其像，所以给嵌入像三角剖分即可。本步得到：获得可用直线单形的环境空间。<h4>第5步：取管状邻域</h4>回忆：嵌入子流形有管状邻域 W。最近点投影 (\pi:W\to M) 光滑，并在每条短法向纤维上把点送回唯一脚点。本步得到：稍微偏离 M 的分片线性对象可以投回 M。<h4>第6步：构造足够细的割线顶点集</h4>回忆：在每个局部块中选离散而局部有限的点，使其网格小于预定 εᵢ。用一般位置微扰避免 n+2 个相关点产生退化，并保持点靠近 M。本步得到：得到候选三角剖分的顶点。<h4>第7步：调用割线复形引理</h4>回忆：Whitehead 的割线引理说：网格足够小且顶点一般位置时，可选这些点张成局部有限 n 维单纯复形 P。每个单形位于管状邻域 W，且其切平面与附近 M 的切空间夹角很小。本步得到：组合复形 P 是 M 的分片线性近似。<h4>第8步：限制管状投影</h4>回忆：把 π 限制到 |P|。<div class="eq">$$h:=\pi|_{|P|}:|P|\longrightarrow M.$$</div>局部切平面夹角小于 π/2，保证每个小单形附近投影没有折叠。本步得到：h 是局部同胚。<h4>第9步：证明局部单射的直觉</h4>回忆：若同一小单形上两点投到同一脚点，它们位于同一法向纤维。但单形的割线方向几乎平行于 TₚM，不可能含非零法向方向，所以两点必须相同。本步得到：小单形不会在投影中自我重叠。<h4>第10步：让相邻单形正确拼接</h4>回忆：割线复形引理还要求相邻单形只沿公共面相交。π 在公共面上的两种限制是同一个映射；非相邻的足够小单形由局部分离条件避免投到同一点。本步得到：局部同胚可跨单形面拼成整体局部同胚。<h4>第11步：证明覆盖 M</h4>回忆：Vᵢ 覆盖 M，构造又在每个 Vᵢ 上铺满局部片。因此每点都有一个小邻域被 h 的某个单形星形覆盖，h 为满射。本步得到：没有留下未三角化的洞。<h4>第12步：证明整体一一对应</h4>回忆：局部构造选定每条短法向纤维恰与 |P| 相交一次。若两个远处点投到同一 M 点，它们也在同一法向纤维，违反唯一交点条件。本步得到：h 为双射。<h4>第13步：从双射局部同胚得到同胚</h4>回忆：局部同胚是开映射。双射开映射的逆连续，所以 h 的连续双射实际上是同胚。本步得到：K=P 给出 M 的三角剖分。<h4>第14步：说明非紧流形为何需要局部有限</h4>回忆：非紧 M 通常需要无穷多个单形。原坐标覆盖与顶点集局部有限，故每个紧集只碰有限多个星形；这保证 |K| 的弱拓扑与流形拓扑吻合。本步得到：构造也适用于非紧光滑流形。<h4>第15步：区分光滑与纯拓扑范畴</h4>回忆：光滑结构提供切空间、管状邻域和割线控制。一般拓扑流形没有这些工具；高维存在 Kirby–Siebenmann 障碍非零的不可三角剖分流形，四维也有不可三角剖分例子。本步得到：不能删去“光滑”后照搬结论。<h4>第16步：收束依赖关系</h4>回忆：Whitney 嵌入把流形放进欧氏空间，管状邻域提供投影，割线复形引理给出近似且不折叠的局部有限复形。投影最终成为同胚。本步得到：深处在割线复形引理，而不是一句“画得足够细”。<div class="keybox">$$\boxed{\forall M\text{ 光滑流形},\quad\exists K\text{ 局部有限单纯复形使 }|K|\cong M}$$</div><div class="memobox"><strong>一句话记忆：</strong>光滑结构让流形在足够小尺度近似切平面；用细小直单形拼出割线复形，再沿管状邻域投影回流形，就得到真正同胚的三角剖分。</div>`
  },
  "t10": {
    0: L`<h4>我们要做什么</h4>从单纯边界公式逐项证明 (\partial_n\partial_{n+1}=0)。核心不是一句“边界的边界为零”，而是固定一个删掉两顶点的余维 2 面，算清它出现两次且符号相反。<h4>第1步：写出有向单形</h4>回忆：取有序顶点给出的 (n+1) 单形。<div class="eq">$$\sigma=[v_0,v_1,\ldots,v_{n+1}].$$</div>改变两个顶点的奇排列会反向。本步得到：符号约定固定。<h4>第2步：写第一遍边界</h4>回忆：删除第 i 个顶点所得面记 (\sigma_i)。<div class="eq">$$\partial_{n+1}\sigma=\sum_{i=0}^{n+1}(-1)^i[v_0,\ldots,\widehat v_i,\ldots,v_{n+1}].$$</div>本步得到：得到 n 维面的带符号和。<h4>第3步：再取一次边界</h4>回忆：对每个 σᵢ 再删除一个剩余顶点。最终每项都由原单形删去两个不同顶点得到，因此可按无序对 {i,j} 分组。本步得到：只需比较同一余维 2 面的两种来源。<h4>第4步：固定 i<j</h4>回忆：考虑删掉 vᵢ 与 vⱼ 的面 τᵢⱼ。它可先删 i 再删 j，也可先删 j 再删 i。没有第三种路径产生同一顶点集合。本步得到：τᵢⱼ 在 ∂²中恰出现两次。<h4>第5步：计算先删 i 的符号</h4>回忆：第一遍删 i 给因子 (−1)ⁱ。删掉 vᵢ 后，原来位置 j 的顶点向前移到位置 j−1，所以第二遍符号是 (−1)ʲ⁻¹。总符号为 ((-1)^{i+j-1})。本步得到：得到第一份系数。<h4>第6步：计算先删 j 的符号</h4>回忆：第一遍删 j 给因子 (−1)ʲ。因为 i<j，删 vⱼ 不改变 vᵢ 的位置，第二遍删 i 给 (−1)ⁱ。总符号为 ((-1)^{i+j})。本步得到：得到第二份系数。<h4>第7步：让两项相消</h4>回忆：两个整数相差一个负号。<div class="eq">$$(-1)^{i+j-1}+(-1)^{i+j}=0.$$</div>所以 τᵢⱼ 的总系数为 0。本步得到：每个余维 2 面都消失。<h4>第8步：对全部顶点对求和</h4>回忆：每项都归入唯一的 i<j。所有组的系数均为零，因此整个链为零。本步得到：<div class="eq">$$\partial_n\partial_{n+1}(\sigma)=0.$$</div><h4>第9步：从生成元推广到任意链</h4>回忆：链群由有向单形自由生成，边界算子线性。若 (c=\sum a_\sigma\sigma)，则 (\partial^2c=\sum a_\sigma\partial^2\sigma=0)。本步得到：∂²=0 对所有链成立。<h4>第10步：解释闭链与边缘</h4>回忆：n 闭链是 ker ∂ₙ，n 边缘是 im ∂ₙ₊₁。若 b=∂c，则 ∂b=∂²c=0，所以每个边缘自动是闭链。本步得到：im ∂ₙ₊₁⊂ker ∂ₙ。<h4>第11步：说明商群为何良定义</h4>回忆：只有子群才能作为商群分母。<div class="eq">$$H_n(K)=\ker\partial_n/\operatorname{im}\partial_{n+1}.$$</div>上一部正好证明分母包含在分子中。本步得到：单纯同调定义合法。<h4>第12步：用三角形直观核对</h4>回忆：有向三角形 [0,1,2] 的边界是 [1,2]−[0,2]+[0,1]。再取边界得 (2−1)−(2−0)+(1−0)=0；三个顶点各正负一次。本步得到：一般证明就是这一抵消模式的高维版本。<h4>第13步：区分几何与代数原因</h4>回忆：几何上每个角或余维 2 面被两条边界路径遇到。代数上交替符号保证两条路径方向相反；没有符号时一般不会相消。本步得到：有向边界公式是定理成立的关键。<div class="keybox">$$\boxed{\partial_n\circ\partial_{n+1}=0,\qquad\operatorname{im}\partial_{n+1}\subseteq\ker\partial_n}$$</div><div class="memobox"><strong>一句话记忆：</strong>删两个顶点有两种顺序；第二次删除的位置会错开 1，所以两条路径符号相反，每个“边界的边界”都成对抵消。</div>`,
    1: L`<h4>我们要做什么</h4>证明同胚空间有同构单纯同调，并说明一般同伦等价为何仍诱导同构。单纯情形先看链映射；连续映射则用单纯逼近或奇异链棱柱算子得到同伦不变性。<h4>第1步：从单纯映射开始</h4>回忆：单纯映射 φ:K→L 把顶点送到顶点，并把每个单形送入单形。在链上定义 φ#([v₀,…,vₙ])=[φ(v₀),…,φ(vₙ)]；若像顶点重复导致降维，则该 n 链项记为 0。本步得到：得到各维群同态。<h4>第2步：验证与边界交换</h4>回忆：边界是交替删除顶点。先映射再删第 i 个顶点，与先删再映射得到同一项和同一符号；退化项也一致为零。本步得到：<div class="eq">$$\partial\varphi_\#=\varphi_\#\partial.$$</div><h4>第3步：下降到同调</h4>回忆：链映射把闭链送到闭链，把边缘送到边缘。若 z 与 z+∂c 代表同一类，则 φ#z 与 φ#z+∂φ#c 也同类。本步得到：定义 (\varphi_*:H_n(K)\to H_n(L))。<h4>第4步：处理单纯同构</h4>回忆：若 φ 有单纯逆 ψ，则链映射复合严格满足 ψ#φ#=id、φ#ψ#=id。下降到同调后也互为逆。本步得到：单纯同构保持同调。<h4>第5步：把同胚变成单纯数据</h4>回忆：给定三角剖分空间间同胚 h，它未必在当前剖分上线性。对 h 与 h⁻¹ 作足够细重心重分并取单纯逼近。本步得到：得到代表相同连续同伦类的单纯映射。<h4>第6步：回忆相邻单纯映射</h4>回忆：若 φ、ψ 对每个源单形的全部像顶点共同落在一个目标单形，称二者相邻。相邻映射之间有标准棱柱链同伦 P，满足本步得到：<div class="eq">$$\psi_\#-\varphi_\#=\partial P+P\partial.$$</div><h4>第7步：证明链同伦映射诱导相同同调映射</h4>回忆：取闭链 z，∂z=0。<div class="eq">$$\psi_\#z-\varphi_\#z=\partial Pz+P\partial z=\partial Pz.$$</div>两像相差一个边缘。本步得到：ψ*[z]=φ*[z]。<h4>第8步：把连续同伦离散化</h4>回忆：若 f≃g，三角化参数区间并对同伦方柱作足够细重分。单纯逼近可把同伦分成有限串相邻单纯映射；每一对由上一步诱导相同同调映射。本步得到：同伦映射 f、g 诱导同一同态。<h4>第9步：写同伦等价数据</h4>回忆：X≃Y 表示有 f:X→Y、g:Y→X。<div class="eq">$$g\circ f\simeq\operatorname{id}_X,\qquad f\circ g\simeq\operatorname{id}_Y.$$</div>本步得到：准备在同调上取复合。<h4>第10步：应用函子性与同伦不变性</h4>回忆：诱导同态保持复合，且同伦映射诱导相同同态。<div class="eq">$$g_*f_*=(gf)_*=\operatorname{id}_{H_n(X)},\qquad f_*g_*=(fg)_*=\operatorname{id}_{H_n(Y)}.$$</div>本步得到：f* 与 g* 有双边逆。<h4>第11步：推出逐维同构</h4>回忆：有双边逆的群同态是同构。<div class="eq">$$f_*:H_n(X)\xrightarrow{\cong}H_n(Y),\qquad f_*^{-1}=g_*.$$</div>本步得到：所有 n 同时成立。<h4>第12步：说明同胚是特殊情形</h4>回忆：同胚 h 的逆满足严格等式而不只同伦。所以可直接取 f=h、g=h⁻¹；同伦等价结论立即包含同胚不变性。本步得到：题目两层结论统一。<h4>第13步：提醒逆命题不成立</h4>回忆：同调只保留链群中的阿贝尔信息。有相同同调群的空间未必同伦等价，例如环面与 (S^1\vee S^1\vee S^2) 同调相同但基本群分别为 Z² 与 F₂。本步得到：同调是强不变量，但不是完整分类。<h4>第14步：收束</h4>回忆：单纯映射给链映射，单纯同伦给链同伦，链同伦在闭链上只差边缘。因此拓扑同伦信息能稳定下降为同调群同构。本步得到：不变性证明的三个层次连接完成。<div class="keybox">$$\boxed{X\simeq Y\quad\Longrightarrow\quad H_n(X)\cong H_n(Y)\ 	ext{对所有 }n}$$</div><div class="memobox"><strong>一句话记忆：</strong>同伦在链级留下一个棱柱修正项 ∂P+P∂；对闭链而言差只是一条边缘，所以同调类看不见这次变形。</div>`
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
中间核是 \(\{(u,v):u+v=0\}\)，即 \(u\) 与 \(v\) 在 \(U\cap V\) 中相消，故 \((u,v)=(z,-z)\) 型——恰好是左映射的像。右映射也满射：按 \(C_n^{U+V}(X)\) 的定义，其中每条链都已经写成一条 U 中链与一条 V 中链之和，所以它就是某个 \((u,v)\) 的像。

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
    0: L`<h4>第1步：确定定理的对象</h4>回忆：CW 复形有骨架过滤 \(X^0\subset X^1\subset\cdots\)，每个 \(n\) 维胞腔是开球。 把奇异链放在相邻两层的相对同调中，目标是比较 \(H_n^{CW}(X)\) 与 \(H_n(X;\mathbb Z)\)。 因而比较所需的过滤已经固定。
<h4>第2步：定义胞腔链群</h4>回忆：相对同调 \(H_n(A,B)\) 把 \(B\) 中的链视为零。 定义 \(C_n^{CW}(X)=H_n(X^n,X^{n-1};\mathbb Z)\)。 因而每层新添的胞腔成为链群的来源。
<h4>第3步：写出相对商空间</h4>回忆：把 \(X^{n-1}\) 压成一点，每个 \(n\) 胞腔的闭球边界也压成一点。 得到 \(X^n/X^{n-1}\cong\bigvee_{\alpha}S_\alpha^n\)。对无限胞腔用相对同调的紧支撑及直和解释。 因而每个胞腔对应一个球面分量。
<h4>第4步：计算相对同调</h4>回忆：约化同调满足 \(\widetilde H_k(S^n)=\mathbb Z\) 当 \(k=n\)，其余为零。 由商空间定理或逐胞腔切除，<div class="eq">$$H_k(X^n,X^{n-1})\cong\begin{cases}\bigoplus_\alpha\mathbb Z,&k=n,\\0,&k\ne n.\end{cases}$$</div> 因而链群有明确的自由基。
<h4>第5步：选定定向</h4>回忆：球面基本类选定一个生成元，反向定向会乘 \(-1\)。 每个特征映射 \(D^n\to X^n\) 的相对基本类给出 \(e_\alpha^n\in C_n^{CW}\)。 因而以后所有边界系数依赖一致的定向选择。
<h4>第6步：定位边界连接映射</h4>回忆：空间对长正合序列有 \(\partial:H_n(X^n,X^{n-1})\to H_{n-1}(X^{n-1})\)。 在代表链 \(c\) 上，\(\partial[c]=[\partial c]\)，因为 \(\partial c\) 已在旧骨架中。 因而相对链的真实边界落到了旧骨架。
<h4>第7步：定义胞腔微分</h4>回忆：包含 \(X^{n-1}\hookrightarrow(X^{n-1},X^{n-2})\) 诱导 \(q\)。 令 \(d_n=q\circ\partial:C_n^{CW}\to C_{n-1}^{CW}\)。 因而微分是两次明确的同调映射之复合。
<h4>第8步：验证微分平方为零</h4>回忆：长正合序列中相邻两箭头的复合为零。 对 \(c\in C_n\)，先得 \(\partial c\in H_{n-1}(X^{n-1})\)；它是从更大一层来的边界，投到下一相对群后再取连接映射为零，故 \(d_{n-1}d_n=0\)。 因而胞腔链群确实组成链复形。
<h4>第9步：排除低骨架的高维同调</h4>回忆：维数公理与逐胞腔长正合序列给出 \(H_k(X^m)=0\) 对 \(k>m\)。 尤其 \(H_n(X^{n-1})=0\) 且 \(H_{n-1}(X^{n-2})=0\)。 因而后续长正合序列中的两个映射可判为单射。
<h4>第10步：写出第一个关键正合片段</h4>回忆：对 \((X^n,X^{n-1})\)，长正合序列逐项连接绝对与相对群。 相关部分是 <div class="eq">$$0\longrightarrow H_n(X^n)\xrightarrow{j}C_n\xrightarrow{\partial}H_{n-1}(X^{n-1})\longrightarrow\cdots.$$</div> 因而\(j\) 单射且像为 \(\ker\partial\)。
<h4>第11步：核对第二个关键单射</h4>回忆：对 \((X^{n-1},X^{n-2})\) 也用长正合序列。 因 \(H_{n-1}(X^{n-2})=0\)，映射 \(q:H_{n-1}(X^{n-1})\to C_{n-1}\) 为单射。 因而投影到胞腔链不会丢失该维同调信息。
<h4>第12步：识别胞腔循环</h4>回忆：若 \(d_nc=0\)，则 \(q\partial c=0\)。 由 \(q\) 单射知 \(\partial c=0\)；再由第一个正合片段知 \(c=jz\) 对某个 \(z\in H_n(X^n)\)。 因而得到 \(\ker d_n\cong H_n(X^n)\)。
<h4>第13步：检查进入边界的元素</h4>回忆：对 \((X^{n+1},X^n)\) 的连接映射记为 \(\partial_{n+1}\)。 胞腔边界 \(d_{n+1}=j\circ\partial_{n+1}\)，其中 \(j:H_n(X^n)\hookrightarrow C_n\)。 因而胞腔边界在上述识别下正是 \(\operatorname{im}\partial_{n+1}\)。
<h4>第14步：写出下一层的正合片段</h4>回忆：同一长正合序列还含 \(C_{n+1}\xrightarrow{\partial_{n+1}}H_n(X^n)\to H_n(X^{n+1})\)。 相对群 \(H_n(X^{n+1},X^n)=0\)，故第二个箭头满射，且核为 \(\operatorname{im}\partial_{n+1}\)。 因而商去新胞腔造成的边界即可得到下一骨架同调。
<h4>第15步：形成商群</h4>回忆：链复形同调定义为 \(\ker d_n/\operatorname{im}d_{n+1}\)。 把前两步代入，<div class="eq">$$H_n^{CW}(X)\cong H_n(X^n)/\operatorname{im}\partial_{n+1}\cong H_n(X^{n+1}).$$</div> 因而胞腔同调已经算到 \(n+1\) 骨架。
<h4>第16步：处理更高胞腔</h4>回忆：第 \(m\) 层相对群只在次数 \(m\) 非零。 若 \(m\ge n+2\)，\((X^m,X^{m-1})\) 的 \(H_n,H_{n+1}\) 都为零；长正合序列给 \(H_n(X^{m-1})\cong H_n(X^m)\)。 因而更高维胞腔不再影响第 \(n\) 同调。
<h4>第17步：处理无限 CW 复形</h4>回忆：紧致的奇异单形及有限条链在 CW 弱拓扑中可借助紧致性定理落入有限子复形。 奇异同调与骨架过滤的直极限相容：\(H_n(X)\cong\varinjlim_m H_n(X^m)\)。此处引用 CW 复形的紧致因子化引理。 因而无限维情形仍可由有限阶段计算。
<h4>第18步：把有限阶段接到整体</h4>回忆：直极限在 \(m\ge n+1\) 的每个箭头上均为同构。 于是 \(\varinjlim_mH_n(X^m)\cong H_n(X^{n+1})\cong H_n^{CW}(X)\)。 因而得到了要求的群同构。
<h4>第19步：解释自然性范围</h4>回忆：胞腔映射保持各层骨架，能诱导相对同调链映射。 上述构造只用包含、连接映射和商映射，故对胞腔映射自然；一般连续映射先用胞腔逼近定理替换为同伦的胞腔映射。 因而自然性所需的映射条件已经说明。
<h4>第20步：检查低维特例</h4>回忆：\(C_0\) 是零维胞腔的自由群，\(d_0=0\)。 \(H_0^{CW}=C_0/\operatorname{im}d_1\) 把同一道路分支内的顶点等同，正好是奇异 \(H_0\)。 因而归纳比较在 \(n=0\) 也一致。
<h4>第21步：收束同构</h4>回忆：两种同调都由相同的骨架正合序列控制。 把循环、边界和稳定阶段三处识别合并，<div class="eq">$$H_n^{CW}(X)\xrightarrow{\;\cong\;}H_n(X;\mathbb Z).$$</div> 因而定理在所有次数成立。
<div class="keybox">$$\boxed{H_n^{CW}(X)\cong H_n(X;\mathbb Z)}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>相对同调把每个胞腔变成一个自由生成元；两次长正合序列把“循环模边界”还原为奇异同调。</div>`,
    1: L`<h4>第1步：明确要算的系数</h4>回忆：胞腔边界 \(d_n:C_n\to C_{n-1}\) 是整数矩阵。 固定 \(n\) 胞腔 \(e_\alpha^n\) 与 \((n-1)\) 胞腔 \(e_\beta^{n-1}\)，只求矩阵的 \((\beta,\alpha)\) 项。 因而问题化成一个整数。
<h4>第2步：给每个胞腔定向</h4>回忆：\(H_n(D^n,S^{n-1})\cong\mathbb Z\)，生成元由定向决定。 选择两类胞腔的生成元 \(e_\alpha^n,e_\beta^{n-1}\)。 因而系数正负的标准固定。
<h4>第3步：回忆特征映射</h4>回忆：CW 结构的 \(n\) 胞腔由 \(\Phi_\alpha:D^n\to X^n\) 添加。 边界限制 \(\phi_\alpha=\Phi_\alpha|_{S^{n-1}}:S^{n-1}\to X^{n-1}\) 就是粘贴映射。 因而边界信息全部在 \(\phi_\alpha\) 中。
<h4>第4步：确定要保留的胞腔</h4>回忆：商空间把 \((n-2)\) 骨架压缩为一点。 \(X^{n-1}/X^{n-2}\cong\bigvee_\gamma S_\gamma^{n-1}\)。 因而所有 \((n-1)\) 胞腔已各自成为球面。
<h4>第5步：投影到目标球面</h4>回忆：从楔和到一个分量有压缩映射。 令 \(q_\beta:X^{n-1}\to X^{n-1}/(X^{n-1}-e_\beta^{n-1})\cong S^{n-1}\)，精确地说压缩其他胞腔及旧骨架。 因而目标分量被单独抽出。
<h4>第6步：组成关键映射</h4>回忆：连续映射可以复合。 定义 \(\phi_{\alpha\beta}=q_\beta\circ\phi_\alpha:S^{n-1}\to S^{n-1}\)。 因而边界系数被转成球面自映射的问题。
<h4>第7步：回忆度数</h4>回忆：球面自映射在顶维约化同调上是整数倍。 \((\phi_{\alpha\beta})_*:\widetilde H_{n-1}(S^{n-1})\to\widetilde H_{n-1}(S^{n-1})\) 等于乘 \(\deg\phi_{\alpha\beta}\)。 因而得到一个可计算整数。
<h4>第8步：从相对基本类取边界</h4>回忆：\(\partial:H_n(D^n,S^{n-1})\to\widetilde H_{n-1}(S^{n-1})\) 把圆盘定向送到球面边界定向。 对 \(\Phi_\alpha\) 的相对基本类取连接映射，得到 \((\phi_\alpha)_*[S^{n-1}]\in H_{n-1}(X^{n-1})\)。 因而几何粘贴球面成为代数边界。
<h4>第9步：利用连接映射自然性</h4>回忆：空间对映射与长正合序列的连接映射交换。 先经 \(\Phi_\alpha\) 再取相对边界，等于先取 \([S^{n-1}]\) 再经 \(\phi_\alpha\)。 因而上一步的边界表达式有严格来源。
<h4>第10步：投到相邻相对群</h4>回忆：\(d_n\) 的第二段映射是 \(H_{n-1}(X^{n-1})\to H_{n-1}(X^{n-1},X^{n-2})\)。 像在楔和球面的直和中写成 \(\sum_\gamma a_\gamma e_\gamma^{n-1}\)。 因而每个 \(a_\gamma\) 可独立提取。
<h4>第11步：提取 \(\beta\) 系数</h4>回忆：投影到第 \(\beta\) 个直和分量与 \(q_\beta\) 诱导的同调映射一致。 作用在上一步的边界上，<div class="eq">$$a_\beta[S^{n-1}]=(q_\beta\phi_\alpha)_*[S^{n-1}].$$</div> 因而\(a_\beta\) 等于该球面映射的度数。
<h4>第12步：写出整个微分</h4>回忆：链群是自由阿贝尔群，元素按胞腔基唯一展开。 对所有 \(\beta\) 同时应用前一步，<div class="eq">$$d_n(e_\alpha^n)=\sum_\beta\deg(\phi_{\alpha\beta})e_\beta^{n-1}.$$</div> 因而边界矩阵完全由粘贴度数给出。
<h4>第13步：解释有符号计数</h4>回忆：正则胞腔结构可把度数视为取向交点的代数和。 若目标球面选正则值 \(y\)，每个原像按局部取向记 \(+1\) 或 \(-1\)，总和即度数。 因而公式在几何上就是“带符号数覆盖次数”。
<h4>第14步：核对一维情形</h4>回忆：\(\widetilde H_0(S^0)\cong\mathbb Z\) 仍可定义度数。 一条有向边从顶点 \(v_-\) 到 \(v_+\)，其边界是 <div class="eq">$$d_1(e^1)=v_+-v_-.$$</div> 因而普通图的关联矩阵是本公式的 \(n=1\) 情形。
<h4>第15步：核对二维环面</h4>回忆：环面的一张二维胞腔沿 \(aba^{-1}b^{-1}\) 粘到一骨架。 对 \(a\) 的有向次数 \(1-1=0\)，对 \(b\) 的有向次数也 \(1-1=0\)。 因而因此该二维胞腔的 \(d_2=0\)。
<h4>第16步：说明定向改变</h4>回忆：生成元改成相反数会使相应矩阵行或列乘 \(-1\)。 反转 \(e_\alpha^n\) 使整列变号；反转 \(e_\beta^{n-1}\) 使该行变号。 因而群同调不因基选择改变。
<h4>第17步：说明普通度数的适用范围</h4>回忆：\(S^{n-1}\) 的顶维约化同调在 \(n\ge1\) 都是 \(\mathbb Z\)。 \(n=0\) 没有 \(d_0\) 的粘贴球面；令 \(d_0=0\)。 因而公式从 \(n=1\) 开始使用。
<h4>第18步：核对 \(d^2=0\)</h4>回忆：连续两次边界为零是长正合序列的结果。 矩阵化后每个 \((n-2)\) 胞腔的系数满足 \(\sum_\beta\deg(\phi_{\alpha\beta})\deg(\phi_{\beta\gamma})=0\)。 因而度数矩阵必须满足链复形约束。
<h4>第19步：区分映射与度数</h4>回忆：\(\phi_\alpha\) 到整个旧骨架，\(\phi_{\alpha\beta}\) 才是球面自映射。 只有复合压缩后的映射才谈 \(\deg(\phi_{\alpha\beta})\)；单独给 \(\phi_\alpha\) 一个度数通常没有意义。 因而公式中的符号定义清楚。
<h4>第20步：形成可执行算法</h4>回忆：胞腔链群按维数自由生成。 列出胞腔、逐个构造 \(q_\beta\phi_\alpha\)、算度数、写边界矩阵，再求 \(\ker d_n/\operatorname{im}d_{n+1}\)。 因而从粘贴图可计算同调。
<div class="keybox">$$\boxed{d_n(e_\alpha^n)=\sum_\beta \deg(q_\beta\circ\phi_\alpha)e_\beta^{n-1}}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>先把旧骨架压成球面楔和，再看粘贴球面对每个目标球面绕了几圈；圈数就是边界系数。</div>`
  },
  "t16": {
    0: L`<h4>第1步：补齐适用条件</h4>回忆：Lefschetz 定理通常用于有限 CW 复形或紧致 ENR 上的连续自映射。 先在紧致多面体 \(X\) 上证明；其余常用情形用标准 Lefschetz 理论推广。任意可缩非紧空间不能直接套用。 因而定理的紧致性边界明确。
<h4>第2步：定义 Lefschetz 数</h4>回忆：有理同调 \(H_i(X;\mathbb Q)\) 对紧致多面体是有限维向量空间。 令 <div class="eq">$$L(f)=\sum_i(-1)^i\operatorname{tr}(f_*:H_i(X;\mathbb Q)\to H_i(X;\mathbb Q)).$$</div> 因而一个整数值的同伦不变量被定义。
<h4>第3步：说明迹的意义</h4>回忆：线性映射的迹是矩阵对角线之和，与基无关。 若 \(f_*\) 在 \(H_i\) 的矩阵为 \(A_i\)，则该维贡献为 \((-1)^i\operatorname{tr}A_i\)。 因而要证明有不动点只需排除 \(L(f)=0\)。
<h4>第4步：转向链层面</h4>回忆：有限三角剖分的单纯链群 \(C_i(K;\mathbb Q)\) 有按单形编号的有限基。 单纯逼近后，\(f\) 由链映射 \(F_i:C_i\to C_i\) 代表。 因而同调迹可借链群迹计算。
<h4>第5步：引用逼近定理并说明用途</h4>回忆：单纯逼近定理给出充分细重心细分上的单纯映射，与原映射同伦。 对没有不动点的 \(f\)，选逼近 \(g\) 与 \(f\) 同伦，且 \(g\) 仍无不动点；这里用紧致性保持正距离。 因而可在有限单纯链群上工作。
<h4>第6步：检查无不动点的间距</h4>回忆：在紧致度量多面体上，\(x\mapsto d(x,f(x))\) 连续。 若 \(f(x)\ne x\) 对所有 \(x\)，则 \(m=\min_x d(x,f(x))>0\)。 因而小于 \(m/2\) 的一致逼近仍无不动点。
<h4>第7步：把三角形取得足够细</h4>回忆：重心细分使所有单形的直径任意小。 取细分使单形及其闭星的直径小于无不动点间距控制量；单纯逼近的载体条件据此排除单形与自身的像重合。 因而后面每个对角矩阵元都可判零。
<h4>第8步：解释链迹的对角元</h4>回忆：\(F_i(\sigma)\) 是若干有向 \(i\) 单形的有理线性组合。 迹中的 \(\sigma\) 对角元只看 \(F_i(\sigma)\) 是否含 \(\pm\sigma\)。 因而若无单形回到自身，链迹为零。
<h4>第9步：说明回到自身为何迫使不动点</h4>回忆：若一个单纯映射把 \(\sigma\) 映为自身且顶点排列为置换，线性映射 \(\sigma\to\sigma\) 有重心不动点。 由 Brouwer 不动点定理在该单形上也可得不动点，与逼近映射无不动点相冲突。 因而单纯映射的对角项均为零。
<h4>第10步：得到链级交错迹</h4>回忆：逐维对角元都为零。 因此 \(\operatorname{tr}(F_i|C_i)=0\)，从而 <div class="eq">$$\sum_i(-1)^i\operatorname{tr}(F_i|C_i)=0.$$</div> 因而链级 Lefschetz 数为零。
<h4>第11步：解释为何能换成同调迹</h4>回忆：链复形的短正合序列 \(0\to Z_i\to C_i\to B_{i-1}\to0\) 中迹可相加。 令 \(Z_i=\ker\partial_i,B_i=\operatorname{im}\partial_{i+1}\)，则 \(\operatorname{tr}(C_i)=\operatorname{tr}(Z_i)+\operatorname{tr}(B_{i-1})\)。 因而链迹拆成循环迹与边界迹。
<h4>第12步：继续拆循环迹</h4>回忆：短正合序列 \(0\to B_i\to Z_i\to H_i\to0\) 也与链映射相容。 故 \(\operatorname{tr}(Z_i)=\operatorname{tr}(B_i)+\operatorname{tr}(H_i)\)。 因而同调迹出现在分解中。
<h4>第13步：让边界迹抵消</h4>回忆：交错求和中一项 \(B_i\) 在 \(C_i\) 与 \(C_{i+1}\) 出现，符号相反。 代入前两式，<div class="eq">$$\sum_i(-1)^i\operatorname{tr}(F_i|C_i)=\sum_i(-1)^i\operatorname{tr}(g_*|H_i).$$</div> 因而这就是 Hopf 迹公式。
<h4>第14步：由同伦替换回原映射</h4>回忆：同伦映射诱导相同的同调同态。 \(g\simeq f\) 给 \(g_*=f_*\)，故右边正是 \(L(f)\)。 因而链级零迹等于原映射 Lefschetz 数。
<h4>第15步：写出逆否命题</h4>回忆：上面在“没有不动点”假设下推出 \(L(f)=0\)。 逻辑逆否得到 \(L(f)\ne0\Longrightarrow\exists x\in X,\ f(x)=x\)。 因而主要定理成立。
<h4>第16步：检查连通可缩的同调</h4>回忆：非空可缩空间同伦等价于一点。 于是 \(H_0(X;\mathbb Q)\cong\mathbb Q\)，而 \(H_i(X;\mathbb Q)=0\) 对 \(i>0\)。 因而只剩零维迹。
<h4>第17步：计算可缩空间的迹</h4>回忆：连续自映射把唯一道路分支映回自身。 在 \(H_0\cong\mathbb Q\) 上 \(f_*=\mathrm{id}\)，故 <div class="eq">$$L(f)=\operatorname{tr}(\mathrm{id}_{\mathbb Q})=1.$$</div> 因而在定理适用的紧致可缩空间上必有不动点。
<h4>第18步：核对闭区间特例</h4>回忆：\([0,1]\) 是紧致且可缩的有限 CW 复形。 任意 \(f:[0,1]\to[0,1]\) 的 \(L(f)=1\)，得到至少一个 \(f(x)=x\)。 因而结论包含一维 Brouwer 定理。
<h4>第19步：指出非紧反例</h4>回忆：\(\mathbb R\) 可缩，但不满足上面的紧致前提。 平移 \(f(x)=x+1\) 没有不动点，虽然若形式上只看普通同调会写出 \(L(f)=1\)。 因而“可缩”必须连同适用空间类别理解。
<h4>第20步：说明所引深引理</h4>回忆：单纯逼近和 Hopf 迹公式分别实现几何到有限链、链迹到同调迹。 前者已说明用法，后者由两条短正合序列逐项推得；紧致 ENR 的推广需另用固定点指数理论。 因而证明没有把深推广伪装成初等步骤。
<div class="keybox">$$\boxed{L(f)\ne0\Longrightarrow \operatorname{Fix}(f)\ne\varnothing}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>无不动点会迫使细分后链映射所有对角项为零；链迹与同调迹相等，故 Lefschetz 数只能为零。</div>`,
    1: L`<h4>第1步：明确流形条件</h4>回忆：Poincaré–Hopf 定理针对紧致无边的光滑流形和孤立零点向量场。 设 \(M^n\) 闭、\(V\) 光滑，零点有限；有边界需向外指向等额外条件。 因而积分式指标和有了正确范围。
<h4>第2步：定义零点</h4>回忆：切丛截面 \(V:M\to TM\) 在 \(p\) 为零是指 \(V(p)=0\in T_pM\)。 取只含一个零点的坐标球 \(B_\varepsilon(p)\)，其边界上 \(V\ne0\)。 因而可在小球面上定义局部度数。
<h4>第3步：定义局部指标</h4>回忆：规范化 \(V/ V|\) 给 \(S^{n-1}_\varepsilon\to S^{n-1}\)。|设 <div class="eq">$$\operatorname{ind}_p(V)=\deg\!\left(\frac{V}{|V|}\bigg|_{\partial B_\varepsilon(p)}\right).$$</div> 因而每个零点分配一个整数。
<h4>第4步：说明坐标无关</h4>回忆：坐标变更连续地改变局部平凡化，定向在源与靶中同步变化。 度数在同伦下不变，缩小球半径时没有新零点穿过边界，所以指标不变。 因而定义不依赖坐标球。
<h4>第5步：处理非退化零点</h4>回忆：若 \(DV_p:T_pM\to T_pM\) 可逆，则线性化与原向量场在小球边界同伦。 于是 <div class="eq">$$\operatorname{ind}_p(V)=\operatorname{sgn}\det(DV_p)\in\{1,-1\}.$$</div> 因而指标能由一个行列式计算。
<h4>第6步：定义 Euler 示性数</h4>回忆：闭流形有有限 CW 型，故各同调秩有限。 令 \(\chi(M)=\sum_{i=0}^n(-1)^i\operatorname{rank}H_i(M;\mathbb Q)\)。 因而目标右边已具体化。
<h4>第7步：引用泛性扰动</h4>回忆：横截性定理可把向量场微扰为零截面的横截截面。 微扰后零点非退化且有限；只要边界球上无零点，局部度数在扰动中保持。 因而可先证明非退化情形。
<h4>第8步：选择 Riemann 度量</h4>回忆：光滑紧致流形存在 Riemann 度量。 每个 \(x\) 的指数映射 \(\exp_x\) 在足够小的切向量上有定义；紧致性允许统一选小 \(\varepsilon>0\)。 因而能从向量场构造自映射。
<h4>第9步：构造与恒等同伦的映射</h4>回忆：指数映射 \(\exp_x(0)=x\)。 定义 \(f(x)=\exp_x(-\varepsilon V(x))\)，同伦 \(f_t(x)=\exp_x(-t\varepsilon V(x))\) 从 \(\mathrm{id}\) 连到 \(f\)。 因而\(f\) 与恒等映射有相同的 Lefschetz 数。
<h4>第10步：辨认不动点</h4>回忆：在每个 \(x\) 的足够小指数邻域中 \(\exp_x\) 单射。 因此 \(f(x)=x\) 当且仅当 \(-\varepsilon V(x)=0\)，也就是 \(V(x)=0\)。 因而不动点正好是向量场零点。
<h4>第11步：计算全局 Lefschetz 数</h4>回忆：同伦映射在同调上作用相同。 \(L(f)=L(\mathrm{id})=\sum_i(-1)^i\operatorname{tr}(\mathrm{id}|H_i)=\sum_i(-1)^i\dim H_i=\chi(M)\)。 因而全局目标量已算出。
<h4>第12步：引入局部不动点指数</h4>回忆：孤立不动点 \(p\) 的指数是 \(\deg(x\mapsto x-f(x))\) 在小球边界上的度数。 连续坐标中选择 \(x-f(x)\ne0\) 的小球，得到整数 \(\operatorname{ind}_p(f)\)。 因而可把全局 Lefschetz 数拆到零点。
<h4>第13步：比较局部位移</h4>回忆：在 \(p\) 附近，指数映射一阶展开满足 \(f(x)=x-\varepsilon V(x)+o( V(x)|)\)。|于是 \(x-f(x)\) 与 \(+\varepsilon V(x)\) 在足够小的边界上经非零同伦连接。 因而选负号正是为了指标符号一致。
<h4>第14步：得到局部指标相等</h4>回忆：同伦的球面映射有相同度数。 由上一步，<div class="eq">$$\operatorname{ind}_p(f)=\deg(x-f(x))=\deg(V/|V|)=\operatorname{ind}_p(V).$$</div> 因而每个不动点贡献等于向量场零点贡献。
<h4>第15步：使用 Lefschetz–Hopf 局部公式</h4>回忆：紧致 ENR 的固定点指数理论给 \(L(f)=\sum_{f(p)=p}\operatorname{ind}_p(f)\)，前提是不动点孤立。 此公式是这里引用的深引理；用途是把同调上算出的全局迹分配给每个局部零点。 因而全局与局部可以相加。
<h4>第16步：把三处等式连接</h4>回忆：\(L(f)=\chi(M)\)，不动点集合等于零点集合，局部指标相等。 逐项代换，<div class="eq">$$\chi(M)=L(f)=\sum_{f(p)=p}\operatorname{ind}_p(f)=\sum_{V(p)=0}\operatorname{ind}_p(V).$$</div> 因而核心等式得到。
<h4>第17步：去掉非退化假设</h4>回忆：孤立但退化的零点指标仍由小球上的度数定义。 用泛性扰动把该零点拆成有限个非退化零点；边界球映射同伦不变，拆出的指标之和等于原指标。 因而结论覆盖所有孤立零点。
<h4>第18步：核对圆周</h4>回忆：圆周的切向恒速向量场无零点。 空和为 \(0\)，而 \(H_0(S^1)=H_1(S^1)=\mathbb Q\)，故 \(\chi(S^1)=1-1=0\)。 因而定理与无零点例子一致。
<h4>第19步：核对球面</h4>回忆：\(S^2\) 的高度梯度场有南北两个非退化零点。 每处局部指数为 \(+1\)，和为 \(2\)；同时 \(\chi(S^2)=1+1=2\)。 因而出现“毛球”障碍的数值原因。
<h4>第20步：强调条件与独立性</h4>回忆：\(\chi(M)\) 只依赖同调，不依赖向量场。 因每个合格向量场的指标和都等于同一个 \(\chi(M)\)，改变 \(V\) 只会移动、合并或拆分零点。 因而指标总和与向量场选择无关。
<div class="keybox">$$\boxed{\sum_{V(p)=0}\operatorname{ind}_p(V)=\chi(M)}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>把向量场变成接近恒等的映射；零点成为不动点，局部指数求和则是恒等映射的 Lefschetz 数。</div>`
  },
  "t17": {
    0: L`<h4>第1步：确定方向</h4>回忆：连续映射 \(f:X\to Y\) 把 \(X\) 中奇异单形送到 \(Y\)。 目标却是 \(H^n(Y)\to H^n(X)\)，方向反转来自对链群取 \(\operatorname{Hom}(-,\mathbb Z)\)。 因而反变的来源明确。
<h4>第2步：定义奇异链映射</h4>回忆：奇异 \(n\) 单形是 \(\sigma:\Delta^n\to X\)。 令 \(f_\#(\sigma)=f\circ\sigma\)，然后对整数线性组合逐项延拓。 因而得到 \(f_\#:C_n(X)\to C_n(Y)\)。
<h4>第3步：核对边界交换</h4>回忆：奇异边界 \(\partial\sigma=\sum_{j=0}^n(-1)^j\sigma\circ\iota_j\)。 \(f_\#\partial\sigma=\sum_j(-1)^jf\sigma\iota_j=\partial(f\sigma)\)。 因而\(f_\#\partial=\partial f_\#\)。
<h4>第4步：定义上链群</h4>回忆：系数为 \(\mathbb Z\) 时 \(C^n(Z)=\operatorname{Hom}(C_n(Z),\mathbb Z)\)。 一个上链 \(\varphi\) 把每条 \(n\) 链送成整数。 因而对链映射前复合有意义。
<h4>第5步：定义拉回上链</h4>回忆：前复合将函数的定义域从 \(C_n(Y)\) 改成 \(C_n(X)\)。 对 \(\varphi\in C^n(Y)\)，设 \(f^\#\varphi=\varphi\circ f_\#\)。 因而映射方向已经逆转。
<h4>第6步：逐单形写公式</h4>回忆：每个上链由在奇异单形上的取值决定。 <div class="eq">$$(f^\#\varphi)(\sigma)=\varphi(f\circ\sigma).$$</div> 因而拉回就是先用 \(f\) 推单形，再测量。
<h4>第7步：定义余边界</h4>回忆：余边界 \(\delta:C^n\to C^{n+1}\) 是链边界的对偶。 对 \(c\in C_{n+1}\)，\((\delta\varphi)(c)=\varphi(\partial c)\)。 因而证明交换律只需代入此式。
<h4>第8步：算左侧</h4>回忆：取 \(c\in C_{n+1}(X)\)。 \((\delta f^\#\varphi)(c)=(f^\#\varphi)(\partial c)=\varphi(f_\#\partial c)\)。 因而左侧化为链映射作用后的值。
<h4>第9步：用链映射性质</h4>回忆：第三步已有 \(f_\#\partial c=\partial f_\#c\)。 故 \(\varphi(f_\#\partial c)=\varphi(\partial f_\#c)\)。 因而可以把边界挪过 \(f_\#\)。
<h4>第10步：算右侧</h4>回忆：余边界定义给 \((\delta\varphi)(f_\#c)=\varphi(\partial f_\#c)\)。 上式又等于 \((f^\#\delta\varphi)(c)\)，故 \(\delta f^\#=f^\#\delta\)。 因而\(f^\#\) 是上链映射。
<h4>第11步：送闭上链到闭上链</h4>回忆：闭上链满足 \(\delta\varphi=0\)。 若 \(\delta\varphi=0\)，则 \(\delta(f^\#\varphi)=f^\#(\delta\varphi)=0\)。 因而\(f^\#\) 保持上同调分子。
<h4>第12步：送恰当上链到恰当上链</h4>回忆：恰当上链写成 \(\varphi=\delta\psi\)。 \(f^\#\varphi=f^\#\delta\psi=\delta f^\#\psi\)。 因而\(f^\#\) 保持上同调分母。
<h4>第13步：在商群上定义</h4>回忆：上同调是 \(H^n=\ker\delta_n/\operatorname{im}\delta_{n-1}\)。 定义 \(f^*[\varphi]=[f^\#\varphi]\)；更换代表 \(\varphi+\delta\psi\) 只改变一个恰当上链。 因而诱导映射良定义。
<h4>第14步：验证加法</h4>回忆：\(f^\#\) 由 \(\operatorname{Hom}\) 的线性运算得到。 \(f^*([\varphi]+[\psi])=[f^\#(\varphi+\psi)]=[f^\#\varphi]+[f^\#\psi]\)。 因而\(f^*\) 是群同态。
<h4>第15步：验证恒等映射</h4>回忆：\((\mathrm{id}_X)_\#=\mathrm{id}_{C_n(X)}\)。 前复合恒等不改变上链，所以 \((\mathrm{id}_X)^*=\mathrm{id}_{H^n(X)}\)。 因而反变函子保恒等。
<h4>第16步：写出复合的链层次</h4>回忆：令 \(X\xrightarrow fY\xrightarrow gZ\)。 \((g\circ f)_\#=g_\#\circ f_\#\)，因为 \((g f)\sigma=g(f\sigma)\)。 因而链方向的复合顺序固定。
<h4>第17步：反转复合顺序</h4>回忆：\(\eta\in C^n(Z)\) 时 \(\eta\circ(g_\#f_\#)=(\eta\circ g_\#)\circ f_\#\)。 因此 \((g f)^\#=f^\#g^\#\)。 因而取对偶造成顺序反转。
<h4>第18步：下放至上同调</h4>回忆：上链等式对闭、恰当上链都成立。 故 <div class="eq">$$(g\circ f)^*=f^*\circ g^*:H^n(Z)\to H^n(X).$$</div> 因而反变函子律完整证明。
<h4>第19步：说明系数推广</h4>回忆：对任意阿贝尔群 \(G\)，可令 \(C^n(Z;G)=\operatorname{Hom}(C_n(Z),G)\)。 前面每个代入只用加法与边界交换，因此同样给 \(f^*:H^n(Y;G)\to H^n(X;G)\)。 因而结论不局限整数系数。
<h4>第20步：核对零维直觉</h4>回忆：\(H^0(Z;\mathbb Z)\) 对每个道路分支给一个整数。 拉回 \(f^*\) 把 \(Y\) 的分支函数与 \(f\) 复合，成为 \(X\) 的分支函数。 因而反变方向与普通函数复合相同。
<div class="keybox">$$\boxed{f^*:H^n(Y;G)\longrightarrow H^n(X;G),\qquad(gf)^*=f^*g^*}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>链沿映射向前推，上链作为“测量函数”向后拉；余边界交换保证它能降到上同调。</div>`,
    1: L`<h4>第1步：先说明对象</h4>回忆：整数奇异链复形 \(C_*(X)\) 每个 \(C_n\) 都是自由阿贝尔群。 系数 \(G\) 的上链复形是 \(\operatorname{Hom}(C_*(X),G)\)，其同调记 \(H^n(X;G)\)。 因而万有系数定理有了链级起点。
<h4>第2步：定义循环与边界</h4>回忆：\(Z_n=\ker\partial_n\)，\(B_n=\operatorname{im}\partial_{n+1}\)。 同调 \(H_n=Z_n/B_n\)，且 \(\partial:C_n\to B_{n-1}\) 满射。 因而同调的两个组成部分分开。
<h4>第3步：说明自由性用途</h4>回忆：自由阿贝尔群的子群仍自由。 故 \(Z_n,B_n\) 都自由；短正合序列 \(0\to Z_n\to C_n\to B_{n-1}\to0\) 因末项自由而分裂。 因而可以合法地用代数 UCT。
<h4>第4步：写出上链微分</h4>回忆：\(\delta\varphi=\varphi\circ\partial\)。 闭上链条件是 \(\varphi(\partial c)=0\) 对所有 \(c\)，即 \(\varphi\) 在 \(B_n\) 上为零。 因而闭上链可在商中测量同调类。
<h4>第5步：构造自然评价映射</h4>回忆：闭上链 \(\varphi\) 在 \(B_n\) 上为零。 对 \([z]\in H_n\)，设 \(\mathrm{ev}([\varphi])([z])=\varphi(z)\)。 因而目标为 \(\operatorname{Hom}(H_n,G)\)。
<h4>第6步：检查代表无关</h4>回忆：若 \(z'=z+\partial c\)，闭性给 \(\varphi(z')=\varphi(z)+\varphi(\partial c)=\varphi(z)\)。 若 \(\varphi'=\varphi+\delta\psi\)，则 \(\varphi'(z)=\varphi(z)+\psi(\partial z)=\varphi(z)\)。 因而评价映射在两个商群上都良定义。
<h4>第7步：说明满射的延拓</h4>回忆：给 \(\lambda:H_n\to G\)，先在 \(Z_n\) 上取 \(\lambda\circ(Z_n\to H_n)\)。 因 \(C_n/Z_n\cong B_{n-1}\) 自由，此函数可沿 \(Z_n\subset C_n\) 延拓成 \(\varphi:C_n\to G\)。 因而任何同调类上的函数来自闭上链。
<h4>第8步：核对闭性</h4>回忆：延拓 \(\varphi\) 在 \(B_n\subset Z_n\) 上等于 \(\lambda(0)=0\)。 故 \(\delta\varphi=0\)，且 \(\mathrm{ev}[\varphi]=\lambda\)。 因而评价映射满射。
<h4>第9步：识别核的第一步</h4>回忆：若 \(\mathrm{ev}[\varphi]=0\)，则 \(\varphi\) 在 \(Z_n\) 上为零。 于是 \(\varphi\) 经 \(C_n/Z_n\cong B_{n-1}\) 因子化为 \(\bar\varphi:B_{n-1}\to G\)。 因而核由边界群上的函数描述。
<h4>第10步：识别恰当上链</h4>回忆：若 \(\varphi=\delta\psi=\psi\partial\)，则 \(\bar\varphi=\psi _{B_{n-1}}\)。|因此在核中要再模掉那些能从 \(B_{n-1}\) 延拓到 \(C_{n-1}\) 的函数。 因而得到一个可计算的商。
<h4>第11步：把商化为 Ext</h4>回忆：短正合序列 \(0\to B_{n-1}\to Z_{n-1}\to H_{n-1}\to0\) 的前两项自由。 按自由分解的定义，\(\operatorname{Ext}^1(H_{n-1},G)=\operatorname{Hom}(B_{n-1},G)/\operatorname{im}\operatorname{Hom}(Z_{n-1},G)\)。 因而核正是 Ext 项。
<h4>第12步：解释为何可用 \(C_{n-1}\)</h4>回忆：\(C_{n-1}/Z_{n-1}\cong B_{n-2}\) 自由。 每个 \(Z_{n-1}\to G\) 可延拓到 \(C_{n-1}\)，故用 \(C_{n-1}\) 或 \(Z_{n-1}\) 的延拓像相同。 因而前一步的核识别没有遗漏。
<h4>第13步：列出精确序列</h4>回忆：评价映射满射且核已经算出。 因此 <div class="eq">$$0\to\operatorname{Ext}^1(H_{n-1}(X),G)\to H^n(X;G)\xrightarrow{\mathrm{ev}}\operatorname{Hom}(H_n(X),G)\to0.$$</div> 因而上同调 UCT 的两项均有明确来源。
<h4>第14步：解释分裂性质</h4>回忆：自由链复形上的代数 UCT 有非自然的群分裂。 可选基与补空间写成 \(H^n\cong\operatorname{Ext}^1(H_{n-1},G)\oplus\operatorname{Hom}(H_n,G)\)；换映射时分裂一般不兼容。 因而不能把这个直和称为自然同构。
<h4>第15步：算一个 Ext</h4>回忆：自由分解 \(0\to\mathbb Z\xrightarrow{\times m}\mathbb Z\to\mathbb Z/m\to0\)。 应用 \(\operatorname{Hom}(-,G)\) 得 \(\operatorname{Ext}^1(\mathbb Z/m,G)\cong G/mG\)。 因而扭转的贡献可以具体算。
<h4>第16步：取整数系数</h4>回忆：\(G=\mathbb Z\) 时 \(\operatorname{Hom}(\mathbb Z/m,\mathbb Z)=0\)。 而 \(\operatorname{Ext}^1(\mathbb Z/m,\mathbb Z)=\mathbb Z/m\)。 因而扭转会在上同调中向上移动一维。
<h4>第17步：核对 \(RP^2\)</h4>回忆：\(H_1(RP^2;\mathbb Z)=\mathbb Z/2\)，\(H_2=0\)。 于是 \(H^1(RP^2;\mathbb Z)=0\)，而 \(H^2(RP^2;\mathbb Z)\cong\operatorname{Ext}^1(\mathbb Z/2,\mathbb Z)=\mathbb Z/2\)。 因而上同调群并非逐维等于同调群。
<h4>第18步：指出群数据的局限</h4>回忆：UCT 只描述每个次数的加法群。 它没有说明两个类 \(\alpha\in H^p,\beta\in H^q\) 的 Cup 积落在 \(H^{p+q}\) 的哪个元素。 因而环结构需要另一种构造。
<h4>第19步：给出区分空间的证据</h4>回忆：\(CP^2\) 与 \(S^2\vee S^4\) 的整数同调群逐维相同。 前者有 \(a^2\ne0\in H^4\)，后者正次数类的所有乘积为零；因此两者上同调环不同。 因而同调群相同不代表上同调环相同。
<h4>第20步：收束信息层级</h4>回忆：\(\operatorname{Hom}\) 读本维，\(\operatorname{Ext}\) 读前一维的扭转。 再添 Cup 积才得到 \(H^*(X)\) 作为分次环的额外信息。 因而原题的两层结论均已证明和解释。
<div class="keybox">$$\boxed{0\to\operatorname{Ext}^1(H_{n-1},G)\to H^n(X;G)\to\operatorname{Hom}(H_n,G)\to0}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>上同调的加法群由本维的 Hom 和前一维的 Ext 拼成；Cup 积还记录这些群之间如何相乘。</div>`
  },
  "t18": {
    0: L`<h4>第1步：声明系数条件</h4>回忆：Cup 积需要交换系数环 \(R\)，例如 \(\mathbb Z\) 或域。 取 \(\alpha\in H^p(X;R)\)、\(\beta\in H^q(X;R)\)，要比较两个顺序的乘积。 因而符号问题有了明确次数。
<h4>第2步：回忆上链定义</h4>回忆：奇异上链是 \(C^p(X;R)=\operatorname{Hom}(C_p(X),R)\)。 选闭上链 \(\varphi,\psi\) 分别代表 \(\alpha,\beta\)。 因而可先在链级做运算。
<h4>第3步：写 Alexander–Whitney 公式</h4>回忆：有序单形 \([v_0,\ldots,v_{p+q}]\) 可分成前 \(p\) 面与后 \(q\) 面。 <div class="eq">$$(\varphi\smile\psi)(\sigma)=\varphi(\sigma|[v_0,\ldots,v_p])\psi(\sigma|[v_p,\ldots,v_{p+q}]).$$</div> 因而得到次数 \(p+q\) 的上链。
<h4>第4步：核对乘积次数</h4>回忆：前面限制是 \(p\) 单形，后面限制是 \(q\) 单形。 所以 \(\varphi\smile\psi\in C^{p+q}(X;R)\)，并在上同调中给 \(\alpha\smile\beta\in H^{p+q}\)。 因而乘积是分次的。
<h4>第5步：回忆余边界 Leibniz 公式</h4>回忆：单形边界求和把删顶点分为前后两类。 逐项展开可得 <div class="eq">$$\delta(\varphi\smile\psi)=\delta\varphi\smile\psi+(-1)^p\varphi\smile\delta\psi.$$</div> 因而闭上链的积仍闭。
<h4>第6步：说明恰当代表无关</h4>回忆：若 \(\varphi=\delta\eta\) 且 \(\delta\psi=0\)，上式给 \(\varphi\smile\psi=\delta(\eta\smile\psi)\)。 换任一代表只改恰当上链，因此积降到 \(H^*\)。 因而上同调积良定义。
<h4>第7步：提醒链级未必交换</h4>回忆：前后面分别取不同顶点。 一般 \(\varphi\smile\psi\ne(-1)^{pq}\psi\smile\varphi\) 作为上链；两边只需相差一个余边界。 因而不能用简单顶点置换伪证链级等式。
<h4>第8步：引入对角映射</h4>回忆：对角 \(\Delta:X\to X\times X\)，\(x\mapsto(x,x)\)。 Cup 积等于外积的拉回：\(\alpha\smile\beta=\Delta^*(\alpha\times\beta)\)。 因而交换问题可转到乘积空间。
<h4>第9步：定义外积</h4>回忆：投影 \(p_1,p_2:X\times X\to X\)。 定义 \(\alpha\times\beta=p_1^*\alpha\smile p_2^*\beta\)，它在总次数 \(p+q\)。 因而两个因子分别携带一个类。
<h4>第10步：定义交换映射</h4>回忆：\(\tau:X\times X\to X\times X\)，\(\tau(x,y)=(y,x)\)。 它满足 \(\tau\circ\Delta=\Delta\)。 因而对角在交换两因子后不变。
<h4>第11步：计算投影复合</h4>回忆：\(p_1\circ\tau=p_2\)，\(p_2\circ\tau=p_1\)。 由拉回函子性，\(\tau^*p_1^*=p_2^*\)，\(\tau^*p_2^*=p_1^*\)。 因而交换映射把两个因子对调。
<h4>第12步：说明 Koszul 符号的来源</h4>回忆：在链交叉积中交换一块 \(p\) 维与一块 \(q\) 维的方向，共有 \(pq\) 次一维交换。 每次交换方向变号，所以交换映射在外积上满足 <div class="eq">$$\tau^*(\beta\times\alpha)=(-1)^{pq}\alpha\times\beta.$$</div> 因而符号来自维数块的换位。
<h4>第13步：诚实标注深引理</h4>回忆：上一式需要 Eilenberg–Zilber 交叉积与交换映射的链同伦符号引理。 该引理的用途是保证换因子的符号在上同调中准确；不能仅靠 Alexander–Whitney 公式的表面重排。 因而被引用的关键事实及作用明确。
<h4>第14步：拉回交换公式</h4>回忆：对角与交换满足 \(\tau\Delta=\Delta\)。 于是 \(\Delta^*\tau^*(\beta\times\alpha)=\Delta^*(\beta\times\alpha)=\beta\smile\alpha\)。 因而左侧已化为反序 Cup 积。
<h4>第15步：代入符号</h4>回忆：第十二步给 \(\tau^*(\beta\times\alpha)=(-1)^{pq}\alpha\times\beta\)。 拉回后 \(\beta\smile\alpha=(-1)^{pq}\Delta^*(\alpha\times\beta)=(-1)^{pq}\alpha\smile\beta\)。 因而分次交换公式得到。
<h4>第16步：整理成原题顺序</h4>回忆：\((-1)^{pq}\) 的平方是 \(1\)。 两边再乘 \((-1)^{pq}\)，得到 <div class="eq">$$\alpha\smile\beta=(-1)^{pq}\beta\smile\alpha.$$</div> 因而与题目完全一致。
<h4>第17步：检查一偶一次</h4>回忆：若 \(p\) 或 \(q\) 为偶数，\(pq\) 偶。 此时 \(\alpha\smile\beta=\beta\smile\alpha\)。 因而偶次类按普通交换律相乘。
<h4>第18步：检查两个奇次</h4>回忆：若 \(p,q\) 都奇，\(pq\) 奇。 此时 \(\alpha\smile\beta=-\beta\smile\alpha\)。 因而奇次类交换要带负号。
<h4>第19步：讨论奇次平方</h4>回忆：令 \(\beta=\alpha\)，且 \(p\) 奇。 公式给 \(\alpha^2=-\alpha^2\)，故 \(2\alpha^2=0\)；只有在无 \(2\) 扭转时才可进一步说 \(\alpha^2=0\)。 因而避免把二倍为零误写成零。
<h4>第20步：核对环面</h4>回忆：\(T^2\) 的两个一次生成元 \(a,b\) 满足 \(a\smile b\) 生成 \(H^2\cong\mathbb Z\)。 因为次数均为 \(1\)，\(b\smile a=-a\smile b\)，而 \(a^2=b^2=0\)。 因而公式与具体上同调环吻合。
<div class="keybox">$$\boxed{\alpha\smile\beta=(-1)^{pq}\beta\smile\alpha}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>交换两个分次块会产生 \(pq\) 次换位；链级不必相等，但在上同调中正好留下这个符号。</div>`,
    1: L`<h4>第1步：确定映射方向</h4>回忆：\(f:X\to Y\) 在上同调上诱导 \(f^*:H^*(Y;R)\to H^*(X;R)\)。 需证明它既保加法又保 Cup 积。 因而目标是分次环同态。
<h4>第2步：选上链代表</h4>回忆：取 \(\alpha=[\varphi]\in H^p(Y;R)\)、\(\beta=[\psi]\in H^q(Y;R)\)。 令 \(\varphi,\psi\) 为闭上链；其拉回分别代表 \(f^*\alpha,f^*\beta\)。 因而证明可放在代表层。
<h4>第3步：回忆拉回定义</h4>回忆：\(f^\#\varphi=\varphi\circ f_\#\)。 对 \(\sigma:\Delta^{p+q}\to X\)，有 \((f^\#(\varphi\smile\psi))(\sigma)=(\varphi\smile\psi)(f\circ\sigma)\)。 因而左边转为 \(Y\) 上的单形值。
<h4>第4步：展开 Cup 积</h4>回忆：Alexander–Whitney 公式按前 \(p\) 面、后 \(q\) 面求值。 所以左边等于 \(\varphi((f\sigma)|_{\mathrm{front}})\psi((f\sigma)|_{\mathrm{back}})\)。 因而出现两个可独立处理的因子。
<h4>第5步：交换限制与复合</h4>回忆：限制映射 \(\iota:\Delta^p\hookrightarrow\Delta^{p+q}\) 与函数复合满足 \((f\sigma)\iota=f(\sigma\iota)\)。 于是 \((f\sigma)|_{\mathrm{front}}=f(\sigma|_{\mathrm{front}})\)，后面同样成立。 因而拉回可分别进入两面。
<h4>第6步：计算第一个因子</h4>回忆：拉回上链定义给 \(\varphi(f(\sigma _{\mathrm{front}}))=(f^\#\varphi)(\sigma|_{\mathrm{front}})\)。|前半因子已经成为拉回后的上链值。 因而第一项匹配右边。
<h4>第7步：计算第二个因子</h4>回忆：相同定义给 \(\psi(f(\sigma _{\mathrm{back}}))=(f^\#\psi)(\sigma|_{\mathrm{back}})\)。|后半因子也匹配右边。 因而两因子均已拉回。
<h4>第8步：重新合成 Cup 积</h4>回忆：对 \(X\) 上的 \(\sigma\) 按前后面相乘。 两因子之积正是 \(((f^\#\varphi)\smile(f^\#\psi))(\sigma)\)。 因而左、右上链在每个单形上相等。
<h4>第9步：得到链级等式</h4>回忆：上链由所有单形上的值决定。 因此 <div class="eq">$$f^\#(\varphi\smile\psi)=(f^\#\varphi)\smile(f^\#\psi).$$</div> 因而自然性甚至在本模型的上链层成立。
<h4>第10步：核对闭性</h4>回忆：拉回与余边界交换，Cup 积对闭上链仍闭。 两边都是闭上链，故都定义 \(H^{p+q}(X;R)\) 的元素。 因而可以取同调类。
<h4>第11步：核对代表无关</h4>回忆：若 \(\varphi\) 改为 \(\varphi+\delta\eta\)，拉回改变为 \(\delta f^\#\eta\)。 Cup 积的 Leibniz 公式说明相应乘积之差也是恰当上链。 因而等式不依赖所选代表。
<h4>第12步：下放等式</h4>回忆：取第九步等式的上同调类。 得到 <div class="eq">$$f^*(\alpha\smile\beta)=f^*(\alpha)\smile f^*(\beta).$$</div> 因而乘法自然性证明完成。
<h4>第13步：核对加法</h4>回忆：上链拉回是 \(\operatorname{Hom}\) 的线性前复合。 故 \(f^*(\alpha+\beta)=f^*\alpha+f^*\beta\) 在同一次数内成立。 因而\(f^*\) 同时保加法。
<h4>第14步：核对分次</h4>回忆：\(f_\#\) 保持链次数 \(n\)。 故 \(f^*:H^n(Y;R)\to H^n(X;R)\) 不改变次数。 因而它是分次映射。
<h4>第15步：核对单位</h4>回忆：上同调环的单位是常值 \(1\in H^0(Y;R)\)。 拉回常值函数仍为常值 \(1\)，所以 \(f^*(1)=1\)（非空空间的通常约定）。 因而得到含单位的环同态。
<h4>第16步：给出对角法复核</h4>回忆：Cup 积可写 \(\Delta_Y^*(\alpha\times\beta)\)。 交换图 \((f\times f)\Delta_X=\Delta_Yf\)；外积的自然性再给相同的乘法等式。 因而链级计算与几何图像一致。
<h4>第17步：说明复合映射</h4>回忆：若 \(X\xrightarrow fY\xrightarrow gZ\)，反变性给 \((gf)^*=f^*g^*\)。 两个环同态的复合仍保乘法和单位。 因而上同调环是反变函子。
<h4>第18步：观察恒等映射</h4>回忆：\((\mathrm{id}_X)^\#\varphi=\varphi\)。 因此 \((\mathrm{id}_X)^*=\mathrm{id}_{H^*(X;R)}\)，且它保持所有积。 因而函子公理完整。
<h4>第19步：说明同伦不变性</h4>回忆：同伦映射诱导链同伦的链映射。 取对偶后诱导相同的上同调映射，所以同伦等价给上同调环同构。 因而环可用于区分同伦类型。
<h4>第20步：举一项数值检查</h4>回忆：在 \(T^2\) 上令 \(f:S^1\to T^2\) 为第一因子包含，\(a,b\in H^1(T^2)\)。 有 \(f^*a=u,f^*b=0\)，于是 \(f^*(a\smile b)=u\smile0=0\)，也符合 \(H^2(S^1)=0\)。 因而自然性可具体检验。
<div class="keybox">$$\boxed{f^*(\alpha\smile\beta)=f^*\alpha\smile f^*\beta}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>把单形先映到目标再取前后两个面，与先把每个面映过去再相乘，是同一件事。</div>`
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
