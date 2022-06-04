<template>
  <section>
    <b-card-header>
      <h5>
        Thông tin hồ sơ
      </h5>
    </b-card-header>
    <validation-observer ref="hoSoRules">
      <b-form class="px-2">
        <b-row>
          <b-col
            md="4"
            sm="12"
          >
            <b-form-group
              class="required"
              label="Tiêu đề"
            >
              <validation-provider
                #default="{ errors }"
                name="tieu de"
                rules="required|email"
              >
                <b-form-input
                  id="title"
                  v-model="internalForm.title"
                  state=false
                  type="text"
                  placeholder=""
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col
            md="4"
            sm="12"
          >
            <b-form-group
              label="Auto suggest"
            >
              <vue-autosuggest
                :suggestions="filteredAutoSuggestOptions"
                :limit="10"
                :input-props="{id:'autosuggest__input',class:'form-control', placeholder:'Do you feel lucky?'}"
                @input="onInputAutoSuggestChange"
              >
                <template slot-scope="{suggestion}">
                  <span class="my-suggestion-item">{{ suggestion.item.name }}</span>
                </template>
              </vue-autosuggest>
            </b-form-group>
          </b-col>
          <b-col
            md="4"
            sm="12"
          >
            <b-form-group
              label="Input Mask"
            >
              <b-input-group>
                <b-input-group-prepend is-text>
                  US (+1)
                </b-input-group-prepend>
                <cleave
                  id="phone"
                  v-model="internalForm.inputMask"
                  class="form-control"
                  :raw="false"
                  :options="{
                    phone: true,
                    phoneRegionCode: 'US',
                  }"
                  placeholder="1234 567 8900"
                />
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col
            md="4"
            sm="12"
          >
            <b-form-group
              label="Select"
            >
              <b-form-select
                v-model="internalForm.selectedValue"
                :options="selectedOptions"
              />
            </b-form-group>
          </b-col>
          <b-col
            md="4"
            sm="12"
          >
            <b-form-group
              label="Vue select"
            >
              <v-select
                v-model="internalForm.vueSelectedValue"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="title"
                :options="vueSelectedOptions"
              />
            </b-form-group>
          </b-col>
          <b-col
            md="4"
            sm="12"
          >
            <b-form-group
              label="Form tag"
            >
              <b-form-tags
                v-model="internalForm.formTagValue"
                input-id="tags-basic"
              />
            </b-form-group>
          </b-col>
          <b-col
            md="6"
            sm="12"
          >
            <b-form-group
              label="Datepicker"
            >
              <b-form-datepicker
                id="example-datepicker"
                v-model="internalForm.datepickerValue"
                class="mb-1"
              />
            </b-form-group>
          </b-col>
          <b-col
            md="6"
            sm="12"
          >
            <b-form-group
              label="Timepicker"
            >
              <b-form-timepicker
                v-model="internalForm.timepickerValue"
                locale="en"
              />
            </b-form-group>
          </b-col>
          <b-col
            md="6"
            sm="12"
          >
            <b-form-group
              label="Spinbutton"
            >
              <b-form-spinbutton
                id="demo-sb"
                v-model="internalForm.spinButtonValue"
                min="1"
                max="100"
              />

            </b-form-group>
          </b-col>
          <b-col
            md="6"
            sm="12"
          >
            <b-form-group
              label="Multi upload file"
            >
              <b-form-file
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                multiple
              />
            </b-form-group>
          </b-col>
          <b-col
            md="6"
            sm="12"
          >
            <b-form-group
              class="required"
              label="Nội dung"
            >
              <validation-provider
                #default="{ errors }"
                name="Nội dung"
                rules="required"
              >
                <b-form-textarea
                  id="description"
                  v-model="internalForm.description"
                  :state="errors.length > 0 ? false:null"
                  type="text"
                  placeholder=""
                  rows="5"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col
            md="6"
            sm="12"
          >
            <b-form-group
              class="required"
              label="Quill Editor"
            >
              <quill-editor
                v-model="quillEditorContent"
                :options="snowOption"
              />
            </b-form-group>
          </b-col>
          <b-col
            md="4"
            sm="12"
          >
            <b-form-group
              label="Checkbox"
            >
              <b-form-checkbox
                v-model="internalForm.checkboxValue"
                value="A"
                class="d-inline-block"
              >
                Checked
              </b-form-checkbox>
              <b-form-checkbox
                v-model="internalForm.checkboxValue"
                value="C"
                disabled
                class="d-inline-block ml-2"
              >
                Checked disabled
              </b-form-checkbox>
            </b-form-group>
          </b-col>
          <b-col
            md="4"
            sm="12"
          >
            <b-form-group
              label="Radio"
            >
              <b-form-radio
                v-model="internalForm.radioValue"
                name="some-radios"
                value="A"
                class="d-inline-block"
              >
                Checked
              </b-form-radio>
              <b-form-radio
                name="some-radios2"
                value="c"
                disabled
                class="d-inline-block ml-2"
              >
                Checked Disabled
              </b-form-radio>
            </b-form-group>
          </b-col>
          <b-col
            md="4"
            sm="12"
          >
            <b-form-group
              label="Switch"
            >
              <b-form-checkbox
                checked="true"
                name="check-button"
                switch
                inline
              >
                Active Switch
              </b-form-checkbox>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>
  </section>
