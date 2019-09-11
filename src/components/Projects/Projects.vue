<template>
    <v-flex class="projects" ref="projects" href="#projects" id="projects">
        <v-flex v-if="$vuetify.breakpoint.mdAndUp">
            <ProjectsDesktop :show="show"/>
        </v-flex>
        <v-flex v-else>
            <ProjectsMobile :show="show"/>
        </v-flex>
    </v-flex>
</template>

<script>
import ProjectsDesktop from './ProjectsDesktop'
import ProjectsMobile from './ProjectsMobile'
import { mapGetters } from 'vuex'
export default {
  name: 'Projects',
  components: {
    ProjectsDesktop,
    ProjectsMobile
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
    this.offsetTop = this.$refs['projects'].offsetTop
  }
}
</script>

<style lang="scss">
    .projects {
        top: 300vh;
        left: 0;
        position: absolute;
        height: 100vh;
        width: 100vw;
        margin-top: -50px;
    }
</style>
