// This code uses GSAP (GreenSock Animation Platform) for animations

// Animating the menu to slide in from the right
// gsap.to('menu', {
//     right: '0' 
// })

// Animating each list item in the menu to come in from the right
// gsap.from('menu li', {
//     x: 100, 
//     duration: 0.5, 
//     delay: 0.5, 
//     opacity: 0, // Start with opacity 0
//     stagger: 0.2 // Stagger the animations by 0.2 seconds
// })

// Animating the element with id 'cross' to fade in
// gsap.from('#cross', {
//     opacity: 0, // Start with opacity 0
//     duration: 3, 
//     delay: 0.3 // Delay the animation by 1 second
// })

/* 
ISSUE With above Code ⤴️
 - Issue: Managing animations individually leads to complexity.
 - Solution: Introduce GSAP timeline for unified animation control.
 - Benefits: Simplifies coordination, centralizes control, and     enhances code organization.
*/

// Introduction of timeline- to overcome the problem 

// Creating a GSAP timeline
let tl = gsap.timeline();

// Slide in the menu
tl.to('menu', {
    right: '0' // Slide the menu to right 0px
})

// Animating each list item in the menu to come in from the right using the timeline
tl.from('menu li', {
    x: 100, // Start position 100px to the right
    duration: 0.5, 
    opacity: 0, // Start with opacity 0
    stagger: 0.2 // Stagger the animations by 0.2 seconds
})

// Animating the element with id 'cross' to fade in using the timeline
tl.from('#cross', {
    opacity: 0, // Start with opacity 0
    duration: 0.3, 
})

// Repeat the timeline once (initial run + 1 = 2 times)
// tl.repeat(1);


// Pause the timeline
tl.pause();

// Resume the timeline, triggering animations from the paused state
// tl.resume();

// Seek to the specified time (1.5 seconds in this case) in the timeline
// tl.seek(1.5);

// Reverse the timeline, playing animations backwards
// tl.reverse();

    // Selecting the elements with ids 'hamburger' and 'cross'
    let hambur = document.querySelector("#hamburger");
    let cross = document.querySelector('#cross');

    // Adding a click event listener to the hamburger icon
    hambur.addEventListener('click', function () {
        // Hide the hamburger icon
        hambur.classList.add('invisible');
        // Show the cross icon
        cross.classList.remove('invisible');
        
        // Play the timeline
        tl.play();    
    })
    
    // Adding a click event listener to the cross icon
    cross.addEventListener('click', function () {
        // Show the hamburger icon
        hambur.classList.remove('invisible');
        // Reverse the timeline, playing animations backwards
        tl.reverse();

        // cross.classList.add('invisible');
    })
