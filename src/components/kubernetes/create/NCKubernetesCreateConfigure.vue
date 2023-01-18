<template>
	<div>
		<div>
			<input type="radio" id="devCluster" name="clusterConfigure" v-model="type" :value="1" class="d-none">
			<label for="devCluster" class="clusterType mb-2 w-75">
				<img src="/images/kubernetes/check.svg" class="selectedCluster">
				<div class="clusterTypeInfo smallText-15 pa-7">
					<div class="clusterTypeItem">
						<h3>
							Dev Cluster
							<v-menu open-on-hover>
								<template v-slot:activator="{ props }">
									<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
								<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
							</v-menu>
						</h3>
					</div>
					<div class="clusterTypeItem">
						Master Nodes
						<div class="d-flex fap-15">
							<div class="masterNodes"></div>
						</div>
					</div>
					<div class="clusterTypeItem">
						Nodes
						<div class="d-flex fap-15">
							<div class="nodes"></div>
						</div>
					</div>
					<div class="clusterTypeItem">
						<span class="color-grey-700">vCPU</span>
						<p>3</p>
					</div>
					<div class="clusterTypeItem">
						<span class="color-grey-700">RAM</span>
						<p>6GB</p>
					</div>
					<div class="clusterTypeItem">
						<span class="color-grey-700">Storage</span>
						<p>40GB SSD</p>
					</div>
				</div>
				<v-divider vertical></v-divider>
				<div class="clusterTypeVersion pa-7">
					<div class="form-group">
						<label for="">Version Kubernetes
							<v-menu open-on-hover>
								<template v-slot:activator="{ props }">
									<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
								<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
							</v-menu>
						</label>
						<v-select
							bg-color="background"
							:items="['1.22.9', '1.22.9', '1.22.9']"
							density="compact"
							hide-details
							hide-selected
							variant="outlined"
						>
						</v-select>
					</div>
				</div>
			</label>
		</div>
		<div>
			<input type="radio" id="stagingCluster" name="clusterConfigure" v-model="type" :value="2" class="d-none">
			<label for="stagingCluster" class="clusterType mb-2 w-75">
				<img src="/images/kubernetes/check.svg" class="selectedCluster">
				<div class="clusterTypeInfo smallText-15 pa-7">
					<div class="clusterTypeItem">
						<h3>
							Staging Cluster
							<v-menu open-on-hover>
								<template v-slot:activator="{ props }">
									<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
								<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
							</v-menu>
						</h3>
					</div>
					<div class="clusterTypeItem">
						Master Nodes
						<div class="d-flex fap-15">
							<div class="masterNodes"></div>
						</div>
					</div>
					<div class="clusterTypeItem">
						Nodes
						<div class="d-flex fap-15">
							<div class="nodes"></div>
							<div class="nodes"></div>
							<div class="nodes"></div>
						</div>
					</div>
					<div class="clusterTypeItem">
						<span class="color-grey-700">vCPU</span>
						<p>3</p>
					</div>
					<div class="clusterTypeItem">
						<span class="color-grey-700">RAM</span>
						<p>6GB</p>
					</div>
					<div class="clusterTypeItem">
						<span class="color-grey-700">Storage</span>
						<p>60GB SSD</p>
					</div>
				</div>
				<v-divider vertical></v-divider>
				<div class="clusterTypeVersion pa-7">
					<div class="form-group">
						<label for="">Version Kubernetes
							<v-menu open-on-hover>
								<template v-slot:activator="{ props }">
									<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
								<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
							</v-menu>
						</label>
						<v-select
							bg-color="background"
							:items="['1.22.9', '1.22.9', '1.22.9']"
							density="compact"
							hide-details
							hide-selected
							variant="outlined"
						>
						</v-select>
					</div>
				</div>
			</label>
		</div>
		<div>
			<input type="radio" id="prodCluster" name="clusterConfigure" v-model="type" :value="3" class="d-none">
			<label for="prodCluster" class="clusterType mb-2 w-75">
				<img src="/images/kubernetes/check.svg" class="selectedCluster">
				<div class="clusterTypeInfo smallText-15 pa-7">
					<div class="clusterTypeItem">
						<h3>
							Production Cluster
							<v-menu open-on-hover>
								<template v-slot:activator="{ props }">
									<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
								<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
							</v-menu>
						</h3>
					</div>
					<div class="clusterTypeItem">
						Master Nodes
						<div class="d-flex fap-15">
							<div class="masterNodes"></div>
							<div class="masterNodes"></div>
							<div class="masterNodes"></div>
						</div>
					</div>
					<div class="clusterTypeItem">
						Nodes
						<div class="d-flex fap-15">
							<div class="nodes"></div>
							<div class="nodes"></div>
							<div class="nodes"></div>
						</div>
					</div>
					<div class="clusterTypeItem">
						<span class="color-grey-700">vCPU</span>
						<p>8</p>
					</div>
					<div class="clusterTypeItem">
						<span class="color-grey-700">RAM</span>
						<p>16GB</p>
					</div>
					<div class="clusterTypeItem">
						<span class="color-grey-700">Storage</span>
						<p>160GB SSD</p>
					</div>
				</div>
				<v-divider vertical></v-divider>
				<div class="clusterTypeVersion pa-7">
					<div class="form-group">
						<label for="">Version Kubernetes
							<v-menu open-on-hover>
								<template v-slot:activator="{ props }">
									<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
								<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
							</v-menu>
						</label>
						<v-select
							bg-color="background"
							:items="['1.22.9', '1.22.9', '1.22.9']"
							density="compact"
							hide-details
							hide-selected
							variant="outlined"
						>
						</v-select>
					</div>
				</div>
			</label>
		</div>
		<div>
			<input type="radio" id="otherCluster" name="clusterConfigure" v-model="type" :value="4" class="d-none">
			<label for="otherCluster" class="clusterType mb-2 w-75">
				<img src="/images/kubernetes/check.svg" class="selectedCluster">
				<div class="clusterTypeInfo smallText-15 pa-7">
					<div class="clusterTypeItem">
						<h3>
							Other
							<v-menu open-on-hover>
								<template v-slot:activator="{ props }">
									<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
								<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
							</v-menu>
						</h3>
					</div>
					<div class="clusterTypeItem">
						Master Nodes
						<div class="d-flex fap-15">
							<div class="masterNodes"></div>
							<div class="masterNodes"></div>
							<div class="masterNodes"></div>
						</div>
					</div>
					<div class="clusterTypeItem">
						Nodes
						<div class="d-flex fap-15">
							<div class="nodes"></div>
							<div class="nodes"></div>
							<div class="nodes"></div>
						</div>
					</div>
					<div class="clusterTypeItem">
						<span class="color-grey-700">vCPU</span>
						<p>8</p>
					</div>
					<div class="clusterTypeItem">
						<span class="color-grey-700">RAM</span>
						<p>16GB</p>
					</div>
					<div class="clusterTypeItem">
						<span class="color-grey-700">Storage</span>
						<p>160GB SSD</p>
					</div>
				</div>
				<v-divider vertical></v-divider>
				<div class="clusterTypeVersion pa-7">
					<div class="form-group">
						<label for="">Version Kubernetes
							<v-menu open-on-hover>
								<template v-slot:activator="{ props }">
									<img v-bind="props" src="/images/info.svg" class="ms-2">   </template>
								<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
							</v-menu>
						</label>
						<v-select
							bg-color="background"
							:items="['1.22.9', '1.22.9', '1.22.9']"
							density="compact"
							hide-details
							hide-selected
							variant="outlined"
						>
						</v-select>
					</div>
				</div>
			</label>
		</div>
	</div>
	<div class="mt-7">
		<v-btn density="default" variant="tonal" @click="$emit('change', 1)">Continue</v-btn>
		<v-btn density="default" class="ms-3" variant="outlined" to="/kubernetes">Cancel</v-btn>
	</div>
