import { createApp } from "../../node_modules/vue/dist/vue.esm-browser.prod.js";

import { appFooter } from "./components/appFooter.js";

const appConfig = {
	data(){
		return {
			filterParam: '',
			imagesPortfolio: [
				{title: '01.jpg', category: 'web'},
				{title: '02.jpg', category: 'web'},
				{title: '01.jpg', category: 'web'},
				{title: '02.jpg', category: 'apps'},
				{title: '01.jpg', category: 'other'},
				{title: '02.jpg', category: 'other'},
				{title: '01.jpg', category: 'other'},
				{title: '02.jpg', category: 'other'},
			] 
		}
	},
	
	components: {
		appFooter,
	},

	methods: {
		filterList(filterParam){
			return this.imagesPortfolio.filter(item => item.category == `${filterParam}`)
		}
	},

	computed: {
		filteredList(){
			switch (this.filterParam) {
				case 'web': return this.filterList(this.filterParam);
				case 'apps': return this.filterList(this.filterParam);
				case 'other': return this.filterList(this.filterParam);
				default: return this.imagesPortfolio;
			}
		}
	}
}

const app = createApp(appConfig);

app.mount('#app');

baguetteBox.run('.gallery', {
	animation: 'fadeIn',
});