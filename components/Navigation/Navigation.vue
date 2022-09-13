<template>
  <div :class="active ? 'navigation' : 'navigation__hidden'">
    <div :class="active ? 'burger__active' : 'burger'" @click="active = !active">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="navigate">
      <div class="link">HOME</div>
      <div class="link">SEARCH</div>
      <div class="link">CONTACTS</div>
      <div class="link">ABOUT</div>
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
}
</script>

<style lang="scss">
.navigation,
.navigation__hidden {
  position: absolute;
  z-index: 2;
  top: 0px;
  display: flex;
  height: 10px;
  justify-content: flex-end;
  transition: all 1s ease-in-out;
  padding: 13px 15px 0px;
  min-height: 100%;
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
    margin-left: 5px;
    flex-direction: column;
    align-items: end;
    width: 100px;

    & > *:not(:last-child) {
      margin-bottom: 20px;
    }

    .link {
      color: inherit;
      transition: all .5s ease-in-out;
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
}

.navigation__hidden {
  right: -105px;
}
</style>