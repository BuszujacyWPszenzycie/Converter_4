const allBtnSpans = document.querySelectorAll('.btn__span')
const allModals = document.querySelectorAll('.modal')

console.log(allBtnSpans)

let allBtnSpansConverted = Array.prototype.slice.call(allBtnSpans)
allBtnSpansConverted.forEach(item => console.log(item.textContent))

let textContentSpans = []

allBtnSpansConverted.forEach(item => textContentSpans.push(item.textContent))

console.log(textContentSpans)

const showModalFunction = e => {
	console.log('test_funciton')
	let textContentOfSelectedButton = e.target.textContent
	let indexOfSelectedButton = textContentSpans.indexOf(textContentOfSelectedButton)
	allModals.forEach(modal => modal.classList.remove('show-modal'))
	allModals[indexOfSelectedButton].classList.add('show-modal')
}

const test = () => {
	console.log('test')
}

allBtnSpans.forEach(span => span.addEventListener('click', showModalFunction))
