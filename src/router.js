import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('../components/NCIndex'),
		name: 'home',
		redirect: '/programs'
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: "active",
	linkExactActiveClass: "exact-active"
})


export default router