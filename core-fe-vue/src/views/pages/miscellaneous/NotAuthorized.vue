<template>
  <div class="misc-wrapper">
    <b-link class="brand-logo">
      <vuexy-logo />
      <h2 class="brand-text text-primary ml-1">
        Hệ thống quản lý đầu tư công
      </h2>
    </b-link>

    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          Bạn chưa được cấp quyền truy cập! 🔐
        </h2>
        <p class="mb-2">
          Bạn chưa quyền truy cập tính năng này. Liên lạc admin để biết thêm chi tiết.
        </p>
        <b-button
          variant="primary"
          class="mb-1 btn-sm-block"
          :to="loginRoute()"
        >Quay lại trang chủ</b-button>
        <b-img
          fluid
          :src="imgUrl"
          alt="Not authorized page"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { BLink, BImg, BButton } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'

export default {
  components: {
    BLink,
    BImg,
    BButton,
    VuexyLogo,
  },
  data() {
    return {
      downImg: require('@/assets/images/pages/not-authorized.svg'),
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require('@/assets/images/pages/not-authorized-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
  },
  methods: {
    loginRoute() {
      return '/'
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
