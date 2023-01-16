<template>
	<v-card variant="flat" class="overviewTab mb-2">
		<h3>Configuration Cluster Type</h3>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">Type</span>
				<span>Dev Cluster</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Master Nodes</span>
				<span>1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Nodes</span>
				<span>1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Version Kubernetes</span>
				<span>1.2.2.9</span>
			</li>
		</ul>
		<v-divider></v-divider>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">vCPU</span>
				<span>3</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">RAM</span>
				<span>6GB</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Storage</span>
				<span>40GB SSD</span>
			</li>
		</ul>
	</v-card>
	<v-card variant="flat" class="overviewTab mb-2">
		<h3>Create Cluster</h3>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">Name Cluster</span>
				<span>Netengi-cluster-1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Type Master Node</span>
				<span>NetBasic</span>
				<div class="d-flex gap-15 smallText-12 ms-2">
					<v-card variant="flat" class="bg-grey-300 px-2">1 CPU</v-card>
					<v-card variant="flat" class="bg-grey-300 px-2">1GB Ram</v-card>
				</div>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Placement Region</span>
				<span class="d-flex align-center">
					<img :src="`/images/flags/ua.svg`" class="iconCountry me-2"/>
					ua-central-1
				</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Disk Type</span>
				<span>SSD</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Number of Master Types</span>
				<span>1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Storage</span>
				<span>1GB</span>
			</li>
		</ul>
	</v-card>
	<v-card variant="flat" class="overviewTab mb-2">
		<h3>Node Pools</h3>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">Name Nood Pool</span>
				<span>netengi-noodpool1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Type Nood Pool</span>
				<span>NetBasic-1</span>
				<div class="d-flex gap-15 smallText-12 ms-2">
					<v-card variant="flat" class="bg-grey-300 px-2">1 CPU</v-card>
					<v-card variant="flat" class="bg-grey-300 px-2">1GB Ram</v-card>
				</div>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Placement Region</span>
				<span class="d-flex align-center">
					<img :src="`/images/flags/ua.svg`" class="iconCountry me-2"/>
					ua-central-1
				</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Disk Type</span>
				<span>SSD</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Number of node pools</span>
				<span>1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Storage</span>
				<b>6GB</b>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Autoscale</span>
				<b>Yes</b>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Labels</span>
				<div>
					<v-card variant="flat" class="bg-grey-300 mb-1 d-flex px-2">
						<div class="me-4">
							<span class="color-grey-600 me-2">Key</span>
							<span>1883459345934</span>
						</div>
						<div>
							<span class="color-grey-600 me-2">Value</span>
							<span>weqosf9232qwef2</span>
						</div>
					</v-card>
				</div>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Taints</span>
				<b>-</b>
			</li>
		</ul>
		<v-divider></v-divider>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">Name Nood Pool</span>
				<span>netengi-noodpool1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Type Nood Pool</span>
				<span>NetBasic-1</span>
				<div class="d-flex gap-15 smallText-12 ms-2">
					<v-card variant="flat" class="bg-grey-300 px-2">1 CPU</v-card>
					<v-card variant="flat" class="bg-grey-300 px-2">1GB Ram</v-card>
				</div>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Placement Region</span>
				<span class="d-flex align-center">
					<img :src="`/images/flags/ua.svg`" class="iconCountry me-2"/>
					ua-central-1
				</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Disk Type</span>
				<span>SSD</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Number of node pools</span>
				<span>1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Storage</span>
				<b>6GB</b>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Autoscale</span>
				<b>Yes</b>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Labels</span>
				<div>
					<v-card variant="flat" class="bg-grey-300 mb-1 d-flex px-2">
						<div class="me-4">
							<span class="color-grey-600 me-2">Key</span>
							<span>1883459345934</span>
						</div>
						<div>
							<span class="color-grey-600 me-2">Value</span>
							<span>weqosf9232qwef2</span>
						</div>
					</v-card>
					<v-card variant="flat" class="bg-grey-300 mb-1 d-flex px-2">
						<div class="me-4">
							<span class="color-grey-600 me-2">Key</span>
							<span>1883459345934</span>
						</div>
						<div>
							<span class="color-grey-600 me-2">Value</span>
							<span>weqosf9232qwef2</span>
						</div>
					</v-card>
				</div>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Taints</span>
				<div>
					<v-card variant="flat" class="bg-grey-300 flex-wrap mb-1 d-flex px-2">
						<div class="me-4 flex-fill">
							<span class="color-grey-600 me-2">Effect</span>
							<span>NoSchedule</span>
						</div>
						<div class="me-4">
							<span class="color-grey-600 me-2">Key</span>
							<span>1883459345934</span>
						</div>
						<div>
							<span class="color-grey-600 me-2">Value</span>
							<span>weqosf9232qwef2</span>
						</div>
					</v-card>
				</div>
			</li>
		</ul>
	</v-card>
	<div class="mt-7">
		<v-btn density="default" variant="tonal" to="/kubernetes">Create</v-btn>
		<v-btn density="default" class="ms-3" variant="outlined" @click="$emit('change', 0)">Back</v-btn>
	</div>
</template>

<script>
export default {
	emits: ['change', 'update:modelValue'],
	props: {
		modelValue: Object
	},
}
</script>

<style>
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
.overviewList li span:first-child{
	min-width: 200px;
}
</style>