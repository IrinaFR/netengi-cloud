<template>
	<div class="listToggles">
		<div class="btnToggle" v-for="(item, idx) in items" :key="item">
			<input
				v-model="select"
				:id="`itemToggle-${count}${idx}`"
				:name="`itemToggle${count}`"
				:type="multiple ? 'checkbox' : 'radio'"
				class="d-none btnToggleInput"
				:value="item[value]"
				@change="$emit('update:modelValue', select)">
			<label :for="`itemToggle-${count}${idx}`" class="btnToggleName">{{item[label]}}</label>
		</div>
	</div>
</template>

<script>
	export default {
		emits: ['update:modelValue'],
		props: {
			modelValue: [Number, String, Array],
			items: Array,
			multiple: {
				type: Boolean,
				default: false
			},
			label: String,
			value: String,
			count: {
				type: String,
				default: ''
			},
		},
		data() {
			return{
				select: '',
			}
		},
		created() {
			if (this.multiple){
				this.select = [this.items[0][this.value]]
			} else this.select = this.items[0][this.value]
			this.$emit('update:modelValue', this.select)
		}
	}
</script>

<style scoped>
	.listToggles{
		display: flex;
		align-items: center;
		width: fit-content;
		background: rgb(var(--v-theme-grey-300));
		padding: 2px;
		border-radius: 4px;
		column-gap: 4px;
		height: 40px;
	}
	.btnToggleName{
		padding: 8px 23px;
		border-radius: 4px;
		background: none;
		color: rgb(var(--v-theme-grey-800));
		font-weight: 400;
		cursor: pointer;
		transition: background .15s ease-out;
	}
	.btnToggleName:hover{
		color:  rgb(var(--v-theme-grey-900));
	}
	.btnToggleInput:checked ~ .btnToggleName{
		background: rgb(var(--v-theme-background));
		color:  rgb(var(--v-theme-primary-600));
		box-shadow: var(--shadow-for-blocks);
	}
</style>