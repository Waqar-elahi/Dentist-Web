var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
        $('.sticky-top').addClass('sticky-nav').css('top', '0px');
    } else {
        $('.sticky-top').removeClass('sticky-nav').css('top', '-100px');
    }
  });
  
  

  

 