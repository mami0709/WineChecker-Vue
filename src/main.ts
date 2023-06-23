import './assets/main.css'

import { createApp } from 'vue'
import App from './pages/App.vue'
import Chakra from '@chakra-ui/vue-next'
import { h } from 'vue'

const app = createApp({
  render: () => h(App)
})

app.use(Chakra)
app.mount('#app')
