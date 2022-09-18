<template>
  <div>
    <ul>
      <li><img :src="blocks[0]" alt="block"></li>
    </ul>
    Here you can to get more information about last products
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

<style scoped>

</style>