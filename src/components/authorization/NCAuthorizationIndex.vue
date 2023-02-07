<template>
	<div class="authMain" v-if="$route.name==='auth'">
		<div class="authLeft">
			<v-card to="/" class="authLogo d-flex align-center" variant="text">
				<img src="/images/logo.svg" alt="Netengi" class="me-3">
				<img src="/images/netengi.svg" alt="Netengi" class="invertTheme">
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
						<v-text-field density="compact" :type="showPass?'text':'password'" variant="outlined">
							<template v-slot:append-inner>
								<img src="/images/authorization/showPassword.svg" class="cursor-pointer mt-1" @click="showPass=false" v-if="showPass">
								<img src="/images/authorization/hidePassword.svg" class="cursor-pointer mt-1" @click="showPass=true" v-else>
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
		<div class="authRight authInfo">
			<div class="authInfoTitle d-flex align-center justify-space-between gap-15">
				<div>We You</div>
				<v-card variant="flat" color="background" class="authInfoFocus px-2 py-4">
					<span class="color-primary-600">focus</span>
				</v-card>
				<div class="authInfoText">
					<span>on your
						<span class="color-primary-600">server</span>
						.
					</span>
					<br>
					<span>on your
						<span class="color-primary-600">business</span>
						.
					</span>
				</div>
			</div>
			<p class="color-grey-600 smallText-15 my-5">Businesses grow faster when developers can build on the simple, affordable cloud they love. </p>
			<p class="smallText-15 color-grey-800 mb-2">NetEngi has the cloud computing services you need:</p>
			<v-card variant="flat" class="width-fit-content background pa-2 mb-2 d-flex align-center">
				<img src="/images/authorization/statistic.svg" class="grayscaleTheme me-2">
				<span class="color-grey-800">Scalability to support your growth at any stage</span>
			</v-card>
			<v-card variant="flat" class="width-fit-content background pa-2 mb-2 d-flex align-center">
				<img src="/images/authorization/documentation.svg" class="grayscaleTheme me-2">
				<span class="color-grey-800">Robust documentation</span>
			</v-card>
			<v-card variant="flat" class="width-fit-content background pa-2 d-flex align-center">
				<img src="/images/authorization/pricing.svg" class="grayscaleTheme me-2">
				<span class="color-grey-800">Predictable pricing</span>
			</v-card>
			<img src="/images/authorization/authBotom.svg" class="authInfoImg">
		</div>
	</div>
	<suspense>
		<router-view/>
	</suspense>
</template>

<script>
	export default {
		data(){
			return{
				showPass: false
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
		overflow: hidden;
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
	.authInfo{
		text-align: start;
		position: relative;
		flex: 36% 0;
		padding: 82px;
		margin: 20px;
		overflow: hidden;
		height: calc(100% - 40px);
		background: #F3F1F1;
		border-radius: 30px;
	}
	.authInfoTitle{
		font-size: 34px;
	}
	.authInfoTitle :first-child{
		width: 64px;
		color: rgb(var(--v-theme-color-grey-800));
	}
	.authInfoFocus{
		min-width: fit-content;
		white-space: nowrap;
		padding: 21px 18px;
		border-radius: 10px;
	}
	.authInfoText{
		white-space: nowrap;
	}
	.authInfoImg{
		position: absolute;
		left: 0;
		bottom: 0;
	}
	@media(max-width: 1366px){
		.authInfoTitle{
			flex-wrap: wrap;
		}
		.authInfoImg{
			bottom: -150px;
		}
	}
</style>
