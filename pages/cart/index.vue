<template>
  <div class="cart">
    <h1 class="cart__title">Review your bag.</h1>
    <div class="cart__body">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/app-istore.appspot.com/o/iphone2.jpg?alt=media&token=026d7642-291f-4098-8ebe-8d00e3ef4b61"
        alt="product" class="cart__img">
      <div class="cart__product">
        <h2 class="cart__product_name">
          iPhone 14 Pro Leather Case with MagSafe - Ink
        </h2>
        <p class="cart__price">$59.00</p>
      </div>
    </div>
    <div class="cart__total">
      <h4 class="cart__total_name">Total</h4>
      <p class="cart__total_price">59$</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.cart {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .cart__title {
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: 40px;
  }

  .cart__body {
    display: flex;

    .cart__img {
      height: 150px;
    }
  }
}
</style>