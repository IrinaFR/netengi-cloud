<template>
	<div class="infoPageMain">
		<div class="blockWithBtn">
			<div class="title">You have no security groups right now.</div>
			<div class="listBtn">
				<v-btn density="default" to="/security/create" variant="tonal">Create Security Group</v-btn>
				<v-btn density="default" variant="outlined">
					<v-img src="/images/general/delete.svg"></v-img>
				</v-btn>
			</div>

			<div class="btnLern">
				<v-img src="/images/general/link.svg"></v-img>
				<span>Learn more about security groups</span>
			</div>
		</div>
		<v-card class="blockBanner">
			<v-img class="close" src="/images/general/close.svg"></v-img>
			<div class="player grayscaleTheme">
				<v-img src="/images/instances/play.svg"></v-img>
			</div>
			<div class="banner grayscaleTheme">
				<v-img class="lineBlock" src="/images/menu/security.svg"></v-img>
				<v-img class="whiteBox" src="/images/instances/whiteBox.svg"></v-img>
			</div>
			<div class="textBanner">
				<div class="greyTitle">Video Instruction</div>
				<div class="request">How create my first a security group?</div>
			</div>
		</v-card>
	</div>
</template>

<style>
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