// eslint-disable-next-line import/no-cycle
import { HTTP } from '@/api/http-common'
import ENDPOINT from '@/api/endpoints'

// eslint-disable-next-line import/prefer-default-export
export function callApiDangNhap(payload) {
  return HTTP({
    url: ENDPOINT.AUTH.DANG_NHAP,
    method: 'POST',
    data: payload,
  })
}
