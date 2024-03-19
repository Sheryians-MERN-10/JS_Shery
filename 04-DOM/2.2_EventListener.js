document.body.innerHTML = `
    <button id="btn" type="button">Color Code</button>
    <button id="autoBtn" type="button">Auto Color - Change</button>
`;

const btn = document.querySelector("#btn");

function getRandom() {
    return Math.floor(Math.random() * 255 + 1);
}

// document.body.style.backgroundColor = "green";
// document.body.style.backgroundColor = "rgb(15,78, 99)";
// document.body.style.backgroundColor = `rgb( ${getRandom()}, ${getRandom()}, ${getRandom()} )`;

btn.addEventListener('click', function () {
    let colorCode = `${ getRandom() }, ${ getRandom() }, ${ getRandom() }`
    btn.innerHTML = colorCode;
    document.body.style.backgroundColor = `rgb( ${colorCode} )`;
})

let autoBtn = document.querySelector('#autoBtn');
autoBtn.addEventListener('click', () => {
    setInterval(() => {
        btn.click();
    }, 500)
})