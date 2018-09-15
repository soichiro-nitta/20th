<template>
  <div class="index">
    <video
      autoplay
      class="bg"
      preload="none"
      muted
      playsinline
      loop
    >
      <source src="https://media.housecom.jp/wp-content/uploads/videos/koenji.mp4">
    </video>
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
    <div class="text">Soichiro / Kensuke</div>
    <div
      ref="container"
      class="container"
    >
      <div
        ref="layer"
        class="layer"
        @click="close"
      />
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
      @click="launch"
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
  async mounted() {
    document.getElementById('scrollArea').scrollTop = 0
    // this.$refs.video.addEventListener('pause', async () => {
    // })
  },
  methods: {
    async launch() {
      this.$refs.container.style.display = 'flex'
      this.$refs.video.load()
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.layer, 0.7, {
          filter: 'blur(0px)',
          opacity: 0.9,
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.video, 1, {
          scale: 1,
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.3
        })
      })
      await this.$delay(1000)
      this.$refs.video.play()
    },
    close() {
      this.$refs.video.pause()
      requestAnimationFrame(async () => {
        TweenMax.to(this.$refs.layer, 0.5, {
          filter: 'blur(50px)',
          opacity: 0,
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.video, 0.7, {
          scale: 0,
          opacity: 0,
          ease: Expo.easeOut
        })
        await this.$delay(700)
        this.$refs.container.style.display = 'none'
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
  .bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
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
    .layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fefefe;
      filter: blur(50px);
      opacity: 0;
    }
    video {
      width: 100%;
      height: auto;
      opacity: 0;
      transform: scale(0);
    }
  }
  .text {
    margin-top: 100px;
    color: white;
    font-size: 80px;
    font-weight: bold;
    font-weight: normal;
    line-height: 1.1;
    mix-blend-mode: difference;
    font-family: 'Shadows Into Light', cursive;
  }
}
</style>
