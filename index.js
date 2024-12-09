const links = document.querySelectorAll('.nav-link');
const image = document.getElementById('dynamicImage');
const circles = document.querySelectorAll('.projects__circle');
const firstArrow = document.getElementById('firstArrow');
const secondArrow = document.getElementById('secondArrow');

const images = [
    '/img/image1.png',
    '/img/image2.png',
    '/img/image3.png'
];

const linkIds = ['Admiral', 'Sochi', 'Patriotic'];
let currentIndex = 0;

const cityInfos = [
    "Rostov-on-Don<br>LCD admiral",
    "Sochi<br>Thieves",
    "Rostov-on-Don<br>Patriotic"
];

const apartmentInfos = [
    "81 m²",
    "105 m²",
    "93 m²"
];

const timeInfos = [
    "3.5 month",
    "4 month",
    "3 month"
];

function updateSlider(index) {
    image.src = images[index];
    circles.forEach((circle, i) => {
        circle.classList.toggle('active', i === index);
    });
    links.forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.getElementById(linkIds[index]);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    document.querySelector('.projects__city-info').innerHTML = cityInfos[index];
    document.querySelector('.projects__apartment-info').innerHTML = apartmentInfos[index];
    document.querySelector('.projects__time-info').innerHTML = timeInfos[index];
}

circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });
});

links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        currentIndex = index;
        updateSlider(currentIndex);
    });
});

firstArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateSlider(currentIndex);
});

secondArrow.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateSlider(currentIndex);
});

updateSlider(currentIndex);