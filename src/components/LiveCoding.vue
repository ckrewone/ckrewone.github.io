<template>
    <v-flex class="live-code">
        <v-flex :style="style" class="code">
            {{text1}}<span :class="{
            'cursor': true,
            'cursor--invisible': this.cursor
            }">&nbsp;</span>{{text2}}
        </v-flex>
    </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LiveCoding',
  data () {
    return {
      text1: 'Web',
      text2: 'developer...',
      moveArray: ['1', '1', '1', 'F', 'r', 'o', 'n', 't', 'e', 'n', 'd', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', 'N', 'o', 'd', 'e', 'J', 'S', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', 'W', 'e', 'b', '0', '0', '0'],
      cursor: true,
      delay: 400
    }
  },
  computed: {
    ...mapGetters('style', ['pageY']),
    style () {
      return 'margin-left: ' + this.pageY * 4 + 'px'
    }
  },
  methods: {
    setCursor () {
      setTimeout(() => {
        this.cursor = !this.cursor
        this.setCursor()
      }, 500)
    },
    liveCode (index) {
      setTimeout(() => {
        this.delay = 400
        const current = this.moveArray[index]
        if (current === '1') {
          this.text1 = this.text1.slice(0, -1)
          this.delay = 200
        } else {
          if (current !== '0') { this.text1 = this.text1 + current }
        }
        this.liveCode(index !== this.moveArray.length - 1 ? index + 1 : 0)
      }, Math.random() * this.delay)
    }
  },
  beforeMount () {
    this.setCursor()
    this.liveCode(0)
  }
}
</script>

<style lang="scss">
    .live-code {
        position: fixed;
        width: 100%;
        top: 80vh;
        text-align: center;
    }

    .code {
        text-align: center;
        font-size: 2rem;
    }
    .cursor{
        height: 100%;
        position: relative;
        color: #fff;
        border-left: #000 5px solid;
        margin-left: 2px;
        &--invisible{
            opacity: 0;
        }
    }
</style>
