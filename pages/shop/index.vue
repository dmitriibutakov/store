<template>
  <transition v-if="getLoading" name="background">
    <v-preloader/>
  </transition>
  <div class="shop" v-else>
    <v-menu-list :list-variants="getShopFilters" :active-variant="getActiveFilter"/>
    <v-products :products="getPortionProducts"/>
    <v-button :disabled="getPortionProducts.length < getPortionNumber" class="shop__btn"
            @click="fetchPortionProducts">show more
    </v-button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import VProducts from "@/components/v-products/v-products";

export default {
  components: {VProducts},
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

<style scoped lang="scss">
.background-enter-active, .background-leave-active {
  transition: opacity .5s;
}
.background-enter, .background-leave-to {
  opacity: 0;
}
.shop {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__btn {
    margin-top: 20px;
    background-color: #006edb;
    font-size: 17px;
    padding: 8px 16px;
    border-radius: 98px;
    color: #fff;
    transition: all .3s ease-in;
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
