// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {lightTheme, darkTheme} from "@/vuetify/theme";

// Vuetify
import { createVuetify } from 'vuetify'



export default createVuetify({
	theme: {
		themes: {
			lightTheme, darkTheme
		}
	}
})
