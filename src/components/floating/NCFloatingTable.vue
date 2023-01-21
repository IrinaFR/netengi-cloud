<template>
	<div class="listBtn mt-5">
		<v-btn density="default" variant="tonal">Create Instance</v-btn>
		<div class="px-2 flex-grow-1">
			<v-btn density="default" variant="outlined" @click="modalDelete=true">
				<v-img src="/images/general/delete.svg"></v-img>
			</v-btn>
		</div>
		<v-btn density="default" variant="outlined">
			<img src="/images/general/filter.svg" class="me-2">
			Filter
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
		<template v-slot:[`item.ip`]="{item}">
			<router-link :to="`/floating/${item.raw.id}`">{{item.raw.ip}}</router-link>
		</template>
		<template v-slot:[`item.status`]="{item}">
			<span class="instanceRunning" v-if="item.raw.status===1">
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
					<img src="/images/general/more.svg" v-bind="props">
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
			table: {
				itemsPerPage: 10,
				headers: [
					{ title: 'IP Address', align: 'start', key: 'ip' },
					{ title: 'Status', align: 'start', key: 'status' },
					{ title: 'Network', align: 'start', key: 'network' },
					{ title: 'Associated Object', align: 'start', key: 'associated' },
					{ title: 'Placement Region', align: 'start', key: 'region.name' },
					{ title: '', key: 'actions', align: 'end', sortable: false }
				],
				data: [
					{id: 1, ip: '192.168.254.144', status: 1, associated: '-', network: 'netengi-network1', region: {country: 'ua', name: 'ua-central-1'}},
					{id: 2, ip: '192.168.254.144', status: 2, associated: '-', network: 'netengi-network1', region: {country: 'ua', name: 'ua-central-1'}},
					{id: 3, ip: '192.168.1.2', status: 1, associated: '-', network: 'netengi-network1', region: {country: 'pl', name: 'pl-central-23'}},
					{id: 4, ip: '192.168.254.144', status: 2, associated: '-', network: 'netengi-network1', region: {country: 'ua', name: 'ua-central-1'}},
					{id: 5, ip: '192.168.1.2', status: 2, associated: '-', network: 'netengi-network1', region: {country: 'pl', name: 'pl-central-23'}},
					{id: 6, ip: '192.168.254.144', status: 1, associated: '-', network: 'netengi-network1', region: {country: 'pl', name: 'pl-central-23'}},
					{id: 7, ip: '192.168.254.144', status: 1, associated: '-', network: 'netengi-network1', region: {country: 'ua', name: 'ua-central-1'}}
				]
			},
			modalItem: {},
			modalDelete: false,
			sizeList: 10,
			page: 1,
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