/* prompt 사용 연습 */

function test(){
  const password = prompt("비밀번호를 입력하세요");

  // 확인 -> 입력한 문자열
  // 취소 -> null

    if(password == null){
        alert("취소");

    } else { // 확인
        
      // 입력한 비밀번호가 '1234'가 맞는지 확인
      if(password == '1234'){
      alert("비밀번호가 일치한다")

    } else {
        alert("비밀번호가 일치하지 않습니다");
    }
 }
}


/* 입/출금 하기 */

let balance = 10000; 
const deposit = document.getElementById("deposit"); 
const withdraial = document.getElementById("withdrawal"); 
const amount = document.getElementById("amount");


function deposit(){ // 입금
  const v1 = Number(deposit.value);
  balance += v1;
  
  amount.innerText = balance;

  
}