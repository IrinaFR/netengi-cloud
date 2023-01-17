<template>
	<div class="mainPage">
		<div class="pageTitle">Error 404</div>
		<div class="contentPage">
			<img src="/images/404.svg">
			<h1>Sorry, this page isn’t available</h1>
			<p class="color-grey-700 smallText-15">The page you were looking for couldn’t be found.</p>
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