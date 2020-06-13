import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './state/index';
import vuetify from './plugins/vuetify';

const fb = require('../firebaseConfig');

Vue.config.productionTip = false;

let app;
// eslint-disable-next-line no-unused-vars
fb.auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      vuetify,
      store,
      render: (h) => h(App),
    });
  }
});
