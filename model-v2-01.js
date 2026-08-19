window.MODEL_GUIDE=window.MODEL_GUIDE||[];
window.MODEL_GUIDE.push(String.raw`
<header class="hero">
  <p class="eyebrow">MODEL TRANSPARENCY · v1.2</p>
  <h1>模型方程式與文獻依據</h1>
  <p class="lead">本頁逐式對照目前模擬器真正執行的規則，並區分「生物學機制已有文獻支持」、「通用建模形式」與「仍待實驗校準的係數」。</p>
  <div class="badges"><span class="badge good">方向性機制有依據</span><span class="badge method">方程形式是建模選擇</span><span class="badge warn">精確係數尚未校準</span></div>
</header>
<section class="notice"><strong>先讀結論：</strong>這是一個可解釋的機制式 Agent-Based Model，不是特定螞蟻物種的已驗證預測模型。文獻支持螞蟻會依化學辨識、資源情境、營養狀態與溫度改變行為；但程式中的 −1.45、2.00、0.22、72% 等數值，目前是原型參數，不是文獻直接估計值。</section>
<section class="legend card">
  <h2>證據標記</h2>
  <div class="legend-grid">
    <div><span class="evidence e1">A</span><b>生物學方向有直接或相近證據</b><p>變數與行為方向可由螞蟻或昆蟲研究支持。</p></div>
    <div><span class="evidence e2">B</span><b>通用數學／ABM 方法</b><p>形式合理，但不是螞蟻特有的生理定律。</p></div>
    <div><span class="evidence e3">C</span><b>暫定係數或操作門檻</b><p>需用指定物種、巢群與場地資料重新估計。</p></div>
  </div>
</section>
<section class="equation-card" id="eq1">
  <div class="eq-head"><span>01</span><h2>距離、接觸與辨識</h2><div><i class="evidence e1">A</i><i class="evidence e3">C</i></div></div>
  <div class="eq">d<sub>ij,t</sub> = √[(x<sub>i,t</sub>−x<sub>j,t</sub>)² + (y<sub>i,t</sub>−y<sub>j,t</sub>)²]</div>
  <div class="eq">接觸 ⇔ d<sub>ij,t</sub> ≤ r<sub>c</sub> + 0.22(L<sub>i</sub>+L<sub>j</sub>)</div>
  <p><b>程式意義：</b>兩個代理人進入接觸半徑後，才觸發一次新的「辨識—攻擊／迴避」決策。這裡以 <i>r</i><sub>c</sub> 表示使用者設定的接觸距離，避免與後面的基準傷害符號混淆。</p>
  <p><b>學理依據：</b>螞蟻可藉觸角感受體表碳氫化合物等化學訊號，以區分巢友與非巢友；近距離接觸作為辨識事件具有明確生物學基礎。</p>
  <p class="caveat"><b>尚未校準：</b>0.22 與接觸半徑並非普遍生物常數，應由影片中的實際觸角／身體接觸距離估計。</p>
</section>
<section class="equation-card" id="eq2">
  <div class="eq-head"><span>02</span><h2>攻擊機率</h2><div><i class="evidence e1">A</i><i class="evidence e2">B</i><i class="evidence e3">C</i></div></div>
  <div class="eq small">q<sub>ij</sub> = tanh{1.7 ln[(L<sub>i</sub>+ε)/(L<sub>j</sub>+ε)]}</div>
  <div class="eq small">η<sub>i,t</sub> = −1.45 + 2.00A<sub>i</sub> + 1.40H + 1.50F<sub>t</sub>C + 0.40h<sub>i,t</sub> + 0.80Sq<sub>ij</sub> − 2.00V<sub>i</sub> − 1.60ID<sub>i,t</sub></div>
  <div class="eq">P<sub>i,t</sub><sup>attack</sup> = clip{[1+exp(−η<sub>i,t</sub>)]<sup>−1</sup>, 0.01, 0.98}</div>
  <p><b>程式意義：</b>A 為個體攻擊傾向、H 為跨物種敵意、F 為是否位於糖源區、C 為資源競爭加成、h 為飢餓、S 為體型權重、V 為迴避傾向、I 為受傷抑制權重、D 為傷害比例。每次「新接觸」抽一次均勻亂數決定攻擊或迴避。</p>
  <p><b>學理依據：</b>非巢友化學辨識、資源競爭情境、先前狀態與個體差異會改變攻擊反應；以 logistic 函數把多項影響映射為 0–1 機率，是離散選擇與隨機 ABM 的標準做法。</p>
  <p class="caveat"><b>重要限制：</b>現有文獻支持影響方向，不支持這組精確權重。尤其「飢餓必然提高攻擊」及「體型較大必然占優」都不是跨物種定律，應視物種與實驗情境估計，甚至允許係數為零或反向。</p>
</section>
<section class="equation-card" id="eq3">
  <div class="eq-head"><span>03</span><h2>有限狀態與轉換規則</h2><div><i class="evidence e1">A</i><i class="evidence e2">B</i><i class="evidence e3">C</i></div></div>
  <div class="eq small">z<sub>i,t</sub> ∈ {探索、接近糖源、取食、觸角辨識、攻擊、迴避、受傷撤退、失能}</div>
  <div class="state-flow"><span>新接觸</span><b>→</b><span>P<sup>attack</sup></span><b>→</b><span>攻擊／迴避</span><br><span>未接觸</span><b>→</b><span>糖源距離＋自身狀態</span><b>→</b><span>取食／接近／探索</span></div>
  <p><b>程式意義：</b>代理人先判斷是否失能、是否接觸、是否位於糖源、是否能感知糖源，再決定當期狀態。傷害超過 72% 時偏向撤退，達 100% 時判為失能。</p>
  <p><b>學理依據：</b>探索、取食、觸角接觸、攻擊與撤退都是可由影片編碼的行為類別；有限狀態機或隱藏馬可夫模型常用來表示動物行為序列。</p>
  <p class="caveat"><b>尚未校準：</b>72%、各狀態持續時間與優先順序是程式規則，不是螞蟻生理臨界值。</p>
</section>
`);