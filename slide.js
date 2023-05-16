const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

// Функция для переключения на следующий слайд
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Назначаем обработчики событий на кнопки
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// // Автоматическое переключение слайдов
// setInterval(nextSlide, 5000);
