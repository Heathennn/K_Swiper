<template>
  <div class="about">
    <button @click="goTo(-1)">上一个</button>
    <button @click="goTo(1)">下一个</button>
    <Swiper :length="5" ref="whdxSwiper">
      <swiper-item>slot1</swiper-item>
      <swiper-item>slot2</swiper-item>
      <swiper-item>slot3</swiper-item>
      <swiper-item>slot4</swiper-item>
      <swiper-item>slot5</swiper-item>
    </Swiper>
  </div>
</template>

<script>
  import Swiper from '../components/Swiper.vue'
  import SwiperItem from '../components/SwiperItem'

  export default {
    name: 'about',
    components: {
      Swiper,
      SwiperItem
    },
    computed: {
      whdxSwiper() {
        return this.$refs.whdxSwiper.swiper
      }
    },
    methods: {
      goTo(offset) {
        this.whdxSwiper.go(this.whdxSwiper.current_index + offset);
      }
    },
    mounted() {
      console.log(`this.whdxSwiper ==>`, this.whdxSwiper);
    }
  }
</script>

<style lang="less"></style>