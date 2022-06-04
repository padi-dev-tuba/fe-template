export const DOMAIN = process.env.VUE_APP_DOMAIN
  ? process.env.VUE_APP_DOMAIN
  : 'http://10.0.0.57:8099'

export const API_VERSION = process.env.VUE_APP_API_VERSION
  ? process.env.VUE_APP_API_VERSION
  : '/api/v1'

export const ROUTE_NAME = {
  TRANG_CHU: '/trang-chu',
  DANG_NHAP: '/dang-nhap',
}

export const MENU_ROUTE_NAME = {
  TRANG_CHU: 'Trang chủ',
}

export const NOTI_ACT_UPDATE = {
  group: 'noti',
  type: 'success',
  title: 'Success!',
  text: 'Update Product successfull.',
}

export const NOTI_GREATER_THAN_ONE = {
  group: 'noti',
  type: 'error',
  title: 'Error!',
  text: 'Quantity must equal or greater than 1!',
}

export const NOTI_ACT_ADD = {
  group: 'noti',
  type: 'success',
  title: 'Success!',
  text: 'Add Product successfull.',
}

export const NOTI_ACT_DELETE = {
  group: 'noti',
  type: 'warn',
  title: 'Success!',
  text: 'Delete Product successfull.',
}

export const ACTIVE_COLORS = {
  EDIT: '#FF9F43',
  REFRESH_CCW_ICON: '#20C997',
  NAVIGATION2_ICON: '#5A8DEE',
  MESSAGE_CIRCLE_ICON: '#20C997',
  VOICE_EMAIL: '#BB6BD9',
  TRASH2_ICON: '#EA5455',
  X_SQUARE_ICON: '#20C997',
  CHECK_CIRCLE_ICON: '',
  FILE_TEXT_ICON: '#BB6BD9',
  EDIT2: '#00CFE8',
  TRELLO_ICON: '#BB6BD9',
  ARROW_UP_CIRCLE_ICON: '#FF9F43',
  ARROW_DOWN_CIRCLE_ICON: '#BB6BD9',
}

export const PER_PAGE_OPTIONS = [10, 25, 50, 100]
