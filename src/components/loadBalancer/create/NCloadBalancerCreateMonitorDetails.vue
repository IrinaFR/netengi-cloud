<template>
	<div class="d-flex justify-space-between">
		<div>
			<v-form>
				<div class="form-group">
					<label for="">Name</label>
					<v-text-field density="compact" hide-details class="input" variant="outlined"/>
				</div>
				<div class="form-group input">
					<label for="">Type</label>
					<v-select
						:items="['HTTP', 'HTTP', 'HTTP']"
						density="compact"
						hide-details
						hide-selected
						variant="outlined"
					>
					</v-select>
				</div>
				<div class="d-flex gap-15 justify-space-between">
					<div class="form-group input">
						<label for="">Max Retries Down
							<v-menu open-on-hover>
								<template v-slot:activator="{ props }">
									<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
								<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
							</v-menu>
						</label>
						<v-text-field density="compact" hide-details variant="outlined"/>
					</div>
					<div class="form-group input">
						<label for="">Delay (sec)
							<v-menu open-on-hover>
								<template v-slot:activator="{ props }">
									<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
								<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
							</v-menu>
						</label>
						<v-text-field density="compact" hide-details variant="outlined"/>
					</div>
				</div>
				<div class="d-flex gap-15 justify-space-between">
					<div class="form-group input">
						<label for="">Max Retries
							<v-menu open-on-hover>
								<template v-slot:activator="{ props }">
									<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
								<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
							</v-menu>
						</label>
						<v-text-field density="compact" hide-details variant="outlined"/>
					</div>
					<div class="form-group input">
						<label for="">Delay (sec)
							<v-menu open-on-hover>
								<template v-slot:activator="{ props }">
									<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
								<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
							</v-menu>
						</label>
						<v-text-field density="compact" hide-details variant="outlined"/>
					</div>
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
		</div>
		<v-card variant="flat" class="infoCard">
			<v-card-title>
					<span class="iconInfoCard me-2">
						<v-menu open-on-hover>
							<template v-slot:activator="{ props }">
								<img v-bind="props" src="/images/info.svg" class="me-2">
							</template>
							<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
						</v-menu>
					</span>
				<h3 class="d-inline-block">Information</h3>
			</v-card-title>
			<v-card-text class="smallText-15 color-grey-600">
				Provide the details for the  monitor.
			</v-card-text>
		</v-card>
	</div>
	<div class="mt-7">
		<v-btn density="default" variant="tonal" @click="$emit('change', 1)">Continue</v-btn>
		<v-btn density="default" class="ms-3" variant="outlined" @click="$emit('change', 0)">Cancel</v-btn>
	</div>
</template>

<script>
export default {
	emits: ['change'],
	data(){
		return {
			additional: false,
		}
	}
}
</script>

<style>
.additionalSettings{
	background: rgb(var(--v-theme-primary-50));
	color: rgb(var(--v-theme-primary-700));
	padding: 0 16px;
	border-radius: 4px;
	height: 40px;
	margin: 10px 0 20px;
}
.additionalSettings.open{
	background: rgb(var(--v-theme-background));
	box-shadow: 0 0 0 3px #E0EAFF;
}
.additionalSettings img{
	transition: transform .15s ease-out;
}
.additionalSettings.open img{
	transform: rotate(180deg);
}
.customCardOutline{
	background: rgb(var(--v-theme-background));
	border-radius: 8px;
	padding: 20px;
	border: 1.5px solid rgb(var(--v-theme-grey-350));
	max-width: 550px;
	box-shadow: 0 0 0 3px #E0EAFF;
}
.customCardOutline .form-group{
	width: 245px;
}
.v-input.v-input--horizontal.v-switch--inset{
	flex-grow: 0;
	margin-right: 10px;
}
</style>