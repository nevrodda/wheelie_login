import Vue from 'vue'
import VueClip from 'vue-clip'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue'
import Home from './components/Home.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Homebanner from './components/Homebanner.vue'
import Sellbanner from './components/Sellbanner.vue'
import Carforloop from './components/Carforloop.vue'
import Productmodal from './components/products/Productmodal.vue'
import Signup from './components/signup/Signup.vue'
import Relatedcars from './components/products/Relatedcars.vue'
import Productbiddingengine from './components/products/Productbiddingengine.vue'
import Vueclip from './components/Vueclip.vue'
import { routes } from './routes'


Vue.use(VueClip)
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

Vue.component ('navigation-search', Navigation);
Vue.component ('sell-banner', Sellbanner);
Vue.component ('home-banner', Homebanner);
Vue.component ('car-forloop', Carforloop);
Vue.component ('footer-main', Footer);


new Vue({
  el: '#app', 
  router,    
  render: h => h(App)
})

new Vue({
  el: '#home', 
  router,    
  render: h => h(Home)
})

new Vue({
    el: '#productmodal',
    routes,
    render: h => h(Productmodal)
})

new Vue({
    el: '#signup',
    routes,
    render: h => h(Signup)
})

new Vue({
    el: '#relatedcars',
    render: h => h(Relatedcars)
})

new Vue({
    el: '#productbiddingengine',
    render: h => h(Productbiddingengine)
})

















     










