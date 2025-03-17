document.addEventListener("DOMContentLoaded", function () {
  // Xử lý menu mobile
  const menuOpen = document.querySelector(".mobile_menu_open");
  const menuClose = document.querySelector(".icon-close");
  const menuWrapper = document.querySelector(".mobile_menu_wrapper");
  const menuOverlay = document.querySelector(".mobile_menu_overlay");

  if (menuOpen && menuClose && menuWrapper && menuOverlay) {
    menuOpen.addEventListener("click", function () {
      menuWrapper.classList.add("active");
      menuOverlay.classList.add("active");
    });

    menuClose.addEventListener("click", function () {
      menuWrapper.classList.remove("active");
      menuOverlay.classList.remove("active");
    });

    menuOverlay.addEventListener("click", function () {
      menuWrapper.classList.remove("active");
      menuOverlay.classList.remove("active");
    });
  }

  // Xử lý dropdown menu
  let dropdownBtns = document.querySelectorAll(".dropdown-btn");

  dropdownBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let dropdownContainer = this.nextElementSibling;

      if (dropdownContainer) {
        dropdownContainer.style.display =
          dropdownContainer.style.display === "block" ? "none" : "block";
      }
    });
  });
});
