<template>
  <b-card
    class="w-100"
    no-body
  >
    <b-tabs
      class="cs-tabs"
      pills
    >

      <!-- Tab: Account -->
      <b-tab active>
        <template #title>
          <span class="d-none d-sm-inline">Lịch sử cập nhật</span>
        </template>
        <b-table
          class="position-relative cs-table"
          :no-local-sorting="true"
          :items="lichSuCapNhat"
          responsive
          :fields="LS_CAP_NHAT_FIELDS"
          show-empty
          empty-text="Không có dữ liệu"
        />
      </b-tab>

      <!-- Tab: Information -->
      <b-tab>
        <template #title>
          <span class="d-none d-sm-inline">Lịch sử trả lại</span>
        </template>
        <b-table
          class="position-relative cs-table"
          :no-local-sorting="true"
          :items="lichSuTraLai"
          responsive
          :fields="LS_TRA_LAI_FIELDS"
          show-empty
          empty-text="Không có dữ liệu"
        />
      </b-tab>

      <!-- Tab: Social -->
      <b-tab>
        <template #title>
          <span class="d-none d-sm-inline">Lịch sử phân xử lý</span>
        </template>
        <b-table
          class="position-relative cs-table"
          :no-local-sorting="true"
          :items="lichSuPXL"
          responsive
          :fields="LS_PXL_FIELDS"
          show-empty
          empty-text="Không có dữ liệu"
        />
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>

import {
  BCard, BTabs, BTab, BTable,
} from 'bootstrap-vue'
import { LS_CAP_NHAT_FIELDS, LS_TRA_LAI_FIELDS, LS_PXL_FIELDS } from '@/modules/ho-so/constants/constants'

export default {
  name: 'LichSu',
  components: {
    BCard,
    BTabs,
    BTab,
    BTable,
  },
  data() {
    return {
      lichSuCapNhat: [
        {
          nguoiCapNhat: 'Hà Kiều Anh',
          donViCapNhat: 'Trung tâm tin học',
          thoiGian: '02/06/2021',
          noiDungCapNhat: 'Nội dung cập nhật 1111',
          hanhDong: 'Tạo mới hồ sơ',
          file: '',
        },
        {
          nguoiCapNhat: 'Hà Kiều Anh 1',
          donViCapNhat: 'Trung tâm tin học 1',
          thoiGian: '02/06/2021',
          noiDungCapNhat: 'Nội dung cập nhật 2222',
          hanhDong: 'Tạo mới hồ sơ 1',
          file: '',
        },
      ],
      lichSuTraLai: [
        {
          nguoiTraLai: 'Hà Kiều Anh 1',
          donViTraLai: 'Trung tâm tin học 1',
          thoiGian: '02/06/2021',
          nguoiBiTraLai: 'Nguyễn Thị A',
          donViBiTraLai: 'Chính sách và cơ sở dữ liệu',
          noiDung: 'Tạo mới hồ sơ 1',
        },
      ],
      lichSuPXL: [
        {
          nguoiGui: 'Hà Kiều Anh 1',
          nguoiNhan: 'Nguyễn Văn B',
          thoiGian: '02/06/2021',
          donViNhan: 'Chính sách và cơ sở dữ liệu',
          vaiTroXuLy: '',
        },
      ],
      LS_CAP_NHAT_FIELDS,
      LS_TRA_LAI_FIELDS,
      LS_PXL_FIELDS,
    }
  },
}
</script>
<style lang="scss">
  .cs-tabs {
    .nav-pills {
      padding: 21px 21px 5px 21px;
    }
  }
</style>
