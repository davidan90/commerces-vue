<template>
  <Aside v-if="commerce">
    <header>
      <h2>{{ commerce.name }}</h2>
    </header>
    <section>
      <p>Lucas ipsum dolor sit amet grievous hoth skywalker wedge zabrak tatooine darth padmé hutt solo.</p>
    </section>
    <footer>
      <button @click="close">{{ $t("app.close") }}</button>
    </footer>
  </Aside>
</template>

<script>
import { Aside } from "components";

export default {
  name: "CommerceDetail",
  components: {
    Aside
  },
  props: {
    commerce: {
      default: undefined,
      type: Object
    }
  },
  methods: {
    close() {
      this.$store.dispatch("hideAside");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/mixins";
@import "../../../assets/styles/colors";
$margin: 0.5rem;

header,
footer {
  @include flex(row, center, inherit);

  background-color: $third-color;
  height: 50px;
  padding: 10px 0;
  width: 100%;
}

header {
  h2 {
    margin: $margin;
  }
}

section {
  margin: $margin;
}

footer {
  bottom: 0;
  justify-content: center;
  position: absolute;

  button {
    background-color: $white-color;
    border-radius: 5px;
    cursor: pointer;
    height: 2rem;
    min-width: 70px;
  }
}
</style>
