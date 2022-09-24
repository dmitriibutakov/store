<template>
  <div class="cart">
    <h1 class="cart__title">Review your bag.</h1>
    <v-cart-body :getCart="getCart"/>
    <div class="cart__total">
      <h4 class="cart__total_name">Total</h4>
      <p :key="getIndex" class="cart__total_price">{{ getTotalSumCart }} $</p>
    </div>
    <div class="cart__button">
      <v-button :onClick="showClick">order</v-button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      getCart: "getCart",
      getIndex: "getIndex",
      getTotalSumCart: "getTotalSumCart"
    })
  },
  methods: {
    ...mapActions({
      getCartFromStorage: "getCartFromStorage",
      fetchSumCart: "fetchSumCart"
    }),
    showClick() {
      console.log("click")
    }
  },
  mounted() {
    this.getCartFromStorage()
    this.fetchSumCart(this.getCart)
  }
}
</script>

<style scoped lang="scss">
.cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  & > * {
    max-width: 600px;
    font-size: 14px;
    line-height: 1.16667;
    font-weight: 600;
  }

  .cart__title {
    font-size: 34px;
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: 40px;
  }

  .cart__total {
    border-top: 1px solid rgba(141, 141, 141, 0.374);
    padding-top: 10px;
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    .cart__total_name {
      margin-right: 10px;
      font-weight: 500;
    }
  }

  .cart__button {
    margin-top: 20px;
    width: 100%;
  }
}
</style>