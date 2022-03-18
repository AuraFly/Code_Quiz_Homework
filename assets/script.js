// Answer key: 2, 1, 4, 4, 2, 3, 1, 3, 2, 2
var timerEl = document.querySelector(".timer");
var mainEl = document.getElementById("mainQuestion");
var msecEl = document.querySelector(".mainsec");
var startBtn = document.getElementById("startBtn");
var resetBtn = document.getElementById("resetBtn");
var nmBtn = document.getElementById("nameBtn");
var nameF = document.querySelector(".textBox")
var ask1 = document.getElementById("li1");
var ask2 = document.getElementById("li2");
var ask3 = document.getElementById("li3");
var ask4 = document.getElementById("li4");

var score = 0;
var timeLeft = 75;

var timerInterval;

document.querySelector(".mainol").hidden = true;
nameF.hidden = true;

function timeUP() {

mainEl.textContent = "TIME IS UP!";
mainEl.style.color = "red";

quizOver();
}

function setTime() {
    timerInterval = setInterval(function() {
    timeLeft--;
    timerEl.textContent = "Time Left: " + timeLeft;

    if(timeLeft <= 0) {
    clearInterval(timerInterval);
    timeUP();
        }
    }, 1000);
}

function scoreBoard() {
    nameF.hidden = true;
    resetBtn.style.display = "flex";
    mainEl.textContent = "SCOREBOARD: ";
    msecEl.style.color = "white";
    msecEl.style.fontSize = "x-large";
    msecEl.textContent = "1st.  " +
    localStorage.getItem("nField") +
    " ........... " + localStorage.getItem("score") +
    " points with " + localStorage.getItem("time")+ " seconds left";
}

function quizOver(){
    clearInterval(timerInterval);
    nameF.hidden = false;
    document.querySelector(".mainol").hidden = true;
    msecEl.textContent = "You answered " + score + " question(s) correctly with " + timeLeft + " seconds left!";
    msecEl.style.textAlign = "center";

if (score >= 8) {
    msecEl.textContent += " Wow!";
    } else {
        if (score < 8 && score > 5) {
            msecEl.textContent += " Not bad!";
        } else {
            if (score < 5 && score > 2) {
                msecEl.textContent += " Nice try!";
            } else {
                if (score < 2 && score >= 0) {
                    msecEl.textContent += " Yikes!";
                }
            }
        }
    }
    nmBtn.onclick = function() {
        let nField = document.getElementById("nameField").value;

            localStorage.setItem("nField", nField);
            localStorage.setItem("score", score);
            localStorage.setItem("time", timeLeft);
            scoreBoard();
        }
    }


// Function populates eighth set of answers //
// then kicks off to ninth question //
function qSet10() {
    ask1.hidden = false;
    ask2.hidden = false;
    ask3.hidden = false;
    ask4.hidden = false;
    ask1.textContent = "A written text of a movie covered in coffee.";
    ask2.textContent = "A programming language that allows implementation of complex features on web pages.";
    ask3.textContent = "A cascading style sheet. ";
    ask4.textContent = "A programming language used for SQL databases.";

    ask2.onclick = function() {
        mainEl.textContent = "Correct!";
        ask2.style.backgroundColor = "rgb(35, 71, 71)";
        ask4.hidden = true;
        ask3.hidden = true;
        ask1.hidden = true;
        ++score;

        setTimeout(function() { finalScore("Here is your final score:"); }, 1000);

        function finalScore(value) {
            ask2.style.backgroundColor = "black";
            mainEl.textContent = value;
            quizOver();
        }
        return;
    }
    
    ask4.onclick = function() {
        incorrectSel();
        }
    
    ask3.onclick = function() {
        incorrectSel();
        }
    
    ask1.onclick = function() {
        incorrectSel();
        }

    function incorrectSel() {
        mainEl.textContent = "Sorry, that is not correct!";
        timeleft = (timeLeft -= 5)
        timerEl.style.color = "red";
        ask1.hidden = true;
        ask2.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
        setTimeout(function() { finalScore("Here is your final score:"); }, 1000);

        function finalScore(value) {
        mainEl.textContent = value;
        timerEl.style.color = "white";
        quizOver();
        }
        return;
    }
return;
}

