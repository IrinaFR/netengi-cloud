<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Networks</span>
		</div>
		<div class="pageTitle my-4">Create a new Network</div>
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
				<NCNetworksCreateNetwork v-if="!activeTab" @change="changeTab"/>
				<NCNetworksCreateSubnet v-else-if="activeTab===1" @change="changeTab"/>
				<NCNetworksCreateRouter v-else-if="activeTab===2" @change="changeTab"/>
				<NCNetworksCreateExtraOptions v-else-if="activeTab===3" @change="changeTab"/>
				<NCNetworksCreateSummary @change="changeTab" v-else/>
			</keep-alive>
		</suspense>

	</div>
</template>

<script>
	import NCNetworksCreateNetwork from '@/components/networks/create/NCNetworksCreateNetwork';
	import NCNetworksCreateSubnet from '@/components/networks/create/NCNetworksCreateSubnet';
	import NCNetworksCreateRouter from '@/components/networks/create/NCNetworksCreateRouter';
	import NCNetworksCreateExtraOptions from '@/components/networks/create/NCNetworksCreateExtraOptions';
	import NCNetworksCreateSummary from '@/components/networks/create/NCNetworksCreateSummary';
	export default {
		data(){
			return {
				activeTab: 0,
				tabs: [
					{name: 'Network', description: ''},
					{name: 'Subnet', description: ''},
					{name: 'Router', description: 'This step will be available if you enable Internet access for this network.'},
					{name: 'Extra Options', description: ''}
				]
			}
		},
		methods: {
			changeTab(next){
				next ? this.activeTab++ : this.activeTab--
			}
		},
		components: {
			NCNetworksCreateNetwork, NCNetworksCreateSubnet,
			NCNetworksCreateRouter, NCNetworksCreateExtraOptions,
			NCNetworksCreateSummary
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
