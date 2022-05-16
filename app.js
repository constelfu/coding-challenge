const inputMax = document.querySelector("#inputMax");

const inputForm = document.querySelector("#inputNum");
const inputValue = document.querySelector("#inputNum input")

function inputSubmitted(event) {
  const random = Math.round(Math.random() * inputMax.value);
  event.preventDefault();

  const numText = document.querySelector("#submittedNum")
  const checkText = document.querySelector("#check")
  numText.innerText = `선택한 숫자: ${inputValue.value}, 랜덤생성된 숫자: ${random}`;
  if (parseInt(inputValue.value) === random) {
    checkText.innerText = "You win!";
  } else {
    checkText.innerText = "You lose!";
  }
}

inputForm.addEventListener("submit", inputSubmitted);

