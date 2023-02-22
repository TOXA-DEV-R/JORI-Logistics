<template>
  <div class="care__item">
    <div class="h-[78px]">
      <nuxt-img :src="imgSrc" :alt="title" />
    </div>
    <h3 class="care__item-title">{{ title }}</h3>
    <p class="care__item-des">{{ des }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
.care__item {
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);

  @apply rounded-md px-[25px] pt-[57px] pb-[95px];

  &-title {
    @apply mt-[65px] after:block after:w-[60px] after:h-[2px]
     after:bg-red flex flex-col after:mt-5 text-xl font-bold
      text-black;
  }

  &-des {
    @apply mt-5 text-base leading-6 text-[#555555];
  }
}
</style>
