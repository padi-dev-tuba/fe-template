<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo align-items-center">
        <vuexy-logo />
        <h2 class="brand-text text-primary ml-1 mb-0">
          Hệ thống ABC
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title
            class="mb-1 font-weight-bold"
            title-tag="h2"
          >
            Hệ thống ABC
          </b-card-title>
          <!-- form -->
          <validation-observer
            ref="loginForm"
            #default="{invalid}"
          >
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent="login"
            >
              <!-- email -->
              <b-form-group
                label="Tài khoản"
                label-for="login-username"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Username"
                  vid="text"
                  rules="required"
                >
                  <b-form-input
                    id="login-username"
                    v-model="username"
                    :state="errors.length > 0 ? false:null"
                    name="login-username"
                    placeholder="Nhập tài khoản"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Mật khẩu</label>
                </div>
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  vid="password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      type="password"
                      :state="errors.length > 0 ? false:null"
                      class="form-control-merge"
                      name="login-password"
                      placeholder="Nhập mật khẩu"
                    />
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="primary"
                block
                :disabled="invalid"
              >
                Đăng nhập
              </b-button>
            </b-form>
          </validation-observer>
        </b-col>
      </b-col>
    <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroup, BCardTitle, BImg, BForm, BButton, VBTooltip,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'

export default {
  directives: {
    'b-tooltip': VBTooltip,
  },
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: '',
      password: '',
      username: '',
      sideImg: require('@/assets/images/pages/login-v2.svg'),

      // validation rules
      required,
      email,
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    errorLoginToast() {
      this.$toasted.clear()
      this.$toasted.global.showErrorMessage({
        message: 'Đăng nhập thất bại!',
      })
    },
    login() {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          this.$store.dispatch('common/setIsLogin', true)
          localStorage.setItem('isLogin', true)
          this.$toasted.clear()
          this.$toasted.global.showSuccessMessage({
            message: 'Đăng nhập thành công!',
          })
          this.$router.push({
            path: '/trang-chu',
          }).catch(() => {})
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
