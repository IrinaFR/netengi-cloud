<template>
	<v-app :theme="theme">
		<NCSideMenu :rail="rail"/>
		<v-app-bar>
			<v-app-bar-nav-icon @click="rail = !rail"></v-app-bar-nav-icon>

			<v-toolbar-title>Application</v-toolbar-title>
		</v-app-bar>
		<v-main>

		</v-main>
	</v-app>
</template>

<script>
import NCSideMenu from '@/components/NCSideMenu'
export default {
	name: 'App',
	data(){
		return {
			theme: 'lightTheme',
			rail: true,
		}
	},
	components: {
		NCSideMenu
	}
}
</script>

