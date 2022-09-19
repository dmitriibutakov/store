<template>
   <button class="button">{{name}}</button>
</template>

<script>
export default {
   props: { name: String }
}
</script>

<style lang="scss">
.button {
   background-color: #006edb;
   font-size: 17px;
   padding: 8px 16px;
   border-radius: 98px;
   color: #fff;
   transition: all .4s ease-in-out;
}
</style>