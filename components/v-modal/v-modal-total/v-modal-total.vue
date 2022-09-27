<template>
  <div class="total__block">
    <div class="total__inputs">
      <v-input :title="'Full name'"/>
      <v-input :title="'Passport number'"/>
      <v-input :title="'Address'"/>
      <v-input :title="'Mobile number'"/>
    </div>
    <div class="total__billing">
      <div class="billing__block">
        <v-billing-total v-for="data in getCart" :key="data.name" :product="data"/>
        <h3 class="total__sum">Total sum
          <span class="total__number"> {{ getTotalSumCart }} $</span>
        </h3>
      </div>
      <div class="billing__pay pay">
        <v-input :title="'card number'"/>
        <div class="pay__data">
          <span class="pay__year">2026</span>
          <span class="pay__month">02</span>
        </div>
      </div>
    </div>
    <v-button>place order</v-button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({getTotalSumCart: "getTotalSumCart", getCart: "getCart"})
  }
}
</script>

<style scoped lang="scss">
.total__block {
  display: flex;
  flex-direction: column;

  .total__inputs {
    margin: -10px;
    & > * {
      padding: 10px;
    }
  }
}

.total__billing {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
.billing__pay, .billing__block {
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 10px;
  font-weight: 400;
  border: 1px solid rgba(134, 133, 133, 0.48);
  border-radius: 20px;
}
  .billing__block {
    .total__sum {
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      max-width: 300px;
      font-weight: 400;
      border-top: 1px solid rgba(134, 133, 133, 0.48);
    }
  }

}

</style>