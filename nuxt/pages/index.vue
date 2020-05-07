<template>
  <div class="container">
    <header>
      <h1 class="title">Albúms de la página</h1>
    </header>
    <div class="columns is-multiline">
      <AlbumCard v-for="album in albums" :key="album.id" :album="album" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import env from "../config/env.js";
import AlbumCard from "../components/AlbumCard";

export default {
  name: "IndexPage",
  data() {
    return {
      albums: [],
    };
  },

  components: {
    AlbumCard,
  },

  async mounted() {
    const res = await axios.get(`${env.endpoint}/albums`);
    this.albums = res.data;
  },
};
</script>

<style scoped>
