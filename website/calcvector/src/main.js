import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from "vue-analytics"

Vue.config.productionTip = false

Vue.use(VueAnalytics,{
  id:"UA-166277916-1"
});

export const eventBus=new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
