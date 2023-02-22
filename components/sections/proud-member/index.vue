<template>
  <section class="proud-member">
    <div class="container">
      <div class="experts__wrap">
        <SharedTitle :title="$t('proud-member.title')" />
        <swiper
          :loop="true"
          :autoplay="{
            delay: 6000,
            disableOnInteraction: false,
          }"
          :speed="1000"
          :pagination="{
            el: '.proud-member-pagination',
            clickable: true,
            renderBullet: (index, className) =>
              `<span class='${className} text-black'></span>`,
          }"
          :modules="[Pagination, Autoplay]"
          :breakpoints="breakpoints"
          :space-between="20"
          class="proud-member__swiper">
          <swiper-slide class="proud-member__slide !flex space-x-[25px]">
            <div v-for="(item, indx) in list" :key="indx">
              <nuxt-img
                :src="item.image"
                alt="Brand Logo"
                class="border-[1px] border-[#D9D9D9] h-[113px] flex-none" />
            </div>
          </swiper-slide>
          <swiper-slide class="proud-member__slide !flex space-x-[20px]">
            <div v-for="(item, indx) in list" :key="indx">
              <nuxt-img
                :src="item.image"
                alt="Brand Logo"
                class="border-[1px] border-[#D9D9D9] h-[113px] flex-none" />
            </div>
          </swiper-slide>
        </swiper>
        <div class="proud-member-pagination !flex"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Pagination, Autoplay } from "swiper";

const breakpoints = {
  0: {
    slidesPerView: 1,
    initialSlide: 1,
  },
  992: {
    slidesPerView: 2,
    initialSlide: 1,
  },
  1200: {
    slidesPerView: 1,
    // initialSlide: 1,
    // slidesPerGroup: 6,
  },
};

const list = ref([
  {
    image: "/icons/jori-proud-member/cscr-sccd.svg",
  },
  {
    image: "/icons/jori-proud-member/ciffaf.svg",
  },
  {
    image: "/icons/jori-proud-member/i-e-canada.svg",
  },
  {
    image: "/icons/jori-proud-member/wca.svg",
  },
  {
    image: "/icons/jori-proud-member/profit-500.svg",
  },
  {
    image: "/icons/jori-proud-member/core.svg",
  },
]);
</script>

<style lang="scss">
.proud-member {
  @apply mt-[100px];

  &__wrap {
    .swiper-wrapper {
    }
  }

  &__swiper {
    @apply mt-[25px];
  }

  &-pagination {
    @apply flex justify-center mt-[35px];

    .swiper-pagination-bullet {
      opacity: 1;
      @apply w-4 h-4 bg-transparent border-[1.5px] border-[#fff0] relative z-10;

      &:after {
        content: "";
        @apply block w-[5.25px] h-[5.25px] bg-[#696969] 
        rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 
        -translate-y-1/2;
      }

      &-active {
        @apply border-red;
        &:after {
          content: "";
          @apply w-[3.5px] h-[3.5px] bg-red;
        }
      }
    }
  }
}
</style>
