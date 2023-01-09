<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Notifications</span>
		</div>
		<div class="pageTitle d-flex mt-4 mb-1">
			<h1 class="pageTitle d-block flex-grow-1">Your cloud account has been suspended</h1>
			<div class="listBtn mt-5">
				<span class="iconPauseHead" @click="pause=!pause">
					<img src="/images/general/pause.svg" class="grayscale-1" v-if="!pause">
					<img src="/images/general/playBtn.svg" class="grayscale-1" v-else>
				</span>
			</div>
		</div>
		<div>
			<span class="color-grey-600 me-2">Date</span>
			<span>Oct 24, 2022, 12:00:04 PM</span>
		</div>
		<v-card variant="flat" class="overviewTab mt-4">
			<p>Hello!</p>
			<p>Your cloud resources have been suspended because you are out of credit.</p>
			<p>To add credit to your account follow this link:
				<br><a href="https://cp.netengi.com">https://cp.netengi.com</a></p>
			<p>Thank you!</p>
		</v-card>
		<div class="mt-7">
			<v-btn density="default" variant="tonal">Mark as unread</v-btn>
			<v-btn density="default" class="ms-3" variant="outlined" to="/notification">Back</v-btn>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				pause: false
			}
		}
	}
</script>

<style>
	.iconPauseHead{
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: rgb(var(--v-theme-grey-200));
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.iconPauseHead img{
		width: 30px;
		height: 30px;
	}
</style>