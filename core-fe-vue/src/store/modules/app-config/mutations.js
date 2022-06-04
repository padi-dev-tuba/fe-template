const TOGGLE_RTL = state => {
  state.layout.isRTL = !state.layout.isRTL
  document.documentElement.setAttribute('dir', state.layout.isRTL ? 'rtl' : 'ltr')
}

const UPDATE_SKIN = (state, skin) => {
  state.layout.skin = skin

  // Update value in localStorage
  localStorage.setItem('vuexy-skin', skin)

  // Update DOM for dark-layout
  if (skin === 'dark') document.body.classList.add('dark-layout')
  else if (document.body.className.match('dark-layout')) document.body.classList.remove('dark-layout')
}

const UPDATE_ROUTER_TRANSITION = (state, val) => {
  state.layout.routerTransition = val
}

const UPDATE_LAYOUT_TYPE = (state, val) => {
  state.layout.type = val
}

const UPDATE_CONTENT_WIDTH = (state, val) => {
  state.layout.contentWidth = val
}

const UPDATE_NAV_MENU_HIDDEN = (state, val) => {
  state.layout.menu.hidden = val
}

const UPDATE_NAVBAR_CONFIG = (state, obj) => {
  Object.assign(state.layout.navbar, obj)
}

const UPDATE_FOOTER_CONFIG = (state, obj) => {
  Object.assign(state.layout.footer, obj)
}
const SET_LOADING = (state, loading = true) => {
  state.isLoading = loading
}
export default {
  TOGGLE_RTL,
  UPDATE_SKIN,
  UPDATE_ROUTER_TRANSITION,
  UPDATE_LAYOUT_TYPE,
  UPDATE_CONTENT_WIDTH,
  UPDATE_NAV_MENU_HIDDEN,
  UPDATE_NAVBAR_CONFIG,
  UPDATE_FOOTER_CONFIG,
  SET_LOADING,
}
