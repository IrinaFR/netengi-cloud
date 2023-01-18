<template>
	<div class="authMain">
		<div class="authLeft">
			<v-card to="/" class="authLogo d-flex align-center" variant="flat">
				<img src="/images/logo.svg" alt="Netengi" class="me-3">
				<img src="/images/netengi.svg" alt="Netengi">
			</v-card>
			<div class="authForm">
				<div class="authFormTitle text-start">Sign Up</div>
				<p class="authFormSubTitle color-grey-600 smallText-15">To register we advise you to use corporate mail.</p>
				<v-form validate-on="submit">
					<v-row>
						<v-col cols="6">
							<label for="">First Name</label>
							<v-text-field density="compact" variant="outlined"/>
						</v-col>
						<v-col cols="6">
							<label for="">Last Name</label>
							<v-text-field density="compact" variant="outlined"/>
						</v-col>
					</v-row>
					<div class="form-group">
						<label for="">Email address</label>
						<v-text-field density="compact" variant="outlined"/>
					</div>
					<div class="form-group">
						<label for="">Password</label>
						<v-text-field density="compact" variant="outlined">
							<template v-slot:append-inner>
								<img src="/images/authorization/showPassword.svg">
							</template>
						</v-text-field>
					</div>
					<div class="form-group text-center mb-5">
						By signing up you agree to the
						<router-link to="/">Terms of Service</router-link>
						and
						<router-link to="/">Privacy Policy</router-link>
						.
					</div>
					<v-btn density="default" variant="tonal" width="100%">Sign In</v-btn>
					<div class="form-group text-center mt-5">
						Already have an account?
						<router-link to="/authorization" class="ms-2">Sign in</router-link>
					</div>
				</v-form>
			</div>
		</div>
		<div class="authRight">
			<img src="/images/authorization/signUp.jpg" alt="signUp">
		</div>
	</div>
</template>

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
