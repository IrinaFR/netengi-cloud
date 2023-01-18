<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Clients</span>
		</div>
		<h1 class="pageTitle mb-5 mt-2">Dmitriy Babanov</h1>
	</div>
	<v-card variant="flat">
		<div class="container">
			<v-tabs
				v-model="tab"
				bg-color="background"
				color="primary-600"
			>
				<v-tab value="1">Details</v-tab>
				<v-tab value="2">Users</v-tab>
				<v-tab value="3">Email Log</v-tab>
			</v-tabs>
		</div>
		<v-divider></v-divider>
		<div class="mainPage">
			<v-window v-model="tab">
				<v-window-item value="1">
					<div class="listInfoMain">
						<v-card variant="flat" class="overviewTab">
							<h3>Client Info</h3>
							<ul class="smallText-15 overviewList">
								<li class="d-flex">
									<span class="color-grey-700">Country</span>
									<span>Ukraine</span>
								</li>
								<li class="d-flex">
									<span class="color-grey-700">City</span>
									<span>Kharkiv</span>
								</li>
								<li class="d-flex">
									<span class="color-grey-700">Address</span>
									<span>My Address, 1</span>
								</li>
								<li class="d-flex">
									<span class="color-grey-700">Zip code</span>
									<span>62433</span>
								</li>
								<li class="d-flex">
									<span class="color-grey-700">Phone</span>
									<span>380679016555</span>
								</li>
								<li class="d-flex">
									<span class="color-grey-700">ID</span>
									<span>976433</span>
								</li>
								<li class="d-flex">
									<span class="color-grey-700">Created at</span>
									<span>Apr 29, 2022</span>
								</li>
								<li class="d-flex">
									<span class="color-grey-700">Client is on a billing agreement</span>
									<span>No</span>
								</li>
							</ul>
						</v-card>
						<v-card variant="flat" class="overviewTab">
							<h3>Your Notifications</h3>
							<ul class="smallText-15 overviewList">
								<li class="d-flex align-center">
									<input type="checkbox" id="notifAuth" class="form-check-input me-2 greyscale-1">
									<label for="notifAuth" class="my-0">Account authorization notifications</label>
								</li>
								<li class="d-flex align-center">
									<input type="checkbox" id="notifBilling" class="form-check-input me-2 greyscale-1">
									<label for="notifBilling" class="my-0">Billing and service related notifications</label>
								</li>
								<li class="d-flex align-center">
									<input type="checkbox" id="notifGeneral" class="form-check-input me-2 greyscale-1">
									<label for="notifGeneral" class="my-0">General announcements</label>
								</li>
								<li class="d-flex align-center">
									<input type="checkbox" id="notifTech" class="form-check-input me-2 greyscale-1">
									<label for="notifTech" class="my-0">Technical announcements</label>
								</li>
							</ul>
						</v-card>
					</div>
				</v-window-item>
				<v-window-item value="2">
					<v-btn density="default" variant="tonal" class="my-3" @click="dialogInvite=true">
						Invite User
					</v-btn>
					<v-table density="compact" class="tableMain">
						<thead class="bg-grey-200">
						<tr>
							<th class="text-left">Email
								<img src="/images/arrows/down.svg" class="ms-1">
							</th>
							<th class="text-left">Accepted invite
								<img src="/images/arrows/down.svg" class="ms-1">
							</th>
							<th class="text-left">Roles
								<img src="/images/arrows/down.svg" class="ms-1">
							</th>
							<th class="text-left"></th>
						</tr>
						</thead>
						<tbody>
						<tr
							v-for="item in table"
							:key="item.id"
							:class="{bold:item.id===ownerId}"
						>
							<td>{{item.id===ownerId ? item.email + ' (you)' : item.email}}</td>
							<td>{{item.invited ? 'Yes' : 'No'}}</td>
							<td>
								<span class="role" v-for="role in item.roles" :key="role">{{role}}</span>
							</td>
							<td class="text-end cursor-pointer"><img src="/images/table/more.svg"></td>
						</tr>
						</tbody>
					</v-table>
					<div class="settingTable">
						<div class="tableList">
							<span>Show items</span>
							<select name="tableListInstance" class="tableSizeList form-select" v-model="sizeList" id="tableListInstance">
								<option value="10">10</option>
								<option value="5">5</option>
								<option value="30">30</option>
								<option value="50">50</option>
							</select>
							<span>of {{table.length}}</span>
						</div>
						<div class="tablePage">
							<v-pagination
								class="justify-end"
								density="comfortable"
								v-model="page"
								:length="Math.ceil(table.length / sizeList)"
								active-color="primary-600"
							></v-pagination>
						</div>
					</div>
				</v-window-item>
				<v-window-item value="3">

				</v-window-item>
			</v-window>
		</div>
	</v-card>
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
	export default {
		data(){
			return{
				ownerId: 1,
				tab: '1',
				table: [
					{id: 1, email: 'mymail@mail.com', roles: ['Owner'], invited: true},
					{id: 2, email: 'programmer@mail.ru', roles: ['Developer'], invited: false},
					{id: 3, email: 'accountant@mail.ru', roles: ['Accountant', 'Role2', 'Role3'], invited: true},
				],
				sizeList: 10,
				page: 1,
				dialogInvite: false,
			}
		},

	}
</script>

<style>
	.listInfoMain{
		display: flex;
		justify-content: space-between;
		gap: 20px;
	}
	.overviewTab{
		flex: 1;
		border-radius: 4px;
		box-shadow: var(--shadow-for-blocks);
		padding: 16px 20px;
		border: solid 1px rgb(var(--v-theme-grey-350));
	}
	.overviewList li{
		margin: 6px 0;
	}
	.overviewList li span:first-child{
		min-width: 300px;
	}
	.role{
		padding: 3px 4px;
		border-radius: 4px;
		font-size: 12px;
		background: rgb(var(--v-theme-grey-300));
		margin: 5px;
	}
	tr.bold{
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