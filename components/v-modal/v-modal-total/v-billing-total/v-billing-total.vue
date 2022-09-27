<template>
  <div class="billing__block">
    <div class="billing__body">
    <h5>{{ product.name }}</h5>
    <span>{{ product.price }}</span>
    </div>
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
.billing__block {
  display: flex;
  .billing__body {
    display: flex;
  }
}
</style>