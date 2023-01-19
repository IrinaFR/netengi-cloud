<template>
	<div class="listInfoMain">
		<v-card variant="flat" class="overviewTab">
			<h3>Instance Specifications</h3>
			<ul class="smallText-15 overviewList">
				<li class="d-flex">
					<span class="color-grey-700">Image</span>
					<span class="valueInfo">ubuntu-20.04</span>
				</li>
				<li class="d-flex">
					<span class="color-grey-700">Flavor</span>
					<span class="valueInfo">m1.small</span>
				</li>
				<li class="d-flex">
					<span class="color-grey-700">Memory</span>
					<span class="valueInfo">
						<span class="boldText"> 2GB </span>
						<span class="greyText">(2048)</span>
						<span class="boldText"> RAM </span>
					</span>
				</li>
				<li class="d-flex">
					<span class="color-grey-700">Virtual CPUs</span>
					<span class="valueInfo">1</span>
				</li>
				<li class="d-flex">
					<span class="color-grey-700">Storage</span>
					<span class="valueInfo">Local storage:
						<span class="boldText"> 20GB </span>
						<span class="greyText">(boot)</span>
					</span>
				</li>
			</ul>
		</v-card>
		<v-card variant="flat" class="overviewTab">
			<h3>Other Details</h3>
			<ul class="smallText-15 overviewList">
				<li class="d-flex">
					<span class="color-grey-700">Instance UUID</span>
					<span class="valueInfo">
						c6e9f098-aed9-453a-b27a...
						<v-btn class="btnCopy">
							<v-img src="/images/instances/copy.svg"/>
						</v-btn>
					</span>
				</li>
				<li class="d-flex">
					<span class="color-grey-700">Created at</span>
					<span class="valueInfo">Jun 6, 2022, 9:36:48 PM</span>
				</li>
				<li class="d-flex">
					<span class="color-grey-700">Region</span>
					<span class="valueInfo">
						<div class="iconCountry">
							<v-img src="/images/flags/ua.svg"/>
						</div>
						ua-central-1
					</span>
				</li>
				<li class="d-flex">
					<span class="color-grey-700">Total traffic this billing cycle</span>
					<span class="valueInfo">
						<span class="boldText">0GB</span>
					</span>
				</li>
				<li class="d-flex">
					<span class="color-grey-700">Total traffic this month</span>
					<span class="valueInfo">
						<span class="boldText">0GB</span>
					</span>
				</li>
			</ul>
		</v-card>
	</div>
	<v-card variant="flat" class="overviewTab w-100">
		<h3>Network Details</h3>
		<NCAdditionalTree/>
	</v-card>
	<v-card variant="flat" class="overviewTab additionalMargin w-100">
		<h3>Volume Details</h3>
		<v-table class="tableVolume">
			<thead>
			<tr>
				<th>Name</th>
				<th>Status</th>
				<th>Size</th>
				<th>Has Snapshot</th>
				<th></th>
			</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<span class="blueText">snapshot1</span>
					</td>
					<td>
						<span :class="true?'instanceRunning':'instancePause'">In Use</span>
					</td>
					<td>
						<span class="boldText">1GB</span>
					</td>
					<td>Yes</td>
					<td>
						<v-menu>
							<template v-slot:activator="{ props }">
								<v-img class="moreRow" src="/images/instances/more.svg" v-bind="props"></v-img>
							</template>
							<v-list class="listMenu">
								<v-list-item>
									<v-list-item-title class="dropDownItemMenu">
										<v-img src="/images/instances/menu/edit.svg"/>
										Edit
									</v-list-item-title>
									<v-list-item-title class="dropDownItemMenu">
										<v-img src="/images/instances/menu/delete.svg"/>
										Delete
									</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
					</td>
				</tr>
			</tbody>
		</v-table>
	</v-card>
	<div class="listInfoMain additionalMargin">
		<v-card variant="flat" class="overviewTab">
			<div class="blockTitleCard">
				<h3>Network Metric</h3>
				<div class="customSelect">
					<select v-model="typeMetric" ref="selectTypeMetrick">
						<option value="0">Packets</option>
					</select>
					<v-img src="/images/instances/downTriangle.svg"/>
				</div>
			</div>
			<div class="smallGreyText">Period</div>
			<NCAdditionalToggles v-model="periodMetric" :items="listTypeMetric" label="name" value="value" count="network"/>
			<div class="additionalMarginGraphic"></div>
			<NCAdditionalGraphicLine :dataSet="dataOne"/>
		</v-card>
		<v-card variant="flat" class="overviewTab">
			<h3>CPU Usage</h3>
			<div class="smallGreyText">Period</div>
			<NCAdditionalToggles v-model="periodMetricTwo" :items="listTypeMetric" label="name" value="value" count="cpu"/>
			<div class="additionalMarginGraphic"></div>
			<NCAdditionalGraphicLine :dataSet="dataTwo"/>
		</v-card>
	</div>
