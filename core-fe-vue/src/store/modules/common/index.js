import { getValueFromStorageByKey } from '@/utils/local-storage'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const checkLogin = () => getValueFromStorageByKey('isLogin') === true

const state = {
  isLoading: false,
  isLogin: checkLogin(),
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
