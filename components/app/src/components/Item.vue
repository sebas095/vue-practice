<template>
  <div class="item">
    <p>{{ name }}</p>
    <button @click="add">Agregar</button>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    name: String,
  },
  data() {
    return {};
  },

  methods: {
    add() {
      console.log(this.$parent.$data.items);
      this.$emit("add", this.name);
    },
  },
};
</script>

<style>
.item {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.item button {
  margin: 0 20px;
  flex: 1;
}

p {
  flex: 2;
}
</style>
