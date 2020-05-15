import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from "./router.js"
import {library} from "@fortawesome/fontawesome-svg-core"
import {faCopy,faBug,faFileDownload} from "@fortawesome/free-solid-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import VueClipboard from "vue-clipboard2"

library.add(faCopy,faBug,faTwitter,faFileDownload);
Vue.component("font-awesome-icon",FontAwesomeIcon)

Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


