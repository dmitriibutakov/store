<template>
<div>
    {{ name }}
    <v-input @customChange="handleCustomChange"
             :placeholder="'name'"/>
    <v-button :onClick="sendClick">send</v-button>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      number: 0
    }
  },
  methods: {
    sendClick() {
      console.log(123)
    },
    handleCustomChange(value,data) {
      this.name = data
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