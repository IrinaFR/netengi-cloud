// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {light, dark} from "@/vuetify/theme";

// Vuetify
import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/VDataTable'



export default createVuetify({
	components: {
		VDataTable
	},
	theme: {
		defaultTheme: 'light',
		themes: {
			light, dark
		}
	},
})
