import './assets/main.css'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(Varlet).mount('#app')
