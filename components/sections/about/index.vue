<template>
  <section class="about">
    <div class="container">
      <div class="about__wrap">
        <div class="about__img">
          <nuxt-img src="/images/about/img_01.jpg" alt="Image" />
        </div>
        <div class="max-w-[556px]">
          <h2 class="about__title">
            {{ $t("about.title") }}
          </h2>
          <p class="about__des">
            {{ $t("about.des") }}
          </p>
          <button class="about__btn">
            {{ $t("about.btn") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.about {
  @apply pt-[100px];

  &__wrap {
    @apply flex justify-between items-center;
  }

  &__img {
    @apply flex-none max-w-[540px] w-full;
  }

  &__title {
    @apply text-5xl font-bold text-[#222222] after:block after:w-[60px] after:h-[4px] after:bg-red after:rounded-[2px] flex flex-col after:mt-5;
  }

  &__des {
    @apply text-lg leading-7 font-normal text-[#555555] max-w-[664px] mt-[26px];
  }

  &__btn {
    @apply bg-red rounded-md h-[50px] px-11 mt-[29px] uppercase text-base font-bold text-white;
  }
}
</style>
