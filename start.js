let main = document.querySelector("#intro");
let qna = document.querySelector("#qna");
let endPoint = 8; /*질문 갯수 */

function begin(){
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.animation = "fadeIn 1s";

        setTimeout(()=>{
            main.style.display = "none";
            qna.style.display = "block";
        }, 400)
        let qIndex = 0
        goNext(qIndex);
    }, 400);
} 


function goNext(qIndex){
    if(++qIndex == endPoint){
        goResult();
    }

    let q = document.querySelector('.question');
    q.innerHTML = qnaList[qIndex].question; /*qnaList n번 방에 있는 question 가져오기*/
    for(let i in qnaList[qIndex].choice){ /*qnaList n번 방에 choice i번째에 text 부분 값 가져오기 */
        addAnswer(qnaList[qIndex].choice[i].text, qIndex); 
    }

    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIndex) + '%';
}

function addAnswer(answerText, qIndex){
    var a = document.querySelector('.answer');
    var answer = document.createElement('button');

    answer.classList.add('answerList'); /*버튼들에 answerList 클래스 이름 부여 */
    answer.classList.add('fadeIn');
    
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){ /*값을 선택했을 때 */
        let children = document.querySelectorAll('.answerList');
    
        for(let i=0; i<children.length; i++){
            children[i].disabled = true;
            children[i].style.animation = "fadeOut 0.5s";
        }

        setTimeout(() => {
            for(let i=0; i<children.length; i++){ /*비활성화 됨, 사라짐*/
                children[i].style.display = 'none';
            }
            goNext(++qIndex);
        }, 450) /*버튼이 사라지고 난 다음*/
        
    });
}

function goResult(){
    
}