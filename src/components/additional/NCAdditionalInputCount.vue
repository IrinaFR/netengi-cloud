<template>
	<div class="inputCounter">
		<button class="btnCount" :disabled="count===min" @click="toCount(false)">
			<img src="/images/general/minus.svg">
		</button>
		<div class="smallText-15 flex-grow-1">{{count}}</div>
		<div class="smallText-15 color-grey-600">{{label}}</div>
		<button class="btnCount" :disabled="count===max" @click="toCount(true)">
			<img src="/images/general/plus.svg">
		</button>
	</div>
</template>

<script>
	export default {
		emits: ['update:modelValue'],
		props: {
			modelValue: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 9999
			},
			min: {
				type: Number,
				default: 0
			},
			label: {
				type: String,
				default: ''
			}
		},
		data(){
			return{
				count: this.$props.modelValue
			}
		},
		methods: {
			toCount(increase){
				increase ? this.count++ : this.count--
				this.$emit('update:modelValue', this.count)
			}
		}
	}
</script>

<style>
	.inputCounter{
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 10px;
		width: fit-content;
		min-width: 160px;
		padding: 10px;
		border-radius: 4px;
		background: rgb(var(--v-theme-background));
		border: solid 1px rgb(var(--v-theme-grey-350));
	}
	.btnCount{
		width: 17px;
		height: 17px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgb(var(--v-theme-grey-400));
		cursor: pointer;
	}
	.btnCount:hover{
		background: rgb(var(--v-theme-primary-300));
	}
	.btnCount:disabled{
		opacity: .5;
	}
</style>