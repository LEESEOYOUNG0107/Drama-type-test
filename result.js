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
    setTimeout(() => {
        qna.style.animation = "fadeIn 1s";

        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 450)
    }, 450)

    setResult();
};

function calculation(){
    let result = select.indexOf(Math.max(...select)); //최대값의 인덱스 반환
    return result;
}