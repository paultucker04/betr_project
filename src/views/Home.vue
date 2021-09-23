<template>
  <v-container class=" fill-height" fluid>
    <v-row class="fill-height" no-gutters>
      <v-col cols="5" style="position: relative">
        <AlbumList style="height: 100%; width: 100%;  position: absolute" v-on:selectedAlbum="handleSelectedAlbum" />
      </v-col>
      <v-col cols="7">
        <AlbumDescription v-if="selectedAlbum !== null" :album="selectedAlbum" />
        <div v-else class="text-h3" align="center" justify="center">
          Select an album
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import AlbumList from '../components/Albums/AlbumList.vue';
import AlbumDescription from '../components/Albums/AlbumDescription.vue';

export default {
  data: () => ({
    selectedAlbum: null,
  }),
  components: {
    AlbumList,
    AlbumDescription,
  },
  mounted() {
    this.getAllAlbums();

    const favs = localStorage.getItem('betr_album_favs');

    if (favs) {
      this.setFavorites(JSON.parse(favs));
    }
  },
  computed: {
    ...mapGetters('album', ['albumsById']),
  },
  methods: {
    ...mapActions('album', ['getAllAlbums']),
    ...mapMutations('album', ['setFavorites']),
    handleSelectedAlbum(id) {
      if (id in this.albumsById) {
        this.selectedAlbum = this.albumsById[id];
      }
    },
  },
};
</script>

<style></style>
