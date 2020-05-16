import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from "./router.js"
import {library} from "@fortawesome/fontawesome-svg-core"
import {faCopy,faBug,faFileDownload,faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import VueClipboard from "vue-clipboard2"
import VueHead from "vue-head"

library.add(faCopy,faBug,faTwitter,faFileDownload,faEnvelope);
Vue.component("font-awesome-icon",FontAwesomeIcon)

Vue.use(VueClipboard)
Vue.use(VueHead,{
  separator: '-',
  complement: 'Tree Text'
})

Vue.config.productionTip = false

const head={
  title:{
    inner:"ホーム"
  },
  link:[
    {rel:"author",href:"msdd",undo:false}
  ]
}

new Vue({
  router,
  head,
  render: h => h(App),
}).$mount('#app')


