<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Images</span>
		</div>
		<div class="pageTitle d-flex mt-4 mb-1">
			<h1 class="pageTitle d-block flex-grow-1">Netengi-image-1</h1>
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
		<span class="instanceRunning d-block mb-4">
			<img src="/images/table/running.svg" class="me-2">
			Running
		</span>
		<div class="listInfoMain">
			<v-card variant="flat" class="overviewTab">
				<h3>Image Specifications</h3>
				<ul class="smallText-15 overviewList">
					<li class="d-flex">
						<span class="color-grey-700">ID</span>
						<span>e08d57df-340e-425e-a247-ed...</span>
					</li>
					<li class="d-flex">
						<span class="color-grey-700">Image Size</span>
						<b>20GB</b>
					</li>
					<li class="d-flex">
						<span class="color-grey-700">Minimum Memory</span>
						<b>0MB</b>
					</li>
					<li class="d-flex">
						<span class="color-grey-700">Minimum Disk Size</span>
						<b>20GB</b>
					</li>
					<li class="d-flex">
						<span class="color-grey-700">Created at</span>
						<span>Jun 6, 2022, 9:36:48 PM</span>
					</li>
					<li class="d-flex">
						<span class="color-grey-700">Updated at</span>
						<span>Jun 6, 2022, 9:36:48 PM</span>
					</li>
					<li class="d-flex">
						<span class="color-grey-700">Container format</span>
						<span>bare</span>
					</li>
					<li class="d-flex">
						<span class="color-grey-700">Disk format</span>
						<span>raw</span>
					</li>
				</ul>
			</v-card>
			<v-card variant="flat" class="overviewTab">
				<h3>Architecture</h3>
				<ul class="smallText-15 overviewList">
					<li class="d-flex">
						<span class="color-grey-700">OS distro</span>
						<span>-</span>
					</li>
					<li class="d-flex">
						<span class="color-grey-700">Hypervisor type</span>
						<span>-</span>
					</li>
					<li class="d-flex">
						<span class="color-grey-700">OS version</span>
						<span>-</span>
					</li>
					<li class="d-flex">
						<span class="color-grey-700">Visibility</span>
						<span>private</span>
					</li>
					<li class="d-flex">
						<span class="color-grey-700">Generated from</span>
						<router-link to="/images/2">netengi-instance-1</router-link>
					</li>
				</ul>
			</v-card>
		</div>
		<v-expansion-panels v-model="additional" class="mt-3">
			<v-expansion-panel rounded :value="true">
				<v-expansion-panel-title  hide-actions class="justify-start">
					<span class="iconCollapse" :class="{open:additional}">
						<img src="/images/arrows/down.svg">
					</span>
					<h3>Additional Properties</h3>
					<span class="smallText-12 color-grey-600 ms-2">26 items</span>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
					<v-card variant="flat">
						<ul class="smallText-15 overviewList">
							<li class="d-flex">
								<span class="color-grey-700">base_image_ref</span>
								<span>66055430-a582-454f-9773-d5c41abab7f6</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">boot_roles</span>
								<span>_member_</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">hw_machine_type</span>
								<span>pc</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">image_location</span>
								<span>snapshot</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">image_state</span>
								<span>available</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">instance_uuid</span>
								<span>c6e9f098-aed9-453a-b2a7-2a32f58b9069</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">os_hash_algo</span>
								<span>sha512</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">os_hash_value</span>
								<span>fe56512c887770652e524b88ab7e623a343d5341cd87cd2a723925de53ac275729</span>
								<span>d7f537ec9908a797e9173fe004b8263f17c315653b888ca6d9ebb191e77db</span>
							</li>
							<li class="d-flex">
								<span class="color-grey-700">os_hidden</span>
								<span>false</span>
							</li>
						</ul>
					</v-card>
				</v-expansion-panel-text>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>

</template>

<script>

export default {
	data(){
		return{
			additional: true
		}
	}
}
</script>

<style>
.listInfoMain{
	display: flex;
	justify-content: space-between;
	gap: 20px;
}
.overviewTab{
	flex: 1;
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
.iconCollapse{
	padding: 6px;
	border-radius: 4px;
	background: rgb(var(--v-theme-grey-300));
	margin-right: 10px;
}
.iconCollapse.open{
	box-shadow: 0 0 0 3px #E0EAFF;
	border: solid 1px rgb(var(--v-theme-primary-200));
	background: rgb(var(--v-theme-background));
}
.iconCollapse img{
	transition: transform .15s ease-out;
}
.iconCollapse.open img{
	transform: rotate(180deg);
}
.v-expansion-panel-title__overlay{
	background: rgb(var(--v-theme-background));
}
.v-expansion-panel__shadow{
	box-shadow: var(--shadow-for-blocks);
}
.v-expansion-panel.v-expansion-panel--rounded{
	border: solid 1px rgb(var(--v-theme-grey-350));
}
</style>