<template>
  <vue-typewriter :speed="50" :delay="1000" :strings="['Hello', 'World']" />
</template>

<script>
import VueTypewriter from 'vue-typewriter';
export default {
  props: {
    textArray: {
      type: Array,
      required: true
    },
    delay: {
      type: Number,
      default: 100
    }
  },
  methods: {
    startTimer() {
      this.timerId = setInterval(() => {
        console.log("test");
        this.showArray.push("test")
      }, 1000)
    }
  },
  data() {
    return {
      showArray: [],
    };
  },

};
</script>
