/*
- sirf fetch mein hi two then lagta hai
*/


function evenChecker(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n % 2 === 0) {
                resolve("Given Number is Even");
            }
            else {
                reject("Given Number is Odd");
            }
        }, 2000);
    })
}

// console.log(evenChecker(4)); // not a good practice

evenChecker(7)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err + "THis is custom err");
    })

console.log('Hello')