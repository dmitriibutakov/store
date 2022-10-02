<template>
  <div class="contactUs__block">
    <v-modal :title="'Your message has been sent successfully'"
             v-if="getIsShowModal">
      <img class="contactUs_successful" src="images/successful.gif" alt="successfully">
      <v-button @onClick="returnClick" :name="'to main'"/>
    </v-modal>
    <v-preloader :opacity="true" v-else-if="getLoading"/>
    <v-form-contact-us/>
    <v-contact-us/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({getLoading: "getLoading", getIsShowModal: "getIsShowModal"})
  },
  methods: {
    ...mapActions({toggleModal: "toggleModal"}),
    returnClick() {

      this.$router.push('/')
      this.toggleModal()
    }
  }
}
</script>

<style scoped lang="scss">
.contactUs__block {
  display: flex;
  flex-direction: column;
  align-items: center;

  .contactUs_successful {
    width: 200px;

  }
}
</style>