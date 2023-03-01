const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const finalResult = document.getElementById('results')
const possibleOptions = document.querySelectorAll('button')
const computerScore = document.getElementById('computer-score')
const userScore = document.getElementById('user-score')

let userChoice
let computerChoice
let result
let compScore
let usersScore


possibleOptions.forEach(possibleOptions => possibleOptions.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() *3) + 1

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'paper'
  }
  if (randomNumber === 3) {
    computerChoice = 'scissors'
    
  }

  computerChoiceDisplay.innerHTML = computerChoice
}

compScore = 0
usersScore = 0



function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw'
  }    
  
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'Nice! Paper Covers Rock'
    usersScore = usersScore + 1
  }    
  
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'Sorry! Sorry Rock Smashes Sissors'
    compScore = compScore + 1
   
  }    
  
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'Nice! Scissors Cuts Paper'
    usersScore = usersScore + 1
  }    
  
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'Sorry! Paper Covers Rock'
    compScore = compScore + 1
  }    
  
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'Nice! Rock Smashes scissors'
    usersScore = usersScore + 1
  }    
 
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'Sorry! Scissors Cut Paper'
    compScore = compScore + 1 
  }    

  if (compScore === 11 && usersScore < 11) {
    result = ('GAME OVER! You Lost' )
    compScore = 0 
    usersScore = 0
  }  
   

  if (usersScore === 11 && compScore < 11) {
    result = ('Nice Job! You Won!' )
    compScore = 0 
    usersScore = 0
     
  }
  
  
  finalResult.innerHTML = result
  computerScore.innerHTML = compScore
  userScore.innerHTML = usersScore
}

  
 
    
