<template>
  <div class="credits">
    <h1>Credits.</h1>
    <h2>Movie</h2>
    <div class="name">Kensuke Ohki</div>
    <h2>Website</h2>
    <div class="name">Soichiro Nitta</div>
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
  padding: 60px 20px;
  width: 100%;
  height: 100%;
  color: #333;
  text-align: center;
  h1 {
    font-family: 'Shadows Into Light', cursive;
    width: 100%;
    font-size: 60px;
    font-weight: bold;
    line-height: 1;
  }
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1 1 auto;
    position: relative;
    margin-top: 60px;
    font-size: 14px;
    // font-family: 'Share', cursive;
    // font-family: 'Forum', cursive;
    font-family: 'Cinzel Decorative', cursive;
    font-weight: bold;
    &::before,
    &::after {
      content: '';
      display: inline-block;
      flex: 1 1 auto;
      height: 1px;
      position: relative;
      background: #333;
    }
    &::before {
      margin-right: 15px;
    }
    &::after {
      margin-left: 15px;
    }
  }
  .name {
    margin-top: 40px;
    font-size: 16px;
    color: #666;
    font-family: 'Share', cursive;
    // font-family: 'Forum', cursive;
    // font-weight: bold;
  }
}
</style>
