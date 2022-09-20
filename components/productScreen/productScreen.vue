<template>
   <div :class="screen ? 'screen' : 'screen2' ">
      <h1 class="screen__title">{{title}}</h1>
      <h2 :class="screen ? 'screen__about' : 'screen2__about'">
         {{about}}
      </h2>
      <p class="screen__description">{{description}}</p>
      <Button :name="'buy'"><nuxt-link to="shop">Buy</nuxt-link></Button>
      <img class="screen__img" :src="image" alt="product" data-not-lazy>
   </div>
</template>

<script>
export default {
   props: {
      title: String,
      about: String,
      description: String,
      image: String,
      screen: Boolean
   }
}
</script>

<style scoped lang="scss">
.screen,
.screen2 {
   padding: 40px 5px 0;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: center;
   text-align: center;
   width: calc(100% + 20px);
   height: 100vh;
   overflow: hidden;

   &>*:not(:last-child) {
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

   .screen__img {
      bottom: 0;
      width: 100%;
      max-width: 400px;
      min-height: 200px;
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