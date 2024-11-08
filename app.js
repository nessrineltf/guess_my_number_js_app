"use strict";

// console.log(document.querySelector(".start").textContent)
// console.log(document.querySelector(".check").textContent)

// document.querySelector(".start").textContent = "correct Number !! "
// document.querySelector(".head-icon").textContent = 18

// document.querySelector(".guess").value = 18 ;

// console.log(document.querySelector(".guess").value)

//  console.log(document.querySelector(".between").textContent)

let secretNumber = Math.trunc(Math.random() * 20 + 1);  /// 0 => 0.999999999999999999 

////// refactoring ....  dry (d'ont repeat your self)


//   document.querySelector('.head-icon').textContent = secretNumber

let score = 20;
document.querySelector(".score-result").textContent = score ;  
// console.log(score);
let highscore = 0;

/// dry :  d'ont repeat your self

const displayMessage = function (message){
  document.querySelector(".start").textContent = message ;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {

    displayMessage(" ⛔ No Number !!! ");
  }

  if (guess === secretNumber) {

    displayMessage("🎉 Correct number !!!")
    score++;
    document.querySelector(".score-result").textContent = score;
    document.querySelector("body").style.backgroundColor = "greenyellow";
    document.querySelector(".head-icon").style.padding = "15px 65px";
    document.querySelector(".head-icon").textContent = secretNumber ; 
    if (score > highscore) {
      highscore = score;
      document.querySelector(".hightscore-result").textContent = highscore;
    }
  }

  if (score > 0) {
    if (guess !== secretNumber) {

      displayMessage(guess>secretNumber ? "📈 too high !!!" : "📉 too low !!!")
      score-- ;
      document.querySelector(".score-result").textContent = score;
    }
  } else {

    displayMessage("💥 you loose !!!")
  }


});

document.querySelector(".again").addEventListener("click", function () {
    score = 20 
   document.querySelector(".score-result").textContent = score; 
  // document.querySelector(".start").textContent = "start guessing .... ";
  displayMessage("start guessing .... ")
  document.querySelector(".head-icon").textContent = "?";
  document.querySelector("body").style.backgroundColor = "rgb(43, 41, 41)";
  document.querySelector(".head-icon").style.padding = "5px 45px";
  document.querySelector(".guess").value = "";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