// Function populates eighth set of answers //
// then kicks off to ninth question //
function qSet9() {
    ask1.hidden = false;
    ask2.hidden = false;
    ask3.hidden = false;
    ask4.hidden = false;
    ask1.textContent = "save.to.local.storage.yes";
    ask2.textContent = "localStorage.setItem(name,value)";
    ask3.textContent = "localStorage.getItem(name,value)";
    ask4.textContent = "Game options > system > save game";

    ask2.onclick = function() {
        mainEl.textContent = "Correct!";
        ask2.style.backgroundColor = "rgb(35, 71, 71)";
        ask4.hidden = true;
        ask3.hidden = true;
        ask1.hidden = true;
        ++score;

        setTimeout(function() { que10("What is JavaScript?"); }, 1000);

        function que10(value) {
            ask2.style.backgroundColor = "black";
            mainEl.textContent = value;
            qSet10();
        }
        return;
    }
    
    ask4.onclick = function() {
        incorrectSel();
        }
    
    ask3.onclick = function() {
        incorrectSel();
        }
    
    ask1.onclick = function() {
        incorrectSel();
        }

    function incorrectSel() {
        mainEl.textContent = "Sorry, that is not correct!";
        timeleft = (timeLeft -= 5)
        timerEl.style.color = "red";
        ask1.hidden = true;
        ask2.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
        setTimeout(function() { que10("What is JavaScript?"); }, 1000);

        function que10(value) {
        mainEl.textContent = value;
        timerEl.style.color = "white";
        qSet10();
        }
        return;
    }
return;
}

// Function populates eighth set of answers //
// then kicks off to ninth question //
function qSet8() {
    ask1.hidden = false;
    ask2.hidden = false;
    ask3.hidden = false;
    ask4.hidden = false;
    ask1.textContent = "1985";
    ask2.textContent = "1797";
    ask3.textContent = "1995";
    ask4.textContent = "2037. Time travel exists.";

    ask3.onclick = function() {
        mainEl.textContent = "Correct!";
        ask3.style.backgroundColor = "rgb(35, 71, 71)";
        ask4.hidden = true;
        ask2.hidden = true;
        ask1.hidden = true;
        ++score;

        setTimeout(function() { que9("If I wanted to save something to local storage, which code would I probably use?"); }, 1000);

        function que9(value) {
            ask3.style.backgroundColor = "black";
            mainEl.textContent = value;
            qSet9();
        }
        return;
    }
    
    ask2.onclick = function() {
        incorrectSel();
        }
    
    ask4.onclick = function() {
        incorrectSel();
        }
    
    ask1.onclick = function() {
        incorrectSel();
        }

    function incorrectSel() {
        mainEl.textContent = "Sorry, that is not correct!";
        timeleft = (timeLeft -= 5)
        timerEl.style.color = "red";
        ask1.hidden = true;
        ask2.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
        setTimeout(function() { que9("If I wanted to save something to local storage, which code would I probably use?"); }, 1000);

        function que9(value) {
        mainEl.textContent = value;
        timerEl.style.color = "white";
        qSet9();
        }
        return;
    }
return;
}

// Function populates seventh set of answers //
// then kicks off to eighth question //
function qSet7() {
    ask1.hidden = false;
    ask2.hidden = false;
    ask3.hidden = false;
    ask4.hidden = false;
    ask1.textContent = "Lead with //.";
    ask2.textContent = "Lead with ((.";
    ask3.textContent = "Use a permanent sharpie marker on your monitor.";
    ask4.textContent = "Type 'ignore this' before your code.";

    ask1.onclick = function() {
        mainEl.textContent = "Correct!";
        ask1.style.backgroundColor = "rgb(35, 71, 71)";
        ask4.hidden = true;
        ask2.hidden = true;
        ask3.hidden = true;
        ++score;

        setTimeout(function() { que8("When was javascript invented?"); }, 1000);

        function que8(value) {
            ask1.style.backgroundColor = "black";
            mainEl.textContent = value;
            qSet8();
        }
        return;
    }
    
    ask2.onclick = function() {
        incorrectSel();
        }
    
    ask3.onclick = function() {
        incorrectSel();
        }
    
    ask4.onclick = function() {
        incorrectSel();
        }

    function incorrectSel() {
        mainEl.textContent = "Sorry, that is not correct!";
        timeleft = (timeLeft -= 5)
        timerEl.style.color = "red";
        ask1.hidden = true;
        ask2.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
        setTimeout(function() { que8("When was javascript invented?"); }, 1000);

        function que8(value) {
        mainEl.textContent = value;
        timerEl.style.color = "white";
        qSet8();
        }
        return;
    }
return;
}


