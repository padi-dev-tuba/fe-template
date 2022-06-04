// eslint-disable-next-line import/named
import { ROUTE_NAME, MENU_ROUTE_NAME } from '@/modules/ho-so/constants/constants'

// eslint-disable-next-line import/prefer-default-export
export const router = [
  {
    path: ROUTE_NAME.HO_SO.NAME + ROUTE_NAME.HO_SO.DANH_SACH,
    name: ROUTE_NAME.HO_SO.DANH_SACH,
    component: () => import('@/modules/ho-so/views/TrangDanhSachHoSo.vue'),
    meta: {
      pageTitle: MENU_ROUTE_NAME.HO_SO.DANH_SACH,
      breadcrumb: [
        {
          text: MENU_ROUTE_NAME.HO_SO.NAME,
        },
        {
          text: MENU_ROUTE_NAME.HO_SO.DANH_SACH,
          active: true,
        },
      ],
    },
  },
  {
    path: ROUTE_NAME.HO_SO.NAME + ROUTE_NAME.HO_SO.TAO,
    name: ROUTE_NAME.HO_SO.TAO,
    component: () => import('@/modules/ho-so/views/TrangTaoHoSo.vue'),
  },
  {
    path: ROUTE_NAME.HO_SO.NAME + ROUTE_NAME.HO_SO.CHI_TIET,
    name: ROUTE_NAME.HO_SO.CHI_TIET,
    component: () => import('@/modules/ho-so/views/TrangCapNhatHoSo.vue'),
  },
  {
    path: ROUTE_NAME.HO_SO.NAME + ROUTE_NAME.HO_SO.XEM,
    name: ROUTE_NAME.HO_SO.XEM,
    component: () => import('@/modules/ho-so/views/TrangXemHoSo.vue'),
  },
]
