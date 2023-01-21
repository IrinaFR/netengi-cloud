<template>
	<v-app :theme="theme">
		<NCSideMenu :rail="rail" v-if="currentPage()"/>
		<NCHeaderIndex :rail="rail" @change="rail=$event" v-if="currentPage()"/>
		<v-main >
			<div id="main">
				<router-view></router-view>
			</div>
		</v-main>
		<NCAdditionalNotifications/>
	</v-app>
</template>

<script>
import NCSideMenu from '@/components/NCSideMenu';
import NCHeaderIndex from '@/components/header/NCHeaderIndex'
import {defineAsyncComponent} from "vue";
export default {
	name: 'App',
	data(){
		return {
			theme: 'light',
			rail: false,

			friends: ['Sandra Adams', 'Britta Holt'],
			isUpdating: false,
			people: [
				{ header: 'Group 1' },
				{ name: 'Sandra Adams', group: 'Group 1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
				{ name: 'Ali Connors', group: 'Group 1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
				{ name: 'Trevor Hansen', group: 'Group 1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
				{ name: 'Tucker Smith', group: 'Group 1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
				{ divider: true },
				{ header: 'Group 2' },
				{ name: 'Britta Holt', group: 'Group 2', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
				{ name: 'Jane Smith ', group: 'Group 2', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
				{ name: 'John Smith', group: 'Group 2', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
				{ name: 'Sandra Williams', group: 'Group 2', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
			],
			notification: {
				type: '', title: '', text: ''
			}
		}
	},
	components: {
		NCSideMenu, NCHeaderIndex,
		'NCAdditionalNotifications': defineAsyncComponent(() => import('@/components/additional/NCAdditionalNotifications'))
	},
	created() {
		if(localStorage.getItem('theme')){
			this.theme = localStorage.getItem('theme')
		}
		if(localStorage.getItem('rail')){
			this.rail = Boolean(localStorage.getItem('rail'))
		}
	},
	methods: {
		currentPage(){
			// это временно
			switch(this.$route.name) {
				case 'auth': return false
				case 'registration': return false
				case 'forgot': return false
				default: return true
			}
		},

	}
}
</script>

<style>
</style>

