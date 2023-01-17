<template>
	<div class="mainPage" v-if="$route.name==='volumes'">
		<div class="titleWithBtn">
			<h1 class="pageTitle">Volumes</h1>
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
			<v-btn density="default" to="/volumes/create" variant="tonal">Create Volumes</v-btn>
			<v-btn density="default" variant="outlined" v-if="table.length">
				<v-img src="/images/general/delete.svg"></v-img>
			</v-btn>
		</div>
		<NCVolumesTable v-if="showTable" :table="table"/>
		<NCVolumesNone v-else/>
		<br>
		<button @click="showTable=!showTable">Сменить дизайн</button>
	</div>
	<router-view/>
</template>

<script>
	import NCAdditionalQuotas from '@/components/additional/NCAdditionalQuotas'
	import NCVolumesNone from '@/components/volumes/NCVolumesNone';
	import NCVolumesTable from '@/components/volumes/NCVolumesTable';
	export default {
		data(){
			return{
				showTable:false,
				hideQuotas: true,
				table: [
					{id: 1, check: false, name: 'netengi-instance-1', zone: 'nova', size: '1GB', region: {country: 'ua', name: 'ua-central-1'}},
					{id: 2, check: false, name: 'netengi-instance-2', zone: 'nova', size: '4GB', region: {country: 'ua', name: 'ua-central-1'}},
					{id: 3, check: false, name: 'netengi-instance-3', zone: 'nova', size: '1GB', region: {country: 'ua', name: 'ua-central-1'}},
					{id: 4, check: false, name: 'netengi-instance-4', zone: 'nova', size: '8GB', region: {country: 'ua', name: 'ua-central-1'}},
					{id: 5, check: false, name: 'netengi-instance-5', zone: 'nova', size: '8GB', region: {country: 'ua', name: 'ua-central-1'}},
					{id: 6, check: false, name: 'netengi-instance-6', zone: 'nova', size: '4GB', region: {country: 'ua', name: 'ua-central-1'}},
					{id: 7, check: false, name: 'netengi-instance-7', zone: 'nova', size: '1GB', region: {country: 'ua', name: 'ua-central-1'}}
				],
			}
		},
		components: {
			NCAdditionalQuotas, NCVolumesNone, NCVolumesTable
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