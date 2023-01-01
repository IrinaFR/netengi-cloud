<template>
	<div class="listBtn">
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
			<th class="text-left">Name
				<img src="/images/arrows/down.svg" class="ms-1">
			</th>
			<th class="text-left">Operating Status
				<img src="/images/arrows/down.svg" class="ms-1">
			</th>
			<th class="text-left">IP Address
				<img src="/images/arrows/down.svg" class="ms-1">
			</th>
			<th class="text-left">Operating Status
				<img src="/images/arrows/down.svg" class="ms-1">
			</th>
			<th class="text-left">Gateways
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
				<router-link :to="`/balancer/${item.id}`">{{ item.name }}</router-link>
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
			<td>
				<v-list density="compact" bg-color="transparent">
					<v-list-item density="compact" v-for="ip in item.ip" :key="ip" :title="ip"></v-list-item>
				</v-list>
			</td>
			<td>
				<span v-if="!item.status">
					<img src="/images/table/down.svg" class="me-2">
					Down
				</span>
			</td>
			<td>{{item.gateways ? 'Yes' : 'No'}}</td>
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
				:length="15"
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
				{id: 1, check: false, name: 'netengi-loadbalancer1', state: 1, ip: ['95.163.248.0/22', '79.137.174.0/23'], status: 0, gateways: true},
				{id: 2, check: false, name: 'netengi-loadbalancer2', state: 2, ip: ['95.163.248.0/22', '79.137.174.0/23'], status: 0, gateways: true},
				{id: 3, check: false, name: 'netengi-loadbalancer3', state: 1, ip: ['95.163.248.0/22', '79.137.174.0/23'], status: 0, gateways: true},
				{id: 4, check: false, name: 'netengi-loadbalancer4', state: 2, ip: ['95.163.248.0/22', '79.137.174.0/23'], status: 0, gateways: true},
				{id: 5, check: false, name: 'netengi-loadbalancer5', state: 2, ip: ['95.163.248.0/22', '79.137.174.0/23'], status: 0, gateways: true},
				{id: 6, check: false, name: 'netengi-loadbalancer6', state: 1, ip: ['95.163.248.0/22', '79.137.174.0/23'], status: 0, gateways: true},
				{id: 7, check: false, name: 'netengi-loadbalancer7', state: 1, ip: ['95.163.248.0/22', '79.137.174.0/23'], status: 0, gateways: true}
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
.tableCheck{
	width: fit-content;
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