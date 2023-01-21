import { createApp } from 'vue'
import App from './App.vue'
import router from "@/config/router";
import store from './config/store'
import vuetify from './plugins/vuetify'
import notifier from './plugins/notifier'
import './css/style.css'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
	.use(router)
	.use(store)
	.use(vuetify)
	.use(notifier)
	.mount('#app')
