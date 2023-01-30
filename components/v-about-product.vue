<template>
  <div :class="screen ? 'screen' : 'screen2' ">
    <div class="screen__text">
      <h1 class="screen__title">{{ title }}</h1>
      <h2 :class="screen ? 'screen__about' : 'screen2__about'">
        {{ about }}
      </h2>
      <p class="screen__description">{{ description }}</p>
      <v-button @onClick="handleClick">buy</v-button>
    </div>
    <img class="screen__img" :src="image" alt="product" data-not-lazy>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: {
    title: String,
    about: String,
    description: String,
    image: String,
    screen: Boolean,
  },
  methods: {
    ...mapActions({routeToShop: "routeToShop"}),
    handleClick() {
      this.$router.push("shop")
      this.routeToShop(this.title.split(" ")[0].toLowerCase())
    }
  }
}
</script>

<style scoped lang="scss">
.screen,
.screen2 {
  padding: 40px 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: calc(100% + 20px);
  height: 100vh;
  overflow: hidden;
  .screen__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > *:not(:last-child) {
      margin-bottom: 13px;
    }
    .screen__title {
      font-size: 24px;
      font-weight: 600;
    }
    .screen__about,
    .screen2__about {
      color: transparent;
      font-size: 40px;
      font-weight: 600;
      background-clip: text;
      padding: 0 10px;
    }
    .screen__about {
      background-image: linear-gradient(180deg, #ffb6ff, #b344ff);
    }
    .screen2__about {
      background-image: linear-gradient(90deg, #2ca2b4, #5598de 24%, #7f87ff 45%, #f65aad 76%, #ec3d43);
    }
    .screen__description {
      font-size: 21px;
      margin-bottom: 20px;
    }
    .screen__link {
      color: #fff;
    }
  }
  .screen__img {
    bottom: 0;
    width: 100%;
    min-width: 300px;
    max-width: 550px;
    max-height: 450px;
    min-height: 250px;
  }
}
.screen {
  color: #f5f5f7;
  background-color: #000;
}
.screen2 {
  background-color: #fff;
}
</style>