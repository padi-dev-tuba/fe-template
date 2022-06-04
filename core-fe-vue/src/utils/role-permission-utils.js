const EXP_KEY = 'exp'

const getJWTPayload = () => {
  const token = localStorage.getItem('accessToken')
  if (!token) return null
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(c => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
      .join(''),
  )
  return JSON.parse(jsonPayload)
}

// eslint-disable-next-line import/prefer-default-export
export const getDateExpire = () => {
  const jwt = getJWTPayload()
  if (!jwt || !jwt[EXP_KEY]) return null
  return new Date(jwt[EXP_KEY] * 1000)
}
