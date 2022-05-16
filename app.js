const inputMax = document.querySelector("#inputMax");

const inputForm = document.querySelector("#inputNum");
const inputValue = document.querySelector("#inputValue");

function inputSubmitted(event) {
  event.preventDefault();

  const numText = document.querySelector("#submittedNum");
  const checkText = document.querySelector("#check");

  const parsedMaxValue = parseInt(inputMax.value);
  const parsedNumValue = parseInt(inputValue.value);

  const random = Math.round(Math.random() * parsedMaxValue);
  numText.innerText = `선택한 숫자: ${parsedNumValue}, 랜덤생성된 숫자: ${random}`;

  if (parsedMaxValue > parsedNumValue ) {
    if (parsedNumValue === random) {
      checkText.innerText = "You won!";
    } else {
      checkText.innerText = "You lost!";
    }
  } else {
    alert("입력한 숫자 범위 내에서 숫자를 선택해야 합니다!");
    checkText.innerText = "";
    numText.innerText = "";
  }
  
}

inputForm.addEventListener("submit", inputSubmitted);

