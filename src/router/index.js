import { createRouter, createWebHistory } from "vue-router";

import VueBodyClass from 'vue-body-class';
import HomeView from '../components/pages/HomeView.vue'
import AboutView from '../components/pages/AboutView.vue'
import TodoView from '../components/pages/TodoView.vue'
const routes = [
	{
		path: '/', 
		name: 'Home',
		component: HomeView,
		meta: { bodyClass: 'default'}
	}, 
	{
		path: '/About/',
		name: 'About',
		component: AboutView,
		meta: { bodyClass: 'bg-ice-climb' }
	},
	{
		path: '/Todo/',
		name: 'Todo',
		component: TodoView,
		meta: { bodyClass: 'default'}
	}
]

 
const router = createRouter({
	history: createWebHistory(),
	routes,
})

const vueBodyClass = new VueBodyClass(routes);
router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next) });

export default router