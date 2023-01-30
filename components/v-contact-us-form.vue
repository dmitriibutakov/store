<template>
  <div class="contacts">
    <h3 class="contacts__title">if you want to contact me - leave your details</h3>
    <form @submit.prevent="onSubmit" class="contacts__form">
      <v-input v-for="v in Object.keys(formData)"
               :error="formValidator[v]"
               :key="v"
               :name="v"
               :input-value="formData[v]"
               :placeholder="v"
               @customChange="handleCustomChange"/>
      <v-button class="contacts__btn" :disabled="getLoading">Send message</v-button>
    </form>
  </div>
</template>

<script>
import {isValidFormInput} from "assets/isValidFormInput";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "VContactUsForm",
  data() {
    return {
      formData: {
        Name: "",
        Email: "",
        Number: "",
        Message: ""
      },
      formValidator: {
        Name: "",
        Email: "",
        Number: "",
        Message: ""
      }
    }
  },
  computed: {
    ...mapGetters({getLoading: "getLoading"})
  },
  methods: {
    ...mapActions({contactUs: "contactUs"}),
    onSubmit() {
      isValidFormInput(this.formData, this.formValidator)
      if (Object.values(this.formData).every(el => el.length > 0)) {
        this.contactUs(this.formData)
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
.contacts {
  height: 100%;

  &__title {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 32px;
  }

  &__form {
    max-width: 375px;
    margin: 0 auto;

    & > * {
      margin-bottom: 8px;
    }
  }

  &__btn {
    margin: 0 auto;
  }
}
</style>
