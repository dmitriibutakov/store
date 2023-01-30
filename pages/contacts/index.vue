<template>
  <div class="contacts__block">
<!--    <v-modal-successfull-->
<!--        :title="'Your order has been sent successfully'"-->
<!--        :img="'images/successful.gif'"/>-->
    <v-preloader :opacity="true" v-if="getLoading"/>
    <v-contact-us-form/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({getLoading: "getLoading"})
  },
  methods: {
    ...mapActions({toggleModal: "toggleModal"}),
  }
}
</script>

<style scoped lang="scss">
.contacts__block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
