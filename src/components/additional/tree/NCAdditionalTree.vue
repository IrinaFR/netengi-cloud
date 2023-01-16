<template>
	<div class="treeItem">
		<div class="myTagTree">{{ treeData.name }}</div>
		<div v-if="treeData.children">
			<NCAdditioanlTreeItem :treeItem="treeData.children" :numberItem="0"/>
		</div>
	</div>
</template>

<script>
import NCAdditioanlTreeItem from "@/components/additional/tree/NCAdditioanlTreeItem";
export default {
	components: {NCAdditioanlTreeItem},
	data(){
		return{
			treeData:{
				name:'external_network',
				children:{
					name:'IPv4',
					children: {
						name:'2.59.223.31',
						moreTags:['rDNS']
					}
				}
			}
		}
	}
}
</script>

<style>
	.listTags{
		display: flex;
	}
	.treeItem .v-img{
		width: 14.5px;
		height: 23.5px;
		margin: -9px 0 0 15.5px;
		flex: none;
	}
	.myTagTree{
		font-weight: 500;
		font-size: 15px;
		line-height: 20px;
		width: fit-content;
		padding: 6px 10px;
		color: rgb(var(--v-theme-primary-600));
		background: rgb(var(--v-theme-primary-25));
		border: 2px solid rgb(var(--v-theme-primary-100));
		box-shadow: 0 1px 2px rgba(139, 171, 248, 0.1);
		border-radius: 4px;
		margin-bottom: 8px;
	}
	.myTagTreeEmpty{
		font-weight: 500;
		font-size: 15px;
		line-height: 20px;
		width: fit-content;
		padding: 6px 10px;
		color: rgb(var(--v-theme-primary-600));
		background: rgb(var(--v-theme-grey-background));
		border: 2px solid rgb(var(--v-theme-primary-100));
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		margin-left: 4px;
	}
</style>