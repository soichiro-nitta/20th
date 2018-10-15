<template>
  <div class="credits">
    <BaseHeading1
      text="Credits"
      class="heading"
    />
    <h2>Movie</h2>
    <div class="name">Kensuke Ohki</div>
    <div class="link">
      <a
        href="https://www.facebook.com/kensuke.oki.50"
        target="_blank"
      >
        <img src="/svg/fb.svg">
      </a>
      <a
        href="https://twitter.com/ken78twi"
        target="_blank"
      >
        <img src="/svg/tw.svg">
      </a>
    </div>
    <h2>Website</h2>
    <div class="name">Soichiro Nitta</div>
    <div class="link">
      <a
        href="https://www.facebook.com/nitta.1226"
        target="_blank"
      >
        <img src="/svg/fb.svg">
      </a>
      <a
        href="https://twitter.com/soichiro_nitta"
        target="_blank"
      >
        <img src="/svg/tw.svg">
      </a>
      <a
        href="https://nitta.studio"
        target="_blank"
      >
        <img src="/svg/hp.svg">
      </a>
    </div>
    <h2>Produce</h2>
    <div class="name">Leading & Company Inc.</div>
    <div class="link">
      <a
        href="https://www.facebook.com/15ahead"
        target="_blank"
      >
        <img src="/svg/fb.svg">
      </a>
      <a
        href="https://twitter.com/4chikara"
        target="_blank"
      >
        <img src="/svg/tw.svg">
      </a>
      <a
        href="https://lrandcom.com"
        target="_blank"
      >
        <img src="/svg/hp.svg">
      </a>
    </div>
    <h2>20th Anniversary</h2>
    <div class="name">Housecom Inc.</div>
    <div class="link">
      <a
        href="https://www.facebook.com/housecom.co.jp"
        target="_blank"
      >
        <img src="/svg/fb.svg">
      </a>
      <a
        href="https://twitter.com/housecom_jp"
        target="_blank"
      >
        <img src="/svg/tw.svg">
      </a>
      <a
        href="https://www.housecom.co.jp"
        target="_blank"
      >
        <img src="/svg/hp.svg">
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
          ease: Back.easeOut.config(3),
          startAt: {
            y: '50px'
          }
        })
        TweenMax.staggerTo(
          'h2',
          0.8,
          {
            y: 0,
            opacity: 1,
            ease: Back.easeOut.config(3),
            delay: 0.1,
            startAt: {
              y: '50px'
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
            ease: Back.easeOut.config(3),
            delay: 0.3,
            startAt: {
              y: '50px'
            }
          },
          0.1
        )
        TweenMax.staggerTo(
          '.link',
          0.8,
          {
            y: 0,
            opacity: 1,
            ease: Back.easeOut.config(3),
            delay: 0.5,
            startAt: {
              y: '50px'
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
          y: '-50px',
          opacity: 0,
          ease: Back.easeIn.config(3)
        })
        TweenMax.staggerTo(
          'h2',
          0.5,
          {
            y: '-50px',
            opacity: 0,
            ease: Back.easeIn.config(3),
            delay: 0.1
          },
          0.1
        )
        TweenMax.staggerTo(
          '.name',
          0.5,
          {
            y: '-50px',
            opacity: 0,
            ease: Back.easeIn.config(3),
            delay: 0.3
          },
          0.1
        )
        TweenMax.staggerTo(
          '.link',
          0.5,
          {
            y: '-50px',
            opacity: 0,
            ease: Back.easeIn.config(3),
            delay: 0.5
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
    font-family: 'Share Tech', cursive;
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
    font-family: 'Share Tech', cursive;
    font-weight: bold;
    opacity: 0;
  }
  .link {
    margin-top: 20px;
    opacity: 0;
    a {
      display: inline-block;
      margin: 0 10px;
      height: 12px;
      img {
        width: auto;
        height: 100%;
      }
    }
  }
}
</style>
