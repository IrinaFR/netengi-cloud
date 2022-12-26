<template>
	<div class="activities">
		<div class="d-flex justify-space-between align-start">
			<label class="titleBlock">Activities logs</label>
			<router-link to="/">See all activities</router-link>
		</div>
		<div class="activitiesDate">Today</div>
		<v-list density="compact">
			<v-list-item density="compact">
				<span class="me-5" style="color:#858A94">10:44 AM</span>
				<div class="activitiesName">
					<img src="/images/menu/home.svg" class="me-2">
					<b>Update config map</b>
				</div>
				<span>cert-manager-controller written</span>
			</v-list-item>
			<v-divider></v-divider>
			<v-list-item density="compact">
				<span class="me-5" style="color:#858A94">10:44 AM</span>
				<div class="activitiesName">
					<img src="/images/menu/home.svg" class="me-2">
					<b>Update config map</b>
				</div>
				<span>cert-manager-controller written</span>
			</v-list-item>
			<v-divider></v-divider>
			<v-list-item density="compact">
				<span class="me-5" style="color:#858A94">10:52 AM</span>
				<div class="activitiesName">
					<img src="/images/menu/home.svg" class="me-2">
					<b>Write kubernetes entity</b>
				</div>
				<span>cert-manager-controller written</span>
			</v-list-item>
			<v-divider></v-divider>
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
</style>