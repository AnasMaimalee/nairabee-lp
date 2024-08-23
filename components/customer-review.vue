<template>
    <div class="carousel-container relative overflow-hidden w-4/5 mx-auto">
      <div class="carousel flex overflow-x-scroll scroll-smooth" ref="carousel">
        <div class="carousel-item flex-shrink-0 w-full text-center p-8 bg-orange-500">
          Item 1
        </div>
        <div class="carousel-item flex-shrink-0 w-full text-center p-8 bg-orange-400">
          Item 2
        </div>
        <div class="carousel-item flex-shrink-0 w-full text-center p-8 bg-orange-300">
          Item 3
        </div>
        <div class="carousel-item flex-shrink-0 w-full text-center p-8 bg-orange-200">
          Item 4
        </div>
      </div>
      <div class="carousel-controls flex justify-between absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16">
        <button @click="scrollLeft" class="bg-white p-2 rounded-full shadow">
          ←
        </button>
        <button @click="scrollRight" class="bg-white p-2 rounded-full shadow">
          →
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      scrollLeft() {
        this.$refs.carousel.scrollBy({
          left: -this.$refs.carousel.clientWidth,
          behavior: 'smooth',
        });
      },
      scrollRight() {
        this.$refs.carousel.scrollBy({
          left: this.$refs.carousel.clientWidth,
          behavior: 'smooth',
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-item {
    min-width: 100%;
    scroll-snap-align: center;
  }
  .carousel {
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
  </style>
  