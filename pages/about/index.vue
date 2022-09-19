<template>
  <div class="aboutPage">
    <ul>
      <li><img :src="blocks[0]" alt="block"></li>
    </ul>
    <product-screen :title="'iPhone 14 Pro'"
    :screen="true"
    :about="'Pro.Beyond.'"
    :description="'From $41.62/mo. for 24 mo. or $999 before trade‑in'"
    :image="'images/iphone14Pro.jpg'"/>

    <product-screen :title="'iPhone 14'"
    :about="'Big and bigger.'"
    :description="'From $33.29/mo. for 24 mo. or $799 before trade‑in'"
    :image="'images/iphone14.jpg'"/>

    <product-screen :title="'iPad Air'"
    :screen="true"
    :about="'Light, Bright, Full of might'"
    :description="'From $599'"
    :image="'images/ipadAir.jpg'"
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