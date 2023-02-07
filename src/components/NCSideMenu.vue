<template>
	<v-navigation-drawer
		v-model="drawer"
		:rail="rail"
		permanent
		:touchless="true"
		floating
		class="bg-grey-100"
		width="280"
	>
		<v-card variant="text" to="/" class="listItemLogo d-flex">
			<v-img src="/images/logo.svg" class="logoMain"></v-img>
			<v-img src="/images/netengi.svg" class="logoText invertTheme" nav></v-img>
		</v-card>
		<v-list density="compact" nav v-for="(block, index) in menu" :key="index">
			<v-list-subheader :title="block.title" v-if="block.title&&!rail"></v-list-subheader>
			<v-list-subheader class="text-center w-100 px-0" v-else-if="block.title&&rail">—</v-list-subheader>
			<v-menu
				:close-on-content-click="false"
				location="end"
				open-on-hover
				v-for="(link, idx) in block.links"
				:key="idx"
			>
				<template v-slot:activator="{ props }">
					<v-list-item
						v-bind="props"
						density="compact"
						height="32"
						min-height="32"
						:title="link.title"
						:to="`/${link.url}`"
						:active="(link.url===''&&$route.name==='home')||($route.fullPath.includes(link.url)&&$route.name!=='home'&&link.url)">
						<template v-slot:prepend>
							<img :src="`/images/menu/${link.icon}.svg`" :alt="link.title" class="me-2 menuLinkIcon">
						</template>
						<template v-slot:append v-if="link.links&&!rail">
							<img :src="`/images/arrows/right.svg`">
						</template>
					</v-list-item>
				</template>
				<v-card max-width="280" v-if="link.links&&link.links.length">
					<v-list  density="compact" v-for="(innerBlock, innerIndex) in link.links" :key="innerIndex">
						<v-list-subheader :title="innerBlock.title" v-if="innerBlock.title&&!rail" nav></v-list-subheader>
						<v-list-item :to="innerLink.url" v-for="innerLink in innerBlock.links" :class="{hoverBorder:rail}" :key="innerLink" :active="false">{{innerLink.title}}</v-list-item>
						<v-divider></v-divider>
					</v-list>
				</v-card>
				<div class="menuLinks" v-else-if="rail">
					<div >{{link.title}}</div>
				</div>
			</v-menu>

		</v-list>
	</v-navigation-drawer>
</template>

<script>

export default {
	props: {
		rail: Boolean
	},
	data(){
		return {
			drawer: true,
			menu: [
				{
					title: '',
					links: [
						{ title: 'Home', icon: 'home', url: ''},
					]
				},
				{
					title: 'Cloud Compute',
					links: [
						{ title: 'Instances', icon: 'instances', url: 'instances'},
						{ title: 'Volumes', icon: 'volumes', url: 'volumes', links: [
							{
								title: 'Category',
								links: [
									{ title: 'Overviews', url: 'volumes/0/1'},
									{ title: 'Snapshots', url: 'volumes/0/2'},
									{ title: 'Backups', url: 'volumes/0/3'},
								]
							},
							{
								title: 'Category 2',
								links: [
									{ title: 'Item 4', url: ''},
									{ title: 'Distribute traffic between multiple Instance PHP web application', url: ''},
									{ title: 'Item 6', url: ''},
								]
							},]
						},
						{ title: 'Images', icon: 'images', url: 'images'},
						{ title: 'SSH Keys', icon: 'sshKeys', url: 'ssh-keys'},
					]
				},
				{
					title: 'Containers',
					links: [
						{ title: 'Kubernetes clusters', icon: 'kubernetes', url: 'kubernetes'},
					]
				},
				{
					title: 'Network',
					links: [
						{ title: 'Networks', icon: 'network', url: 'networks'},
						{ title: 'Subnet pools', icon: 'home', url: 'networks/1'},
						{ title: 'Ports', icon: 'home', url: 'ports'},
						{ title: 'Routers', icon: 'home', url: 'routes'},
						{ title: 'Security Groups', icon: 'security', url: 'security'},
						{ title: 'Load Balancers', icon: 'loadBalancer', url: 'balancer'},
						{ title: 'Floating IPs', icon: 'floatingIp', url: 'floating'},
					]
				},
				{
					title: '',
					links: [
						{ title: 'Billing', icon: 'billing', url: 'billing'},
						{ title: 'Support', icon: 'support', url: 'sup'},
					]
				}
			],
		}
	},
	methods: {
		changeMenu(){
			this.localRail = !this.localRail
			this.$emit('change', this.localRail)
			localStorage.setItem('rail', this.localRail)
		},
	}
}
</script>

<style>
.listItemLogo{
	margin: 30px 0 40px ;
	height: 27px;
	padding: 0 17px;
	justify-content: start;
	column-gap: 15px;
}
.logoMain{
	padding: 0 8px;
	max-width: 19px;
}
.logoMain img{

}
.logoText img{
	width: 85px;
}
.menuLinks{
	padding: 6px 8px;
	color: #fff;
	background: #474B53;
	border-radius: 4px;
	font-size: 12px;
	margin-left: 10px;
}
.v-list-item--active > .v-list-item__overlay{
	background: #BDCEEE;
	box-shadow: none !important;
}
.v-list-item--active .menuLinkIcon{
	-webkit-filter: grayscale(0);
	filter: grayscale(0);
}
.menuLinkIcon{
	-webkit-filter: grayscale(100%);
	filter: grayscale(100%);
}
.v-list-item--variant-text .v-list-item__overlay{
	box-shadow: 0 0 0 3px rgb(var(--v-theme-primary-600));
}
</style>