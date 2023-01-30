<template>
  <div class="quantity">
    <button @click="decreaseQuantity" class="quantity__btn">-</button>
    <span>{{ quantity }}</span>
    <button @click="increaseQuantity" class="quantity__btn">+</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "VQuantity",
  props: {
    productName: {type: String, required: true},
    quantityStore: {type: Number},
  },
  data() {
    return {
      quantity: this.quantityStore || 1
    }
  },
  computed: {
    ...mapGetters(["getCart"])
  },
  methods: {
    ...mapActions(["refreshCart", "setQuantityToStorage", "fetchSumCart"]),
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
.quantity {
  display: flex;
  font-size: 14px;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 5px;
  }

  &__btn {
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 100px;
    background-color: #006edb;
    color: #fff;
  }
}
</style>
