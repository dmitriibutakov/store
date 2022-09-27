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
          <v-input :title="'year issue'" class="pay__year" :type="'number'"/>
          <v-input :title="'month issue'" class="pay__month" :type="'number'"/>
        </div>
      </div>
    </div>
    <v-button :onClick="sentBilling">place order</v-button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({getTotalSumCart: "getTotalSumCart", getCart: "getCart"})
  },
  methods: {
    sentBilling() {
      console.log("sent billing")
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

  .total__inputs {
    margin: -10px;

    & > * {
      padding: 10px;
    }
  }
}

.total__billing {
  margin: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;


  .billing__pay, .billing__block {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    width: 220px;
    padding: 10px;
    font-weight: 400;
    border: 1px solid rgba(134, 133, 133, 0.48);
    border-radius: 20px;
  }

  .billing__block {
    margin-right: 10px;

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