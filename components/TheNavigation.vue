<template>
  <div class="TheNavigation">
    <!-- <div class="menu">
      <nuxt-link to="/">
        Home.
      </nuxt-link>
      <nuxt-link to="/about">
        About.
      </nuxt-link>
      <nuxt-link to="/credits">
        Credits.
      </nuxt-link>
    </div> -->
    <div class="switch">
      <div class="border1"/>
      <div class="border2"/>
      <div class="border3"/>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.TheNavigation {
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    // background: white;
    a {
      display: block;
      margin: 40px 0;
      font-family: 'Shadows Into Light', cursive;
      font-size: 10vw;
      font-weight: bold;
      line-height: 1;
    }
  }
  .switch {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 0 17px;
    width: 50px;
    height: 50px;
    background: #efefef;
    border-radius: 50%;
    overflow: hidden;
    .border1,
    .border2,
    .border3 {
      height: 1px;
      background: #333;
    }
    .border1 {
      width: 50%;
    }
    .border2 {
      width: 75%;
      margin: 6px auto;
    }
    .border3 {
      width: 50%;
    }
  }
}
</style>
