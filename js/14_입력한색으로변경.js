const box = document.querySelectorAll(".box");
const input = document.querySelectorAll(".input");
const btn = document.querySelector(".btn");


btn.addEventListener("click", function(){
    box.style.backgroundColor = input.value;
    
  });

    
