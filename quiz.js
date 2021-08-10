const quizForm = document.forms[0];
const queDivs = document.querySelectorAll(".ow");
const scoreDiv = document.querySelector(".scoreHere");
const submitQuiz = document.querySelector("#submitQuiz");

const correctAns = ["option1", "option2", "option2", "option1", "option1", "option2", "option1", "option3", "option1", "option1" ];
let score= 0;

quizForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(quizForm);
    let index=0;
    for(let entry of data){
        console.log(entry[1])
       if(entry[1] == correctAns[index]){
        queDivs[index].style.backgroundColor = "lightgreen";
        score++;
       }
       else{
        queDivs[index].style.backgroundColor = "red";
       }
        index++;
    }
    scoreDiv.innerText = score;
    submitQuiz.style.display= "none";
});