import { mapGetters } from 'vuex'
import ImageSlider from './ImageSlider'
export default {
  name: 'ProjectsDesktop',
  components: { ImageSlider },
  data () {
    return {
      title: 'Projekty'
    }
  },
  props: {
    show: Boolean
  },
  computed: {
    ...mapGetters('projects', ['activeProject'])
  }
}
