const LAY_DANH_SACH_HO_SO_THANH_CONG = (state, danhSachHoSo) => {
  state.danhSachHoSo = danhSachHoSo
}

const TAO_HO_SO_THANH_CONG = (state, hoSo) => {
  state.danhSachHoSo.push({ ...hoSo, id: state.hoSoId + 1 })
}

const CAP_NHAT_HO_SO_THANH_CONG = (state, hoSo) => {
  const editItemIndex = state.danhSachHoSo.findIndex(
    // eslint-disable-next-line radix
    obj => obj.id === parseInt(hoSo.id),
  )
  state.danhSachHoSo[editItemIndex] = hoSo
}

const XOA_HO_SO_THANH_CONG = (state, hoSo) => {
  state.danhSachHoSo.splice(state.danhSachHoSo.indexOf(hoSo), 1)
}

const TANG_ID_HO_SO = state => {
  // eslint-disable-next-line no-plusplus
  state.hoSoId++
}

const LAY_CHI_TIET_HO_SO_THANH_CONG = (state, hoSoId) => {
  const editItemIndex = state.danhSachHoSo.findIndex(
    // eslint-disable-next-line radix
    obj => obj.id === parseInt(hoSoId),
  )

  state.hoSoDangCapNhat = state.danhSachHoSo[editItemIndex]
}

export default {
  LAY_DANH_SACH_HO_SO_THANH_CONG,
  TAO_HO_SO_THANH_CONG,
  CAP_NHAT_HO_SO_THANH_CONG,
  XOA_HO_SO_THANH_CONG,
  TANG_ID_HO_SO,
  LAY_CHI_TIET_HO_SO_THANH_CONG,
}
