
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '/Users/garrettmullings/garrettm268.github.io/src/assets/main.css'


const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
