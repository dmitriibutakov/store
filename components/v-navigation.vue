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
      <a @click="handleClick('contacts')" class="link">contacts</a>
    </nav>
  </div>
</template>

<script>

export default {
  name: "VNavigation",
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
  top: 0;
  display: flex;
  justify-content: flex-end;
  transition: all .3s ease-in;
  padding: 13px 15px 0;
  height: 100%;

  .burger,
  .burger__active {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 16px;
    cursor: pointer;

    span {
      width: 100%;
      height: 2px;
      transition: all .3s;
    }
  }

  .burger span,
  .burger__active span {
    background-color: #0e0e0e;
  }

  .burger__active span:nth-child(1) {
    transform: translateY(5px) rotate(45deg);
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
      transition: all .3s ease-in;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        color: #006edb;
      }
    }
  }
}

.navigation {
  right: 0;
  background-color:#fff;
  border-left: 1px solid rgba(114, 112, 112, 0.4);
}

.navigation__hidden {
  right: -115px;
  height: 50px;
}
</style>
