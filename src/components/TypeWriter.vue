<template>
  <div>
    <span ref="text"></span>
    <span v-if="showCursor" ref="cursor" class="cursor">|</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      default: 50,
    },
    delay: {
      type: Number,
      default: 1000,
    },
    showCursor: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      currentText: '',
    };
  },
  methods: {
    startTyping() {
      this.timer = setInterval(() => {
        if (this.currentIndex === this.text.length) {
          clearInterval(this.timer);
          setTimeout(() => {
            this.$emit('complete');
          }, this.delay);
        } else {
          this.currentText += this.text[this.currentIndex];
          this.currentIndex += 1;
        }
      }, this.speed);
    },
  },
  mounted() {
    this.startTyping();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style>
.cursor {
  animation: blink 0.7s infinite;
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

