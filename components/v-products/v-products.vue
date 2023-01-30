<template>
    <div class="products">
      <v-product v-for="(v, i) in products"
                 :product="v"
                 :key="i"/>
    </div>
</template>

<script>
import VProduct from "@/components/v-products/v-product";
export default {
  name: "VProducts",
  components: {VProduct},
  props: {
    products: Array
  },
}
</script>

<style scoped lang="scss">
  .products {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
  }
</style>
