gsap.from("#landingImgContainer", {
    top: "90vh",
    width: "25%",
    // duration: 3,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        scrub: 2,
        pin: true,
        start: "top 0",
        stop: "top -50%",
        markers: true,
    }
})

// ------------ PAGE 2 ---------------------
const crsr = document.querySelector("#crsr");
const cards = document.querySelectorAll("#card > div");
console.log(cards);


cards.forEach((elem) => {
    console.log(elem)
    elem.addEventListener("mouseenter", function (dets) {
        // console.log("Mouse entered")
        // crsr.style.opacity = 0.8;        
        gsap.to("#crsr", {
            opacity: 0.8
        })
    })
    elem.addEventListener("mouseleave", function () {
        // console.log("Leave")
        // crsr.style.opacity = 0;
        gsap.to('#crsr', {
            opacity: 0
        })
    })
})


const cardBoth = document.querySelector('.card img');
// console.log(rect.x)
// console.log(rect.y)

card.addEventListener('mousemove', function (dets) {
    // console.log("mousemove");
    let rect = document.querySelector('.card').getBoundingClientRect();
    // console.log(rect)
    // console.log(dets.x)

    // crsr.style.left = dets.x - rect.x + "px";
    // crsr.style.top = dets.y - rect.y + "px";
    
    gsap.to("#crsr", {
        left: dets.x - rect.x + "px",
        top: dets.y - rect.y + "px",
    })
})

// ------------ PAGE 3 ---------------------


