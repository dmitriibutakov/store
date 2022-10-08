<template>
  <ul class="greeting__carousel">
    <li v-if="products.length > 1"
        :style="{backgroundImage: `url(${products[count]})`}"></li>
  </ul>
</template>

<script>
export default {
  props: {
    products: Array
  },
  data() {
    return {
      count: 1
    }
  },
  methods: {
    countSlide() {
      let that = this
      setTimeout(function tick() {
        if (that.count === that.products.length - 1) {
          that.count = 0
        } else {
          that.count++
        }
        return setTimeout(tick, 4000)
      }, 4000)
    }
  },
  mounted() {
    this.countSlide()
  }
}
</script>

<style lang="scss" scoped>
.greeting__carousel {
  height: 300px;
  width: 300px;
  display: flex;
  z-index: -1;
  overflow: hidden;
  li {
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    animation: show 4000ms infinite ease-in;
  }
  @-webkit-keyframes show {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    40% {
      transform: translateX(0);
      opacity: 1;
    }
    60% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  h1 {
    margin-bottom: 30px;
    font-weight: 700;
  }
}
@media (min-width: 600px) {
  .greeting__carousel {
    width: 400px;
    height: 400px;
  }
}
</style>