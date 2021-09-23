import axios from 'axios';
import Vue from 'vue';

const albumModule = {
  state: () => ({
    albumList: [],
    albumFavs: {},
  }),
  mutations: {
    saveAlbumList(state, list) {
      state.albumList = list;
    },
    toggleFavorite(state, id) {
      if (!(id in state.albumFavs)) {
        // Vue.set is required to create reactivity in the object since the object was initialized
        // as empty
        Vue.set(state.albumFavs, id, true);
      } else {
        state.albumFavs[id] = !state.albumFavs[id];
      }
    },
    setFavorites(state, favs) {
      state.albumFavs = { ...favs };
    },
  },
  actions: {
    getAllAlbums({ commit }) {
      axios.get('/api/apptest/coding_test.json').then((res) => {
        console.log(res);
        commit('saveAlbumList', res.data.Albums);
      });
    },
    toggleFavorite({ state, commit }, id) {
      commit('toggleFavorite', id);
      localStorage.setItem('betr_album_favs', JSON.stringify(state.albumFavs));
    },
  },
  getters: {
    albumsById(state) {
      return Object.fromEntries(state.albumList.map((album) => [album.id, album]));
    },
  },
  namespaced: true,
};

export default albumModule;
