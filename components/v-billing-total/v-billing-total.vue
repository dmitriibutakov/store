<template>
  <div>
    <h5>{{product.name}}</h5>
    <span>{{product.price}}</span>
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

</style>