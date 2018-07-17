<template>
  <section id="home">
    <h1>{{ title }}</h1>
    <Spinner v-if="isLoading"/>
    <CommerceDetail :commerce="commerceMock"/>
  </section>
</template>

<script>
import Api from "../../api";
import { Spinner } from "../../components";
import { CommerceDetail } from "./components";

export default {
  name: "Home",
  components: {
    Spinner,
    CommerceDetail
  },
  data() {
    return {
      title: "Commerces",
      commerceMock: {
        name: "Mock",
        description: "blablabla..."
      }
    };
  },
  computed: {
    isLoading() {
      return !this.$store.getters.getAllCommerces;
    },
    commerces() {
      return this.$store.getters.getAllCommerces;
    }
  },
  mounted() {
    // Example
    setTimeout(
      function() {
        this.$store.dispatch("showAside");
        this.$store.dispatch("setAllCommerces", ["David", "Javier"]);
      }.bind(this),
      5000
    );

    // Api.commerces.getAll().then(commerces => {
    //   if(commerces) {
    //     this.$store.dispatch('setAllCommerces', commerces);
    //     this.isLoading = false;
    //   }
    // });
  }
};
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
