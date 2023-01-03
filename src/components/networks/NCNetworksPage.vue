<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Volumes</span>
		</div>
		<div class="pageTitle d-flex mt-4">
			<h1 class="pageTitle d-block flex-grow-1">Netengi-volume-1</h1>
			<div class="listBtn">
				<v-btn density="default" variant="outlined">
					<v-img src="/images/general/more.svg" class="me-1"></v-img>
					<span>Menu</span>
				</v-btn>
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
	<v-card variant="flat">
		<div class="container">
			<v-tabs
				v-model="tab"
				bg-color="background"
				color="primary-600"
			>
				<v-tab value="one">Subnet</v-tab>
				<v-tab value="two">Ports</v-tab>
				<v-tab value="three">Extra Info</v-tab>
			</v-tabs>
		</div>
		<v-divider></v-divider>
		<div class="mainPage">
			<v-window v-model="tab">
				<v-window-item value="one">
					<div class="listBtn">
						<v-btn density="default" to="/ports/create" variant="tonal">Create Subnet</v-btn>
						<div class="flex-grow-1 ms-2">
							<v-btn density="default" variant="outlined">
								<v-img src="/images/general/delete.svg"></v-img>
							</v-btn>
						</div>
						<v-btn density="default" variant="outlined">
							<v-img src="/images/general/filter.svg" class="me-2"></v-img>
							<span>Filter</span>
						</v-btn>
					</div>
					<NCNetworksPageSubnetTable/>
				</v-window-item>

				<v-window-item value="two">
					<div class="listBtn">
						<v-btn density="default" to="/ports/create" variant="tonal">Create Port</v-btn>
						<div class="flex-grow-1 ms-2">
							<v-btn density="default" variant="outlined">
								<v-img src="/images/general/delete.svg"></v-img>
							</v-btn>
						</div>
						<v-btn density="default" variant="outlined">
							<v-img src="/images/general/filter.svg" class="me-2"></v-img>
							<span>Filter</span>
						</v-btn>
					</div>
					<NCNetworksPagePortsTable/>
				</v-window-item>

				<v-window-item value="three">
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
				tab: 'one'
			}
		},
		components: {
			NCNetworksPagePortsTable,
			NCNetworksPageSubnetTable
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