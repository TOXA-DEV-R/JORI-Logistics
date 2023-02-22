<template>
  <div>
    <h2
      class="text-5xl font-bold text-center text-[#222222] after:block after:w-[60px] after:h-[4px] after:bg-red after:rounded-[2px] flex flex-col items-center after:mt-5">
      {{ title }}
    </h2>
    <p
      v-if="des"
      class="text-lg font-normal text-[#555555] max-w-[634px] mx-auto text-center mt-[29.32px]">
      {{ des }}
    </p>
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
  },
});
</script>
