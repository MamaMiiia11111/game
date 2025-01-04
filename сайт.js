<script>
    // Анимация появления элементов при прокрутке
    document.addEventListener('scroll', () => {
      const elements = document.querySelectorAll('.section');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    });

    // Отправка формы с выводом данных в консоль
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      console.log(`Имя: ${name}, Email: ${email}, Сообщение: ${message}`);
      alert('Спасибо за ваше сообщение!');
      form.reset();
    });
