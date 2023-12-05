const value = document.getElementById("value");
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');

//-------- Written code to explain how the code is working -----------

// reset.addEventListener('click', ()=>{
//     value.textContent = 0;
// })
// decrease.addEventListener('click', ()=>{
//     value.textContent--;
// })
// increase.addEventListener('click', ()=>{
//     value.textContent++;
// })

//========>Efficiently selecting the button<===========

const btn = Array.from(document.querySelectorAll('.btn'))
btn.forEach((key) => {
    key.addEventListener('click', (e) => {
        const currentBtn = e.currentTarget.classList
        if(currentBtn.contains('decrease')){
            value.textContent--;
        }else if(currentBtn.contains('increase')) {
            value.textContent++;
        }else {
            value.textContent = 0;
        }
        if(value.textContent == -1){
            alert('You Are Printing Negative Numbers, i.e numbers less than zero');
        }
        if(value.textContent < 0){
            value.style.color = 'red';
        }else if(value.textContent > 0){
            value.style.color = 'green';
        }else {
            value.style.color = 'black';
        }
    })
})
