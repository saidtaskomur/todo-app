import Vue from 'vue';
import Vuex from 'vuex';
// import app from "../components/app/store";
import login from '../views/login/store';
import register from '../views/register/store';

Vue.use(Vuex);

export const storeOptions = {
  modules: {
    login,
    register,
  },
};

export default new Vuex.Store(storeOptions);
