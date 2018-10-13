<template>
  <div class="credits">
    <BaseHeading1
      text="CREDITS."
      class="heading"
    />
    <h2>Movie</h2>
    <div class="name">Kensuke Ohki</div>
    <h2>Website</h2>
    <div class="name">Soichiro Nitta</div>
    <h2>Produce</h2>
    <div class="name">Leading & Company Inc.</div>
    <h2>20th Anniversary</h2>
    <div class="name">Housecom Inc.</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { TweenMax, Expo } from 'gsap'
import BaseHeading1 from '~/components/BaseHeading1.vue'

export default {
  components: {
    BaseHeading1
  },
  computed: {
    ...mapGetters({
      opening: 'opening'
    })
  },
  watch: {
    async opening() {
      await this.$delay(750)
      this.op()
    }
  },
  mounted() {
    document.getElementById('scrollArea').scrollTop = 0
    if (!this.opening) return
    this.op()
  },
  methods: {
    op() {
      requestAnimationFrame(() => {
        TweenMax.to('.heading', 0.8, {
          y: 0,
          opacity: 1,
          ease: Expo.easeOut,
          startAt: {
            y: '30px'
          }
        })
        TweenMax.staggerTo(
          'h2',
          0.8,
          {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: 0.1,
            startAt: {
              y: '30px'
            }
          },
          0.1
        )
        TweenMax.staggerTo(
          '.name',
          0.8,
          {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: 0.3,
            startAt: {
              y: '30px'
            }
          },
          0.1
        )
      })
    }
  },
  transition: {
    appear: false,
    leave(el, done) {
      requestAnimationFrame(() => {
        TweenMax.to('.heading', 0.5, {
          y: '-40px',
          opacity: 0,
          ease: Expo.easeIn
        })
        TweenMax.staggerTo(
          'h2',
          0.5,
          {
            y: '-30px',
            opacity: 0,
            ease: Expo.easeIn,
            delay: 0.1
          },
          0.1
        )
        TweenMax.staggerTo(
          '.name',
          0.5,
          {
            y: '-30px',
            opacity: 0,
            ease: Expo.easeIn,
            delay: 0.3
          },
          0.1,
          () => {
            done()
          }
        )
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.credits {
  padding: 60px 20px;
  width: 100%;
  color: white;
  text-align: center;
  overflow: hidden;
  .heading {
    opacity: 0;
  }
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1 1 auto;
    position: relative;
    margin-top: 57px;
    font-size: 14px;
    // font-family: 'Share Tech', cursive;
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
    opacity: 0;
    &::before,
    &::after {
      content: '';
      display: inline-block;
      flex: 1 1 auto;
      height: 1px;
      position: relative;
      background: white;
    }
    &::before {
      margin-right: 15px;
    }
    &::after {
      margin-left: 15px;
    }
  }
  .name {
    margin-top: 60px;
    font-size: 18px;
    // font-family: 'Share Tech', cursive;
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
    opacity: 0;
  }
}
</style>
