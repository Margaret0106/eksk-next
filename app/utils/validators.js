export const requiredValidator = (value) => (
    value && value.length ? null : 'Поле не заполнено', console.log('requiredValidator', value)
)

export const emailValidator = (value) => (
    value && value.match(/.+\@.+\..+/)? null : 'Неправильно заполнена электронная почта', console.log('emailValidator', value)
)
  