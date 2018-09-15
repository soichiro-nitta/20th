<template>
  <div class="TheNavigation">
    <div
      ref="menu"
      class="menu"
    />
    <div
      ref="list"
      class="list"
    >
      <nuxt-link
        to="/"
        @click.native="close"
      >
        Home.
      </nuxt-link>
      <nuxt-link
        to="/about"
        @click.native="close"
      >
        About.
      </nuxt-link>

      <nuxt-link
        to="/credits"
        @click.native="close"
      >
        Credits.
      </nuxt-link>
    </div>
    <div
      class="switch"
      @click="toggle"
    >
      <div
        ref="border1"
        class="border1"
      />
      <div
        ref="border2"
        class="border2"
      />
      <div
        ref="border3"
        class="border3"
      />
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  data() {
    return {
      opened: false
      // progress: false
    }
  },
  methods: {
    toggle() {
      !this.opened ? this.open() : this.close()
    },
    async open() {
      // if (this.progress) return
      // this.progress = true
      this.$refs.menu.style.display = 'block'
      this.$refs.list.style.display = 'flex'
      this.enterMenu()
      this.enterSwitch()
      await this.$delay(700)
      this.opened = true
      // this.progress = false
    },
    async close() {
      // if (this.progress) return
      // this.progress = true
      this.leaveMenu()
      this.leaveSwitch()
      await this.$delay(700)
      // this.progress = false
      this.$refs.menu.style.display = 'none'
      this.$refs.list.style.display = 'none'
      this.opened = false
    },
    enterMenu() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.menu, 0.7, {
          filter: 'blur(0px)',
          opacity: 0.9,
          ease: Expo.easeOut
        })
        TweenMax.staggerTo(
          '.list a',
          1.2,
          {
            x: 0,
            filter: 'blur(0px)',
            opacity: 1,
            ease: Expo.easeOut
          },
          0.12
        )
      })
    },
    enterSwitch() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.border2, 0.7, {
          filter: 'blur(50px)',
          opacity: 0,
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.border1, 0.7, {
          y: '7px',
          scaleX: 1.5,
          rotation: '405deg',
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.border3, 0.7, {
          y: '-7px',
          scaleX: 1.5,
          rotation: '-405deg',
          ease: Expo.easeOut
        })
      })
    },
    leaveMenu() {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(
          '.list a',
          0.8,
          {
            x: '-60px',
            filter: 'blur(50px)',
            opacity: 0,
            ease: Expo.easeInOut
          },
          0.08
        )
        TweenMax.to(this.$refs.menu, 0.5, {
          filter: 'blur(50px)',
          opacity: 0,
          ease: Expo.easeInOut
        })
      })
    },
    leaveSwitch() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.border2, 0.5, {
          filter: 'blur(0px)',
          opacity: 1,
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.border1, 0.5, {
          y: 0,
          scaleX: 1,
          rotation: 0,
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.border3, 0.5, {
          y: 0,
          scaleX: 1,
          rotation: 0,
          ease: Expo.easeInOut
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.TheNavigation {
  .menu {
    display: none;
    position: fixed;
    top: 10px;
    right: 0;
    bottom: 0;
    left: 10px;
    margin: 0;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    background: #fefefe;
    filter: blur(50px);
    opacity: 0;
  }
  .list {
    display: none;
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    a {
      display: block;
      margin: 30px 0;
      color: #555;
      font-family: 'Shadows Into Light', cursive;
      font-size: 10vw;
      font-weight: bold;
      line-height: 1;
      transform: translateX(-60px);
      filter: blur(50px);
      opacity: 0;
    }
  }
  .switch {
    position: fixed;
    top: 17.5px;
    right: 17.5px;
    padding: 0 17px;
    width: 50px;
    height: 50px;
    background: #eee;
    border-radius: 50%;
    overflow: hidden;
    .border1,
    .border2,
    .border3 {
      position: absolute;
      right: 0;
      left: 0;
      margin: auto;
      height: 1px;
      background: #555;
    }
    .border1 {
      top: 17.5px;
      width: 8.2px;
    }
    .border2 {
      top: 24.5px;
      width: 12px;
    }
    .border3 {
      top: 31.5px;
      width: 8.2px;
    }
  }
}
</style>
