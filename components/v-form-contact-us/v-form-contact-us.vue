<template>
  <div class="contacts__block">
    <h3 class="contacts__title">Leave us a Message</h3>
    <p class="contacts__desc">
      Feel free to leave us a message. our support team will get in touch with you as soon as possible.
    </p>
    <form class="contacts__form">
      <v-input v-for="data in Object.keys(formData)"
               :error="formValidator[data]"
               :key="data"
               :title="data"
               @customChange="handleCustomChange"
               :placeholder="data"/>
    </form>
    <v-button @onClick="sendClick">send message</v-button>

  </div>
</template>

<script>
import {isValidFormInput} from "assets/isValidFormInput";

export default {
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
  methods: {
    sendClick() {
      isValidFormInput(this.formData, this.formValidator)
    },
    handleCustomChange(value, data) {
      this.formValidator[value] = ""
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
  margin-bottom: 20px;

  .contacts__title {
    font-size: 24px;
    color: #006edb;
    font-weight: 600;
    margin: 10px 0;
  }

  .contacts__desc {
    margin: 0 10px 5px 10px;
    font-size: 14px;
    color: #1a1c5b;
    line-height: 1.3;
    text-align: center;
  }

  .contacts__form {
    display: flex;
    flex-direction: column;

    & > * {
      margin-bottom: 20px;
    }
  }
}
</style>