// Function populates sixth set of answers //
// then kicks off to seventh question //
function qSet6() {
    ask1.hidden = false;
    ask2.hidden = false;
    ask3.hidden = false;
    ask4.hidden = false;
    ask1.textContent = "Makes a variable.";
    ask2.textContent = "Its a statement that loops through the colors of a rainbow.";
    ask3.textContent = "Its a statement that loops through the properties of an object.";
    ask4.textContent = "I want pizza.";

    ask3.onclick = function() {
        mainEl.textContent = "Correct!";
        ask3.style.backgroundColor = "rgb(35, 71, 71)";
        ask4.hidden = true;
        ask2.hidden = true;
        ask1.hidden = true;
        ++score;

        setTimeout(function() { que7("How do I comment something out in JS?"); }, 1000);

        function que7(value) {
            ask3.style.backgroundColor = "black";
            mainEl.textContent = value;
            qSet7();
        }
        return;
    }
    
    ask2.onclick = function() {
        incorrectSel();
        }
    
    ask4.onclick = function() {
        incorrectSel();
        }
    
    ask1.onclick = function() {
        incorrectSel();
        }

    function incorrectSel() {
        mainEl.textContent = "Sorry, that is not correct!";
        timeleft = (timeLeft -= 5)
        timerEl.style.color = "red";
        ask1.hidden = true;
        ask2.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
        setTimeout(function() { que7("How do I comment something out in JS?"); }, 1000);

        function que7(value) {
        mainEl.textContent = value;
        timerEl.style.color = "white";
        qSet7();
        }
        return;
    }
return;
}

// Function populates fifth set of answers //
// then kicks off to sixth question //
function qSet5() {
    ask1.hidden = false;
    ask2.hidden = false;
    ask3.hidden = false;
    ask4.hidden = false;
    ask1.textContent = "I-swear-nobody-appreciates-nachos.";
    ask2.textContent = "True if the argument is not a number.";
    ask3.textContent = "True if the argument is a number.";
    ask4.textContent = "True if the argument is a letter.";

    ask2.onclick = function() {
        mainEl.textContent = "Correct!";
        ask2.style.backgroundColor = "rgb(35, 71, 71)";
        ask4.hidden = true;
        ask3.hidden = true;
        ask1.hidden = true;
        ++score;

        setTimeout(function() { que6("What does 'for in' do?"); }, 1000);

        function que6(value) {
            ask2.style.backgroundColor = "black";
            mainEl.textContent = value;
            qSet6();
        }
        return;
    }
    
    ask4.onclick = function() {
        incorrectSel();
        }
    
    ask3.onclick = function() {
        incorrectSel();
        }
    
    ask1.onclick = function() {
        incorrectSel();
        }

    function incorrectSel() {
        mainEl.textContent = "Sorry, that is not correct!";
        timeleft = (timeLeft -= 5)
        timerEl.style.color = "red";
        ask1.hidden = true;
        ask2.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
        setTimeout(function() { que6("What does 'for in' do?"); }, 1000);

        function que6(value) {
        mainEl.textContent = value;
        timerEl.style.color = "white";
        qSet6();
        }
        return;
    }
return;
}

// Function populates fourth set of answers //
// then kicks off to fifth question //
function qSet4() {
    ask1.hidden = false;
    ask2.hidden = false;
    ask3.hidden = false;
    ask4.hidden = false;
    ask1.textContent = "+++";
    ask2.textContent = "&&";
    ask3.textContent = "42";
    ask4.textContent = "===";

    ask4.onclick = function() {
        mainEl.textContent = "Correct!";
        ask4.style.backgroundColor = "rgb(35, 71, 71)";
        ask2.hidden = true;
        ask3.hidden = true;
        ask1.hidden = true;
        ++score;

        setTimeout(function() { que5("What does isNaN mean?"); }, 1000);

        function que5(value) {
            ask4.style.backgroundColor = "black";
            mainEl.textContent = value;
            qSet5();
        }
        return;
    }
    
    ask2.onclick = function() {
        incorrectSel();
        }
    
    ask3.onclick = function() {
        incorrectSel();
        }
    
    ask1.onclick = function() {
        incorrectSel();
        }

    function incorrectSel() {
        mainEl.textContent = "Sorry, that is not correct!";
        timeleft = (timeLeft -= 5)
        timerEl.style.color = "red";
        ask1.hidden = true;
        ask2.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
        setTimeout(function() { que5("What does isNaN mean?"); }, 1000);

        function que5(value) {
        mainEl.textContent = value;
        timerEl.style.color = "white";
        qSet5();
        }
        return;
    }
return;
}

