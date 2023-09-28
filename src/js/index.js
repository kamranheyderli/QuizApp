// // loader
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let spinner = document.querySelector(".loader");
        if (spinner) {
            spinner.style.display = "none"
        }

    }, 5000);
});

let quesstionsData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<javascript>",
        b: "<script>",
        c: "<js>",
        d: "<scripting>",
        e: "link",
        correct: "b"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "Both the <head> section and the <body> section are correct",
        b: "The <body> section",
        c: "The <head> section",
        d: "The <meta> section",
        e: "usestrict mode",
        correct: "a"
    },
    {
        question: "How do you write Hello W3docs in an alert box?",
        a: "alertBox('Hello W3docs');",
        b: "alert('Hello W3docs');",
        c: "msg('Hello W3docs');",
        d: "msgBox('Hello W3docs');",
        e: "modal('Hello W3docs')",
        correct: "b"
    },
    {
        question: "Which of the following is the correct syntax to redirect a URL using JavaScript?",
        a: "document.location='http://www.w3docs.com';",
        b: "navigator.location='http://www.w3docs.com';",
        c: "window.location='http://www.w3docs.com';",
        d: "browser.location='http://www.w3docs.com';",
        e: "browser.location+='http://www.w3docs.com';",
        correct: "c"
    },
    {
        question: "How do you declare a new date in JavaScript?",
        a: "var date = Date();",
        b: "var date = date('now');",
        c: "var date = new Date();",
        d: "var date = date().current();",
        e: "var date = date.current",
        correct: "c"
    },
    {
        question: "How do you navigate back and forward in the browser's history using JavaScript?",
        a: "window.history.next();",
        b: "window.history.load_next();",
        c: "window.history.forward();",
        d: "window.history.load_forward();",
        e: "window.history.load-next();",
        correct: "c"
    },
    {
        question: "How do you round the number 5.35 to the nearest integer?",
        a: "rnd(5.35)",
        b: "Math.rnd(5.35)",
        c: "round(5.35)",
        d: "Math.round(5.35)",
        e: "Math.rnded(5.35)",
        correct: "d"
    },
    {
        question: "What function in javascript opens a new tab?",
        a: "window.open(...);",
        b: "window.new(...);",
        c: "open(new window());",
        d: "window.open_new(...);",
        e: "window.open-new(...);",
        correct: "a"
    },
    {
        question: "How do you open a confirm window in JavaScript?",
        a: "confirm()",
        b: "location.confirm()",
        c: "window.open_confirm()",
        d: "window.new_confirm()",
        e: "window.old_confirm()",
        correct: "a"
    },
    {
        question: "How do you get cookies in JavaScript?",
        a: "window.cookies",
        b: "location.cookies",
        c: "document.cookie",
        d: "document.cookies",
        e: "document.addevent(cookie)",
        correct: "c"
    },
    {
        question: "How do you get the DOM element with id in JavaScript?",
        a: "window.getElementById(...)",
        b: "document.getElementById(...)",
        c: "page.getElementById(...)",
        d: "document.simon(click)",
        e: "document.innerHTML.getElementById(...)",
        correct: "b"
    },
    {
        question: "Which of the following does the pop() method do?",
        a: "It increments the total length by 1",
        b: "It decrements the total length by 1",
        c: "It prints the first element but no effect on the length",
        d: "None of the above options",
        e: "None of the above array length -1",
        correct: "b"
    },
    {
        question: "What kind of scope does JavaScript use?",
        a: "Segmental",
        b: "Literal",
        c: "Sequential",
        d: "Lexical",
        e: "DOM",
        correct: "d"
    },
    {
        question: "Which of the following options is right for dynamic scoping?",
        a: "Variables can be declared outside the scope",
        b: "Variables cannot be declared outside the scope",
        c: "Variables must be declared outside the scope",
        d: "None of the mentioned",
        e: "Global Function",
        correct: "a"
    },
    {
        question: "Which of the following is used for assigning a value to a variable?",
        a: "+",
        b: "=",
        c: "_",
        d: "-",
        e: "*",
        correct: "b"
    }
]

let quiz = document.getElementById("quiz");
let answer = document.querySelectorAll(".answer");
let questions = document.getElementById("questions");
let btn = document.getElementById("submit");
let a = document.getElementById("a_text");
let b = document.getElementById("b_text");
let c = document.getElementById("c_text");
let d = document.getElementById("d_text");
let e = document.getElementById("e_text");

let currentQuestions = 0;
let score = 0;


function loadQuiz() {
    let currentQuizData = quesstionsData[currentQuestions];
    questions.innerText = currentQuizData.question;
    a.innerText = currentQuizData.a;
    b.innerText = currentQuizData.b;
    c.innerText = currentQuizData.c;
    d.innerText = currentQuizData.d;
    e.innerText = currentQuizData.e;

}
loadQuiz()

function deSelectedAnswer() {
    answer.forEach((element) => {
        element.checked = false
    })
};

function getSelected() {
    let answers
    answer.forEach((element) => {
        if (element.checked) {
            answers = element.id
        }
    })
    return answers

}

btn.addEventListener("click", () => {
    let answer = getSelected()
    if (answer) {
       
        if (answer === quesstionsData[currentQuestions].correct) {
            score++
        }
        currentQuestions++
        if (currentQuestions < quesstionsData.length) {
            loadQuiz()
        }
        else {
            quiz.innerHTML = `
            <h1>Testiniz bitdi, neticeniz:${score} xal</h1>
            <button class="submit" id="submit" onClick="location.reload()">Təkrar sinaq edin</button>`
        }
        deSelectedAnswer()
    }
})