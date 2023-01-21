<template>
	<div class="listBtn">
		<v-btn density="default" to="/ports/create" variant="tonal">Create Port</v-btn>
		<div class="flex-grow-1 px-2">
			<v-btn density="default" variant="outlined" @click="modalDelete=true">
				<v-img src="/images/general/delete.svg"></v-img>
			</v-btn>
		</div>
		<v-btn density="default" variant="outlined">
			<img src="/images/general/filter.svg">
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
		<template v-slot:[`item.name`]="{item}">
			<router-link :to="`/ports/${item.raw.id}`">{{item.raw.name}}</router-link>
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
import NCModalDelete from "@/components/modal/NCModalDelete";

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
					{ title: 'Fixed IP', align: 'start', key: 'fixed_ip' },
					{ title: 'Mac Address', align: 'start', key: 'mac' },
					{ title: 'Device Owner', align: 'start', key: 'device' },
					{ title: 'Admin State Up', align: 'start', key: 'admin' },
					{ title: 'Placement Region', align: 'start', key: 'region.name' },
					{ title: '', key: 'actions', align: 'end', sortable: false }
				],
				data: [
					{id: 0, name: 'net-port1', fixed_ip: '95.163.248.0/22', mac: '95.163.248.0/22', device: '-', admin: '-', region: {country: 'ua', name: 'ua-central-1'}}
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