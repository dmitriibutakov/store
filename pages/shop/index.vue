<template>
  <v-preloader v-if="getLoading"/>
  <div class="shopPage" v-else>
    <v-menu-list :list-variants="getShopFilters" :active-variant="getActiveFilter"/>
      <v-products :products="getPortionProducts"/>
    <button :disabled="getPortionProducts.length < getPortionNumber" class="shopPage__brn"
            @click="fetchPortionProducts">show more
    </button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      getLoading: "getLoading",
      getProducts: "getProducts",
      getShopFilters: "getShopFilters",
      getActiveFilter: "getActiveFilter",
      getPortionNumber: "getPortionNumber",
      getPortionProducts: "getPortionProducts",
    }),
  },
  methods: {
    ...mapActions({fetchPortionProducts: "fetchPortionProducts"}),
  }
}
</script>

<style lang="scss" scoped>
.shopPage {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .shopPage__brn {
    margin-top: 20px;
    background-color: #006edb;
    font-size: 17px;
    padding: 8px 16px;
    border-radius: 98px;
    color: #fff;
    transition: all .4s ease-in-out;

    &:disabled {
      background-color: rgb(92, 92, 92);
    }

    &:hover {
      box-shadow: 2px 4px 16px rgba(0, 0, 0, .16);
      transform: scale3d(1.01, 1.01, 1.01);
    }
  }
}
</style>