<template>
  <v-preloader v-if="getLoading"/>
  <div v-else class="greeting">
    <div class="greeting__container">
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

<style scoped lang="scss">
.greeting {
  padding: 0 5px;

  &__container {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
  }

  &__carousel {
    order: 2;
    cursor: pointer;
  }

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  &__title {
    order: 1;
    font-size: 28px;
    font-weight: 700;
  }

  &__about {
    order: 3;
    color: #6e6e73;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
  }

  @media (min-width: 800px) {
    &__container {
      flex-flow: row;
      justify-content: center;
    }
    & > *:not(:last-child) {
      margin: 0 30px 0 0;
    }
    &__title {
      order: 1;
      max-width: 300px;
    }
    &____about {
      order: 3;
    }
    &__carousel {
      order: 2;
      padding: 0 5px;
    }
  }
}
</style>
