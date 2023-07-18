// BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let i = 0; i < sliders.length; i++) {
		let slider = sliders[i]
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let i = 0; i < slider_items.length; i++) {
					let el = slider_items[i]
					el.classList.add('swiper-slide')
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {

		}
	}
	sliders_bild_callback()
}
function sliders_bild_callback(params) { }
if (document.querySelector('.mainslider')) {
	let mainslider = new Swiper('.mainslider__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		loop: true,
		//Dotts
		pagination: {
			el: '.mainslider__dotts',
			clickable: true,
		},
	})
	let mainsliderImages = Array.from(document.querySelectorAll('.mainslider__slide')).filter(item => { return item.classList.contains('swiper-slide-duplicate') == false }).map(item => item.querySelector('.mainslider__image'));
	let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');
	for (let i = 0; i < mainsliderImages.length; i++) {
		let mainsliderImage = mainsliderImages[i].querySelector('img').getAttribute('src')
		mainsliderDotts[i].style.backgroundImage = `url('${mainsliderImage}')`
	}
}
if (document.querySelector('.product-slider__item')) {
	let productSlider = new Swiper('.product-slider__item', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		loop: false,
		pagination: {
			el: ".products-slider__info",
			type: 'fraction',
		},
		// arrow
		navigation: {
			nextEl: '.products-slider__arrow_next',
			prevEl: '.products-slider__arrow_prev',
		},
	})
}
if (document.querySelector('.brends-slider__body')) {
	let brendsSlider = new Swiper('.brends-slider__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		spaceBetween: 0,
		autoHeight: true,
		loop: true,
		// arrow
		navigation: {
			nextEl: '.brends-slider__arrow_next',
			prevEl: '.brends-slider__arrow_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			500: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 5,
			},
		}
	})
}
if (document.querySelector('.images-product')) {
	let imagesSubSlider = new Swiper('.images-product__subslider', {
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 0,
		loop: true,
		grabCursor: true,
	})
	let imagesMainSlider = new Swiper('.images-product__mainslider', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		thumbs: {
			swiper: imagesSubSlider,
		},
		grabCursor: true,
	})
}