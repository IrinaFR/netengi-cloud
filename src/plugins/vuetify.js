// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {light, dark} from "@/vuetify/theme";
import { aliases, fa } from 'vuetify/iconsets/fa'

// Vuetify
import { createVuetify } from 'vuetify'



export default createVuetify({
	theme: {
		defaultTheme: 'light',
		themes: {
			light, dark
		}
	},
	icons: {
		defaultSet: 'fa',
		aliases,
		sets: {
			fa,
		},
	},
})
