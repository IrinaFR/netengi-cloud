<template>
	<div class="mainPage" v-if="$route.name==='instances'">
		<div class="titleWithBtn">
			<h1 class="pageTitle">Instances</h1>
			<div class="btnHide" @click="hideQuotas=!hideQuotas">
				<v-img src="/images/instances/hide-quotas.svg"></v-img>
				{{hideQuotas ? 'show' : 'hide'}} quotas
			</div>
		</div>
		<div :class="['blockQuotas', {hide:hideQuotas}]">
			<NCAdditionalQuotas/>
		</div>
		<NCInstancesTable v-if="showTable"/>
		<NCInstancesNone v-else/>
		<br>
		<button @click="showTable=!showTable">Сменить дизайн</button>
	</div>
	<router-view/>
</template>

<script>
import NCAdditionalQuotas from '@/components/additional/NCAdditionalQuotas';
import NCInstancesNone from '@/components/instances/NCInstancesNone';
import NCInstancesTable from '@/components/instances/NCInstancesTable';
export default {
	data(){
		return {
			showTable:false,
			hideQuotas: false
		}
	},
	components: {NCAdditionalQuotas,NCInstancesNone,NCInstancesTable},
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
</style>