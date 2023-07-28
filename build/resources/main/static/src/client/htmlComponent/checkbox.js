import { targetId } from "../input";

const checkbox = document.getElementById('checkbox');

// - 플레이어 긍정, 부정 
// true -> 긍정 -> 방어
// false -> 부정 -> 공격

// - 운석 유사도
// true -> 맞춘거다
// false -> 못맞춘거다

function renderCheckbox(targetID, contexts, result) {

    // 긍정 입력
    let targetType = ((targetID >> 24) & 0x7F);
    
    // 락온이 안된 상태
    if (targetID === -1) {

        if (result === true) {

            checkbox.innerText = contexts + " => 긍정! \n 방어막 생성!";
            checkbox.style.backgroundColor = "green";
            console.log("hi");
    
        // 부정 입력
        } else if (result === false) {

            checkbox.innerText = contexts + " => 부정! \n 락온이 된 상태에서만 미사일 발사가 가능합니다!";
            checkbox.style.backgroundColor = "gray";
            console.log("hi");
        
        }
    
    // 플레이어 일경우
    } else {
    
        if (targetType === 1) {

            if (result === true) {
                checkbox.innerText = contexts + " => 긍정! \n 방어막 생성!";
                checkbox.style.backgroundColor = "green";
                console.log("hi");
        
            // 부정 입력
            } else if (result === false) {
                checkbox.innerText = contexts + " => 부정! \n 미사일 공격!";
                checkbox.style.backgroundColor = "red";
                console.log("hi");
            }

    // 운석 일경우
        } else if (targetType === 2) {

            if (result === true) {
                checkbox.innerText = contexts + " => 유사도 성공! \n 미사일 발사!";
                checkbox.style.backgroundColor = "red";
                console.log("hi");
        
            // 부정 입력
            } else if (result === false) {
                checkbox.innerText = contexts + " => 유사도 실패! \n 다른 단어를 입력해 주세요!";
                checkbox.style.backgroundColor = "gray";
                console.log("hi");
            }

        }

    }

    // Clear the message after 3 seconds
    setTimeout(() => {
        checkbox.innerText = "";
        checkbox.style.backgroundColor = "";
    }, 5000);
    
}

export default renderCheckbox;

/* ----------------------------------------------------------- */

{/* <div id="checkbox"></div>

#checkbox {

    position: fixed;
    bottom: 20%;
    left: 0;
    right: 0;
    width: 300px;
    margin: auto;
    background-color: gray;
    padding: 10px;
    border-radius: 5px;
    color: white;
  
} */}