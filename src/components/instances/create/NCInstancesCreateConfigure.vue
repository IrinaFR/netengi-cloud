<template>
	<div class="form-group">
		<label for="">Name Instance</label>
		<v-text-field v-model="configure.name" density="compact" hide-details class="input" variant="outlined"/>
	</div>
	<div class="form-group">
		<label for="">Type Instance</label>
		<v-select
			v-model="configure.type"
			multiple
			class="input"
			:items="['1 CPU', '1GB RAM', '$0,18/h']"
			density="compact"
			hide-details
			hide-selected
			variant="outlined"
		>
		</v-select>
	</div>
	<div class="form-group">
		<label for="">Placement Region</label>
		<v-select
			v-model="configure.region"
			class="input"
			:items="['ua-central-1', 'ua-central-1', 'ua-central-1']"
			density="compact"
			hide-details
			hide-selected
			variant="outlined"
		>
			<template v-slot:item="{props}">
				<v-list-item v-bind="props">
					<template v-slot:prepend>
									<span class="d-flex align-center">
										<img :src="`/images/flags/ua.svg`" class="iconCountry me-2"/>
									</span>
					</template>
				</v-list-item>
			</template>
		</v-select>
	</div>
	<div class="form-group">
		<label for="">Operating System</label>
		<v-select
			v-model="configure.os"
			class="input"
			:items="['Ubuntu 18.04', 'Ubuntu 18.04', 'Ubuntu 18.04']"
			density="compact"
			hide-details
			hide-selected
			variant="outlined"
		>
			<template v-slot:item="{props}">
				<v-list-item v-bind="props">
					<template v-slot:prepend>
									<span class="d-flex align-center">
										<img :src="`/images/os/ubuntu.svg`" class="iconCountry me-2"/>
									</span>
					</template>
				</v-list-item>
			</template>
		</v-select>
	</div>
	<div class="form-group mt-2">
		<label for="" class="d-flex align-center">
			Disk Type
			<v-menu open-on-hover>
				<template v-slot:activator="{ props }">
					<img v-bind="props" src="/images/info.svg" class="ms-2">
				</template>
				<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
			</v-menu>
		</label>
		<NCAdditionalToggles v-model="configure.disk_type" :items="listDiskformat" label="name" value="value" count="source"/>
	</div>
	<div class="d-flex gap-30">
		<div class="form-group">
			<v-card variant="flat" max-width="500" class="bg-grey-100 pa-5 smallText-15">
				<div class="mb-2">
					<span>Bandwidth</span>
					<span class="color-grey-600">(MB/s)</span>
				</div>
				<div class="d-flex gap-30">
					<div>
						<NCAdditionalDiagram :datasets="bandwidth.reading" label="Reading" count="31"/>
					</div>
					<div>
						<NCAdditionalDiagram :datasets="bandwidth.record" label="Record" count="16"/>
					</div>
				</div>
			</v-card>
		</div>
		<div class="form-group">
			<v-card variant="flat" max-width="500" class="bg-grey-100 pa-5 smallText-15">
				<div class="mb-2">
					<span>Operations per second</span>
					<span class="color-grey-600">(IOPS)</span>
				</div>
				<div class="d-flex gap-30">
					<div>
						<NCAdditionalDiagram :datasets="bandwidth.reading" label="Reading" count="1000"/>
					</div>
					<div>
						<NCAdditionalDiagram :datasets="bandwidth.record" label="Record" count="300"/>
					</div>
				</div>
			</v-card>
		</div>
	</div>
	<div class="form-group">
		<label>Number of machines to create
			<v-menu open-on-hover>
				<template v-slot:activator="{ props }">
					<img v-bind="props" src="/images/info.svg" class="ms-2 infoBlockAll">
				</template>
				<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
			</v-menu>
		</label>
		<NCAdditionalInputCount v-model="configure.machines" label="items"/>
	</div>
	<div class="form-group">
		<label>Storage
			<v-menu open-on-hover>
				<template v-slot:activator="{ props }">
					<img v-bind="props" src="/images/info.svg" class="ms-2 infoBlockAll">
				</template>
				<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
			</v-menu>
		</label>
		<NCAdditionalInputCount v-model="configure.storage" label="GB"/>
	</div>
	<div class="mt-7">
		<v-btn density="default" variant="tonal" @click="$emit('change', 1), $emit('update:modelValue', configure)">Continue</v-btn>
		<v-btn density="default" class="ms-3" variant="outlined" to="/instances">Cancel</v-btn>
	</div>
</template>

<script>
import NCAdditionalToggles from "@/components/additional/NCAdditionalToggles";
import NCAdditionalInputCount from "@/components/additional/NCAdditionalInputCount";
import NCAdditionalDiagram from "@/components/additional/NCAdditionalDiagram";
export default {
	emits: ['change', 'update:modelValue'],
	props: {
		modelValue: Object
	},
	data(){
		return{
			listDiskformat: [
				{value: 'HDD', name: 'HDD'},
				{value: 'SSD', name: 'SSD'},
			],
			bandwidth: {
				reading: [
					{
						backgroundColor: ['#9BD0B7', '#229B61', '#E8E8E8'],
						data: [20, 10, 100]
					}
				],
				record: [
					{
						backgroundColor: ['#8BABF8', '#193E8A', '#E8E8E8'],
						data: [20, 10, 100]
					}
				],
			},
			configure: this.$props.modelValue
		}
	},
	components: {
		NCAdditionalToggles, NCAdditionalInputCount,
		NCAdditionalDiagram,
	}
}
</script>

<style>
.infoCard ul{
	list-style: none;
}
</style>