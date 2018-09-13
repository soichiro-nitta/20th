<template>
  <div class="index">
    <BaseHeading1 text="Home."/>
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
    <!-- <video
      ref="video"
      poster="https://media.housecom.jp/wp-content/uploads/2018/01/26942352_796053807253941_538403009_o-1080x459.jpg"
      controls
      preload="none"
      src="https://media.housecom.jp/wp-content/uploads/videos/test120.mp4"
    /> -->
    <!-- <video
      ref="video"
      src="https://media.housecom.jp/wp-content/uploads/videos/180115-koenji.mp4"
      controls
    /> -->
    <div class="text">OP後はこのページにきて、ボタン押して動画再生?</div>
    <div
      ref="container"
      class="container"
    >
      <video
        ref="video"
        poster="https://media.housecom.jp/wp-content/uploads/2018/01/26942352_796053807253941_538403009_o-1080x459.jpg"
        controls
        preload="auto"
      >
        <source src="https://media.housecom.jp/wp-content/uploads/videos/180115-koenji.mp4">
      </video>
    </div>
    <div
      class="launch"
      @click="click"
    >
      Launch The Film
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import BaseHeading1 from '~/components/BaseHeading1.vue'

export default {
  components: {
    BaseHeading1
  },
  mounted() {
    document.getElementById('scrollArea').scrollTop = 0
  },
  methods: {
    click() {
      console.log(this.$refs.video)
      this.$refs.video.play()
      this.$refs.container.style.display = 'flex'
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.container, 1, {
          opacity: 1,
          ease: Expo.easeOut
        })
      })
    }
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
  .launch {
    margin: 50px auto 0;
    width: 60%;
    text-align: center;
    background: #eee;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Share', cursive;
    border-radius: 50px;
  }
  .container {
    display: none;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    video {
      width: 100%;
      height: auto;
    }
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
