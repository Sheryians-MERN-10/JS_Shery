// 1. Example of Try-Catch Block in JavaScript for Error Handling
// try {
//     console.log("START of try");
//     // blablabla;
//     fun();
//     console.log("End of try");

// } catch (err) {
//     console.log("Error has been caught !", err);
// }


// 2.

/*
This code doesn't work as expected because the error thrown inside the setTimeout callback function is not caught by the catch block outside of the setTimeout.

Here's why:

- When you use setTimeout, the callback function is executed asynchronously after the specified delay (in this case, after 2000 milliseconds).

- The try block doesn't wait for the asynchronous operation (in this case, setTimeout) to complete before moving to the catch block. As a result, any errors thrown inside the setTimeout callback are not caught by the surrounding try...catch block.
*/
// try {
//     setTimeout(function () {
//         console.log("Start of try");
//         bla;
//         console.log("END of try");
//     }, 2000)
// } catch (err) {
//     console.log('Outer of setTimeout', err);
// }

// 3. To handle errors thrown inside asynchronous operations like setTimeout, you need to place the try...catch block inside the callback function itself. This way, you can catch errors that occur within the asynchronous operation:
// setTimeout(function () {
//     try {
//         console.log("Start of try");
//         bla;
//         console.log("END of try");
//     } catch (err) {
//         console.log("Inside Timeout Function: ", err);
//     }

// }, 2000)


// 4. Error property
// try {
//     // Code that might throw an error
//     bla;
// } catch (err) {
//     // Accessing error properties
//     console.log(err);    // Output: Stack trace information
//     console.log(err.stack);    // Output: Stack trace information

//     console.log(err.name);     // Output: "ReferenceError"
//     console.log(err.message);  // Output: "bla is not defined"
// }

// 5. JSON Parsing and Stringifying in JavaScript
// try {
//     // Define a JSON string.
//     // let myJson = `{"name": "John","age": 25}`;
//     let myJson = '{"name": "John","age": 25}';
//     console.log(myJson); // Output: {"name": "John","age": 25}
//     console.log(typeof myJson); // Output: string

//     // Parse the JSON string into an object.
//     let user = JSON.parse(myJson);
//     console.log(typeof user); // Output: object
//     console.log(user); // Output: { name: 'John', age: 25 }
//     console.log(user.name); // Output: John
//     console.log(user.age); // Output: 25

//     // Convert the object back to a JSON string.
//     let phirJSON = JSON.stringify(user);
//     console.log(phirJSON); // Output: {"name":"John","age":25}
//     console.log(typeof phirJSON); // Output: string

//     // if (!user.address) {
//         // throw new Error('User must have a address'); // ⚠️ Error: User must have a address
//     // }

// } catch (err) {
//     // Catch and log any errors that occur during JSON parsing or stringifying.
//     console.log(err);
// }


// 6. try-catch-finally Blocks - Error Handling
try {
    // Code that may throw an error
    console.log("Inside try block");
    throw new Error("An error occurred");
} catch (error) {
    // Catch block to handle any errors
    console.error("Caught an error:", error.message);
} finally {
    // ⭐ Finally block will always execute, regardless of whether there's an error or not
    console.log("Inside finally block");
}
