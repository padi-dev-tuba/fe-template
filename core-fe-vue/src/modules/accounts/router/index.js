// eslint-disable-next-line import/named
import { MENU_ROUTE_NAME } from '@/modules/accounts/constants/constants'

// eslint-disable-next-line import/prefer-default-export
export const router = [
  {
    path: '/accounts',
    name: 'accounts',
    component: () => import('@/modules/accounts/views/Accounts.vue'),
    meta: {
      pageTitle: 'Chi tiết',
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
]
