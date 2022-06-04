import { ROUTE_NAME } from '@/modules/ho-so/constants/constants'
// eslint-disable-next-line import/no-cycle
import router from '@/router'

// eslint-disable-next-line no-unused-vars
const layDanhSachHoSo = (context, payload) => {
  // TODO: Call api when it has done
  // callApiLayDanhSachHoSo(payload)
  //   // eslint-disable-next-line no-unused-vars
  //   .then(response => {
  //     context.commit("LAY_DANH_SACH_HO_SO_THANH_CONG", response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
}

// eslint-disable-next-line no-unused-vars
const layChiTietHoSo = (context, payload) => {
  // TODO: Call api when it has done
  context.commit('LAY_CHI_TIET_HO_SO_THANH_CONG', payload.hoSoId)
  // callApiLayDanhSachHoSo(payload)
  //   // eslint-disable-next-line no-unused-vars
  //   .then(response => {
  //     context.commit("LAY_DANH_SACH_HO_SO_THANH_CONG", response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
}

const taoHoSo = (context, payload) => {
  context.commit('TAO_HO_SO_THANH_CONG', payload)
  context.commit('TANG_ID_HO_SO')
  router.push({
    path: ROUTE_NAME.HO_SO.NAME + ROUTE_NAME.HO_SO.DANH_SACH,
  })
  // return new Promise((resolve, reject) => {
  //   callApiTaoHoSo(payload)
  //     .then(response => {
  //       context.commit("TAO_HO_SO_THANH_CONG", response.data);
  //       context.commit("TANG_ID_HO_SO");
  //     })
  //     .catch(error => {
  //       reject(error);
  //     });
  // });
}

const capNhatHoSo = (context, payload) => {
  context.commit('CAP_NHAT_HO_SO_THANH_CONG', payload)
  // return new Promise((resolve, reject) => {
  //   callApiCapNhatHoSo(payload)
  //     .then(response => {
  //       context.commit("CAP_NHAT_HO_SO_THANH_CONG", response.data);
  //     })
  //     .catch(error => {
  //       reject(error);
  //     });
  // });
}

const xoaHoSo = (context, payload) => {
  context.commit('XOA_HO_SO_THANH_CONG', payload)
  // return new Promise((resolve, reject) => {
  //   callApiXoaHoSo(payload)
  //     .then(response => {
  //       context.commit("XOA_HO_SO_THANH_CONG", response.data);
  //     })
  //     .catch(error => {
  //       reject(error);
  //     });
  // });
}

export default {
  layDanhSachHoSo,
  taoHoSo,
  capNhatHoSo,
  xoaHoSo,
  layChiTietHoSo,
}
