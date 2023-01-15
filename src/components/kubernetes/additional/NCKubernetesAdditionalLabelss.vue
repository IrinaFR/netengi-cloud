<template>
	<div class="inputTags">
		<h3>Labels</h3>
		<v-btn :disabled="tags.length>=max" variant="outlined" class="d-block my-2" @click="tags.push({key: '', value: ''})">
			<div class="btnTags">
				<img src="/images/general/plus.svg">
			</div>
			Add Label
		</v-btn>
		<v-list density="compact">
			<v-list-item density="compact" variant="flat" rounded class="bg-grey-200 py-3 mb-1" v-for="(tag, idx) in tags" :key="idx">
				<div class="d-flex align-end">
					<div>
						<label for="">Key
							<img src="/images/info.svg" class="ms-2">
						</label>
						<v-text-field v-model="tags[idx].key" density="compact" @change="$emit('update:modelValue', tags)" bg-color="background" hide-details class="input mr-1" variant="outlined"/>
					</div>
					<div >
						<label for="">Value
							<img src="/images/info.svg" class="ms-2">
						</label>
						<v-text-field v-model="tags[idx].value" density="compact" @change="$emit('update:modelValue', tags)" bg-color="background" hide-details class="input mr-1" variant="outlined"/>
					</div>
					<v-btn density="default" variant="outlined" @click="tags.splice(idx,1)">
						<v-img src="/images/general/delete.svg"></v-img>
					</v-btn>
				</div>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	export default {
		emits: ['update:modelValue'],
		props: {
			modelValue: {
				type: Array,
				default(){
					return ['']
				}
			},
			max: {
				type: Number,
				default: 10
			},
		},
		data(){
			return{
				tags: this.$props.modelValue
			}
		},
		watch: {
			'tags.length'(){
				this.$emit('update:modelValue', this.tags)
			}
		},
	}
</script>

<style>
	.inputTags{
		column-gap: 10px;
		width: fit-content;
		min-width: 160px;
		padding: 16px 20px;
		border-radius: 4px;
		background: rgb(var(--v-theme-background));
		border: solid 1px rgb(var(--v-theme-grey-350));
	}
	.btnTags{
		width: 17px;
		height: 17px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgb(var(--v-theme-grey-400));
		cursor: pointer;
	}
	.btnTags:disabled{
		opacity: .5;
	}
</style>