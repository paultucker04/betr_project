<template>
  <v-btn
    style="top: 4px; right: 5px"
    fab
    top
    right
    absolute
    medium
    text
    icon
    color="grey"
    @click="toggle"
  >
    <v-icon color="grey" medium>
      {{ isFav ? 'mdi-star' : 'mdi-star-outline' }}
    </v-icon>
  </v-btn>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: ['albumId'],
  computed: {
    ...mapState('album', ['albumFavs']),
    isFav() {
      return this.albumId in this.albumFavs && this.albumFavs[this.albumId];
    },
  },
  methods: {
    ...mapActions('album', ['toggleFavorite']),
    toggle() {
      this.toggleFavorite(this.albumId);
    },
  },
};
</script>

<style></style>
