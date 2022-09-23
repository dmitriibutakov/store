<template>
  <div class="cart">
    <h1 class="cart__title">Review your bag.</h1>
    <CartBody :getCart="getCart"/>
    <div class="cart__total">
      <h4 class="cart__total_name">Total</h4>
      <p class="cart__total_price">{{ getCart.reduce((a, b) => a + b.price, 0) }}.00 $</p>
    </div>
    <div class="cart__button">
      <Button :onClick="showClick">order</Button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({getCart: "getCart"})
  },
  methods: {
    ...mapActions({getCartFromStorage: "getCartFromStorage"}),
    showClick() {
      console.log("click")
    }
  },
  mounted() {
    this.getCartFromStorage()
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
    font-size: 20px;
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