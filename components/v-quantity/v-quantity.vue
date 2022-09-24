<template>
  <div class="quantity__body">
    <button @click="decreaseQuantity" class="quantity__btn">-</button>
    <span>{{ quantity }}</span>
    <button @click="increaseQuantity" class="quantity__btn">+</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    productName: String,
    quantityStore: Number,
  },
  data() {
    return {
      quantity: this.quantityStore || 1
    }
  },
  computed: {
    ...mapGetters({getCart: "getCart"})
  },
  methods: {
    ...mapActions({
      refreshCart: "refreshCart",
      setQuantityToStorage: "setQuantityToStorage",
      fetchSumCart: "fetchSumCart"
    }),
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
      this.setQuantityToStorage({name: this.productName, quantity: this.quantity})
      this.fetchSumCart(this.getCart)
      this.refreshCart()
    },
    increaseQuantity() {
      if (this.quantity < 10) {
        this.quantity++
      }
      this.setQuantityToStorage({name: this.productName, quantity: this.quantity})
      this.fetchSumCart(this.getCart)
      this.refreshCart()
    }
  }
}
</script>

<style scoped lang="scss">
.quantity__body {
  display: flex;
  font-size: 14px;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 5px;
  }

  .quantity__btn {
    width: 20px;
    height: 20px;
    border-radius: 99px;
    background-color: #006edb;
    color: white;
  }
}
</style>