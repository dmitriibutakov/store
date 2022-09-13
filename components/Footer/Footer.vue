<template>
<footer class="footer">
  <p>@2022 dmitryload GitHub</p> <nuxt-link to="/contacts">Contacts</nuxt-link>
</footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
  &>:first-child {
    margin-right: 10px;
  }
  &>:last-child {
    font-weight: 700;
  }
}
</style>