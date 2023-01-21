<template>
	<div class="btnClose invertTheme" @click="changeMenu" :class="{hide:rail}">
		<img src="/images/arrowLeft.svg">
	</div>
	<v-app-bar :height="height" flat class="headerMain">
		<NCHeaderSearch/>
		<template v-slot:append>
			<div class="d-flex justify-lg-space-between align-center">
				<img src="/images/app_bar/terminal.svg" class="mx-2">
				<NCHeaderNotification/>
				<img src="/images/app_bar/help.svg" class="mx-2">
				<NCHeaderProfile/>
			</div>

		</template>
	</v-app-bar>
</template>

<script>
import NCHeaderSearch from '@/components/header/NCHeaderSearch'
import NCHeaderNotification from '@/components/header/NCHeaderNotification'
import NCHeaderProfile from '@/components/header/NCHeaderProfile'
export default {
	emits: ['change'],
	data(){
		return {
			height: 80,
			rail: true,
			menu: false,
			theme: false
		}
	},
	components: {
		NCHeaderSearch, NCHeaderProfile, NCHeaderNotification
	},
	watch: {
		'$root.rail'(){
			this.rail = this.$root.rail
		},
		'window.innerWidth'(value){
			value < 820 ? this.height = 120 : this.height = 80
		}
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
		position: fixed;
		top: 25px;
		left: 234px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
		margin: 0 15px 0 30px;
		border-radius: 50%;
		border: 1px solid rgb(var(--v-theme-grey-300));
		background: rgb(var(--v-theme-background));
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		z-index: 10000;
		transition: transform .15s ease, left .15s ease;
	}
	.btnClose.hide{
		left: 12px;
		transform: rotate(180deg);
		box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.1);
	}
	.btnClose img{
		width: 10px;
	}
</style>
