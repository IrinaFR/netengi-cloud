import store from '../config/store'
const notifier = {
	install(app){
		app.config.globalProperties.$notifier = {
			showMessage({type = '',title = '',text = ''}) {
				store.commit(
					'showNotification',
					{ type, title, text },
					{ root: true }
				);
			}
		}

	}
};
export default notifier;