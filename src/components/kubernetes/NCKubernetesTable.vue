<template>
	<div class="listBtn">
		<v-btn density="default" variant="tonal" to="/kubernetes/create">Create Kubernetes</v-btn>
		<v-btn density="default" variant="outlined">Get Kubeconfig</v-btn>
		<v-btn density="default" variant="outlined">
			<v-img src="/images/general/delete.svg"></v-img>
		</v-btn>
		<v-btn density="default" variant="outlined">
			<v-img src="/images/general/pause.svg"></v-img>
		</v-btn>
		<v-btn density="default" variant="outlined">
			<v-img src="/images/general/playBtn.svg"></v-img>
		</v-btn>
		<v-btn density="default" variant="outlined">
			<v-img src="/images/general/stop.svg"></v-img>
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
				<th class="text-left">Number of nodes
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
				<th class="text-left">Type
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
				<th class="text-left">Price
					<img src="/images/arrows/down.svg" class="ms-1">
				</th>
				<th class="text-left"></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in table" :key="item.id">
				<td class="text-left">
					<input type="checkbox" class="form-check-input">
				</td>
				<td class="text-left">{{item.name}}</td>
				<td class="text-left">{{item.nodes}}</td>
				<td class="text-left">{{item.type}}</td>
				<td class="text-left">
					{{item.price.price}}
					<span class="color-grey-700"> / {{item.price.period}}</span>
				</td>
				<td class="text-end cursor-pointer">
					<v-menu
						:close-on-content-click="false"
						location="end"
						open-on-hover
					>
						<template v-slot:activator="{ props }">
							<img src="/images/info.svg" class="me-2" v-bind="props">
						</template>
						<v-card class="pa-5 smallText-15">
							<h3>Options</h3>
							<ul class="smallText-15 mt-3 overviewList">
								<li class="d-flex">
									<span class="color-grey-700">RAM</span>
									<span>{{item.options.ram}}</span>
								</li>
								<li class="d-flex">
									<span class="color-grey-700">CPU</span>
									<span>{{item.options.cpu}} vCPU</span>
								</li>
								<li class="d-flex">
									<span class="color-grey-700">Number of Master nodes</span>
									<span>{{item.options.master_nodes}}</span>
								</li>
								<li class="d-flex">
									<span class="color-grey-700">Number of nodes</span>
									<span>{{item.options.number_nodes}}</span>
								</li>
								<li class="d-flex">
									<span class="color-grey-700">Placement Region</span>
									<span>{{item.options.region}}</span>
								</li>
							</ul>
						</v-card>
					</v-menu>
					<img src="/images/table/more.svg">
				</td>
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
				:length="Math.ceil(table.length / sizeList)"
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
				{id: 1, check: false, name: 'netengi-instance-1',
					nodes:2,
					type: 'Netengi-Basic1',
					price: {price: 428, period: 'month' },
					options: {ram: '172GB', cpu: 42, master_nodes: 3, number_nodes: 2, region: 'ua-central-1'},
					clusters: [
						{id: 1, check: false, name: 'cluster1',
							nodes:2,
							type: 'Netengi-Basic1',
							options: {ram: '172GB', cpu: 42, master_nodes: 3, number_nodes: 2, region: 'ua-central-1'}
						},
						{id: 2, check: false, name: 'cluster2',
							nodes:2,
							type: 'Netengi-Basic1',
							options: {ram: '172GB', cpu: 42, master_nodes: 3, number_nodes: 2, region: 'ua-central-1'}
						}
					]
				},
				{id: 2, check: false, name: 'netengi-instance-1',
					nodes:2,
					type: 'Netengi-Basic2',
					price: {price: 163.48, period: 'month' },
					options: {ram: '128GB', cpu: 42, master_nodes: 3, number_nodes: 3, region: 'ua-central-2'},
					clusters: [
						{id: 3, name: 'cluster1',
							nodes:2,
							type: 'Netengi-Basic3',
							options: {ram: '172GB', cpu: 42, master_nodes: 3, number_nodes: 2, region: 'ua-central-1'}
						},
						{id: 4, name: 'cluster2',
							nodes:2,
							type: 'Netengi-Basic3',
							options: {ram: '172GB', cpu: 42, master_nodes: 3, number_nodes: 2, region: 'ua-central-1'}
						}
					]
				},

			],
			sizeList: 10,
			page: 1,
		}
	}
}
</script>

<style>
.overviewList li{
	margin: 6px 0;
}
.overviewList li span:first-child{
	min-width: 200px;
}
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