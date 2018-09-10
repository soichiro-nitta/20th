<template>
  <div class="index">
    <h1>Home.</h1>
    <div class="text">
      OP後はこのページにきて、ボタン押して動画再生?
    </div>
</div></template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang='scss' scoped>
.index {
  padding: 60px 20px;
  width: 100%;
  color: #555;
  text-align: center;
  h1 {
    font-family: 'Shadows Into Light', cursive;
    width: 100%;
    font-size: 50px;
    font-weight: bold;
    line-height: 1;
  }
  .text {
    margin-top: 50px;
    color: #555;
    font-size: 12px;
    font-weight: normal;
    line-height: 2;
  }
}
</style>
