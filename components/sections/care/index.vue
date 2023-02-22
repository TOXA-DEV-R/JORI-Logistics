<template>
  <section class="care">
    <div class="container">
      <SharedTitle :title="$t('care.title')" :des="$t('care.des')" />
      <div class="care__wrap">
        <SectionsCareItem
          v-for="(item, indx) in list"
          :title="item.title"
          :des="item.des"
          :img-src="item.imgSrc"
          :key="indx" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const $t = useI18n().t;

const list = [
  {
    title: $t("care.customs_brokerage"),
    des: $t("care.customs_brokerage_des"),
    imgSrc: "/icons/care/customs_brokerage.svg",
  },
  {
    title: $t("care.freight_forwarding"),
    des: $t("care.freight_forwarding_des"),
    imgSrc: "/icons/care/freight_forwarding.svg",
  },
  {
    title: $t("care.trade_consulting"),
    des: $t("care.trade_consulting_des"),
    imgSrc: "/icons/care/trade_consulting.svg",
  },
  {
    title: $t("care.warehousing"),
    des: $t("care.warehousing_des"),
    imgSrc: "/icons/care/warehousing.svg",
  },
];
</script>

<style lang="scss">
.care {
  @apply pt-[100px];

  &__wrap {
    @apply grid grid-cols-4 gap-x-[17px] mt-14;
  }
}
</style>
