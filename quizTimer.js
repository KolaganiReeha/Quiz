let quiz = [
    {
        question : "What is the capital of India?",
        options : ["Hyderabad","Chennai","Delhi","Mumbai"],
        answer : "Delhi"
    },
    {
        question : "Which of the following is used for web development?",
        options : ["Python", "HTML", "Java", "C++"],
        answer : "HTML"
    },
    {
        question : "Who wrote 'Hamlet'?",
        options : ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer : "William Shakespeare"
    }
];
let currentQuestion = 0;
let sc = 0;
let timeLeft = 30;
let interval=0;
let timer = document.getElementById("timer");
let questionEl = document.getElementById("question");
let optionsEl = document.getElementById("options");
let timerNum = document.getElementById("timerNum");
let scoreNum = document.getElementById("scoreNum");
let score = document.getElementById("score");
let btn = document.getElementById("btn");

function questionLoad(){
    if(currentQuestion>=quiz.length){
        endQuiz();
        return;
    }
    clearInterval(interval);
    timeLeft=30;
    timerNum.textContent=timeLeft;
    timeInterval();
    let currentQuiz = quiz[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML="";
    currentQuiz.options.forEach(opt=>{
         let btn = document.createElement("button");
         btn.classList.add("optBtn");
         btn.textContent=opt;
         btn.onclick = ()=>checkAns(opt);
         optionsEl.appendChild(btn);
     })
}

function checkAns(opt){
    if(opt===quiz[currentQuestion].answer) sc++;
    currentQuestion++;
    questionLoad();
}

function timeInterval(){
    interval = setInterval(()=>{
        --timeLeft;
        timerNum.textContent=timeLeft;
        if(timeLeft<=0){
            clearInterval(interval);
            endQuiz();
        }
    },1000)
}

function endQuiz(){
    timer.style.display="none";
    questionEl.style.display="none";
    optionsEl.style.display="none";
    score.style.display="block";
    scoreNum.textContent=sc;
    btn.style.display="block";
}

function reStart(){
    currentQuestion = 0;
    sc = 0;
    timeLeft = 30;
    timer.style.display="block";
    questionEl.style.display="block";
    optionsEl.style.display="block";
    score.style.display="none";
    btn.style.display="none";
     questionLoad();
}

questionLoad();