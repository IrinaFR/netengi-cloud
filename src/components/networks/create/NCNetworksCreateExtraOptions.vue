<template>
	<div class="d-flex justify-space-between">
		<div>
			<v-form>
				<div class="form-group d-flex align-center">
					<v-switch
						inset
						color="primary-600"
						hide-details
						class="flex-grow-0 me-2"
					></v-switch>
					<b>Enable DHCP</b>
					<img src="/images/info.svg" class="ms-2">
				</div>
				<div class="form-group">
					<label for="">DNS Server Name
						<img src="/images/info.svg" class="ms-2">
					</label>
					<v-textarea variant="outlined" class="input"></v-textarea>
				</div>
			</v-form>

			<button class="additionalSettings" @click="additional=!additional" :class="{open:additional}">Add host route
				<img src="/images/arrows/downPrimary.svg" class="ms-2">
			</button>
			<transition name="fade" mode="out-in"  v-show="additional">
				<div class="customCardOutline">
					<div class="form-group">
						<label for="">Host route
							<img src="/images/info.svg" class="ms-2">
						</label>
						<v-textarea variant="outlined" class="input"></v-textarea>
					</div>
				</div>
			</transition>
		</div>
		<v-card variant="flat" class="infoCard">
			<v-card-title>
					<span class="iconInfoCard me-2">
						<img src="/images/info.svg">
					</span>
				<h3 class="d-inline-block">Information</h3>
			</v-card-title>
			<v-card-text class="smallText-15 color-grey-600">
				Create a new network, in addition, a subnet associated with the network can be  created in the following steps of this wizard.
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
		max-width: 405px;
		box-shadow: 0 0 0 3px #E0EAFF;
	}
	.v-input.v-input--horizontal.v-switch--inset{
		flex-grow: 0;
		margin-right: 10px;
	}
</style>