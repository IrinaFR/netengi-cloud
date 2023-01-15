<template>
	<div>
		<Doughnut :data="{datasets}" :options="options" width="60px" :style="style" />
	</div>
	<div v-if="label">
		<p>{{label}}
			<img src="/images/info.svg" class="ms-2">
		</p>
		<b>{{count}}</b>
	</div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
	props: {
		datasets: Array,
		label: {
			type: String,
			default: ''
		},
		count: {
			type: [Number, String],
			default: 0
		}
	},
	components: {
		Doughnut
	},
	data() {
		return {
			style: {
				width: '60px',
				height: '60px'
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
			},
		}
	}
}
</script>
