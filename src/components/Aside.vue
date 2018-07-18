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
@import "../assets/styles/colors";
@import "../assets/styles/responsive";
$asideWidth: 30vw;
$asideActiveRight: 0vw;

@keyframes activate {
  0% {
    right: -$asideWidth;
  }
  100% {
    right: $asideActiveRight;
  }
}

aside {
  display: none;
  position: fixed;
  top: 0;
  width: $asideWidth;
  min-width: 300px;
  height: 100%;
  background-color: $primary-color;
  box-shadow: -5px 0px 5px -2px rgba(0, 0, 0, 0.75);

  &.active {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    right: $asideActiveRight;
    animation: activate 0.5s;
  }

  @media #{$screen-s} {
    width: 100%;
  }
}
</style>
