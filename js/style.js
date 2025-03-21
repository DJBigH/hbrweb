window.onload = function () {
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

  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();

      const dropdownMenu = this.nextElementSibling;
      if (!dropdownMenu) return;

      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (menu !== dropdownMenu) {
          menu.classList.remove("active");
        }
      });

      dropdownMenu.classList.toggle("active");
    });
  });

  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.remove("active");
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".accordion__title").forEach(function (title) {
    title.addEventListener("click", function () {
      let parentItem = this.closest(".accordion__item");
      let content = parentItem.querySelector(".accordion__content");
      let arrow = parentItem.querySelector(".accordion__arrow");

      // Đóng tất cả các accordion khác (nếu chỉ muốn một mở)
      document.querySelectorAll(".accordion__item").forEach((item) => {
        if (item !== parentItem) {
          item.classList.remove("active");
          item.querySelector(".accordion__content").style.display = "none";
        }
      });

      // Toggle hiển thị nội dung và xoay mũi tên
      if (content.style.display === "block") {
        content.style.display = "none";
        parentItem.classList.remove("active");
      } else {
        content.style.display = "block";
        parentItem.classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let tabs = document.querySelectorAll(".nav-tabs .nav-link");
  let image = document.getElementById("uspImage");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      let imgSrc = this.getAttribute("data-img");
      if (imgSrc) {
        image.src = imgSrc;
      }
    });
  });
});
