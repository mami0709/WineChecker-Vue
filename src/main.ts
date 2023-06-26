import './assets/main.css'

import { createApp, h } from 'vue'
import App from './pages/App.vue'
import ChakraUIVuePlugin from '@chakra-ui/vue-next'
import { store } from './store/index'

const app = createApp({
  render: () => h(App)
})

app.use(ChakraUIVuePlugin)
app.use(store)
app.mount('#app')
