
function submitAnswers() {
  const q1 = document.getElementById("q1").value.trim();
  const q2 = document.getElementById("q2").value.trim();
  const q3 = document.getElementById("q3").value.trim();
  const q4 = document.getElementById("q4").value.trim();

  const resultText = `Ответы ученика:
1. Этап 1: ${q1}
2. Этап 3: ${q2}
3. Этап 4: ${q3}
4. Этап 5: ${q4}`;

  const encoded = encodeURIComponent(resultText);
  const link = `https://t.me/share/url?url=&text=${encoded}`;

  document.getElementById("result").innerHTML = `
    ✅ Ответы собраны!<br>
    <a href="${link}" target="_blank">📨 Отправить учителю в Telegram</a>
  `;
}
