const questions=[
    {
    question:"Who wrote the national song Vande Mataram?",
    answers:[
        {text:"Rabindranat Tagore",correct:false},
        {text:"Sharat chandra chattopadhyay",correct:false},

        {text:"Bankimchandra Chatterjee",correct:true},
        {text:"None of the above",correct:false},


    ]
},
{
    question:"Tripitakas are sacred books of?",
    answers:[
        {text:"Buddhists ",correct:true},
        {text:"Jains ",correct:false},
        {text:"Hindus",correct:false},
        {text:"None of the above",correct:false},


    ]
},

{
    question:"What is the most appropriate name for the Indus Civilization?",
    answers:[
        {text:"Indus Valley Civilization",correct:false},
        {text:" Indus Civilization",correct:false},

        {text:"Harappan Civilizatione",correct:true},
        {text:"None of the above",correct:false},


    ]
},
{
    question:"Which of the following Khalji rulers killed his father-in-law to sit on the throne of Delhi?",
    answers:[
        {text:"Qutubuddin Aibak ",correct:false},
        {text:" Alauddin Khalji  ",correct:true},

        {text:"Jalaluddin Khalji",correct:false},
        {text:"None of the above",correct:false},


    ]
}


];


const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");
let currentqid=0;
let score=0;
function startQuiz(){
    currentqid=0;
    score=0;
    nextButton.innerHTML="Next";
    showQ();
}

function showQ(){
    resetstate();
let currentq=questions[currentqid];
let qno=currentqid + 1;
questionElement.innerHTML=qno+". "+currentq.question;
currentq.answers.forEach(answer =>{
 const button=document.createElement("button");
 button.innerHTML=answer.text;
 button.classList.add("btn");
 answerButton.appendChild(button);
 if(answer.correct){
    button.dataset.correct=answer.correct;
 }
 button.addEventListener("click",selectAns);
});
}

function resetstate(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
startQuiz();


function selectAns(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("Incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;

    });
    nextButton.style.display="block";
}



function  showScore(){
    resetstate();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"; 
}

function handleNextButton(){
    currentqid++;
    if(currentqid < questions.length){
        showQ();
    }
    else{
          showScore();
    }
    
}

nextButton.addEventListener("click",()=>{
     if(currentqid<questions.length){
        handleNextButton();
        
    }
    else{
        startQuiz();
    }
})
startQuiz();


