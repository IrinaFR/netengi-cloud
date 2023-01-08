<template>
	<div class="d-flex justify-space-between gap-30">
		<div class="flex-grow-1">
			<div class="listBtn">
				<v-btn density="default" variant="outlined">
					<v-img src="/images/general/plusBg.svg" class="me-2"></v-img>
					<span>Add Subnet</span>
				</v-btn>
			</div>
			<v-table density="compact" class="tableMain">
				<thead class="bg-grey-200">
				<tr>
					<th class="text-left">
						<input type="checkbox" class="form-check-input">
					</th>
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
					<th class="text-left"></th>
				</tr>
				</thead>
				<tbody>
					<tr v-for="item in table" :key="item.id">
						<td class="tableCheck">
							<input type="checkbox" v-model="item.check" class="form-check-input">
						</td>
						<td class="tableName">
							<span>{{item.name}}</span>
						</td>
						<td>{{item.address}}</td>
						<td>{{item.ipv}}</td>
						<td>{{item.gateways}}</td>
						<td class="text-end cursor-pointer"><img src="/images/table/more.svg"></td>
					</tr>
				</tbody>
			</v-table>
			<div class="settingTable">
				<div class="tableList">
					<span>Show items</span>
					<select name="tableListInstance" class="tableSizeList form-select" v-model="sizeList" id="tableListInstance">
						<option value="10">10</option>
						<option value="30">30</option>
						<option value="50">50</option>
					</select>
					<span>of {{table.length}}</span>
				</div>
				<div class="tablePage">
					<v-pagination
						density="comfortable"
						v-model="page"
						:length="Math.ceil(table.length / sizeList)"
						active-color="primary-600"
					></v-pagination>
				</div>
			</div>
			<div class="mt-7">
				<v-btn density="default" variant="tonal" @click="$emit('change', 1)">Continue</v-btn>
				<v-btn density="default" class="ms-3" variant="outlined" @click="$emit('change', 0)">Back</v-btn>
			</div>
		</div>
		<v-card variant="flat" class="infoCard">
			<v-card-title>
					<span class="iconInfoCard me-2">
						<img src="/images/info.svg">
					</span>
				<h3 class="d-inline-block">Information</h3>
			</v-card-title>
			<v-card-text class="smallText-15 color-grey-600">
				Creates a subnet associated with the network. You need  to enter a valid “Network  Address” and “Gateway IP”.  If you did not enter the  “Gateway IP”, the first value  of a network will be assigned by default.
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	emits: ['change'],
	data(){
		return{
			table: [
				{id: 1, check: false, name: 'netengi-subnet1', address: '13.56.241.172', ipv: 'IPv4', gateway: 'Do not set gateway ip'},
				{id: 2, check: false, name: 'netengi-subnet1', address: '13.56.241.172', ipv: 'IPv4', gateway: 'Do not set gateway ip'},
			],
			sizeList: 10,
			page: 1,
		}
	}
}
</script>