<template>
	<v-btn @click="errorFile=!errorFile"> set err</v-btn>
	<v-btn @click="loaded=!loaded"> set loaded</v-btn>
	<div class="imageLoadFile mb-2" v-bind:class="{'noBorder':file}" :ref="idBlockDrop"
		@drop="$_nc_additional_upload_photo_drag_drop"
		@dragover="$_nc_additional_upload_photo_drag_hovered($event,1)"
		@dragleave="$_nc_additional_upload_photo_drag_hovered($event,0)">
		<div v-if="!file">
			<div class="blockUpload">
				<img src="/images/form/fileUpload.svg" class="mb-2">
				<b>
					<label :for="idInputFilesDrops" class="color-primary-600 cursor-pointer">Click to upload</label>
					<span> or drag and drop</span>
				</b>
				<span class="d-block color-grey-600">.ssh (maximum file size 10MB)</span>
			</div>
			<div class="errorLoad" v-if="errorFile">
				<img src="/images/form/error.svg" class="me-2">
				<span>Failed to upload file. The format is not supported</span>
			</div>
		</div>
		<div class="form-group loadedFile" v-else>
			<div class="d-flex justify-space-between">
				<img src="/images/index/document.svg" class="me-2">
				<div class="loadedFileName flex-grow-1">
					<b class="small-text-14">{{file.name}}</b>
					<div class="small-text-12 color-grey-600">{{ Math.ceil(file.size/1024) }} KB</div>
				</div>
				<img src="/images/general/close.svg" class="removeLoaded" @click="file=null">
			</div>
			<div class="loadProgress" v-if="loaded">
				<span>68% • 7 sec left </span>
				<v-progress-linear color="primary-600" model-value="20" rounded></v-progress-linear>
			</div>
		</div>
		<input type="file" multiple :id="idInputFilesDrops" :ref="idInputFilesDrops" class="d-none" @change="$_nc_additional_upload_photo_change">
	</div>
</template>

<script>
export default {
	props:{
		modelValue:File
	},
	data(){
		return{
			idBlockDrop:'',
			idInputFilesDrops:'',
			errorFile:false,
			file:null,
			loaded:false
		}
	},
	methods:{
		$_nc_additional_upload_photo_drag_hovered(e,type){
			this.errorFile=false
			if(type){
				e.preventDefault();
				this.$refs[this.idBlockDrop].classList.add('hover')
			}else{
				this.$refs[this.idBlockDrop].classList.remove('hover')
			}
		},
		$_nc_additional_upload_photo_change(){
			this.file=this.$refs[this.idInputFilesDrops].files[0]
			this.$emit('update:modelValue',this.file)
		},
		$_nc_additional_upload_photo_drag_drop(e){
			e.preventDefault();
			this.$refs[this.idInputFilesDrops].files = e.dataTransfer.files;
			this.$_nc_additional_upload_photo_change();
		}
	},
	created() {
		this.idBlockDrop='blockDrop-'+new Date().getTime()
		this.idInputFilesDrops='inputFilesDrops-'+new Date().getTime()
	}
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
	.noBorder{
		border: none;
		display: block;
		padding: 20px 0;
	}
	.imageLoadFile.hover{
		background: rgba(var(--v-theme-primary-100), .1);
		border: 1.5px dashed rgb(var(--v-theme-primary-300));
	}
	.errorLoad{
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
		width: 100%;
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
	.blockUpload{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>