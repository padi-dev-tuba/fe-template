<template>
  <layout-vertical>

    <router-view />

    <!--    <app-customizer-->
    <!--      v-if="showCustomizer"-->
    <!--      slot="customizer"-->
    <!--    />-->

  </layout-vertical>
</template>

<script>
import LayoutVertical from '@core/layouts/layout-vertical/LayoutVertical.vue'
import { $themeConfig } from '@themeConfig'
import 'vue-select/dist/vue-select.css'
// import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'

export default {
  components: {
    // AppCustomizer,
    LayoutVertical,
  },
  data() {
    return {
      showCustomizer: $themeConfig.layout.customizer,
    }
  },
}
</script>
