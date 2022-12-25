<template>
	<v-app :theme="theme">
		<NCSideMenu :rail="rail"/>
		<NCHeaderIndex :rail="rail" @change="rail=$event"/>

		<v-main>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
import NCSideMenu from '@/components/NCSideMenu';
import NCHeaderIndex from '@/components/header/NCHeaderIndex'
export default {
	name: 'App',
	data(){
		return {
			theme: 'lightTheme',
			rail: true,

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
		}
	},
	components: {
		NCSideMenu, NCHeaderIndex
	}
}
</script>

