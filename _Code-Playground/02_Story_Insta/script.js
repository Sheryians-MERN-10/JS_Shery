
let instaData = async () => {
    try {
        // let res = await fetch('./data.json')
        // console.log(res);
        // console.log(typeof res);
        // let data = await res.json();

        // console.log(data);
        // console.log(data[2]);
        // console.log(data[0].dp);
        // console.log(data[0].profile);
        // console.log(typeof data);

        // ONE LINE SOLUTION
        return (await fetch('./data.json')).json();
    }
    catch (err) {
        console.error(err);
    }
}

// instaData();
instaData()
    .then((res) => {
        // console.log(res[2].dp);
    })

const dp_box = document.querySelector('#dp-box');

instaData()
    .then((res) => {
        res.map((elem, i) => {
            // console.log(elem, i);
            // console.log(elem.dp)
            // console.log(elem.profile)

            dp_box.innerHTML +=
                `<div class="w-20 h-20 rounded-full     overflow-hidden cursor-pointer">
                 <img src="${elem.dp}" class=" " alt="${i}"
                 srcset="">
                 </div>`;
            
            return res;
        })
    })
    .then(() => {
        let dp = document.querySelectorAll('#dp-box img');
        // console.log(dp)
        dp.forEach((e, i) => {
            // console.log(e);
            // console.log(e.alt);
            
            e.addEventListener( 'click', (e) => {
                console.log(e.target.alt);

            })
        })
        
    })
    .catch((err) => {
        console.log(err);
    });


