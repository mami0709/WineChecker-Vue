<template>
  <div class="progress">
    <svg class="progress-ring" width="120" height="120">
      <circle
        class="progress-ring__circle"
        stroke="#10b981"
        stroke-width="4"
        fill="transparent"
        r="58"
        cx="60"
        cy="60"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: ['progress'],
  mounted() {
    const circle = this.$el.querySelector('.progress-ring__circle')
    const radius = circle.r.baseVal.value
    const circumference = radius * 2 * Math.PI
    circle.style.strokeDasharray = `${circumference} ${circumference}`
    circle.style.strokeDashoffset = `${circumference}`
    const offset = circumference - (this.progress / 100) * circumference
    circle.style.strokeDashoffset = offset
  }
}
</script>

<style scoped>
.progress {
  display: flex;
  align-items: center;
  justify-content: center;
}
.progress-ring__circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>
