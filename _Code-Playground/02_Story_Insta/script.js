
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

const dp_box = document.querySelector('#dp-box');

let handle_dp = async () => {
    let instaDet = await instaData();
    console.log(instaDet);

    instaDet.map((elem, i) => {
        // console.log(elem, i);
        // console.log(elem.dp)
        // console.log(elem.profile)
        dp_box.innerHTML +=
            `<div class="w-20 h-20 rounded-full     overflow-hidden cursor-pointer">
                 <img src="${elem.dp}" class=" " alt="${i}"
                 srcset="">
                 </div>`;
    });

    const dp = document.querySelectorAll('#dp-box img');
    const fullStory = document.querySelector('#storyFull');
    const timer = document.querySelector('#timer');
    // console.log(dp)
    dp.forEach((e, i) => {
        // console.log(e);
        // console.log(e.alt);

        e.addEventListener('click', (e) => {
            console.log(e.target.alt);
            console.log(instaDet[0].profile)
            console.log(instaDet[e.target.alt].profile)
        
            let imgLink = instaDet[e.target.alt].profile;
            fullStory.innerHTML = 
                `
                <img src="${imgLink}" class="w-full h-full object-cover" alt="" srcset="">
                <div id="timer" class="border-yellow-400 opacity-80 border-t-8 absolute top-0 w-full"></div>
                `;

            
            fullStory.style.display = 'initial';            
            setTimeout(() => {
                fullStory.style.display = 'none';
            }, 1500);
            
            fullStory.addEventListener('click', () => {
                fullStory.style.display = 'none';                
            })
        })
    })


}
handle_dp();
