<template>
  <section id="home">
    <article>
      <h1>{{ $t("home.sections.commerces.title") }}</h1>
      <Spinner v-if="isLoading"/>
      <CommercesTable :commerces="commerces" @show-commerce-detail="showCommerceDetail"/>
      <CommerceDetail :commerce="commerceSelected"/>
    </article>
  </section>
</template>

<script>
import { Spinner } from "components";
import { CommercesTable, CommerceDetail } from "./components";

export default {
  name: "Home",
  components: {
    Spinner,
    CommercesTable,
    CommerceDetail
  },
  data() {
    return {
      commerceSelected: undefined
    };
  },
  computed: {
    isLoading() {
      return !this.commerces;
    },
    commerces() {
      return this.$store.getters.allCommerces;
    }
  },
  mounted() {
    this.$store.dispatch("getAllCommerces");
  },
  methods: {
    showCommerceDetail(commerce) {
      if (commerce) {
        this.commerceSelected = commerce;
        this.showAside();
      }
    },
    showAside() {
      const isAsideShow = this.$store.getters.isAsideShow;
      if (!isAsideShow) {
        this.$store.dispatch("showAside");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "mixins";

#home,
#home article {
  @include flex(column, center, center);

  width: 100%;
}
</style>
