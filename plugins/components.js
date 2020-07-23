import Vue from 'vue'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import StyledButton from '~/components/StyledButton.vue'
import StyledLink from '~/components/StyledLink.vue'

Vue.component('styled-button', StyledButton)
Vue.component('styled-link', StyledLink)
Vue.component('v-select', vSelect)
