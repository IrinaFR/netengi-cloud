<template>
	<div class="mainPage" v-if="$route.name==='security'">
		<div class="titleWithBtn">
			<h1 class="pageTitle">Security Groups</h1>
		</div>
		<NCSecurityTable v-if="showTable"/>
		<NCSecurityNone class="mt-5" v-else/>
		<br>
		<button @click="showTable=!showTable">Сменить дизайн</button>
	</div>
	<router-view/>
</template>

<script>
	import NCSecurityNone from '@/components/security/NCSecurityNone';
	import NCSecurityTable from '@/components/security/NCSecurityTable';
	export default {
		data(){
			return{
				showTable:false,
				hideQuotas: true
			}
		},
		components: {
			NCSecurityNone, NCSecurityTable
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