// Timer on the page
const startingMinutes = 2
let time = startingMinutes * 60

const countdownElem = document.getElementById('countdown');

setInterval(updateCountdown, 1000)

function updateCountdown() {
  const minutes = Math.floor(time / 60)
  let seconds = time % 60

  seconds = seconds <10 ? '0' + seconds : seconds
  time = time < 0 ? 0 : time

  countdownElem.innerHTML= `${minutes}: ${seconds}`;
  time--;
}


let questions = [
  
  {
    exam:"What does parseInt do?"
    answers: ["Capitalizes code", "Lowercases code", "Makes a string a number", "Intercepts the paratheses",]
    correctAnswer:
  },
  {
    exam: "Which built-in method removes the last element from an array and returns that element?"
    answers: ["last()", "get()", "pop()", "None of the above",]
    correctAnswer: "pop()"
  },
  {
    exam: "Which of the following function of String object combiens the text of two?"
    answers: ["add()", "merge()", "concat()", "append()",]
    correctAnswer: "concat()"
  },
  {
    exam: "Which of the following function of String object creates an HTML anchor that is used as hypertext target?"
    answers: ["anchor()", "link()", "blink()", "big()",]
    correctAnswer: "anchor()"
  },
  {
    exam: "Which of the following function of String object causes a string to be displayed in a small font, as if it were in a <small> tag?"
    answers: ["link()", "small()", "sup()", "sub()",]
    correctAnswer: "small()"
  },
  {
    exam: "Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?"
    answers: ["indexOf()", "join()", "lastIndexOf()", "map()",]
    correctAnswer: "lastIndexOf()"
  }
];