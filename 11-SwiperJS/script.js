// -- Initialize Swiper --
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",        
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    autoplay: true,

    // Slides per view
    slidesPerView: 3,
    spaceBetween: 30,
    clickable: true,

    grabCursor: true,
});

