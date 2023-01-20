<template>
	<div class="qoutas">
		<v-card variant="outlined" class="quoteCard border-grey-200" v-for="(quote, idx) in qoutas" :key="idx">
			<div class="d-flex justify-center">
				<div class="qouteDiagram">
					<Pie :data="{datasets:[{backgroundColor, data:[quote.used, (quote.all-quote.used)], borderColor, borderWidth: 4}]}" :options="options" :style="style"/>
				</div>
			</div>
			<div class="mt-2">
				<div class="quoteTitle colo-grey-800">{{quote.title}}</div>
				<div class="quoteInfo color-grey-700">Used {{quote.used + quote.type}} of {{quote.all + quote.type}}</div>
			</div>
		</v-card>
	</div>
</template>

<script>
	import { Chart as ChartJS, ArcElement } from 'chart.js'
	import { Pie } from 'vue-chartjs'

	ChartJS.register(ArcElement)
	export default {
		data(){
			return{
				qoutas: [
					{title: 'Instances',  type: '', used: 4, all: 10},
					{title: 'vCPUs', type: '', used: 1, all: 10},
					{title: 'RAM', type: 'GB', used: 13.8, all: 64},
					{title: 'Storage', type: 'GB', used: 0, all: 1.46},
					{title: 'Volumes', type: '', used: 6, all: 10},
					{title: 'IP', type: '', used: 0, all: 10},
				],

				backgroundColor: (ctx) => {
					const canvas = ctx.chart.ctx;
					const gradient = canvas.createLinearGradient(0,0,0,82);

					gradient.addColorStop(0, this.linear.first);
					gradient.addColorStop(1, this.linear.second);

					return ['#6288FF', gradient];
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
				},
				style: {
					width: '82px',
					height: '82px'
				},
			}
		},
		computed: {
			borderColor(){
				return this.$root.theme === 'dark' ? '#242424' : '#FFFFFF'
			},
			linear(){
				return {
					first: this.$root.theme === 'dark' ? '#535353' : '#BDCEEE',
					second: this.$root.theme === 'dark' ? '#747474' : '#F0F5FF'
				}
			}
		},
		components: {
			Pie
		}
	}
</script>

<style>
.qoutas{
	display: flex;
	justify-content: space-between;
	gap: 10px;
	margin: 20px 0;
}

.quoteCard{
	text-align: center;
	width: 100%;
	padding: 28px 20px;
	border: solid 1px rgb(var(--v-theme-grey-350));
}
.quoteTitle{
	font-weight: 700;
	font-size: 18px;
}
.quoteInfo{
	font-size: 14px;
	line-height: 20px;
}
.qouteDiagram{
	width: 82px;
	max-height: 82px;
	height: 82px;
}
@media(max-width: 1080px){
	.qoutas{
		flex-wrap: wrap;
	}
	.quoteCard{
		flex: 32% 1;
	}
}
@media(max-width: 640px){
	.qoutas{
		flex-wrap: nowrap;
		overflow-x: scroll;
	}
	.quoteCard{
		flex: none;
		width: 175px;
	}
}
</style>
