const bodyColor = document.querySelector("body");
let debounce = null;
const classSize = ["small", "middle", "big"];

function resize() {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    let widthSize = window.innerWidth;
    bodyColor.classList.remove(classSize[0],classSize[1], classSize[2]);

    if (widthSize >= 600 ) {
      bodyColor.classList.add(classSize[2]);
    }
    else if (widthSize < 600 && widthSize >= 300) {
      bodyColor.classList.add(classSize[1]);
    }
    if (widthSize < 300 ) {
      bodyColor.classList.add(classSize[0]);
    }
  }
  , 100);
}

window.addEventListener("resize", resize);

/*
window.onresize = function() {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    const widthSize = window.innerWidth;
  if (widthSize >= 600 ) {
    console.log(widthSize);
    bodyColor.style.backgroundColor = "gold";
  } else if (widthSize < 600 && widthSize >= 300 ) {
    console.log(widthSize);
    bodyColor.style.backgroundColor = "purple";
  } else if (widthSize < 300 ) {
    console.log(widthSize);
    bodyColor.style.backgroundColor = "skyblue";
  }
  }, 100);
}
*/