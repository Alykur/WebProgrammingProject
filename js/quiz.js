
const answersQuizQuestions1and2 = {question1 : "B", question2: "[A, B, C]"}
const wordsIncludedInQuestion3 = ["empathy", "savant", "genius", "immature", "eye contact", "social", "difficulties", "emotionless"]

document.addEventListener("DOMContentLoaded", () => {
    let buttonSubmit = document.getElementById("submitButtonID");

    buttonSubmit.addEventListener("click", () => {

        // Value for question 1
        const checkBoxCheckedQuestion1 = document.querySelector("input[type='radio'][name='question1']:checked")
        const answerQuestion1 = checkBoxCheckedQuestion1.value;
        console.log("Question 1: " + checkBoxCheckedQuestion1.value);

        // Values for question 2
        const checkBoxCheckedQuestion2 = document.querySelectorAll("input[type='checkbox'][name='question2']:checked");
        let answersQuestion2 = [];

        checkBoxCheckedQuestion2.forEach((checkbox) => {
            answersQuestion2.push(checkbox.value);
        })

        console.log("Question 2: " + JSON.stringify(answersQuestion2));

        //Value for question 3
        const answerQuestion3 = document.querySelector("input[type='text'][name='question3']").value;
        console.log("Question 3: " + answerQuestion3.value);



        let divChosenQuestion1;

        switch (checkBoxCheckedQuestion1.value) {
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

        let p = document.createElement("p");
        if(answerQuestion1 === answersQuizQuestions1and2.question1) {
            p.textContent = "Correct !";
            p.style.color = "green";
            p.style.fontWeight = "bold";
        } else {
            p.textContent = "False !";
            p.style.color = "red";
            p.style.fontWeight = "bold";
        }

        divChosenQuestion1.appendChild(p);
    



    });

});

