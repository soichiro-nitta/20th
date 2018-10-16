<template>
  <div class="about">
    <BaseHeading1
      class="heading"
      text="About"
    />
    <div class="text">
      大企業と駆け出しのクリエーター達がコラボすることで、良いものが出来ていく。下克上のアメリカでは、会社を創業したばかりの若者たちが、
      大企業をどんどん追撃しているのに対し、日本では、良い意味でも悪い意味でも、「攻めが甘いベンチャー企業」と「守りが上手い大企業」という縮図
      が生まれつつあります。<br><br>
      これは日本の文化的な面が大きいのでしょうが、こういった日本独特の文化面などを考慮すると、大企業とベンチャー企業が戦って、市場を奪い合うよりも、
      お互いの強みを上手く融合させ合うことで、生まれる化学反応にこそ、大きな付加価値があるのではないでしょうか。
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
  transition: {
    appear: false,
    leave(el, done) {
      requestAnimationFrame(() => {
        TweenMax.to('.heading', 0.5, {
          y: '-50px',
          opacity: 0,
          ease: Back.easeIn.config(3)
        })
        TweenMax.to('.text', 0.5, {
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
  },
  methods: {
    op() {
      requestAnimationFrame(() => {
        TweenMax.to('.heading', 1, {
          y: 0,
          opacity: 1,
          ease: Back.easeOut.config(3),
          startAt: {
            y: '50px'
          }
        })
        TweenMax.to('.text', 1, {
          y: 0,
          opacity: 1,
          ease: Back.easeOut.config(3),
          delay: 0.2,
          startAt: {
            y: '50px'
          }
        })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.about {
  padding: 60px 20px;
  width: 100%;
  overflow: hidden;
  .heading {
    opacity: 0;
  }
  .text {
    margin-top: 57px;
    font-size: 12px;
    line-height: 2;
    color: white;
    opacity: 0;
  }
}
</style>
