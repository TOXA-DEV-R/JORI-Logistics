<template>
  <section class="reviews">
    <div class="container">
      <div class="reviews__wrap">
        <h2
          class="text-5xl font-bold text-white after:block after:w-[60px] after:h-[4px] after:bg-white after:rounded-[2px] flex flex-col after:mt-5">
          {{ $t("reviews.title") }}
        </h2>
        <p
          v-html="$t('reviews.des')"
          class="text-[22px] leading-[30px] font-normal text-white max-w-[664px] mt-[41.32px]"></p>

        <div class="mt-[78px] flex gap-x-[22px] items-center">
          <IconsQuotationMark />

          <p
            class="text-base leading-[19px] font-bold text-white tracking-[0.3px]">
            Kaiser Z <br />
            Steelhaus Inc
          </p>
        </div>
      </div>
    </div>
    <div class="reviews__img">
      <nuxt-img
        class="w-full h-full object-cover"
        src="/images/reviews/img_bg.jpg"
        alt="Image" />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.reviews {
  @apply min-h-[644px] relative z-0 pt-[124px] mt-[100px];

  &__img {
    @apply absolute inset-0 -z-[1];
  }
}
</style>
