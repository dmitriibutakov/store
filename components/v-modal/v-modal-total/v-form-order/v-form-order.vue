<template>
  <form @submit.prevent="onSubmit" class="total__inputs">
    <v-input v-for="v in Object.keys(formData)"
             :error="formValidator[v]"
             :key="v"
             :name="v"
             :input-value="formData[v]"
             :placeholder="v"
             @customChange="handleCustomChange"/>
    <div>
      <v-button :disabled="getLoading">paying method</v-button>
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
        'Full name': "",
        'Passport number': "",
        'Address': "",
        'Mobile number': ""
      },
      formValidator: {
        'Full name': "",
        'Passport number': "",
        'Address': "",
        'Mobile number': ""
      }
    }
  },
  computed: {
    ...mapGetters({getLoading: "getLoading", getIsPaying: "getIsPaying"})
  },
  methods: {
    ...mapActions({showPaying: "showPaying"}),
    onSubmit() {
      isValidFormInput(this.formData, this.formValidator)
      if (Object.values(this.formData).every(el => el.length > 0)) {
        this.showPaying()
        this.$emit("showPayingWindow")
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
.total__inputs {
  margin: -10px;
  & > * {
    margin: 10px;
  }
}
</style>
