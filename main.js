let userName = document.querySelector("#userName");
let headerText = document.querySelector("#headerText");
let greetingInput = document.querySelector("#greetingInput");
let quiz = document.querySelector("#quiz");
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
let correctChoice = "";
let score = 0;


quiz.style.display = "none";



function greeting() {
    headerText.innerHTML = ""
    headerText.innerHTML = "Hello " + userName.value + ", Welcome to Christmas quiz 2022";
    greetingInput.style.display = 'none';
    quiz.style.display = "block";


}

function aFunction() {
    answerA.style.color = "red";
    answerB.style.color = "floralwhite";
    answerC.style.color = "floralwhite";
    answerD.style.color = "floralwhite";
    correctChoice = "a";


}

function bFunction() {
    answerA.style.color = "floralwhite";
    answerB.style.color = "red";
    answerC.style.color = "floralwhite";
    answerD.style.color = "floralwhite";
    correctChoice = "b";

}

function cFunction() {
    answerA.style.color = "florlwhite";
    answerB.style.color = "floralwhite";
    answerC.style.color = "red";
    answerD.style.color = "floralwhite";
    correctChoice = "c";

}


function dFunction() {
    answerA.style.color = "floralwhite";
    answerB.style.color = "floralwhite";
    answerC.style.color = "floralwhite";
    answerD.style.color = "red";
    correctChoice = "d";

}

function q1Submission() {
    if (correctChoice == "b") {
        score += 1
    }
    console.log(score);

}



