import Vue from 'vue';
import Vuex from 'vuex';
import albumModule from './modules/album';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    album: albumModule,
  },
});
