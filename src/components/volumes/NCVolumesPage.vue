<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Volumes</span>
		</div>
		<div class="d-flex justify-space-between align-center my-3 flex-wrap gap-15">
			<h1 class="pageTitle">Netengi-volume-1</h1>
			<div class="listBtn">
				<v-btn class="bg-grey-300 px-0" size="30" variant="flat">
					<v-img src="/images/general/power.svg"></v-img>
				</v-btn>
				<v-btn class="bg-grey-300 px-0" size="30" variant="flat">
					<v-img src="/images/general/restart.svg"></v-img>
				</v-btn>
				<v-btn class="bg-grey-300 px-0" size="30" variant="flat">
					<v-img src="/images/general/resize.svg"></v-img>
				</v-btn>
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
	</div>
	<v-card variant="text">
		<div class="container">
			<v-tabs
				v-model="tab"
				bg-color="background"
				color="primary-600"
			>
				<v-tab value="1">Overview</v-tab>
				<v-tab value="2">Snapshot</v-tab>
				<v-tab value="3">Backup</v-tab>
			</v-tabs>
		</div>
		<v-divider></v-divider>
		<div class="mainPage">
			<v-window v-model="tab">
				<v-window-item value="1">
					<v-card variant="flat" class="overviewTab">
						<h3>Volume Specifications</h3>
						<ul class="smallText-15 overviewList">
							<li class="d-flex">
								<span class="color-grey-700">ID</span>
								<span>354a4fa9-0534-4c4a-9aae-fcb995f2c51</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">Size</span>
								<b>1GB</b>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">Type</span>
								<span>Default</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">Created at</span>
								<span>Aug 25, 2022, 12:11:58 PM</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">Bootable</span>
								<span>False</span>
							</li>
						</ul>
					</v-card>
				</v-window-item>
				<v-window-item value="2">
					<NCVolumesPageSnapshotTable/>
				</v-window-item>
				<v-window-item value="3">
					<NCVolumesPageBackupTable/>
				</v-window-item>
			</v-window>
		</div>
	</v-card>
</template>

<script>

	import NCVolumesPageSnapshotTable from './page/NCVolumesPageSnapshotTable'
	import NCVolumesPageBackupTable from './page/NCVolumesPageBackupTable'
	export default {
		data(){
			return{
				tab: '1'
			}
		},
		components: {
			NCVolumesPageSnapshotTable,
			NCVolumesPageBackupTable
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
	.overviewList li :first-child{
		min-width: 200px;
	}
</style>