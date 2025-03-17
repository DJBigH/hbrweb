window.onload = function () {
  // Xử lý menu mobile
  const menuOpen = document.querySelector(".mobile_menu_open");
  const menuClose = document.querySelector(".icon-close");
  const menuWrapper = document.querySelector(".mobile_menu_wrapper");
  const menuOverlay = document.querySelector(".mobile_menu_overlay");

  if (!menuOpen || !menuClose || !menuWrapper || !menuOverlay) {
    console.error("Lỗi: Một trong các phần tử menu không tồn tại!");
    return;
  }

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

  // Xử lý submenu dropdown
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài

      const dropdownMenu = this.nextElementSibling;
      if (!dropdownMenu) return;

      // Đóng tất cả submenu trước khi mở submenu mới
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (menu !== dropdownMenu) {
          menu.classList.remove("active");
        }
      });

      // Toggle class active cho submenu
      dropdownMenu.classList.toggle("active");
    });
  });

  // Ngăn submenu bị đóng khi bấm vào bên trong
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });

  // Đóng submenu nếu click ra ngoài
  document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.remove("active");
    });
  });
};
