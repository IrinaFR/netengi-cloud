<template>
	<div class="services">
		<v-card variant="flat" class="serviceCard bg-grey-100" v-for="(service, idx) in services" :key="idx">
			<div class="serviceTitle color-grey-800">{{service.title}}</div>
			<div class="serviceInfo color-grey-700">{{service.info}}</div>
			<div class="serviceLink">
				<img :src="`/images/menu/${service.img}.svg`" class="me-2">
				<router-link :to="service.link.url" class="color-grey-800">{{service.link.text}}</router-link>
			</div>
			<img :src="`/images/menu/${service.img}.svg`" class="serviceBgImg">
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

	.serviceTitle{
		font-size: 18px;
		font-weight: 700;
		line-height: 24px;
	}
	.serviceInfo{
		font-size: 15px;
		line-height: 20px;
		margin: 8px 0;
	}
	.serviceLink{
		display: flex;
		align-items: center;
	}
	.serviceInfo img{
		margin-right: 8px;
	}
	.serviceLink a{
		text-decoration: none;
		color: rgb(var(--v-theme-primary-600));
		font-size: 15px;
	}
	.serviceCard .serviceBgImg{
		position: absolute;
		width: 140px;
		height: 140px;
		left: 13px;
		bottom: -13%;
		opacity: 0.2;
	}
</style>