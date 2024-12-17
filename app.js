/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });


  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
  
    // Example
    if (event.target.classList.contains('number')) {
        return number
      // Do something with a number
    }
  
    // Example
    if (event.target.innerText === '*') {
      // Do something with this operator
    }
  });
  

  const numPressed = //event listener for num pressed

  function numsPressed(num) {
    if (num === x) {
        return x
    }
  }

/*-------------------------------- Functions --------------------------------*/

  const calculator = document.querySelector('#calculator');

const staging = total; //total thus far

function mathExecute(//onEqualsClick) {
    return staging}