<template>
	<div class="listBtn mt-5">
		<v-btn density="default" variant="tonal">Create Instance</v-btn>
		<v-btn density="default" variant="outlined">
			<v-img src="/images/instances/delete.svg"></v-img>
		</v-btn>
	</div>
	<v-table density="compact" class="tableMain">
		<thead class="bg-grey-200">
		<tr>
			<th class="text-left">
				<input type="checkbox" class="form-check-input">
			</th>
			<th class="text-left">IP Address
				<img src="/images/arrows/down.svg" class="ms-1">
			</th>
			<th class="text-left">Status
				<img src="/images/arrows/down.svg" class="ms-1">
			</th>
			<th class="text-left">Network
				<img src="/images/arrows/down.svg" class="ms-1">
			</th>
			<th class="text-left">Associated Object
				<img src="/images/arrows/down.svg" class="ms-1">
			</th>
			<th class="text-left">Placement Region
				<img src="/images/arrows/down.svg" class="ms-1">
			</th>
			<th class="text-left"></th>
		</tr>
		</thead>
		<tbody>
		<tr
			v-for="item in table"
			:key="item.id"
		>
			<td class="tableCheck">
				<input type="checkbox" v-model="item.check" class="form-check-input">
			</td>
			<td class="tableName">
				<router-link :to="`/floating/${item.id}`">{{ item.ip }}</router-link>
			</td>
			<td>
					<span class="instanceRunning" v-if="item.state===1">
						<img src="/images/table/running.svg" class="me-2">
						Running
					</span>
				<span class="instancePause" v-else>
						<img src="/images/table/pause.svg" class="me-2">
						Pause
					</span>

			</td>
			<td>{{item.network}}</td>
			<td>{{item.associated}}</td>
			<td>
				<span>
					<img :src="`/images/flags/${item.region.country}.svg`" class="me-2">
					{{item.region.name}}
				</span>
			</td>
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
</template>

<script>
export default {
	name: "NCInstancesTable",
	data(){
		return{
			table: [
				{id: 1, check: false, ip: '192.168.254.144', state: 1, associated: '-', network: 'netengi-network1', region: {country: 'ua', name: 'ua-central-1'}},
				{id: 2, check: false, ip: '192.168.254.144', state: 2, associated: '-', network: 'netengi-network1', region: {country: 'ua', name: 'ua-central-1'}},
				{id: 3, check: false, ip: '192.168.1.2', state: 1, associated: '-', network: 'netengi-network1', region: {country: 'pl', name: 'pl-central-23'}},
				{id: 4, check: false, ip: '192.168.254.144', state: 2, associated: '-', network: 'netengi-network1', region: {country: 'ua', name: 'ua-central-1'}},
				{id: 5, check: false, ip: '192.168.1.2', state: 2, associated: '-', network: 'netengi-network1', region: {country: 'pl', name: 'pl-central-23'}},
				{id: 6, check: false, ip: '192.168.254.144', state: 1, associated: '-', network: 'netengi-network1', region: {country: 'pl', name: 'pl-central-23'}},
				{id: 7, check: false, ip: '192.168.254.144', state: 1, associated: '-', network: 'netengi-network1', region: {country: 'ua', name: 'ua-central-1'}}
			],
			sizeList: 10,
			page: 1,
		}
	}
}
</script>

<style>
.listBtn{
	display: flex;
	margin-bottom: 10px;
}
.v-btn .v-responsive{
	width: 20px;
}
.v-btn + .v-btn{
	margin-left: 6px;
}
.tableMain{
	border-radius: 4px;
	border: solid 1px rgb(var(--v-theme-grey-300));
}
.tableName{
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	max-width: 230px;
}
tr:not(:last-child){
	border-bottom: solid 1px rgb(var(--v-theme-grey-300));
}
tr:nth-child(2n){
	background: rgb(var(--v-theme-grey-100));
}
.instanceRunning{
	font-weight: 700;
	color: rgb(var(--v-theme-success));
	font-size: 15px;
}
.instancePause{
	font-weight: 700;
	color: #D69F12;
	font-size: 15px;
}
.settingTable{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 15px 0;
}
.tablePage{
	min-width: 330px;
}
.tablePage .v-pagination__prev .v-btn,
.tablePage .v-pagination__next .v-btn{
	border: solid 1px rgb(var(--v-theme-grey-400));
	background-repeat: no-repeat;
	background-position: 50%;
}
.tablePage .v-pagination__prev .v-btn{
	background-image: url("/public/images/arrows/left.svg");
}
.tablePage .v-pagination__next .v-btn{
	background-image: url("/public/images/arrows/right.svg");
}
</style>