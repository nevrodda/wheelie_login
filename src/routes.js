import Home from './components/Home.vue';
import Product from './components/products/Productmodal.vue';
import Sell from './components/sell/Sell.vue';




export const routes = [
    { path: '', component: Home },
    { path: '/product', component: Product },
    { path: '/sell', component: Sell }
];

