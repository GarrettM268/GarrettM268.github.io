import { createRouter, createWebHistory } from "vue-router";

import HomeView from '../components/pages/HomeView.vue'
import AboutView from '../components/pages/AboutView.vue'

const routes = [
	{
		path: '/', 
		name: 'Home',
		component: HomeView
	}, 
	{
		path: '/About/',
		name: 'About',
		component: AboutView
	}
]

 
const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router