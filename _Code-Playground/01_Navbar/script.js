console.log("Hello")

let menu = document.querySelector('#menu');
let cross = document.querySelector('#cross');
let nav = document.querySelector('nav');
let links = document.querySelector('ul');
console.log(links)

menu.addEventListener('click', function (e) {
    // menu.classList.add('invisible')
    menu.style.visibility = 'hidden';
    links.classList.remove('invisible');
    
    setTimeout(function () {
        // cross.classList.remove('invisible')
        cross.style.visibility = 'initial';
    }, 275);
    
    nav.style.height = '100vh';
    links.style.flexDirection = 'column';
})

cross.addEventListener('click', function (e) {
    // menu.classList.remove('invisible')
    // cross.classList.add('invisible')
    
    cross.style.visibility = 'hidden';
    links.classList.add('invisible');
    
    setTimeout(function () {
        menu.style.visibility = 'initial';
    }, 275)
    
    
    console.log('menu is clicked')
    
    nav.style.height = '8vmax';
    links.style.flexDirection = 'row';
})

