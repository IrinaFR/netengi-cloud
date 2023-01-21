<template>
	<div class="d-flex justify-space-between gap-30">
		<div class="flex-grow-1">
			<div class="listBtn">
				<v-btn density="default" variant="outlined">
					<v-img src="/images/general/plusBg.svg" class="me-2"></v-img>
					<span>Add Router</span>
				</v-btn>
			</div>
			<v-data-table
				:headers="table.headers"
				:items="table.data"

				show-select
				hide-default-footer
				class="elevation-1"
			>
				<template v-slot:bottom></template>
				<template v-slot:[`item.name`]="{item}">
					<router-link :to="`/routers/${item.raw.id}`">{{item.raw.name}}</router-link>
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
			<div class="mt-7">
				<v-btn density="default" variant="tonal" @click="$emit('change', 1)">Continue</v-btn>
				<v-btn density="default" class="ms-3" variant="outlined" @click="$emit('change', 0)">Back</v-btn>
			</div>
		</div>
		<v-card variant="flat" class="infoCard">
			<v-card-title>
					<span class="iconInfoCard me-2">
						<v-menu open-on-hover>
							<template v-slot:activator="{ props }">
								<img v-bind="props" src="/images/info.svg">
							</template>
							<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
						</v-menu>
					</span>
				<h3 class="d-inline-block">Information</h3>
			</v-card-title>
			<v-card-text class="smallText-15 color-grey-600">
				Creates a subnet associated with the network. You need  to enter a valid “Network  Address” and “Gateway IP”.  If you did not enter the  “Gateway IP”, the first value  of a network will be assigned by default.
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
import NCModalDelete from "@/components/modal/NCModalDelete";

export default {
	components: {
		NCModalDelete
	},
	emits: ['change'],
	data(){
		return{
			table: {
				headers: [
					{ title: 'Name', align: 'start', key: 'name' },
					{ title: 'Placement Region', align: 'start', key: 'region.name' },
					{ title: 'Network', align: 'start', key: 'network' },
					{ title: 'Interface', align: 'start', key: 'interface' },
					{ title: '', key: 'actions', align: 'end', sortable: false }
				],
				data: [
					{id: 1, check: false, name: 'netengi-router1', network: 'No Network', interface: 'No Subnet', region: {country: 'ua', name: 'ua-central-1'}},
					{id: 2, check: false, name: 'netengi-router2', network: 'No Network', interface: 'No Subnet', region: {country: 'ua', name: 'ua-central-1'}},
				]
			},
			modalItem: {},
			modalDelete: false,
		}
	}
}
</script>