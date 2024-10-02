
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './index.css'
import './assets/variables.less'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

document.addEventListener('mousemove', (event) => {
	const glow = document.getElementById('mouse-glow');
	glow.style.left = `${event.pageX}px`;
	glow.style.top = `${event.pageY}px`;
  });
