<template>
  <div class="cart__body">
    <nuxt-link class="cart__empty"
               v-if="getCart.length < 1"
               to="shop"> Empty cart, add products to cart
    </nuxt-link>
    <div class="cart__card"
         v-for="data in getCart"
         :key="data.title">
      <div class="cart__img">
        <img :src="data.img"
             alt="product">
      </div>
      <h2 class="cart__product_name">
        {{ data.name }}
      </h2>
      <p class="cart__price">${{ data.price }}.00</p>
      <button class="cart__remove" @click="()=>removeItem(data.name)">
        <img src="images/icons/delete.png" alt="delete">
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: {
    getCart: Array
  },
  methods: {
    ...mapActions({
      deleteCartFromStorage: "deleteCartFromStorage",
    }),
    removeItem(key) {
      this.deleteCartFromStorage(key)
    }
  }
}
</script>

<style scoped lang="scss">
.cart__body {
  display: flex;
  flex-direction: column;
  width: 100%;

  .cart__empty {
    display: flex;
    color: transparent;
    text-align: center;
    background-clip: text;
    font-weight: 600;
    font-size: 24px;
    background-image: linear-gradient(90deg, #2ca2b4, #5598de 24%, #7f87ff 45%, #f65aad 76%, #ec3d43);
    margin-bottom: 30px;
  }

  .cart__card {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > *:not(:last-child) {
      display: flex;
      justify-content: flex-start;
      flex: 0 0 25%;
    }

    & > :last-child {
      flex: 0 0 10%;
    }

    .cart__product_name {
      max-width: 400px;
      font-weight: 500;
      font-size: 16px;
    }
  }

  .cart__img {
    img {
      height: 50px;
    }
  }

  .cart__price {
    font-size: 18px;
  }

  .cart__remove {
    cursor: pointer;

    img {
      height: 24px;
      width: 24px;
    }
  }
}
</style>