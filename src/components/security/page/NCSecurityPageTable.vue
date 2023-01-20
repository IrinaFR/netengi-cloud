<template>
	<div class="listBtn mt-5">
		<v-btn density="default" variant="tonal" to="/security/create-rules">Create Rule</v-btn>
		<div class="flex-grow-1 ps-2">
			<v-btn density="default" variant="outlined">
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
		item-value="direction"
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
		<template v-slot:item.actions="{item}">
			<v-menu open-on-hover>
				<template v-slot:activator="{ props }">
					<img src="/images/instances/more.svg" v-bind="props">
				</template>
				<v-list class="listMenu">
					<v-list-item>
						<v-list-item-title class="dropDownItemMenu" @click="modalItem=item.raw, modalEdit=true">
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
					{
						title: 'Direction',
						align: 'start',
						key: 'direction',
					},
					{ title: 'Type', align: 'start', key: 'type' },
					{ title: 'Protocol', align: 'start', key: 'protocol' },
					{ title: 'Ports', align: 'start', key: 'ports' },
					{ title: 'CIDR', align: 'start', key: 'cidr' },
					{ title: '', key: 'actions', align: 'end', sortable: false }
				],
				data: [
					{direction: 'Egress 1', type: 'IPv4', protocol: 'Any', ports: '-', cidr: '0.0.0.0', actions:''},
					{direction: 'Egress 2', type: 'IPv4', protocol: 'Any', ports: '-', cidr: '0.0.0.0', actions:''},
					{direction: 'Egress 3', type: 'IPv4', protocol: 'Any', ports: '-', cidr: '0.0.0.0', actions:''}
				]
			},
			modalItem: {},
			modalDelete: false,
			modalEdit: false
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
@media(max-width: 768px){
	.settingTable{
		display: block;
	}
	.tablePage{
		display: flex;
		margin-top: 20px;
		justify-content: center;
	}

}
</style>