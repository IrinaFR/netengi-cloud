<template>
	<div class="mainPage">
		<div class="titleWithBtn mb-5">
			<h1 class="pageTitle">Search results</h1>
			<v-btn density="default" variant="outlined">
				<img src="/images/general/filter.svg" class="me-2">
				Filter
			</v-btn>
		</div>
		<v-tabs v-model="tab" bg-color="background" color="primary-600">
			<v-tab value="1">All</v-tab>
			<v-tab value="2">Products</v-tab>
			<v-tab value="3">Tutorials</v-tab>
		</v-tabs>
		<div class="w-75">
			<div v-if="tab==='1'">
				<div class="d-flex align-center my-5">
					No results matching
					<v-card variant="flat" class="bg-grey-300 width-fit-content ms-2 px-2">insta without variants</v-card>.
				</div>
				<div class="d-flex justify-space-between align-center">
					<h2>Products</h2>
					<span @click="tab='2'" class="cursor-pointer color-primary-600">See all products found</span>
				</div>
				<v-card variant="flat" :to="prod.url" class="mt-3" v-for="(prod, idx) in products.slice(0, 5)" :key="idx">
					<div class="searchItem d-flex align-start smallText-15">
						<img :src="`/images/menu/${prod.icon}.svg`" class="me-2 mt-1">
						<div class="flex-grow-1">
							<b class="color-primary-600">{{prod.title}}</b>
							<div class="color-grey-600" v-if="prod.description">{{prod.description}}</div>
						</div>
					</div>
				</v-card>
				<div class="d-flex justify-space-between align-center mt-9">
					<h2>Tutorials</h2>
					<span @click="tab='3'" class="cursor-pointer color-primary-600">See all tutorials found</span>
				</div>
				<v-card variant="flat" :to="tutorial.url" class="mt-3" v-for="(tutorial, idx) in tutorials.slice(0, 5)" :key="idx">
					<div class="searchItem d-flex align-start smallText-15">
						<img :src="`/images/${tutorial.icon}.svg`" class="me-2 mt-1">
						<div class="flex-grow-1">
							<b class="color-primary-600">{{tutorial.title}}</b>
							<div class="color-grey-600" v-if="tutorial.description">{{tutorial.description}}</div>
						</div>
					</div>
				</v-card>
			</div>
			<div v-if="tab==='2'">
				<div class="d-flex align-center my-5">
					Showing {{(countProducts < products.length) ? countProducts : products.length}} of {{products.length}} result for
					<v-card variant="flat" class="bg-grey-300 width-fit-content ms-2 px-2">insta</v-card>.
				</div>
				<h2>Products</h2>
				<v-card variant="flat" :to="prod.url" class="mt-3" v-for="(prod, idx) in products.slice(0, countProducts)" :key="idx">
					<div class="searchItem d-flex align-start smallText-15">
						<img :src="`/images/menu/${prod.icon}.svg`" class="me-2 mt-1">
						<div class="flex-grow-1">
							<b class="color-primary-600">{{prod.title}}</b>
							<div class="color-grey-600" v-if="prod.description">{{prod.description}}</div>
						</div>
					</div>
				</v-card>
				<v-btn density="default" variant="tonal" class="mt-3" @click="countProducts+=30" v-if="countProducts<products.length">Load more results</v-btn>
			</div>
			<div v-if="tab==='3'">
				<div class="d-flex align-center my-5">
					Showing {{(countTutorials < tutorials.length) ? countTutorials : tutorials.length}} of {{tutorials.length}} result for
					<v-card variant="flat" class="bg-grey-300 width-fit-content ms-2 px-2">insta</v-card>.
				</div>
				<h2>Tutorials</h2>
				<v-card variant="flat" :to="tutorial.url" class="mt-3" v-for="(tutorial, idx) in tutorials.slice(0, countTutorials)" :key="idx">
					<div class="searchItem d-flex align-start smallText-15">
						<img :src="`/images/${tutorial.icon}.svg`" class="me-2 mt-1">
						<div class="flex-grow-1">
							<b class="color-primary-600">{{tutorial.title}}</b>
							<div class="color-grey-600" v-if="tutorial.description">{{tutorial.description}}</div>
						</div>
					</div>
				</v-card>
				<v-btn density="default" variant="tonal" class="mt-3" @click="countTutorials+=30" v-if="countTutorials<tutorials.length">Load more results</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				tab:'1',
				products: [
					{title: 'Instances', description: 'Cloud Compute', url: '/instances', icon: 'instances'},
					{title: 'Create Instance', description: 'Cloud Compute', url: '/instances/create', icon: 'instances'},
					{title: 'Networking Instances', description: 'Cloud Compute', url: '/instances/1/2', icon: 'instances'},
					{title: 'Action with instance #4', description: 'Cloud Compute', url: '/instances/1', icon: 'instances'},
					{title: 'Action with instance #5', description: 'Cloud Compute', url: '/instances/1', icon: 'instances'},
					{title: 'Action with instance #6', description: 'Cloud Compute', url: '/instances/1', icon: 'instances'},
					{title: 'Action with instance #7', description: 'Cloud Compute', url: '/instances/1', icon: 'instances'},
					{title: 'Action with instance #8', description: 'Cloud Compute', url: '/instances/1', icon: 'instances'}
				],
				countProducts: 2,
				tutorials: [
					{title: 'Create a Cloud Compute instance template and managed instance group', description: 'If Customer does not agree to the revised Agreement, please stop using the Services. <br/> Netengi will post any modification to this Agreement to the ...', url: '/instances', icon: 'document'},
					{title: 'Delete Instance tutorial', description: 'Up-to-date, secure, and ready to run.', url: '/instances/create', icon: 'document'},
					{title: 'Create a Cloud Compute instance template and managed instance group', description: 'If Customer does not agree to the revised Agreement, please stop using the Services. <br/> Netengi will post any modification to this Agreement to the ...', url: '/instances', icon: 'document'},
					{title: 'Delete Instance tutorial', description: 'Up-to-date, secure, and ready to run.', url: '/instances/create', icon: 'document'},
					{title: 'Edit Instance tutorial', description: '', url: '/instances/1/2', icon: 'document'},
					{title: 'Create a Cloud Compute instance template and managed instance group', description: 'If Customer does not agree to the revised Agreement, please stop using the Services. <br/> Netengi will post any modification to this Agreement to the ...', url: '/instances', icon: 'document'},
					{title: 'Delete Instance tutorial', description: 'Up-to-date, secure, and ready to run.', url: '/instances/create', icon: 'document'},
					{title: 'Create a Cloud Compute instance template and managed instance group', description: 'If Customer does not agree to the revised Agreement, please stop using the Services. <br/> Netengi will post any modification to this Agreement to the ...', url: '/instances', icon: 'document'},
					{title: 'Delete Instance tutorial', description: 'Up-to-date, secure, and ready to run.', url: '/instances/create', icon: 'document'},
					{title: 'Edit Instance tutorial', description: '', url: '/instances/1/2', icon: 'document'},
				],
				countTutorials: 2,
			}
		},
		created() {
			if(this.$route.params.tab) this.tab = this.$route.params.tab
		}
	}
</script>

<style scoped>
	.titleWithBtn{
		display: flex;
		height: 51px;
		justify-content: space-between;
		margin-bottom: -10px;
	}
	.titleWithBtn h1{
		line-height: 51px;
		font-weight: 500;
	}
	.searchItem{
		border-radius: 8px;
		padding: 16px 20px;
		border: solid 1px rgb(var(--v-theme-grey-350));
	}
	.searchItem:hover{
		border: solid 1px rgb(var(--v-theme-primary-100));
		background: rgb(var(--v-theme-primary-25));
	}
	.searchItem:active{
		border: solid 1px rgb(var(--v-theme-primary-300));
	}
</style>
