import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('../components/NCIndex'),
		name: 'home'
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
		path: '/instances',
		component: () => import('../components/instances/NCInstancesIndex'),
		name: 'instances'
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
	{
		path: '/images',
		component: () => import('../components/images/NCImagesIndex'),
		name: 'images'
	},
	{
		path: '/ports',
		component: () => import('../components/ports/NCPortsIndex'),
		name: 'ports'
	},
	{
		path: '/ssh-keys',
		component: () => import('../components/ssh/NCSshKeysIndex'),
		name: 'sshKeys'
	},
	{
		path: '/networks',
		component: () => import('../components/networks/NCNetworksIndex'),
		name: 'networks'
	},
	{
		path: '/floating',
		component: () => import('../components/floating/NCFloatingIndex'),
		name: 'floating'
	},
	{
		path: '/security',
		component: () => import('../components/security/NCSecurityIndex'),
		name: 'security'
	},
	{
		path: '/balancer',
		component: () => import('../components/loadBalancer/NCloadBalancerIndex'),
		name: 'balancer'
	},

]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: "active",
	linkExactActiveClass: "exact-active"
})


export default router