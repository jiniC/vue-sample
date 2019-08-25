import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin'

Vue.config.productionTip = false

// install();이 실행 됨
Vue.use(ChartPlugin);

// Vue.use: 플러그인 사용
// Vue.use(VueRouter);
// Vue.use(Vuex);

// new Vuex.Store({
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
