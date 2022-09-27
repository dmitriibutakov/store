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
             alt="product"
             data-not-lazy>
      </div>
      <h2 class="cart__product_name">
        {{ data.name }}
      </h2>
      <v-quantity :key="data.title"
                  :productName="data.name"
                  :price="getQuantity(data.name) * data.price"
                  :quantityStore="getQuantity(data.name)"/>
      <p class="cart__price" :key="getIndex">${{ getQuantity(data.name) * data.price }}</p>
      <button class="cart__remove" @click="()=>{
        removeItem(data.name)
        removeItem(`${data.name} quantity`)

      }">
        <img src="images/icons/delete.png" alt="delete" data-not-lazy>
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    getCart: Array
  },
  computed: {
    ...mapGetters({
      getIndex: "getIndex",
    }),
  },
  methods: {
    ...mapActions({
      deleteCartFromStorage: "deleteCartFromStorage",
      fetchSumCart: "fetchSumCart"
    }),
    removeItem(key) {
      this.deleteCartFromStorage(key)
      this.fetchSumCart(this.getCart)
    },
    getQuantity(name) {
      return +localStorage.getItem(`${name} quantity`) || 1
    }
  },
}
</script>

<style scoped lang="scss">
.cart__body {
  display: flex;
  flex-direction: column;
  width: 100%;

  .cart__empty {
    margin: 0 auto 30px auto;
    color: transparent;
    background-clip: text;
    font-weight: 600;
    font-size: 24px;
    background-image: linear-gradient(90deg, #2ca2b4, #5598de 24%, #7f87ff 45%, #f65aad 76%, #ec3d43);
  }

  .cart__card {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > *:not(:last-child) {
      display: flex;
      justify-content: flex-start;
      flex: 0 0 19%;
    }

    & > :last-child {
      flex: 0 0 10%;
    }

    .cart__product_name {
      max-width: 400px;
      font-weight: 500;
    }
  }

  .cart__img {
    img {
      height: 50px;
    }
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