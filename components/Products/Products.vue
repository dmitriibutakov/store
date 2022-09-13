<template>
  <div class="products">
    <Product :product="product"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {img: "url('images/carousel1.jpg')", name: "phone", about: "some about phone", price: 333}
    }
  }
}
</script>

<style lang="scss">
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>