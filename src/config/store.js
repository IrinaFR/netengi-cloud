import { createStore } from 'vuex'

const store = createStore({
	state () {
		return {
			msg: 'wefewfwe',
			notification: {
				type: '',
				title: '',
				text: ''
			}
		}
	},
	mutations: {
		showNotification (state, data) {
			state.notification.type = data.type
			state.notification.text = data.text
			state.notification.title = data.title
		}
	}
})

export default store