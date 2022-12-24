import { createApp } from 'vue'
import App from './App.vue'
import router from "@/config/router";
import vuetify from './plugins/vuetify'
import './css/style.css'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
	.use(router)
	.use(vuetify)
	.mount('#app')
