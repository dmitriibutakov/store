<template>
  <footer class="footer">
    <p>@2022 dmitryload GitHub</p>
    <nuxt-link to="/contacts">Contacts</nuxt-link>
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

  & > :last-child {
    font-weight: 700;
  }
}
</style>