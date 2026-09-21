// 现有大题的逐步解答增强。按题库数组下标定位，避免改动原题的题干与选项。
// 同一道数学命题在知识点与测验中共用经过校对的证明，避免两个版本互相矛盾。
const L = String.raw;
module.exports = function applyQuizDetails(b) {
  function put(bank, index, idea, answer) {
    if (!bank[index] || bank[index].type === 'choice') throw new Error('题库索引失配：' + index);
    bank[index].idea = idea;
    bank[index].answer = answer;
    bank[index].richAnswer = true;
  }

  put(b.riemannBig, 64,
    '从第一基本形式求联络，计算内蕴曲率，再把嵌入的三阶混合偏导交换，推得 Gauss 方程；最后降指标并计算行列式。',
    b.theoremDetails.r3[0]);
  put(b.riemannBig2, 36,
    '先用联络形式和 Stokes 公式推局部 Gauss–Bonnet，再在测地三角剖分上逐片求和，最后数顶点、边与面。',
    b.theoremDetails.r41[0]);
  put(b.riemannBig, 92,
    '把题设的 k>0 写成 1/R²，沿任意极小测地线取正弦形法向变分，逐项计算指标形式并检查不等号方向。',
    L`<h4>参数换算</h4>题设写作 \(\operatorname{Ric}\ge(n-1)k\,g\)，令 \(R=1/\sqrt{k}>0\)，便有 \(k=1/R^2\) 和 \(\pi R=\pi/\sqrt{k}\)。下面逐项证明任意极小测地线不可能长于这个值。` + b.theoremDetails.r51[0]);
  put(b.riemannBig, 74,
    '全局 Gauss–Bonnet 给总曲率；曲面分类给 χ=2−2g。若 K 处处正，再用积分严格为正缩小亏格。',
    b.theoremDetails.r41[0] + L`<h4>补一步：把 Euler 示性数换成亏格</h4>
闭合可定向亏格 \(g\) 曲面的 \(\chi=2-2g\)。因此 \(2\pi\chi=2\pi(2-2g)=4\pi(1-g)\)。若 \(K>0\) 处处成立，紧致性使 \(\int_MK\,dA>0\)，所以 \(4\pi(1-g)>0\)，即 \(g<1\)。亏格是非负整数，故 \(g=0\)；再由闭合可定向曲面分类，\(M\) 同胚于球面。<div class="keybox">$$\boxed{\int_MK\,dA=4\pi(1-g),\qquad K>0\Rightarrow g=0.}$$</div>`);
  put(b.riemannBig, 30,
    '从极坐标度量矩阵、逆矩阵和唯一非零偏导出发，逐个代入 Christoffel 公式。',
    b.quizExpansion.riemann[1].answer);
  put(b.topoBig, 11,
    '由 Klein 瓶的 CW 粘合词读出二维边界，再分别计算核、像与商群。',
    b.quizExpansion.topo[1].answer);

  put(b.riemannBig, 0,
    '先求前三阶导数，再分别把速度、叉积和混合积代入曲率与挠率公式；每个平方和都算到常数。',
    L`<h4>第一步：写出题给参数化</h4>
\(\gamma(t)=(a\cos t,a\sin t,bt)\)，其中 \(a>0,b\ne0\)。这是一般参数 \(t\)，不一定是弧长；因此使用一般参数的曲率、挠率公式。
<h4>第二步：逐分量求第一次导</h4>
\((a\cos t)'=-a\sin t,\ (a\sin t)'=a\cos t,\ (bt)'=b\)，故 \(\gamma'=(-a\sin t,a\cos t,b)\)。
<h4>第三步：算速度</h4>
<div class="eq">$$|\gamma'|^2=a^2\sin^2t+a^2\cos^2t+b^2=a^2+b^2,\qquad|\gamma'|=\sqrt{a^2+b^2}.$$</div>
用到了 \(\sin^2t+\cos^2t=1\)。
<h4>第四步：求第二次导</h4>
对第二步再求导，得到 \(\gamma''=(-a\cos t,-a\sin t,0)\)。
<h4>第五步：按行列式算叉积的第一坐标</h4>
\((\gamma'\times\gamma'')_1=(a\cos t)\cdot0-b(-a\sin t)=ab\sin t\)。
<h4>第六步：算叉积的第二、三坐标</h4>
第二坐标是 \(b(-a\cos t)-(-a\sin t)\cdot0=-ab\cos t\)；第三坐标是 \((-a\sin t)(-a\sin t)-(a\cos t)(-a\cos t)=a^2\)。故 \(\gamma'\times\gamma''=(ab\sin t,-ab\cos t,a^2)\)。
<h4>第七步：算叉积长度</h4>
<div class="eq">$$|\gamma'\times\gamma''|^2=a^2b^2(\sin^2t+\cos^2t)+a^4=a^2(a^2+b^2).$$</div>
因 \(a>0\)，开平方得 \(|\gamma'\times\gamma''|=a\sqrt{a^2+b^2}\)。
<h4>第八步：代曲率公式</h4>
一般参数的曲率为 \(\kappa=|\gamma'\times\gamma''|/|\gamma'|^3\)。第三、七步代入：
<div class="eq">$$\kappa=\frac{a\sqrt{a^2+b^2}}{(\sqrt{a^2+b^2})^3}
=\frac{a\sqrt{a^2+b^2}}{(a^2+b^2)^{3/2}}
=\frac{a}{a^2+b^2}.$$</div>
<h4>第九步：求第三次导</h4>
\(\gamma'''=(a\sin t,-a\cos t,0)\)。挠率公式的分子是混合积 \((\gamma'\times\gamma'')\cdot\gamma'''\)。
<h4>第十步：逐项算混合积</h4>
<div class="eq">$$
(\gamma'\times\gamma'')\cdot\gamma'''
=(ab\sin t)(a\sin t)+(-ab\cos t)(-a\cos t)+a^2\cdot0
=a^2b(\sin^2t+\cos^2t)=a^2b.$$</div>
<h4>第十一步：代挠率公式</h4>
\(\tau=((\gamma'\times\gamma'')\cdot\gamma''')/|\gamma'\times\gamma''|^2\)。第七、十步给分母 \(a^2(a^2+b^2)\)、分子 \(a^2b\)，约去 \(a^2>0\)：
<div class="eq">$$\tau=\frac{a^2b}{a^2(a^2+b^2)}=\frac{b}{a^2+b^2}.$$</div>
挠率保留 \(b\) 的符号，表示螺旋的手性。
<div class="keybox">$$\boxed{\kappa=\frac{a}{a^2+b^2},\qquad\tau=\frac{b}{a^2+b^2}.}$$</div>`);

  put(b.riemannBig, 2,
    '用弧长下的切向量角度表示，把常曲率积分成线性角度，再逐分量积分出圆的参数方程。',
    L`<h4>第一步：写弧长条件</h4>
单位速率给 \(|\gamma'(s)|=1\)，令 \(T(s)=\gamma'(s)\)。在平面里，单位向量可写 \(T=(\cos\theta(s),\sin\theta(s))\)。
<h4>第二步：把曲率写成角度导数</h4>
求导得 \(T'=\theta'(-\sin\theta,\cos\theta)\)，所以 \(\kappa=|T'|=|\theta'|\)。
<h4>第三步：固定转动方向</h4>
因为 \(\kappa\equiv\kappa_0>0\)，连续的 \(\theta'\) 从不为零，符号在连通参数区间恒定。镜像反射若有必要可把负号改正；于是可在允许反射的坐标下取 \(\theta'=\kappa_0\)。
<h4>第四步：第一次积分</h4>
\(\theta'=\kappa_0\) 的积分是 \(\theta(s)=\kappa_0s+\theta_0\)，其中 \(\theta_0\) 为常数。
<h4>第五步：把角度代回切向量</h4>
\(\gamma'(s)=(\cos(\kappa_0s+\theta_0),\sin(\kappa_0s+\theta_0))\)。
<h4>第六步：逐分量第二次积分</h4>
\(\int\cos(\kappa_0s+\theta_0)\,ds=\kappa_0^{-1}\sin(\kappa_0s+\theta_0)\)，\(\int\sin(\kappa_0s+\theta_0)\,ds=-\kappa_0^{-1}\cos(\kappa_0s+\theta_0)\)。因此
<div class="eq">$$\gamma(s)=\left(c_1+\frac{\sin(\kappa_0s+\theta_0)}{\kappa_0},
c_2-\frac{\cos(\kappa_0s+\theta_0)}{\kappa_0}\right).$$</div>
<h4>第七步：认出圆方程</h4>
令圆心 \(c=(c_1,c_2)\)，两坐标减圆心后平方相加：
<div class="eq">$$|\gamma(s)-c|^2
=\kappa_0^{-2}(\sin^2(\kappa_0s+\theta_0)+\cos^2(\kappa_0s+\theta_0))
=\kappa_0^{-2}.$$</div>
<h4>第八步：说明为何说“一段圆弧”</h4>
参数 \(s\) 的定义域未必绕满一周，所以像可以只是圆的一段。半径是平方根 \(1/\kappa_0\)；若原曲线转动方向为负，前面的镜像反射不改变“是一段圆”的结论。
<div class="keybox">$$\boxed{\kappa\equiv\kappa_0>0\Longrightarrow\gamma\text{ 的像是一段半径 }1/\kappa_0\text{ 的圆弧。}}$$</div>`);
};
