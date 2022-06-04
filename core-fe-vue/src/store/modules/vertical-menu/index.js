import { $themeConfig } from '@themeConfig'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  isVerticalMenuCollapsed: $themeConfig.layout.menu.isCollapsed,
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
