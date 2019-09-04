<template>
    <v-flex>
       <NavigationDraver></NavigationDraver>
    <Toolbar/>
    <v-layout class="base" @scroll="scroll">
        <v-flex class="nav" :style="logoStyles">
            <div :class="{
            'name name--big' : $vuetify.breakpoint.mdAndUp,
            'name name--mobile' : !$vuetify.breakpoint.mdAndUp
            }">Michal Zakowski </div>
            <v-layout v-show="$vuetify.breakpoint.mdAndUp" class="nav-list">
                <button class="nav-item nav-item__1" >O mnie</button>
                <button class="nav-item nav-item__2" v-scroll-to="'#projects'">Projekty</button>
                <button class="nav-item nav-item__3" v-scroll-to="'#contact'">Kontakt</button>
            </v-layout>
            <div class="line"></div>
            <v-img :src="img" class="logo card-1" :class="{
            'logo logo--big' : $vuetify.breakpoint.mdAndUp,
            'logo logo--mobile' : !$vuetify.breakpoint.mdAndUp
            }"></v-img>
        </v-flex>
        <LiveCoding/>
        <v-flex href="#about" id="about" class="about">
            <h1>O mnie</h1>
            <p>lorem ipsum dolar amet</p>
        </v-flex>
        <v-flex href="#projects" id="projects" class="projects">
            <h1>Projekty</h1>
            <p>lorem ipsum dolar amet</p>
        </v-flex>
        <v-flex href="#contact" id="contact" class="contact">
            <h1>kontakt</h1>
            <p>lorem ipsum dolar amet</p>
        </v-flex>
    </v-layout>
    </v-flex>
</template>

<script>
import img from '../assets/mike5.jpg'
import LiveCoding from './LiveCoding'
import { mapMutations, mapGetters } from 'vuex'
import Toolbar from './Toolbar'
import NavigationDraver from './NavigationDraver'

export default {
  name: 'Home',
  data () {
    return {
      img
    }
  },
  components: {
    Toolbar,
    LiveCoding,
    NavigationDraver
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
      if (this.pageY > 150) {
        return 'margin-top: ' + ((250 - this.pageY) - 90) + 'px; opacity: ' + (350 - this.pageY) / 100
      } else if (this.pageY < 150) {
        return ''
      } else {
        return 'margin-top: -1500px'
      }
    },
  },
  methods: {
    ...mapMutations('style', ['UPDATE_PAGE_Y']),
    scroll () {
      this.UPDATE_PAGE_Y(window.scrollY)
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
        z-index: 10;
        position: fixed;
    }

    .name {
        position: absolute;
        &--big {
            width: 100%;
            font-size: 25px;
            font-style: italic;
            white-space: nowrap;
            opacity: .8;
            top: 45vh;
            left: 50vw;
            margin-left: -450px;
        }
        &--mobile {
            width: 100vw;
            top: 50vh;
            margin-top: 120px;
            text-align: center;
            font-size: 1.2rem;
        }
    }

    .logo {
        top: 50vh;
        z-index: 1;
        left: 50vw;
        opacity: 1;
        transform: translate(-50%, -50%);
        -webkit-transition: all 2s linear; /* Safari prior 6.1 */
        transition: all 2s linear;
        border: #020024 5px solid;
        border-radius: 200px;
        &--big{
            width: 300px;
        }
        &--mobile{
            width: 150px;
        }
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
        padding-top: 100px;
        z-index: -1;
        top: 120vh;
        left: 0;
        position: absolute;
        height: 100%;
        width: 1000px;
        background: #00aef6;
    }
    .projects {
        padding-top: 100px;
        z-index: -1;
        top: 240vh;
        left: 0;
        position: absolute;
        height: 100%;
        width: 800px;
        background: #aedd00;
    }
    .contact {
        padding-top: 100px;
        z-index: -1;
        top: 360vh;
        left: 0;
        position: absolute;
        height: 100%;
        width: 500px;
        background: #a300fe;
    }
</style>
