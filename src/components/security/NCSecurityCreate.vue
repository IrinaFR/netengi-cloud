<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Security Groups</span>
		</div>
		<div class="pageTitle my-4">Create a new Security Group</div>
		<div class="d-flex justify-space-between">
			<v-form class="mt-10">
				<div class="form-group">
					<label for="">Name</label>
					<v-text-field density="compact" hide-details class="input" variant="outlined"/>
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
					Create a new Security Group, in addition, a subnet  associated with the network  can be created in the  following steps of this  wizard.
				</v-card-text>
			</v-card>
		</div>
		<div class="mt-7">
			<v-btn density="default" variant="tonal">Create</v-btn>
			<v-btn density="default" class="ms-3" variant="outlined" to="/images">Cancel</v-btn>
		</div>
	</div>
</template>
