<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Ports</span>
		</div>
		<div class="pageTitle my-4">Create a new Port</div>
		<v-form class="mt-10">
			<div class="form-group">
				<label for="">Name Port</label>
				<v-text-field v-model="name" density="compact" hide-details class="input" variant="outlined"/>
			</div>
			<div class="form-group d-flex align-center justify-start input">
				<v-switch
					v-model="admin"
					inset
					color="primary-600"
					hide-details
					class="flex-grow-0 mr-2"
				></v-switch>
				<b>Admin State Up</b>
				<img src="/images/info.svg" class="ms-2">
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
				<v-text-field v-model="mac" density="compact" hide-details class="input" variant="outlined"/>
			</div>
			<div class="form-group mt-2 d-flex align-center">
				<input type="checkbox" id="port" class="form-check-input mr-2">
				<label for="port" class="d-flex align-center">
					Port Security
					<img src="/images/info.svg" class="ms-2">
				</label>
			</div>
			<div class="form-group mt-2 d-flex align-center">
				<input type="checkbox" id="autoAdd" class="form-check-input mr-2">
				<label for="autoAdd" class="d-flex align-center">
					Auto add security group
					<img src="/images/info.svg" class="ms-2">
				</label>
			</div>
			<div class="form-group">
				<label for="">vNIC Type</label>
				<v-select
					class="input"
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
		</v-form>
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
			name: 'netengi-port1',
			mac: 'fa:3b:6a:1g:m6:61',
			admin: true
		}
	},
	components: {
		NCAdditionalInputTags
	},
}
</script>
