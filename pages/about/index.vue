<template>
  <div class="aboutPage">

    <product-screen :title="'MacBook Air'"
    :about="'Don’t take it lightly.'"
    :description="'From $1199'"
    :image="'images/macbookAir.jpg'"
    :filter="'macbook'"
    />
  </div>
</template>

<script>
export default {
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