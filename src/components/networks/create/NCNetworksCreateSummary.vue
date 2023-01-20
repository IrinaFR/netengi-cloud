<template>
	<v-card variant="flat" class="overviewTab mb-2">
		<h3>Network</h3>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">Name Network</span>
				<span>Netengi-network-1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Description</span>
				<span>description</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Placement Region</span>
				<span>ua-central-1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Inyernet Access</span>
				<span>Yes</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Admin state up</span>
				<span>Yes</span>
			</li>
		</ul>
	</v-card>
	<v-card variant="flat" class="overviewTab mb-2">
		<h3>Subnet</h3>
		<v-data-table
			:headers="tableSubnet.headers"
			:items="tableSubnet.data"

			hide-default-footer
			class="elevation-1"
		>
			<template v-slot:bottom></template>
		</v-data-table>
	</v-card>
	<v-card variant="flat" class="overviewTab mb-2">
		<h3>Router</h3>
		<v-data-table
			:headers="tableRouter.headers"
			:items="tableRouter.data"

			hide-default-footer
			class="elevation-1"
		>
			<template v-slot:bottom></template>
			<template v-slot:[`item.region.name`]="{item}">
					<span>
						<img :src="`/images/flags/${item.raw.region.country}.svg`" class="me-2">
						{{item.raw.region.name}}
					</span>
			</template>
		</v-data-table>
	</v-card>
	<v-card variant="flat" class="overviewTab mb-2">
		<h3>Extra Options</h3>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">Enable DHCP</span>
				<span>Yes</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">DNS Server Name</span>
				<span>8.8.8.8</span>
				<span>4.4.4.4</span>
				<span>4.4.4.2</span>
			</li>
		</ul>
	</v-card>
	<div class="mt-7">
		<v-btn density="default" variant="tonal" to="/networks">Create</v-btn>
		<v-btn density="default" class="ms-3" variant="outlined" @click="$emit('change', 0)">Back</v-btn>
	</div>
</template>

<script>
	export default {
		emits: ['change'],
		data(){
			return {
				subnet: {
					name: 'netengi-subnet1',
					address: '13.56.241.172',
					ipv: 'IPv4',
					gateway: 'Do not set gateway ip'
				},
				tableSubnet: {
					headers: [
						{ title: 'Name', align: 'start', key: 'name' },
						{ title: 'Network Address', align: 'start', key: 'address' },
						{ title: 'IP Version', align: 'start', key: 'ip_version' },
						{ title: 'Gateway IP', align: 'start', key: 'gateway' },
					],
					data: [
						{id: 0, name: 'net-subnet1', address: '95.163.248.0/22', ip_version: '4', gateway: '2.59.220.1'},
					]
				},
				tableRouter: {
					headers: [
						{ title: 'Name', align: 'start', key: 'name' },
						{ title: 'Placement Region', align: 'start', key: 'region.name' },
						{ title: 'Network', align: 'start', key: 'network' },
						{ title: 'Interface', align: 'start', key: 'interface' },
					],
					data: [
						{id: 1, check: false, name: 'netengi-router1', network: 'No Network', interface: 'No Subnet', region: {country: 'ua', name: 'ua-central-1'}},
					]
				},
			}
		}
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