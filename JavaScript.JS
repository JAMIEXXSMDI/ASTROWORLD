const person = document.getElementById('person')
const mail = document.getElementById('mail')
const text = document.getElementById('text')
const form = document.getElementById('add-form')

const person_error = document.getElementById('person_error')
const email_error = document.getElementById('email_error')
const text_error = document.getElementById('text_error')
const complite = document.getElementById('complite')

form.addEventListener('submit', e => {
	var email_check =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	let isValid = true

	if (person.value === '' || person.value == null) {
		e.preventDefault()
		person_error.innerHTML = 'Имя не заполнено'
		isValid = false
	} else {
		person_error.innerHTML = ''
	}

	if (mail.value === '' || mail.value == null) {
		e.preventDefault()
		email_error.innerHTML = 'Введите почту'
	} else if (!mail.value.match(email_check)) {
		e.preventDefault()
		email_error.innerHTML = 'Почта введена не корректно'
		isValid = false
	} else {
		email_error.innerHTML = ''
	}

	if (text.value === '' || text.value == null) {
		e.preventDefault()
		text_error.innerHTML = 'Вы не можете отправить пустое сообщение'
		isValid = false
	} else {
		text_error.innerHTML = ''
	}

	if (isValid) {
		e.preventDefault()
		complite.innerHTML = 'Ваше сообщение отправлено.'
	} else {
		complite_message.innerHTML = ''
	}
})

const button = document.getElementById('BUTTON')

button.addEventListener('mousedown', () => {
	button.classList.add('pulse')
})

button.addEventListener('mouseup', () => {
	button.classList.remove('pulse')
})

button.addEventListener('mouseleave', () => {
	button.classList.remove('pulse')
})

document.querySelectorAll('.scroll-link').forEach(link => {
	link.addEventListener('click', function (event) {
		event.preventDefault()
		const targetId = this.getAttribute('href')
		const targetSection = document.querySelector(targetId)

		targetSection.scrollIntoView({ behavior: 'smooth' })
	})
})
