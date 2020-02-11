<template>
    <v-carousel
            hide-controls
            @change="this.setActive"
    >
        <v-carousel-item
                v-for="(proj, i) in projects"
                :key="i"
                :value="i"
        >
            <v-sheet
                    height="100%"
            >
                <v-flex
                        class="fill-height"
                        align="center"
                        justify="center"
                >
                <v-flex>{{activeProject.title}}</v-flex>
                </v-flex>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ImageSlider',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions('projects', ['setActive'])
  },
  computed: {
    ...mapGetters('projects', ['activeProject', 'active', 'projects'])
  }
}
</script>

<style scoped>

</style>
