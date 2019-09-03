<template>
    <div class="navbar" v-show="showNav">
        <v-toolbar dense fixed collapse>
            <v-toolbar-title>MZ</v-toolbar-title>

            <v-spacer></v-spacer>
            <template v-if="$vuetify.breakpoint.mdAndUp">
                <v-btn flat>
                    o mnie
                </v-btn>
                <v-btn flat>
                    Projekty
                </v-btn>
                <v-btn flat>
                    Kontakt
                </v-btn>
            </template>
            <template v-else>
                <v-btn flat>
                    o mnie
                </v-btn>
                <v-btn flat>
                    Projessssskty
                </v-btn>
                <v-btn flat>
                    Kontakt
                </v-btn>
            </template>
        </v-toolbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Toolbar',
  data () {
    return {
      windowHeight: window.innerHeight
    }
  },
  computed: {
    ...mapGetters('style', ['pageY']),
    showNav () {
      return (this.windowHeight / 2) < this.pageY
    }
  }
}
</script>

<style lang="scss">

</style>
