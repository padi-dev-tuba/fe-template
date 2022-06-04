<template>
  <b-card no-body>
    <ho-so-form ref="hoSoForm" />
    <b-card-body>
      <div class="d-flex justify-content-center mt-1">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          type="submit"
          class="mr-1"
          @click.prevent="onSave"
        >
          Lưu
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
          @click="onReset"
        >
          Nhập lại
        </b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardBody, BButton,
} from 'bootstrap-vue'
import { MENU_ROUTE_NAME } from '@/modules/ho-so/constants/constants'
import HoSoForm from '@/modules/ho-so/components/common/HoSoForm.vue'
import Ripple from 'vue-ripple-directive'

export default {
  name: 'TaoHoSo',
  components: {
    BCard,
    BCardBody,
    BButton,
    HoSoForm,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      MENU_ROUTE_NAME: MENU_ROUTE_NAME.HO_SO.TAO,
    }
  },
  methods: {
    onSave() {
      const payload = this.$refs.hoSoForm.getRequestForm()
      this.$refs.hoSoForm.$refs.hoSoRules.validate().then(success => {
        if (success) {
          this.$store.dispatch('hoSo/taoHoSo', payload)
        }
      })
    },
    onReset() {
      this.$nextTick(() => {
        this.$refs.hoSoForm.$refs.hoSoRules.reset()
      })
    },
  },
}
</script>

<style scoped></style>
