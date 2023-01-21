<template>
	<div class="mainPage" v-if="$route.name==='instances'">
		<div class="titleWithBtn">
			<h1 class="pageTitle">Instances</h1>
			<div class="btnHide grayscaleTheme" @click="hideQuotas=!hideQuotas">
				<v-img src="/images/instances/hide-quotas.svg"></v-img>
				{{hideQuotas ? 'show' : 'hide'}} quotas
			</div>
		</div>
		<v-expansion-panels v-model="hideQuotas" variant="popout" class="quotasAccordion mt-3 pa-0">
			<v-expansion-panel bg-color="background" :value="true">
				<v-expansion-panel-text>
					<NCAdditionalQuotas/>
				</v-expansion-panel-text>
			</v-expansion-panel>
		</v-expansion-panels>
		<NCInstancesTable v-if="showTable"/>
		<NCInstancesNone v-else/>
		<br>
		<button @click="showTable=!showTable">Сменить дизайн</button>

		<div class="mt-5">
			<p>Show snackbar</p>
			<v-btn variant="tonal" @click="showNotifier(0)">Info</v-btn>
			<v-btn variant="tonal" @click="showNotifier(1)">Warning</v-btn>
			<v-btn variant="tonal" @click="showNotifier(2)">Error</v-btn>
		</div>
	</div>
	<router-view/>
</template>

<script>
import NCAdditionalQuotas from '@/components/additional/NCAdditionalQuotas';
import NCInstancesNone from '@/components/instances/NCInstancesNone';
import NCInstancesTable from '@/components/instances/NCInstancesTable';
// import NCAdditionalNotifications from '@/components/additional/NCAdditionalNotifications';
export default {
	data(){
		return {
			showTable:false,
			hideQuotas: true,
			notif: [
				{type: 'info', title: 'Information', text: 'There is very important information here!'},
				{type: 'warning', title: 'Warning', text: 'This is an example of really long description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisduje bibendum felis eget congue condimentum.'},
				{type: 'danger', title: 'Error', text: 'There is very important information here'}
			]
		}
	},
	components: {NCAdditionalQuotas,NCInstancesNone,NCInstancesTable},
	methods: {
		showNotifier(idx){
			this.$notifier.showMessage({ type: this.notif[idx].type, title: this.notif[idx].title, text: this.notif[idx].text })
		}
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
	.btnHide{
		display: flex;
		font-weight: 500;
		font-size: 15px;
		color: #4671F6;
		cursor: pointer;
	}
	.btnHide .v-img{
		width: 20px;
		margin-right: 9px;
	}
	.titleWithBtn h1, .btnHide{
		line-height: 51px;
	}
</style>