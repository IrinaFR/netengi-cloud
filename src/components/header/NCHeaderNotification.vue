<template>
	<v-menu v-model="showMenu">
		<template v-slot:activator="{ props }">
			<v-badge
				class="mx-2"
				color="error"
				dot
				v-model="qw"
				:bordered="true"
			>
				<div v-bind="props" :class="[{active:showMenu}, 'notifActivator', 'cursor-pointer']">
					<img src="/images/app_bar/notification.svg">
				</div>
			</v-badge>
		</template>
		<v-card variant="flat" class="overviewTab">
			<div class="d-flex align-center mb-2">
				<h3 class="flex-grow-1">Notifications {{showMenu}}</h3>
				<div class="d-flex align-center">
					<img src="/images/app_bar/twomark.svg" class="me-2">
					<span class="color-primary-600 cursor-pointer">Mark all as read</span>
				</div>
			</div>
			<v-card variant="text" class="mb-2" :to="`/notification/${notif.id}`" v-for="(notif, idx) in notifications" :key="idx">
				<div class="notifItem">
					<div class="circle mt-2" :class="{'bg-primary-600':!notif.read}"></div>
					<div class="flex-grow-1">
						<b class="smallText-15 notifName">{{notif.title}}</b>
						<div class="smallText-14 color-grey-600">{{notif.time}}</div>
					</div>
					<div class="iconNotif">
						<img :src="`/images/menu/${notif.icon}.svg`">
					</div>
				</div>
				<v-divider></v-divider>
			</v-card>
			<router-link to="/notification" class="mt-3 smallText-15">View all notifications</router-link>
		</v-card>
	</v-menu>
</template>

<script>
	export default {
		data(){
			return{
				activeNotif: true,
				showMenu: false,
				notifications: [
					{id: 5, read: false, title: 'Your password has been succesfully changed.', time: 'Jun 7, 2022, 9:22:01 PM', icon: 'kubernetes'},
					{id: 4, read: false, title: 'Invoice #705569 payment overdue', time: 'Oct 31, 2022, 08:42:46 PM', icon: 'billing'},
					{id: 3, read: true, title: 'Your cloud account has been suspended', time: 'Oct 28, 2022, 18:21:14 PM', icon: 'support'},
					{id: 2, read: true, title: 'Invoice #705569 payment confirmation', time: 'Oct 4, 2022, 12:00:05 PM', icon: 'billing'},
					{id: 1, read: false, title: 'Invoice #705569 payment overdue', time: 'Oct 31, 2022, 14:27:46 PM', icon: 'billing'}
				]
			}
		}
	}
</script>

<style>
	.overviewTab{
		position: relative;
		width: fit-content;
		border-radius: 4px;
		box-shadow: var(--shadow-for-blocks);
		padding: 16px 20px;
		border: solid 1px rgb(var(--v-theme-grey-350));
	}
	.notifItem{
		display: flex;
		gap: 10px;
		justify-content: space-between;
		max-width: 370px;
		padding: 10px 7px;
		border-radius: 10px;
	}
	.notifItem:hover{
		background: rgb(var(--v-theme-grey-200));
	}
	.notifItem:hover .notifName{
		color: rgb(var(--v-theme-primary-600));
	}
	.circle{
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}
	.notifActivator{
		padding: 4px;
		border-radius: 4px;
		border: solid 1px rgb(var(--v-theme-background));
	}
	.notifActivator.active{
		box-shadow: 0 0 0 3px #E0EAFF;
		border: solid 1px rgb(var(--v-theme-primary-200));
		background: rgb(var(--v-theme-background));
	}
	.iconNotif{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: rgb(var(--v-theme-grey-100));
	}
	.iconNotif img{
		filter: grayscale(1);
	}
</style>