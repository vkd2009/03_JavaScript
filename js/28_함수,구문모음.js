/* 배열.forEach()

  [작성법]
  배열.forEach( (현재 요소 [,index [, 현재 배열]]) => {
      반복 수행할 구문
  });
*/

const numbers1 = [10, 20, 30 , 40 , 50];

numbers1.forEach((item, index)=>{
    console.log(index, item);
}    );

// for(let i=0 ; i<numbers1.length ; i++){
//   console.log(numbers1[i]);
// }



/* 배열.map() 

[작성법]
배열.map((현재 요소 [,index [,현재 배열]) => {
     return 변경된 요소;
 });

*/

const number2 = numbers1.map((item) => {return item *2;})
console.log("number2 : ",number2);


/* 배열.reduce()

  [작성법]
  var result = array.reduce(function(accumulator, 현재 요소[,index [,array]]) {
      return accumulator + value;

  }, initialAccumulator);

  // accumulator: 누산기, 현재까지의 축적된 값 ( == sum)
  // initialAccumulator: 초기 누산기 값
*/

let sum1 = 0;
for(let i=0; i<number2.length; i++){
    sum1 += number2[i];
}
console.log("sum1", sum1);

// ----------

const sum2 = number2.reduce( (acc, item)=> { return acc + item;}, 0);


/* 향상된 for문 (for of) */

/* 타입이 다 다르지만 iterator(반복자) 속성을 가지고 있다! */
const htmlCollection = document.getElementsByClassName("test");
const nodeList = document.querySelectorAll(".test");
const numbers3 = [30,60,90,120,150];

for(let item of htmlCollection){
  item.textContent = item.textContent + " 입니다";
}

for(let item of nodeList){
    item.style.fontSize = "20px"
}

for(let item of numbers3){
    console.log(item);
}