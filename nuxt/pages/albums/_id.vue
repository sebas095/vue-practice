<template>
  <div class="container">
    <header>
      <nuxt-link to="/">Regresar</nuxt-link>
      <h1 class="title">{{ album.title }}</h1>
    </header>
    <div class="columns is-multiline">
      <div
        class="column is-one-quarter"
        v-for="photo in photos"
        :key="photo.id"
      >
        <img :src="photo.url" :alt="photo.title" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "vue-router";

import env from "../../config/env.js";

export default {
  name: "AlbumindvPage",
  data() {
    return {
      album: {},
      photos: [],
    };
  },

  async mounted() {
    const albumResponse = await axios.get(
      `${env.endpoint}/albums/${this.$route.params.id}`
    );
    this.album = albumResponse.data;

    const photosResponse = await axios.get(
      `${env.endpoint}/albums/${this.$route.params.id}/photos`
    );
    this.photos = photosResponse.data;
  },
};
</script>
