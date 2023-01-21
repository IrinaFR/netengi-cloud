<template>
	<div class="services">
		<v-card variant="flat" class="serviceCard bg-grey-100" v-for="(service, idx) in services" :key="idx">
			<div>
				<h3 class="d-block color-grey-800"><b>{{service.title}}</b></h3>
				<div class="smallText-15 my-3 color-grey-700">{{service.info}}</div>
				<v-card variant="flat" class="d-flex align-center bg-grey-100 px-2 grayscaleTheme">
					<img :src="`/images/menu/${service.img}.svg`" class="me-2">
					<router-link :to="service.link.url" class="color-primary-600">{{service.link.text}}</router-link>
				</v-card>
			</div>
			<img :src="`/images/menu/${service.img}.svg`" class="serviceBgImg grayscaleTheme">
		</v-card>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				services: [
					{title: 'Instances', info: 'Virtual machines for hosting IT services in the cloud.', link: {url:'/instance/create', text: 'Create Instance'}, img: 'instances'},
					{title: 'Volumes', info: 'A local volume is created only when creating a cloud server.', link: {url:'/volume/create', text: 'Create Volume'}, img: 'volumes'},
					{title: 'Networks', info: 'A local volume is created only when creating a cloud service.', link: {url:'/network/create', text: 'Create Network'}, img: 'network'},
					{title: 'Kubernetes clusters', info: 'Deploying and running productive applications.', link: {url:'/kubernetes/create', text: 'Create Сluster'}, img: 'kubernetes'},
				]
			}
		}
	}
</script>

<style>
	.services{
		display: flex;
		justify-content: space-between;
		gap: 10px;
		margin: 20px 0;
	}
	.serviceCard{
		padding: 20px 20px 120px;
		position: relative;
	}
	.serviceCard .serviceBgImg{
		position: absolute;
		width: 140px;
		height: 140px;
		left: 13px;
		bottom: -13%;
		opacity: 0.2;
	}
	@media(max-width: 840px){
		.services{
			flex-wrap: wrap;
		}
		.serviceCard{
			width: 100%;
			display: flex;
			justify-content: space-between;
			padding: 20px 80px 20px 20px;
		}
		.serviceCard .serviceBgImg{
			width: 120px;
			height: 120px;
			bottom: 0;
			right: -6%;
			left: auto;
		}
	}
</style>