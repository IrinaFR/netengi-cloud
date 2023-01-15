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
</template>

<script>
export default {
}
</script>

<style scoped>
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
	.overviewList li span:first-child{
		margin-right: 30px;
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
</style>