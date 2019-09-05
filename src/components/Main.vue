<template>
  <v-flex>
    <NavigationDraver></NavigationDraver>
    <v-layout class="base" @scroll="scroll">
      <BasicNavbar/>
      <HomeNavbar/>
      <LiveCoding/>
      <About/>
      <Projects/>
      <Contact/>
    </v-layout>
  </v-flex>
</template>

<script>
import img from '../assets/32524349.jpg'
import LiveCoding from './LiveCoding'
import { mapGetters, mapMutations } from 'vuex'
import BasicNavbar from './Navbar/BasicNavbar'
import NavigationDraver from './Navbar/NavigationDraver'
import HomeNavbar from './Navbar/HomeNavbar'
import About from './Info/About'
import Projects from './Info/Projects'
import Contact from './Info/Contact'

export default {
  name: 'Home',
  data () {
    return {
      img
    }
  },
  components: {
    BasicNavbar,
    LiveCoding,
    NavigationDraver,
    HomeNavbar,
    About,
    Projects,
    Contact
  },
  computed: {
    ...mapGetters('style', ['pageY']),
    ...mapGetters('info', ['name', 'items'])
  },
  methods: {
    ...mapMutations('style', ['UPDATE_PAGE_Y']),
    scroll () {
      this.UPDATE_PAGE_Y(window.scrollY)
    }
  },
  created () {
    window.addEventListener('scroll', this.scroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll)
  }
}
</script>

<style lang="scss">
  .base {
    font-family: "Hasklig", "Fira Code", "SF Mono", "Operator Mono Lig", "LigaInconsolata", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace !important
  }
</style>
