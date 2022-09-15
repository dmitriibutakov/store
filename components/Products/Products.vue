<template>
  <div class="products" >
    <Product :product="getProducts[0]"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed: {
    ...mapGetters({
      getProducts: "getProducts"
    })
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