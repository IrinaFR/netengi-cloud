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
			{
				path: ':id',
				component: () => import('../components/volumes/NCVolumesPage'),
				name: 'volumesPage'
			},
		]
	},
	{
		path: '/images',
		component: () => import('../components/images/NCImagesIndex'),
		name: 'images',
		children: [
			{
				path: 'create',
				component: () => import('../components/images/NCImagesCreate'),
				name: 'createImages'
			},
			{
				path: ':id',
				component: () => import('../components/images/NCImagesPage'),
				name: 'imagesPage'
			},
		]
	},
	{
		path: '/ports',
		component: () => import('../components/ports/NCPortsIndex'),
		name: 'ports',
		children: [
			{
				path: 'create',
				component: () => import('../components/ports/NCPortsCreate'),
				name: 'createPort'
			},
			{
				path: ':id',
				component: () => import('../components/ports/NCPortsPage'),
				name: 'pagePort'
			},
		]
	},
	{
		path: '/ssh-keys',
		component: () => import('../components/ssh/NCSshKeysIndex'),
		name: 'sshKeys',
		children: [
			{
				path: 'create',
				component: () => import('../components/ssh/NCSshCreate'),
				name: 'createSSH'
			},
			{
				path: 'import',
				component: () => import('../components/ssh/NCSshImport'),
				name: 'importSSH'
			},
			{
				path: ':id',
				component: () => import('../components/ssh/NCSshPage'),
				name: 'sshPage'
			},
		]
	},
	{
		path: '/networks',
		component: () => import('../components/networks/NCNetworksIndex'),
		name: 'networks',
		children: [
			{
				path: ':id',
				component: () => import('../components/networks/NCNetworksPage'),
				name: 'pageNetworks'
			},
		]
	},
	{
		path: '/floating',
		component: () => import('../components/floating/NCFloatingIndex'),
		name: 'floating',
		children: [
			{
				path: 'create',
				component: () => import('../components/floating/NCFloatingCreate'),
				name: 'createFloatingIP'
			},
		]
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