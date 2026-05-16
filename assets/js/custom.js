function copyBibtex(button) {
  const box = button.closest(".bibtex-box");
  const code = box.querySelector("code").innerText;

  navigator.clipboard.writeText(code).then(() => {
    const oldText = button.innerText;
    button.innerText = "Copied!";
    setTimeout(() => {
      button.innerText = oldText;
    }, 1500);
  });
}


document.addEventListener("DOMContentLoaded", function () {

  if (typeof jQuery !== "undefined") {

    $('.popup-image').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      }
    });

  }

});