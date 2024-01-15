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

const balanceDisplay = document.getElementById('balance');
const amountInput = document.getElementById('amount');
let balance = 10000;
const password = '1234';

function deposit() {
    const depositAmount = parseFloat(amountInput.value);
    if (!isNaN(depositAmount)) {
        balance += depositAmount;
        updateBalanceDisplay();
        amountInput.value = '';
    }
}

function withdrawal() {
    const enteredPassword = prompt('비밀번호를 입력하세요:');
    if (enteredPassword === password) {
        const withdrawalAmount = parseFloat(amountInput.value);
        if (!isNaN(withdrawalAmount)) {
            if (withdrawalAmount > balance) {
                alert('출금 금액이 잔액보다 클 수 없습니다');
            } else {
                balance -= withdrawalAmount;
                updateBalanceDisplay();
                alert(`${withdrawalAmount}원이 출금 되었습니다. 남은 잔액: ${balance}원`);
                amountInput.value = '';
            }
        }
    } else {
        alert('비밀번호가 일치하지 않습니다');
    }
}

function updateBalanceDisplay() {
    balanceDisplay.textContent = balance + '원';
}