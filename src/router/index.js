import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Introduction from '@/components/Intro';
import Contact from '@/components/Contact';
import New from '@/components/New';

Vue.use(Router);

const router=new Router({
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path:'/intro',
			name:'Introduction',
			component:Introduction
		},
		{
			path:'/contact',
			name:'Contact',
			component:Contact
		},
		{
			path:'/new',
			name:'New',
			component:New
		}
	]
});
export default router;
