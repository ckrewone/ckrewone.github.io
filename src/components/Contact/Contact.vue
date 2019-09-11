<template>
  <v-flex class="contact" ref="contact" href="#contact" id="contact">
    <v-flex v-if="$vuetify.breakpoint.mdAndUp">
      <ContactDesktop :show="show"/>
    </v-flex>
    <v-flex v-else>
      <ContactMobile :show="show"/>
    </v-flex>
  </v-flex>
</template>

<script>
import ContactDesktop from './ContactDesktop'
import ContactMobile from './ContactMobile'
import { mapGetters } from 'vuex'
export default {
  name: 'Contact',
  components: {
    ContactDesktop,
    ContactMobile
  },
  data () {
    return {
      offsetTop: null
    }
  },
  computed: {
    ...mapGetters('style', ['pageY']),
    show () {
      if ((this.pageY < this.offsetTop - 150)) {
        return false
      } else if (this.pageY > this.offsetTop + 200) {
        return false
      } else {
        return true
      }
    }
  },
  mounted () {
    this.offsetTop = this.$refs['contact'].offsetTop
  }
}
</script>

<style lang="scss">
  .contact {
    top: 400vh;
    left: 0;
    position: absolute;
    height: 100vh;
    width: 100vw;
    margin-top: -50px;
  }
</style>
