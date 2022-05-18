const dDayClock = document.querySelector("#clock-here")

function remainTime() {
  const today = new Date();
  const dDay = new Date("2022-12-25T00:00:00+0900");
  const until = dDay.getTime() - today.getTime();
  
  const remainDays =    String(Math.floor(until / (1000 * 60 * 60 * 24))).padStart(3,"0");
  const remainHours =   String(Math.floor(until / (1000 * 60 * 60 ) % 24)).padStart(2,"0");
  const remainMinutes = String(Math.floor(until / (1000 * 60 ) % 60)).padStart(2,"0");
  const remainSeconds = String(Math.floor(until / (1000) % 60)).padStart(2,"0");

  // toLocaleTimeString()을 써보려고 했으나, 
  //until variable에서 수학적 연산을 거친 후 string 변환이 되어야 해서 포기

  dDayClock.innerText = `${remainDays}일 ${remainHours}시간 ${remainMinutes}분 ${remainSeconds}초`;
}
remainTime();
setInterval(remainTime, 1000);