// Declaration of variables 

let userName = document.querySelector("#userName");
let headerText = document.querySelector("#headerText");
let greetingInput = document.querySelector("#greetingInput");
let quiz = document.querySelector("#quiz");
let q1Button = document.querySelector("#q1Button");
let q2Button = document.querySelector("#q2Button");
let q3Button = document.querySelector("#q3Button");
let q4Button = document.querySelector("#q4Button");
let q5Button = document.querySelector("#q5Button");

let quizQuestion = document.querySelector("#quizQuestion");
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
let answerE = document.querySelector("#answerE");
let iterationNumber = 0;
let correctChoice = "";
let score = 0;

// Array of Questions

let questionList = [
    "Q1: What is the capital of France?",
    "Q2: What is the capital of Germany?",
    "Q3: What is biggest city in the world?",
    "Q4: What is the worlds highest mountain?",
    "Q5: What is the worlds longest river?"]




let answerAList = ['Dublin', 'Paris', 'New York', 'London', 'Montreal'];
let answerBList = ['Frankfurt', 'Vienna', 'Prague', 'Zurich', 'Berlin'];
let answerCList = ['Beijing', 'Delhi', 'Lagos', 'Seoul', 'Tokyo'];
let answerDList = ['Mt Elbrus', 'Mt McKinley', 'Mt Everest', 'K2'];
let answerEList = ['The Shannon', 'The Amazon', 'The Nile', 'The Indus'];





quiz.style.display = "none";
q1Button.style.display = "none";
q2Button.style.display = "none";
q3Button.style.display = "none";
q4Button.style.display = "none";
q5Button.style.display = "none";


function reset() {
    answerA.style.color = "floralwhite";
    answerB.style.color = "floralwhite";
    answerC.style.color = "floralwhite";
    answerD.style.color = "floralwhite";
    answerE.style.color = "floralwhite";

    quizQuestion.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = answerAList[iterationNumber];
    answerB.innerHTML = answerBList[iterationNumber];
    answerC.innerHTML = answerCList[iterationNumber];
    answerD.innerHTML = answerDList[iterationNumber];
    answerE.innerHTML = answerEList[iterationNumber];


}



// Functions 

function greeting() {
    headerText.innerHTML = ""
    headerText.innerHTML = "Hello " + userName.value + ", Welcome to my General Knowledge quiz 2022\
    The aim is to answer as many questions as you can out of 20"
    greetingInput.style.display = 'none';
    quiz.style.display = "block";
    q1Button.style.display = "block";
    quizQuestion.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = answerAList[iterationNumber];
    answerB.innerHTML = answerBList[iterationNumber];
    answerC.innerHTML = answerCList[iterationNumber];
    answerD.innerHTML = answerDList[iterationNumber];
    answerE.innerHTML = answerEList[iterationNumber];



}

function aFunction() {
    answerA.style.color = "red";
    answerB.style.color = "floralwhite";
    answerC.style.color = "floralwhite";
    answerD.style.color = "floralwhite";
    answerE.style.color = "floralwhite";
    correctChoice = "b";


}

function bFunction() {
    answerA.style.color = "floralwhite";
    answerB.style.color = "red";
    answerC.style.color = "floralwhite";
    answerD.style.color = "floralwhite";
    answerE.style.color = "floralwhite";
    correctChoice = "d";

}

function cFunction() {
    answerA.style.color = "florlwhite";
    answerB.style.color = "floralwhite";
    answerC.style.color = "red";
    answerD.style.color = "floralwhite";
    answerE.style.color = "floralwhite";
    correctChoice = "e";

}


function dFunction() {
    answerA.style.color = "floralwhite";
    answerB.style.color = "floralwhite";
    answerC.style.color = "floralwhite";
    answerD.style.color = "red";
    answerE.style.color = "floralwhite";
    correctChoice = "d";

}


function eFunction() {
    answerA.style.color = "floralwhite";
    answerB.style.color = "floralwhite";
    answerC.style.color = "floralwhite";
    answerD.style.color = "floralwhite";
    answerE.style.color = "red";
    correctChoice = "e";

}



function q1Submission() {
    if (correctChoice == "b") {
        score += 1;
    }
    q1Button.style.display = "none";
    q2Button.style.display = "block";
    iterationNumber += 1;

    reset();


}


function q2Submission() {
    if (correctChoice == "d") {
        score += 1;
    }
    q2Button.style.display = "none";
    q3Button.style.display = "block";
    iterationNumber += 1;

    reset();


}







function q3Submission() {
    if (correctChoice == "e") {
        score += 1;
    }
    q3Button.style.display = "none";
    q4Button.style.display = "block";
    iterationNumber += 1;

    reset();



}


function q4Submission() {
    if (correctChoice == "d") {
        score += 1;
    }

    q4Button.style.display = "none";
    q5Button.style.display = "block";
    iterationNumber += 1;

    reset();


}

function q5Submission() {
    if (correctChoice == "e") {
        score += 1;
    }

    iterationNumber += 1;
    quizQuestion.innerHTML = "You have scored " + score;
    q5Button.style.display = "none";

    reset();




}


