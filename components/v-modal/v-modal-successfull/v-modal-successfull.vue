<template>
  <v-modal :title=title
           v-if="getIsShowModal">
    <img class="successful" :src=img alt="successfully">
    <v-button @onClick="returnClick" :name="'to main'"/>
  </v-modal>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props: {
    title: String,
    img: String
  },
  methods: {
    returnClick() {
      this.$router.push('/')
      this.toggleModal()
    }
  },
  computed: {
    ...mapGetters({getIsShowModal: "getIsShowModal"})
  }
}
</script>

<style scoped lang="scss">
.successful {
  width: 200px;
}
</style>