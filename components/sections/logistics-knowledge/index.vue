<template>
  <section class="logistics-knowledge">
    <div class="container">
      <SharedTitle
        :title="$t('logistics-knowledge.title')"
        :des="$t('logistics-knowledge.des')" />

      <div class="logistics-knowledge__wrap">
        <SectionsLogisticsKnowledgeItem
          v-for="item in list"
          :title="item.title"
          :date="item.date"
          :registry="item.registry"
          :img-src="item.imgSrc" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const $t = useI18n().t;

const list = [
  {
    title: $t("logistics-knowledge.US"),
    date: $t("logistics-knowledge.US_date"),
    imgSrc: "/images/jori-logistics/img_01.jpg",
    registry: $t("logistics-knowledge.registry"),
  },
  {
    title: $t("logistics-knowledge.CN"),
    date: $t("logistics-knowledge.CN_date"),
    imgSrc: "/images/jori-logistics/img_02.jpg",
    registry: $t("logistics-knowledge.registry"),
  },
  {
    title: $t("logistics-knowledge.update"),
    date: $t("logistics-knowledge.update_date"),
    imgSrc: "/images/jori-logistics/img_03.jpg",
    registry: $t("logistics-knowledge.registry"),
  },
];
</script>

<style lang="scss">
.logistics-knowledge {
  @apply mt-[100px];

  &__wrap {
    @apply grid grid-cols-3 gap-x-8 mt-14;
  }
}
</style>
