<template>
  <div :class="active ? 'navigation' : 'navigation__hidden'">
    <div :class="active ? 'burger__active' : 'burger'" @click="active = !active">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="navigate">
      <a @click="handleClick('/')" class="link">home</a>
      <a @click="handleClick('about')" class="link">about</a>
      <a @click="handleClick('shop')" class="link">our store</a>
      <a @click="handleClick('contact-us')" class="link">contact us</a>
    </nav>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: false
    }
  },
  methods: {
    handleClick(link) {
      this.active = false
      this.$router.push(link)
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation,
.navigation__hidden {
  position: fixed;
  z-index: 2;
  top: 0px;
  display: flex;
  justify-content: flex-end;
  transition: all 1s ease-in-out;
  padding: 13px 15px 0px;
  height: 100%;

  .burger,
  .burger__active {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 10px;

    span {
      width: 100%;
      height: 3px;
      transition: all 0.25s;
      border-radius: 2px;
    }
  }

  .burger span {
    background-color: #000000c5;
  }

  .burger__active span {
    background-color: #8f2121;
  }

  .burger__active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .burger__active span:nth-child(2) {
    opacity: 0;
  }

  .burger__active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }

  .navigate {
    margin-top: 30px;
    display: flex;
    margin-left: 10px;
    flex-direction: column;
    align-items: flex-end;
    width: 100px;

    & > * {
      text-transform: uppercase;
    }

    & > *:not(:last-child) {
      margin-bottom: 20px;
    }

    .link {
      color: inherit;
      transition: all .5s ease;
      font-weight: 600;
      cursor: pointer;
    }

    .link:hover {
      color: #727272;
    }
  }
}

.navigation {
  right: 0;
  background-color: rgba(255, 255, 255, 0.94);
  border-left: 1px solid rgba(114, 112, 112, 0.4);
}

.navigation__hidden {
  right: -115px;
  height: 50px;
}
</style>