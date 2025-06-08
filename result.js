function setResult(){
    let point = calculation();
     
    let resultImg = document.createElement('img');
    let imgDiv = document.querySelector('#resultImg');
    let imgUrl = 'imgs/' + point + '.png';
    resultImg.src = imgUrl;
    imgDiv.appendChild(resultImg);

    let resultName = document.querySelector('#resultName');
    resultName.innerHTML = infoList[point].name;

    let resulthashtag = document.querySelector('#resulthashtag');
    resulthashtag.innerHTML = infoList[point].hashtag;
    
    let resultDesc = document.querySelector('#resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult() {
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.animation = "fadeIn 1s";

        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 450)
    }, 450)

    setResult();
    // HTML에 있는 시작 버튼의 `begin()` 함수를 다시 호출하도록 합니다.
// 또는 퀴즈의 첫 화면으로 돌아가는 새로운 함수를 만들 수 있습니다.
const restartButton = document.querySelector('.restartBtn');
restartButton.addEventListener('click', () => {
    // qna 페이지를 다시 보여주고, 결과 페이지를 숨김
    // qna 페이지 초기화 로직도 여기에 포함되어야 합니다.
    // 예를 들어, qna 페이지의 모든 질문과 답변을 초기 상태로 되돌리는 함수 호출
    window.location.reload(); // 가장 간단한 방법 (페이지 새로고침)
    // 또는, 시작 화면으로 돌아가는 함수를 직접 구현:
    // document.querySelector('#result').style.display = 'none';
    // document.querySelector('#intro').style.display = 'block';
    // qna 관련 변수 초기화 등
});
}

function calculation(){
    let result = select.indexOf(Math.max(...select)); //최대값의 인덱스 반환
    return result;
}