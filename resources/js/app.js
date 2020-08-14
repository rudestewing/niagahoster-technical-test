import Vue from 'vue';
import App from './App.vue';
import router from './router';

import '@fortawesome/fontawesome-free/css/all.min.css';

Vue.component('app-wrapper-container', require('./components/wrapper/Container.vue').default);
Vue.component('app-wrapper-section-content', require('./components/wrapper/SectionContent.vue').default);
Vue.component('app-border-horizontal', require('./components/BorderHorizontal.vue').default);

const app = new Vue({
	render: h => h(App),
	router,
}).$mount('#app')
