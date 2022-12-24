<template>
	<v-app :theme="theme">
		<v-main>

		</v-main>
	</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'App',
	components: {
		HelloWorld,
	},
	data(){
		return {
			theme: 'lightTheme'
		}
	}
}
</script>
