import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { focus } from './directives/focus'
import { ripple } from './directives/ripple'
import './assets/scss/ripple.scss'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('focus', focus)
app.directive('ripple', ripple)

app.mount('#app')
