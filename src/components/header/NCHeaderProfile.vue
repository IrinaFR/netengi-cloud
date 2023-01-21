<template>
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
					<template v-slot:append>
						<img :src="`/images/arrows/down.svg`" :class="[{'open':menu},  'menuProfile ms-1']">
					</template>
				</v-list-item>
			</v-list>
		</template>
		<v-card min-width="300">
			<v-list density="compact">
				<v-list-item density="compact" title="Dark mode">
					<template v-slot:prepend>
						<img src="/images/app_bar/profile/dark.svg" class="me-2 grayscaleThemeReverse">
					</template>
					<template v-slot:append>
						<v-switch
							inset
							true-value="dark"
							false-value="light"
							v-model="theme"
							color="active"
							@change="changeTheme"
							hide-details
						></v-switch>
					</template>

				</v-list-item>
			</v-list>
			<v-divider></v-divider>
			<v-list density="compact">
				<v-list-item density="compact" to="/account" title="Account settings">
					<template v-slot:prepend>
						<img src="/images/app_bar/profile/settings.svg" class="me-2">
					</template>
				</v-list-item>
				<v-list-item density="compact" to="/clients" title="Clients">
					<template v-slot:prepend>
						<img src="/images/app_bar/profile/clients.svg" class="me-2">
					</template>
				</v-list-item>
				<v-list-item density="compact" title="Billing">
					<template v-slot:prepend>
						<img src="/images/app_bar/profile/billing.svg" class="me-2">
					</template>
				</v-list-item>
				<v-list-item density="compact" to="/instances/1/4" title="Activities logs">
					<template v-slot:prepend>
						<img src="/images/app_bar/profile/activities-logs.svg" class="me-2">
					</template>
				</v-list-item>
			</v-list>

			<v-divider></v-divider>

			<v-list density="compact">
				<v-list-item density="compact" to="/authorization" title="Log out">
					<template v-slot:prepend>
						<img src="/images/app_bar/profile/logout.svg" class="me-2">
					</template>
				</v-list-item>
			</v-list>
		</v-card>
	</v-menu>
</template>

<script>
	export default {
		data(){
			return{
				menu: false,
				theme: this.$root.theme
			}
		},
		methods: {
			changeTheme(){
				this.$root.theme = this.theme
				localStorage.setItem('theme', this.theme)
			}
		}
	}
</script>

<style>
	.menuProfile{
		transition: transform .15s ease-out;
	}
	.menuProfile.open{
		transform: rotate(180deg);
	}
</style>