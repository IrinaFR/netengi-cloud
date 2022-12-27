<template>
	<div class="authMain">
		<div class="authLeft">
			<v-card to="/" class="authLogo d-flex align-center" variant="plain">
				<img src="/images/logo.svg" alt="Netengi" class="me-3">
				<img src="/images/netengi.svg" alt="Netengi">
			</v-card>
			<div class="authForm" v-if="step===1">
				<div class="authFormTitle text-start">Forgot password</div>
				<p class="authFormSubTitle color-grey-600 smallText-15">Enter the email address associated with your account and we will send you a link to reset your password.</p>
				<v-form validate-on="submit">
					<div class="form-group">
						<label for="">Email address</label>
						<v-text-field density="compact" variant="outlined"/>
					</div>
					<v-btn density="default" variant="tonal" width="100%" @click="step=2">Request Password Reset</v-btn>
					<div class="form-group text-center mt-5">
						Remembered?
						<router-link to="/authorization" class="ms-2">Back to login</router-link>
					</div>
				</v-form>
			</div>
			<div class="authForm" v-if="step===2">
				<div class="authFormTitle text-start">Check your mail</div>
				<p class="authFormSubTitle color-grey-600 smallText-15">We have sent a password recover instructions to reset your password.</p>
				<div class="authFormLink">
					<router-link to="/authorization">Back to login</router-link>
				</div>
			</div>
			<div class="authForm" v-if="step===3">
				<div class="authFormTitle text-start">Change password</div>
				<p class="authFormSubTitle color-grey-600 smallText-15">Your new password must be different from previous used passwords.</p>
				<v-form validate-on="submit">
					<div class="form-group">
						<label for="">New Password</label>
						<v-text-field density="compact" variant="outlined">
							<template v-slot:append-inner>
								<img src="/images/authorization/showPassword.svg">
							</template>
						</v-text-field>
					</div>
					<div class="form-group">
						<label for="">Confirm Password</label>
						<v-text-field density="compact" variant="outlined">
							<template v-slot:append-inner>
								<img src="/images/authorization/showPassword.svg">
							</template>
						</v-text-field>
					</div>
					<v-btn density="default" variant="tonal" width="100%" @click="step=4">Change Password</v-btn>
				</v-form>
			</div>
			<div class="authForm" v-if="step===4">
				<img src="" alt="">
				<div class="authFormTitle text-start">Password successfully updated</div>
			</div>
		</div>
		<div class="authRight">
			<transition name="fade">
				<img src="/images/authorization/forgotStep1.jpg" alt="signUp" v-if="step===1">
				<img src="/images/authorization/forgotStep2.jpg" alt="signUp" v-else-if="step===2">
				<img src="/images/authorization/forgotStep3.jpg" alt="signUp" v-else-if="step===3">
				<img src="/images/authorization/forgotStep4.jpg" alt="signUp" v-else>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				step: 3
			}
		}
	}
</script>

<style scoped>
.authMain{
	display: flex;
	justify-content: space-between;
	height: 100vh;
	width: 100vw;
}
.authLeft{
	padding: 50px;
	flex-grow: 1;
}
.authFormTitle{
	width: 360px;
	font-weight: 700;
	font-size: 40px;
	line-height: 48px;
	margin-bottom: 10px;
	color: rgb(var(--v-theme-grey-800));
}
.authFormSubTitle{
	width: 360px;
	margin-bottom: 20px;
}
.authFormLink{
	width: 360px;
}
.authForm{
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
}
.authForm form{
	width: 360px;
}
.authRight{
	padding: 20px;
	text-align: end;
}
.authRight img{
	border-radius: 30px;
	overflow: hidden;
	height: 100%;
}
</style>
