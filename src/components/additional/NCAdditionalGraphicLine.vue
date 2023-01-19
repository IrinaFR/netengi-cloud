<template>
	<div class="blockChart">
		<canvas :id="idCanvas"/>
	</div>
	<div class="listTags">
		<div class="infoTag" v-for="(item,index) of dataSet" :key="index">
			<div class="circle" :style="'background:'+item.borderColor"></div>
			<div class="name">{{ item.label }}</div>
			<div class="totalCount">{{item.valueTag}}</div>
		</div>
	</div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
	props:{
		dataSet:Array
	},
	data(){
		return{
			idCanvas:'chart-'+new Date().getTime(),
			data:{
				labels: ['Oct, 1', '6 AM', '5 AM', '4 AM', '3 AM', '2 AM', '1 AM', '6 AM', '5 AM', '4 AM', '3 AM', '2 AM', '1 AM'],
				datasets: this.$props.dataSet
			},
			options:{
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false
					}
				}
			}
		}
	},
	methods:{
		$_additional_graphicLine_set(){
			const chart = document.getElementById(this.idCanvas).getContext('2d')
			let gradient = chart.createLinearGradient(0, 0, 0, 250);
			gradient.addColorStop(0, 'rgba(70, 113, 246, 0.5)');
			gradient.addColorStop(1, 'rgba(217, 217, 217, 0)');
			this.data.datasets[0].backgroundColor = gradient
			new Chart(chart, {
				type: 'line',
				data: this.data,
				options: this.options
			});
		}
	},
	mounted() {
		this.$nextTick(()=>{
			this.$_additional_graphicLine_set()
		})
	}
}
</script>

<style scoped>
	.blockChart{
		height: 230px;
	}
	.listTags{
		margin: 17px 0 20px 0;
	}
	.infoTag{
		height: 23px;
		display: flex;
		padding: 4px 7px;
		border-radius: 4px;
		background: rgb(var(--v-theme-grey-200));
	}
	.circle{
		width: 8px;
		height: 8px;
		border-radius: 5px;
		background: red;
		margin: auto 6px auto 0;
	}
	.name{
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
		color: rgb(var(--v-theme-grey-700));
		margin-right: 8px;
	}
	.totalCount{
		font-weight: 600;
		font-size: 12px;
		line-height: 15px;
		color: rgb(var(--v-theme-grey-900));
	}
	.infoTag + .infoTag{
		margin-left: 8px;
	}
</style>