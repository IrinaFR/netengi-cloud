<template>
	<div class="listBtn">
		<v-btn density="default" variant="tonal">Create Image</v-btn>
		<v-btn density="default" variant="outlined" @click="modalDelete=true">
			<v-img src="/images/general/delete.svg"></v-img>
		</v-btn>
	</div>
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
		<template v-slot:[`item.name`]="{item}">
			<router-link :to="`/images/${item.raw.id}`">{{item.raw.name}}</router-link>
		</template>
		<template v-slot:[`item.state`]="{item}">
			<span class="instanceRunning" v-if="item.raw.state===1">
				<img src="/images/table/running.svg" class="me-2">
				Running
			</span>
			<span class="instancePause" v-else>
				<img src="/images/table/pause.svg" class="me-2">
				Pause
			</span>
		</template>
		<template v-slot:[`item.region.name`]="{item}">
			<span>
				<img :src="`/images/flags/${item.raw.region.country}.svg`" class="me-2">
				{{item.raw.region.name}}
			</span>
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
					{ title: 'Name', align: 'start', key: 'name' },
					{ title: 'Status', align: 'start', key: 'state' },
					{ title: 'Is protected', align: 'start', key: 'protected' },
					{ title: 'Placement Region', align: 'start', key: 'region.name' },
					{ title: 'Created at', align: 'start', key: 'create' },
					{ title: 'Min Disk Size', align: 'start', key: 'size' },
					{ title: '', key: 'actions', align: 'end', sortable: false }
				],
				data: [
					{id: 1, name: 'netengi-image-1', state: 1, protected: '-', create: 'Jun 7, 2022, 9:22:01 PM', size: '20GB', region: {country: 'ua', name: 'ua-central-1'}},
					{id: 2, name: 'netengi-image-2', state: 2, protected: '-', create: 'Jun 7, 2022, 9:22:01 PM', size: '5GB', region: {country: 'ua', name: 'ua-central-1'}},
				]
			},
			modalItem: {},
			modalDelete: false,
		}
	}
}
</script>

<style>
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