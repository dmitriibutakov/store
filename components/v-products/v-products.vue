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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>