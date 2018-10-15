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
  /* font-family: 'Shadows Into Light', cursive; */
  font-family: 'Share Tech', cursive;
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  color: white;
}
</style>
