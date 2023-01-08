<template>
	<v-card variant="flat" class="overviewTab mb-2">
		<h3>Load Balancer Details</h3>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">Name Load Balancer</span>
				<span>Netengi-loadbalancer-1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">IP Address</span>
				<span>192.168.1.1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Description</span>
				<span>description</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Availability Zone</span>
				<span>Yes</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Flavors</span>
				<span>-</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Subnet</span>
				<span>netengi-subnet-1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Admin State Up</span>
				<span>Yes</span>
			</li>
		</ul>
	</v-card>
	<v-card variant="flat" class="overviewTab mb-2">
		<h3>Listener Details</h3>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">Name</span>
				<span>netengi-subnet-1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Description</span>
				<span>192.168.1.1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Protocol</span>
				<span>IPv4</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Port</span>
				<span>80</span>
			</li>
		</ul>
		<v-divider class="my-2"></v-divider>
		<h4>Additional Settings</h4>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">Client data timeout</span>
				<span>50000</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">TCP inspect timeout</span>
				<span>0</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Member connect timeout</span>
				<span>5000</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Member data timeout</span>
				<span>50000</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Connection timeout</span>
				<span>-1</span>
			</li>
		</ul>
	</v-card>
	<v-card variant="flat" class="overviewTab mb-2">
		<h3>Pool Details</h3>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">Name</span>
				<span>netengi-pool</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Description</span>
				<span>description</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Algorithm</span>
				<span>Round robin</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Session Percentile</span>
				<span>Application cookie</span>
			</li>
		</ul>
	</v-card>
	<v-card variant="flat" class="overviewTab mb-2">
		<h3>Pool Members</h3>
		<div class="bg-grey-200 py-3 px-3 my-2 width-fit-content">Allocated Members</div>
		<v-table density="compact" class="tableMain mt-2">
			<thead class="bg-grey-200">
			<tr>
				<th class="text-left">IP Address</th>
				<th class="text-left">Subnet</th>
				<th class="text-left">Port</th>
				<th class="text-left">Weight</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td class="tableName">
					<span>192.168.1.1</span>
				</td>
				<td>netengi-subnet-1</td>
				<td>80</td>
				<td>1</td>
			</tr>
			</tbody>
		</v-table>
		<div class="bg-grey-200 py-3 px-3 my-2 width-fit-content">Existing Instances</div>
		<v-table density="compact" class="tableMain mt-2">
			<thead class="bg-grey-200">
			<tr>
				<th class="text-left">Name</th>
				<th class="text-left">IP Address</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td class="tableName">
					<span>netengi-instance1</span>
				</td>
				<td>2.59.223.31/20</td>
			</tr>
			</tbody>
		</v-table>
	</v-card>
	<v-card variant="flat" class="overviewTab mb-2">
		<h3>Monitor Details</h3>
		<ul class="smallText-15 overviewList">
			<li class="d-flex">
				<span class="color-grey-700">Name</span>
				<span>netengi-monitor1</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Type</span>
				<span>HTTP</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Max Retries Down</span>
				<span>3</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Max Retries</span>
				<span>5</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Delay (sec)</span>
				<span>3</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Timeout (sec)</span>
				<span>5</span>
			</li>
			<li class="d-flex">
				<span class="color-grey-700">Admin State Up</span>
				<span>Yes</span>
			</li>
		</ul>
	</v-card>
	<div class="mt-7">
		<v-btn density="default" variant="tonal" to="/balancer">Create</v-btn>
		<v-btn density="default" class="ms-3" variant="outlined" @click="$emit('change', 0)">Back</v-btn>
	</div>
</template>

<script>
export default {
	emits: ['change'],
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
.overviewList li{
	margin: 6px 0;
}
.overviewList li span:first-child{
	min-width: 200px;
}
</style>