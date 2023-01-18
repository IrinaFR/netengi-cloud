<template>
	<div class="d-flex justify-space-between">
		<v-form class="mt-10">
			<div class="form-group">
				<label for="">Name Network</label>
				<v-text-field density="compact" hide-details class="input" variant="outlined"/>
			</div>
			<div class="form-group">
				<label for="">Description</label>
				<v-text-field density="compact" hide-details class="input" variant="outlined"/>
			</div>
			<div class="form-group">
				<label for="">Placement Region</label>
				<v-select
					class="input"
					:items="['ua-central-1', 'ua-central-1', 'ua-central-1']"
					density="compact"
					hide-details
					hide-selected
					variant="outlined"
				>
					<template v-slot:item="{props}">
						<v-list-item v-bind="props">
							<template v-slot:prepend>
									<span class="d-flex align-center">
										<img :src="`/images/flags/ua.svg`" class="iconCountry me-2"/>
									</span>
							</template>
						</v-list-item>
					</template>
				</v-select>
			</div>
			<div class="form-group d-flex align-center">
				<v-switch
					inset
					color="primary-600"
					hide-details
					class="flex-grow-0 me-2"
				></v-switch>
				<b>Internet Access</b>
				<v-menu open-on-hover>
					<template v-slot:activator="{ props }">
						<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
					<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
				</v-menu>
			</div>
			<div class="form-group d-flex align-center">
				<v-switch
					inset
					color="primary-600"
					hide-details
					class="flex-grow-0 me-2"
				></v-switch>
				<b>Admin State Up</b>
				<v-menu open-on-hover>
					<template v-slot:activator="{ props }">
						<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
					<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
				</v-menu>
			</div>
		</v-form>
		<v-card variant="flat" class="infoCard">
			<v-card-title>
					<span class="iconInfoCard me-2">
						<v-menu open-on-hover>
							<template v-slot:activator="{ props }">
								<img v-bind="props" src="/images/info.svg">
							</template>
							<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
						</v-menu>
					</span>
				<h3 class="d-inline-block">Information</h3>
			</v-card-title>
			<v-card-text class="smallText-15 color-grey-600">
				Create a new network, in addition, a subnet associated with the network can be created in the following steps of this wizard.
			</v-card-text>
		</v-card>
	</div>
	<div class="mt-7">
		<v-btn density="default" variant="tonal" @click="$emit('change', 1)">Continue</v-btn>
		<v-btn density="default" class="ms-3" variant="outlined" to="/networks">Cancel</v-btn>
	</div>
</template>

<script>
	export default {
		emits: ['change'],
	}
</script>