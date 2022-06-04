<template>
  <section>
    <b-row>
      <b-col sm="6">
        <ThongTinHoSo />
        <LichSu />
      </b-col>
      <b-col sm="6">
        <YKienXuLy />
      </b-col>
    </b-row>
  </section>
</template>
<script>
import {
  BRow, BCol,
} from 'bootstrap-vue'
import ThongTinHoSo from './ThongTinHoSo.vue'
import YKienXuLy from './YKienXuLy.vue'
import LichSu from './LichSu.vue'

export default {
  name: 'XemHoSo',
  components: {
    YKienXuLy,
    ThongTinHoSo,
    BRow,
    BCol,
    LichSu,
  },
  data() {
    return {
      text: 'xem',
    }
  },
}
</script>
<style lang="scss">

</style>
