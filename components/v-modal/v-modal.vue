<template>
  <transition name="background">
    <div class="modal__view" @click.stop="toggleModal">
      <v-preloader :opacity="true" v-if="getLoading"/>
      <div class="modal__block" @click.stop>
        <div class="modal__close">
          <button @click="toggleModal"/>
        </div>
        <h1 class="modal__title">{{ title }}</h1>
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "VModal",
  props: {title: String, required: true},
  computed: {...mapGetters({getLoading: "getLoading"})},
  methods: {...mapActions({toggleModal: "toggleModal"})}
}
</script>

<style scoped lang="scss">
.background-enter-active, .background-leave-active {
  transition: opacity .3s;
}

.background-enter, .background-leave-to {
  opacity: 0;
}

.modal__view {
  position: fixed;
  left: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2.5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .modal__block {
    position: relative;
    width: 100%;
    max-width: 340px;
    padding: 16px;
    margin: 16px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .modal__close {
      position: absolute;
      right: 16px;
      top: 16px;

      button {
        background: url(@/assets/icons/close.svg);
        width: 16px;
        height: 16px;
      }
    }

    .modal__title {
      width: 100%;
      text-align: left;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 32px;
    }
  }
}
</style>
