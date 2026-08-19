window.MODEL_GUIDE=window.MODEL_GUIDE||[];
window.MODEL_GUIDE.push(String.raw`
<section class="equation-card" id="eq4">
  <div class="eq-head"><span>04</span><h2>探索、感知與方向更新</h2><div><i class="evidence e1">A</i><i class="evidence e2">B</i><i class="evidence e3">C</i></div></div>
  <div class="eq">θ<sub>i,t</sub><sup>*</sup> = θ<sub>i,t</sub> + σ<sub>θ</sub>√Δt · ξ<sub>t</sub>,　ξ<sub>t</sub> ~ N(0,1)</div>
  <div class="eq">感知糖源 ⇔ d<sub>iF,t</sub> ≤ R<sub>i</sub><sup>detect</sup>A<sub>F</sub></div>
  <div class="eq small">感知後：θ<sub>i,t</sub><sup>*</sup> = angle(i,F) + (0.22/A<sub>F</sub>)ξ<sub>t</sub></div>
  <p><b>程式意義：</b>未感知糖源時採具方向慣性的隨機探索；進入感知範圍後，方向轉向糖源並保留誤差。√Δt 讓更換時間步長時，角度擴散尺度較一致。</p>
  <p><b>學理依據：</b>相關隨機漫步與角度擴散是昆蟲／動物搜尋軌跡的典型建模方式；螞蟻亦可利用氣味、接觸與局部線索導向食物。</p>
  <p class="caveat"><b>尚未校準：</b>感知半徑乘上吸引強度、0.22/A<sub>F</sub> 的誤差形式，以及高斯噪音假設，都是可替換的模型設計。真實資料可改估 von Mises 轉角分布或狀態別步長分布。</p>
</section>
<section class="equation-card" id="eq5">
  <div class="eq-head"><span>05</span><h2>速度、溫度、傷害與能量</h2><div><i class="evidence e1">A</i><i class="evidence e2">B</i><i class="evidence e3">C</i></div></div>
  <div class="eq small">φ<sub>T</sub> = clip[1 + 0.018(T−25), 0.68, 1.26]</div>
  <div class="eq small">φ<sub>D</sub> = clip(1−0.62D<sub>i,t</sub>, 0.20, 1),　φ<sub>E</sub> = 0.68+0.32E<sub>i,t</sub></div>
  <div class="eq">v<sub>i,t</sub> = v<sub>i</sub><sup>0</sup> φ<sub>T</sub> φ<sub>D</sub> φ<sub>E</sub> m(z<sub>i,t</sub>)</div>
  <div class="eq small">θ<sub>t+Δt</sub> = θ<sub>t</sub> + wrap(θ<sup>*</sup>−θ<sub>t</sub>) min(4.8Δt,1)</div>
  <div class="eq small">x<sub>t+Δt</sub> = x<sub>t</sub> + v<sub>t</sub>cosθ<sub>t</sub>Δt；　y<sub>t+Δt</sub> = y<sub>t</sub> + v<sub>t</sub>sinθ<sub>t</sub>Δt</div>
  <p><b>程式意義：</b>基準速度依溫度、傷害、能量及行為狀態相乘調整，再用一階 Euler 法更新位置。m(z) 使攻擊、逃離、取食等狀態有不同速度。</p>
  <p><b>學理依據：</b>螞蟻是外溫動物，活動與覓食表現受溫度影響；受傷與能量不足降低移動能力也符合一般生物力學方向。</p>
  <p class="caveat"><b>尚未校準：</b>真實熱性能通常是物種特定且非線性的，不能把 1.8%／°C 與上下限視為普遍定律。傷害與能量乘數同樣是原型函數。</p>
</section>
<section class="equation-card" id="eq6">
  <div class="eq-head"><span>06</span><h2>有效力量、命中與傷害</h2><div><i class="evidence e2">B</i><i class="evidence e3">C</i></div></div>
  <div class="eq small">G<sub>i,t</sub> = L<sub>i</sub><sup>0.72</sup>R<sub>i</sub>(1−0.62D<sub>i,t</sub>)(0.75+0.25E<sub>i,t</sub>)</div>
  <div class="eq small">P<sub>i→j</sub><sup>hit</sup> = clip[0.35 + 0.48G<sub>i</sub>/(G<sub>i</sub>+G<sub>j</sub>), 0.28, 0.84]</div>
  <div class="eq small">ΔD<sub>j</sub> = δ<sub>0</sub>{clip(G<sub>i</sub>/G<sub>j</sub>,0.45,2.4)}<sup>0.38</sup>ε,　ε ~ U(0.72,1.28)</div>
  <p><b>程式意義：</b>體長、耐力、傷害與能量組成「有效力量」；相對力量決定命中率和傷害倍率。此處以 δ<sub>0</sub> 表示基準傷害，與接觸半徑 r<sub>c</sub> 分開。</p>
  <p><b>學理依據：</b>這一組主要是可解釋的遊戲／風險模型，而非已知螞蟻戰鬥生理方程。體型可能影響力量或武器尺度，但單體競賽結果也可能更受物種、姿勢、經驗、化學武器與群體數量影響；不可預設大隻必勝。</p>
  <p class="caveat"><b>證據評級較低：</b>0.72、0.48、0.38、命中上下限及均勻傷害擾動皆為暫定值。若要研究發表，應由逐次攻擊影片估計命中與傷害模型，或先移除「失能」機制以降低過度擬真。</p>
</section>
`);