const wakeTime = document.getElementById("wakeTime");
const calcBtn = document.getElementById("calcBtn");
const homeBtn = document.getElementById("homeBtn");

const sleepTime1 = document.getElementById("sleepTime1");
const sleepTime2 = document.getElementById("sleepTime2");
const sleepTime3 = document.getElementById("sleepTime3");
const sleepTime4 = document.getElementById("sleepTime4");
const sleepTime5 = document.getElementById("sleepTime5");
const sleepTime6 = document.getElementById("sleepTime6");

const sleepMinute1 = document.getElementById("sleepMinute1");
const sleepMinute2 = document.getElementById("sleepMinute2");
const sleepMinute3 = document.getElementById("sleepMinute3");
const sleepMinute4 = document.getElementById("sleepMinute4");
const sleepMinute5 = document.getElementById("sleepMinute5");
const sleepMinute6 = document.getElementById("sleepMinute6");

let wakeHour = 0;
let wakeMinute = 0;
let wake = 0;
let sleep = [0, 0, 0, 0, 0, 0];
let sleepTimes = [0, 0, 0, 0, 0, 0];
let sleepMinutes = [0, 0, 0, 0, 0, 0];

homeBtn.addEventListener("click", () => {
  window.location.href = "/";
});

calcBtn.addEventListener("click", () => {
  if (wakeTime.value === "") {
    alert("일어날 시간을 선택해 주세요! 😴");
    return;
  }
  
  alert(wakeTime.value + "에 일어납니다. 😴");

  wakeHour = wakeTime.value.split(":").map(Number)[0];
  wakeMinute = wakeTime.value.split(":").map(Number)[1];

  wake = wakeHour * 60 + wakeMinute;
  
  sleep[0] = wake - 90 - 15;
  sleep[1] = wake - 90 * 2 - 15;
  sleep[2] = wake - 90 * 3 - 15;
  sleep[3] = wake - 90 * 4 - 15;
  sleep[4] = wake - 90 * 5 - 15;
  sleep[5] = wake - 90 * 6 - 15;

  if (sleep[0] < 0) sleep[0] += 1440;
  if (sleep[1] < 0) sleep[1] += 1440;
  if (sleep[2] < 0) sleep[2] += 1440;
  if (sleep[3] < 0) sleep[3] += 1440;
  if (sleep[4] < 0) sleep[4] += 1440;
  if (sleep[5] < 0) sleep[5] += 1440;

  sleepTimes[0] = Math.floor(sleep[0] / 60);
  sleepMinutes[0] = sleep[0] % 60;

  sleepTimes[1] = Math.floor(sleep[1] / 60);
  sleepMinutes[1] = sleep[1] % 60;

  sleepTimes[2] = Math.floor(sleep[2] / 60);
  sleepMinutes[2] = sleep[2] % 60;

  sleepTimes[3] = Math.floor(sleep[3] / 60);
  sleepMinutes[3] = sleep[3] % 60;

  sleepTimes[4] = Math.floor(sleep[4] / 60);
  sleepMinutes[4] = sleep[4] % 60;

  sleepTimes[5] = Math.floor(sleep[5] / 60);
  sleepMinutes[5] = sleep[5] % 60;

  sleepTime1.textContent = sleepTimes[0];
  sleepMinute1.textContent = sleepMinutes[0];

  sleepTime2.textContent = sleepTimes[1];
  sleepMinute2.textContent = sleepMinutes[1];

  sleepTime3.textContent = sleepTimes[2];
  sleepMinute3.textContent = sleepMinutes[2];

  sleepTime4.textContent = sleepTimes[3];
  sleepMinute4.textContent = sleepMinutes[3];

  sleepTime5.textContent = sleepTimes[4];
  sleepMinute5.textContent = sleepMinutes[4];

  sleepTime6.textContent = sleepTimes[5];
  sleepMinute6.textContent = sleepMinutes[5];
});