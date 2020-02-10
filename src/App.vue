<template>
  <v-app class="app">
    <Main />
  </v-app>
</template>

<script>
import Main from './components/Main';

export default {
  name: "App",
  components: {
    Main
  }
};
</script>

<style lang="sass">
  .app
    background: #ffffff !important
</style>
