document.addEventListener("DOMContentLoaded",()=>{
    const questionContainer=document.getElementById("question-container")
    const resultContainer=document.getElementById("result-container")
    const startBtn=document.getElementById("start-btn")
    const nextBtn=document.getElementById("next-btn")
    const restartBtn=document.getElementById("restart-btn")
    const questionText=document.getElementById("question-text")
    const choiceContainer=document.getElementById("choices-list")
    var currentidx=0;
    var score=0;
    const questions=[
        {
            questionId: 1,
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            choice: "Paris"
        },
        {
            questionId: 2,
            question: "Which language is primarily used for web development?",
            options: ["Python", "JavaScript", "C++", "Java"],
            choice: "JavaScript"
        },
        {
            questionId: 3,
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            choice: "4"
        },
        {
            questionId: 4,
            question: "Who developed the theory of relativity?",
            options: ["Newton", "Einstein", "Tesla", "Galileo"],
            choice: "Einstein"
        },
        {
            questionId: 5,
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Venus", "Mars", "Jupiter"],
            choice: "Mars"
        }
    ]    
    const nextShow=()=>{
        nextBtn.classList.remove("hidden")
     
        nextBtn.onclick=()=>{
           
            if(currentidx==questions.length-1){
                questionContainer.classList.add("hidden")
                nextBtn.classList.add("hidden")
                resultContainer.classList.remove("hidden")
                document.getElementById("score").textContent=score;
                return;
            }
                currentidx++;
                render(currentidx);
        }
    }
    
    const startQuiz=()=>{
        startBtn.classList.add("hidden")
        questionContainer.classList.remove("hidden")
        render(currentidx)
    }
    function render(idx){
        choiceContainer.innerHTML = "";
            questionText.textContent=questions[idx].question
            questions[idx].options.forEach(choice=>{
                const li=document.createElement("li")
                li.innerHTML=`${choice}`
                choiceContainer.appendChild(li)
                li.addEventListener("click",(e)=>{
                    if(e.target.textContent===questions[idx].choice){
                        score++;
                    }
                    nextShow();
                })
            })
}
restartBtn.addEventListener("click",()=>{
    score=0;
    resultContainer.classList.add("hidden")
    questionContainer.classList.remove("hidden")
    currentidx=0;
    render(0)
})
startBtn.addEventListener("click",startQuiz)

})