/**
 * PGT Pay Justice — Content Protection
 * Blocks screenshots, print, right-click, devtools inspection,
 * and drag-to-copy of document images and text.
 */
(function () {
  "use strict";

  /* ── 1. Disable right-click ── */
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    return false;
  });

  /* ── 2. Disable common keyboard shortcuts ── */
  document.addEventListener("keydown", function (e) {
    const key = e.key.toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;

    // Print: Ctrl/Cmd+P
    if (ctrl && key === "p") { e.preventDefault(); return false; }
    // Save: Ctrl/Cmd+S
    if (ctrl && key === "s") { e.preventDefault(); return false; }
    // Select All: Ctrl/Cmd+A
    if (ctrl && key === "a") { e.preventDefault(); return false; }
    // Copy: Ctrl/Cmd+C
    if (ctrl && key === "c") { e.preventDefault(); return false; }
    // Screenshot on some systems via PrintScreen
    if (key === "printscreen") { e.preventDefault(); return false; }
    // F12 / DevTools
    if (key === "f12") { e.preventDefault(); return false; }
    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+U
    if (ctrl && e.shiftKey && (key === "i" || key === "j" || key === "c")) {
      e.preventDefault(); return false;
    }
    if (ctrl && key === "u") { e.preventDefault(); return false; }
  });

  /* ── 3. Disable text selection ── */
  document.addEventListener("selectstart", function (e) {
    // Allow selection only inside form inputs
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;
    e.preventDefault();
    return false;
  });

  /* ── 4. Disable drag ── */
  document.addEventListener("dragstart", function (e) {
    e.preventDefault();
    return false;
  });

  /* ── 5. CSS overlay on all document images (injected via JS for non-bypassability) ── */
  function protectImages() {
    const imgs = document.querySelectorAll(".doc-img-wrap img, .evidence-doc img");
    imgs.forEach(function (img) {
      img.setAttribute("draggable", "false");
      img.style.pointerEvents = "none";
      img.setAttribute("oncontextmenu", "return false");
    });
  }
  document.addEventListener("DOMContentLoaded", protectImages);

  /* ── 6. DevTools detection — blur page if opened ── */
  var devtoolsOpen = false;
  var threshold = 160;
  function detectDevtools() {
    var widthDiff  = window.outerWidth  - window.innerWidth  > threshold;
    var heightDiff = window.outerHeight - window.innerHeight > threshold;
    if (widthDiff || heightDiff) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        document.body.classList.add("devtools-open");
      }
    } else {
      devtoolsOpen = false;
      document.body.classList.remove("devtools-open");
    }
  }
  setInterval(detectDevtools, 1000);

  /* ── 7. Visibility change — blur content on tab switch (partial mitigation) ── */
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      document.body.classList.add("tab-hidden");
    } else {
      document.body.classList.remove("tab-hidden");
    }
  });

  /* ── 8. Disable print via window.print() ── */
  var origPrint = window.print;
  window.print = function () {
    console.warn("Printing is disabled on this page.");
    return false;
  };

  /* ── 9. Watermark canvas overlay on protected sections ── */
  function applyWatermarks() {
    var sections = document.querySelectorAll(".protected-content");
    sections.forEach(function (section) {
      var canvas = document.createElement("canvas");
      canvas.className = "watermark-canvas";
      canvas.style.cssText = [
        "position:absolute", "top:0", "left:0", "width:100%", "height:100%",
        "pointer-events:none", "z-index:9998", "opacity:0.06"
      ].join(";");
      canvas.width  = section.offsetWidth  || 800;
      canvas.height = section.offsetHeight || 600;
      var ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.font = "bold 22px sans-serif";
      ctx.fillStyle = "#c0392b";
      ctx.globalAlpha = 0.5;
      for (var y = 0; y < canvas.height; y += 160) {
        for (var x = 0; x < canvas.width; x += 260) {
          ctx.save();
          ctx.translate(x + 100, y + 60);
          ctx.rotate(-Math.PI / 6);
          ctx.fillText("PGTPayJustice.pk", 0, 0);
          ctx.restore();
        }
      }
      if (getComputedStyle(section).position === "static") {
        section.style.position = "relative";
      }
      section.appendChild(canvas);
    });
  }
  document.addEventListener("DOMContentLoaded", applyWatermarks);

})();
