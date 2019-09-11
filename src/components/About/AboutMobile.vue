<template>
    <transition name="fade">
        <v-container class="about-mobile__background" v-show="show">
            <v-layout row>
                <v-flex xs12>
                    <v-card class="about-mobile" color="#00aef6" elevation="12" hover>
                        <v-flex class="about-mobile__title">{{this.title}}</v-flex>
                        <v-flex class="about-mobile__content">{{this.text}}</v-flex>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </transition>
</template>

<script>
export default {
  name: 'AboutMobile',
  data () {
    return {
      title: 'O mnie',
      text: 'Lorem ipsum dolar amet'
    }
  },
  props: {
    show: Boolean
  }
}
</script>

<style lang="scss">
    .about-mobile {
        &__title {
            margin-top: 50px;
            font-size: 30px;
            text-align: left;
            margin-left: 5px;
        }

        &__content {
            font-size: 20px;
            text-align: center;
            margin: 5px;
        }
    }
</style>
