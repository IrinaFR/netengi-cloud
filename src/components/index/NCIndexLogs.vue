<template>
	<div class="activities">
		<div class="d-flex justify-space-between align-start">
			<label class="titleBlock">Activities logs</label>
			<router-link to="/" class="grayscaleTheme">See all activities</router-link>
		</div>
		<div class="activitiesDate">Today</div>
		<v-list density="compact" variant="text" bg-color="background">
			<v-list-item density="compact" variant="text">
				<div class="d-flex flex-column flex-md-row gap-15">
					<span class="me-5" style="color:#858A94">10:44 AM</span>
					<div class="activitiesName">
						<img src="/images/menu/home.svg" class="me-2 grayscaleTheme">
						<b>Update config map</b>
					</div>
					<span>cert-manager-controller written</span>
				</div>

			</v-list-item>
			<v-divider class="my-1"></v-divider>
			<v-list-item density="compact" variant="text">
				<div class="d-flex flex-column flex-md-row gap-15">
					<span class="me-5" style="color:#858A94">10:44 AM</span>
					<div class="activitiesName">
						<img src="/images/menu/home.svg" class="me-2 grayscaleTheme">
						<b>Update config map</b>
					</div>
					<span>cert-manager-controller written</span>
				</div>

			</v-list-item>
			<v-divider class="my-1"></v-divider>
			<v-list-item density="compact" variant="text">
				<div class="d-flex flex-column flex-md-row gap-15">
					<span class="me-5" style="color:#858A94">10:52 AM</span>
					<div class="activitiesName">
						<img src="/images/menu/home.svg" class="me-2 grayscaleTheme">
						<b>Write kubernetes entity</b>
					</div>
					<span>cert-manager-controller written</span>
				</div>

			</v-list-item>
			<v-divider class="mt-1"></v-divider>
		</v-list>
	</div>
</template>

<style>
	.activities{
		width: 50%;
	}
	.activitiesDate{
		padding: 4px 6px;
		background: rgb(var(--v-theme-grey-200));
		border-radius: 4px;
		color: rgb(var(--v-theme-grey-800));
		margin: 10px 0;
		width: fit-content;
	}
	.activities .v-list-item{
		padding: 0;
	}
	.activities .v-list-item__content{
		display: flex;
		align-items: center;
		margin: 0;
	}
	.activitiesName{
		display: flex;
		align-items: center;
		flex-grow: 1;
	}
	@media(max-width: 960px){
		.activities{
			width: 100%;
		}
	}
</style>