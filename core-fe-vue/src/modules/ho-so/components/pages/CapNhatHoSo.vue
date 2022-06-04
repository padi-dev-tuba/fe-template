<template>
  <b-card no-body>
    <b-card-header class="pb-50">
      <h5>
        Thông tin hồ sơ
      </h5>
    </b-card-header>
    <b-card-body>
      <ho-so-form :form="hoSoDangCapNhat" />
      <div class="d-flex justify-content-center mt-1">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          type="submit"
          class="mr-1"
          @click.prevent="onUpdate"
        >
          Cập nhật
        </b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardBody, BButton,
} from 'bootstrap-vue'
import { MENU_ROUTE_NAME } from '@/modules/ho-so/constants/constants'
import Ripple from 'vue-ripple-directive'
import { required } from '@validations'
import { mapGetters } from 'vuex'
import HoSoForm from '@/modules/ho-so/components/common/HoSoForm.vue'

export default {
  name: 'CapNhatHoSo',
  components: {
    HoSoForm,
    BCard,
    BCardHeader,
    BCardBody,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      MENU_ROUTE_NAME: MENU_ROUTE_NAME.HO_SO.CHI_TIET,
      hoSoDangCapNhatNoiBo: {},
      required,
    }
  },
  computed: {
    ...mapGetters({
      hoSoDangCapNhat: 'hoSo/hoSoDangCapNhat',
    }),
  },
  watch: {
    hoSoDangCapNhat: {
      handler() {
        this.hoSoDangCapNhatNoiBo = this.hoSoDangCapNhat
      },
    },
  },
  created() {
    this.$store.dispatch('hoSo/layChiTietHoSo', {
      hoSoId: this.$router.currentRoute.params.hoSoId,
    })
  },
  methods: {
    onUpdate() {
      this.$refs.hoSoRules.validate().then(success => {
        if (success) {
          this.$store.dispatch('hoSo/capNhatHoSo', this.hoSoDangCapNhatNoiBo)
        }
      })
    },
  },
}
</script>

<style scoped></style>
