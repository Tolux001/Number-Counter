const value = document.getElementById("value");

//-------- Written code to explain how the code is working -----------
// const increase = document.querySelector('.increase');
// const decrease = document.querySelector('.decrease');
// const reset = document.querySelector('.reset');
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

const important = () => {
    //conditional statement to alert when printing negative numbers
    if(value.textContent == -1){
        alert('You Are Printing Negative Numbers, i.e numbers less than zero');
    }
    //conditional statement for color
    if(value.textContent < 0){
        value.style.color = 'red';
    }else if(value.textContent > 0){
        value.style.color = 'green';
    }else {
        value.style.color = 'black';
    }
}
//========>Clicking<===========
const btn = Array.from(document.querySelectorAll('.btn'))
btn.forEach((key) => {
    key.addEventListener('click', (e) => {
        //Searching through the array element using class
        const currentBtn = e.currentTarget.classList
        //Conditional statement to determine the class
        if(currentBtn.contains('decrease')){
            value.textContent--;
        }else if(currentBtn.contains('increase')) {
            value.textContent++;
        }else {
            value.textContent = 0;
        }
        important();
    })
})

//========>Keyboard<===========
window.addEventListener('keydown', (val) => {
    const number = document.querySelector(`button[data-key = "${val.keyCode}"]`);
    if(!number){return;}
    if(number.dataset.key ==="187"){
        value.textContent++;
    }else if(number.dataset.key ==="189"){
        value.textContent--;
    } 
    important();
})
