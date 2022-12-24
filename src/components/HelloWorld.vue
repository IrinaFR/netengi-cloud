<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<v-btn @click="theme(1)" text rounded>Dark Theme</v-btn>
				<v-btn @click="theme()" text rounded>Light Theme</v-btn>
				<v-img
					:src="require('../assets/logo.svg')"
					class="my-3"
					contain
					height="200"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'HelloWorld',
	methods: {
		theme(dark){

			dark ? this.$root.theme = 'darkTheme' : this.$root.theme = 'lightTheme'
		}
	},
	data(){
		return{

		}
	}
}
</script>
