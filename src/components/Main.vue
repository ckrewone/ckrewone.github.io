<template>
    <v-layout class="base">
        <v-flex class="nav">
            <div class="name">Michal Zakowski</div>
            <v-layout class="nav-list">
                <button class=" nav-item nav-item__1">O mnie</button>
                <button class="nav-item nav-item__2">Projekty</button>
                <button class="nav-item nav-item__3">Kontakt</button>
            </v-layout>
            <div class="line"></div>
            <v-img :src="img" :width="200" class="logo card-1"></v-img>
            <LiveCoding/>
        </v-flex>
    </v-layout>
</template>

<script>
import img from '../assets/mike5.jpg'
import LiveCoding from './LiveCoding'

export default {
  name: 'Home',
  data () {
    return {
      img
    }
  },
  components: {
    LiveCoding
  }
}
</script>

<style lang="scss">
    .base {
        font-family: "Hasklig", "Fira Code", "SF Mono", "Operator Mono Lig", "LigaInconsolata", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace !important
    }

    .nav {
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
</style>
