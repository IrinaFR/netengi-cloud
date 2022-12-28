<template>
	<div>
		<v-btn-toggle
			v-model="source"
			rounded="2"
			color="activeToggle"
			group
			:multiple="multiple"
			selected-class="activeToggle"
			mandatory
		>
			<v-btn v-for="(item, idx) in localItems" :key="idx" density="compact" variant="flat" active :value="item[value]">{{item[label]}}</v-btn>
		</v-btn-toggle>
	</div>
</template>

<script>
	export default {
		emits: ['update:modelValue'],
		props: {
			modelValue: [Number, String],
			items: Array,
			multiple: {
				type: Boolean,
				default: false
			},
			label: String,
			value: String,
		},
		data() {
			return{
				localItems: this.$props.items,
				source: ''
			}
		},
	}
</script>

<style scoped>
	.v-btn-group--density-default.v-btn-group{
		height: 40px;
		padding: 2px;
		margin: 5px 0;
		background: rgb(var(--v-theme-grey-300));
	}
	/*.v-btn__overlay{*/
	/*	opacity: 0;*/
	/*}*/
	.v-btn-group .v-btn{
		text-transform: none;
		padding: 0 30px;
		background: rgb(var(--v-theme-grey-300));
	}
	.v-btn-group .v-btn .v-btn__overlay{
		display: none !important;
	}
	.v-btn-group .v-btn.activeToggle{
		background: rgb(var(--v-theme-background)) ;
		color:  rgb(var(--v-theme-primary-600));
		box-shadow: var(--shadow-for-blocks);
		border-radius: 4px;
	}
</style>