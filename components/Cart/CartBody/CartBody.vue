<template>
  <div>
    <div class="cart__body" v-for="data in getCart" :key="data.title">
      <img
          :src="data.img"
          alt="product" class="cart__img">
      <div class="cart__product">
        <h2 class="cart__product_name">
          {{ data.name }}
        </h2>
        <p class="cart__price">${{ data.price }}.00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    getCart: Array
  }
}
</script>

<style scoped lang="scss">
.cart__body {
  display: flex;
  width: 100%;
  justify-content: center;

  .cart__product {
    display: flex;
    padding-top: 20px;
    width: 100%;
    justify-content: space-between;

    .cart__product_name {
      max-width: 400px;
      font-weight: 500;
      font-size: 16px;
      margin-right: 20px;
    }
  }

  .cart__img {
    height: 150px;
    margin-right: 10px;
  }
}
</style>