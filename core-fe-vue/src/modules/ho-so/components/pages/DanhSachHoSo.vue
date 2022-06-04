<template>
  <section>
    <!-- Filter -->
    <b-card no-body>
      <b-card-header class="pb-50">
        <h5>
          Thông tin tìm kiếm
        </h5>
      </b-card-header>
      <b-card-body>
        <b-row>
          <b-col
            cols="12"
            md="6"
            class="mb-md-0 mb-2"
          >
            <div>Tiêu đề</div>
            <b-form-input
              v-model="searchForm.title"
              placeholder="Nhập tiêu đề"
            />
          </b-col>
          <b-col
            cols="12"
            md="6"
            class="mb-md-0 mb-2"
          >
            <div>Mô tả</div>
            <b-form-input
              v-model="searchForm.description"
              placeholder="Nhập mô tả"
            />
          </b-col>
        </b-row>
        <div class="d-flex justify-content-end mt-2">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            type="submit"
            @click="layDanhSachHoSoPhanTrang"
          >
            Tìm kiếm
          </b-button>
        </div>
      </b-card-body>
    </b-card>

    <!-- List table -->
    <b-card
      no-body
      class="mb-0"
    >
      <div class="m-2">

        <!-- Table Top -->
        <b-row>

          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Hiển thị</label>
            <v-select
              v-model="searchForm.pageSize"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label>mục</label>
          </b-col>

          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                class="d-inline-block mr-1"
                placeholder="Tìm kiếm..."
              />
              <b-button
                variant="primary"
                @click="toAdd()"
              >
                <span class="text-nowrap">Thêm hồ sơ</span>
              </b-button>
            </div>
          </b-col>

        </b-row>

      </div>
      <b-table
        class="position-relative cs-table"
        :no-local-sorting="true"
        :items="danhSachHoSo"
        responsive
        :fields="fieldNames"
        show-empty
        empty-text="Không có dữ liệu"
      >
        <template v-slot:cell(title)="row">
          <router-link :to="`/ho-so/xem/${row.item.id}`">{{
            row.item.title
          }}</router-link>
        </template>

        <template v-slot:cell(status)>
          <b-badge :variant="`light-success`">
            Trong hạn
          </b-badge>
        </template>

        <template #cell(actions)="data">
          <b-dropdown
            variant="link"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >

            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>
            <b-dropdown-item :to="{ name: ROUTE_NAME.HO_SO.XEM, params: { id: data.item.id } }">
              <feather-icon
                icon="FileTextIcon"
              />
              <span class="align-middle ml-50">Xem</span>
            </b-dropdown-item>

            <b-dropdown-item :to="{ name: ROUTE_NAME.HO_SO.CHI_TIET, params: { id: data.item.id } }">
              <feather-icon
                icon="EditIcon"
              />
              <span class="align-middle ml-50">Sửa</span>
            </b-dropdown-item>

            <b-dropdown-item>
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Xóa</span>
            </b-dropdown-item>
          </b-dropdown>
        </template>
      </b-table>
      <div class="mx-2 mb-2">
        <b-row>

          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">Tìm thấy {{ totalRows }} kết quả</span>
          </b-col>

          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >
            <b-pagination
              v-model="searchForm.currentPage"
              :total-rows="totalRows"
              :per-page="searchForm.pageSize"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </section>
</template>

<script>
import {
  BCard, BCardHeader, BCardBody, BRow, BCol, BFormInput, BButton, BTable, BPagination, BDropdown, BDropdownItem, BBadge,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
// eslint-disable-next-line import/named
import { ROUTE_NAME, MENU_ROUTE_NAME } from '@/modules/ho-so/constants/constants'
import { PER_PAGE_OPTIONS } from '@/constants/constants'
import { mapGetters } from 'vuex'
import vSelect from 'vue-select'

export default {
  name: 'DanhSachHoSo',
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BFormInput,
    BButton,
    BTable,
    BPagination,
    BDropdown,
    BDropdownItem,
    BBadge,
    vSelect,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      ROUTE_NAME,
      perPageOptions: PER_PAGE_OPTIONS,
      MENU_ROUTE_NAME: MENU_ROUTE_NAME.HO_SO.DANH_SACH,
      searchForm: {
        title: '',
        description: '',
        pageSize: 10,
        currentPage: 1,
      },
      totalPages: 0,
      totalRows: 0,
      fieldNames: [
        {
          key: 'title',
          label: 'Tiêu đề',
        },
        {
          key: 'description',
          label: 'Mô tả',
        },
        {
          key: 'status',
          label: 'Trạng thái',
        },
        {
          key: 'actions',
          label: 'Hành động',
          class: 'actions-col-width',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      danhSachHoSo: 'hoSo/danhSachHoSo',
    }),
  },
  created() {
    this.layDanhSachHoSoPhanTrang()
  },
  methods: {
    toAdd() {
      this.$router.push({
        path: ROUTE_NAME.HO_SO.NAME + ROUTE_NAME.HO_SO.TAO,
      })
    },
    onChangeNum(pageSize) {
      this.searchForm.currentPage = 1
      this.searchForm.pageSize = pageSize
      this.layDanhSachHoSoPhanTrang()
    },
    onChangePages(page) {
      this.searchForm.currentPage = page
    },
    layDanhSachHoSoPhanTrang() {
      const payload = {
        title: this.searchForm.title,
        description: this.searchForm.description,
        page: this.searchForm.currentPage,
        pageSize: this.searchForm.pageSize,
      }
      this.$store.dispatch('hoSo/layDanhSachHoSo', payload)
    },
  },
}
</script>
<style lang="scss">
  @import '@core/scss/vue/libs/vue-select.scss';

  .cs-table {
    min-height: 150px;
    .actions-col-width {
      max-width: 50px;
    }
  }

</style>
