let requiredNumberP = document.getElementById("numberNeeded-p")
let numberGeneratedP = document.getElementById("numberFound-p")
let statusP = document.getElementById("status-p")
let triesP = document.getElementById("tries-p")
let numbersEqual = false 
let number1 = null;
let number2 = null;
let isAlive = false
let canRoll = false
let rolls = 0

function generateNumbers() {
 return Math.floor(Math.random()*5 + 1)
  }
  
 
function newGame() { if (isAlive === false) {
  rolls = 0
  isAlive = true 
  canRoll = true
  number1 = generateNumbers()
  numberGeneratedP.textContent = "Number found: "
  renderGame()}
}

function renderGame() {
  statusP.innerText = "Roll a number!"
  triesP.innerText = " "
  requiredNumberP.textContent = "Number needed: " + number1
  }
  

function rollNumber() {
   rolls += 1
  if (isAlive === true && canRoll === true) {
  number2 = generateNumbers()
  numberGeneratedP.textContent = "Number found: " + number2
   statusIsP()
    statusCheck()
  }
}



function statusIsP() {
  console.log("Number needed:", number1, "Number found:", number2);
  if (number1 === number2) {
    statusP.innerText = "Unlock the door!";
    canRoll = false
  } else {
    statusP.innerText = "Try again!";
    }
    statusCheck()
}

function unlockDoor() {
  if (number1 === number2) {
    statusP.innerText = "You won, congragulations!"
    isAlive = false
  }
}

function statusCheck() {
  if (rolls > 2 && number1 !== number2) {
    isAlive = false
    numberGeneratedP.textContent = "Number found: "
    console.log(isAlive)
    statusP.innerText = "Play again :p"
    triesP.innerText = "(you only get 3 tries :p)"
  } else {
    isAlive = true
  }
  
}
