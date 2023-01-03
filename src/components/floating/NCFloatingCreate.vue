<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Floating IPs</span>
		</div>
		<div class="pageTitle my-4">Create a new Floating IP</div>
		<div class="d-flex justify-space-between">
			<v-form class="mt-10">
				<div class="form-group">
					<label for="">Network</label>
					<v-select
						class="input"
						:items="['Choose a network', 'Choose a network', 'Choose a network']"
						density="compact"
						hide-details
						hide-selected
						variant="outlined"
					>
					</v-select>
				</div>
				<div class="form-group">
					<label for="">Placement Region</label>
					<v-select
						class="input"
						:items="['Choose a region', 'Choose a region', 'Choose a region']"
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
						<img src="/images/info.svg">
					</span>
					<h3 class="d-inline-block">Information</h3>
				</v-card-title>
				<v-card-text class="smallText-15 color-grey-600">
					Create a new floating IP, in  addition, a subnet associated with the network can be  created in the following steps of this wizard.
				</v-card-text>
			</v-card>
		</div>
		<div class="mt-7">
			<v-btn density="default" variant="tonal">Create</v-btn>
			<v-btn density="default" class="ms-3" variant="outlined" to="/images">Cancel</v-btn>
		</div>
	</div>
</template>
