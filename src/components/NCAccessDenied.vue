<template>
	<div class="mainPage">
		<div class="pageTitle">Error 403</div>
		<div class="contentPage">
			<img src="/images/403.svg">
			<h1>Access Denied</h1>
			<p class="color-grey-700 smallText-15">Sorry, but you don’t have permission to access this page.</p>
			<v-btn density="default" variant="tonal" to="/">Go to Home</v-btn>
			<v-btn density="default" variant="text" to="/">
				<img src="/images/menu/support.svg" class="me-2">
				Write to support
			</v-btn>
		</div>
	</div>
</template>

<style>
	.contentPage{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
	}
</style>