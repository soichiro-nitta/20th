<template>
  <div
    ref="loading"
    class="loading"
  />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import lottie from 'lottie-web'

export default {
  computed: {
    ...mapGetters({
      canplayBG: 'canplayBG'
      // opening: 'opening'
    })
  },
  // watch: {
  // opening() {
  // this.animation.destroy()
  // this.animation = lottie.loadAnimation({
  //   container: this.$refs.loading,
  //   renderer: 'svg',
  //   loop: false,
  //   autoplay: false,
  //   path: '/lottie/json/loading.json'
  // })
  // this.$watch('$route', () => {
  //   this.$nextTick(() => {
  //     this.$refs.loading.style.display = 'block'
  //     this.animation.play()
  //     console.log('test')
  //   })
  // })
  // }
  // },
  mounted() {
    this.animation = lottie.loadAnimation({
      container: this.$refs.loading,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: '/lottie/json/loading.json'
    })
    const loopComplete = () => {
      if (this.canplayBG) {
        this.animation.stop()
        this.$refs.loading.style.display = 'none'
        this.setLoadingComplete()
      }
    }
    this.animation.addEventListener('loopComplete', loopComplete)
    window.onload = () => {
      this.animation.play()
    }
  },
  methods: {
    ...mapMutations({
      setLoadingComplete: 'setLoadingComplete'
    })
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: 0 15%;
  width: 100%;
  height: auto;
  background: #eee;
}
</style>
