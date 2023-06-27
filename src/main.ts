import './assets/main.css'

import { createApp } from 'vue'
import App from '@/pages/App.vue'
import ChakraUIVuePlugin from '@chakra-ui/vue-next'
import { store } from './store/index'
import router from './router'

const app = createApp(App)

app.use(ChakraUIVuePlugin)
app.use(store)
app.use(router)
app.mount('#app')
