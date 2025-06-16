// js/main.js

const slides = [
  { img: 'images/aslan.jpg', alt: 'Aslan' },
  { img: 'images/kedi.jpg', alt: 'Kedi' },
  { img: 'images/kopek.jpg', alt: 'Köpek' },
  { img: 'images/ayi.jpg', alt: 'Ayı' }
];

let currentSlide = 0;
let slideInterval;

const slideshowContainer = document.getElementById('slideshow');

function createSlideshow() {
  slides.forEach((slide, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('slide');
    if (index === 0) slideDiv.style.display = 'block';
    const img = document.createElement('img');
    img.src = slide.img;
    img.alt = slide.alt;
    slideDiv.appendChild(img);
    slideshowContainer.appendChild(slideDiv);
  });

  createNavigation();
  startSlideshow();
  enableSwipe();
}

function showSlide(index) {
  const allSlides = document.querySelectorAll('.slide');
  allSlides.forEach(slide => (slide.style.display = 'none'));
  allSlides[index].style.display = 'block';
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function startSlideshow() {
  slideInterval = setInterval(nextSlide, 4000);
}

function createNavigation() {
  const prev = document.createElement('button');
  const next = document.createElement('button');
  prev.textContent = '<';
  next.textContent = '>';
  prev.className = next.className = 'nav-button';

  prev.onclick = () => {
    clearInterval(slideInterval);
    prevSlide();
    startSlideshow();
  };
  next.onclick = () => {
    clearInterval(slideInterval);
    nextSlide();
    startSlideshow();
  };

  slideshowContainer.appendChild(prev);
  slideshowContainer.appendChild(next);
}

function enableSwipe() {
  let startX = 0;
  slideshowContainer.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  slideshowContainer.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      nextSlide();
    } else if (endX - startX > 50) {
      prevSlide();
    }
  });
}

createSlideshow();
