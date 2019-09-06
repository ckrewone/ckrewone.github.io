<template>
    <v-flex href="#projects" id="projects" class="projects">
        <v-flex class="parallelogram">
            <v-flex class="parallelogram__5 parallelogram--absolute"></v-flex>
            <v-flex class="parallelogram__6 parallelogram--absolute"></v-flex>
            <v-flex class="parallelogram__7 parallelogram--absolute"></v-flex>
            <v-flex class="parallelogram__8 parallelogram--absolute"></v-flex>
            <v-flex class="recentage parallelogram--absolute"></v-flex>
        </v-flex>
    </v-flex>
</template>

<script>
  export default {
    name: 'Projects'
  }
</script>

<style lang="scss">
    .projects {
        top: 300vh;
        left: 0;
        position: absolute;
        height: 100vh;
        width: 100vw;
        margin-top: -50px;
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

        &__5 {
            z-index: 8;
            width: 100px;
            height: 500px;
            margin-top: 150px;
            margin-left: 385px;
            transform: skew(40deg);
            background: #257a16;
            border-radius: 3px;
        }

        &__6 {
            -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            -moz-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            -ms-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            -o-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            z-index: 10;
            width: 200px;
            height: 700px;
            margin-top: -50px;
            margin-left: 700px;
            transform: skew(-17deg);
            background: #00c853;
            border-radius: 3px;
        }

        &__7 {
            z-index: 8;
            width: 200px;
            height: 550px;
            margin-top: -50px;
            margin-left: 854px;
            transform: skew(10deg);
            background: #257a16;
            border-radius: 3px;
        }

        &__8 {
            -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            -moz-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            -ms-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            -o-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            z-index: 10;
            width: 300px;
            height: 550px;
            margin-top: -50px;
            margin-left: 975px;
            transform: skew(-15deg);
            background: #00c853;
            border-radius: 3px;
        }
    }

    .recentage{
      background: #bdbdbd;
      width: 700px;
      height: 500px;
      margin-top: 50px;
      margin-left: 50px;
      z-index: 9;
      -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      -moz-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      -ms-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      -o-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .title {
        position: absolute;
        margin-top: 200px;
    }
</style>
