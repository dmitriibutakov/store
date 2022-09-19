<template>
  <div class="aboutPage">
    <ul>
      <li><img :src="blocks[0]" alt="block"></li>
    </ul>
    Here you can to get more information about last products
    <iphone-screen :title="'iPhone 14 Pro'"
    :about="'Pro.Beyond.'"
    :description="'From $41.62/mo. for 24 mo. or $999 before trade‑in'"
    :image="'images/iphone14Pro.jpg'"/>
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