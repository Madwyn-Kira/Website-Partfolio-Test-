const prev = document.getElementById('btn_prev'),
	  next = document.getElementById('btn_next'),
	  slides = document.querySelectorAll('.slide'),
	  dots = document.querySelectorAll('.dot_n'),
	  slidesWrapper = document.querySelectorAll('.slider_wrapper');

let index = 0;

const activeSlide = n => {
	for(slide of slides) {
		slide.classList.remove('active');
	}

	slides[n].classList.add('active');
}

const activeDots = n => {
	for(dot of dots) {
		dot.classList.remove('active');
	}

	dots[n].classList.add('active');
}

const nextSlide = () => {
	if(index == 2) {
		index = 0;
		activeSlide(index);
		activeDots(index);
	} else {
		index++;
		activeSlide(index);
		activeDots(index);
	}
}

const interval = setInterval(nextSlide, 2500);

const prevSlide = () => {

		clearInterval(interval);
	
	if(index == 0) {
		index = 2;
		activeSlide(index);
		activeDots(index);
		console.log(index);
	} else {
		index--;
		activeSlide(index);
		activeDots(index);
		console.log(index);
	}
}

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		activeSlide(index);
		activeDots(index);
		clearInterval(interval);
	})
})

next.addEventListener('click', () => {
	clearInterval(interval);
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);