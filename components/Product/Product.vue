<template>
  <div class="product">
    <div class="product__img">
      <img :src=product.img alt="product">
    </div>
    <h1 class="product__name">{{ product.name }}</h1>
    <p class="product__about">{{ product.about }}</p>
    <div class="product__price"> $ {{ product.price }}.00
      <button class="product__add">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
}
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 10px 0;
  padding: 20px;
  max-width: 320px;
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
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 14px;
    color: #1d1d1f;
    opacity: .9;

    .product__add {
      background-color: #006edb;
      font-size: 17px;
      padding: 8px 16px;
      border-radius: 98px;
      color: #fff;
      transition: all .4s ease-in-out;
    }
  }
}
</style>