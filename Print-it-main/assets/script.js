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
const dots = document.querySelector('.dots');

let currentSlide = 0;

slides.forEach((slide, index) => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (index === 0) {
		dot.classList.add('dot_selected');
	}
	dots.appendChild(dot);
})

flecheGauche.addEventListener('click', () => {
	console.log('fleche gauche');
});

flecheDroite.addEventListener('click', () => {
	console.log('fleche droite');
});
