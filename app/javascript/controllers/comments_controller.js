import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  initialize() {}

  connect() {}

  toggleForm(e) {
    e.preventDefault()
    e.stopPropagation()
    const formID = e.params['form']
    const commentBodyID = e.params['body']
    const form = document.querySelector(`#${formID}`)
    form.classList.toggle('d-none')
    form.classList.toggle('mt-5')
    const commentBody = document.querySelector(`#${commentBodyID}`)
    commentBody.classList.toggle('d-none')
  }
}
