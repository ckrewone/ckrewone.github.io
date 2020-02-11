<template>
    <v-footer
            absolute
            dark
            height="auto"
    >
        <v-card
                class="orange lighten-1 white--text text-xs-center"
                flat
                tile
                style="width: 100%; height: 70vh"
        >
            <v-card-text>
                <v-layout justify-center row>
                    <v-flex xs2>
                        <v-layout justify-center row>
                            <v-card class="buttons-group" @click="click" elevation="10" xs1>
                                <v-img :src="fb" class="img" max-height="32" max-width="32" v-ripple/>
                            </v-card>
                            <v-card class="buttons-group text-md-center" xs1>
                                <v-img :src="fb" class="img" max-height="32" max-width="32" v-ripple/>
                            </v-card>
                            <v-card class="buttons-group text-md-center" xs1>
                                <v-img :src="fb" class="img" max-height="32" max-width="32" v-ripple/>
                            </v-card>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-card-text>

            <v-card-text class="white--text pt-0 text-md-center">
                <v-flex style="margin-top: 20vh">
                    <h1>Kontakt</h1>
                </v-flex>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                &copy;2019 — Made with ❤️ by <strong>Michał Żakowski</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
import fb from '../../assets/facebook.svg'

export default {
  name: 'ContactDesktop',
  data () {
    return {
      fb
    }
  },
  methods: {
    click () {
      console.log('dupa')
    }
  }
}
</script>
<style lang="scss">
    .footer-bottom {
    }

    .buttons-group {
        margin: 0 auto;
        width: 32px;
    }

    .img {
    }
</style>
