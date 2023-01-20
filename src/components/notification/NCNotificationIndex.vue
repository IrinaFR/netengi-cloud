<template>
	<div class="mainPage" v-if="$route.name === 'notification'">
		<h1 class="pageTitle mt-2 mb-5">Notifications</h1>
		<v-btn density="default" variant="tonal" class="my-3">
			Invite User
		</v-btn>
		<v-data-table
			v-model:items-per-page="table.itemsPerPage"
			:headers="table.headers"
			:items="table.data"

			hide-default-footer
			:page="page"
			class="elevation-1"
		>
			<template v-slot:bottom>
				<div class="settingTable">
					<div class="tableList">
						<span>Show items</span>
						<select name="tableListInstance" class="tableSizeList form-select" v-model="table.itemsPerPage" id="tableListInstance">
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
							:length="Math.ceil(table.data.length / table.itemsPerPage)"
							active-color="primary-600"
						></v-pagination>
					</div>
				</div>
			</template>
			<template v-slot:[`item.point`]="{item}">
				<span class="blueCircle" v-if="!item.raw.status"></span>
			</template>
			<template v-slot:[`item.name`]="{item}">
				<router-link :to="`/notification/${item.raw.id}`">
					<b v-if="!item.raw.status">{{ item.raw.name }}</b>
					<span v-else>{{ item.raw.name }}</span>
				</router-link>
			</template>
			<template v-slot:[`item.status`]="{item}">
				<b v-if="!item.raw.status">pending</b>
				<span v-else>seen</span>
			</template>
		</v-data-table>
	</div>
	<router-view></router-view>
</template>

<script>
	export default {
		data(){
			return{
				tab: 'one',
				table: {
					itemsPerPage: 10,
					headers: [
						{ title: '', align: 'start', key: 'point', width:'10px' },
						{ title: 'Title', align: 'start', key: 'name' },
						{ title: 'Generated', align: 'start', key: 'generated' },
						{ title: 'Status', align: 'start', key: 'status' },
					],
					data: [
						{id: 1, status: true, name: 'Your cloud account has been suspended', generated: 'Nov 2, 2022, 9:22:01 PM'},
						{id: 2, status: false, name: 'Invoice #761251 payment overdue', generated: 'Nov 2, 2022, 9:22:01 PM'},
						{id: 3, status: false, name: 'Invoice #761251 payment overdue', generated: 'Nov 2, 2022, 9:22:01 PM'},
						{id: 4, status: false, name: 'Invoice #761251 payment confirmation', generated: 'Nov 2, 2022, 9:22:01 PM'},
						{id: 5, status: true, name: 'Your cloud account has been suspended', generated: 'Nov 2, 2022, 9:22:01 PM'},
						{id: 6, status: false, name: 'Invoice #761251 payment overdue', generated: 'Nov 2, 2022, 9:22:01 PM'},
					]
				},
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