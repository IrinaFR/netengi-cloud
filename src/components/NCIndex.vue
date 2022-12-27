<template>
	<div class="mainIndex">
		<h1 class="pageTitle">Welcome, Dmitriy!</h1>
		<v-card variant="text" class="alertCard">
			<router-link to="/" class="d-flex">
				<img src="/images/index/document.svg" class="me-3">
				<div>
					<div class="alertTitle">Getting started with Netengi</div>
					<div class="alertInfo">Learn the fundamentals and find valuable information to get the most out of Netengi.</div>
				</div>
			</router-link>
		</v-card>
		<NCAdditionalQuotes/>
		<NCIndexServices/>
		<NCIndexOtherServices/>

		<div class="footerMain">
			<NCIndexLogs/>
			<NCIndexGettingStart/>
		</div>
	</div>
</template>
<script>
	import NCAdditionalQuotes from '@/components/additional/NCAdditionalQuotas';
	import NCIndexServices from '@/components/index/NCIndexServices';
	import NCIndexOtherServices from '@/components/index/NCIndexOtherServices';
	import NCIndexLogs from '@/components/index/NCIndexLogs';
	import NCIndexGettingStart from '@/components/index/NCIndexGettingStart';
	export default {
		data(){
			return{

			}
		},
		components: {
			NCAdditionalQuotes, NCIndexServices, NCIndexOtherServices,
			NCIndexLogs, NCIndexGettingStart
		},
		methods: {

		},
	}
</script>
<style>
.mainIndex{
	padding: 10px 30px;
}
.alertCard{
	background: rgb(var(--v-theme-background));
	border: 1px solid rgb(var(--v-theme-grey-350));
	box-shadow: var(--v-theme-shadow-for-blocks);
	border-radius: 8px;
	padding: 14px;
	margin-top: 20px;
}
.alertCard a{
	text-decoration: none;
	display: flex;
	align-items: center;
}
.alertTitle{
	font-size: 18px;
	line-height: 24px;
	color: #4671F6;
}
.alertInfo{
	font-size: 15px;
	line-height: 20px;
	color: rgb(var(--v-theme-grey-600));
}



.footerMain{
	display: flex;
	justify-content: space-between;
	gap: 30px;
	margin-top: 20px;
}

</style>