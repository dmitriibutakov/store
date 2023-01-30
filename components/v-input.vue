<template>
  <div class="input__wrapper">
    <img v-if="name === 'Password'" src="@/assets/icons/show.svg" alt="eye" @click="showPassword">
    <input v-else
           :id="id"
           :type="name === 'Password' && show"
           :value="inputValue"
           :class="inputValue && 'input__active'"
           @input=" event => $emit('customChange', name, event.target.value)"
    >
    <label :for="id">
      {{ placeholder }}
    </label>
    <p class="input__error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    inputValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    error: String
  },
  data: () => ({
    show: 'password'
  }),
  computed: {
    id() {
      return this.placeholder + Math.random()
    }
  },
  methods: {
    showPassword() {
      this.show === 'password' ? this.show = 'text' : this.show = 'password'
    }
  }
}
</script>

<style scoped lang="scss">
.input__wrapper {
  display: flex;
  align-items: flex-end;
  height: 48px;
  position: relative;
  overflow: hidden;
  border: 1px solid #0e0e0e;
  border-radius: 8px;

  label {
    font-size: 16px;
    font-weight: 500;
    position: absolute;
    background-color: transparent;
    bottom: 12px;
    left: 12px;
    top: 35%;
    transition: top .3s;
  }

  input {
    padding: 5px 12px;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    background-color: transparent;
    line-height: 24px;
    z-index: 2;
  }

  input:focus + label,
  .input__active + label {
    font-size: 12px;
    font-weight: 400;
    top: 5px;
  }

  ::-webkit-input-placeholder {
    opacity: 0;
  }

  input:focus::-webkit-input-placeholder {
    opacity: 1;
  }

  img {
    z-index: 9;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 40%;
    width: 16px;
  }
}

.input__error {
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  bottom: -17px;
  transform: translateX(77%);
  color: #8f2121;
}
</style>
