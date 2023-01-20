<template>
	<v-btn density="default" variant="tonal" class="my-3" @click="dialogInvite=true">
		Invite User
	</v-btn>
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
		<template v-slot:[`item.email`]="{item}">
			<b v-if="item.raw.id===ownerId">{{item.raw.email}} (you)</b>
			<span v-else>{{item.raw.email}}</span>
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
	<v-dialog v-model="dialogInvite" width="400">
		<v-card color="background">
			<v-card-text>
				<v-toolbar density="comfortable" rounded color="background">
					<v-toolbar-title class="ml-0">
						<h3>Invite user for client Dmitriy Babanovlongfamily</h3>
					</v-toolbar-title>
					<v-btn icon dark density="compact" class="me-0" @click="dialogInvite = false">
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-toolbar>
				<div class="form-group">
					<label for="">User Email
						<v-menu open-on-hover>
							<template v-slot:activator="{ props }">
								<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
							<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
						</v-menu>
					</label>
					<v-text-field density="compact" hide-details variant="outlined"/>
				</div>
				<v-divider class="my-4"></v-divider>
				<div class="mt-3">
					<b class="smallText-15 mb-3">Select user roles</b>
					<v-card variant="flat" class="smallText-15 bg-grey-200 pa-2 mb-1">
						<input type="checkbox" id="owner" name="roles" class="form-check-input mt-1 me-2">
						<label for="owner">Owner</label>
					</v-card>
					<v-card variant="flat" class="smallText-15 bg-grey-200 pa-2 mb-1">
						<input type="checkbox" id="programmer" name="roles" class="form-check-input mt-1 me-2">
						<label for="programmer">Programmer</label>
					</v-card>
					<v-card variant="flat" class="smallText-15 bg-grey-200 pa-2 mb-1">
						<input type="checkbox" id="accounter" name="roles" class="form-check-input mt-1 me-2">
						<label for="accounter">Accounter</label>
					</v-card>
					<v-card variant="flat" class="smallText-15 bg-grey-200 pa-2 mb-1">
						<input type="checkbox" id="member" name="roles" class="form-check-input mt-1 me-2">
						<label for="member">Member</label>
					</v-card>
					<v-card variant="flat" class="smallText-15 bg-grey-200 pa-2">
						<input type="checkbox" id="onlyNotif" name="roles" class="form-check-input mt-1 me-2">
						<label for="onlyNotif">Only Notifications</label>
					</v-card>
				</div>
				<div class="mt-4">
					<b class="smallText-15">Select notifications settings</b>
					<p class="my-3">User won't receive client related notifications until invitation is accepted.</p>
					<div class="form-group">
						<input type="checkbox" id="generalAnnouncements" class="form-check-input mt-1 me-2">
						<label for="generalAnnouncements">General announcements</label>
					</div>
					<div class="form-group">
						<input type="checkbox" id="notifications" class="form-check-input mt-1 me-2">
						<label for="notifications">Billing and service related notifications</label>
					</div>
					<div class="form-group">
						<input type="checkbox" id="techAnnouncements" class="form-check-input mt-1 me-2">
						<label for="techAnnouncements">Technical announcements</label>
					</div>
				</div>
				<div class="d-flex gap-15 justify-space-between mt-6 mb-2">
					<v-btn variant="outlined" class="flex-grow-1" @click="dialogInvite=false">Cancel</v-btn>
					<v-btn variant="tonal" class="flex-grow-1" color="grey-400" @click="dialogInvite=false">Invite User</v-btn>
				</div>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import NCModalDelete from '@/components/modal/NCModalDelete'
export default {
	components: {
		NCModalDelete
	},
	data(){
		return{
			ownerId: 1,
			sizeList: 10,
			page: 1,
			table: {
				itemsPerPage: 10,
				headers: [
					{ title: 'Email', align: 'start', key: 'email' },
					{ title: 'Accepted invite', align: 'start', key: 'invited' },
					{ title: 'Roles', align: 'start', key: 'roles' },
					{ title: '', key: 'actions', align: 'end', sortable: false }
				],
				data: [
					{id: 1, email: 'mymail@mail.com', roles: ['Owner'], invited: 'Yes'},
					{id: 2, email: 'programmer@mail.ru', roles: ['Developer'], invited: 'No'},
					{id: 3, email: 'accountant@mail.ru', roles: ['Accountant', 'Role2', 'Role3'], invited: 'Yes'},
				]
			},
			modalItem: {},
			modalDelete: false,
			dialogInvite: false
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
</style>