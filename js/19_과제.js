const createBox = document.querySelector("#createBox");
const cal = document.querySelector("#cal");
const number = document.querySelectorAll(".number");


createBox.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type= "text";
    console.log(input);
})

cal.addEventListener("click", () => {
        let sum = 0;
    
        for(let i = 0 ; i<number.length ; i++){
            sum += number[i];
        }
        alert(`값은 : ${sum}`)
    
})