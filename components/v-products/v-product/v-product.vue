<template>
  <div class="product">
    <div class="product__img">
      <img :src=product.img alt="product">
    </div>
    <h1 class="product__name">{{ product.name }}</h1>
    <p class="product__about">{{ product.about }}</p>
    <div class="product__price"> $ {{ product.price }}.00
      <v-quantity :productName="product.name"/>
      <v-button @onClick="clickHandler">add</v-button>
      <div v-show="blick" :key="product.price" class="dot">added to cart</div>
    </div>
  </div>
</template>

<script>
import Button from '../../v-button/v-button.vue';
import {mapActions} from "vuex";

export default {
  data() {
    return {
      blick: false,
      quantity: 1
    }
  },
  props: {
    product: Object
  },
  components: {Button},
  methods: {
    ...mapActions({setCartToStorage: "setCartToStorage", getCartFromStorage: "getCartFromStorage"}),
    clickHandler() {
      this.blick = true
      this.setCartToStorage(this.product)
      setTimeout(() => {
        this.blick = false
      }, 2000)
      this.getCartFromStorage()
    }
  }
}
</script>

<style scoped lang="scss">

.product {
  display: flex;
  flex: 0 0 250px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
  padding: 20px;
  border-radius: 18px;
  transition: all .4s ease-in-out;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
  & > * {
    margin-bottom: 10px;
  }
  &:hover {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, .16);
    transform: scale3d(1.01, 1.01, 1.01);
  }
  .product__img {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    img {
      margin: 0 auto;
      height: 200px;
      width: 200px;
    }
  }
  .product__name {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
    color: #1d1d1f;
  }
  .product__about {
    font-weight: 500;
    color: #464646;
    font-size: 12px;
  }
  .product__price {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #1d1d1f;
    opacity: .9;
    .dot {
      position: absolute;
      right: -5px;
      bottom: -20px;
      color: #006edb;
      animation: blick 2s ease-in-out;
    }
    @keyframes blick {
      0% {
        opacity: 0;
      }
      30% {
        opacity: 1;
      }
      90% {
      }
      100% {
        opacity: 0;
      }
    }
  }
}
</style>