<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Kubernetes Clusters</span>
		</div>
		<div class="pageTitle my-4">Create a new Kubernetes Cluster</div>
		<div class="listSteps">
			<div
				class="step"
				v-for="(tab, idx) in tabs" :key="idx"
				:class="{active:idx===activeTab, done:idx<activeTab}"
			>
				<div class="stepTitle">{{ tab.name }}
					<img src="/images/form/checked.svg" class="ms-2">
				</div>
			</div>
		</div>
		<suspense>
			<keep-alive>
				<NCKubernetesCreateConfigure v-if="!activeTab" @change="changeTab"/>
				<NCKubernetesCreateCluster v-else-if="activeTab===1" @change="changeTab"/>
				<NCKubernetesCreatePools v-else-if="activeTab===2" @change="changeTab"/>
				<NCKubernetesCreateSummary @change="changeTab" v-else/>
			</keep-alive>
		</suspense>
	</div>
</template>

<script>
	import NCKubernetesCreateConfigure from '@/components/kubernetes/create/NCKubernetesCreateConfigure';
	import NCKubernetesCreateCluster from '@/components/kubernetes/create/NCKubernetesCreateCluster';
	import NCKubernetesCreatePools from '@/components/kubernetes/create/NCKubernetesCreatePools';
	import NCKubernetesCreateSummary from '@/components/kubernetes/create/NCKubernetesCreateSummary';
	export default {
		data(){
			return {
				activeTab: 0,
				tabs: [
					{name: 'Configure Cluster Type'},
					{name: 'Create Cluster'},
					{name: 'Node Pools'},
				]
			}
		},
		methods: {
			changeTab(next){
				next ? this.activeTab++ : this.activeTab--
			}
		},
		components: {
			NCKubernetesCreateConfigure, NCKubernetesCreateCluster,
			NCKubernetesCreatePools, NCKubernetesCreateSummary
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
