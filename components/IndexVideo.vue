<template>
  <div class="IndexVideo">
    <div
      ref="btnED"
      class="btnED"
    />
    <div
      ref="btnOP"
      class="btnOP"
      @click="openVideo"
    />
    <div
      ref="container"
      class="container"
    >
      <div
        ref="layer"
        class="layer"
        @click="closeVideo"
        @touchstart="closeVideo"
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import lottie from 'lottie-web'
import { TweenMax, Expo } from 'gsap'

export default {
  computed: {
    ...mapGetters({
      opening: 'opening'
    })
  },
  watch: {
    async opening() {
      await this.$delay(750)
      this.animationOP()
    }
  },
  async mounted() {
    this.lottieOP = lottie.loadAnimation({
      container: this.$refs.btnOP,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/lottie/json/btnOP.json'
    })
    this.lottieED = lottie.loadAnimation({
      container: this.$refs.btnED,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/lottie/json/btnED.json'
    })
    if (!this.opening) return
    requestAnimationFrame(() => {
      TweenMax.to('#TheOpening', 1, {
        top: '-210px',
        opacity: 1,
        ease: Expo.easeOut,
        startAt: {
          top: '-240px'
        }
      })
    })
    await this.$delay(400)
    this.animationOP()
  },
  methods: {
    async openVideo() {
      this.animationED()
      await this.$delay(750)
      this.$refs.container.style.display = 'flex'
      this.$refs.video.load()
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.layer, 0.5, {
          filter: 'blur(0px)',
          opacity: 0.9,
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.video, 0.5, {
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.3
        })
      })
      await this.$delay(1000)
      this.$refs.video.play()
    },
    async closeVideo() {
      this.$refs.video.pause()
      requestAnimationFrame(async () => {
        TweenMax.to(this.$refs.layer, 0.5, {
          filter: 'blur(50px)',
          opacity: 0,
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.video, 0.5, {
          opacity: 0,
          ease: Expo.easeOut
        })
        await this.$delay(700)
        this.$refs.container.style.display = 'none'
      })
      await this.$delay(500)
      this.animationOP()
    },
    animationOP() {
      this.$refs.btnED.style.display = 'none'
      this.$refs.btnOP.style.display = 'block'
      this.lottieOP.stop()
      this.lottieOP.play()
    },
    animationED() {
      this.$refs.btnOP.style.display = 'none'
      this.$refs.btnED.style.display = 'block'
      this.lottieED.stop()
      this.lottieED.play()
    }
  }
}
</script>

<style lang='scss' scoped>
.IndexVideo {
  .btnED {
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .btnOP {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
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
    @include pc {
      left: 320px;
      width: calc(100% - 330px);
    }
    .layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #eee;
      filter: blur(50px);
      opacity: 0;
    }
    video {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 85%;
      height: auto;
      opacity: 0;
      @include pc {
        width: 80%;
      }
    }
  }
}
</style>
