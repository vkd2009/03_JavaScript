
const number = document.querySelector("#number");
const numbers = document.querySelectorAll(".numbers");

for (let item of numbers){
    item.addEventListener("click", e => {

      if(number.textContent.length == 10) {
        alert("10글자 까지만 입력 가능"); 
        return;
      }
      console.log(e.target.textContent);
      number.textContent += e.target.textContent 

    });
}

/* 초기화 버튼 */
document.querySelector("#reset").addEventListener("click",()=>{
    number.textContent = "";
})



