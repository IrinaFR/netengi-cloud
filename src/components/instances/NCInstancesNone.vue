<template>
<div class="infoPageMain pageInstances">
	<div class="blockWithBtn">
		<div class="title">You have no instances right now.</div>
		<v-btn density="default" variant="tonal" to="/instances/create">Create Instance</v-btn>
		<div class="btnLern">
			<v-img src="/images/general/link.svg"></v-img>
			<span>Learn more about instances</span>
		</div>
	</div>
	<v-card class="blockBanner">
		<v-img class="close" src="/images/general/close.svg"></v-img>
		<div class="player grayscaleTheme">
			<v-img src="/images/instances/play.svg"></v-img>
		</div>
		<div class="banner grayscaleTheme">
			<img class="lineBlock" src="/images/instances/instances.svg">
			<v-img class="whiteBox" src="/images/instances/whiteBox.svg"></v-img>
		</div>
		<div class="textBanner">
			<div class="greyTitle">Video Instruction</div>
			<div class="request">How create my first an instance?</div>
		</div>
	</v-card>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
	.infoPageMain{
		display: flex;
		width: 100%;
	}
	.blockWithBtn{
		margin-right: 10px;
		flex: auto;
	}
	.blockWithBtn .v-btn{
		margin-bottom: 20px;
	}
	.pageInstances .lineBlock{
		height: 130px;
		bottom: 70px;
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