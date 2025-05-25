document.addEventListener("DOMContentLoaded", function () {
    const topButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
    });

    topButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
});