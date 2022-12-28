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
	{
		path: '/volumes',
		component: () => import('../components/volumes/NCVolumesIndex'),
		name: 'volumes',
		children: [
			{
				path: 'create',
				component: () => import('../components/volumes/NCVolumesCreate'),
				name: 'createVolumes'
			},
		]
	},

]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: "active",
	linkExactActiveClass: "exact-active"
})


export default router