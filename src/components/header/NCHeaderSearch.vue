<template>
	<div class="search">
		<v-autocomplete
			clearable
			density="compact"
			variant="solo"
			:items="result"
			bg-color="grey-300"
			color="grey-800"
			:hide-details="true"
			placeholder="Products, services, docs"
		>
			<template v-slot:prepend-inner>
				<!--				<v-icon icon="fa-solid fa-magnifying-glass"></v-icon>-->
				<img src="/images/app_bar/search.svg" class="me-2">
				<span class="searchPrepend">Search</span>
			</template>
			<template v-slot:item="{ props, item }">
				<v-card :subtitle="item.title">
					<v-list density="compact">
						<v-list-item density="compact" v-bind="props" :title="link.title" :to="link.url" v-for="link in item.raw.items" :key="link.title" :active="false">
							<template v-slot:prepend>
								<img :src="`/images/menu/${link.icon}.svg`" :alt="link.title" class="me-2 searchLinkImg">
							</template>
						</v-list-item>
						<v-divider></v-divider>
					</v-list>
				</v-card>
			</template>
		</v-autocomplete>
	</div>
</template>

<script>
export default {
	data(){
		return{
			message: 'Hey!',
			marker: true,
			iconIndex: 0,
			result: [
				{
					title: 'Products',
					items: [
						{
							icon: 'instances',
							title: 'Instance group',
							url: '/'
						},
						{
							icon: 'instances',
							title: 'Instances templates',
							url: '/'
						}
					]
				},
				{
					title: 'History',
					items: [
						{
							icon: 'network',
							title: 'Instance',
							url: '/'
						},
						{
							icon: 'network',
							title: 'instance flow',
							url: '/'
						}
					]
				},
				{
					title: 'Tutorials',
					items: [
						{
							icon: 'home',
							title: 'Create a Compute Engine instance template and managed instance group',
							url: '/'
						},
						{
							icon: 'home',
							title: 'Connect to a Cloud SQL for MySQL instance from a Compute Engine virtual machine',
							url: '/'
						}
					]
				}
			],
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
	methods: {
		toggleMarker () {
			this.marker = !this.marker
		},
		sendMessage () {
			this.resetIcon()
			this.clearMessage()
		},
		clearMessage () {
			this.message = ''
		},
		resetIcon () {
			this.iconIndex = 0
		},
		changeIcon () {
			this.iconIndex === this.icons.length - 1
				? this.iconIndex = 0
				: this.iconIndex++
		},
	},
}
</script>

<style>

.search{
	width: 40%;
}
.searchLinkImg{
	filter: grayscale(100%);
}
.search .v-field--variant-solo{
	box-shadow: none;
}
.searchPrepend{
	font-weight: 500;
	font-size: 15px;
}
</style>
