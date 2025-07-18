var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 3000,
        direction: "vertical",
        grabCursor: true,
        SlidesPerView: 3,
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        autoplay: {
            delay: 5000,
        },
        fadeEffect: {
            crossFade: true
        },
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);