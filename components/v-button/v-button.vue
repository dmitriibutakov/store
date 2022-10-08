<template>
  <button @click="$emit('onClick')" class="button">
    <slot>{{ name }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    name: String,
    onClick: Function
  }
}
</script>

<style scoped lang="scss">
.button {
  background-color: #006edb;
  font-size: 17px;
  padding: 8px 16px;
  border-radius: 98px;
  color: #fff;
  transition: all .4s ease-in-out;
  &:disabled {
    background-color: #858585;
  }
  &:hover {
    background-color: #858585;
  }
}
</style>