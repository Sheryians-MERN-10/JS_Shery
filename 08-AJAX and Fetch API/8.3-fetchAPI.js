
console.log('AJAX and Fetch API')

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
        console.log("fetch api 1")
        if (!res.ok) {
            throw new Error("Network response was not  ok"); // this will reject the promise
        }
        
        return res.json(res); // parse the JSON data
    })
    .then((data) => {
        console.log("fetch api 2")
        console.log(data);  // process the data
    })
    .catch((err) => {
        // handle error
        console.error("There is a Problem in Fetch API." ,err);
    })


