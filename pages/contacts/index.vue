<template>
  <div class="contacts__block">
    <form class="contacts__form">
      <v-input v-for="data in Object.keys(formData)"
               :error="formValidator[data]"
               :key="data"
               @customChange="handleCustomChange"
               :placeholder="data"/>
    </form>
    <v-button @onClick="sendClick">send</v-button>

  </div>
</template>

<script>
import {isValidFormInput} from "assets/isValidFormInput";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        number: "",
      },
      formValidator: {
        name: "",
        email: "",
        number: ""
      }
    }
  },
  methods: {
    sendClick() {
      isValidFormInput(this.formData, this.formValidator)
    },
    handleCustomChange(value, data) {
      this.formData[value] = data
    },
  }
}
</script>

<style scoped lang="scss">
.contacts__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  .contacts__form {
    display: flex;
    flex-direction: column;

    & > * {
      margin-bottom: 20px;
    }
  }
}
</style>