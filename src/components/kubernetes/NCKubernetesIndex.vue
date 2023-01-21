<template>
	<div class="mainPage" v-if="$route.name==='kubernetes'">
		<div class="titleWithBtn">
			<h1 class="pageTitle">Kubernetes Clusters</h1>
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
		<NCKubernetesNone v-if="!showTable"/>
		<NCKubernetesTable v-else/>
		<span @click="showTable=!showTable" class="cursor-pointer mt-5">Сменить дизайн</span>
	</div>
	<router-view/>
</template>

<script>
	import NCAdditionalQuotas from '@/components/additional/NCAdditionalQuotas'
	import NCKubernetesNone from '@/components/kubernetes/NCKubernetesNone'
	import NCKubernetesTable from '@/components/kubernetes/NCKubernetesTable'
	export default {
		data(){
			return{
				hideQuotas: true,
				showTable: false
			}
		},
		components: {
			NCAdditionalQuotas, NCKubernetesNone, NCKubernetesTable
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


	.blockWithBtn{
		margin-right: 10px;
		flex: auto;
	}
	.blockWithBtn .v-btn{
		margin-bottom: 20px;
	}

	.title{
		font-weight: 400;
		font-size: 15px;
		line-height: 20px;
		margin-bottom: 20px;
	}
	.close{
		width: 20px;
		position: absolute;
		top: 20px;
		right: 20px;
		cursor: pointer;
	}

	.request{
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		color: rgb(var(--v-theme-grey-900));
	}
	.btnLern{
		font-weight: 500;
		font-size: 15px;
		color: #4671F6;
		cursor: pointer;
		line-height: 20px;
	}
	.btnLern span{
		position: relative;
		line-height: 20px;
		top: -4px;
	}
	.btnLern .v-img{
		display: inline-block;
		width: 20px;
		margin-right: 10px;
	}
</style>