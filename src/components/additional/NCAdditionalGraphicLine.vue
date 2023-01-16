<template>
	<div class="blockChart">
		<Line :data="data" :options="options"/>
	</div>
</template>

<script>
import { Line } from 'vue-chartjs'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
export default {
	components:{Line},
	props:{
		dataSet:Array
	},
	data(){
		return{
			data:{
				labels: ['Oct, 1', '6 AM', '12 AM', '6 PM',],
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
}
</script>

<style scoped>
	.blockChart{
		height: 230px;
	}
</style>