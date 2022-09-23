¬
<template>
  <header class="header">
    <h1 class="header__name">
      <nuxt-link to="/">Store.</nuxt-link>
    </h1>
    <div class="header__icons">
      <nuxt-link to="cart">
        <img class="header__icon" src="/images/icons/cart.png" alt="cart">
      </nuxt-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;

  .header__name {
    font-size: 24px;
    font-weight: 700;
  }

  .header__icons {
    margin-right: 55px;

    .header__icon {
      height: 25px;
      width: 25px;
    }
  }
}
</style>