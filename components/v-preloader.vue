<template>
  <div :class="opacity ? 'preloader__wrapper_opacity' : 'preloader__wrapper'">
    <div class="preloader"></div>
  </div>
</template>
<script>
export default {
  name: "VPreloader",
  props: {opacity: Boolean}
}
</script>
<style scoped lang="scss">
.preloader__wrapper, .preloader__wrapper_opacity {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  .preloader {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #3a3a3a;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  .preloader:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #3A3A3AFF;
    -webkit-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
  }

  .preloader:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #3A3A3AFF;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
  }
}

.preloader__wrapper_opacity {
  background-color: rgba(114, 114, 114, 0.09);
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
