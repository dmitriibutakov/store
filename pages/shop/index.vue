<template>
  <Preloader v-if="getLoading"/>
  <Products v-else :products="getProducts"/>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  methods: {
    ...mapActions({fetchProducts: "fetchProducts"}),
  },
  computed: {
    ...mapGetters({
      getProducts: "getProducts",
      getLoading: "getLoading"
    }),
  },
  mounted() {
    this.fetchProducts()
  }
}
</script>

<style scoped>

</style>