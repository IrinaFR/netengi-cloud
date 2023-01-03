<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to SSH Keys</span>
		</div>
		<div class="pageTitle my-4">Create a SSH Key</div>
		<v-form class="mt-10">
			<div class="form-group">
				<label for="">Name Key</label>
				<v-text-field density="compact" hide-details class="input" variant="outlined"/>
			</div>
			<div class="form-group">
				<label for="">Key Content
					<img src="/images/info.svg" class="ms-2">
				</label>
				<v-textarea variant="outlined" class="input"></v-textarea>
			</div>

		</v-form>


		<div class="mt-7">
			<v-btn density="default" variant="tonal">Create</v-btn>
			<v-btn density="default" class="ms-3" variant="outlined" to="/ssh-keys">Cancel</v-btn>
		</div>
	</div>
</template>
