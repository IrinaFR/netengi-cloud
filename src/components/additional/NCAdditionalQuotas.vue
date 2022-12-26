<template>
	<div class="qoutas">
		<v-card variant="outlined" class="quoteCard border-grey-200" v-for="(quote, idx) in qoutas" :key="idx">
			<img :src="`/images/index/${quote.img}.svg`">
			<div>
				<div class="quoteTitle colo-grey-800">{{quote.title}}</div>
				<div class="quoteInfo color-grey-700">{{quote.info}}</div>
			</div>
		</v-card>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				qoutas: [
					{title: 'Instances', info: 'Used 4 of 10', img: '1'},
					{title: 'vCPUs', info: 'Used 1 of 10', img: '2'},
					{title: 'RAM', info: 'Used 13.8GB of 64GB', img: '3'},
					{title: 'Storage', info: 'Used 0GB of 1.46TB', img: '4'},
					{title: 'Volumes', info: 'Used 6 to 10', img: '5'},
					{title: 'IP', info: 'Used 0 of 10', img: '4'},
				]
			}
		}
	}
</script>

<style>
.qoutas{
	display: flex;
	justify-content: space-between;
	gap: 10px;
	margin: 20px 0;
}
.quoteCard{
	text-align: center;
	width: 100%;
	height: 100%;
	padding: 28px 20px;
	border: solid 1px rgb(var(--v-theme-grey-350));
}
.quoteTitle{
	font-weight: 700;
	font-size: 18px;
}
.quoteInfo{
	font-size: 14px;
	line-height: 20px;
}
</style>