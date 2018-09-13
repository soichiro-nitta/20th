<template>
  <div class="index">
    <BaseHeading1 text="Home."/>
    <a href="https://media.housecom.jp/wp-content/uploads/videos/180115-koenji.mp4">
      this is video link?
    </a>
    <!-- <video
      crossorigin="anonymous"
      preload="auto"
      x-webkit-airplay=""
      controls=""
      data-original-aria-hidden=""
      src="https://media.housecom.jp/wp-content/uploads/videos/180115-koenji.mp4"
    >
      <source src="https://media.housecom.jp/wp-content/uploads/videos/180115-koenji.mp4">
    </video> -->
    <video
      poster="https://media.housecom.jp/wp-content/uploads/2018/01/26942352_796053807253941_538403009_o-1080x459.jpg"
      autobuffer=""
      controls=""
    >
      <source src="https://media.housecom.jp/wp-content/uploads/videos/180115-koenji.mp4">
    </video>
    <!-- <video
      ref="video"
      src="https://media.housecom.jp/wp-content/uploads/videos/180115-koenji.mp4"
      controls
    /> -->
    <div class="text">OP後はこのページにきて、ボタン押して動画再生?</div>
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
  overflow: hidden;
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
