<template>
  <div>
    <h1 class="BaseHeading1">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.BaseHeading1 {
  font-family: 'Shadows Into Light', cursive;
  width: 100%;
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
  text-align: center;
}
</style>
