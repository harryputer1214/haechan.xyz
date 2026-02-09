

// 요소 가져오기
const quizBtn = document.getElementById("quizBtn");
const blogBtn = document.getElementById("blogBtn");
const homeBtn = document.getElementById("homeBtn");

homeBtn.addEventListener("click", () => {
  window.location.href = "/";
});

// 버튼 클릭
quizBtn.addEventListener("click", () => {
  window.location.href = "/11quiz";
});

blogBtn.addEventListener("click", () => {
  window.location.href = "https://blog.haechan.xyz";
});