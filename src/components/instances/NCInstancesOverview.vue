<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Instances</span>
		</div>
		<div class="titleWithBtn">
			<h1 class="pageTitle">Netengi-instance-1</h1>
			<div class="listBtn">
				<v-btn class="smallGreyBtn">
					<v-img src="/images/instances/power.svg"></v-img>
				</v-btn>
				<v-btn class="smallGreyBtn">
					<v-img src="/images/instances/restart.svg"></v-img>
				</v-btn>
				<v-btn class="smallGreyBtn">
					<v-img src="/images/instances/resize.svg"></v-img>
				</v-btn>
				<v-menu>
					<template v-slot:activator="{ props }">
						<v-btn class="btnEmpty" density="default" variant="outlined" v-bind="props">
							<v-img src="/images/instances/more.svg"></v-img>
							<span>Menu</span>
						</v-btn>
					</template>
					<v-list class="listMenu">
						<v-list-item>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/rebuild.svg"/>
								Rebuild
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/rename.svg"/>
								Rename
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/plus.svg"/>
								Assign floating IP
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/minus.svg"/>
								Dissociate IP
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/password.svg"/>
								Change password
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/delete.svg"/>
								Delete
							</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</div>
		</div>
		<div class="statusBlock">
			<span class="status instanceRunning" v-if="true">
				Running
			</span>
			<span class="status instancePause" v-else>
				Pause
			</span>
			<div class="typeName">
				<div class="typeTitle">Type</div>
				<div class="name">n2.micro</div>
			</div>
		</div>
		<v-tabs v-model="tab" bg-color="background" color="primary-600">
			<v-tab value="1">Overview</v-tab>
			<v-tab value="2">Networking</v-tab>
			<v-tab value="3">Console</v-tab>
			<v-tab value="4">System Log</v-tab>
			<v-tab value="5">Backups</v-tab>
		</v-tabs>
		<NCInstancesTabsOverview v-if="tab==='1'"/>
		<NCInstancesTabsNetworking v-if="tab==='2'"/>
		<NCInstancesTabsConsole v-if="tab==='3'"/>
		<NCInstancesTabsLogs v-if="tab==='4'"/>
	</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
	data(){
		return{
			tab:'one'
		}
	},
	components: {
		'NCInstancesTabsOverview': defineAsyncComponent(() => import('@/components/instances/tabs/NCInstancesTabsOverview.vue')),
		'NCInstancesTabsNetworking': defineAsyncComponent(() => import('@/components/instances/tabs/NCInstancesTabsNetworking.vue')),
		'NCInstancesTabsConsole': defineAsyncComponent(() => import('@/components/instances/tabs/NCInstancesTabsConsole.vue')),
		'NCInstancesTabsLogs': defineAsyncComponent(() => import('@/components/instances/tabs/NCInstancesTabsLogs.vue'))
	},
	created() {
		if(this.$route.params.tab) this.tab = this.$route.params.tab
	}
}
</script>

<style scoped>
	.titleWithBtn{
		display: flex;
		height: 51px;
		justify-content: space-between;
		margin-bottom: -10px;
	}
	.titleWithBtn h1{
		line-height: 51px;
		font-weight: 500;
	}
	.listBtn {
		display: flex;
		align-items: center;
	}
	.listMenu, .listMenu .v-list-item{
		padding: 0 !important;
	}
	.btnEmpty{
		height: 30px !important;
		border-radius: 4px !important;
		font-weight: 400;
		font-size: 15px;
		line-height: 20px;
	}
	.btnEmpty span{
		font-weight: 400;
		font-size: 15px;
		line-height: 20px;
		margin-left: 5px;
	}
	.btnEmpty[aria-expanded="true"]{
		box-shadow: 0 0 0 3px #E0EAFF;
	}
	.dropDownItemMenu{
		display: flex;
		height: 36px;
		font-weight: 400;
		font-size: 15px;
		color: rgb(var(--v-theme-grey-900));
		cursor: pointer;
		width: 240px;
		line-height: 36px;
		padding-left: 12px;
	}
	.dropDownItemMenu:hover{
		background: #FCFBFC;
	}
	.dropDownItemMenu:active{
		background: rgb(var(--v-theme-grey-600))
	}
	.dropDownItemMenu .v-img{
		width: 20px;
		height: 20px;
		flex: none;
		margin: auto 8px auto 0;
	}
	.smallGreyBtn{
		height: 30px;
		width: 30px;
		min-width: unset;
		background: #F3F1F1;
		border-radius: 4px;
		box-shadow: none;
	}
	.instanceRunning{
		font-weight: 500;
		font-size: 14px;
		line-height: 20px;
		color: rgb(var(--v-theme-success));
	}
	.instanceRunning:before{
		background: rgb(var(--v-theme-success));
	}
	.instancePause{
		font-weight: 500;
		color: #D69F12;
		font-size: 14px;
		line-height: 20px;
	}
	.instancePause:before{
		background: #D69F12;
	}
	.status{
		padding-left: 18px;
		position: relative;
	}
	.status:before{
		content: '';
		position: absolute;
		height: 12px;
		width: 12px;
		left: 0;
		bottom: 0;
		top: 0;
		margin: auto;
		border-radius: 12px;
	}
	.typeName{
		margin-left: 20px;
		display: flex;
	}
	.typeTitle{
		margin-right: 6px;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		color: rgb(var(--v-theme-grey-600));
	}
	.statusBlock{
		display: flex;
		margin-bottom: 20px;
	}
	.name{
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		color: rgb(var(--v-theme-grey-900));
	}
	.v-slide-group{
		margin-bottom: 20px;
	}
</style>
