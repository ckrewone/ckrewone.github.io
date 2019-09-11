<template>
    <v-flex class="about" href="#about" id="about" ref="about">
    <v-flex v-if="$vuetify.breakpoint.mdAndUp">
        <AboutDesktop :show="show"/>
    </v-flex>
    <v-flex v-else>
        <AboutMobile :show="show"/>
    </v-flex>
    </v-flex>
</template>
<script>
import AboutDesktop from './AboutDesktop'
import AboutMobile from './AboutMobile'
import { mapGetters } from 'vuex'

export default {
  name: 'About',
  components: {
    AboutDesktop,
    AboutMobile
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
</style>
