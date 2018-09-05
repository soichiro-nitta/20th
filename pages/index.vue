<template>
  <div class="index">
    This is index.vue<br>
    これはトップページです
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang='scss' scoped>
.index {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #555;
}
</style>
