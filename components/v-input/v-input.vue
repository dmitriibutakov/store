<template>
  <div class="input__block">
    <h6 class="input__title">
      {{ title }}
    </h6>
    <input :type="type || 'text'" class="input__body">
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    type: String,
  }
}
</script>

<style scoped lang="scss">
.input__block {
  display: inline-block;

  .input__title {
    font-size: 14px;
    color: #727272;
    margin-bottom: 4px;
    padding-left: 10px;
  }

  .input__body {
    font-size: 14px;
    padding: 10px 20px;
    border: 1px solid rgba(134, 133, 133, 0.48);
    border-radius: 20px;
    max-width: 250px;

    &:focus {
      border-color: #006edb;
    }
  }
}
</style>