</template>

<script>
import NCAdditionalToggles from "@/components/additional/NCAdditionalToggles";
import NCAdditionalGraphicLine from "@/components/additional/NCAdditionalGraphicLine";
import NCAdditionalTree from "@/components/additional/tree/NCAdditionalTree";
export default {
	components: {NCAdditionalTree, NCAdditionalGraphicLine, NCAdditionalToggles},
	data(){
		return{
			typeMetric:0,
			periodMetric:0,
			periodMetricTwo:0,
			listTypeMetric:[
				{name:'Last hour',value:0},
				{name:'24 hours',value:1},
				{name:'7 days',value:2},
				{name:'30 days',value:3},
			],
			dataOne:[
				{
					label:'Network In',
					valueTag:'22,07MB',
					borderColor: '#4671F6',
					fill:true,
					data: [12, 8, 28, 12,12, 8, 28, 12,12, 8, 28, 12],
				},
				{
					label:'Network Out',
					valueTag:'3,16MB',
					borderColor: '#081D42',
					data: [6,4,14,6,6,4,14,6,6,1,1,1,1],
				},
			],
			dataTwo:[{
				label:'CPU',
				valueTag:'7.01',
				borderColor: '#4671F6',
				fill:true,
				data: [10,7,12,11,12,14,1,8,9,4,2,6],
			}],
		}
	}
}
</script>

<style scoped>
	.listInfoMain{
		display: flex;
		justify-content: space-between;
		gap: 10px;
		margin-bottom: 20px;
	}
	.overviewTab{
		flex: 1;
		border-radius: 8px;
		box-shadow: var(--shadow-for-blocks);
		padding: 16px 20px;
		border: solid 1px rgb(var(--v-theme-grey-350));
	}
	.overviewTab h3{
		margin-bottom: 10px;
	}
	.greyText{
		color: rgb(var(--v-theme-grey-700));
	}
	.boldText{
		font-weight: 700;
	}
	.valueInfo{
		font-weight: 400;
		font-size: 15px;
		line-height: 20px;
		color: rgb(var(--v-theme-grey-900));
	}
	.overviewList li{
		margin: 6px 0;
	}
	.overviewList li span:first-child{
		min-width: 250px;
	}
	.btnCopy{
		border-radius: 4px;
		background: rgb(var(--v-theme-grey-300));
		width: 18px;
		height: 18px;
		margin-left: 6px;
		min-width: unset;
		padding: 0;
	}
	.btnCopy .v-img{
		height: 14px;
	}
	.iconCountry{
		display: inline-block;
		position: relative;
		height: 16px;
		width: 16px;
	}
	.iconCountry .v-img{
		width: 16px;
		height: 16px;
		position: absolute;
		bottom: -3px;
	}
	.tableVolume{
		border: 1px solid #E8E8E8;
		border-radius: 4px;
	}
	.v-table .v-table__wrapper > table > thead > tr:last-child > th{
		background: rgb(var(--v-theme-grey-200));
		border-radius: 0;
		border: none;
		padding: 0 10px;
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
		color: rgb(var(--v-theme-grey-900));
		height: 34px;
	}
	.v-table--density-default > .v-table__wrapper > table > tbody > tr > td, .v-table--density-default > .v-table__wrapper > table > thead > tr > td, .v-table--density-default > .v-table__wrapper > table > tfoot > tr > td{
		height: 42px;
	}

	.blueText{
		font-weight: 400;
		color: rgb(var(--v-theme-primary-600));
	}
	.instanceRunning{
		font-weight: 500;
		color: rgb(var(--v-theme-success));
	}
	.instancePause{
		color: #D69F12;
		font-weight: 500;
	}

	.additionalMargin{
		margin: 20px 0;
	}
	.smallGreyText{
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
		color: rgb(var(--v-theme-grey-700));
		margin-bottom: 8px;
	}
	.blockTitleCard{
		display: flex;
	}
	.customSelect{
		position: relative;
		height: fit-content;
		margin-left: auto;
	}
	.customSelect .v-img{
		position: absolute;
		width: 16px;
		height: 16px;
		top: 0;
		right: 4px;
		bottom: 0;
		margin: auto 0;
	}
	.customSelect select{
		padding: 2px 23px 2px 6px;
		border: 1px solid rgb(var(--v-theme-grey-350));
		border-radius: 4px;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		color: rgb(var(--v-theme-grey-900));
		box-shadow: none;
		outline: none;
	}
	.additionalMarginGraphic{
		margin-bottom: 12px;
	}
</style>