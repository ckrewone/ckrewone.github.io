<template>
  <v-flex href="#about" id="about" class="about">
    <h1>O mnie</h1>
    <p>lorem ipsum dolar amet</p>
  </v-flex>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss">
  .about {
    padding-top: 100px;
    z-index: -1;
    top: 120vh;
    left: 0;
    position: absolute;
    height: 100%;
    width: 1000px;
    background: #00aef6;
  }
</style>
