<template>
	<div class="mainPage" v-if="$route.name === 'clients'">
		<h1 class="pageTitle mb-5">Clients</h1>
		<v-data-table
			v-model:items-per-page="table.itemsPerPage"
			:headers="table.headers"
			:items="table.data"

			show-select
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
			<template v-slot:[`item.id`]="{item}">
				<router-link :to="`/clients/${item.raw.id}`">{{item.raw.id}}</router-link>
			</template>
			<template v-slot:[`item.roles`]="{item}">
				<span class="role" v-for="role in item.raw.roles" :key="role">{{role}}</span>
			</template>
			<template v-slot:[`item.actions`]="{item}">
				<v-menu open-on-hover>
					<template v-slot:activator="{ props }">
						<img src="/images/instances/more.svg" v-bind="props">
					</template>
					<v-list min-width="150" class="listMenu">
						<v-list-item>
							<v-list-item-title class="dropDownItemMenu" @click="modalItem=item.raw">
								<v-img src="/images/instances/menu/edit.svg"/>
								Edit
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu" @click="modalItem=item.raw, modalDelete=true">
								<v-img src="/images/instances/menu/delete.svg"/>
								Delete
							</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</template>
		</v-data-table>
		<NCModalDelete v-model="modalDelete"/>
	</div>
	<router-view></router-view>
</template>

<script>
import NCModalDelete from '@/components/modal/NCModalDelete'
export default {
	components: {
		NCModalDelete
	},
	data(){
		return{
			sizeList: 10,
			page: 1,
			table: {
				itemsPerPage: 10,
				headers: [
					{ title: 'ID', align: 'start', key: 'id' },
					{ title: 'Name', align: 'start', key: 'name' },
					{ title: 'Roles', align: 'start', key: 'roles' },
					{ title: 'Created at', align: 'start', key: 'create' },
					{ title: '', key: 'actions', align: 'end', sortable: false }
				],
				data: [
					{id: 976465, name: 'Dmitriy Babanov', roles: ['Owner', 'Developer'], create: 'Apr 29, 2022, 4:19:46 PM'},
					{id: 976466, name: 'Dmitriy Babanov', roles: ['Owner', 'Developer'], create: 'Apr 29, 2022, 4:19:46 PM'},
				]
			},
			modalItem: {},
			modalDelete: false,
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