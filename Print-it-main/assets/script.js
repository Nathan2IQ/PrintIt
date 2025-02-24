const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const flecheGauche = document.querySelector('.arrow_left');
const flecheDroite = document.querySelector('.arrow_right');

const dotsContainer = document.querySelector('.dots');


slides.forEach((i) => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (i === 0) {
		dot.classList.add ('dot_selected');
	}
	dotsContainer.appendChild(dot);
});


let currentSlide = 0;

function updateSlide() {
	const image = document.querySelector('#banner .banner-img');
	const tagLine = document.querySelector('#banner p');
	const dots = document.querySelectorAll('.dot');

	image.src = './assets/images/slideshow/' + slides[currentSlide].image;
	tagLine.innerHTML = slides[currentSlide].tagLine;

	dots.forEach((dot, i) => {
		if (i === currentSlide) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

flecheDroite.addEventListener('click', () => {
	if (currentSlide < slides.length - 1) {
		currentSlide++;
	} else {
		currentSlide = 0;
	}
	updateSlide();
	console.log(currentSlide);
});

flecheGauche.addEventListener('click', () => {
	if (currentSlide > 0) {
		currentSlide--;
	} else {
		currentSlide = slides.length - 1;
	}
	updateSlide();
	console.log(currentSlide);
});

updateSlide();