</template>
<script>
import {
  BCardHeader,
  BCol,
  BForm,
  BFormDatepicker,
  BFormFile,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BFormSpinbutton,
  BFormTags,
  BFormTextarea,
  BFormTimepicker,
  BInputGroup,
  BInputGroupPrepend,
  BRow,
  BFormCheckbox,
  BFormRadio,
} from 'bootstrap-vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { VueAutosuggest } from 'vue-autosuggest'
import { required } from '@validations'
import Cleave from 'vue-cleave-component'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'cleave.js/dist/addons/cleave-phone.us'
import { quillEditor } from 'vue-quill-editor'
import vSelect from 'vue-select'
import _cloneDeep from 'lodash/cloneDeep'

const DEFAULT_INTERNAL_FORM = {
  title: '',
  description: '',
  autoSuggest: '',
  inputMask: '',
  quillEditor: '',
  datepickerValue: '',
  timepickerValue: '',
  selectedValue: null,
  vueSelectedValue: { title: 'Square' },
  formTagValue: ['Táo', 'Cam'],
  spinButtonValue: 50,
  checkboxValue: 'A',
  radioValue: 'A',
}

const DATA_SUGGEST = [
  {
    developers: [
      {
        name: 'Rena Brant',
        email: 'nephrod@preany.co.uk',
        time: '21/05/2019',
      },
      {
        name: 'Mariano Packard',
        email: 'seek@sparaxis.org',
        time: '14/01/2018',
      },
      {
        name: 'Risa Montufar',
        email: 'vagary@unblist.org',
        time: '10/08/2019',
      },
      {
        name: 'Maragaret Cimo',
        email: 'designed@insanely.net',
        time: '01/12/2019',
      },
      {
        name: 'Jona Prattis',
        email: 'unwieldable@unblist.org',
        time: '21/05/2019',
      },
      {
        name: 'Edmond Chicon',
        email: 'museist@anaphyte.co.uk',
        time: '15/11/2019',
      },
      {
        name: 'Abbey Darden',
        email: 'astema@defectively.co.uk',
        time: '07/05/2019',
      },
    ],
  },
]

export default {
  components: {
    VueAutosuggest,
    BRow,
    BCol,
    BFormInput,
    BFormGroup,
    BFormTextarea,
    BForm,
    BCardHeader,
    ValidationProvider,
    ValidationObserver,
    Cleave,
    BInputGroup,
    BInputGroupPrepend,
    quillEditor,
    BFormDatepicker,
    BFormTimepicker,
    BFormSelect,
    vSelect,
    BFormTags,
    BFormSpinbutton,
    BFormFile,
    BFormCheckbox,
    BFormRadio,
  },
  props: {
    form: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      datasuggest: DATA_SUGGEST,
      filteredAutoSuggestOptions: [],
      limit: 10,
      selected: null,
      internalForm: _cloneDeep(DEFAULT_INTERNAL_FORM),
      required,
      snowOption: {
        theme: 'snow',
      },
      quillEditorContent: '<h1 class="ql-align-center">Quill Rich Text Editor</h1><p>s</p>',
      selectedOptions: [{ value: null, text: 'Chọn' }, { value: 1, text: 'Táo' }, { value: 2, text: 'Cam' }, {
        value: 3,
        text: 'Bưởi',
      }],
      vueSelectedOptions: [
        {
          title: 'Aperture',
          icon: 'ApertureIcon',
        },
        {
          title: 'Codepen',
          icon: 'CodepenIcon',
        },
        {
          title: 'Globe ',
          icon: 'GlobeIcon',
        },
        {
          title: 'Instagram ',
          icon: 'InstagramIcon',
        },
      ],
    }
  },
  watch: {
    form: {
      handler() {
        this.formatResponseForm()
      },
      immediate: true,
    },
  },
  created() {
  },
  methods: {
    formatResponseForm() {
      this.internalForm = _cloneDeep(DEFAULT_INTERNAL_FORM)
      this.internalForm = { ...this.internalForm, ...this.form }
    },
    getRequestForm() {
      return _cloneDeep(this.internalForm)
    },
    onInputAutoSuggestChange(text) {
      if (text === '' || text === undefined) {
        return
      }

      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */
      const filteredDevelopers = this.datasuggest[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)
      const filteredData = filteredDevelopers
      this.filteredAutoSuggestOptions = [{
        data: filteredData,
      }]
    },
  },
}
</script>
<style lang="scss">
  @import '@core/scss/vue/libs/vue-autosuggest.scss';
  @import '@core/scss/vue/libs/quill.scss';
  @import '@core/scss/vue/libs/vue-select.scss';
</style>
