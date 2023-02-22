<template>
  <section class="contact">
    <div class="container">
      <div class="contact__wrap">
        <h2
          class="text-5xl font-bold text-white after:block after:w-[60px] after:h-[4px] after:bg-white after:rounded-[2px] flex flex-col after:mt-5">
          {{ $t("contact.title") }}
        </h2>
        <p
          v-html="$t('contact.des')"
          class="text-[22px] leading-[30px] font-normal text-white max-w-[664px] mt-[29.32px]"></p>

        <div>
          <form @submit.prevent="send" class="contact__form">
            <div class="flex space-x-[26.5px] w-full">
              <input
                class="contact__form-input"
                :placeholder="$t('form.name')"
                type="text" />
              <input
                class="contact__form-input"
                :placeholder="$t('form.phone')"
                type="text" />
            </div>
            <button class="contact__form-btn" type="submit">
              {{ $t("form.send") }}
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="contact__img">
      <nuxt-img
        class="w-full h-full object-cover"
        src="/images/contact/img_bg.jpg"
        alt="Image" />
    </div>
  </section>
</template>

<script setup lang="ts">
const send = () => {};
</script>

<style lang="scss">
.contact {
  @apply min-h-[644px] relative z-0 pt-[124px] mt-[100px];

  &__img {
    @apply absolute inset-0 -z-[1];
  }

  &__form {
    @apply max-w-[323px] mt-[15px];

    &-input {
      box-shadow: none;
      @apply bg-transparent border-0 border-white border-b 
      w-full h-[48px] text-base text-white font-normal;

      &::placeholder {
        @apply text-base text-white font-normal;
      }

      &:focus {
        box-shadow: none;
        border-color: white;
      }
    }

    &-btn {
      @apply mt-[42px] bg-red rounded-md h-[50px] 
      px-11 text-base font-bold text-white uppercase;
    }
  }
}
</style>
