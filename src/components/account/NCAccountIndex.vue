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
					<v-tab value="1">My Profile</v-tab>
					<v-tab value="2">Security</v-tab>
					<v-tab value="3">Personalization</v-tab>
				</v-tabs>
			</div>
			<v-divider></v-divider>
			<div class="mainPage">
				<v-window v-model="tab">
					<v-window-item value="1">
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

					<v-window-item value="2">
						<v-card variant="flat" class="overviewTab w-75">
							<h3>Password</h3>
							<v-btn density="default" variant="outlined" @click="dialogChangePass=true" class="mt-3">
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
								<v-btn density="default" @click="dialogKey=true" variant="outlined" class="mt-3 ms-2">
									<img src="/images/account/restart.svg" class="me-2">
									<span>Regenerate Key</span>
								</v-btn>
							</div>
							<img src="/images/account/googleAuth.svg" class="iconGoogleAuth">
						</v-card>
					</v-window-item>
					<v-window-item value="3">
						<v-form validate-on="submit" class="w-25">
							<div class="form-group">
								<label for="">Language
									<v-menu open-on-hover>
										<template v-slot:activator="{ props }">
											<img v-bind="props" src="/images/info.svg" class="ms-2 blockInfoTo">
										</template>
										<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
									</v-menu>
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
									<v-menu open-on-hover>
										<template v-slot:activator="{ props }">
											<img v-bind="props" src="/images/info.svg" class="ms-2 blockInfoTo">   </template>
										<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
									</v-menu>
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
								<v-menu open-on-hover>
									<template v-slot:activator="{ props }">
										<img v-bind="props" src="/images/info.svg" class="ms-2 blockInfo">
									</template>
									<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
								</v-menu>
							</div>
							<div class="mt-7">
								<v-btn density="default" variant="tonal">Save</v-btn>
							</div>
						</v-form>
					</v-window-item>
				</v-window>
			</div>
		</v-card>
		<v-dialog v-model="dialogChangePass" width="400">
			<v-card color="background">
				<v-card-text>
					<v-toolbar density="comfortable" rounded color="background">
						<v-toolbar-title class="ml-0"><h3>Change password</h3></v-toolbar-title>
						<v-btn icon dark density="compact" class="me-0" @click="dialogChangePass = false">
							<v-icon>mdi-close</v-icon>
						</v-btn>
					</v-toolbar>
					<div class="form-group">
						<label for="" class="d-flex justify-space-between">Old password</label>
						<v-text-field density="compact" hide-details :type="showOldPass?'text':'password'" variant="outlined">
							<template v-slot:append-inner>
								<img src="/images/authorization/showPassword.svg" class="cursor-pointer mt-1" @click="showOldPass=false" v-if="showOldPass">
								<img src="/images/authorization/hidePassword.svg" class="cursor-pointer mt-1" @click="showOldPass=true" v-else>
							</template>
						</v-text-field>
					</div>
					<v-divider class="mb-3 mt-2"></v-divider>
					<div class="form-group">
						<label for="" class="d-flex justify-space-between">New password</label>
						<v-text-field density="compact" v-model="newPass" @input="checkPass" hide-details :type="showNewPass?'text':'password'" variant="outlined">
							<template v-slot:append-inner>
								<img src="/images/authorization/showPassword.svg" class="cursor-pointer mt-1" @click="showNewPass=false" v-if="showNewPass">
								<img src="/images/authorization/hidePassword.svg" class="cursor-pointer mt-1" @click="showNewPass=true" v-else>
							</template>
						</v-text-field>
					</div>
					<v-card variant="flat" class="bg-grey-300 pa-3">
						<div class="mb-2">
							<span>Password Strenght —</span>
							<b class="strong">Strong</b>
						</div>
						<div :class="[{check:checkPass}, 'requirementPass']">
							<div class="circlePoint me-2"></div>
							<span>Must not contain your name or email</span>
						</div>
						<div :class="[{check:newPass.length>8}, 'requirementPass']">
							<div class="circlePoint me-2"></div>
							<span>At least 8 characters</span>
						</div>
						<div :class="[{check:checkPass}, 'requirementPass']">
							<div class="circlePoint me-2"></div>
							<span>Contains a symbol or a number</span>
						</div>
					</v-card>
					<div class="form-group mt-3">
						<label for="" class="d-flex justify-space-between">Type your password again</label>
						<v-text-field density="compact" hide-details :type="showRepeatPass?'text':'password'" variant="outlined">
							<template v-slot:append-inner>
								<img src="/images/authorization/showPassword.svg" class="cursor-pointer mt-1" @click="showRepeatPass=false" v-if="showRepeatPass">
								<img src="/images/authorization/hidePassword.svg" class="cursor-pointer mt-1" @click="showRepeatPass=true" v-else>
							</template>
						</v-text-field>
					</div>
					<div class="d-flex gap-15 justify-space-between mt-6 mb-2">
						<v-btn density="default" variant="outlined" class="flex-grow-1" @click="dialogChangePass=false">Cancel</v-btn>
						<v-btn density="default" variant="tonal" class="flex-grow-1" @click="dialogChangePass=false">Save</v-btn>
					</div>
				</v-card-text>
			</v-card>
		</v-dialog>
		<v-dialog v-model="dialogKey" width="400">
			<v-card color="background">
				<v-card-text class="text-center">
					<v-toolbar density="comfortable" rounded color="background">
						<v-toolbar-title class="ml-0"></v-toolbar-title>
						<v-btn icon dark density="compact" class="me-0" @click="dialogKey = false">
							<v-icon>mdi-close</v-icon>
						</v-btn>
					</v-toolbar>
					<img src="/images/account/googleAuthSmall.svg">
					<h3 class="mt-2">Regenerate code</h3>
					<p class="smallText-15 color-grey-800 my-4">Are you sure?</p>
					<div class="text-start smallText-15">
						<input type="checkbox" id="agree" v-model="agree" class="form-check-input mt-2 me-2">
						<label for="agree">I am sure that I want to regenerate authenticator data and disable this method (if activated) until I re-activate it</label>
					</div>
					<v-card v-if="agree" variant="flat" color="#FFF5D2" class="text-start d-flex align-start mt-2 pa-3">
						<img src="/images/notification/warning.svg" class="me-2">
						<p class="smallText-15 flex-grow-1">You will have to re-enable Google Authenticator (if activated) and this will make your old key obsolete</p>
					</v-card>
					<div class="d-flex gap-15 justify-space-between mt-6 mb-2">
						<v-btn variant="outlined" class="flex-grow-1" @click="dialogKey=false">No</v-btn>
						<v-btn variant="tonal" class="flex-grow-1" color="grey-400" :disabled="!agree" @click="dialogKey=false">Yes</v-btn>
					</div>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
	<router-view></router-view>
</template>

<script>
	export default {
		data(){
			return{
				tab: '1',
				theme: this.$root.theme,
				dialogChangePass: false,
				showOldPass: false,
				showNewPass: false,
				newPass: '',
				showRepeatPass: false,
				dialogKey: false,
				agree: false
			}
		},
		methods: {
			checkPass(){

			},
			changeTheme(){
				if(this.theme){
					this.$root.theme = 'dark'
					localStorage.setItem('theme', 'dark')
				} else{
					this.$root.theme = 'light'
					localStorage.setItem('theme', 'light')
				}
			}
		},
		created() {
			if(this.$route.params.tab) this.tab = this.$route.params.tab
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
	.blockInfo{
		position: relative;
		top: 2px;
	}
	.blockInfoTo{
		position: relative;
		top: 4px;
	}
</style>