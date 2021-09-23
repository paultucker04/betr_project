<template>
  <v-card>
    <!-- <div align="center"> -->
    <FavoriteButton :albumId="album.id" />
    <v-card-text align="center">
      <v-img v-if="'image_url' in album" height="250" width="250" :src="album.image_url"></v-img>
      <span height="250" width="250" v-else>No album cover found :(</span>
      <!-- </div> -->

      <p class="my-4 text-h5">{{ album.album }} - {{ album.artist }}</p>

      <p class="my-4 text-subtitle-1">({{ album.designer }})</p>

      <p>
        {{ album.description }}
      </p>
    </v-card-text>
  </v-card>
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
