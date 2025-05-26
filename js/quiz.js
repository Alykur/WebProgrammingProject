
const answersQuizQuestions1and2 = {question1 : "B", question2: "[A, B, C]"}
const wordsIncludedInQuestion3 = ["empathy", "savant", "genius", "immature", "eye contact", "social", "difficulties", "emotionless"]

document.addEventListener("DOMContentLoaded", () => {
    let buttonSubmit = document.getElementById("submitButtonID");

    buttonSubmit.addEventListener("click", () => {

        // Value for question 1
        const checkBoxCheckedQuestion1 = document.querySelector("input[type='radio'][name='question1']:checked")
        console.log("Question 1: " + checkBoxCheckedQuestion1.value);

        // Values for question 2
        const checkBoxCheckedQuestion2 = document.querySelectorAll("input[type='checkbox'][name='question2']:checked");
        let answersQuestion2 = [];

        checkBoxCheckedQuestion2.forEach((checkbox) => {
            answersQuestion2.push(checkbox.value);
        })

        console.log("Question 2: " + JSON.stringify(answersQuestion2));

        //Value for question 3
        const answerQuestion3 = document.querySelector("input[type='text'][name='question3']");
        console.log("Question 3: " + answerQuestion3.value);

        
        
    });

});

