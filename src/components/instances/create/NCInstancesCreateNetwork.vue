<template>
	<v-card variant="flat" class="overviewTab w-66 mb-5">
		<div class="form-group">
			<label for="">Network</label>
			<div class="d-flex align-center w-100 gap-15">
				<v-select
					class="input"
					placeholder="No networks"
					disabled
					density="compact"
					hide-details
					hide-selected
					variant="outlined"
				>
				</v-select>
				<span class="smallText-15 cursor-pointer d-flex align-center color-primary-600">
					<img src="/images/general/restartBlue.svg" class="me-2">
					<span>Refresh list</span>
				</span>
			</div>
			<v-btn density="compact" class="mt-2" variant="tonal" to="/networks/create">Create Network</v-btn>
		</div>
	</v-card>
	<v-card variant="flat" class="overviewTab w-66 mb-5">
		<div class="form-group">
			<label for="">SSH Key</label>
			<div class="d-flex align-center gap-15">
				<v-select
					class="input"
					placeholder="No SSH Key"
					disabled
					density="compact"
					hide-details
					hide-selected
					variant="outlined"
				>
				</v-select>
				<span class="smallText-15 cursor-pointer d-flex align-center color-primary-600">
					<img src="/images/general/restartBlue.svg" class="me-2">
					<span>Refresh list</span>
				</span>
			</div>
			<v-btn density="compact" class="mt-2" variant="tonal" to="/ssh-keys/create">Create New Key</v-btn>
			<v-btn density="compact" class="mt-2" variant="outlined">Add Public SSH Key</v-btn>
		</div>
	</v-card>
	<v-card variant="flat" class="overviewTab w-66 mb-5">
		<div class="form-group">
			<label for="">Firewall
				<img src="/images/info.svg" class="ms-2">
			</label>
			<div class="d-flex align-center gap-15">
				<v-select
					multiple
					:items="['default', 'default', 'default']"
					class="input"
					density="compact"
					hide-details
					hide-selected
					variant="outlined"
				>
				</v-select>
			</div>
			<v-btn density="compact" class="mt-2" variant="tonal" to="/ports/create">Create New Port</v-btn>
		</div>
	</v-card>
	<div class="form-group d-flex align-center">
		<v-switch
			inset
			color="primary-600"
			hide-details
			class="flex-grow-0 me-2"
		></v-switch>
		<b>Assign an external IP</b>
		<img src="/images/info.svg" class="ms-2">
	</div>
	<div class="mt-7">
		<v-btn density="default" variant="tonal" @click="$emit('change', 1)">Continue</v-btn>
		<v-btn density="default" class="ms-3" variant="outlined" @click="$emit('change')">Back</v-btn>
	</div>
</template>

<script>
	export default {
		emits: ['change', 'update:modelValue'],
		props: {
			modelValue: Object
		},
	}
</script>

<style>
	.overviewTab{
		position: relative;
		width: fit-content;
		border-radius: 8px;
		box-shadow: var(--shadow-for-blocks);
		padding: 16px 20px;
		border: solid 1px rgb(var(--v-theme-grey-350));
	}
	.infoCard ul{
		list-style: none;
	}
</style>