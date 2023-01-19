<template>
	<div class="imageLoadFile mb-2" :ref="idBlockDrop"
		@dragstart="() => {return false}"
		@drop="$_nc_additional_upload_photo_drag_drop"
		@dragover="$_nc_additional_upload_photo_drag_hovered($event,1)"
		@dragleave="$_nc_additional_upload_photo_drag_hovered($event,0)">
		<img src="/images/form/fileUpload.svg" class="mb-2">
		<b>
			<label :for="idInputFilesDrops" class="color-primary-600 cursor-pointer">Click to upload</label>
			<span> or drag and drop</span>
		</b>
		<span class="d-block color-grey-600">.ssh (maximum file size 10MB)</span>
		<div class="errorLoad">
			<img src="/images/form/error.svg" class="me-2">
			<span>Failed to upload file. The format is not supported</span>
		</div>
		<input type="file" multiple :id="idInputFilesDrops" :ref="idInputFilesDrops" class="d-none" @change="$_nc_additional_upload_photo_change">
	</div>
</template>

<script>
export default {
	data(){
		return{
			idBlockDrop:'',
			idInputFilesDrops:''
		}
	},
	methods:{
		$_nc_additional_upload_photo_drag_hovered(e,type){
			if(type){
				e.preventDefault();
				this.$refs[this.idBlockDrop].classList.add('hover')
			}else{
				this.$refs[this.idBlockDrop].classList.remove('hover')
			}
		},
		$_nc_additional_upload_photo_change(){
			this.$emit('update:modelValue',[...this.$refs[this.idInputFilesDrops].files])
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
</style>