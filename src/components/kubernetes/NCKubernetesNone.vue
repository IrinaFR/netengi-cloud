<template>
	<div class="infoCreateInstance">
		<v-card variant="flat" class="bg-grey-100 kubernetesInfo">
			<h1>Everything is simple with Kubernetes</h1>
			<p class="my-3 text-center">Set up your kubernetes cluster quickly. <br>
				We focus on your server, you focus on your business.</p>
			<v-btn density="default" to="/kubernetes/create" class="width-fit-content" variant="tonal">Create a Kubernetes Cluster</v-btn>
		</v-card>
		<v-card class="blockBanner">
			<v-img class="close" src="/images/instances/close.svg"></v-img>
			<div class="player">
				<v-img src="/images/instances/play.svg"></v-img>
			</div>
			<div class="banner">
				<v-img class="lineBlock" src="/images/menu/kubernetes.svg"></v-img>
				<v-img class="whiteBox" src="/images/instances/whiteBox.svg"></v-img>
			</div>
			<div class="textBanner">
				<div class="greyTitle">Video Instruction</div>
				<div class="request">How create my first a kubernetes cluster?</div>
			</div>
		</v-card>
	</div>
	<div class="d-flex gap-15 flex-wrap justify-space-between mt-5">
		<v-card variant="flat" class="bg-grey-100 w-25 pa-7 flex-grow-1">
			<h3>Simplify Kubernetes</h3>
			<p class="mt-4">Netengi Kubernetes allows you to streamline your automated application deployments with monitoring, instance replication, cluster scheduling, and seamless application releases.</p>
		</v-card>
		<v-card variant="flat" class="bg-grey-100 w-25 pa-7 flex-grow-1">
			<h3>Save time with guided configuration</h3>
			<p class="mt-4">We guide you through the steps to create and connect to your cluster and provide guides to help you deploy an application and add additional resources like persistent storage and load balancers.</p>
		</v-card>
		<v-card variant="flat" class="bg-grey-100 w-25 pa-7 flex-grow-1">
			<h3>Focus more on your business</h3>
			<p class="mt-4">Netengi Kubernetes allows you to streamline your automated application deployments with monitoring, instance replication, cluster scheduling, and seamless application releases.</p>
		</v-card>
	</div>
</template>

<style>
	.kubernetesInfo{
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.infoCreateInstance{
		display: flex;
		width: 100%;
		gap: 30px;
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
		height: 70px;
		bottom: 100px;
		right: 17px;
		z-index: 1;
		position: absolute;
		width: 221px;
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