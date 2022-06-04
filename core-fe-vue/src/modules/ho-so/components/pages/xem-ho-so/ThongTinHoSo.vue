<template>
  <b-card title="Thông tin hồ sơ">
    <b-row
      v-for="(item, index) in info"
      :key="index"
      class="mb-1"
    >
      <b-col
        sm="3"
        class="font-weight-bold"
      >
        {{ item.title }}
      </b-col>
      <b-col
        sm="4"
      >
        {{ item.content }}
      </b-col>
    </b-row>
  </b-card>
</template>

<script>

import {
  BCard, BRow, BCol,
} from 'bootstrap-vue'

export default {
  name: 'ThongTinHoSo',
  components: {
    BCard,
    BRow,
    BCol,
  },
  data() {
    return {
      info: [
        {
          title: 'Tiêu đề hồ sơ:',
          content: 'HSCV',
        },
        {
          title: 'Ký hiệu hồ sơ:',
          content: 'HSCV-12',
        },
        {
          title: 'Mã hồ sơ:',
          content: 'THTH-123',
        },
        {
          title: 'Nội dung:',
          content: 'Nội dung hồ sơ ---',
        },
        {
          title: 'Ngày mở hồ sơ:',
          content: '01/06/2021',
        },
        {
          title: 'Người lập hồ sơ:',
          content: 'Nguyễn Văn A',
        },
        {
          title: 'Hạn xử lý:',
          content: '01/06/2021',
        },
      ],
    }
  },
}
</script>
