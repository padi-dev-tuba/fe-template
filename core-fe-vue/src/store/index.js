import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './modules/app'
import appConfig from './modules/app-config'
// eslint-disable-next-line import/no-cycle
import verticalMenu from './modules/vertical-menu'
// eslint-disable-next-line import/no-cycle
import common from './modules/common'
// eslint-disable-next-line import/no-cycle
import trangChu from '../modules/trang-chu/store'
// eslint-disable-next-line import/no-cycle
import hoSo from '../modules/ho-so/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    common,
    trangChu,
    hoSo,
  },
  strict: process.env.DEV,
})
