<template>
<!--  <ul class="greeting__carousel">-->
<!--    <li :style="{'background-image': `url(${images[count]})`}"></li>-->
<!--  </ul>-->
  <img src="https://firebasestorage.googleapis.com/v0/b/app-istore.appspot.com/o/carousel2.jpg?alt=media&token=170cd071-f147-4647-974e-c74db0b1783d" alt="sfsf">
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      images: [
        "/images/airpods.jpg",
        "/images/imac.jpg",
        "/images/ipad.jpg",
        "/images/carousel4.jpg",
        "/images/carousel5.jpg",
        "/images/carousel6.jpg",
        "/images/carousel7.jpg",
      ]
    }
  },
  methods: {
    countSlide(num, arr) {
      setInterval(() => {
        if (this.count === this.images.length - 1) {
          return this.count = 0
        } else {
          return this.count++
        }
      }, 5000)
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
      translate: 120%;
    }
  }

  h1 {
    margin-bottom: 30px;
    font-weight: 700;
  }
}
</style>