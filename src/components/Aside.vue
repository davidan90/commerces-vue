<template>
  <aside :class="{ active: isActive }">
    <slot/>
  </aside>
</template>

<script>
export default {
  name: "Aside",
  computed: {
    isActive() {
      return this.$store.getters.getAsideShow;
    }
  }
};
</script>

<style lang="scss" scoped>
$asideHeight: 30vw;
$asideActiveRight: 0vw;

@keyframes activate {
  0% {
    right: -$asideHeight;
  }
  100% {
    right: $asideActiveRight;
  }
}

aside {
  display: none;
  position: fixed;
  top: 0;
  width: $asideHeight;
  height: 100%;
  background-color: #72838c;

  &.active {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    right: $asideActiveRight;
    animation: activate 0.5s;
  }
}
</style>
