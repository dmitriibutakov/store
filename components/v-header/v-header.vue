¬
<template>
  <header class="header">
    <h1 class="header__name">
      <nuxt-link to="/">Store.</nuxt-link>
    </h1>
    <nuxt-link to="cart" class="cart">
      <div class="cart__indicator">{{ getCart.length }}</div>
      <img class="header__icon" src="/images/icons/cart.png" alt="cart">
    </nuxt-link>
  </header>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({getCart: "getCart"})
  },
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 2;

  .header__name {
    font-size: 24px;
    font-weight: 700;
  }

  .cart {
    position: relative;
    margin-right: 55px;

    .cart__indicator {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      font-size: 12px;
      background-color: #006edb;
      color: white;
      border-radius: 99px;
      position: absolute;
      left: -5px;
      bottom: -5px;
    }
  }

  .header__icon {
    height: 25px;
    width: 25px;
  }
}
</style>