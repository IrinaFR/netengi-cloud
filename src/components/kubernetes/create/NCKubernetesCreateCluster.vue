<template>
	<div class="d-flex justify-space-between">
		<div class="mt-10">
			<div class="form-group">
				<label for="">Name Cluster</label>
				<v-text-field density="compact" hide-details class="input" variant="outlined"/>
			</div>
			<div class="form-group">
				<label for="">Type Master Node</label>
				<v-select
					multiple
					class="input"
					:items="['2 CPU', '4GB RAM', '$0,18/h']"
					density="compact"
					hide-details
					hide-selected
					variant="outlined"
				>
				</v-select>
			</div>
			<div class="form-group">
				<label for="">Placement Region</label>
				<v-select
					class="input"
					:items="['ua-central-1', 'ua-central-1', 'ua-central-1']"
					density="compact"
					hide-details
					hide-selected
					variant="outlined"
				>
					<template v-slot:item="{props}">
						<v-list-item v-bind="props">
							<template v-slot:prepend>
									<span class="d-flex align-center">
										<img :src="`/images/flags/ua.svg`" class="iconCountry me-2"/>
									</span>
							</template>
						</v-list-item>
					</template>
				</v-select>
			</div>
			<div class="form-group mt-2">
				<label for="" class="d-flex align-center">
					Disk Container Format
					<img src="/images/info.svg" class="ms-2">
				</label>
				<NCAdditionalToggles v-model="formatDisk" :items="listDiskformat" label="name" value="value" count="source"/>
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
			<div class="form-group">
				<label>Number of Nodes Pool
					<img src="/images/info.svg" class="ms-2">
				</label>
				<NCAdditionalInputCount label="items"/>
			</div>
			<div class="form-group">
				<label>Storage
					<img src="/images/info.svg" class="ms-2">
				</label>
				<NCAdditionalInputCount label="GB"/>
			</div>
			<div class="form-group d-flex align-center">
				<v-switch
					inset
					color="primary-600"
					hide-details
					class="flex-grow-0 me-2"
				></v-switch>
				<b>Autoscale</b>
				<img src="/images/info.svg" class="ms-2">
			</div>
			<NCKubernetesAdditionalLabelss/>
			<NCKubernetesAdditionalTaints class="mt-5"/>
		</div>
		<v-card variant="flat" class="infoCard pa-5">
			<h3 class="d-inline-block">Estimated Cost</h3>
			<div>
				<span>$0.18</span>
				<span class="smallText-12 color-grey-600">/hour</span>
			</div>
			<v-divider class="my-3"></v-divider>
			<ul class="">
				<li class="mb-2">
					<v-list-item-subtitle>Type Master Node</v-list-item-subtitle>
					Basic 1-1
					<div class="d-flex gap-15 smallText-12">
						<v-card variant="flat" class="bg-backround pa-2">2 CPU</v-card>
						<v-card variant="flat" class="bg-backround pa-2">4GB RAM</v-card>
					</div>
				</li>
				<li class="mb-2">
					<v-list-item-subtitle>Placement Region</v-list-item-subtitle>
					ua-central-1
				</li>
				<li class="mb-2">
					<v-list-item-subtitle>Disk Type</v-list-item-subtitle>
					SSD
				</li>
				<li class="mb-2">
					<v-list-item-subtitle>Master Nodes</v-list-item-subtitle>
					1 item
				</li>
				<li>
					<v-list-item-subtitle>Storage</v-list-item-subtitle>
					1 GB
				</li>
			</ul>
		</v-card>
	</div>
	<div class="mt-7">
		<v-btn density="default" variant="tonal" @click="$emit('change', 1)">Continue</v-btn>
		<v-btn density="default" variant="tonal">Save and add node pool yet</v-btn>
		<v-btn density="default" class="ms-3" variant="outlined" to="/networks">Cancel</v-btn>
	</div>
</template>

<script>
	import NCAdditionalToggles from "@/components/additional/NCAdditionalToggles";
	import NCAdditionalInputCount from "@/components/additional/NCAdditionalInputCount";
	import NCAdditionalDiagram from "@/components/additional/NCAdditionalDiagram";
	import NCKubernetesAdditionalLabelss from "@/components/kubernetes/additional/NCKubernetesAdditionalLabelss";
	import NCKubernetesAdditionalTaints from "@/components/kubernetes/additional/NCKubernetesAdditionalTaints";
	export default {
		emits: ['change', 'update:modelValue'],
		props: {
			modelValue: Object
		},
		data(){
			return{
				formatDisk: '',
				listDiskformat: [
					{value: 'SSD', name: 'SSD'},
					{value: 'High IOPS SSD', name: 'High IOPS SSD'},
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
			NCAdditionalToggles, NCAdditionalInputCount,
			NCAdditionalDiagram, NCKubernetesAdditionalLabelss,
			NCKubernetesAdditionalTaints
		}
	}
</script>

<style>
	.infoCard ul{
		list-style: none;
	}
</style>