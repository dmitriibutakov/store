<template>
  <v-preloader v-if="getLoading"/>
  <div v-else class="greeting__page">
    <h1 class="greeting__title">The best way to buy the products you love.</h1>
    <nuxt-link to="shop" class="greeting__carousel">
      <v-carousel :products="getImagesFromProducts"/>
    </nuxt-link>
    <p class="greeting__about">The latest.
      <br> Take a look at what’s new,
      <br>
      <nuxt-link to="shop"> &#62; right now.</nuxt-link>
    </p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "IndexPage",
  computed: {
    ...mapGetters({
      getProducts: "getProducts",
      getLoading: "getLoading",
      getImagesFromProducts: "getImagesFromProducts"
    })
  },
}
</script>

<style lang="scss" scoped>
.greeting__page {
  padding: 0 5px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  .greeting__carousel {
    order: 2;
  }
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
  .greeting__title {
    order: 1;
    margin-top: 40px;
    font-size: 28px;
    font-weight: 700;
  }
  .greeting__about {
    order: 3;
    color: #6e6e73;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    width: 100%;
  }
}
@media (min-width: 800px) {
  .greeting__page {
    flex-flow: row;
    justify-content: center;
    width: 100%;
    & > *:not(:last-child) {
      margin: 0 30px 0 0;
    }
    .greeting__title {
      order: 1;
      max-width: 300px;
    }
    .greeting__about {
      order: 3;
      width: max-content;
    }
    .greeting__carousel {
      order: 2;
    }
  }
}
</style>