// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	let priceSlider = document.querySelector('.price-filter__slider');

	if (priceSlider) {

		noUiSlider.create(priceSlider, {
			start: [0, 200000],
			connect: true,
			tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
			range: {
				'min': 0,
				'max': 200000
			}
		});
		let priceStart = document.getElementById('price-start')
		let priceEnd = document.getElementById('price-end')
		priceStart.addEventListener('change', getPriceValues)
		priceEnd.addEventListener('change', getPriceValues)
		function getPriceValues() {
			let priceStartValue
			let priceEndValue
			if (priceStart.value != '') {
				priceStartValue = priceStart.value
			}
			if (priceEnd.value != '') {
				priceEndValue = priceEnd.value
			}
			priceSlider.noUiSlider.set([priceStartValue, priceEndValue])
		}
	}
}
rangeInit();
