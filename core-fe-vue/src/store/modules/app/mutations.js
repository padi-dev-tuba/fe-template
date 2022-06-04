const UPDATE_WINDOW_WIDTH = (state, val) => {
  state.windowWidth = val
}

const TOGGLE_OVERLAY = (state, val) => {
  state.shallShowOverlay = val !== undefined ? val : !state.shallShowOverlay
}
const SET_LOADING = (state, loading = true) => {
  state.isLoading = loading
}
export default {
  SET_LOADING,
  UPDATE_WINDOW_WIDTH,
  TOGGLE_OVERLAY,
}
