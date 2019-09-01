<template>
    <v-layout class="base" @scroll="scroll">
        <v-flex class="nav" :style="navStyles">

            <div :style="nameStyles" class="name">Michal Zakowski </div>
            <v-layout class="nav-list">
                <button class="nav-item nav-item__1" v-scroll-to="'#about'">O mnie</button>
                <button class="nav-item nav-item__2">Projekty</button>
                <button class="nav-item nav-item__3">Kontakt</button>
            </v-layout>
            <div :style="lineStyles" class="line"></div>
            <v-img :style="logoStyles" :src="img" class="logo card-1"></v-img>
        </v-flex>
        <LiveCoding/>
        <v-flex href="#about" id="about" class="about"></v-flex>
    </v-layout>
</template>

<script>
import img from '../assets/mike5.jpg'
import LiveCoding from './LiveCoding'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      img
    }
  },
  components: {
    LiveCoding
  },
  computed: {
    ...mapGetters('style', ['pageY']),
    navStyles () {
      if (this.pageY < 400) {
        return 'margin-top: -' + this.pageY + 'px'
      } else {
        return 'margin-top: -400px'
      }
    },
    nameStyles () {
      if (this.pageY > 250) {
        return 'opacity: ' + (350 - this.pageY) / 100
      } else if (this.pageY < 250) {
        return 'opacity: 1'
      } else {
        return 'opacity: 0'
      }
    },
    logoStyles () {
      if (this.pageY > 250) {
        return 'margin-top: ' + ((350 - this.pageY) - 90) + 'px'
      } else if (this.pageY < 250) {
        return ''
      } else {
        return 'margin-top: -1500px'
      }
    },
    lineStyles () {
      if (this.pageY > 250) {
        return 'background: #fff; height: ' + (100 - (350 - this.pageY)) + 'px ; margin-top: -' + (100 -(350 - this.pageY)) + 'px; border-bottom: #000 3.4px solid; opacity: ' + (1 - ((350 - this.pageY) / 100))
      } else if (this.pageY < 350) {
        return 'opacity: ' + (250 - this.pageY) / 100
      } else {
        return 'opacity: ' + (350 - this.pageY) / 100
      }
    }
  },
  methods: {
    ...mapMutations('style', ['UPDATE_PAGE_Y']),
    scroll (e) {
      this.UPDATE_PAGE_Y(e.pageY)
    }
  },
  created () {
    window.addEventListener('scroll', this.scroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll)
  }
}
</script>

<style lang="scss">
    .base {
        font-family: "Hasklig", "Fira Code", "SF Mono", "Operator Mono Lig", "LigaInconsolata", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace !important
    }

    .nav {
        z-index: 100;
        position: fixed;
    }

    .name {
        position: absolute;
        font-size: 35px;
        font-style: italic;
        white-space: nowrap;
        opacity: .8;
        top: 45vh;
        left: 50vw;
        margin-left: -450px;
        width: 100%;
    }

    .logo {
        top: 50vh;
        left: 50vw;
        width: 200px;
        transform: translate(-50%, -50%);
        border: #020024 5px solid;
        border-radius: 200px;
    }

    .card-1 {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    }

    .card-1:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .line {
        position: absolute;
        z-index: -1;
        width: 100vw;
        top: 50vh;
        height: 3.4px;
        background: linear-gradient(90deg, rgba(0, 212, 255, 0) 10%, rgba(2, 0, 36, 1) 30%, rgba(2, 0, 36, 1) 70%, rgba(0, 212, 255, 0) 90%);
    }

    .nav-list {
        position: absolute;
        top: 45vh;
        left: 50vw;
        width: 300px;
        height: 40px;
        margin-left: 150px;
        display: inline-block;
    }

    .nav-item {
        margin-left: 15px;
        position: relative;
        margin-top: 10px;
        font-size: 17px;
        font-weight: 300;
        opacity: 0.8;
        font-style: italic;
        text-align: center;

        &__1 {
            &:hover {
                opacity: 1;
                color: green;
                transition: all .2s ease-in-out;
            }
        }

        &__2 {
            &:hover {
                opacity: 1;
                color: yellow;
                transition: all .2s ease-in-out;
            }
        }

        &__3 {
            &:hover {
                opacity: 1;
                color: red;
                transition: all .2s ease-in-out;
            }
        }
    }
    .about {
        z-index: 100;
        top: 120vh;
        left: 0;
        position: absolute;
        height: 100%;
        width: 1000px;
        background: #020024;
    }
</style>
