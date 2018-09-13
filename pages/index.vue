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
.index {
  padding: 60px 20px;
  width: 100%;
  color: #555;
  text-align: center;
  video {
    margin-top: 50px;
    width: 100%;
    height: auto;
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
