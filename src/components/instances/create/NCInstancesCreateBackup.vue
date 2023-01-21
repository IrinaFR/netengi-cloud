<template>
	<div class="form-group d-flex align-center">
		<v-switch
			v-model="backup"
			inset
			color="active"
			hide-details
			class="flex-grow-0 me-2"
		></v-switch>
		<b>Enable Backup</b>
		<v-menu open-on-hover>
			<template v-slot:activator="{ props }">
				<img v-bind="props" src="/images/info.svg" class="ms-2">
			</template>
			<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
		</v-menu>
	</div>
	<div v-if="backup">
		<div class="form-group">
			<label for="">Name Backup
				<v-menu open-on-hover>
					<template v-slot:activator="{ props }">
						<img v-bind="props" src="/images/info.svg" class="ms-2">
					</template>
					<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
				</v-menu>
			</label>
			<v-text-field density="compact" hide-details class="input" variant="outlined"/>
		</div>
		<div class="form-group">
			<label>Max numbers of full backups
				<v-menu open-on-hover>
					<template v-slot:activator="{ props }">
						<img v-bind="props" src="/images/info.svg" class="ms-2">
					</template>
					<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
				</v-menu>
			</label>
			<NCAdditionalInputCount/>
		</div>

		<v-card variant="flat" class="bg-grey-100 w-66 pa-5">
			<h3>Schedule Backup</h3>
			<div class="form-group mt-3">
				<label>Date</label>
				<v-chip-group
					v-model="days"
					multiple
					selected-class="bg-primary-600"
					variant="tonal"
				>
					<v-chip
						v-for="(day, idx) in date"
						:key="day"
						:value="day"
						:class="{'ms-5':idx===date.length-1}"
					>
						{{ day }}
					</v-chip>
				</v-chip-group>
			</div>
			<div class="form-group">
				<label>Time</label>
				<div class="d-flex align-center">
					<v-text-field density="compact" hide-details class="inputTime bg-background" variant="outlined"/>
					<span class="mx-2">:</span>
					<v-text-field density="compact" hide-details class="inputTime bg-background" variant="outlined"/>
				</div>
			</div>
			<div class="d-flex align-start">
				<v-menu open-on-hover>
					<template v-slot:activator="{ props }">
						<img v-bind="props" src="/images/info.svg" class="ms-2">
					</template>
					<v-card class="pa-2" max-width="250">Sneak peak at soon launching Netengi cloud. More info you can look on netengi.com</v-card>
				</v-menu>
				<p>The backup schedule uses the <b>GMT+03:00</b> time zone. <br>
					Backup time is set in 24-hour format.</p>
			</div>
		</v-card>
	</div>
	<div class="mt-7">
		<v-btn density="default" variant="tonal" @click="$emit('change', 1)">Continue</v-btn>
		<v-btn density="default" class="ms-3" variant="outlined" @click="$emit('change')">Back</v-btn>
	</div>
</template>

<script>
import NCAdditionalInputCount from '@/components/additional/NCAdditionalInputCount'
export default {
	emits: ['change', 'update:modelValue'],
	props: {
		modelValue: Object
	},
	data(){
		return{
			backup: true,
			days: ['All'],
			date: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'All'],
			allDays: false
		}
	},
	components: {
		NCAdditionalInputCount
	}
}
</script>

<style>
.overviewTab{
	position: relative;
	width: fit-content;
	border-radius: 8px;
	box-shadow: var(--shadow-for-blocks);
	padding: 16px 20px;
	border: solid 1px rgb(var(--v-theme-grey-350));
}
.inputTime{
	width: 52px;
	max-width: 52px;
}
.infoCard ul{
	list-style: none;
}
.v-chip{
	border-radius: 4px;
	border: 1px solid rgb(var(--v-theme-grey-350));
}
.v-chip .v-chip__underlay{
	opacity: 1;
	background: white;
	z-index: -1;
}
</style>