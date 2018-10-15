<template>
  <div
    id="TheOpening"
    ref="theOpening"
    class="TheOpening"
  >
    <div
      ref="lottie"
      class="lottie"
    />
  </div>
</template>

<script>
import lottie from 'lottie-web'
import { TweenMax, Expo } from 'gsap'
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      loadingComplete: 'loadingComplete'
    })
  },
  watch: {
    loadingComplete() {
      this.opening.play()
    }
  },
  mounted() {
    this.opening = lottie.loadAnimation({
      container: this.$refs.lottie,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/lottie/json/opening.json'
    })
    const onComplete = () => {
      this.opening.removeEventListener('complete', onComplete)
      if (this.$route.path === '/') {
        requestAnimationFrame(() => {
          TweenMax.to(this.$refs.theOpening, 1, {
            scale: 0.7,
            top: '-210px',
            ease: Expo.easeInOut
          })
        })
      } else {
        requestAnimationFrame(() => {
          TweenMax.to(this.$refs.theOpening, 1, {
            opacity: 0,
            ease: Expo.easeOut
          })
        })
      }
      this.setOpening()
    }
    this.opening.addEventListener('complete', onComplete)
  },
  methods: {
    ...mapMutations({
      setOpening: 'setOpening'
    })
  }
}
</script>

<style lang='scss' scoped>
.TheOpening {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  .lottie {
    width: 100%;
    height: 100%;
  }
}
</style>
