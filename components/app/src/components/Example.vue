<template>
  <div>
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
    <slot></slot>

    <p>{{ name | upperCase }}</p>
    <input type="text" v-model="name" v-width:color.auto="'200px'" />
  </div>
</template>

<script>
export default {
  name: "Example",
  data() {
    return {
      name: "",
    };
  },

  components: {},

  filters: {
    upperCase(value) {
      if (!value) return "";
      return value.toString().toUpperCase();
    },
  },

  directives: {
    width: {
      inserted(el, binding, vnode) {
        console.log(vnode);
        console.log(binding);

        el.style.width = binding.value;
      },
      //bind:
      //Update:
      //componentUpdated:
      //unBind:
    },
  },
};
</script>
