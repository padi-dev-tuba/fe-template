<template>
  <b-card title="Ý kiến xử lý">
    <b-row class="align-items-center">
      <b-col sm="10" class="mb-2">
        <quill-editor
          v-model="quillEditorContent"
          :options="snowOption"
        />
      </b-col>

      <b-button
        class="h-100"
        variant="primary"
        type="submit"
      >
        Ký số
      </b-button>
    </b-row>
    <b-badge
      class="d-block p-1 text-left cs-ykxl-box"
    >
      <b-row class="mb-1">
        <b-col
          sm="3"
          md="2"
          class="font-weight-bold"
        >
          Đỗ Thị Anh:
        </b-col>
        <b-col
          sm="4"
          md="5"
        >
          06/02/2021 10:44:12
        </b-col>
      </b-row>
      <b-row class="mx-0">
        Cho ý kiến 3
      </b-row>
    </b-badge>
    <b-badge
      class="d-block p-1 mt-1 text-left cs-ykxl-box"
      variant="primary"
    >
      <b-row class="mb-1">
        <b-col
          sm="3"
          md="2"
          class="font-weight-bold"
        >
          Đỗ Thị Anh:
        </b-col>
        <b-col
          sm="4"
          md="5"
        >
          06/02/2021 10:44:12
        </b-col>
      </b-row>
      <b-row class="mx-0">
        Cho ý kiến 3
      </b-row>
    </b-badge>
  </b-card>
</template>
<script>
import {
  BCard, BButton, BRow, BCol, BBadge,
} from 'bootstrap-vue'
import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'YKienXuLy',
  components: {
    BCard,
    quillEditor,
    BButton,
    BRow,
    BBadge,
    BCol,
  },
  data() {
    return {
      quillEditorContent: '',
      snowOption: {
        theme: 'snow',
      },
    }
  },
}
</script>
<style lang="scss">
  @import '@core/scss/vue/libs/quill.scss';

  .cs-ykxl-box {
    background-color: #8F85F3;
  }
</style>
