const questionContainers = document.getElementsByClassName("question-container");
const questions = document.getElementsByClassName("question");

const answers = document.getElementsByClassName("answer");
const arrows = document.getElementsByClassName("arrow");
const box = document.getElementById("box");
let prevOpen=null;
function close(num) {
    answers[num].classList.remove("open");
    questions[num].classList.remove("bold");
    arrows[num].classList.remove("open");
    box.classList.remove("open");


}
function open(num) {
    answers[num].classList.add("open"); 
        questions[num].classList.add("bold");
        arrows[num].classList.add("open");
        box.classList.add("open");
}
for(let i =0; i<questionContainers.length; i++){
    questionContainers[i].addEventListener("click", (e) => {
        if(prevOpen === i) {
            close(i);
            prevOpen = null;
        }else {
            if(prevOpen!== null){
                close(prevOpen);
            }
            open(i);
            
            prevOpen = i;
        }
    })
}