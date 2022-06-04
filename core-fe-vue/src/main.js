import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'
import i18n from '@/libs/i18n'
import Notifications from 'vue-notification'
import router from './router'
import store from './store'
import App from './App.vue'
// Global Components
import './global-components'
import plugins from './plugins/plugins'
// 3rd party plugins
import '@axios'
import '@/libs/portal-vue'
import '@/libs/clipboard'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'
import '@/libs/tour'
import '@/libs/toasted'
import '@/libs/flatpickr'

// Internationalization vue2-datepicker
import 'vue2-datepicker/locale/vi'

// Axios Mock Adapter
import '@/@fake-db/db'
import 'devextreme/dist/css/dx.light.css'
import '@/utils/callHub'

Vue.use(Notifications)
Vue.use(plugins)
// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
// Composition API
Vue.use(VueCompositionAPI)

// Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard
require('@core/assets/fonts/feather/iconfont.css') // For form-wizard

// import core styles
require('@core/scss/core.scss')
require('@core/scss/custom.css')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false
const loading = Vue.observable({ load: false })

Object.defineProperty(Vue.prototype, '$isLoading', {
  get() {
    return loading.load
  },

  set(value) {
    loading.load = value
  },
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
