window.MODEL_GUIDE=window.MODEL_GUIDE||[];
window.MODEL_GUIDE.push(String.raw`
<section class="card" id="calibration">
  <h2>如何把原型變成可驗證模型？</h2>
  <ol class="steps">
    <li><b>固定生物單位：</b>明確指定物種、巢群、工蟻階級、體長、飢餓處理、溫度、場地尺寸與觀察窗。</li>
    <li><b>影片追蹤：</b>估計步長、速度、轉角、食物接近率、接觸距離、接觸後各行為機率與狀態持續時間。</li>
    <li><b>分層估計：</b>以 logistic／多項 logistic 模型估計攻擊、迴避、中性接觸；把物種配對與巢群設為隨機效果。</li>
    <li><b>留出驗證：</b>用未參與估計的巢群與影片，比較首次到食物時間、距離分布、狀態占比、攻擊率與壟斷指標。</li>
    <li><b>敏感度與不確定性：</b>不要只跑一組「最佳」係數；應報告參數後驗分布或信賴區間下的 Monte Carlo 結果。</li>
  </ol>
  <div class="callout"><b>研究尺度提醒：</b>兩隻孤立工蟻只能代表「個體遭遇」。它不能直接外推到蟻群戰爭、費洛蒙招募、集體決策或群體競爭。若研究問題是物種競爭，後續必須加入巢群層級與多代理人數量處理。</div>
</section>
<section class="card references" id="references">
  <h2>代表性參考文獻</h2>
  <p class="muted">以下文獻支持模型中的機制方向或建模方法；它們並未提供本程式全部的精確係數。DOI 可直接開啟。</p>
  <ol>
    <li>Ozaki, M., Wada-Katsumata, A., Fujikawa, K., et al. (2005). Ant nestmate and non-nestmate discrimination by a chemosensory sensillum. <i>Science, 309</i>, 311–314. <a href="https://doi.org/10.1126/science.1105244" target="_blank" rel="noopener">doi:10.1126/science.1105244</a></li>
    <li>Guerrieri, F. J., Nehring, V., Jørgensen, C. G., Nielsen, J., Galizia, C. G., &amp; d’Ettorre, P. (2009). Ants recognize foes and not friends. <i>Proceedings of the Royal Society B, 276</i>, 2461–2468. <a href="https://doi.org/10.1098/rspb.2008.1860" target="_blank" rel="noopener">doi:10.1098/rspb.2008.1860</a></li>
    <li>Tanner, C. J., &amp; Adler, F. R. (2009). To fight or not to fight: Context-dependent interspecific aggression in competing ants. <i>Animal Behaviour, 77</i>, 297–305. <a href="https://doi.org/10.1016/j.anbehav.2008.10.016" target="_blank" rel="noopener">doi:10.1016/j.anbehav.2008.10.016</a></li>
    <li>Human, K. G., &amp; Gordon, D. M. (1996). Exploitation and interference competition between the invasive Argentine ant, <i>Linepithema humile</i>, and native ant species. <i>Oecologia, 105</i>, 405–412. <a href="https://doi.org/10.1007/BF00328744" target="_blank" rel="noopener">doi:10.1007/BF00328744</a></li>
    <li>Mailleux, A.-C., Deneubourg, J.-L., &amp; Detrain, C. (2006). Starvation drives a threshold triggering communication. <i>Journal of Experimental Biology, 209</i>, 4224–4229. <a href="https://doi.org/10.1242/jeb.02461" target="_blank" rel="noopener">doi:10.1242/jeb.02461</a></li>
    <li>Dussutour, A., &amp; Simpson, S. J. (2009). Communal nutrition in ants. <i>Current Biology, 19</i>, 740–744. <a href="https://doi.org/10.1016/j.cub.2009.03.015" target="_blank" rel="noopener">doi:10.1016/j.cub.2009.03.015</a></li>
    <li>Cerdá, X., Retana, J., &amp; Cros, S. (1998). Critical thermal limits in Mediterranean ant species: Trade-off between mortality risk and foraging performance. <i>Functional Ecology, 12</i>, 45–55. <a href="https://doi.org/10.1046/j.1365-2435.1998.00160.x" target="_blank" rel="noopener">doi:10.1046/j.1365-2435.1998.00160.x</a></li>
    <li>Kareiva, P. M., &amp; Shigesada, N. (1983). Analyzing insect movement as a correlated random walk. <i>Oecologia, 56</i>, 234–238. <a href="https://doi.org/10.1007/BF00379695" target="_blank" rel="noopener">doi:10.1007/BF00379695</a></li>
    <li>Codling, E. A., Plank, M. J., &amp; Benhamou, S. (2008). Random walk models in biology. <i>Journal of the Royal Society Interface, 5</i>, 813–834. <a href="https://doi.org/10.1098/rsif.2008.0014" target="_blank" rel="noopener">doi:10.1098/rsif.2008.0014</a></li>
    <li>Grimm, V., Berger, U., Bastiansen, F., et al. (2006). A standard protocol for describing individual-based and agent-based models. <i>Ecological Modelling, 198</i>, 115–126. <a href="https://doi.org/10.1016/j.ecolmodel.2006.04.023" target="_blank" rel="noopener">doi:10.1016/j.ecolmodel.2006.04.023</a></li>
    <li>Holway, D. A. (1999). Competitive mechanisms underlying the displacement of native ants by the invasive Argentine ant. <i>Ecology, 80</i>, 238–251. <a href="https://doi.org/10.1890/0012-9658(1999)080%5B0238:CMUTDO%5D2.0.CO;2" target="_blank" rel="noopener">doi:10.1890/0012-9658(1999)080[0238:CMUTDO]2.0.CO;2</a></li>
    <li>Pinter-Wollman, N., Wollman, R., Guetz, A., Holmes, S., &amp; Gordon, D. M. (2011). The effect of individual variation on the structure and function of interaction networks in harvester ants. <i>Journal of the Royal Society Interface, 8</i>, 1562–1573. <a href="https://doi.org/10.1098/rsif.2011.0059" target="_blank" rel="noopener">doi:10.1098/rsif.2011.0059</a></li>
  </ol>
</section>
<footer><p>雙蟻資源競爭模擬實驗室 · 模型透明度文件 v1.2</p><p>方程式反映目前程式實作；係數未經物種資料校準前，不應解讀為實證定律。</p></footer>
`);