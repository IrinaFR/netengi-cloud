<template>
	<div class="mainPage">
		<div class="backPage">
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
				<NCAdditionalToggles v-model="source" :items="listSource" label="name" value="value"/>
			</div>
			<div class="form-group mt-7">
				<label for="" class="d-flex align-center">
					Disk Type
					<img src="/images/info.svg" class="ms-2">
				</label>
				<NCAdditionalToggles v-model="source" :items="diskType" label="name" value="value"/>
			</div>
<!--			<div class="mt-7">-->
<!--				<v-btn density="default" to="/volumes/create" variant="tonal">Create</v-btn>-->
<!--				<v-btn class="ms-3" density="default" to="/volumes/create" variant="tonal">Cancel</v-btn>-->
<!--			</div>-->
		</v-form>
	</div>
</template>

<script>
	import NCAdditionalToggles from "@/components/additional/NCAdditionalToggles";
	export default {
		data() {
			return{
				source: '',
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
	.customActiveTab{

	}
	.backPage{
		font-weight: 700;
		font-size: 14px;
		display: flex;
		align-items: center;
		color: rgba(var(--v-theme-primary-600));
	}
	.backPageIcon{
		width: 16px;
		margin-right: 10px;
	}
	.input{
		width: 360px;
	}
</style>