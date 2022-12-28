<template>
	<v-app-bar
	height="80"
	flat>
		<template v-slot:prepend>
			<div class="btnClose" @click="changeMenu">
				<img src="/images/arrowLeft.svg">
			</div>
		</template>

		<NCHeaderSearch/>

		<template v-slot:append>
			<div class="d-flex justify-lg-space-between align-center">
				<v-btn to="/authorization">
					Auth
				</v-btn>
				<img src="/images/app_bar/terminal.svg" class="mx-2">
				<v-badge
					class="mx-2"
					color="error"
					dot
					:bordered="true"
				>
					<img src="/images/app_bar/notification.svg">
				</v-badge>
				<img src="/images/app_bar/help.svg" class="mx-2">
				<v-menu
					v-model="menu"
					:close-on-content-click="false"
					location="bottom"
				>
					<template v-slot:activator="{ props }">
						<v-list v-bind="props">
							<v-list-item
								prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
								title="John Leider"
							>

							</v-list-item>
						</v-list>
					</template>

					<v-card min-width="300">
						<v-list density="compact">
							<v-list-item density="compact" title="Dark mode">
								<template v-slot:prepend>
									<img src="/images/app_bar/profile/dark.svg" class="me-2">
								</template>
								<template v-slot:append>
									<v-switch
										inset
										v-model="theme"
										color="info"
										@change="changeTheme"
										hide-details
									></v-switch>
								</template>

							</v-list-item>
						</v-list>
						<v-divider></v-divider>
						<v-list density="compact">
							<v-list-item density="compact" title="Account settings">
								<template v-slot:prepend>
									<img src="/images/app_bar/profile/settings.svg" class="me-2">
								</template>
							</v-list-item>
							<v-list-item density="compact" title="Clients">
								<template v-slot:prepend>
									<img src="/images/app_bar/profile/clients.svg" class="me-2">
								</template>
							</v-list-item>
							<v-list-item density="compact" title="Billing">
								<template v-slot:prepend>
									<img src="/images/app_bar/profile/billing.svg" class="me-2">
								</template>
							</v-list-item>
							<v-list-item density="compact" title="Activities logs">
								<template v-slot:prepend>
									<img src="/images/app_bar/profile/activities-logs.svg" class="me-2">
								</template>
							</v-list-item>
						</v-list>

						<v-divider></v-divider>

						<v-list density="compact">
							<v-list-item density="compact" title="Log out">
								<template v-slot:prepend>
									<img src="/images/app_bar/profile/logout.svg" class="me-2">
								</template>
							</v-list-item>
						</v-list>
					</v-card>
				</v-menu>
			</div>

		</template>
	</v-app-bar>
</template>

<script>
import NCHeaderSearch from '@/components/header/NCHeaderSearch'
export default {
	emits: ['change'],
	data(){
		return {
			rail: true,
			menu: false,
			theme: false
		}
	},
	components: {
		NCHeaderSearch
	},
	methods: {
		changeMenu(){
			this.rail = !this.rail
			this.$emit('change', this.rail)
			localStorage.setItem('rail', this.rail)
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
		if(localStorage.getItem('theme') === 'dark'){
			this.theme = true
		}
	}
}
</script>

<style>
	.btnClose{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 1px solid rgb(var(--v-theme-grey-300));;
		background: rgb(var(--v-theme-background));
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
	}
	.btnClose img{
		width: 10px;
	}
</style>
