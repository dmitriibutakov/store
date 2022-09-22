<template>
  <div class="shopPage__menu_item"
       @click.stop="toggleMenu(!getIsShowMenu)">{{ getActiveFilter }}
    <ul class="shopPage__filter"
        v-if="getIsShowMenu">
      <li @click.stop
          v-for="(data, index) in shopFilters"
          :key="index" @click="(event) => setFilteredProducts(event)"
          class="shopPage__filter_item">{{ data }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      shopFilters: ["All Products",
        "iPhone",
        "MacBook",
        "iPad",
        "Watch",
        "Accessories"]
    }
  },
  computed: {
    ...mapGetters({
      getIsShowMenu: "getIsShowMenu",
      getActiveFilter: "getActiveFilter"
    })
  },
  methods: {
    ...mapActions({
      setFilteredProducts: "setFilteredProducts",
      toggleMenu: "toggleMenu"
    }),
  },
}
</script>

<style lang="scss" scoped>
.shopPage__menu_item {
  padding: 5px 10px;
  width: 100px;
  position: relative;
  cursor: pointer;
  background-color: rgba(220, 220, 220, 0.75);
  color: #3a3a3a;

  .shopPage__filter {
    position: absolute;
    width: 100%;
    background-color: #fff;
    top: 26px;
    left: 0;
    color: #6e6e73;
    z-index: 2;
    opacity: .8;
    animation: shad 1s ease-in-out;

    .shopPage__filter_item {
      width: calc(100% - 10px);
      padding: 5px 0 5px 10px;

      &:hover {
        background-color: #006edb;
        color: #fff;
      }
    }
  }

  @-webkit-keyframes shad {
    0% {
      opacity: 0;
    }

    100% {
      opacity: .8;
    }
  }

}
</style>