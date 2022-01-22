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

let q6Button = document.querySelector("#q6Button");
let q7Button = document.querySelector("#q7Button");
let q8Button = document.querySelector("#q8Button");
let q9Button = document.querySelector("#q9Button");
let q10Button = document.querySelector("#10Button");

let q11Button = document.querySelector("#11Button");
let q12Button = document.querySelector("#12Button");
let q13Button = document.querySelector("#13Button");
let q14Button = document.querySelector("#14Button");
let q15Button = document.querySelector("#15Button");

let q16Button = document.querySelector("#16Button");
let q17Button = document.querySelector("#17Button");
let q18Button = document.querySelector("#18Button");
let q19Button = document.querySelector("#19Button");
let q20Button = document.querySelector("#20Button");

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

let geogQuestionList = [
    "Q1: What is the capital of France?",
    "Q2: What is the capital of Germany?",
    "Q3: What is biggest city in the world?",
    "Q4: What is the worlds highest mountain?",
    "Q5: What is the worlds longest river?"];

let histQuestionList = [
    "Q6: When did World War 2 start?",
    "Q7: Who was the German leader in World War 2?",
    "Q8: What was the longest war in history?",
    "Q9: Where was Daniel O'Connell born?",
    "Q10: Where was the Battle of the Bulge fought?"
];


let sportQuestionList = [
    "Q11: Who won the European Football Championship in 2021?",
    "Q12: Where were the 2020 Olympic Games held?",
    "Q13: Who are the current All Ireland Hurling Champions?",
    "Q14: What is the highest score in darts?",
    "Q15; Who are the current FIFA World Cup Holders?"
];


let filmQuestionList = [
    "Q16: Who won the Oscars for the best actor in 2021?",
    "Q17: What nationality is Colin Farrell?",
    "Q18: What is the highest grossing film of all time?",
    "Q19: What film did Harrison Ford star in?",
    "Q20: What is the highest grossing Netflix movie of all time? ",

];




let answerAList = ['Dublin', 'Frankfurt', 'New York', 'Mt Blanc', 'The Rhine'];
let answerBList = ['Paris', 'Vienna', 'Delhi', 'K2', 'The Shannon'];
let answerCList = ['New York', 'Prague', 'Lagos', 'Mt Everest', 'The Amazon'];
let answerDList = ['London', 'Zurich', 'Seoul', 'Denali', 'The Nile'];
let answerEList = ['Montreal', 'Berlin', 'Tokyo', 'Aconcagua', 'The Mississipi'];

let answerFList = ['1939','Benito Mussolini','Ottoman wars in Europe','Cork','Germany'];
let answerHList = ['1943','Adolf Hitler','Arab-Byzantine wars','Kerry', 'France'];                                                                                                                                                                                                                                                                                                                                                                                                                        ];
let answerIList = ['1945','Joseph Stalin','Reconquista','Clare', 'Overweight'];                  
let answerJList = ['1910','Larry Grayson','Roman-Persian wars', 'Belgium',];       
let answerKList = ['1934', 'Winston Churchill', 'World War II', 'Netherlands',];

let answerLList = ['Malta', 'Japan', 'Limerick', '164', 'France'];
let answerMList = ['Scotland', 'America','Wexford','170', 'Russia'];
let answerNList = ['Italy', 'Spain','Waterford', '180', ' Portugal'];
let answerOList = ['England', 'Australia','Cork', '190', 'Argentina'];
let answerPList = ['Croatia','Brazil','Galway', '200','', 'Poland'];

let answerQList = ['Anthony Hopkins','Irish','Star Wars','Ghostbusters','Shrek'];
let answerRList = ['Riz Ahmed','British','Titanic','Indianna Jones','Frozen'];
let answerSList = ['Garry Oldman','Canadian','Avengers','James Bond','Dont Look up!'];
let answerTList = ['Steve Yeun','Australian','Avatar','Super Man','Napoleon Dynamite'];
let answerUList = ['Michael Douglas','American','Spider Man','Captain America','The Irishman'];







quiz.style.display = "none";
q1Button.style.display = "none";
q2Button.style.display = "none";
q3Button.style.display = "none";
q4Button.style.display = "none";
q5Button.style.display = "none";
q6Button.style.display = "none";
q7Button.style.display = "none";
q8Button.style.display = "none";
q9Button.style.display = "none";
q10Button.style.display = "none";
q11Button.style.display = "none";
q12Button.style.display = "none";
q13Button.style.display = "none";
q14Button.style.display = "none";
q15Button.style.display = "none";
q16Button.style.display = "none";
q17Button.style.display = "none";
q18Button.style.display = "none";
q19Button.style.display = "none";
q20Button.style.display = "none";


function reset() {
    answerA.style.color = "floralwhite";
    answerB.style.color = "floralwhite";
    answerC.style.color = "floralwhite";
    answerD.style.color = "floralwhite";
    answerE.style.color = "floralwhite";

    quizQuestion.innerHTML = geogQuestionList[iterationNumber];
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
    quizQuestion.innerHTML = geogQuestionList[iterationNumber];
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






}


