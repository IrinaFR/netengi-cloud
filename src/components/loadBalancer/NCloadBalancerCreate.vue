<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Load Balancers</span>
		</div>
		<div class="pageTitle my-4">Create a new Load Balancer</div>
		<div class="listSteps">
			<div
				class="step"
				v-for="(tab, idx) in tabs" :key="idx"
				:class="{active:idx===activeTab, done:idx<activeTab}"
			>
				<div class="stepTitle">{{ tab.name }}
					<img src="/images/form/checked.svg" class="ms-2">
				</div>
				<div class="stepDesc" v-if="tab.description">{{tab.description}}</div>
			</div>
		</div>
		<suspense>
			<keep-alive>
				<NCloadBalancerCreateDetails v-if="!activeTab" @change="changeTab"/>
				<NCloadBalancerCreateListenerDetails v-else-if="activeTab===1" @change="changeTab"/>
				<NCloadBalancerCreatePoolDetails v-else-if="activeTab===2" @change="changeTab"/>
				<NCloadBalancerCreatePoolRemembers v-else-if="activeTab===3" @change="changeTab"/>
				<NCloadBalancerCreateMonitorDetails v-else-if="activeTab===4" @change="changeTab"/>
				<NCloadBalancerCreateSummary @change="changeTab" v-else/>
			</keep-alive>
		</suspense>

	</div>
</template>

<script>
	import NCloadBalancerCreateDetails from '@/components/loadBalancer/create/NCloadBalancerCreateDetails';
	import NCloadBalancerCreateListenerDetails from '@/components/loadBalancer/create/NCloadBalancerCreateListenerDetails';
	import NCloadBalancerCreatePoolDetails from '@/components/loadBalancer/create/NCloadBalancerCreatePoolDetails';
	import NCloadBalancerCreatePoolRemembers from '@/components/loadBalancer/create/NCloadBalancerCreatePoolRemembers';
	import NCloadBalancerCreateMonitorDetails from '@/components/loadBalancer/create/NCloadBalancerCreateMonitorDetails';
	import NCloadBalancerCreateSummary from '@/components/loadBalancer/create/NCloadBalancerCreateSummary';
	export default {
		data(){
			return {
				activeTab: 0,
				tabs: [
					{name: 'Load Balancer Details'},
					{name: 'Listener Details'},
					{name: 'Pool Details'},
					{name: 'Pool Remembers'},
					{name: 'Monitor Details'}
				]
			}
		},
		methods: {
			changeTab(next){
				next ? this.activeTab++ : this.activeTab--
			}
		},
		components: {
			NCloadBalancerCreateDetails, NCloadBalancerCreateListenerDetails,
			NCloadBalancerCreatePoolDetails, NCloadBalancerCreatePoolRemembers,
			NCloadBalancerCreateMonitorDetails, NCloadBalancerCreateSummary

		}
	}
</script>

<style scoped>
.listSteps{
	display: flex;
	justify-content: space-between;
	column-gap: 10px;
	color: rgb(var(--v-theme-grey-400));
	margin: 30px 0 20px;
}
.step{
	cursor: pointer;
	flex: 1;
}
.step .stepTitle{
	font-size: 15px;
	font-weight: 700;
	padding: 8px 0;
	border-bottom: solid 2px rgb(var(--v-theme-grey-400));
}
.step .stepTitle img{
	display: none;
}
.step.done .stepTitle img{
	display: inline;
}
.step .stepDesc{
	font-size: 14px;
	padding: 10px 0;
	border-bottom: solid 1px rgb(var(--v-theme-grey-400));
}
.step.active .stepTitle,
.step.done .stepTitle{
	color: rgb(var(--v-theme-primary-600));
	border-bottom: solid 2px rgb(var(--v-theme-primary-600));
}
.step.active .stepDesc,
.step.done .stepDesc{
	color: rgb(var(--v-theme-grey-900));
	border-bottom: solid 1px rgb(var(--v-theme-primary-600));
}
</style>
