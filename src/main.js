import './assets/main.css' // Itt importálod a globális stílust

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//Bootstrap: css, js
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//Icons: css
import "bootstrap-icons/font/bootstrap-icons.min.css"


const app = createApp(App)
//Ide olyat teszünk, amit gyakran használunk
//Globális komponensek importja
import DobozGlobalis from '@/components/dobozok/DobozGlobalis.vue'
//Beteszi az alkalmazásba, innentől mindeni kasználhatja
app.component('DobozGlobalis', DobozGlobalis);


app.use(createPinia())
app.use(router)

app.mount('#app')
