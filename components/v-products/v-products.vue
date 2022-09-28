<template>
  <div class="products">
    <v-product v-for="(prod, index) in products"
               :product="prod"
               :key="index"/>
  </div>
</template>

<script>
export default {
  props: {
    products: Array
  },
}
</script>

<style lang="scss" scoped>

.products {
  padding: -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (min-width: 600px) {
  .products {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }
}
</style>