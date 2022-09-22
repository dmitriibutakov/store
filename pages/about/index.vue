<template>
  <Preloader v-if="getLoading"/>
  <div v-else class="aboutPage">
    <product-screen v-for="(data, index) in getAbout" :key="index" :title="data.title"
    :about="data.about"
    :description="data.description"
    :image="data.image"
    :screen="data.blackTheme"
    />
  </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";
export default {
  methods: {
    ...mapActions({fetchAbout: "fetchAbout"}),
  },
  mounted() {
    console.log('about')
    this.fetchAbout()
  },
  computed: {
    ...mapGetters({ getAbout: "getAbout", getLoading: "getLoading"})
  }
}
</script>

<style scoped lang="scss">
.aboutPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>