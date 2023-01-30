<template>
  <footer class="footer">
    <a class="footer__link" href="https://github.com/dmitrybutakov/store">2022 GitHub</a>
    <nuxt-link class="footer__link" to="/contacts">Contacts</nuxt-link>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 16px;
  border-top: 1px solid rgba(75, 75, 75, 0.222);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;

  & > :first-child {
    margin-right: 10px;
  }

  .footer__link {
    transition: all .3s ease-in;

    &:hover {
      color: #085dad;
    }
  }
}
</style>
