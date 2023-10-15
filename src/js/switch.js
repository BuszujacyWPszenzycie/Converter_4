const icon = document.querySelector('.icon')
const body = document.querySelector('body')
const wrapper = document.querySelector('.wrapper')
const allBtnSpans = document.querySelectorAll('.btn__span')

const turnOffOn = () => {
	icon.classList.toggle('icon-night')
	icon.classList.toggle('bi-sun')
	icon.classList.toggle('bi-moon')
	body.classList.toggle('body-night')
	wrapper.classList.toggle('wrapper-night')
	allBtnSpans.forEach(span => span.classList.toggle('btn-night'))
}

icon.addEventListener('click', turnOffOn)
