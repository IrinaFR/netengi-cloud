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
					<v-menu open-on-hover>
						<template v-slot:activator="{ props }">
							<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
						<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
					</v-menu>
				</label>
				<NCAdditionalToggles v-model="source" :items="listSource" label="name" value="value" count="source"/>
			</div>
			<div class="form-group mt-7">
				<label for="" class="d-flex align-center">
					Disk Type
					<v-menu open-on-hover>
						<template v-slot:activator="{ props }">
							<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
						<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
					</v-menu>
				</label>
				<NCAdditionalToggles v-model="disk" :items="diskType" label="name" value="value" count="disk"/>
			</div>
			<div class="d-flex gap-30">
				<div class="form-group">
					<v-card variant="flat" max-width="500" class="bg-grey-100 pa-5 smallText-15">
						<div class="mb-2">
							<span>Bandwidth</span>
							<span class="color-grey-600">(MB/s)</span>
						</div>
						<div class="d-flex gap-30">
							<div>
								<NCAdditionalDiagram :datasets="bandwidth.reading" label="Reading" count="31"/>
							</div>
							<div>
								<NCAdditionalDiagram :datasets="bandwidth.record" label="Record" count="16"/>
							</div>
						</div>
					</v-card>
				</div>
				<div class="form-group">
					<v-card variant="flat" max-width="500" class="bg-grey-100 pa-5 smallText-15">
						<div class="mb-2">
							<span>Operations per second</span>
							<span class="color-grey-600">(IOPS)</span>
						</div>
						<div class="d-flex gap-30">
							<div>
								<NCAdditionalDiagram :datasets="bandwidth.reading" label="Reading" count="1000"/>
							</div>
							<div>
								<NCAdditionalDiagram :datasets="bandwidth.record" label="Record" count="300"/>
							</div>
						</div>
					</v-card>
				</div>
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
	import NCAdditionalDiagram from "@/components/additional/NCAdditionalDiagram";
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
				],
				bandwidth: {
					reading: [
						{
							backgroundColor: ['#9BD0B7', '#229B61', '#E8E8E8'],
							data: [20, 10, 100]
						}
					],
					record: [
						{
							backgroundColor: ['#8BABF8', '#193E8A', '#E8E8E8'],
							data: [20, 10, 100]
						}
					],
				},
			}
		},
		components: {
			NCAdditionalToggles, NCAdditionalDiagram
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