<template>
    <transition name="fade">
        <v-container class="contact-mobile__background" v-show="show">
            <v-layout row>
                <v-flex xs12>
                    <v-card class="contact-mobile" color="#00aef6" elevation="12" hover>
                        <v-flex class="contact-mobile__title">{{this.title}}</v-flex>
                        <v-flex class="contact-mobile__content">{{this.text}}</v-flex>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </transition>
</template>

<script>
  export default {
    name: 'ContactMobile',
    data () {
      return {
        title: 'Kontakt',
        text: 'Lorem ipsum dolar amet'
      }
    },
    props: {
      show: Boolean
    }
  }
</script>

<style lang="scss">
    .contact-mobile {
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
