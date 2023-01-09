<template>
	<div class="mainPage" v-if="$route.name === 'clients'">
		<h1 class="pageTitle mb-5">Clients</h1>
		<v-table density="compact" class="tableMain">
			<thead class="bg-grey-200">
			<tr>
				<th class="text-left">ID
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
				<th class="text-left">Name
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
				<th class="text-left">Roles
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
				<th class="text-left">Created at
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
				<td class="tableName">
					<router-link :to="`/clients/${item.id}`">{{ item.id }}</router-link>
				</td>
				<td>{{item.name}}</td>
				<td>
					<span class="role" v-for="role in item.roles" :key="role">{{role}}</span>
				</td>
				<td>{{item.create}}</td>
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
	</div>
	<router-view></router-view>
</template>

<script>
export default {
	data(){
		return{
			table: [
				{id: 976466, name: 'Dmitriy Babanov', roles: ['Owner', 'Developer'], create: 'Apr 29, 2022, 4:19:46 PM'},
				{id: 976466, name: 'Dmitriy Babanov', roles: ['Owner', 'Developer'], create: 'Apr 29, 2022, 4:19:46 PM'},
			],
			sizeList: 10,
			page: 1,
		}
	}
}
</script>

<style>
	.role{
		padding: 3px 4px;
		border-radius: 4px;
		font-size: 12px;
		background: rgb(var(--v-theme-grey-300));
		margin: 5px;
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