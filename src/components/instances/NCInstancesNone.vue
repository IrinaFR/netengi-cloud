<template>
<div class="infoCreateInstance">
	<div class="blockWithBtn">
		<div class="title">You have no instances right now.</div>
		<v-btn density="default" variant="tonal" to="/instances/create">Create Instance</v-btn>
		<div class="btnLern">
			<v-img src="/images/instances/link.svg"></v-img>
			<span>Learn more about instances</span>
		</div>
	</div>
	<v-card class="blockBanner">
		<v-img class="close" src="/images/instances/close.svg"></v-img>
		<div class="player">
			<v-img src="/images/instances/play.svg"></v-img>
		</div>
		<div class="banner">
			<v-img class="lineBlock" src="/images/instances/blueBlock.svg"></v-img>
			<v-img class="lineBlock" src="/images/instances/blueBlockEmpty.svg"></v-img>
			<v-img class="lineBlock" src="/images/instances/blueBlock.svg"></v-img>
			<v-img class="lineBlock" src="/images/instances/blueShadow.svg"></v-img>
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
	.infoCreateInstance{
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
		height: 90px;
		right: 9px;
		z-index: 1;
		position: absolute;
		width: 221px;
	}
	.lineBlock:first-child{
		bottom: 75px
	}
	.lineBlock:nth-child(2){
		bottom: 100px;
	}
	.lineBlock:nth-child(3){
		bottom: 125px;
	}
	.lineBlock:nth-child(4){
		width: 53px;
		right: 96px;
		top: -14px;
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