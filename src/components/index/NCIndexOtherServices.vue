<template>
	<label class="titleBlock">Other services</label>
	<div class="otherServices">
		<v-card variant="outlined" :to="service.url" class="otherServicesCard"  v-for="(service, idx) in services" :key="idx">
			<img :src="`/images/menu/${service.img}.svg`" class="grayscaleTheme me-2">
			<div>
				<div class="otherServicesTitle grayscaleTheme">{{service.title}}</div>
				<div class="otherServicesInfo">{{service.info}}</div>
			</div>
		</v-card>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				services: [
					{title: 'Spin up a Load Balancer', info: 'Spin up a Load Balancer', img: 'loadBalancer', url: '/'},
					{title: 'Build a PHP web application', info: 'Install Linux, Apache, MySQL, PHP (LAMP) on Netengi Click App', img: 'loadBalancer', url: '/'},
					{title: 'Go containerized with Docker', info: 'Install and use Docker containers to build containerized applications', img: 'loadBalancer', url: '/'},
					{title: 'Spin up a Load Balancer', info: 'Spin up a Load Balancer', img: 'loadBalancer', url: '/'},
					{title: 'Build a PHP web application', info: 'Install Linux, Apache, MySQL, PHP (LAMP) on Netengi Click App', img: 'loadBalancer', url: '/'},
				]
			}
		}
	}
</script>

<style>
	.otherServices{
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	.otherServicesCard{
		width: calc(100% / 3 - 7px);
		padding: 15px 20px;
		display: flex;
		align-items: start;
		border: 1px solid rgb(var(--v-theme-grey-350));
	}
	.otherServicesCard img{
		min-width: 24px;
		height: 24px;
	}
	.otherServicesTitle{
		font-size: 15px;
		font-weight: 700;
		line-height: 20px;
		color: #4671F6;
	}
	.otherServicesInfo{
		font-size: 15px;
		font-weight: 400;
		line-height: 20px;
		color: rgb(var(--v-theme-grey-600));
	}
	@media(max-width: 768px){
		.otherServicesCard{
			width: 100%;
		}
	}
</style>