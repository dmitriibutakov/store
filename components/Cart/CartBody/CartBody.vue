<template>
  <div class="cart__body">
    <nuxt-link class="cart__empty"
               v-if="getCart.length < 1"
               to="shop"> Empty cart, add products to cart
    </nuxt-link>
    <div class="cart__card"
         v-for="data in getCart"
         :key="data.title">
      <img :src="data.img"
           alt="product"
           class="cart__img">
      <div class="cart__product">
        <h2 class="cart__product_name">
          {{ data.name }}
        </h2>
        <p class="cart__price">${{ data.price }}.00</p>
        <button class="cart__remove" @click="()=>removeItem(data.name)"><img src="images/icons/delete.png" alt="delete">
        </button>
      </div>
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
    justify-content: center;
    color: transparent;
    background-clip: text;
    font-weight: 600;
    font-size: 24px;
    background-image: linear-gradient(90deg, #2ca2b4, #5598de 24%, #7f87ff 45%, #f65aad 76%, #ec3d43);
    margin-bottom: 30px;
  }

  .cart__card {
    display: flex;
    align-items: center;

    .cart__product {
      display: flex;
      width: 100%;
      align-items: flex-end;

      & > * {
        display: flex;
        justify-content: center;
        flex: 1 0 40%;
      }

      & > *:not(:last-child) {
      }

      .cart__product_name {
        max-width: 400px;
        font-weight: 500;
        font-size: 16px;
      }
    }

    .cart__img {
      height: 80px;
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
}
</style>