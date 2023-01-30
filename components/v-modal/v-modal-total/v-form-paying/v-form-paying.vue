<template>
  <form @submit.prevent="onSubmit" class="billing__pay">
    <v-input v-for="v in Object.keys(formData)"
             :error="formValidator[v]"
             :key="v"
             :name="v"
             :input-value="formData[v]"
             :placeholder="v"
             @customChange="handleCustomChange"/>
    <div class="btn">
      <v-button :disabled="getLoading">place order</v-button>
    </div>
  </form>
</template>

<script>
import {isValidFormInput} from "assets/isValidFormInput";
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      formData: {
        'Card number': "",
        'Year issue': "",
        'Month issue': "",
      },
      formValidator: {
        'Card number': "",
        'Year issue': "",
        'Month issue': "",
      }
    }
  },
  computed: {
    ...mapGetters({getLoading: "getLoading"})
  },
  methods: {
    ...mapActions({sendPaying: "sendPaying"}),
    onSubmit() {
      isValidFormInput(this.formData, this.formValidator)
      if (Object.values(this.formData).every(el => el.length > 0)) {
        this.sendPaying()
      }
    },
    handleCustomChange(value, data) {
      this.formValidator[value] = ""
      this.formData[value] = data
    }
  }
}
</script>

<style scoped lang="scss">
.billing__pay {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  width: 220px;
  padding: 10px;
  font-weight: 400;
  border: 1px solid rgba(134, 133, 133, 0.48);
  border-radius: 20px;
  & > * {
    margin: 5px 0;
  }
  .btn {
    margin-top: 20px;
  }
}
</style>
