<template>
  <Cart/>
</template>

<script>
import {mapActions} from "vuex";

export default {
  methods: {
    ...mapActions({getCartFromStorage: "getCartFromStorage"}),
  },
  mounted() {
    this.getCartFromStorage()
  }
}
</script>