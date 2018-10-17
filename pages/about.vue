<template>
  <div class="about">
    <BaseHeading1
      class="heading"
      text="About"
    />
    <div class="text">
      大企業と駆け出しのクリエーター達がコラボすることで、良いものが出来ていく。下克上の文化が強いアメリカでは、会社を創業したばかりの若者たちが、
      大企業をどんどん追撃しているのに対し、日本では、良い意味でも悪い意味でも、「攻めが甘いベンチャー企業」と「守りが上手い大企業」という縮図
      が生まれつつあります。
      <br><br>
      これは日本の文化的な面が大きいのでしょうが、こういった特徴を考慮すると、大企業とベンチャー企業が戦って、市場を奪い合うよりも、
      お互いの強みを上手く融合させて生まれる化学反応にこそに、大きな付加価値があるのだと言えます。
      <br><br>
      ビジネスマンがクリエーターからエンターテイメントの本質を学ぼうとした時、そして、クリエーターがビジネスマンから収益性の本質を学ぼうとした時に、きっと、両者の間で新しいものが生まれていくのでしょう。
      <br><br>
      21世紀最大の産業はエンターテイメント産業だと言われ、収益化を遅らせれば、遅らせるほど、「面白い」の可能性は増えていくのだと言います。
      <br><br>
      そう言った意味では、これまで常に経済が優先で、文化が後回しにされていた世の中の動きを逆にしていくことが、これからの時代に求められることなのかもしれません。
      <br><br>
      世の中には、自分の好きなことで生計を立てている人と、そうではない人の2種類しかいない。
      前者の道を目指しているクリエーター、そして、そんなクリエーター達に胸を貸してくれたハウスコムさんに大きな感謝を。
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
  },
  head() {
    return {
      title: 'About',
      meta: [
        {
          property: 'og:title',
          content: 'About | Housecom 20th🎉'
        },
        {
          property: 'og:url',
          content: 'https://20th.netlify.com/about'
        },
        {
          property: 'twitter:title',
          content: 'About | Housecom 20th🎉'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.about {
  padding: 60px 20px;
  width: 100%;
  overflow: hidden;
  @include pc {
    padding: 100px 0;
    margin: 0 auto;
    width: 650px;
  }
  .heading {
    opacity: 0;
  }
  .text {
    margin-top: 57px;
    font-size: 12px;
    line-height: 2;
    color: white;
    opacity: 0;
    @include pc {
      margin-top: 95px;
      font-size: 14px;
    }
  }
}
</style>
