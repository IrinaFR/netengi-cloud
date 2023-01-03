<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Volumes</span>
		</div>
		<div class="pageTitle my-4">Create a new Volume</div>
		<v-form class="mt-10">
			<div class="form-group">
				<label for="">Name Volume</label>
				<v-text-field density="compact" class="input" variant="outlined"/>
			</div>
			<div class="form-group mt-2">
				<label for="" class="d-flex align-center">
					Source
					<img src="/images/info.svg" class="ms-2">
				</label>
				<NCAdditionalToggles v-model="source" :items="listSource" label="name" value="value" count="source"/>
			</div>
			<div class="form-group mt-7">
				<label for="" class="d-flex align-center">
					Disk Type
					<img src="/images/info.svg" class="ms-2">
				</label>
				<NCAdditionalToggles v-model="disk" :items="diskType" label="name" value="value" count="disk"/>
			</div>
			<div class="createInfo">
				<v-card variant="flat" color="grey-100" class="infoCard smallText-15">
					<span>Bandwidth</span>
					<span class="color-grey-600 ms-1">(MB/s)</span>
					<div class="infoList">
						<div class="infoListItem">
							<img src="/images/volumes/graph1.svg">
							<span class="d-flex align-center smallText-14">
								Reading
								<img src="/images/info.svg" class="ms-2">
							</span>
							<b>31</b>
						</div>
						<div class="infoListItem">
							<img src="/images/volumes/graph2.svg">
							<span class="d-flex align-center smallText-14">
								Record
								<img src="/images/info.svg" class="ms-2">
							</span>
							<b>16</b>
						</div>
					</div>
				</v-card>
				<v-card variant="flat" color="grey-100" class="infoCard smallText-15">
					<span>Operations per second</span>
					<span class="color-grey-600 ms-1">(IOPS)</span>
					<div class="infoList">
						<div class="infoListItem">
							<img src="/images/volumes/graph1.svg">
							<span class="d-flex align-center smallText-14">
								Reading
								<img src="/images/info.svg" class="ms-2">
							</span>
							<b>1000</b>
						</div>
						<div class="infoListItem">
							<img src="/images/volumes/graph2.svg">
							<span class="d-flex align-center smallText-14">
								Record
								<img src="/images/info.svg" class="ms-2">
							</span>
							<b>300</b>
						</div>
					</div>
				</v-card>
			</div>
			<div class="mt-7">
				<v-btn density="default" variant="tonal">Create</v-btn>
				<v-btn density="default" class="ms-3" variant="outlined" to="/volumes">Cancel</v-btn>
			</div>
		</v-form>
	</div>
</template>

<script>
	import NCAdditionalToggles from "@/components/additional/NCAdditionalToggles";
	export default {
		data() {
			return{
				source: '',
				disk: '',
				listSource: [
					{value: 'Empty Disk', name: 'Empty Disk'},
					{value: 'Image', name: 'Image'},
					{value: 'Volume', name: 'Volume'},
					{value: 'Snapshot', name: 'Snapshot'},
				],
				diskType: [
					{value: 'HDD', name: 'HDD'},
					{value: 'SSD', name: 'SSD'},
				]
			}
		},
		components: {
			NCAdditionalToggles
		}
	}
</script>

<style scoped>
	.createInfo{
		display: flex;
		gap: 20px;
		margin-top: 20px;
	}
	.infoCard{
		padding: 15px;
		border-radius: 4px;
		width: fit-content;
	}
	.infoList{
		margin-top: 20px;
		display: flex;
		gap: 12px;
	}

	.input{
		width: 360px;
	}
</style>