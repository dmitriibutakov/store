<template>
  <div class="greeting__page">
    <h1 class="greeting__title">The best way to buy the products you love.</h1>
    <Carousel/>
    <p class="greeting__about">The latest.
      <br> Take a look at what’s new,
      <br>
      <nuxt-link to="/latest"> &#62; right now.</nuxt-link>
    </p>
  </div>
</template>

<script>

export default {
  name: "IndexPage",
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
    width: 100%;
  }
}
</style>