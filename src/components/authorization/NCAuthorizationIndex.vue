<template>
	<div class="authMain" v-if="$route.name==='auth'">
		<div class="authLeft">
			<v-card to="/" class="authLogo d-flex align-center" variant="plain">
				<img src="/images/logo.svg" alt="Netengi" class="me-3">
				<img src="/images/netengi.svg" alt="Netengi">
			</v-card>
			<div class="authForm">
				<div class="authFormTitle">Welcome, please sign in.</div>
				<v-form validate-on="submit">
					<div class="form-group">
						<label for="">Username or email address</label>
						<v-text-field density="compact" variant="outlined"/>
					</div>
					<div class="form-group">
						<label for="" class="d-flex justify-space-between">Password
							<router-link to="/authorization/forgot">Forgot password?</router-link>
						</label>
						<v-text-field density="compact" variant="outlined">
							<template v-slot:append-inner>
								<img src="/images/authorization/showPassword.svg">
							</template>
						</v-text-field>
					</div>
					<v-btn density="default" variant="tonal" width="100%">Sign In</v-btn>
					<div class="form-group text-center mt-3">
						Don’t have an account?
						<router-link to="/registration" class="ms-2">Sign up</router-link>
					</div>
				</v-form>
			</div>
		</div>
		<div class="authRight">
			<img src="/images/authorization/auth.jpg" alt="authorization">
		</div>
	</div>
	<suspense>
		<router-view/>
	</suspense>
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
		margin-bottom: 20px;
		color: rgb(var(--v-theme-grey-800));
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
