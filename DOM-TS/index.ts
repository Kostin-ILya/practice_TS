interface IFormData {
  email: string
  title: string
  text: string
  checkbox: boolean
}

const formData: IFormData = {
  email: '',
  title: '',
  text: '',
  checkbox: false,
}

const forms = document.querySelectorAll('form')
const email = document.querySelector('#email') as HTMLInputElement
const title = document.querySelector('#title') as HTMLInputElement
const text = document.querySelector('#text') as HTMLTextAreaElement
const checkbox = document.querySelector('#checkbox') as HTMLInputElement

forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    formData.email = email?.value || ''
    formData.title = title?.value || ''
    formData.text = text?.value || ''
    formData.checkbox = checkbox?.checked || false

    console.log(formData)

    if (validateFormData(formData)) {
      checkFormData(formData)
    }
  })
})

function isValidateInputs(obj: IFormData): boolean {
  let res = true

  for (const key in obj) {
    if (!obj[key as keyof IFormData]) {
      res = false
    }
  }

  return res
}

function validateFormData(data: IFormData): boolean {
  if (Object.values(data).every((val) => val)) {
    return true
  } else {
    console.log('Please, complete all fields')
    return false
  }
}

function checkFormData(data: IFormData): void {
  const { email } = data
  const emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com']

  if (emails.indexOf(email) > -1) {
    // emails.includes(email)
    console.log('This email is already exist')
  } else {
    console.log('Posting data...')
  }
}
