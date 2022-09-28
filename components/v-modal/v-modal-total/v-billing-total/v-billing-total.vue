<template>
  <div class="billing__body">
    <h5 class="billing__name">{{ product.name }}</h5>
    <span class="billing__quantity">x{{ getQuantity(product.name) }}</span>
    <span>{{ product.price }} $</span>
  </div>
</template>

<script>

export default {
  props: {
    product: Object
  },
  methods: {
    getQuantity(name) {
      return +localStorage.getItem(`${name} quantity`) || 1
    }
  }
}
</script>

<style scoped lang="scss">
.billing__body {
  display: flex;
  max-width: 300px;
  margin-bottom: 10px;
  .billing__name {
    flex: 0 0 50%;
  }
  & > * {

  }

  .billing__quantity {
    flex: 0 0 20%;
  }
}
</style>