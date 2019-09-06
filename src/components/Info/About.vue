<template>
  <v-flex href="#about" id="about" ref="about" class="about">
    <v-flex class="parallelogram">
      <v-flex class="parallelogram__1 parallelogram--absolute"></v-flex>
      <v-flex class="parallelogram__2 parallelogram--absolute"></v-flex>
      <v-flex class="parallelogram__3 parallelogram--absolute"></v-flex>
      <v-flex class="parallelogram__4 parallelogram--absolute"></v-flex>
      <v-flex clas="title">{{this.offsetTop}}</v-flex>
    </v-flex>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'About',
  data () {
    return {
      offsetTop: null
    }
  },
  computed: {
    ...mapGetters('style', ['pageY'])
  },
  mounted () {
    this.offsetTop = this.$refs['about'].offsetTop
  }
}
</script>

<style lang="scss">
  .about {
    margin-top: 150vh;
    height: 100vh;
    position: absolute;
    width: 100vw;
  }
  .parallelogram{
    margin: auto;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    width: 1300px;
    height: 600px;
    &--absolute{
      position: absolute;
    }
    &__1{
      -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      -moz-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      -ms-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      -o-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      z-index: 10;
      width: 240px;
      height: 500px;
      margin-top: 50px;
      margin-left: 160px;
      transform: skew(20deg);
      background: #00aef6;
      border-radius: 3px;
    }
    &__2{
      z-index: 9;
      width: 150px;
      height: 500px;
      margin-top: 50px;
      margin-left: 385px;
      transform: skew(-10deg);
      background: #0d47a1;
      border-radius: 3px;
    }
    &__3{
      -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      -moz-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      -ms-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      -o-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      z-index: 10;
      width: 300px;
      height: 600px;
      margin-top: 50px;
      margin-left: 538px;
      transform: skew(20deg);
      background: #00aef6;
      border-radius: 3px;
    }
    &__4{
      z-index: 9;
      width: 100px;
      height: 700px;
      margin-top: -50px;
      margin-left: 1048px;
      transform: skew(-30deg);
      background: #0d47a1;
      border-radius: 3px;
    }
  }
  .title{
    position: absolute;
    margin-top: 200px;
  }
</style>
