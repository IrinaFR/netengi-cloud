<template>
	<v-card variant="flat" class="overviewTab w-100 mb-2">
		<h3>Configure Instance</h3>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">Name Instance</span>
				<span>Netengi-instance-1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Type Instance</span>
				NetBasic
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
				<span class="color-grey-700">Operating System</span>
				<span>Ubuntu 18.04</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Number of machines to create</span>
				<span>1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Storage</span>
				<span>6GB</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Disk Type</span>
				<span>HDD</span>
			</li>
		</ul>
	</v-card>
	<v-card variant="flat" class="overviewTab w-100 mb-2">
		<h3>Network Settings</h3>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">Network</span>
				<span>Yourproject-network-1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">SSH Key</span>
				sshkey1.key

			</li>
			<li class="d-flex">
				<span class="color-grey-700">Firewall</span>
				<div class="d-flex gap-15 smallText-12 me-2">
					<v-card variant="flat" class="bg-grey-300 px-2">default</v-card>
					<v-card variant="flat" class="bg-grey-300 px-2">ssh</v-card>
				</div>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Assign an external IP</span>
				<span>Ubuntu 18.04</span>
			</li>
		</ul>
	</v-card>
	<v-card variant="flat" class="overviewTab w-100 mb-2">
		<h3>Backup Settings</h3>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">Enable Backup</span>
				<span>Yes</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Name Backup</span>
				Netengi-backup-name
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Max number of full backups </span>
				20
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Schedule Backup</span>
				<div class="d-flex gap-15 smallText-12 me-2">
					<v-card variant="flat" class="bg-grey-300 px-2">Monday</v-card>
					<v-card variant="flat" class="bg-grey-300 px-2">Thursday</v-card>
				</div>
				<span>18:30, GMT +3</span>
			</li>
		</ul>
	</v-card>
	<div class="mt-7">
		<v-btn density="default" variant="tonal" to="/instances">Create</v-btn>
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
	min-width: 250px;
}
</style>