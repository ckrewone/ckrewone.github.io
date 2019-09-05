<template>
    <v-flex>
    <v-flex class="custom-div polygon--1">
        <svg :width="width2" height="400">
            <polygon points="0 71,400 290,400 4,0 20" :width="width2" height="400" :fill="color2" class="polygon--2"/>
        </svg>
    </v-flex>
    <v-flex class="custom-div polygon--2">
        <svg :width="width2" height="400">
            <polygon points="0 191,400 110,400 0,0 30" :width="width2" height="400" :fill="color3" class="polygon--3"/>
        </svg>
    </v-flex>
    <v-flex class="custom-div polygon--3">
        <svg :width="width2" height="400">
            <polygon points="0 171,400 390,400 4,0 20" :width="width2" height="400" :fill="color1" class="polygon--1"/>
        </svg>
    </v-flex>
    </v-flex>
</template>

<script>
export default {
  name: 'CustomDiv',
  props: {
    color1: String,
    color2: String,
    color3: String
  },
  data () {
    return {
      width1: window.innerWidth * 0.75,
      width2: window.innerWidth
    }
  }
}
</script>

<style lang="scss">
    .custom-div {
        margin-top: 100px;
        z-index: 99999;
    }

    .polygon {
        &--1 {
            position: absolute;
            margin-top: 100px;
        }
    }
</style>
