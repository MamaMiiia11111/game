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
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');
let currentIndex = 0;

// Создание точек
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.dataset.index = index;
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dots span');

const updateBanner = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
};

// Переключение слайдов
const showNextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateBanner(currentIndex);
};

const showPrevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateBanner(currentIndex);
};

// Автопрокрутка
setInterval(showNextSlide, 5000);

// Обработчики событий
nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.dataset.index);
    updateBanner(currentIndex);
  });
});

// Инициализация
updateBanner(currentIndex);

