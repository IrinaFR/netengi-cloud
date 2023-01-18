<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Images</span>
		</div>
		<div class="pageTitle my-4">Create a new Image</div>
		<v-form class="mt-10">
			<div class="form-group">
				<label for="">Name Image</label>
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
				<label for="">Visability</label>
				<v-select
					class="input"
					:items="['Private', 'Private', 'Private']"
					density="compact"
					hide-details
					hide-selected
					variant="outlined"
				>
				</v-select>
			</div>
			<div class="form-group mt-2">
				<label for="" class="d-flex align-center">
					Disk Container Format
					<v-menu open-on-hover>
						<template v-slot:activator="{ props }">
							<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
						<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
					</v-menu>
				</label>
				<NCAdditionalToggles v-model="formatDisk" :items="listDiskformat" label="name" value="value" count="source"/>
			</div>
			<div class="form-group mt-7">
				<label for="" class="d-flex align-center">
					Disk Type
					<v-menu open-on-hover>
						<template v-slot:activator="{ props }">
							<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
						<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
					</v-menu>
				</label>
				<NCAdditionalToggles v-model="source" :items="sourceList" label="name" value="value" count="disk"/>
			</div>
			<div class="form-group" v-if="source===1">
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
			<div class="form-group" v-else>
				<label for="">URL</label>
				<v-text-field density="compact" hide-details class="input" variant="outlined"/>
			</div>
		</v-form>
		<button class="additionalSettings" @click="additional=!additional" :class="{open:additional}">Additional Settings
			<img src="/images/arrows/downPrimary.svg" class="ms-2">
		</button>
		<transition name="fade" mode="out-in"  v-show="additional">
			<div class="customCardOutline">
				<div class="form-group">
					<label for="">Operating System
						<v-menu open-on-hover>
							<template v-slot:activator="{ props }">
								<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
							<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
						</v-menu>
					</label>
					<v-select
						v-model="system"
						:items="listSystems"
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
					<label for="">OS version
						<v-menu open-on-hover>
							<template v-slot:activator="{ props }">
								<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
							<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
						</v-menu>
					</label>
					<v-select
						:items="listVersion"
						:disabled="system===0"
						item-title="name"
						item-value="value"
						density="compact"
						variant="outlined"
					></v-select>
				</div>

				<div class="form-group">
					<label>Minimum Disk Size
						<v-menu open-on-hover>
							<template v-slot:activator="{ props }">
								<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
							<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
						</v-menu>
					</label>
					<NCAdditionalInputCount label="GB"/>
				</div>
				<div class="form-group">
					<label>Minimum Required RAM
						<v-menu open-on-hover>
							<template v-slot:activator="{ props }">
								<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
							<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
						</v-menu>
					</label>
					<NCAdditionalInputCount label="MB"/>
				</div>
				<div class="form-group d-flex align-center">
					<v-switch
						inset
						color="primary-600"
						hide-details
					></v-switch>
					<b>Protected</b>
					<v-menu open-on-hover>
						<template v-slot:activator="{ props }">
							<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
						<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
					</v-menu>
				</div>
			</div>

		</transition>

		<div class="mt-7">
			<v-btn density="default" variant="tonal">Create</v-btn>
			<v-btn density="default" class="ms-3" variant="outlined" to="/images">Cancel</v-btn>
		</div>
	</div>
</template>

<script>
import NCAdditionalToggles from "@/components/additional/NCAdditionalToggles";
import NCAdditionalInputCount from "@/components/additional/NCAdditionalInputCount";
export default {
	data() {
		return{
			formatDisk: '',

			listDiskformat: [
				{value: 'QCOW', name: 'QCOW'},
				{value: 'RAW', name: 'RAW'},
				{value: 'ISO', name: 'ISO'},
			],
			source: '',
			sourceList: [
				{value: 1, name: 'Disk'},
				{value: 2, name: 'URL'},
			],
			files: [
				{load: true, name: '28-10-2022-sshkey-for-project.ssh'},
				{load: false, name: '28-10-2022-sshkey-for-project.ssh'}
			],
			additional: false,
			listSystems: [
				{value: 0, name: 'Choose OS'},
				{value: 3, name: 'Ubuntu'},
				{value: 2, name: 'CentOS'}
			],
			system: 0,
			listVersion: [
				{value: 0, name: 'Specify OS version'},
				{value: 3, name: '22.04'},
			],
		}
	},
	components: {
		NCAdditionalToggles, NCAdditionalInputCount
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
.additionalSettings{
	background: rgb(var(--v-theme-primary-50));
	color: rgb(var(--v-theme-primary-700));
	padding: 0 16px;
	border-radius: 4px;
	height: 40px;
	margin: 10px 0 20px;
}
.additionalSettings.open{
	background: rgb(var(--v-theme-background));
	box-shadow: 0 0 0 3px #E0EAFF;
}
.additionalSettings img{
	transition: transform .15s ease-out;
}
.additionalSettings.open img{
	transform: rotate(180deg);
}
.customCardOutline{
	background: rgb(var(--v-theme-background));
	border-radius: 8px;
	padding: 20px;
	border: 1.5px solid rgb(var(--v-theme-grey-350));
	max-width: 405px;
	box-shadow: 0 0 0 3px #E0EAFF;
}
.v-input.v-input--horizontal.v-switch--inset{
	flex-grow: 0;
	margin-right: 10px;
}
</style>