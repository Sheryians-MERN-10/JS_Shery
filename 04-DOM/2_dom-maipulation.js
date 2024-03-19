// CW - SHERYIANS
document.body.innerHTML = `
    <h1>Main Heading</h1>
    <div className="subhead">This is sub heading as class</div>
    <p id="para">lorem ipsum</p>
`;

// const head = document.getElementsByTagName('h1');
// const subhead = document.getElementsByClassName("subhead");
// const para = document.getElementById('para');

// or

const head = document.querySelector("h1");
const subhead = document.querySelectorAll('.subhead');
const para = document.querySelector('#para');

console.log(head)
console.log(subhead)
console.log(para)

// -----------------

console.log(para.textContent);
console.log(para.innerText);
console.log(para.innerHTML);

para.innerHTML = "Text has been Changed";
para.style.color = 'tomato';
para.style.fontSize = '3rem';