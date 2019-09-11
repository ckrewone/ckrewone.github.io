<template>
    <v-flex class="parallelogram">
        <transition name="fade">
            <v-flex class="content" v-show="show">
                <v-flex class="content__title">
                    {{this.title}}
                </v-flex>
                <v-flex class="content__text">
                    {{this.content}}
                </v-flex>
            </v-flex>
        </transition>
        <transition name="fade">
            <v-flex class="parallelogram__1 parallelogram--absolute" v-show="show"></v-flex>
        </transition>
        <transition name="fade">
            <v-flex class="parallelogram__2 parallelogram--absolute" v-show="show"></v-flex>
        </transition>
        <transition name="fade">
            <v-flex class="parallelogram__3 parallelogram--absolute" v-show="show"></v-flex>
        </transition>
        <transition name="fade">
            <v-flex class="parallelogram__4 parallelogram--absolute" v-show="show"></v-flex>
        </transition>
    </v-flex>
</template>

<script>

export default {
  name: 'AboutDesktop',
  data () {
    return {
      offsetTop: '',
      title: 'O mnie',
      content: 'Lorem ipsum dolar amet',
      showText: false
    }
  },
  props: {
    show: Boolean
  }
}
</script>

<style lang="scss">
    .content {
        position: absolute;
        z-index: 11;
        margin-left: 100px;
        width: 360px;
        text-align: center;

        &__title {
            font-size: 72px;
            margin-top: 20px;
        }

        &__text {
            font-size: 26px;
        }
    }

    .parallelogram {
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1300px;
        height: 600px;

        &--absolute {
            position: absolute;
        }

        &__1 {
            z-index: 10;
            width: 240px;
            height: 500px;
            margin-top: 50px;
            margin-left: 160px;
            transform: skew(20deg);
            background: #00aef6;
            border-radius: 3px;
        }

        &__2 {
            z-index: 9;
            width: 150px;
            height: 500px;
            margin-top: 50px;
            margin-left: 385px;
            transform: skew(-10deg);
            background: #0d47a1;
            border-radius: 3px;
        }

        &__3 {
            z-index: 12;
            width: 300px;
            height: 600px;
            margin-top: 50px;
            margin-left: 538px;
            transform: skew(20deg);
            background: #00aef6;
            border-radius: 3px;
        }

        &__4 {
            z-index: 9;
            width: 100px;
            height: 700px;
            margin-top: -50px;
            margin-left: 1048px;
            transform: skew(-30deg);
            background: #0d47a1;
            border-radius: 3px;
        }
    }

    .title {
        position: absolute;
        margin-top: 200px;
    }

    .slide {
        &--left {
            margin-left: 100px;
        }

        &--right {
        }
    }

    .fade-enter-active {
        transition: all .5s ease;
    }

    .fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        margin-left: 300px;
        opacity: 0;
    }
</style>
