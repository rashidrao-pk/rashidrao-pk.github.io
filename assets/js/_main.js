/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function () {
  // detect OS/browser preference
  const browserPref = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  // Set the theme on page load or when explicitly called
  var setTheme = function (theme) {
    const use_theme =
      theme ||
      localStorage.getItem("theme") ||
      $("html").attr("data-theme") ||
      browserPref;

    if (use_theme === "dark") {
      $("html").attr("data-theme", "dark");
      $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
    } else if (use_theme === "light") {
      $("html").removeAttr("data-theme");
      $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
    }
  };

  setTheme();

  // if user hasn't chosen a theme, follow OS changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });

  // Toggle the theme manually
  var toggleTheme = function () {
    const current_theme = $("html").attr("data-theme");
    const new_theme = current_theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", new_theme);
    setTheme(new_theme);
  };

  $("#theme-toggle").on("click", toggleTheme);

  // These should be the same as the settings in _variables.scss
  const scssLarge = 925; // pixels

  // Sticky footer
  var bumpIt = function () {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on("resize", function () {
    if (
      $(".author__urls.social-icons").css("display") == "none" &&
      $(window).width() >= scssLarge
    ) {
      $(".author__urls").css("display", "block");
    }
  });

  // Initialize smooth scrolling only when the plugin is available.
  // Prevents a missing plugin from interrupting other JavaScript.

  if (typeof $.fn.smoothScroll === "function") {
    $("a").smoothScroll({
      offset: -75,
      preventDefault: false,
    });
  } else {
    console.warn(
      "[Portfolio] jQuery Smooth Scroll plugin not loaded. Skipping initialization.",
    );
  }

  // add lightbox class to all image links
  // Add "image-popup" to links ending in image extensions,
  // but skip any <a> that already contains an <img>
  $(
    "a[href$='.jpg'],\
  a[href$='.jpeg'],\
  a[href$='.JPG'],\
  a[href$='.png'],\
  a[href$='.gif'],\
  a[href$='.webp']",
  )
    .not(":has(img)")
    .addClass("image-popup");

  // 1) Wrap every <p><img> (except emoji images) in an <a> pointing at the image, and give it the lightbox class
  $("p > img")
    .not(".emoji")
    .each(function () {
      var $img = $(this);
      // skip if it’s already wrapped in an <a.image-popup>
      if (!$img.parent().is("a.image-popup")) {
        $("<a>")
          .addClass("image-popup")
          .attr("href", $img.attr("src"))
          .insertBefore($img) // place the <a> right before the <img>
          .append($img); // move the <img> into the <a>
      }
    });

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: "image",
    tLoading: "Loading image #%curr%...",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: "mfp-zoom-in",
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim",
        );
      },
    },
    closeOnContentClick: true,
    midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
});

/* ==========================================================================
   Portfolio Thumbnail Slider
   Projects / Publications / Talks
   ========================================================================== */

/* ==========================================================================
   Portfolio Thumbnail Slider
   Projects / Publications / Talks
   ========================================================================== */

(function () {
  function initPortfolioSliders() {
    const sliders = document.querySelectorAll(".portfolio-thumb-slider");

    console.log("[Portfolio Slider] Found:", sliders.length);

    sliders.forEach(function (slider) {
      if (slider.dataset.sliderInitialized === "true") return;

      const slides = Array.from(
        slider.querySelectorAll(".portfolio-thumb-slide"),
      );

      console.log("[Portfolio Slider] Slides:", slides.length);

      if (slides.length < 2) return;

      slider.dataset.sliderInitialized = "true";

      const prev = slider.querySelector(".portfolio-thumb-prev");
      const next = slider.querySelector(".portfolio-thumb-next");
      const counter = slider.querySelector(".portfolio-thumb-counter");

      let currentIndex = 0;

      function showSlide(index) {
        currentIndex = (index + slides.length) % slides.length;

        slides.forEach(function (slide, i) {
          const active = i === currentIndex;

          slide.hidden = !active;
          slide.classList.toggle("is-active", active);
          slide.setAttribute("aria-hidden", String(!active));
        });

        if (counter) {
          counter.textContent = currentIndex + 1 + " / " + slides.length;
        }
      }

      if (prev) {
        prev.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
          showSlide(currentIndex - 1);
        });
      }

      if (next) {
        next.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
          showSlide(currentIndex + 1);
        });
      }

      slider.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          showSlide(currentIndex - 1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          showSlide(currentIndex + 1);
        }
      });

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

      if (!reducedMotion.matches) {
        setInterval(function () {
          if (!document.hidden) {
            showSlide(currentIndex + 1);
          }
        }, 5000);
      }

      showSlide(0);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPortfolioSliders);
  } else {
    initPortfolioSliders();
  }
})();
