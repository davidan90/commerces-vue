<template>
  <section id="home">
    <article>
      <h1>{{ $t("home.sections.commerces.title") }}</h1>
      <Spinner v-if="isLoading"/>
      <CommercesTable :commerces="commerces" @show-commerce-detail="showCommerceDetailHandler"/>
      <CommerceDetail :commerce="commerceSelected"/>
    </article>
  </section>
</template>

<script>
import Api from "../../api";
import { Spinner } from "../../components";
import { CommercesTable, CommerceDetail } from "./components";

const mockCommerces = [
  {
    id: 1,
    name: "Telefonica",
    nif: "50732",
    year: 1950
  },
  {
    id: 2,
    name: "Bankia",
    nif: "63431",
    year: 2008
  },
  {
    id: 3,
    name: "Pescanova",
    nif: "15571",
    year: 1995
  }
];

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
        this.$store.dispatch("setAllCommerces", mockCommerces);
      }.bind(this),
      5000
    );

    // Api.commerces.getAll().then(commerces => {
    //   if(commerces) {
    //     this.$store.dispatch('setAllCommerces', commerces);
    //     this.isLoading = false;
    //   }
    // });
  },
  methods: {
    showCommerceDetailHandler(commerce) {
      if (commerce) {
        this.commerceSelected = commerce;
        this.$store.dispatch("showAside");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#home,
#home article {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
