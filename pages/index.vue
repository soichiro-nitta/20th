<template>
  <div class="index">
    <BaseHeading1 text="Home."/>
    <!-- <video
      ref="video"
      src="https://media.housecom.jp/wp-content/uploads/videos/180115-koenji.mp4"
      controls
      preload="auto"
      autoplay
      playsinline
    /> -->
    <div class="text">
      OP後はこのページにきて、ボタン押して動画再生?
    </div>
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
