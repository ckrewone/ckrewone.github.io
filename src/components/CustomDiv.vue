<template>
    <v-flex class="custom-div">
    <svg width="400" height="400">
        <polygon  points="0 181,259 220,310 0,15 15" width="400" height="400" style="fill:rgb(0,0,255)" />
        <polygon  points="12 171,229 190,300 4,20 20" width="400" height="400" style="fill:rgb(0,255,255)" />
    </svg>
    </v-flex>
</template>

<script>
  export default {
    name: 'CustomDiv'
  }
</script>

<style scoped>
    .custom-div{
        margin-top: 100px;
        z-index: 99999;
    }
</style>
