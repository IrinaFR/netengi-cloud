<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Volumes</span>
		</div>
		<div class="pageTitle d-flex my-4">
			<h1 class="pageTitle d-block flex-grow-1">Netengi-volume-1</h1>
			<div class="listBtn mt-5">
				<v-btn density="default" color="grey-300" height="40" variant="flat">
					<v-img src="/images/general/power.svg"></v-img>
				</v-btn>
				<v-btn density="default" color="grey-300" variant="flat" height="40">
					<v-img src="/images/general/restart.svg"></v-img>
				</v-btn>
				<v-btn density="default" color="grey-300" variant="flat" height="40">
					<v-img src="/images/general/resize.svg"></v-img>
				</v-btn>
				<v-btn density="default" variant="outlined">
					<v-img src="/images/general/more.svg" class="me-1"></v-img>
					<span>Menu</span>
				</v-btn>
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
				<v-tab value="one">Overview</v-tab>
				<v-tab value="two">Snapshot</v-tab>
				<v-tab value="three">Backup</v-tab>
			</v-tabs>
		</div>
		<v-divider></v-divider>
		<div class="mainPage">
			<v-window v-model="tab">
				<v-window-item value="one">
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

				<v-window-item value="two">
					<div class="smallText-15">There are no snapshot yet.</div>
					<v-btn density="default" variant="tonal" class="my-3">Create Snapshot</v-btn>
					<NCVolumesPageSnapshotTable/>
				</v-window-item>

				<v-window-item value="three">
					<div class="smallText-15">There are no backup yet.</div>
					<v-btn density="default" variant="tonal" class="my-3">Create Backup</v-btn>
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
				tab: 'one'
			}
		},
		components: {
			NCVolumesPageSnapshotTable,
			NCVolumesPageBackupTable
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