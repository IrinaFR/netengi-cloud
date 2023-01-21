<template>
	<div class="listBtn">
		<v-btn density="default" variant="tonal" to="/kubernetes/create">Create Kubernetes</v-btn>
		<v-btn density="default" variant="outlined">Get Kubeconfig</v-btn>
		<v-btn density="default" variant="outlined" @click="modalDelete=true">
			<v-img src="/images/general/delete.svg"></v-img>
		</v-btn>
		<v-btn density="default" variant="outlined">
			<v-img src="/images/general/pause.svg"></v-img>
		</v-btn>
		<v-btn density="default" variant="outlined">
			<v-img src="/images/general/playBtn.svg"></v-img>
		</v-btn>
		<div class="flex-grow-1 ps-2">
			<v-btn density="default" variant="outlined">
				<v-img src="/images/general/stop.svg"></v-img>
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
		:group-by="[{ key: 'group' }]"
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
		<template v-slot:group-header="{ item, toggleGroup, isGroupOpen }">
			<tr>
				<td></td>
				<td>
					<router-link to="/">{{item.value}}</router-link>
					<span class="iconCollapse ms-3" @click="toggleGroup(item)" :class="{open:isGroupOpen(item)}">
						<img src="/images/arrows/down.svg">
					</span>
				</td>
				<td></td>
				<td>{{item.items[0].props.title.nodes}}</td>
				<td>{{item.items[0].props.title.type}}</td>
				<td>
					<b>${{item.items[0].props.title.price.price}}</b>
					<span class="color-grey-700"> / {{item.items[0].props.title.price.period}}</span>
				</td>
				<td align="right">
					<div class="d-flex align-center justify-end">
						<v-menu open-on-hover>
							<template v-slot:activator="{ props }">
								<img src="/images/info.svg" class="me-4" v-bind="props">
							</template>
							<v-card class="listMenu smallText-15">
								<h3 class="pa-4 pb-0">Options</h3>
								<ul class="smallText-15 pa-4 mt-3 overviewList">
									<li class="d-flex">
										<span class="color-grey-700">RAM</span>
										<span>{{item.items[0].props.title.options.ram}}</span>
									</li>
									<li class="d-flex">
										<span class="color-grey-700">CPU</span>
										<span>{{item.items[0].props.title.options.cpu}} vCPU</span>
									</li>
									<li class="d-flex">
										<span class="color-grey-700">Number of Master nodes</span>
										<span>{{item.items[0].props.title.options.master_nodes}}</span>
									</li>
									<li class="d-flex">
										<span class="color-grey-700">Number of nodes</span>
										<span>{{item.items[0].props.title.options.number_nodes}}</span>
									</li>
									<li class="d-flex">
										<span class="color-grey-700">Placement Region</span>
										<span>{{item.items[0].props.title.options.region}}</span>
									</li>
								</ul>
							</v-card>
						</v-menu>
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
					</div>
				</td>
			</tr>
		</template>
		<template v-slot:[`item.name`]="{item}">
			<router-link :to="`/kubernetes/${item.raw.id}`">{{item.raw.name}}</router-link>
		</template>
		<template v-slot:[`item.price.price`]></template>
		<template v-slot:[`item.actions`]="{item}">
			<v-menu open-on-hover>
				<template v-slot:activator="{ props }">
					<img src="/images/info.svg" class="me-4" v-bind="props">
				</template>
				<v-card class="listMenu smallText-15">
					<h3 class="pa-4 pb-0">Options</h3>
					<ul class="smallText-15 pa-4 mt-3 overviewList">
						<li class="d-flex">
							<span class="color-grey-700">RAM</span>
							<span>{{item.raw.options.ram}}</span>
						</li>
						<li class="d-flex">
							<span class="color-grey-700">CPU</span>
							<span>{{item.raw.options.cpu}} vCPU</span>
						</li>
						<li class="d-flex">
							<span class="color-grey-700">Number of Master nodes</span>
							<span>{{item.raw.options.master_nodes}}</span>
						</li>
						<li class="d-flex">
							<span class="color-grey-700">Number of nodes</span>
							<span>{{item.raw.options.number_nodes}}</span>
						</li>
						<li class="d-flex">
							<span class="color-grey-700">Placement Region</span>
							<span>{{item.raw.options.region}}</span>
						</li>
					</ul>
				</v-card>
			</v-menu>
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
					{ title: 'Name', align: 'start', key: 'name' },
					{ title: 'Number of nodes', align: 'start', key: 'nodes' },
					{ title: 'Type', align: 'start', key: 'type' },
					{ title: 'Price', align: 'start', key: 'price.price' },
					{ title: '', key: 'actions', align: 'end', sortable: false }
				],
				data: [
					{id: 2, name: 'pool1', nodes:'2 node master', type: 'Netengi-Basic1', price: {price: 428, period: 'month' },
						options: {ram: '172GB', cpu: 42, master_nodes: 3, number_nodes: 2, region: 'ua-central-1'}, group: 'netengi-kubernetes1',
					},
					{id: 3, name: 'pool2', nodes:'2 node master', type: 'Netengi-Basic1', price: {price: 428, period: 'month' },
						options: {ram: '172GB', cpu: 42, master_nodes: 3, number_nodes: 2, region: 'ua-central-1'}, group: 'netengi-kubernetes1',
					},
					{id: 3, name: 'pool2', nodes:'2 node master', type: 'Netengi-Basic1', price: {price: 164.48, period: 'month'},
						options: {ram: '172GB', cpu: 42, master_nodes: 3, number_nodes: 2, region: 'ua-central-1'}, group: 'test',
					},
					{id: 3, name: 'pool2', nodes:'2 node master', type: 'Netengi-Basic1', price: {price: 164.48, period: 'month' },
						options: {ram: '172GB', cpu: 42, master_nodes: 3, number_nodes: 2, region: 'ua-central-1'}, group: 'test',
					},
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
.iconCollapse{
	padding: 6px;
	border-radius: 4px;
	background: rgb(var(--v-theme-grey-300));
	margin-right: 10px;
}
.iconCollapse.open{
	box-shadow: 0 0 0 3px #E0EAFF;
	border: solid 1px rgb(var(--v-theme-primary-200));
	background: rgb(var(--v-theme-background));
}
.iconCollapse img{
	transition: transform .15s ease-out;
}
.iconCollapse.open img{
	transform: rotate(180deg);
}
.overviewList li{
	margin: 6px 0;
}
.overviewList li span:first-child{
	min-width: 200px;
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