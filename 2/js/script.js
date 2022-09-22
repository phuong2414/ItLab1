
      var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        centeredSlides: true,
        slidesPerGroupSkip: 1,
        fade: true,
        gragCursor: true,
       
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
