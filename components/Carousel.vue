<template>
  <b-carousel
    v-model="slide"
    style="text-shadow: 1px 1px 2px #333;"
    controls
    indicators
    fade
    :interval="4000"
    img-width="4032"
    img-height="1701"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <!-- Text slides with image -->
    <b-carousel-slide
      caption="Hey!"
      :img-src="require('@/assets/images/carousel-iceland.jpg')"
    >
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss" scoped>
// .carousel {
//   .carousel-inner {
//     .carousel-item {
//       // max-height: 600px;
//     }
//   }
// }
</style>
