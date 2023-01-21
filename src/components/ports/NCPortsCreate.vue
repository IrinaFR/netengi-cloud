<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Ports</span>
		</div>
		<div class="pageTitle my-4">Create a new Port</div>
		<div class="d-flex justify-space-between">
			<div>
				<v-form class="mt-10">
					<div class="form-group">
						<label for="">Name Port</label>
						<v-text-field density="compact" hide-details class="input" variant="outlined"/>
					</div>
					<div class="form-group d-flex align-center">
						<v-switch
							inset
							color="active"
							hide-details
						></v-switch>
						<b>Admin State Up</b>
						<v-menu open-on-hover>
							<template v-slot:activator="{ props }">
								<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
							<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
						</v-menu>
					</div>
					<div class="form-group">
						<label for="">IP address or Subnet</label>
						<v-select
							class="input"
							v-model="typePorts"
							:items="typePortsList"
							density="compact"
							item-title="name"
							item-value="value"
							hide-details
							hide-selected
							variant="outlined"
						>
						</v-select>
					</div>
					<div class="form-group" v-if="typePorts===2">
						<label for="">Subnet</label>
						<v-select
							class="input"
							:items="['Select','Select','Select']"
							density="compact"
							hide-details
							hide-selected
							variant="outlined"
						>
						</v-select>
					</div>
					<div class="form-group" v-if="typePorts===1">
						<NCAdditionalInputTags label="IP address"/>
					</div>
					<div class="form-group">
						<label for="">Mac address</label>
						<v-text-field density="compact" hide-details class="input" variant="outlined"/>
					</div>
					<div class="form-group mt-2 d-flex align-center">
						<input type="checkbox" id="port" class="form-check-input mr-2">
						<label for="port" class="d-flex align-center">
							Port Security
							<v-menu open-on-hover>
								<template v-slot:activator="{ props }">
									<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
								<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
							</v-menu>
						</label>
					</div>
					<div class="form-group mt-2 d-flex align-center">
						<input type="checkbox" id="autoAdd" class="form-check-input mr-2">
						<label for="autoAdd" class="d-flex align-center">
							Auto add security group
							<v-menu open-on-hover>
								<template v-slot:activator="{ props }">
									<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
								<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
							</v-menu>
						</label>
					</div>
				</v-form>
				<button class="additionalSettings" @click="additional=!additional" :class="{open:additional}">Additional Settings
					<img src="/images/arrows/downPrimary.svg" class="ms-2">
				</button>
				<transition name="fade" mode="out-in"  v-show="additional">
					<div class="customCardOutline">
						<div class="form-group">
							<label for="">vNIC Type</label>
							<v-select
								:items="['Normal','Normal','Normal']"
								item-title="name"
								item-value="value"
								density="compact"
								hide-details
								hide-selected
								variant="outlined"
							>
							</v-select>
						</div>
						<div class="form-group">
							<label for="">Blinding</label>
							<v-text-field density="compact" hide-details class="input" variant="outlined"/>
						</div>
						<div class="form-group">
							<label for="">Description</label>
							<v-textarea variant="outlined" class="input"></v-textarea>
						</div>
					</div>
				</transition>
			</div>
			<div>
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
						<h3 class="d-inline-block">IP address or Subnet</h3>
					</v-card-title>
					<v-card-text class="smallText-15 color-grey-600">
						If you specify the subnet, OpenStack Networking allocates and available IP from that subnet to the port.

						If you specify the IP address, OpenStack Networking tries to allocate the IP address if the address is a valid IP for any of the subnets on the specified network.
					</v-card-text>
				</v-card>
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
						<h3 class="d-inline-block">MAC address</h3>
					</v-card-title>
					<v-card-text class="smallText-15 color-grey-600">
						The MAC address of the port. If unspecified, a MAC address is automatically generated.
					</v-card-text>
				</v-card>
			</div>
		</div>
		<div class="mt-7">
			<v-btn density="default" variant="tonal">Create</v-btn>
			<v-btn density="default" class="ms-3" variant="outlined" to="/images">Cancel</v-btn>
		</div>
	</div>
</template>

<script>
import NCAdditionalInputTags from "@/components/additional/NCAdditionalInputTags";
export default {
	data() {
		return{
			typePortsList: [
				{value: 0, name: 'Select'},
				{value: 1, name: 'Fixed IP address'},
				{value: 2, name: 'Subnet'},
			],
			typePorts: 0,
			additional: false,
		}
	},
	components: {
		NCAdditionalInputTags
	},
}
</script>

<style scoped>
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
	max-width: 405px;
	box-shadow: 0 0 0 3px #E0EAFF;
}
.v-input.v-input--horizontal.v-switch--inset{
	flex-grow: 0;
	margin-right: 10px;
}
</style>