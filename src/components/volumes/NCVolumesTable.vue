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
			<th class="text-left">Region
				<img src="/images/arrows/down.svg" class="ms-1">
			</th>
			<th class="text-left">Available zone
				<img src="/images/arrows/down.svg" class="ms-1">
			</th>
			<th class="text-left">Size
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
			<td>
				<span>
					<img :src="`/images/flags/${item.region.country}.svg`" class="me-2">
					{{item.region.name}}
				</span>
			</td>
			<td>{{item.zone}}</td>
			<td>{{item.size}}</td>
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
				{id: 1, check: false, name: 'netengi-instance-1', zone: 'nova', size: '1GB', region: {country: 'ua', name: 'ua-central-1'}},
				{id: 2, check: false, name: 'netengi-instance-2', zone: 'nova', size: '4GB', region: {country: 'ua', name: 'ua-central-1'}},
				{id: 3, check: false, name: 'netengi-instance-3', zone: 'nova', size: '1GB', region: {country: 'ua', name: 'ua-central-1'}},
				{id: 4, check: false, name: 'netengi-instance-4', zone: 'nova', size: '8GB', region: {country: 'ua', name: 'ua-central-1'}},
				{id: 5, check: false, name: 'netengi-instance-5', zone: 'nova', size: '8GB', region: {country: 'ua', name: 'ua-central-1'}},
				{id: 6, check: false, name: 'netengi-instance-6', zone: 'nova', size: '4GB', region: {country: 'ua', name: 'ua-central-1'}},
				{id: 7, check: false, name: 'netengi-instance-7', zone: 'nova', size: '1GB', region: {country: 'ua', name: 'ua-central-1'}}
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