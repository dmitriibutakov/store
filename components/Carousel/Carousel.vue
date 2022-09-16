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
    countSlide(num, arr) {
      let that = this
      setTimeout(function tick() {
        if (that.count === that.products.length - 1) {
          that.count = 0
        } else {
          that.count++
        }
        return setTimeout(tick, 5000)
      }, 4000)
    }
  },
  mounted() {
    this.countSlide()
  }
}
</script>

<style lang="scss">
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
    animation: show 5000ms infinite;
  }

  @-webkit-keyframes show {
    0% {
      translate: -120%;
    }

    40% {
      translate: 0;
    }

    60% {
      translate: 0;
    }

    100% {
      translate: 130%;
    }
  }

  h1 {
    margin-bottom: 30px;
    font-weight: 700;
  }
}
</style>