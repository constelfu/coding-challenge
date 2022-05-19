const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const colorChangingBtn = document.querySelector("button");
const body = document.querySelector("body");

function onClickChangeColor() {
  const randomColor1 = Math.floor(Math.random() * colors.length);
  let randomColor2 = Math.floor(Math.random() * colors.length);
  
  if (randomColor1 === randomColor2) {
    while (randomColor1 === randomColor2) {
      randomColor2 = Math.floor(Math.random() * colors.length);
    }
  }
  // 같은 값의 배열이 나오지 않도록 짜둔 코드, 
  // 하지만 rgb값이 비슷한 색상들이 있어서 같은 색이 나온 것처럼 보일 때도 있음
  
  const bgColor1 = colors[randomColor1];
  const bgColor2 = colors[randomColor2];
  const randomDeg = String(Math.round(Math.random() * 36) * 10);
  // 별 차이는 없지만 각도도 랜덤으로 10도 단위로 변화함

  body.style.backgroundImage = `linear-gradient( ${randomDeg}deg, ${bgColor1}, ${bgColor2})`;

}

colorChangingBtn.addEventListener("click", onClickChangeColor);