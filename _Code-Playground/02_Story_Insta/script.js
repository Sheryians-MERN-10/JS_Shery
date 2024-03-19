
let fun = async () => {
    try {
        let response = await fetch('./data.json')
        console.log(response);
        console.log(typeof response);
        let data = await response.json();
        console.log(data);
        console.log(typeof data);
    }
    catch (err) {
        console.log(err);
    }   
}

fun();