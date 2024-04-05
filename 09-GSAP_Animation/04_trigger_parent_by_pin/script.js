
gsap.to('#page2 img', {
    width: "100%",
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0",
        end: "top -70%",
        markers: true,
        scrub: 2,
        pin:true
    }
})