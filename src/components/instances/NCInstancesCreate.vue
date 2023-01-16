<template>
	<div class="mainPage">
		<div class="backPage cursor-pointer" @click="$router.go(-1)">
			<img src="/images/arrowBack.svg" class="backPageIcon">
			<span>Back to Instances</span>
		</div>
		<div class="pageTitle my-4">Create a new Instance</div>
		<div class="listSteps">
			<div
				class="step"
				v-for="(tab, idx) in tabs" :key="idx"
				:class="{active:idx===activeTab, done:idx<activeTab}"
			>
				<div class="stepTitle">{{ tab.name }}
					<img src="/images/form/checked.svg" class="ms-2">
				</div>
			</div>
		</div>
		<suspense>
			<div class="d-flex justify-space-between">
				<div class="mt-10">
					<keep-alive>
						<NCInstancesCreateConfigure v-model="configure" v-if="!activeTab" @change="changeTab"/>
						<NCInstancesCreateNetwork v-else-if="activeTab===1" @change="changeTab"/>
						<NCInstancesCreateBackup v-else-if="activeTab===2" @change="changeTab"/>
						<NCInstancesCreateSummary @change="changeTab" v-else/>
					</keep-alive>
				</div>
				<v-card variant="flat" class="infoCard pa-5">
					<h3 class="d-inline-block">Estimated Cost</h3>
					<div>
						<span>$0.17</span>
						<span class="smallText-12 color-grey-600">/hour</span>
					</div>
					<v-divider class="my-3"></v-divider>
					<ul class="">
						<li class="mb-2">
							<v-list-item-subtitle>Type Instance</v-list-item-subtitle>
							Basic 1-1
							<div class="d-flex gap-15 smallText-12">
								<v-card variant="flat" class="bg-backround pa-2" v-for="(type, idx) in configure.type" :key="idx">{{type}}</v-card>
							</div>
						</li>
						<li class="mb-2">
							<v-list-item-subtitle>Placement Region</v-list-item-subtitle>
							{{configure.region}}
						</li>
						<li class="mb-2">
							<v-list-item-subtitle>Machines</v-list-item-subtitle>
							{{ configure.machines }}
						</li>
						<li>
							<v-list-item-subtitle>Storage</v-list-item-subtitle>
							{{configure.storage}}
						</li>
						<li class="mb-2">
							<v-list-item-subtitle>Disk Type</v-list-item-subtitle>
							{{configure.disk_type}}
						</li>
						<li class="mb-2">
							<v-list-item-subtitle>Operating System</v-list-item-subtitle>
							{{configure.os}}
						</li>
					</ul>
				</v-card>
			</div>

		</suspense>

	</div>
</template>

<script>
	import NCInstancesCreateConfigure from '@/components/instances/create/NCInstancesCreateConfigure';
	import NCInstancesCreateNetwork from '@/components/instances/create/NCInstancesCreateNetwork';
	import NCInstancesCreateBackup from '@/components/instances/create/NCInstancesCreateBackup';
	import NCInstancesCreateSummary from '@/components/instances/create/NCInstancesCreateSummary';
	export default {
		data(){
			return {
				activeTab: 0,
				tabs: [
					{name: 'Configure Instance'},
					{name: 'Network Settings'},
					{name: 'Backup Settings'}
				],
				configure: {
					name: '',
					type: [],
					region: '',
					machines: 1,
					storage: 1,
					os: '',
					disk_type: 'HDD'
				}
			}
		},
		methods: {
			changeTab(next){
				next ? this.activeTab++ : this.activeTab--
			}
		},
		components: {
			NCInstancesCreateConfigure, NCInstancesCreateNetwork,
			NCInstancesCreateBackup, NCInstancesCreateSummary,
		}
	}
</script>

<style scoped>
	.listSteps{
		display: flex;
		justify-content: space-between;
		column-gap: 10px;
		color: rgb(var(--v-theme-grey-400));
		margin: 30px 0 20px;
	}
	.step{
		cursor: pointer;
		flex: 1;
	}
	.step .stepTitle{
		font-size: 15px;
		font-weight: 700;
		padding: 8px 0;
		border-bottom: solid 2px rgb(var(--v-theme-grey-400));
	}
	.step .stepTitle img{
		display: none;
	}
	.step.done .stepTitle img{
		display: inline;
	}
	.step .stepDesc{
		font-size: 14px;
		padding: 10px 0;
		border-bottom: solid 1px rgb(var(--v-theme-grey-400));
	}
	.step.active .stepTitle,
	.step.done .stepTitle{
		color: rgb(var(--v-theme-primary-600));
		border-bottom: solid 2px rgb(var(--v-theme-primary-600));
	}
	.step.active .stepDesc,
	.step.done .stepDesc{
		color: rgb(var(--v-theme-grey-900));
		border-bottom: solid 1px rgb(var(--v-theme-primary-600));
	}
</style>
