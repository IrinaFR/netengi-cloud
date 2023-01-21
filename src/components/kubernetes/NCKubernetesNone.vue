<template>
	<div class="infoPageMain">
		<v-card variant="flat" class="bg-grey-100 text-center kubernetesInfo pa-5">
			<h1>Everything is simple with Kubernetes</h1>
			<p class="my-3 text-center">Set up your kubernetes cluster quickly. <br>
				We focus on your server, you focus on your business.</p>
			<v-btn density="default" to="/kubernetes/create" class="width-fit-content" variant="tonal">Create a Kubernetes Cluster</v-btn>
		</v-card>
		<v-card class="blockBanner">
			<v-img class="close" src="/images/general/close.svg"></v-img>
			<div class="player grayscaleTheme">
				<v-img src="/images/instances/play.svg"></v-img>
			</div>
			<div class="banner grayscaleTheme">
				<v-img class="lineBlock" src="/images/menu/kubernetes.svg"></v-img>
				<v-img class="whiteBox" src="/images/instances/whiteBox.svg"></v-img>
			</div>
			<div class="textBanner">
				<div class="greyTitle">Video Instruction</div>
				<div class="request">How create my first a kubernetes cluster?</div>
			</div>
		</v-card>
	</div>
	<div class="d-flex gap-15 flex-md-nowrap flex-wrap justify-space-between mt-5">
		<v-card variant="flat" class="bg-grey-100 pa-7 flex-grow-1">
			<h3>Simplify Kubernetes</h3>
			<p class="mt-4">Netengi Kubernetes allows you to streamline your automated application deployments with monitoring, instance replication, cluster scheduling, and seamless application releases.</p>
		</v-card>
		<v-card variant="flat" class="bg-grey-100 pa-7 flex-grow-1">
			<h3>Save time with guided configuration</h3>
			<p class="mt-4">We guide you through the steps to create and connect to your cluster and provide guides to help you deploy an application and add additional resources like persistent storage and load balancers.</p>
		</v-card>
		<v-card variant="flat" class="bg-grey-100 pa-7 flex-grow-1">
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