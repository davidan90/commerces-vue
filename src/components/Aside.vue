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
@import "../assets/styles/mixins";
@import "../assets/styles/colors";
@import "../assets/styles/responsive";
$aside-width: 30vw;
$aside-active-right: 0;

@keyframes activate {
  0% {
    right: -$aside-width;
  }

  100% {
    right: $aside-active-right;
  }
}

aside {
  background-color: $primary-color;
  box-shadow: -3px 0 5px 0 rgba(0, 0, 0, 0.7);
  display: none;
  height: 100%;
  min-width: 300px;
  position: fixed;
  top: 0;
  width: $aside-width;

  &.active {
    @include flex(column, center, flex-start);

    animation: activate 0.5s;
    right: $aside-active-right;
  }

  @media #{$screen-s} {
    width: 100%;
  }
}
</style>
