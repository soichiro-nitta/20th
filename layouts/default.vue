<template>
  <div class="default">
    <TheBackground/>
    <TheOpening/>
    <div id="scrollArea">
      <nuxt/>
    </div>
    <TheNavigation/>
    <TheLoading v-if="!loadingComplete"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheBackground from '~/components/TheBackground'
import TheNavigation from '~/components/TheNavigation'
import TheOpening from '~/components/TheOpening'
import TheLoading from '~/components/TheLoading'

export default {
  components: {
    TheBackground,
    TheNavigation,
    TheOpening,
    TheLoading
  },
  computed: {
    ...mapGetters({
      loadingComplete: 'loadingComplete'
    })
  },
  mounted() {
    // if (!this.$device.isMobile) {
    //   this.$nuxt.error({
    //     statusCode: 777,
    //     message: 'Desktop is not implemented yet'
    //   })
    // }
    console.log('this is staging')
    // const progress = document.getElementsByClassName('nuxt-progress')[0]
    // progress.style.height = this.$device.isMobile ? '10px' : '20px'
    // progress.style.opacity = 1
    // const userAgent = window.navigator.userAgent.toLowerCase()
    // if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1 || userAgent.indexOf('edge') !== -1) {
    //   this.$router.replace({ path: 'sorry' })
    // }
  }
}
</script>

<style lang="scss" scoped>
.default {
  position: relative;
  margin: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  overflow: hidden;
  .wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }
  #scrollArea {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  // #scrollArea > div {
  // }
}
</style>
