import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  windowWidth: 0,
  shallShowOverlay: false,
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
