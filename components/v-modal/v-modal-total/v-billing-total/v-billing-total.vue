<template>
  <div class="billing__body">
    <h5>{{ product.name }}</h5>
    <span>{{ product.price }} $</span>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style scoped lang="scss">
.billing__body {
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin-bottom: 10px;
}
</style>