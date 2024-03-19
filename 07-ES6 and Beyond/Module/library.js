// 1. -----------------------------
export let message = "ES6 Module";
let message = "ES6 Module";





// 2. -----------------------------

function fun(name="avatar") {
export function fun(name="avatar") {
    console.log(`Function is Created by: ${name}` );
}

// export function rtrn(name = "avatar") {
function rtrn(name = "avatar") {
    return `Function is returning someting by: ${name}`;
}

// 3. constructor function
// class Person{
export class Person{
    constructor() {
        console.log("Constructor Method Called.");
    }
}

// 4. exporting all in one line
export { message, fun, rtrn, Person };


// 5. Exporting Default Function -------------------------
export default function () {
    console.log("Exproting: Default Function");
}

