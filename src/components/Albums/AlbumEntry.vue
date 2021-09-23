<template>
  <v-list-item :value="album.id">
    <v-list-item-avatar rounded="0">
      <v-img v-if="'image_url' in album" height="50" width="50" :src="album.image_url"></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-html="album.album"></v-list-item-title>
      <v-list-item-subtitle v-html="album.artist"></v-list-item-subtitle>
      <FavoriteButton :albumId="album.id" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import FavoriteButton from './FavoriteButton.vue';

export default {
  props: ['album'],
  components: {
    FavoriteButton,
  },
};
</script>

<style></style>
