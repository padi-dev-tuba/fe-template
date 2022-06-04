import Vue from 'vue'
import Toasted from 'vue-toasted'

const successToastedOptions = {
  containerClass: 'common-success-toasted',
  position: 'top-right',
  duration: 5000,
}

const errorToastedOptions = {
  containerClass: 'common-error-toasted',
  position: 'top-right',
  duration: 5000,
}

Vue.use(Toasted)

Vue.toasted.register(
  'showErrorMessage',
  payload => payload.message,
  errorToastedOptions,
)

Vue.toasted.register(
  'showSuccessMessage',
  payload => payload.message,
  successToastedOptions,
)
