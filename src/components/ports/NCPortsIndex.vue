<template>
	<div class="mainPage" v-if="$route.name==='ports'">
		<div class="titleWithBtn">
			<h1 class="pageTitle">Ports</h1>
			<div class="btnHide" @click="hideQuotas=!hideQuotas">
				<v-img src="/images/instances/hide-quotas.svg"></v-img>
				{{hideQuotas ? 'show' : 'hide'}} quotas
			</div>
		</div>
		<div :class="['blockQuotas', {hide:hideQuotas}]">
			<NCAdditionalQuotas/>
		</div>
		<NCPortsTable v-if="showTable"/>
		<NCPortsNone v-else/>
		<br>
		<button @click="showTable=!showTable">Сменить дизайн</button>
	</div>
	<router-view/>
</template>

<script>
	import NCAdditionalQuotas from '@/components/additional/NCAdditionalQuotas'
	import NCPortsNone from '@/components/ports/NCPortsNone';
	import NCPortsTable from '@/components/ports/NCPortsTable';
	export default {
		data(){
			return{
				showTable:false,
				hideQuotas: false
			}
		},
		components: {
			NCAdditionalQuotas, NCPortsNone, NCPortsTable
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

</style>