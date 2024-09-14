// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


// init demo Swiper:
const swiper1 = new Swiper('.mySwiper', {
    modules: [Navigation, Pagination],

    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    slidesPerGroup: 2,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',


    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

// Custom Swiper:
const swiper2 = new Swiper('.custom-swiper', {
    modules: [Navigation, Pagination],

    slidesPerView: 2,//(一次呈現幾張)
    slidesPerGroup: 2,//(一個群組內有幾張投影片)
    spaceBetween: 48,
    navigation: { //(分頁)
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    pagination: {
        el: ".swiper-pagination-custom", //(pagination)
        type: "fraction"
    }

});

const swiper3 = new Swiper('.customSwiper', {
    modules: [Navigation, Pagination],

    slidesPerView: 3,//(一次呈現幾張)
    slidesPerGroup: 3,//(一個群組內有幾張投影片)
    spaceBetween: 24,
    loop: true,
    navigation: { //(分頁)
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    pagination: {
        el: ".swiper-pagination-custom", //(pagination)
        type: "fraction"
    }

});

const swiper4 = new Swiper('.customSwiper-cssMode', {
    modules: [Navigation, Pagination, Mousewheel, Keyboard],
    loop: true,
    cssMode: true,
    slidesPerView: 3,//(一次呈現幾張)
    slidesPerGroup: 3,//(一個群組內有幾張投影片)
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiperBtn-next",
        prevEl: ".swiperBtn-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});


