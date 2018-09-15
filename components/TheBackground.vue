<template>
  <div class="TheBackground">
    <div class="bg">
      <video
        autoplay
        preload="none"
        muted
        playsinline
        loop
      >
        <source src="https://media.housecom.jp/wp-content/uploads/videos/koenji.mp4">
      </video>
    </div>
    <!-- <canvas id="canvas"/>
    <div
      ref="text"
      class="TheBackground_Text"
    >
      Soichiro /<br>Kensuke
    </div> -->
  </div>
</template>

<script>
// import { TweenMax, Expo, Elastic } from 'gsap'

export default {
  data() {
    return {
      isMobile: this.$device.isMobile
    }
  }
}
</script>

<style lang="scss" scoped>
.TheBackground {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  .bg {
    // width: 100%;
    // height: 100%;
    width: calc(100%- 20px);
    height: calc(100% - 20px);
    overflow: hidden;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
