const stackText = "Devtools, Postman, Charles, Confluence, Swagger, Test IT, Kibana, Sentry, Grafana, Metabase, Jira, DBeaver, MongoDB, Github, GitBash, Kafka, Browserstack";
const stackElement = document.getElementById('stack-text');

function typeText(text, element, delay = 50) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      // Добавляем каждый символ в span
      const charSpan = document.createElement('span');
      charSpan.textContent = text[index];
      element.appendChild(charSpan);
      index++;
    } else {
      clearInterval(interval); // Останавливаем анимацию
    }
  }, delay);
}

// Запускаем анимацию после загрузки страницы
window.onload = () => {
  typeText(stackText, stackElement);
};