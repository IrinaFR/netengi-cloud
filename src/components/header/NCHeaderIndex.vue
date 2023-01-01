<template>
	<v-app-bar
	height="80"
	flat>
		<div class="btnClose" @click="changeMenu">
			<img src="/images/arrowLeft.svg">
		</div>
		<NCHeaderSearch/>

		<template v-slot:append>
			<div class="d-flex justify-lg-space-between align-center">
				<img src="/images/app_bar/terminal.svg" class="mx-2">
				<v-badge
					class="mx-2"
					color="error"
					dot
					:bordered="true"
				>
					<img src="/images/app_bar/notification.svg">
				</v-badge>
				<img src="/images/app_bar/help.svg" class="mx-2">
				<NCHeaderProfile/>
			</div>

		</template>
	</v-app-bar>
</template>

<script>
import NCHeaderSearch from '@/components/header/NCHeaderSearch'
import NCHeaderProfile from '@/components/header/NCHeaderProfile'
export default {
	emits: ['change'],
	data(){
		return {
			rail: true,
			menu: false,
			theme: false
		}
	},
	components: {
		NCHeaderSearch, NCHeaderProfile
	},
	methods: {
		changeMenu(){
			this.rail = !this.rail
			this.$emit('change', this.rail)
			localStorage.setItem('rail', this.rail)
		},
	},
	created() {
		if(localStorage.getItem('theme') === 'dark'){
			this.theme = true
		}
	}
}
</script>

<style>
	.btnClose{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
		margin: 0 15px 0 30px;
		border-radius: 50%;
		border: 1px solid rgb(var(--v-theme-grey-300));;
		background: rgb(var(--v-theme-background));
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
	}
	.btnClose img{
		width: 10px;
	}
</style>
