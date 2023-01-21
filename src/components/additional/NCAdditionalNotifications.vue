<template>
	<div class="text-center ma-2">
		<v-snackbar v-model="snackbar" color="background" location-strategy="connected" location="bottom right" max-width="400">
			<div class="d-flex align-start">
				<div :class="['notifIcon me-2', type]">
					<img :src="`/images/notification/${type}.svg`">
				</div>
				<div>
					<b class="mb-2" v-if="title">{{title}}</b>
					<p class="color-grey-600">{{text}}</p>
				</div>
				<img class="ms-2 cursor-pointer invertTheme" src="/images/general/close.svg" @click="snackbar = false">
			</div>
		</v-snackbar>
	</div>
</template>
<script>
export default {
	data(){
		return{
			snackbar: false,
			type: '',
			title: '',
			text: ''
		}
	},
	created() {
		this.$store.subscribe((mutation, state) => {
			if (mutation.type === 'showNotification') {
				this.type = state.notification.type
				state.notification.title ? this.title = state.notification.title : this.title = ''
				this.text = state.notification.text
				this.snackbar = true
			}
		})
	}
}
</script>

<style>
	.notifIcon{
		width: 28px;
		min-width: 28px;
		height: 28px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.notifIcon.info{
		background: #F1F4F9;
	}
	.notifIcon.succes{
		background: #DCFFDF;
	}
	.notifIcon.warning{
		background: #FFFAEA;
	}
	.notifIcon.danger{
		background: #FFE6E6;
	}
</style>