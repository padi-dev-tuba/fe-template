export const OLD_CMTND_NUMBER = 9

export const NEW_CMTND_NUMBER = 12

export const REQUIRED = 'Vui lòng nhập thông tin'

export const EMAIL_INVALID = 'Vui lòng nhập đúng định dạng email'

export const NUMERIC = 'Chỉ bao gồm số'

export function minxMax(min, max) {
  return `Tối thiểu ${min} ký tự, tối đa ${max} ký tự`
}

export function cmtnd() {
  return `Chứng minh thư nhân dân phải là số có ${OLD_CMTND_NUMBER} ký tự hoặc ${NEW_CMTND_NUMBER} ký tự`
}

export function phoneNumber(min, max) {
  return `Số điện thoại tối thiểu ${min} ký tự, tối đa ${max} ký tự . Số điện thoại chỉ bao gồm số`
}

export const REQUIRED_FIELD = fieldName => `Vui lòng nhập ${fieldName}`
