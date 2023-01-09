<template>
	<div class="mainPage" v-if="$route.name === 'notification'">
		<h1 class="pageTitle mt-2 mb-5">Notifications</h1>
		<v-btn density="default" variant="tonal" class="my-3">
			Invite User
		</v-btn>
		<v-table density="compact" class="tableMain">
			<thead class="bg-grey-200">
			<tr>
				<th></th>
				<th class="text-left">Title
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
				<th class="text-left">Generated
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
				<th class="text-left">Status
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
			</tr>
			</thead>
			<tbody>
			<tr
				v-for="item in table"
				:key="item.id"
				:class="{bold:!item.read}"
			>
				<td class="tableCheck">
					<span class="blueCircle" v-if="!item.read"></span>
				</td>
				<td>
					<router-link :to="`/notification/${item.id}`">{{item.name}}</router-link>
				</td>
				<td>{{item.generated}}</td>
				<td>{{item.read ? 'seen' : 'pending'}}</td>
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
				tab: 'one',
				table: [
					{id: 1, read: true, name: 'Your cloud account has been suspended', generated: 'Nov 2, 2022, 9:22:01 PM'},
					{id: 2, read: false, name: 'Invoice #761251 payment overdue', generated: 'Nov 2, 2022, 9:22:01 PM'},
					{id: 3, read: false, name: 'Invoice #761251 payment overdue', generated: 'Nov 2, 2022, 9:22:01 PM'},
					{id: 4, read: false, name: 'Invoice #761251 payment confirmation', generated: 'Nov 2, 2022, 9:22:01 PM'},
					{id: 5, read: true, name: 'Your cloud account has been suspended', generated: 'Nov 2, 2022, 9:22:01 PM'},
					{id: 6, read: false, name: 'Invoice #761251 payment overdue', generated: 'Nov 2, 2022, 9:22:01 PM'},

				],
				sizeList: 10,
				page: 1
			}
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
	.blueCircle{
		display: block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #4671F6;
	}
	tr.bold, tr.bold a{
		font-weight: 700;
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