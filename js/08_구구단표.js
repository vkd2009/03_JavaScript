


function createTable(){
    // 시작 단
    const start = Number(document.getElementById("start").value);

    // 끝단
    const end = Number(document.getElementById("end").value);

    // 단(제목)이 작성되는 행 요소 (tr 태그)
    const theadrow = document.getElementById("thead-row");

    // 구구단(내용)이 작성되는 영역(tbody 태그)
    const tbdoy = document.getElementById("tbody");

    let sum = 0;

    theadrow.innerHTML = ""; // 이전 내용 삭제

    // start 부터 end 까지 1씩 증가
    for(let dan = start; dan <= end ; dan++){
      theadrow.innerHTML += `<th>${dan}단</th>`
      }

      tbdoy.innerHTML = "";

    for(let num= 1 ; num <= 9 ; num++ ){

        let str= "<tr>";
        for(let dan=start ; dan <= end ; dan++){
        str += `<td>${dan} x ${num} = ${dan * num}</td>`;        
        }

        str += "</tr>";
        tbdoy.innerHTML += str;

        
    }
  
      
}


