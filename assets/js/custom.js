// Copies BibTeX to the clipboard. Works for:
//  - <button data-bibtex="...">            (one-click buttons on lists / button rows)
//  - a button inside .bibtex-box <code>    (the full BibTeX block on a publication page)
function copyBibtex(button) {
  let text = button.dataset.bibtex;
  if (!text) {
    const box = button.closest(".bibtex-box");
    text = box ? box.querySelector("code").innerText : "";
  }
  if (!text) return;

  const flash = (label) => {
    if (!button.dataset.label) button.dataset.label = button.innerText;
    button.innerText = label;
    button.classList.add("is-copied");
    clearTimeout(button._copyTimer);
    button._copyTimer = setTimeout(() => {
      button.innerText = button.dataset.label;
      button.classList.remove("is-copied");
    }, 1500);
  };

  const fallback = () => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    flash(ok ? "Copied!" : "Copy failed");
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => flash("Copied!"), fallback);
  } else {
    fallback();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (typeof jQuery !== "undefined") {
    $(".popup-image").magnificPopup({
      type: "image",
      closeOnContentClick: true,
      mainClass: "mfp-img-mobile",
      image: {
        verticalFit: true,
      },
    });
  }
});
