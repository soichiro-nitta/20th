<template>
  <div class="credits">
    <div class="title">Credits.</div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang='scss' scoped>
.credits {
  width: 100%;
  height: 100%;
  color: #333;
  .title {
    font-family: 'Shadows Into Light', cursive;
    // font-family: 'Special Elite', cursive;
    margin-top: 50px;
    width: 100%;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    line-height: 1;
  }
}
</style>
