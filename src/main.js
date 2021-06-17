import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// Import component
import Loading from 'vue3-loading-overlay'
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'swiper/swiper-bundle.css'
import App from './App.vue'
import router from './router'
import { Field, Form, ErrorMessage } from 'vee-validate'
import MittEmitter from 'mitt-emitter'
const emitter = new MittEmitter()

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.use(emitter)
app.component('loading', Loading)

app.component('vfield', Field)
app.component('vform', Form)
app.component('error-message', ErrorMessage)

app.mount('#app')
