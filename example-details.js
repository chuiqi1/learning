// ============================================================
// 例子“根据定义逐步计算”完整推导
// 结构：{ "节点id": { "例子序号(从0起)": "①②③… 完整代入计算" } }
// 每步用【思路】（为什么做这步/用到哪个定义定理）与【计算】（具体代入与化简）标注。
// 数学用 ^ / _ 记法，构建时自动转成上下标。
// ============================================================

const L = String.raw;

module.exports = {
  "r1": {
    0: L`<h4>我们要算什么</h4>
用一般参数下的曲率公式，验证半径为 \(R\) 的圆在每一点的曲率恒等于 \(1/R\)。圆是曲率处处相同的"等曲率"曲线，也是后面研究所有曲率的基准。

<h4>第一步：回忆一般参数的曲率公式</h4>
回忆：对平面曲线 \((x(t),y(t))\)，曲率公式是
<div class="eq">$$\kappa(t)=\frac{|x'(t)y''(t)-y'(t)x''(t)|}{\big(x'(t)^2+y'(t)^2\big)^{3/2}}$$</div>
分子是"十字相减"的绝对值，分母是切向量长度平方的二分之三次方。下面一步步代入。

<h4>第二步：写出圆的参数化</h4>
半径为 \(R\)、圆心在原点的圆，取参数
<div class="eq">$$\gamma(t)=(x(t),y(t))=(R\cos t,\ R\sin t)$$</div>
\(t\) 从 \(0\) 到 \(2\pi\) 走一整圈。

<h4>第三步：求一阶导 \(\gamma'(t)\)</h4>
回忆 \((\cos t)'=-\sin t\)、\((\sin t)'=\cos t\)，逐分量求导：
<div class="eq">$$x'(t)=-R\sin t,\qquad y'(t)=R\cos t$$</div>
所以 \(\gamma'(t)=(-R\sin t,\ R\cos t)\)。

<h4>第四步：求二阶导 \(\gamma''(t)\)</h4>
再求一次导（\((-R\sin t)'=-R\cos t\)，\((R\cos t)'=-R\sin t\)）：
<div class="eq">$$x''(t)=-R\cos t,\qquad y''(t)=-R\sin t$$</div>
所以 \(\gamma''(t)=(-R\cos t,\ -R\sin t)\)。

<h4>第五步：算分子——十字相减</h4>
把 \(x',y',x'',y''\) 代入分子 \(x'y''-y'x''\)：
<div class="eq">$$x'y''-y'x''=(-R\sin t)(-R\sin t)-(R\cos t)(-R\cos t)=R^2\sin^2 t+R^2\cos^2 t$$</div>
提取公因子 \(R^2\)，再用恒等式 \(\sin^2 t+\cos^2 t=1\)：
<div class="eq">$$=R^2(\sin^2 t+\cos^2 t)=R^2$$</div>
取绝对值，因 \(R>0\)，所以分子 \(|x'y''-y'x''|=R^2\)。

<h4>第六步：算分母</h4>
分母是 \((x'^2+y'^2)^{3/2}\)，先算括号里：
<div class="eq">$$x'^2+y'^2=(-R\sin t)^2+(R\cos t)^2=R^2\sin^2 t+R^2\cos^2 t=R^2(\sin^2 t+\cos^2 t)=R^2$$</div>
所以分母 \(=(R^2)^{3/2}=R^3\)（这里用了幂的运算法则 \((R^2)^{3/2}=R^{2\cdot 3/2}=R^3\)）。

<h4>第七步：代入公式得到曲率</h4>
把第五、六步的结果代入第一步的公式：
<div class="eq">$$\kappa(t)=\frac{R^2}{R^3}=\frac{1}{R}$$</div>
结果与 \(t\) 无关，说明圆上每一点的曲率都一样。

<div class="keybox">$$\boxed{\kappa=\frac{1}{R}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>圆的曲率处处等于 \(1/R\)，与半径成反比——半径越小、圆弯得越急；半径越大、越接近直线。</div>`,
    1: L`<h4>我们要算什么</h4>
计算抛物线 \(y=x^2\) 的曲率函数 \(\kappa(x)\)，验证它在顶点 \(x=0\) 处取到最大值 \(\kappa=2\)，而远离顶点（\(|x|\to\infty\)）时曲率趋于 \(0\)——这正是"越远越平"的直观。

<h4>第一步：回忆一般参数的曲率公式</h4>
回忆平面曲线 \((x(t),y(t))\) 的曲率公式：
<div class="eq">$$\kappa(t)=\frac{|x'(t)y''(t)-y'(t)x''(t)|}{\big(x'(t)^2+y'(t)^2\big)^{3/2}}$$</div>
对抛物线，直接用 \(x\) 本身当参数最方便。

<h4>第二步：写出抛物线的参数化</h4>
取 \(x\) 为参数，抛物线上每点写成
<div class="eq">$$\gamma(x)=(x,\ x^2)$$</div>
也就是 \(x(t)=t\)、\(y(t)=t^2\)，为了直观下面把参数仍记作 \(x\)。

<h4>第三步：求一阶导</h4>
逐分量求导：
<div class="eq">$$x'(x)=1,\qquad y'(x)=2x$$</div>
所以 \(\gamma'(x)=(1,\ 2x)\)。

<h4>第四步：求二阶导</h4>
再求一次导（常数 \(1\) 的导数是 \(0\)，\(2x\) 的导数是 \(2\)）：
<div class="eq">$$x''(x)=0,\qquad y''(x)=2$$</div>
所以 \(\gamma''(x)=(0,\ 2)\)。

<h4>第五步：算分子——十字相减</h4>
代入 \(x'y''-y'x''\)：
<div class="eq">$$x'y''-y'x''=1\cdot 2-(2x)\cdot 0=2-0=2$$</div>
分子取绝对值仍为 \(2\)。

<h4>第六步：算分母</h4>
分母是 \((x'^2+y'^2)^{3/2}\)，先算括号里：
<div class="eq">$$x'^2+y'^2=1^2+(2x)^2=1+4x^2$$</div>
所以分母 \(=(1+4x^2)^{3/2}\)。

<h4>第七步：代入公式得到曲率函数</h4>
把第五、六步代入：
<div class="eq">$$\kappa(x)=\frac{2}{(1+4x^2)^{3/2}}$$</div>

<h4>第八步：在顶点 \(x=0\) 处取值</h4>
顶点就是 \(x=0\)。代入上式：
<div class="eq">$$\kappa(0)=\frac{2}{(1+4\cdot 0)^{3/2}}=\frac{2}{1^{3/2}}=2$$</div>

<h4>第九步：说明为什么顶点处最大</h4>
观察 \(\kappa(x)=\dfrac{2}{(1+4x^2)^{3/2}}\)：分子是常数 \(2\)，分母 \((1+4x^2)^{3/2}\) 在 \(x=0\) 时取最小值 \(1\)（因为 \(4x^2\ge 0\)，平方项最小是 \(0\)），分母越小分数越大，所以在顶点处分母最小、曲率最大。

<h4>第十步：看远离顶点时的趋势</h4>
当 \(|x|\to\infty\) 时，\(4x^2\to\infty\)，分母 \((1+4x^2)^{3/2}\to\infty\)，分子仍是常数 \(2\)，所以
<div class="eq">$$\lim_{|x|\to\infty}\kappa(x)=0$$</div>
曲率趋于零，说明远离顶点抛物线越来越"平"。

<div class="keybox">$$\boxed{\kappa(x)=\frac{2}{(1+4x^2)^{3/2}},\qquad \kappa(0)=2,\qquad \lim_{|x|\to\infty}\kappa(x)=0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>抛物线顶点处弯得最厉害（\(\kappa=2\)），越往两边越平（\(\kappa\to 0\)）。</div>`,
    2: L`<h4>我们要理解什么</h4>
回旋曲线（Clothoid）是一条"曲率随弧长线性增长"的曲线。它常被用在公路、铁路的过渡段设计里，让车辆从直线平滑地进入弯道。下面从曲率函数出发，一步步还原这条曲线的形状。

<h4>第一步：回忆平面曲线基本定理</h4>
回忆上一节的定理：平面曲线的曲率 \(\kappa(s)\) 与切向量方向角 \(\theta(s)\) 满足
<div class="eq">$$\frac{d\theta}{ds}=\kappa(s)$$</div>
给定了 \(\kappa(s)\)，先积分出 \(\theta\)，再积分出曲线本身。这是下面所有步骤的工具。

<h4>第二步：写出"曲率随弧长线性增长"</h4>
"线性增长"的意思是曲率正比于弧长。设比例常数为 \(1/a^2\)（写成平方的形式是为了后面积分整齐），即
<div class="eq">$$\kappa(s)=\frac{s}{a^2}$$</div>
在起点 \(s=0\) 处曲率为 \(0\)（对应直线），随 \(s\) 增大曲率均匀变大。

<h4>第三步：积分得到方向角 \(\theta(s)\)</h4>
把 \(\kappa(s)=s/a^2\) 代入第一步的方程 \(\theta'=s/a^2\)，积分（回忆 \(\int s\,ds=s^2/2\)）：
<div class="eq">$$\theta(s)=\theta(0)+\int_0^s \frac{u}{a^2}\,du=\theta(0)+\frac{1}{a^2}\cdot\frac{s^2}{2}=\theta(0)+\frac{s^2}{2a^2}$$</div>
方向角随弧长的平方增长。

<h4>第四步：把起点摆正，简化记号</h4>
为了方便看清形状，取初始方向角 \(\theta(0)=0\)（这只是把整条曲线旋转一下，不改变形状）：
<div class="eq">$$\theta(s)=\frac{s^2}{2a^2}$$</div>

<h4>第五步：写出切向量</h4>
回忆切向量 \(T(s)=(\cos\theta(s),\sin\theta(s))\)，代入第四步：
<div class="eq">$$T(s)=\Big(\cos\frac{s^2}{2a^2},\ \sin\frac{s^2}{2a^2}\Big)$$</div>

<h4>第六步：积分还原曲线</h4>
回忆 \(\gamma'(s)=T(s)\)，从起点 \(\gamma(0)\) 积分：
<div class="eq">$$\gamma(s)=\gamma(0)+\int_0^s \Big(\cos\frac{u^2}{2a^2},\ \sin\frac{u^2}{2a^2}\Big)\,du$$</div>
取 \(\gamma(0)=0\)（只是平移），就得到回旋曲线的参数方程。

<h4>第七步：认识 Fresnel 积分</h4>
第六步里的积分 \(\int\cos(u^2)\,du\)、\(\int\sin(u^2)\,du\) 就是著名的 <strong>Fresnel 积分</strong>。它没有初等函数表达式，但可以数值计算。用换元 \(v=u/(\sqrt{2}a)\) 可以化成标准形式 \(C(t)=\int_0^t\cos(\pi v^2/2)dv\) 与 \(S(t)=\int_0^t\sin(\pi v^2/2)dv\)。所以回旋曲线本质上是 Fresnel 积分给出的曲线。

<h4>第八步：看它的图像——螺旋盘旋</h4>
Fresnel 积分的图像是著名的"回旋"：从原点出发，方向角 \(\theta=s^2/(2a^2)\) 随 \(s\) 不断增大，切向越转越快，曲线呈螺旋状向一个极限点盘旋（那一点正是 Fresnel 积分的极限值）。曲率沿弧长均匀增大，正是它得名"回旋曲线"的原因。

<h4>第九步：为什么用它设计公路铁路过渡段</h4>
直观：汽车转弯时，方向盘的转角与曲率成正比。如果从直线（\(\kappa=0\)）突然跳到一段圆弧（\(\kappa\) 为常数），司机必须在瞬间把方向盘打到固定角度，乘客会感到横向冲击；而回旋曲线让曲率从 \(0\) 开始<strong>连续、匀速</strong>增大，司机匀速打方向，转弯就平滑了。所以直线与圆弧之间用一段回旋曲线过渡。

<div class="keybox">$$\boxed{\kappa(s)=\frac{s}{a^2}\ \Longrightarrow\ \theta(s)=\frac{s^2}{2a^2}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>回旋曲线 = 曲率随弧长线性变化，让转弯"无突变"；它的形状由 Fresnel 积分给出。</div>`
  },
  "r2": {
    0: L`<h4>我们要算什么</h4>
计算圆柱螺旋线 \(r(t)=(\cos t,\ \sin t,\ a t)\) 的曲率与挠率，验证它们都是常数：\(\kappa=1/(1+a^2)\)、\(\tau=a/(1+a^2)\)。它是最简单、最"均匀"的空间曲线。

<h4>第一步：回忆空间曲线的曲率、挠率公式</h4>
回忆：对一般参数的空间曲线 \(r(t)\)，
<div class="eq">$$\kappa=\frac{|r'\times r''|}{|r'|^3},\qquad \tau=\frac{(r'\times r'')\cdot r'''}{|r'\times r''|^2}$$</div>
曲率用叉积的长度，挠率用三阶导的混合积。下面逐步计算。

<h4>第二步：求一阶导 \(r'(t)\)</h4>
对 \(r(t)=(\cos t,\sin t,at)\) 逐分量求导（\((\cos t)'=-\sin t\)，\((\sin t)'=\cos t\)，\((at)'=a\)）：
<div class="eq">$$r'(t)=(-\sin t,\ \cos t,\ a)$$</div>

<h4>第三步：求二阶导 \(r''(t)\)</h4>
再求一次导：
<div class="eq">$$r''(t)=(-\cos t,\ -\sin t,\ 0)$$</div>

<h4>第四步：求三阶导 \(r'''(t)\)</h4>
再求一次导：
<div class="eq">$$r'''(t)=(\sin t,\ -\cos t,\ 0)$$</div>

<h4>第五步：算切向量的模 \(|r'|\)</h4>
回忆向量模长公式 \(|(x,y,z)|=\sqrt{x^2+y^2+z^2}\)：
<div class="eq">$$|r'(t)|=\sqrt{(-\sin t)^2+(\cos t)^2+a^2}=\sqrt{\sin^2 t+\cos^2 t+a^2}=\sqrt{1+a^2}$$</div>
这里用了 \(\sin^2 t+\cos^2 t=1\)。结果是常数。

<h4>第六步：算叉积 \(r'\times r''\)</h4>
回忆叉积公式：\((x_1,y_1,z_1)\times(x_2,y_2,z_2)=(y_1z_2-z_1y_2,\ z_1x_2-x_1z_2,\ x_1y_2-y_1x_2)\)。代入 \(r'=(-\sin t,\cos t,a)\)、\(r''=(-\cos t,-\sin t,0)\)：
<div class="eq">$$r'\times r''=\big(\cos t\cdot 0-a\cdot(-\sin t),\ a\cdot(-\cos t)-(-\sin t)\cdot 0,\ (-\sin t)(-\sin t)-(\cos t)(-\cos t)\big)$$</div>
逐项化简：第一分量 \(a\sin t\)；第二分量 \(-a\cos t\)；第三分量 \(\sin^2 t+\cos^2 t=1\)。所以
<div class="eq">$$r'\times r''=(a\sin t,\ -a\cos t,\ 1)$$</div>

<h4>第七步：算叉积的模 \(|r'\times r''|\)</h4>
<div class="eq">$$|r'\times r''|=\sqrt{(a\sin t)^2+(-a\cos t)^2+1^2}=\sqrt{a^2(\sin^2 t+\cos^2 t)+1}=\sqrt{a^2+1}$$</div>

<h4>第八步：代入曲率公式</h4>
把第五步 \(|r'|=\sqrt{1+a^2}\) 与第七步 \(|r'\times r''|=\sqrt{1+a^2}\) 代入 \(\kappa=|r'\times r''|/|r'|^3\)：
<div class="eq">$$\kappa=\frac{\sqrt{1+a^2}}{(1+a^2)^{3/2}}=\frac{1}{1+a^2}$$</div>
（因为 \((1+a^2)^{3/2}=(1+a^2)\sqrt{1+a^2}\)，约去 \(\sqrt{1+a^2}\)。）曲率是常数。

<h4>第九步：算混合积 \((r'\times r'')\cdot r'''\)</h4>
用第六步的叉积与第四步的 \(r'''\) 做点积：
<div class="eq">$$(r'\times r'')\cdot r'''=(a\sin t,\ -a\cos t,\ 1)\cdot(\sin t,\ -\cos t,\ 0)=a\sin^2 t+a\cos^2 t+0$$</div>
提取公因子 \(a\)：\(a(\sin^2 t+\cos^2 t)=a\)。所以混合积 \(=a\)。

<h4>第十步：代入挠率公式</h4>
把第七步 \(|r'\times r''|^2=1+a^2\) 与第九步混合积 \(a\) 代入 \(\tau=\dfrac{(r'\times r'')\cdot r'''}{|r'\times r''|^2}\)：
<div class="eq">$$\tau=\frac{a}{1+a^2}$$</div>
挠率也是常数。

<div class="keybox">$$\boxed{\kappa=\frac{1}{1+a^2},\qquad \tau=\frac{a}{1+a^2}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>圆柱螺旋线的曲率、挠率都是常数，是三维空间里"最均匀"的曲线；\(a\) 越大螺距越大、越接近直线。</div>`,
    1: L`<h4>我们要理解什么</h4>
理解挠率在真实世界——DNA 双螺旋——里的物理意义：DNA 的曲率与挠率共同决定了它的超螺旋构型，而挠率的变化与拓扑异构酶的活性直接相关。

<h4>第一步：回忆曲率与挠率各管什么</h4>
回忆：曲率 \(\kappa\) 衡量曲线"弯得急不急"（在一个平面内的弯曲），挠率 \(\tau\) 衡量曲线"离开平面扭转得快不快"。一条完全躺在平面内的曲线，挠率恒为 \(0\)；一旦曲线开始三维地盘旋、扭转，挠率就非零了。

<h4>第二步：DNA 双螺旋的几何图像</h4>
DNA 是两条互相缠绕的螺旋链。把每条链看成一条空间曲线，它的局部弯曲由曲率 \(\kappa\) 描述，而两条链互相缠绕、以及单条链自身扭转的程度，则由挠率 \(\tau\) 描述。螺旋的"松紧"正对应这两个几何量。

<h4>第三步：超螺旋是更高一层的缠绕</h4>
双螺旋本身已经是两条曲线缠绕；当这条双螺旋<strong>再</strong>绕自身盘一圈，就形成"超螺旋"。从几何看，超螺旋意味着挠率（以及曲率）沿整条链的积累，在全局上贡献了额外的"链接数"。

<h4>第四步：回忆链接数的分解公式</h4>
在 DNA 拓扑学里有一条核心公式（Călugăreanu–White–Fuller 定理）：链接数 \(Lk\) 等于扭转数 \(Tw\) 加缠绕数 \(Wr\)：
<div class="eq">$$Lk=Tw+Wr$$</div>
其中 \(Tw\)（扭转数）与两条链互相绕的次数相关，\(Wr\)（缠绕数）与整条链中轴线在空间里自我缠绕的程度相关。

<h4>第五步：把挠率与扭转数联系起来</h4>
挠率 \(\tau\) 正是"局部的扭转"；把它沿整条 DNA 中轴线积分，就给出扭转角的总变化量，与扭转数 \(Tw\) 密切相关。所以 \(Tw\)、\(Wr\) 的分配，本质上就是曲率、挠率在整条链上的分布方式。

<h4>第六步：拓扑异构酶的作用</h4>
细胞里有一类酶叫<strong>拓扑异构酶</strong>：它们把 DNA 链切断、再重新连接，从而改变链接数 \(Lk\)。因为 \(Lk=Tw+Wr\) 被约束，改变 \(Lk\) 就迫使 \(Tw\) 与 \(Wr\) 重新分配——也就是改变局部的曲率、挠率分布。

<h4>第七步：与基因表达挂钩</h4>
DNA 要转录、复制，必须先局部解旋（把螺旋松开）。这个过程需要改变挠率、改变超螺旋程度，而这一步正是由拓扑异构酶完成的。所以挠率的变化直接关系到基因能否被读取——这就是几何量进入生物学的通道。

<div class="keybox">$$\boxed{\text{DNA 的 } \kappa,\tau\ \text{编码其三维拓扑结构；}\ Lk=Tw+Wr}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>挠率衡量"离开平面的扭转"，是 DNA 超螺旋的几何语言；拓扑异构酶通过改变链接数、重新分配扭转与缠绕，来调控基因表达。</div>`
  },
  "r3": {
    0: L`<h4>我们要算什么</h4>
验证半径为 \(R\) 的球面上每一点的主曲率都是 \(1/R\)，从而 Gauss 曲率恒为 \(K=1/R^2>0\)。球面是最对称的常正曲率曲面。

<h4>第一步：回忆主曲率与 Gauss 曲率的定义</h4>
回忆：曲面上一点沿一个切方向的法曲率，是曲面沿该方向的弯曲程度；<strong>主曲率</strong> \(\kappa_1,\kappa_2\) 是法曲率的最大值与最小值。而 Gauss 曲率定义为主曲率之积：
<div class="eq">$$K=\kappa_1\kappa_2$$</div>

<h4>第二步：回忆"脐点"的含义</h4>
如果曲面上一点沿<strong>所有</strong>切方向的法曲率都相等，这一点就叫脐点。脐点处两个主曲率相等，曲面沿任何方向弯得一样。

<h4>第三步：球面是处处脐点</h4>
球面具有高度对称性：过球心任意旋转都把球面搬到自身，任一点、任一方向都没有区别。因此球面上每一点沿任意切方向的法曲率都相同——球面处处是脐点。

<h4>第四步：算这个共同的法曲率值</h4>
过球面一点、沿任意切方向，都有一条大圆（球面与过球心的平面的交线）与之相切。大圆是半径为 \(R\) 的圆，其曲率是 \(1/R\)，而它在该点的法方向恰好指向球心，所以该方向的法曲率就是 \(1/R\)。由于每个方向都一样，两个主曲率都为
<div class="eq">$$\kappa_1=\kappa_2=\frac{1}{R}$$</div>

<h4>第五步：等价地，用第二基本形式说明</h4>
也可以用公式看：取外向单位法向量，球面的第二基本形式恰好是第一基本形式的 \(1/R\) 倍，即 \(II=\frac1R\,I\)。回忆形状算子 \(S\) 满足 \(II(v,v)=\langle Sv,v\rangle\)，这里 \(S\) 就是恒等算子的 \(1/R\) 倍，它的两个特征值（主曲率）都是 \(1/R\)。两种看法得到同一个结论。

<h4>第六步：算出 Gauss 曲率</h4>
把两个主曲率相乘：
<div class="eq">$$K=\kappa_1\kappa_2=\frac{1}{R}\cdot\frac{1}{R}=\frac{1}{R^2}$$</div>

<h4>第七步：观察——常正曲率</h4>
结果与球面上的位置无关，恒等于 \(1/R^2>0\)。所以球面是"常正曲率"曲面的标准模型：每一点弯曲程度完全相同，且处处为正。

<div class="keybox">$$\boxed{K=\kappa_1\kappa_2=\frac{1}{R^2}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>球面是处处脐点，主曲率都是 \(1/R\)，所以 \(K=1/R^2>0\) 恒定，是最对称的常正曲率曲面。</div>`,
    1: L`<h4>问题与范围</h4>
伪球面是曳物线绕其渐近轴旋转得到的一片曲面。我们要<strong>实际算出</strong>它的第一基本形式和 Gauss 曲率，并说明它与双曲平面的关系究竟是局部的还是全局的。令曳物线的尺度 \(a>0\)。

<h4>第一步：写出一片可计算的参数曲面</h4>
取 \(0<u<\pi/2,\ 0\le v<2\pi\)，定义
<div class="eq">$$X(u,v)=\left(a\sin u\cos v,\ a\sin u\sin v,\ a\cos u+a\log\tan\frac u2\right).$$</div>
\(v\) 绕轴转一圈；距旋转轴的半径是 \(a\sin u\)。暂不包括 \(u=0\) 的无限细端和 \(u=\pi/2\) 的边缘。

<h4>第二步：先算 \(z\) 分量的导数</h4>
用 \(\frac d{du}\log\tan(u/2)=1/\sin u\)，得到
<div class="eq">$$\frac d{du}\left(a\cos u+a\log\tan\frac u2\right)
=-a\sin u+\frac a{\sin u}
=a\frac{1-\sin^2u}{\sin u}
=a\frac{\cos^2u}{\sin u}.$$</div>
中间用了 \(1-\sin^2u=\cos^2u\)。

<h4>第三步：求经线方向切向量</h4>
对 \(X\) 逐分量求 \(u\) 导数，结合第二步：
<div class="eq">$$X_u=\left(a\cos u\cos v,\ a\cos u\sin v,\ a\frac{\cos^2u}{\sin u}\right).$$</div>
这是沿母线走的方向。

<h4>第四步：求纬线方向切向量</h4>
对 \(v\) 求导时 \(u\) 固定，第三个坐标不变，所以
<div class="eq">$$X_v=(-a\sin u\sin v,\ a\sin u\cos v,\ 0).$$</div>
这是绕轴走圆周的方向。

<h4>第五步：计算第一基本形式的 \(E\)</h4>
按定义 \(E=g_{uu}=X_u\cdot X_u\)。把第三步平方逐项相加：
<div class="eq">$$E=a^2\cos^2u(\cos^2v+\sin^2v)+a^2\frac{\cos^4u}{\sin^2u}
=a^2\cos^2u\frac{\sin^2u+\cos^2u}{\sin^2u}
=a^2\cot^2u.$$</div>

<h4>第六步：计算交叉项与 \(G\)</h4>
\(F=X_u\cdot X_v=-a^2\cos u\sin u\cos v\sin v+a^2\cos u\sin u\sin v\cos v=0\)。再算
<div class="eq">$$G=X_v\cdot X_v=a^2\sin^2u(\sin^2v+\cos^2v)=a^2\sin^2u.$$</div>
所以两个参数方向正交。

<h4>第七步：把度量完整写出</h4>
由第五、六步，
<div class="eq">$$g=E\,du^2+2F\,du\,dv+G\,dv^2
=a^2\cot^2u\,du^2+a^2\sin^2u\,dv^2.$$</div>
接下来只用这份<strong>内蕴</strong>度量算曲率，不必再算单位法向或第二基本形式。

<h4>第八步：改用经线弧长 \(s\)</h4>
沿 \(v=\text{常数}\) 走，弧长满足 \(ds=\sqrt E\,du=a\cot u\,du\)，因为 \(0<u<\pi/2\) 时 \(\cot u>0\)。令纬线半径 \(f(s)=a\sin u(s)\)，度量便成为
<div class="eq">$$g=ds^2+f(s)^2dv^2.$$</div>
这是一种旋转对称的“经线弧长 + 纬线半径”写法。

<h4>第九步：对 \(f\) 求第一次弧长导数</h4>
链式法则给 \(df/ds=(df/du)/(ds/du)\)。分子 \(df/du=a\cos u\)，分母 \(ds/du=a\cot u=a\cos u/\sin u\)，约去 \(a\cos u>0\)，得到
<div class="eq">$$f'(s)=\sin u.$$</div>

<h4>第十步：对 \(f\) 再求一次弧长导数</h4>
再用同一链式法则：
<div class="eq">$$f''(s)=\frac{d(\sin u)/du}{ds/du}
=\frac{\cos u}{a\cot u}
=\frac{\sin u}{a}.$$</div>
这里没有把 \(u\) 误当成弧长，分母 \(ds/du\) 必须保留。

<h4>第十一步：回忆此类度量的曲率公式</h4>
对 \(g=ds^2+f(s)^2dv^2\)，先从度量求得 \(\Gamma^s_{vv}=-ff'\) 与 \(\Gamma^v_{sv}=\Gamma^v_{vs}=f'/f\)。代入曲率定义，\(\langle R(\partial_s,\partial_v)\partial_v,\partial_s\rangle=-ff''\)；除以 \(g_{ss}g_{vv}-g_{sv}^2=f^2\)，得到
<div class="eq">$$K=-\frac{f''(s)}{f(s)}.$$</div>
这与工作台“旋转球面挑战题”里逐项求 Christoffel 的算法一致。

<h4>第十二步：代入 \(f\) 与 \(f''\) 算出曲率</h4>
第八步 \(f=a\sin u\)，第十步 \(f''=\sin u/a\)，所以
<div class="eq">$$K=-\frac{\sin u/a}{a\sin u}=-\frac1{a^2}.$$</div>
当 \(a=1\) 时 \(K=-1\)。乘积化简时 \(\sin u>0\)，除法合法。

<h4>第十三步：检查是否能代表整个双曲平面</h4>
从任意 \(u_0>0\) 沿经线到边缘 \(u=\pi/2\) 的长度是
<div class="eq">$$\int_{u_0}^{\pi/2}a\cot u\,du
=a[\log\sin u]_{u_0}^{\pi/2}
=-a\log\sin u_0<\infty.$$</div>
因此这片伪球面在有限路程处就碰到边缘，作为无边界曲面它<strong>不完备</strong>；完整双曲平面则是完备的，所以二者不可能全局等距。

<h4>第十四步：说明正确的几何关系</h4>
两者同为常曲率 \(-1/a^2\) 的二维空间；在足够小的邻域中可取局部等距坐标，因此伪球面给出<strong>局部</strong>双曲几何的具体嵌入模型。我们刚才的度量计算证明了曲率相同，第十三步解释了为什么“整个内蕴几何完全一致”的说法过强。

<div class="keybox">$$\boxed{g=a^2\cot^2u\,du^2+a^2\sin^2u\,dv^2,\qquad K=-1/a^2;\quad\text{与双曲平面局部等距，但并非全局等距。}}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>先算 \(E,F,G\)，把经线改成弧长 \(s\)，再用 \(K=-f''/f\)；曲率恒负只说明局部双曲性，边缘有限远说明模型不完备。</div>`,
    2: L`<h4>我们要算什么</h4>
考察环面（甜甜圈面）上 Gauss 曲率如何随位置变号：外侧区域 \(K>0\)（椭圆点），内侧区域 \(K<0\)（双曲点），顶部和底部两条圆周上 \(K=0\)。下面用参数化具体算出来。

<h4>第一步：写出环面的参数化</h4>
设大圆半径（环心到管心的距离）为 \(R\)，小圆半径（管的粗细）为 \(r\)，且 \(R>r>0\)。环面的参数化是
<div class="eq">$$x(u,v)=\big((R+r\cos u)\cos v,\ (R+r\cos u)\sin v,\ r\sin u\big)$$</div>
其中 \(v\) 是绕主轴的角，\(u\) 是绕小管截面的角。

<h4>第二步：识别环面上的三个区域</h4>
按 \(u\) 的位置把环面分成三带：\(u=0\) 对应离中心轴最远的那一圈（最外侧），\(u=\pi\) 对应离中心轴最近的那一圈（最内侧），而 \(u=\pm\pi/2\) 对应顶部与底部。其余部分介于其间。

<h4>第三步：回忆旋转曲面主曲率的求法</h4>
回忆：对旋转曲面，一个主曲率方向是经线（固定 \(v\)、动 \(u\)），另一个是纬线（固定 \(u\)、动 \(v\)）。经线是半径为 \(r\) 的小圆，其主曲率大小为 \(1/r\)；纬线是半径为 \(R+r\cos u\) 的圆，其法曲率要乘上法向的投影因子 \(\cos u\)。

<h4>第四步：写出两个主曲率</h4>
按标准取向外法向，直接写出两个主曲率：
<div class="eq">$$\kappa_1=\frac{1}{r},\qquad \kappa_2=\frac{\cos u}{R+r\cos u}$$</div>
第一个是经线方向（恒正，因为小圆始终朝外弯），第二个是纬线方向（其符号完全由 \(\cos u\) 决定）。

<h4>第五步：算出 Gauss 曲率</h4>
两个主曲率相乘：
<div class="eq">$$K=\kappa_1\kappa_2=\frac{1}{r}\cdot\frac{\cos u}{R+r\cos u}=\frac{\cos u}{r(R+r\cos u)}$$</div>
分母 \(r(R+r\cos u)\) 恒正（因为 \(R>r\)，\(R+r\cos u\ge R-r>0\)），所以 \(K\) 的符号完全由分子 \(\cos u\) 决定。

<h4>第六步：外侧区域 \(K>0\)</h4>
外侧对应 \(-\pi/2<u<\pi/2\)，此时 \(\cos u>0\)，所以 \(K>0\)。这两个主曲率同号，曲面像球一样朝同一侧弯，这样的点叫<strong>椭圆点</strong>。

<h4>第七步：内侧区域 \(K<0\)</h4>
内侧对应 \(\pi/2<u<3\pi/2\)，此时 \(\cos u<0\)，所以 \(K<0\)。两个主曲率异号（一个朝外弯、一个朝内弯），曲面像马鞍，这样的点叫<strong>双曲点</strong>。

<h4>第八步：顶部与底部 \(K=0\)</h4>
顶部与底部对应 \(u=\pm\pi/2\)，此时 \(\cos u=0\)，所以
<div class="eq">$$K=\frac{0}{r(R+r\cos u)}=0$$</div>
这里纬线方向的主曲率 \(\kappa_2=0\)，曲面沿该方向"不弯"，是抛物点。

<h4>第九步：总曲率的抵消</h4>
外侧的正曲率与内侧的负曲率各占一部分，它们的贡献在整体上恰好一正一负、完全抵消，使环面的总曲率积分为零。这正好与 Gauss–Bonnet 定理呼应：环面的 Euler 示性数 \(\chi=0\)，所以 \(\int K\,dA=2\pi\chi=0\)。

<div class="keybox">$$\boxed{\text{环面：外侧 } K>0,\ \text{内侧 } K<0,\ \text{顶部底部 } K=0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>环面同时有正、负、零曲率区域，是展示曲率随位置变化的天然"标本"；\(K\) 的符号由 \(\cos u\) 决定。</div>`
  },
  "r4": {
    0: L`<h4>我们要理解什么</h4>
理解为什么平面与圆柱面在"内蕴"意义下完全相同：把平面卷成圆柱不改变任何内蕴几何量，所以两者 Gauss 曲率都是零，平面上的三角形内角和 \(180^\circ\)，圆柱面上也是如此。

<h4>第一步：回忆"内蕴几何"的含义</h4>
内蕴几何只关心曲面<strong>自己</strong>上面的测量：两点间沿曲面的最短距离、曲面上三角形的内角、曲面上曲线的长度。它不关心曲面如何摆在三维空间里。

<h4>第二步：把平面卷成圆柱是"不拉伸"的操作</h4>
想象一张纸：把它卷成圆柱，纸面上任意两点之间的<strong>沿曲面距离</strong>（用尺子贴着纸量）完全不变——因为卷纸只做了弯曲，没有拉伸、没有压缩。所以"卷纸"这个操作保持了一切内蕴测量。

<h4>第三步：这就是一个等距映射</h4>
回忆：保持两点间距离（等价地保持度量）的映射叫<strong>等距映射</strong>。卷纸正好是一个从平面（局部地）到圆柱面的等距映射。因此平面与圆柱面<strong>局部等距</strong>。

<h4>第四步：回忆 Gauss 曲率是等距不变量</h4>
由 Gauss 绝妙定理，Gauss 曲率只由第一基本形式（内蕴度量）决定，等距映射保度量、因而保曲率。所以等距的两个曲面必有相同的 Gauss 曲率。

<h4>第五步：平面的 Gauss 曲率是零</h4>
平面完全不弯，两个主曲率都是 \(0\)，所以
<div class="eq">$$K_{\text{平面}}=0$$</div>

<h4>第六步：由等距推出圆柱面曲率也是零</h4>
因为平面与圆柱面等距，且等距保曲率，所以
<div class="eq">$$K_{\text{圆柱}}=K_{\text{平面}}=0$$</div>
圆柱面看起来"弯"，但那只是外蕴的弯曲；内蕴地看它和平面一样平。这也说明圆柱面是"可展曲面"。

<h4>第七步：三角形内角和为什么不变</h4>
回忆局部 Gauss–Bonnet：曲面上测地三角形的内角和满足"内角和 \(=\pi+\int_\Delta K\,dA\)"（曲率积分为零时内角和回到 \(\pi\)）。既然平面与圆柱面处处 \(K=0\)，两者上的（测地）三角形内角和都是 \(\pi\)，即
<div class="eq">$$\text{内角和}=180^\circ$$</div>

<div class="keybox">$$\boxed{\text{平面与圆柱面局部等距}\ \Longrightarrow\ K\equiv 0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>卷纸不改变内蕴几何，所以平面与圆柱面"内蕴不可区分"，曲率都是零、三角形内角和都是 \(180^\circ\)。</div>`,
    1: L`<h4>我们要理解什么</h4>
说明为什么任何平面地图都无法同时保持角度和面积：地图投影要把球面"展平"到平面，但球面（\(K>0\)）与平面（\(K=0\)）不等距，所以畸变不可避免。

<h4>第一步：地图投影是一个球面到平面的映射</h4>
把地球表面画到纸上，就是找一个从球面到平面的映射 \(F\)。画图时我们总希望它尽量"不走样"，最好能同时保持角度（形状）和面积（大小）。

<h4>第二步：回忆保角映射的作用</h4>
回忆：一个映射若<strong>保角</strong>，则它把球面的度量拉回后，等于原度量乘一个正函数 \(\lambda\)（各方向按相同比例缩放）。写成
<div class="eq">$$F^{*}g_{\text{平面}}=\lambda\,g_{\text{球面}}$$</div>
\(\lambda\) 可以随点变化。

<h4>第三步：再加"保面积"会怎样</h4>
在二维情形，保角映射把一小块面积放大约 \(\lambda^2\) 倍（两个方向都放大 \(\lambda\) 倍，面积放大 \(\lambda^2\)）。若还要求<strong>保面积</strong>，面积放大倍数必须是 \(1\)，即 \(\lambda^2=1\)，于是 \(\lambda=1\)。

<h4>第四步：两者都保 ⟹ 是等距</h4>
把 \(\lambda=1\) 代回第二步，得到
<div class="eq">$$F^{*}g_{\text{平面}}=g_{\text{球面}}$$</div>
这正是等距映射的定义。所以"同时保角又保面积"的地图投影，等价于一个球面到平面的<strong>等距映射</strong>。

<h4>第五步：回忆等距保 Gauss 曲率</h4>
由 Gauss 绝妙定理（等距不变性），若球面与平面等距，则两者的 Gauss 曲率必须处处相等。

<h4>第六步：但两者的曲率并不相等</h4>
半径为 \(R\) 的球面 \(K=1/R^2>0\)，而平面 \(K=0\)：
<div class="eq">$$K_{\text{球面}}=\frac{1}{R^2}>0,\qquad K_{\text{平面}}=0$$</div>
两者不相等。若存在等距映射，第五步要求它们相等，这与第六步矛盾。

<h4>第七步：结论——不存在这样的投影</h4>
这个矛盾说明：球面与平面<strong>不可能等距</strong>，因此不存在"同时保角又保面积"的地图投影。任何平面地图必然在某一方面失真。

<h4>第八步：两类折中的地图</h4>
所以实际地图只能二选一：<strong>保角投影</strong>（如 Mercator 投影）保形状但面积失真（高纬度地区被放得很大）；<strong>等积投影</strong>保面积但角度失真（形状被扭曲）。没有哪种地图能两全。

<div class="keybox">$$\boxed{K>0\ \text{与}\ K=0\ \text{不等距}\ \Longrightarrow\ \text{地图必有畸变}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>地图必然畸变，根源是球面与平面曲率不同、无法等距；保角与保面积不可兼得。</div>`
  },
  "r5": {
    0: L`<h4>我们要算什么</h4>
用半径为 \(R\) 的球面验证全局 Gauss–Bonnet 定理：总曲率 \(\int K\,dA=4\pi\)，恰好等于 \(2\pi\) 乘以球面的 Euler 示性数 \(\chi(S^2)=2\)。

<h4>第一步：回忆球面的 Gauss 曲率</h4>
前面已经算过：半径为 \(R\) 的球面处处有
<div class="eq">$$K=\frac{1}{R^2}$$</div>
曲率是常数，与位置无关。

<h4>第二步：回忆球面的面积</h4>
半径为 \(R\) 的球面面积公式是
<div class="eq">$$A=4\pi R^2$$</div>

<h4>第三步：把常数曲率提出积分号</h4>
回忆积分的性质：若被积函数是常数 \(c\)，则 \(\int c\,dA=c\int dA=c\cdot(\text{面积})\)。这里 \(K=1/R^2\) 是常数，所以
<div class="eq">$$\int_{S^2}K\,dA=\int_{S^2}\frac{1}{R^2}\,dA=\frac{1}{R^2}\int_{S^2}dA$$</div>

<h4>第四步：代入面积算出总曲率</h4>
\(\int_{S^2}dA\) 就是球面总面积 \(4\pi R^2\)，代入：
<div class="eq">$$\int_{S^2}K\,dA=\frac{1}{R^2}\cdot 4\pi R^2=4\pi$$</div>
总曲率等于 \(4\pi\)。

<h4>第五步：回忆球面的 Euler 示性数</h4>
球面 \(S^2\) 的 Euler 示性数是
<div class="eq">$$\chi(S^2)=2$$</div>
（例如用三角剖分：球面可剖成四面体的表面，顶点 \(V=4\)、边 \(E=6\)、面 \(F=4\)，所以 \(\chi=4-6+4=2\)。）

<h4>第六步：算 Gauss–Bonnet 右边</h4>
<div class="eq">$$2\pi\,\chi(S^2)=2\pi\cdot 2=4\pi$$</div>

<h4>第七步：对照两边</h4>
第四步算出的总曲率是 \(4\pi\)，第六步算出的 \(2\pi\chi\) 也是 \(4\pi\)，两边完全一致，Gauss–Bonnet 定理在球面上得到验证。

<div class="keybox">$$\boxed{\int_{S^2}K\,dA=4\pi=2\pi\,\chi(S^2)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>球面总曲率恒为 \(4\pi\)，与半径无关——半径越大曲率越小但面积越大，二者乘积永远不变，这是拓扑刚性。</div>`,
    1: L`<h4>我们要算什么</h4>
验证环面的总曲率为零：环面的 Euler 示性数 \(\chi=0\)，由 Gauss–Bonnet 定理，总曲率 \(\int K\,dA=0\)；这与前面"外侧正曲率、内侧负曲率恰好抵消"的判断一致。

<h4>第一步：回忆环面是怎么得到的</h4>
环面（甜甜圈面）可以这样得到：取一个圆柱面，把它的上下两个圆口对在一起粘合，让柱体弯成一个圈。也可以想成把平面上的一个正方形两对对边分别粘合。这两种看法都得到环面。

<h4>第二步：用正方形粘合算出 Euler 示性数</h4>
回忆 Euler 示性数 \(\chi=V-E+F\)。用正方形剖分环面：正方形的四个角粘成同一个点，所以顶点 \(V=1\)；四条边两两粘合，剩两条边，所以 \(E=2\)；一个面 \(F=1\)。于是
<div class="eq">$$\chi=V-E+F=1-2+1=0$$</div>
环面的 Euler 示性数是零。

<h4>第三步：回忆全局 Gauss–Bonnet 定理</h4>
对紧致定向闭曲面 \(M\)：
<div class="eq">$$\int_M K\,dA=2\pi\,\chi(M)$$</div>
它把总曲率积分与 Euler 示性数绑在一起。

<h4>第四步：代入 \(\chi=0\)</h4>
把环面的 \(\chi=0\) 代入第三步：
<div class="eq">$$\int_{\text{环面}}K\,dA=2\pi\cdot 0=0$$</div>
Gauss–Bonnet 直接断言：环面的总曲率必须为零。

<h4>第五步：回忆前面环面曲率的符号分布</h4>
前面算过环面 \(K=\cos u/(r(R+r\cos u))\)。它分三带：外侧区域 \(K>0\)（正曲率），内侧区域 \(K<0\)（负曲率），顶部与底部两条圆周上 \(K=0\)（这两条线对积分没有贡献）。

<h4>第六步：把积分拆成正、负两部分</h4>
把整个积分按符号拆开：
<div class="eq">$$\int_{\text{环面}}K\,dA=\int_{\text{外侧}}K\,dA+\int_{\text{内侧}}K\,dA$$</div>
外侧这一项是正的（\(K>0\) 的积分），内侧这一项是负的（\(K<0\) 的积分）。

<h4>第七步：正负恰好抵消</h4>
第四步说总积分为零，第六步把总积分拆成一正一负两项。两者结合，说明外侧的正贡献与内侧的负贡献<strong>恰好</strong>相互抵消。这不是数值巧合，而是拓扑（\(\chi=0\)）通过 Gauss–Bonnet 强加的约束。

<h4>第八步：与前面的分区判断吻合</h4>
在前面"环面"那一条例子里，我们定性地看到外侧 \(K>0\)、内侧 \(K<0\)、过渡线 \(K=0\)；这里 Gauss–Bonnet 定量地确认：这些正负区域对总积分的贡献一正一负、加起来恰好为零。

<div class="keybox">$$\boxed{\int_{\text{环面}}K\,dA=0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>环面正负曲率"收支平衡"，总曲率恰为零；这是 \(\chi=0\) 这个拓扑事实通过 Gauss–Bonnet 强加的结果。</div>`,
    2: L`<h4>我们要算什么</h4>
计算亏格为 \(2\) 的闭曲面（双环面）的总曲率：其 Euler 示性数 \(\chi=-2\)，由 Gauss–Bonnet 定理，总曲率必为 \(-4\pi\)。无论曲面怎样变形，这个总量都不变。

<h4>第一步：回忆亏格 \(g\) 的含义</h4>
回忆：亏格 \(g\) 是曲面"洞"的个数。球面没有洞，\(g=0\)；环面（甜甜圈）有一个洞，\(g=1\)；双环面有两个洞，\(g=2\)。

<h4>第二步：回忆亏格与 Euler 示性数的关系</h4>
闭曲面的 Euler 示性数满足
<div class="eq">$$\chi=2-2g$$</div>
这是拓扑学的标准结论：每多打一个洞，\(\chi\) 就减 \(2\)。

<h4>第三步：用已知例子核对这个公式</h4>
先核对一下：球面 \(g=0\)，公式给 \(\chi=2-0=2\)，而球面 \(\chi=2\)，一致；环面 \(g=1\)，公式给 \(\chi=2-2=0\)，环面 \(\chi=0\)，也一致。公式可信。

<h4>第四步：代入亏格 \(g=2\)</h4>
亏格 \(2\) 的闭曲面就是"两个洞的甜甜圈"（双环面）。代入公式：
<div class="eq">$$\chi=2-2\cdot 2=2-4=-2$$</div>

<h4>第五步：回忆 Gauss–Bonnet 定理</h4>
<div class="eq">$$\int_M K\,dA=2\pi\,\chi(M)$$</div>

<h4>第六步：算出总曲率</h4>
代入 \(\chi=-2\)：
<div class="eq">$$\int_M K\,dA=2\pi\cdot(-2)=-4\pi$$</div>
总曲率为 \(-4\pi\)。

<h4>第七步：理解"变形不变"的含义</h4>
回忆：Gauss 曲率 \(K\) 本身随曲面的弯曲会逐点改变，但它的<strong>总积分</strong>被拓扑锁死。无论把这个双环面怎样拉伸、压扁、扭曲（只要不撕裂、不粘合新洞），曲率可以"流动"，但总曲率始终是 \(-4\pi\)。

<h4>第八步：三种曲面的对照</h4>
把前面几条放在一起看：球面 \(\chi=2\)，总曲率 \(4\pi\)；环面 \(\chi=0\)，总曲率 \(0\)；双环面 \(\chi=-2\)，总曲率 \(-4\pi\)。洞越多，Euler 示性数越小，总曲率越负。

<div class="keybox">$$\boxed{\int_M K\,dA=2\pi\chi=2\pi\cdot(-2)=-4\pi}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>亏格 \(2\) 的闭曲面 ⟹ 总曲率恒为 \(-4\pi\)；曲率分布可以流动，但总量被拓扑刚性锁死。</div>`
  },
  "r6": {
    0: L`<h4>第1步：写出欧氏内积的定义</h4>回忆：在 \(\mathbb R^n\) 中取直角坐标 \(x^1,\ldots,x^n\)，标准内积按分量相乘再求和。<div class="eq">$$\langle v,w\rangle=\sum_{i=1}^{n}v^iw^i$$</div>这就是把每个切空间识别成 \(\mathbb R^n\) 后使用的内积。
<h4>第2步：计算坐标基的两两内积</h4>回忆：坐标基 \(\partial_i\) 对应第 \(i\) 个标准单位向量 \(e_i\)。<div class="eq">$$g_{ij}=g(\partial_i,\partial_j)=\langle e_i,e_j\rangle=\delta_{ij}$$</div>主对角线为一，非对角项为零，所以度量矩阵是单位矩阵。
<h4>第3步：把任意向量代入二次型</h4>回忆：若 \(v=\sum_i v^i\partial_i\)，双线性将度量写成双重求和。<div class="eq">$$g(v,v)=\sum_{i,j}\delta_{ij}v^iv^j=\sum_i(v^i)^2$$</div>非零向量至少有一个非零坐标，故平方长度严格正。
<h4>第4步：计算两个向量的夹角数据</h4>回忆：内积和长度都已由前面算出；非零向量的夹角满足余弦公式。<div class="eq">$$\cos\theta=\frac{g(v,w)}{\sqrt{g(v,v)}\sqrt{g(w,w)}}=\frac{\sum_i v^iw^i}{\sqrt{\sum_i(v^i)^2}\sqrt{\sum_i(w^i)^2}}$$</div>所得恰是初等解析几何中的夹角公式。
<h4>第5步：将位移代入得到线元</h4>回忆：线元 \(ds^2\) 是无穷小位移 \(dx^i\) 的度量二次型。<div class="eq">$$ds^2=\sum_{i,j}g_{ij}dx^i dx^j=\sum_{i,j}\delta_{ij}dx^i dx^j=\sum_i(dx^i)^2$$</div>交叉项全被 \(\delta_{ij}\) 消去，这正是勾股形式。
<h4>第6步：沿曲线逐项算速度长度</h4>回忆：若 \(\gamma(t)=(x^1(t),\ldots,x^n(t))\)，则 \(\dot\gamma=\sum_i\dot x^i\partial_i\)。<div class="eq">$$g(\dot\gamma,\dot\gamma)=\sum_i(\dot x^i)^2,\qquad |\dot\gamma|_g=\sqrt{\sum_i(\dot x^i)^2}$$</div>速度长度就是通常欧氏速度向量的模。
<h4>第7步：把速度积分为曲线长度</h4>回忆：黎曼曲线长度的定义是速度长度的时间积分。<div class="eq">$$L_g(\gamma)=\int_a^b\sqrt{g(\dot\gamma,\dot\gamma)}\,dt=\int_a^b\sqrt{\sum_i(\dot x^i)^2}\,dt$$</div>这一步核对了由单位矩阵得到的是熟悉的欧氏弧长。
<h4>第8步：算联络系数</h4>回忆：Levi-Civita 联络的坐标公式只含度量的一阶偏导；这里 \(g_{ij}=\delta_{ij}\) 为常数。<div class="eq">$$\Gamma^k_{ij}=\tfrac12g^{k\ell}(\partial_i g_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})=0$$</div>每一项偏导均为零，故全部 Christoffel 符号为零。
<h4>第9步：把零联络代入曲率公式</h4>回忆：曲率分量由 \(\Gamma\) 的偏导和二次项组成。<div class="eq">$$R^\ell{}_{kij}=\partial_i\Gamma^\ell_{jk}-\partial_j\Gamma^\ell_{ik}+\Gamma^m_{jk}\Gamma^\ell_{im}-\Gamma^m_{ik}\Gamma^\ell_{jm}=0$$</div>四项逐项为零，所以欧氏度量平坦。
<div class="keybox">$$\boxed{g_{ij}=\delta_{ij},\qquad ds^2=\sum_i(dx^i)^2,\qquad R=0}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>单位矩阵量出勾股长度；矩阵处处不变，使联络与曲率分量都为零。</div>`,
    1: L`<h4>第1步：列出所给时空度量</h4>回忆：狭义相对论采用时间 \(t\) 与空间坐标 \(x,y,z\)，常数光速 \(c>0\)。<div class="eq">$$\eta=-c^2dt\otimes dt+dx\otimes dx+dy\otimes dy+dz\otimes dz$$</div>这个对称二阶张量的时间项系数为负。
<h4>第2步：把度量写成矩阵</h4>回忆：在 \((\partial_t,\partial_x,\partial_y,\partial_z)\) 基下，各混合项为零。<div class="eq">$$[\eta_{\mu\nu}]=\operatorname{diag}(-c^2,1,1,1)$$</div>矩阵有一个负方向、三个正方向，即符号型为 \((-,+,+,+)\)。
<h4>第3步：复述黎曼正定条件</h4>回忆：黎曼度量要求每个非零切向量都有严格正的平方长度。<div class="eq">$$v\ne0\quad\Longrightarrow\quad g(v,v)>0$$</div>检查是否属于黎曼度量，只需找一个违背条件的非零向量。
<h4>第4步：代入纯时间向量</h4>回忆：\(\partial_t\) 的四个坐标分量为 \((1,0,0,0)\)。<div class="eq">$$\eta(\partial_t,\partial_t)=-c^2(1)^2+0^2+0^2+0^2=-c^2<0$$</div>非零时间方向却有负平方长度，已经排除了正定性。
<h4>第5步：再算纯空间方向</h4>回忆：\(\partial_x\) 的分量为 \((0,1,0,0)\)。<div class="eq">$$\eta(\partial_x,\partial_x)=-c^2(0)^2+1^2+0^2+0^2=1>0$$</div>时间和空间方向的平方长度符号确实不同。
<h4>第6步：找一个非零零长度向量</h4>回忆：把时间和空间分量放在同一个向量中，选 \(w=\partial_t+c\partial_x\)。<div class="eq">$$\eta(w,w)=-c^2(1)^2+(c)^2+0+0=0,\qquad w\ne0$$</div>这里的零平方长度不表示零向量，而是类光方向。
<h4>第7步：分清非正定和退化</h4>回忆：双线性型退化是矩阵不可逆；矩阵的行列式可逐个对角元相乘。<div class="eq">$$\det[\eta_{\mu\nu}]=(-c^2)\cdot1\cdot1\cdot1=-c^2\ne0$$</div>所以它是非退化的，只是没有满足黎曼度量的正定条件。
<h4>第8步：给出正确名称</h4>回忆：具有一个负方向、三个正方向的光滑非退化对称度量叫 Lorentz 度量，它属于伪黎曼度量。<div class="eq">$$\operatorname{signature}(\eta)=(1,3),\qquad \eta(\partial_t,\partial_t)<0$$</div>这与原例的分类一致，且负方向的代入给出了具体理由。
<div class="keybox">$$\boxed{\eta=-c^2dt^2+dx^2+dy^2+dz^2\text{ 是 Lorentz 度量，而非正定黎曼度量}}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>时间方向平方长度为负；非退化仍然可以不正定。</div>`,
    2: L`<h4>第1步：从正规参数化开始</h4>回忆：曲面局部由 \(X(u,v)\in\mathbb R^3\) 参数化，正规表示 \(X_u,X_v\) 线性无关。<div class="eq">$$dX(a\partial_u+b\partial_v)=aX_u+bX_v$$</div>因此参数域里的两个方向被送成曲面上的两条独立切向方向。
<h4>第2步：写出诱导度量定义</h4>回忆：曲面度量是环境欧氏内积的拉回。<div class="eq">$$I_{(u,v)}(a\partial_u+b\partial_v,c\partial_u+d\partial_v)=\langle aX_u+bX_v,cX_u+dX_v\rangle$$</div>这一定义只使用参数化的微分和环境内积。
<h4>第3步：在坐标基上逐项取值</h4>回忆：第一基本形式系数是把两个坐标基分别代入诱导度量。<div class="eq">$$E=\langle X_u,X_u\rangle,\qquad F=\langle X_u,X_v\rangle,\qquad G=\langle X_v,X_v\rangle$$</div>对称性还给 \(\langle X_v,X_u\rangle=F\)。
<h4>第4步：完全展开一般切向量的平方</h4>回忆：欧氏内积对两个变量各自线性。<div class="eq">$$\langle aX_u+bX_v,aX_u+bX_v\rangle=a^2E+abF+baF+b^2G=Ea^2+2Fab+Gb^2$$</div>混合项的系数二来自两项相同的乘积。
<h4>第5步：换成无穷小位移</h4>回忆：令一般切向量的坐标分量为 \(du,dv\)，就得到线元。<div class="eq">$$I=E\,du^2+2F\,du\,dv+G\,dv^2$$</div>这正是曲面第一基本形式的标准写法。
<h4>第6步：核查正定性</h4>回忆：正规参数化使 \(aX_u+bX_v=0\) 只在 \(a=b=0\) 发生。<div class="eq">$$Ea^2+2Fab+Gb^2=\lVert aX_u+bX_v\rVert^2>0\quad((a,b)\ne(0,0))$$</div>因此这个拉回双线性型确实是黎曼度量。
<h4>第7步：取一张具体弯曲曲面来求导</h4>回忆：用图面 \(X(u,v)=(u,v,u^2+v^2)\) 作数值结构核查。<div class="eq">$$X_u=(1,0,2u),\qquad X_v=(0,1,2v)$$</div>两个导向量的前两个分量是标准基，故它们处处线性无关。
<h4>第8步：把导向量代入三个系数</h4>回忆：按第3步的欧氏点积定义分别相乘求和。<div class="eq">$$E=1+4u^2,\qquad F=4uv,\qquad G=1+4v^2$$</div>混合项 \(4uv\) 来自两个高度分量 \(2u\) 与 \(2v\) 的乘积。
<h4>第9步：写出并核查具体线元</h4>回忆：把第8步得到的 \(E,F,G\) 原样代入第5步。<div class="eq">$$I=(1+4u^2)du^2+8uv\,du\,dv+(1+4v^2)dv^2,\quad EG-F^2=1+4u^2+4v^2>0$$</div>行列式为正且 \(E>0\)，与正规性保证的正定性相符。
<div class="keybox">$$\boxed{I=X^*\langle\cdot,\cdot\rangle=E\,du^2+2F\,du\,dv+G\,dv^2}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>把参数方向送进三维空间，再做点积，就算出了曲面自己测量长度的公式。</div>`
  },
  "r7": {
    0: L`<h4>第1步：写出梯度的定义</h4>回忆：梯度是与微分 \(df\) 经度量对应的向量场，定义要求对每个测试向量 \(Y\) 都成立。<div class="eq">$$g(\operatorname{grad}f,Y)=df(Y)$$</div>要计算梯度，就要把这条对所有 \(Y\) 的等式解成向量分量。
<h4>第2步：把函数微分写成分量</h4>回忆：坐标函数 \(x^i\) 的微分形成余切基。<div class="eq">$$df=\sum_j(\partial_jf)\,dx^j$$</div>因此 \(df\) 的第 \(j\) 个余切分量就是偏导 \(\partial_jf\)。
<h4>第3步：设未知梯度的分量</h4>回忆：每个向量场都能在坐标基上展开。<div class="eq">$$\operatorname{grad}f=V^i\partial_i$$</div>未知量是 \(n\) 个函数 \(V^i\)。
<h4>第4步：取基向量测试定义式</h4>回忆：定义式对所有 \(Y\) 成立，特别可取 \(Y=\partial_j\)。<div class="eq">$$g(V^i\partial_i,\partial_j)=g_{ji}V^i=df(\partial_j)=\partial_jf$$</div>梯度问题成为线性方程组 \(G V=\partial f\)。
<h4>第5步：乘逆矩阵逐项消去度量</h4>回忆：正定矩阵 \(G=(g_{ij})\) 可逆，逆矩阵记 \(g^{ij}\)。<div class="eq">$$g^{kj}g_{ji}V^i=g^{kj}\partial_jf,\qquad \delta^k_iV^i=g^{kj}\partial_jf$$</div>所以梯度第 \(k\) 个分量为 \(V^k=g^{kj}\partial_jf\)。
<h4>第6步：先用欧氏度量校验</h4>回忆：在标准欧氏坐标中 \(g_{ij}=\delta_{ij}\)，逆矩阵仍为单位矩阵。<div class="eq">$$(\operatorname{grad}f)^i=\delta^{ij}\partial_jf=\partial_if$$</div>这还原了多元微积分的通常梯度。
<h4>第7步：给出具体非单位度量与函数</h4>回忆：取 \(g=4dx^2+dy^2\)、\(f(x,y)=x^2+y\)。<div class="eq">$$G=\begin{pmatrix}4&0\\0&1\end{pmatrix},\qquad G^{-1}=\begin{pmatrix}1/4&0\\0&1\end{pmatrix},\qquad df=2x\,dx+dy$$</div>这里横向长度权重为四，所以横向梯度分量会缩小四倍。
<h4>第8步：把偏导逐项代入梯度公式</h4>回忆：第5步给 \(V^i=g^{ij}\partial_jf\)。<div class="eq">$$V^x=(1/4)(2x)+0(1)=x/2,\qquad V^y=0(2x)+1(1)=1$$</div>因此候选梯度是 \((x/2)\partial_x+\partial_y\)。
<h4>第9步：用任意向量反向检验</h4>回忆：定义要求对任意 \(Y=a\partial_x+b\partial_y\) 成立。<div class="eq">$$g((x/2)\partial_x+\partial_y,Y)=4(x/2)a+1\cdot b=2xa+b=df(Y)$$</div>验证了这不是只在坐标基上碰巧成立，而是对所有向量都成立。
<div class="keybox">$$\boxed{\operatorname{grad}f=g^{ij}(\partial_jf)\partial_i,\qquad g=4dx^2+dy^2,\ f=x^2+y\Rightarrow\operatorname{grad}f=\tfrac{x}{2}\partial_x+\partial_y}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>梯度是微分经过逆度量升指标得到的向量；较重的方向分量相应缩小。</div>`,
    1: L`<h4>第1步：从散度的体积定义开始</h4>回忆：给定黎曼体积密度 \(dV_g\)，散度由流沿 \(X\) 对体积的瞬时变化定义。<div class="eq">$$\mathcal L_X(dV_g)=(\operatorname{div}X)dV_g$$</div>因此只需把左侧的 Lie 导数算成体积密度的倍数。
<h4>第2步：写出坐标体积密度</h4>回忆：正定度量矩阵 \(G=(g_{ij})\) 的行列式为正。<div class="eq">$$\rho=\sqrt{\det G},\qquad dV_g=\rho\,dx^1\wedge\cdots\wedge dx^n$$</div>局部坐标中的体积缩放因子就是 \(\rho\)。
<h4>第3步：先计算系数函数的变化</h4>回忆：Lie 导数作用在函数上就是向量场作方向导数。<div class="eq">$$\mathcal L_X\rho=X(\rho)=\sum_iX^i\partial_i\rho$$</div>这给出了体积变化中由密度本身变化贡献的一项。
<h4>第4步：再计算坐标体积元的变化</h4>回忆：对坐标一形式有 \(\mathcal L_Xdx^j=d(X^j)=\partial_iX^jdx^i\)。<div class="eq">$$\mathcal L_X(dx^1\wedge\cdots\wedge dx^n)=(\partial_iX^i)dx^1\wedge\cdots\wedge dx^n$$</div>楔积中替换一项后，只有原位的 \(dx^j\) 分量不为零；它们求和成普通坐标散度。
<h4>第5步：用乘积法则合并两项</h4>回忆：Lie 导数对函数乘形式满足乘积法则。<div class="eq">$$\mathcal L_XdV_g=\bigl(X^i\partial_i\rho+\rho\,\partial_iX^i\bigr)dx^1\wedge\cdots\wedge dx^n$$</div>第一项来自密度变化，第二项来自坐标流的局部伸缩。
<h4>第6步：改写成一个全导数</h4>回忆：一元乘积法则逐项给 \(\partial_i(\rho X^i)=(\partial_i\rho)X^i+\rho\partial_iX^i\)。<div class="eq">$$\mathcal L_XdV_g=\partial_i(\rho X^i)\,dx^1\wedge\cdots\wedge dx^n$$</div>分子现在是一项可以直接代数计算的散度型表达式。
<h4>第7步：与定义比较并除以密度</h4>回忆：由于 \(\rho>0\)，可比较第1步定义式中的同一体积形式。<div class="eq">$$\operatorname{div}X=\frac1\rho\partial_i(\rho X^i)=\frac1{\sqrt{\det G}}\partial_i\bigl(\sqrt{\det G}\,X^i\bigr)$$</div>这是散度的坐标公式，直接来自体积定义。
<h4>第8步：在极坐标中算度量行列式</h4>回忆：欧氏平面去掉原点后的极坐标度量为 \(g=dr^2+r^2d\theta^2\)，其中 \(r>0\)。<div class="eq">$$G=\begin{pmatrix}1&0\\0&r^2\end{pmatrix},\qquad \det G=r^2,\qquad\rho=r$$</div>因此极坐标面积元比 \(dr\,d\theta\) 多一个 \(r\) 因子。
<h4>第9步：选向外伸张的向量场</h4>回忆：取 \(X=r\partial_r\)，则其极坐标分量为 \(X^r=r,X^\theta=0\)。<div class="eq">$$\rho X^r=r\cdot r=r^2,\qquad \rho X^\theta=r\cdot0=0$$</div>把这些分量代入即可逐项求偏导。
<h4>第10步：完成极坐标散度计算</h4>回忆：第7步公式要求先求导，再除以 \(\rho=r\)。<div class="eq">$$\operatorname{div}X=\frac1r\bigl[\partial_r(r^2)+\partial_\theta(0)\bigr]=\frac1r(2r)=2$$</div>结果在每个 \(r>0\) 的点都为二。
<h4>第11步：换成直角坐标复核</h4>回忆：极坐标变换满足 \(r\partial_r=x\partial_x+y\partial_y\)。<div class="eq">$$\operatorname{div}(x\partial_x+y\partial_y)=\partial_xx+\partial_yy=1+1=2$$</div>两种坐标算得相同，说明密度因子 \(r\) 已正确计入。
<div class="keybox">$$\boxed{\operatorname{div}X=\frac1{\sqrt{\det g}}\partial_i(\sqrt{\det g}\,X^i),\qquad\operatorname{div}(r\partial_r)=2}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>散度是流改变体积的速率；坐标体积元会变，所以求导前必须乘体积密度。</div>`,
    2: L`<h4>第1步：按定义连接梯度与散度</h4>回忆：本例取非负号约定的 Laplace–Beltrami 算子。<div class="eq">$$\Delta f:=\operatorname{div}(\operatorname{grad}f)$$</div>先算梯度的分量，再把它们放进散度公式。
<h4>第2步：写出梯度分量</h4>回忆：梯度由 \(g(\operatorname{grad}f,Y)=df(Y)\) 定义，乘逆矩阵解出分量。<div class="eq">$$(\operatorname{grad}f)^i=g^{ij}\partial_jf$$</div>这是第一层指标升降计算。
<h4>第3步：写出散度分量</h4>回忆：若 \(\rho=\sqrt{\det g}\)，体积定义给 \(\operatorname{div}X=\rho^{-1}\partial_i(\rho X^i)\)。<div class="eq">$$\operatorname{div}X=\frac1{\rho}\partial_i(\rho X^i)$$</div>这是第二层体积变化计算。
<h4>第4步：把梯度逐项代入散度</h4>回忆：在第3步中令 \(X^i=g^{ij}\partial_jf\)。<div class="eq">$$\Delta f=\frac1\rho\partial_i\bigl(\rho g^{ij}\partial_jf\bigr)$$</div>得到了可直接用于坐标计算的主公式。
<h4>第5步：先展开一次乘积法则</h4>回忆：对 \(\rho g^{ij}\partial_jf\) 按三个因子求导。<div class="eq">$$\Delta f=g^{ij}\partial_i\partial_jf+\bigl(\partial_i g^{ij}+g^{ij}\partial_i\log\rho\bigr)\partial_jf$$</div>第一项含二阶偏导，第二项负责修正非恒定度量和体积因子。
<h4>第6步：写出 Christoffel 符号</h4>回忆：Levi-Civita 联络由度量唯一确定，坐标系数为度量的一阶导数。<div class="eq">$$\Gamma^k_{ij}=\tfrac12g^{k\ell}(\partial_i g_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$$</div>这允许把第5步的修正项改写成联络形式。
<h4>第7步：计算体积密度的导数</h4>回忆：Jacobi 行列式求导公式为 \(\partial_i\log\det G=g^{k\ell}\partial_i g_{k\ell}\)。<div class="eq">$$\partial_i\log\rho=\tfrac12g^{k\ell}\partial_i g_{k\ell}=\Gamma^k_{ki}$$</div>最后一个等号把第6步的 Christoffel 公式代入并对对称的两项整理得到。
<h4>第8步：用度量相容性整理逆矩阵导数</h4>回忆：Levi-Civita 联络满足 \(\nabla_i g^{ij}=0\)。<div class="eq">$$0=\partial_i g^{ij}+\Gamma^i_{ik}g^{kj}+\Gamma^j_{ik}g^{ik}$$</div>把中间项用第7步的 \(\partial_k\log\rho\) 替换，便能识别第5步的修正项。
<h4>第9步：得到协变 Hessian 形式</h4>回忆：由第8步移项得 \(\partial_i g^{ij}+g^{ij}\partial_i\log\rho=-g^{ik}\Gamma^j_{ik}\)。<div class="eq">$$\Delta f=g^{ij}\bigl(\partial_i\partial_jf-\Gamma^k_{ij}\partial_kf\bigr)$$</div>这说明 Laplace–Beltrami 算子也是函数 Hessian 的度量迹。
<h4>第10步：选极坐标作具体计算</h4>回忆：在 \(r>0\) 的欧氏平面极坐标中，\(g=dr^2+r^2d\theta^2\)。<div class="eq">$$g^{rr}=1,\qquad g^{\theta\theta}=r^{-2},\qquad \rho=r$$</div>将这三项逐个放进第4步即可得极坐标算子。
<h4>第11步：展开极坐标算子</h4>回忆：分别对径向与角向的两项求偏导。<div class="eq">$$\Delta f=\frac1r\partial_r(r\partial_rf)+\frac1r\partial_\theta(r\cdot r^{-2}\partial_\theta f)=\partial_r^2f+\frac1r\partial_rf+\frac1{r^2}\partial_\theta^2f$$</div>角向求导时 \(r\) 被视为常数，因此得到 \(r^{-2}\partial_\theta^2f\)。
<h4>第12步：代入函数并和直角坐标核对</h4>回忆：令 \(f=r^2=x^2+y^2\)，则 \(\partial_rf=2r\)、\(\partial_r^2f=2\)、\(\partial_\theta^2f=0\)。<div class="eq">$$\Delta(r^2)=2+\frac1r(2r)+0=4=\partial_x^2(x^2+y^2)+\partial_y^2(x^2+y^2)$$</div>两套坐标一致，具体计算也验证了符号约定。
<div class="keybox">$$\boxed{\Delta f=\frac1{\sqrt{\det g}}\partial_i(\sqrt{\det g}\,g^{ij}\partial_jf)=g^{ij}(\partial_i\partial_jf-\Gamma^k_{ij}\partial_kf)}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>先用逆度量得到梯度，再按体积密度求散度，就得到了流形上的 Laplace 算子。</div>`
  },
  "r8": {
    0: L`<h4>第1步：从欧氏等距的定义开始</h4>回忆：全局欧氏等距 \(F:\mathbb R^n\to\mathbb R^n\) 保持任意两点的距离。<div class="eq">$$\lVert F(x)-F(y)\rVert=\lVert x-y\rVert\qquad(x,y\in\mathbb R^n)$$</div>我们要从这一条定义式算出 \(F\) 的全部可能形式。
<h4>第2步：先去掉平移部分</h4>回忆：令 \(b=F(0)\)，定义 \(H(x)=F(x)-b\)。平移不改变两点差向量。<div class="eq">$$H(0)=0,\qquad\lVert H(x)-H(y)\rVert=\lVert x-y\rVert$$</div>所以只需分类固定原点的等距 \(H\)，最后再加回 \(b\)。
<h4>第3步：把到原点的距离写成范数</h4>回忆：在第2步取 \(y=0\)，并用 \(H(0)=0\)。<div class="eq">$$\lVert H(x)\rVert=\lVert H(x)-H(0)\rVert=\lVert x-0\rVert=\lVert x\rVert$$</div>固定原点的等距保持每个向量的范数。
<h4>第4步：用极化恒等式恢复内积</h4>回忆：实内积满足 \(2\langle u,v\rangle=\lVert u\rVert^2+\lVert v\rVert^2-\lVert u-v\rVert^2\)。<div class="eq">$$2\langle H(x),H(y)\rangle=\lVert H(x)\rVert^2+\lVert H(y)\rVert^2-\lVert H(x)-H(y)\rVert^2=2\langle x,y\rangle$$</div>因此 \(H\) 保持任意两个向量的内积。
<h4>第5步：计算标准基的像</h4>回忆：标准基满足 \(\langle e_i,e_j\rangle=\delta_{ij}\)；记 \(u_i=H(e_i)\)。<div class="eq">$$\langle u_i,u_j\rangle=\langle H(e_i),H(e_j)\rangle=\delta_{ij}$$</div>所以 \(u_1,\ldots,u_n\) 是一组正交归一基。
<h4>第6步：用这些列向量组成矩阵</h4>回忆：令 \(A\) 的第 \(i\) 列为 \(u_i\)；矩阵 \(A^TA\) 的第 \((i,j)\) 项是列向量点积。<div class="eq">$$(A^TA)_{ij}=u_i\cdot u_j=\delta_{ij},\qquad A^TA=I$$</div>因此 \(A\in O(n)\)，即 \(A\) 是正交矩阵。
<h4>第7步：逐坐标识别任意点的像</h4>回忆：在正交基 \(u_i\) 下，向量的第 \(i\) 个系数是它与 \(u_i\) 的内积。<div class="eq">$$\langle H(x),u_i\rangle=\langle H(x),H(e_i)\rangle=\langle x,e_i\rangle=x^i$$</div>所以 \(H(x)=\sum_i x^iu_i=Ax\)，这里没有预先假设 \(H\) 线性。
<h4>第8步：把平移加回去</h4>回忆：第2步定义 \(H(x)=F(x)-b\)。<div class="eq">$$F(x)=H(x)+b=Ax+b,\qquad A\in O(n),\ b\in\mathbb R^n$$</div>这说明任何全局欧氏等距都必是正交变换后接平移。
<h4>第9步：反向代入验证没有遗漏</h4>回忆：若 \(A^TA=I\)，则 \(\lVert Av\rVert^2=v^TA^TAv=\lVert v\rVert^2\)。<div class="eq">$$\lVert (Ax+b)-(Ay+b)\rVert^2=\lVert A(x-y)\rVert^2=(x-y)^TA^TA(x-y)=\lVert x-y\rVert^2$$</div>故每个 \(Ax+b\) 确实是欧氏等距，分类的两个方向都已证明。
<h4>第10步：逐项计算复合律</h4>回忆：把 \((A,b)\) 理解为映射 \(x\mapsto Ax+b\)。<div class="eq">$$(A,b)\circ(C,d):x\longmapsto A(Cx+d)+b=(AC)x+(Ad+b)$$</div>这就是 \(O(n)\ltimes\mathbb R^n\) 的半直积乘法。
<h4>第11步：数正交与平移的自由度</h4>回忆：平移向量有 \(n\) 个实分量；正交群的切向矩阵斜对称。<div class="eq">$$\dim O(n)=\frac{n(n-1)}2,\qquad\dim\mathbb R^n=n$$</div>正交部分由上三角的 \(n(n-1)/2\) 项决定。
<h4>第12步：合并群结构与维数</h4>回忆：半直积作为流形局部由两部分参数组成，维数相加。<div class="eq">$$\dim E(n)=\dim O(n)+n=\frac{n(n-1)}2+n=\frac{n(n+1)}2$$</div>欧氏空间恰好达到一般连通 \(n\) 维黎曼流形等距群的维数上界。
<div class="keybox">$$\boxed{\operatorname{Isom}(\mathbb R^n)=O(n)\ltimes\mathbb R^n,\qquad\dim\operatorname{Isom}(\mathbb R^n)=\frac{n(n+1)}2}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>固定原点的等距保内积，只能由正交矩阵给出；剩下的自由度是平移。</div>`,
    1: L`<h4>第1步：说明球面与度量</h4>回忆：取半径 \(R>0\) 的球面，度量是环境 \(\mathbb R^{n+1}\) 欧氏内积在切空间上的限制。<div class="eq">$$S^n(R)=\{x\in\mathbb R^{n+1}:\lVert x\rVert=R\}$$</div>等距群的候选来自保持环境点积的正交矩阵。
<h4>第2步：先检验正交矩阵保持球面</h4>回忆：若 \(A^TA=I\)，则 \(\lVert Ax\rVert^2=x^TA^TAx\)。<div class="eq">$$\lVert Ax\rVert^2=\lVert x\rVert^2=R^2\quad(x\in S^n(R))$$</div>所以 \(A\) 的限制把球面映回自身。
<h4>第3步：检验它保持诱导度量</h4>回忆：正交矩阵的微分仍为 \(A\)，并满足 \(\langle Au,Av\rangle=\langle u,v\rangle\)。<div class="eq">$$g_{Ax}(dA_xu,dA_xv)=\langle Au,Av\rangle=u^TA^TAv=\langle u,v\rangle=g_x(u,v)$$</div>每个 \(A\in O(n+1)\) 的限制都是球面等距。
<h4>第4步：用球面距离读出环境点积</h4>回忆：球面两点的最短大圆弧长度为 \(d(x,y)=R\vartheta\)，中心角满足 \(\cos\vartheta=\langle x,y\rangle/R^2\)。<div class="eq">$$\langle x,y\rangle=R^2\cos\bigl(d(x,y)/R\bigr)$$</div>因此球面内蕴距离已经决定了两点在环境空间中的点积。
<h4>第5步：对任意球面等距代入保距式</h4>回忆：设 \(F\) 为球面全局等距；第4步公式可分别用于 \((x,y)\) 和 \((F(x),F(y))\)。<div class="eq">$$\langle F(x),F(y)\rangle=R^2\cos\bigl(d(F(x),F(y))/R\bigr)=\langle x,y\rangle$$</div>所以 \(F\) 保持环境点积，尽管它最初只定义在球面上。
<h4>第6步：选取环境空间的一组球面参照点</h4>回忆：标准基 \(e_1,\ldots,e_{n+1}\) 乘 \(R\) 后都在球面上。<div class="eq">$$p_i=Re_i,\qquad\langle p_i,p_j\rangle=R^2\delta_{ij}$$</div>这 \(n+1\) 个点足以读取任意环境向量的全部坐标。
<h4>第7步：计算参照点的像组成什么</h4>回忆：第5步给保点积；令 \(u_i=F(p_i)/R\)。<div class="eq">$$\langle u_i,u_j\rangle=R^{-2}\langle F(p_i),F(p_j)\rangle=\delta_{ij}$$</div>这些像组成环境 \(\mathbb R^{n+1}\) 的正交归一基。
<h4>第8步：据此构造唯一候选矩阵</h4>回忆：以 \(u_i\) 为列定义 \(A\)，则列向量正交。<div class="eq">$$Ae_i=u_i,\qquad A^TA=I,\qquad Ap_i=F(p_i)$$</div>所以候选 \(A\) 是正交矩阵，并在所有参照点与 \(F\) 一致。
<h4>第9步：逐坐标比较任意点</h4>回忆：因为 \(F(p_i)=Ap_i\)，第5步与正交性分别给两种像的同一组内积。<div class="eq">$$\langle F(x),Ap_i\rangle=\langle F(x),F(p_i)\rangle=\langle x,p_i\rangle=\langle Ax,Ap_i\rangle$$</div>\(Ap_i/R\) 是基；每个坐标相同意味着 \(F(x)=Ax\) 对所有 \(x\) 成立。
<h4>第10步：计算群的维数</h4>回忆：第3步给 \(O(n+1)\) 全部包含于等距群，第9步给反向包含。斜对称 \((n+1)\times(n+1)\) 矩阵的上三角项自由。<div class="eq">$$\operatorname{Isom}(S^n(R))\cong O(n+1),\qquad\dim O(n+1)=\frac{(n+1)n}{2}$$</div>因此球面也达到 \(n\) 维等距群维数上界。
<h4>第11步：具体检查一点的各向同性</h4>回忆：固定北极 \(p=Re_{n+1}\) 后，作用在垂直于 \(p\) 的切空间上的任意 \(B\in O(n)\) 可扩为 \(\operatorname{diag}(B,1)\)。<div class="eq">$$\operatorname{diag}(B,1)p=p,\qquad dA_p|_{T_pS^n}=B$$</div>因为 \(O(n)\) 能把任意单位向量送往任意另一个单位向量，球面在每点各向同性。
<div class="keybox">$$\boxed{\operatorname{Isom}(S^n(R))\cong O(n+1),\qquad \dim=\frac{n(n+1)}2}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>球面距离能还原环境点积；一组基点的像就确定了整个球面等距。</div>`,
    2: L`<h4>第1步：写出双曲上半平面的度量</h4>回忆：取复坐标 \(z=x+iy\)，其中 \(y>0\)；双曲度量把欧氏线元除以高度的平方。<div class="eq">$$\mathbb H^2=\{z=x+iy:y>0\},\qquad ds^2=\frac{dx^2+dy^2}{y^2}=\frac{|dz|^2}{(\operatorname{Im}z)^2}$$</div>接下来逐项检查 Möbius 变换是否保持这个比值。
<h4>第2步：写出实矩阵作用</h4>回忆：令 \(A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL(2,\mathbb R)\)，故 \(ad-bc=1\)。<div class="eq">$$F_A(z)=\frac{az+b}{cz+d}$$</div>分母若为零则 \(z=-d/c\) 是实数，不在上半平面；所以作用在 \(\mathbb H^2\) 内有定义。
<h4>第3步：把分母乘共轭以便取虚部</h4>回忆：分式乘以共轭分母不会改变值。<div class="eq">$$F_A(z)=\frac{(az+b)(c\bar z+d)}{|cz+d|^2}$$</div>分母变成正实数，虚部只需从分子提取。
<h4>第4步：逐项计算分子的虚部</h4>回忆：令 \(z=x+iy\)、\(\bar z=x-iy\)；\(ac|z|^2+bd\) 都是实数。<div class="eq">$$\operatorname{Im}[(az+b)(c\bar z+d)]=\operatorname{Im}(ad z+bc\bar z)=(ad-bc)y=y$$</div>这里行列式条件恰好把虚部的系数化为一。
<h4>第5步：得出新点的高度</h4>回忆：把第4步的虚部除以第3步的实分母。<div class="eq">$$\operatorname{Im}F_A(z)=\frac{y}{|cz+d|^2}>0$$</div>变换仍落在上半平面，高度被因子 \(|cz+d|^{-2}\) 缩放。
<h4>第6步：用商法则计算复导数</h4>回忆：分子与分母都是 \(z\) 的一次函数。<div class="eq">$$F_A^{\prime}(z)=\frac{a(cz+d)-c(az+b)}{(cz+d)^2}=\frac{ad-bc}{(cz+d)^2}=\frac1{(cz+d)^2}$$</div>微分的欧氏长度平方因此被 \(|cz+d|^{-4}\) 缩放。
<h4>第7步：把微分长度算清楚</h4>回忆：复解析映射局部微分是乘以复数 \(F_A^{\prime}(z)\)。<div class="eq">$$|dF_A(z)|^2=|F_A^{\prime}(z)\,dz|^2=\frac{|dz|^2}{|cz+d|^4}$$</div>分子线元的缩放因子已经与高度平方的缩放因子相同。
<h4>第8步：把两项完整代回度量</h4>回忆：新高度平方由第5步给 \(y^2/|cz+d|^4\)。<div class="eq">$$F_A^*ds^2=\frac{|dF_A(z)|^2}{(\operatorname{Im}F_A(z))^2}=\frac{|dz|^2/|cz+d|^4}{y^2/|cz+d|^4}=\frac{|dz|^2}{y^2}$$</div>分子分母的相同缩放因子抵消，故 \(F_A\) 是双曲等距。
<h4>第9步：求出矩阵作用的核</h4>回忆：若 \(F_A(z)=z\) 对所有 \(z\in\mathbb H^2\)，则多项式恒等式 \(az+b=cz^2+dz\) 逐系数成立。<div class="eq">$$c=0,\quad b=0,\quad a=d,\quad ad=1\quad\Longrightarrow\quad A=I\text{ 或 }A=-I$$</div>故两个相差符号的矩阵给同一等距，作用核恰为 \(\{\pm I\}\)。
<h4>第10步：计算轨道能否覆盖上半平面</h4>回忆：平移 \(z\mapsto z+x\) 与正伸缩 \(z\mapsto yz\) 都由行列式为一的实矩阵表示。<div class="eq">$$i\xmapsto{z\mapsto yz}iy\xmapsto{z\mapsto z+x}x+iy$$</div>所以该群可把基点 \(i\) 送到任意目标点。
<h4>第11步：计算固定基点时的方向旋转</h4>回忆：取 \(A_t=\begin{pmatrix}\cos t&\sin t\\-\sin t&\cos t\end{pmatrix}\)；直接代入得 \(F_{A_t}(i)=i\)。<div class="eq">$$F_{A_t}^{\prime}(i)=\frac1{(-i\sin t+\cos t)^2}=e^{2it}$$</div>随 \(t\) 变化，这个导数给出切平面上的所有保向单位旋转。
<h4>第12步：说明这些变换已穷尽保向等距</h4>回忆：连通黎曼流形的等距由一点的像和该点微分确定；保向等距的微分是正交且保向的二维线性映射。<div class="eq">$$F(i)=q,\quad dF_i\in SO(T_i\mathbb H^2,T_q\mathbb H^2)\quad\Longrightarrow\quad F=F_A\text{ 对某个 }A\in SL(2,\mathbb R)$$</div>第10步匹配点，第11步匹配方向，唯一性随后把局部匹配推广为全局相同。
<h4>第13步：数出保向群维数</h4>回忆：\(SL(2,\mathbb R)\) 的四个实矩阵元满足一个独立方程 \(ad-bc=1\)，除以有限核不改变维数。<div class="eq">$$\operatorname{Isom}^+(\mathbb H^2)\cong PSL(2,\mathbb R)=SL(2,\mathbb R)/\{\pm I\},\qquad\dim=4-1=3$$</div>因此原例中的 \(PSL(2,\mathbb R)\) 准确表示保向等距群。
<h4>第14步：检查全等距群还含反向分支</h4>回忆：反射 \(J(z)=-\bar z\) 把 \(x+iy\) 送到 \(-x+iy\)，保持 \(y\) 与 \(dx^2+dy^2\)，但改变平面定向。<div class="eq">$$J^*ds^2=\frac{(-dx)^2+dy^2}{y^2}=ds^2,\qquad J^2=\operatorname{id}$$</div>任一反向等距与 \(J\) 复合后保向，故全群还多一个由 \(J\) 代表的分支。
<div class="keybox">$$\boxed{\operatorname{Isom}^+(\mathbb H^2)=PSL(2,\mathbb R),\quad\dim=3;\qquad\operatorname{Isom}(\mathbb H^2)=PSL(2,\mathbb R)\rtimes\langle J\rangle}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>实 Möbius 变换让分子长度和高度同步缩放；反射再补上反向等距。</div>`
  },
  "r9": {
    0: L`<h4>第1步：明确球面与参数范围</h4>回忆：半径 \(R>0\) 的球面是 \(X^2+Y^2+Z^2=R^2\)；球坐标避开两极取 \(0<	heta<\pi\)。<div class="eq">$$X(\theta,\varphi)=(R\sin\theta\cos\varphi,R\sin\theta\sin\varphi,R\cos\theta)$$</div>把参数点代入三维空间，就能按拉回度量定义计算。
<h4>第2步：先检查参数点确在球面</h4>回忆：\(\cos^2arphi+\sin^2arphi=1\) 且 \(\sin^2	heta+\cos^2	heta=1\)。<div class="eq">$$|X|^2=R^2\sin^2\theta(\cos^2\varphi+\sin^2\varphi)+R^2\cos^2\theta=R^2$$</div>所以这确实是半径 \(R\) 球面的参数化。
<h4>第3步：对极角逐分量求导</h4>回忆：\(\partial_	heta\sin	heta=\cos	heta\)，\(\partial_	heta\cos	heta=-\sin	heta\)。<div class="eq">$$X_\theta=(R\cos\theta\cos\varphi,R\cos\theta\sin\varphi,-R\sin\theta)$$</div>这个向量是固定经度时沿球面南北移动的切向量。
<h4>第4步：对方位角逐分量求导</h4>回忆：\(\partial_arphi\cosarphi=-\sinarphi\)，\(\partial_arphi\sinarphi=\cosarphi\)。<div class="eq">$$X_\varphi=(-R\sin\theta\sin\varphi,R\sin\theta\cos\varphi,0)$$</div>这个向量是固定纬度时绕球面转动的切向量。
<h4>第5步：按拉回定义写出第一个系数</h4>回忆：欧氏内积诱导的第一基本形式满足 \(g_{	heta	heta}=X_	heta\cdot X_	heta\)。<div class="eq">$$g_{\theta\theta}=R^2\cos^2\theta\cos^2\varphi+R^2\cos^2\theta\sin^2\varphi+R^2\sin^2\theta$$</div>先保留三项，下一步再用三角恒等式化简。
<h4>第6步：化简极角方向的平方长度</h4>回忆：\(\cos^2arphi+\sin^2arphi=1\)。<div class="eq">$$g_{\theta\theta}=R^2\cos^2\theta+R^2\sin^2\theta=R^2$$</div>沿经线每变化一个弧度，实际弧长变化率为 \(R\)。
<h4>第7步：按拉回定义写出第二个系数</h4>回忆：\(g_{arphiarphi}=X_arphi\cdot X_arphi\)。<div class="eq">$$g_{\varphi\varphi}=R^2\sin^2\theta\sin^2\varphi+R^2\sin^2\theta\cos^2\varphi$$</div>两个非零分量都带 \(R\sin	heta\) 因子。
<h4>第8步：化简方位角方向的平方长度</h4>回忆：\(\sin^2arphi+\cos^2arphi=1\)。<div class="eq">$$g_{\varphi\varphi}=R^2\sin^2\theta(\sin^2\varphi+\cos^2\varphi)=R^2\sin^2\theta$$</div>这反映纬线圈的半径为 \(R\sin	heta\)。
<h4>第9步：把混合系数完整相乘</h4>回忆：混合系数是 \(g_{	hetaarphi}=X_	heta\cdot X_arphi\)。<div class="eq">$$g_{\theta\varphi}=-R^2\cos\theta\sin\theta\cos\varphi\sin\varphi+R^2\cos\theta\sin\theta\sin\varphi\cos\varphi+0=0$$</div>两项逐项抵消，经向与纬向正交。
<h4>第10步：组装度量矩阵</h4>回忆：二维线元的矩阵形式是 \(g_{ij}du^idu^j\)。<div class="eq">$$(g_{ij})=\begin{pmatrix}R^2&0\\0&R^2\sin^2\theta\end{pmatrix}$$</div>矩阵对角项和混合项都已由偏导点积直接算出。
<h4>第11步：写成原题所要的第一基本形式</h4>回忆：矩阵的两个对角项分别乘 \(d	heta^2\) 和 \(darphi^2\)。<div class="eq">$$ds^2=R^2d\theta^2+R^2\sin^2\theta\,d\varphi^2=R^2(d\theta^2+\sin^2\theta\,d\varphi^2)$$</div>这就是球面 \(S^2(R)\) 的诱导度量。
<h4>第12步：解释极点处的坐标退化</h4>回忆：球极 \(	heta=0,\pi\) 处所有 \(arphi\) 表示同一点。<div class="eq">$$\sin\theta=0\quad\Longrightarrow\quad X_\varphi=0,\qquad \det(g_{ij})=R^4\sin^2\theta=0$$</div>这里退化的是球坐标，不是球面本身的黎曼度量。
<div class="keybox">$$\boxed{ds^2_{S^2(R)}=R^2(d\theta^2+\sin^2\theta\,d\varphi^2)}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>对参数化分别求导并点乘；纬线半径 \(R\sin	heta\) 产生 \(\sin^2	heta\) 系数。</div>`,
    1: L`<h4>第1步：写出环面的原题参数化</h4>回忆：令大半径 \(R\) 大于管半径 \(r>0\)，使标准旋转环面没有自交。<div class="eq">$$X(\theta,\varphi)=((R+r\cos\theta)\cos\varphi,(R+r\cos\theta)\sin\varphi,r\sin\theta)$$</div>下面只使用此参数化和欧氏内积计算诱导度量。
<h4>第2步：记一个便于求导的中间量</h4>回忆：固定 \(	heta\) 时绕中心轴旋转的圆半径是前两坐标的共同因子。<div class="eq">$$a(\theta):=R+r\cos\theta,\qquad a^{\prime}(\theta)=-r\sin\theta,\qquad a(\theta)>0$$</div>记号 \(a\) 减少重复书写，也说明环面的纬向半径随 \(	heta\) 变化。
<h4>第3步：对管角求第一个切向量</h4>回忆：乘积求导中 \(arphi\) 固定，故只对 \(a(	heta)\) 和 \(r\sin	heta\) 求导。<div class="eq">$$X_\theta=(-r\sin\theta\cos\varphi,-r\sin\theta\sin\varphi,r\cos\theta)$$</div>这是沿小圆截面移动的切向量。
<h4>第4步：对绕轴角求第二个切向量</h4>回忆：\(	heta\) 固定时 \(a(	heta)\) 为常数。<div class="eq">$$X_\varphi=(-a\sin\varphi,a\cos\varphi,0)$$</div>这是沿大圆方向转动的切向量。
<h4>第5步：计算管角方向的点积</h4>回忆：拉回度量分量为切向量的欧氏点积。<div class="eq">$$g_{\theta\theta}=|X_\theta|^2=r^2\sin^2\theta\cos^2\varphi+r^2\sin^2\theta\sin^2\varphi+r^2\cos^2\theta$$</div>三项分别是三维切向量三个分量的平方。
<h4>第6步：把第一个系数化简</h4>回忆：两次使用 \(\sin^2+\cos^2=1\)。<div class="eq">$$g_{\theta\theta}=r^2\sin^2\theta(\cos^2\varphi+\sin^2\varphi)+r^2\cos^2\theta=r^2$$</div>沿管截面移动的长度倍率始终是 \(r\)。
<h4>第7步：计算绕轴方向的点积</h4>回忆：第4步的切向量只有前两个分量非零。<div class="eq">$$g_{\varphi\varphi}=|X_\varphi|^2=a^2\sin^2\varphi+a^2\cos^2\varphi=a^2$$</div>绕轴一弧度的实际长度由所在圆的半径 \(a\) 决定。
<h4>第8步：把中间量代回第二个系数</h4>回忆：第2步定义 \(a=R+r\cos	heta\)。<div class="eq">$$g_{\varphi\varphi}=(R+r\cos\theta)^2$$</div>外侧 \(	heta=0\) 半径为 \(R+r\)，内侧 \(	heta=\pi\) 半径为 \(R-r\)。
<h4>第9步：逐项计算交叉点积</h4>回忆：\(g_{	hetaarphi}=X_	heta\cdot X_arphi\)。<div class="eq">$$g_{\theta\varphi}=ar\sin\theta\cos\varphi\sin\varphi-ar\sin\theta\sin\varphi\cos\varphi+0=0$$</div>沿管截面和绕轴两个方向互相正交。
<h4>第10步：把三个分量放入线元</h4>回忆：二维线元一般为 \(g_{	heta	heta}d	heta^2+2g_{	hetaarphi}d	heta\,darphi+g_{arphiarphi}darphi^2\)。<div class="eq">$$ds^2=r^2d\theta^2+2(0)d\theta\,d\varphi+(R+r\cos\theta)^2d\varphi^2$$</div>交叉项已经明确计算为零。
<h4>第11步：检验拉回矩阵正定</h4>回忆：对角矩阵正定当且仅当对角项都正。<div class="eq">$$\det(g_{ij})=r^2(R+r\cos\theta)^2>0\qquad(R>r>0)$$</div>在标准环面的参数范围内，该参数化是浸入，诱导式确实是黎曼度量。
<h4>第12步：读出原题的最终公式</h4>回忆：第10步的式子已将两个方向的长度倍率分别放回线元。<div class="eq">$$ds^2=r^2d\theta^2+(R+r\cos\theta)^2d\varphi^2$$</div>管角方向恒定，绕轴方向随内外侧位置改变。
<div class="keybox">$$\boxed{ds^2_{\mathrm{torus}}=r^2d\theta^2+(R+r\cos\theta)^2d\varphi^2}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>小圆方向的倍率是 \(r\)，绕大轴的倍率是当下到轴的距离 \(R+r\cos	heta\)。</div>`,
    2: L`<h4>第1步：把原题写成系数条件</h4>回忆：曲面参数化 \(X(u,v)\) 的第一基本形式由两个切向量的内积给出。<div class="eq">$$ds^2=E\,du^2+2F\,du\,dv+G\,dv^2,\quad E=X_u\cdot X_u,\ F=X_u\cdot X_v,\ G=X_v\cdot X_v$$</div>共形参数化要让 \(F=0\) 且 \(E=G>0\)。
<h4>第2步：把等系数化为指数形式</h4>回忆：任一正的光滑函数 \(E\) 可唯一写成 \(e^{2\lambda}\)，其中 \(\lambda=rac12\log E\)。<div class="eq">$$F=0,\ E=G>0\quad\Longrightarrow\quad ds^2=E(du^2+dv^2)=e^{2\lambda}(du^2+dv^2)$$</div>这给出原题所说的共形平坦形式。
<h4>第3步：取一个能算到最后的具体参数化</h4>回忆：平面是 \(\mathbb R^3\) 的曲面；取极坐标型局部映射以展示非恒定共形因子。<div class="eq">$$X(u,v)=(e^u\cos v,e^u\sin v,0)$$</div>它在任意足够窄的 \(v\) 区间上是一张局部参数图。
<h4>第4步：对第一个参数求导</h4>回忆：\(\partial_u e^u=e^u\)，且 \(v\) 在此固定。<div class="eq">$$X_u=(e^u\cos v,e^u\sin v,0)$$</div>参数 \(u\) 的增量对应径向移动。
<h4>第5步：对第二个参数求导</h4>回忆：\(\partial_v\cos v=-\sin v\)，\(\partial_v\sin v=\cos v\)。<div class="eq">$$X_v=(-e^u\sin v,e^u\cos v,0)$$</div>参数 \(v\) 的增量对应转向移动。
<h4>第6步：算出第一个平方长度</h4>回忆：第一个系数 \(E=|X_u|^2\)。<div class="eq">$$E=e^{2u}\cos^2v+e^{2u}\sin^2v=e^{2u}$$</div>利用平方和为一，径向长度倍率为 \(e^u\)。
<h4>第7步：算出第二个平方长度</h4>回忆：第三个系数 \(G=|X_v|^2\)。<div class="eq">$$G=e^{2u}\sin^2v+e^{2u}\cos^2v=e^{2u}$$</div>绕向长度倍率也为 \(e^u\)，与第一个方向相同。
<h4>第8步：算出两个方向的交叉项</h4>回忆：混合系数 \(F=X_u\cdot X_v\)。<div class="eq">$$F=-e^{2u}\cos v\sin v+e^{2u}\sin v\cos v+0=0$$</div>这两个切向量确实正交。
<h4>第9步：把三项代回第一基本形式</h4>回忆：第1步的一般式中交叉项有因子 \(2F\)。<div class="eq">$$ds^2=e^{2u}du^2+2(0)du\,dv+e^{2u}dv^2=e^{2u}(du^2+dv^2)$$</div>具体例子中的共形函数为 \(\lambda(u,v)=u\)。
<h4>第10步：直接核对角度保持</h4>回忆：角的余弦等于内积除以两边长度，公共正因子会抵消。<div class="eq">$$\cos\angle_g(a,b)=\frac{e^{2u}(a\cdot b)}{e^u|a|\,e^u|b|}=\frac{a\cdot b}{|a|\,|b|}$$</div>尽管长度倍率随 \(u\) 变化，夹角与参数平面中的欧氏夹角相同。
<h4>第11步：说明这个例子的适用边界</h4>回忆：\(v\) 增加 \(2\pi\) 会回到同一个点，因此该映射在整个参数平面不是一一对应。<div class="eq">$$X(u,v+2\pi)=X(u,v),\qquad |X_u\times X_v|=e^{2u}>0$$</div>它始终是浸入，在局部参数片上足以说明共形诱导度量。
<div class="keybox">$$\boxed{X(u,v)=(e^u\cos v,e^u\sin v,0)\quad\Longrightarrow\quad ds^2=e^{2u}(du^2+dv^2)}$$</div>
<div class="memobox"><strong>一句话记忆：</strong>共形参数化就是两条坐标方向正交且等长；这时度量只差一个位置相关的共同倍率。</div>`
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
    0: L`<h4>第1步：写出标准坐标和向量场</h4><p>回忆：欧氏空间的全局坐标基 \(\partial_i\) 在每点都可自然比较。</p><p>令 \(X=X^i\partial_i\)、\(Y=Y^j\partial_j\)，其中分量是光滑函数。</p><p>因此，计算可逐分量进行。</p><h4>第2步：定义普通方向导数</h4><p>回忆：方向导数 \(X(Y^j)=X^i\partial_iY^j\)。</p><p><div class="eq">$$\nabla_XY:=X^i(\partial_iY^j)\partial_j$$</div></p><p>因此，这正是欧氏标准联络。</p><h4>第3步：检查第一变量线性</h4><p>回忆：对函数乘方向场有 \((fX)(Y^j)=fX(Y^j)\)。</p><p><div class="eq">$$\nabla_{fX}Y=fX^i\partial_iY^j\partial_j=f\nabla_XY$$</div></p><p>因此，满足联络第一公理。</p><h4>第4步：检查第二变量 Leibniz 法则</h4><p>回忆：对每个分量使用普通乘积法则。</p><p><div class="eq">$$\nabla_X(fY)=X^i\partial_i(fY^j)\partial_j=f\nabla_XY+(Xf)Y$$</div></p><p>因此，满足联络第二公理。</p><h4>第5步：直接计算坐标基的协变导数</h4><p>回忆：坐标基 \(\partial_j\) 的第 \(k\) 个分量是常数 \(\delta^k_j\)。</p><p><div class="eq">$$\nabla_{\partial_i}\partial_j=(\partial_i\delta^k_j)\partial_k=0$$</div></p><p>因此，所有坐标基都相互平行。</p><h4>第6步：读出 Christoffel 符号</h4><p>回忆：定义 \(
abla_{\partial_i}\partial_j=\Gamma^k_{ij}\partial_k\)。</p><p><div class="eq">$$\Gamma^k_{ij}=0\quad\text{对所有 }i,j,k$$</div></p><p>因此，联络系数全为零。</p><h4>第7步：代入一个具体向量场</h4><p>回忆：上一公式要求先对每个分量求偏导。</p><p>在 \(\mathbb R^2\) 中取 \(X=\partial_x+y\partial_y\)、\(Y=x^2\partial_x+xy\partial_y\)，则 <div class="eq">$$X(x^2)=2x,\quad X(xy)=y+xy$$</div>因此 \(
abla_XY=2x\partial_x+(y+xy)\partial_y\)。</p><p>因此，例子显示只有分量变化会贡献导数。</p><h4>第8步：把所选向量场的两个分量逐一代入</h4>
例中 \(X=\partial_x+y\partial_y\)、\(Y=x^2\partial_x+xy\partial_y\)。分开算 <div class="eq">$$X(Y^x)=1\cdot\partial_x(x^2)+y\cdot\partial_y(x^2)=2x+0=2x,$$</div><div class="eq">$$X(Y^y)=1\cdot\partial_x(xy)+y\cdot\partial_y(xy)=y+xy.$$</div>这两项正是 \(\nabla_XY\) 的 \(x,y\) 分量。
<h4>第9步：验证曲率为零</h4><p>回忆：曲率是两个协变导数的交换子减 Lie 括号项。</p><p>坐标基中 \(\Gamma=0\) 且 \([\partial_i,\partial_j]=0\)，故 \(R(\partial_i,\partial_j)\partial_k=0\)。</p><p>因此，欧氏标准联络平坦。</p><div class="keybox">$$\boxed{\nabla_XY=X^i\partial_iY^j\partial_j,\quad\Gamma^k_{ij}=0}$$</div><div class="memobox"><strong>一句话记忆：</strong>在固定的直角坐标架里，只需对向量的分量做普通方向导数。</div>`,
    1: L`<h4>第1步：说明要投影到哪里</h4><p>回忆：曲面 \(M\subset\mathbb R^3\) 每点有切平面 \(T_pM\) 和单位法向 \(N(p)\)。</p><p>把环境空间导数 \(D_XY\) 分成切向和法向，定义曲面上的导数为切向部分。</p><p>因此，目标是写出可计算的投影。</p><h4>第2步：写正交投影公式</h4><p>回忆：任意 \(a\in\mathbb R^3\) 的切向投影为 \(a-\langle a,Nangle N\)。</p><p><div class="eq">$$\nabla_XY=(D_XY)^T=D_XY-\langle D_XY,N\rangle N$$</div></p><p>因此，输出确实切于曲面。</p><h4>第3步：用切向条件改写法向量</h4><p>回忆：因为 \(\langle Y,Nangle=0\)，沿 \(X\) 求导为零。</p><p><div class="eq">$$0=X\langle Y,N\rangle=\langle D_XY,N\rangle+\langle Y,D_XN\rangle$$</div></p><p>因此，法向系数也可写成 \(-\langle Y,D_XNangle\)。</p><h4>第4步：检查切向性</h4><p>回忆：单位法向满足 \(\langle N,Nangle=1\)。</p><p><div class="eq">$$\langle\nabla_XY,N\rangle=\langle D_XY,N\rangle-\langle D_XY,N\rangle\langle N,N\rangle=0$$</div></p><p>因此，投影结果在 \(T_pM\) 内。</p><h4>第5步：检查联络乘积法则</h4><p>回忆：环境导数满足 \(D_X(fY)=fD_XY+(Xf)Y\)。</p><p>由于 \(Y\) 已切向，投影后 <div class="eq">$$\nabla_X(fY)=f(D_XY)^T+(Xf)Y=f\nabla_XY+(Xf)Y$$</div></p><p>因此，诱导运算真是联络。</p><h4>第6步：检查无挠性</h4><p>回忆：欧氏导数满足 \(D_XY-D_YX=[X,Y]\)。</p><p>把等式两边取切向部分；\([X,Y]\) 仍切于曲面，所以 <div class="eq">$$\nabla_XY-\nabla_YX=[X,Y]$$</div></p><p>因此，诱导联络无挠。</p><h4>第7步：检查度量相容性</h4><p>回忆：诱导度量是欧氏内积在切空间上的限制。</p><p><div class="eq">$$X\langle Y,Z\rangle=\langle D_XY,Z\rangle+\langle Y,D_XZ\rangle=\langle\nabla_XY,Z\rangle+\langle Y,\nabla_XZ\rangle$$</div></p><p>因此，法向分量与切向量正交，故度量相容。</p><h4>第8步：在单位球上做一次投影</h4><p>回忆：单位球的外法向是 \(N(p)=p\)。</p><p>取球面曲线 \(\gamma\) 与切向场 \(Y\)，则 <div class="eq">$$D_tY=\nabla_{\dot\gamma}Y+\langle D_tY,\gamma\rangle\gamma,\quad\langle D_tY,\gamma\rangle=-\langle Y,\dot\gamma\rangle$$</div></p><p>因此，公式具体化为 \(
abla_{\dot\gamma}Y=D_tY+\langle Y,\dot\gammaangle\gamma\)。</p><h4>第9步：用球面坐标逐项求一个投影</h4>
单位球取 \(F(\theta,\phi)=(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)\)。令 \(Y=F_\theta\)、方向为 \(F_\phi\)，则 <div class="eq">$$D_{\partial_\phi}Y=F_{\theta\phi}=(-\cos\theta\sin\phi,\cos\theta\cos\phi,0)=\cot\theta\,F_\phi.$$</div>此向量已切向，故投影不改变它。
<h4>第10步：在指定点代入角度</h4>
取 \(\theta=\pi/3,\phi=0\)。此时 \(\cot(\pi/3)=1/\sqrt3\)，故 <div class="eq">$$\nabla_{\partial_\phi}\partial_\theta=\frac1{\sqrt3}\partial_\phi.$$</div>用单位纬向量 \(e_\phi=(\sin\theta)^{-1}\partial_\phi\) 表示，则同一结果为 \(\frac12e_\phi\)。
<div class="keybox">$$\boxed{\nabla_XY=D_XY-\langle D_XY,N\rangle N}$$</div><div class="memobox"><strong>一句话记忆：</strong>先在环境空间求导，再扔掉垂直于曲面的那一部分。</div>`,
    2: L`<h4>第1步：从 Lie 代数开始</h4><p>回忆：Lie 群单位元处的切空间 \(\mathfrak g=T_eG\) 是 Lie 代数。</p><p>给定双线性映射 \(lpha:\mathfrak g	imes\mathfrak g	o\mathfrak g\)。</p><p>因此，它将决定左不变向量场之间的导数。</p><h4>第2步：把代数元素延成左不变场</h4><p>回忆：左平移 \(L_g(h)=gh\) 的微分把 \(T_eG\) 送到 \(T_gG\)。</p><p><div class="eq">$$X^L(g)=(dL_g)_eX$$</div></p><p>因此，每个代数元素给出一个全局向量场。</p><h4>第3步：规定左不变场的联络</h4><p>回忆：双线性 \(lpha\) 给每对 \(X,Y\) 一个代数元素。</p><p><div class="eq">$$\nabla_{X^L}Y^L=(\alpha(X,Y))^L$$</div></p><p>因此，左不变场上的导数已经指定。</p><h4>第4步：扩展到任意局部向量场</h4><p>回忆：左不变场构成全局标架，任意场可写为 \(X=X^aE_a\)、\(Y=Y^bE_b\)。</p><p><div class="eq">$$\nabla_XY=X^aE_a(Y^b)E_b+X^aY^b\alpha(E_a,E_b)^L$$</div></p><p>因此，第一项来自 Leibniz 法则，第二项来自 \(lpha\)。</p><h4>第5步：检查第一变量线性</h4><p>回忆：上式的每一项都线性依赖 \(X^a\)。</p><p><div class="eq">$$\nabla_{fX}Y=fX^aE_a(Y^b)E_b+fX^aY^b\alpha(E_a,E_b)^L=f\nabla_XY$$</div></p><p>因此，第一条公理成立。</p><h4>第6步：检查第二变量乘积法则</h4><p>回忆：左不变基上的方向导数满足 \(E_a(fY^b)=(E_af)Y^b+fE_aY^b\)。</p><p><div class="eq">$$\nabla_X(fY)=f\nabla_XY+(Xf)Y$$</div></p><p>因此，第二条公理成立。</p><h4>第7步：验证左平移不变</h4><p>回忆：左不变基在任意左平移下仍是自身，\(lpha\) 的系数是常数。</p><p>把左平移同时作用在 \(X,Y,
abla_XY\) 上，上述分量公式的形式不变。</p><p>因此，得到左不变联络。</p><h4>第8步：算一个特例的挠率</h4><p>回忆：挠率是 \(T(X,Y)=
abla_XY-
abla_YX-[X,Y]\)。</p><p>若取 \(lpha=0\)，则对左不变场 <div class="eq">$$T(X^L,Y^L)=-[X,Y]^L$$</div>故非交换 Lie 群上的此联络一般有挠。</p><p>因此，左不变不意味着无挠。</p><h4>第9步：把结构常数代进非交换例子</h4>
取 \(SO(3)\) 的一组基 \(E_1,E_2,E_3\)，规定 \([E_1,E_2]=E_3\)。若 \(\alpha=0\)，则 <div class="eq">$$T(E_1^L,E_2^L)=0-0-[E_1,E_2]^L=-E_3^L\ne0.$$</div>这把“零系数左不变联络可有挠”算成了具体分量。
<h4>第10步：代入无挠的另一选择</h4>
若改取 \(\alpha(X,Y)=\frac12[X,Y]\)，则 <div class="eq">$$T(E_1^L,E_2^L)=\tfrac12E_3^L-(-\tfrac12E_3^L)-E_3^L=0.$$</div>两个联络在同一 Lie 群上说明挠率取决于 \(\alpha\) 的反对称部分。
<h4>第11步：读出 Levi-Civita 的一个特殊选择</h4><p>回忆：双不变度量下，左不变场的 Levi-Civita 联络满足 \(
abla_{X^L}Y^L=	frac12[X,Y]^L\)。</p><p>此时 \(lpha(X,Y)=	frac12[X,Y]\)，挠率为 \(	frac12[X,Y]-	frac12[Y,X]-[X,Y]=0\)。</p><p>因此，同一框架可包含典范无挠联络。</p><div class="keybox">$$\boxed{\nabla_{X^L}Y^L=\alpha(X,Y)^L}$$</div><div class="memobox"><strong>一句话记忆：</strong>左不变标架把群上的联络浓缩成单位元处的一张双线性表。</div>`
  },
  "r18": {
    0: L`<h4>第1步：写出欧氏度量分量</h4><p>回忆：标准直角坐标中的内积为 \(g_{ij}=\delta_{ij}\)。</p><p><div class="eq">$$g=\sum_{i=1}^n dx^i\otimes dx^i$$</div></p><p>因此，所有度量分量都是常数。</p><h4>第2步：求度量偏导</h4><p>回忆：常数函数的偏导为零。</p><p><div class="eq">$$\partial_k g_{ij}=\partial_k\delta_{ij}=0$$</div></p><p>因此，Christoffel 公式的三类导数都消失。</p><h4>第3步：求逆度量</h4><p>回忆：单位矩阵的逆仍是单位矩阵。</p><p><div class="eq">$$g^{ij}=\delta^{ij}$$</div></p><p>因此，可直接代入联络公式。</p><h4>第4步：代入 Koszul 坐标公式</h4><p>回忆：Levi-Civita 系数为 \(\Gamma^k_{ij}=	frac12g^{k\ell}(\partial_i g_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})\)。</p><p><div class="eq">$$\Gamma^k_{ij}=\tfrac12\delta^{k\ell}(0+0-0)=0$$</div></p><p>因此，全部系数为零。</p><h4>第5步：计算一般向量场的导数</h4><p>回忆：局部式为 \((
abla_XY)^k=X^i\partial_iY^k+\Gamma^k_{ij}X^iY^j\)。</p><p><div class="eq">$$\nabla_XY=X^i\partial_iY^k\partial_k$$</div></p><p>因此，这正是普通方向导数。</p><h4>第6步：代入一组非恒定向量分量</h4>
在 \(\mathbb R^2\) 取 \(X=\partial_x\)、\(Y=x^2\partial_x+xy\partial_y\)。因全部 \(\Gamma=0\)，<div class="eq">$$\nabla_XY=(\partial_x x^2)\partial_x+(\partial_x xy)\partial_y=2x\partial_x+y\partial_y.$$</div>在 \((x,y)=(2,3)\) 处得到 \(4\partial_x+3\partial_y\)。
<h4>第7步：核对无挠</h4><p>回忆：坐标基对易，且 \(\Gamma^k_{ij}=\Gamma^k_{ji}=0\)。</p><p><div class="eq">$$T^k{}_{ij}=\Gamma^k_{ij}-\Gamma^k_{ji}=0$$</div></p><p>因此，标准联络无挠。</p><h4>第8步：核对度量相容</h4><p>回忆：坐标中的度量导数公式是 \(
abla_k g_{ij}=\partial_k g_{ij}-\Gamma^\ell_{ki}g_{\ell j}-\Gamma^\ell_{kj}g_{i\ell}\)。</p><p><div class="eq">$$\nabla_k g_{ij}=0-0-0=0$$</div></p><p>因此，标准联络相容于欧氏度量。</p><h4>第9步：利用唯一性收束</h4><p>回忆：无挠且度量相容的联络只有一个。</p><p>上两步验证了普通导数同时满足这两个条件，故它就是欧氏度量的 Levi-Civita 联络。</p><p>因此，两种计算方法相互核对。</p><div class="keybox">$$\boxed{\nabla_XY=X^i\partial_iY^k\partial_k,\quad\Gamma^k_{ij}=0}$$</div><div class="memobox"><strong>一句话记忆：</strong>直角坐标中的度量不变，所以 Levi-Civita 修正项全为零。</div>`,
    1: L`<h4>第1步：参数化单位球</h4><p>回忆：球坐标用余纬 \(0<	heta<\pi\) 和经度 \(\phi\)。</p><p><div class="eq">$$F(\theta,\phi)=(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)$$</div></p><p>因此，在极点外可用这张坐标图。</p><h4>第2步：计算两个坐标切向量</h4><p>回忆：切向量由参数化对坐标求偏导。</p><p><div class="eq">$$F_\theta=(\cos\theta\cos\phi,\cos\theta\sin\phi,-\sin\theta),\quad F_\phi=(-\sin\theta\sin\phi,\sin\theta\cos\phi,0)$$</div></p><p>因此，接着计算它们的内积。</p><h4>第3步：计算诱导度量</h4><p>回忆：诱导度量的分量是 \(g_{ij}=\langle F_i,F_jangle\)。</p><p><div class="eq">$$g_{\theta\theta}=1,\quad g_{\theta\phi}=0,\quad g_{\phi\phi}=\sin^2\theta$$</div></p><p>因此，得到 \(ds^2=d	heta^2+\sin^2	heta\,d\phi^2\)。</p><h4>第4步：求逆矩阵和非零偏导</h4><p>回忆：对角矩阵逐项取倒数。</p><p><div class="eq">$$g^{\theta\theta}=1,\quad g^{\phi\phi}=\sin^{-2}\theta,\quad\partial_\theta g_{\phi\phi}=2\sin\theta\cos\theta$$</div></p><p>因此，只有 \(g_{\phi\phi}\) 随坐标变化。</p><h4>第5步：算 \(\Gamma^	heta_{\phi\phi}\)</h4><p>回忆：Levi-Civita 公式中仅 \(-\partial_	heta g_{\phi\phi}\) 留下。</p><p><div class="eq">$$\Gamma^\theta_{\phi\phi}=-\tfrac12g^{\theta\theta}\partial_\theta g_{\phi\phi}=-\sin\theta\cos\theta$$</div></p><p>因此，得到第一个非零系数。</p><h4>第6步：算 \(\Gamma^\phi_{	heta\phi}\)</h4><p>回忆：对称下标允许先算这一项再复制到 \(\Gamma^\phi_{\phi	heta}\)。</p><p><div class="eq">$$\Gamma^\phi_{\theta\phi}=\tfrac12g^{\phi\phi}\partial_\theta g_{\phi\phi}=\frac{\cos\theta}{\sin\theta}=\cot\theta$$</div></p><p>因此，第二个非零系数已得。</p><h4>第7步：列出对称项与其余零项</h4><p>回忆：Levi-Civita 联络无挠，故 \(\Gamma^k_{ij}=\Gamma^k_{ji}\)。</p><p><div class="eq">$$\Gamma^\phi_{\phi\theta}=\cot\theta,\qquad\Gamma^\theta_{\theta\theta}=\Gamma^\theta_{\theta\phi}=\Gamma^\phi_{\theta\theta}=\Gamma^\phi_{\phi\phi}=0$$</div></p><p>因此，完整列出局部系数。</p><h4>第8步：在一条纬线上代入具体角度</h4>
令 \(\theta=\pi/3\)，则 \(\sin\theta=\sqrt3/2\)、\(\cos\theta=1/2\)。逐项代入：<div class="eq">$$\Gamma^\theta_{\phi\phi}=-(\sqrt3/2)(1/2)=-\sqrt3/4,\qquad\Gamma^\phi_{\theta\phi}=(1/2)/(\sqrt3/2)=1/\sqrt3.$$</div>两者量纲和符号都与一般公式一致。
<h4>第9步：用嵌入投影核对</h4><p>回忆：球面的单位法向是位置向量 \(F\)。</p><p>对 \(F_{\phi\phi}\) 取切向投影，其沿 \(F_	heta\) 的系数为 <div class="eq">$$\frac{\langle F_{\phi\phi},F_\theta\rangle}{|F_\theta|^2}=-\sin\theta\cos\theta$$</div>与坐标公式相同。</p><p>因此，诱导联络和 Levi-Civita 公式一致。</p><h4>第10步：说明极点处的表象</h4><p>回忆：坐标式中的 \(\cot	heta\) 在极点发散，因为 \(\phi\) 在极点失效。</p><p>球面联络本身在极点仍光滑，只须换用另一张坐标图。</p><p>因此，系数的奇性不是几何奇性。</p><div class="keybox">$$\boxed{\Gamma^\theta_{\phi\phi}=-\sin\theta\cos\theta,\quad\Gamma^\phi_{\theta\phi}=\Gamma^\phi_{\phi\theta}=\cot\theta}$$</div><div class="memobox"><strong>一句话记忆：</strong>球面弯曲反映在角向度量 \(\sin^2	heta\) 的导数中。</div>`,
    2: L`<h4>第1步：写出上半平面的度量</h4><p>回忆：取 \(y>0\)，度量为 \(g=y^{-2}(dx^2+dy^2)\)。</p><p><div class="eq">$$g_{xx}=g_{yy}=y^{-2},\quad g_{xy}=0$$</div></p><p>因此，度量只依赖高度 \(y\)。</p><h4>第2步：求逆度量</h4><p>回忆：对角矩阵的逆逐项倒置。</p><p><div class="eq">$$g^{xx}=g^{yy}=y^2,\quad g^{xy}=0$$</div></p><p>因此，接下来乘以度量偏导。</p><h4>第3步：求唯一非零的度量偏导</h4><p>回忆：\(\partial_y(y^{-2})=-2y^{-3}\)，而 \(\partial_xg_{ij}=0\)。</p><p><div class="eq">$$\partial_y g_{xx}=\partial_y g_{yy}=-2y^{-3}$$</div></p><p>因此，只有两个偏导可能进入公式。</p><h4>第4步：计算 \(\Gamma^x_{xy}\)</h4><p>回忆：套用 Levi-Civita 公式并令 \((k,i,j)=(x,x,y)\)。</p><p><div class="eq">$$\Gamma^x_{xy}=\tfrac12g^{xx}\partial_y g_{xx}=\tfrac12y^2(-2y^{-3})=-1/y$$</div></p><p>因此，由下标对称性还有 \(\Gamma^x_{yx}=-1/y\)。</p><h4>第5步：计算 \(\Gamma^y_{xx}\)</h4><p>回忆：这次公式中的度量导数带负号。</p><p><div class="eq">$$\Gamma^y_{xx}=-\tfrac12g^{yy}\partial_y g_{xx}=-\tfrac12y^2(-2y^{-3})=+1/y$$</div></p><p>因此，原数据把这一项写成负号，现已纠正。</p><h4>第6步：计算 \(\Gamma^y_{yy}\)</h4><p>回忆：三个偏导中两项相加再减一项，净留一项。</p><p><div class="eq">$$\Gamma^y_{yy}=\tfrac12g^{yy}\partial_y g_{yy}=\tfrac12y^2(-2y^{-3})=-1/y$$</div></p><p>因此，这一项与 \(\Gamma^y_{xx}\) 异号。</p><h4>第7步：核对其余分量为零</h4><p>回忆：涉及 \(\partial_xg\)、\(g_{xy}\) 或逆度量非对角元的项都为零。</p><p><div class="eq">$$\Gamma^x_{xx}=\Gamma^x_{yy}=\Gamma^y_{xy}=\Gamma^y_{yx}=0$$</div></p><p>因此，非零列表已完整。</p><h4>第8步：在高度二逐项代入</h4>
取 \(y=2\)。由于 \(1/y=1/2\)，有 <div class="eq">$$\Gamma^x_{xy}=\Gamma^x_{yx}=-1/2,\quad\Gamma^y_{xx}=+1/2,\quad\Gamma^y_{yy}=-1/2.$$</div>特别地 \(\nabla_{\partial_x}\partial_x=\frac12\partial_y\)，验证 \(\Gamma^y_{xx}\) 是正号。
<h4>第9步：用曲率再查一次双曲号数</h4>
按 \(R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z\)，<div class="eq">$$R^x{}_{yxy}=-\partial_y\Gamma^x_{xy}+\Gamma^y_{yy}\Gamma^x_{xy}-\Gamma^x_{xy}\Gamma^x_{yx}=-y^{-2}+y^{-2}-y^{-2}=-y^{-2}.$$</div>分子 \(g_{xx}R^x{}_{yxy}=-y^{-4}\)，面积平方 \(y^{-4}\)，故 \(K=-1\)。
<h4>第10步：写出测地线方程作符号核查</h4><p>回忆：测地线满足 \(\ddot x^k+\Gamma^k_{ij}\dot x^i\dot x^j=0\)。</p><p><div class="eq">$$\ddot x-\frac{2\dot x\dot y}{y}=0,\qquad\ddot y+\frac{\dot x^2-\dot y^2}{y}=0$$</div></p><p>因此，这些方程与上半平面的竖直线和半圆测地线相容。</p><h4>第11步：集中列出纠正后的答案</h4><p>回忆：原题把三个量用同一个等号连起来会造成符号错误。</p><p><div class="eq">$$\Gamma^x_{xy}=\Gamma^x_{yx}=-1/y,\quad\Gamma^y_{xx}=+1/y,\quad\Gamma^y_{yy}=-1/y$$</div></p><p>因此，各项符号由逐项代入确定。</p><div class="keybox">$$\boxed{\Gamma^x_{xy}=\Gamma^x_{yx}=-\frac1y,\quad\Gamma^y_{xx}=\frac1y,\quad\Gamma^y_{yy}=-\frac1y}$$</div><div class="memobox"><strong>一句话记忆：</strong>上半平面的高度导数都为负，但 Christoffel 公式前面的符号会改变结果。</div>`
  },
  "r19": {
    0: L`<h4>第1步：选定纬线和局部标架</h4><p>回忆：单位球用余纬 \(	heta\)，固定 \(	heta=	heta_0\) 的圆是纬线。</p><p>在 \(0<	heta_0<\pi\) 上取单位切向标架 \(e_	heta=\partial_	heta\)、\(e_\phi=(\sin	heta)^{-1}\partial_\phi\)。</p><p>因此，沿纬线两基向量都单位且正交。</p><h4>第2步：计算标架沿经度的转动</h4><p>回忆：球面联络满足 \(\Gamma^	heta_{\phi\phi}=-\sin	heta\cos	heta\)、\(\Gamma^\phi_{\phi	heta}=\cot	heta\)。</p><p><div class="eq">$$\nabla_{\partial_\phi}e_\theta=\cos\theta_0e_\phi,\qquad\nabla_{\partial_\phi}e_\phi=-\cos\theta_0e_\theta$$</div></p><p>因此，标架本身随 \(\phi\) 转动。</p><h4>第3步：写平行向量的分量</h4><p>回忆：设 \(V=a(\phi)e_	heta+b(\phi)e_\phi\)。</p><p>把乘积法则用到 \(
abla_{\partial_\phi}V=0\)，分别收集 \(e_	heta,e_\phi\) 系数。</p><p>因此，得到两个一阶方程。</p><h4>第4步：列出分量方程</h4><p>回忆：上一标架导数决定耦合项的符号。</p><p><div class="eq">$$a'-b\\cos\\theta_0=0,\\qquad b'+a\\cos\\theta_0=0$$</div></p><p>因此，向量分量以恒定角速度旋转。</p><h4>第5步：解这个旋转方程</h4><p>回忆：令 \(z=a+ib\)，则 \(z'=-i\cos\theta_0z\)。</p><p><div class="eq">$$z(\\phi)=e^{-i\\phi\\cos\\theta_0}z(0)$$</div></p><p>因此，走完 \(2\pi\) 后分量旋转 \(-2\pi\cos\theta_0\)。</p><h4>第6步：把角度化为球冠面积</h4><p>回忆：单位球曲率 \(K=1\)，面积元 \(dA=\sin	heta\,d	heta d\phi\)。</p><p><div class="eq">$$\int_{\text{北球冠}}K\,dA=\int_0^{2\pi}\!\int_0^{\theta_0}\sin\theta\,d\theta d\phi=2\pi(1-\cos\theta_0)$$</div></p><p>因此，球冠总曲率等于该数。</p><h4>第7步：比较两个旋转角代表</h4><p>回忆：方向角只按 \(2\pi\) 取模。</p><p><div class="eq">$$-2\pi\cos\theta_0\equiv2\pi(1-\cos\theta_0)\pmod{2\pi}$$</div></p><p>因此，平行移动的和乐角与球冠总曲率一致。</p><h4>第8步：取余纬六十度作数值核查</h4>
令 \(\theta_0=\pi/3\)，则 \(\cos\theta_0=1/2\)。ODE 解给 <div class="eq">$$z(2\pi)=e^{-i\pi}z(0)=-z(0).$$</div>北球冠积分是 \(2\pi(1-1/2)=\pi\)，旋转半圈与面积公式一致。
<h4>第9步：说明赤道与小圆的区别</h4><p>回忆：赤道 \(	heta_0=\pi/2\) 本身是测地线。</p><p>此时 \(\cos	heta_0=0\)，平行移动一圈返回原方向；一般纬线则有非平凡和乐。</p><p>因此，旋转来自闭路围住的曲率，而不是向量长度变化。</p><div class="keybox">$$\boxed{\Delta\psi\equiv\int_{\text{球冠}}K\,dA=2\pi(1-\cos\theta_0)\pmod{2\pi}}$$</div><div class="memobox"><strong>一句话记忆：</strong>沿纬线绕一圈，箭头转过的角度等于所围球冠的总曲率，按整圈取模。</div>`,
    1: L`<h4>第1步：确定地理纬度</h4><p>回忆：记地理纬度为 \(\lambda\)，余纬为 \(	heta=\pi/2-\lambda\)。</p><p><div class="eq">$$\cos\theta=\sin\lambda$$</div></p><p>因此，前一球面平行移动计算可直接换成纬度。</p><h4>第2步：写理想化物理模型</h4><p>回忆：理想 Foucault 摆的摆动平面在惯性空间近似保持方向，地面上的竖直方向随地球转动。</p><p>把摆的水平摆动方向投影到当地切平面，比较一恒星日后与地面标架的夹角；忽略摩擦和小振幅之外的效应。</p><p>因此，该几何比较可由沿纬线的平行移动描述。</p><h4>第3步：复用纬线联络方程</h4><p>回忆：沿固定 \(\theta\) 的平行向量分量满足 \(a'-b\cos\theta=0\)、\(b'+a\cos\theta=0\)。</p><p><div class="eq">$$(a+ib)(2\\pi)=e^{-2\\pi i\\cos\\theta}(a+ib)(0)$$</div></p><p>因此，相对局部标架的转角大小为 \(2\pi|\cos\theta|\)。</p><h4>第4步：把余纬换成地理纬度</h4><p>回忆：第一步已有 \(\cos	heta=\sin\lambda\)。</p><p><div class="eq">$$|\Delta\psi|=2\pi|\sin\lambda|$$</div></p><p>因此，每恒星日的进动角由纬度决定。</p><h4>第5步：算北极</h4><p>回忆：北极 \(\lambda=\pi/2\)。</p><p><div class="eq">$$|\Delta\psi|=2\pi\sin(\pi/2)=2\pi$$</div></p><p>因此，理想摆相对地面一日转满一圈。</p><h4>第6步：算赤道</h4><p>回忆：赤道 \(\lambda=0\)。</p><p><div class="eq">$$|\Delta\psi|=2\pi\sin0=0$$</div></p><p>因此，理想几何进动为零。</p><h4>第7步：算中纬度举例</h4><p>回忆：若 \(\lambda=30^\circ\)，则 \(\sin\lambda=1/2\)。</p><p><div class="eq">$$|\Delta\psi|=2\pi\cdot\tfrac12=\pi$$</div></p><p>因此，一恒星日相对地面约转半圈。</p><h4>第8步：代入四十五度纬度</h4>
若 \(\lambda=45^\circ\)，则 \(\sin\lambda=\sqrt2/2\)，一恒星日的累计进动角大小为 <div class="eq">$$2\pi\sin45^\circ=\sqrt2\pi\ \mathrm{rad}=180\sqrt2^\circ\approx254.6^\circ.$$</div>它介于赤道的零和极点的整圈之间。
<h4>第9步：解释方向与取模</h4><p>回忆：南北半球的 \(\sin\lambda\) 符号相反。</p><p>有向进动角的正负取决于观察方向和基向量定向；物理报数常说相对地面的连续累计角，球面和乐则按 \(2\pi\) 取模。</p><p>因此，两种角度叙述不冲突。</p><div class="keybox">$$\boxed{|\Delta\psi|=2\pi|\sin\lambda|\quad\text{每恒星日}}$$</div><div class="memobox"><strong>一句话记忆：</strong>纬度越高，地面标架绕竖直方向转得越多，摆面相对地面进动越快。</div>`,
    2: L`<h4>第1步：说明所用的量子例子</h4><p>回忆：Berry 相位是参数沿闭路变化时本征态的几何相位。</p><p>取二能级态 \(|n,+angle\)，其中 \(n\) 是单位球上的参数方向；假设能级不简并且演化足够缓慢。</p><p>因此，此模型把参数空间联络写得可计算。</p><h4>第2步：写出一个局部本征态</h4><p>回忆：用球坐标 \((	heta,\phi)\) 表示 \(n\)。</p><p><div class="eq">$$|n,+\rangle=\begin{pmatrix}\cos(\theta/2)\\e^{i\phi}\sin(\theta/2)\end{pmatrix}$$</div></p><p>因此，它已归一化，局部相位规范已选定。</p><h4>第3步：对经度求导</h4><p>回忆：只第二个分量含 \(e^{i\phi}\)。</p><p><div class="eq">$$\partial_\phi|n,+\rangle=\begin{pmatrix}0\\i e^{i\phi}\sin(\theta/2)\end{pmatrix}$$</div></p><p>因此，得到相位随参数转动的导数。</p><h4>第4步：计算内积</h4><p>回忆：复内积的第一因子要取共轭转置。</p><p><div class="eq">$$\langle n,+|\partial_\phi n,+\rangle=i\sin^2(\theta/2)$$</div></p><p>因此，该内积纯虚，乘 \(i\) 后成为实连接系数。</p><h4>第5步：写 Berry 联络</h4><p>回忆：本规范取 \(\mathcal A=i\langle n,+|d|n,+angle\)。</p><p><div class="eq">$$\mathcal A_\phi=i\langle n,+|\partial_\phi n,+\rangle=-\sin^2(\theta/2)=-\tfrac12(1-\cos\theta)$$</div></p><p>因此，沿纬线的连接一形式已求出。</p><h4>第6步：沿闭路积分</h4><p>回忆：Berry 相位是连接在闭路上的积分，按 \(2\pi\) 取模。</p><p><div class="eq">$$\gamma_B=\oint\mathcal A=\int_0^{2\pi}-\tfrac12(1-\cos\theta)\,d\phi=-\pi(1-\cos\theta)$$</div></p><p>因此，获得具体相位。</p><h4>第7步：写成球面立体角</h4><p>回忆：北球冠立体角为 \(\Omega=2\pi(1-\cos	heta)\)。</p><p><div class="eq">$$\gamma_B=-\Omega/2\pmod{2\pi}$$</div></p><p>因此，半个立体角就是该自旋态的几何相位。</p><h4>第8步：把联络再求一次外微分</h4>
由 \(\mathcal A=-\tfrac12(1-\cos\theta)d\phi\) 得 <div class="eq">$$\mathcal F=d\mathcal A=-\tfrac12\sin\theta\,d\theta\wedge d\phi.$$</div>北球冠积分 \(\int\mathcal F=-\pi(1-\cos\theta_0)\)，与边界积分 \(\oint\mathcal A\) 一致。
<h4>第9步：代入六十度参数环路</h4>
取 \(\theta_0=\pi/3\)，则球冠立体角 \(\Omega=2\pi(1-1/2)=\pi\)。故 <div class="eq">$$\gamma_B=-\Omega/2=-\pi/2,\qquad e^{i\gamma_B}=-i.$$</div>闭路后获得的是相位因子 \(-i\)，并非切向量的球面旋转角。
<h4>第10步：解释和乐而不混同两种联络</h4><p>回忆：闭路后物理态可获得整体相位；局部规范变换改变 \(\mathcal A\)，闭路相位只按 \(2\pi\) 改变。</p><p>这是复线丛的 \(U(1)\) 联络和乐；它与切丛 Levi-Civita 平行移动共享“绕圈产生和乐”的结构，但数值公式不必相同。</p><p>因此，类比被精确计算取代。</p><div class="keybox">$$\boxed{\gamma_B=-\frac{\Omega}{2}\pmod{2\pi}\quad\text{对 }|n,+\rangle}$$</div><div class="memobox"><strong>一句话记忆：</strong>Berry 相位是量子态线丛沿闭合参数路搬运一圈的相位差。</div>`
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
    0: L`<h4>第一步：明确要计算的量</h4>
回忆 \(K(e_1,e_2)=\langle R(e_1,e_2)e_2,e_1\rangle/D\)，其中 \(D=g_{11}g_{22}-g_{12}^2>0\)。这是二维唯一的截面曲率。

<h4>第二步：固定四槽次序</h4>
设 \(T_{ijkl}=\langle R(e_i,e_j)e_k,e_l\rangle\)。按本文符号，\(T_{1221}=KD\)，而 \(T_{1212}=-KD\)；交换末两槽会变号。

<h4>第三步：数独立分量</h4>
回忆 \(T\) 在首两槽及末两槽均反对称。因此任何同一对重复的分量为零；二维只剩 \(T_{1212},T_{1221},T_{2112},T_{2121}\)，且由对称性只含一个自由数。

<h4>第四步：把分量写成曲率</h4>
由上一步与截面曲率定义，<div class="eq">$$T_{1221}=K(g_{11}g_{22}-g_{12}^2)$$</div>。这是任意坐标都正确的分量关系。

<h4>第五步：检查上标形式</h4>
回忆 \(R(e_1,e_2)e_2=R^l{}_{2,1,2}e_l\)，与 \(e_1\) 取内积：<div class="eq">$$KD=g_{11}R^1{}_{2,1,2}+g_{12}R^2{}_{2,1,2}$$</div>。原题只用单个上标分量除 \(\det g\) 的写法在一般坐标下缺少度量因子。

<h4>第六步：换正交单位基复算</h4>
在 \(p\) 取 \(g_{ab}=\delta_{ab}\)，则 \(D=1\) 且第二个分量项为零，于是 \(R^1{}_{2,1,2}=K\)。这说明简式只在这样的基下成立。

<h4>第七步：代入球面数值</h4>
半径 \(R_0\) 的球面有 \(K=R_0^{-2}\)。正交单位基下 \(R(e_1,e_2)e_2=R_0^{-2}e_1\)，所以 \(T_{1221}=R_0^{-2}\)。

<h4>第八步：恢复整个张量</h4>
回忆二维代数曲率张量只有一个独立分量，故<div class="eq">$$T(X,Y,Z,W)=K(\langle Y,Z\rangle\langle X,W\rangle-\langle X,Z\rangle\langle Y,W\rangle)$$</div>。代 \((e_1,e_2,e_2,e_1)\) 即回到第四步。

<div class="keybox">$$\boxed{K=\frac{g_{1l}R^l{}_{2,1,2}}{g_{11}g_{22}-g_{12}^2}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>二维只有一个独立曲率分量；先降下输出指标，再除以面积平方。</div>`,
    1: L`<h4>第一步：固定模型公式</h4>
回忆常截面曲率 \(c\) 的模型张量在本文符号下是<div class="eq">$$R(X,Y)Z=c(\langle Y,Z\rangle X-\langle X,Z\rangle Y)$$</div>。我们把它代回截面曲率定义验算。

<h4>第二步：选任意截面基</h4>
取线性独立的 \(u,v\)，张成 \(\sigma\)。回忆分母是面积平方 \(D=|u|^2|v|^2-\langle u,v\rangle^2>0\)。

<h4>第三步：计算曲率作用</h4>
令 \(X=u,Y=v,Z=v\)，则<div class="eq">$$R(u,v)v=c(|v|^2u-\langle u,v\rangle v)$$</div>。

<h4>第四步：取内积</h4>
与 \(u\) 内积并按线性展开：<div class="eq">$$\langle R(u,v)v,u\rangle=c(|v|^2|u|^2-\langle u,v\rangle^2)=cD$$</div>。

<h4>第五步：约去面积平方</h4>
回忆 \(D>0\)，所以<div class="eq">$$K(\sigma)=\frac{cD}{D}=c$$</div>，与 \(u,v\) 是否正交无关。

<h4>第六步：正交基快速核对</h4>
若 \(|u|=|v|=1,\langle u,v\rangle=0\)，则 \(R(u,v)v=cu\)，分子 \(c\)、分母 \(1\)。

<h4>第七步：代具体数值</h4>
对半径 \(2\) 的圆球，\(c=1/4\)；取任意正交切向量，\(K=\langle(1/4)u,u\rangle=1/4\)。欧氏空间取 \(c=0\) 得零。

<h4>第八步：辨别双曲模型</h4>
标准曲率 \(-1\) 的双曲空间取 \(c=-1\)，同一计算给 \(R(u,v)v=-u\) 和 \(K=-1\)，符号与截面曲率定义一致。

<div class="keybox">$$\boxed{R(X,Y)Z=c(\langle Y,Z\rangle X-\langle X,Z\rangle Y)\Longrightarrow K(\sigma)=c}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>把 \(R(u,v)v\) 与 \(u\) 相乘，分子恰是 \(c\) 倍面积平方。</div>`,
    2: L`<h4>第一步：说明对象</h4>
回忆欧氏空间 \(\mathbb R^n\) 用标准度量与标准坐标 \(x^i\)。目标是计算其 Levi-Civita 联络和曲率。

<h4>第二步：求度量分量</h4>
标准基向量 \(e_i\) 满足 \(g_{ij}=\langle e_i,e_j\rangle=\delta_{ij}\)，所以所有偏导 \(\partial_k g_{ij}=0\)。

<h4>第三步：代入 Christoffel 公式</h4>
回忆 <div class="eq">$$\Gamma^l_{ij}=\tfrac12g^{lm}(\partial_i g_{jm}+\partial_j g_{im}-\partial_mg_{ij})$$</div>。三项偏导都是零，故 \(\Gamma^l_{ij}=0\)。

<h4>第四步：代入曲率分量</h4>
回忆 \(R^l{}_{kij}=\partial_i\Gamma^l_{jk}-\partial_j\Gamma^l_{ik}+\Gamma^a_{jk}\Gamma^l_{ia}-\Gamma^a_{ik}\Gamma^l_{ja}\)。将全部 \(\Gamma=0\) 代入得 \(R^l{}_{kij}=0\)。

<h4>第五步：推广到任意向量</h4>
回忆曲率是张量；全部坐标分量为零意味着对任何 \(X,Y,Z\) 都有 \(R(X,Y)Z=0\)。

<h4>第六步：复算一个平面</h4>
在 \(\mathbb R^2\) 取 \(u=(1,0),v=(0,1)\)，面积平方 \(D=1\)、分子 \(\langle R(u,v)v,u\rangle=0\)，故 \(K=0\)。

<h4>第七步：说明逆向判据</h4>
若某开集上 \(R\equiv0\)，Levi-Civita 联络平坦且无挠；在充分小的单连通邻域可取平行正交标架。无挠使标架对易，积分得欧氏坐标。

<h4>第八步：限定结论的尺度</h4>
因此 \(R=0\) 蕴含<strong>局部</strong>欧氏等距；环面可整体平坦却不与整个 \(\mathbb R^n\) 等距。这个区分防止把局部判据误用为全局判据。

<div class="keybox">$$\boxed{R_{\mathbb R^n}\equiv0,\qquad R\equiv0\Longleftrightarrow\text{局部欧氏平坦}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>标准欧氏坐标的度量系数恒定，Christoffel 符号与曲率分量都为零。</div>`
  },
  "r29": {
    0: L`<h4>第一步：写截面曲率定义</h4>
回忆 \(K(u,v)=\langle R(u,v)v,u\rangle/D\)，其中 \(D=|u|^2|v|^2-\langle u,v\rangle^2\)。取任意二维截面，证明三个模型的 \(K\) 都与方向无关。

<h4>第二步：使用常曲率模型</h4>
回忆模型张量 \(R(u,v)v=c(|v|^2u-\langle u,v\rangle v)\)。取内积得分子 \(cD\)。

<h4>第三步：计算半径为二的球面</h4>
球面 \(S^n(2)\) 的 \(c=1/2^2=1/4\)。对正交单位 \(u,v\)，\(R(u,v)v=(1/4)u\)。

<h4>第四步：完成球面除法</h4>
上一步分子是 \(1/4\)，分母是 \(1\)，所以 \(K_{S^n(2)}=1/4\)。把半径 \(2\) 换成 \(R_0\) 得 \(1/R_0^2\)。

<h4>第五步：计算欧氏模型</h4>
回忆欧氏 \(\Gamma=0\) 使 \(R=0\)，于是任意 \(u,v\) 的分子为零，\(K_{\mathbb R^n}=0\)。

<h4>第六步：计算双曲模型</h4>
标准双曲空间 \(\mathbb H^n\) 取曲率参数 \(c=-1\)，则正交单位 \(u,v\) 满足 \(R(u,v)v=-u\)，分子 \(-1\)，所以 \(K=-1\)。

<h4>第七步：检验非正交基</h4>
取 \(|u|^2=2,|v|^2=3,\langle u,v\rangle=1\)，则 \(D=2\cdot3-1=5\)。模型分子 \(5c\)，商仍是 \(c\)。

<h4>第八步：收束</h4>
任意截面和任意基都会得到同一 \(c\)，这就是“常截面曲率”而不只是“某个方向的曲率”。

<div class="keybox">$$\boxed{K_{S^n(R_0)}=R_0^{-2},\quad K_{\mathbb R^n}=0,\quad K_{\mathbb H^n}=-1}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>三个模型都满足 \(\langle R(u,v)v,uangle=cD\)，所以每个截面的商都等于 \(c\)。</div>`,
    1: L`<h4>第一步：声明归一化</h4>
回忆 Fubini–Study 度量有不同缩放；这里取复直线的截面曲率为 \(1\) 的归一化。对 \(n\ge2\) 的 \(\mathbb{CP}^n\) 计算范围。

<h4>第二步：引入复结构</h4>
复结构 \(J\) 满足 \(J^2=-I\) 且保持内积。任取正交单位向量 \(u,v\)，记 \(a=\langle Ju,v\rangle\)。Cauchy–Schwarz 给 \(|a|\le1\)。

<h4>第三步：写出可代入的曲率式</h4>
回忆这个归一化下的 Fubini–Study 曲率公式为<div class="eq">$$K(u,v)=\frac{1+3\langle Ju,v\rangle^2}{4}=\frac{1+3a^2}{4}$$</div>。数值只取决于平面对 \(J\) 的位置。

<h4>第四步：算全实平面</h4>
若 \(v\perp Ju\)，则 \(a=0\)，直接代入得 \(K=(1+0)/4=1/4\)。维数 \(n\ge2\) 时可选这样的 \(v\)。

<h4>第五步：算复直线</h4>
若 \(v=Ju\)，则 \(|v|=1\)、\(a=\langle Ju,Ju\rangle=1\)，故 \(K=(1+3)/4=1\)。

<h4>第六步：代中间角度</h4>
若 \(a=1/2\)，则 \(a^2=1/4\)，所以<div class="eq">$$K=\frac{1+3/4}{4}=\frac{7}{16}$$</div>。这可直接复算，介于两端之间。

<h4>第七步：推出整个范围</h4>
由 \(0\le a^2\le1\)，<div class="eq">$$\frac14\le\frac{1+3a^2}{4}\le1$$</div>。连续改变二维截面可取到区间中的值。

<h4>第八步：处理低维例外</h4>
当 \(n=1\) 时实维只有 \(2\)，唯一的二维平面总由 \(u,Ju\) 张成，所以 \(a^2=1\)、\(K=1\)，下端 \(1/4\) 不出现。

<div class="keybox">$$\boxed{K_{FS}(u,v)=\tfrac14(1+3\langle Ju,v\rangle^2)\in[\tfrac14,1]}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>复结构把截面分为全实与复直线两个极端；中间值由 \(\langle Ju,vangle^2\) 插值。</div>`,
    2: L`<h4>第一步：确定乘积度量</h4>
回忆 \(M\times N\) 的切向量写作 \((u,a)\)，内积为 \(g_M(u,v)+g_N(a,b)\)。联络按两因子分别计算。

<h4>第二步：写曲率分解</h4>
由联络逐因子分解，<div class="eq">$$R^{M\times N}((u,a),(v,b))(w,c)=(R^M(u,v)w,R^N(a,b)c)$$</div>。没有跨因子的混合项。

<h4>第三步：取混合截面</h4>
令 \(U=(u,0),V=(0,b)\) 且二者非零，则 \(R(U,V)V=(0,0)\)。

<h4>第四步：算混合分母</h4>
由于 \(\langle U,V\rangle=0\)，面积平方为 \(D=|u|_M^2|b|_N^2>0\)，故混合截面 \(K=0/D=0\)。

<h4>第五步：取完全在 M 的截面</h4>
令 \(U=(u,0),V=(v,0)\)。曲率分子变成 \(\langle R^M(u,v)v,u\rangle\)，分母变成 \(|u|^2|v|^2-\langle u,v\rangle^2\)。

<h4>第六步：约成 M 的曲率</h4>
由截面曲率定义，上一步的商就是 \(K_M(u,v)\)；没有 \(N\) 因子的贡献。

<h4>第七步：取完全在 N 的截面</h4>
同样令 \(U=(0,a),V=(0,b)\)，商直接变成 \(K_N(a,b)\)。

<h4>第八步：给数值复算</h4>
在 \(S^2(2)\times\mathbb R\)，球面内部截面 \(K=1/4\)，球面与直线的混合截面 \(K=0\)。因此乘积通常不是常截面曲率空间。

<div class="keybox">$$\boxed{K_{M\times N}(T M,T N)=0,\quad K(T M,T M)=K_M,\quad K(T N,T N)=K_N}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>乘积联络逐因子运算；混合平面的曲率分子为零。</div>`
  },
  "r30": {
    0: L`<h4>第一步：给定球面与符号</h4>
取半径 \(R_0>0\) 的 \(S^n(R_0)\)，沿用正球面有正截面曲率的约定，\(c=R_0^{-2}\)。

<h4>第二步：写曲率模型</h4>
回忆常曲率公式<div class="eq">$$R(X,Y)Z=c(\langle Y,Z\rangle X-\langle X,Z\rangle Y)$$</div>。

<h4>第三步：写 Ricci 的迹</h4>
回忆 \(\operatorname{Ric}(v,w)=\sum_{a=1}^n\langle R(e_a,v)w,e_a\rangle\)，其中 \(e_a\) 为正交单位基。

<h4>第四步：算每个求和项</h4>
代入曲率模型：<div class="eq">$$\langle R(e_a,v)w,e_a\rangle=c(\langle v,w\rangle-\langle e_a,w\rangle\langle v,e_a\rangle)$$</div>。

<h4>第五步：求和第一部分</h4>
\(n\) 个 \(c\langle v,w\rangle\) 相加得 \(nc\langle v,w\rangle\)。

<h4>第六步：求和第二部分</h4>
回忆正交展开 \(\sum_a\langle e_a,w\rangle\langle v,e_a\rangle=\langle v,w\rangle\)，所以减去 \(c\langle v,w\rangle\)。

<h4>第七步：得到 Ricci</h4>
两部分合并：<div class="eq">$$\operatorname{Ric}(v,w)=(n-1)c\langle v,w\rangle=\frac{n-1}{R_0^2}g(v,w)$$</div>。

<h4>第八步：再取标量迹</h4>
回忆 \(S=\sum_i\operatorname{Ric}(e_i,e_i)\)。每项是 \((n-1)/R_0^2\)，共 \(n\) 项，故 \(S=n(n-1)/R_0^2\)。

<h4>第九步：代三维数字</h4>
若 \(n=3,R_0=2\)，则 \(\operatorname{Ric}=(2/4)g=\tfrac12 g\)、\(S=3\cdot2/4=3/2\)，可独立核对。

<div class="keybox">$$\boxed{\operatorname{Ric}_{S^n(R_0)}=\frac{n-1}{R_0^2}g,\qquad S=\frac{n(n-1)}{R_0^2}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>球面每个与 \(v\) 垂直的 \(n-1\) 个方向都贡献 \(R_0^{-2}\)。</div>`,
    1: L`<h4>第一步：说明题意</h4>
回忆 Einstein 度量满足 \(\operatorname{Ric}=\lambda g\)。K3 上的 Calabi–Yau 度量取 \(\lambda=0\)，但不能把 Ricci 零误读成全曲率零。

<h4>第二步：写 Ricci 平坦</h4>
回忆 K3 的第一陈类为零，Calabi–Yau 定理在给定 Kähler 类中给出 \(\operatorname{Ric}=0\) 的度量。这是存在性输入。

<h4>第三步：说明缩并会丢信息</h4>
回忆 Ricci 只是 \(R\) 的迹：<div class="eq">$$\operatorname{Ric}(v,w)=\sum_a\langle R(e_a,v)w,e_a\rangle$$</div>。和为零并不逐项强迫 \(R(e_a,v)w=0\)。

<h4>第四步：看四维曲率分解</h4>
在四维，若 \(\operatorname{Ric}=0\)，标量 \(S=0\)，则 Weyl 分解化为 \(R=W\)。因此剩余曲率可以全部位于无迹部分。

<h4>第五步：用拓扑检测平坦性</h4>
回忆紧致平坦流形的 Euler 示性数为零；这是 Chern–Gauss–Bonnet 中曲率形式为零直接给出的。K3 的 Euler 示性数是 \(24\)。

<h4>第六步：作数值比较</h4>
若这份度量还满足 \(R=0\)，Gauss–Bonnet 的 Euler 积分会给 \(\chi=0\)，而 \(\chi(K3)=24\)。两个整数不相等，故 \(R\) 不能恒为零。

<h4>第七步：指出量词</h4>
结论是 \(R\not\equiv0\)，即至少某点曲率非零；未声称每一点的每个截面都非零。

<h4>第八步：整理 Einstein 常数</h4>
由 \(\operatorname{Ric}=0=0\cdot g\)，这确实是 Einstein 度量，常数 \(\lambda=0\)，而非平坦度量。

<div class="keybox">$$\boxed{\operatorname{Ric}_{K3}=0,\qquad R_{K3}\not\equiv0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>Ricci 只看曲率的迹；K3 的 \(\chi=24\) 排除全曲率为零。</div>`,
    2: L`<h4>第一步：标明几何背景</h4>
Schwarzschild 是四维 Lorentz 时空，不是正定黎曼流形；这里借用同一曲率缩并思想，取几何单位 \(G=c=1\) 且 \(r>2M\)。

<h4>第二步：写度量以便复算</h4>
回忆球对称静态解的线元<div class="eq">$$ds^2=-(1-2M/r)dt^2+(1-2M/r)^{-1}dr^2+r^2(d\theta^2+\sin^2\theta\,d\phi^2)$$</div>。

<h4>第三步：写真空方程</h4>
在无宇宙学常数的真空区域，场方程是 \(\operatorname{Ric}-\tfrac12 Sg=0\)。对它取迹：\(S-2S=-S=0\)，故 \(S=0\)。

<h4>第四步：返回 Ricci</h4>
把 \(S=0\) 代回真空方程，得到 \(\operatorname{Ric}=0\)。这不是“曲率全零”的结论。

<h4>第五步：给可计算的不变量</h4>
回忆 Kretschmann 标量 \(\mathcal K=R_{abcd}R^{abcd}\)。对上面度量直接算联络与曲率可得<div class="eq">$$\mathcal K=\frac{48M^2}{r^6}$$</div>；它与坐标选择无关。

<h4>第六步：代具体数值</h4>
取 \(M=1,r=4\)，则<div class="eq">$$\mathcal K=\frac{48}{4^6}=\frac{3}{256}>0$$</div>。因而这个点的全曲率张量非零。

<h4>第七步：指出 Weyl 部分</h4>
四维真空时 \(\operatorname{Ric}=S=0\)，Weyl 分解给 \(R=W\)。所以上一步算到的非零曲率是 Weyl 曲率。

<h4>第八步：限定论断</h4>
当 \(M=0\) 公式给 \(\mathcal K=0\)，退化为平坦 Minkowski 时空；非零质量才有本例的潮汐曲率。

<div class="keybox">$$\boxed{\operatorname{Ric}=0,\quad R=W\ne0,\quad R_{abcd}R^{abcd}=48M^2/r^6}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>真空只消去 Ricci；\(48M^2/r^6\) 直接检出剩余的 Weyl 潮汐曲率。</div>`
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
    0: L`<h4>我们要计算什么</h4>
计算 \(\mathbb R^n\) 的收缩同伦，核对连续性、端点和强形变收缩条件。

<h4>第1步：指定收缩目标</h4>
回忆：可缩是 \(\mathrm{id}_X\) 与某常值映射同伦。

取原点 \(0\in\mathbb R^n\)，令 \(c_0(x)=0\)。

本步得到：目标是从每点滑到原点。

<h4>第2步：写出线性同伦</h4>
回忆：欧氏空间可以做凸组合。

设 \(H(x,t)=(1-t)x+t0=(1-t)x\)。

本步得到：有候选同伦公式。

<h4>第3步：核对起始时刻</h4>
回忆：把 \(t=0\) 代入。

\(H(x,0)=(1-0)x=x\)。

本步得到：起始映射是恒等。

<h4>第4步：核对结束时刻</h4>
回忆：把 \(t=1\) 代入。

\(H(x,1)=(1-1)x=0=c_0(x)\)。

本步得到：结束映射是常值。

<h4>第5步：核对固定核</h4>
回忆：强形变收缩要求核上的点全程不动。

\(H(0,t)=(1-t)0=0\) 对每个 \(t\) 成立。

本步得到：原点固定。

<h4>第6步：核对连续性</h4>
回忆：标量乘法 \(\mathbb R\times\mathbb R^n\to\mathbb R^n\) 连续。

\((x,t)\mapsto(1-t)x\) 是连续映射的复合。

本步得到：公式确实是一段同伦。

<h4>第7步：写同伦逆</h4>
回忆：点空间到 \(\mathbb R^n\) 的映射只能选一个点。

取 \(r(x)=0\) 和包含 \(i:\{0\}\hookrightarrow\mathbb R^n\)；\(ri=\mathrm{id}_{\{0\}}\)，\(ir=c_0\simeq\mathrm{id}_{\mathbb R^n}\)。

本步得到：两空间同伦等价。

<h4>第8步：求基本群作为检验</h4>
回忆：基本群在同伦等价下不变，点的基本群平凡。

\(\pi_1(\mathbb R^n,0)\cong\pi_1(\{0\})=\{e\}\)。

本步得到：收缩公式也解释了环路为何可缩。

<div class="keybox">$$\boxed{\mathbb R^n\simeq\{0\},\quad\pi_1(\mathbb R^n)=0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>沿直线把每个向量乘以逐渐变小的系数。</div>`,
    1: L`<h4>我们要计算什么</h4>
计算穿孔平面到单位圆的径向形变收缩，逐项核对整个过程中不碰原点。

<h4>第1步：确定两个映射</h4>
回忆：径向投影把非零向量缩放到单位长度。

令 \(X=\mathbb R^2\setminus\{0\}\)，\(r(x)=x/\|x\|\)，\(i:S^1\hookrightarrow X\)。

本步得到：有 \(r:X\to S^1\) 与 \(i:S^1\to X\)。

<h4>第2步：计算一个复合</h4>
回忆：单位圆上的点满足 \(\

u\|=1\)。|\(ri(u)=u/\|u\|=u\)。

本步得到：圆上的复合严格等于恒等。

<h4>第3步：构造另一复合的同伦</h4>
回忆：两点 \(x\) 与 \(x/\

x\|\) 在同一正射线上。|令 \(H(x,t)=(1-t)x+t\,x/\|x\|\)。

本步得到：得到从 \(x\) 到 \(ir(x)\) 的直线公式。

<h4>第4步：核对两端</h4>
回忆：\(t=0,1\) 时凸组合退化成端点。

\(H(x,0)=x\)，\(H(x,1)=x/\|x\|\)。

本步得到：确实连接 \(\mathrm{id}_X\) 与 \(ir\)。

<h4>第5步：证明不碰原点</h4>
回忆：因子 \(1-t+t/\

x\|\) 始终正。|\(H(x,t)=(1-t+t/\|x\|)x\)，其中 \(\|x\|>0\) 且 \(0\le t\le1\)，故 \(H(x,t)\ne0\)。

本步得到：同伦始终留在 \(X\)。

<h4>第6步：核对圆周固定</h4>
回忆：若 \(u\in S^1\)，则 \(r(u)=u\)。

\(H(u,t)=(1-t)u+tu=u\)。

本步得到：这是强形变收缩。

<h4>第7步：核对连续性</h4>
回忆：范数和除以非零范数在 \(X\) 上连续。

公式是连续函数的加法与乘法，且分母始终非零。

本步得到：形变收缩合法。

<h4>第8步：计算不变量</h4>
回忆：形变收缩诱导基本群同构。

\(\pi_1(X)\cong\pi_1(S^1)\cong\mathbb Z\)，一圈绕数为 \(1\)。

本步得到：穿孔平面的一维洞被圆保留。

<div class="keybox">$$\boxed{\mathbb R^2\setminus\{0\}\simeq S^1,\quad\pi_1\cong\mathbb Z}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>只改半径不改方向，整条轨迹始终不经过被挖掉的原点。</div>`,
    2: L`<h4>我们要计算什么</h4>
把 Möbius 带写成商空间，显式收缩横向坐标并核对缝合处的公式。

<h4>第1步：给出商模型</h4>
回忆：Möbius 带可由矩形两端反向粘合。

令 \(M=([0,1]\times[-1,1])/\!\sim\)，关系为 \((0,s)\sim(1,-s)\)。

本步得到：扭转由端点符号反转体现。

<h4>第2步：找中心圆</h4>
回忆：横坐标 \(s=0\) 在粘合下不变。

子集 \(C=\{[u,0]:u\in[0,1]\}\) 且 \([0,0]=[1,0]\)，故 \(C\cong S^1\)。

本步得到：有一个圆形收缩核。

<h4>第3步：定义逐时收缩</h4>
回忆：横向纤维是区间，可按系数 \(1-t\) 缩短。

设 \(H([u,s],t)=[u,(1-t)s]\)。

本步得到：有候选形变。

<h4>第4步：核对商映射良定且连续</h4>
回忆：在商空间上定义映射，要检查等价代表给同一结果；商映射的连续性由兼容的原空间映射下降得到。

矩形上的 \(F(u,s,t)=(u,(1-t)s)\) 连续，并满足 \(F(0,s,t)=(0,(1-t)s)\sim(1,-(1-t)s)=F(1,-s,t)\)。所以 \(H([u,s],t)=[u,(1-t)s]\) 良定。商映射与区间的乘积仍是商映射，故连续的 \(F\) 下降为连续的 \(H:M\times I\to M\)。

本步得到：收缩在扭转缝合处也保持连续。

<h4>第5步：核对起点</h4>
回忆：\(1-0=1\)。

\(H([u,s],0)=[u,s]\)。

本步得到：初态是恒等。

<h4>第6步：核对终点</h4>
回忆：\(1-1=0\)。

\(H([u,s],1)=[u,0]\in C\)。

本步得到：末态落到中心圆。

<h4>第7步：核对中心固定</h4>
回忆：在 \(s=0\) 时乘任何系数仍为零。

\(H([u,0],t)=[u,0]\)。

本步得到：这是强形变收缩。

<h4>第8步：计算基本群</h4>
回忆：同伦等价保持基本群。

\(\pi_1(M)\cong\pi_1(C)\cong\pi_1(S^1)\cong\mathbb Z\)。

本步得到：扭转不改变中心一圈的基本群。

<h4>第9步：区分同胚</h4>
回忆：同胚保持局部边界性质。

Möbius 带有边界点，而圆是一维流形；若二者同胚则局部维数相同，与一维和二维的局部模型不符。

本步得到：同伦等价比同胚弱。

<div class="keybox">$$\boxed{M\simeq S^1,\quad\pi_1(M)\cong\mathbb Z}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>扭带沿每根横向线段缩到中点，端点反向粘合仍相容。</div>`
  },
  "t2": {
    0: L`<h4>我们要计算什么</h4>
以 \(1\in S^1\) 为基点，逐个给环路分配整数绕数，并把这个整数与群运算比较。

<h4>第1步：先写下覆盖映射</h4>
回忆：指数函数的周期为整数。

取 \(p:\mathbb R\to S^1\)，\(p(u)=e^{2\pi i u}\)。每个短于一周的开圆弧都有一段实区间作为逆像分支，所以它是覆叠映射。

本步得到：局部上可把圆上的角度连续选为实数。

<h4>第2步：提升一条基点环路</h4>
回忆：覆叠的道路提升定理在指定起点后给唯一提升。

设 \(\gamma(0)=\gamma(1)=1\)。将参数区间细分到每段像落在一个小圆弧，再逐段取 \(p\) 的局部逆，得到唯一 \(\widetilde\gamma:I\to\mathbb R\) 且 \(\widetilde\gamma(0)=0\)。

本步得到：环路变成从零出发的实数道路。

<h4>第3步：证明终点是整数</h4>
回忆：\(p^{-1}(1)=\mathbb Z\)。

因为 \(p(\widetilde\gamma(1))=\gamma(1)=1\)，必有 \(\widetilde\gamma(1)=n\in\mathbb Z\)。把这个 \(n\) 定义为 \(\gamma\) 的绕数。

本步得到：每条环路有一个整数标签。

<h4>第4步：核对同伦不改变绕数</h4>
回忆：覆叠的同伦提升定理把保持基点的环路同伦提升到实数线。

若 \(H(s,t)\) 把 \(\gamma_0\) 变成 \(\gamma_1\)，提升时让 \(\widetilde H(0,t)=0\)。连续函数 \(t\mapsto\widetilde H(1,t)\) 取值于离散集 \(\mathbb Z\)，所以恒定；两个绕数相同。

本步得到：绕数只依赖环路同伦类。

<h4>第5步：构造每个整数的代表</h4>
回忆：\(e^{2\pi i n}=1\) 对每个整数 \(n\) 成立。

令 \(\gamma_n(t)=e^{2\pi i nt}\)。其从零开始的提升是 \(\widetilde\gamma_n(t)=nt\)，终点为 \(n\)。

本步得到：每个整数确实出现。

<h4>第6步：证明同绕数环路同伦</h4>
回忆：实数线是凸的，两个同端点的道路可线性插值。

若 \(\widetilde\gamma(0)=0\)、\(\widetilde\gamma(1)=n\)，令 \(K(s,t)=(1-t)\widetilde\gamma(s)+t(ns)\)。在 \(s=0,1\) 时分别恒为 \(0,n\)；\(pK\) 因此是固定基点的环路同伦。

本步得到：相同绕数只对应一个同伦类。

<h4>第7步：计算拼接的提升</h4>
回忆：\(p(u+n)=p(u)\) 对整数 \(n\) 成立。

若 \(\alpha,\beta\) 的提升终点分别为 \(m,n\)，则 \(\alpha*\beta\) 的提升前半段走 \(\widetilde\alpha(2t)\)，后半段走 \(m+\widetilde\beta(2t-1)\)；两半在 \(t=1/2\) 都等于 \(m\)。

本步得到：拼接后的提升终点为 (m+n)。

<h4>第8步：把群运算换成加法</h4>
回忆：基本群运算由环路拼接定义。

绕数映射 \(w([\gamma])=\widetilde\gamma(1)\) 满足 <div class="eq">$$w([\alpha][\beta])=w([\alpha])+w([\beta])=m+n.$$</div> 它既是同态，又由前两步知双射。

本步得到：圆的基本群就是整数加法群。

<div class="keybox">$$\boxed{\pi_1(S^1,1)\cong(\mathbb Z,+)}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>把圆上的环路提到实数线，提升道路的整数终点就是绕数。</div>`,
    1: L`<h4>我们要计算什么</h4>
对 \(n\ge2\)，计算球面 \(S^n\) 的基本群；关键是把球面分成两个可缩开集。

<h4>第1步：固定基点与两极</h4>
回忆：球面 \(S^n\subset\mathbb R^{n+1}\) 有北极 \(N\) 和南极 \(S\)。

在赤道选基点 \(x_0\)。令 \(U=S^n\setminus\{N\}\)，\(V=S^n\setminus\{S\}\)。两者均含 \(x_0\)。

本步得到：得到了一个带共同基点的开覆盖。

<h4>第2步：检查并集</h4>
回忆：南极与北极是不同的点。

任一点最多等于其中一个极点，故至少落在 \(U\) 或 \(V\)：<div class="eq">$$S^n=U\cup V.$$</div>

本步得到：可使用开覆盖的 van Kampen 定理。

<h4>第3步：把第一个开集识别为欧氏空间</h4>
回忆：从北极作立体投影给 \(S^n\setminus\{N\}\) 到 \(\mathbb R^n\) 的同胚。

设 \(h_N:U\to\mathbb R^n\) 为立体投影。欧氏空间以任一点 \(h_N(x_0)\) 为中心线性收缩，所以 \(U\) 可缩。

本步得到：(pi_1(U,x_0)={e})。

<h4>第4步：把第二个开集也收缩</h4>
回忆：从南极作立体投影同样是同胚。

\(h_S:V\to\mathbb R^n\) 把 \(V\) 识别为欧氏空间；用 \((1-t)y+t h_S(x_0)\) 收缩每条环路。

本步得到：(pi_1(V,x_0)={e})。

<h4>第5步：计算交集的形状</h4>
回忆：去掉两极后，赤道方向与高度可分别记录。

把 \(x\in U\cap V\) 写成 \((v,z)\in\mathbb R^n\times(-1,1)\)，其中 \(\|v\|^2+z^2=1\)。因为 \(v\ne0\)，可用 \((v/\|v\|,z)\) 给出 <div class="eq">$$U\cap V\cong S^{n-1}\times(-1,1).$$</div>

本步得到：交集的道路连通性可从球面维数读出。

<h4>第6步：核对交集道路连通</h4>
回忆：\(S^k\) 在 \(k\ge1\) 时道路连通，区间也道路连通。

这里 \(n\ge2\)，故 \(n-1\ge1\)；\(S^{n-1}\times(-1,1)\) 道路连通。特别是 \(n=2\) 时交集像一个环带，虽然它本身有非平凡环路，却不影响下面的商群。

本步得到：van Kampen 的交集条件满足。

<h4>第7步：代入融合自由积</h4>
回忆：van Kampen 把 \(\pi_1(U\cup V)\) 写成两群自由积再加交集关系。

两边群都平凡，故自由积仍平凡：<div class="eq">$$\pi_1(U,x_0)*\pi_1(V,x_0)=\{e\}*\{e\}=\{e\}.$$</div>

本步得到：商去任何关系仍是平凡群。

<h4>第8步：写出计算结果</h4>
回忆：平凡群只有单位元。

于是 <div class="eq">$$\pi_1(S^n,x_0)\cong\{e\},\qquad n\ge2.$$</div> 这表示球面上的任一基点环路都可收缩；论证并未误把交集当作可缩。

本步得到：所有高维球面的基本群计算完成。

<div class="keybox">$$\boxed{n\ge2\Longrightarrow\pi_1(S^n)=\{e\}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>用两个各自可缩的“去掉一极”开集覆盖球面；它们的自由积只有单位元。</div>`,
    2: L`<h4>我们要计算什么</h4>
把环面写成两个圆的乘积，计算经线、纬线环路组成的整数对。

<h4>第1步：写出空间模型</h4>
回忆：环面有乘积模型 \(T^2=S^1\times S^1\)。

取基点 \((1,1)\)。一个环路 \(\gamma(t)\) 可唯一写成 \((\alpha(t),\beta(t))\)，两坐标各为圆上的基点环路。

本步得到：环面环路由两个圆环路组成。

<h4>第2步：确定第一个坐标的不变量</h4>
回忆：圆的基本群由绕数给出 \(\pi_1(S^1,1)\cong\mathbb Z\)。

把 \(\alpha\) 提升到从 \(0\) 起的实数道路，终点记 \(m\in\mathbb Z\)。

本步得到：第一个方向得到整数 (m)。

<h4>第3步：确定第二个坐标的不变量</h4>
回忆：第二个圆因子也有相同覆盖映射。

把 \(\beta\) 提升到从 \(0\) 起的实数道路，终点记 \(n\in\mathbb Z\)。

本步得到：第二个方向得到整数 (n)。

<h4>第4步：定义总绕数映射</h4>
回忆：乘积公式由两个投影诱导。

定义 <div class="eq">$$W:\pi_1(T^2,(1,1))\longrightarrow\mathbb Z^2,\quad W[\gamma]=(m,n).$$</div> 两个坐标同伦时绕数各不变，所以 \(W\) 良定义。

本步得到：得到一个明确的候选同构。

<h4>第5步：计算乘法</h4>
回忆：圆上拼接使绕数相加。

若 \(W[\gamma]=(m,n)\)、\(W[\delta]=(p,q)\)，则 <div class="eq">$$W([\gamma][\delta])=(m+p,n+q).$$</div>

本步得到：(W) 是群同态。

<h4>第6步：构造每个整数对的环路</h4>
回忆：\(e^{2\pi i kt}\) 绕圆 \(k\) 圈。

对任意 \((m,n)\in\mathbb Z^2\)，取 \(\gamma_{m,n}(t)=(e^{2\pi i mt},e^{2\pi i nt})\)。

本步得到：(W[gamma_{m,n}]=(m,n))，所以满射。

<h4>第7步：证明没有额外环路类</h4>
回忆：乘积同伦可由两个坐标同伦逐点配对。

若两个环面的环路有同一 \((m,n)\)，则各坐标圆环路分别同伦；把两个同伦配成 \((H_1(s,t),H_2(s,t))\)，得到环面的基点同伦。

本步得到：(W) 也是单射。

<h4>第8步：指出两个生成元</h4>
回忆：\(\mathbb Z^2\) 由 \((1,0),(0,1)\) 生成且交换。

环路 \(a(t)=(e^{2\pi it},1)\)、\(b(t)=(1,e^{2\pi it})\) 分别对应 \((1,0),(0,1)\)。每类唯一写成 \([a]^m[b]^n\)。

本步得到：环面基本群的群结构被具体识别。

<div class="keybox">$$\boxed{\pi_1(T^2,(1,1))\cong\mathbb Z\times\mathbb Z}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>环面有两个独立绕数，经线记一个整数，纬线再记一个整数。</div>`
  },
  "t3": {
    0: L`<h4>我们要计算什么</h4>
对含 \(V\) 个顶点、\(E\) 条边的有限连通图 \(G\)，构造自由群生成元并算出秩。

<h4>第1步：选一棵生成树</h4>
回忆：有限连通图存在包含全部顶点且无圈的生成树 \(T\)。

固定根顶点 \(x_0\)。对每个顶点 \(v\)，树中有唯一的根到 \(v\) 的边路径，记作 \(p_v\)。

本步得到：所有非树边都可接回同一基点。

<h4>第2步：计算树的边数</h4>
回忆：一棵有 \(V\) 个顶点的树恰有 \(V-1\) 条边。

可从单顶点树开始，每添一个新顶点必须恰添一条边；重复 \(V-1\) 次。

本步得到：(E(T)=V-1)。

<h4>第3步：数出非树边</h4>
回忆：图的全部边分成树边与非树边。

因此非树边数为 <div class="eq">$$r=E-(V-1)=E-V+1.$$</div>

本步得到：候选自由生成元应有 (r) 个。

<h4>第4步：对每条非树边造环路</h4>
回忆：边路径可按首尾拼接，反向路径记为上横线。

若非树有向边 \(e:u\to v\)，令 \(\ell_e=p_u*e*\bar p_v\)。它从 \(x_0\) 出发又回到 \(x_0\)。

本步得到：每条非树边给出一个基点环路。

<h4>第5步：把树收缩为一点</h4>
回忆：树可缩，且它是图的 CW 子复形。

对 CW 复形中的可缩子复形，商映射 \(G\to G/T\) 是同伦等价；直观上树内道路都被压成同一个顶点，非树边两端也随之相接。

本步得到：计算可转到商图。

<h4>第6步：识别商图的形状</h4>
回忆：非树边在商空间里成为以同一点为两端的圆。

共有 \(r\) 条非树边，故 <div class="eq">$$G/T\cong\bigvee_{j=1}^{r}S^1.$$</div> 原来的 \(\ell_e\) 正好对应第 \(e\) 个圆的正向一圈。

本步得到：商图是 (r) 个圆的楔和。

<h4>第7步：计算楔和的基本群</h4>
回忆：van Kampen 对两个圆的楔和给自由积；逐个添加圆可归纳。

每个圆的基本群为 \(\mathbb Z\)，所以 <div class="eq">$$\pi_1(G/T,x_0)\cong\underbrace{\mathbb Z*\cdots*\mathbb Z}_{r\text{ 个}}=F_r.$$</div>

本步得到：([ell_e]) 自由生成该群。

<h4>第8步：写成欧拉示性数</h4>
回忆：图的欧拉示性数按细胞数定义为 \(\chi(G)=V-E\)。

把 \(r=E-V+1\) 改写为 \(r=1-\chi(G)\)。因此 <div class="eq">$$\pi_1(G,x_0)\cong F_{1-\chi(G)}.$$</div>

本步得到：得到了原题的通式。

<h4>第9步：做一组具体数值核对</h4>
回忆：一棵生成树总含 \(V-1\) 边。

例如四个顶点的正方形再加一条对角线有 \(V=4,E=5\)，生成树用三条边，余下两条边给 \(F_2\)。相应 \(\chi=4-5=-1\)，\(1-\chi=2\)。

本步得到：公式在具体图上算出自由群 (F_2)。

<div class="keybox">$$\boxed{\pi_1(G)\cong F_{E-V+1}=F_{1-\chi(G)}}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>树边只负责连通；每多一条非树边，就多一个独立自由生成元。</div>`,
    1: L`<h4>我们要计算什么</h4>
沿正方形对边粘合的环面模型，算出二维胞腔给两个圆环路施加的关系。

<h4>第1步：选胞腔模型</h4>
回忆：把正方形的相对边同向粘合得到 \(T^2\)。

四个顶点粘成一个零胞腔，两组边粘成两个一胞腔，内部为一个二胞腔；记两条基点环路为 \(a,b\)。

本步得到：一骨架是 (S^1ee S^1)。

<h4>第2步：先算一骨架的群</h4>
回忆：两个圆的楔和基本群是两个无限循环群的自由积。

<div class="eq">$$\pi_1((T^2)^{(1)})\cong\langle a,b\rangle=F_2.$$</div> 这一步还没有使用正方形内部。

本步得到：先得到两个完全自由的生成元。

<h4>第3步：沿方框读边界词</h4>
回忆：有向边逆向走记为群元素的逆。

依次沿正方形边界走，读到 \(a,b,a^{-1},b^{-1}\)，故附着环路代表 <div class="eq">$$[a,b]=aba^{-1}b^{-1}.$$</div>

本步得到：二胞腔的附着词是交换子。

<h4>第4步：施加二胞腔关系</h4>
回忆：附着一个二胞腔会使其边界环路在整体空间中可缩。

van Kampen 的附胞腔形式把附着词的正规闭包商掉：<div class="eq">$$\pi_1(T^2)\cong\langle a,b\mid aba^{-1}b^{-1}=1\rangle.$$</div>

本步得到：得到明确的群表示。

<h4>第5步：化简关系</h4>
回忆：在任意群中 \(aba^{-1}b^{-1}=1\) 等价于 \(ab=ba\)。

原式右乘 \(b\)，再右乘 \(a\)，得到 \(ab=ba\)；反过来由 \(ab=ba\) 也可把交换子约成单位元。

本步得到：两个生成元现在交换。

<h4>第6步：把任意词整理为标准形</h4>
回忆：\(a\) 与 \(b\) 交换时可交换相邻字母次序。

任意由 \(a^{\pm1},b^{\pm1}\) 组成的词都可将所有 \(a\) 移到左边、\(b\) 移到右边，约去逆元后写成 \(a^m b^n\)。

本步得到：群中每个元素至多由一个整数对描述。

<h4>第7步：构造到整数对的同态</h4>
回忆：\(\mathbb Z^2\) 是交换群，所以交换子在其中为零。

令 \(\phi(a)=(1,0)\)、\(\phi(b)=(0,1)\)。关系在 \(\mathbb Z^2\) 成立，因此群表示给出同态 \(\phi:\pi_1(T^2)\to\mathbb Z^2\)。

本步得到：(phi(a^m b^n)=(m,n))。

<h4>第8步：核对双射并给数值例</h4>
回忆：标准形的整数对可直接读回群元素。

\(\phi\) 满射；若 \(\phi(a^m b^n)=(0,0)\)，则 \(m=n=0\)，所以核平凡。比如 \(a^2b^{-3}\) 对应 \((2,-3)\)，确实有两个独立绕数。

本步得到：环面基本群同构于 (mathbb Z^2)。

<div class="keybox">$$\boxed{\pi_1(T^2)\cong\langle a,b\mid[a,b]=1\rangle\cong\mathbb Z^2}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>方形边界贴上去使交换子可缩，于是两个绕数可以自由相加。</div>`,
    2: L`<h4>我们要计算什么</h4>
用 Klein 瓶的正方形粘合词计算其基本群，并把群表示识别为一个具体半直积。

<h4>第1步：写出胞腔分解</h4>
回忆：Klein 瓶由正方形的一组对边同向、另一组反向粘合。

粘合后得到一个零胞腔、两个一胞腔 \(a,b\)、一个二胞腔。它的一骨架仍是两个圆的楔和。

本步得到：一骨架的基本群是 (F(a,b))。

<h4>第2步：读出附着词</h4>
回忆：逆向经过一条有向边记为逆元。

按选定边的方向沿正方形边界读到 \(a,b,a^{-1},b\)，故边界词是 <div class="eq">$$aba^{-1}b.$$</div>

本步得到：唯一的二胞腔给出这个词的关系。

<h4>第3步：得到群表示</h4>
回忆：二胞腔的边界在贴上圆盘后可缩。

把边界词的正规闭包商掉：<div class="eq">$$\pi_1(K)\cong\langle a,b\mid aba^{-1}b=1\rangle.$$</div>

本步得到：原题要求的群表示得到。

<h4>第4步：改写成作用关系</h4>
回忆：群等式可在两侧乘以逆元。

从 \(aba^{-1}b=1\) 右乘 \(b^{-1}\)，得到 <div class="eq">$$aba^{-1}=b^{-1}.$$</div> 也就是说走一圈 \(a\) 会把 \(b\) 的方向倒过来。

本步得到：识别出半直积的反转作用。

<h4>第5步：构造具体的整数对群</h4>
回忆：把 \(\mathbb Z\) 对另一份 \(\mathbb Z\) 的作用取为 \(n\mapsto(-1)^m n\)。

在集合 \(\mathbb Z^2\) 上定义 <div class="eq">$$(m,n)(m',n')=(m+m',\ n+(-1)^m n').$$</div> 这个乘法由半直积定义满足结合律，单位元是 \((0,0)\)。

本步得到：有可直接运算的候选群。

<h4>第6步：检查生成元满足关系</h4>
回忆：在上述乘法下，\(a=(1,0)\)、\(b=(0,1)\)。

先算 \(ab=(1,-1)\)，再乘 \(a^{-1}=(-1,0)\) 得 \(aba^{-1}=(0,-1)=b^{-1}\)。

本步得到：群表示映到该整数对群。

<h4>第7步：证明这个模型没有多余关系</h4>
回忆：关系 \(aba^{-1}=b^{-1}\) 让 \(a^m b^{n'}=b^{(-1)^m n'}a^m\)。

每个词可整理为 \(b^n a^m\)；映到整数对群后它恰是 \((m,n)\)。反向令 \((m,n)\mapsto b^n a^m\)，按上式计算可见它保乘法，并与前一个映射互逆。

本步得到：基本群确实是 (mathbb Zltimes_{-1}mathbb Z)。

<h4>第8步：具体比较交换次序</h4>
回忆：群元素相等必须有相同的整数对坐标。

在模型中 <div class="eq">$$ab=(1,-1),\qquad ba=(1,1).$$</div> 因为 \(-1\ne1\)，所以 \(ab\ne ba\)。

本步得到：Klein 瓶基本群是非交换群。

<h4>第9步：顺便计算其阿贝尔化</h4>
回忆：阿贝尔化把所有生成元强制交换。

将关系 \(aba^{-1}b=1\) 写成加法得 \(a+b-a+b=2b=0\)；\(a\) 没有新的有限阶关系。因此 <div class="eq">$$H_1(K;\mathbb Z)\cong\pi_1(K)_{\mathrm{ab}}\cong\mathbb Z\oplus\mathbb Z/2.$$</div>

本步得到：也得到一个可检验的具体同调群。

<div class="keybox">$$\boxed{\pi_1(K)\cong\langle a,b\mid aba^{-1}b=1\rangle\cong\mathbb Z\ltimes_{-1}\mathbb Z}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>沿 (a) 方向绕一圈会把 (b) 方向反转，所以群不交换。</div>`
  },
  "t4": {
    0: L`<h4>我们要做什么</h4>验证 \(p:\mathbb R\to S^1\)、\(p(t)=e^{2\pi it}\) 是万有覆叠，并把纤维、道路提升和覆叠变换群全部算出来。<h4>第1步：先验证映射落在圆周</h4>回忆：复数 eⁱθ 的模恒为 1。<div class="eq">$$|p(t)|=|e^{2\pi it}|=1.$$</div>因此 p 的值确实属于 S¹。本步得到：映射的定义域和值域正确。<h4>第2步：求一个点的全部原像</h4>回忆：e²πⁱᵗ=1 当且仅当 t 是整数。<div class="eq">$$p^{-1}(1)=\{k:k\in\mathbb Z\}=\mathbb Z.$$</div>一般点 e²πⁱᵃ 的纤维是 a+Z。本步得到：每条纤维是离散的整数平移集。<h4>第3步：选择不绕满一圈的小圆弧</h4>回忆：去掉圆周上一点后可以连续选择辐角。对 x=e²πⁱᵃ，取长度小于 1 的实区间 (a−ε,a+ε)，并令 U=p((a−ε,a+ε))，其中 0<ε<1/2。本步得到：U 是一个不会跨越整圈的开圆弧。<h4>第4步：写出 U 的全部覆盖片</h4>回忆：p(t+k)=p(t) 对每个整数 k 成立。<div class="eq">$$p^{-1}(U)=\coprod_{k\in\mathbb Z}(a-\varepsilon+k,a+\varepsilon+k).$$</div>这些区间两两不交。本步得到：逆像已经分裂成离散层。<h4>第5步：验证每张片同胚到 U</h4>回忆：在长度小于 1 的区间上，指数映射不可能相差一个非零整数。p 在每个区间上连续、双射；其逆由该圆弧上的连续辐角除以 2π 给出。本步得到：p 是覆叠映射。<h4>第6步：提升标准生成环路</h4>回忆：标准正向环路是 \(\gamma(s)=e^{2\pi is}\)。<div class="eq">$$\widetilde\gamma(s)=s,\qquad p(\widetilde\gamma(s))=e^{2\pi is}=\gamma(s).$$</div>从 0 出发的提升终点是 1。本步得到：绕一圈对应在覆盖线上上升一层。<h4>第7步：证明覆盖空间单连通</h4>回忆：实直线可缩到 0。同伦 \(H(t,u)=(1-u)t\) 把 R 的恒等映射收缩到常值映射，所以 π₁(R)=0。本步得到：这是一个单连通覆叠，因此是万有覆叠。<h4>第8步：构造所有整数平移</h4>回忆：平移不改变指数函数。<div class="eq">$$T_m(t)=t+m,\qquad p(T_m(t))=e^{2\pi i(t+m)}=p(t),\quad m\in\mathbb Z.$$</div>所以每个 Tₘ 都是覆叠变换。本步得到：得到一个 Z 作用。<h4>第9步：证明没有别的覆叠变换</h4>回忆：覆叠变换由一个点的像唯一决定。若 F 是覆叠变换，则 F(0)∈p⁻¹(1)=Z，记 F(0)=m。F 与 Tₘ 都是恒等底映射的提升，并在 0 处相同；道路提升唯一性给 F=Tₘ。本步得到：所有覆叠变换恰是整数平移。<h4>第10步：计算群运算</h4>回忆：平移复合就是位移量相加。<div class="eq">$$T_m\circ T_n=T_{m+n},\qquad T_m^{-1}=T_{-m}.$$</div>因此覆叠变换群与加法群 Z 同构。本步得到：例子的全部结构算完。<div class="keybox">$$\boxed{p(t)=e^{2\pi it}:\mathbb R\to S^1\text{ 是万有覆叠},\quad\operatorname{Deck}(p)\cong\mathbb Z}$$</div><div class="memobox"><strong>一句话记忆：</strong>圆周每绕一圈，实线提升就平移一个整数；整数平移正是全部覆叠对称。</div>`,
    1: L`<h4>我们要做什么</h4>验证对径商映射 \(p:S^n\to\mathbb{RP}^n\)、\(p(x)=[x]\) 是二重覆叠，并算出其覆叠变换群。<h4>第1步：回忆射影空间的点</h4>回忆：RPⁿ 的一个点是一条过原点的实直线。<div class="eq">$$[x]=\{\lambda x:\lambda\ne0\},\qquad x\in S^n.$$</div>单位球面上一条直线恰交于 x 与 −x。本步得到：每个射影点有两个球面代表。<h4>第2步：直接求纤维</h4>回忆：p(y)=[x] 且 |y|=1，意味着 y 是 x 所在直线上的单位向量。<div class="eq">$$p^{-1}([x])=\{x,-x\}.$$</div>两个点不同，因为球面不含零向量。本步得到：覆叠次数候选为 2。<h4>第3步：选择不与对径像相交的小邻域</h4>回忆：球面是 Hausdorff，x 与 −x 有不交开邻域。取足够小的球面测地球 V 围住 x，使 V∩(−V)=∅；令 U=p(V)。本步得到：两张候选覆盖片 V 与 −V 已分开。<h4>第4步：计算 U 的逆像</h4>回忆：若一条射影直线在 U 中，它在 V 中有一个单位代表，另一个代表就在 −V。<div class="eq">$$p^{-1}(U)=V\sqcup(-V).$$</div>不会有第三个单位代表。本步得到：逆像恰分成两张片。<h4>第5步：验证局部同胚</h4>回忆：在 V 内不可能同时出现 y 与 −y。故 p|V 是连续双射到 U，局部商图给出连续逆；p|−V 同理。本步得到：p 是二重覆叠。<h4>第6步：写出非平凡覆叠变换</h4>回忆：对径映射 A(x)=−x 不改变所张成的直线。<div class="eq">$$p(A(x))=[-x]=[x]=p(x),\qquad A^2=\mathrm{id}.$$</div>A 交换每条纤维中的两个点。本步得到：得到一个阶为 2 的覆叠变换。<h4>第7步：证明覆叠变换只有两个</h4>回忆：在连通覆盖空间上，覆叠变换由一点的像决定。固定 x₀。任一 F 必把 x₀ 送到纤维 {x₀,−x₀}。若送到 x₀，唯一性给 F=id；若送到 −x₀，唯一性给 F=A。本步得到：Deck(p)={id,A}。<h4>第8步：识别群结构</h4>回忆：A²=id 且 A≠id。<div class="eq">$$\operatorname{Deck}(p)\cong\mathbb Z/2\mathbb Z.$$</div>生成元由对径变换给出。本步得到：覆叠群计算完成。<h4>第9步：判断何时是万有覆叠</h4>回忆：Sⁿ 在 n≥2 时单连通，而 S¹ 不单连通。所以 n≥2 时该二重覆叠还是 RPⁿ 的万有覆叠；n=1 时 RP¹≅S¹，此映射只是一个二重中间覆叠。本步得到：避免把所有维数混为一谈。<h4>第10步：读出基本群</h4>回忆：万有覆叠的正规覆叠变换群同构于底空间基本群。<div class="eq">$$n\ge2\quad\Longrightarrow\quad\pi_1(\mathbb{RP}^n)\cong\mathbb Z/2.$$</div>这与提升一圈后从 x 到 −x 的图像一致。本步得到：得到经典基本群结果。<div class="keybox">$$\boxed{p:S^n\to\mathbb{RP}^n\text{ 是二重覆叠},\quad\operatorname{Deck}(p)\cong\mathbb Z/2}$$</div><div class="memobox"><strong>一句话记忆：</strong>一条实直线在单位球面上只有正负两个代表；对径变换交换它们。</div>`,
    2: L`<h4>我们要做什么</h4>对 \(p_n:S^1\to S^1\)、\(p_n(z)=z^n\) 逐项验证 n 重覆叠，并计算它在基本群上把 1 送到哪里。<h4>第1步：固定正整数 n</h4>回忆：n 重覆叠通常取 n≥1；n=0 时 z⁰ 为常值映射，不是覆叠。以下假设 n≥1。本步得到：参数范围先说明清楚。<h4>第2步：求任意点的纤维</h4>回忆：若 w=eⁱθ，则 zⁿ=w 的解是 n 个等间隔的 n 次根。<div class="eq">$$p_n^{-1}(e^{i\theta})=\left\{e^{i(\theta+2\pi k)/n}:k=0,1,\ldots,n-1\right\}.$$</div>这些根两两不同。本步得到：每条纤维恰有 n 个点。<h4>第3步：选择短圆弧</h4>回忆：要让 n 次方在一张片内单射，辐角宽度必须小于 2π/n。在 w 周围取不跨越选定切口的开圆弧 U，并选连续辐角 θ(u)。本步得到：U 上可以连续选择 n 个根。<h4>第4步：写出 n 个局部逆</h4>回忆：每个 k 给出一支 n 次根。<div class="eq">$$s_k(u)=\exp\!\left(\frac{i(\theta(u)+2\pi k)}{n}\right),\qquad k=0,\ldots,n-1.$$</div>代入得 pₙ(sₖ(u))=u。本步得到：得到 n 个连续局部截面。<h4>第5步：验证覆盖片互不相交</h4>回忆：不同 k 的辐角相差 2π/n，而 U 足够短。令 Vₖ=sₖ(U)，则 Vₖ 两两不交，且 pₙ|Vₖ 的逆正是 sₖ。本步得到：局部逆像分裂为 n 张片。<h4>第6步：得出 n 重覆叠</h4>回忆：所有原像都由 n 个根公式列出。<div class="eq">$$p_n^{-1}(U)=V_0\sqcup\cdots\sqcup V_{n-1}.$$</div>每张片同胚到 U。本步得到：pₙ 是 n 重覆叠。<h4>第7步：选基本群生成元</h4>回忆：π₁(S¹,1)≅Z，正向绕一圈的环路代表 1。<div class="eq">$$\alpha(t)=e^{2\pi it},\qquad[\alpha]=1.$$</div>定义域和目标域都使用这一生成元。本步得到：诱导同态可以在一个生成元上计算。<h4>第8步：把生成环路代入 pₙ</h4>回忆：复数幂指数相乘。<div class="eq">$$(p_n\circ\alpha)(t)=(e^{2\pi it})^n=e^{2\pi int}.$$</div>它在目标圆周正向绕 n 圈。本步得到：生成元的像是 n。<h4>第9步：写出诱导同态</h4>回忆：Z 的群同态由 1 的像唯一决定。<div class="eq">$$(p_n)_*:\mathbb Z\to\mathbb Z,\qquad m\longmapsto nm.$$</div>其像为 nZ，核为 0。本步得到：题目所述 p₍*₎π₁(S¹)=nZ 得到。<h4>第10步：用提升终点交叉核对</h4>回忆：目标中的一圈从 z=1 开始提升。<div class="eq">$$\widetilde\gamma(t)=e^{2\pi it/n},\qquad\widetilde\gamma(1)=e^{2\pi i/n}.$$</div>除 n=1 外终点不是 1，所以一圈不在子群 nZ 中；绕 n 圈才闭合。本步得到：提升图像与代数计算一致。<h4>第11步：计算覆叠变换</h4>回忆：乘以 n 次单位根不改变 n 次方。<div class="eq">$$R_k(z)=e^{2\pi ik/n}z,\qquad k=0,\ldots,n-1.$$</div>这些旋转在纤维上传递作用，复合按 k 模 n 相加。本步得到：Deck(pₙ)≅Z/nZ。<div class="keybox">$$\boxed{p_n(z)=z^n\text{ 是 }n\text{ 重覆叠},\qquad(p_n)_*(\mathbb Z)=n\mathbb Z}$$</div><div class="memobox"><strong>一句话记忆：</strong>n 次方把定义域的一圈变成目标中的 n 圈；反过来，目标一圈的提升只走完定义域的 1/n 圈。</div>`
  },
  "t5": {
    0: L`<h4>我们要做什么</h4>完整分类圆周 (S^1) 的连通覆叠，并把子群、覆叠次数、具体映射和万有覆叠逐一对上。<h4>第1步：先写出基本群</h4>回忆：圆周的基本群由正向绕一圈生成。<div class="eq">$$\pi_1(S^1,1)\cong\mathbb Z.$$</div>整数 k 表示带符号绕 k 圈。本步得到：分类问题化为列出 Z 的子群。<h4>第2步：列出 Z 的全部子群</h4>回忆：整数群的每个非零子群都有最小正元素 n。除零子群外，若 n 是最小正元素，用带余除法 k=qn+r 可证余数 r 也在子群，最小性迫使 r=0。本步得到：所有子群恰为 nZ，其中 n=0,1,2,…。<h4>第3步：处理 n≥1 的具体覆叠</h4>回忆：nZ 的指数是 n。<div class="eq">$$p_n:S^1\to S^1,\qquad p_n(z)=z^n.$$</div>上一节已验证它是 n 重覆叠，且 ((p_n)_*(m)=nm)。本步得到：pₙ 对应子群 nZ。<h4>第4步：直接数纤维核对次数</h4>回忆：对 w=eⁱθ，n 次根按 k=0,…,n−1 编号。<div class="eq">$$p_n^{-1}(w)=\{e^{i(\theta+2\pi k)/n}:0\le k<n\}.$$</div>所以纤维有 n 个点，与指数 [Z:nZ]=n 一致。本步得到：代数指数等于几何层数。<h4>第5步：处理 n=1</h4>回忆：子群 Z 本身指数 1。p₁(z)=z 是恒等覆叠；每条底空间环路提升后都闭合。本步得到：最大子群对应最少的一层。<h4>第6步：处理 n=0</h4>回忆：记号 0Z 表示零子群 {0}，不是常值幂映射。<div class="eq">$$p_0:\mathbb R\to S^1,\qquad p_0(t)=e^{2\pi it}.$$</div>R 单连通，所以诱导基本群像是 {0}。本步得到：零子群对应无限层万有覆叠。<h4>第7步：核对万有覆叠的纤维</h4>回忆：e²πⁱᵗ=1 当且仅当 t∈Z。<div class="eq">$$p_0^{-1}(1)=\mathbb Z.$$</div>无限指数 [Z:{0}]=∞ 与无限纤维完全一致。本步得到：子群指数仍正确预言层数。<h4>第8步：说明为什么没有遗漏</h4>回忆：S¹ 满足道路连通、局部道路连通、半局部单连通。分类定理说每个连通覆叠都由一个 Z 的子群得到，而第 2 步已经列尽全部子群。本步得到：列表 pₙ 与万有覆叠是完备的。<h4>第9步：计算覆叠变换群</h4>回忆：Z 是阿贝尔群，所以每个子群 nZ 都正规。<div class="eq">$$\operatorname{Deck}(p_n)\cong\mathbb Z/n\mathbb Zquad(n\ge1),\qquad \operatorname{Deck}(p_0)\cong\mathbb Z.$$</div>有限情形由单位根旋转实现，无限情形由整数平移实现。本步得到：圆周的每个连通覆叠都是正规覆叠。<h4>第10步：解释提升闭合规则</h4>回忆：底环路绕 k 圈代表整数 k。<div class="eq">$$\text{提升在 }p_n\text{ 中闭合}\quad\Longleftrightarrow\quad k\in n\mathbb Z.$$</div>也就是必须绕 n 的整数倍圈。本步得到：图形上的“回到原层”精确等于子群隶属。<h4>第11步：整理分类表</h4>回忆：n 同时控制子群、层数和幂映射。n=1 是恒等覆叠；n≥2 是有限 n 层；n=0 是 R 给出的无限层万有覆叠。本步得到：S¹ 的连通覆叠分类完成。<div class="keybox">$$\boxed{n\mathbb Z\longleftrightarrow(z\mapsto z^n),\ n\ge1;\qquad\{0\}\longleftrightarrow(\mathbb R\to S^1)}$$</div><div class="memobox"><strong>一句话记忆：</strong>圆周覆叠只有一种整数参数：nZ 说“绕 n 圈才回原层”，也正好产生 n 层覆叠。</div>`,
    1: L`<h4>我们要做什么</h4>把环面写成 (T^2=\mathbb R^2/\mathbb Z^2)，用 (\mathbb Z^2) 的子群直接看出万有覆叠、圆柱型无限覆叠和有限层环面覆叠。<h4>第1步：写出万有覆叠</h4>回忆：坐标逐项模 1 会把平面卷成环面。<div class="eq">$$q:\mathbb R^2\to T^2,\qquad q(x,y)=(e^{2\pi ix},e^{2\pi iy}).$$</div>R² 单连通，纤维是 Z²。本步得到：π₁(T²)≅Z²，且 q 是万有覆叠。<h4>第2步：从任意子群构造覆叠</h4>回忆：分类定理把 H≤Z² 变成万有覆叠的轨道商。<div class="eq">$$Y_H=\mathbb R^2/H\longrightarrow\mathbb R^2/\mathbb Z^2=T^2.$$</div>H 中整数向量按平移作用。本步得到：环面覆叠可通过给平面加入部分晶格识别来画。<h4>第3步：秩 0：什么都不先粘</h4>回忆：零子群不识别任何非零平移。R²/{0}=R²，仍是单连通平面；投到底环面时每个点上方有 Z² 那么多层。本步得到：H=0 给万有覆叠。<h4>第4步：秩 1：只粘一个方向</h4>回忆：若 H 由一个非零整数向量 v 生成，就只把沿 v 相差整数倍的点识别。<div class="eq">$$\mathbb R^2/\langle v\rangle\cong S^1\times\mathbb R.$$</div>垂直于 v 的方向仍不封口。本步得到：秩 1 子群产生圆柱型无限覆叠。<h4>第5步：具体算一个秩 1 例子</h4>回忆：取 H=⟨(2,0)⟩。先把宽度 2 的竖条两侧粘合得到圆柱；底环面的 x 方向绕两圈才闭合，y 方向的提升永远沿无限方向移动。本步得到：“一个方向有限、一个方向无限”能从生成元直接读出。<h4>第6步：秩 2：得到另一张环面</h4>回忆：两个线性无关整数向量张成平面中的子晶格。若 H=⟨v₁,v₂⟩，取它们张成的平行四边形，把两对对边粘合便得到 R²/H，它仍同胚于环面。本步得到：满秩子群产生有限层环面覆叠。<h4>第7步：用行列式算层数</h4>回忆：令 v₁=(a,c)、v₂=(b,d)，把它们作矩阵 A 的两列。<div class="eq">$$[\mathbb Z^2:H]=|\det A|=|ad-bc|.$$</div>几何上这也是基本平行四边形相对单位方格的面积。本步得到：有限覆叠次数可直接计算。<h4>第8步：写出具体有限覆叠映射</h4>回忆：整数矩阵保持 Z²，因此在线性映射 x↦Ax 下可下降到商。<div class="eq">$$f_A:T^2\to T^2,\qquad [x]\longmapsto[Ax].$$</div>若 det A≠0，它是 |det A| 重覆叠。本步得到：矩阵给出可代入计算的环面覆叠。<h4>第9步：算一个二重例子</h4>回忆：取 A=diag(2,1)。<div class="eq">$$f_A(z,w)=(z^2,w),\qquad|\det A|=2.$$</div>每个目标点在第一坐标有两个平方根，第二坐标唯一。本步得到：得到显式二重环面覆叠。<h4>第10步：判断正规性</h4>回忆：Z² 是阿贝尔群，所以每个子群都正规。<div class="eq">$$\operatorname{Deck}(Y_H/T^2)\cong\mathbb Z^2/H.$$</div>满秩时这是阶为指数的有限阿贝尔群；低秩时是无限群。本步得到：所有连通环面覆叠都是正规覆叠。<h4>第11步：归纳图形变化</h4>回忆：H 的秩告诉有几个方向已经首尾粘合。秩 0：平面；秩 1：先粘一对边成圆柱；秩 2：再粘另一方向成环面。本步得到：每一步粘合与子群生成元一一对应。<div class="keybox">$$\boxed{H\le\mathbb Z^2\quad\longmapsto\quad\mathbb R^2/H\to T^2,\qquad\deg=[\mathbb Z^2:H]}$$</div><div class="memobox"><strong>一句话记忆：</strong>在平面上选几个独立整数平移来识别：不选是平面，选一个方向是圆柱，选两个方向是环面。</div>`,
    2: L`<h4>我们要做什么</h4>用标号图具体构造 8 字形 (R=S^1_a\vee S^1_b) 的一个二重覆叠，并从顶点与边数算出覆叠图的基本群秩。<h4>第1步：写出底图与基本群</h4>回忆：8 字形是一点上粘两条圆环。<div class="eq">$$\pi_1(R,v)\cong F(a,b).$$</div>a、b 是两条有向环路，没有交换关系。本步得到：覆叠分类变成自由群 F(a,b) 的子群分类。<h4>第2步：选择一个指数 2 子群</h4>回忆：给自由群定义满同态到 Z/2。<div class="eq">$$\varphi:F(a,b)\to\mathbb Z/2,\qquad\varphi(a)=1,\quad\varphi(b)=0.$$</div>令 H=ker φ，则 [F(a,b):H]=2。本步得到：对应覆叠应有两个顶点层。<h4>第3步：先画两个纤维顶点</h4>回忆：底图唯一顶点 v 的纤维大小等于子群指数。画 v₀、v₁ 两点，分别代表两个右陪集 H 与 Ha。本步得到：初始状态有 2 个顶点。<h4>第4步：按 a 的陪集作用连边</h4>回忆：读一条 a 边会把陪集 Hg 送到 Hga。因为 φ(a)=1，a 交换两个陪集：v₀ 读 a 到 v₁，v₁ 再读 a 到 v₀。按有向图模型需画两条 a 标号边，保证每个顶点恰有一条出 a 边和一条入 a 边。本步得到：a 在两层之间来回切换。<h4>第5步：按 b 的陪集作用连边</h4>回忆：φ(b)=0，所以乘 b 不改变陪集。在 v₀ 与 v₁ 各画一条 b 环。每个顶点附近现在各有 a、b 两种方向的一份局部副本。本步得到：b 在各自层内闭合。<h4>第6步：检查局部覆叠条件</h4>回忆：图的覆叠要求每个上方顶点的星形邻域同胚到下方顶点的星形邻域。v₀、v₁ 各有一条出 a、一条入 a、一条出 b、一条入 b；投影只需忘掉顶点下标和边的层号。本步得到：所得标号图确实是二重覆叠。<h4>第7步：数覆叠图的元素</h4>回忆：按非定向一胞腔计数，每个底边在二重覆叠中有两条提升。<div class="eq">$$V=2,\qquad E=2\cdot2=4.$$</div>四条边可看成两条 a 型与两个 b 环。本步得到：得到可用于 Euler 公式的 V、E。<h4>第8步：计算基本群秩</h4>回忆：连通有限图的基本群是秩 (E-V+1) 的自由群。<div class="eq">$$\operatorname{rank}\pi_1(\widetilde R)=E-V+1=4-2+1=3.$$</div>这也与 Schreier 指数公式 (1+2(2-1)=3) 一致。本步得到：H 是秩 3 的自由群。<h4>第9步：写出三个具体生成元</h4>回忆：从 v₀ 出发的闭合词必须含偶数个 a。<div class="eq">$$a^2,\qquad b,\qquad aba^{-1}$$</div>都落在 ker φ，并可由选生成树后的三条非树边读出。本步得到：覆叠图把抽象子群生成元变成可走的闭路。<h4>第10步：观察非正规覆叠会怎样</h4>回忆：一般子群 H 的陪集图仍能构造覆叠，但只有 H 正规时所有层具有全局一致的对称交换。本例 H 是同态的核，所以正规，非平凡覆叠变换交换 v₀、v₁，并保持 a、b 标号。本步得到：本例是正规二重覆叠。<h4>第11步：说明自由群为何产生丰富图形</h4>回忆：F(a,b) 有大量不同有限指数和无限指数子群。每个子群的 Schreier 陪集图都满足“每顶点每标号各有一入一出”，但顶点数、环和连接方式可以完全不同。本步得到：8 字形覆叠的丰富性就是自由群子群结构的几何版本。<div class="keybox">$$\boxed{H=\ker(F(a,b)\to\mathbb Z/2)\quad\longleftrightarrow\quad\text{二重标号图},\qquad\pi_1(\widetilde R)\cong F_3}$$</div><div class="memobox"><strong>一句话记忆：</strong>把陪集当顶点，把“右乘 a 或 b”当有向边；子群表立刻变成一张真正的覆叠图。</div>`
  },
  "t6": {
    0: L`<h4>我们要做什么</h4>用 Van Kampen 从头计算两圆楔和 (S^1_a\vee S^1_b) 的基本群，并说明为什么结果是自由群而不是 (\mathbb Z^2)。<h4>第1步：选覆盖</h4>回忆：把楔点附近稍微加厚可得到开集。取 U 包含整个 a 圆和 b 圆上一小段，取 V 包含整个 b 圆和 a 圆上一小段，使 U∪V=X。本步得到：两个开集覆盖 8 字形。<h4>第2步：找形变收缩核</h4>回忆：多出来的小短枝是树枝，可沿自身缩回楔点。U 强形变收缩到 a 圆，V 强形变收缩到 b 圆。本步得到：π₁(U)≅Z⟨a⟩，π₁(V)≅Z⟨b⟩。<h4>第3步：分析交集</h4>回忆：可把覆盖取得使 U∩V 只是楔点附近的一棵小树。树可缩，所以 (\pi_1(U\cap V)=1)。本步得到：交集不提供任何非平凡关系。<h4>第4步：代入 Van Kampen</h4>回忆：沿平凡群融合的自由积就是普通自由积。<div class="eq">$$\pi_1(X)\cong\mathbb Z*_{1}\mathbb Z=\mathbb Z*\mathbb Z.$$</div>两个因子的生成元分别记 a、b。本步得到：得到两生成元自由群候选。<h4>第5步：写出群表示</h4>回忆：Z 的表示是 ⟨a|〉 和 ⟨b|〉。<div class="eq">$$\pi_1(S^1\vee S^1)\cong\langle a,b\mid angle=F(a,b).$$</div>竖线右边为空表示没有额外关系。本步得到：基本群是 F₂。<h4>第6步：解释一个词的几何意义</h4>回忆：群乘法是依次走环路。词 (ab^{-1}a) 表示先正向绕 a 圆，再反向绕 b 圆，最后再正向绕 a 圆。本步得到：自由词逐字记录经过哪一瓣及方向。<h4>第7步：做一次约化计算</h4>回忆：相邻的生成元与其逆元是立即折返，可缩掉。<div class="eq">$$ab\,b^{-1}a^{-1}b=aa^{-1}b=b.$$</div>第一处 bb⁻¹ 消掉，随后 aa⁻¹ 消掉。本步得到：自由群计算就是消去相邻逆对。<h4>第8步：说明为什么 a 与 b 不交换</h4>回忆：交集基本群平凡，Van Kampen 没给出 ab=ba 的关系。词 aba⁻¹b⁻¹ 已经约化且非空，所以不是单位元。本步得到：F₂ 非阿贝尔。<h4>第9步：与环面对比</h4>回忆：环面也是从 a、b 两个一胞腔开始，但还粘了一个二胞腔。环面的二胞腔边界正好给关系 aba⁻¹b⁻¹=1；8 字形没有这块面，所以不能加入该关系。本步得到：是否有二胞腔决定两个环是否交换。<h4>第10步：收束</h4>回忆：U 与 V 各贡献一个生成元，交集没有贡献关系。因此所有约化的 a、b 词都代表不同环路同伦类。本步得到：计算完成。<div class="keybox">$$\boxed{\pi_1(S^1\vee S^1)\cong\mathbb Z*\mathbb Z=F_2}$$</div><div class="memobox"><strong>一句话记忆：</strong>两瓣各给一个绕圈字母，交集是一棵树，不能强迫两个字母发生任何关系。</div>`,
    1: L`<h4>我们要做什么</h4>把环面看成在 8 字形一骨架上粘一个二胞腔，逐段读出附着词，并用 Van Kampen 算出 (\pi_1(T^2))。<h4>第1步：从正方形商模型开始</h4>回忆：环面由正方形上下边同向识别、左右边同向识别得到。四个角粘成一个顶点，两对边分别成为一胞腔 a、b，正方形内部成为一个二胞腔。本步得到：CW 计数为 V=1、E=2、F=1。<h4>第2步：读正方形边界词</h4>回忆：沿有向边界逆时针走一圈，要根据每边箭头判断正向或反向。<div class="eq">$$w=aba^{-1}b^{-1}.$$</div>这就是交换子 [a,b]。本步得到：二胞腔沿交换子附着到 8 字形。<h4>第3步：选用于 Van Kampen 的开集</h4>回忆：令 U 是一骨架加上一圈很薄的二胞腔领圈，令 V 是二胞腔内部稍微扩大的一张开盘。U 形变收缩到 a∨b，V 可缩，U∩V 形变收缩到一个圆环。本步得到：三个局部基本群都容易计算。<h4>第4步：计算 U、V、交集的群</h4>回忆：形变收缩保持基本群。<div class="eq">$$\pi_1(U)=F(a,b),\qquad\pi_1(V)=1,\qquad\pi_1(U\cap V)=\mathbb Z\langle c\rangle.$$</div>c 绕二胞腔领圈一周。本步得到：Van Kampen 的三个输入准备完成。<h4>第5步：算交集生成元进入 U 的像</h4>回忆：在 U 中把领圈推到一骨架，就是沿附着映射走一遍。<div class="eq">$$i_*(c)=aba^{-1}b^{-1}.$$</div>这里每个字母都来自边界四段。本步得到：交集圆在 U 中贡献交换子。<h4>第6步：算交集生成元进入 V 的像</h4>回忆：V 是开盘，任何环路都可缩。<div class="eq">$$j_*(c)=1\in\pi_1(V).$$</div>所以融合关系会把 U 中的交换子设为单位元。本步得到：二胞腔的作用就是杀死其边界词。<h4>第7步：代入融合自由积</h4>回忆：与平凡群融合等价于商掉 i_*(π₁(U∩V)) 的正规闭包。<div class="eq">$$\pi_1(T^2)\cong F(a,b)/\langle\!\langle aba^{-1}b^{-1}\rangle\!\rangle.$$</div>只有一个二胞腔，所以只有这一族共轭关系。本步得到：得到标准群表示。<h4>第8步：把关系逐步化简</h4>回忆：关系 aba⁻¹b⁻¹=1 可在群中移项。<div class="eq">$$aba^{-1}b^{-1}=1\iff aba^{-1}=b\iff ab=ba.$$</div>第二个等价式右乘 b，第三个再右乘 a。本步得到：a 与 b 被迫交换。<h4>第9步：构造到 Z² 的同态</h4>回忆：阿贝尔群 Z² 由 (1,0)、(0,1) 生成且交换。令 a↦(1,0)、b↦(0,1)。交换子映到 0，因此该映射从商群良好定义并满射到 Z²。本步得到：得到群表示到 Z² 的自然同态。<h4>第10步：构造反向同态</h4>回忆：在商群中 a、b 已交换。<div class="eq">$$(m,n)\longmapsto a^m b^n$$</div>保持加法，因为 (a^mb^na^{m′}b^{n′}=a^{m+m′}b^{n+n′})。本步得到：得到 Z² 到群表示的同态。<h4>第11步：验证互为逆</h4>回忆：两个同态在各自生成元上互相还原。a、b 被送回 a、b；标准基向量被送回标准基向量。因此复合均为恒等。本步得到：群表示同构于 Z²。<h4>第12步：用环路提升核对两个整数</h4>回忆：万有覆叠 R²→T² 中，基点环路的提升终点与起点相差整数向量。绕 a m 次、绕 b n 次的提升位移是 (m,n)，位移相加正好对应群乘法。本步得到：几何图像与 Z² 计算一致。<h4>第13步：收束</h4>回忆：一骨架提供自由生成元，二胞腔提供一个附着关系。关系是交换子等于 1，所以两个独立方向可以任意整数次绕行且彼此交换。本步得到：环面基本群计算完成。<div class="keybox">$$\boxed{\pi_1(T^2)\cong\langle a,b\mid aba^{-1}b^{-1}=1\rangle\cong\mathbb Z^2}$$</div><div class="memobox"><strong>一句话记忆：</strong>8 字形先给自由群；填上正方形这块面时，其边界交换子被缩掉，于是 a、b 开始交换。</div>`,
    2: L`<h4>我们要做什么</h4>从标准 (4g) 边多边形构造亏格 (g) 的闭可定向曲面 (\Sigma_g)，再逐项读出生成元、唯一关系和 Euler 示性数。<h4>第1步：写出标准边界标号</h4>回忆：每个把手贡献一对边 aᵢ、bᵢ。<div class="eq">$$a_1b_1a_1^{-1}b_1^{-1}\;a_2b_2a_2^{-1}b_2^{-1}\cdots a_gb_ga_g^{-1}b_g^{-1}.$$</div>相同字母的两条边按箭头粘合。本步得到：多边形边界是 g 个交换子的乘积。<h4>第2步：追踪顶点识别</h4>回忆：按标准箭头依次粘边时，每个多边形角最终都能通过端点配对连到第一个角。因此 4g 个原角点形成一个等价类。本步得到：商空间只有 V=1 个零胞腔。<h4>第3步：追踪边识别</h4>回忆：每个字母出现两次，粘成一条一胞腔。a₁,b₁,…,a_g,b_g 共 2g 个字母，所以商空间有 E=2g 条一胞腔。本步得到：一骨架是 2g 个圆的楔和。<h4>第4步：追踪内部</h4>回忆：多边形内部没有参与边界识别。整个内部成为一个开二胞腔，所以 F=1。本步得到：曲面有一个二胞腔。<h4>第5步：先算一骨架基本群</h4>回忆：n 个圆的楔和基本群是 n 生成元自由群。<div class="eq">$$\pi_1(X^1)=F(a_1,b_1,\ldots,a_g,b_g).$$</div>此时还没有关系。本步得到：得到 2g 个自由生成元。<h4>第6步：确定二胞腔附着词</h4>回忆：沿多边形边界走一圈正是附着映射 S¹→X¹。<div class="eq">$$w=\prod_{i=1}^{g}[a_i,b_i],\qquad[a_i,b_i]=a_ib_ia_i^{-1}b_i^{-1}.$$</div>乘积按 i 从 1 到 g 排列。本步得到：唯一二胞腔将杀死 w。<h4>第7步：设置 Van Kampen 覆盖</h4>回忆：取 U 为一骨架加二胞腔领圈，V 为二胞腔内部开盘。U≃X¹，V 可缩，U∩V≃S¹；交集生成元进 U 的像为 w，进 V 的像为 1。本步得到：与环面的计算结构完全相同。<h4>第8步：应用定理得到表示</h4>回忆：融合关系只要求 w=1。<div class="eq">$$\pi_1(\Sigma_g)\cong\left\langle a_1,b_1,\ldots,a_g,b_g\ middle| \prod_{i=1}^{g}[a_i,b_i]=1\right\rangle.$$</div>这不是要求每个交换子单独等于 1，而只要求它们的乘积为 1。本步得到：得到曲面群标准表示。<h4>第9步：检查 g=1</h4>回忆：亏格 1 曲面就是环面。<div class="eq">$$\langle a_1,b_1\mid[a_1,b_1]=1\rangle\cong\mathbb Z^2.$$</div>与上一例完全吻合。本步得到：公式在最小非零亏格上通过检查。<h4>第10步：检查 g=2 的关系</h4>回忆：双环面有四个生成元。<div class="eq">$$\pi_1(\Sigma_2)=\langle a_1,b_1,a_2,b_2\mid[a_1,b_1][a_2,b_2]=1\rangle.$$</div>可改写为 ([a_2,b_2]=[a_1,b_1]^{-1})，但不能推出每个交换子为 1。本步得到：双环面群通常非阿贝尔。<h4>第11步：计算 Euler 示性数</h4>回忆：胞腔计数给 χ=V−E+F。<div class="eq">$$\chi(\Sigma_g)=1-2g+1=2-2g.$$</div>g=0 得 2，g=1 得 0，g=2 得 −2。本步得到：群表示与曲面的胞腔计数来自同一粘合图。<h4>第12步：做阿贝尔化核对</h4>回忆：基本群阿贝尔化后每个交换子自动变成 1。唯一关系在阿贝尔化中不再产生限制，因此 (H_1(\Sigma_g)\cong\mathbb Z^{2g})。本步得到：这与 2g 条一胞腔的同调直觉一致。<h4>第13步：收束粘合过程</h4>回忆：多边形先把 4g 个角并成 1 点，再把成对边并成 2g 条环，最后保留内部为一块面。一骨架给生成元，面边界给唯一关系。本步得到：整个计算没有跳过任何识别阶段。<div class="keybox">$$\boxed{\pi_1(\Sigma_g)\cong\left\langle a_1,b_1,\ldots,a_g,b_g\ middle| \prod_{i=1}^{g}[a_i,b_i]=1\right\rangle}$$</div><div class="memobox"><strong>一句话记忆：</strong>每个把手给一对字母；唯一一块面沿所有交换子的乘积粘上去，所以只增加一条总关系。</div>`
  },
  "t7": {
    0: L`<h4>我们要做什么</h4>用绕数证明代数基本定理：每个次数 (d\ge1) 的复多项式都有复根。关键是把“无根”变成一族圆周映射，再分别从小半径与大半径算出互相矛盾的绕数。<h4>第1步：写出多项式</h4>回忆：设<div class="eq">$$p(z)=a_dz^d+a_{d-1}z^{d-1}+\cdots+a_0,\qquad a_d\ne0,\ d\ge1.$$</div>目标是证明存在 z₀ 使 p(z₀)=0。本步得到：次数与首项已固定。<h4>第2步：作无根反设</h4>回忆：若 p 在 C 中处处非零，就能连续归一化到单位圆。<div class="eq">$$p(z)\ne0\qquad\text{对所有 }z\in\mathbb C.$$</div>这保证后面所有分母合法。本步得到：可以沿任意半径观察 p 的方向。<h4>第3步：定义半径 r 上的圆周映射</h4>回忆：单位圆参数 z∈S¹，rz 是半径 r 的圆。<div class="eq">$$f_r(z)=\frac{p(rz)}{|p(rz)|}:S^1\to S^1.$$</div>分子非零，故 fᵣ 连续。本步得到：每个 r≥0 都得到一个绕数。<h4>第4步：把不同半径连成同伦</h4>回忆：二变量公式<div class="eq">$$F(z,r)=\frac{p(rz)}{|p(rz)|}$$</div>在 S¹×[0,R] 上连续，所以 f₀ 与 f_R 同伦。本步得到：绕数必须与 r 无关。<h4>第5步：计算 r=0 的映射</h4>回忆：无根反设特别给 p(0)=a₀≠0。<div class="eq">$$f_0(z)=\frac{a_0}{|a_0|}$$</div>与 z 无关，是常值映射。本步得到：deg(f₀)=0。<h4>第6步：分离大半径首项</h4>回忆：对 |z|=1，提取 a_dR^dz^d。<div class="eq">$$p(Rz)=a_dR^dz^d\left(1+\frac{a_{d-1}}{a_dR}z^{-1}+\cdots+\frac{a_0}{a_dR^d}z^{-d}\right).$$</div>括号中是 1 加误差。本步得到：可用 R 大控制低次项。<h4>第7步：给误差作统一估计</h4>回忆：单位圆上 |z⁻ᵏ|=1。<div class="eq">$$\left|\frac{p(Rz)}{a_dR^dz^d}-1\right|\le\sum_{k=0}^{d-1}\frac{|a_k|}{|a_d|R^{d-k}}.$$</div>右边与 z 无关并随 R→∞ 趋于 0。本步得到：可选 R 使误差处处小于 1。<h4>第8步：选定足够大的 R</h4>回忆：取 R 使上一步的和小于 1。于是 p(Rz) 与首项 a_dR^dz^d 的相对误差小于 100%，特别地它们之间的直线段不经过 0。本步得到：可在 C∖{0} 中把 p(Rz) 变到首项。<h4>第9步：写出不穿零的同伦</h4>回忆：令 0≤s≤1。<div class="eq">$$H_s(z)=(1-s)p(Rz)+s\,a_dR^dz^d.$$</div>除以非零首项后，H_s/(a_dR^dz^d) 位于以 1 为中心、半径小于 1 的圆盘内，故不为 0。本步得到：归一化 H_s 给 f_R 与首项方向的同伦。<h4>第10步：计算首项方向映射</h4>回忆：正实数 Rᵈ 不影响方向。<div class="eq">$$z\longmapsto\frac{a_dR^dz^d}{|a_dR^dz^d|}=\frac{a_d}{|a_d|}z^d.$$</div>常数单位复数只是旋转，次数为 1 的旋转不改变绕数。本步得到：该映射的度数等于 z↦zᵈ 的度数。<h4>第11步：直接算 z 的 d 次方绕数</h4>回忆：当 z=eⁱθ 从 θ=0 走到 2π，zᵈ=eⁱᵈθ 的辐角增加 2πd。<div class="eq">$$\deg(z\mapsto z^d)=d.$$</div>所以 deg(f_R)=d。本步得到：大半径圆的像绕原点 d 圈。<h4>第12步：与小半径同伦不变性冲突</h4>回忆：同伦映射的度数相同。<div class="eq">$$0=\deg(f_0)=\deg(f_R)=d.$$</div>但题设 d≥1。本步得到：无根反设产生整数矛盾。<h4>第13步：推出存在复根</h4>回忆：唯一被否定的假设是 p(z) 处处非零。因此至少存在 z₀∈C 使 p(z₀)=0。本步得到：代数基本定理的存在部分得证。<h4>第14步：说明证明画面</h4>回忆：小圆上 p 的方向几乎不变，大圆上最高次项迫使方向绕 d 圈。如果中间没有零点，这些圆周映射应能随半径连续变形，绕数却不能从 0 变成 d。本步得到：根就是阻止绕数矛盾的必经零点。<div class="keybox">$$\boxed{\deg p\ge1\quad\Longrightarrow\quad\exists z_0\in\mathbb C: p(z_0)=0}$$</div><div class="memobox"><strong>一句话记忆：</strong>无根会让所有半径的方向映射同伦；可小圆绕 0 圈、大圆由首项逼着绕 d 圈，所以中间必碰到零。</div>`,
    1: L`<h4>我们要做什么</h4>证明毛球定理：偶维球面 (S^2) 上不存在处处非零的连续切向量场。我们把假想向量场归一化，用它显式构造恒等映射到对径映射的同伦，再比较映射度。<h4>第1步：写出切向量条件</h4>回忆：S² 在 x 点的切空间是与 x 正交的平面。<div class="eq">$$T_xS^2=\{v\in\mathbb R^3:\langle v,x\rangle=0\}.$$</div>设 V(x) 连续且 V(x)∈TₓS²。本步得到：切向量与半径向量正交。<h4>第2步：作处处非零反设</h4>回忆：毛球定理否认的是无零点向量场。<div class="eq">$$V(x)\ne0\qquad\text{对所有 }x\in S^2.$$</div>因此长度函数始终为正。本步得到：可以安全归一化。<h4>第3步：归一化向量场</h4>回忆：除以长度保留切向方向。<div class="eq">$$u(x)=\frac{V(x)}{\|V(x)\|},\qquad\|u(x)\|=1,\quad\langle u(x),x\rangle=0.$$</div>u 仍连续。本步得到：每点得到一个与 x 正交的单位向量。<h4>第4步：构造旋转同伦</h4>回忆：正交的两个单位向量可按圆周公式旋转。<div class="eq">$$H(x,t)=\cos(\pi t)x+\sin(\pi t)u(x),\qquad0\le t\le1.$$</div>这把 x 沿由 x、u(x) 张成的大圆移动。本步得到：得到候选 H:S²×I→R³。<h4>第5步：核对始终落在 S²</h4>回忆：展开范数平方，交叉项含 ⟨x,u(x)⟩=0。<div class="eq">$$\|H(x,t)\|^2=\cos^2(\pi t)+\sin^2(\pi t)=1.$$</div>所以 H 的值不离开球面。本步得到：H 真的是 S² 中的同伦。<h4>第6步：核对两个端点映射</h4>回忆：代入 t=0 与 t=1。<div class="eq">$$H(x,0)=x,\qquad H(x,1)=-x.$$</div>所以恒等映射 id 与对径映射 A(x)=−x 同伦。本步得到：反设推出 id≃A。<h4>第7步：回忆映射度的同伦不变性</h4>回忆：S²→S² 的映射在 H₂(S²)≅Z 上是乘某个整数，这个整数就是度。同伦映射诱导相同同调同态，因此有相同度。本步得到：若 id≃A，就必须 deg(id)=deg(A)。<h4>第8步：计算恒等映射的度</h4>回忆：恒等映射保持基本类。<div class="eq">$$\deg(\operatorname{id}_{S^2})=1.$$</div>它既不翻转也不重复覆盖球面。本步得到：同伦一端的度为 1。<h4>第9步：计算对径映射的度</h4>回忆：Sⁿ 上对径映射的度为 (−1)ⁿ⁺¹。<div class="eq">$$\deg(A|_{S^2})=(-1)^3=-1.$$</div>也可把 A 看成 R³ 中线性映射 −I，其行列式为 −1，故反转定向。本步得到：同伦另一端的度为 −1。<h4>第10步：得到矛盾</h4>回忆：同伦不变性要求 1=−1。这在整数中不成立，因此处处非零向量场不能存在。本步得到：至少有一点 x 满足 V(x)=0。<h4>第11步：解释“毛旋”画面</h4>回忆：u(x) 给出每点梳毛方向，H 试图沿该方向把每点转半圈到对径点。若毛处处有方向，这个半圈旋转会连续完成；度数却说保持定向的 id 无法连续变成反转定向的 A。本步得到：零点是连续梳毛无法避开的地方。<h4>第12步：指出偶维推广</h4>回忆：同一构造适用于 S²ᵏ。对径映射在 S²ᵏ 上度为 (−1)²ᵏ⁺¹=−1，与恒等映射度 1 不同。本步得到：每个正偶维球面都没有处处非零切向量场。<div class="keybox">$$\boxed{\forall V\in\Gamma(TS^2)\text{ 连续},\quad\exists x\in S^2: V(x)=0}$$</div><div class="memobox"><strong>一句话记忆：</strong>若每根“毛”都有非零方向，就能沿毛把每点连续转到对径点；但恒等映射度为 1、对径映射度为 −1，二者不能同伦。</div>`,
    2: L`<h4>我们要做什么</h4>证明 (\mathbb R^2) 与 (\mathbb R^3) 不同胚，并用约化同调说明一般的 (\mathbb R^m\cong\mathbb R^n) 必须有 (m=n)。<h4>第1步：作同胚反设</h4>回忆：假设存在同胚 (F:\mathbb R^2\to\mathbb R^3)。令 p=F(0)。限制 F 会把去掉 0 的定义域送到去掉 p 的值域。本步得到：准备比较穿孔空间。<h4>第2步：限制同胚到补空间</h4>回忆：同胚与逆映射都会保持集合差。<div class="eq">$$F|:\mathbb R^2\setminus\{0\}\xrightarrow{\cong}\mathbb R^3\setminus\{p\}.$$</div>平移把右边同胚到 R³∖{0}。本步得到：若原空间同胚，两个穿孔空间也同胚。<h4>第3步：径向收缩二维穿孔空间</h4>回忆：非零向量可沿射线调节长度为 1。<div class="eq">$$H(x,t)=\left((1-t)+\frac{t}{\|x\|}\right)x.$$</div>系数为正，所以过程不碰原点；终态为 x/‖x‖∈S¹。本步得到：R²∖{0}≃S¹。<h4>第4步：径向收缩三维穿孔空间</h4>回忆：同一个公式适用于 R³。它把 R³∖{0} 强形变收缩到 S²。本步得到：R³∖{0}≃S²。<h4>第5步：计算左边基本群</h4>回忆：同伦等价保持基本群。<div class="eq">$$\pi_1(\mathbb R^2\setminus\{0\})\cong\pi_1(S^1)\cong\mathbb Z.$$</div>绕原点次数给出整数。本步得到：左边基本群非平凡。<h4>第6步：计算右边基本群</h4>回忆：S² 单连通。<div class="eq">$$\pi_1(\mathbb R^3\setminus\{0\})\cong\pi_1(S^2)=0.$$</div>二维球面上的每条环路都能缩掉。本步得到：右边基本群平凡。<h4>第7步：利用同胚不变性得到矛盾</h4>回忆：同胚会诱导基本群同构。Z 不同构于平凡群，因为前者含非单位元素 1，后者只有单位元。本步得到：不存在 R²→R³ 的同胚。<h4>第8步：推广到任意维数的第一步</h4>回忆：若 Rᵐ≅Rⁿ，仍可去掉一个对应点。<div class="eq">$$\mathbb R^m\setminus\{0\}\cong\mathbb R^n\setminus\{0\}.$$</div>两边分别形变收缩到 Sᵐ⁻¹ 与 Sⁿ⁻¹。本步得到：问题化为区分不同维球面。<h4>第9步：选能看见维数的同调群</h4>回忆：球面的约化同调只在自己的最高维非零。<div class="eq">$$\widetilde H_k(S^{m-1};\mathbb Z)=\begin{cases}\mathbb Z,&k=m-1,\\0,&k\ne m-1.\end{cases}$$</div>Sⁿ⁻¹ 同理。本步得到：非零同调所在次数记录了维数。<h4>第10步：比较非零次数</h4>回忆：同胚诱导所有次数的同调同构。若 m<n，则在 k=m−1 时左边是 Z，而右边是 0；若 n<m 对称地交换两边，也矛盾。本步得到：只能有 m=n。<h4>第11步：说明基本群方法的范围</h4>回忆：π₁ 能区分 S¹ 与 S²，因此足够解决 2 维对 3 维。但 S²、S³ 等都单连通，继续只看 π₁ 就失效；约化同调同时处理全部维数。本步得到：选择不变量要与问题维度匹配。<h4>第12步：收束</h4>回忆：穿孔使欧氏空间暴露出一个包围缺点的球面。这个球面的非零同调维数是原欧氏空间维数减 1，所以任何同胚都必须保持原维数。本步得到：结论完成。<div class="keybox">$$\boxed{\mathbb R^m\cong\mathbb R^n\quad\Longleftrightarrow\quad m=n}$$</div><div class="memobox"><strong>一句话记忆：</strong>去掉一点后，Rⁿ 会露出一颗 Sⁿ⁻¹；它唯一的非零约化同调次数把维数永久记录下来。</div>`
  },
  "t8": {
    0: L`<h4>我们要计算什么</h4>
计算穿孔平面到单位圆的径向形变收缩，逐项核对整个过程中不碰原点。

<h4>第1步：确定两个映射</h4>
回忆：径向投影把非零向量缩放到单位长度。

令 \(X=\mathbb R^2\setminus\{0\}\)，\(r(x)=x/\|x\|\)，\(i:S^1\hookrightarrow X\)。

本步得到：有 \(r:X\to S^1\) 与 \(i:S^1\to X\)。

<h4>第2步：计算一个复合</h4>
回忆：单位圆上的点满足 \(\

u\|=1\)。|\(ri(u)=u/\|u\|=u\)。

本步得到：圆上的复合严格等于恒等。

<h4>第3步：构造另一复合的同伦</h4>
回忆：两点 \(x\) 与 \(x/\

x\|\) 在同一正射线上。|令 \(H(x,t)=(1-t)x+t\,x/\|x\|\)。

本步得到：得到从 \(x\) 到 \(ir(x)\) 的直线公式。

<h4>第4步：核对两端</h4>
回忆：\(t=0,1\) 时凸组合退化成端点。

\(H(x,0)=x\)，\(H(x,1)=x/\|x\|\)。

本步得到：确实连接 \(\mathrm{id}_X\) 与 \(ir\)。

<h4>第5步：证明不碰原点</h4>
回忆：因子 \(1-t+t/\

x\|\) 始终正。|\(H(x,t)=(1-t+t/\|x\|)x\)，其中 \(\|x\|>0\) 且 \(0\le t\le1\)，故 \(H(x,t)\ne0\)。

本步得到：同伦始终留在 \(X\)。

<h4>第6步：核对圆周固定</h4>
回忆：若 \(u\in S^1\)，则 \(r(u)=u\)。

\(H(u,t)=(1-t)u+tu=u\)。

本步得到：这是强形变收缩。

<h4>第7步：核对连续性</h4>
回忆：范数和除以非零范数在 \(X\) 上连续。

公式是连续函数的加法与乘法，且分母始终非零。

本步得到：形变收缩合法。

<h4>第8步：计算不变量</h4>
回忆：形变收缩诱导基本群同构。

\(\pi_1(X)\cong\pi_1(S^1)\cong\mathbb Z\)，一圈绕数为 \(1\)。

本步得到：穿孔平面的一维洞被圆保留。

<div class="keybox">$$\boxed{\mathbb R^2\setminus\{0\}\simeq S^1,\quad\pi_1\cong\mathbb Z}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>只改半径不改方向，整条轨迹始终不经过被挖掉的原点。</div>`,
    1: L`<h4>我们要计算什么</h4>
把 Möbius 带写成商空间，显式收缩横向坐标并核对缝合处的公式。

<h4>第1步：给出商模型</h4>
回忆：Möbius 带可由矩形两端反向粘合。

令 \(M=([0,1]\times[-1,1])/\!\sim\)，关系为 \((0,s)\sim(1,-s)\)。

本步得到：扭转由端点符号反转体现。

<h4>第2步：找中心圆</h4>
回忆：横坐标 \(s=0\) 在粘合下不变。

子集 \(C=\{[u,0]:u\in[0,1]\}\) 且 \([0,0]=[1,0]\)，故 \(C\cong S^1\)。

本步得到：有一个圆形收缩核。

<h4>第3步：定义逐时收缩</h4>
回忆：横向纤维是区间，可按系数 \(1-t\) 缩短。

设 \(H([u,s],t)=[u,(1-t)s]\)。

本步得到：有候选形变。

<h4>第4步：核对商映射良定且连续</h4>
回忆：在商空间上定义映射，要检查等价代表给同一结果；商映射的连续性由兼容的原空间映射下降得到。

矩形上的 \(F(u,s,t)=(u,(1-t)s)\) 连续，并满足 \(F(0,s,t)=(0,(1-t)s)\sim(1,-(1-t)s)=F(1,-s,t)\)。所以 \(H([u,s],t)=[u,(1-t)s]\) 良定。商映射与区间的乘积仍是商映射，故连续的 \(F\) 下降为连续的 \(H:M\times I\to M\)。

本步得到：收缩在扭转缝合处也保持连续。

<h4>第5步：核对起点</h4>
回忆：\(1-0=1\)。

\(H([u,s],0)=[u,s]\)。

本步得到：初态是恒等。

<h4>第6步：核对终点</h4>
回忆：\(1-1=0\)。

\(H([u,s],1)=[u,0]\in C\)。

本步得到：末态落到中心圆。

<h4>第7步：核对中心固定</h4>
回忆：在 \(s=0\) 时乘任何系数仍为零。

\(H([u,0],t)=[u,0]\)。

本步得到：这是强形变收缩。

<h4>第8步：计算基本群</h4>
回忆：同伦等价保持基本群。

\(\pi_1(M)\cong\pi_1(C)\cong\pi_1(S^1)\cong\mathbb Z\)。

本步得到：扭转不改变中心一圈的基本群。

<h4>第9步：区分同胚</h4>
回忆：同胚保持局部边界性质。

Möbius 带有边界点，而圆是一维流形；若二者同胚则局部维数相同，与一维和二维的局部模型不符。

本步得到：同伦等价比同胚弱。

<div class="keybox">$$\boxed{M\simeq S^1,\quad\pi_1(M)\cong\mathbb Z}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>扭带沿每根横向线段缩到中点，端点反向粘合仍相容。</div>`,
    2: L`<h4>我们要计算什么</h4>
计算 \(\mathbb R^n\) 的收缩同伦，核对连续性、端点和强形变收缩条件。

<h4>第1步：指定收缩目标</h4>
回忆：可缩是 \(\mathrm{id}_X\) 与某常值映射同伦。

取原点 \(0\in\mathbb R^n\)，令 \(c_0(x)=0\)。

本步得到：目标是从每点滑到原点。

<h4>第2步：写出线性同伦</h4>
回忆：欧氏空间可以做凸组合。

设 \(H(x,t)=(1-t)x+t0=(1-t)x\)。

本步得到：有候选同伦公式。

<h4>第3步：核对起始时刻</h4>
回忆：把 \(t=0\) 代入。

\(H(x,0)=(1-0)x=x\)。

本步得到：起始映射是恒等。

<h4>第4步：核对结束时刻</h4>
回忆：把 \(t=1\) 代入。

\(H(x,1)=(1-1)x=0=c_0(x)\)。

本步得到：结束映射是常值。

<h4>第5步：核对固定核</h4>
回忆：强形变收缩要求核上的点全程不动。

\(H(0,t)=(1-t)0=0\) 对每个 \(t\) 成立。

本步得到：原点固定。

<h4>第6步：核对连续性</h4>
回忆：标量乘法 \(\mathbb R\times\mathbb R^n\to\mathbb R^n\) 连续。

\((x,t)\mapsto(1-t)x\) 是连续映射的复合。

本步得到：公式确实是一段同伦。

<h4>第7步：写同伦逆</h4>
回忆：点空间到 \(\mathbb R^n\) 的映射只能选一个点。

取 \(r(x)=0\) 和包含 \(i:\{0\}\hookrightarrow\mathbb R^n\)；\(ri=\mathrm{id}_{\{0\}}\)，\(ir=c_0\simeq\mathrm{id}_{\mathbb R^n}\)。

本步得到：两空间同伦等价。

<h4>第8步：求基本群作为检验</h4>
回忆：基本群在同伦等价下不变，点的基本群平凡。

\(\pi_1(\mathbb R^n,0)\cong\pi_1(\{0\})=\{e\}\)。

本步得到：收缩公式也解释了环路为何可缩。

<div class="keybox">$$\boxed{\mathbb R^n\simeq\{0\},\quad\pi_1(\mathbb R^n)=0}$$</div>

<div class="memobox"><strong>一句话记忆：</strong>沿直线把每个向量乘以逐渐变小的系数。</div>`
  },
  "t9": {
    0: L`<h4>我们要做什么</h4>把三角形边界写成圆周的单纯复形，逐项检查顶点、边、局部邻域和 Euler 示性数。<h4>第1步：列出三个顶点</h4>回忆：0 单形是顶点。取 (v_0,v_1,v_2) 三个不同顶点。本步得到：V=3。<h4>第2步：列出三条边</h4>回忆：每条 1 单形连两个顶点。取 (e_{01},e_{12},e_{20})，不加入填充三角形。本步得到：E=3、F=0。<h4>第3步：写出几何实现</h4>回忆：每条抽象边实现为线段，并按公共端点粘合。三条线段首尾相连形成三角形边界 (\partial\Delta^2)。本步得到：|K| 是一条闭合折线。<h4>第4步：构造到单位圆的映射</h4>回忆：用弧长参数沿边界走一周。把总周长归一为 1，再送到 (e^{2\pi it})；每条边依次覆盖圆周的三分之一。本步得到：得到连续双射 |K|→S¹。<h4>第5步：证明是同胚</h4>回忆：|K| 紧致，S¹ 是 Hausdorff。紧空间到 Hausdorff 空间的连续双射自动是同胚。本步得到：该复形确实三角剖分 S¹。<h4>第6步：检查每个顶点附近</h4>回忆：一维流形的每点局部像开区间。每个 vᵢ 恰接两条边；把两条半边在顶点处拼合，局部就是一个开区间。本步得到：粘合处没有端点奇点。<h4>第7步：计算 Euler 示性数</h4>回忆：有限复形 χ=V−E。<div class="eq">$$\chi(S^1)=3-3=0.$$</div>这与圆周同调的 1−1=0 一致。本步得到：组合计数通过核对。<h4>第8步：说明为何两条边不够</h4>回忆：抽象单纯复形中，同一对顶点之间至多有一个 1 单形。两个顶点若只连一条边得到区间；不能用两条重边形成圆，所以最少需要三个顶点。本步得到：三角形边界是最小单纯剖分。<div class="keybox">$$\boxed{|K|=|\partial\Delta^2|\cong S^1,\qquad(V,E,F)=(3,3,0)}$$</div><div class="memobox"><strong>一句话记忆：</strong>圆周不是一条“首尾同顶点的单纯边”；抽象单纯复形不允许重边，所以最小模型是三顶点、三边的三角形边界。</div>`,
    1: L`<h4>我们要做什么</h4>证明任意单纯三角剖分的环面至少需要 7 个顶点和 14 个三角形，并给出达到下界的 7 顶点组合模型。<h4>第1步：设组合计数</h4>回忆：记顶点、边、三角形数为 V,E,F。环面是闭曲面，所以每条边恰被两个三角形使用。本步得到：可双重计数三角形的边。<h4>第2步：建立 3F=2E</h4>回忆：每个三角形贡献三次边出现。<div class="eq">$$3F=2E.$$</div>左边按面数，右边按每条边被两个面共用。本步得到：得到第一条计数式。<h4>第3步：代入 Euler 示性数</h4>回忆：环面 χ(T²)=0。<div class="eq">$$0=V-E+F=V-E+\frac{2E}{3}=V-\frac E3.$$</div>所以 E=3V，继而 F=2V。本步得到：全部计数由 V 决定。<h4>第4步：使用简单复形边数上界</h4>回忆：V 个顶点的抽象单纯复形最多有 (\binom V2) 条不同边。<div class="eq">$$3V=E\le\binom V2=\frac{V(V-1)}2.$$</div>V>0，约去 V 得 6≤V−1。本步得到：V≥7。<h4>第5步：推出面数下界</h4>回忆：已知 F=2V。<div class="eq">$$F\ge2\cdot7=14.$$</div>同时 E≥21。本步得到：任何环面单纯三角剖分至少有 14 面。<h4>第6步：给出 7 顶点构造</h4>回忆：顶点取模 7 的 0,…,6。对每个 i 加入两类三角形 ([i,i+1,i+3]) 与 ([i,i+2,i+3])，所有下标模 7；共 14 个。本步得到：构造达到计数下界。<h4>第7步：逐边核对出现次数</h4>回忆：边的差模 7 可归为 ±1、±2、±3。代入两类三角形可检查每条无向边恰出现两次；总共有全部 (\binom72=21) 条边。本步得到：复形没有边界。<h4>第8步：核对可定向性</h4>回忆：给第一类三角形定向 ([i,i+1,i+3])，给第二类反向定向 ([i,i+3,i+2])。每条公共边在相邻两面中方向相反，所以基本 2 链的边界为零。本步得到：所得闭曲面可定向。<h4>第9步：识别为环面</h4>回忆：计数给 χ=7−21+14=0。闭、连通、可定向曲面分类定理说明 χ=2−2g=0，故 g=1。本步得到：几何实现同胚于 T²。<h4>第10步：说明“最少”已证</h4>回忆：下界来自任意剖分，构造给出等号例子。因此 7 顶点、21 边、14 面都是真正的最小值。本步得到：不是只展示某个方便剖分。<div class="keybox">$$\boxed{V_{\min}=7,\qquad E=21,\qquad F=14}$$</div><div class="memobox"><strong>一句话记忆：</strong>闭三角曲面先用 3F=2E，再用 χ(T²)=0 得 E=3V、F=2V；简单图最多有 V(V−1)/2 条边，立即逼出 V≥7。</div>`,
    2: L`<h4>我们要做什么</h4>验证 (\mathbb{RP}^2) 的最小三角剖分计数 ((V,E,F)=(6,15,10))，并说明它如何预示 (H_1\cong\mathbb Z/2)。<h4>第1步：写闭曲面计数关系</h4>回忆：RP² 无边界，所以每边仍被两个三角形使用。<div class="eq">$$3F=2E.$$</div>Euler 示性数 χ(RP²)=1。本步得到：有 E=3(V−1)、F=2(V−1)。<h4>第2步：用边数上界求 V</h4>回忆：简单复形满足 E≤V(V−1)/2。<div class="eq">$$3(V-1)\le\frac{V(V-1)}2.$$</div>V>1，约去 V−1 得 6≤V。本步得到：至少需要 6 个顶点。<h4>第3步：算等号时 E,F</h4>回忆：令 V=6。<div class="eq">$$E=3(6-1)=15,\qquad F=2(6-1)=10.$$</div>15 恰等于 (\binom62)，所以每对顶点都有一条边。本步得到：候选最小剖分是邻接完全的。<h4>第4步：列出十个面</h4>回忆：在顶点 1,…,6 上取面 123、124、135、146、156、236、245、256、345、346。本步得到：得到 10 个不同三角形。<h4>第5步：核对每条边两次</h4>回忆：逐面列边并计数。例如 12 在 123、124 中，34 在 345、346 中；对全部 15 对顶点同样检查，每条恰出现两次。本步得到：复形是无边界二维伪流形。<h4>第6步：检查顶点链接</h4>回忆：一个顶点的链接由与它同面的对边组成。例如顶点 1 的链接边为 23、24、35、46、56，它们组成五边形 2−3−5−6−4−2；其余顶点同理。本步得到：每点邻域是圆盘，故确为闭曲面。<h4>第7步：识别非可定向性</h4>回忆：若能给十个面一致定向，沿公共边传播方向后会在某条闭链返回相反方向。等价地，此复形的基本 2 链无法让所有公共边系数相消；它没有整数二维基本类。本步得到：该闭曲面不可定向。<h4>第8步：用分类定理识别</h4>回忆：闭连通曲面 χ=1 且不可定向。不可定向亏格 k 的 χ=2−k，故 k=1。本步得到：几何实现是 RP²。<h4>第9步：连接到胞腔模型</h4>回忆：RP² 也可由一个 0 胞腔、一条 1 胞腔和一个沿度 2 粘合的 2 胞腔构成。胞腔边界 (d_2:\mathbb Z\to\mathbb Z) 是乘 2。本步得到：扭转来自“边界绕两次”。<h4>第10步：计算一维同调</h4>回忆：d₁=0，im d₂=2Z。<div class="eq">$$H_1(\mathbb{RP}^2;\mathbb Z)=\ker d_1/\operatorname{im}d_2=\mathbb Z/2\mathbb Z.$$</div>非平凡一维类绕两次才成为边界。本步得到：三角剖分与胞腔计算给出同一扭转。<div class="keybox">$$\boxed{(V,E,F)=(6,15,10),\qquad H_1(\mathbb{RP}^2;\mathbb Z)\cong\mathbb Z/2}$$</div><div class="memobox"><strong>一句话记忆：</strong>χ=1 与每边两面先逼出 V≥6；六顶点模型不可定向，正是 RP²，而度 2 附着把一维生成元变成二阶扭转。</div>`
  },
  "t10": {
    0: L`<h4>我们要做什么</h4>用一个 0 胞腔和一个 2 胞腔的链复形逐维计算球面 (S^2) 的同调，并解释每个群对应什么“洞”。<h4>第1步：选最简 CW 结构</h4>回忆：S² 可看成 D² 的边界 S¹ 全部压成一点。因此有一个 0 胞腔 e⁰、没有 1 胞腔、一个 2 胞腔 e²。本步得到：链群由胞腔数直接读出。<h4>第2步：写链复形</h4>回忆：每个 n 胞腔贡献一份 Z。<div class="eq">$$0\to C_2=\mathbb Z\xrightarrow{d_2}C_1=0\xrightarrow{d_1}C_0=\mathbb Z\to0.$$</div>本步得到：中间群为零迫使两个边界映射都是零。<h4>第3步：计算 H₂</h4>回忆：H₂=ker d₂/im d₃。d₂:Z→0 的核是全部 Z，且 C₃=0，所以 im d₃=0。本步得到：<div class="eq">$$H_2(S^2)=\mathbb Z.$$</div><h4>第4步：计算 H₁</h4>回忆：H₁=ker d₁/im d₂。ker(0→Z)=0，im(Z→0)=0，所以 0/0 是零群。本步得到：<div class="eq">$$H_1(S^2)=0.$$</div><h4>第5步：计算 H₀</h4>回忆：H₀=ker d₀/im d₁。d₀ 视为到 0 的映射，核是 Z；d₁ 的像是 0。本步得到：<div class="eq">$$H_0(S^2)=\mathbb Z.$$</div><h4>第6步：处理其他维数</h4>回忆：其余维没有胞腔。Cₙ=0 直接给 Hₙ=0（n≠0,2）。本步得到：同调列表完整。<h4>第7步：解释生成元</h4>回忆：H₀ 的 1 表示唯一连通分支；H₂ 的 1 是整张有向球面的基本类。H₁=0 表示任何一维闭链都能由二维链填充。本步得到：代数结果与几何洞一致。<h4>第8步：用 Euler 示性数核对</h4>回忆：自由秩交错和为 1−0+1。<div class="eq">$$\chi(S^2)=2.$$</div>也等于胞腔交错和 1+1。本步得到：计算通过独立核对。<div class="keybox">$$\boxed{H_k(S^2)=\begin{cases}\mathbb Z,&k=0,2,\\0,&\text{其他}.\end{cases}}$$</div><div class="memobox"><strong>一句话记忆：</strong>最简 CW 结构在维 0、2 各放一份 Z，中间没有链群，所以顶维基本类存活而一维洞为零。</div>`,
    1: L`<h4>我们要做什么</h4>从环面的一个顶点、两条一胞腔和一个二胞腔出发，计算全部同调群，并把边界交换子为何在阿贝尔链群中变成零写清楚。<h4>第1步：列胞腔</h4>回忆：正方形对边粘合后四角成一个 e⁰，两对边成 a,b，内部成 e²。所以 C₂=Z、C₁=Z²、C₀=Z。本步得到：链群已确定。<h4>第2步：计算 d₁</h4>回忆：a、b 都从唯一顶点出发又回到它。<div class="eq">$$d_1(a)=e^0-e^0=0,\qquad d_1(b)=0.$$</div>故 d₁ 是零映射。本步得到：所有 1 链都是闭链。<h4>第3步：读二胞腔附着词</h4>回忆：正方形边界词为 aba⁻¹b⁻¹。胞腔边界只记录每条一胞腔的总带符号次数。本步得到：a 与 b 都正向一次、反向一次。<h4>第4步：计算 d₂</h4>回忆：分别收集系数。<div class="eq">$$d_2(e^2)=(1-1)a+(1-1)b=0.$$</div>注意基本群中交换子可能非平凡，但阿贝尔链群只看指数和。本步得到：d₂ 也是零映射。<h4>第5步：计算 H₂</h4>回忆：d₂ 的核是 Z，d₃ 像为 0。<div class="eq">$$H_2(T^2)=\mathbb Z.$$</div>本步得到：环面有一个定向二维基本类。<h4>第6步：计算 H₁</h4>回忆：ker d₁=Z²，im d₂=0。<div class="eq">$$H_1(T^2)=\mathbb Z^2.$$</div>两个生成元由经线、纬线给出。本步得到：有两个独立一维同调方向。<h4>第7步：计算 H₀ 与高维</h4>回忆：唯一零胞腔给连通性。<div class="eq">$$H_0(T^2)=\mathbb Z,\qquad H_k(T^2)=0\ (k>2).$$</div>本步得到：全部维数完成。<h4>第8步：用 Euler 示性数核对</h4>回忆：胞腔数给 1−2+1=0；Betti 数给 1−2+1=0。两种计算一致。本步得到：没有漏掉自由秩。<h4>第9步：对比基本群</h4>回忆：π₁(T²)=⟨a,b|[a,b]=1⟩≅Z²。H₁ 是 π₁ 的阿贝尔化；本例 π₁ 已阿贝尔，所以仍是 Z²。本步得到：解释了同调结果。<div class="keybox">$$\boxed{(H_0,H_1,H_2)(T^2)=(\mathbb Z,\mathbb Z^2,\mathbb Z)}$$</div><div class="memobox"><strong>一句话记忆：</strong>二胞腔边界是交换子；进入阿贝尔链群后 a、b 都正负各一次而相消，所以两条一维生成元和一份二维基本类都留下。</div>`,
    2: L`<h4>我们要做什么</h4>用 (\mathbb{RP}^2) 的度 2 附着映射逐维计算整数同调，明确说明 (\mathbb Z/2) 为什么出现、顶维同调为什么消失。<h4>第1步：列标准 CW 结构</h4>回忆：RP² 在维 0、1、2 各有一个胞腔。一骨架 RP¹≅S¹；二胞腔边界沿这个圆绕两次。本步得到：C₂=C₁=C₀=Z。<h4>第2步：计算 d₁</h4>回忆：唯一一胞腔两端都粘到同一零胞腔。<div class="eq">$$d_1=0: \mathbb Z\to\mathbb Z.$$</div>本步得到：每个 1 链都是闭链。<h4>第3步：计算 d₂</h4>回忆：胞腔边界系数是附着映射 S¹→S¹ 的度。RP² 的附着映射把对径边界点识别，沿目标圆总共绕两圈。本步得到：<div class="eq">$$d_2=\times2:\mathbb Z\to\mathbb Z.$$</div><h4>第4步：求 H₂</h4>回忆：乘 2 在 Z 上没有非零核。<div class="eq">$$H_2=\ker d_2/\operatorname{im}d_3=0/0=0.$$</div>本步得到：不可定向闭曲面没有整数顶维基本类。<h4>第5步：求 H₁</h4>回忆：ker d₁=Z，im d₂=2Z。<div class="eq">$$H_1=\mathbb Z/2\mathbb Z.$$</div>生成闭链 e¹ 不是边缘，但 2e¹=d₂(e²) 是边缘。本步得到：得到二阶扭转。<h4>第6步：求 H₀</h4>回忆：d₀=0 且 im d₁=0。<div class="eq">$$H_0=\mathbb Z.$$</div>本步得到：空间连通。<h4>第7步：处理高维</h4>回忆：没有三维及以上胞腔。Cₖ=0 直接给 Hₖ=0（k>2）。本步得到：同调列表完整。<h4>第8步：用 Euler 示性数核对自由秩</h4>回忆：扭转不贡献 Betti 数。b₀=1,b₁=0,b₂=0，所以 χ=1；胞腔数也是 1−1+1=1。本步得到：自由部分计数一致。<h4>第9步：用“绕两圈”记忆</h4>回忆：e¹ 的同调类记作 α。<div class="eq">$$2\alpha=0,\qquad\alpha\ne0.$$</div>这正是 Z/2 的定义关系。本步得到：几何附着次数直接变成代数扭转阶数。<div class="keybox">$$\boxed{(H_0,H_1,H_2)(\mathbb{RP}^2)=(\mathbb Z,\mathbb Z/2,0)}$$</div><div class="memobox"><strong>一句话记忆：</strong>二胞腔边界绕一骨架两圈，所以 d₂ 是乘 2：一维生成元本身不消失，绕两次却成为边缘，于是留下 Z/2。</div>`
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
