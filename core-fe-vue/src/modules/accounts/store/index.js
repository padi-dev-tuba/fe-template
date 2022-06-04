// eslint-disable-next-line import/no-cycle
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  hoSoId: 1,
  hoSoDangCapNhat: {},
  danhSachHoSo: [
    {
      id: 1,
      title: 'Hồ sơ 1',
      description: 'Mô tả hồ sơ 1',
    },
  ],
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
