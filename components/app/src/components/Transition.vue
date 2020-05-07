<template>
  <div id="transition">
    <button @click="show = !show">Toggle</button>
    <transition
      name="fade"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <p v-if="show">Hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style>
#transition {
  margin-top: 20px;
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
} */
</style>
