// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {light, dark} from "@/vuetify/theme";

// Vuetify
import { createVuetify } from 'vuetify'



export default createVuetify({
	theme: {
		defaultTheme: 'light',
		themes: {
			light, dark
		}
	},
})
