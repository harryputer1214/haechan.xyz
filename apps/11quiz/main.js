// 날짜 계산
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay) + 1;
}

// 구글시트 
const CSV_URL =
  "https://docs.google.com/spreadsheets/d/1vPL0QnGGDBmFOoLKRn5l0y9qZg0RcAxC7tTAu3uFWvs/export?format=csv";

// 요소 가져오기
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const btn = document.getElementById("answerBtn");
const homeBtn = document.getElementById("homeBtn");

homeBtn.addEventListener("click", () => {
  window.location.href = "/";
});

// 문제 불러오기
fetch(CSV_URL)
  .then(res => res.text())
  .then(text => {
    const rows = text.trim().split("\n");
    const data = rows.slice(1); // 제목 줄 제거

    const today = getDayOfYear();
    const index = (today - 1) % data.length;

    const cols = data[index].split(",");
    const question = cols[1];
    const answer = cols[2];

    questionEl.textContent = question;
    answerEl.textContent = answer + "  🤣🤣";
  });

// 버튼 클릭
btn.addEventListener("click", () => {
  answerEl.style.display = "block";
  btn.style.display = "none";
});