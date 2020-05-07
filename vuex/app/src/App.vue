<template>
  <div id="app">
    <HelloWorld />
    <p>{{ message }}</p>
    <p>{{ $store.getters["a/getCount"](10) }}</p>
    <button @click="add">+</button>

    <input v-model="message" type="text" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },

  created() {
    //this.$store.state["b/message"] = "Hola";
    this.$store.commit("b/setMessage", "Hola");
    console.log(this.$store.state["b/message"]);
  },

  methods: {
    add() {
      this.$store.dispatch("a/increment", 2); // action
      // this.$store.commit("increment", 2); // mutation
    },
  },

  computed: {
    message: {
      set(value) {
        this.$store.commit("b/setMessage", value);
      },
      get() {
        return this.$store.getters["b/getMessage"];
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
