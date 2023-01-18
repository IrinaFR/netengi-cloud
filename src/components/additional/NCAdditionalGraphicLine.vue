<template>
	<div class="blockChart">
		<Line :data="data" :options="options"/>
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