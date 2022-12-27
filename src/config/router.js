import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('../components/NCIndex'),
		name: 'home'
	},
	{
		path: '/instances',
		component: () => import('../components/instances/NCInstancesIndex'),
		name: 'instances'
	},
	{
		path: '/authorization',
		component: () => import('../components/authorization/NCAuthorizationIndex'),
		name: 'auth',
		children: [
			{
				path: 'forgot',
				component: () => import('../components/authorization/NCAuthorizationForgotPass'),
				name: 'forgot'
			},
		]
	},
	{
		path: '/registration',
		component: () => import('../components/authorization/NCAuthorizationSignUp'),
		name: 'registration'
	},

]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: "active",
	linkExactActiveClass: "exact-active"
})


export default router