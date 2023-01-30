<template>
  <div class="cart">
    <transition name="background">
      <v-modal v-if="getIsShowModal" :title="'Billing details:'">
        <v-modal-total/>
      </v-modal>
    </transition>
    <h1 class="cart__title">Review your bag.</h1>
    <v-cart-body :getCart="getCart"/>
    <div class="cart__total">
      <h4 class="cart__total_name">Total</h4>
      <p :key="getIndex" class="cart__total_price">{{ getTotalSumCart }} $</p>
    </div>
    <div class="cart__button">
      <v-button :disabled="getCart.length < 1" @onClick="toggleModal">order</v-button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(["getCart", "getIndex", "getIsShowModal", "getTotalSumCart", "getLoading", 'getIsPaying'])
  },
  methods: {
    ...mapActions(["getCartFromStorage", "fetchSumCart", "toggleModal"]),
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

  .background-enter-active, .background-leave-active {
    transition: opacity .3s;
  }

  .background-enter, .background-leave-to {
    opacity: 0;
  }

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
