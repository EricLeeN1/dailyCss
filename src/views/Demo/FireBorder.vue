<template>
  <div class="g-aurora left">
    <img src="https://s4.ax1x.com/2022/01/18/7wvE7R.jpg" />
  </div>
  <div class="g-aurora right">
    <img src="https://s4.ax1x.com/2022/01/19/7rSleU.jpg" />
  </div>
  <div class="g-aurora right breathe">
    <img src="https://s4.ax1x.com/2022/01/19/7rSleU.jpg" />
  </div>

  <div v-html="svg"></div>
</template>

<script setup lang="ts">
const svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="smoke">
        <feturbulence
          type="fractalNoise"
          baseFrequency=".035 .015"
          numOctaves="20"
          id="turbulence"
          result="noise"
        />
        <fedisplacementmap id="displacement" in2="noise" in="SourceGraphic" scale="30" />
      </filter>
    </defs>
  </svg>`
onMounted(() => {
  const filter = document.querySelector('#turbulence')
  let frames = 1
  let rad = Math.PI / 180
  let bfx, bfy

  const freqAnimation = () => {
    frames += 0.35

    bfx = 0.035
    bfy = 0.015

    bfx += 0.006 * Math.cos(frames * rad)
    bfy += 0.004 * Math.sin(frames * rad)

    const bf = bfx.toString() + ' ' + bfy.toString()
    filter && filter.setAttributeNS(null, 'baseFrequency', bf)
    //   console.log(filter, bf)

    window.requestAnimationFrame(freqAnimation)
  }
  window.requestAnimationFrame(freqAnimation)
})
</script>

<style scoped lang="scss">
@import './scss/FireBorder.scss';
</style>
