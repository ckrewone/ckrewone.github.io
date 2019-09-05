<template>
    <v-navigation-drawer
            v-model="drawer"
            fixed
            light
            temporary
            class="navigation-drawer"
    >
        <v-list class="pa-1">
            <v-list-tile avatar>
                <v-list-tile-avatar>
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>MZ</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    @click="updateDrawer(false)"
                    v-scroll-to="`${item.scrollTo}`"
                    class="list-tile"
            >
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'NavigationDraver',
  computed: {
    ...mapGetters('info', ['getdrawer', 'name', 'items']),
    drawer: {
      get () { return this.getdrawer },
      set (value) { this.updateDrawer(value) }
    },
  },
  methods: {
    ...mapActions('info', ['updateDrawer'])
  }
}
</script>

<style lang="scss">
    .navigation-drawer{
        z-index: 90 !important;
    }
    .list-tile{
        z-index: 91 !important;
    }
</style>
