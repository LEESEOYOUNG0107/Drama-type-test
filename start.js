let main = document.querySelector("#intro");
let qna = document.querySelector("#qna");
let result = document.querySelector("#result");
let endPoint = 8; /*질문 갯수 */
let select = [0,0,0,0,0,0,0]; //답변

function begin() {
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.animation = "fadeIn 1s";

        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 400)
        let qIndex = 0
        goNext(qIndex);
    }, 400);
}


function goNext(qIndex) {
    let q = document.querySelector('.question');
    q.innerHTML = qnaList[qIndex].q; /*qnaList n번 방에 있는 question 가져오기*/
    for (let i in qnaList[qIndex].a) { /*qnaList n번 방에 choice i번째에 text 부분 값 가져오기 */
        addAnswer(qnaList[qIndex].a[i].text, qIndex, i);
    }

    var status = document.querySelector('.progressBar');
    status.style.width = (100 / endPoint) * (qIndex) + '%';
}

function addAnswer(answerText, qIndex, idx) {
    var a = document.querySelector('.answer');
    var answer = document.createElement('button');

    answer.classList.add('answerList'); /*버튼들에 answerList 클래스 이름 부여 */
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function () { /*값을 선택했을 때 */
        let children = document.querySelectorAll('.answerList');

        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.animation = "fadeOut 0.5s";
        }

        setTimeout(() => {
            var target = qnaList[qIndex].a[idx].type;
            for(let j=0; j<target.length; j++){ //답을 선택하면 해당하는 type의 값이 1씩 증가
                select[target[j]] += 1; 
            }   

            for (let i = 0; i < children.length; i++) { /*비활성화 됨, 사라짐*/
                children[i].style.display = 'none';
            }
            
            qIndex++;
            if (qIndex === endPoint) {
                goResult();
            } else {
                goNext(qIndex);
            }
        }, 450) /*버튼이 사라지고 난 다음*/
        
    });
}

function restart(){
    begin();
}