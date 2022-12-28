<template>
<div class="listBtn">
	<v-btn density="default" variant="tonal">Create Instance</v-btn>
	<v-btn density="default" variant="outlined">
		<v-img src="/images/instances/delete.svg"></v-img>
	</v-btn>
	<v-btn density="default" variant="outlined">
		<v-img src="/images/instances/pause.svg"></v-img>
	</v-btn>
	<v-btn density="default" variant="outlined">
		<v-img src="/images/instances/playBtn.svg"></v-img>
	</v-btn>
</div>
</template>

<script>
export default {
name: "NCInstancesTable"
}
</script>

<style scoped>
	.listBtn{
		display: flex;
		margin-bottom: 10px;
	}
	.v-btn .v-responsive{
		width: 20px;
	}
	.v-btn + .v-btn{
		margin-left: 6px;
	}
</style>