</template>

<script>
	export default {
		emits: ['change', 'update:modelValue'],
		props: {
			modelValue: Object
		},
		data(){
			return{
				type: 1
			}
		}
	}
</script>

<style>
	.clusterType{
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 4px;
		box-shadow: var(--shadow-for-blocks);
		border: solid 1px rgb(var(--v-theme-grey-350));
	}
	input:checked ~ .clusterType{
		border: solid 1px rgb(var(--v-theme-primary-600));
		background: rgb(var(--v-theme-primary-25));
	}
	.selectedCluster{
		display: none;
		position: absolute;
		top: -10px;
		left: -10px;
	}
	input:checked ~ .clusterType .selectedCluster{
		display: block;
	}
	.clusterTypeInfo{
		display: flex;
		flex: 1;
		flex-wrap: wrap;
		gap: 20px 10px;
		justify-content: space-between;
	}
	.clusterTypeItem{
		flex: 31%;
	}
	.clusterTypeItem p{
		font-weight: 700;
		font-size: 18px;
	}
	.masterNodes, .nodes{
		width: 40px;
		height: 30px;
		border-radius: 4px;
		margin-right: 5px;
	}
	.masterNodes{
		background: #4671F6;
	}
	.nodes{
		background: linear-gradient(119.36deg, #B9C9F9 0.53%, rgba(185, 201, 249, 0.5) 100.53%);
	}
</style>