import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import {router} from './routes.js'
import Unsplash from 'unsplash-js'

Vue.use(BootstrapVue)

Vue.prototype.$unsplash = new Unsplash({
  applicationId: "e1f7a6255ead742a21e97f4abbe73de4e97c52af17744e9fcd91f9b601b8df69",
  secret: "b374f1a0cf83bd980361442e3d6ef05eba2c10fb3a890f1b31aadb3701580412",
  callbackUrl: "http://shoggoth.ru/edu/08/vlutsevich/DiplomJSvue3"


  // applicationId: "f934ad04ee514e16c9eaf8b02211ca26898e612407e4c8dc9918cc11d20e6232",
  // secret: "2f7ea2eac41f3ec29ceb6ba5d08e4fab3f86ae89ee11c6af39478f1cd5199912",
  // callbackUrl: "http://localhost:8080"
})


new Vue({
  el: '#app',
  router,
  render: h => h(App),
  beforeCreate() {
    const token = localStorage.getItem('token');
    const code = location.search.split('code=')[1];
    console.log('token', token);
    console.log('code', code);
    if (!token && !code) {
      const authenticationUrl = this.$unsplash.auth.getAuthenticationUrl([
        "public",
        "write_likes"
      ]);

      location.assign(authenticationUrl);
    } else {
      this.$unsplash._bearerToken = token;
      console.log("token!!!", this.$unsplash._bearerToken);
    }
  },
})

