<template>
  <div class="TheNavigation">
    <div class="TheNavigation_Border TheNavigation_Border1"/>
    <div class="TheNavigation_Border TheNavigation_Border2"/>
    <div class="TheNavigation_Border TheNavigation_Border3"/>
</div></template>

<script>
</script>

<style lang="scss" scoped>
.TheNavigation {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  &_Border {
    margin-top: 7px;
    width: 100%;
    height: 1px;
    background: #333;
  }
}
</style>
