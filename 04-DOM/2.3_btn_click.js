document.body.innerHTML = `
    <button type="button">Follow</button>
`;


let btn = document.querySelector('button');
btn.style.fontSize = '2rem';
btn.style.padding = '1rem 3rem';
// console.log(btn);

btn.addEventListener('click', function () {
    if (btn.innerHTML === 'Follow') {        
        btn.innerHTML = 'Unfollow';
        btn.style.backgroundColor = "gray"
    }
    else {   
        btn.innerHTML = 'Follow';
        btn.style.backgroundColor = "skyblue"
    }
})