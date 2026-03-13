const heroSlides = [...document.querySelectorAll('.hero-slide')];
const heroDots = [...document.querySelectorAll('.hero-dot')];
const prevBtn = document.querySelector('.hero-prev');
const nextBtn = document.querySelector('.hero-next');
let heroIndex = 0;

function showHeroSlide(index) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, i) => slide.classList.toggle('active', i === heroIndex));
  heroDots.forEach((dot, i) => dot.classList.toggle('active', i === heroIndex));
}

prevBtn?.addEventListener('click', () => showHeroSlide(heroIndex - 1));
nextBtn?.addEventListener('click', () => showHeroSlide(heroIndex + 1));
heroDots.forEach((dot, i) => dot.addEventListener('click', () => showHeroSlide(i)));

setInterval(() => showHeroSlide(heroIndex + 1), 5000);
