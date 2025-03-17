$(document).ready(function () {
  $(".banner").owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
        // breakpoint từ 0px trở lên
        0: {
            items: 1
        },
        // breakpoint từ 480px trở lên
        480: {
            items: 1
        },
        // breakpoint từ 768px trở lên
        768: {
            items: 1
        },
        991: {
          items: 1
        }
    }
});

  $(".items").owlCarousel({
    margin: 20,
    loop: true,
    nav: false,
    items: 3,
    dots: true,
    lazyLoad: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,
    responsive: {
      // breakpoint từ 0px trở lên
      0: {
          items: 1
      },
      // breakpoint từ 480px trở lên
      480: {
          items: 1
      },
      // breakpoint từ 768px trở lên
      768: {
          items: 1
      },
      991: {
        items: 3
      }
  }
  });

  $(".student-testimonial").owlCarousel({
    items: 6,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 10,
    autoplaySpeed: 20000,
    autoplayHoverPause: false,
    slideTransition: "linear",
    smartSpeed: 8000,
    dots: true,
    nav: false,
    loop: false,
    rtl: true,
    stagePadding: 50,
    slideBy: 1,
    responsive: {
      // breakpoint từ 0px trở lên
      0: {
          items: 1
      },
      // breakpoint từ 480px trở lên
      480: {
          items: 1
      },
      // breakpoint từ 768px trở lên
      768: {
          items: 1
      },
      991: {
        items: 6
      }
  }
  });

  $(".student-testimonial1").owlCarousel({
    items: 6,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 10,
    autoplaySpeed: 20000,
    autoplayHoverPause: false,
    slideTransition: "linear",
    smartSpeed: 8000,
    dots: false,
    nav: false,
    loop: false,
    rtl: false,
    stagePadding: 50,
    slideBy: 1,
    responsive: {
      // breakpoint từ 0px trở lên
      0: {
          items: 1
      },
      // breakpoint từ 480px trở lên
      480: {
          items: 1
      },
      // breakpoint từ 768px trở lên
      768: {
          items: 1
      },
      991: {
        items: 6
      }
  }
  });

  $(".media-items").owlCarousel({
    margin: 20,
    loop: true,
    nav: false,
    items: 3,
    dots: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,
    ltr: true,
    responsive: {
      // breakpoint từ 0px trở lên
      0: {
          items: 1
      },
      // breakpoint từ 480px trở lên
      480: {
          items: 1
      },
      // breakpoint từ 768px trở lên
      768: {
          items: 1
      },
      991: {
        items: 3
      }
  }
  });

  $(".book-items").owlCarousel({
    margin: 10,
    loop: true,
    nav: false,
    items: 3,
    dots: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,
    ltr: true,
    responsive: {
      // breakpoint từ 0px trở lên
      0: {
          items: 1
      },
      // breakpoint từ 480px trở lên
      480: {
          items: 1
      },
      // breakpoint từ 768px trở lên
      768: {
          items: 2
      },
      991: {
        items: 3
      }
  }
  });
});


