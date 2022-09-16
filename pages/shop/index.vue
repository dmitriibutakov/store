<template>

  <Preloader v-if="getLoading"/>
  <div v-else>
    <Products :products="getPortionProducts"/>
    <button @click="fetchPortionNumbers()">show more</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      portionCount: 4,
    }
  },
  computed: {
    ...mapGetters({
      getPortionProducts: "getPortionProducts",
      getLoading: "getLoading"
    }),
  },
  methods: {
    ...mapActions({fetchPortionNumbers: "fetchPortionNumbers"}),
  },
}
</script>

<style scoped>

</style>