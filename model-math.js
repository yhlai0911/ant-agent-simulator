(() => {
  "use strict";

  const equations = [
    String.raw`d_{ij,t}=\sqrt{\left(x_{i,t}-x_{j,t}\right)^2+\left(y_{i,t}-y_{j,t}\right)^2}`,
    String.raw`\text{接觸}\iff d_{ij,t}\le r_c+0.22\left(L_i+L_j\right)`,
    String.raw`q_{ij}=\tanh\!\left\{1.7\ln\!\left[\frac{L_i+\varepsilon}{L_j+\varepsilon}\right]\right\}`,
    String.raw`\begin{aligned}\eta_{i,t}={}&-1.45+2.00A_i+1.40H+1.50F_tC\\&+0.40h_{i,t}+0.80Sq_{ij}-2.00V_i-1.60ID_{i,t}\end{aligned}`,
    String.raw`P_{i,t}^{\mathrm{attack}}=\operatorname{clip}\!\left\{\left[1+\exp\!\left(-\eta_{i,t}\right)\right]^{-1},\,0.01,\,0.98\right\}`,
    String.raw`z_{i,t}\in\left\{\text{探索},\ \text{接近糖源},\ \text{取食},\ \text{觸角辨識},\ \text{攻擊},\ \text{迴避},\ \text{受傷撤退},\ \text{失能}\right\}`,
    String.raw`\theta_{i,t}^{*}=\theta_{i,t}+\sigma_{\theta}\sqrt{\Delta t}\,\xi_t,\qquad \xi_t\sim\mathcal{N}(0,1)`,
    String.raw`\text{感知糖源}\iff d_{iF,t}\le R_i^{\mathrm{detect}}A_F`,
    String.raw`\theta_{i,t}^{*}=\operatorname{angle}(i,F)+\frac{0.22}{A_F}\xi_t\qquad(\text{感知後})`,
    String.raw`\phi_T=\operatorname{clip}\!\left[1+0.018(T-25),\,0.68,\,1.26\right]`,
    String.raw`\phi_D=\operatorname{clip}\!\left(1-0.62D_{i,t},\,0.20,\,1\right),\qquad \phi_E=0.68+0.32E_{i,t}`,
    String.raw`v_{i,t}=v_i^0\,\phi_T\phi_D\phi_E\,m\!\left(z_{i,t}\right)`,
    String.raw`\theta_{t+\Delta t}=\theta_t+\operatorname{wrap}\!\left(\theta^{*}-\theta_t\right)\min\!\left(4.8\Delta t,1\right)`,
    String.raw`\begin{aligned}x_{t+\Delta t}&=x_t+v_t\cos(\theta_t)\Delta t,\\y_{t+\Delta t}&=y_t+v_t\sin(\theta_t)\Delta t.\end{aligned}`,
    String.raw`G_{i,t}=L_i^{0.72}R_i\left(1-0.62D_{i,t}\right)\left(0.75+0.25E_{i,t}\right)`,
    String.raw`P_{i\to j}^{\mathrm{hit}}=\operatorname{clip}\!\left[0.35+0.48\frac{G_i}{G_i+G_j},\,0.28,\,0.84\right]`,
    String.raw`\Delta D_j=\delta_0\left\{\operatorname{clip}\!\left(\frac{G_i}{G_j},\,0.45,\,2.4\right)\right\}^{0.38}\varepsilon,\qquad \varepsilon\sim\mathcal{U}(0.72,1.28)`,
    String.raw`\Delta Q_t=-c\left(0.45+0.75h_{i,t}\right)\Delta t`,
    String.raw`h_{i,t+\Delta t}=\operatorname{clip}\!\left(h_{i,t}-0.010\Delta t,\,0,\,1\right)`,
    String.raw`M=\frac{\left|T_A-T_B\right|}{T_A+T_B+\varepsilon}`
  ];

  function addBadge(label, className) {
    const badges = document.querySelector(".badges");
    if (!badges || badges.querySelector(`[data-math-badge="${className}"]`)) return;
    const badge = document.createElement("span");
    badge.className = `badge ${className}`;
    badge.dataset.mathBadge = className;
    badge.textContent = label;
    badges.appendChild(badge);
  }

  function markFallback(message) {
    document.documentElement.classList.add("math-fallback");
    addBadge("LaTeX 載入失敗：顯示文字備援", "warn");
    const hero = document.querySelector(".hero");
    if (hero && !hero.querySelector(".math-render-note")) {
      const note = document.createElement("p");
      note.className = "math-render-note";
      note.textContent = message;
      hero.appendChild(note);
    }
  }

  function renderEquations() {
    const nodes = Array.from(document.querySelectorAll(".equation-card .eq"));
    if (typeof window.katex?.render !== "function") {
      markFallback("KaTeX CDN 無法載入；方程式仍以原有 HTML／Unicode 內容顯示，不影響文字說明。");
      return;
    }

    if (nodes.length !== equations.length) {
      console.warn(`Equation count mismatch: DOM=${nodes.length}, TeX=${equations.length}`);
    }

    nodes.forEach((node, index) => {
      const tex = equations[index];
      if (!tex) return;
      node.dataset.tex = tex;
      node.setAttribute("aria-label", tex);
      window.katex.render(tex, node, {
        displayMode: true,
        throwOnError: false,
        strict: "warn",
        trust: false,
        output: "htmlAndMathml"
      });
    });

    document.documentElement.classList.add("math-ready");
    const eyebrow = document.querySelector(".eyebrow");
    if (eyebrow) eyebrow.textContent = "MODEL TRANSPARENCY · v1.3";
    const footerVersion = document.querySelector("footer p:first-child");
    if (footerVersion) footerVersion.textContent = "雙蟻資源競爭模擬實驗室 · 模型透明度文件 v1.3";
    addBadge("KaTeX / LaTeX 排版", "method");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderEquations, { once: true });
  } else {
    renderEquations();
  }
})();
