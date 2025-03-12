const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
];

let currentIndex = 0;

const slide = document.getElementById('slide');
const counter = document.getElementById('counter');

function updateSlide() {
    slide.src = images[currentIndex];
    counter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Зацикливание
    updateSlide();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Зацикливание
    updateSlide();
});

// Инициализация
updateSlide();
