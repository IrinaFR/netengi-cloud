<template>

	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Security Groups</span>
		</div>
		<div class="d-flex justify-space-between align-center my-3 flex-wrap gap-15">
			<h1 class="pageTitle">Netengi-security-group-1</h1>
			<div class="listBtn">
				<v-menu width="240">
					<template v-slot:activator="{ props }">
						<v-btn height="30" density="default" max-height="30" variant="outlined" v-bind="props">
							<v-img src="/images/general/more.svg"></v-img>
							<span>Menu</span>
						</v-btn>
					</template>
					<v-list min-width="150" class="listMenu">
						<v-list-item>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/rebuild.svg"/>
								Rebuild
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/rename.svg"/>
								Rename
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/plus.svg"/>
								Assign floating IP
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/minus.svg"/>
								Dissociate IP
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/password.svg"/>
								Change password
							</v-list-item-title>
							<v-list-item-title class="dropDownItemMenu">
								<v-img src="/images/instances/menu/delete.svg"/>
								Delete
							</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</div>
		</div>

		<v-card variant="flat" class="overviewTab mt-5">
			<ul class="smallText-15 overviewList">
				<li class="d-flex">
					<span class="color-grey-700">ID</span>
					<span>adbb7dc0-6719-4a23-b609-5dd84def2029
						<img src="/images/copy.svg">
					</span>
				</li>
				<li class="d-flex">
					<span class="color-grey-700">Project</span>
					<b>cfcdcc90905244d7a899d53be071f934
						<img src="/images/copy.svg">
					</b>
				</li>
				<li class="d-flex">
					<span class="color-grey-700">Placement Region</span>
					<span class="d-flex align-center">
						<img :src="`/images/flags/ua.svg`" class="iconCountry me-2"/>
						ua-central-1
					</span>
				</li>
				<li class="d-flex">
					<span class="color-grey-700">Created at</span>
					<b>Oct 29, 2022, 9:22:01 PM</b>
				</li>
				<li class="d-flex">
					<span class="color-grey-700">Associated instances</span>
					<a href="mailto:mail@netengi.com">mail@netengi.com</a>
				</li>
			</ul>
		</v-card>
		<v-divider class="my-3"></v-divider>
		<NCSecurityPageTable/>
	</div>
</template>

<script>
	import NCSecurityPageTable from '@/components/security/page/NCSecurityPageTable'
	export default {
		data(){
			return{

			}
		},
		components: {
			NCSecurityPageTable
		}
	}
</script>

<style>
	.listInfoMain{
		display: flex;
		justify-content: space-between;
		gap: 20px;
	}
	.overviewTab{
		flex: 1;
		border-radius: 4px;
		box-shadow: var(--shadow-for-blocks);
		padding: 16px 20px;
		border: solid 1px rgb(var(--v-theme-grey-350));
	}
	.overviewList li{
		margin: 6px 0;
	}
	.overviewList li span:first-child{
		min-width: 200px;
	}
	.iconCollapse{
		padding: 6px;
		border-radius: 4px;
		background: rgb(var(--v-theme-grey-300));
		margin-right: 10px;
	}
	.iconCollapse.open{
		box-shadow: 0 0 0 3px #E0EAFF;
		border: solid 1px rgb(var(--v-theme-primary-200));
		background: rgb(var(--v-theme-background));
	}
	.iconCollapse img{
		transition: transform .15s ease-out;
	}
	.iconCollapse.open img{
		transform: rotate(180deg);
	}
	.v-expansion-panel-title__overlay{
		background: rgb(var(--v-theme-background));
	}
	.v-expansion-panel__shadow{
		box-shadow: var(--shadow-for-blocks);
	}
	.v-expansion-panel.v-expansion-panel--rounded{
		border: solid 1px rgb(var(--v-theme-grey-350));
	}
</style>