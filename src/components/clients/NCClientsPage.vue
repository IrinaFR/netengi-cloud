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
					<NCClientsUsers/>
				</v-window-item>
				<v-window-item value="3">
				<!--no design-->
				</v-window-item>
			</v-window>
		</div>
	</v-card>
</template>

<script>
	import NCClientsUsers from '@/components/clients/NCClientsUsers'
	export default {
		components: {
			NCClientsUsers
		},
		data(){
			return{
				tab: '1',
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