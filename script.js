const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtnsx = document.getElementsByClassName('delete-note')
const deleteAllBtn = document.querySelector('.delete-all')
const note = document.getElementsByClassName('note')

const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textarea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue
let cardID = 0

const showPanel = () => {
	notePanel.style.display = 'flex'
}
const hidePanel = () => {
	notePanel.style.display = 'none'
	error.style.visibility = 'hidden'
	textarea.value = ''
	category.selectedIndex = 0
}

const addNote = () => {
	if (textarea.value != '' && category.selectedIndex != 0) {
		createNote()
		error.style.visibility = 'hidden'
		notePanel.style.display = 'none'
	} else {
		error.style.visibility = 'visible'
	}
	setTimeout(() => {
		textarea.value = ''
		category.selectedIndex = 0
	}, 100)
}
const createNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('note')
	newNote.setAttribute('id', cardID)
	if (category.selectedIndex == 1) {
		newNote.style.backgroundColor = 'rgb(164, 236, 212)'
	} else if (category.selectedIndex == 2) {
		newNote.style.backgroundColor = 'rgb(164, 199, 234)'
	} else if (category.selectedIndex == 3) {
		newNote.style.backgroundColor = 'rgb(236, 225, 248)'
	} else if (category.selectedIndex == 4) {
		newNote.style.backgroundColor = 'rgb(255, 245, 225)'
	} else if (category.selectedIndex == 5) {
		newNote.style.backgroundColor = 'rgb(252, 138, 118)'
	} else if (category.selectedIndex == 6) {
		newNote.style.backgroundColor = 'rgb(236, 191, 159)'
	}
	newNote.innerHTML = `
			<div class="note-header">
                <h3 class="note-title">${category.options[category.selectedIndex].text}</h3>
                <button class="delete-note">
                    <i class="fas fa-times icon"></i>
                </button>
            </div>
            <div class="note-body">${textarea.value}</div>`

	noteArea.appendChild(newNote)
	cardID++
}
setInterval(() => {
const deleteBtns = []
for(let i = 0; i< deleteBtnsx.length; i++){
	deleteBtns.push(deleteBtnsx[i])
}
deleteBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		e.target.closest('.note').remove()
	})
})
}, 1000);

addBtn.addEventListener('click', showPanel)
cancelBtn.addEventListener('click', hidePanel)
saveBtn.addEventListener('click', addNote)
