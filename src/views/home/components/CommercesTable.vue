<template>
  <div>
    <div v-if="hasCommerces" class="table">
      <div class="table-header">
        <div v-for="(header, index) in headers" :key="index" class="tr">
          <div class="th">
            <span>{{ header }}</span>
          </div>
        </div>
      </div>
      <div class="table-body">
        <div v-for="(commerce, index) in commerces" :key="index" class="tr">
          <div class="td">
            <span>{{ commerce.name }}</span>
          </div>
          <div class="td">
            <span>{{ commerce.nif }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!hasCommerces" class="table empty">
      <span>Commerces not found</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommercesTable",
  props: {
    commerces: {
      default: undefined,
      type: Array
    }
  },
  data() {
    return {
      headers: ["Name", "NIF"]
    };
  },
  computed: {
    hasCommerces() {
      return this.commerces && this.commerces.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  .tr {
    .th,
    .td {
    }

    .th {
    }

    .td {
    }

    &:hover {
    }

    &:nth-child(even) {
    }

    &:nth-child(odd) {
    }
  }

  &.empty {
  }
}
</style>
