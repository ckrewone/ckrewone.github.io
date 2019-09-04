<template>
    <div class="navbar" v-show="showNav">
        <v-toolbar dense class="toolbar" fixed color="rgba(255,255,255,0.2)" flat collapse v-if="$vuetify.breakpoint.mdAndUp">
            <v-toolbar-title large>MZ</v-toolbar-title>

            <v-spacer></v-spacer>
            <template v-if="$vuetify.breakpoint.mdAndUp">
                <v-btn flat v-for="item in items">
                    {{item.title}}
                </v-btn>
            </template>
        </v-toolbar>
        <v-toolbar class="toolbar" flat color="rgba(0,0,0,0)" fixed v-else>
            <div class="menu back menu--3">
                <label>
                    <input type="checkbox" v-model="drawer">
                    <svg viewBox="0 0 85 85" xmlns="http://www.w3.org/2000/svg">
                        <path class="line--1" d="M0 40h62c18 0 18-20-17 5L31 55" />
                        <path class="line--2" d="M0 50h80" />
                        <path class="line--3" d="M0 60h62c18 0 18 20-17-5L31 45" />
                    </svg>
                </label>
            </div>
        </v-toolbar>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Toolbar',
  data () {
    return {
      windowHeight: window.innerHeight,
      count: 0,
      isChecked: true
    }
  },
  computed: {
    ...mapGetters('style', ['pageY']),
    ...mapGetters('info', ['getdrawer', 'items']),
    showNav () {
      return (this.windowHeight / 2) < this.pageY || this.$vuetify.breakpoint.mdAndDown
    },
    drawer: {
      get () { return this.getdrawer },
      set (value) { this.updateDrawer(value) }
    }
  },
  methods: {
    ...mapActions('info', ['updateDrawer'])
  }
}
</script>

<style lang="scss">
    .navbar{
        z-index: 100;
    }
    .toolbar{
        z-index: 90 !important;
        background: yellow;
    }
    input {
        display: none;
    }

    label {
        display: block;
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 50vw;
        height: 50vw;
        margin-top: -25px;
        margin-left: -30px;
        max-width: 100px;
        max-height: 100px;
    }

    @media (min-aspect-ratio: 1/1) {
        label {
            width: 50vh;
            height: 50vh;
        }
    }

    path {
        fill: none;
        stroke: #000;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
        --length: 24;
        --offset: -38;
        stroke-dasharray: var(--length) var(--total-length);
        stroke-dashoffset: var(--offset);
        transition: all .8s cubic-bezier(.645, .045, .355, 1);
    }
    .cross input:checked+svg {
        .line--1,
        .line--3 {
            --length: 22.627416998;
        }
        .line--2 {
            --length: 0;
        }
    }

    .back input:checked+svg {
        .line--1,
        .line--3 {
            --length: 8.602325267;
        }
    }

    .menu--3 {
        background-color: #00aef6;
        .line--1,
        .line--3 {
            --total-length: 126.38166809082031;
        }
        .line--2 {
            --total-length: 80;
        }
        input:checked+svg {
            .line--1,
            .line--3 {
                --offset: -109.1770175568;
            }
        }
    }

</style>
