<template>
	<v-dialog v-model="show" width="360">
		<v-card color="background">
			<v-card-text class="text-center">
				<v-toolbar density="comfortable" rounded color="background">
					<v-toolbar-title class="ml-0"></v-toolbar-title>
					<v-btn icon dark density="compact" class="me-0 pa-0" @click="show = false">
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-toolbar>
				<img src="/images/modal/save.svg">
				<h3 class="mt-2">Unsaved changes</h3>
				<p class="smallText-15 color-grey-800 my-4">Do you want to save or discard changes?</p>
				<div class="d-flex gap-15 justify-space-between mt-6 mb-2">
					<v-btn variant="outlined" class="flex-grow-1" @click="closeDialog">Discard</v-btn>
					<v-btn variant="tonal" class="flex-grow-1" @click="closeDialog">Save changes</v-btn>
				</div>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	emits: ['update:modelValue'],
	props: {
		modelValue: {
			type: Boolean,
			default: false
		},
		info: {
			type: [String, Object, Number],
			default: ''
		},
	},
	data(){
		return {
			show: this.$props.modelValue
		}
	},
	watch:{
		modelValue(){
			this.show = this.$props.modelValue
		},
		show(){
			this.$emit('update:modelValue', this.show)
		}
	},
	methods: {
		closeDialog(){
			this.show = false
			this.$emit('update:modelValue', this.show)
		}
	}
}
</script>