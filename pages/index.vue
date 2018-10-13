<template>
  <div class="index">
    <div class="table">
      <div class="tbc">
        <div class="btn">
          <IndexVideo/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import BaseHeading1 from '~/components/BaseHeading1.vue'
import IndexVideo from '~/components/IndexVideo.vue'

export default {
  components: {
    BaseHeading1,
    IndexVideo
  },
  async mounted() {
    document.getElementById('scrollArea').scrollTop = 0
  },
  transition: {
    appear: false,
    leave(el, done) {
      requestAnimationFrame(() => {
        TweenMax.to('#TheOpening', 0.5, {
          top: '-240px',
          opacity: 0,
          ease: Expo.easeIn
        })
        TweenMax.to('.btn', 0.5, {
          y: '-30px',
          opacity: 0,
          ease: Expo.easeIn,
          delay: 0.2,
          onComplete: () => {
            done()
          }
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
  height: 100%;
  color: #555;
  text-align: center;
  overflow: hidden;
  .table {
    display: table;
    width: 100%;
    height: 100%;
  }
  .btn {
    position: relative;
    margin: 105px auto 0;
    width: 60%;
    height: 150px;
  }
  .btnED {
    display: none;
    width: 100%;
    height: 100%;
  }
  .btnOP {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
