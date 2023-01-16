<template>
	<div class="treeItem" :style="'margin-left:'+(25*numberItem)+'px;'">
		<div class="listTags">
			<v-img src="/images/tree/line.svg"/>
			<div class="myTagTree">{{ treeItem.name }}</div>
			<div v-if="treeItem.moreTags">
				<div class="myTagTreeEmpty" v-for="item of treeItem.moreTags" :key="item">{{ item }}</div>
			</div>
		</div>
		<div v-if="treeItem.children">
			<NCAdditioanlTreeItem :treeItem="$props.treeItem.children" :numberItem="numberItemLocal"/>
		</div>
	</div>
</template>

<script>
import NCAdditioanlTreeItem from "@/components/additional/tree/NCAdditioanlTreeItem";
export default {
	components: {NCAdditioanlTreeItem},
	props:{
		treeItem:Object,
		numberItem:Number
	},
	data(){
		return{
			numberItemLocal:this.$props.numberItem+1
		}
	}
}
</script>