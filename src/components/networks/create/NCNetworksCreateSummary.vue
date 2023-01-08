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
		<v-table density="compact" class="tableMain mt-2">
			<thead class="bg-grey-200">
			<tr>
				<th class="text-left">Name
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
				<th class="text-left">Network Address
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
				<th class="text-left">IP Version
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
				<th class="text-left">Gateway IP
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td class="tableName">
					<span>{{subnet.name}}</span>
				</td>
				<td>{{subnet.address}}</td>
				<td>{{subnet.ipv}}</td>
				<td>{{subnet.gateways}}</td>
			</tr>
			</tbody>
		</v-table>
	</v-card>
	<v-card variant="flat" class="overviewTab mb-2">
		<h3>Router</h3>
		<v-table density="compact" class="tableMain mt-2">
			<thead class="bg-grey-200">
			<tr>
				<th class="text-left">Name
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
				<th class="text-left">Placement Region
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
				<th class="text-left">Network
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
				<th class="text-left">Interface
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td class="tableName">
					<span>{{router.name}}</span>
				</td>
				<td>
						<span>
							<img :src="`/images/flags/${router.region.country}.svg`" class="me-2">
							{{router.region.name}}
						</span>
				</td>
				<td>{{router.network ? router.network : 'No Network'}}</td>
				<td>{{router.interface ? router.interface : 'No Subnet'}}</td>
			</tr>
			</tbody>
		</v-table>
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
				router: {
					name: 'netengi-router1',
					network: '',
					interface: '',
					region: {country: 'ua', name: 'ua-central-1'}
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