<template>
  <div class="wrapper">
    <v-header/>
    <v-navigation/>
    <main class="main">
      <Nuxt/>
    </main>
    <v-footer/>
  </div>
</template>
<script>
import Footer from "@/components/v-footer/v-footer";
import {mapActions} from "vuex";

export default {
  components: {Footer},
  methods: {
    ...mapActions({fetchProducts: "fetchProducts", getCartFromStorage: "getCartFromStorage"}),
  },
  mounted() {
    this.fetchProducts()
    this.getCartFromStorage()
  }
}
</script>
<style lang="scss">
  .main {
    margin: 45px 10px 0 10px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .wrapper {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #e5e5e500;
    color: #11142D;
    overflow: hidden;
  }
  .footer {
  }
</style>