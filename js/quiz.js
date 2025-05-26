
const answersQuizQuestions1and2 = {question1 : "B", question2: "[A, B, C]"}
const wordsIncludedInQuestion3 = ["empathy", "savant", "genius", "immature", "eye contact", "social", "difficulties", "emotionless"]

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("input[type='radio']").forEach(radio => {
        radio.checked = false;
    });
    
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        checkbox.checked = false;
    });
    
    document.querySelectorAll("input[type='text']").forEach(textInput => {
        textInput.value = "";
    });

    let buttonSubmit = document.getElementById("submitButtonID");

    buttonSubmit.addEventListener("click", () => {

        // Value for question 1
        const checkBoxCheckedQuestion1 = document.querySelector("input[type='radio'][name='question1']:checked")
        const answerQuestion1 = checkBoxCheckedQuestion1.value;
        console.log("Question 1: " + checkBoxCheckedQuestion1.value);

        // Display the question 2 if a checkbox is checked
        if(checkBoxCheckedQuestion1.value){
            const question2 = document.getElementById("question2");
            question2.style.display = "block";

            const question1 = document.getElementById("question1");
            question1.style.display = "none";
        }

        // Values for question 2
        const checkBoxCheckedQuestion2 = document.querySelectorAll("input[type='checkbox'][name='question2']:checked");
        let answersQuestion2 = [];

        checkBoxCheckedQuestion2.forEach((checkbox) => {
            answersQuestion2.push(checkbox.value);
        })

        // Display the question 3 if at least one checkbox is checked
        if(answersQuestion2.length > 0) {
            const question3 = document.getElementById("question3");
            question3.style.display = "block";

            const question2 = document.getElementById("question2");
            question2.style.display = "none";
        }

        //Value for question 3
        const answerQuestion3 = document.querySelector("input[type='text'][name='question3']").value;

        if(answerQuestion3){

            const question1 = document.getElementById("question1");
            question1.style.display = "block";

            const question2 = document.getElementById("question2");
            question2.style.display = "block";

            const question3 = document.getElementById("question3");
            question3.style.display = "block";

        }

        processQuestion1(answerQuestion1);
        processQuestion2(answersQuestion2);
    
    });

});


const processQuestion1 = (answer) => {

    let divChosenQuestion1;

    // Remove previous feedbacks for question 1
    for(let letter of ["A", "B", "C"]) {
        let div = document.getElementById("divQuestion1Answer" + letter);
        if(div.getElementsByTagName("p").length > 0) {
            div.getElementsByTagName("p")[0].remove();
        }
    }

    switch (answer) {
        case "A":
            divChosenQuestion1 = document.getElementById("divQuestion1AnswerA");
            break;
        case "B":
            divChosenQuestion1 = document.getElementById("divQuestion1AnswerB");
            break;
        case "C":
            divChosenQuestion1 = document.getElementById("divQuestion1AnswerC");
            break;
        default:
            break;  
    }

    // Prevent having multiple Correct or False for the same answers
    const existingFeedback = divChosenQuestion1.querySelector("p");
    if (existingFeedback) {
        existingFeedback.remove();
    }


    let p = document.createElement("p");
    if(answer === answersQuizQuestions1and2.question1) {
        p.textContent = "Correct !";
        p.style.color = "green";
        p.style.fontWeight = "bold";
    } else {
        p.textContent = "False !";
        p.style.color = "red";
        p.style.fontWeight = "bold";
    }

    p.style.fontSize = "large"
    p.style.marginLeft = "1%";


    divChosenQuestion1.appendChild(p);
}

const processQuestion2 = (answers) => {

    let divChosenQuestion2;

    for(let letter of ["A", "B", "C", "D"]){
        let div = document.getElementById("divQuestion2Answer" + letter);
        if(div.getElementsByTagName("p").length > 0){
            div.getElementsByTagName("p")[0].remove();
        }
    }

    for(let letter of answers){
        divChosenQuestion2 = document.getElementById("divQuestion2Answer" + letter);
        let p = document.createElement("p");

        if(answersQuizQuestions1and2.question2.includes(letter)){
            p.textContent = "Correct !";
            p.style.color = "green";
            p.style.fontWeight = "bold";
        } else {
            p.textContent = "False !";
            p.style.color="red";
            p.style.fontWeight = "bold";
        }

        p.style.fontSize = "large"
        p.style.marginLeft = "1%";



        divChosenQuestion2.appendChild(p);
    }


}