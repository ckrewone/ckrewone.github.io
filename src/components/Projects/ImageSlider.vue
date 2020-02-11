<template>
    <v-carousel
            hide-controls
            @change="change"
    >
        <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                :value="i"
        >
            <v-sheet
                    height="100%"
            >
                <v-flex
                        class="fill-height"
                        align="center"
                        justify="center"
                >
                <v-flex> {{slide }}</v-flex>
                </v-flex>
            </v-sheet>
          <template v-slot:project >
            {{slide}}
          </template>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
  name: 'ImageSlider',
  data () {
    return {
      slides: [
        'PiioApp',
        'JSON/XML CRUD',
        'Portfolio',
        'React invoices app'
      ]
    }
  },
  methods: {
    change (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>
