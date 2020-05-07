<template>
  <div>
    <div>
      <p>Id: {{ item.id }}</p>
      <p>{{ item.name }}</p>
      <button @click="show(item.id)">Ver</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },

  data() {
    return {};
  },

  methods: {
    show(propId) {
      this.$router.push({ name: "details", params: { pId: propId } });
    },
  },
};
</script>

<style></style>
