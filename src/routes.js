import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Auth from './components/auth.vue';
import Home from './components/home.vue';
import List from './components/list.vue';
import Photo from './components/photo.vue';
import PageNotFound from './components/not-found.vue';

export const router = new VueRouter({
	routes: [
		{ name: '404', path: "*", component: PageNotFound, meta: { title: 'Not Found' } },
		{ path: '/', component: Home },
		{ path: '/auth', component: Auth },
		{ name: 'list', path: '/list', component: List },			
		{ path: '/photo/:id', component: Photo}
	],
	mode: 'history'
});