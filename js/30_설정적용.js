const lookBox = document.querySelector("#lookBox");

const box = document.querySelector("#box");

lookBox.addEventListener("click", e =>{
const print = document.querySelector("#print");
    console.log(e.target.textContent);
box.innerHTML = print.innerHTML


});