// Get all needed element from the DOM
let adviceId = document.querySelector('.advice_id');
let adviceText = document.querySelector('.advice_text');
let changeBtn = document.querySelector('.advice_toggle');

let adviceURL = 'https://api.adviceslip.com/advice';

// async function to fetch from the advice api.
async function getAdvice() {
    let response = await fetch(adviceURL);
    let data = await response.json().catch(function err(){
        console.error(err);
    })


    // add the gotten data (the id and advice text) into a element in the DOM
    adviceId.textContent = data.slip.id;
    adviceText.textContent = `"${data.slip.advice}"`;


    //add an click eventlistener on button then change the adviceText on click.
    changeBtn.onclick = () => {
        getAdvice();
    }
     
}

getAdvice();
