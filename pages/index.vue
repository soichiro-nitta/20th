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
import BaseHeading1 from '~/components/BaseHeading1.vue'
import IndexVideo from '~/components/IndexVideo.vue'

export default {
  components: {
    BaseHeading1,
    IndexVideo
  },
  mounted() {
    document.getElementById('scrollArea').scrollTop = 0
  },
  transition: {
    appear: false,
    leave(el, done) {
      requestAnimationFrame(() => {
        TweenMax.to('#TheOpening', 0.5, {
          top: '-170px',
          opacity: 0,
          ease: Back.easeIn.config(3)
        })
        TweenMax.to('.btn', 0.5, {
          y: '-50px',
          opacity: 0,
          ease: Back.easeIn.config(3),
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
    margin: 140px auto 0;
    width: 60%;
    height: 150px;
  }
}
</style>
