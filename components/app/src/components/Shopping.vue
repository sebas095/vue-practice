<template>
  <div class="items">
    <Item
      v-for="(item, index) in items"
      :name="item"
      :key="index"
      @add="addCart"
    ></Item>
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "Shopping",
  data() {
    return {
      items: ["item1", "item2", "item3", "item4"],
    };
  },

  methods: {
    addCart(name) {
      console.log(name);
    },
  },

  components: {
    Item,
  },
};
</script>

<style>
.items {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
</style>
