// 1. Promise-based Function for Calculating Even Sums with Error Handling
// Define a function called getSum that takes two parameters a and b
function getSum(a, b) {
    // Return a Promise
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation with setTimeout
        setTimeout(() => {
            // Calculate the sum of a and b
            let s = a + b;
            // If the sum is even, resolve the Promise with the sum
            if (s % 2 == 0)
                resolve(s);
            // If the sum is odd, reject the Promise with an error message
            else
                reject(`The result is Odd ${s}`);
        }, 2000); // Delay the execution of the setTimeout by 2000 milliseconds (2 seconds)
    });
}

// Call the getSum function with arguments 4 and 9
getSum(4, 9)
    // If the Promise is resolved, log the result and 'Success'
    .then((res) => {
        console.log(res);
        console.log('Success');
    })
    // If the Promise is rejected, log the error message
    .catch((err) => {
        console.log(err);
    });


// 2. Async Function for Handling Even Sum Calculation with Error Handling

// Define an asynchronous function called callSum
async function callSum() {
    try {
        // Use await to wait for the Promise returned by getsum(2, 2) to resolve
        const res = await getsum(2, 2);
        // Log the resolved value (sum) to the console
        console.log(res);
        // Log a message indicating that this line runs after the Promise is resolved
        console.log("run after promise");
    }
    // If the Promise is rejected, catch the error here
    catch (err) {
        console.log(err);
    }
}


callSum()
    
// 3. "Async Function for Fetching User Data from JSONPlaceholder API"
// Define an asynchronous function called getusers
async function getusers() {
    try {
        // Use await to fetch data from the specified URL
        const strData = await fetch("https://jsonplaceholder.typicode.com/users");
        // Use await to parse the response data as JSON
        const jsonData = await strData.json();
        // Log the JSON data to the console
        console.log(jsonData);
        // Log the name of the first user in the fetched data
        console.log(jsonData[0].name);
        // Log a message indicating that the result has been generated
        console.log("Result Generated");
    }
    // If any errors occur during the process, catch and log them
    catch (error) {
        console.log(error);
    }
}

// Call the getusers function to initiate the data retrieval process
getusers();