// Function populates third set of answers //
// then kicks off to fourth question //
function qSet3() {
    ask1.hidden = false;
    ask2.hidden = false;
    ask3.hidden = false;
    ask4.hidden = false;
    ask1.textContent = "I wish I were doing something other than grading this guy's quiz.";
    ask2.textContent = "A comparison operator that is stating 'equal to'.";
    ask3.textContent = "A logical operator that is stating 'and'.";
    ask4.textContent = "A logical operator that is stating 'or'.";

    ask4.onclick = function() {
        mainEl.textContent = "Correct!";
        ask4.style.backgroundColor = "rgb(35, 71, 71)";
        ask2.hidden = true;
        ask3.hidden = true;
        ask1.hidden = true;
        ++score;

        setTimeout(function() { que4("Which of these is a comparison operator?"); }, 1000);

        function que4(value) {
            ask4.style.backgroundColor = "black";
            mainEl.textContent = value;
            qSet4();
        }
        return;
    }
    
    ask2.onclick = function() {
        incorrectSel();
        }
    
    ask3.onclick = function() {
        incorrectSel();
        }
    
    ask1.onclick = function() {
        incorrectSel();
        }

    function incorrectSel() {
        mainEl.textContent = "Sorry, that is not correct!";
        timeleft = (timeLeft -= 5)
        timerEl.style.color = "red";
        ask1.hidden = true;
        ask2.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
        setTimeout(function() { que4("Which of these is a comparison operator?"); }, 1000);

        function que4(value) {
        mainEl.textContent = value;
        timerEl.style.color = "white";
        qSet4();
        }
        return;
    }
return;
}

// Function populates second set of answers //
// then kicks off to third question //
function qSet2() {
    ask1.hidden = false;
    ask2.hidden = false;
    ask3.hidden = false;
    ask4.hidden = false;
    ask2.style.backgroundColor = "black";
    ask1.textContent = "A True or False value.";
    ask2.textContent = "A sequence of characters.";
    ask3.textContent = "A small bully.";
    ask4.textContent = "A logical operator.";

    ask1.onclick = function() {
        mainEl.textContent = "Correct!";
        ask1.style.backgroundColor = "rgb(35, 71, 71)";
        ask2.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
        ++score;

        setTimeout(function() { que3("What does || mean?"); }, 1000);

        function que3(value) {
            ask1.style.backgroundColor = "black";
            mainEl.textContent = value;
            qSet3();
        }
        return;
    }
    
    ask2.onclick = function() {
        incorrectSel();
        }
    
    ask3.onclick = function() {
        incorrectSel();
        }
    
    ask4.onclick = function() {
        incorrectSel();
        }

    function incorrectSel() {
        mainEl.textContent = "Sorry, that is not correct!";
        timeleft = (timeLeft -= 5)
        timerEl.style.color = "red";
        ask1.hidden = true;
        ask2.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
        setTimeout(function() { que3("What does || mean?"); }, 1000);

        function que3(value) {
        mainEl.textContent = value;
        timerEl.style.color = "white";
        qSet3();
        }
        return;
    }
return;
}

// Function that starts the quiz, populates first question, and answers //
// then kicks off to second question. //
function startQuiz() {
    document.querySelector(".start").hidden = true;
    document.querySelector(".mainol").hidden = false;

    setTime();

    mainEl.textContent = "If I define a var in a local scope can I use it in a different function later?";
    ask1.textContent = "Yes.";
    ask2.textContent = "No, it needs to be globally scoped.";
    ask3.textContent = "I like puppies.";
    ask4.textContent = "If I try really hard, yes.";

    ask2.onclick = function() {
        mainEl.textContent = "Correct!";
        ask2.style.backgroundColor = "rgb(35, 71, 71)";
        ask1.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
        ++score;

        setTimeout(function() { que2("What is a boolean?"); }, 1000);

            function que2(value) {
            mainEl.textContent = value;
            ask2.style.backgroundColor = "black";
            qSet2();
        }
        return;
    }
    
    ask1.onclick = function() {
    incorrectSel();
    }

    ask3.onclick = function() {
    incorrectSel();
    }

    ask4.onclick = function() {
    incorrectSel();
    }


    function incorrectSel() {
        mainEl.textContent = "Sorry, that is not correct!";
        timeleft = (timeLeft -= 5);
        timerEl.style.color = "red";
        ask1.hidden = true;
        ask2.hidden = true;
        ask3.hidden = true;
        ask4.hidden = true;
        setTimeout(function() { que2("What is a boolean?"); }, 1000);

        function que2(value) {
        mainEl.textContent = value;
        timerEl.style.color = "white";
        qSet2();
        }
    return;
    }
return;
}

startBtn.addEventListener("click", startQuiz);