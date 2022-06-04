import ENDPOINT from '@/modules/trang-chu/api/endpoints'
import { HTTP } from '@/api/http-common'

// eslint-disable-next-line import/prefer-default-export
export function callApiGetOverviewData(payload) {
  return HTTP({
    url: ENDPOINT.REPORT,
    method: 'POST',
    data: payload,
  })
}

export function callApiGetDocumentType() {
  return HTTP({
    url: ENDPOINT.DOCUMENT_TYPE,
    method: 'GET',
  })
}

export function callApiGetTinhTrangHoSoDangXuLy(payload) {
  return HTTP({
    url: ENDPOINT.REPORT_DOCUMENT_STATUS,
    method: 'POST',
    data: payload,
  })
}
