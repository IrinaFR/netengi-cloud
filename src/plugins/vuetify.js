// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {light, dark} from "@/vuetify/theme";

// Vuetify
import { createVuetify } from 'vuetify'
import * as labs from 'vuetify/labs/components'


export default createVuetify({
	components: {
		...labs,
	},
	theme: {
		defaultTheme: 'light',
		themes: {
			light, dark
		}
	},
})
