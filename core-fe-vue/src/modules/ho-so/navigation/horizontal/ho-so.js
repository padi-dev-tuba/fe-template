import { ROUTE_NAME, MENU_ROUTE_NAME } from '@/modules/ho-so/constants/constants'

export default [
  {
    header: MENU_ROUTE_NAME.HO_SO.NAME,
    icon: 'FileTextIcon',
    children: [
      {
        title: MENU_ROUTE_NAME.HO_SO.TAO,
        route: ROUTE_NAME.HO_SO.TAO,
      },
      {
        title: MENU_ROUTE_NAME.HO_SO.DANH_SACH,
        route: ROUTE_NAME.HO_SO.DANH_SACH,
      },
    ],
  },
]
