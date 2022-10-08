<template>
  <div v-else class="total__block">
    <v-form-order @showPayingWindow="setShowPaying"/>
    <div class="total__billing">
      <div class="billing__block">
        <v-billing-total v-for="data in getCart" :key="data.name" :product="data"/>
        <h3 class="total__sum">Total sum
          <span class="total__number"> {{ getTotalSumCart }} $</span>
        </h3>
      </div>
      <transition name="background">
        <v-form-paying v-show="showPaying"/>
      </transition>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      showPaying: false
    }
  },
  computed: {
    ...mapGetters({
      getTotalSumCart: "getTotalSumCart",
      getCart: "getCart",
    })
  },
  methods: {
    setShowPaying() {
      this.showPaying = !this.showPaying
    }
  }
}
</script>

<style scoped lang="scss">
.total__block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .total__billing {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .background-enter-active, .background-leave-active {
      transition: opacity .5s;
    }
    .background-enter, .background-leave-to {
      opacity: 0;
    }
    .billing__block {
      margin: 10px 10px 10px 0;
      display: flex;
      flex-direction: column;
      width: 220px;
      padding: 10px;
      font-weight: 400;
      border: 1px solid rgba(134, 133, 133, 0.48);
      border-radius: 20px;
    }
    .total__sum {
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      width: 220px;
      font-weight: 400;
      border-top: 1px solid rgba(134, 133, 133, 0.48);
    }
  }
}
@media (max-width: 821px) {
  .total__billing {
    flex-direction: column;
  }
}
</style>