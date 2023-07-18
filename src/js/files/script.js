import * as functions from './functions.js'
//меню бургер
let menuBurger = document.querySelectorAll('.burger-menu')
for (let i = 0; i < menuBurger.length; i++) {
	menuBurger[i].addEventListener('click', e => {
		document.querySelectorAll('.menu')[i].classList.toggle('_active')
		if (document.querySelectorAll('._opacity').length != 0) {
			document.querySelectorAll('._opacity')[i].classList.toggle('_active')
		}
		document.querySelector('body').classList.toggle('_lock')
	})

}
// Плавная прокрутка к якорям

let anchorLink = document.querySelectorAll("._anchor-link")
function getHeaderHeight() {
	let headerHeight = 0
	if (getComputedStyle(document.querySelector('.header')).position == 'fixed') {
		headerHeight = document.querySelector('.header').offsetHeight
	}
	return headerHeight
}
if (anchorLink) {
	for (let i = 0; i < anchorLink.length; i++) {
		anchorLink[i].addEventListener("click", e => {
			e.preventDefault();
			// закрытие бургер при клике на ссылку
			document.querySelector('.menu').classList.remove('_active')
			document.querySelector('body').classList.remove('_lock')
			let id = e.target.getAttribute('href')
			if (id != '') {
				let elem = document.querySelector(id),
					scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				window.scrollTo({
					top: elem.getBoundingClientRect().top + scrollTop - getHeaderHeight() - 50,
					left: 0,
					behavior: 'smooth'
				});
			}
		});
	}
}
const filterContent = document.querySelector('.filter__content')
if (document.documentElement.clientWidth <= 992) {
	const submenuPage = document.querySelectorAll('.submenu-page');
	for (let i = 0; i < submenuPage.length; i++) {
		submenuPage[i].hidden = true
	}
	if (filterContent) filterContent.hidden = true

}
window.addEventListener(`resize`, event => {
	getHeaderHeight()
	if (document.documentElement.clientWidth > 992) {
		document.querySelector('.menu, ._opacity').classList.remove('_active')
		document.querySelector('body').classList.remove('_lock')
	} else {
		const submenuPage = document.querySelectorAll('.submenu-page');
		for (let i = 0; i < submenuPage.length; i++) {
			submenuPage[i].hidden = true
		}
		if (filterContent) filterContent.hidden = true
	}
}, false);


if (!functions.isMobile.any()) {
	let menuParents = document.querySelectorAll('.menu-page__parent')
	let submenuItems = document.querySelectorAll('.submenu-page__item')
	for (let i = 0; i < menuParents.length; i++) {
		const menuParent = menuParents[i]
		menuParent.addEventListener('mouseenter', (e) => {
			menuParent.classList.add('_active')
		})
		menuParent.addEventListener('mouseleave', (e) => {
			menuParent.classList.remove('_active')
		})
	}
} else {
	let menuParents = document.querySelectorAll('.menu-page__parent > a');
	console.log(menuParents)
	for (let i = 0; i < menuParents.length; i++) {
		let menuParent = menuParents[i].parentElement;
		menuParent.addEventListener('click', e => {
			e.preventDefault()
			console.log(1)
			if (document.documentElement.clientWidth < 992) {
				setPointerEvents(menuParent)
				functions._slideToggle(menuParent.querySelector('.submenu-page'))
				menuParent.querySelector('a').classList.toggle('_active')

			} else {

				functions._slideDown(menuParent.querySelector('.submenu-page'))
				menuParent.classList.toggle('_active')
			}
		})
	}
}

let menuPageBurger = document.querySelector('.menu-page__burger')
let menuPageBody = document.querySelector('.menu-page__body')
if (menuPageBurger && menuPageBody) {
	menuPageBurger.addEventListener('click', e => {
		setPointerEvents(menuPageBurger)
		menuPageBurger.classList.toggle('_active')
		functions._slideToggle(menuPageBody)
	})
}
let searchSelect = document.querySelector('.search-page__title')
let catigoriesSearch = document.querySelector('.categories-search')
searchSelect.addEventListener('click', e => {
	setPointerEvents(searchSelect)
	searchSelect.classList.toggle('_active')
	functions._slideToggle(catigoriesSearch)
})
let checkboxCategories = document.querySelectorAll('.categories-search__checkbox')
for (let i = 0; i < checkboxCategories.length; i++) {
	const checkboxCategory = checkboxCategories[i]
	checkboxCategory.addEventListener('change', e => {
		checkboxCategory.classList.toggle('_active')
		let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active')
		if (checkboxActiveCategories.length > 0) {
			searchSelect.classList.add('_categories')
			let searchQuantity = searchSelect.querySelector('.search-page__quantity')
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + checkboxActiveCategories.length
		} else {
			searchSelect.classList.remove('_categories')
		}

	})
}

const filterSpollerTitle = document.querySelectorAll('.section-filter__title._spoller');
for (let i = 0; i < filterSpollerTitle.length; i++) {
	const filterSpollerBody = filterSpollerTitle[i].closest('.section-filter').querySelector('.section-filter__body')
	filterSpollerBody.hidden = true
}
let spollerTitle = document.querySelectorAll('._spoller')
for (let i = 0; i < spollerTitle.length; i++) {
	spollerTitle[i].addEventListener('click', (e) => {
		setPointerEvents(spollerTitle[i])
		functions._slideToggle(spollerTitle[i].nextElementSibling)
		spollerTitle[i].classList.toggle('_active')
	})

}
function setPointerEvents(element) {
	element.style.pointerEvents = 'none'
	setTimeout(() => {
		element.style.pointerEvents = 'all'
	}, 500)
}
if (functions.isMobile.any() && document.querySelector('.filter')) {
	let filterTitle = document.querySelector('.filter__title')
	filterTitle.addEventListener('click', e => {
		functions._slideToggle(filterTitle.nextElementSibling)
		filterTitle.classList.add('_active')
	})
}
const viewCatalogList = document.querySelector('.view-catalog__list');
const viewCatalogGrid = document.querySelector('.view-catalog__grid');
const itemsProducts = document.querySelector('.items-products');
if (viewCatalogList && itemsProducts) {
	viewCatalogList.addEventListener("click", function (e) {
		viewCatalogList.classList.add('_active')
		viewCatalogGrid.classList.remove('_active')
		itemsProducts.classList.add('items-products--list')
	});
}
if (viewCatalogGrid && itemsProducts) {
	viewCatalogGrid.addEventListener("click", function (e) {
		viewCatalogGrid.classList.add('_active')
		viewCatalogList.classList.remove('_active')
		itemsProducts.classList.remove('items-products--list')
	});
}