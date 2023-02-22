<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <nuxt-link to="#" class="header__brnad">
          <nuxt-img src="/icons/brand/brand-logo.svg" alt="Brand Logo" />
        </nuxt-link>
        <nav class="header__nav">
          <div class="header__menu">
            <nuxt-link class="header__link">
              {{ $t("header.main") }}
            </nuxt-link>
            <SwitchMenu />
            <nuxt-link class="header__link">
              {{ $t("header.portfolio") }}
            </nuxt-link>
            <nuxt-link class="header__link">
              {{ $t("header.about") }}
            </nuxt-link>
            <nuxt-link class="header__link">
              {{ $t("header.career") }}
            </nuxt-link>
            <nuxt-link class="header__link">
              {{ $t("header.contact") }}
            </nuxt-link>
          </div>

          <div class="space-x-[25px] flex items-center">
            <a
              href="tel:+77772717775"
              class="header__phone"
              style="font-feature-settings: 'pnum' on, 'lnum' on">
              <IconsPhone
                class="inline-flex bg-red w-[28.85px] h-[28.85px] rounded-full justify-center items-center" />
              <p class="ml-[7.93px]">+7 777 271 7775</p>
            </a>

            <div class="header__langs">
              <IconsEarth
                class="inline-flex bg-red w-[28.85px] h-[28.85px] rounded-full justify-center items-center" />
              <div class="ml-[7.15px]">
                <span class="header__lang"> kz </span>
                <span class="text-black">/</span>
                <span class="header__lang"> ru </span>
                <span class="text-black">/</span>
                <span class="header__lang"> en </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.header {
  @apply bg-white;

  &__wrap {
    @apply flex justify-between items-center pt-[17px] pb-[15px];
  }

  &__nav {
    @apply flex items-center;
  }

  &__lans {
    @apply flex items-center;
  }

  &__menu {
    @apply flex items-center space-x-[2.8125rem];
  }

  &__link {
    @apply text-base text-black font-medium capitalize;
  }

  &__phone {
    @apply flex items-center ml-[57px] text-lg leading-5 font-semibold text-black;
  }

  &__langs {
    @apply flex items-center;
  }

  &__lang {
    @apply text-base text-black font-medium uppercase;
  }
}
</style>
