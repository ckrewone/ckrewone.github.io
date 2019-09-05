<template>
  <v-flex class="nav" id="home" :style="logoStyles">
    <div :class="{
            'name name--big' : $vuetify.breakpoint.mdAndUp,
            'name name--mobile' : !$vuetify.breakpoint.mdAndUp,
            'name name--mobile--wide' : !$vuetify.breakpoint.mdAndUp && isMobileWide,
            'name name--big--wide' : $vuetify.breakpoint.mdAndUp && isDesktopWide,
            }">{{this.name}}
    </div>
    <v-layout v-show="$vuetify.breakpoint.mdAndUp" class="nav-list">
      <template v-for="(item, index) in items">
        <button :key="index" v-show="index" class="nav-item" v-scroll-to="item.scrollTo">{{item.title}}</button>
      </template>
    </v-layout>
    <div class="line"></div>
    <v-img :src="img" class="logo card-1" :class="{
            'logo logo--big' : $vuetify.breakpoint.mdAndUp,
            'logo logo--mobile' : !$vuetify.breakpoint.mdAndUp,
            'logo logo--mobile--wide' : !$vuetify.breakpoint.mdAndUp && isMobileWide,
            }"></v-img>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'
import img from '../../assets/32524349.jpg'

export default {
  name: 'HomeNavbar',
  data () {
    return {
      img
    }
  },
  computed: {
    ...mapGetters('style', ['pageY']),
    ...mapGetters('info', ['name', 'items']),
    logoStyles () {
      if (this.pageY > 150) {
        return 'margin-top: ' + ((250 - this.pageY) - 90) + 'px; opacity: ' + (350 - this.pageY) / 100
      } else if (this.pageY < 150) {
        return ''
      } else {
        return 'margin-top: -1500px'
      }
    },
    isDesktopWide () {
      return window.innerHeight < 500
    },
    isMobileWide () {
      return window.innerHeight < 450
    }
  }
}
</script>

<style lang="scss">
  .nav {
    z-index: 10;
    position: fixed;
  }

  .name {
    position: absolute;

    &--big {
      width: 100%;
      font-size: 25px;
      font-style: italic;
      white-space: nowrap;
      opacity: .8;
      top: 45vh;
      left: 50vw;
      margin-left: -450px;
      &--wide {
        top: 43vh;
      }
    }

    &--mobile {
      width: 100vw;
      top: 50vh;
      margin-top: 120px;
      text-align: center;
      font-size: 1.2rem;
      &--wide{
        top: 15vh;
        margin-top: 0px;
      }
    }
  }

  .logo {
    top: 50vh;
    z-index: 1;
    left: 50vw;
    opacity: 1;
    transform: translate(-50%, -50%);
    -webkit-transition: all 2s linear;
    transition: all 2s linear;
    border: #020024 5px solid;
    border-radius: 200px;

    &--big {
      width: 300px;
    }

    &--mobile {
      margin-bottom: 10vh;
      width: 200px;
      &--wide {
        width: 150px;
      }
    }
  }

  .card-1 {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  }

  .card-1:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .line {
    position: absolute;
    z-index: -1;
    width: 100vw;
    top: 50vh;
    height: 3.4px;
    background: linear-gradient(90deg, rgba(0, 212, 255, 0) 10%, rgba(2, 0, 36, 1) 30%, rgba(2, 0, 36, 1) 70%, rgba(0, 212, 255, 0) 90%);
  }

  .nav-list {
    position: absolute;
    top: 45vh;
    left: 50vw;
    width: 400px;
    height: 40px;
    margin-left: 150px;
    display: inline-block;
  }

  .nav-item {
    margin-left: 15px;
    position: relative;
    margin-top: 10px;
    font-size: 17px;
    font-weight: 300;
    opacity: 0.8;
    font-style: italic;
    text-align: center;

    &:nth-child(1) {
      &:hover {
        opacity: 1;
        color: green;
        transition: all .2s ease-in-out;
      }
    }

    &:nth-child(2) {
      &:hover {
        opacity: 1;
        color: yellow;
        transition: all .2s ease-in-out;
      }
    }

    &:nth-child(3) {
      &:hover {
        opacity: 1;
        color: red;
        transition: all .2s ease-in-out;
      }
    }
  }
</style>
