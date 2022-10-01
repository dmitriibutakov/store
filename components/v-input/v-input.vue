<template>
  <div class="input__block">
    <h6 class="input__title">
      {{ title }}
    </h6>
    <textarea v-if="title === 'Message'"
              @input="handleChange"
              :placeholder="placeholder"
              :class="!error ? 'input__body' : 'input__body_error'"/>
    <input v-else :type="type || 'text'"
           @input="handleChange"
           :placeholder="placeholder"
           :class="!error ? 'input__body' : 'input__body_error'">

    <p class="input__error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    type: String,
    placeholder: String,
    error: String
  },
  methods: {
    handleChange(event) {
      this.$emit("customChange", this.placeholder, event.target.value)
    },
  }
}
</script>

<style scoped lang="scss">
.input__block {
  position: relative;
  display: inline-block;

  .input__title {
    font-size: 14px;
    color: #727272;
    margin-bottom: 4px;
    padding-left: 10px;
    line-height: 1.7;
  }

  .input__body_error {
    border: 1px solid rgba(183, 36, 36, 0.48);
  }

  .input__body {
    border: 1px solid rgba(134, 133, 133, 0.48);
  }

  .input__body, .input__body_error {
    font-size: 14px;
    padding: 10px 20px;
    border-radius: 20px;
    min-width: 150px;

    &:focus {
      border-color: #006edb;
    }
  }

  .input__error {
    font-size: 14px;
    position: absolute;
    bottom: -15px;
    transform: translateX(77%);
    color: #8f2121;
  }
}
</style>