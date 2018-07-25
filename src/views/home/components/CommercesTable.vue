<template>
  <div v-if="commerces" class="table">
    <div class="table-head">
      <div v-for="(header, index) in headers" :key="index" class="tr">
        <div class="th">
          <span>{{ header }}</span>
        </div>
      </div>
    </div>
    <div v-if="hasCommerces" class="table-body">
      <div v-for="commerce in commerces" :key="commerce.id" class="tr" @click="showDetail(commerce)">
        <div class="td">
          <span>{{ commerce.name }}</span>
        </div>
        <div class="td">
          <span>{{ commerce.nif }}</span>
        </div>
        <div class="td">
          <span>{{ commerce.year }}</span>
        </div>
      </div>
    </div>
    <div v-if="!hasCommerces" class="table empty">
      <span>{{ $t("home.sections.commerces.table.empty") }}</span>
    </div>
  </div>
</template>

<script>
const showCommerceDetail = "show-commerce-detail";

export default {
  name: "CommercesTable",
  props: {
    commerces: {
      default: undefined,
      type: Array
    }
  },
  computed: {
    headers() {
      const locale = this.$i18n.locale;
      const messages = this.$i18n.messages[locale];
      return [
        messages.home.sections.commerces.table.head.name,
        messages.home.sections.commerces.table.head.nif,
        messages.home.sections.commerces.table.head.year
      ];
    },
    hasCommerces() {
      return this.commerces && this.commerces.length;
    }
  },
  methods: {
    showDetail(commerce) {
      this.$emit(showCommerceDetail, commerce);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/mixins";
@import "../../../assets/styles/colors";

.table {
  border: 1px solid $third-color;
  width: 100%;

  .tr {
    .th,
    .td {
      @include flex(row, center, center);

      height: 100%;
    }

    .th {
      background-color: $third-color;
    }
  }

  .table-head,
  .table-body {
    width: 100%;
  }

  .table-head,
  .table-body .tr {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .table-head .tr {
    height: 1.5rem;
    text-transform: uppercase;
  }

  .table-body {
    @include flex(column, inherit, inherit);

    .tr {
      height: 3rem;

      .td {
        border: 0.5px solid $third-color;
      }

      &:nth-child(even) {
        background-color: $gray-color;
      }

      &:hover {
        background-color: $primary-color;
        cursor: pointer;
      }
    }
  }

  &.empty {
    background-color: $gray-color;
    text-align: center;
    width: 100%;
  }
}
</style>
