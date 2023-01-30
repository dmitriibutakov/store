<template>
  <button @click="$emit('onClick')" class="button">
    <slot>{{ name }}</slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    name: {type: String},
    onClick: {type: Function}
  }
}
</script>

<style scoped lang="scss">
.button {
  background-color: #006edb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 8px 24px;
  border-radius: 100px;
  color: #fff;
  transition: all .3s ease-in;

  &:disabled {
    background-color: rgba(111, 119, 126, 0.5);
  }

  &:hover {
    background-color: rgba(0, 110, 219, 0.8);
  }

  &:active {
    background-color: rgba(0, 110, 219, 0.9);
  }
}
</style>
