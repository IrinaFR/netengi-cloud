<template>
<div class="container">
	<div class="titleWithBtn">
		<h1>Instances</h1>
		<div class="btnHide">
			<v-img src="/images/instances/hide-quotas.svg"></v-img>
			hide quotas
		</div>
	</div>
	<NCAdditionalQuotes/>
	<NCInstancesNone/>
</div>
</template>

<script>
import NCAdditionalQuotes from '@/components/additional/NCAdditionalQuotas';
import NCInstancesNone from '@/components/instances/NCInstancesNone';
export default {
	components: {NCAdditionalQuotes,NCInstancesNone}
}
</script>

<style scoped>
	.container{
		padding: 0 24px 0 48px;
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