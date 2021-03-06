// Timer on the page
const startingMinutes = 2
let time = startingMinutes * 60

const countdownElem = document.getElementById('countdown');

function updateCountdown() {
  const minutes = Math.floor(time / 60)
  let seconds = time % 60

  seconds = seconds <10 ? '0' + seconds : seconds

  countdownElem.innerHTML= `${seconds}`;
  time--;

  if (time <= 0) {
    clearInterval (updateCountdown)
  }
}
  updateCountdown();

// lines 22-44 manipulate the DOM and create a button that when clicked, will give a question and after clicking an answer will go to the next question but using the for loop
  let index = 0

  const quiz = document.getElementById('quiz')

  document.getElementById('start').addEventListener('click',() =>{
  display(index)
    setInterval(updateCountdown, 1000)
  })

  function display() {
    quiz.innerHTML=''
    console.log(index)
    let questions = document.createElement('h1')
    quiz.append(questions)
    questions.textContent=(myQuestions[index].exam)
    
    for (let i = 0; i < myQuestions[index].answers.length; i++) {
    let answers = document.createElement('button')
    answers.setAttribute('index', index)
    quiz.append(answers)
    answers.textContent=(myQuestions[index].answers[i])
    }
    index++
  }

  quiz.addEventListener('click',(e) =>{
    e.preventDefault()
    if (event.target.matches('button')) {
      console.log(event.target.textContent)
      let question = event.target.getAttribute('index')
      console.log(question)
      if (event.target.textContent === myQuestions[question].correctAnswer) {
        console.log('winner')
      }
      else {
        console.log('loser')
        time=time-5
      }
    }
    display()

  })

   


  //  if (choice.textContent === questions[index].correctAnswer {
  //    quizScore++;
  //    newDiv.textContent = "Correct"
  //  }

// My list of questions for the quiz
const myQuestions = [

  {
    exam:"What does parseInt do?",
    answers: ["Capitalizes code", "Lowercases code", "Makes a string a number", "Intercepts the parentheses"],
    correctAnswer: "Makes a string a number"
  },
  {
    exam: "Which built-in method removes the last element from an array and returns that element?",
    answers: ["last()", "get()", "pop()", "None of the above"],
    correctAnswer: "pop()"
  },
  {
    exam: "Which of the following function of String object combinss the text of two?",
    answers: ["add()", "merge()", "concat()", "append()"],
    correctAnswer: "concat()"
  },
  {
    exam: "Which of the following function of String object creates an HTML anchor that is used as hypertext target?",
    answers: ["anchor()", "link()", "blink()", "big()"],
    correctAnswer: "anchor()"
  },
  {
    exam: "Which of the following function of String object causes a string to be displayed in a small font, as if it were in a <small> tag?",
    answers: ["link()", "small()", "sup()", "sub()"],
    correctAnswer: "small()"
  },
  {
    exam: "Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?",
    answers: ["indexOf()", "join()", "lastIndexOf()", "map()"],
    correctAnswer: "lastIndexOf()"
  }
];

