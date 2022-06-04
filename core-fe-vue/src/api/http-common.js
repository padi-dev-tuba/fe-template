import axios from 'axios'
import _isNil from 'lodash/isNil'
import { DOMAIN, API_VERSION } from '@/constants/constants'
import {
  LOCAL_STORAGE_KEY,
  getValueFromStorageByKey,
} from '@/utils/local-storage'
import Vue from 'vue'
import router from '@/router'

function buildQueries(params) {
  let requestString = ''
  Object.keys(params).forEach(key => {
    if (!_isNil(params[key]) && params[key] !== '') {
      requestString += `${key}=${params[key]}&`
    }
  })
  return requestString.slice(0, -1)
}
// const tokenBe = getValueFromStorageByKey(LOCAL_STORAGE_KEY.ACCESS_TOKEN)
const HTTP = axios.create({
  baseURL: `${DOMAIN}${API_VERSION}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${LOCAL_STORAGE_KEY.ACCESS_TOKEN}`,
  },
})
HTTP.interceptors.request.use(
  config => {
    if (config.method === 'post' && config.url === '/Home/GetOverviewData') { // Chặn API lấy chi tiết trang chủ không hiển thị loading
      Vue.prototype.$isLoading = false
    } else {
      Vue.prototype.$isLoading = true
    }
    const token = getValueFromStorageByKey(LOCAL_STORAGE_KEY.ACCESS_TOKEN)
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    Vue.prototype.$isLoading = false
    return Promise.reject(error)
  },
)

HTTP.interceptors.response.use(
  response => {
    Vue.prototype.$isLoading = false
    return response
  },
  error => {
    if (error.response.status === 403) {
      router.push('/pages/miscellaneous/not-authorized')
    }
    Vue.prototype.$isLoading = false
    return Promise.reject(error)
  },
)

export { HTTP, buildQueries }
