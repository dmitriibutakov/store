<template>

  <Preloader v-if="getLoading"/>
  <div class="shopPage" v-else>
    <ol class="shopPage__menu">
      <li class="shopPage__menu_item"
          @click="showMenu = !showMenu">{{ activeFilter }}
        <ul class="shopPage__filter" v-if="showMenu">
          <li v-for="(data, index) in shopFilters"
              :key="index" @click="setMenu"
              class="shopPage__filter_item">{{ data }}
          </li>
        </ul>
      </li>
    </ol>
    <Products :products="getPortionProducts"/>
    <button :disabled="getPortionProducts.length >= getProducts.length"
            class="shopPage__brn"
            @click="fetchPortionNumbers()">show more
    </button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      showMenu: false,
      activeFilter: "All products",
      shopFilters: ["All Products",
        "iPhone",
        "MacBook",
        "iPad",
        "Watch",
        "Accesories"]
    }
  },
  computed: {
    ...mapGetters({
      getProducts: "getProducts",
      getPortionProducts: "getPortionProducts",
      getLoading: "getLoading",
    }),
  },
  methods: {
    ...mapActions({fetchPortionNumbers: "fetchPortionNumbers"}),
    setMenu(e) {
      this.showMenu = !this.showMenu
      this.activeFilter = e.currentTarget.innerText;
    }
  },
}
</script>

<style lang="scss" scoped>
.shopPage {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .shopPage__menu {
    cursor: pointer;
    width: calc(100% + 20px);
    border: 1px solid black;

    .shopPage__menu_item {
      padding: 5px 10px;
      position: relative;
      width: fit-content;
    }
  }

  .shopPage__filter {
    position: absolute;
    width: 100%;
    right: 0;
    top: 20px;
    background-color: #fff;
    z-index: 2;
    animation: show 1s ease-in-out;

    .shopPage__filter_item {
      padding: 5px 10px;
    }
  }

  @-webkit-keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

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