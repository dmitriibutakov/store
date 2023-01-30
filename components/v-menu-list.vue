<template>
  <div class="shop__menu_item"
       @click.stop="toggleMenu">{{ activeVariant }}
    <ul class="shop__filter"
        v-if="getIsShowMenu">
      <li @click.stop
          v-for="(v, i) in listVariants"
          :key="i" @click="(event) => setFilteredProducts(event)"
          class="shop__filter_item">{{ v }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "VMenuList",
  props: {
    listVariants: {type: Array, required: true},
    activeVariant: {type: String, required: true}
  },
  computed: {
    ...mapGetters(["getIsShowMenu"])
  },
  methods: {
    ...mapActions(["setFilteredProducts", "toggleMenu"]),
  },
}
</script>

<style scoped lang="scss">
.shop__menu_item {
  padding: 5px 10px;
  width: 100px;
  position: relative;
  cursor: pointer;
  background-color: rgba(220, 220, 220, 0.75);
  color: #3a3a3a;

  .shop__filter {
    position: absolute;
    width: 100%;
    background-color: #fff;
    top: 26px;
    left: 0;
    color: #6e6e73;
    z-index: 2;

    .shop__filter_item {
      width: calc(100% - 10px);
      padding: 5px 0 5px 10px;

      &:hover {
        background-color: #006edb;
        color: #fff;
      }
    }
  }
}
</style>
