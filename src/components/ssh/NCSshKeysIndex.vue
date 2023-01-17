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
		<div class="listBtn">
			<v-btn density="default" to="/ssh-keys/create" variant="tonal">Create SSH Key</v-btn>
			<v-btn density="default" to="/ssh-keys/import" variant="outlined">
				<v-img src="/images/general/import.svg"></v-img>
				<span>Import</span>
			</v-btn>
			<v-btn density="default" variant="outlined" v-if="table.length">
				<v-img src="/images/general/delete.svg"></v-img>
			</v-btn>
		</div>
		<NCSshKeysTable v-if="showTable" :table="table"/>
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
				table: [
					{id: 1, check: false, name: 'netengi-sshkey-1'},
					{id: 2, check: false, name: 'netengi-sshkey-2'},
					{id: 3, check: false, name: 'netengi-sshkey-3'},
					{id: 4, check: false, name: 'netengi-sshkey-4'},
					{id: 5, check: false, name: 'netengi-sshkey-5'},
					{id: 6, check: false, name: 'netengi-sshkey-6'},
					{id: 7, check: false, name: 'netengi-sshkey-7'}
				],
			}
		},
		components: {
			NCAdditionalQuotas, NCSshKeysNone, NCSshKeysTable
		}
	}
</script>

<style scoped>
	.listBtn{
		display: flex;
		margin-bottom: 10px;
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