<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Networks</span>
		</div>
		<div class="d-flex justify-space-between align-center my-3 flex-wrap gap-15">
			<h1 class="pageTitle">Netengi-volume-1</h1>
			<div class="listBtn">
				<v-menu width="240">
					<template v-slot:activator="{ props }">
						<v-btn height="30" density="default" max-height="30" variant="outlined" v-bind="props">
							<v-img src="/images/general/more.svg"></v-img>
							<span>Menu</span>
						</v-btn>
					</template>
					<v-list min-width="150" class="listMenu">
						<v-list-item>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/rebuild.svg"/>
								Rebuild
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/rename.svg"/>
								Rename
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/plus.svg"/>
								Assign floating IP
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/minus.svg"/>
								Dissociate IP
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/password.svg"/>
								Change password
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/delete.svg"/>
								Delete
							</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</div>
		</div>
		<div class="smallText-14 d-flex gap-15">
			<span class="instanceRunning">
				<img src="/images/table/running.svg" class="me-2">
				Running
			</span>
			<div>
				<span class="color-grey-600 me-2">Type</span>
				<span>Internal</span>
			</div>
			<div>
				<span class="color-grey-600 me-2">ID</span>
				<span>298117ae-3fa4-4109-9e08-8be5602be5a2</span>
			</div>
		</div>
	</div>
	<v-card variant="text">
		<div class="container">
			<v-tabs
				v-model="tab"
				bg-color="background"
				color="primary-600"
			>
				<v-tab value="1">Subnet</v-tab>
				<v-tab value="2">Ports</v-tab>
				<v-tab value="3">Extra Info</v-tab>
			</v-tabs>
		</div>
		<v-divider></v-divider>
		<div class="mainPage">
			<v-window v-model="tab">
				<v-window-item value="1">
					<NCNetworksPageSubnetTable/>
				</v-window-item>

				<v-window-item value="2">
					<NCNetworksPagePortsTable/>
				</v-window-item>

				<v-window-item value="3">
					<v-card variant="flat" class="overviewTab">
						<ul class="smallText-15 overviewList">
							<li class="d-flex">
								<span class="color-grey-700">Project</span>
								<span>Netengi-network-1</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">Placement Region</span>
								<span class="d-flex align-center">
									<img :src="`/images/flags/ua.svg`" class="iconCountry me-2"/>
									ua-central-1
								</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">Created at</span>
								<span>Oct 29, 2022, 9:22:01 PM</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">Updated at</span>
								<span>Oct 29, 2022, 9:22:01 PM</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">Shared</span>
								<span>No</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">Admin State</span>
								<span>Yes</span>
							</li>
						</ul>
					</v-card>
				</v-window-item>
			</v-window>
		</div>
	</v-card>
</template>

<script>

	import NCNetworksPagePortsTable from './page/NCNetworksPagePortsTable'
	import NCNetworksPageSubnetTable from './page/NCNetworksPageSubnetTable'
	export default {
		data(){
			return{
				tab: '1'
			}
		},
		components: {
			NCNetworksPagePortsTable,
			NCNetworksPageSubnetTable
		},
		created() {
			if(this.$route.params.tab) this.tab = this.$route.params.tab
		}
	}
</script>

<style>
	.overviewTab{
		width: fit-content;
		border-radius: 4px;
		box-shadow: var(--shadow-for-blocks);
		padding: 16px 20px;
		border: solid 1px rgb(var(--v-theme-grey-350));
	}
	.overviewList li{
		margin: 6px 0;
	}
	.overviewList li span:first-child{
		min-width: 200px;
	}
</style>