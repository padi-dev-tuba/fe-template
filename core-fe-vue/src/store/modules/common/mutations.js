const SET_IS_LOGIN = (state, isLogin) => {
  state.isLogin = isLogin
}
const SET_LOADING = (state, loading) => {
  state.isLoading = loading
}

const SUBMIT_LOGIN_FORM_PROCESS = state => {
  state.isLoading = true
}

const SUBMIT_LOGIN_FORM_SUCCESS = state => {
  state.isLogin = true
  state.isLoading = false
}

const SUBMIT_LOGIN_FORM_FAILURE = state => {
  state.isLogin = false
  state.isLoading = false
}

export default {
  SET_IS_LOGIN,
  SET_LOADING,
  SUBMIT_LOGIN_FORM_PROCESS,
  SUBMIT_LOGIN_FORM_SUCCESS,
  SUBMIT_LOGIN_FORM_FAILURE,
}
