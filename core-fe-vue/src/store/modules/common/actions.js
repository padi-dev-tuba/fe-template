import { callApiDangNhap, callApiRefreshToken } from '@/api/common'
import {
  LOCAL_STORAGE_KEY,
  setValueToStorageByKey,
  getValueFromStorageByKey,
} from '@/utils/local-storage'
// eslint-disable-next-line import/named
import { getDateExpire } from '@/utils/role-permission-utils'

const refreshTokens = (context, router) => {
  context.dispatch('autoRefresh', router)
}

const autoRefresh = (context, router) => {
  const { dispatch } = context
  const dateExpire = getDateExpire()
  const dateNow = new Date()
  const minus = (dateExpire - dateNow) / (60 * 1000)
  const timeOut = minus > 5 ? minus - 5 : minus
  setTimeout(() => {
    callApiRefreshToken({
      accessToken: getValueFromStorageByKey(LOCAL_STORAGE_KEY.ACCESS_TOKEN),
      refreshToken: getValueFromStorageByKey(LOCAL_STORAGE_KEY.REFRESH_TOKEN),
    }).then(res => {
      if (res.data.succeeded) {
        setValueToStorageByKey(
          LOCAL_STORAGE_KEY.ACCESS_TOKEN,
          res.data.data.accessToken,
        )
        dispatch('refreshTokens', router)
      }
    })
  }, timeOut * 60 * 1000)
}

const setIsLogin = (context, isLogin) => {
  context.commit('SET_IS_LOGIN', isLogin)
}

const login = (context, payload) => callApiDangNhap(payload)

export default {
  setIsLogin,
  login,
  refreshTokens,
  autoRefresh,
}
