import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import EMI from '../views/EMI.vue'
import Deposite from '../views/deposite.vue'


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/emi',
			component: EMI
		},
		{
			path: '/deposite',
			component: Deposite
		},
		{
			path: '/about',
			component: About
		}
	],
})

export default router