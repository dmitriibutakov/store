<template>
  <div class="aboutPage">
    <product-screen :title="'iPhone 14 Pro'"
    :screen="true"
    :about="'Pro.Beyond.'"
    :description="'From $999'"
    :image="'images/iphone14Pro.jpg'"
    :filter="'iphone'"
    />

    <product-screen :title="'iPhone 14'"
    :about="'Big and bigger.'"
    :description="'From $799'"
    :image="'images/iphone14.jpg'"
    :filter="'iphone'"
    />

    <product-screen :title="'iPad Air'"
    :screen="true"
    :about="'Light, Bright, Full of might'"
    :description="'From $599'"
    :image="'images/ipadAir.jpg'"
    :filter="'ipad'"
    />

    <product-screen :title="'iPad'"
    :about="'Delightfully capable. Surprisingly affordable.'"
    :description="'From $329'"
    :image="'images/ipad2021.jpg'"
    :filter="'ipad'"
    />

    <product-screen :title="'MacBook Pro 13'"
    :screen="true"
    :about="'Pro anywhere.'"
    :description="'From $1299'"
    :image="'images/macbookPro.jpg'"
    :filter="'macbook'"
    />

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
data() {
  return {
    blocks: ["icons/airpods.png"]
  }
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