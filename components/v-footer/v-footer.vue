<template>
  <footer class="footer">
    <p>@2022 <a class="footer__link" href="https://github.com/dmitryload">dmitryload GitHub</a></p>
    <nuxt-link class="footer__nuxtlink" to="/contact-us">Contacts</nuxt-link>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 20px;
  border-top: 1px solid rgba(75, 75, 75, 0.222);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  font-size: 14px;

  & > :first-child {
    margin-right: 10px;
  }

  .footer__link, .footer__nuxtlink {
    transition: all 300ms ease-in;

    &:hover {
      opacity: .8;
      color: #006edb;
    }
  }
}
</style>