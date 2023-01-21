<template>
	<div class="gettingStart">
		<div class="d-flex justify-space-between align-start">
			<label class="titleBlock">Getting start</label>
			<router-link to="/" class="grayscaleTheme">Go to FAQ</router-link>
		</div>
		<v-card class="gettingStartCard" variant="flat">
			<div class="gettingStartHead">
				<div class="gettingStartTitle grayscaleTheme">Product Docs</div>
				<div class="gettingStartInfo">Technical overviews, how-tos, and support material.</div>
			</div>
			<img src="/images/index/document%201.svg" class="grayscaleTheme">
		</v-card>
		<v-card class="gettingStartCard" variant="flat">
			<div class="gettingStartHead">
				<div class="gettingStartTitle grayscaleTheme">Tutorials</div>
				<div class="gettingStartInfo">Follow along with one of our 200+ development and sysadmin tutorials.</div>
			</div>
			<img src="/images/index/tutorial.svg" class="grayscaleTheme">
		</v-card>
		<v-card class="gettingStartCard" variant="flat">
			<div class="gettingStartHead">
				<div class="gettingStartTitle grayscaleTheme">Questions</div>
				<div class="gettingStartInfo">Ask a development question or answer others’ in our
					diverse Q&A section.</div>
			</div>
			<img src="/images/index/question.svg" class="grayscaleTheme">
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
	@media(max-width: 960px){
		.gettingStart{
			width: 100%;
		}
	}
</style>