const swiper = new Swiper(".core-feature-area__carousel__swiper", {
    slidesPerView: 4,
    sliderPerGroup: 4,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
});

const swiperlogo = new Swiper(".company__logo__swiper", {
    slidesPerView: 7,
    sliderPerGroup: 7,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 6,
        },
        1000: {
            slidesPerView: 7,
        },
    },
});
const swiperGrid = new Swiper(".image-grid__row__col__swiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});


    const carousel = document.querySelector('.core-feature-area__carousel');
    const carouselLogo = document.querySelector('.company__logo');
    const swiperGridTop = document.querySelector('.image-grid__row__col__top');
    const swiperGridBottom = document.querySelector('.image-grid__row__col__bottom');

    const swipernavBtn = document.querySelector('.swiper-navBtn');
    const swiperPagination = document.querySelector('.swiper-pagination')

    carousel.addEventListener('mouseenter', () => {
    swipernavBtn.style.opacity = '1';
    swiperPagination.style.opacity = '1';

    });
    carousel.addEventListener('mouseleave', () => {
    swipernavBtn.style.opacity = '0';
    swiperPagination.style.opacity = '0';

    });
    carouselLogo.addEventListener('mouseenter', () => {
        swipernavBtn.style.opacity = '1';
        swiperPagination.style.opacity = '1';
    });


    carouselLogo.addEventListener('mouseleave', () => {
    swipernavBtn.style.opacity = '0';
    swiperPagination.style.opacity = '0';

    });

swiperGridTop.addEventListener('mouseenter', () => {
    swipernavBtn.style.opacity = '1';
    swiperPagination.style.opacity = '1';
    });


swiperGridTop.addEventListener('mouseleave', () => {
    swipernavBtn.style.opacity = '0';
    swiperPagination.style.opacity = '0';

    });

swiperGridBottom.addEventListener('mouseenter', () => {
    swipernavBtn.style.opacity = '1';
    swiperPagination.style.opacity = '1';
});
swiperGridBottom.addEventListener('mouseleave', () => {
    swipernavBtn.style.opacity = '0';
    swiperPagination.style.opacity = '0';

});