<template>
  <div>
    <transition
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
