import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  initialize() {
  }

  connect() {
  }

  toggleForm(e) {
    e.preventDefault()
    e.stopPropagation()
    const formID = e.params['form']
    const commentBodyID = e.params['body']
    const editButtonID = e.params['edit']

    const form = document.querySelector(`#${ formID }`)
    const commentBody = document.querySelector(`#${ commentBodyID }`)
    const editButton = document.querySelector(`#${ editButtonID }`)

    form.classList.toggle('d-none')
    form.classList.toggle('mt-5')
    commentBody.classList.toggle('d-none')
    this.toggleEditButton(editButton)
  }

  toggleEditButton(editButton) {
    if (editButton.innerText === 'Edit') {
      editButton.innerText = 'Cancel'
      this.toggleEditButtonClass(editButton)
    } else {
      editButton.innerText = 'Edit'
      this.toggleEditButtonClass(editButton)
    }
  }

  toggleEditButtonClass(editButton) {
    editButton.classList.toggle('btn-secondary')
    editButton.classList.toggle('btn-warning')
  }
}
