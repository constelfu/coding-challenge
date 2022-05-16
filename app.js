const inputMax = document.querySelector("#inputMax");

const inputForm = document.querySelector("#inputNum");
const inputValue = document.querySelector("#inputValue");

function inputSubmitted(event) {
  event.preventDefault();

  const numText = document.querySelector("#submittedNum");
  const checkText = document.querySelector("#check");
  const alertText = document.querySelector("#alert");

  const parsedMaxValue = parseInt(inputMax.value);
  const parsedNumValue = parseInt(inputValue.value);
  const random = Math.round(Math.random() * parsedMaxValue);
  
  if (parsedMaxValue >= parsedNumValue ) {
    numText.innerText = `선택한 숫자: ${parsedNumValue}, 랜덤생성된 숫자: ${random}`;
    alertText.innerText = "";
    if (parsedNumValue === random) {
      checkText.innerText = "You won!";
    } else {
      checkText.innerText = "You lost!";
    }
  } else {
    alertText.innerText = "입력한 숫자의 범위 내에서 숫자를 선택해야 합니다!"
    checkText.innerText = "";
    numText.innerText = "";
  }
}

inputForm.addEventListener("submit", inputSubmitted);

