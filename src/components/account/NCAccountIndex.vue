<template>
	<div v-if="$route.name === 'account'">
		<div class="mainPage">
			<h1 class="pageTitle">Account settings</h1>
		</div>
		<v-card variant="flat">
			<div class="container">
				<v-tabs
					v-model="tab"
					bg-color="background"
					color="primary-600"
				>
					<v-tab value="one">My Profile</v-tab>
					<v-tab value="two">Security</v-tab>
					<v-tab value="three">Personalization</v-tab>
				</v-tabs>
			</div>
			<v-divider></v-divider>
			<div class="mainPage">
				<v-window v-model="tab">
					<v-window-item value="one">
						<v-form validate-on="submit" class="w-25">
							<div class="form-group">
								<label for="">First name</label>
								<v-text-field density="compact" hide-details variant="outlined"/>
							</div>
							<div class="form-group">
								<label for="">Last name</label>
								<v-text-field density="compact" hide-details variant="outlined"/>
							</div>
							<div class="form-group">
								<label for="">E-mail address</label>
								<v-text-field density="compact" hide-details variant="outlined"/>
							</div>
							<div class="form-group">
								<label for="">Phone number</label>
								<v-text-field density="compact" hide-details variant="outlined"/>
							</div>
							<div class="mt-7">
								<v-btn density="default" variant="tonal">Save</v-btn>
							</div>
						</v-form>
					</v-window-item>

					<v-window-item value="two">
						<v-card variant="flat" class="overviewTab w-75">
							<h3>Password</h3>
							<v-btn density="default" variant="outlined" class="mt-3">
								<img src="/images/account/password.svg" class="me-2">
								<span>Change password</span>
							</v-btn>
						</v-card>
						<v-card variant="flat" class="overviewTab w-75 d-flex justify-space-between gap-15 overflow-hidden mt-4">
							<div class="flex-grow-1">
								<h3>Google Authenticator
									<span class="authEnabled">
									<img src="/images/account/success.svg">
									Enabled
								</span>
								</h3>
								<v-btn to="/account/key" density="default" variant="tonal" color="primary-50" class="mt-3">
									Enable Google Authenticator
								</v-btn>
								<v-btn density="default" variant="outlined" class="mt-3 ms-2">
									<img src="/images/account/restart.svg" class="me-2">
									<span>Regenerate Key</span>
								</v-btn>
							</div>
							<img src="/images/account/googleAuth.svg" class="iconGoogleAuth">
						</v-card>
					</v-window-item>
					<v-window-item value="three">
						<v-form validate-on="submit" class="w-25">
							<div class="form-group">
								<label for="">Language
									<img src="/images/info.svg" class="ms-2">
								</label>
								<v-select
									class="input"
									:items="['English', 'English', 'English']"
									density="compact"
									hide-details
									hide-selected
									variant="outlined"
								>
								</v-select>
							</div>
							<div class="form-group">
								<label for="">Currency
									<img src="/images/info.svg" class="ms-2">
								</label>
								<v-select
									class="input"
									:items="['USD ($)', 'USD ($)', 'USD ($)']"
									density="compact"
									hide-details
									hide-selected
									variant="outlined"
								>
								</v-select>
							</div>
							<div class="form-group d-flex align-center">
								<v-switch
									inset
									color="primary-600"
									hide-details
									v-model="theme"
									@change="changeTheme"
									class="flex-grow-0 me-2"
								></v-switch>
								<b>
									<img src="/images/app_bar/profile/dark.svg">
									Dark theme
								</b>
								<img src="/images/info.svg" class="ms-2">
							</div>
							<div class="mt-7">
								<v-btn density="default" variant="tonal">Save</v-btn>
							</div>
						</v-form>
					</v-window-item>
				</v-window>
			</div>
		</v-card>
	</div>
	<router-view></router-view>
</template>

<script>
	export default {
		data(){
			return{
				tab: 'one',
				theme: this.$root.theme
			}
		},
		methods: {
			changeTheme(){
				if(this.theme){
					this.$root.theme = 'dark'
					localStorage.setItem('theme', 'dark')
				} else{
					this.$root.theme = 'light'
					localStorage.setItem('theme', 'light')
				}
			}
		}

	}
</script>

<style>
	.overviewTab{
		position: relative;
		width: fit-content;
		border-radius: 4px;
		box-shadow: var(--shadow-for-blocks);
		padding: 16px 20px;
		border: solid 1px rgb(var(--v-theme-grey-350));
	}
	.iconGoogleAuth{
		margin: -16px 0;
	}
	.authEnabled{
		border-radius: 4px;
		padding: 2px 4px;
		background: #E0F3E8;
		font-weight: 700;
		font-size: 14px;
		line-height: 20px;
		color: rgb(var(--v-theme-success))
	}
</style>