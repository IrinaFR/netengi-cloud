<template>
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
		<tr
			v-for="item in table"
			:key="item.id"
		>
			<td class="tableCheck">
				<input type="checkbox" v-model="item.check" class="form-check-input">
			</td>
			<td class="tableName">
				<router-link :to="`/volumes/${item.id}`">{{ item.name }}</router-link>
			</td>
			<td>{{item.address}}</td>
			<td>{{item.ipVersion}}</td>
			<td>{{item.gateway}}</td>
			<td class="text-end cursor-pointer"><img src="/images/table/more.svg"></td>
		</tr>
		</tbody>
	</v-table>
	<div class="settingTable">
		<div class="tableList">
			<span>Show items</span>
			<select name="tableListInstance" class="tableSizeList form-select" v-model="sizeList" id="tableListInstance">
				<option value="10">10</option>
				<option value="5">5</option>
				<option value="30">30</option>
				<option value="50">50</option>
			</select>
			<span>of {{table.length}}</span>
		</div>
		<div class="tablePage">
			<v-pagination
				class="justify-end"
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
	data(){
		return{
			table: [
				{id: 0, check: false, name: 'net-subnet1', address: '95.163.248.0/22', ipVersion: '4', gateway: '2.59.220.1'},
				{id: 0, check: false, name: 'net-subnet20', address: '37.139.40.0/22', ipVersion: '4', gateway: '213.219.215.254'},
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