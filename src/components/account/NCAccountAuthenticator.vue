<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Account settings</span>
		</div>
		<h1 class="pageTitle smallText-15 my-5">Google Authenticator</h1>
		<v-card variant="flat" class="overviewTab d-flex gap-15 justify-space-between position-relative w-66">
			<div class="w-50">
				<img src="/images/account/QR.svg">
				<p class="mt-3">To enable Google Authenticator on your profile, scan the above QR into Google Authenticator app or another compatible app on your mobile.</p>
			</div>
			<div class="dividerCard">
				<v-divider vertical class="verticalDivider"></v-divider>
				<div class="variantIcon">OR</div>
			</div>
			<div class="w-50">
				<v-card variant="tonal" subtitle="Secret Key" text="F6OZBYMH2CZ5FJGDKJ734IAX4ACXNZY3" class="py-2 px-2"></v-card>
				<p class="mt-3">Just add the following code using the "Enter a provided key" option in Google Authenticator app. <br>If you use the last option, in the
					<br>"Account name" field add your email.
				</p>
			</div>

		</v-card>
		<v-form>
			<div class="form-group mt-5">
				<label for="">Code
					<v-menu open-on-hover>
						<template v-slot:activator="{ props }">
							<img v-bind="props" src="/images/info.svg" class="ms-2 blockInfo">
						</template>
						<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
					</v-menu>
				</label>
				<v-text-field density="compact" hide-details class="input" variant="outlined"/>
			</div>
			<div>
				<v-btn to="/account/key" density="default" variant="tonal" color="primary-50" class="mt-3">
					Enable Google Authenticator
				</v-btn>
				<v-btn density="default" variant="outlined" class="mt-3 ms-2">
					<img src="/images/account/restart.svg" class="me-2">
					<span>Regenerate Key</span>
				</v-btn>
				<v-btn density="default" variant="outlined" class="mt-3 ms-2">Cancel</v-btn>
			</div>
		</v-form>


	</div>
</template>

<style>
	.overviewTab{
		position: relative;
		width: fit-content;
		border-radius: 4px;
		box-shadow: var(--shadow-for-blocks);
		padding: 16px 20px;
		border: solid 1px rgb(var(--v-theme-grey-350));
	}
	.verticalDivider{
		height: 100%;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
	}
	.dividerCard{
		position: relative;
		width: 40px;
		margin: -15px 20px;
	}
	.variantIcon{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		position: absolute;
		margin: auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		/*transform: translate(-50%, -50%);*/
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(var(--v-theme-grey-800));
		color: rgb(var(--v-theme-background));
		border: solid 1px rgb(var(--v-theme-grey-350));
	}
	.blockInfo{
		position: relative;
		top: 2px;
	}
</style>