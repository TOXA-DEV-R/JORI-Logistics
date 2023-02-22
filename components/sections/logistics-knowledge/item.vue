<template>
  <div class="logistics-knowledge__item">
    <div class="">
      <nuxt-img :src="imgSrc" :alt="title" />
    </div>
    <div
      class="pt-[27px] pl-[25px] pr-[29px] pb-[38px] flex flex-col justify-between h-full">
      <div>
        <h3
          class="text-xl font-bold text-black after:block after:w-[32px] after:h-[2px] after:bg-red flex flex-col after:mt-5">
          {{ title }}
        </h3>
        <p
          v-html="date"
          class="mt-5 text-base leading-6 font-normal text-[#555555]"></p>
      </div>

      <button
        type="button"
        class="mt-[27px] bg-red rounded-md w-full h-[46px] text-base font-bold text-white tracking-[0.1px]">
        {{ registry }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  registry: {
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
.logistics-knowledge {
  &__item {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    @apply rounded-md flex flex-col;
  }
}
</style>
