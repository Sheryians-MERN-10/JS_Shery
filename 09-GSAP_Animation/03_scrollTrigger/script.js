// gsap.from('#page2 #box', {
//     scale: 0,
//     duration: 0.6,
//     delay: 0,
//     scrollTrigger: {
//         trigger: '#page2 #box',
//         scroller: 'body',
//         start: 'top 60%',
//         markers: true,
//     }
// })

gsap.from('.page #box', {
    scale: 0,
    duration: 0.6,
    delay: 0,
    rotation: 360,    
    scrollTrigger: {
        trigger: '#page2 #box',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 30%',
        markers: true,
        // scrub: true,
        scrub: 3,
    }
})
