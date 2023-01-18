<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to SSH Keys</span>
		</div>
		<div class="pageTitle my-4">Import a SSH Key</div>
		<v-form class="mt-10">
			<div class="form-group">
				<label for="">Name Key</label>
				<v-text-field density="compact" hide-details class="input" variant="outlined"/>
			</div>
			<div class="form-group">
				<label for="">File</label>
				<div
					ref="imageLoadFile"
					class="imageLoadFile mb-2"
					@dragstart="() => {return false}"
					@dragover="$refs.imageLoadFile.classList.add('hover')"
					@dragleave="$refs.imageLoadFile.classList.remove('hover')"
					>
					<img src="/images/form/fileUpload.svg" class="mb-2">
					<b>
						<label for="imageLoadFile" class="color-primary-600 cursor-pointer">Click to upload</label>
						<span> or drag and drop</span>
					</b>
					<span class="d-block color-grey-600">.ssh (maximum file size 10MB)</span>
					<div class="errorLoad">
						<img src="/images/form/error.svg" class="me-2">
						<span>Failed to upload file. The format is not supported</span>
					</div>

				</div>
				<input type="file" id="imageLoadFile" class="d-none">
				<div class="form-group loadedFile" v-for="(file, idx) in files" :key="idx">
					<div class="d-flex justify-space-between">
						<img src="/images/index/document.svg" class="me-2">
						<div class="loadedFileName flex-grow-1">
							<b class="small-text-14">28-10-2022-sshkey-for-project.ssh</b>
							<div class="small-text-12 color-grey-600">140.2 KB</div>
						</div>
						<img src="/images/general/close.svg" class="removeLoaded" @click="files.splice(idx, 1)">
					</div>
					<div class="loadProgress" v-if="!file.load">
						<span>68% • 7 sec left </span>
						<v-progress-linear color="primary-600" model-value="20" rounded></v-progress-linear>
					</div>
				</div>
			</div>
			<div class="form-group">
				<label>Key Content
					<v-menu open-on-hover>
						<template v-slot:activator="{ props }">
							<img v-bind="props" src="/images/info.svg" class="ms-2 infoBlockAll">
						</template>
						<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
					</v-menu>
				</label>
				<v-textarea variant="outlined" class="input"></v-textarea>
			</div>
		</v-form>
		<div class="mt-7">
			<v-btn density="default" to="/volumes/create" variant="tonal">Import</v-btn>
			<v-btn density="default" class="ms-3" variant="outlined" to="/ssh-keys">Cancel</v-btn>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return{
			files: [
				{load: true, name: 'netengi-sshkey-1.ssh'},
				{load: false, name: 'netengi-sshkey-1.ssh'}
			],
		}
	},
}
</script>

<style scoped>
.imageLoadFile{
	padding: 20px 10px;
	max-width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	border: 1.5px dashed rgb(var(--v-theme-grey-350));
}
.imageLoadFile.hover{
	background: rgba(var(--v-theme-primary-100), .1);
	border: 1.5px dashed rgb(var(--v-theme-primary-300));
}
.imageLoadFile.error .errorLoad{
	display: block;
}
.errorLoad{
	display: none;
	background: #FFE5E5;
	padding: 5px 8px;
	border-radius: 4px;
	margin-top: 18px;
	color: #FF3D3D;
}
.loadedFile{
	background: rgb(var(--v-theme-background));
	border-radius: 4px;
	padding: 10px;
	border: 1.5px solid rgb(var(--v-theme-grey-350));
	max-width: 50%;
}
.removeLoaded{
	height: 20px;
	cursor: pointer;
}
.loadProgress{
	text-align: end;
	width: calc(100% - 30px);
	margin-top: -20px;
}
</style>