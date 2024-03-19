// function test() {
//     return 'Hello';
// }
// ⚡v/s

// Async function declaration
// async function test() {
//     return 'Hello';
// }

// -----------------------------------------------------
// Async function expression using function keyword
// let test = async function () {
//     return 'Hello';
// }

// Async arrow function expression with block body
// let test = async () => {
//     return 'Hello';
// }

// Async arrow function expression with implicit return
// let test = async () => 'Hello';
// -----------------------------------------------------


// console.log(test());
// // ⚡ v/s
// test().then((result) => {
//     console.log(result);
// })


// 2. -------------------------------------
// let fun = async () => {
//     console.log(2);

//     // console.log(3);
//     await console.log(3);

//     console.log(5);
// }

// console.log(1);
// fun();
// console.log(4);

// 3. ------------------------------------
let run = async () => {
    let res = await fetch('/05-Asynchronous_JS/data/student.json');
    let data = await res.json();
    console.log(data);
    console.log(data[0]);
    console.log(data[0].age);
    return data;

    // SINGLE LINE CODE
    return (await fetch('/05-Asynchronous_JS/data/student.json')).json();
}

// let r = run();
// console.log(r); //  Promise {<pending>} ⛔

// run()
//     .then((res) => {
//         console.log(res);
//         console.log(res[2]);
//     })
//     .catch((err) => console.log(err));

// 3.2 --------------
let sun = async () => {

    try {
        let res = await fetch('/05-Asynchronous_JS/data/student.json');
        let data = await res.json();
        console.log(data);
        console.log(data[0]);
        console.log(data[0].age);
        return data;
    }
    catch (error) {
        console.log('Error!', error);
    }
}

// let s = sun();
// console.log(r); //  Promise {<pending>} ⛔

sun().then((res) => {
        console.log("Using .then method : ", res);
        console.log(res[2]);
    });
    