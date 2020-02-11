<template>
    <transition name="fade">
        <v-container class="projects-mobile__background" v-show="show">
            <v-layout row>
                <v-flex xs12>
                    <v-card class="projects-mobile" color="#00c853" elevation="12" hover>
                        <v-flex class="projects-mobile__title">{{this.title}}</v-flex>
                        <v-flex class="projects-mobile__content">
                            <image-slider/>
                        </v-flex>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </transition>
</template>

<script>
import ImageSlider from './ImageSlider'
export default {
  name: 'ProjectsMobile',
  components: { ImageSlider },
  data () {
    return {
      title: 'Projects',
      text: 'Lorem ipsum dolar amet'
    }
  },
  props: {
    show: Boolean
  }
}
</script>

<style lang="scss">
    .projects-mobile {
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
