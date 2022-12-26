<template>
	<div class="gettingStart">
		<div class="d-flex justify-space-between align-start">
			<label class="titleBlock">Getting start</label>
			<router-link to="/">Go to FAQ</router-link>
		</div>
		<v-card class="gettingStartCard" variant="flat">
			<div class="gettingStartHead">
				<div class="gettingStartTitle">Product Docs</div>
				<div class="gettingStartInfo">Technical overviews, how-tos, and support material.</div>
			</div>
			<img src="/images/index/document%201.svg">
		</v-card>
		<v-card class="gettingStartCard" variant="flat">
			<div class="gettingStartHead">
				<div class="gettingStartTitle">Tutorials</div>
				<div class="gettingStartInfo">Follow along with one of our 200+ development and sysadmin tutorials.</div>
			</div>
			<img src="/images/index/tutorial.svg">
		</v-card>
		<v-card class="gettingStartCard" variant="flat">
			<div class="gettingStartHead">
				<div class="gettingStartTitle">Questions</div>
				<div class="gettingStartInfo">Ask a development question or answer others’ in our
					diverse Q&A section.</div>
			</div>
			<img src="/images/index/question.svg">
		</v-card>
	</div>
</template>

<style>
	.gettingStart{
		width: 50%;
	}
	.gettingStartCard{
		padding: 14px 20px;
		background: rgb(var(--v-theme-grey-100));
		display: flex;
		margin-top: 10px;
	}
	.gettingStartHead{
		flex-grow: 1;
	}
	.gettingStartCard img{
		margin-bottom: -14px;
	}
	.gettingStartTitle{
		font-size: 15px;
		color: #4671F6;
		font-weight: 700;
		line-height: 20px;
	}
	.gettingStartInfo{
		font-size: 15px;
		line-height: 20px;
		color: rgb(var(--v-theme-grey-600));
	}
</style>