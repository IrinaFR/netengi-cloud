<template>
	<div class="mainPage" v-if="$route.name==='kubernetes'">
		<div class="titleWithBtn">
			<h1 class="pageTitle">Kubernetes Clusters</h1>
			<div class="btnHide" @click="hideQuotas=!hideQuotas">
				<v-img src="/images/instances/hide-quotas.svg"></v-img>
				{{hideQuotas ? 'show' : 'hide'}} quotas
			</div>
		</div>
		<div :class="['blockQuotas', {hide:hideQuotas}]">
			<NCAdditionalQuotas/>
		</div>
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
				hideQuotas: false,
				showTable: false
			}
		},
		components: {
			NCAdditionalQuotas, NCKubernetesNone, NCKubernetesTable
		}
	}
</script>

<style scoped>

	.blockQuotas{
		height: 230px;
		overflow: hidden;
		margin-bottom: 30px;
		transition: height .3s ease-out;
	}
	.blockQuotas.hide{
		height: 0;
	}
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
	.listBtn{
		display: flex;
		margin-bottom: 10px;
	}

	.blockWithBtn{
		margin-right: 10px;
		flex: auto;
	}
	.blockWithBtn .v-btn{
		margin-bottom: 20px;
	}
	.blockBanner{
		width: 405px;
		height: 245px;
		background: rgb(var(--v-theme-grey-300));
		border-radius: 8px;
		padding: 20px 20px 25px 20px;
		box-shadow: none;
		position: relative;
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
	.player{
		width: 80px;
		height: 80px;
		background: white;
		border-radius: 50%;
		position: absolute;
		top: 69px;
	}
	.banner{
		position: absolute;
		right: 20px;
		bottom: 0;
		width: 221px;
	}
	.whiteBox{
		width: 192px;
	}
	.lineBlock{
		height: 70px;
		bottom: 100px;
		right: 17px;
		z-index: 1;
		position: absolute;
		width: 221px;
	}
	.textBanner{
		z-index: 2;
		position: absolute;
		bottom: 25px;
		left: 20px;
	}
	.greyTitle{
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
		text-transform: uppercase;
		color: rgb(var(--v-theme-grey-600));
		margin-bottom: 6px;
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