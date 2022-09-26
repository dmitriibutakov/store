<template>
  <div class="total__block">
    <v-input :title="'Full name'"/>
    <v-input :title="'Passport number'"/>
    <v-input :title="'Address'"/>
    <v-input :title="'Mobile number'"/>
    <h3 class="total__sum">total sum
      <span class="total__number"> {{ getTotalSumCart }} $</span>
    </h3>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({getTotalSumCart: "getTotalSumCart"})
  }
}
</script>

<style scoped lang="scss">
.total__block {
  &>*:not(:last-child) {
    margin-bottom: 10px;
  }
}
@media (min-width: 600px) {
  .total__block {
    flex-direction: row;
  }
}
</style>