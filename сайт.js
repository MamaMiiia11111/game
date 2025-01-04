// Скрипт для анимации появления секций при прокрутке
const sections = document.querySelectorAll('section');

const revealSections = () => {
  const triggerHeight = window.innerHeight * 0.8;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerHeight) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealSections);

// Инициализация анимации при загрузке
window.addEventListener('load', revealSections);

// Обработка формы контактов
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = e.target.elements['name'].value;
  const email = e.target.elements['email'].value;
  const message = e.target.elements['message'].value;

  if (name && email && message) {
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    e.target.reset();
  } else {
    alert('Пожалуйста, заполните все поля формы.');
  }
});
