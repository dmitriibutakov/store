<template>
  <Preloader v-if="getLoading"/>
  <div v-else class="greeting__page">
    <h1 class="greeting__title">The best way to buy the products you love.</h1>
    <nuxt-link to="shop">
      <Carousel :products="getImagesFromProducts"/>
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
<style lang="scss">
.greeting__page {
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  .greeting__title {
    font-size: 28px;
    font-weight: 700;
  }

  .greeting__about {
    color: #6e6e73;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    width: 100%;
  }
}
</style>