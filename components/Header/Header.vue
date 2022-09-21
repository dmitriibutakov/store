¬
<template>
  <header class="header">
    <div class="header__upside">
      <h1 class="header__name">
        <nuxt-link to="/">Store.</nuxt-link>
      </h1>
      <div class="header__icons">
        <nuxt-link to="cart">
          <img class="header__icon" src="/images/icons/cart.png" alt="cart">
        </nuxt-link>
      </div>
    </div>
    <div class="header__downside"></div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 10px;
  display: flex;
  flex-direction: column;

  .header__upside {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header__name {
      font-size: 24px;
      font-weight: 700;
    }

    .header__icons {
      display: flex;
      align-items: center;
      margin-right: 35px;

      .header__icon {
        height: 25px;
        width: 25px;
      }
    }
  }
}
</style>