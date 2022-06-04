<template>
  <ul>
    <template v-for="item in items">
      <component
        :is="resolveNavItemComponent(item)"
        :key="item.header || item.title"
        :item="item"
      />
    </template>
  </ul>
</template>

<script>
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from '@core/layouts/utils'
import { provide, ref } from '@vue/composition-api'
import { mapGetters } from 'vuex'
import VerticalNavMenuHeader from '../vertical-nav-menu-header'
import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'
import VerticalNavMenuGroup from '../vertical-nav-menu-group/VerticalNavMenuGroup.vue'

export default {
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuLink,
    VerticalNavMenuGroup,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      fakeDb: [
        {
          id: '00000000-0000-0000-0000-000000000000',
          name: 'system_admin',
          policy: '',
        },
        {
          id: '1',
          name: 'QuanTriDanhMuc_XemTatCa',
          policy: 'QuanTriDanhMuc_XemTatCa',
        },
        {
          id: '2',
          name: 'KeHoachHangNam_XemTatCa',
          policy: 'KeHoachHangNam_XemTatCa',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      permissions: 'common/permissions',
    }),
  },
  setup() {
    provide('openGroups', ref([]))

    return {
      resolveNavItemComponent,
    }
  },
}
</script>
