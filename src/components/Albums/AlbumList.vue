<template>
  <v-card>
    <v-row class="pa-4">
      <v-col cols="6">
        <v-text-field outlined label="Search" v-model="search" />
      </v-col>
      <v-col col="6">
        <v-select outlined label="Sort By" :items="sortOptions" v-model="sortBy" />
      </v-col>
    </v-row>
    <v-list style=" height: 80%; width:100%; overflow-y: auto; overflow-x: auto; position: absolute">
      <v-subheader>Albums</v-subheader>

      <v-list-item-group v-model="selectedAlbumId" color="primary">
        <AlbumEntry v-for="album in filteredList" :key="`${album.id}`" :album="album" />
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import AlbumEntry from './AlbumEntry.vue';

export default {
  data: () => ({
    selectedAlbumId: null,
    search: '',
    sortBy: 'album',
    sortOptions: [
      {
        text: 'Name',
        value: 'album',
      },
      {
        text: 'Artist',
        value: 'artist',
      },
    ],
  }),
  components: {
    AlbumEntry,
  },
  computed: {
    ...mapState('album', ['albumList']),
    filteredList() {
      const searchRegex = new RegExp(this.search, 'i');
      return this.albumList
        .filter((album) => searchRegex.test(album.album) || searchRegex.test(album.artist))
        .sort((a1, a2) => a1[this.sortBy].toLowerCase().localeCompare(a2[this.sortBy].toLowerCase()));
    },
  },
  watch: {
    selectedAlbumId() {
      this.$emit('selectedAlbum', this.selectedAlbumId);
    },
  },
};
</script>

<style></style>
