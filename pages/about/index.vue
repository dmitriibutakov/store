<template>
  <div class="aboutPage">
    <ul>
      <li><img :src="blocks[0]" alt="block"></li>
    </ul>
    <product-screen :title="'iPhone 14 Pro'"
    :screen="true"
    :about="'Pro.Beyond.'"
    :description="'From $999'"
    :image="'images/iphone14Pro.jpg'"/>

    <product-screen :title="'iPhone 14'"
    :about="'Big and bigger.'"
    :description="'From $799'"
    :image="'images/iphone14.jpg'"/>

    <product-screen :title="'iPad Air'"
    :screen="true"
    :about="'Light, Bright, Full of might'"
    :description="'From $599'"
    :image="'images/ipadAir.jpg'"
    />

    <product-screen :title="'iPad'"
    :about="'Delightfully capable. Surprisingly affordable.'"
    :description="'From $329'"
    :image="'images/ipad2021.jpg'"
    />

    <product-screen :title="'MacBook Pro 13'"
    :screen="true"
    :about="'Pro anywhere.'"
    :description="'From $1299'"
    :image="'images/macbookPro.jpg'"
    />

    <product-screen :title="'MacBook Air'"
    :about="'Don’t take it lightly.'"
    :description="'From $1199'"
    :image="'images/macbookAir.jpg'"
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
  &>*:not(:last-child) {
  }
}
</style>