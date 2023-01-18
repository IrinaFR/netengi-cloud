<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Netengi-security-group-1</span>
		</div>
		<div class="pageTitle my-4">Create a new Rule</div>
		<div class="d-flex justify-space-between">
			<v-form class="mt-10">
				<div class="form-group">
					<label for="">Rule Protocol
						<v-menu open-on-hover>
							<template v-slot:activator="{ props }">
								<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
							<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
						</v-menu>
					</label>
					<v-select
						class="input"
						:items="['Any', 'Any', 'Any']"
						density="compact"
						hide-details
						hide-selected
						variant="outlined"
					>
					</v-select>
				</div>
				<div class="form-group">
					<label for="">Direction</label>
					<v-select
						class="input"
						:items="['Ingress - Incoming', 'Ingress - Incoming', 'Ingress - Incoming']"
						density="compact"
						hide-details
						hide-selected
						variant="outlined"
					>
					</v-select>
				</div>
				<div class="form-group">
					<label for="">Remote</label>
					<v-select
						class="input"
						:items="['IP Address', 'IP Address', 'IP Address']"
						density="compact"
						hide-details
						hide-selected
						variant="outlined"
					>
					</v-select>
				</div>
				<div class="form-group">
					<label for="">CIDR</label>
					<v-select
						class="input"
						:items="['0.0.0.0', '0.0.0.0', '0.0.0.0']"
						density="compact"
						hide-details
						hide-selected
						variant="outlined"
					>
					</v-select>
				</div>
				<div class="form-group">
					<label for="">Description</label>
					<v-textarea variant="outlined" class="input"></v-textarea>
				</div>
			</v-form>
			<v-card variant="flat" class="infoCard">
				<v-card-title>
					<span class="iconInfoCard me-2">
						<v-menu open-on-hover>
							<template v-slot:activator="{ props }">
								<img v-bind="props" src="/images/info.svg">   </template>
							<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
						</v-menu>
					</span>
					<h3 class="d-inline-block">Information</h3>
				</v-card-title>
				<v-card-text class="smallText-15 color-grey-600">
					Create a new Rule, in  addition, a subnet associated with the network can be  created in the following steps of this wizard.
				</v-card-text>
			</v-card>
		</div>
		<div class="mt-7">
			<v-btn density="default" variant="tonal">Create</v-btn>
			<v-btn density="default" class="ms-3" variant="outlined" to="/images">Cancel</v-btn>
		</div>
	</div>
</template>
