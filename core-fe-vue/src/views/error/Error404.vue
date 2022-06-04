<template>
  <!-- Error page-->
  <div class="misc-wrapper">
    <b-link class="brand-logo">
      <vuexy-logo />
      <h2 class="brand-text text-primary ml-1">
        {{ themeConfig.appName }}
      </h2>
    </b-link>

    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          Không tìm thấy 🕵🏻‍♀️
        </h2>
        <p class="mb-2">
          Rất tiếc!! Địa chỉ bạn muốn đến không tồn tại.
        </p>

        <b-button
          variant="primary"
          class="mb-2 btn-sm-block"
          :to="{path:'/'}"
        >
          Quay lại trang chủ
        </b-button>

        <!-- image -->
        <b-img
          fluid
          :src="imgUrl"
          alt="Error page"
        />
      </div>
    </div>
  </div>
<!-- / Error page-->
</template>

<script>
/* eslint-disable global-require */
import { BLink, BButton, BImg } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'
import { $themeConfig } from '@themeConfig'

export default {
  components: {
    VuexyLogo,
    BLink,
    BButton,
    BImg,
  },
  data() {
    return {
      themeConfig: $themeConfig.app,
      downImg: require('@/assets/images/pages/error.svg'),
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require('@/assets/images/pages/error-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
