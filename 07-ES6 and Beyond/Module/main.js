// console.log("hello");

// 1. -----------------------------

import { message } from "./library.js";
console.log(message);
document.body.innerHTML = message;

// 2. -----------------------------

import { fun } from './library.js'
fun();
fun("Ayush");

import { rtrn } from './library.js';
console.log(rtrn(5454));

// 3. constructor ----------------------
import { Person } from "./library.js";
let person1 = new Person();
console.log(person1)

// 4. importing all in one line
import { message, fun, rtrn, Person } from "./library.js";
console.log(message);
fun();
console.log(rtrn());
let person2 = new Person();

// 4.2 --------------------------------------
import { message, fun as f, rtrn, Person } from "./library.js";
f();

// 4.3 --------------------------------------
import * as all from "./library.js";
console.log(all.message)
all.fun();
all.rtrn();
let p1 = new all.Person();

// 5. Importing Default Function -------------------------
import { default as def } from "./library.js";
def();

import defFun from "./library.js";
defFun();

// 6. -------------------
import defFun, {message, fun, rtrn, Person} from "./library.js";
defFun();
console.log(message);
fun();
console.log(rtrn());
let person2 = new Person();
