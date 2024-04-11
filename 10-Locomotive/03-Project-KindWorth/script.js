const scroll = new LocomotiveScroll({
    // el: document.querySelector('[data-scroll-container]'),
    el: document.querySelector('#main-container'),
    smooth: true
});

gsap.to("#langdingImgContainer", {
    height: "100%",
    width: "100%",
    top: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#landing-pg",
        scroller: "body",
        start: "top 0%",
        end: "top -50%",
        markers: true,
        scrub: 2,
        pin: true
    }
})

