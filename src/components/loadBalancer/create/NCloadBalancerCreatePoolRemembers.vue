<template>
	<div class="d-flex justify-space-between gap-30">
		<div class="flex-grow-1">
			<div class="inputTags">
				<h3>Allocated Members</h3>
				<v-btn variant="outlined" class="d-block my-2" @click="members.push({ip: '',subnet: '', port: '', weight: ''})">
					<div class="btnTags">
						<img src="/images/general/plus.svg">
					</div>
					Add External Member
				</v-btn>
				<v-list density="compact">
					<v-list-item density="compact" variant="flat" rounded class="bg-grey-200 py-3 mb-1" v-for="(tag, idx) in members" :key="idx">
						<div class="d-flex justify-space-between gap-15 align-center">
							<div class="form-group flex-grow-1">
								<label for="">IP Address</label>
								<v-text-field v-model="members[idx].ip" density="compact" bg-color="background" hide-details class="input w-100 mr-1" variant="outlined"/>
							</div>
							<div class="form-group flex-grow-1">
								<label for="">Subnet</label>
								<v-select
									v-model="members[idx].subnet"
									class="input w-100"
									bg-color="background"
									:items="['Choose a subnet', 'Choose a subnet', 'Choose a subnet']"
									density="compact"
									hide-details
									hide-selected
									variant="outlined"
								>
								</v-select>
							</div>
							<div class="form-group">
								<label for="">Port</label>
								<v-text-field v-model="members[idx].port" density="compact" bg-color="background" hide-details variant="outlined"/>
							</div>
							<div class="form-group">
								<label for="">Weight</label>
								<v-text-field v-model="members[idx].weight" density="compact" bg-color="background" hide-details variant="outlined"/>
							</div>
							<v-btn density="default" variant="outlined" @click="members.splice(idx,1)">
								<v-img src="/images/general/delete.svg"></v-img>
							</v-btn>
						</div>
					</v-list-item>
				</v-list>
			</div>
			<button class="additionalSettings" @click="additional=!additional" :class="{open:additional}">Add Existing Instances
				<img src="/images/arrows/downPrimary.svg" class="ms-2">
			</button>
			<transition name="fade" mode="out-in"  v-show="additional">
				<div class="customCardOutlineWidth">
					<v-table density="compact" class="tableMain mt-2">
						<thead class="bg-grey-200">
						<tr>
							<th class="text-left">Name</th>
							<th class="text-left">IP Address
								<img src="/images/arrows/down.svg" class="ms-1">
							</th>
							<th></th>
						</tr>
						</thead>
						<tbody>
						<tr v-for="item in table" :key="item.id">
							<td class="tableName">
								<span>{{item.name}}</span>
							</td>
							<td>{{item.ip}}</td>
							<td class="text-end">
								<v-btn density="compact" height="30" width="65" class="my-1" variant="tonal" @click="item.check=true" v-if="!item.check">Add</v-btn>
								<v-btn density="compact" height="30" width="65" class="my-1" variant="outlined" @click="item.check=false" v-else>
									<v-img src="/images/general/close.svg" width="22"></v-img>
								</v-btn>
							</td>
						</tr>
						</tbody>
					</v-table>
				</div>
			</transition>
		</div>
		<v-card variant="flat" class="infoCard">
			<v-card-title>
					<span class="iconInfoCard me-2">
						<img src="/images/info.svg">
					</span>
				<h3 class="d-inline-block">Information</h3>
			</v-card-title>
			<v-card-text class="smallText-15 color-grey-600">
				Add members to the load  balancer pool.
			</v-card-text>
		</v-card>
	</div>
	<div class="mt-7">
		<v-btn density="default" variant="tonal" @click="$emit('change', 1)">Continue</v-btn>
		<v-btn density="default" class="ms-3" variant="outlined" @click="$emit('change', 0)">Cancel</v-btn>
	</div>
</template>

<script>
export default {
	emits: ['change'],
	data(){
		return {
			additional: false,
			table: [
				{id: 1, check: false, name: 'netengi-instance1', ip: '2.59.223.31/20'},
				{id: 2, check: false, name: 'netengi-instance2', ip: '192.168.1.1/10'},
			],
			members: [
				{ip: '',subnet: '', port: '', weight: ''},
				{ip: '',subnet: '', port: '', weight: ''}
			]
		}
	}
}
</script>

<style>
.overviewTab{
	flex: 1;
	border-radius: 4px;
	box-shadow: var(--shadow-for-blocks);
	padding: 16px 20px;
	border: solid 1px rgb(var(--v-theme-grey-350));
}
.additionalSettings{
	background: rgb(var(--v-theme-primary-50));
	color: rgb(var(--v-theme-primary-700));
	padding: 0 16px;
	border-radius: 4px;
	height: 40px;
	margin: 10px 0 20px;
}
.additionalSettings.open{
	background: rgb(var(--v-theme-background));
	box-shadow: 0 0 0 3px #E0EAFF;
}
.additionalSettings img{
	transition: transform .15s ease-out;
}
.additionalSettings.open img{
	transform: rotate(180deg);
}
.customCardOutlineWidth{
	background: rgb(var(--v-theme-background));
	border-radius: 8px;
	padding: 20px;
	border: 1.5px solid rgb(var(--v-theme-grey-350));
	width: 100%;
	box-shadow: 0 0 0 3px #E0EAFF;
}
.v-input.v-input--horizontal.v-switch--inset{
	flex-grow: 0;
	margin-right: 10px;
}

.inputTags{
	column-gap: 10px;
	padding: 16px 20px;
	border-radius: 4px;
	background: rgb(var(--v-theme-background));
	border: solid 1px rgb(var(--v-theme-grey-350));
}
.btnTags{
	width: 17px;
	height: 17px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgb(var(--v-theme-grey-400));
	cursor: pointer;
}
</style>