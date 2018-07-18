<template>
  <section id="notFound">
    <h1>{{ $t("notFound.message") }}</h1>
  </section>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style lang="scss" scoped>
#notFound {
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
