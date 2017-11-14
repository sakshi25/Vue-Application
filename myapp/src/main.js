// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import HelloWorld from './components/HelloWorld'
Vue.use(BootstrapVue);

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
	{path : '/', component: HelloWorld}
	]
})
