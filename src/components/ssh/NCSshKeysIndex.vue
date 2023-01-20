<template>
	<div class="mainPage" v-if="$route.name==='sshKeys'">
		<div class="titleWithBtn">
			<h1 class="pageTitle">SSH Keys</h1>
			<div class="btnHide" @click="hideQuotas=!hideQuotas">
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
		<NCSshKeysTable v-if="showTable"/>
		<NCSshKeysNone v-else/>
		<br>
		<button @click="showTable=!showTable">Сменить дизайн</button>
	</div>
	<router-view/>
</template>

<script>
	import NCAdditionalQuotas from '@/components/additional/NCAdditionalQuotas'
	import NCSshKeysNone from '@/components/ssh/NCSshKeysNone';
	import NCSshKeysTable from '@/components/ssh/NCSshKeysTable';
	export default {
		data(){
			return{
				showTable:false,
				hideQuotas: true,
			}
		},
		components: {
			NCAdditionalQuotas, NCSshKeysNone, NCSshKeysTable
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