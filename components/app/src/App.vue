<template>
  <div id="app">
    <router-link to="/home">Home </router-link>
    <router-link to="/about"> About</router-link>

    <router-view></router-view>

    <HelloWorld msg="Message"></HelloWorld>
    <Example>
      <template v-slot:header>
        <p>Header</p>
      </template>

      <template v-slot:body>
        <p>Body</p>
      </template>

      <template v-slot:footer>
        <p>Footer</p>
      </template>

      <template v-slot:default>Default</template>
    </Example>
    <Shopping></Shopping>
    <Form></Form>
    <Transition></Transition>
    <Fade>
      <p v-if="flag">Hello</p>
    </Fade>
    <button @click="flag = !flag">Toggle</button>
    <p v-width="'200px'">My directive</p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Transition from "./components/Transition";
import Shopping from "./components/Shopping";
import Example from "./components/Example";
import Form from "./components/Form";
import Fade from "./animations/Fade";

export default {
  name: "App",
  data() {
    return {
      flag: true,
    };
  },
  components: {
    HelloWorld,
    Example,
    Shopping,
    Form,
    Transition,
    Fade,
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
