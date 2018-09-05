<template>
  <div class="default">
    <!-- <TheBackground/> -->
    <div id="scrollArea">
      <nuxt/>
      <!-- <nuxt v-if="opening"/> -->
    </div>
    <!-- <TheNav/> -->
    <!-- <TheOpening/> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import TheBackground from '~/components/TheBackground'
// import TheNav from '~/components/TheNav'
// import TheOpening from '~/components/TheOpening'

export default {
  components: {
    // TheBackground,
    // TheNav,
    // TheOpening
  },
  computed: {
    // ...mapGetters({
    //   opening: 'opening'
    // })
  },
  mounted() {
    if (!this.$device.isMobile) {
      this.$nuxt.error({
        statusCode: 777,
        message: 'Desktop is not implemented yet'
      })
    }
    console.log('this is staging')
    // const progress = document.getElementsByClassName('nuxt-progress')[0]
    // progress.style.height = this.$device.isMobile ? '10px' : '20px'
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
  margin: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  overflow: hidden;
  #scrollArea {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 0;
  }
  // #scrollArea > div {
  //   margin: 50px 0 0;
  // }
}
</style>
