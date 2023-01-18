<template>
	<div>
		<Doughnut :data="{datasets}" :options="options" :style="style" />
	</div>
	<div v-if="label">
		<p>{{label}}
			<v-menu open-on-hover>
				<template v-slot:activator="{ props }">
					<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
				<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
			</v-menu>
		</p>
		<b>{{count}}</b>
	</div>
</template>

<script>
import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement)

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
