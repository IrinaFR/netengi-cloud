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
				<NCAdditionalUploadPhoto v-model="uploadedFiles"/>
			</div>
			<div class="form-group">
				<label for="">Key Content
					<v-menu open-on-hover>
						<template v-slot:activator="{ props }">
							<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
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
import NCAdditionalUploadPhoto from "@/components/additional/NCAdditionalUploadPhoto";
export default {
	components:{NCAdditionalUploadPhoto},
	data() {
		return{
			uploadedFiles:null,
			files: [
				{load: true, name: 'netengi-sshkey-1.ssh'},
				{load: false, name: 'netengi-sshkey-1.ssh'}
			],
		}
	},
}
</script>