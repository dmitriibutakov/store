<template>
  <div class="shopPage__menu_item"
       @click.stop="toggleMenu">{{ activeVariant }}
    <transition name="background">
    <ul class="shopPage__filter"
        v-if="getIsShowMenu">
      <li @click.stop
          v-for="(data, index) in listVariants"
          :key="index" @click="(event) => setFilteredProducts(event)"
          class="shopPage__filter_item">{{ data }}
      </li>
    </ul>
    </transition>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    listVariants: Array,
    activeVariant: String
  },
  computed: {
    ...mapGetters({getIsShowMenu: "getIsShowMenu"})
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

    .shopPage__filter_item {
      width: calc(100% - 10px);
      padding: 5px 0 5px 10px;

      &:hover {
        background-color: #006edb;
        color: #fff;
      }
    }
  }

  .background-enter-active, .background-leave-active {
    transition: opacity .5s;
  }

  .background-enter, .background-leave-to {
    opacity: 0;
  }

}
</style>