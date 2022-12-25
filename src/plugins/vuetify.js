// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {lightTheme, darkTheme} from "@/vuetify/theme";
import { aliases, fa } from 'vuetify/iconsets/fa'

// Vuetify
import { createVuetify } from 'vuetify'



export default createVuetify({
	theme: {
		themes: {
			lightTheme, darkTheme
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
