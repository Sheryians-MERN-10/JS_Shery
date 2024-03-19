// 1. Title: Fetch Text File Using Fetch API

// Fetch the text file "demo.txt" using the Fetch API
// fetch("/08-AJAX and Fetch API/demo.txt")
//     .then((response) => response.text()) // Convert the response to text format
//     // .then(response => response.text77()) // to trigger catch block, uncomment this line to simulate an error
//     .then((data) => document.write(data)) // Write the fetched text data to the document
//     .catch((err) => console.log("Can't fetch Data")) // Handle any errors that occur during fetching
//     .finally(() => console.log("Promised Settled for fetching txt")); // Log a message indicating that the promise is settled


// 2.1 Fetch JSON Data from API

// Fetch data from the specified URL which returns JSON data
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json()) // Convert the response to JSON format
//     .then((data) => console.log(data)) // Log the fetched JSON data
//     .catch((err) => console.log(err)); // Handle any errors that occur during fetching

// 2.2 Fetch and Display User Data
// Fetch data from the specified URL which returns JSON data
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json()) // Convert the response to JSON format
//     .then((data) => {
//         console.log(data); // Log the fetched JSON data
//         console.log(typeof data); // Log the type of the fetched data
//         console.log(data[0]); // Log the first element of the fetched data

//         // Iterate through the fetched data and display user information
//         for (let key in data) {
//             let userInfo = `${data[key].name} : ${data[key].email}, ${data[key].address.city} <br>`;
//             document.write(userInfo); // Write user information to the document
//         }
//     })
//     .catch((err) => console.log(err)); // Handle any errors that occur during fetching


// 3. Dynamic Form Submission with Fetch API
// HTML code for the form
// let form_HTML = `<h1>hello World</h1>`;
// let form = document.createElement('form');
// form.innerHTML = `
//     <form id="myForm">
//         Title: <input type="text" name="title" id="title"><br /><br />
//         Body: <input type="text" id="body-form"> <br /><br />
//         USER ID: <input type="text" id="userID"> <br /><br />
//         <button id="submitBtn">Submit</button>
//     </form>`;
// document.body.appendChild(form);

// // Event listener for form submission
// document.querySelector('#submitBtn').addEventListener('click', function (e) {
//     e.preventDefault(); // Prevent default form submission behavior

//     // Log user ID input
//     console.log(document.querySelector('#userID'));
//     console.log(document.querySelector('#userID').value);

//     // Create an object with form data
//     let obj = {
//         title: document.querySelector('#title').value,
//         body: document.querySelector('#body-form').value,
//         userId: document.querySelector('#userID').value,
//     };

//     // Send POST request to JSONPlaceholder API
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(obj),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((res) => res.json()) // Parse response as JSON
//         .then((data) => console.log(data)) // Log response data
//         .catch((error) => console.log(error)) // Handle any errors
//         .finally(() => console.log("Post request is completed!")); // Log completion message
// });



// 3.2 Form Submission with FormData and Fetch API (x-www-form-urlencoded)
// Create a div element to contain the form
// let form = document.createElement('div');
// form.innerHTML = `
//     <form id="myForm">
//         Title: <input type="text" name="title" id="title"><br /><br />
//         Body: <input type="text" id="body-form"> <br /><br />
//         USER ID: <input type="text" id="userID"> <br /><br />
//         <button id="submitBtn">Submit</button>
//     </form>`;
// document.body.appendChild(form);

// // Event listener for form submission
// document.querySelector('#submitBtn').addEventListener('click', function (e) {
//     e.preventDefault(); // Prevent default form submission behavior

//     // Log user ID input
//     console.log(document.querySelector('#userID'));
//     console.log(document.querySelector('#userID').value);

//     // Send POST request to JSONPlaceholder API with FormData
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: new FormData(document.getElementById('myForm')), // Convert form data to FormData object
//         headers: {
//             'Content-type': 'application/x-www-form-urlencoded', // Set content type to x-www-form-urlencoded
//         },
//     })
//         .then((res) => res.json()) // Parse response as JSON
//         .then((data) => console.log(data)) // Log response data
//         .catch((error) => console.log(error)) // Handle any errors
//         .finally(() => console.log("Post request is completed!")); // Log completion message
// });




// 4. Fetch API Error Handling

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
        console.log("fetch api 1");
        if (!res.ok) {
            throw new Error("Network response was not ok"); // this will reject the promise
        }

        return res.json(); // parse the JSON data
    })
    .then((data) => {
        console.log("fetch api 2");
        console.log(data); // process the data
    })
    .catch((err) => {
        // handle error
        console.error("There is a Problem in Fetch API.", err);
    });
