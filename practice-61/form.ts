interface IForm {
  login: string
  password: string
}

type Validation = {
  isValid: boolean
  errorMsg?: string
}

type TValidationData = Record<keyof IForm, Validation>

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

const validationData: TValidationData = {
  login: { isValid: false, errorMsg: 'At least 3 characters' },
  password: { isValid: true },
}
