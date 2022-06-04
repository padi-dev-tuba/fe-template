import Vue from 'vue'
import VueRouter from 'vue-router'
// eslint-disable-next-line import/no-cycle
import store from '@/store'
import {
  getValueFromStorageByKey,
} from '@/utils/local-storage'

// Routes
// import { canNavigate } from '@/libs/acl/routeProtection'
// import { isUserLoggedIn, getUserInfo, getHomeRouteForLoggedInUser } from '@/auth/utils'
import trangChu from './trang-chu'
import hoSo from './ho-so'
import accounts from './accounts'
import pages from './pages'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'trang-chu' } },
    ...trangChu,
    ...accounts,
    ...hoSo,
    ...pages,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((to, _, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = getValueFromStorageByKey('isLogin')

  if (authRequired && !loggedIn) {
    store.dispatch('common/setIsLogin', false)
    return next('/login')
  } if (!authRequired && loggedIn) {
    return next('/trang-chu')
  }

  return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
