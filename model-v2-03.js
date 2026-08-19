window.MODEL_GUIDE=window.MODEL_GUIDE||[];
window.MODEL_GUIDE.push(String.raw`
<section class="equation-card" id="eq7">
  <div class="eq-head"><span>07</span><h2>取食、飢餓與糖量</h2><div><i class="evidence e1">A</i><i class="evidence e2">B</i><i class="evidence e3">C</i></div></div>
  <div class="eq">ΔQ<sub>t</sub> = −c(0.45+0.75h<sub>i,t</sub>)Δt</div>
  <div class="eq">h<sub>i,t+Δt</sub> = clip(h<sub>i,t</sub>−0.010Δt,0,1)</div>
  <p><b>程式意義：</b>位於糖源區的螞蟻消耗糖量，且飢餓值逐步下降；較飢餓者在目前模型中取食速率較高。</p>
  <p><b>學理依據：</b>營養需求與飢餓狀態確實會改變螞蟻的食物接受、取食、招募與集體營養調節。</p>
  <p class="caveat"><b>尚未校準：</b>取食速率與飢餓下降是無量綱代理量，並未對應真實蔗糖質量、嗉囊容量或代謝率。若實驗使用方糖，還需考慮含水量及能否直接攝取。</p>
</section>
<section class="equation-card" id="eq8">
  <div class="eq-head"><span>08</span><h2>資源壟斷與終局分類</h2><div><i class="evidence e2">B</i><i class="evidence e3">C</i></div></div>
  <div class="eq">M = |T<sub>A</sub>−T<sub>B</sub>| / (T<sub>A</sub>+T<sub>B</sub>+ε)</div>
  <div class="rule-grid">
    <div><b>M ≈ 0</b><span>取食時間接近共享</span></div><div><b>M → 1</b><span>取食高度集中一方</span></div>
    <div><b>目前門檻</b><span>總取食 ≥ 6 秒且 M ≥ 0.68：壟斷</span></div><div><b>目前門檻</b><span>M &lt; 0.38 且攻擊 ≤ 3：共享／輪流</span></div>
  </div>
  <p><b>程式意義：</b>M 是由兩隻螞蟻累積取食時間建立的對稱集中度指標；另外搭配攻擊次數、接觸和失能狀態，將單次模擬歸類。</p>
  <p><b>學理依據：</b>以占用時間或攝食時間衡量資源控制，是合理的操作化方法；但此 M 與 0.68、0.38、6 秒等門檻是本專案定義，並非生態學公認標準。</p>
  <p class="caveat"><b>建議：</b>正式研究應同時報告連續指標（M、取食差、攻擊時間、接觸時間）與分類結果，並以預先註冊或留出樣本決定門檻。</p>
</section>
<section class="card" id="symbols">
  <h2>滑桿與符號對照</h2>
  <div class="table-wrap"><table><thead><tr><th>符號</th><th>網頁參數</th><th>角色</th><th>目前狀態</th></tr></thead><tbody>
    <tr><td>A<sub>i</sub></td><td>攻擊傾向</td><td>提高攻擊線性預測值</td><td><span class="tag c">待物種校準</span></td></tr>
    <tr><td>H</td><td>跨物種基礎敵意</td><td>表示物種／巢群組合差異</td><td><span class="tag c">需配對資料</span></td></tr>
    <tr><td>C</td><td>食物區競爭加成</td><td>只在糖源附近提高衝突</td><td><span class="tag b">情境機制</span></td></tr>
    <tr><td>h<sub>i</sub></td><td>初始飢餓</td><td>取食、移動與攻擊輸入</td><td><span class="tag c">攻擊方向待驗</span></td></tr>
    <tr><td>V<sub>i</sub></td><td>迴避傾向</td><td>降低攻擊機率</td><td><span class="tag c">待個體校準</span></td></tr>
    <tr><td>L<sub>i</sub></td><td>體長</td><td>接觸範圍與暫定力量</td><td><span class="tag c">非普遍優勢</span></td></tr>
    <tr><td>T</td><td>環境溫度</td><td>調整速度</td><td><span class="tag a">方向有依據</span></td></tr>
    <tr><td>σ<sub>θ</sub></td><td>探索隨機轉向</td><td>角度擴散強度</td><td><span class="tag b">移動模型參數</span></td></tr>
    <tr><td>R<sup>detect</sup></td><td>糖源感知半徑</td><td>觸發定向接近</td><td><span class="tag c">需軌跡估計</span></td></tr>
    <tr><td>δ<sub>0</sub></td><td>單次攻擊傷害</td><td>命中後的基準傷害</td><td><span class="tag c">純暫定尺度</span></td></tr>
  </tbody></table></div>
</section>
<section class="card" id="evidence-map">
  <h2>逐式證據強度總覽</h2>
  <div class="table-wrap"><table><thead><tr><th>模組</th><th>機制方向</th><th>數學形式</th><th>精確係數</th></tr></thead><tbody>
    <tr><td>接觸與化學辨識</td><td><b class="yes">較強</b></td><td>合理簡化</td><td><b class="no">未校準</b></td></tr>
    <tr><td>資源情境與攻擊</td><td><b class="yes">中等至較強</b></td><td>logistic 為方法選擇</td><td><b class="no">未校準</b></td></tr>
    <tr><td>飢餓與取食</td><td><b class="yes">較強</b></td><td>線性消耗為簡化</td><td><b class="no">未校準</b></td></tr>
    <tr><td>溫度與活動速度</td><td><b class="yes">較強</b></td><td>應改物種熱性能曲線</td><td><b class="no">未校準</b></td></tr>
    <tr><td>相關隨機漫步</td><td><b class="yes">方法成熟</b></td><td>有理論基礎</td><td><b class="no">需由軌跡估計</b></td></tr>
    <tr><td>體型、命中、傷害</td><td><b class="maybe">情境相依</b></td><td>原型遊戲機制</td><td><b class="no">未校準</b></td></tr>
    <tr><td>壟斷分類門檻</td><td>操作化指標</td><td>可用但非唯一</td><td><b class="no">專案自訂</b></td></tr>
  </tbody></table></div>
</section>
`);