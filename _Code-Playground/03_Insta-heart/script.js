let heart = document.querySelector('i');
let container = document.querySelector('.container img');

console.log(heart);

container.addEventListener('dblclick', function (e) {
    // heart.style.display = 'initial';
    heart.style.fontSize = '6rem';
    
    setTimeout(() => {
        heart.style.display = 'hidden';
        heart.style.fontSize = '0rem';
        
    }, 1500);
})


const body = document.body;
const crsr = document.querySelector('.cursor');

body.addEventListener('mousemove', function (e) {
    // console.log(e.x, e.y);
    crsr.style.left = `${e.x + 20}px`
    crsr.style.top = `${e.y +  20}px`
})

document.querySelector('.container').addEventListener('mouseenter', function (e) {
    crsr.style.scale = '5';
})
document.querySelector('.container').addEventListener('mouseleave', function (e) {
    crsr.style.scale = '1';
})