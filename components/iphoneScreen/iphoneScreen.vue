<template>
   <div class="iphone">
      <h1 class="iphone__title">{{title}}</h1>
      <h2 class="iphone__about">{{about}}</h2>
      <p class="iphone__description">{{description}}</p>
      <Button :name="'buy'" />
      <img class="iphone__img" :src="image" alt="iphone">
   </div>
</template>

<script>
export default {
props:{
   title: String,
   about: String,
   description: String,
   image: String
}
}
</script>

<style lang="scss">
.iphone {
   padding: 0 5px;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: center;
   text-align: center;
   width: calc(100% + 20px);
   height: 100vh;
   color: #f5f5f7;
   background-color: #000;

   &>*:not(:last-child) {
      margin-bottom: 13px;
   }

   .iphone__title {
      font-size: 24px;
      font-weight: 600;
   }

   .iphone__about {
      color: transparent;
      font-size: 40px;
      font-weight: 600;
      background-clip: text;
      background-image: linear-gradient(180deg, #ffb6ff, #b344ff);
   }
.iphone__description {
   font-size: 21px;
}
   .iphone__img {
      margin-top: 40px;
      width: 100%;
      max-width: 400px;
   }
}
</style>