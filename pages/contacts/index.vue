<template>
<form class="contacts__form">
    {{ name }}
    <v-input @customChange="handleCustomChange"
             :placeholder="'name'"/>
  {{email}}
  <v-input @customChange="handleCustomChange"
             :placeholder="'email'"/>
  {{number}}
  <v-input @customChange="handleCustomChange"
             :placeholder="'number'"/>
    <v-button :onClick="sendClick">send</v-button>
</form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      number: null
    }
  },
  methods: {
    sendClick() {
      console.log(123)
    },
    handleCustomChange(value,data) {
      this[value] = data
    }
  }
}
</script>

<style scoped lang="scss">
.contacts__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>