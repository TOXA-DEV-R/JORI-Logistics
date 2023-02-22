<template>
  <section class="hero">
    <div class="container">
      <div class="hero__wrap">
        <h1 class="hero__title">
          {{ $t("hero.title") }}
        </h1>
        <p class="hero__des">
          {{ $t("hero.des") }}
        </p>
        <button type="button" class="hero__btn">
          {{ $t("hero.btn") }}
        </button>
      </div>
    </div>
    <div class="hero__bg">
      <nuxt-img
        src="/images/hero/bg_01.jpg"
        alt="Image"
        class="w-full h-full object-cover" />
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  @apply min-h-[660px] relative z-0;

  &__bg {
    @apply absolute inset-0 -z-[1];
  }

  &__title {
    @apply pt-[181px] text-[50px] font-bold leading-[59px] 
    max-w-[723px] text-white;
  }

  &__des {
    @apply mt-[23px] text-xl font-normal text-black-10
     max-w-[404px];
  }

  &__btn {
    @apply bg-red h-[50px] rounded-[5px] px-[26px] 
    text-base font-bold text-white uppercase mt-8;
  }
}
</style>
