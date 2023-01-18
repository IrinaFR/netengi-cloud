<template>
	<div class="d-flex justify-space-between">
		<v-form class="mt-10">
			<div class="form-group">
				<label for="">Name Load Balancer</label>
				<v-text-field density="compact" hide-details class="input" variant="outlined"/>
			</div>
			<div class="form-group">
				<label for="">IP Address</label>
				<v-text-field density="compact" hide-details class="input" variant="outlined"/>
			</div>
			<div class="form-group">
				<label for="">Description</label>
				<v-textarea variant="outlined" class="input"></v-textarea>
			</div>
			<div class="form-group">
				<label for="">Availability Zone</label>
				<v-select
					class="input"
					:items="['Choose an availability zone', 'Choose an availability zone', 'Choose an availability zone']"
					density="compact"
					hide-details
					hide-selected
					variant="outlined"
				>
				</v-select>
			</div>
			<div class="form-group">
				<label for="">Flavors</label>
				<v-select
					class="input"
					:items="['No flavors available', 'No flavors available', 'No flavors available']"
					density="compact"
					hide-details
					hide-selected
					variant="outlined"
				>
				</v-select>
			</div>
			<div class="form-group">
				<label for="">Subnet</label>
				<v-select
					class="input"
					:items="['Choose a subnet', 'Choose a subnet', 'Choose a subnet']"
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
								<img v-bind="props" src="/images/info.svg" class="ms-2">
							</template>
							<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
						</v-menu>
					</span>
				<h3 class="d-inline-block">Information</h3>
			</v-card-title>
			<v-card-text class="smallText-15 color-grey-600">
				Provide the details for the load balancer.
			</v-card-text>
		</v-card>
	</div>
	<div class="mt-7">
		<v-btn density="default" variant="tonal" @click="$emit('change', 1)">Continue</v-btn>
		<v-btn density="default" class="ms-3" variant="outlined" to="/balancer">Cancel</v-btn>
	</div>
</template>

<script>
export default {
	emits: ['change'],
}
</script>