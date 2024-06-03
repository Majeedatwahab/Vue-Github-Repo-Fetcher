import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Unicon from 'vue-unicons'
import { uniEye, uniFavorite } from 'vue-unicons/dist/icons'

import App from './App.vue'
import router from './router'
Unicon.add([uniEye, uniFavorite])


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Unicon)
app.mount('#app')
