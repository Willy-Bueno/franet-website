<script setup lang='ts'>
import 'swiper/css'
import 'swiper/css/autoplay'

import type { Swiper as SwiperClass } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { Play } from 'lucide-vue-next'

const modules = ref([Autoplay])
const currentBannerIndex = ref(0)

const DESKTOP_BANNERS = [
  '/images/banner-desktop-1.png',
  '/images/banner-desktop-2.png',
  '/images/banner-desktop-3.png',
]

const MOBILE_BANNERS = [
  '/images/banner-mobile-1.png',
  '/images/banner-mobile-2.png',
  '/images/banner-mobile-3.png',
]

const banners = computed(() => {
  const { isGreater } = useBreakpoints(breakpointsTailwind)
  return isGreater('sm') ? DESKTOP_BANNERS : MOBILE_BANNERS
})

function onSlideChange(swiper: SwiperClass) {
  currentBannerIndex.value = swiper.realIndex
}
</script>

<template>
  <Swiper
    class="relative"
    style="z-index: -9999;"
    :modules="modules"
    :slides-per-view="1"
    loop
    :autoplay="{
      delay: 5000,
    }"
    @slide-change="onSlideChange"
  >
    <SwiperSlide
      v-for="(banner, index) in banners"
      :key="index"
    >
      <img :src="banner" class="w-full" >
    </SwiperSlide>
    <div class="container absolute bottom-2 left-1/2 z-50 flex -translate-x-1/2 flex-row items-center justify-end space-x-6 px-4">
      <div
        v-for="(banner, index) in banners"
        :key="banner"
        :data-banner-status="currentBannerIndex === index ? 'currently' : 'waiting'"
        class="flex size-8 items-center justify-center rounded-md bg-primary shadow-md transition-all duration-150 data-[banner-status=currently]:size-10"
      >
        <Play
          :data-banner-status="currentBannerIndex === index ? 'currently' : 'waiting'"
          class="size-4 stroke-white data-[banner-status=currently]:size-6 data-[banner-status=currently]:stroke-secondary" />
      </div>
    </div>
  </Swiper>
</template>
