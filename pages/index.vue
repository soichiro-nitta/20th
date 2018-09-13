<template>
  <div class="credits">
    <BaseHeading1 text="Credits."/>
    <h2>Movie</h2>
    <div class="name">Kensuke Ohki</div>
    <h2>Website</h2>
    <div class="name">Soichiro Nitta</div>
  </div>
</template>

<script>
import BaseHeading1 from '~/components/BaseHeading1.vue'

export default {
  components: {
    BaseHeading1
  },
  mounted() {
    document.getElementById('scrollArea').scrollTop = 0
  }
}
</script>

<style lang='scss' scoped>
.credits {
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
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1 1 auto;
    position: relative;
    margin-top: 60px;
    font-size: 14px;
    font-family: 'Share', cursive;
    font-weight: bold;
    &::before,
    &::after {
      content: '';
      display: inline-block;
      flex: 1 1 auto;
      height: 1px;
      position: relative;
      background: #555;
    }
    &::before {
      margin-right: 15px;
    }
    &::after {
      margin-left: 15px;
    }
  }
  .name {
    margin-top: 60px;
    font-size: 18px;
    font-family: 'Share', cursive;
  }
}
</style>
