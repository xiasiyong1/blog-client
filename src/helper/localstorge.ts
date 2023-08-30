const ACCESS_TOKEN_KEY = 'api_access_token'

export const setAccessToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}
